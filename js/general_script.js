var menuopen=0;// when zero menu is close, when 1 menu is open
var newLocation = undefined;

//fade
$('a').click(function(e) {
    e.preventDefault();
    newLocation = this.href;
    $('body').fadeOut('slow', newpage);
});

function newpage() {
    window.location = newLocation;
}

$(document).ready(function(){

    $('body').css('display', 'none');
    $('body').fadeIn(2000);

});


function Reload() {
    try {
        var headElement = document.getElementsByTagName("head")[0];
        if (headElement && headElement.innerHTML)
            headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
    }
    catch (e) {}
}

/*
if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
    window.onpageshow = function(evt) {
        if (evt.persisted) {
            document.body.style.display = "none";
            location.reload();
        }
    };
}*/


function hideMenuLevel2(){
    // hide menu
    $('#menulevel2').hide();
    //$('#menulevel2').trigger( "updatelayout" );
    $('.ui-panel-page-content-position-left').css('transform', 'translate3d(80px,0,0)');
    $('.ui-panel-page-content-display-reveal').css('-webkit-transform', 'translate3d(80px,0,0)');
    $('.ui-panel-page-content-display-reveal').css('-moz-transform', 'translate3d(80px,0,0)');
    $('#menulevel2').trigger( "updatelayout" );
}

function hideAllMenu(hasToReload, doc_location){

    /* TEMP
    // work around..
	hideMenuLevel2();
	$('#menulevel1').hide();

    $('.ui-panel-page-content-position-left').css('transform', 'translate3d(0px,0,0)');
    $('.ui-panel-page-content-display-reveal').css('-webkit-transform', 'translate3d(0px,0,0)');
    $('.ui-panel-page-content-display-reveal').css('-moz-transform', 'translate3d(0px,0,0)');
    $('#menulevel1').trigger( "updatelayout" );

    TEMP */

    // NOT USED...
    //$('#menulevel2').trigger( "updatelayout" );

    // simple reload page....
    if (hasToReload == true) {
        var n_page = undefined;

        if (doc_location != undefined){
            n_page = doc_location;
        }else{
            n_page = window.location.href;
        }

		//window.location.href = n_page;
        $(location).attr('href', n_page);

        // Page refresh
        /*
        $.mobile.changePage(
            n_page,
            {
                allowSamePageTransition : true,
                transition              : 'none',
                showLoadMsg             : false,
                reloadPage              : true
            }
        );*/
	}
		/*$('.ui-panel-page-content-position-left').css('transform', 'translate3d(0px,0,0)');
    $('.ui-panel-page-content-display-reveal').css('-webkit-transform', 'translate3d(0px,0,0)');
    $('.ui-panel-page-content-display-reveal').css('-moz-transform', 'translate3d(0px,0,0)');
    $('#sidemenu').trigger( "updatelayout" );*/
    
}


function showsubmenu1()
{

    //var codetext='';
    //Sub Menu Titles for 1st menu option
    //var menunames= new Array("smenu11","smenu12","smenu13","smenu14");
    //Sub Menu Titles links for 1st menu option
    //var menulinks=new Array("#","#","#","#");
    document.getElementById("menu1bar").style.background = "orange";
    document.getElementById("menu2bar").style.background = "#374247";
    document.getElementById("menu3bar").style.background = "#374247";
    document.getElementById("menu4bar").style.background = "#374247";

    document.getElementById("menubg1").style.background = "#374247";
    document.getElementById("menubg2").style.background = "#3C474C";
    document.getElementById("menubg3").style.background = "#3C474C";
    document.getElementById("menubg4").style.background = "#3C474C";

    document.getElementById("menuimage1").style.opacity = "1";
    document.getElementById("menuimage2").style.opacity = "0.4";
    document.getElementById("menuimage3").style.opacity = "0.4";
    document.getElementById("menuimage4").style.opacity = "0.4";

    hideMenuLevel2();
}

