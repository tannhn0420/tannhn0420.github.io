var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
    $scope.product = {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX- 0048",
        "releaseDate": "May 21,2020",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "./public/images/slider/1.jpg"
    };



});