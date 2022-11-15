document.querySelector(".nav-brand").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

  const mysql = require('mysql')
const { createConnection } = require('net')

const conection = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'ofertas_laborales'
})
  
  var formulario_login = document.querySelector(".formulario__login");

  function anchoPage(){
    if (window.innerWidth > 850){    
        contenedor__login.style.display = "block";
}else{
    contenedor__login.style.display = "none";
    formulario_login.style.display = "block";
    }
}
function iniciarSesion(){
    if (window.innerWidth > 850){
        formulario_login.style.display = "block";
        contenedor_login.style.opacity = "0";
    }else{
        formulario_login.style.display = "block";
        contenedor_login.style.display = "none";
    }
}

function limpiar(){
    document.getElementById("id_empresa").value=""
    document.getElementById("direccion").value=""
    document.getElementById("mail").value=""
    document.getElementById("telefono").value=""

    document.getElementById("nombre").value=""
    document.getElementById("cargo").value=""

    document.getElementById("cargo_ofrecido").value=""
    document.getElementById("cantidad_de_hs").value=""
    document.getElementById("sueldo_estimado").value=""
}

$("#crear").click(function(){
	var id_empresa=$("#id_empresa").val();
	var direccion=$("#direccion").val();
    var mail=$("#mail").val();
    var telefono=$("#telefono").val();
	db.transaction(function(transaction){
		var sql="INSERT INTO empresa(id_empresa,direccion,mail,telefono) VALUES(?,?)";
		transaction.executeSql(sql,[id_empresa,direccion,mail,telefono],function(){			
		}, function(transaction, err){
			alert(err.message);
		})
	})
		limpiar();
		
	})


$(function(){
$("#crear").click(function(){
        db.transaction(function(transaction){
            var sql="CREATE TABLE empresa"+
            ("id_empresa INTEGER NOT NULL PRIMARY KEY, "+
            "direccion VARCHAR(50) NOT NULL, "+
            "mail VARCHAR(50) NOT NULL, "+
            "telefono VARCHAR(50) NOT NULL,");
            transaction.executeSql(sql,undefined, function(){
                alert("Tabla empresa creada");
            }, function(transaction, err){
                alert(err.message)
            })
            var sql="CREATE TABLE contacto"+
            ("nombre INTEGER NOT NULL PRIMARY KEY, "+
            "cargo VARCHAR(50) NOT NULL,");
            transaction.executeSql(sql,undefined, function(){
                alert("Tabla contacto creada");
            }, function(transaction, err){
                alert(err.message)})
            var sql="CREATE TABLE oferta_laboral"+
            ("cargo_ofrecido INTEGER NOT NULL PRIMARY KEY, "+
            "cantidad_de_hs VARCHAR(50) NOT NULL, "+
            "sueldo_estimado VARCHAR(50) NOT NULL, ");
            transaction.executeSql(sql,undefined, function(){
                alert("Tabla oferta laboral creada");
            })}, function(transaction, err){
            alert(err.message)}
            )
    });})
    
