
//let meuArray = ["Daya", "Victor", "William", "Rose", "35", "21"]; /* Os valores são digitados entre colchetes, cada valor deve estar entre aspas simples ou duplas e separados or virgula */
//console.table(meuArray); /* Localizar um array na lista */
//console.log(meuArray[4]) /* localizar o valor no Array pela a posição */

//let meuArray = ["Daya", "Victor", "William", "Rose", "35", "21"];
//console.table(meuArray); //Para adicionar um novo elemento no final da lista, use os seguintes 03 comandos
//meuArray.push("Stephaie"); 
//console.table(meuArray)

//let meuArray = ["Daya", "Victor", "William", "Rose", "35", "21"];
//console.table(meuArray); // Para adicionar um novo elemento no começo da lista, na posição ZERO, use os 03 comandos a seguir
//meuArray.unshift("Clara"); //entre parenteses e aspas adicione o nome do novo elemento
//console.table(meuArray)

//var frutas = ["Banana", "Laranja", "Maça", "Manga", "Melão", "Goiaba", "Melância", "Tangerina"];
//console.table(frutas); //Este método a seguir remove um elemento da lista, no número antes da virgula eu informo a posição "index", no número após a vírgula informa a quantidade de elementos que será excluido a partir daquela posição
//frutas.splice(0,1);
//console.table(frutas)

//var frutas = ["Banana", "Laranja", "Maça", "Manga", "Melão", "Goiaba", "Melância", "Tangerina"];
//console.table(frutas); // Este método a seguir substitue um elemento na Array, para isso, deve-se informar primeiro a posição (index) onde será inserido o novo elemento (antes da vírgula), após a primeira vírgula informe a quantidade de elementos que substituir na Array, insira novamente a vírgula e digite o nome do elemento a ser inserido na lista, se for string deve-se difitar entre aspas
//frutas.splice(1,1, "Abacaxi");
//console.table(frutas)

//var frutas = ["Banana", "Laranja", "Maça", "Manga", "Melão", "Goiaba", "Melância", "Tangerina"];
//console.table(frutas); // Para verificar a posição de um elemento dentro da Array, use o seguinte comando 
//let posicao = frutas.indexOf("Banana"); //Entre parenteses e aspas(se for string), digite o nome do elemento que deseja verificar a posição no index
//console.log("Posição da fruta:" + posicao); 
//console.table(frutas)

//console.table(frutas);
//let posicao = frutas.indexOf("Banana");
//console.log("Posição da fruta:" + posicao); 
//console.table(frutas)

//console.table(frutas);
//frutas.splice(0, 1);
//console.table(frutas);

//var frutas = ["Banana", "Laranja", 0, "Maça", "Manga", 1, "Melão", "Goiaba", "Melância", 10, "Tangerina"];
//console.table(frutas); // Esse comando deixa a lista (valores) em ordem alfabetica, ou números na ordem. Se conter na lista datas, vai organizar primeiros as datas, depois os números e por fim as strings
//frutas.sort();
//console.table(frutas)

//var frutas = ["Banana", "Laranja", "Maça", "Manga", "Melão", "Goiaba", "Melância", "Tangerina"];
//console.table(frutas); // Este comando informa o tamanho da matriz
//console.log("Tamanho da matriza: " + frutas.length)

//var frutas = ["Banana", "Laranja", "Maça", "Manga", "Melão", "Goiaba", "Melância", "Tangerina"];
//console.table(frutas); // para inserir um novo elemento a array em uma posição especifica usa o seguinte comando
//frutas.splice(1,0,"Abacaxi"); //No incio antes da vírgula, informe a posição que deseja adicionar o elemento (valor), após a primeira vírgula, digite zero (para não excluir o elemento anterior), vírgula novamente e após informe o valor que deseja adicionar  
//console.table(frutas);


/* Somando valores de uma matriz */
/* Criando a função com o nome SOMA */

//function somaArray(val1, val2, val3){
    //let resp = val1+val2+val3;
    //return resp;
//}

//let x = somaArray(65,3,236)
//console.log("Respota da soma é: "+ x)



/*  Este método calcula a média de 4 notas*/
//function somaArray(nota1, nota2, nota3, nota4){ // o nome da função aqui é somaArray, mas pode ser qualquer nome, desde que seja um nome mais claro possível
    //let resp = (nota1+nota2+nota3+nota4)/4; // os valores estão entre parenteses porque se trata de uma equação matématica, primeiro soma-se os valores entre parenteses, após divide o valor
    //return resp;
//}

//let x = somaArray(5.5,10,8.5,3.6) /* Pode ser inteiros (exemplo 5,10,8,3) ou decimal (5.5,10,8.5,3.6) */
//console.log("Respota da média é: "+ x) /* Este é para números inteiros */
//console.log("Respota da média é: "+ x.toFixed(2)) /* Neste método é para calcular a média com números decimal */


/* Calcular a soma dos número de um Array */
 //function somarArray (x){
   // let soma = 0;

    //for (let a = 0; a < x.length; a++){
      //  soma += x[a];
    //}
    //return soma; /* return tem que ficar no final da função */
//}    

    
/* Passando os valores para array [] */
//let pezinho = [23,25,0,10,10,5,60,1,6,8]; //Sem dar espaço após a vírgula
/* Posi. Matri 0, 1, 2, 3,4, 5,6, 7,8,9*/
//let resultado = somarArray (pezinho);
//console.log("Resultado da soma: " + resultado);

//console.log("Tamanho da matriz: " + pezinho.length)


/* Calcular uma média de um Array */
//function somarArray (x){
   // let soma = 0;

   // for (let a = 0; a < x.length; a++){ /* criando variavel / criar comparação / implementar */
       // soma += x[a];
  //  }
   // return soma/x.length; /* return tem que ficar no final da função */
//}    

    
/* Passando os valores para array [] */
//let pezinho = [23,25,0,10,10,5,60,1,6,8]; //Sem dar espaço após a vírgula
/* Posi. Matri 0, 1, 2, 3,4, 5,6, 7,8,9*/
//let resultado = somarArray (pezinho);
//console.log("Resultado da média: " + resultado);
//console.log("Tamanho da matriz: " + pezinho.length)
//console.log("Resultado da média: " + resultado/10);












