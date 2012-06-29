/*///////////////////////////////////////////////////////////////////////
Ported to jquery from prototype by Joel Lisenby (joel.lisenby@gmail.com)
http://joellisenby.com

original prototype code by Aarron Walter (aarron@buildingfindablewebsites.com)
http://buildingfindablewebsites.com

Distrbuted under Creative Commons license
http://creativecommons.org/licenses/by-sa/3.0/us/
///////////////////////////////////////////////////////////////////////*/$(document).ready(function(){$("#signup").submit(function(){$("#response").html("Adding email address...");$.ajax({url:"site-handlers/store-address.php",data:"ajax=true&email="+escape($("#email").val()),success:function(a){$("#response").html(a)}});return!1})});