'use strict';

angular.
    module('blog-app').
    config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/posts', {
                template: '<blog-list></blog-list>'
            }).
            when('/posts/:id', {
                template: '<blog-detail></blog-detail>'
            }).       
            when('/add-post', {
                template: '<add-post></add-post>'
            }).     
            otherwise('/posts');
    }
]);