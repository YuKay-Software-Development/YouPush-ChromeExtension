chrome.app.runtime.onLaunched.addListener(function () {

    chrome.app.window.create('background.html', {

        'outerBounds': {

            'width': 400,
            'height': 500

        }

    });

});

$(function () {

    $('#test').on('click', function (evt) {

            $(evt.currentTarget).text(new Date().getTime().toString());
            var title = "test";
            var time = /(..)(:..)/.exec(new Date());
            var hour = time[1];
            new Notification(title + ' - ' + hour + time[2], {
                icon: 'Logo-128x128.png',
                body: 'Time to make the toast.'

            });

    });

});

