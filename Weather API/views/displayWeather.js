window.onload = ()=> {
    const currentWeather = new Weather;
//    const lonlat = '23.6,46.76667';
    const lon = '26.10626';
    const lat = '44.432251';
    let lang = 'ro';
    let unit = 'si';
    currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
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
//         console.log(Unix_timestamp(1537454200));
        
        const transformTime = Unix_timestamp(currentWeather.time);
//        console.log(transformTime);
        
//        time.innerHTML = transformTime;
//        temperature.innerHTML = currentWeather.temperature;
//        sumarry.innerHTML = currentWeather.sumarry;
//        humidity.innerHTML = currentWeather.humidity;
//        precipProbability.innerHTML = currentWeather.precipProbability;
//        pressure.innerHTML = currentWeather.pressure;
//        icon.innerHTML = currentWeather.icon;
        
        const selectCity = document.getElementById('selectCity');
        console.log(selectCity.value);
        
        const submit = document.getElementById('submit');
        submit.addEventListener('click', ()=> {
            const roLangValue = document.getElementById('roLangRadioBtn');
            const enLangValue = document.getElementById('enLangRadioBtn');
            const siUnitValue = document.getElementById('siUnitsRadioBtn');
            const usUnitValue = document.getElementById('usUnitsRadioBtn');
            const langCheck = ()=>{
                if(roLangValue.checked === true) {
                    let lang = roLangValue.value;
//                    console.log("limba romana");
                    return lang;
                }
                else if(enLangValue.checked === true) {
                    let lang = enLangValue.value;
//                    console.log("limba engleza");
                    return lang;
                };
                
                console.log('TTTTTTTTTTT')
                console.log('asta returneaza functia defapt', lang);
                return lang;
                
            };
            
            
            lang = langCheck();
            
            
            const unitsCheck = ()=>{
                if(siUnitValue.checked === true) {
                    let unit = siUnitValue.value;
//                    console.log("SI SI SI");
                    return unit;
                }
                else if(usUnitValue.checked === true) {
                    let unit = usUnitValue.value;
//                    console.log("imperial");
                    return unit;
                };
                return unit;
            }
            
            
            unit = unitsCheck();
            
            
            console.log('langcheck language:', lang)
            console.log('langcheck unit:', unit)
            console.log(selectCity.value);
            if(selectCity.value === "Bucuresti") {
                const lon = '26.10626';
                const lat = '44.432251';
                currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                    time.innerHTML = transformTime;
                    temperature.innerHTML = currentWeather.temperature;
                    sumarry.innerHTML = currentWeather.sumarry;
                    humidity.innerHTML = currentWeather.humidity;
                    precipProbability.innerHTML = currentWeather.precipProbability;
                    pressure.innerHTML = currentWeather.pressure;
                    icon.innerHTML = currentWeather.icon;
                    console.log(currentWeather.sumarry);
                })
                
            } else if(selectCity.value === "Cluj-Napoca") {
                const lon = '23.6';
                const lat = '46.76667';
                currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                    time.innerHTML = transformTime;
                    temperature.innerHTML = currentWeather.temperature;
                    sumarry.innerHTML = currentWeather.sumarry;
                    humidity.innerHTML = currentWeather.humidity;
                    precipProbability.innerHTML = currentWeather.precipProbability;
                    pressure.innerHTML = currentWeather.pressure;
                    icon.innerHTML = currentWeather.icon;   
                })
            } else if(selectCity.value === "Constanta") {
                const lon = '28.65';
                const lat = '44.183331';
                currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                    time.innerHTML = transformTime;
                    temperature.innerHTML = currentWeather.temperature;
                    sumarry.innerHTML = currentWeather.sumarry;
                    humidity.innerHTML = currentWeather.humidity;
                    precipProbability.innerHTML = currentWeather.precipProbability;
                    pressure.innerHTML = currentWeather.pressure;
                    icon.innerHTML = currentWeather.icon;   
                })
            } else if(selectCity.value === "Iasi") {
                const lon = '27.6';
                const lat = '47.166672';
                currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                    time.innerHTML = transformTime;
                    temperature.innerHTML = currentWeather.temperature;
                    sumarry.innerHTML = currentWeather.sumarry;
                    humidity.innerHTML = currentWeather.humidity;
                    precipProbability.innerHTML = currentWeather.precipProbability;
                    pressure.innerHTML = currentWeather.pressure;
                    icon.innerHTML = currentWeather.icon;   
                })
            } else if(selectCity.value === "Timisoara") {
                const lon = '21.227221';
                const lat = '45.749439';
                currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
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