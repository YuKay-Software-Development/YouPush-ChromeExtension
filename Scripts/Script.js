$(function () {
    
    $('#test').on('mouseenter', function (evt) {

        //$(evt.currentTarget).text("HOVER!!!11!elf");

    });

    $('#test').on('click', function (evt) {

        var chromeStuff = chrome.notifications;

        var notifTimeout = $('[name=NotificationTimeout]').val() * 1000;

        var title = "test";
        var time = /(..)(:..)/.exec(new Date());     
        var hour = time[1]; 
        var message = "i liek weird pron";
        var notif = new Notification(title + ' - ' + hour + time[2], {
            icon: 'Logo-128x128.png',
            body: message
	    });

        console.log(notif);

        setTimeout(function () {
            notif.close();
        }, notifTimeout);

    });

})