
let remaining = 30;
let score = 0;
let start = 0;
const target = document.getElementById("btn");


function playSound(){
    var aud = new Audio("sounds/click.wav");
    aud.play();
}


function random(){
    return (87* (Math.random()));
}


document.querySelector(".btn").addEventListener("click",nextItr);

function nextItr(){
    playSound();
    if(remaining == 1){

        setTimeout(()=>{
            alert("Your score : " + score);
            location.reload(true);
        },100);
    
    }
    else{
        remaining--;
        if(start !=0 ){
            score += 10 - Math.floor(0.003*(Date.now() - start));
        }
        else{
            score += 10;
        }
        start = Date.now();
        document.querySelector(".remaining").innerHTML = "Remaining : " + remaining + "";
        document.querySelector(".score").innerHTML = "Score : " + score + "";
        x = random();
        y = random();
        target.style.left = "" + x +"%";
        target.style.top = "" + y +"%";
        
    }
    
    // setTimeout(()=>{

    //     //1st timeout (after 1 second)

    //     document.querySelector(".btn").addEventListener("click", timeOut1);
        
    //     function timeOut1(){
    //         score -= 2;
    //         document.querySelector(".score").innerHTML = "Score : " + score + "";
    //         document.querySelector(".btn").removeEventListener("click", timeOut1);
    //     }         
    // },1000);
}











