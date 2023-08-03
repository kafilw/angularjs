'use strict';

angular.module('blogDetail').component('blogDetail', {
  templateUrl: 'blog-detail/blog-detail.template.html',
  controller: ['$http', '$routeParams',
    function BlogDetailController($http, $routeParams, $window, $location) {
      var self = this;
      var id = $routeParams.id;
      self.editable = false;

      var apiURL = 'http://127.0.0.1:8000/api/photos/' + id;
      $http.get(apiURL)
        .then(function(response) {
          self.post = response.data.photo;
        });

        self.editPost = function() {
            self.editable = !self.editable; // Toggle the edit mode
            };
          
      
      // Save Edited Post
      self.saveEditedPost = function() {
        var apiURL = 'http://127.0.0.1:8000/api/photos/' + id;
        // Perform the PUT request to save the edited post
        $http.put(apiURL, self.post)
          .then(function(response) {
            console.log('Post updated successfully:', response.data);
            self.editable = false; // Set editable flag back to false after saving
          })
          .catch(function(error) {
            console.error('Error updating post: ', error);
            // Implement the logic to show an error message
          });
      };

      self.deletePost = function() {
        var deleteConfirmation = confirm('Are you sure you want to delete this post?');
        if (deleteConfirmation) {
          var apiURL = 'http://127.0.0.1:8000/api/photos/' + id;
          // Perform the DELETE request to delete the post
          $http.delete(apiURL)
            .then(function(response) {
              console.log('Post deleted successfully:', response.data);
              // Redirect to the blog list page or any other page you prefer
              window.location.href = '#!/blog-list';
            })
            .catch(function(error) {
              console.error('Error deleting post: ', error);
              // Implement the logic to show an error message
            });
        }
      }
    }
  ]
});
