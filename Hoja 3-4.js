const prompt=require("prompt-sync")();

let seguir,precio,total,cantidad
total=0;
cantidad=0;
do {
    precio=parseInt(prompt("Introduzca precio de la camisa: "));
    total=total+precio;
    cantidad++;
    seguir=prompt("¿Más camisas?(s/n)");
}while(seguir.toLowerCase()!="n")


if(cantidad>=3){
    total=total*0.8;
}
else{
    total=total*0.9
}

console.log("El importe final es de: %s€",total)