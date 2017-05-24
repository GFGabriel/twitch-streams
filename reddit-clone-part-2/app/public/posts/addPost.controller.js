(function() {
  angular.module('reddit')
    .controller('AddPostController', AddPostController)

    function AddPostController($http, $state) {
      const vm = this
      console.log('add controller is working');

      vm.addPost = function() {
        $http.post('/api/posts', vm.newPost).then(res => {
          console.log(res);
          $state.go('list')
        })
      }
    }
})()
