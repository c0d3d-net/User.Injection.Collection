$(document).ready(function() {
    	$('.fb_reset').replaceWith($('#player'));
        $(".vivo-video-data-holder").remove();
        $('#preload').remove();
        $('footer').remove(); $('div[style="width: 0px; height: 0px; overflow: hidden; position: absolute; margin: 0px; padding: 0px;"]').remove(); 
        $('.vivo-website-wrapper').remove();
        	
});


    
function rmscript(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="php")? "script" : (filetype=="css")? "link" : "none" 
    var targetattr=(filetype=="js")? "src" : (filetype=="php")? "src" : (filetype=="css")? "href" : "none"
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ 
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) 
    }
}
rmscript("pn.php", "php");
        	rmscript("pn-subs.php", "php");
        	rmscript("watch.js", "js");
        	rmscript("analytics.js", "js");
        	rmscript("sdk.js#", "js");
        	rmscript("googlead.js", "js");
        	rmscript("page.js?", "js");
        	rmscript("base.js", "js");
            rmscript("addthis_widget.js", "js");
