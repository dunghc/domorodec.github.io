// JavaScript Document
    
  var text = "L�ska je nejsiln�j�� pocit a um� z�zraky.\nKlikni na OK.";
  alert(text);
  
  
function mouseOver(){
  vek = prompt("Zadej sv�j v�k a zjist�, jak� m��e m�t tv� t�lo pr�m�rn� potenci�l, b�t na t�to planet� Zemi.") ;
  var vypocet = 225 - vek;
  var text2 = "Jak by se ti l�b�lo, kdyby si na planet� Zemi mohl pro��t je�t� ";
  var text3 = " let?";
  var text4 = "Kdo nechci nic v�d�t, nikem se neposune a zakrn�.";
  if (vek > 0){
  
    alert(text2+vypocet+text3);
  
  } else {
  
   alert(text4);
  
  }
  
  } 
   
  var textSpodni = "\nVe�ker� obsah na t�chto str�nk�ch je voln� ���iteln� a publikovateln�. Pros�m, �i�te jej :-)" ;
  document.write(textSpodni);