var UserDetails = {
    BackgroundSetter: function (classname) {
        $.ajax({
            url: '/Home/GetBackgroundImages',
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
                debugger;
                if (result == "button-bg2") {
                    $("body").css({
                        "background": "url('/Content/img/bg2.jpg')no-repeat center center fixed"
                    });
                }
                else if (result == "button-bg3") {
                    $("body").css({
                        "background": "url('/Content/img/bg.jpg')no-repeat center center fixed"
                    });
                }
                else if (result == "button-bg5") {
                    $("body").css({
                        "background": "url('/Content/img/giftly.png')repeat"
                    });
                }
                else if (result == "button-bg6") {
                    $("body").css({
                        "background": "#2c3e50"
                    });
                }
                else if (result == "button-bg7") {
                    $("body").css({
                        "background": "url('/Content/img/bg3.png')repeat"
                    });
                }
                else if (result == "button-bg8") {
                    $("body").css({
                        "background": "url('/Content/img/bg8.jpg')no-repeat center center fixed"
                    });
                }
                else if (result == "button-bg9") {
                    $("body").css({
                        "background": "url('/Content/img/bg9.jpg')no-repeat center center fixed"
                    });
                }
                else if (result == "button-bg10") {
                    $("body").css({
                        "background": "url('/Content/img/bg10.jpg')no-repeat center center fixed"
                    });
                }
                else if (result == "button-bg11") {
                    $("body").css({
                        "background": "url('/Content/img/bg11.jpg')no-repeat center center fixed"
                    });
                }
                else if (result == "button-bg12") {
                    $("body").css({
                        "background": "url('/Content/img/bg12.jpg')no-repeat center center fixed"
                    });
                }
                else if (result == "button-bg13") {
                    $("body").css({
                        "background": "url('/Content/img/bg13.jpg')repeat"
                    });
                }
            },
            error: function (data) { }
        });
    },

    UserProfile: function(){
        $.ajax({
            url: '/DashboardCarManager/GetBackgroundImages',
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
                debugger;

            },
            error: function (data) { }
        });
    }
}