# 🔗 Sistema de Enlaces Minimalista

Un sistema elegante y minimalista para organizar y mostrar enlaces importantes, construido con **Astro** y **Tailwind CSS**.

![Sistema de Enlaces](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop)

## ✨ Características

- 🎨 **Diseño minimalista** con colores neutros y tipografía limpia
- 📱 **Totalmente responsive** - se adapta a cualquier dispositivo
- ⚡ **Súper rápido** - construido con Astro para máximo rendimiento
- 🎯 **Fácil de personalizar** - modifica colores, fuentes y contenido fácilmente
- 🔗 **Sistema de enlaces organizado** - agrupa enlaces por categorías
- 🖼️ **Imágenes de portada** - cada sección tiene su imagen representativa
- 🎭 **Iconos personalizables** - añade emojis o iconos a tus enlaces

## 🚀 Demo en vivo

[Ver demo en GitHub Pages](https://bemtorres.github.io/social-link-free)

## 🛠️ Tecnologías utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario
- **[GitHub Pages](https://pages.github.com/)** - Hosting gratuito
- **[GitHub Actions](https://github.com/features/actions)** - Despliegue automático

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   Ve a `http://localhost:4321`

## 🎨 Personalización

### Modificar contenido

Edita el archivo `src/pages/index.astro` para cambiar:

- **Título principal**: Cambia "Enlaces Esenciales"
- **Descripción**: Modifica el texto descriptivo
- **Tarjetas de enlaces**: Añade, edita o elimina secciones
- **Enlaces**: Actualiza URLs, nombres e iconos

### Cambiar colores

Modifica las clases de Tailwind en los archivos:
- `src/layouts/Layout.astro` - Colores generales
- `src/components/LinkCard.astro` - Colores de las tarjetas

### Añadir nuevas secciones

```javascript
{
  title: "Mi Nueva Sección",
  description: "Descripción de la sección",
  image: "https://ejemplo.com/imagen.jpg",
  links: [
    { name: "Enlace 1", url: "https://ejemplo.com", icon: "🔗" },
    { name: "Enlace 2", url: "https://otro-ejemplo.com", icon: "⭐" }
  ]
}
```

## 📁 Estructura del proyecto

```
├── src/
│   ├── components/
│   │   └── LinkCard.astro      # Componente de tarjeta de enlaces
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal
│   └── pages/
│       └── index.astro         # Página principal
├── public/
│   └── favicon.svg             # Icono del sitio
├── .github/
│   └── workflows/
│       └── deploy.yml          # Configuración de despliegue
├── astro.config.mjs            # Configuración de Astro
├── tailwind.config.js          # Configuración de Tailwind
└── package.json                # Dependencias del proyecto
```

## 🚀 Despliegue

### GitHub Pages (Automático)

1. Haz fork de este repositorio
2. Ve a **Settings** → **Pages**
3. Selecciona **"GitHub Actions"** como fuente
4. El despliegue será automático en cada push

### Otros proveedores

- **Netlify**: Conecta tu repositorio de GitHub
- **Vercel**: Importa el proyecto desde GitHub
- **Cloudflare Pages**: Conecta con GitHub

## 🎯 Uso recomendado

Este sistema es perfecto para:

- **Portfolios personales** - Enlaces a proyectos y redes sociales
- **Recursos de equipo** - Herramientas y enlaces importantes
- **Páginas de inicio** - Acceso rápido a servicios frecuentes
- **Landing pages** - Presentación de productos o servicios
- **Directorios de enlaces** - Organización de recursos por categorías

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el proyecto:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [Astro](https://astro.build/) por el framework increíble
- [Tailwind CSS](https://tailwindcss.com/) por los estilos utilitarios
- [Unsplash](https://unsplash.com/) por las imágenes de ejemplo
- [GitHub](https://github.com/) por el hosting gratuito

## 📞 Contacto

Si tienes preguntas o sugerencias, no dudes en:

- Abrir un [issue](https://github.com/tu-usuario/tu-repositorio/issues)
- Contactarme en [Twitter](https://twitter.com/tu-usuario)
- Enviar un email a tu-email@ejemplo.com

---

⭐ **¡Dale una estrella al proyecto si te gusta!** ⭐
