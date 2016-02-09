weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })

    $scope.getForecast = function() {
        $location.path("/forecast")
    }

    $scope.showGraph = function() {
        $location.path("/weekly-graph")
    }
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherAPIService','converterFactory', function($scope, $routeParams, cityService, weatherAPIService, converterFactory) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '7';

    $scope.weatherResult = weatherAPIService.getDailyWeather($scope.city, $scope.days);

    console.log($scope.weatherResult);
    $scope.convertToCelsius = function(degK) {
        return converterFactory.convertKtoC(degK);
    }

    $scope.convertToDate = function(date) {
        return converterFactory.convertSecondsToDate(date);
    }

}]);

weatherApp.controller('weeklyGraphController', ['$scope', '$filter', 'cityService', 'weatherAPIService', 'converterFactory', '_', function($scope, $filter, cityService, weatherAPIService, converterFactory, _) {
    var days = 7;
    $scope.city = cityService.city;
    $scope.weatherResult = weatherAPIService.getDailyWeather($scope.city, $scope.days);

    $scope.weatherResult.$promise.then(function(data) {
        $scope.labels = _.collect($scope.weatherResult.list, function(weather) {
            return $filter('date')(converterFactory.convertSecondsToDate(weather.dt), "EEE dd MMM");
        });

        $scope.series = ['Max', 'Min'];

        $scope.data = [];
        $scope.data.push(_.collect($scope.weatherResult.list, function(weather) {
            return converterFactory.convertKtoC(weather.temp.max);
        }));

        $scope.data.push(_.collect($scope.weatherResult.list, function(weather) {
            return converterFactory.convertKtoC(weather.temp.min);
        }));

        console.log($scope.data)
    });
}]);
