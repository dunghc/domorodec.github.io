// JavaScript Document
    
  var text = "Láska je nejsilnìjší pocit a umí zázraky.\nKlikni na OK.";
  alert(text);
  
  
function mouseOver(){
  vek = prompt("Zadej svùj vìk a zjistíš, jaký mùže mít tvé tìlo prùmìrný potenciál, být na této planetì Zemi.") ;
  var vypocet = 225 - vek;
  var text2 = "Jak by se ti líbílo, kdyby si na planetì Zemi mohl prožít ještì ";
  var text3 = " let?";
  var text4 = "Kdo nechci nic vìdìt, nikem se neposune a zakrní.";
  if (vek > 0){
  
    alert(text2+vypocet+text3);
  
  } else {
  
   alert(text4);
  
  }
  
  } 
   
  var textSpodni = "\nVeškerý obsah na tìchto stránkách je volnì šíøitelný a publikovatelný. Prosím, šiøte jej :-)" ;
  document.write(textSpodni);