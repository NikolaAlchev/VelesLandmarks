/* ///////////////////////////////////////////// Weather Stats ///////////////////////////////////////////// */
const API_KEY='faf8f946e999c3c559f420e988e80284';
const weatherRightTop = document.getElementById('weather-right-top');

getWeatherData()
function getWeatherData () {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=41.724182&lon=21.774216&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data);
        showWeatherData(data);
    })
}
function showWeatherData (data){
    let {humidity, pressure, uvi, wind_speed} = data.current;
    weatherRightTop.innerHTML =
        `       <div class="weather-stats-flex">
                    <div class="weather-stats">
                        <div class="weather-icon"><i class="icon-large fa-solid fa-wind fa-2xl fa-color"></i><i class="icon-small fa-solid fa-wind fa-xl fa-color"></i></div>
                        <div class="weather-text">
                            <p class="weather-stats-name">Брзина на ветерот</p>
                            <p class="weather-stats-number">${wind_speed} km/h</p>
                        </div>
                    </div>
                    <div class="weather-stats">
                        <div class="weather-icon"><i class="icon-large fa-solid fa-compress fa-2xl fa-color"></i><i class="icon-small fa-solid fa-compress fa-xl fa-color"></i></div>
                        <div class="weather-text">
                            <p class="weather-stats-name">Притисок</p>
                            <p class="weather-stats-number">${pressure} mb</p>
                        </div>
                    </div>
                </div>

                <div class="weather-stats-flex">
                    <div class="weather-stats">
                        <div class="weather-icon"><i class="icon-large fa-solid fa-droplet fa-2xl fa-color"></i><i class="icon-small fa-solid fa-droplet fa-xl fa-color"></i></div>
                        <div class="weather-text">
                            <p class="weather-stats-name">Влажност</p>
                            <p class="weather-stats-number">${humidity} %</p>
                        </div>
                    </div>
                    <div class="weather-stats">
                        <div class="weather-icon"><i class="icon-large fa-solid fa-sun fa-2xl fa-color"></i><i class="icon-small fa-solid fa-sun fa-xl fa-color"></i></div>
                        <div class="weather-text">
                            <p class="weather-stats-name">Uv индекс</p>
                            <p class="weather-stats-number">${uvi}</p>
                        </div>
                    </div>
                </div>`
}
/* ///////////////////////////////////////////// Chart ///////////////////////////////////////////// */
const data = {
    labels: ['Јан', 'Фев', 'Мар', 'Апр', 'Мај', 'Јун', 'Јул', 'Авг', 'Сеп', 'Окт', 'Ное', 'Дек'],
    datasets: [{
        label: 'Ниски',
        data: [-3,-1,2,6,10,14,16,16,12,7,2,-2],
        backgroundColor: 'rgba(59,136,195,0.5)',
        borderColor: 'rgba(59,136,195,1)',
        tension:0.4,
        fill:1
    },{
        label: 'Високи',
        data: [5,9,15,20,25,29,32,32,27,20,12,6],
        backgroundColor: 'rgba(250,0,0,0.5)',
        borderColor: 'rgb(208,15,15)',
        tension:0.4,
        fill:1
    }]
};

// config
const config = {
    type: 'line',
    data,
    options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    stepSize: 1
                }
            }]
        }
    }
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
/* ///////////////////////////////////////////// Time ///////////////////////////////////////////// */
setInterval(showTime, 1000);
function showTime() {

    let date = new Date();
    let gmt = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() + gmt);
    let gmt2 = 2*60;
    date.setMinutes(date.getMinutes() + gmt2);

    let hour = date.getHours();
    let min = date.getMinutes();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    let currentTime = hour + ":" + min;

    document.getElementById("clock")
        .innerHTML = currentTime;
}
showTime();