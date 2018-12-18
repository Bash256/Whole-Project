var app = angular.module('App');
app.factory('getNews',['$http',function($http){
 
    var news = {
        inputNews:function(){
   
         var url = 'https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=030f2481a2df4fecb04bd2f406f6ce8c';
            return $http.get(url)
            .then (function(adata){
                return adata
            })
        },
        inputSE:function(){
   
         var url = 'https://newsapi.org/v2/top-headlines?country=se&apiKey=030f2481a2df4fecb04bd2f406f6ce8c';
            return $http.get(url)
            .then (function(adata){
                return adata
            })
        }
    };
    return news;
}])

