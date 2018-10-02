window.onload = ()=> {
    const currentWeather = new Weather;
    
    const unitLS = localStorage.getItem("unit");
    const langLS = localStorage.getItem("lang");
    const lonLS = localStorage.getItem("lon");
    const latLS = localStorage.getItem("lat");
    const cityLS = localStorage.getItem("city");
    
    console.log(langLS, unitLS, lonLS, latLS);
    
    const roLangValue = document.getElementById('roLangRadioBtn');
    const enLangValue = document.getElementById('enLangRadioBtn');
    const caUnitValue = document.getElementById('caUnitsRadioBtn');
    const usUnitValue = document.getElementById('usUnitsRadioBtn');
    const selectCity = document.getElementById('selectCity');
    
    const resultsContainer = document.getElementById('resultsContainer');
    const citySelectionTitle = document.getElementById('citySelectionTitle');
    const cityName = document.getElementById('cityName');
    const time = document.getElementById('timeSpan');
    const temperature = document.getElementById('temperatureSpan');
    const summary = document.getElementById('summarySpan');
    const humidity = document.getElementById('humiditySpan');
    const precipProbability = document.getElementById('precipProbabilitySpan');
    const windSpeed = document.getElementById('windSpeedSpan');
    const pressure = document.getElementById('pressureSpan');
    const weeklySummary = document.getElementById('weeklySummarySpan');
    const psParag = document.getElementById('psParag');
    
    function Unix_timestamp(t) {
        var dt = new Date(t*1000);
        var hr = dt.getHours();
        var m = "0" + dt.getMinutes();
        var s = "0" + dt.getSeconds();
        return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
    }

    selectCity.value = cityLS;
    cityName.innerHTML = cityLS;
    
    const langFormSpan = document.getElementById('languageSpan');
    const unitsFormSpan = document.getElementById('unitsSpan');
    const h1Title = document.getElementById('h1Title');
    const timeParag = document.getElementById('timeParag');
    const temperatureParag = document.getElementById('temperatureParag');
    const summaryParag = document.getElementById('summaryParag');
    const humidityParag = document.getElementById('humidityParag');
    const precipitationParag = document.getElementById('precipitationParag');
    const windSpeedParag = document.getElementById('windSpeedParag');
    const pressureParag = document.getElementById('pressureParag');
    const weeklySummaryParag = document.getElementById('weeklySummaryParag');
    
    if(langLS === 'ro') {
        roLangValue.checked = true;
        h1Title.innerHTML = "Vremea în România";
        citySelectionTitle.innerHTML = "Oraș";
        langFormSpan.innerHTML = "Limbă";
        unitsFormSpan.innerHTML = "Unitate";
        timeParag.innerHTML = "Ultima actualizare:";
        temperatureParag.innerHTML = "Temperatura:";
        summaryParag.innerHTML = "Sumar:";
        windSpeedParag.innerHTML = "Viteza vântului:";
        humidityParag.innerHTML = "Umiditate:";
        precipitationParag.innerHTML = "Șanse de precipitații:";
        pressureParag.innerHTML = "Presiune:";
        weeklySummaryParag.innerHTML = "Sumar&nbsp;săptămânal:&nbsp;";
        psParag.innerHTML = "* e posibil ca informațiile depre vreme să nu fie precise sau actualizate; aceasta e doar o pagina demo."
    } else if(langLS === 'en') {
        enLangValue.checked = true;
        h1Title.innerHTML = "Weather in Romania";
        citySelectionTitle.innerHTML = "City";
        langFormSpan.innerHTML = "Language";
        unitsFormSpan.innerHTML = "Unit";
        timeParag.innerHTML = "Last update:";
        temperatureParag.innerHTML = "Temperature:";
        summaryParag.innerHTML = "Summary:";
        windSpeedParag.innerHTML = "Wind speed:";
        humidityParag.innerHTML = "Humidity:";
        precipitationParag.innerHTML = "Precipitation probability:";
        pressureParag.innerHTML = "Pressure:";
        weeklySummaryParag.innerHTML = "Weekly&nbsp;summary:&nbsp;";
        psParag.innerHTML = "* the weather information may not be accurate or updated; this is just a demo page.";
    };
    
    const tempUnit = document.getElementById('tempUnit');
    const windUnit = document.getElementById('windUnit');
    
    if(unitLS === 'ca') {
        caUnitValue.checked === true;
        tempUnit.innerHTML = "&#8451";
        windUnit.innerHTML = "km/h";
    } else if(unitLS === 'us') {
        usUnitValue.checked = true;
        tempUnit.innerHTML = "&#8457";
        windUnit.innerHTML = "mph";
    };
    
    let lon = lonLS;
    let lat = latLS;
    let lang = langLS;
    let unit = unitLS;
    
    if((lat === null) || (lon === null)) {
        console.log(lat, lon);
    }
    
    
    
    if((lonLS === null) || (latLS === null) || (langLS === null) || (unitLS === null) || (cityLS === null)) {
        console.log("NOOOO");
        resultsContainer.style.display = "none";
        const submit = document.getElementById('submit');
        submit.addEventListener('click', ()=> {
            console.log(lon, lat, lang, unit);
            const noLsLangCheck = ()=> {
                if(roLangValue.checked === true) {
                    console.log(roLangValue.value);
                    lang = roLangValue.value;
                    return lang;
                } else if (enLangValue.checked === true) {
                    lang = enLangValue.value;
                    console.log(enLangValue.value);
                    return lang;
                }
                return lang;
            }
            
            const noLsUnitCheck = ()=> {
                if(caUnitValue.checked === true) {
                    unit = caUnitValue.value;
                    console.log(caUnitValue.value);
                    return unit;
                } else if(usUnitValue.checked === true) {
                    unit = usUnitValue.value;
                    console.log(usUnitValue.value);
                    return unit;
                }
                return unit;
            }
            
            const noLsLonLatCheck = ()=>{
               if(selectCity.value === "București") {
                    lon = '26.10626';
                    lat = '44.432251';
                    console.log(lon, lat);
                    return lon, lat;
               } else if(selectCity.value === "Cluj-Napoca") {
                    lon = '23.6';
                    lat = '46.76667';
                    console.log(lon, lat);
                    return lon, lat;
                } else if(selectCity.value === "Constanța") {
                    lon = '28.65';
                    lat = '44.183331';
                    console.log(lon, lat);
                    return lon, lat;
                } else if(selectCity.value === "Iași") {
                    lon = '27.6';
                    lat = '47.166672';
                    console.log(lon, lat);
                    return lon, lat;
                } else if(selectCity.value === "Timișoara") {
                    lon = '21.227221';
                    lat = '45.749439';
                    console.log(lon, lat);
                    return lon, lat;
                }
                
                return lon, lat;
            }
            noLsUnitCheck();
            noLsLangCheck();
            noLsLonLatCheck();
            console.log(lon, lat); 
            console.log(lon, lat, lang, unit);
            currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{    
                const transformTime = Unix_timestamp(currentWeather.time);
                console.log("CUREEEEEENT VREME", currentWeather.time);

                resultsContainer.style.display = "block";
                cityName.innerHTML = selectCity.value;
                const langCheck = ()=>{
                    if(roLangValue.checked === true) {
                        let lang = roLangValue.value;
                        h1Title.innerHTML = "Vremea în România";
                        citySelectionTitle.innerHTML = "Oraș";
                        langFormSpan.innerHTML = "Limbă";
                        unitsFormSpan.innerHTML = "Unitate";
                        timeParag.innerHTML = "Ultima actualizare:";
                        temperatureParag.innerHTML = "Temperatura:";
                        summaryParag.innerHTML = "Sumar:";
                        windSpeedParag.innerHTML = "Viteza vântului:";
                        humidityParag.innerHTML = "Umiditate:";
                        precipitationParag.innerHTML = "Șanse de precipitații:";
                        pressureParag.innerHTML = "Presiune:";
                        weeklySummaryParag.innerHTML = "Sumar&nbsp;săptămânal:&nbsp;";
                        psParag.innerHTML = "* e posibil ca informațiile depre vreme să nu fie precise sau actualizate; aceasta e doar o pagina demo."
                        return lang;
                    }
                    else if(enLangValue.checked === true) {
                        let lang = enLangValue.value;
                        h1Title.innerHTML = "Weather in Romania";
                        citySelectionTitle.innerHTML = "City";
                        langFormSpan.innerHTML = "Language";
                        unitsFormSpan.innerHTML = "Unit";
                        timeParag.innerHTML = "Last update:";
                        temperatureParag.innerHTML = "Temperature:";
                        summaryParag.innerHTML = "Summary:";
                        windSpeedParag.innerHTML = "Wind Speed:";
                        humidityParag.innerHTML = "Humidity:";
                        precipitationParag.innerHTML = "Precipitation probability:";
                        pressureParag.innerHTML = "Pressure:";
                        weeklySummaryParag.innerHTML = "Weekly&nbsp;summary:&nbsp;";
                        psParag.innerHTML = "* the weather information may not be accurate or updated; this is just a demo page.";
                        return lang;
                    };

                    return lang;
                };

                lang = langCheck();

                const unitsCheck = ()=>{
                    if(caUnitValue.checked === true) {
                        let unit = caUnitValue.value;
                        tempUnit.innerHTML = "&#8451";
                        windUnit.innerHTML = "km/h";
                        return unit;
                    }
                    else if(usUnitValue.checked === true) {
                        let unit = usUnitValue.value;
                        tempUnit.innerHTML = "&#8457";
                        windUnit.innerHTML = "mph";
                        return unit;
                    };
                    return unit;
                }

                unit = unitsCheck();

                const city = selectCity.value;

                localStorage.setItem("lang", lang);
                localStorage.setItem("unit", unit);
                localStorage.setItem("city", city);
                if(selectCity.value === "București") {
                    const lon = '26.10626';
                    const lat = '44.432251';
                    currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                        time.innerHTML = transformTime;
                        temperature.innerHTML = Math.round(currentWeather.temperature*10)/10;
                        summary.innerHTML = currentWeather.summary;
                        windSpeed.innerHTML = currentWeather.windSpeed;
                        humidity.innerHTML = (Math.round(currentWeather.humidity*1000)/10);
                        precipProbability.innerHTML = (Math.round(currentWeather.precipProbability*1000)/10);
                        pressure.innerHTML = currentWeather.pressure;
                        weeklySummary.innerHTML = currentWeather.weeklySummary;
                        localStorage.setItem("lon", lon);
                        localStorage.setItem("lat", lat);
                    })
                } else if(selectCity.value === "Cluj-Napoca") {
                    const lon = '23.6';
                    const lat = '46.76667';
                    currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                        time.innerHTML = transformTime;
                        temperature.innerHTML = Math.round(currentWeather.temperature*10)/10;
                        summary.innerHTML = currentWeather.summary;
                        windSpeed.innerHTML = currentWeather.windSpeed;
                        humidity.innerHTML = (Math.round(currentWeather.humidity*1000)/10);
                        precipProbability.innerHTML = (Math.round(currentWeather.precipProbability*1000)/10);
                        pressure.innerHTML = currentWeather.pressure;
                        weeklySummary.innerHTML = currentWeather.weeklySummary;  
                        localStorage.setItem("lon", lon);
                        localStorage.setItem("lat", lat);
                    })
                } else if(selectCity.value === "Constanța") {
                    const lon = '28.65';
                    const lat = '44.183331';
                    currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                        time.innerHTML = transformTime;
                        temperature.innerHTML = Math.round(currentWeather.temperature*10)/10;
                        summary.innerHTML = currentWeather.summary;
                        windSpeed.innerHTML = currentWeather.windSpeed;
                        humidity.innerHTML = (Math.round(currentWeather.humidity*1000)/10);
                        precipProbability.innerHTML = (Math.round(currentWeather.precipProbability*1000)/10);
                        pressure.innerHTML = currentWeather.pressure;
                        weeklySummary.innerHTML = currentWeather.weeklySummary;  
                        localStorage.setItem("lon", lon);
                        localStorage.setItem("lat", lat);
                    })
                } else if(selectCity.value === "Iași") {
                    const lon = '27.6';
                    const lat = '47.166672';
                    currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                        time.innerHTML = transformTime;
                        temperature.innerHTML = Math.round(currentWeather.temperature*10)/10;
                        summary.innerHTML = currentWeather.summary;
                        windSpeed.innerHTML = currentWeather.windSpeed;
                        humidity.innerHTML = (Math.round(currentWeather.humidity*1000)/10);
                        precipProbability.innerHTML = (Math.round(currentWeather.precipProbability*1000)/10);
                        pressure.innerHTML = currentWeather.pressure;
                        weeklySummary.innerHTML = currentWeather.weeklySummary;
                        localStorage.setItem("lon", lon);
                        localStorage.setItem("lat", lat);
                    })
                } else if(selectCity.value === "Timișoara") {
                    const lon = '21.227221';
                    const lat = '45.749439';
                    currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                        time.innerHTML = transformTime;
                        temperature.innerHTML = Math.round(currentWeather.temperature*10)/10;
                        summary.innerHTML = currentWeather.summary;
                        windSpeed.innerHTML = currentWeather.windSpeed;
                        humidity.innerHTML = (Math.round(currentWeather.humidity*1000)/10);
                        precipProbability.innerHTML = (Math.round(currentWeather.precipProbability*1000)/10);
                        pressure.innerHTML = currentWeather.pressure;
                        weeklySummary.innerHTML = currentWeather.weeklySummary;
                        localStorage.setItem("lon", lon);
                        localStorage.setItem("lat", lat);
                    })
                }
            })
        })
    }
    else if((unitLS && langLS && lonLS && latLS && cityLS) !== null) {
        resultsContainer.style.display = "block";
        cityName.innerHTML = cityLS;
        currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
            const transformTime = Unix_timestamp(currentWeather.time);
            console.log("sa vedem timpul", transformTime);
            time.innerHTML = transformTime;
            temperature.innerHTML = Math.round(currentWeather.temperature*10)/10;
            summary.innerHTML = currentWeather.summary;
            windSpeed.innerHTML = currentWeather.windSpeed;
            humidity.innerHTML = (Math.round(currentWeather.humidity*1000)/10);
            precipProbability.innerHTML = (Math.round(currentWeather.precipProbability*1000)/10);
            pressure.innerHTML = currentWeather.pressure;
            weeklySummary.innerHTML = currentWeather.weeklySummary;

            if(unitLS === null) {
                console.log("Nu exista LS pentru unit");
            } else if (unitLS !== null) {
                console.log("EXISTA LS pentru unit");
            }

            const submit = document.getElementById('submit');
            submit.addEventListener('click', ()=> {
                cityName.innerHTML = selectCity.value;
//                const transformTime = Unix_timestamp(currentWeather.time);
                const langCheck = ()=>{
                    if(roLangValue.checked === true) {
                        let lang = roLangValue.value;
                        h1Title.innerHTML = "Vremea în România";
                        citySelectionTitle.innerHTML = "Oraș";
                        langFormSpan.innerHTML = "Limbă";
                        unitsFormSpan.innerHTML = "Unitate";
                        timeParag.innerHTML = "Ultima actualizare:";
                        temperatureParag.innerHTML = "Temperatura:";
                        summaryParag.innerHTML = "Sumar:";
                        windSpeedParag.innerHTML = "Viteza vântului:";
                        humidityParag.innerHTML = "Umiditate:";
                        precipitationParag.innerHTML = "Șanse de precipitații:";
                        pressureParag.innerHTML = "Presiune:";
                        weeklySummaryParag.innerHTML = "Sumar&nbsp;săptămânal:&nbsp;";
                        psParag.innerHTML = "* e posibil ca informațiile depre vreme să nu fie precise sau actualizate; aceasta e doar o pagina demo."
                        return lang;
                    }
                    else if(enLangValue.checked === true) {
                        let lang = enLangValue.value;
                        h1Title.innerHTML = "Weather in Romania";
                        citySelectionTitle.innerHTML = "City";
                        langFormSpan.innerHTML = "Language";
                        unitsFormSpan.innerHTML = "Unit";
                        timeParag.innerHTML = "Last update:";
                        temperatureParag.innerHTML = "Temperature:";
                        summaryParag.innerHTML = "Summary:";
                        windSpeedParag.innerHTML = "Wind speed:";
                        humidityParag.innerHTML = "Humidity:";
                        precipitationParag.innerHTML = "Precipitation probability:";
                        pressureParag.innerHTML = "Pressure:";
                        weeklySummaryParag.innerHTML = "Weekly&nbsp;summary:&nbsp;";
                        psParag.innerHTML = "* the weather information may not be accurate or updated; this is just a demo page.";
                        return lang;
                    };
                    return lang;
                };

                lang = langCheck();

                const unitsCheck = ()=>{
                    if(caUnitValue.checked === true) {
                        let unit = caUnitValue.value;
                        tempUnit.innerHTML = "&#8451";
                        windUnit.innerHTML = "km/h";
                        return unit;
                    }
                    else if(usUnitValue.checked === true) {
                        let unit = usUnitValue.value;
                        tempUnit.innerHTML = "&#8457";
                        windUnit.innerHTML = "mph";
                        return unit;
                    };
                    return unit;
                }

                unit = unitsCheck();

                const city = selectCity.value;

                localStorage.setItem("lang", lang);
                localStorage.setItem("unit", unit);
                localStorage.setItem("city", city);
//const transformTime = Unix_timestamp(currentWeather.time);
                if(selectCity.value === "București") {
                    const lon = '26.10626';
                    const lat = '44.432251';
                    currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                        
                        const transformTime = Unix_timestamp(currentWeather.time);
                        console.log("timpul la Bucuresti:", transformTime);
                        time.innerHTML = transformTime;
                        temperature.innerHTML = Math.round(currentWeather.temperature*10)/10;
                        summary.innerHTML = currentWeather.summary;
                        windSpeed.innerHTML = currentWeather.windSpeed;
                        humidity.innerHTML = (Math.round(currentWeather.humidity*1000)/10);
                        precipProbability.innerHTML = (Math.round(currentWeather.precipProbability*1000)/10);
                        pressure.innerHTML = currentWeather.pressure;
                        weeklySummary.innerHTML = currentWeather.weeklySummary;
                        console.log(currentWeather.summary);
                        localStorage.setItem("lon", lon);
                        localStorage.setItem("lat", lat);
                    })

                } else if(selectCity.value === "Cluj-Napoca") {
                    const lon = '23.6';
                    const lat = '46.76667';
                    currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                        const transformTime = Unix_timestamp(currentWeather.time);
                        time.innerHTML = transformTime;
                        temperature.innerHTML = Math.round(currentWeather.temperature*10)/10;
                        summary.innerHTML = currentWeather.summary;
                        windSpeed.innerHTML = currentWeather.windSpeed;
                        humidity.innerHTML = (Math.round(currentWeather.humidity*1000)/10);
                        precipProbability.innerHTML = (Math.round(currentWeather.precipProbability*1000)/10);
                        pressure.innerHTML = currentWeather.pressure;
                        weeklySummary.innerHTML = currentWeather.weeklySummary;  
                        localStorage.setItem("lon", lon);
                        localStorage.setItem("lat", lat);
                    })
                } else if(selectCity.value === "Constanța") {
                    const lon = '28.65';
                    const lat = '44.183331';
                    currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                        const transformTime = Unix_timestamp(currentWeather.time);
                        time.innerHTML = transformTime;
                        temperature.innerHTML = Math.round(currentWeather.temperature*10)/10;
                        summary.innerHTML = currentWeather.summary;
                        windSpeed.innerHTML = currentWeather.windSpeed;
                        humidity.innerHTML = (Math.round(currentWeather.humidity*1000)/10);
                        precipProbability.innerHTML = (Math.round(currentWeather.precipProbability*1000)/10);
                        pressure.innerHTML = currentWeather.pressure;
                        weeklySummary.innerHTML = currentWeather.weeklySummary;
                        localStorage.setItem("lon", lon);
                        localStorage.setItem("lat", lat);
                    })
                } else if(selectCity.value === "Iași") {
                    const lon = '27.6';
                    const lat = '47.166672';
                    currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                        const transformTime = Unix_timestamp(currentWeather.time);
                        time.innerHTML = transformTime;
                        temperature.innerHTML = Math.round(currentWeather.temperature*10)/10;
                        summary.innerHTML = currentWeather.summary;
                        windSpeed.innerHTML = currentWeather.windSpeed;
                        humidity.innerHTML = (Math.round(currentWeather.humidity*1000)/10);
                        precipProbability.innerHTML = (Math.round(currentWeather.precipProbability*1000)/10);
                        pressure.innerHTML = currentWeather.pressure;
                        weeklySummary.innerHTML = currentWeather.weeklySummary;
                        localStorage.setItem("lon", lon);
                        localStorage.setItem("lat", lat);
                    })
                } else if(selectCity.value === "Timișoara") {
                    const lon = '21.227221';
                    const lat = '45.749439';
                    currentWeather.WeatherFetchData(lon, lat, lang, unit).then(()=>{
                        const transformTime = Unix_timestamp(currentWeather.time);
                        time.innerHTML = transformTime;
                        temperature.innerHTML = Math.round(currentWeather.temperature*10)/10;
                        summary.innerHTML = currentWeather.summary;
                        windSpeed.innerHTML = currentWeather.windSpeed;
                        humidity.innerHTML = (Math.round(currentWeather.humidity*1000)/10);
                        precipProbability.innerHTML = (Math.round(currentWeather.precipProbability*1000)/10);
                        pressure.innerHTML = currentWeather.pressure;
                        weeklySummary.innerHTML = currentWeather.weeklySummary;
                        localStorage.setItem("lon", lon);
                        localStorage.setItem("lat", lat);
                    })
                }
            })
        });
    }
}