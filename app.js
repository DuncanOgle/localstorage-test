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


    //// TEST 1 - Loading
    //Storage.load(1).then(function (data) {
    //    var timing = [];
    //    for (var i = 0; i < reps; i++) {
    //        var start = Date.now();
    //        Storage.get();
    //        timing.push(Date.now() - start);
    //    }
    //    $scope.timings.push({quantity: 1, data: timing});
    //
    //    Storage.load(250).then(function (data) {
    //        var timing = [];
    //        for (var i = 0; i < reps; i++) {
    //            var start = Date.now();
    //            Storage.get();
    //            timing.push(Date.now() - start);
    //        }
    //        $scope.timings.push({quantity: 250, data: timing});
    //
    //        Storage.load(500).then(function (data) {
    //            var timing = [];
    //            for (var i = 0; i < reps; i++) {
    //                var start = Date.now();
    //                Storage.get();
    //                timing.push(Date.now() - start);
    //            }
    //            $scope.timings.push({quantity: 500, data: timing});
    //
    //            Storage.load(1000).then(function (data) {
    //                var timing = [];
    //                for (var i = 0; i < reps; i++) {
    //                    var start = Date.now();
    //                    Storage.get();
    //                    timing.push(Date.now() - start);
    //                }
    //                $scope.timings.push({quantity: 1000, data: timing});
    //                $scope.end = Date.now();
    //            });
    //        });
    //    });
    //});

    //// TEST 2 - Saving
    //Storage.load(1).then(function (data) {
    //    var timing = [];
    //    for (var i = 0; i < reps; i++) {
    //        var start = Date.now();
    //        Storage.save();
    //        timing.push(Date.now() - start);
    //    }
    //    $scope.timings.push({quantity: 1, data: timing});
    //
    //    Storage.load(250).then(function (data) {
    //        var timing = [];
    //        for (var i = 0; i < reps; i++) {
    //            var start = Date.now();
    //            Storage.save();
    //            timing.push(Date.now() - start);
    //        }
    //        $scope.timings.push({quantity: 250, data: timing});
    //
    //        Storage.load(500).then(function (data) {
    //            var timing = [];
    //            for (var i = 0; i < reps; i++) {
    //                var start = Date.now();
    //                Storage.save();
    //                timing.push(Date.now() - start);
    //            }
    //            $scope.timings.push({quantity: 500, data: timing});
    //
    //            Storage.load(1000).then(function (data) {
    //                var timing = [];
    //                for (var i = 0; i < reps; i++) {
    //                    var start = Date.now();
    //                    Storage.save();
    //                    timing.push(Date.now() - start);
    //                }
    //                $scope.timings.push({quantity: 1000, data: timing});
    //                $scope.end = Date.now();
    //            });
    //        });
    //    });
    //});

    // TEST 3 - Searching
    Storage.load(1).then(function (data) {
        var timing = [];
        for (var i = 0; i < reps; i++) {
            var start = Date.now();
            Storage.search();
            timing.push(Date.now() - start);
        }
        $scope.timings.push({quantity: 1, data: timing});

        Storage.load(250).then(function (data) {
            var timing = [];
            for (var i = 0; i < reps; i++) {
                var start = Date.now();
                Storage.search();
                timing.push(Date.now() - start);
            }
            $scope.timings.push({quantity: 250, data: timing});

            Storage.load(500).then(function (data) {
                var timing = [];
                for (var i = 0; i < reps; i++) {
                    var start = Date.now();
                    Storage.search();
                    timing.push(Date.now() - start);
                }
                $scope.timings.push({quantity: 500, data: timing});

                Storage.load(1000).then(function (data) {
                    var timing = [];
                    for (var i = 0; i < reps; i++) {
                        var start = Date.now();
                        Storage.search();
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
                //console.log(response);
                //localStorage['data'] = JSON.stringify(response.data);
                data = response.data;
            });
        },
        get: function () {
            //return JSON.parse(localStorage['data']);
            return data;
        },
        save: function () {
            localStorage['data'] = JSON.stringify(data);
        },
        search: function () {
            //console.log(data);
            // Loop over every item
            //for(var i = 0, len = JSON.parse(localStorage['data']); i<len; i++) {}
            for(var i = 0, len = data.length; i<len; i++) {}
        }
    };
}]);