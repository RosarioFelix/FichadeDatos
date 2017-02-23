
var record = document.getElementById('record');



function Datos(nombre, apellido, dni,direccion){
        this.nombre = nombre;
        this.apellido=apellido;
        this.dni= dni;
        this.direccion = direccion;
        this.todoDatos = function(){
  return ("<ul>"+ "<li> Nombre : " + nombre.toLowerCase()+"<br>" + "<li> Apellido: " +apellido +"<li> DNI : " + dni+"<li> Direccion: "+direccion+"</ul>")}};

var addStudent = document.getElementById('add student');
addStudent.onclick = function() {
  var name =document.getElementById('nombre').value;
  var lastName=document.getElementById('apellido').value;
  var i = document.getElementById('DNI').value;
  var address = document.getElementById('direccion').value

var respuesta = new Datos (name,lastName,i,address)

if(( name == 0)||(lastName == 0)||(i.length == 0)||(address== 0)){
  return alert("Ingrese Datos");
}else{
  return record.innerHTML = respuesta.todoDatos();
}

}
