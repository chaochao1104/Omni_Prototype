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
	$( "#call-according" ).accordion({ heightStyle: "fill" });
	$( "#call-according" ).accordion( "option", "collapsible", true );
	$( "#customer-according" ).accordion({ heightStyle: "fill" });
	$( "#customer-according" ).accordion( "option", "collapsible", true );
	$( "#order-according" ).accordion({ heightStyle: "fill" });
	$( "#order-according" ).accordion( "option", "collapsible", true );

	$( "#call-tabs" ).tabs({ heightStyle: "fill" });
	$( "#customer-tabs" ).tabs({ heightStyle: "fill" });
	$( "#order-tabs" ).tabs({ heightStyle: "fill" });

	$( "#follow-up-due" ).datepicker();

	$("textarea").autosize();
	$('.animated').autosize({append: "\n"});

    $("#btn-find-customer").button().click(openFindCustomerDiag);
    $( "#btn-find-customer" ).button( "option", "icons", { primary: "ui-icon-search", secondary: null} );

	$(".ui-tabs-panel").css('padding','0px !important');
	$(".ui-tabs").css('padding','0px !important');
    $(".ui-accordion-content").css("padding","0px !important"); 

    $( ".ui-tabs-anchor" ).css("padding", "0px !important");

	//setThemeColor();
});

function setThemeColor() {
	var color = $(".ui-state-default").css("color");
	console.log(color);
	$(".header").css("background-color", color);
}

function clearFindCustomerGrid() {
	var grid = $( "#find-customer-result-grid" );
	$('#find-customer-result-grid tbody tr').remove();
}

function addMockedCustomersToGrid() {
	var grid = $( "#find-customer-result-grid" );
	grid.append("<tr><td>Chris Wang</td> <td>Female</td> <td><a href=\"#\">SHA131221001</a></td> <td>Shirts</td> <td>Shanghai Centre, B/F, 1376 Nanjing Xi Lu, Shanghai, China</td> <td>Chris Wang</td> <td>Chris Wang</td> <td>***</td> <td>MVP</td></tr>");
	grid.append("<tr><td>Chris Wang</td> <td>Female</td> <td><a href=\"#\">SHA131221003</a></td> <td>Skirts</td> <td>3211 Hongmei Lu, near Chengjiaqiao Zhi Lu, Shanghai, China</td> <td>Chris Wang</td> <td>Chris Wang</td> <td>***</td> <td>Platinum</td></tr>");
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
      position: { my: "left top", at: "right top", of: $("#btn-find-customer") },
      show: { effect: "slide", duration: 200 },
      hide: { effect: "slide", duration: 200 },
      buttons: [ { text: "Search", click: searchCustomer } ]
    });

}


