btn = document.getElementById("botao");
btn2 = document.getElementById("botao2");
luz = document.getElementById("luzes");
lights = document.getElementsByClassName("luz")
var swtich = true;
var velocity = false;

btn.addEventListener("click",function(){
    if(swtich ==true){
        swtich = false;
    }else{
        swtich = true;
    }
    

    ligaDesliga();
    
})

btn2.addEventListener("click",function(){
    if(velocity==false){
        velocity=true;
    }else{
        velocity=false;
    }
    velocidade();
})

function ligaDesliga(){
    if(swtich==true){
        luz.style.display ="flex";
    }else{
        luz.style.display ="none";
    }
    
}

function velocidade(){
    if(velocity==true){
        lights[0].style.animationDuration="2s";
        lights[2].style.animationDuration="2s";
        lights[4].style.animationDuration="2s";
        lights[6].style.animationDuration="2s";
        lights[8].style.animationDuration="2s";
        lights[10].style.animationDuration="2s";

        lights[1].style.animationDuration="6s";
        lights[3].style.animationDuration="6s";
        lights[5].style.animationDuration="6s";
        lights[7].style.animationDuration="6s";
        lights[9].style.animationDuration="6s";
        lights[11].style.animationDuration="6s";
    }else{
        lights[0].style.animationDuration="4s";
        lights[2].style.animationDuration="4s";
        lights[4].style.animationDuration="4s";
        lights[6].style.animationDuration="4s";
        lights[8].style.animationDuration="4s";
        lights[10].style.animationDuration="4s";

        lights[1].style.animationDuration="8s";
        lights[3].style.animationDuration="8s";
        lights[5].style.animationDuration="8s";
        lights[7].style.animationDuration="8s";
        lights[9].style.animationDuration="8s";
        lights[11].style.animationDuration="8s";
    }
}


