document.querySelector(".menu-btn").addEventListener("click", () => {
document.querySelector(".nav-menu").classList.toggle("show");
  });
  
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

const mysql = require('mysql')
const { createConnection } = require('net')

const conection = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'ofertas_laborales'
})

conection.connect( (err) =>{
    if(err) throw err
    console.log('Conectado')
})

const data = new FormData(document.getElementById('formulario'));

then(function(button) {
    if(response.ok) {
        return response.text()
    } else {
        throw "Error al ingresar datos";
    }
 
 })
 .then(function(texto) {
    console.log(texto);
 })
 .catch(function(err) {
    console.log(err);
 });

 fetch('../ofertas_laborales.sql', {
    method: 'POST',
    body: data
 })
