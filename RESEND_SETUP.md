# 📧 Setup Resend para Newsletter

## Pasos para obtener tu API Key REAL:

1. **Ir a https://resend.com**
2. **Registrarse (es gratuito)**
3. **Ir a Dashboard → API Keys**
4. **Copiar la key que comienza con `re_`**
5. **Pegar en `.env.local`:**
   ```
   RESEND_API_KEY=re_TUAPIKEY_AQUI
   ```

## Características:

✅ 100 emails gratis/día  
✅ Perfect para portafolios  
✅ Emails elegantes y profesionales  
✅ Webhooks para tracking  

## Cómo funciona ahora:

1. Usuario pone su email en el newsletter
2. Se envía a `/api/newsletter`
3. Resend procesa y envía el email
4. Usuario recibe confirmación con HTML bonito

## Para Desarrollo Local (Sin API Key):

Si quieres testear sin key real, puedes usar la sandbox de Resend:
- Email FROM: `onboarding@resend.dev` (siempre funciona)
- Envías emails a cualquier dirección
- Son reales pero solo en la sandbox

## Después de actualizar la API Key:

```bash
# Rebuilda el proyecto
npm run build

# Reinicia el servidor
npm run start
```

¡Listo! Tus usuarios recibirán emails profesionales. 🚀
