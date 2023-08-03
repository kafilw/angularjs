'use strict';

angular.module('addPost').
component('addPost', {
  templateUrl: 'add-post/add-post.template.html',
  controller: ['$http', function AddPostController($http) {
    var self = this;
    self.newPost = {
      title: '',
      body: '',
      rank: null,
      category: ''
    };

    self.addPost = function() {
      var apiURL = 'http://127.0.0.1:8000/api/photos';
      // Perform the POST request to add a new post
      $http.post(apiURL, self.newPost)
        .then(function(response) {
          console.log('New post added successfully:', response.data);
          // Clear the input fields after adding the post
          self.newPost = {
            title: '',
            body: '',
            rank: null,
            category: ''
          };
        })
        .catch(function(error) {
          console.error('Error adding new post: ', error);
          // Implement the logic to show an error message
        });
    };
  }]
});
