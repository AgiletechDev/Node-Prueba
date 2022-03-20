
const {crearArchivo} = require('./helpers/multiplicar')

console.clear();

console.log(process.argv);

const [, , arg3='base=5'] =process.argv;
const[,base=5] = arg3.split('=');
//console.log(arg3);
console.log(base);





// table del 5
//const base =10;

crearArchivo(base)
.then(nombreArchivo=> console.log(nombreArchivo, 'creado2'))
.catch(err => console.log(err));


/*
let salida ='';

for (let i = 0; i <= 10; i++) {
    //console.log( `${base} x ${i} = ${base*i}`);  
    salida += `${base} x ${i} = ${base*i} \n`  
}
 console.log(salida);

 fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if(err) throw err;
    console.log(`tabla-${base}.txt creado.`);
 })

try {

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log(`tabla-${base}.txt creado.`);

} catch (error) {
    console.log(error);
}
 
*/