function showsubmenu2()
{
    var codetext='';
    //Sub Menu Titles for 2nd menu option
    var menunames= new Array("Alterar Dados Cadastrais","Alterar E-mail","Alterar Endereco<br/> de Correspondencia","Alterar Senha");
    //Sub Menu Titles link for 2nd menu option
    var menulinks=new Array("#","#","#","#");

    document.getElementById("menu2bar").style.background = "orange";
    document.getElementById("menu1bar").style.background = "#374247";
    document.getElementById("menu3bar").style.background = "#374247";
    document.getElementById("menu4bar").style.background = "#374247";

    document.getElementById("menubg2").style.background = "#374247";
    document.getElementById("menubg1").style.background = "#3C474C";
    document.getElementById("menubg3").style.background = "#3C474C";
    document.getElementById("menubg4").style.background = "#3C474C";

    document.getElementById("menuimage2").style.opacity = "1";
    document.getElementById("menuimage1").style.opacity = "0.4";
    document.getElementById("menuimage3").style.opacity = "0.4";
    document.getElementById("menuimage4").style.opacity = "0.4";
    showsubmenu();

    for(var i=0;i<menunames.length;++i)
    {
        if(menunames[i].length<20)
            codetext=codetext+'<div id="submenuitems" class="classsubmenuitems"><a href="'+menulinks[i]+'"><p id="itemnamenormal">'+menunames[i]+'</p></a></div>';
        else
            codetext=codetext+'<div id="submenuitems" class="classsubmenuitems"><a href="'+menulinks[i]+'"><p id="itemnamelong">'+menunames[i]+'</p></a></div>';
    }

    var div=document.getElementById("listcontainer");
    div.innerHTML='<br/>'+codetext;
    $( "#sidemenu" ).trigger( "updatelayout" );
}

function showsubmenu3()
{
    var codetext='';
    //Sub Menu Titles for 3rd menu option
    var menunames= new Array("Minhas Faturas","E-conta","Debito automatico","Alterar Vencimento");
    //Sub Menu Titles links for 3rd menu option
    var menulinks=new Array("#","#","#","#");
    document.getElementById("menu3bar").style.background = "orange";
    document.getElementById("menu1bar").style.background = "#374247";
    document.getElementById("menu2bar").style.background = "#374247";
    document.getElementById("menu4bar").style.background = "#374247";

    document.getElementById("menubg3").style.background = "#374247";
    document.getElementById("menubg1").style.background = "#3C474C";
    document.getElementById("menubg2").style.background = "#3C474C";
    document.getElementById("menubg4").style.background = "#3C474C";

    document.getElementById("menuimage3").style.opacity = "1";
    document.getElementById("menuimage1").style.opacity = "0.4";
    document.getElementById("menuimage2").style.opacity = "0.4";
    document.getElementById("menuimage4").style.opacity = "0.4";
    showsubmenu();
    for(var i=0;i<menunames.length;++i)
    {
        if(menunames[i].length<20)
            codetext=codetext+'<div id="submenuitems" class="classsubmenuitems"><a href="'+menulinks[i]+'"><p id="itemnamenormal">'+menunames[i]+'</p></a></div>';
        else
            codetext=codetext+'<div id="submenuitems" class="classsubmenuitems"><a href="'+menulinks[i]+'"><p id="itemnamelong">'+menunames[i]+'</p></a></div>';
    }

    var div=document.getElementById("listcontainer");
    div.innerHTML='<br/>'+codetext;
    $( "#sidemenu" ).trigger( "updatelayout" );
}

function showsubmenu4()
{
    //var codetext='';
    //Sub Menu Titles for 4th menu option
    //var menunames= new Array("Logout");
    //Sub Menu Titles links for 4th menu option
    //var menulinks=new Array("#");
    document.getElementById("menu4bar").style.background = "orange";
    document.getElementById("menu1bar").style.background = "#374247";
    document.getElementById("menu2bar").style.background = "#374247";
    document.getElementById("menu3bar").style.background = "#374247";

    document.getElementById("menubg4").style.background = "#374247";
    document.getElementById("menubg1").style.background = "#3C474C";
    document.getElementById("menubg2").style.background = "#3C474C";
    document.getElementById("menubg3").style.background = "#3C474C";

    document.getElementById("menuimage4").style.opacity = "1";
    document.getElementById("menuimage1").style.opacity = "0.4";
    document.getElementById("menuimage2").style.opacity = "0.4";
    document.getElementById("menuimage3").style.opacity = "0.4";

    // Page refresh
    $.mobile.changePage(
        'preferences.html',
        {
            allowSamePageTransition : true,
            transition              : 'none',
            showLoadMsg             : false,
            reloadPage              : true
        }
    );
}


