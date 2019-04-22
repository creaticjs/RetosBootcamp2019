const idApi = '8d5196af86b0ed91e5eca30278c22f28'
var Latitud, longitud
var watherIcono = document.getElementById('weather-icon');
var resultPais = document.getElementById("resultPais");
var weatherLocation = document.getElementById('weatherLocation');
var weatherDescription = document.getElementById('weatherDescription');
var weatherString = document.getElementById('weatherString');
var weatherHumedad = document.getElementById('weatherHumedad');
var weatherViento = document.getElementById('weatherViento');
var weatherCoordenadas = document.getElementById('weatherCoordenadas');
var pronostico = document.getElementById('pronostico');

porCordenadas(latitud = 3.38, longitud = -74.8, false); //Info por defecto

(function () {
    var content = document.getElementById("geolocation-test");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (objPosition) {
            longitud = objPosition.coords.longitude;
            latitud = objPosition.coords.latitude;
            porCordenadas(latitud, longitud, false)
        }, function (objPositionError) {
            switch (objPositionError.code) {
                case objPositionError.PERMISSION_DENIED:
                    //content.innerHTML = "No se ha permitido el acceso a la posición del usuario.";
                    break;
                case objPositionError.POSITION_UNAVAILABLE:
                    // content.innerHTML = "No se ha podido acceder a la información de su posición.";
                    break;
                case objPositionError.TIMEOUT:
                    //content.innerHTML = "El servicio ha tardado demasiado tiempo en responder.";
                    break;
                default:
                    //content.innerHTML = "Error desconocido.";
            }
        }, {
            maximumAge: 75000,
            timeout: 15000
        });
    } else {
        content.innerHTML = "Su navegador no soporta la API de geolocalización.";
    }
})();

function getClima(url) {
    return new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject("Error!" + this.status);
                }
            }
        };
        xhttp.open("GET", url);
        xhttp.send();
    });
}

document.getElementById('buscars').addEventListener('click', () => {
    var ciudad = document.getElementById('nombrePais').value;
    if (ciudad != '') {
        porCordenadas(false, false, ciudad)
    }
    $(".input").val("");
})

function porCordenadas(lat, lon, ciudad) {
    let url1 = '',
        url2 = '';
    if (ciudad) {
        url1 = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${idApi}&units=metric&lang=es`;
        url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${idApi}&units=metric&lang=es`;
    } else {
        url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${idApi}&units=metric&lang=es`;
        url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${idApi}&units=metric&lang=es`;
    }
    console.log(url1)
    console.log(url2)

    getClima(url1)
        .then(function (data) {
            //console.log(data);
            resultPais.style.display = "block";
            weatherLocation.textContent = `Tiempo en ${data.name}, ${data.sys.country} `
            weatherDescription.textContent = `${data.weather[0]['description']}`
            watherIcono.src = `http://openweathermap.org/img/w/${data.weather[0]['icon']}.png`
            weatherString.textContent = `${data.main.temp} ºC`
            weatherHumedad.textContent = ` Humedad: ${data.main.humidity}%`;
            weatherViento.textContent = `Viento: ${data.wind.speed} m/s`
            weatherCoordenadas.innerHTML = `<a href="#" id='cordenadas' lat='${data.coord.lat}' lon='${data.coord.lon}'>cordenadas: [${data.coord.lat},${data.coord.lon}]</a> `
            return getClima(url2);
        })
        .then(function (data) {
            //console.log(data.list);
            document.getElementById('grafi').style.display = "block";
            let lluvia = [];
            let temperatura = [];
            let labels = [];
            pronostico.style.display = "block";
            $("#listPrevision").html("");
            for (let i = 0; i < data.list.length; i++) {
                const element = data.list[i];
                let hora = element.dt_txt;
                hora = hora.split(' ');
                var tr = `<tr>
                <td><h5>${myFunction(element.dt_txt)} ${hora[1]}</h5></td>
                <td>
                    <span  class="hourly_temp">${element.main.temp} ºC</span>
                    <span class="hourly_itm">${element.weather[0]['description']}</span>
                    <span class="hourly_itm">Humedad ${element.main.humidity}</span>
                </td>
                <td><img src="http://openweathermap.org/img/w/${element.weather[0]['icon']}.png"></td>
                </tr>`;
                $("#listPrevision").append(tr)

                temperatura.push(element.main.temp);
                if (element.rain) {
                    lluvia.push(element.rain["3h"]);
                }
                labels.push(hora[0]);
            }
            $('#myChartG').remove();
            $('#grafi').append("<canvas id='myChartG'></canvas>");
            var mix = $("#myChartG");
            var mixChart = new Chart(mix, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                            type: 'line',
                            label: "Precipitación",
                            data: lluvia,
                            borderColor: 'rgba(75, 19, 42, 1)',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            yAxisID: 'Precipitación',
                        },
                        {
                            label: "temperatura",
                            data: temperatura,
                            borderColor: 'rgba(0, 0, 0, 0)',
                            backgroundColor: 'rgba(192, 75, 192, 0.5)',
                            yAxisID: 'temperatura',
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                                id: "Precipitación",
                                ticks: {
                                    beginAtZero: true,
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Precipitación mm'
                                }
                            },
                            {
                                id: "temperatura",
                                position: 'right',
                                ticks: {
                                    beginAtZero: true,
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'temperatura ºC'
                                }
                            },
                        ]
                    },
                }
            });
        })
        .catch(function () {
            console.error(error);
        });
}

