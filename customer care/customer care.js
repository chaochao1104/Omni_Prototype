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

$(document).ready(function() {
	/*$( "#call-according" ).accordion();
	$( "#customer-according" ).accordion();
	$( "#order-according" ).accordion();*/
    

	$( "#call-according" ).accordion({ heightStyle: "fill" });
	$( "#call-according" ).accordion( "option", "collapsible", false );
	$( "#customer-according" ).accordion({ heightStyle: "fill" });
	$( "#customer-according" ).accordion( "option", "collapsible", false );
	$( "#order-according" ).accordion({ heightStyle: "fill" });
	$( "#order-according" ).accordion( "option", "collapsible", false );

	$( "#call-tabs" ).tabs({ heightStyle: "fill" });
	$( "#customer-tabs" ).tabs({ heightStyle: "fill" });
	$( "#order-tabs" ).tabs({ heightStyle: "fill" });

	$( "#follow-up-due" ).datepicker();

	$("textarea").autosize();
	$('.animated').autosize({append: "\n"});

	//$("#call-nature-checkboxes").buttonset();

    $(function() {
        $("#btn-find-customer").button().click(openFindCustomerDiag);
    });

	$(".ui-tabs-panel").css('padding','0px !important');
	$(".ui-tabs").css('padding','0px !important');
    $(".ui-accordion-content").css("padding","0px !important"); 

});

function clearFindCustomerGrid() {
	var grid = $( "#find-customer-result-grid" );
	$('#find-customer-result-grid tbody tr').remove();
}

function addMockedCustomersToGrid() {
	var grid = $( "#find-customer-result-grid" );
	grid.append("<tr><td>Chris Wang</td> <td>Female</td> <td>SHA131221001</td> <td>Shirts</td> <td>Shanghai Centre, B/F, 1376 Nanjing Xi Lu, Shanghai, China</td> <td>Chris Wang</td> <td>Chris Wang</td> <td>***</td> <td>MVP</td></tr>");
	grid.append("<tr><td>Chris Wang</td> <td>Female</td> <td>SHA131221003</td> <td>Skirts</td> <td>3211 Hongmei Lu, near Chengjiaqiao Zhi Lu, Shanghai, China</td> <td>Chris Wang</td> <td>Chris Wang</td> <td>***</td> <td>Platinum</td></tr>");
	$( "#find-customer-diag" ).dialog( "close" );
}

function searchCustomer() {
	clearFindCustomerGrid();
	addMockedCustomersToGrid();
}

function openFindCustomerDiag() {
	$( "#find-customer-diag" ).dialog({
      width: 550,
      height: 300,
      modal: true,
      position: { my: "center top", at: "center center", of: $("#frag-find-customer") },
      show: { effect: "slide", duration: 200 },
      hide: { effect: "slide", duration: 200 },
      buttons: [ { text: "Search", click: searchCustomer } ]
    });

}


