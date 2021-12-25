const fs = require('fs');
const colors = require('colors');



const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try{
         
        let salida= '';
        let consola= '';
    
        for (let i = 1; i <=  hasta; i++) {
            salida += ` ${i} * ${base} = ${i * base}\n`;
            consola += ` ${i} ${'*'.green} ${base} ${'='.green} ${i * base}\n`;
        }

        if (listar){
            console.log("-------------------------------".green);
            console.log(`        Tabal del: `.green, colors.blue(base));
            console.log("-------------------------------".green);

            console.log(consola);
        }
    
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return (`tabla-${base}.txt`);

    } catch (err){
        throw err;
    }

} 

module.exports = {
    crearArchivo : crearArchivo
}