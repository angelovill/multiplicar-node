// const express = require('express'); //require de paquetes externos
// const fs = require('./fs'); //require de algun archivo propio que hemos creado

const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch(comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
    break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado ${archivo}`))
        .catch(e => console.log(e));
    break;

    default:
        console.log('Comando no reconocido');
}

// console.log(argv)

// console.log(argv.base)


// let parameter = argv[2];

// let base = parameter.split('=')[1];


// console.log(multiplicar)
