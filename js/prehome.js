var config;
if(config === undefined) {
	config = {
    	PROTOCOLO:"",
    	IP:"",
    	ENDPOINT_HTTP: "/portal/site/minhagvtmobile",
    	ENDPOINT_HTTPS: "/portal/site/minhagvtmobile"
	};
}
$(document).on( "mobileinit", function( event ) {
	if(!/Android|iPhone|iPad|iPod|IEMobile/i.test(navigator.userAgent) ) {
 		//fetchRemoteHtml();
	}
//	$.mobile.loader('create');
});
var called = false;
function onDeviceReadyPreHome(shouldAutoLogin) {
    console.log("onDeviceReadyPreHome called");
	called = true;
	if (navigator.network.connection.type !== Connection.NONE) {
	    autoLogin(shouldAutoLogin);
		fetchRemoteHtml();		
	}

	setTimeout(function () {
		var db = window.sqlitePlugin.openDatabase({ name: "websql" });
		webSql.get(db, ["local_id", "instance"], function (res) {
			console.log("Campos ja criados");
		}, function (error) {
			setTimeout(function () {
				console.log("should create field instance");
				webSql.store(db, "instance", "0");
			}, 1);
			setTimeout(function () {
				console.log("should create field local id");
				webSql.store(db, "local_id", "0");
			}, 1);
		});
	});
}

function onWP8NotificationNavigateTo() {
    document.addEventListener('deviceready', function () {
        var db = window.sqlitePlugin.openDatabase({ name: "websql" });        
        webSql.get(db, ["local_id", "instance"], function (res) {
        	if (res['local_id'] && res['instance']) {
        	    console.log("onWP8NotificationNavigateTo ");
                showLoader();
                
                var url = window.environment_config.ENDPOINT_HTTP + "/notifications?AUTHTOKEN=" + res['local_id'] + '&INSTANCE=' + res['instance'] + "&target=/portal/site/minhagvtmobile/notifications";            //
                console.log(url);
                setTimeout(function () {
                	window.location = url;
                }, 1);
            }            
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    });
}

function autoLogin(shouldAutoLogin) {
    console.log("Trying to auto login.. should " + shouldAutoLogin);
    if (shouldAutoLogin && isOnline()) {
        console.log("Trying to auto login");
		if (device.platform == "Android") {
			var local_id;
			window.applicationPreferences.get("local_id", function (value) {
				local_id = value;
			}, function (error) {
				console.log("Error! " + JSON.stringify(error));
			});
			window.applicationPreferences.get("instance", function (value) {
				if (local_id && value) {
                    showLoader();
					var url = window.environment_config.ENDPOINT_HTTP + '/minhaGVTMobile?AUTHTOKEN=' + local_id + '&INSTANCE=' + value;
					console.log(url);
					setTimeout(function () {
						window.location = url;
					}, 1);
				}

			}, function (error) {
				console.log("Error! " + JSON.stringify(error));
			});
		} else {
			var db = window.sqlitePlugin.openDatabase({ name: "websql" });
			webSql.get(db, ["local_id", "instance"], function (res) {
				if (res['local_id'] && res['instance']) {
                    showLoader();

					var url = window.environment_config.ENDPOINT_HTTP + "/minhaGVTMobile?AUTHTOKEN=" + res['local_id'] + '&INSTANCE=' + res['instance'];            //
					console.log(url);
					setTimeout(function () {
						window.location = url;
					}, 1);
				}
			}, function (error) {
				console.log(JSON.stringify(error));
			});
		}
	}
}

function applyButtonEvents() {
	$('#button1').click(function (e) {
		if(!isOnline()) {
			showOfflineMessage();
		} else {
            showLoader();
			setTimeout(function() {
				window.location.href = config.ENDPOINT_HTTP + "/cadastroUsuarioMobile";
			}, 1);
			
		}
	});
	
	$('#button2').click(function(evnt) {
		if(!isOnline()) {
			showOfflineMessage();
		} else {
            showLoader();
			setTimeout(function(){
				window.location.href = config.ENDPOINT_HTTP + "/minhaGVTMobile";
			},1 );			
		}
	});
}

function button1Click() {
	if(!isOnline()) {
		showOfflineMessage();
	} else {
        showLoader();
		setTimeout(function() {
			window.location.href = config.ENDPOINT_HTTP + "/cadastroUsuarioMobile";
		}, 1);
	}
}

function button2Click() {
	if(!isOnline()) {
		showOfflineMessage();
	} else {
        showLoader();
		setTimeout(function(){
			window.location.href = config.ENDPOINT_HTTP + "/minhaGVTMobile";
		},1 );			
	}
}

function fetchRemoteHtml() {
    
    console.log("Fetching remote content");
	var storagePage = localStorage.getItem('prehome');
	var stillFetch = true;
	if(storagePage !== null) {
		var storedDate = localStorage.getItem('dataPrehome');
		stillFetch = (new Date() > storedDate);
		console.log('stillFetch ' + stillFetch);
	}	
	if(stillFetch) {
		console.log('fetching remote');
		showLoader();
		setTimeout(function () {
		    hideLoader();
		}, 10000);
		resources = [];
		resources[0] = 'gvt.mobile.prehome';
		return $.ajax({
		    url: config.ENDPOINT_HTTP + "/resourcesJson",
		    context: document.body,
		    data: {resources: resources}
		}).done(function (data) {
		    console.log("################ done  1");
			var d = data.replace(/\/Portal GVT\/_ArquivosEstaticos\/mobile-gvt\//g, "" );
			localStorage.setItem('prehome', d);
			localStorage.setItem('dataPrehome', new Date());
		    hideLoader();
		    console.log("################ done 2 ");
		}).error(function (e) {
		    console.log("################ error  ");
		}).always(function () {
		    console.log("################ always  ");
            hideLoader();
		});
		
	} else {
		console.log('should append localstorage prehome');
		var preHome = jQuery.parseJSON(storagePage);
		recreatePage(preHome["gvt.mobile.prehome"]);	   
	}	
}
