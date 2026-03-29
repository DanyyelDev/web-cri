# Iglesia Cristiana C.R.I — Sitio Web

Aplicación web Angular para la Iglesia Cristiana C.R.I.

## Tecnologías
- **Angular 17** (Standalone Components, Signals, Control Flow)
- **SCSS** con variables CSS personalizadas
- **Font Awesome 6** (iconos)
- **Google Fonts** — Montserrat + Playfair Display

## Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/         # Barra de navegación fija con menú mobile
│   │   └── footer/         # Pie de página con links y redes sociales
│   ├── models/
│   │   └── predica.model.ts
│   ├── pages/
│   │   ├── home/           # Página principal con hero, prédicas y CTA YouTube
│   │   ├── predicas/       # Galería con filtros por categoría y búsqueda + modal
│   │   ├── nosotros/       # Historia, misión, visión, ministerios
│   │   └── contacto/       # Formulario + horarios + redes sociales
│   ├── pipes/
│   │   └── safe-url.pipe.ts
│   ├── services/
│   │   └── predicas.service.ts   # Datos y utilidades de prédicas
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── styles.scss             # Estilos globales y variables CSS
└── index.html
```

## Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
ng serve
# Abrir http://localhost:4200

# 3. Build producción
ng build
```

## Funcionalidades

- ✅ Hero con video destacado enlazado a YouTube
- ✅ Sección de prédicas recientes en home
- ✅ Página de prédicas con filtros por categoría (Domingo, Miércoles, Jóvenes, etc.)
- ✅ Búsqueda en tiempo real por título, pastor o tags
- ✅ Modal de detalle con enlace directo a YouTube
- ✅ Página Nosotros con historia, misión, visión y ministerios
- ✅ Página Contacto con formulario y horarios
- ✅ Navbar responsive con menú hamburguesa
- ✅ Footer completo con links, horarios y redes sociales
- ✅ Diseño totalmente responsive (mobile-first)
- ✅ Lazy loading de rutas (code splitting)
- ✅ Colores: azul marino + dorado (paleta cristiana elegante)

## Canal YouTube
**@IglesiaCristianaC.R.I**
https://www.youtube.com/@IglesiaCristianaC.R.I

## Personalización
Para agregar/editar prédicas, modifica el array `predicas` en:
`src/app/services/predicas.service.ts`

Cada prédica necesita el **ID del video de YouTube** (lo encuentras en la URL del video: `youtube.com/watch?v=ESTE_ES_EL_ID`).
