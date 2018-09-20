class Weather{
    constructor() {
        this.time = "";
        this.temperature = "";
        this.sumarry = "";
        this.humidity = "";
        this.precipProbability = "";
        this.pressure = "";
        this.icon = "";
    }

    WeatherFetchData() { 
//        return $.ajax('"https://api.darksky.net/forecast/eb73a945bfe78f7a9e5a2ef08398b860/' + lonlat + '?lang=ro&units=si"', {
        return $.ajax('https://api.darksky.net/forecast/eb73a945bfe78f7a9e5a2ef08398b860/23.6,46.76667?lang=ro&units=si', {
            method: 'GET',
            success: (weatherData)=> {
                const weather = weatherData;
                console.log(weather);
                this.time = weatherData.currently.time;
                this.temperature = weatherData.currently.temperature;
                this.sumarry = weatherData.currently.summary;
                this.humidity = weatherData.currently.humidity;
                this.precipProbability = weatherData.currently.precipProbability;
                this.pressure = weatherData.currently.pressure;
                this.icon = weatherData.currently.icon;
            },
            error: ()=> {
                console.log('nu merge!');
            }
        });
    }
     WeatherFetchDataBuc() { 
        return $.ajax('https://api.darksky.net/forecast/eb73a945bfe78f7a9e5a2ef08398b860/26.10626,44.432251?lang=ro&units=si', {
            method: 'GET',
            success: (weatherData)=> {
                const weather = weatherData;
                console.log(weather);
                this.time = weatherData.currently.time;
                this.temperature = weatherData.currently.temperature;
                this.sumarry = weatherData.currently.summary;
                this.humidity = weatherData.currently.humidity;
                this.precipProbability = weatherData.currently.precipProbability;
                this.pressure = weatherData.currently.pressure;
                this.icon = weatherData.currently.icon;
            },
            error: ()=> {
                console.log('nu merge!');
            }
        });
    }
    WeatherFetchDataClu() { 
        return $.ajax('https://api.darksky.net/forecast/eb73a945bfe78f7a9e5a2ef08398b860/23.6,46.76667?lang=ro&units=si', {
            method: 'GET',
            success: (weatherData)=> {
                const weather = weatherData;
                console.log(weather);
                this.time = weatherData.currently.time;
                this.temperature = weatherData.currently.temperature;
                this.sumarry = weatherData.currently.summary;
                this.humidity = weatherData.currently.humidity;
                this.precipProbability = weatherData.currently.precipProbability;
                this.pressure = weatherData.currently.pressure;
                this.icon = weatherData.currently.icon;
            },
            error: ()=> {
                console.log('nu merge!');
            }
        });
    }
    WeatherFetchDataCon() { 
        return $.ajax('https://api.darksky.net/forecast/eb73a945bfe78f7a9e5a2ef08398b860/28.65,44.183331?lang=ro&units=si', {
            method: 'GET',
            success: (weatherData)=> {
                const weather = weatherData;
                console.log(weather);
                this.time = weatherData.currently.time;
                this.temperature = weatherData.currently.temperature;
                this.sumarry = weatherData.currently.summary;
                this.humidity = weatherData.currently.humidity;
                this.precipProbability = weatherData.currently.precipProbability;
                this.pressure = weatherData.currently.pressure;
                this.icon = weatherData.currently.icon;
            },
            error: ()=> {
                console.log('nu merge!');
            }
        });
    }
    WeatherFetchDataIas() { 
        return $.ajax('https://api.darksky.net/forecast/eb73a945bfe78f7a9e5a2ef08398b860/27.6,47.166672?lang=ro&units=si', {
            method: 'GET',
            success: (weatherData)=> {
                const weather = weatherData;
                console.log(weather);
                this.time = weatherData.currently.time;
                this.temperature = weatherData.currently.temperature;
                this.sumarry = weatherData.currently.summary;
                this.humidity = weatherData.currently.humidity;
                this.precipProbability = weatherData.currently.precipProbability;
                this.pressure = weatherData.currently.pressure;
                this.icon = weatherData.currently.icon;
            },
            error: ()=> {
                console.log('nu merge!');
            }
        });
    }
    WeatherFetchDataTim() { 
        return $.ajax('https://api.darksky.net/forecast/eb73a945bfe78f7a9e5a2ef08398b860/21.227221,45.749439?lang=ro&units=si', {
            method: 'GET',
            success: (weatherData)=> {
                const weather = weatherData;
                console.log(weather);
                this.time = weatherData.currently.time;
                this.temperature = weatherData.currently.temperature;
                this.sumarry = weatherData.currently.summary;
                this.humidity = weatherData.currently.humidity;
                this.precipProbability = weatherData.currently.precipProbability;
                this.pressure = weatherData.currently.pressure;
                this.icon = weatherData.currently.icon;
            },
            error: ()=> {
                console.log('nu merge!');
            }
        });
    }
};


//const Weather = new Weather;
//WeatherFetchData();
//window.onload = ()=> {
//    const currentWeather = new Weather;
//    currentWeather.WeatherFetchData().then(()=>{
//        console.log(currentWeather.icon);
//    });
//}