/*
$(function() {
	$( "#call-dialog" ).dialog({
	  autoOpen: true,
	  show: {
	    effect: "slide",
	    draggable: false,
	    duration: 1000
	  },
	  hide: {
	    effect: "slide",
	    duration: 1000
	  }
	});

	$( "#customer-dialog" ).dialog({
	  autoOpen: true,
	  show: {
	    effect: "slide",
	    draggable: false,
	    duration: 1000
	  },
	  hide: {
	    effect: "slide",
	    duration: 1000
	  }
	});

	$( "#order-dialog" ).dialog({
	  autoOpen: true,
	  show: {
	    effect: "slide",
	    draggable: false,
	    duration: 1000
	  },
	  hide: {
	    effect: "slide",
	    duration: 1000
	  }
	});

	$( "#call-dialog" ).dialog({ dialogClass: 'no-close' });
	$( "#customer-dialog" ).dialog({ dialogClass: 'no-close' });
	$( "#order-dialog" ).dialog({ dialogClass: 'no-close' });

	$('#call-dialog').position({
	  my: "left top",
	  at: "left bottom",
	  of: $('#call-dialog-container')
	});

}); */

$(function() {
	/*$( "#call-according" ).accordion();
	$( "#customer-according" ).accordion();
	$( "#order-according" ).accordion();*/
    
	$( "#call-according" ).accordion({ heightStyle: "fill" });
	$( "#customer-according" ).accordion({ heightStyle: "fill" });
	$( "#order-according" ).accordion({ heightStyle: "fill" });

	$( "#call-tabs" ).tabs();
});




