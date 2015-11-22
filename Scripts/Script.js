$(function () {
	
	var title = "test";
	var notifTimeout = $('[name=NotifTimeout]').val();
	var notifTimeoutSec = notifTimeout * 1000
	
	var time = /(..)(:..)/.exec(new Date());     
	var hour = time[1];

	if (Notification.permission != "granted") {
		Notification.requestPermission();
	}

	$('#test').on('mouseenter', function (evt) {

		//$(evt.currentTarget).text("HOVER!!!11!elf");

		});

	$('#test').on('click', function (evt) {

		var notifMessage = $('[name=NotifMessage]').val();

		window["notif"] = new Notification(title + ' - ' + hour + time[2], {
			type: 'progress',
			progress: 69,
			icon: 'Logo-128x128.png',
			body: notifMessage,
			dir: 'rtl',
			tag: '<h1>BAKA</h1>',
			requireInteraction: true
		});
		
		notif.onclose = function (evt) {
			console.group("Closed");
			console.log(evt);
			console.groupEnd();
		};

		notif.onclick = function (evt) {
			//var messageWindow = window.open("messagewindow.html", "", "width=400, height=500", resizable = false);
			chrome.windows.create({ 'url': 'messagewindow.html', 'type': 'panel','width': 400, 'height': 500 }, function (window) {  });
			console.group("Clicked");
			console.log(evt);
			console.groupEnd();
		};

		console.log(notif);

		setTimeout(function () {
			notif.close();
		}, notifTimeoutSec);


	});

	$(document).ready(function () {

		var sPath = window.location.pathname;
		var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
		console.log(sPage);
		if (sPage == "messagewindow.html") {

			document.getElementById("pageTitle").innerHTML = title;
			document.getElementById("title").innerHTML = "New text title!";
			document.getElementById("message").innerHTML = "New text!";

		}

	});

})