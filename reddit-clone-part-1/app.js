(function () {
  angular.module('app', ["angularMoment"])
    .component('reddit', {
      controller: function(moment) {
        const vm = this

        vm.tab = 1
        vm.setTab = function(selected) {
           vm.tab = selected
        }

        vm.isSet = function(tab) {
          return vm.tab === tab
        }

        posts = [
          {
            title: "Baby turtles!",
            body: "Look at them!!",
            author: "George",
            image: "https://i.ytimg.com/vi/_YfYHFM3Das/maxresdefault.jpg",
            createdOn: 1495072634391,
            votes: 10,
            comments: [
              {
                text: "Love it!!",
                author: "Izabela",
                createdOn: 1495072634391
              },
              {
                text: "Baby Raph!",
                author: "Leo",
                createdOn: 1495072634391
              }
            ]
          },
          {
            title: "Strawberry",
            body: "He's so small!!",
            author: "George",
            image: "https://i.ytimg.com/vi/p4Jj9QZFJvw/hqdefault.jpg",
            createdOn: 1495072634391,
            votes: 12,
            comments: [
              {
                text: "Lol!!",
                author: "Danny",
                createdOn: 1495072634391
              }
            ]
          },
        ]
        vm.posts = posts

        vm.addPost = function() {
          console.log(posts)
          vm.post.createdOn = Date.now()
          vm.post.votes = 0
          vm.post.comments = []
          posts.push(vm.post)
          console.log(posts)

          delete vm.post
        }

        vm.upVote = function(post) {
          post.votes++
        }

        vm.downVote = function(post) {
          if (post.votes >= 1) {
            post.votes--
          }
        }

        vm.commentCheck = -1
        vm.setShowComments = function(selected) {
          console.log(selected + " is selected.");
          vm.commentCheck = selected
        }

        vm.commentsOn = function(on) {
          console.log(on +  " is on.");
          return vm.commentCheck === on
        }
        vm.addComment = function(post) {
          console.log(post);
          console.log(vm.newComment);

          vm.newComment.createdOn = Date.now()
          var commentSection = post.comments
          console.log(commentSection);
          commentSection.push(vm.newComment)
          console.log(commentSection);
          delete vm.newComment
        }
      },
      templateUrl: "reddit.html"
    })
})()
