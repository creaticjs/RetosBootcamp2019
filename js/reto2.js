
window.onload = function(){
    var resultado = '';
    var boton1 = document.getElementById("enviar");
    var boton2 = document.getElementById("boton-masas");
    var boton3 = document.getElementById("boton-masas-e");
    var boton4 = document.getElementById("boton-hipotenusa");
    var boton5 = document.getElementById("boton-triangulo");
    var boton6 = document.getElementById("boton-hora");
    var boton7 = document.getElementById("boton-fecha");
    var boton8 = document.getElementById("boton-letras");
    var boton9 = document.getElementById("boton-circulo");
    var boton10 = document.getElementById("boton-romanos");
    var boton11 = document.getElementById("boton-centena-proxima");
    var boton12 = document.getElementById("boton-calcular-edad");
    var boton13 = document.getElementById("boton-ecuacion-lineal");
    var boton14 = document.getElementById("boton-year-bisiesto");
    var boton15 = document.getElementById("boton-numero-dias");
    var boton16 = document.getElementById("boton-salario-neto");
    var boton17 = document.getElementById("boton-monto-pesos");
    var boton18 = document.getElementById("boton-numero-igual");

    boton1.onclick = function promedio(e){
        var nota1 = parseFloat(document.getElementById("nota-1").value);
        var nota2 = parseFloat(document.getElementById("nota-2").value);
        var nota3 = parseFloat(document.getElementById("nota-3").value);
        var nota4 = parseFloat(document.getElementById("nota-4").value);
        var num = 4;
        var suma = nota1+nota2+nota3+nota4;
        resultado = suma/num;
        if(!isNaN(resultado)){
            var media = '';
            document.getElementById("myTabla").style.display = "block";
            const tabla = document.getElementById('puntuacion');
            const element = document.createElement('tr');
            if(resultado >=90 && resultado <=100){
                media = 'A';
                element.innerHTML = `<td>${resultado}</td>
                                    <td>${media}</td>`;
            }else if(resultado >=80 && resultado <=89){
                media = 'B';
                element.innerHTML = `<td>${resultado}</td>
                                    <td>${media}</td>`;
            }
            else if(resultado >=70 && resultado <=79){
                media = 'C';
                element.innerHTML = `<td>${resultado}</td>
                                    <td>${media}</td>`;
            }
            else if(resultado >=60 && resultado <=69){
                media = 'D';
                element.innerHTML = `<td>${resultado}</td>
                                    <td>${media}</td>`;
            }
            else if(resultado >=0 && resultado <=69){
                media = 'E';
                element.innerHTML = `<td>${resultado}</td>
                                    <td>${media}</td>`;
            }else{
                element.innerHTML = `<td>Fuera de rango por favor digite valores correctos</td>
                <td></td>`;
            }
            tabla.appendChild(element);
        }else{
            alert('Solo se permiten números')
        }
        e.preventDefault();
    }

    boton2.onclick = function masas(e){
        const gravedad =6.673;// formula : "6.673x10^-8 cm^3/gs^2" // g 9.81;
        var masa1 = document.getElementById("masa-1").value;
        var masa2 = document.getElementById("masa-2").value;
        var distancia = document.getElementById("distancia").value;
        var fuerza =((gravedad*Math.pow(10.0,-8))*masa1*masa2)/Math.pow(distancia,2);
        document.getElementById("result-2").style.display = "block";
        document.getElementById('resultado-masa').innerHTML = `La fuerza gravitcional es <strong>${fuerza}</strong> dinas`;
        e.preventDefault();
    }

    boton3.onclick = function energiaMasas(e){
        //c= 2.997925*10^10 m/sg
        const c = 2.997925;
        e.preventDefault();
        var masa1 = document.getElementById("masa-3").value;
        var e = (c*Math.pow(10.0,10));
        var energia = masa1*(Math.pow(e,2));
        document.getElementById("result-3").style.display = "block";
        document.getElementById('resultado-masa-energia').innerHTML = `La energía producida es <strong>${energia}</strong> ergios`;
    }

    boton4.onclick = function calcularHipotenusa(e){
        var lado1 = document.getElementById("lado-1").value;
        var lado2 = document.getElementById("lado-2").value;
        var l1 = Math.pow(lado1,2)
        var l2 = Math.pow(lado2,2)
        hipotenusa =Math.sqrt((l1+l2));
        e.preventDefault();
        document.getElementById("result-4").style.display = "block";
        document.getElementById('resultado-hipotenusa').innerHTML = `La hipotenusa mide <strong> ${hipotenusa}</strong> `;
    }

    boton5.onclick = function calcularAreaTriangulo(e){
        e.preventDefault();
        var lado1 = document.getElementById("lado-3").value;
        var lado2 = document.getElementById("lado-4").value;
        var lado3 = document.getElementById("lado-5").value;
        var area = (parseInt(lado1)+parseInt(lado2)+parseInt(lado3))/2;
        document.getElementById("result-5").style.display = "block";
        document.getElementById('resultado-triangulo').innerHTML = `El Área del triángulo es <strong> ${area}</strong> `;
    }

    boton6.onclick = function convertirHora(e){
        var hora = document.getElementById("hora").value;
        var H = +hora.substr(0, 2);
        var h = (H % 12) || 12;
        h = (h < 10)?("0"+h):h;
        var ampm = H < 12 ? " AM" : " PM";
        hora = h + hora.substr(2, 3) + ampm;
        document.getElementById("result-6").style.display = "block";
        document.getElementById('resultado-hora').innerHTML = `la hora en formato de 12 horas es  <strong> ${hora}</strong> `;
        e.preventDefault();
    }

    boton7.onclick = function convertirHora(e){
        var fecha = document.getElementById("fecha").value;
        var dia = (fecha.split(','))[0];
        var mes = (fecha.split(' '))[1];
        var year = (fecha.split(' '))[2];
        fecha = dia+' '+ devuelveMes(mes) +' '+year;
        document.getElementById("result-7").style.display = "block";
        document.getElementById('resultado-fecha').innerHTML = fecha;
        e.preventDefault();
    }

    function devuelveMes(dato){
        var mes = dato.toLowerCase();
        var Nmes;
        switch (mes) {
            case 'enero': Nmes = 1;
                break;
            case 'febrero': Nmes = 2;
                break;
            case 'marzo': Nmes = 3;
                break;
            case 'abril': Nmes = 4;
                break;
            case 'mayo': Nmes = 5;
                break;
            case 'junio': Nmes = 6;
                break;
            case 'julio': Nmes = 7;
                break;
            case 'agosto': Nmes = 8;
                break;
            case 'septiembre': Nmes = 9;
                break;
            case 'octubre': Nmes = 10;
                break;
            case 'noviembre': Nmes = 11;
                break;
            case 'diciembre': Nmes = 12;
                break;
        }
        return Nmes;
    }


    boton8.onclick = function evaluar(e){
        e.preventDefault();
        var cadena = document.getElementById("letras").value;
        var part1 = (cadena.split(' '))[0];
        var part2 = (cadena.split(' '))[1];
        var part3 = (cadena.split(' '))[2];
        var part4 = (cadena.split(' '))[3];
        var a;
        var b;
        var cifra;
        if(part2 === undefined){
            a = centenasLetras(part1.toLowerCase(),'1');
            b='';
        }
        else if(part3 === undefined){
            a = centenasLetras(part1.toLowerCase(), null);
            b = decenasLetras(part2.toLowerCase(), null);
        }else{
            a = centenasLetras(part1.toLowerCase());
            b = decenasLetras(part2.toLowerCase(),part4.toLowerCase());
        }
        cifra = a+''+b;
        document.getElementById("result-8").style.display = "block";
        document.getElementById('resultado-letras').innerHTML = cifra;
    }

    function unidadesLetras(num){
        switch(num){
            case 'cero': return 0;
            case 'uno': return 1;
            case 'dos': return 2;
            case 'tres': return 3;
            case 'cuatro': return 4;
            case 'cinco': return 5;
            case 'seis': return 6;
            case 'siete': return 7;
            case 'ocho': return 8;
            case 'nueve': return 9;
        }
        return ;
    }

    function centenasLetras(num, ceros){
        switch(num){
            case 'cien': return 100;
            case 'ciento': return 1;
            case 'doscientos': return ceros ? 200: 2;
            case 'trescientos': return ceros ? 300: 3;
            case 'cuatrocientos': return ceros ? 400: 4;
            case 'quinientos': return ceros ? 500: 5;
            case 'seiscientos': return ceros ? 600: 6;
            case 'sietecientos': return ceros ? 700: 7;
            case 'ochocientos': return ceros ? 800: 8;
            case 'novecientos': return ceros ? 900: 9;
        }
        return ;
    }

    function decenasLetras(cadena, decenaY){
        var caracteres = cadena.length;
        parte1=cadena.substr(0, 5)
        parte2=cadena.substr(5, caracteres)
        parte3=cadena.substr(2, caracteres)
        if(parte3=='ez'||parte3=='ce'||parte1=='dieci'){
            switch (parte1) {
                case 'diez': return 10;
                case 'once': return 11;
                case 'doce': return 12;
                case 'trece': return 13;
                case 'catorce': return 14;
                case 'quince': return 15;
                case 'dieci' : return 10+unidadesLetras(parte2);
            }
        }else{
            parte1=cadena.substr(0, 6)
            parte2=cadena.substr(6, caracteres)
            parte3=cadena.substr(2, caracteres)
            if(parte1=='veinte'||parte1=='veinti'){
                switch(cadena){
                    case 'veinti': unidadesLetras(parte2)
                    case 'veinte': return 20;
                    default: return 20+unidadesLetras(parte2);
                }
            }else{
                switch(cadena){
                    case 'treinta': return decenaY ? decenasY(3,decenaY) : 30;
                    case 'cuarenta': return decenaY ? decenasY(4,decenaY) : 40;
                    case 'cincuenta': return decenaY ? decenasY(5,decenaY) : 50;
                    case 'sesenta': return decenaY ? decenasY(6,decenaY) : 60;
                    case 'setenta': return decenaY ? decenasY(7,decenaY) : 70;
                    case 'ochenta': return decenaY ? decenasY(8,decenaY) : 80;
                    case 'noventa': return decenaY ? decenasY(9,decenaY) : 90;
                    default: return 0+''+unidadesLetras(parte1);
                }
            }
        }
    }
    function decenasY(n, unidad){
        if(n>0){
            return n+''+unidadesLetras(unidad);
        }
    }

    boton9.onclick = function calcularAreaCircunferenciaDeCirculo(e){
        var radio = document.getElementById("circulo").value;
        var area = Math.PI*Math.pow(radio,2);
        var circunferencia = (2*Math.PI)*radio;
        var diametro = 2*radio;
        document.getElementById("result-9").style.display = "block";
        document.getElementById('resultado-circunferencia').innerHTML = `El área  <b>${area.toFixed(2)} </b>, La circunferencia  <b>${circunferencia.toFixed(2)}</b> y el diámetro  <b>${diametro}</b>`;
        e.preventDefault();
    }

    boton10.onclick = function convertirYear(e){
        var year = document.getElementById("romanos").value;
        if(year>=1000 && year<=2000){
        var n = year.toString();
        var arreglo = n.split('');
            document.getElementById("result-10").style.display = "block";
            document.getElementById('resultado-romanos').innerHTML = mil(arreglo[0])+cen(arreglo[1])+dec(arreglo[2])+uni(arreglo[3]);
        }else{
            alert("fuera de rango");
        }
        e.preventDefault();
    }

    function mil(n){
        var m;
        switch (n) {
            case '1': m= 'M';
                break;
            case '2': m= 'MM';
                break;
            case '3': m= 'MMM';
                break;
            default: m='';
                break;
        }
        return m;
    }

    function cen(n){
        var c;
        switch (n) {
            case '1': c='C';
                break;
            case '2': c='CC';
                break;
            case '3': c='CCC';
                break;
            case '4': c='CD';
                break;
            case '5': c='D';
                break;
            case '6': c='DC';
                break;
            case '7': c='DCC';
                break;
            case '8': c='DCCC';
                break;
            case '9': c='CM';
                break;
            default: c='';
                break;
        }
        return c;
    }

    function dec(n){
        var d;
        switch (n) {
            case '1': d='X';
                break;
            case '2': d= 'XX';
                break;
            case '3': d='XXX';
                break;
            case '4': d='XL';
                break;
            case '5': d='L';
                break;
            case '6': d='LX';
                break;
            case '7': d='LXX';
                break;
            case '8': d='LXXX';
                break;
            case '9': d='XC';
                break;
            default: d='';
                break;
        }
        return d;
    }

    function uni(n){
        var u;
        switch (n) {
            case '1': u='I';
                break;
            case '2': u='II';
                break;
            case '3': u='III';
                break;
            case '4': u='IV';
                break;
            case '5': u='V';
                break;
            case '6': u='VI';
                break;
            case '7': u='VII';
                break;
            case '8': u='VIII';
                break;
            case '9': u='IX';
                break;
            default: u='';
                break;
        }
        return u;
    }

    boton11.onclick = function centenaMasProxima(e){
        var a = parseInt(document.getElementById("numero-a").value);
        var b = parseInt(document.getElementById("numero-b").value);
        var c = parseInt(document.getElementById("numero-c").value);
        var d = parseInt(document.getElementById("numero-d").value);
        var redondeo = 0;
        var decena = 0;
        decena = c * 10 + d;
        if(decena >= 50){
            b++;
        }
        redondeo = a*1000 + b*100;
        document.getElementById("result-11").style.display = "block";
        document.getElementById('resultado-centena-proxima').innerHTML = redondeo;
        e.preventDefault();
    }

    boton12.onclick = function calcularEdad(e) {
        var fecha = document.getElementById("fecha-nacimiento").value;
        var dato = fecha.split("-");
        var year = dato[0];
        var month = dato[1];
        var day = dato[2];

        var fecha_actual = new Date();
        var year_act = fecha_actual.getYear();
        var month_act = fecha_actual.getMonth() + 1;
        var day_act = fecha_actual.getDate();

        var edad = (year_act + 1900) - year;
        if(month_act < month){
            edad--;
        }
        if((month == month_act) && (day_act < day)){
            edad--;
        }
        if(edad > 1900){
            edad -= 1900;
        }

        var meses = 0;

        if(month_act > month && day > day_act){
            meses = month_act - month - 1;
        }else if (month_act > month){
            meses = month_act - month
        }

        if (month_act < month && day < day_act){
            meses = 12 - (month - month_act);
        }else if (month_act < month){
            meses = 12 - (month - month_act + 1);
        }

        if(month_act == month && day > day_act){
            meses = 11;
        }

        var dias = 0;

        if(day_act > day){
            dias = day_act - day;
        }
        if(day_act < day){
            ultimoDiaMes = new Date(year_act, month_act - 1, 0);
            dias = ultimoDiaMes.getDate() - (day - day_act);
        }

        document.getElementById("result-12").style.display = "block";
        if(edad==1){
            document.getElementById('resultado-fecha-nacimiento').innerHTML = `Su edad es ${edad} un año`;
        }else if(edad>=2){
            document.getElementById('resultado-fecha-nacimiento').innerHTML = `Su edad es ${edad} años`;
        }else{
            document.getElementById('resultado-fecha-nacimiento').innerHTML = `Su edad es ${meses} meses y ${dias} días`;
        }
        e.preventDefault();
    }

    boton13.onclick = function calcualrEcuacionlineal(e){
        e.preventDefault();
        var a = parseInt(document.getElementById("coefeiciente-a").value);
        var b = parseInt(document.getElementById("coefeiciente-b").value);
        var c = parseInt(document.getElementById("coefeiciente-c").value);
        var d = parseInt(document.getElementById("coefeiciente-d").value);
        var e = parseInt(document.getElementById("coefeiciente-e").value);
        var f = parseInt(document.getElementById("coefeiciente-f").value);
        x = ((c*e)-(b*f))/((a*e)-(b*d));
        y = ((a*f)-(c*d))/((a*e)-(b*d));
        document.getElementById("result-13").style.display = "block";
        document.getElementById('resultado-calcular-ecuacion').innerHTML = `el valor de x = ${x}, el valor de y = ${y} `;
    }

    boton14.onclick = function yearBisiesto(e){
        var year = parseInt(document.getElementById("year-bisiesto").value);
        var a =  ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) ? true: false;
        if(a){
            year = 'El año es Bisiesto';
        }else{
            year = 'El año no Bisiesto';
        }
        document.getElementById("result-14").style.display = "block";
        document.getElementById('resultado-year-bisiesto').innerHTML = year;
        e.preventDefault();
    }

    boton15.onclick = function diasMes(e){
        var year = document.getElementById("year").value;
        var month = document.getElementById("month").value;
        var dias = new Date(year || new Date().getFullYear(), month, 0).getDate();
        document.getElementById("result-15").style.display = "block";
        document.getElementById('resultado-numero-dias').innerHTML = `el mes ${month} del año ${year} tiene ${dias} días`;
        e.preventDefault();
    }

    boton16.onclick = function diasMes(e){
        e.preventDefault();
        var horas = parseInt(document.getElementById("horas").value);
        var valorHora = parseFloat(document.getElementById("valor-hora").value);
        var salarioBruto = 0;
        var horasExtras = 0;
        var horasNormales = 38;
        var salarioNeto = 0;
        var impuesto;

        if(horas<38){
            salarioBruto= horas*valorHora;
        }else if(horas>=38){
            horasExtras = horas - horasNormales;
            salarioBruto = horasNormales+horasExtras*(valorHora+valorHora/2)
        }

        if(salarioBruto<=50000){
            impuesto = salarioBruto;
        }else if(salarioBruto>50000){
            impuesto= parseFloat((salarioBruto-50000))*(10/100);
        }
        salarioNeto = salarioBruto - impuesto;
        document.getElementById("result-16").style.display = "block";
        document.getElementById('resultado-salario-neto').innerHTML =`el salario neto es ${salarioNeto}, los impuestos ${impuesto} y el salario bruto ${salarioBruto}`;
    }

    boton17.onclick = function develveCambio(e){
        e.preventDefault();
        var importe = parseInt(document.getElementById("monto-pesos").value);
        document.getElementById("myTablaPesos").style.display = "block";
        var  monedas=[100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50];
        var devolver=[0,0,0,0,0,0,0,0,0,0,0];
        var cantidad= 0;
        var valor= 0;
        var tipo= '';
        var template = '';

        for(var i=0;i<monedas.length;i++){
            if(importe>=monedas[i]){
                devolver[i]=Math.floor(importe/monedas[i]);
                importe=importe-(devolver[i]*monedas[i]);
            }
        }
        for(var i=0;i<monedas.length;i++){
            if(devolver[i]>0){
                if(monedas[i]==100000|| monedas[i]==50000|| monedas[i]==20000|| monedas[i]==10000|| monedas[i]==5000|| monedas[i]==2000 || monedas[i]==1000){
                    cantidad=devolver[i];
                    valor=monedas[i];
                    valor=monedas[i];
                    tipo= 'Billete';
                }else{
                    cantidad=devolver[i];
                    valor=monedas[i];
                    tipo= 'Moneda';
                }
                template  +=`<tr>
                <td>${cantidad}</t>
                <td>${valor}</t>
                <td>${tipo}</t>
                </tr>`
            }
        }
        document.getElementById('tablapesos').innerHTML= template;
    }

    boton18.onclick = function develveNumero(e){
        var numero = parseInt(document.getElementById("numero-igual").value);
        if(numero>0){
            numero = "El número "+numero+" es positivo";
        }else if(numero<0){
            numero = "El número "+numero+" es negativo";
        }else{
            numero = "El número "+numero+" es igual a 0";
        }
        document.getElementById("result-18").style.display = "block";
        document.getElementById('resultado-numero-igual').innerHTML =numero;
        e.preventDefault();
    }
}