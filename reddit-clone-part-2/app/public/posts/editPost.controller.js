(function() {
  angular.module('reddit')
    .controller('EditPostController', EditPostController)

    function EditPostController($http, $stateParams, $state) {
      const vm = this
      console.log('edit controller is working');

      vm.$onInit = function() {
        $http.get('/api/posts/' + $stateParams.id, $stateParams).then(res => {
          console.log(res);
          vm.edittedPost = res.data
        })
      }

      vm.editPost = function(id) {
        console.log(vm.edittedPost);
        console.log('id is', id);
        $http.patch('/api/posts/' + id, vm.edittedPost).then(res => {
          console.log(res);
          $state.go('list')
        })
      }
    }
})()
