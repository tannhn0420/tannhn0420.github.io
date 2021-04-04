var myApp = angular.module("myApp", []);

myApp.controller('productController', function($scope) {
    $scope.products = [

        { name: "Samsung Galaxy Tab A", image: "news_1.jpg", price: 1000 },
        { name: "Máy tính bảng Mobell", image: "news_2.jpg", price: 1500 },
        { name: "Điện thoại Iphone 8", image: "news_3.jpg", price: 2000 },
        { name: "Điện thoại BlackBarry", image: "news_4.jpg", price: 3000 },
        { name: "Điện thoại Realme 5", image: "news_5.jpg", price: 2000 },
        { name: "Điện thoại Nokia 3.2", image: "news_6.jpg", price: 1700 }

    ];
});