angular.module("Calculator", []).controller("CalculatorController",
	function CalculatorController($scope) {
	    $scope.displayValue = 0;
	    $scope.displayValueNumberOne = 0;
	    $scope.displayValueNumberTwo = 0;
	    $scope.memory = null;
	    $scope.result = 0;
	    $scope.operation = null;

	    $scope.saveInMemory = function () {
	        if ($scope.memory == null) {
	            $scope.memory = parseFloat($scope.displayValue);
	        }
	    };
	   
	    $scope.onClickCalculate = function () {
	        var a = parseFloat($scope.displayValueNumberOne) || 0;
	        var b = parseFloat($scope.displayValueNumberTwo) || 0;
	        if (a == 0) { $scope.displayValue = b; }
	        else {
	            while (b != 0) {
	                if (a > b)
	                    a = a - b;
	                else
	                    b = b - a;
	            }
	            $scope.displayValue = a;
	        }
	    };
	}
);
