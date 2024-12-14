const drumLength=document.querySelectorAll(".drum").length;
console.log(drumLength);

for(let i=0;i<drumLength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(e){
        makeNoise(this.innerHTML);
    });
}

function makeNoise(key){
    switch(key){
        case "w":
            const s7=new Audio("sounds/s7.wav");
            s7.play();
            break;
        case "a":
            const s6=new Audio("sounds/s6.wav");
            s6.play();
            break;
        case "s":
            const s5=new Audio("sounds/s5.wav");
            s5.play();
            break;
        case "d":
            const s4=new Audio("sounds/s4.wav");
            s4.play();
            break; 
        case "j":
            const s3=new Audio("sounds/s3.wav");
            s3.play();
            break;   
        case "k":
            const s2=new Audio("sounds/s2.wav");
            s2.play();
            break;
        case "l":
            const s1=new Audio("sounds/s1.wav");
            s1.play();
            break;
    }
}