$(document).on('click', '#cordenadas', function () {
    let element = $(this)[0];
    let lat = $(element).attr('lat')
    let lon = $(element).attr('lon')

    var url3 = `https://api.openweathermap.org/data/2.5/uvi/forecast?lat=${lat}&lon=${lon}&appid=${idApi}&units=metric&lang=es`;
    getClima(url3)
        .then(function (data) {
            document.getElementById('pronostico').style.display = "none";
            document.getElementById('diario').style.display = "none";
            document.getElementById('hora').style.display = "none";
            document.getElementById('ultra').style.display = "block";
            //console.log(data)

            var date = [];
            var valor = [];
            var bgColor = [];
            var bgBorder = [];

            $.each(data, function (i, item) {
                var r = Math.random() * 255;
                r = Math.round(r);
                var g = Math.random() * 255;
                g = Math.round(g);
                var b = Math.random() * 255;
                b = Math.round(b);
                //var fecha = item.date_iso;
                valor.push(item.value);
                date.push(item.date_iso.substr(0, 10));
                bgColor.push('rgba(' + r + ',' + g + ',' + b + ', 0.3)');
                bgBorder.push('rgba(' + r + ',' + g + ',' + b + ', 1)');
            });
            //console.log('aqui '+date.substr(0, 2))

            //Eliminamos y creamos la etiqueta canvas
            $('#myChart2').remove();
            $('#ultra').append("<canvas id='myChart2'></canvas>");
            var ctx = $("#myChart2");
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: date,
                    datasets: [{
                        label: '# of Votes',
                        data: valor,
                        backgroundColor: bgColor,
                        borderColor: bgBorder,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Indice'
                            }
                        }]
                    }
                }
            })


        })
        .catch(function () {
            console.error(error);
        });
});


function myFunction(fecha) {
    var d = new Date(fecha)
    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miércoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sábado";
    var n = weekday[d.getDay()];
    return n;
}

async function getClimaPorCiudad() {
    var arrUrl = [
        "https://swapi.co/api/people/1",
        "https://swapi.co/api/people/2",
        "https://swapi.co/api/people/1"
    ];
    var promesas = arrUrl.map(function (url) {
        return getClima(url);
    });
    try {
        var personajes = await Promise.all(promesas);
        //console.log(personajes);
    } catch (error) {}
}

var $table = $('table.scroll'),
    $bodyCells = $table.find('tbody tr:first').children(),
    colWidth;

$(window).resize(function () {
    colWidth = $bodyCells.map(function () {
        return $(this).width();
    }).get();

    $table.find('thead tr').children().each(function (i, v) {
        $(v).width(colWidth[i]);
    });
}).resize();

document.getElementById('tab-daily').addEventListener('click', (e) => {
    document.getElementById('pronostico').style.display = "none";
    document.getElementById('diario').style.display = "block";
    document.getElementById('hora').style.display = "none";
    document.getElementById('ultra').style.display = "none";
    $(".input").val("");
    e.preventDefault();
})

document.getElementById('tab-main').addEventListener('click', (e) => {
    document.getElementById('pronostico').style.display = "block";
    document.getElementById('diario').style.display = "none";
    document.getElementById('hora').style.display = "none";
    document.getElementById('ultra').style.display = "none";
    e.preventDefault();
})

document.getElementById('tab-hourly').addEventListener('click', (e) => {
    document.getElementById('pronostico').style.display = "none";
    document.getElementById('diario').style.display = "none";
    document.getElementById('hora').style.display = "block";
    e.preventDefault();
})