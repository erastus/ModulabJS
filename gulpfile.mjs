import gulp from "gulp";
import zip from "gulp-zip";
import path from "path";
import fs from "fs";
import { spawn } from "child_process";
import glob from "glob";

// Paths reutilizables
const paths = {
  dist: 'dist',
  build: 'release',
  out: 'out'
};

export function compile(cb) {
  const filePathArgIndex = process.argv.indexOf("--file");
  if (filePathArgIndex === -1 || !process.argv[filePathArgIndex + 1]) {
    console.error("Debes pasar un archivo con --file");
    return cb(new Error("Archivo no especificado"));
  }

  const file = path.resolve(process.argv[filePathArgIndex + 1]);
  if (!fs.existsSync(file)) {
    console.error(`El archivo no existe: ${file}`);
    return cb(new Error("Archivo no encontrado"));
  }

  const tsconfigPath = path.join(process.cwd(), ".vscode", "tsconfig.single.json");
  const relativeFile = path.relative(path.join(process.cwd(), ".vscode"), file).replace(/\\/g, "/");

  const tsconfig = {
    extends: "../tsconfig.json",
    include: [relativeFile]
  };

  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));

  const isWindows = process.platform === "win32";
  const tscPath = path.join("node_modules", ".bin", "tsc" + (isWindows ? ".cmd" : ""));

  const tsc = spawn(tscPath, ["--project", tsconfigPath], { stdio: "inherit" });

  tsc.on("exit", (code) => {
    try {
      fs.unlinkSync(tsconfigPath);
    } catch (err) {
      console.warn("No se pudo eliminar tsconfig.single.json:", err.message);
    }

    if (code === 0) {
      console.log("Compilación exitosa.");
      cb();
    } else {
      console.error("Falló la compilación.");
      cb(new Error("Compilación fallida"));
    }
  });
}

export function compress(cb) {
  glob(`${paths.dist}/*.js`, (err, files) => {
    if (err || files.length === 0) {
      console.error("No se encontraron archivos .js");
      return cb(new Error("Sin archivos"));
    }

    const latestFile = files
      .map(file => ({ file, mtime: fs.statSync(file).mtime }))
      .sort((a, b) => b.mtime - a.mtime)[0].file;

    const readFile = fs.readFileSync(latestFile, 'utf-8');
    const versionMatch = readFile.match(/@version\s+([^\s]+)/);
    const version = versionMatch ? versionMatch[1] : 'unknown';

    console.log(`Empaquetando: ${latestFile} \nversion: ${version}`);

    const fileName = `${path.basename(latestFile, path.extname(latestFile))}_v${version}.zip`;

    return gulp
      .src(latestFile, { base: paths.dist })
      .pipe(zip(fileName))
      .pipe(gulp.dest(paths.dist));
  });
}

export default gulp.series(compile);
