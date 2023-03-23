const fs = require('fs');
const { argv } = require('process');
const yargs = require('yargs');



const crearArchivo = async (base, argv) =>{

    try {
            console.clear();

            let salida =""
            
            for (let i = 1; i <= argv.h; i++) {
                salida += `${base} * ${i} = ${base * i}\n`;
            }

            if(argv.l == true){
                console.log(`=================\n   Tabla del ${base}\n=================`.green);
                console.log(salida)
            }
            fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);
            
            return( `Tabla-del-${base}`);

            
    } catch (err) {
        throw err
    }

}


module.exports = {
    crearArchivo
}

