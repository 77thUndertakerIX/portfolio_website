function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("main").style.marginLeft = "240px";
    document.body.style.backgroundColor = "rgba(49, 0, 49,1)";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "rgba(90, 10, 90)";
    
  }
  
var speed = 240;
var counter = 0;
var text = "Web "
var text2 = "Developer"
var result =""
setInterval(typingeff,speed)
function typingeff() {
    
    if(counter < text.length+5) {
      document.getElementById("typing").innerHTML += text.charAt(counter)
      counter++;    
    }else if(counter >= text.length+5){
      document.getElementById("typing").innerHTML += text2.charAt(counter-9)
      counter++;
      if(counter == 25){
        counter = 0;
        document.getElementById("typing").innerHTML = result
      }
    }
}
/**
 


 var btn = document.getElementById("btn");
 var vdo = document.getElementById("vdo-background")
 function playVids(){
   
   if(vdo.paused){
     vdo.play();
     btn.innerHTML = "Pause";
    } else {
      vdo.pause();
      btn.innerHTML = "Play";
    }
    
  }
*/