/*   VidAd VPAID v1.2.0   #1f09c59   Sep16-14:57   */
var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();!function(){var t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"];window.console||(window.console={});for(var e=window.console,n=t.length;n--;){var i=t[n];e[i]||(e[i]=function(){})}if(Event.prototype.preventDefault||(Event.prototype.preventDefault=function(){this.returnValue=!1}),Event.prototype.stopPropagation||(Event.prototype.stopPropagation=function(){this.cancelBubble=!0}),!Element.prototype.addEventListener){var o=[],r=function(t,e){var n=this,i=function(t){t.target=t.srcElement,t.currentTarget=n,void 0!==e.handleEvent?e.handleEvent(t):e.call(n,t)};if("DOMContentLoaded"==t){var r=function(t){"complete"==document.readyState&&i(t)};if(document.attachEvent("onreadystatechange",r),o.push({object:this,type:t,listener:e,wrapper:r}),"complete"==document.readyState){var a=new Event;a.srcElement=window,r(a)}}else this.attachEvent("on"+t,i),o.push({object:this,type:t,listener:e,wrapper:i})},a=function(t,e){for(var n=0;n<o.length;){var i=o[n];if(i.object==this&&i.type==t&&i.listener==e){"DOMContentLoaded"==t?this.detachEvent("onreadystatechange",i.wrapper):this.detachEvent("on"+t,i.wrapper),o.splice(n,1);break}++n}};Element.prototype.addEventListener=r,Element.prototype.removeEventListener=a,HTMLDocument&&(HTMLDocument.prototype.addEventListener=r,HTMLDocument.prototype.removeEventListener=a),Window&&(Window.prototype.addEventListener=r,Window.prototype.removeEventListener=a)}}();var Utils;!function(t){t.appendStyle=function(t){var e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t)),e.appendChild(n)},t.fadeInFromRight=function(t){if(t)return t.style.display="inline-block",setTimeout(function(){t.style.opacity="1",t.style.marginRight="0"},100),t;console.warn("Trying to fadeInFromRight a null element.")},t.fadeInFromLeft=function(t){if(t)return t.style.display="inline-block",setTimeout(function(){t.style.opacity="1",t.style.marginLeft="40px"},100),t;console.warn("Trying to fadeInFromLeft a null element.")},t.ajax=function(t,e,n,i){void 0===n&&(n={}),void 0===i&&(i=null);var o=new XMLHttpRequest;i&&o.addEventListener("load",i);var r="";for(var a in n)n.hasOwnProperty(a)&&(r.length>0&&(r+="&"),r+=a+"="+n[a]);o.open(e,t),r.length>0?(o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.send(r)):o.send()},t.contains=function(t,e){return(t||"").indexOf(e)>=0},t.getQueryParameterByName=function(t,e){if(e||(e=window.location.href),!t)return"";t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}}(Utils||(Utils={}));var VPAID;!function(t){var e=function(){function t(){this.adFinished=!1,this.eventCompleteLoading=!1,this.playerWidth=0,this.playerHeight=0}return t.prototype.initAd=function(t,e,n,i,o,r){this.playerWidth=t,this.playerHeight=e,this.parameters_=JSON.parse(o.AdParameters),this.trackers=this.parameters_.trackers||[],this.logAPI=this.parameters_.logAPI,this.isLinear=Utils.contains(this.logAPI,"tp=l"),this.siteToken=Utils.getQueryParameterByName("zone",this.logAPI||""),this.reportMetrics()},t.prototype.handshakeVersion=function(t){return"2.0"},t.prototype.log=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];console.log(t,e)},t.prototype.loadPixel=function(t,e,n){var i=this;if(void 0===e&&(e=null),void 0===n&&(n=!1),!this.ajaxSendEvents||n){var o=document.createElement("img");o.src=t,o.style.display="none",o.addEventListener("load",function(){console.info("event success ... "),i.eventCompleteLoading=!0,e&&e()}),o.addEventListener("error",function(){console.info("event failed ... "),i.eventCompleteLoading=!0,e&&e()}),window.parent.document.firstElementChild.appendChild(o)}else{var r=new XMLHttpRequest;r.open("GET",t),r.send(),r.addEventListener("loadend",function(){console.log("own call event"),console.info("event success ... "),i.eventCompleteLoading=!0,e&&e()})}},t.prototype.logEvent=function(t,e){var n=this;void 0===e&&(e=null),this.adFinished||this.logAPI&&(this.eventCompleteLoading=!1,this.trackers.forEach(function(i){i[0]==t&&n.loadPixel(i[1],e,!0)}),this.loadPixel(this.logAPI.replace("EVENT",t),e))},t.prototype.reportMetrics=function(){var t=this;try{var e=[],n=this.playerWidth||0,i=this.playerHeight||0,o=0;n>=900&&i>=500?o=4:n>=600&&i>=300?o=3:n>=300&&i>=200?o=2:n>=100&&i>=100&&(o=1),function(n){n.d1=t.siteToken,n.d2=t.isLinear?"l":"n",e.push(n)}({name:"player-size",value:o,x1:n,x2:i});"undefined"!=typeof JSON&&JSON.stringify&&Utils.ajax("https://api.vidad.net/monitoring/metrics/report","POST",{metrics:JSON.stringify(e)})}catch(t){console.warn("Exception occurred in reporting metrics")}},t}();t.VPAIDBase=e}(VPAID||(VPAID={}));var STATIC_URL="https://static.vidad.net/templates/",VPAIDNonLinear=function(t){function e(){var e=t.call(this)||this;return e.slot_=null,e.eventsCallbacks_={},e.ajaxSendEvents=!0,e.attributes_={companions:"",desiredBitrate:256,duration:10,expanded:!1,height:0,icons:!1,linear:!1,skippableState:!1,viewMode:"normal",width:0,volume:50},e.startTime_=0,e.imageUrls_=[],e.videos_=[],e.parameters_={},e.isVideo=!1,e.isIframe=!1,e}return __extends(e,t),e.prototype.applyStyle=function(){Utils.appendStyle("\n          @font-face {\n            font-family: 'IranSans';\n            src: url('https://static.vidad.net/fonts/IranSans/normal-fa.woff2') format('woff2'),\n                 url('https://static.vidad.net/fonts/IranSans/normal-fa.woff') format('woff'),\n                 url('https://static.vidad.net/fonts/IranSans/normal-fa.ttf') format('truetype');\n          }\n          \n          .bannerLogo {\n            cursor: pointer;\n             \n            position: absolute; \n            bottom: 0;\n            right: -50px;\n            max-height: 175px;\n            z-index: 12;\n            transition: right 4s;\n          }\n          .bannerLogo.sin {\n              right: -60vw;\n          }\n          .resume-btn {\n            width: 100px;\n            height: 100px; \n            left: 50%;\n            position: relative;\n            margin-left: -50px !important;\n            background : rgba(0,0,0,0.3);\n            top: 50%;\n            margin-top: -50px;\n            border-radius: 50%;\n            display: inline-block;\n            cursor: pointer;\n          }\n          .resume-btn::before{\n            content: \"\";\n            width: 0;\n            height: 0;\n            border-top: 20px solid transparent;\n            border-bottom: 20px solid transparent;\n            border-left: 30px solid #fff;\n            position: absolute;\n            top: 50%;\n            margin-top: -20px;\n            right: 50%;\n            margin-right: -20px;\n          }\n          .jw-vpaid-wrapper.resume-ad {\n              background-color : rgba(0, 0, 0, 0.59);\n          }\n          \n          .bannerText {\n            cursor: pointer;\n            display: inline-block;\n            width: 0;\n            margin: 0;\n            padding: 5px 0;\n            position: absolute;\n            bottom: 20px;\n            right: 0;\n            background-color: #DF2002;\n            color: #FFF;\n            text-align: center;\n            z-index: 11;\n            transition: all 4s;\n            white-space: nowrap;\n            font-family: IranSans, BTitr, Titr, BNazanin, Nazanin, BRoya, Roya, sans-serif;\n            font-size: 20px;\n            font-weight: bold;\n          }\n          \n          .goButton {\n            cursor: pointer;\n            border-radius: 0 30% 30% 0;\n            background-color: #3FA92B;\n            color: #FFF;\n            text-align: center;\n            position: absolute;\n            bottom: 70px;\n            right: -50vw;\n            margin-right: -118px;\n            padding: 5px;\n            display: inline-block;\n            opacity: 0;\n            transition: opacity 7s, right 4s;\n            z-index: 13;\n            font-family: IranSans, BTitr, Titr, BNazanin, Nazanin, BRoya, Roya, sans-serif;\n            font-size: 22px;\n            font-weight: bold;\n            background: #53de38;\n            background-image: -webkit-linear-gradient(top, #53de38, #3FA92B);\n            background-image: -moz-linear-gradient(top, #53de38, #3FA92B);\n            background-image: -ms-linear-gradient(top, #53de38, #3FA92B);\n            background-image: -o-linear-gradient(top, #53de38, #3FA92B);\n            background-image: linear-gradient(to bottom, #53de38, #3FA92B);\n            -webkit-border-radius: 28 28 28 0;\n            -moz-border-radius: 28 28 28 0;\n            border-radius: 28px 28px 28px 0;\n            text-shadow: 1px 1px 5px #666666;\n            color: #ffffff;\n            padding: 5px 13px;\n            text-decoration: none;\n          }\n        ")},e.prototype.initAd=function(e,n,i,o,r,a){t.prototype.initAd.call(this,e,n,i,o,r,a),this.attributes_.width=e,this.attributes_.height=n,this.attributes_.viewMode=i,this.attributes_.desiredBitrate=o,this.slot_=a.slot,this.videoSlot_=a.videoSlot,this.imageUrls_=[this.parameters_.banner],this.videos_=this.parameters_.videos||[],this.clickThrough=this.parameters_.clickThrough,this.isVideo=this.parameters_.isVideo,this.isIframe=-1!==this.parameters_.banner.indexOf("iframe"),this.bannerDuration=this.parameters_.bannerDuration,this.log("initAd "+e+"x"+n+" "+i+" "+o);var s=window.frameElement;if(s){var l=s.parentElement;if(l.getAttribute("data-overlay1-lock"))return console.log("Ad already open, skipping this one"),this.logEvent("overlap"),void this.stopAd();l.setAttribute("data-overlay1-lock","1"),s.style.position="absolute",s.style.bottom="2.6em",s.style.left="0",s.style.right="0",s.style.height="100%",s.style.minHeight="175px"}this.applyStyle(),this.callEvent_("AdLoaded")},e.prototype.startAd=function(){var t=this;if(this.log("Starting ad"),this.startTime_=(new Date).getTime(),this.isIframe)this.createIframe();else{var e=null,n=null,i=this.bannerDuration||2e4,o=function(){e=setTimeout(function(){void 0===t.stopAd||t.stopAd()},i)},r=function(){e&&(clearTimeout(e),e=null)},a=function(){console.log("scheduleCollapse"),n=setTimeout(function(){f()},1e4)},s=function(){console.log("cancelCollapse"),n&&(clearTimeout(n),n=null)},l=this.parameters_.buttonText,p=document.createElement("img"),d=document.createElement("p"),c=document.createElement("a"),u=document.createElement("img"),h=!1;p.src=this.parameters_.logo,p.alt=this.parameters_.bannerCaption||"تبلیغ",p.className="bannerLogo",u.src=STATIC_URL+"content/unilever/7sin.png",u.alt=this.parameters_.bannerCaption||"تبلیغ",u.className="bannerLogo sin";var m=function(){p.style.right="80vw",d.style.right="30vw",d.style.width="55vw",c.style.right="80vw",c.style.opacity="1",u.style.opacity="1",u.style.right="0vw",r(),a(),h=!0,t.logEvent("expand")},f=function(){p.style.right="10px",u.style.opacity="0",u.style.right="-60vw",d.style.width="0",d.style.right="0",c.style.right="-50vw",c.style.opacity="0",s(),o(),h=!1},g=function(){h?f():m()};p.addEventListener("load",function(){t.logEvent("imp")},!1),p.addEventListener("click",function(e){e.preventDefault();var n=e.pageX-p.offsetLeft,i=e.pageY-p.offsetTop;if(n>=85&&i<=32)return t.logEvent("skip"),void setTimeout(function(){t.stopAd()},1e3);g()},!1),this.slot_.appendChild(p),this.slot_.appendChild(u),d.innerText=this.parameters_.bannerText||"اطلاعات بیشتر",d.className="bannerText",l||d.addEventListener("click",function(){t.clickAd()},!1),this.slot_.appendChild(d),l&&(c.innerText=l,c.className="goButton",c.addEventListener("click",function(){t.clickAd()},!1),this.slot_.appendChild(c),d.style.cursor="auto"),setTimeout(function(){p.style.right="10px"},100),o(),this.logEvent("start"),this.callEvent_("AdStarted")}},e.prototype.createIframe=function(){var t=this,e=document.createElement("iframe"),n=document.createElement("div"),i=document.createElement("span");i.className="closeAd",i.style.padding="0px 5px 2px 6px",i.style.color="#fff",i.style.position="absolute",i.style.bottom="50px",i.style.fontSize="15px",i.style.left="calc(50% + 228px)",i.style.backgroundColor="#000",i.style.borderRadius="50%",i.style.cursor="pointer",i.innerHTML="x",n.className="v-iframe clickableFrame",e.src=this.parameters_.banner,e.className="v-iframe",e.style.width="468px",e.style.height="60px",e.style.left="50%",e.style.bottom="0",e.style.marginLeft="-234px",e.style.position="absolute",e.style.marginBottom="0",e.frameBorder="0",e.scrolling="no";var o=null;this.logEvent("start"),this.callEvent_("AdStarted"),n.addEventListener("click",function(){t.clickAd()}),e.onload=function(){t.bannerDuration},i.addEventListener("click",function(){t.logEvent("skip"),setTimeout(function(){t.stopAd()},1e3),clearTimeout(o)});var r=setInterval(function(){t.iframe_wrapper=window.parent.document.getElementById("myElement_vast"),console.log("%%%%%%%%%%%%"),console.log(window.parent.document.getElementById("myElement_vast")),t.iframe_wrapper&&null!==t.iframe_wrapper&&(t.iframe_wrapper.style.width="100%",t.iframe_wrapper.style.height="100%",t.iframe_wrapper.style.position="relative",clearInterval(r),clearTimeout(a),t.iframe_wrapper.appendChild(e),t.iframe_wrapper.appendChild(i),t.iframe_wrapper.appendChild(n))},50),a=setTimeout(function(){clearInterval(r),t.slot_.appendChild(e),t.slot_.appendChild(i),t.slot_.appendChild(n)},3e3);return e},e.prototype.stopAd=function(){if(this.log("Stopping ad"),null===this.iframe_wrapper||void 0===this.iframe_wrapper){var t=window.frameElement;t?t.parentElement.removeAttribute("data-overlay1-lock"):console.log("Releasing lock failed!");e=this.callEvent_.bind(this);setTimeout(e,75,["AdStopped"])}else{this.iframe_wrapper.innerHTML="";var e=this.callEvent_.bind(this);setTimeout(e,75,["AdStopped"])}},e.prototype.subscribe=function(t,e,n){void 0===n&&(n=null),n=n||this,this.eventsCallbacks_[e]=t.bind(n)},e.prototype.unsubscribe=function(t){this.eventsCallbacks_[t]=null},e.prototype.callEvent_=function(t){t in this.eventsCallbacks_&&this.eventsCallbacks_[t]()},e.prototype.clickAd=function(){var t=this;if(console.log(this.slot_),console.log(this.videoSlot_),this.clickThrough){this.logEvent("lclick"),this.callEvent_("AdClickThru"),window.open(this.clickThrough,"_blank");document.getElementsByClassName("resume-btn");var e=this.slot_;e.className+=" resume-ad",this.videoSlot_.pause();var n=document.createElement("a");n.innerText="",n.className="resume-btn",n.addEventListener("click",function(){e.classList.remove("resume-ad"),n.style.opacity="0",n.parentNode.removeChild(n),t.videoSlot_.play()},!1),this.slot_.appendChild(n)}else this.log("No clickThrough provided, click ignored.")},e.prototype.getAdWidth=function(){return this.attributes_.width},e.prototype.getAdHeight=function(){return this.attributes_.height},e.prototype.getAdRemainingTime=function(){return this.attributes_.remainingTime},e.prototype.getAdDuration=function(){return this.attributes_.duration},e.prototype.getAdCompanions=function(){return this.attributes_.companions},e.prototype.getAdIcons=function(){return this.attributes_.icons},e.prototype.getAdLinear=function(){return this.attributes_.linear},e}(VPAID.VPAIDBase),getVPAIDAd=function(){return new VPAIDNonLinear};