angular.module('mainApp', [])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {image: 'img/slide-1.jpg', description: 'Image 00'},
            {image: 'img/slide-2.jpg', description: 'Image 01'},
            {image: 'img/slide-3.jpg', description: 'Image 02'},
            {image: 'img/slide-4.jpg', description: 'Image 03'},
            {image: 'img/slide-5.jpg', description: 'Image 04'}
        ];

    })

.controller('customersCtrl', function($scope, $http, myService){
    $http.get("https://jsonblob.com/api/jsonBlob/564cb5a2e4b01190df407434")
        .success(function(response) {
            $scope.names = response.records;
        });

        $scope.linkTo = function(ind) {
            alert(ind);
            myService.set(ind);
        };
})

.factory('myService', function() {
    var savedData = '';
    function set(data) {
        savedData = data;
        alert("Set:"+data);
    }
    function get() {
        return savedData;
    }

    return {
        set: set,
        get: get
    }

});

/*.controller('customersCtrl', function($scope, $http) {
    $http.get("http://www.w3schools.com/angular/customers.php")
        .success(function(response) {
            $scope.names = response.records;
        });
});*/


/*theApp.factory('mainInfo', function($http) {

    var obj = {content:null};

    $http.get('content.json').success(function(data) {
        // you can do some processing here
        obj.content = data;
    });

    return obj;
});

theApp.factory('mainInfo', function($http) {
    return $http.get('content.json');
});

$scope.foo = "Hello World";
mainInfo.success(function(data) {
    $scope.foo = "Hello "+data.contentItem[0].username;
});



<body ng-app="MyApp">
    <div ng-controller="PostsCtrl">
    <ul ng-repeat="post in posts">
    <li>{{post.title}}</li>
</ul>
</div>
</body>

var app = angular.module("MyApp", []);

app.controller("PostsCtrl", function($scope, $http) {
    $http.get('data/posts.json').
        success(function(data, status, headers, config) {
            $scope.posts = data;
        }).
        error(function(data, status, headers, config) {
            // log error
        });
});*/

