function parseUrlImage() {
    var result = '';
    var path = window.location.href;
    path = path.split('/');
    var pathLength = --path.length;
    for(var i=0;i < pathLength;i++){
        result += path[i] + '/';
    }
    result += 'images/loading.gif';

    return result;
}
var t = parseUrlImage();

function showLoader() {
    window.plugins.spinnerDialog.show(null, null, true);
    /*
    setTimeout(function(){
        var $lock = $('#uiLockId');
        if($lock.length == 0) {
            $lock = $('<div></div>').attr('id', 'uiLockId').css({
                'position': 'absolute',
                'top': 0,
                'left': 0,
                'z-index': 99999,
                'opacity': 1,
                'width':'100%',
                'height':'100%',
                'display':'none'
            }).html('').appendTo($('[data-role=page]'));
            $.mobile.loading('show', {
                html: "<span class='overlayLoading'></span><div class='loading-minha-gvt'></div>"
            });
            console.log("SHOWING LOADER");
            $lock.css('display', 'block');
        }        
    }, 1);*/
}

function hideLoader() {
    window.plugins.spinnerDialog.hide();
    /*console.log("SHOULD HIDE LOADER");
    var $lock = $('#uiLockId');
    console.log("lock length " + $lock.length);
    if ($lock.length > 0) {
        console.log("LOCK REMOVED");
        $lock.remove();
    }
    $.mobile.loading('hide');*/
}

function changePage(url) {
    showLoader();
    setTimeout(function () {
        window.location.href = url;
    }, 1);  
    //$.mobile.changePage(url, { showLoadMsg: true, cache: false, reload:true } );
}

function isOnline() {
    if(window.cordova) {
        var networkState = navigator.network.connection.type;
        return (networkState !== Connection.NONE);
    } else {
        return true;
    }
}
function showOfflineMessage() {
    
    msg = {title: 'Conexão', message: 'Sem Conexão. Verifique sua conexão de internet',
            button: 'OK'};
    
    displayAlert(msg);

}

function displayAlert(type){

    if (navigator.notification){
        navigator.notification.alert(type.message, null, type.title, type.button);
    }else{
        alert('Title: ' + type.title + ' - msg [' + type.message + ']');
    }
}


$(document).on( "mobileinit", function( event ) {
    console.log('jQueryMobile initialized');
    $.mobile.phonegapNavigationEnabled = true;
    $.mobile.allowCrossDomainPages = true;
});

$(document).on('pageinit', function() {
    $('form').submit(function() {
        setTimeout(function () {
            showLoader();
        }, 1);
    });
});

function shouldRotateToOrientation (rotation) {
    switch (rotation) {
        //Portrait
        case 0:
            return true;                  
        //LandscapeRight or LandscapeLeft or PortraitUpsideDown
        case 180:
        case 90:
        case -90:
             return false;
    }
}