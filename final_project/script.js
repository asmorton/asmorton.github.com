$(document).ready(function() {
	

$('#slideshow').cycle({ 
    fx:'scrollLeft',  
    fit:0,
    slideResize:1,
    timeout:0,
    next:'#arrow',
    prevNextEvent:'click.cycle',	   

});

$('#slideshow').cycle({ 
    fx:'scrollRight',  
    fit:0,
    slideResize:1,
    timeout:0,
    prevNextEvent:'click.cycle',	    
    prev:'#arrow'

});


});
