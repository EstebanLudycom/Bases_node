require('colors');

const fs = require('fs');
const {crearArchivo} = require("./helpers/Multiplicar-promesas");
const argv = require("./config/yargs");



// const [,,arg3 = "base=5"] = process.argv;
// const [, base] = arg3.split('=');




console.clear();

console.log(argv);

crearArchivo(argv.b, argv)
    .then ( nombreArchivo => console.log(nombreArchivo.green, "creado".green))
    .catch (err => console.log(err.red));

