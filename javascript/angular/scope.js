function Scope(parent) {
  var f = function(){};

  if (parent) {
    f.prototype = parent;
  }

  return new f();

  // We could replace the contents of this function with:
  // return Object.create(parent ? parent : {});
}

var $rootScope = new Scope();
$rootScope.name = 'Rob';

var $scope = new Scope($rootScope);
$scope.occupation = 'Debugger';

console.log('$rootScope.name: ', $rootScope.name);
console.log('$rootScope.occupation: ', $rootScope.occupation);
console.log("\n");
console.log('$scope.name: ', $scope.name);
console.log('$scope.occupation: ', $scope.occupation);
