

angular.module('myApp.controllers').controller('internetowyCtrl',
    ['$rootScope','$scope', '$http',
        function ($rootScope, $scope, $http) {
            console.log('Uruchamiam kontroler netowy');
            $scope.posty = [];

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
            };
            
            $scope.prostyLoad = function () {
                $http.get("http://jsonplaceholder.typicode.com/posts")
                    .success(function (data) {
                        $scope.posty = data;
                    })
            }

            
            

        }
    ]
);





