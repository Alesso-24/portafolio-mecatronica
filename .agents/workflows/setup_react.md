// turbo

1. Create a "legacy" directory to back up the current HTML/CSS/JS site.
   // turbo
2. Move index.html, css/, js/, and assets/ into the "legacy" directory.
   // turbo
3. Run `npm create vite@latest . -- --template react` in the root directory (Página_web). Ensure the directory is empty enough for Vite to run, forcing if necessary via standard flags or manual deletion of conflicting files after backup.
   // turbo
4. Run `npm install` to install React dependencies.
   // turbo
5. Install UI dependencies: `npm install -D tailwindcss postcss autoprefixer`
   // turbo
6. Initialize Tailwind: `npx tailwindcss init -p`
   // turbo
7. Install animation and 3D dependencies: `npm install gsap @react-three/fiber @react-three/drei three @studio-freight/react-lenis lucide-react`