/** DISABLED FUNCTION **/

 function showmenu()
 {
 $('#sidemenu').css('background', '#434E54');

 if(menuopen==1) { // hide menu
 menuopen = 0;
 //for(var i = 0; i < 1; i++) // this is a workaround. it will be removed
 //{
 /*$('.ui-panel').css('width', '0px');
 $('#sidemenu').css('background', '#434E54');
 $('.ui-panel-closed').css('width', '0px');
 $('.ui-panel-page-content-position-left').css('left', '0px');
 $('.ui-panel-page-content-position-left').css('right', '0px');
 $('.ui-panel-dismiss-open').css('left', '0px');
 $('.ui-panel-dismiss-open').css('right', '0px');
 $('.ui-panel-dismiss-position-left').css('left', '0px');
 $('.ui-panel-dismiss-position-left').css('right', '0px');
 $('.ui-panel-page-content-position-left').css('left', '0px');
 $('.ui-panel-page-content-position-left').css('right', '0px');
 $('.ui-panel-page-content-position-left').css('-webkit-transform', 'translate3d(0px,0,0)');
 $('.ui-panel-page-content-position-left').css('-moz-transform', 'translate3d(0px,0,0)');
 $('.ui-panel-page-content-position-left').css('transform', 'translate3d(0px,0,0)');
 $('.ui-panel-page-content-display-reveal').css('left', '0px');
 $('.ui-panel-page-content-display-reveal').css('right', '0px');*/
/*$('.ui-panel-page-content-display-reveal').css('-webkit-transform', 'translate3d(0px,0,0)');
$('.ui-panel-page-content-display-reveal').css('-moz-transform', 'translate3d(0px,0,0)');
$('.ui-panel-page-content-display-reveal').css('transform', 'translate3d(0px,0,0)');
$("#sidemenu").trigger("updatelayout");*/
/*$('#menulevel1').hide();
    //$('#menulevel2').trigger( "updatelayout" );
    $('.ui-panel-page-content-position-left').css('transform', 'translate3d(0px,0,0)');
    $('.ui-panel-page-content-display-reveal').css('-webkit-transform', 'translate3d(0px,0,0)');
    $('.ui-panel-page-content-display-reveal').css('-moz-transform', 'translate3d(0px,0,0)');
    $('#menulevel1').trigger( "updatelayout" );*/
	// location.reload(); // NEVER...
//}
}else{ // display menu...
 menuopen=1;

     /* TEMP ...
	$('#menulevel1').show();
    //$('#menulevel2').trigger( "updatelayout" );
    $('.ui-panel-page-content-position-left').css('transform', 'translate3d(80px,0,0)');
    $('.ui-panel-page-content-display-reveal').css('-webkit-transform', 'translate3d(80px,0,0)');
    $('.ui-panel-page-content-display-reveal').css('-moz-transform', 'translate3d(80px,0,0)');
    $('#menulevel1').trigger( "updatelayout" );

    TEMP..*/

 //for(var i = 0; i < 60; i++) // this is a workaround. it will be removed
 //{
 /*$('.ui-panel').css('width', '80px');
 $('#sidemenu').css('background', '#434E54');
 $('.ui-panel-closed').css('width', '0px');
 $('.ui-panel-page-content-position-left').css('left', '80px');
 $('.ui-panel-page-content-position-left').css('right', '-80px');
 $('.ui-panel-dismiss-open').css('left', '80px');
 $('.ui-panel-dismiss-open').css('right', '-80px');
 $('.ui-panel-dismiss-position-left').css('left', '80px');
 $('.ui-panel-dismiss-position-left').css('right', '-80px');
 $('.ui-panel-page-content-position-left').css('left', '0px');
 $('.ui-panel-page-content-position-left').css('right', '0px');
 $('.ui-panel-page-content-position-left').css('-webkit-transform', 'translate3d(80px,0,0)');
 $('.ui-panel-page-content-position-left').css('-moz-transform', 'translate3d(80px,0,0)');
 $('.ui-panel-page-content-position-left').css('transform', 'translate3d(80px,0,0)');
 $('.ui-panel-page-content-display-reveal').css('left', '0px');
 $('.ui-panel-page-content-display-reveal').css('right', '0px');*/
//$('.ui-panel-page-content-display-reveal').css('-webkit-transform', 'translate3d(80px,0,0)');
//$('.ui-panel-page-content-display-reveal').css('-moz-transform', 'translate3d(80px,0,0)');
//$('.ui-panel-page-content-display-reveal').css('transform', 'translate3d(80px,0,0)');
//$("#sidemenu").trigger("updatelayout");
//}
}

document.getElementById("menulevel1").style.height = window.innerHeight+"px";
}

