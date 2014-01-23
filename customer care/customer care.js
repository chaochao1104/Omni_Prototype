
$(document).ready(function() {
	var btnLoginOrLogout = $("#login-logout");
	btnLoginOrLogout.button()
		.click(function() {
			console.log("label: " + btnLoginOrLogout.button('option', 'label'));
			var label = btnLoginOrLogout.button('option', 'label');
			label = label === "Login" ? "Logout" : "Login";
			btnLoginOrLogout.button('option', 'label', label);
		});

	var btnReadyOrNot = $("#ready-or-not");
	btnReadyOrNot.button()
		.click(function() {
			console.log("label: " + btnReadyOrNot.button('option', 'label'));
			var label = btnReadyOrNot.button('option', 'label');
			label = label === "Ready" ? "Not Ready" : "Ready";
			btnReadyOrNot.button('option', 'label', label);
		});

	var btnAnswerOrRelease = $("#answer-or-release");
	btnAnswerOrRelease.button()
		.click(function() {
			console.log("label: " + btnAnswerOrRelease.button('option', 'label'));
			var label = btnAnswerOrRelease.button('option', 'label');
			label = label === "Answer" ? "Release" : "Answer";
			btnAnswerOrRelease.button('option', 'label', label);
		});

	var btnHoldOrResume = $("#hold-or-resume");
	btnHoldOrResume.button()
		.click(function() {
			console.log("label: " + btnHoldOrResume.button('option', 'label'));
			var label = btnHoldOrResume.button('option', 'label');
			label = label === "Hold" ? "Resume" : "Hold";
			btnHoldOrResume.button('option', 'label', label);
		});

	$("#btn-transfer").button();
	$("#btn-supervisor-assist").button();
	$("#btn-emergency-assist").button();
	$("#btn-check-recording").button();
	$("#btn-todolist").button();

	$("#btn-find-customer")
	    .button()
		.button( "option", "icons", { primary: "ui-icon-search", secondary: null} );

	$("#btn-customer-profile").button();

	$("#btn-search-customer").button();

	$( "#call-according" )
		.accordion({ heightStyle: "content", 'fillSpace': true, 'clearStyle': true })
		.accordion( "option", "collapsible", true );
	
	$( "#order-according" )
		.accordion({ heightStyle: "content", 'fillSpace': true, 'clearStyle': true })
		.accordion( "option", "collapsible", true );
	
	$( "#call-tabs" ).tabs({ heightStyle: "content" });
	$( "#order-tabs" ).tabs({ heightStyle: "content" });

	$( ".date-picker" ).datepicker();

	$("textarea").autosize();
	$('.animated').autosize({append: "\n"});

	$(".ui-tabs-panel").css('padding','0px !important');
	$(".ui-tabs").css('padding','0px !important');
    $(".ui-accordion-content").css("padding","0px !important"); 

    $( ".ui-tabs-anchor" ).css("padding", "0px !important");

    $( "button[name='followup']" ).button();
	//setThemeColor();
});

function setThemeColor() {
	var color = $(".ui-state-default").css("color");
	console.log(color);
	$(".header").css("background-color", color);
}

function clearFindCustomerGrid() {
	var grid = $( "#find-customer-result-grid" );
	$("#find-customer-result-grid tbody tr").remove();
}

function addEmptyRowsToCustomerGrid() {
	var grid = $( "#find-customer-result-grid" );
	grid.append("<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>");
	grid.append("<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>");
}

function addMockedCustomersToGrid() {
	var grid = $( "#find-customer-result-grid" );
	grid.append("<tr><td>Chris Wang</td> <td>Female</td> <td><a href=\"#\">SHA131221001</a></td> <td>Shirts</td> <td>Shanghai Centre, B/F, 1376 Nanjing Xi Lu, Shanghai, China</td> <td>Chris Wang</td> <td>Chris Wang</td> <td>MVP</td></tr>");
	grid.append("<tr><td>Chris Wang</td> <td>Female</td> <td><a href=\"#\">SHA131221003</a></td> <td>Skirts</td> <td>3211 Hongmei Lu, near Chengjiaqiao Zhi Lu, Shanghai, China</td> <td>Chris Wang</td> <td>Chris Wang</td> <td>VIP</td></tr>");
}

function searchCustomer() {
	clearFindCustomerGrid();
	addMockedCustomersToGrid();
}

function openFindCustomerDiag() {
	$( "#find-customer-diag" ).dialog({
      width: 850,
      height: 500,
      modal: false,
      position: { my: "center top", at: "center top", of: $("#call-according") },
      show: { effect: "scale", duration: 200 },
      hide: { effect: "scale", duration: 200 }
    });
	clearFindCustomerGrid();
	addEmptyRowsToCustomerGrid();
}

function openCustomerProfileDiag() {
	$( "#customer-profile-diag" ).dialog({
      width: 750,
      height: 500,
      modal: false,
      position: { my: "center top", at: "center top", of: $("#call-according") },
      show: { effect: "scale", duration: 200 },
      hide: { effect: "scale", duration: 200 }
    });
}

function openFollowUpDiag() {
	$( "#follow-up-diag" ).dialog({
      width: 900,
      height: 600,
      modal: false,
      position: { my: "center top", at: "center top", of: $("#call-according") },
      show: { effect: "scale", duration: 200 },
      hide: { effect: "scale", duration: 200 },
      buttons: [ { text: "Save", click: function() { $( '#follow-up-diag' ).dialog('close'); } }, 
                 { text: "Cancel", click: function() { $( '#follow-up-diag' ).dialog('close'); } } ]
    });
}

function openTodoListDiag() {
	$( "#todolist-diag" ).dialog({
      width: 1100,
      height: 400,
      modal: false,
      position: { my: "center top", at: "center top", of: $("#call-according") },
      show: { effect: "scale", duration: 200 },
      hide: { effect: "scale", duration: 200 },
      buttons: [ { text: "Save", click: function() { $( '#todolist-diag' ).dialog('close'); } }, 
                 { text: "Cancel", click: function() { $( '#todolist-diag' ).dialog('close'); } } ]
    });
}

function countTime() {
	var secSpan = $("#timer-sec");
	var minSpan = $("#timer-min");
	var hourSpan = $("#timer-hour");

	var sec = parseInt(secSpan.html());
	var min = parseInt(minSpan.html());
	var hour = parseInt(hourSpan.html());

	sec++;
	if (sec > 59) {
		min++;
		sec = 0;
		if (min > 59) {
			hour++;
			min = 0;
		}
	}

	secSpan.html(toTimeString(sec));
	minSpan.html(toTimeString(min));
	hourSpan.html(toTimeString(hour));
}

function toTimeString(num) {
	return num > 9 ? num.toString() : "0"+num.toString();
}

function setCallTimer() {
	setInterval(countTime, 1000);
}



