$(document).ready(function() {

   $("p.companies").hide();

   var clicked = true;
   $("#listComp").click(function(){
      $("p.companies").toggle(); 
   })

});  