var jogador = null;

var jogadorSelecionado = document.getElementById("jogador-selecionado");

var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X')


function escolheQuadrado(id){
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML != '-')
    {
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = 'black';

    if (jogador == 'X')
    {
        jogador = 'O';
    }
    else
    {
        jogador = 'X';
    }
    mudarJogador(jogador);
    checkVencedor();
    

}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checkVencedor(){
    var quadrado1 = document.getElementById(1).innerHTML;
    var quadrado2 = document.getElementById(2).innerHTML;
    var quadrado3 = document.getElementById(3).innerHTML;
    var quadrado4 = document.getElementById(4).innerHTML;
    var quadrado5 = document.getElementById(5).innerHTML;
    var quadrado6 = document.getElementById(6).innerHTML;
    var quadrado7 = document.getElementById(7).innerHTML;
    var quadrado8 = document.getElementById(8).innerHTML;
    var quadrado9 = document.getElementById(9).innerHTML;
    console.log('--------------------');
    console.log(quadrado1);
    console.log(quadrado2);
    console.log(quadrado3);
    console.log(quadrado4);
    console.log(quadrado5);
    console.log(quadrado6);
    console.log(quadrado7);
    console.log(quadrado8);
    console.log(quadrado9);
    console.log('--------------------');


    checaSequencia(quadrado1, quadrado2, quadrado3, quadrado4, quadrado5, quadrado6, quadrado7, quadrado8, quadrado9);

    /* if(checaSequencia(quadrado1, quadrado2. quadrado3) == true){
        console.log("Vadia")
    }
    else
    {
        console.log("No birchies?");
    } */
}

function checaSequencia(quadrado1, quadrado2, quadrado3, quadrado4, quadrado5, quadrado6, quadrado7, quadrado8, quadrado9)
{
    console.log('--------------------');
    console.log(quadrado1);
    console.log(quadrado2);
    console.log(quadrado3);
    console.log(quadrado4);
    console.log(quadrado5);
    console.log(quadrado6);
    console.log(quadrado7);
    console.log(quadrado8);
    console.log(quadrado9);
    console.log('--------------------');
    /* console.log(quadrado1);
    console.log(quadrado2);
    console.log(quadrado3); */
    var eigual = false;

    //=======VERIFICADOR DE VITORIA===============================
    //------------LINHA 1 - horizontal-----------------
    if (quadrado1 != '-' && quadrado1 == quadrado2 && quadrado2 == quadrado3){
        
        console.log("1");
        Ganhou();
    }
    //------------LINHA 2 - horizontal-----------------
    else if (quadrado4 != '-' && quadrado4 == quadrado5 && quadrado5 == quadrado6){
        
        console.log("2");
        Ganhou();
    }
    //------------LINHA 3 - horizontal-----------------
    else if (quadrado7 != '-' && quadrado7 == quadrado8 && quadrado8 == quadrado9){
        
        console.log("3");
        Ganhou();
    }
    //------------LINHA 1 - vertical-----------------
    else if (quadrado1 != '-' && quadrado1 == quadrado4 && quadrado4 == quadrado7){
        
        console.log("4");
        Ganhou();
    }
    //------------LINHA 2 - vertical-----------------
    else if (quadrado2 != '-' && quadrado2 == quadrado5 && quadrado5 == quadrado8){
        
        console.log("5");
        Ganhou();
    }
    //------------LINHA 3 - vertical-----------------
    else if (quadrado3 != '-' && quadrado3 == quadrado6 && quadrado6 == quadrado9){
        
        console.log("6");
        Ganhou();
    }
    //------------LINHA Esq para Direita-----------------
    else if (quadrado1 != '-' && quadrado1 == quadrado5 && quadrado5 == quadrado9){
        
        console.log("5");
        Ganhou();
    }
    //------------LINHA Direita para Esq-----------------
    else if (quadrado3 != '-' && quadrado3 == quadrado5 && quadrado5 == quadrado7){
        
        console.log("6");
        Ganhou();
    }
    
    else
    {
        console.log("No aguardo");
    }
    
}

function Ganhou(){
    jogador = jogadorSelecionado.innerHTML;
    if(jogador == "O"){
        jogador = 'X';
    }
    else
    {
        jogador = 'O';
    }
    alert("O jogador " + jogador + " ganhou o jogo!");
    document.getElementById('vencedor-selecionado').innerHTML = jogador;
    document.getElementById("jogoVeia").style = "pointer-events: none;";
}