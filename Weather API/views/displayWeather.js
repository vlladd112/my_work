window.onload = ()=> {
    const currentWeather = new Weather;
//    const lonlat = '23.6,46.76667';
    const lon = '26.10626';
    const lat = '44.432251';
//    let lang = 'ro';
//    let unit = 'si';
    
    const unitLS = localStorage.getItem("unit");
    const langLS = localStorage.getItem("lang");
    const cityLS = localStorage.getItem("city");
    
    console.log(langLS, unitLS, cityLS);
    
    const roLangValue = document.getElementById('roLangRadioBtn');
    const enLangValue = document.getElementById('enLangRadioBtn');
    const siUnitValue = document.getElementById('siUnitsRadioBtn');
    const usUnitValue = document.getElementById('usUnitsRadioBtn');
    const selectCity = document.getElementById('selectCity');
    
    const resultsContainer = document.getElementById('resultsContainer');
    
    
    
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
    
    
    
    
    
    selectCity.value = cityLS;
    
    const langFormSpan = document.getElementById('languageSpan');
    const unitsFormSpan = document.getElementById('unitsSpan');
    const h1Title = document.getElementById('h1Title');
    const timeParag = document.getElementById('timeParag');
    const temperatureParag = document.getElementById('temperatureParag');
    const sumarryParag = document.getElementById('sumarryParag');
    const humidityParag = document.getElementById('humidityParag');
    const precipitationParag = document.getElementById('precipitationParag');
    const pressureParag = document.getElementById('pressureParag');
    const iconParag = document.getElementById('iconParag');
    
    
    if(langLS === 'ro') {
        roLangValue.checked = true;
        h1Title.innerHTML = "Vremea în România";
        langFormSpan.innerHTML = "Limba";
        unitsFormSpan.innerHTML = "Unitate";
        timeParag.innerHTML = "Ora:";
        temperatureParag.innerHTML = "Temperatura:";
        sumarryParag.innerHTML = "Sumar:";
        humidityParag.innerHTML = "Umiditate:";
        precipitationParag.innerHTML = "Șanse de precipitații:";
        pressureParag.innerHTML = "Presiune:";
        iconParag.innerHTML = "Icoana:";
    } else if(langLS === 'en') {
        enLangValue.checked = true;
        h1Title.innerHTML = "Weather in Romania";
        langFormSpan.innerHTML = "Language:";
        unitsFormSpan.innerHTML = "Unit:";
        timeParag.innerHTML = "Time:";
        temperatureParag.innerHTML = "Temperature:";
        sumarryParag.innerHTML = "Sumarry:";
        humidityParag.innerHTML = "Humidity:";
        precipitationParag.innerHTML = "Precipitation probability:";
        pressureParag.innerHTML = "Pressure:";
        iconParag.innerHTML = "Icon:";
    };
    
    if(unitLS === 'si') {
        siUnitValue.checked === true;
    } else if(unitLS === 'us') {
        usUnitValue.checked = true;
    };
    
    let unit = unitLS;
    let lang = langLS;
    if((unitLS || langLS || cityLS) === null) {
        console.log("NOOOO");
        resultsContainer.style.display = "none";
        console.log(unitLS, langLS, cityLS);
        const submit = document.getElementById('submit');
        submit.addEventListener('click', ()=> {
            resultsContainer.style.display = "block";
            const langCheck = ()=>{
                if(roLangValue.checked === true) {
                    let lang = roLangValue.value;
                    h1Title.innerHTML = "Vremea în România";
                    langFormSpan.innerHTML = "Limba";
                    unitsFormSpan.innerHTML = "Unitate";
                    timeParag.innerHTML = "Ora:";
                    temperatureParag.innerHTML = "Temperatura:";
                    sumarryParag.innerHTML = "Sumar:";
                    humidityParag.innerHTML = "Umiditate:";
                    precipitationParag.innerHTML = "Șanse de precipitații:";
                    pressureParag.innerHTML = "Presiune:";
                    iconParag.innerHTML = "Icoana:";
                    return lang;
                }
                else if(enLangValue.checked === true) {
                    let lang = enLangValue.value;
                    h1Title.innerHTML = "Weather in Romania";
                    langFormSpan.innerHTML = "Language:";
                    unitsFormSpan.innerHTML = "Unit:";
                    timeParag.innerHTML = "Time:";
                    temperatureParag.innerHTML = "Temperature:";
                    sumarryParag.innerHTML = "Sumarry:";
                    humidityParag.innerHTML = "Humidity:";
                    precipitationParag.innerHTML = "Precipitation probability:";
                    pressureParag.innerHTML = "Pressure:";
                    iconParag.innerHTML = "Icon:";
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

            const city = selectCity.value;

            localStorage.setItem("lang", lang);
            localStorage.setItem("unit", unit);
            localStorage.setItem("city", city);


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
                    localStorage.setItem("city", city);
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
                    localStorage.setItem("city", city);
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
    }
    else if((unitLS && langLS && cityLS) !== null) {
        console.log("AAAAAAAAAAAAAAAAAAA")
        resultsContainer.style.display = "block";
        currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{

            time.innerHTML = transformTime;
            temperature.innerHTML = currentWeather.temperature;
            sumarry.innerHTML = currentWeather.sumarry;
            humidity.innerHTML = currentWeather.humidity;
            precipProbability.innerHTML = currentWeather.precipProbability;
            pressure.innerHTML = currentWeather.pressure;
            icon.innerHTML = currentWeather.icon;


            console.log("xXXXXXXXXxxxxxXXXX", unitLS, cityLS);


            if(unitLS === null) {
                console.log("Nu exista LS pentru unit");
            } else if (unitLS !== null) {
                console.log("EXISTA LS pentru unit");
            }



            const submit = document.getElementById('submit');
            submit.addEventListener('click', ()=> {

                const langCheck = ()=>{
                    if(roLangValue.checked === true) {
                        let lang = roLangValue.value;
    //                    console.log("limba romana");
                        h1Title.innerHTML = "Vremea în România";
                        langFormSpan.innerHTML = "Limba";
                        unitsFormSpan.innerHTML = "Unitate";
                        timeParag.innerHTML = "Ora:";
                        temperatureParag.innerHTML = "Temperatura:";
                        sumarryParag.innerHTML = "Sumar:";
                        humidityParag.innerHTML = "Umiditate:";
                        precipitationParag.innerHTML = "Șanse de precipitații:";
                        pressureParag.innerHTML = "Presiune:";
                        iconParag.innerHTML = "Icoana:";
                        return lang;
                    }
                    else if(enLangValue.checked === true) {
                        let lang = enLangValue.value;
    //                    console.log("limba engleza");
                        h1Title.innerHTML = "Weather in Romania";
                        langFormSpan.innerHTML = "Language:";
                        unitsFormSpan.innerHTML = "Unit:";
                        timeParag.innerHTML = "Time:";
                        temperatureParag.innerHTML = "Temperature:";
                        sumarryParag.innerHTML = "Sumarry:";
                        humidityParag.innerHTML = "Humidity:";
                        precipitationParag.innerHTML = "Precipitation probability:";
                        pressureParag.innerHTML = "Pressure:";
                        iconParag.innerHTML = "Icon:";
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

                const city = selectCity.value;

                localStorage.setItem("lang", lang);
                localStorage.setItem("unit", unit);
                localStorage.setItem("city", city);


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
                        localStorage.setItem("city", city);
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
                        localStorage.setItem("city", city);
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
}