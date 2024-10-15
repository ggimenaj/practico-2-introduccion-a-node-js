import os from 'os'

//muestra la arquitectura del sistema
console.log('Arquitectura :', os.arch())

//muestra el tipo de sistema operativo
console.log('Plataforma :', os.platform())

//muestra la memoria total
console.log('Memoria Total :', os.totalmem())

//muestra la memoria libre
console.log('Memoria Libre :', os.freemem())

//muestra la inf de la CPU
console.log('Informacion de la CPU :', os.cpus())
