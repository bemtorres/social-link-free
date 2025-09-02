# 🚀 Instrucciones para GitHub Pages

## Pasos completados ✅
- [x] Configuración de Astro para GitHub Pages
- [x] GitHub Actions workflow creado
- [x] Repositorio Git inicializado
- [x] Archivos commitados

## Pasos pendientes 📋

### 1. Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombra tu repositorio (ej: `link-system`)
3. **NO** marques "Initialize with README"
4. Crea el repositorio

### 3. Actualizar configuración
Después de crear el repositorio, edita `astro.config.mjs` y cambia:
```javascript
site: 'https://bemtorres.github.io',
base: '/social-link-free',
```

### 4. Configurar GitHub Pages
1. Ve a Settings → Pages en tu repositorio
2. Source: "GitHub Actions"
3. El despliegue será automático

## URL final
Tu sitio estará disponible en:
`https://bemtorres.github.io/social-link-free`

## Archivos importantes creados
- `.github/workflows/deploy.yml` - Despliegue automático
- `astro.config.mjs` - Configuración de Astro
- `.gitignore` - Archivos ignorados por Git
