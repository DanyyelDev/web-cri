import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Predica, CategoriaPrediaca } from '../models/predica.model';

interface PlaylistConfig {
  id: string;
  categoria: CategoriaPrediaca;
}

interface YtPlaylistResponse {
  items: YtPlaylistItem[];
}

interface YtPlaylistItem {
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      maxres?:   { url: string };
      standard?: { url: string };
      high?:     { url: string };
      medium?:   { url: string };
    };
  };
  contentDetails: {
    videoId: string;
    videoPublishedAt?: string;
  };
}

@Injectable({ providedIn: 'root' })
export class YoutubeService {

  private readonly API = 'https://www.googleapis.com/youtube/v3/playlistItems';

  /** Playlists reales del canal @IglesiaCristianaC.R.I */
  readonly playlists: PlaylistConfig[] = [
    { id: 'PLOoFBNXsG7X7kIBjUFJw3oIgb_tqP4Ex-', categoria: 'Palabra de Poder'       },
    { id: 'PLOoFBNXsG7X7j2OnE7efZOPTWBYpmmETj', categoria: 'Conferencia Financiera'  },
    { id: 'PLOoFBNXsG7X7vQ3076IfmWftYj4ai3bLf', categoria: 'Devocionales'            },
    { id: 'PLOoFBNXsG7X4hDF5waYh1cMotvroEWdJ8', categoria: 'Escuela de Diaconado'    },
    { id: 'PLOoFBNXsG7X5AymcEppr0PliAGtdZ956J', categoria: 'Escuela de Teología'     },
    { id: 'PLOoFBNXsG7X4SXKjrQDW3mrm0UtNFeUHr', categoria: 'Reunión de Oración'      },
  ];

  constructor(private http: HttpClient) {}

  fetchPlaylist(playlistId: string, categoria: CategoriaPrediaca, maxResults = 20): Observable<Predica[]> {
    return this.http.get<YtPlaylistResponse>(this.API, {
      params: {
        part:        'snippet,contentDetails',
        playlistId,
        maxResults:  String(maxResults),
        key:         environment.youtubeApiKey,
      }
    }).pipe(
      map(r => (r.items ?? [])
        .filter(i => !!i.contentDetails?.videoId)
        .map(i => this.mapItem(i, categoria))
      )
    );
  }

  fetchAll(maxPerPlaylist = 20): Observable<Predica[]> {
    const requests = this.playlists.map(p =>
      this.fetchPlaylist(p.id, p.categoria, maxPerPlaylist)
    );
    return forkJoin(requests).pipe(
      map(results =>
        results.flat().sort((a, b) =>
          new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
        )
      )
    );
  }

  private mapItem(item: YtPlaylistItem, categoria: CategoriaPrediaca): Predica {
    const videoId  = item.contentDetails.videoId;
    const fecha    = (item.contentDetails.videoPublishedAt ?? item.snippet.publishedAt)
                       .split('T')[0];
    const thumbnail =
      item.snippet.thumbnails.maxres?.url   ||
      item.snippet.thumbnails.standard?.url ||
      item.snippet.thumbnails.high?.url     ||
      item.snippet.thumbnails.medium?.url   ||
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return {
      id:          videoId,
      videoId,
      titulo:      this.cleanTitle(item.snippet.title),
      pastor:      this.extractPastor(item.snippet.title),
      fecha,
      descripcion: (item.snippet.description || '').split('\n')[0].slice(0, 200),
      categoria,
      thumbnail,
    };
  }

  /** Extrae el título limpio antes de " | " o " - Pr." */
  private cleanTitle(raw: string): string {
    return raw.split(' | ')[0].split(' - Pr.')[0].split(' - P.')[0].trim();
  }

  /** Detecta si el título menciona a Ruth para el nombre del pastor */
  private extractPastor(title: string): string {
    return title.toUpperCase().includes('RUTH')
      ? 'Pr. Eduar y Ruth Castañeda'
      : 'Pr. Eduar Castañeda';
  }
}
