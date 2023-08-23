const caixa = document.querySelector("#caixa"); /* Quando se coloca a #, quer dizer que é o ID, se coloco o ponto "." quer dizer que é a classe */

//INCLUINDO CURSOS

let cursos = []; /* Sempre colocar o ponto e vírgula no final do código, em qualquer linguagem de programação */




let resposta = "";

/* Incluindo curso na matriz curso */
/* WHILE só tem uma comparação. While é um laço que repite enquanto for verdadeiro*/
while (resposta != "N"){
    let curso = prompt("Digite o nome do curso")
    cursos.push(curso.toUpperCase()); /* A função ".toUpperCase" deixa o texto todo em caixa alta */
    resposta = prompt("Cadatrar outro Cursp S/N")

    if(resposta.toUpperCase()=="N"){
        /* forEach armazena todos os elementos da lista */
        cursos.forEach((aula)=>{
            let p = document.createElement("p");
            p.innerHTML = aula + "<br>--------------------<br>";
            caixa.appendChild(p);     
    })
     break;
}
}

     /* EXCLUIR */

    resposta = prompt("Excluir curso S/N");
    
    if(resposta.toUpperCase()=="S");
    let curso = prompt("Digite o nome do curso que deseja excluir");
    //pegando a posição do elemento dentro da matriz
    // indexOf diz em que posisão está dentro da matriz
    alert("posição do curso dentro da matriz" + cursos.indexOf(curso.toLowerCase(), 1))
    let posicao = cursos.indexOf(curso.toUpperCase(),1); 
    //O método "SPLICE" serve para buscar e apagar um elemento dentro da matriz
    cursos.splice(posicao); 

    cursos.forEach((aula)=>{
        let p = document.createElement("p");
        p.innerHTML = aula + "<br>--------------------<br>";
        caixa.appendChild(p);

     
    })







