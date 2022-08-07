function player1(){
    swal("Forward : right-key\n Backward : left-key\n Power : upkey\n Attack : downkey");
}
function player2(){
    swal("Forward : A\n Backward : S\n Power : D\n Attack : F");
}
var img1 = document.getElementById("image1")
var img2 = document.getElementById("image2")
var counter =0;
var count =0;
window.onkeydown = function(){
    console.log(event.keyCode)
    if(event.keyCode === 39){
        img1.src = "assests/char1-forward.gif"
        counter = counter + 50;
        img1.style.left = counter + "px";
        img1.style.width = '250px';
        img1.style.height = 'auto';
        setTimeout (function (){
            img1.src ="assests/char1.gif"
        },1000)
    }
    if(event.keyCode === 37){
        img1.src = "assests/char1-forward.gif"
        counter = counter - 50;
        img1.style.left = counter + "px";
               setTimeout (function (){
            img1.src ="assests/char1.gif"
        },1000)
    }
    if(event.keyCode === 40){
        img1.src = "assests/attack.gif"
          setTimeout (function (){
            img1.src ="assests/char1.gif"
        },1700)
    }
    if(event.keyCode === 38){
        img1.src = "assests/power.gif"
        img1.style.width = "250px";
               setTimeout (function (){
            img1.src ="assests/char1.gif"
        },2000)
    }
  
    if(event.keyCode === 65){
        img2.src = "assests/char1-forward.gif"
        counter = counter + 50;
        img2.style.right = counter + "px";
        img2.style.transform = 'scaleX(-1)'
        img2.style.width = '250px';
        img2.style.height = 'auto';
        setTimeout (function (){
            img2.src ="assests/char2.gif"
            img2.style.width = '250px';
        },1000)
    }
    if(event.keyCode === 83){
        img2.src = "assests/char1-forward.gif"
        counter = counter - 50;
        img2.style.right = counter + "px";
        img2.style.transform = 'scaleX(-1)'
        img2.style.width = '250px';
        img2.style.height = 'auto';
        setTimeout (function (){
            img2.src ="assests/char2.gif"
            img2.style.width = '250px';
        },1000)
    }
    if(event.keyCode === 68){
        img2.src = "assests/power2.gif"
        img2.style.transform = 'scaleX(-1)'
        img2.style.width = '250px';
        img2.style.height = 'auto';
        setTimeout (function (){
            img2.src ="assests/char2.gif"
            img2.style.width = '250px';
        },2000)
    }
    if(event.keyCode === 70){
        img2.src = "assests/attack2.gif"
        img2.style.transform = 'scaleX(-1)'
        img2.style.width = '250px';
        img2.style.height = 'auto';
        setTimeout (function (){
            img2.src ="assests/char2.gif"
            img2.style.width = '250px';
        },2000)
    }
}
