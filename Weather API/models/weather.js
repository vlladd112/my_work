class Weather{
    constructor() {
        this.time = "";
        this.temperature = "";
        this.summary = "";
        this.humidity = "";
        this.precipProbability = "";
        this.windSpeed = ""
        this.pressure = "";
        this.weeklySummary = "";
    }

    WeatherFetchData(lon, lat, lang, unit) { 
        return $.ajax('https://api.darksky.net/forecast/eb73a945bfe78f7a9e5a2ef08398b860/' + lon + ',' + lat + '?lang=' + lang + '&units=' + unit, {
            method: 'GET',
            success: (weatherData)=> {
                const weather = weatherData;
                console.log(weather);
                this.time = weatherData.currently.time;
                this.temperature = weatherData.currently.temperature;
                this.summary = weatherData.currently.summary;
                this.humidity = weatherData.currently.humidity;
                this.precipProbability = weatherData.currently.precipProbability;
                this.windSpeed = weatherData.currently.windSpeed;
                this.pressure = weatherData.currently.pressure;
                this.weeklySummary = weatherData.daily.summary;
            },
            error: ()=> {
                console.log('nu merge!');
            }
        });
    }
};