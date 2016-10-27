

angular.module('myApp.controllers').controller('internetowyCtrl',
    ['$rootScope','$scope', '$http',
        function ($rootScope, $scope, $http) {
            console.log('Uruchamiam internetowyCtrl');
            $scope.M = {};
            $scope.M.posty = [];
            $scope.fff = '';

        //    Tu piszemy funkcje dostępne w view:
            $scope.sendPostX = function() {
                var toSave = {
                    token: 'abcd',
                    obronaId: 1234,
                    myUser: 'admin'
                };
                
                var rootUrl = 'http://jsonplaceholder.typicode.com';
                
                return $http({
                    url: rootUrl + '/posts',
                    method: 'POST',
                    data: {
                        title: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                        body: 'Abra kadabra',
                        userId: 1
                    },
                    params: toSave
                }).success(function(data){
                    alert('OK, udało się wysłać post');
                });
            };


            $scope.prostyLoad = function () {
                $http.get("http://jsonplaceholder.typicode.com/posts")
                    .success(function (data) {
                        $scope.M.posty = data;
                    })
            };

            $scope.isValidPesel = function (ppesel){
                if (ppesel.length==11) {
                    if (!isNaN(parseFloat(ppesel)) && isFinite(ppesel))
                        return true;
                }
                return false;
            }

            
            

        }
    ]
);





