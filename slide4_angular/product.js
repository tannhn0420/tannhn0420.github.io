var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {

    $scope.listProducts = [{
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://organicfood.vn/image/catalog/Anhblog/rau-cu-qua-co-chat-gi-1.jpg"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://www.gilmour.com/wp-content/uploads/2017/08/fall-vegetables-featured.jpg"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://www.bing.com/th?id=OIP.Tda39H1rGWc7dtXV7eoLRQHaHa&w=145&h=160&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2"
        },
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "https://th.bing.com/th/id/OIP.Fw-abT_3U8N5skKszQlofQHaHa?w=183&h=183&c=7&o=5&dpr=1.25&pid=1.7"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "https://th.bing.com/th/id/OIP.T3EyBQE64LGbZSvDMEPvbgHaE7?w=266&h=180&c=7&o=5&dpr=1.25&pid=1.7"
        }
    ];
    $scope.products = [{
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://organicfood.vn/image/catalog/Anhblog/rau-cu-qua-co-chat-gi-1.jpg"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://www.gilmour.com/wp-content/uploads/2017/08/fall-vegetables-featured.jpg"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://www.bing.com/th?id=OIP.Tda39H1rGWc7dtXV7eoLRQHaHa&w=145&h=160&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2"
        },
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "https://th.bing.com/th/id/OIP.Fw-abT_3U8N5skKszQlofQHaHa?w=183&h=183&c=7&o=5&dpr=1.25&pid=1.7"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "https://th.bing.com/th/id/OIP.T3EyBQE64LGbZSvDMEPvbgHaE7?w=266&h=180&c=7&o=5&dpr=1.25&pid=1.7"
        }
    ];

    $scope.isShow = true;
    $scope.showHide = function() {
        $scope.isShow = !$scope.isShow;
    };

    $scope.filterValue = "";
    $scope.filter = function() {
        $scope.products = $scope.listProducts.filter(p => p.productName.indexOf($scope.filterValue) >= 0)
    };

});

myApp.controller("detailController", function($scope) {
    $scope.products = [{
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://organicfood.vn/image/catalog/Anhblog/rau-cu-qua-co-chat-gi-1.jpg"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://www.gilmour.com/wp-content/uploads/2017/08/fall-vegetables-featured.jpg"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://www.bing.com/th?id=OIP.Tda39H1rGWc7dtXV7eoLRQHaHa&w=145&h=160&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2"
        },
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "https://th.bing.com/th/id/OIP.Fw-abT_3U8N5skKszQlofQHaHa?w=183&h=183&c=7&o=5&dpr=1.25&pid=1.7"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "https://th.bing.com/th/id/OIP.T3EyBQE64LGbZSvDMEPvbgHaE7?w=266&h=180&c=7&o=5&dpr=1.25&pid=1.7"
        }
    ];
    $scope.queryString = location.search;
    $scope.urlParams = new URLSearchParams($scope.queryString);
    $scope.id = $scope.urlParams.get('id');
    // tìm
    $scope.product = $scope.products.find(p => p.productId == $scope.id);



    // fucntion back
    $scope.onBack = function() {
        history.back();
    };

});