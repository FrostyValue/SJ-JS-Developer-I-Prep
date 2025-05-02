# TestJS App

## Descripción

TestJS App es una aplicación web interactiva desarrollada con **Vite** y **JavaScript**. Su propósito es proporcionar una plataforma para realizar cuestionarios y pruebas interactivas, que sirva como estudio para tomar el examen **"Salesforce JavaScript Developer I"**, simulando un servidor JSON mediante funciones que retornan arrays de objetos, debido a las limitaciones de GitHub Pages.

## Tecnologías

- **Vite**: Herramienta de construcción rápida para proyectos modernos.
- **JavaScript**: Lenguaje de programación principal.
- **HTML & CSS**: Estructura y estilo de la aplicación.
- **GitHub Pages**: Plataforma de despliegue estático de la aplicación.

## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/FrostyValue/testjs-app.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd testsf-app
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173` en tu navegador.

## Estructura del Proyecto

```plaintext
📦 public/
├── 📂 images/           # Carpeta para imágenes
│   └── 📄 javascript.svg  # Icono de JavaScript
📦 src/
├── 📂 data/             # Archivos de datos (simulados mediante funciones)
│   ├── 📄 qAP5.js
│   ├── 📄 qBE3.js
│   ├── 📄 qDEH4.js
│   ├── 📄 qOFC2.js
│   ├── 📄 qSS6.js
│   ├── 📄 qTST7.js
│   └── 📄 qVTC1.js
├── 📂 scripts/          # Código JavaScript principal
│   └── 📄 index.js
├── 📂 styles/           # Archivos de estilo CSS
│   └── 📄 index.css
📄 vite.config.js        # Configuración de Vite
📄 package.json          # Información del proyecto y dependencias
📄 README.md             # Documentación del proyecto
```

## Funcionalidades

- Sistema de cuestionarios con preguntas cargadas dinámicamente.
- Temporizador configurable para cada nivel.
- Distintos modos que "simulan" el examen con limitaciones de tiempo.
- En caso de fallar la pregunta, devuelve la explicación en ciertos modos.

## Despliegue

Este proyecto está desplegado en **GitHub Pages**. Puedes verlo en la siguiente URL:

```
https://frostyvalue.github.io/testjs-app/
```

## Notas

- Si deseas realizar un cambio en la versión, puedes hacerlo con el siguiente comando de `npm`:

  ```bash
  npm version minor    # Para incrementar la versión menor automáticamente
  ```


## Contribuciones

Si tienes sugerencias o encuentras algún error, siéntete libre de abrir un **issue** o hacer un **pull request**.

## Licencia

Este proyecto está licenciado bajo la **Licencia Pública General GNU (GPL)** v3.0. Puedes ver el texto completo de la licencia en el archivo [LICENSE](./LICENSE).
