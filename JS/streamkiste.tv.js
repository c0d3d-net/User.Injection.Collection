// Select by String1 or String2 (Share)

var l0 = document.querySelector('a[title^="Teile diese Seite"]');
var l1 = document.querySelector('a[title^="Teile diesen Film"]');

	if (l0) {
		l0.parentNode.removeChild(l0);
	
		} else if (l1) {
			l1.parentNode.removeChild(l1);
	}


// Select by String1 and String2 (Faq)

var l2a = document.querySelector('a[title^="Häufig gestellte"]');
var l2b = document.querySelector('a[href="/page/faq"]');

	if (l2a) {
		l2a.parentNode.removeChild(l2a);
	
		} else if (l2b) {
			l2b.parentNode.removeChild(l2b);
	}


// Select by String (Share Submenu Button)

var ul1 = document.querySelector('ul[style="float:right"]');
ul1.parentNode.removeChild(ul1);


// Select by Style and Src

var img1 = document.querySelector('img[src="/img/tem/video_player.png"]')
img1.style.height = "400px";
img1.src = "#";


// Select by Src

var img2 = document.querySelector('img[src="#"]')
img2.style.opacity = "0";


// Select by Script Src

var googleanalytics = document.querySelector('script[src="https://www.google-analytics.com/analytics.js"]');
googleanalytics.parentNode.removeChild(googleanalytics);

var googletagmanager = document.querySelector('script[src="https://www.googletagmanager.com/gtag/js?id=UA-47732037-19"]');
googletagmanager.parentNode.removeChild(googletagmanager);
 

 

var hdx = document.querySelector("#mirror-lang");
var hdy = hdx.innerHTML = "<em id=\"german\" title=\"Deutsch\"></em> <em id=\"english\" title=\"Englisch\">";

if (hdy) {
    hdx.parentNode.removeChild(hdx);
}

if (hdz) {
    hdt.parentNode.removeChild(hdu);
}
