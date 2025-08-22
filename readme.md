<p align="right">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-121013?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages Badge" />
  <img src="https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge" alt="License Badge" />
</p>

# SF-JS-Developer-I-Prep

## 🌟 Descripción
SF-JS-Developer-I-Prep es una aplicación web interactiva diseñada para la preparación del examen de certificación SF JavaScript Developer I. La plataforma ofrece un entorno de práctica con cuestionarios y simulaciones que imitan las condiciones del examen real. Para superar la limitación de no poder usar una base de datos en GitHub Pages, el proyecto simula un servidor JSON mediante funciones que devuelven arrays de objetos con las preguntas separadas por categoría.

## 🚀 Funcionalidades Clave
- **Simulación de Examen**: Diferentes modos para probar tus conocimientos, incluyendo un temporizador configurable.
- **Banco de Preguntas Dinámico**: Preguntas y respuestas cargadas dinámicamente para una experiencia de estudio variada.
- **Comentarios Detallados**: En caso de respuestas incorrectas, la aplicación proporciona explicaciones para reforzar el aprendizaje.
- **Despliegue Sencillo**: Disponible en GitHub Pages para acceso directo desde cualquier navegador.

## ⚙️ Tecnologías
Este proyecto está construido con:
- **Vite**: Herramienta de construcción rápida que optimiza el flujo de desarrollo.
- **JavaScript**: El lenguaje principal para toda la lógica de la aplicación.
- **HTML & CSS**: Para la estructura y el estilo visual de la interfaz.

## ⬇️ Instalación y Uso
Para ejecutar el proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/FrostyValue/testjs-app.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd testjs-app
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación se abrirá en tu navegador en `http://localhost:5173`.

## 📂 Estructura del Proyecto
La organización del código es simple e intuitiva:

```
📦 testjs-app/
├── 📂 public/
│   └── 📂 images/
├── 📂 src/
│   ├── 📂 data/        # Archivos que simulan la API de preguntas
│   ├── 📂 scripts/     # Lógica de la aplicación
│   └── 📂 styles/      # Hojas de estilo
├── 📄 .gitignore
├── 📄 index.html
├── 📄 package.json
├── 📄 README.md
├── 📄 vite.config.js
└── 📄 ...otros archivos
```

## 🌐 En Vivo
Puedes acceder a la versión desplegada en GitHub Pages en la siguiente URL:

[https://frostyvalue.github.io/SJ-JS-Developer-I-Prep/](https://frostyvalue.github.io/SJ-JS-Developer-I-Prep/)

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras un error, tienes una sugerencia o quieres añadir nuevas preguntas, por favor, abre un *issue* o un *pull request*.

## 📜 Licencia
Este proyecto se distribuye bajo la Licencia Pública General GNU v3.0. Para más detalles, consulta el archivo `LICENSE` en el repositorio.
