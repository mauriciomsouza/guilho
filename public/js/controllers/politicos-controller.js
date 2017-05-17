angular.module('guilho').controller('PoliticosController', function($scope, $http){
    
    $scope.politicos = [];
    
    $http.get('v1/politicos')
    .success(function(politicos){
        $scope.politicos = politicos;
    })
    .error(function(erro){
        console.log('Erro obtendo a lista de políticos!');
    });
});