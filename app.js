/**
 * Created by duncanogle on 01/02/2016.
 */

var app = angular.module('app', []);


app.controller('mainController', ['$scope', 'Storage', function ($scope, Storage) {
    $scope.timings = [];
    $scope.timestamp = 0;
    $scope.start = Date.now();

    setInterval(function() {
        document.getElementById('time').innerHTML = Date.now();
    }, 10);

    var reps = 1000;


    Storage.load(1).then(function (data) {
        var timing = [];
        for (var i = 0; i < reps; i++) {
            var start = Date.now();
            Storage.get();
            timing.push(Date.now() - start);
        }
        $scope.timings.push({quantity: 1, data: timing});

        Storage.load(250).then(function (data) {
            var timing = [];
            for (var i = 0; i < reps; i++) {
                var start = Date.now();
                Storage.get();
                timing.push(Date.now() - start);
            }
            $scope.timings.push({quantity: 250, data: timing});

            Storage.load(500).then(function (data) {
                var timing = [];
                for (var i = 0; i < reps; i++) {
                    var start = Date.now();
                    Storage.get();
                    timing.push(Date.now() - start);
                }
                $scope.timings.push({quantity: 500, data: timing});

                Storage.load(1000).then(function (data) {
                    var timing = [];
                    for (var i = 0; i < reps; i++) {
                        var start = Date.now();
                        Storage.get();
                        timing.push(Date.now() - start);
                    }
                    $scope.timings.push({quantity: 1000, data: timing});
                    $scope.end = Date.now();
                });
            });
        });
    });


    $scope.calculateAverage = function (MyData) {
        var sum = 0;
        for (var i = 0; i < MyData.length; i++) {
            sum += parseInt(MyData[i], 10); //don't forget to add the base
        }

        return (sum / MyData.length);
    }
}]);

/**
 * Created by duncanogle on 08/03/2015.
 */
app.factory('Storage', ['$http', function ($http) {
    var data = null;
    return {
        load: function (quantity) {
            return $http.get('dummy-' + quantity + ".json").then(function (response) {
                localStorage['data'] = JSON.stringify(response.data);
                var data = response.data;
            });
        },
        get: function () {
            //return JSON.parse(localStorage['data']);
            return data;
        },
        getFromStorage: function() {
            return data;
        }
    };
}]);