function showsubmenu()
{
    $('#menulevel2').show();

    if(window.screen.width<=240)
    {
        $('.ui-panel').css('width', '215px');

        $('.ui-panel-closed').css('width', '0');

        $('.ui-panel-page-content-position-left').css('left', '215px');
        $('.ui-panel-page-content-position-left').css('right', '-215px');

        $('.ui-panel-dismiss-open').css('left', '215px');
        $('.ui-panel-dismiss-open').css('right', '-215px');

        $('.ui-panel-dismiss-position-left').css('left', '215px');
        $('.ui-panel-dismiss-position-left').css('right', '-215px');

        $('.ui-panel-page-content-position-left').css('left', '0');
        $('.ui-panel-page-content-position-left').css('right', '0');
        $('.ui-panel-page-content-position-left').css('-webkit-transform', 'translate3d(215px,0,0)');
        $('.ui-panel-page-content-position-left').css('-moz-transform', 'translate3d(215px,0,0)');
        $('.ui-panel-page-content-position-left').css('transform', 'translate3d(215px,0,0)');

        $('.ui-panel-page-content-display-reveal').css('left', '0');
        $('.ui-panel-page-content-display-reveal').css('right', '0');
        $('.ui-panel-page-content-display-reveal').css('-webkit-transform', 'translate3d(215px,0,0)');
        $('.ui-panel-page-content-display-reveal').css('-moz-transform', 'translate3d(215px,0,0)');
        $('.ui-panel-page-content-display-reveal').css('transform', 'translate3d(215px,0,0)');


        $( "#sidemenu" ).trigger( "updatelayout" );
        document.getElementById("menulevel2").style.width = "135px";
        document.getElementById("menulevel2").style.height = window.innerHeight+"px";
    }
    else
    {
        $('.ui-panel').css('width', '250px');

        $('.ui-panel-closed').css('width', '0');

        $('.ui-panel-page-content-position-left').css('left', '250px');
        $('.ui-panel-page-content-position-left').css('right', '-250px');

        $('.ui-panel-dismiss-open').css('left', '250px');
        $('.ui-panel-dismiss-open').css('right', '-250px');

        $('.ui-panel-dismiss-position-left').css('left', '250px');
        $('.ui-panel-dismiss-position-left').css('right', '-250px');

        $('.ui-panel-page-content-position-left').css('left', '0');
        $('.ui-panel-page-content-position-left').css('right', '0');
        $('.ui-panel-page-content-position-left').css('-webkit-transform', 'translate3d(250px,0,0)');
        $('.ui-panel-page-content-position-left').css('-moz-transform', 'translate3d(250px,0,0)');
        $('.ui-panel-page-content-position-left').css('transform', 'translate3d(250px,0,0)');

        $('.ui-panel-page-content-display-reveal').css('left', '0');
        $('.ui-panel-page-content-display-reveal').css('right', '0');
        $('.ui-panel-page-content-display-reveal').css('-webkit-transform', 'translate3d(250px,0,0)');
        $('.ui-panel-page-content-display-reveal').css('-moz-transform', 'translate3d(250px,0,0)');
        $('.ui-panel-page-content-display-reveal').css('transform', 'translate3d(250px,0,0)');


        $( "#sidemenu" ).trigger( "updatelayout" );
        document.getElementById("menulevel2").style.width = "170px";
        document.getElementById("menulevel2").style.height = window.innerHeight+"px";
    }
}

// capture click on page to HIDE MENU....
$(document).on('click', function (e) {
    // Only hide menu if click captured is not any menu item....
	
    if(!$(e.target).parents('#menulevel2').length && !$(e.target).parents('#sidemenu').length  && !$(e.target).parents("#menu_icon").length && menuopen==1) 
	{
        var menu = $("#sidemenu");
        //var result = menu.css("visibility") == "hidden";

        /* TEMP
        menuopen=0; //setting back the menuopen to zero
        TEMP */

        // document title...
        menuopen = 0;
        hideAllMenu(true, document.title);


        /*if (!result){ // if menu is visible...
			menuopen=0;
            hideAllMenu(true);
        }

        var menu2 = $("#menulevel2");
        result = menu2.css("visibility") == "hidden";

        if (!result){ // if menu is visible...
		menuopen=0;
            hideAllMenu(true); // has to reload - workaround...
        }*/
    }
});