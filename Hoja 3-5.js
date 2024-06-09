const prompt=require("prompt-sync")();

let sueldo,adicional,descuento,neto;
console.clear();
sueldo=parseInt(prompt("Introduzca sueldo: "));

if (sueldo<=1000){
    descuento=sueldo*0.1;
    neto=sueldo-descuento;
}
else if(sueldo<=2000){
    adicional=sueldo-1000;
    descuento=adicional*0.05;
    neto=sueldo-descuento;
}
else{
    adicional=sueldo-2000;
    descuento=adicional*0.03;
    neto=sueldo-descuento;
}

console.log("El descuento aplicado es: %s€\nEl sueldo neto es: %s€",descuento,neto);