# User.Injection.Collection

A collection of CSS and JS Injection code for websites.

## Files

*CSS Injection Stylesheets:*
- amazon.com.css
> **Note:** Still some bugs
- ddl.me.css
- drive.google.com.css
- facebook.com.css
- google.com.css
- rapidvideo.com.css
- reevown.com.css
- s.to.css
> **Note:** For full experience: use it in combination with JS Injection
- serienjunkies.org.css
- soundcloud.com.css
- streamcloud.eu.css
- streamkiste.tv.css
> **Note:** For full experience: use it in combination with JS Injection
- twitter.com.css
- vidcloud.co.css
- vidoza.net.css
- vivo.sx.css
- vivo.sx.red.css
- vivo.sx.fs.css (Style for vivo.sx.fs.js > Standalone fullscreen player script)
- wikipedia.org.css

*JS Injection Scripts (uses jQuery):*
- vivo.sx.fs.js

> **Note:** For full experience: use it in combination with CSS Injection
- rapidvideo.com.js
- s.to.js
- streamkiste.tv.js
- vivo.sx.js

## CSS Injection through JS Injection (jQuery):
```
jQuery('head').html(
            jQuery('head').html() + '<link rel="stylesheet" href="https://raw.githubusercontent.com/c0d3d-net/User.Injection.Collection/master/CSS/amazon.css">'
        );
```
