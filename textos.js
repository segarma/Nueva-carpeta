/*console.log("Mensaje con comillas dobles");
console.log('Mensaje con comillas simples');
console.log("Mensaje con comillas dobles conteniendo 'comillas simples'");
console.log('Mensaje con comillas simples conteniendo "comillas dobles"');

console.log("Mensaje con \"comillas dobles\"");
console.log('Mensaje con \'comillas simples\'');

console.log("Esta es una cadena compuesta\npor dos líneas y que incluye \\");
console.log("");
console.log("Cadena con dos líneas\n\t\ty la segunda tabulada");
console.log("");
console.log("Cadena con dos líneas\n\ry la segunda tabulada verticalmente");*/

/*let cadena1 = "Cadena 1" + " Cadena 2";
console.log(cadena1);
let cadena2 = cadena1 + " Cadena 3";
console.log(cadena2);
let cadena3 = cadena1 +" "+ cadena2;
console.log(cadena3);*/

/*let cadena = "Esta es una cadena que la hemos\
dividido en varias líneas porque \
si no lo hiciéramos el código no \
se podría leer fácilmente";
console.log(cadena);*/

/*let cadena = "En un lugar de la mancha";
console.log("Número de caracteres:", cadena.length)
console.log("Carácter en la posición 4: ", cadena.charAt(4));
console.log("Carácter en la posición 8: ", cadena.charCodeAt(8));
console.log("Carácter en la posición 19: ", cadena[19]);*/

/*let cadena = "En un lugar de la mancha";
console.log("Cadena:", cadena);
console.log("Posición de la cadena 'lugar' (indexOf):", cadena.indexOf("lugar"));
console.log("Posición de la cadena 'lugar' (search):", cadena.search("lugar"));
cadena = "¿En qué lugar aparece la palabra 'lugar'?";
console.log("Cadena:", cadena);
console.log("indexOf 'lugar' sin segundo parámetro:", cadena.indexOf("lugar"));
console.log("indexOf 'lugar' con segundo parámetro 20:", cadena.indexOf("lugar",20));
console.log("lastIndexOf 'lugar' sin segundo parámetro:", cadena.lastIndexOf("lugar"));
console.log("lastIndexOf 'lugar' con segundo parámetro 20:", cadena.lastIndexOf("lugar",20));*/

/*let cadena = "Coche, Moto, Avión, Helicóptero";
console.log("Cadena:", cadena);
console.log("slice 7 - 11:", cadena.slice(7,11));
console.log("slice 13 - final:", cadena.slice(13));
console.log("slice (-18) - (-13):", cadena.slice(-18,-13));
console.log("substring 7 - 11:", cadena.substring(7,11));
console.log("substring 13 - final:", cadena.substring(13));
console.log("substr 7 - 4:", cadena.slice(7,4));
console.log("substr 13 - final:", cadena.substr(13));*/

/*let cadena = "en un lugar de la mancha";
console.log("Cadena:", cadena);
console.log("Cadena mayúsculas:", cadena.toUpperCase());
cadena = "EN UN LUGAR DE LA MANCHA";
console.log("Cadena:", cadena);
console.log("Cadena minúsculas:", cadena.toLowerCase());*/

/*let cadena = "uno, dos, tres";
console.log("Cadena:", cadena);
cadena = cadena.concat(", cuatro, cinco");
console.log("Cadena:", cadena);
let cadena2 = "seis, siete";
cadena = cadena.concat(", ", cadena2);
console.log("Cadena:", cadena);
cadena = cadena.replace("dos", "two");
console.log("Cadena reemplazada:", cadena);
cadena = cadena.replace("uno", "one");
console.log("Cadena que no reemplaza Uno:", cadena);*/

let cadena = " uno, dos, tres ";
console.log("Cadena: %s\b.", cadena);
cadena = cadena.trim();
console.log("Cadena:", cadena, ".");
console.log("¿Empieza por uno?:", cadena.startsWith("uno"));
console.log("¿Empieza por dos?:", cadena.startsWith("dos"));
console.log("¿Termina por tres?:", cadena.endsWith("tres"));
console.log("¿Termina por dos?:", cadena.endsWith("dos"));