'use strict';

angular.module('blog-app').
    component('blogList', {
      templateUrl: 'blog-list/blog-list.template.html',

      controller: ['$http', function BlogListController($http){
        var self = this;
        var apiURL = 'http://127.0.0.1:8000/api/photos/';
        $http.get(apiURL).then(function(response){
          self.photos = response.data.photos;
          console.log(response.data.photos);
        });
      }]
    });