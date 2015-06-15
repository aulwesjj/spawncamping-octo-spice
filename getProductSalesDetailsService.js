Calculator.factory('ProductSalesDetailsService', ['$http', function ($http) {

    var ProductSalesDetailsService = {};
    ProductSalesDetailsService.getStudents = function () {
        return $http.get('/Home/GetSalesList');
    };
    return ProductSalesDetailsService;

}]);
