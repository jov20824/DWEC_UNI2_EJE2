var numero1 = parseFloat(prompt("numero 1"));
var numero2 = parseFloat(prompt("numero 2"));

function numero2AlAlza(num2){

    return Math.ceil(num2);
}
function numero1aLaBaja(num1){

    return Math.floor(num1);
}
function numero2redondeo(num2){

    return Math.round(num2);
}
function random(){

    return Math.random();
}
function elevate(num1,num2){
    return Math.pow(num1,num2)
}
function square(num1){
    return Math.sqrt(num1);
}
function maxMin(num1,num2){
    
    return ((Math.max(num1,num2))+" "+(Math.min(num1,num2)));
}
console.log(numero2AlAlza(numero2));
console.log(numero1aLaBaja(numero1));
console.log(numero2redondeo(numero2));
console.log(random());
console.log(elevate(numero1,numero2));
console.log(square(numero1));
console.log(maxMin(numero1,numero2));