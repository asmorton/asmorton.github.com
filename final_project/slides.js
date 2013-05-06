$(document).ready(function()         
   {            
      $(document).ready(function() {
         // Hide every div except the first one
         $('.menu-1:not(:first)').hide();               
      });
         
         $('.arrow').click(function () {
            // Show the next div when we click the link
            if ($('.menu-:visible').hasClass('last')) {
               $('.menu-:first').show('slow');
            } else {
               $('.menu-:visible').next().show('slow');
            }
            // Hide the current div when we click the link
            $('.menu-:visible').hide();                           
         });            
   });      
