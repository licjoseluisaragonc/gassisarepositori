
InitDom()
ConstructorX()

//#region Postback functions
//esta función se ejecuta al inicio, y añado 2 eventos al postback
function InitDom () {
  if (typeof(Sys) != 'undefined') {
      Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(beginPageRequest);
      Sys.WebForms.PageRequestManager.getInstance().add_endRequest(endPageRequest);
      ConstructorX()
  }
}
function beginPageRequest(sender, args) {
  //Esto se ejecuta justo antes de enviar el postback
}
function endPageRequest(sender, args) {
  //Esto se ejecuta cuando vuelve el postback
  if (args.get_error() != undefined && args.get_error().httpStatusCode == '0') {
      //hubo un error
  }
  else {
      //todo bien
     
      //aquí podrías cambiar las clases
      //$('#lb_General').removeClass('navBarsActive');
      //$('#lb_General').addClass('navBars');
      //$('#lb_Control').removeClass('navBars');
      //$('#tb_Control').addClass('navBarsActive');
  }
 
}
//#endregion

//#region Desarrollo Javascript
function ConstructorX(){
  const btn1 = document.querySelector(".btn1") 
  btn1.innerHTML = "Cuestion 1.- What is the value of Dessert.type after executing this code?<br>Pregunta 1.- Cual es el valor de Dessert.type al ejecutarce este código?"
  btn1.addEventListener('click', buttonClickHandler);
  
  const btn2 = document.querySelector(".btn2") 
  btn2.innerHTML = "Cuestion 2.- What will be logged to the console?<br>Pregunta 2.- Que se registra en la consola?"
  btn2.addEventListener('click', buttonClickHandler);
  
  const btn3 = document.querySelector(".btn3") 
  btn3.innerHTML = "Cuestion 3.-Whay is the OutPut of this code?<br>Pregunta 3.- Cual es el valor de salida de este código?"
  btn3.addEventListener('click', buttonClickHandler);

  const btn4 = document.querySelector(".btn4") 
  btn4.innerHTML = "Cuestion 4.- What will be logged to the console?<br>Pregunta 4.- Que se registra en la consola?"
  btn4.addEventListener('click', buttonClickHandler);

  const btn5 = document.querySelector(".btn5") 
  btn5.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn5.addEventListener('click', buttonClickHandler);

  const btn6 = document.querySelector(".btn6") 
  btn6.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn6.addEventListener('click', buttonClickHandler);

  const btn7 = document.querySelector(".btn7") 
  btn7.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn7.addEventListener('click', buttonClickHandler);

  const btn8 = document.querySelector(".btn8") 
  btn8.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn8.addEventListener('click', buttonClickHandler);

  const btn9 = document.querySelector(".btn9") 
  btn9.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn9.addEventListener('click', buttonClickHandler);

  const btn10 = document.querySelector(".btn10") 
  btn10.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn10.addEventListener('click', buttonClickHandler);

  const btn11 = document.querySelector(".btn11") 
  btn11.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn11.addEventListener('click', buttonClickHandler);

  const btn12 = document.querySelector(".btn12") 
  btn12.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn12.addEventListener('click', buttonClickHandler);

  const btn13 = document.querySelector(".btn13") 
  btn13.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn13.addEventListener('click', buttonClickHandler);

  const btn14 = document.querySelector(".btn14") 
  btn14.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn14.addEventListener('click', buttonClickHandler);

  const btn15 = document.querySelector(".btn15") 
  btn15.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn15.addEventListener('click', buttonClickHandler);

  const btn16 = document.querySelector(".btn16") 
  btn16.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn16.addEventListener('click', buttonClickHandler);

  const btn17 = document.querySelector(".btn17") 
  btn17.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn17.addEventListener('click', buttonClickHandler);

  const btn18 = document.querySelector(".btn18") 
  btn18.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn18.addEventListener('click', buttonClickHandler);

  const btn19 = document.querySelector(".btn19") 
  btn19.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn19.addEventListener('click', buttonClickHandler);
  
  const btn20 = document.querySelector(".btn20") 
  btn20.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn20.addEventListener('click', buttonClickHandler);

  const btn21 = document.querySelector(".btn21") 
  btn21.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn21.addEventListener('click', buttonClickHandler);

  const btn22 = document.querySelector(".btn22") 
  btn22.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn22.addEventListener('click', buttonClickHandler);

  const btn23 = document.querySelector(".btn23") 
  btn23.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn23.addEventListener('click', buttonClickHandler);

  const btn24 = document.querySelector(".btn24") 
  btn24.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn24.addEventListener('click', buttonClickHandler);

  const btn25 = document.querySelector(".btn25") 
  btn25.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn25.addEventListener('click', buttonClickHandler);

  const btn26 = document.querySelector(".btn26") 
  btn26.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn26.addEventListener('click', buttonClickHandler);

  const btn27 = document.querySelector(".btn27") 
  btn27.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn27.addEventListener('click', buttonClickHandler);

  const btn28 = document.querySelector(".btn28") 
  btn28.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn28.addEventListener('click', buttonClickHandler);

  const btn29 = document.querySelector(".btn29") 
  btn29.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn29.addEventListener('click', buttonClickHandler);

  const btn30 = document.querySelector(".btn30") 
  btn30.innerHTML = "Cuestion 5.- What does not code print to the console?<br>Pregunta 5.- Que no imprime código en la consola?"
  btn30.addEventListener('click', buttonClickHandler);
}


function buttonClickHandler(event) {
  switch (event.target.id) {
    case 'btn1':
       //What is the value of Dessert.type after executing this code?
      //Cual es el valor de Dessert.type despues de executado este codigo?
      const Dessert = {type : "Pie"}
      Dessert.type = "Pudding"
      const Second = Dessert
      Second.type = "Fluid"
      window.alert(Dessert.type)
      console.log(Dessert.type)
      //R=Fluid
      break;
    case 'btn2':
       //what will be logged to the console?
      //Como se muestra lo registrado en la consola?
      window.alert(typeof "BlueBerry")
      console.log(typeof "BlueBerry")
      //R=String
      break;
    default:
      // Rutina por defecto
      break;
  }
}
//#endregion JavaScript