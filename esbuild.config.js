import { build } from 'esbuild';
import { readdirSync } from 'fs';
import { join } from 'path';

// Obtener todos los archivos JavaScript en la carpeta 'dist'
const distDir = 'dist';
const entryPoints = readdirSync(distDir)
  .filter(file => file.endsWith('.js'))
  .map(file => join(distDir, file));

build({
  entryPoints: entryPoints,
  bundle: true,
  minify: true,
  outdir: 'dist', // Carpeta de salida
}).catch(() => process.exit(1));