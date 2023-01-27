InitDom();

//#region Postback functions
//esta función se ejecuta al inicio, y añado 2 eventos al postback
function InitDom() {
  if (typeof Sys != "undefined") {
    Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(
      beginPageRequest
    );
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(
      endPageRequest
    );
  }
  else{
    ConstructorX();
  }
}

function beginPageRequest(sender, args) {
  //Esto se ejecuta justo antes de enviar el postback
}

function endPageRequest(sender, args) {
  //Esto se ejecuta cuando vuelve el postback
  if (args.get_error() != undefined && args.get_error().httpStatusCode == "0") {
    //hubo un error
  } else {
    //todo bien
  }
}

//#endregion

  //#region Desarrollo Javascript
function ConstructorX() {
  const MainBody = document.querySelector(".DivButtons");
 
  //Rutina de carga de valores desde Archivo JSON
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'botones.json', true);
  xhr.send();

  // Manejar la respuesta
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Convertir la cadena JSON a un objeto JavaScript
      var obj = JSON.parse(xhr.responseText);
      //Rutina de bucle para recorrer los datos de los botones y cargarlos
      for (var i in obj) {
        // Acceder al valor de la clave
        var boton = document.createElement('button'); //boton.className=elemento.nameclass;
        var itemX = obj[i]
        boton.innerHTML = itemX.caption + "<br>" + itemX.value
        boton.className = itemX.nameclass
        boton.addEventListener("click", buttonClickHandler)
        MainBody.appendChild(boton)
       
        console.log(itemX.nameclass) 
      }
    }
  }
}

function buttonClickHandler(event) {
  switch (event.target.className) {
    case "btn1":
      //What is the value of Dessert.type after executing this code?
      //Cual es el valor de Dessert.type despues de executado este codigo?
      const Dessert = { type: "Pie" };
      Dessert.type = "Pudding";
      const Second = Dessert;
      Second.type = "Fruit";
      window.alert(Dessert.type);
      console.log(Dessert.type); //R=Fluid
      break;
    case "btn2":
      //what will be logged to the console?
      //Como se muestra lo registrado en la consola?
      window.alert(typeof "BlueBerry")
      console.log(typeof "BlueBerry") //R=String
      break
    case "btn3":




      break
    
    default:
      // Rutina por defecto
      break;
  }
}
//#endregion JavaScript
