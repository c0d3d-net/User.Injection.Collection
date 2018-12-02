# User.Injection.Collection

A collection of CSS and JS Injection code for websites.

## Files

*CSS Injection Stylesheets:*
- amazon.com
> **Note:** Still some bugs
- ddl.me
- derstandard.at
> **Note:** Still some bugs
- drive.google.com
- facebook.com
- google.com
- rapidvideo.com
- reevown.com
- s.to
> **Note:** Use it in combination with JS Injection
- serienjunkies.org
- soundcloud.com
- streamcloud.eu
- streamkiste.tv
> **Note:** Use it in combination with JS Injection
- twitter.com
- vidcloud.co
- vidoza.net
- vivo.sx
- wikipedia.org

*JS Injection Scripts (uses jQuery):*
- s.to
> **Note:** Use it in combination with CSS Injection
- streamkiste.tv
> **Note:** Use it in combination with CSS Injection

# CSS Injection through JS Injection (jQuery):
```
jQuery('head').html(
            jQuery('head').html() + '<link rel="stylesheet" href="https://raw.githubusercontent.com/c0d3d-net/User.Injection.Collection/master/CSS/amazon.css">'
        );
```
