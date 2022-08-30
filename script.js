var valorVaga = 10
        var totalArrecadado = 0
        var totalVagas = 10
        var estacionados = 0
        var mostradorVagas = document.getElementById('vagas')
        mostradorVagas.innerHTML = `Temos ${totalVagas} vagas no total e ${estacionados} carros estacionados`
        var mostradorValorTotal = document.getElementById('tot')
        mostradorValorTotal.innerHTML = `O valor total arrecadado é de: ${totalArrecadado}`
        

        function numeroVagas(){
            var numVagas = document.getElementById('numVagas')
            if(Number(numVagas.value) < estacionados){
                alert('Ainda há carros estacionados, não foi possível diminuir o número de vagas')
            } else if(Number(numVagas.value) >= estacionados){
                alert('Número de vagas alterado com sucesso')
                totalVagas = Number(numVagas.value)
                var mostradorVagas = document.getElementById('vagas')
                mostradorVagas.innerHTML = `Temos um total de ${totalVagas} vagas no total e um ${ estacionados} vagas livre(s)`
            }
        }

        function mostradorVagas(){
            mostradorVagas.innerHTML = `Temos ${totalVagas} vagas no total e ${estacionados} carros estacionados`
        }

        function adicionaCarro(){
            var adiciona = document.getElementById('adiciona-carro')
            if(estacionados > totalVagas - 1){
                alert('Não há mais vagas')
                mostradorVagas.innerHTML = `Temos ${totalVagas} vagas no total e ${estacionados} carros estacionados`
            } else if(estacionados == totalVagas - 1){
                alert('Essa era nossa última vaga')
                estacionados ++
                totalArrecadado += valorVaga
                mostradorValorTotal.innerHTML = `O valor total arrecadado é de: R$ ${totalArrecadado}`
                mostradorVagas.innerHTML = `Temos ${totalVagas} vagas no total e ${estacionados} carros estacionados`
            } else{
                estacionados ++
                totalArrecadado += valorVaga
                mostradorValorTotal.innerHTML = `O valor total arrecadado é de: R$ ${totalArrecadado}`
                mostradorVagas.innerHTML = `Temos ${totalVagas} vagas no total e ${estacionados} carros estacionados`
                
            }
        }
        function retiraCarro(){
            var retira = document.getElementById('retira-carro')
            if(estacionados > 0){
                estacionados --
                mostradorVagas.innerHTML = `Temos ${totalVagas} vagas no total e ${estacionados} carros estacionados`
            }
            else{
                alert('Não há carros estacionados')
            }
        }
        function mostraValor(){
                   
        }