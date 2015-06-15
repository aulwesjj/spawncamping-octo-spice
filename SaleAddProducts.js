angular.module("Calculator", []).controller("SaleAddProductsController",
    function SaleAddProductsController($scope) {
        $scope.productlist = [
               { name: '24 x 24 Painting', },
               { name: '16 x 24 Painting', },
               { name: '12 x 12 Painting', }
        ];

        $scope.ProductSales = [];
    
        $scope.addProductSales = function () {
            $scope.ProductSales.push(angular.copy($scope.selectedProduct) );
        };

        $scope.remove = function (ps) {
            $scope.message = ps
            var index = $scope.ProductSales.indexOf(ps);
            $scope.ProductSales.splice(index, 1);
        }


}
);

