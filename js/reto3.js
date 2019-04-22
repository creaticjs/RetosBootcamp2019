let boton1 = document.getElementById('btnSalario');

boton1.addEventListener('click', () => {
    let = salario = parseFloat(document.getElementById('salario').value);
    let porcentaje = '';
    if (salario >= 0 && salario <= 9000) {
        salario = salario + ((salario * 20) / 100);
        porcentaje = '20%';
    } else if (salario >= 9001 && salario <= 15000) {
        salario = salario + ((salario * 10) / 100);
        porcentaje = '10%';
    } else if (salario >= 15001 && salario <= 20000) {
        salario = salario + ((salario * 5) / 100);
        porcentaje = '5%';
    } else if (salario > 20000) {
        salario = salario + ((salario * 0) / 100);
        porcentaje = '0%';
    }
    document.getElementById('result1').value = salario;
    document.getElementById('porcentaje').innerHTML = porcentaje;
});

document.getElementById('btnCalcularPi').addEventListener('click', () => {
    let numero = parseFloat(document.getElementById('numero').value);
    let pi = 0;
    let n = 0;
    let Mm = 1;
    let d = 1;
    for (let i = 1; i <= numero; i++) {
        n = 1 / d * Mm;
        pi += n;
        d += 2;
        Mm *= -1;
    }
    pi = pi * 4;
    document.getElementById('result2').value = pi;
});

document.getElementById('creaInput').addEventListener('click', () => {
    let repeticiones = document.getElementById('repeticiones').value;
    for (let i = 1; i <= repeticiones; i++) {
        const div = document.getElementById('div_salida');
        const element = document.createElement('div');
        element.innerHTML = `<input type="number" class=" form-group form-control DibujaInput" id="${i}">`;
        div.appendChild(element);
    }
    document.getElementById("divEntrada").style.display = "none";
    document.getElementById("numeroInpus").style.display = "block";
});

document.getElementById('calcularMedia').addEventListener('click', () => {
    let input = document.getElementsByClassName("DibujaInput");
    let Numeroinput = input.length;
    let element = 0;
    let promedio = 0;
    let numeros = new Array();
    for (let i = 0; i < Numeroinput; i++) {
        element = Number(input[i].value);
        promedio += Number(input[i].value);
        numeros.push(element);
    }
    promedio = promedio / Numeroinput;
    let max = Math.max.apply(null, numeros);
    let min = Math.min.apply(null, numeros);
    document.getElementById("media").style.display = "block";
    document.getElementById('resultMayor').value = max;
    document.getElementById('resultMenor').value = min;
    document.getElementById('resultPromedio').value = promedio;
});

document.getElementById('btnCalcularPascua').addEventListener('click', () => {
    var year = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1996, 1998, 1999, 2000];
    var lista = new Array();

    for (let i = 0; i < year.length; i++) {
        const element = year[i];
        var a = year[i] % 19,
            b = year[i] % 4,
            c = year[i] % 7,
            d = (19 * a + 24) % 30,
            e = (2 * b + 4 * c + 6 * d + 5) % 7,
            n = (22 + d + e),
            dia = (n % 31)
        if (n <= 31) {
            lista.push(`${n} marzo de ${year[i]}`);
        } else {
            lista.push(`${n - 31} abril de ${year[i]}`)
        }
    }
    for (let j = 0; j < lista.length; j++) {
        const fechas = lista[j];
        document.getElementById("divTabla").style.display = "block";
        const tabla = document.getElementById('fechasPascua');
        const elements = document.createElement('tr');
        elements.innerHTML = `<td>${fechas.substr(0, 11)}</td>
                            <td>${fechas.substr(11)}</td>`;
        tabla.appendChild(elements);
    }
});

document.getElementById('btnYearBisiesto').addEventListener('click', () => {
    var year = parseInt(document.getElementById("year-bisiesto").value);
    var a = ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) ? true : false;
    if (a) {
        year = `El año ${year} es Bisiesto`;
    } else {
        year = `El año ${year} no Bisiesto`;
    }
    document.getElementById('result3').value = year;
});

function createArray(x, y) {
    return Array.apply(null, Array(x)).map(e => Array(y));
}

document.getElementById('btnCuadroMagico').addEventListener('click', () => {
        var n = parseInt(document.getElementById('nivel').value);
        var iAnt = 0; jAnt = 0, pInicio = Math.floor(n/2), temp=1;
        var nuevoArray = createArray(n, n)
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                nuevoArray[i][j]=0
            }
        }
        var ix =0 ;
        var jx = pInicio;
        while(temp!= (n*n)+1){
            if( nuevoArray[ix][jx]==0){
                nuevoArray[ix][jx]=temp
            }else{
                ix = iAnt+1;
                jx=  jAnt;
                nuevoArray[ix][jx]=temp
            }
            iAnt = ix
            jAnt = jx
            temp++
            jx++
            ix--
            if(ix<0 && jx==n){
                ix= n -1;
                jx = 0;
            }else if(ix<0){
                ix= ix+n;
            }else if(jx==n){
                jx=0
            }
        }
        //console.log(nuevoArray);
        for (let x = 0; x < n; x++) {
            const tabla = document.getElementById('myTablaCuadro');
            const elements = document.createElement('tr');
            for (let y = 0; y < n; y++) {
                elements.innerHTML += `<td>${nuevoArray[x][y]}</td>`;
            }
            tabla.appendChild(elements);
        }
});


