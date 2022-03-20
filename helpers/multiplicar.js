const fs = require('fs');


const crearArchivo = async (base = 5) => {

    try {

        console.clear();
        console.log(`tabla del ${base}`);

        let salida = '';

        for (let i = 0; i <= 10; i++) {
            //console.log( `${base} x ${i} = ${base*i}`);  
            salida += `${base} x ${i} = ${base * i} \n`
        }
        console.log(salida);



        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado.`;


    } catch (err) {
        throw err;
    }





}

/*
const crearArchivo = (base = 5) => {

    return new Promise((resolve, reject) => {

        console.clear();
        console.log(`tabla del ${base}`);

        let salida = '';

        for (let i = 0; i <= 10; i++) {
            //console.log( `${base} x ${i} = ${base*i}`);  
            salida += `${base} x ${i} = ${base * i} \n`
        }
        console.log(salida);

        try {

            fs.writeFileSync(`tabla-${base}.txt`, salida);
            console.log(`tabla-${base}.txt creado.`);

        } catch (error) {
            console.log(error);
        }
    })


}
*/
module.exports = {
    crearArchivo: crearArchivo
}




