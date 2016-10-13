// Opció 1 require Navegadors normals no node.js sí
// Opció 2 import  Navegadors normals node.js però ECS6 sí

// var $ = require('jquery');

window.$ = window.jQuery = require('jquery');
window._= require('underscore');
require('bootstrap-sass');
// Opció 2.a
// window.pepita = require('./pepita.js');

$(document).ready(function(){
    $("#msgid").html("hello world");
});