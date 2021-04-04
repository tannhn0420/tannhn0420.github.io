var myApp = angular.module("myApp", []);

myApp.controller('myController', function($scope) {

    $scope.update = function() {

        $scope.students[$scope.index] = angular.copy($scope.student);

    };

    $scope.clear = function() {
        $scope.student = {};
        $scope.index = -1;
    };

    $scope.cancel = function() {
        $scope.student = angular.copy($scope.students[$scope.index]);
    };

    $scope.add = function() {
        $scope.students.push(angular.copy($scope.student));
    };

    $scope.delete = function() {
        $scope.students.splice($scope.index, 1);
        $scope.clear();
    }
});

myApp.controller('ListController', function($scope) {
    $scope.$parent.students = [{
            fullname: 'Nguyễn Hoàng Nhật Tân',
            birthday: "13-01-2001",
            marks: 2
        },
        {
            fullname: 'Minh Trang',
            birthday: "20-04-2001",
            marks: 10
        },
        {
            fullname: 'Thi Hoài',
            birthday: "12-01-2002",
            marks: 6
        },
        {
            fullname: 'Yến Trân',
            birthday: "11-03-2004",
            marks: 10
        },
        {
            fullname: 'Đỗ Đạt Cao',
            birthday: "22-12-2222",
            marks: 9
        }



    ];

    $scope.$parent.student = {};
    $scope.$parent.index = -1;
    $scope.edit = function(index) {
        $scope.$parent.index = index;
        $scope.$parent.student = angular.copy($scope.$parent.students[index]);

    }
})