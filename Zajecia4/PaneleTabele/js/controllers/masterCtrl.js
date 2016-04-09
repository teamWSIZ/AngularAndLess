
angular.module('myApp.controllers',[]);


angular.module('myApp.controllers').controller('masterCtrl',
    ['$rootScope','$scope', '$http',
        function ($rootScope, $scope, $http) {
            console.log('Uruchamiam kontroler');


        //    Tu piszemy funkcje dostępne w view:
            $scope.loadIt = function() {
                var toSave = {
                    token: 'abcd',
                    obronaId: 1234
                };

                return $http({
                    url: rootUrl + 'obrony/setWynik',
                    method: 'POST',
                    params: toSave
                }).success(function(data){
                    //tu mamy dostęp do scope
                });
            }

        }
    ]
);
