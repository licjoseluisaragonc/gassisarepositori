
const PrimeraPregunta = function(){
  //What is the value of Dessert.type after executing this code?
  //Cual es el valor de Dessert.type despues de executado este codigo?
  const Dessert = {type : "Pie"}
  Dessert.type = "Pudding"
  const Second = Dessert
  Second.type = "Fluid"
  window.alert(Dessert.type)
  console.log(Dessert.type)
  //R=Fluid
}



const SegundaPregunta = function(){
  //what will be logged to the console?
  //Como se muestra lo registrado en la consola?
  window.alert(Dessert.type)
  //R=
}



const btnAgregar = document.querySelector(".btn1");
btnAgregar.addEventListener("click", () => {
  PrimeraPregunta()
});