document.getElementById('btnNumeroPerfecto').addEventListener('click', () => {
    document.getElementById('result4').value = numeroPerfecto(3);
});

function numeroPerfecto(n) {
    var listPerfectos = new Array();
    let a = 0,
        b = 0,
        c = 1,
        d = 0,
        p, i = 0;

    while (i != n) {
        a++;
        c++;
        d = Math.pow(2, c) - 1;
        p = 0;
        for (let j = 1; j <= d; j++) {
            if (d % j == 0) {
                p++;
            }
        }
        if (p == 2) {
            b = Math.pow(2, a) * d;
            i++;
            listPerfectos.push(b)
        }
    }
    return listPerfectos;
}

document.getElementById('sumaDeE').addEventListener('click', () => {
    var x = parseInt(document.getElementById("valorx").value);
    var n = range(1, 100);
    var t = 0, s = 0;
    for (let i = 0; i < n.length; i++) {
        t = Math.pow(x, i) / factorial(i)
        s += t;
        document.getElementById("divTablaSuma").style.display = "block";
        const tabla = document.getElementById('sumae');
        const elements = document.createElement('tr');
        elements.innerHTML = `<td>${i}</td>
                            <td>${s}</td>`;
        tabla.appendChild(elements);
    }
});

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

function factorial(n) {
    var num = 1;
    for (let i = 2; i <= n; i++) {
        num *= i;
    }
    return num;
}

document.getElementById('btnNumeroPrimo').addEventListener('click', () => {
    var numero = parseInt(document.getElementById("numeroPrimo").value);
    var primo
    if (numeroPrimo(numero)) {
        primo = `El número ${numero}, Si es primo`;
    } else {
        primo = `El número ${numero}, No es primo`;
    }
    document.getElementById('result8').value = primo;
});

function numeroPrimo(numero) {
    for (let i = 2; i < numero / 2; i++) {
        if (numero % i == 0) {
            return false;
        }
    }
    return true;
}

document.getElementById('btnSumaSerie').addEventListener('click', () => {
    var numero = parseInt(document.getElementById("sumaSerie").value);
    var t = 0, s = 0;
    for (let i = 1; i <= numero; i++) {
        t = 1 / i
        s += t;
    }
    document.getElementById('result9').value = `La suma de 1/${numero} es ${s}`;
});

document.getElementById('btnSumaSerieTerminos').addEventListener('click', () => {
    var numero = parseInt(document.getElementById("sumaSerieTerminos").value);
    var t = 0, s = 0;
    for (let i = 1; i <= numero; i++) {
        t = i / Math.pow(2, i)
        s += t;
    }
    document.getElementById('formula').innerHTML = `1/2^${numero} es:`;
    document.getElementById('result10').value = s;

});


document.getElementById('btnFigura').addEventListener('click', () => {
    var numero = parseInt(document.getElementById("figura").value);
    var a = `<span>*</span>`
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            document.getElementById("figuratriangulo").innerHTML += a
        }
        document.getElementById("figuratriangulo").innerHTML += `<br>`
    }
});

document.getElementById('btnNumeroPerfectoN').addEventListener('click', () => {
    var numero = parseInt(document.getElementById("numeroperfecto").value);
    document.getElementById('result11').value = numeroPerfecto(numero);
});

document.getElementById('btnNumeroNatural').addEventListener('click', () => {
    var numero = parseInt(document.getElementById("numeroNatural").value);
    var suma = 0, x = 0;
    for (let i = 1; i <= numero; i++) {
        suma += i;
        x = i + 1
    }
    document.getElementById('result12').value = `el numero natural es ${x} y la suma es ${suma}`;
});

document.getElementById('btnmcd').addEventListener('click', () => {
    var numeros = document.getElementById("mcd").value;
    var numero = numeros.split(",");
    var n1 = parseInt(numero[0])
    var n2 = parseInt(numero[1])
    var resultado = 0
    for (let i = 1; i <= n1; i++) {
        if (n1 % i == 0 && n2 % i == 0) {
            resultado = i
        }
    }
    document.getElementById('result7').value = resultado;
});

document.getElementById('btnParejasConejos').addEventListener('click', () => {
    var a = 0, b = 1, suma = 0, contador = 1;
    while (contador <= 12) {
        suma = a + b;
        a = b;
        b = suma;
        contador += 1;
    }
    var parejaXyear = `${suma} parejas de conejos`;

    a = 0, b = 1, suma = 0, contador = 0;
    var nparejas = parseInt(document.getElementById('parejasConejos').value);
    while (suma < nparejas) {
        suma = a + b;
        a = b;
        b = suma;
        contador += 1;
    }
    var meses = `${nparejas} de conejos es ${contador} meses`
    document.getElementById('result5').value = parejaXyear;
    document.getElementById('result6').value = meses;
});
