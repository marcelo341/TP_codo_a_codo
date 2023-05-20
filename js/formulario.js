function validar() {
    let usuario = document.getElementById("usuario").value;
    let nombre = document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let edad=document.getElementById("edad").value;
    let dni=document.getElementById("dni").value
    let email=document.getElementById("email").value;
    if (nombre.length <3){
      alert("debe completar el nombre correctamente")
  return false}
  if (apellido.length <3){
      alert("debe completar apellido correctamente")
  return false}
  if (edad <18){
      alert("usted es menor de edad")
  return false}
  else if (edad >120) {
      alert("usted ha excedido el limite de edad")
  return false}
  if (dni.length <=10 ){
      alert("ingrese mas de 8 caracteres en dni")
  return false}
  if (!email.includes("@") ){
      alert ("direccion de mail no valida")
  return false}
  }