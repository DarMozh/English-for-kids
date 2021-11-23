
document.querySelector(".switch").onclick = function(){
   let  sliderWork =  document.querySelector(".slider").innerHTML;
    if ( sliderWork == "train"){
        document.querySelector(".slider").innerHTML = "play";
    }
    if( sliderWork == "play"){
        document.querySelector(".slider").innerHTML = "train";
    }
}
