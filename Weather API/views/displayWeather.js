window.onload = ()=> {
    const currentWeather = new Weather;
//    const lonlat = '23.6,46.76667';
    currentWeather.WeatherFetchData().then(()=>{
        console.log(currentWeather.icon);
//        console.log(currentWeather.length);
        const time = document.getElementById('timeSpan');
        const temperature = document.getElementById('temperatureSpan');
        const sumarry = document.getElementById('sumarrySpan');
        const humidity = document.getElementById('humiditySpan');
        const precipProbability = document.getElementById('precipProbabilitySpan');
        const pressure = document.getElementById('pressureSpan');
        const icon = document.getElementById('iconSpan');
        
        function Unix_timestamp(t) {
            var dt = new Date(t*1000);
            var hr = dt.getHours();
            var m = "0" + dt.getMinutes();
            var s = "0" + dt.getSeconds();
            return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
        }
         console.log(Unix_timestamp(1537454200));
        
        const transformTime = Unix_timestamp(currentWeather.time);
        console.log(transformTime);
        
        time.innerHTML = transformTime;
        temperature.innerHTML = currentWeather.temperature;
        sumarry.innerHTML = currentWeather.sumarry;
        humidity.innerHTML = currentWeather.humidity;
        precipProbability.innerHTML = currentWeather.precipProbability;
        pressure.innerHTML = currentWeather.pressure;
        icon.innerHTML = currentWeather.icon;
        
        const selectCity = document.getElementById('selectCity');
        console.log(selectCity.value);
        
        const submit = document.getElementById('submit');
        submit.addEventListener('click', ()=> {
            console.log(selectCity.value);
            if(selectCity.value === "Bucuresti") {
                currentWeather.WeatherFetchDataBuc().then(()=>{
                    time.innerHTML = transformTime;
                    temperature.innerHTML = currentWeather.temperature;
                    sumarry.innerHTML = currentWeather.sumarry;
                    humidity.innerHTML = currentWeather.humidity;
                    precipProbability.innerHTML = currentWeather.precipProbability;
                    pressure.innerHTML = currentWeather.pressure;
                    icon.innerHTML = currentWeather.icon;   
                })
            } else if(selectCity.value === "Cluj-Napoca") {
                currentWeather.WeatherFetchDataClu().then(()=>{
                    time.innerHTML = transformTime;
                    temperature.innerHTML = currentWeather.temperature;
                    sumarry.innerHTML = currentWeather.sumarry;
                    humidity.innerHTML = currentWeather.humidity;
                    precipProbability.innerHTML = currentWeather.precipProbability;
                    pressure.innerHTML = currentWeather.pressure;
                    icon.innerHTML = currentWeather.icon;   
                })
            } else if(selectCity.value === "Constanta") {
                currentWeather.WeatherFetchDataCon().then(()=>{
                    time.innerHTML = transformTime;
                    temperature.innerHTML = currentWeather.temperature;
                    sumarry.innerHTML = currentWeather.sumarry;
                    humidity.innerHTML = currentWeather.humidity;
                    precipProbability.innerHTML = currentWeather.precipProbability;
                    pressure.innerHTML = currentWeather.pressure;
                    icon.innerHTML = currentWeather.icon;   
                })
            } else if(selectCity.value === "Iasi") {
                currentWeather.WeatherFetchDataIas().then(()=>{
                    time.innerHTML = transformTime;
                    temperature.innerHTML = currentWeather.temperature;
                    sumarry.innerHTML = currentWeather.sumarry;
                    humidity.innerHTML = currentWeather.humidity;
                    precipProbability.innerHTML = currentWeather.precipProbability;
                    pressure.innerHTML = currentWeather.pressure;
                    icon.innerHTML = currentWeather.icon;   
                })
            } else if(selectCity.value === "Timisoara") {
                currentWeather.WeatherFetchDataTim().then(()=>{
                    time.innerHTML = transformTime;
                    temperature.innerHTML = currentWeather.temperature;
                    sumarry.innerHTML = currentWeather.sumarry;
                    humidity.innerHTML = currentWeather.humidity;
                    precipProbability.innerHTML = currentWeather.precipProbability;
                    pressure.innerHTML = currentWeather.pressure;
                    icon.innerHTML = currentWeather.icon;   
                })
            }
        })
    });
}