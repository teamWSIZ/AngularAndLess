

angular.module('myApp.controllers').controller('internetowyCtrl',
    ['$rootScope','$scope', '$http',
        function ($rootScope, $scope, $http) {
            console.log('Uruchamiam kontroler netowy');

            
            $scope.tabRezerwacji = [{id:1, nazwa:'Alpha'}, 
                {id:2, nazwa:'Beta'}, {id:3, nazwa:'Gamma'}];
            
            $scope.posty = [];

            $scope.nowa = {id: '', nazwa: ''};

            $scope.dodajRezerwacje = function (nnn) {
                $scope.tabRezerwacji.push(nnn);
                $scope.nowa = {id: '', nazwa: ''};
                $scope.MMM.showNewBooking = false;
            };


        //    Tu piszemy funkcje dostępne w view:
            $scope.loadPosts = function() {
                var toSave = {
                    // token: 'abcd',
                    // obronaId: 1234
                };
                
                var rootUrl = 'http://jsonplaceholder.typicode.com';
                
                return $http({
                    url: rootUrl + '/posts',
                    method: 'GET'
                    // params: toSave
                }).success(function(data){
                    //tu mamy dostęp do scope
                    // $scope.tabRezerwacji = data.result;
                    $scope.posty = data;
                });
            }

        }
    ]
);
