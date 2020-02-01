const fs = require('fs'); //require propio de node
const colors = require('colors');

listarTabla = (base, limite) => {
    console.log('==============='.green)
    console.log(`Tabla de ${base}`.green)
    console.log('==============='.green)
    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base * i}\n`)
    }
}


crearArchivo = ( base, limite ) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++ ){
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if(err) reject(err);
            else
                resolve(`tabla-${base}.txt ha sido creado`)
        })
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
