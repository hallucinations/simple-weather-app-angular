weatherApp.directive('forecastResult', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/weather-app/directives/forecast-result.html',
        replace: true,
        scope: {
            weatherDay: '=',
            convertToStandard: '&',
            convertToDate: '&',
            dateFormat: '@'
        }
    };
});
