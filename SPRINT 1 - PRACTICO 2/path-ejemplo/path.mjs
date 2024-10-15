import path from "path";

//dar una ruta de archivo
const rutaDelArchivo = "./data/example.txt";

//muestra el directorio base
const directorio = path.dirname(rutaDelArchivo);
console.log("Direccion base :", directorio);

//muestra el nombre del archivo sin extension
const nombreDelArchivo = path.basename(rutaDelArchivo, ".txt");
console.log("Nombre del archivo", nombreDelArchivo);

//muestra la extension del archivo
const extensionDelArchivo = path.extname(rutaDelArchivo);
console.log("Extension del archivo", extensionDelArchivo);

//crea una nueva ruta unida al archivo
const nuevaRutaUnida = path.join("/user", "docs", "newfile.txt");
console.log('Nueva ruta', nuevaRutaUnida)
