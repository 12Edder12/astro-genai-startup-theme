# Fase de construcción
FROM node:20-alpine AS build
WORKDIR /app

# Definir argumentos de construcción para las variables de entorno PUBLIC_
# Astro necesita estas variables durante el tiempo de construcción para inyectarlas en el JS del cliente.
ARG PUBLIC_CORREO_EMAIL
ARG PUBLIC_EMAIL_COOLDOWN_MINUTES

# Convertir argumentos en variables de entorno para el proceso de build
ENV PUBLIC_CORREO_EMAIL=$PUBLIC_CORREO_EMAIL
ENV PUBLIC_EMAIL_COOLDOWN_MINUTES=$PUBLIC_EMAIL_COOLDOWN_MINUTES

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos y construir el sitio
COPY . .
RUN npm run build

# Fase de producción con Nginx
FROM nginx:alpine

# Copiar los archivos estáticos generados por Astro
COPY --from=build /app/dist /usr/share/nginx/html

# Configuración opcional: Copiar un archivo de configuración de Nginx si necesitas SPA routing (no parece ser el caso aquí)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
