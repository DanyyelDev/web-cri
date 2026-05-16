import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }   from './app.component';
import { HomeComponent }  from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SafeUrlPipe }    from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,      // ← estaba faltando
    NavbarComponent,
    FooterComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,       // ← para *ngFor, *ngIf, async pipe
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
