var jump = false;
var jogo = {};
varContVel = 0;
var velocidade = 5;
const dino = document.querySelector('#player');
var pulando = false;


/* function jump1(){
    var player = document.getElementById("player");
    var cacto = document.getElementById("cacto");

    if (player.className != "jump"){
        player.classList.add("jump");
        jump = true;
        setTimeout(() => {
            player.classList.remove("jump");
            jump=false;
        }, 800)

    functionmorte(){
        var cactoL= parseInt(window.getComputedStyle(cacto).getOrioertyVakye("left"));

        if(cactoL> 20 && jump == false)
        {
            alert("Game Over");
        }
    
    }
    setInterval(morte,20);
    }
} */

jogo.timer = setInterval(loop,30);

function loop() {
    movefundo();
    aumentaVelocidade();
    verificLose();
    cactoRecom();
    goBot();
  /* console.log("Piranha"); */
}



function movefundo() {
        
    esquerda = parseInt($("#game").css("background-position"));
    $("#game").css("background-position",esquerda-velocidade);
    esquerda = parseInt($("#cacto").css("left"));
    $("#cacto").css("left",esquerda-velocidade);
}

function aumentaVelocidade(){
    varContVel += 1;
    if (varContVel == 500){
        velocidade += 1;
        varContVel = 0
    }
    else
    {
        varContVel = varContVel;
    }
    /* console.log(varContVel); */
}

function verificLose(){
    player = parseInt($("#player").css("left"));
    cacto = parseInt($("#cacto").css("left"));
    
    if(player >= cacto && player-5 <= cacto && pulando ==false){
        alert("Perdeu\rFim de jogo");
    }
}

function cactoRecom (){
    cacto = parseInt($("#cacto").css("left"));
    if(cacto <= 0){
        $("#cacto").css("left", '95%');
    }
    /* console.log(cacto); */
}






function goBot() {
    let jump = parseInt(getComputedStyle(dino).getPropertyValue('top'));
    if (jump == 80){
        var jumpMoment = setInterval(() => {
            $("#player").css("top",160);
            jump = 160;
            pulando = false;
            clearInterval(jumpMoment);
        }, 2000);
    }
}







// Função de pulo

document.addEventListener('keydown', (e) => {
    let jump = parseInt(getComputedStyle(dino).getPropertyValue('top'));

    if (!e.repeat){
        console.log(`Key "${e.key}" pressed  [event: keydown]`);
        /* position -=50; */
        /* yourShip.style.top = position + "px"; */
        /* $("#player-shooter").css("top",jump-7); */
        if (e.key == " "){
            if (pulando == false){ 
                jumpUp();
                
            }
        }
        function jumpUp(){
            $("#player").css("top",80);
            jump -= 100;
            pulando = true;
            

        }

        console.log(jump);

    }
    else
    {
        console.log(`Key "${e.key}" repeating  [event: keydown]`);
    }


    
});




