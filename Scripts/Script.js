$(function () {
    
    $('#test').on('mouseenter', function (evt) {

        //$(evt.currentTarget).text("HOVER!!!11!elf");

    });

    $('#test').on('click', function (evt) {

        $(evt.currentTarget).text(new Date().getTime().toString());
        var title = "test";
        var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
        var hour = time[1];               // The prettyprinted hour.
        new Notification(title + ' - ' + hour + time[2], {
        icon: 'Logo-128x128.png',
        body: 'Time to make the toast.'
	  });


    });

})