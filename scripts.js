   // soma e calculo de média até que o valor digitado seja 0
     
   var soma = 0;
   var quantidade = 0;

   for (var i = 1; ; i++) {
       var num = parseInt(prompt('Insira um valor (ou digite 0 para encerrar): '));
       console.log(num);
       // Verifica se o usuário digitou 0 para encerrar
       if (num === 0) {
           break;
       }

       soma += num;
       quantidade++;

       // Calcula a média
       var media = soma / quantidade;

       console.log("Soma: " + soma);
       console.log("Média: " + media);
   }