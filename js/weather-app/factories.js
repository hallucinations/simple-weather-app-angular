weatherApp.service('converterFactory', [function($resource) {

    var convertKtoC = function(degK) {
        return Math.round(degK - 273.15, 2);
    };

    var convertSecondsToDate = function(date) {
        return new Date(date * 1000);
    }

    return {
        convertKtoC: convertKtoC,
        convertSecondsToDate: convertSecondsToDate
    }
}])
