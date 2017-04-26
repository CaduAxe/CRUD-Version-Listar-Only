var app = angular.module("pessoaApp", []);

app.filter("mydate", function () {
    var re = /\/Date\(([0-9]*)\)\//;
    return function (x) {
        var m = x.match(re);
        if (m) return new Date(parseInt(m[1]));
        else return null;
    };
});

app.controller('pessoaController', function ($http) {

    var vm = this;

    vm.orderBy = null;
    vm.reverse = false;

    $http({
        method: 'GET',
        url: '/Home/GetPessoas'
    }).then(function (success) {

        vm.pessoas = new Array();
        console.log(success.data);
        for (var i = 0; i < success.data.length; i++){
            var pessoa = {
                id: success.data[i].id,
                nome: success.data[i].nome,
                cpf: success.data[i].cpf,
                dataNascimento: success.data[i].dataNascimento,
                horarioCadastro: success.data[i].dataCadastro,
                estado: success.data[i].estado,
                rg: (success.data[i].estado=='SC')?success.data[i].rg:null
            };
            vm.pessoas.push(pessoa);
    }
        }, function (error) {
            console.log(error);
        });

    vm.ordenar = function (ordenador) {
        if (vm.orderBy == ordenador) {
            vm.reverse = !vm.reverse;
        } else {
            vm.orderBy = ordenador;
            vm.reverse = false;
        }
    }
});