$.ajax('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d7af8cd6bc63e3f3604337a4d678786b', {
 method: 'GET',
    success: (response)=> {
        console.log(response);
    },
    error: ()=> {
        console.log('nu merge');
    }
});