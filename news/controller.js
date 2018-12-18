var app = angular.module('App');
app.controller ('addNewsCtrl',['$scope','getNews', function($scope,getNews){
     
    $scope.type = function() {
     getNews.inputNews()
     .then(function(adata){
         console.log(adata.data.articles);
//console.log(Object.values(adata.data));
        $scope.news=adata.data.articles;
        $scope.newsDescription=adata.data.articles.description;
        $scope.image=adata.data.articles.urlToImage;
     }); 
    }

    $scope.click = function() {
        getNews.inputSE()
        .then(function(adata){
            console.log(adata.data.articles);
   //console.log(Object.values(adata.data));
           $scope.SE=adata.data.articles;
           $scope.newsDescription=adata.data.articles.description;
           $scope.image=adata.data.articles.urlToImage;
        }); 
       }
 }]);
 