# 🚀 Portafolio Fullstack Developer

Un portafolio moderno y atractivo creado con React + Vite, TypeScript, Tailwind CSS y Framer Motion. Diseñado para mostrar proyectos, habilidades y experiencia de un desarrollador fullstack.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y animaciones suaves
- **Modo Oscuro/Claro**: Toggle entre temas claro y oscuro
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Animaciones Fluidas**: Implementadas con Framer Motion para una experiencia interactiva
- **Formulario de Contacto**: Con validación usando React Hook Form y Zod
- **Navegación Suave**: Scroll suave entre secciones
- **Tecnologías Modernas**: React 19, TypeScript, Tailwind CSS 4

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19, TypeScript, Vite
- **Estilos**: Tailwind CSS 4, PostCSS
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form, Zod
- **Iconos**: Lucide React
- **Fuentes**: Google Fonts (Inter)

## 📁 Estructura del Proyecto

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Barra de navegación con toggle de tema
│   │   ├── Hero.tsx        # Sección principal con introducción
│   │   ├── Projects.tsx    # Showcase de proyectos
│   │   ├── Skills.tsx      # Habilidades técnicas con barras de progreso
│   │   └── Contact.tsx     # Formulario de contacto
│   ├── lib/
│   │   └── utils.ts        # Utilidades (cn function)
│   ├── App.tsx             # Componente principal
│   ├── index.css           # Estilos globales
│   └── main.tsx            # Punto de entrada
├── public/                 # Archivos estáticos
├── tailwind.config.js      # Configuración de Tailwind
├── postcss.config.js       # Configuración de PostCSS
└── package.json            # Dependencias y scripts
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd portfolio-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

### Scripts disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🎨 Personalización

### Colores y Tema
Los colores principales se pueden modificar en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Personaliza los colores aquí
    }
  }
}
```

### Contenido Personal
Actualiza la información personal en cada componente:

1. **Hero.tsx**: Cambia el nombre, descripción y tecnologías
2. **Projects.tsx**: Añade tus proyectos reales con imágenes y enlaces
3. **Skills.tsx**: Actualiza tus habilidades y niveles de experiencia
4. **Contact.tsx**: Modifica la información de contacto

### Imágenes
- Reemplaza la imagen de perfil en `Hero.tsx`
- Actualiza las imágenes de proyectos con capturas reales
- Todas las imágenes usan placeholders que puedes reemplazar

## 📱 Secciones del Portafolio

### 1. Hero Section
- Imagen de perfil con animación
- Introducción personal
- Tecnologías principales
- Botones de acción (Ver Proyectos, Contactar)
- Enlaces a redes sociales

### 2. Proyectos
- **Proyectos Destacados**: Grid de 2 columnas con información detallada
- **Otros Proyectos**: Grid de 3 columnas más compacto
- Tecnologías utilizadas en cada proyecto
- Enlaces a demo y código fuente
- Imágenes con efecto hover

### 3. Habilidades
- **6 Categorías**: Frontend, Backend, Database, Mobile, DevOps, Design
- Barras de progreso animadas
- Iconos representativos para cada categoría
- Tecnologías adicionales en badges
- Estadísticas de experiencia

### 4. Contacto
- Formulario con validación completa
- Información de contacto
- Razones para trabajar contigo
- Estados de envío (loading, success, error)

## 🎯 Características Técnicas

### Animaciones
- **Framer Motion**: Animaciones de entrada, hover y scroll
- **Transiciones suaves**: Entre modo claro/oscuro
- **Efectos de hover**: En tarjetas, botones y enlaces
- **Scroll animations**: Elementos aparecen al hacer scroll

### Responsividad
- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm, md, lg, xl
- **Navegación móvil**: Menú hamburguesa
- **Imágenes adaptativas**: Se ajustan a diferentes tamaños

### Accesibilidad
- **Etiquetas semánticas**: HTML5 semántico
- **Alt text**: En todas las imágenes
- **Focus states**: Estados de foco visibles
- **ARIA labels**: Para elementos interactivos

## 🔧 Configuración Avanzada

### Variables CSS Personalizadas
Puedes añadir variables CSS en `index.css`:

```css
:root {
  --custom-color: #your-color;
}
```

### Nuevas Animaciones
Añade animaciones personalizadas en `tailwind.config.js`:

```javascript
animation: {
  'custom-animation': 'customKeyframes 2s ease-in-out infinite',
}
```

## 📦 Dependencias Principales

```json
{
  "react": "^19.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^4.1.6",
  "framer-motion": "^12.23.12",
  "react-hook-form": "^7.62.0",
  "zod": "^4.0.15",
  "lucide-react": "^0.536.0"
}
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Vite
3. Deploy automático en cada push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Sube la carpeta dist a tu repositorio gh-pages
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: tu@email.com
- **LinkedIn**: [Tu LinkedIn](https://linkedin.com/in/tu-perfil)
- **GitHub**: [Tu GitHub](https://github.com/tu-usuario)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
