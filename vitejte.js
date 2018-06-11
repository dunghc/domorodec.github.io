// JavaScript Document
    
  var text = "Láska je nejsilnější pocit a umí zázraky.\nKlikni na OK.";
  alert(text);
  
  
function mouseOver(){
  vek = prompt("Zadej svůj věk a zjistíš, jaký může mít tvé tělo průměrný potenciál, být na této planetě Zemi.") ;
  var vypocet = 225 - vek;
  var text2 = "Jak by se ti líbílo, kdyby si na planetě Zemi mohl prožít ještě ";
  var text3 = " let?";
  var text4 = "Kdo nechci nic vědět, nikem se neposune a zakrní.";
  if (vek > 0){
  
    alert(text2+vypocet+text3);
  
  } else {
  
   alert(text4);
  
  }
  
  } 
   
  var textSpodni = "\nVeškerý obsah na těchto stránkách je volně šířitelný a publikovatelný. Prosím, šiřte jej :-)" ;
  document.write(textSpodni); 
