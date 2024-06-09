const prompt=require("prompt-sync")();
console.clear();
console.log("CALCULADORA DE ÁREAS\n---------------------\nELija la opción deseada:");
let seguir;
do{
    let opcion=parseInt(prompt(console.log("\t1-Cuadrado\n\t2-Triángulo\n\
        3-Círculo\n\t4-Rectángulo\n")));
    
    switch (opcion){
    case 1:{
        let lado=parseInt(prompt("Longitud del lado:"));
        let area=lado**2;
        console.log("La superficie del cuadrado es: ",area);
        break;
    }
    case 2:{
        let base=parseInt(prompt("Longitud de la base:"));
        let altura=parseInt(prompt("Longitud de la altura:"));
        let area=base*altura/2;
        console.log("La superficie del triángulo es: ",area);
        break;
    }
    case 3:{
        let radio=parseInt(prompt("Longitud del radio:"));
        let area=Math.PI*radio**2;
        console.log("La superficie del círculo es: ",area);
        break;
    }
    case 4:{
        let base=parseInt(prompt("Longitud de la base:"));
        let altura=parseInt(prompt("Longitud de la altura:"));
        let area=base*altura;
        console.log("La superficie del rectángulo es: ",area);
        break;
    }
    }
    seguir=prompt("¿Deseas calcular una nueva área?(s/n)");
    
}while (seguir=="s")

console.log("Hasta pronto");
