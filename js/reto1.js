'use strict'
let cifra = 0;
let operacion = true;
let primera_operacion = true;
let ultima_operacion = "=";
let result = 0;
let cargar_nuevo = true;
let punto = true;
let p_pantalla = document.getElementById("p_pantalla");
let s_pantalla = document.getElementById("s_pantalla");

function numeros(numero){
    if( numero ===0 && p_pantalla.value=='0'){
        p_pantalla.value = numero;
        s_pantalla.value = numero;
    }else{
        if(cargar_nuevo){
            p_pantalla.value = "";
            cargar_nuevo = false;
            primera_operacion = true;
        }
        if(punto == true && numero == "."){
            p_pantalla.value += numero;
            s_pantalla.value += numero;
            punto = false;
        }
        if(numero == "."){
            numero = "";
            operacion = false;
        }else{
            operacion = true;
        }
        p_pantalla.value +=  numero;
        cifra = p_pantalla.value;
        s_pantalla.value += numero;
    }
}

function operar(operador){
    if(operacion){
        operaciones(ultima_operacion);
        s_pantalla.value +=  operador;
		p_pantalla.value = result;
        ultima_operacion = operador;
        cargar_nuevo = true;
        operacion = false;
        punto = true;
    }

}

function operaciones(operador){
    switch (operador) {
        case '+':
            result = result + Number(cifra);
            break;
        case '*':
            result = result * Number(cifra);
            break;
        case '/':
            result = result / Number(cifra);
            break;
        case '-':
            result = result - Number(cifra);
            break;
        default:
            result = Number(cifra);
            break;
    }
}

function resultado(){
    operaciones(ultima_operacion);
    p_pantalla.value=result;
    ultima_operacion = "=";
    cifra = result;
    cargar_nuevo = true;
    punto = true;
}

function limpiar(){
	cifra = 0;
	cargar_nuevo = true;
	operacion = true;
	result = 0;
	primera_operacion = true;
    ultima_operacion = "=";
    s_pantalla.value = "";
    p_pantalla.value = "";

}

function eliminarCifra(){
    var caja1 =  p_pantalla.value;
    var nuevo_valor = caja1.substring(0,caja1.length-1);
    p_pantalla.value = nuevo_valor;
    s_pantalla.value = p_pantalla.value;
    cifra = s_pantalla.value;
}

function potencia(){
    var cuadrado =  parseInt(p_pantalla.value);
    cuadrado = cuadrado*cuadrado;
    p_pantalla.value = cuadrado;
    s_pantalla.value = p_pantalla.value;
    cifra = s_pantalla.value;
}