# 🚀 Publicar en Vercel

## Opción 1: Publicar desde GitHub (RECOMENDADO - 1 minuto)

### Paso 1: Asegúrate que tu código está en GitHub
```bash
git push origin main
```

### Paso 2: Ir a https://vercel.com
1. Haz login con tu cuenta de GitHub
2. Haz click en "New Project"
3. Busca tu repositorio: `nextjs-portfolio-website-template`
4. Selecciona y continúa

### Paso 3: Configurar variables de entorno
1. En la sección "Environment Variables", agrega:
   ```
   RESEND_API_KEY=re_TU_API_KEY_AQUI
   ```
   (Consigue tu key en https://resend.com)

### Paso 4: Deploy
1. Haz click en "Deploy"
2. ¡Listo! Tu sitio estará en `https://tu-proyecto.vercel.app`

---

## Opción 2: Publicar con CLI de Vercel (Alternativa)

### Paso 1: Instalar Vercel CLI
```bash
npm i -g vercel
```

### Paso 2: Login
```bash
vercel login
```

### Paso 3: Deploy
```bash
vercel --prod
```

Sigue las instrucciones y ¡listo!

---

## Configuración Post-Deploy

Después de que Vercel deploya tu sitio:

### 1. Agregar tu dominio personalizado (Opcional)
- Ve a Project Settings → Domains
- Agrega tu dominio (ej: noe.dev)
- Vercel te dará instrucciones DNS

### 2. Analytics y Monitoreo
- Vercel incluye analytics automáticamente
- Ve a Analytics para ver visitantes, performance, etc.

### 3. Variables de Entorno
- Ve a Settings → Environment Variables
- Agrega tu `RESEND_API_KEY` si no lo hiciste en el deploy

---

## Troubleshooting

**Error: Build fails**
→ Asegúrate que el build local funciona:
```bash
npm run build
npm run start
```

**Error: API key inválida**
→ Verifica tu RESEND_API_KEY en Vercel Settings

**Error: Port already in use**
→ Vercel maneja puertos automáticamente, no es problema

---

## Tu URL de Vercel
Después de deployar, tu sitio estará en:
```
https://nextjs-portfolio-website-template.vercel.app
```

O con tu dominio personalizado:
```
https://noe.dev
```

¡Así de fácil! 🎉
