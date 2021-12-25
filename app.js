const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));




//console.log('base: yargs', argvn.b);
/*
const [, , arg3 = "base=5"] = process.argv;

const [ , base = 5] = arg3.split('=');
console.log(base);
*/
//const base = 5;
/*
crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));
*/