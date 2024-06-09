const prompt=require("prompt-sync")();
let precio,dia,conDescuento;
console.clear();

precio=parseInt(prompt("Precio de la moto: "));
dia=prompt("Día de la compra: ");

switch(dia){
    case "martes":
        descuento="12%";
        conDescuento=precio*0.88;
        break;
    case "sabado":
        descuento="18%";
        conDescuento=precio*0.82;
        break;
    case "festivo":
        descuento="25%";
        conDescuento=precio*0.75;
        break;
    default:
        descuento="0%";
        conDescuento=precio;
}
console.log("");
console.log("Precio inicial de la moto: %s€",precio);
console.log("Por haber hecho la compra un %s te corresponde un descuento del %s",dia,descuento);
console.log("Precio final: %s€",conDescuento)