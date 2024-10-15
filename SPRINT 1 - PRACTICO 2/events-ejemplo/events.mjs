import { EventEmitter } from "events";

//crear un emisor 
const emisor = new EventEmitter();

//crear un saludo
emisor.on("saludo", (nombre) => {
  console.log(`Hola! ${nombre}`);
});

//emitir el saludo
emisor.emit("saludo", "Gimena");