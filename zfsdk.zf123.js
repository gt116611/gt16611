function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if(typeof(callback) != "undefined"){
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = function () {
                callback();
            };
        }
    }
    script.src = url;
    document.body.appendChild(script);
}
loadScript("src/settings.48035.js", function () {
    loadScript("main.ae2be.js", function () {  

    // open web debugger console
    if (typeof VConsole !== 'undefined') {
        window.vConsole = new VConsole();
    }


    var cocos2d = document.createElement('script');
    cocos2d.async = true;
    cocos2d.src = 'cocos2d-js-min.35641.js';

    var engineLoaded = function () {
        document.body.removeChild(cocos2d);
        cocos2d.removeEventListener('load', engineLoaded, false);
        window.boot();
    };
    cocos2d.addEventListener('load', engineLoaded, false);
    document.body.appendChild(cocos2d);
	});
});

