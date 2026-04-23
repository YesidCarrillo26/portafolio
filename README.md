# Mi Portafolio React

Estructura base para portafolio en React con Vite.

## Setup

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Estructura

```
src/
├── components/      # Navbar, Hero, Projects, Footer
├── pages/          # Home (main page)
├── data/           # Array proyectos
├── styles/         # CSS global
└── App.jsx         # Router principal
```

## Próximos pasos

1. **Actualiza datos:**
   - `src/data/projects.js` — agrega tus proyectos
   - `src/pages/Home.jsx` — cambia nombre, email
   - `src/components/Navbar.jsx` — ajusta links

2. **Styling:**
   - `src/styles/globals.css` — personaliza colores

3. **Deploy:**
   - Vercel: `vercel`
   - Netlify: conecta GitHub

## Conceptos React incluidos

- ✅ Componentes funcionales
- ✅ Props
- ✅ .map() para listas
- ✅ React Router (navegación)
- ✅ CSS modules
- ✅ Responsive design

## Tips repaso

- Lee cada componente lentamente
- Modifica valores, ve los cambios
- Abre DevTools (F12) y inspecciona
- Cambia `projects.js` para entender `.map()`
