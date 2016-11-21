app.controller('NoteController', ['$scope', 'crudService','$routeParams','$http', function($scope, crudService,$routeParams,$http) {
    var vm = $scope;
	vm.today = new Date();
	window.vm=vm;
	vm.id= $routeParams && $routeParams.id || false;
    vm.data = [];
	vm.d={}
	

    var populateData = function(response){
        vm.data = response.data && response.data.docs ||[];
		if (vm.id){
			vm.d=vm.data[0] || {};
		}
	};
	
    vm.read = function(){
		var fnd={"cat":"eventi"};
		if (vm.id) fnd._id=vm.id;
        crudService.fnd(fnd, populateData);
    };	
	
    vm.save = function(){
		console.log(vm,vm.d)
		vm.d.cat="eventi";
			if (vm.id=='new'){
				delete(vm.id)
			}
        crudService.set(vm.d,function(r){
			if (!vm.id){
				window.location="#/home/"
			}
		});
    };
	
	vm.remove = function(){
        crudService.del(vm.d,function(r){
			window.location="#/home/"
		});
    };
	
    vm.init = function(){
        vm.read();
		var pr=function(){
			$('[ng-model="title"]').focus()
		}
		$(pr)
    };
	vm.init();
}]);

