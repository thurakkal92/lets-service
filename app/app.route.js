app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/newtask');
    $stateProvider
        .state('newtask', {
            url: '/newtask',
            templateUrl: 'app/views/newtask.html',
            controller : 'addCategory'
        })
        .state('showjson', {
          url: '/showjson',
          templateUrl: 'app/views/showjson.html',
          controller :'addCategory'
    });
});
