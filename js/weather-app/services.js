weatherApp.service('cityService', [function(){
    this.city = 'Bangalore, India';
}]);


weatherApp.service('weatherAPIService', ['$resource', function($resource) {

    var dailyWeatherApi = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
        { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' }});
    var appId =  '44db6a862fba0b067b1930da0d769e98';

    this.getDailyWeather = function(city, days) {
        return dailyWeatherApi.get({
            q: city,
            cnt: days,
            appid: appId
        });
    }
}])
