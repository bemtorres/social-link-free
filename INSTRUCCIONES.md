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

### 2. Conectar con GitHub
```bash
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git branch -M main
git push -u origin main
```

### 3. Actualizar configuración
Después de crear el repositorio, edita `astro.config.mjs` y cambia:
```javascript
site: 'https://TU-USUARIO.github.io',
base: '/TU-REPOSITORIO',
```

### 4. Configurar GitHub Pages
1. Ve a Settings → Pages en tu repositorio
2. Source: "GitHub Actions"
3. El despliegue será automático

## URL final
Tu sitio estará disponible en:
`https://TU-USUARIO.github.io/TU-REPOSITORIO`

## Archivos importantes creados
- `.github/workflows/deploy.yml` - Despliegue automático
- `astro.config.mjs` - Configuración de Astro
- `.gitignore` - Archivos ignorados por Git
