/* vamos a hacer una interacción que pida un numero y nos diga si es par o impar*/

let numero= parseInt(prompt ("introduce un número"));

while (isNaN(numero)){
    numero= parseInt (prompt("intruduce un número"));
}
if (numero % 2 == 0){
    alert("es un número par");
}else{
    alert("es un número impar");
}
