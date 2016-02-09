weatherApp.filter('kelvinToCFilter', function() {
    return function(input) {
        return Math.round(degK - 273.15, 2);
    };
});

weatherApp.filter('secondsToDateFilter', function() {
    return function(date) {
        return new Date(date * 1000)
    };
});
