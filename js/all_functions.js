


// Fade effect...
$(document).ready(function() {
    $(document.body).hide().fadeIn(1000);
    initMenu();
    $('html')
    .delegate(".input_div_default, .input-div-col2", 'click', function(){
        if($("input:text", this)[0]){
            $('input', this).focus();
            $('#footer-button').css('position','relative!important');
        }
        if($("input:checkbox", this)[0])
            $('input', this).click();
    })
    .delegate('input','keyup',function(e) {
        if (e.keyCode == 13) {
            $("#footer-button a").click();
        }
    })
    .delegate('input','focus',function() {
        $('#footer-button').css('position','relative!important');
    })
    .delegate('input','blur',function() {
        $('#footer-button').css('position','fixed!important');
    })
    $('a[rel="browser"]').on("click", function(e){
        e.preventDefault();
        openLinkByPlugin($(this).attr("href"));
    });
    
    if(!$('#pre_home_page')[0]) {
    	$("[data-role='page']").css("paddingBottom", $("#footer-button").outerHeight());
    } else {
    	$("body, [data-role='page']").height($(window).height()).css({"overflow":"hidden !important"});
    }
    	  
    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false ),
    iOSversion = false;

    if( iOS ){
        iOSversion = ( !!window.history && !!window.history.pushState ? true : false );
        if(iOSversion){
            $('body').addClass('marginIphone')
        }
    }
    /*$.mobile.loading('show',{
        html: "<span class='overlayLoading'></span><img src='../images/ajax-loader.gif' class='loadImage'/>"
    });*/
});



//############################ Notifications ###########################

var GVTPushNotifications = function() {

};
GVTPushNotifications.prototype.androidTokenHandler = function(result) {
	console.log('androidTokenHandler called ' + result);
};
GVTPushNotifications.prototype.iOSTokenHandler = function(token) {
	console.log('iOSTokenHandler called local - nao envia token');
};
GVTPushNotifications.prototype.wp8TokenHandler = function(token) {
	console.log('wp8TokenHandler local - nao envia token');

};
GVTPushNotifications.prototype.onAndroidNotificationReceived = function(event) {
    if(event.event === 'registered') {
        onDeviceReadyPreHome(true);
    } else if(event.event === 'message') {
        if ( event.foreground ) {
            onDeviceReadyPreHome(true);
            var soundfile = event.soundname || event.payload.sound;
            var snd = new Media("file:///android_asset/www/" + soundfile);
            snd.play();
        } else {
            onDeviceReadyPreHome(false);
            var local_id;
            window.applicationPreferences.get("local_id", function(value) {
                    local_id = value;
                }, function(error) {
                    console.log("Error! " + JSON.stringify(error));
            });

            window.applicationPreferences.get("instance", function(value) {
                    changePage(window.environment_config.ENDPOINT_HTTP + '/notifications?AUTHTOKEN=' + local_id + '&INSTANCE=' + value);
                }, function(error) {
                    console.log("Error! " + JSON.stringify(error));
            });
        	
            if ( event.coldstart ) {
            	
            	// this is when the user stars the app from the notification
                //navigator.notification.alert(e.payload.message);
            }
        }
	}
};
GVTPushNotifications.prototype.oniOSNotificationReceived = function(event) {
    if ( event.alert ) {
        var db = window.sqlitePlugin.openDatabase({ name: "websql" });
        $.mobile.loader().show();
        webSql.get(db, ["local_id", "instance"], function (res) {
            console.log('Result ok ' + JSON.stringify(res));
            var url = window.environment_config.ENDPOINT_HTTP + "/notifications?AUTHTOKEN=" + res['local_id'] + '&INSTANCE=' + res['instance'] + "&target=/portal/site/minhagvtmobile/notifications";            //
            console.log(url);
            window.location = url;
        }, function (error) {
            $.mobile.loader().hide();
            console.log(JSON.stringify(error))
        });
    }

    if ( event.sound ) {
        var snd = new Media(event.sound);
        snd.play();
    }
};
GVTPushNotifications.prototype.onWP8NotificationReceived = function(event) {
	if (event.type === "toast" && event.jsonContent) {
        pushNotification.showToastNotification(function(){}, errorHandler,
            {
                "Title": event.jsonContent["wp:Text1"],
                "Subtitle": event.jsonContent["wp:Text2"],
                "NavigationUri": event.jsonContent["wp:Param"]
            });
    }
	if (event.type === "raw" && event.jsonContent) {
        //navigator.notification.alert(event.jsonContent.Body);
    }
};
GVTPushNotifications.prototype.onWP8NotificationNavigateTo = function(event) {
	console.log('onWP8NotificationNavigateTo');
	// definido na pre-home
};
GVTPushNotifications.prototype.errorHandler = function(error) {
//	navigator.notification.alert('errorHandler ' + error);
};

var gvtPush = new GVTPushNotifications();

document.addEventListener("deviceready", function() {
    pushNotification = window.plugins.pushNotification;
    if (device.platform === 'Android') {
	    console.log("Registering for Android Notifications");
	    pushNotification.register(
		    gvtPush.androidTokenHandler,
		    gvtPush.errorHandler,
		    {
		        "senderID":"1016210741333",
		        "ecb":"gvtPush.onAndroidNotificationReceived"
	    	}
	    );
	} else if (device.platform === 'Win32NT'){
		console.log("Registering for WP8 Notifications");
        onDeviceReadyPreHome(true);
    	pushNotification.register(
        	gvtPush.wp8TokenHandler,
        	gvtPush.errorHandler,
        	{
	            "channelName": 'pushChannel',
	            "ecb": "gvtPush.onWP8NotificationReceived",
	            "uccb": "gvtPush.wp8TokenHandler",
	            "errcb": "gvtPush.errorHandler"
        	}
       	);
	} else if(device.platform === 'iOS') {
		console.log("Registering for iOS Notifications");
        onDeviceReadyPreHome(true);
	    pushNotification.register(
		    gvtPush.iOSTokenHandler,
		    gvtPush.errorHandler,
		    {
		        "badge":"true",
		        "sound":"true",
		        "alert":"true",
		        "ecb":"gvtPush.oniOSNotificationReceived"
		    }
		);
	}
});