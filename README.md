# Portafolio Personal - Ingeniería Mecatrónica

¡Bienvenido al repositorio de mi portafolio personal! Soy Jordi, estudiante de la licenciatura en Ingeniería Mecatrónica en la Universidad Iberoamericana Puebla.

Este sitio web sirve para mostrar mi trayectoria, habilidades técnicas (Robótica, Electrónica, Diseño Mecánico, Programación) y proyectos destacados.

## 🚀 Tecnologías Usadas

El sitio está construido completamente desde cero para asegurar un rendimiento óptimo y un diseño completamente personalizado con estética "cyber/tech":

- **HTML5**: Estructura semántica.
- **CSS3 (Vanilla)**: Grid, Flexbox, variables CSS, animaciones personalizadas y diseño "glassmorphism".
- **JavaScript (Vanilla)**: Interacciones, menús adaptables y el uso del API `IntersectionObserver` para animaciones asíncronas al hacer scroll.

## 📁 Estructura del Proyecto

```
/
├── assets/         # Imágenes, iconos y otros archivos multimedia
│   └── images/     # Fotos de proyectos, hero, etc.
├── css/
│   └── styles.css  # Todo el estilizado del sitio web
├── js/
│   └── main.js     # Lógica de las animaciones y formularios
├── index.html      # Página principal
└── README.md       # Este archivo
```

## 🛠️ Cómo Inicializar tu Repositorio de Github

Como vi que no tenías Git instalado, aquí tienes los pasos para subir esto a GitHub:

### Opción 1: Usando GitHub Desktop (Modo Fácil)

1. Descarga e instala [GitHub Desktop](https://desktop.github.com/).
2. Inicia sesión con tu cuenta de GitHub.
3. Ve a `File > Add Local Repository...` y selecciona la carpeta de tu sitio web: `C:\Users\jordi\OneDrive\Escritorio\Página_web`.
4. El programa te dirá que la carpeta no parece un repositorio de Git, y te ofrecerá crear uno. Dale a **"create a repository"**.
5. Pon un comentario en el cuadro de "Summary" abajo a la izquierda (ej. "Initial commit") y haz click en el botón azul **"Commit to master"**.
6. Arriba haz click en **"Publish repository"**. Elige un nombre, decide si quieres que sea público (asegúrate de que lo sea si quieres usar Github Pages) y dale a publicar.

### Opción 2: Usando Git en Consola

1. Descarga e instala [Git para Windows](https://gitforwindows.org/).
2. Abre la consola ("Git Bash" o "PowerShell") en la carpeta de tu proyecto.
3. Ejecuta estos comandos:
   ```bash
   git init
   git add .
   git commit -m "Commit inicial: Portafolio estructurado"
   git branch -M main
   ```
4. Ve a github.com, crea un repositorio vacío.
5. Copia las dos líneas que te dan al final, que se ven parecidas a esto:
   ```bash
   git remote add origin https://github.com/tu-usuario/nombre-del-repo.git
   git push -u origin main
   ```

## 🌐 Cómo desplegar tu sitio web (Hosting gratis con GitHub Pages)

Una vez que tu código esté en tu repositorio de Github público:

1. Ve a la página de tu repositorio en GitHub web.
2. Haz clic en la pestaña **Settings** (Configuración).
3. En el menú de la izquierda, baja y haz clic en **Pages**.
4. Bajo la sección "Build and deployment" > "Source", asegúrate de que diga "Deploy from a branch".
5. Bajo la sección "Branch", selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
6. Haz clic en **Save**. En un par de minutos, tu sitio web estará disponible en algo como `https://[tu-usuario].github.io/[nombre-del-repo]`.

---

**NOTA:** No olvides reemplazar las imágenes (como foto de perfil en el hero, y las fotos del proyecto) directamente en la carpeta `assets/images` manteniendo sus nombres, o bien cambiándolas en el archivo `index.html`.
