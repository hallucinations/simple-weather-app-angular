weatherApp.config(function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: 'js/weather-app/pages/home.html',
            controller: 'homeController'
        })
        .when("/forecast", {
            templateUrl: 'js/weather-app/pages/forecast.html',
            controller: 'forecastController'
        })
        .when("/forecast/:days", {
            templateUrl: 'js/weather-app/pages/forecast.html',
            controller: 'forecastController'
        })
        .when("/weekly-graph", {
            templateUrl: 'js/weather-app/pages/weekly-graph.html',
            controller: 'weeklyGraphController'
        });

});
