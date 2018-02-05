/*   VidAd VPAID v1.2.4   #a68b46f   Feb5-12:02   */
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])};return function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();!function(){var e=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"];window.console||(window.console={});for(var t=window.console,i=e.length;i--;){var n=e[i];t[n]||(t[n]=function(){})}if(Event.prototype.preventDefault||(Event.prototype.preventDefault=function(){this.returnValue=!1}),Event.prototype.stopPropagation||(Event.prototype.stopPropagation=function(){this.cancelBubble=!0}),!Element.prototype.addEventListener){var o=[],a=function(e,t){var i=this,n=function(e){e.target=e.srcElement,e.currentTarget=i,void 0!==t.handleEvent?t.handleEvent(e):t.call(i,e)};if("DOMContentLoaded"==e){var a=function(e){"complete"==document.readyState&&n(e)};if(document.attachEvent("onreadystatechange",a),o.push({object:this,type:e,listener:t,wrapper:a}),"complete"==document.readyState){var s=new Event;s.srcElement=window,a(s)}}else this.attachEvent("on"+e,n),o.push({object:this,type:e,listener:t,wrapper:n})},s=function(e,t){for(var i=0;i<o.length;){var n=o[i];if(n.object==this&&n.type==e&&n.listener==t){"DOMContentLoaded"==e?this.detachEvent("onreadystatechange",n.wrapper):this.detachEvent("on"+e,n.wrapper),o.splice(i,1);break}++i}};Element.prototype.addEventListener=a,Element.prototype.removeEventListener=s,HTMLDocument&&(HTMLDocument.prototype.addEventListener=a,HTMLDocument.prototype.removeEventListener=s),Window&&(Window.prototype.addEventListener=a,Window.prototype.removeEventListener=s)}}();var Utils;!function(e){e.appendStyle=function(e){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e)),t.appendChild(i)},e.fadeInFromRight=function(e){if(e)return e.style.display="inline-block",setTimeout(function(){e.style.opacity="1",e.style.marginRight="0"},100),e;console.warn("Trying to fadeInFromRight a null element.")},e.fadeInFromLeft=function(e){if(e)return e.style.display="inline-block",setTimeout(function(){e.style.opacity="1",e.style.marginLeft="40px"},100),e;console.warn("Trying to fadeInFromLeft a null element.")},e.ajax=function(e,t,i,n){void 0===i&&(i={}),void 0===n&&(n=null);var o=new XMLHttpRequest;n&&o.addEventListener("load",n);var a="";for(var s in i)i.hasOwnProperty(s)&&(a.length>0&&(a+="&"),a+=s+"="+i[s]);o.open(t,e),a.length>0?(o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.send(a)):o.send()},e.contains=function(e,t){return(e||"").indexOf(t)>=0},e.getQueryParameterByName=function(e,t){if(t||(t=window.location.href),!e)return"";e=e.replace(/[\[\]]/g,"\\$&");var i=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null},e.extractBrowserInfo=function(){var e=navigator.userAgent||navigator.vendor||window.opera,t=e&&e.length>=10,i="ontouchstart"in window||navigator.maxTouchPoints,n=function(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(e),t}(),o=n||function(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(e),t}();return{ua:e,validUA:t,isMobile:n,isMobileOrTablet:o,isDesktop:t&&!o||!t&&!i,isTouch:i}}}(Utils||(Utils={}));var VPAID_ENV="development",vpaidLogLevel=5,REPORT_PLAYER_SIZE=!1,SAMPLING_RATE=10,VPAID;!function(e){var t=function(){function e(){this.debugMode=!1,this.adFinished=!1,this.eventCompleteLoading=!1,this.playerWidth=0,this.playerHeight=0,this.isLinear=null,this.isIframe=!1,this.isVideo=!1,this.bannerAdTimeOutStop=0,this.slot_=null,this.adTemplate="default"}return e.prototype.initAd=function(e,t,i,n,o,a){this.playerWidth=e,this.playerHeight=t,this.slot_=a.slot,this.parameters_=JSON.parse(o.AdParameters),this.trackers=this.parameters_.trackers||[],this.logAPI=this.parameters_.logAPI,this.clickThrough=this.parameters_.clickThrough,this.isIframe=Boolean(this.parameters_.isIFrame),this.isVideo=Boolean(this.parameters_.isVideo),this.bannerDuration=this.parameters_.bannerDuration||this.bannerDuration,this.adTemplate=this.parameters_.template||this.adTemplate,this.scheduleAdStop(2),null===this.isLinear&&(this.isLinear=Utils.contains(this.logAPI,"tp=l")),this.browserInfo=Utils.extractBrowserInfo(),this.siteToken=Utils.getQueryParameterByName("zone",this.logAPI||""),this.debugMode="localhost"===window.location.hostname&&vpaidLogLevel>=5,this.debugMode&&(console.log("DEBUG mode enabled"),this.applyDebugStyle()),this.debug("(initAd:"+(this.isLinear?"Preroll":"Overlay")+") v1.2.4 "+e+"x"+t+" "+(this.isIframe?"IFrame":"")+" "+(this.isVideo?"Video":"")+" "+this.bannerDuration+"s"),this.reportMetrics()},e.prototype.handshakeVersion=function(e){return"2.0"},e.prototype.pauseAd=function(){},e.prototype.resumeAd=function(){},e.prototype.skipAd=function(){},e.prototype.resizeAd=function(){},e.prototype.expandAd=function(){},e.prototype.collapseAd=function(){},e.prototype.openExternalLandingPage=function(){this.clickThrough&&window.open(this.clickThrough,"_blank")},e.prototype.listenToRemoteClickEvent=function(){var e=this;window.addEventListener("message",function(t){e.debug("Event recieved:",t);var i="vidad"!==t.data.system,n=t.origin.indexOf("3rdad.com")>=0;(i||n)&&(n&&t.data.url&&(e.clickThrough=t.data.url),e.logEvent("click",null,"xhr=yes"),e.clickAd(!0))})},e.prototype.scheduleAdStop=function(e){var t=this;void 0===e&&(e=1),this.cancelScheduledAdStop(),this.bannerAdTimeOutStop=setTimeout(function(){t.debug("Scheduled AdStop process triggered"),t.stopAd()},this.bannerDuration*e*1e3)},e.prototype.cancelScheduledAdStop=function(){clearTimeout(this.bannerAdTimeOutStop)},e.prototype.applyDebugStyle=function(){Utils.appendStyle("\n        .clickable-region { border: 1px dashed #00FF08; }\n        .clickable-region-full { border: 1px dashed #00A6DE; }\n        .skipable-region { border: 1px dashed #FF006A; }\n            ")},e.prototype.addGUIElement=function(e){this.slot_.appendChild(e)},e.prototype.logMessage=function(e,t){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n];e>vpaidLogLevel||(e<=2?console.error.apply(console,[t].concat(i)):3!=e?4!=e?console.debug.apply(console,[t].concat(i)):console.log.apply(console,[t].concat(i)):console.warn.apply(console,[t].concat(i)))},e.prototype.warn=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];this.logMessage.apply(this,[3,e].concat(t))},e.prototype.log=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];this.logMessage.apply(this,[4,e].concat(t))},e.prototype.debug=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];this.logMessage.apply(this,[5,e].concat(t))},e.prototype.loadPixel=function(e,t,i){var n=this;if(void 0===t&&(t=null),void 0===i&&(i=!1),!this.ajaxSendEvents||i){var o=document.createElement("img");o.src=e,o.style.display="none",o.addEventListener("load",function(){n.debug("[SentIMG]",e.substr(0,50)),n.eventCompleteLoading=!0,t&&t()}),o.addEventListener("error",function(){n.debug("[Event Failed IMG]",e.substr(0,50)),n.eventCompleteLoading=!0,t&&t()}),window.parent.document.firstElementChild.appendChild(o)}else{var a=new XMLHttpRequest;a.open("GET",e),a.withCredentials=!0,a.send(),a.addEventListener("loadend",function(){n.debug("[Sent]",e.substr(0,80)),n.eventCompleteLoading=!0,t&&t()})}},e.prototype.logEvent=function(e,t,i){var n=this;if(void 0===t&&(t=null),void 0===i&&(i=null),!this.adFinished&&this.logAPI){this.eventCompleteLoading=!1,this.trackers.forEach(function(i){i[0]==e&&n.loadPixel(i[1],t,!0)});var o=this.logAPI.replace("EVENT",e);i&&(o+="&"+i),this.loadPixel(o,t)}},e.prototype.reportMetrics=function(){var e=this;if(window.Raven){if(Math.floor(Math.random()*SAMPLING_RATE)<=1)try{window.Raven.captureMessage("VPAIDAdSampling-"+VPAID_ENV,{level:"info",tags:{site:this.siteToken,linear:this.isLinear}})}catch(e){this.warn("Exception in sampling")}if(REPORT_PLAYER_SIZE)try{var t=[],i=this.playerWidth||0,n=this.playerHeight||0,o=0;i>=900&&n>=500?o=4:i>=600&&n>=300?o=3:i>=300&&n>=200?o=2:i>=100&&n>=100&&(o=1),function(i){i.d1=e.siteToken,i.d2=e.isLinear?"l":"n",t.push(i)}({name:"player-size",value:o,x1:i,x2:n});"undefined"!=typeof JSON&&JSON.stringify&&Utils.ajax("https://api.vidad.net/monitoring/metrics/report","POST",{metrics:JSON.stringify(t)})}catch(e){console.warn("Exception occurred in reporting metrics")}}else console.debug("Raven is not loaded, exception reporting disabled")},e}();e.VPAIDBase=t}(VPAID||(VPAID={}));var VPAIDNonLinear=function(e){function t(){var t=e.call(this)||this;return t.skipOffset=4,t.isPaused=!1,t.optConfirmClick=!1,t.isClickConfirmed=!1,t.confirmDialogDismissInterval=0,t.bannerDuration=12,t.isLinear=!1,t.slot_=null,t.eventsCallbacks_={},t.ajaxSendEvents=!0,t.attributes_={companions:"",duration:10,expanded:!1,height:0,icons:!1,linear:!1,skippableState:!1,width:0,volume:50},t.startTime_=0,t.imageUrls_=[],t.videos_=[],t.parameters_={},t}return __extends(t,e),t.prototype.applyStyle=function(){Utils.appendStyle("@font-face{font-family:'IranSans';src:url(\"https://player.vidad.net/fonts/IranSans/normal-fa.woff2\") format(\"woff2\"),url(\"https://player.vidad.net/fonts/IranSans/normal-fa.woff\") format(\"woff\"),url(\"https://player.vidad.net/fonts/IranSans/normal-fa.ttf\") format(\"truetype\")}.ad-overlay{position:absolute;top:0;right:0;bottom:0;left:0}.ad-dialog{direction:rtl;min-width:300px;min-height:100px;padding:10px 30px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media (max-width: 400px){.ad-dialog{padding:5px 15px;min-width:225px}}@media (max-width: 300px){.ad-dialog{min-width:200px;padding:5px 5px}}.confirm-click-dialog{z-index:40;background-color:#ffffff;border:1px solid #d0d0d0;box-shadow:0px 0px 3px 2px #666}.confirm-click-dialog p{font-family:IranSans;font-size:20px;color:#666666}.confirm-click-dialog .buttons-div{text-align:center;margin-top:40px;margin-bottom:16px}.confirm-click-dialog .button{width:110px;height:42px;font-family:IranSans;font-size:18px;border:1px solid #d0d0d0;cursor:pointer;border-radius:22px;background-color:#ffffff;color:#666666;font-weight:bold}.confirm-click-dialog .button:first-child{background-color:#cccccc;border-color:#b2b2b2;margin-left:20px}@media (min-width: 700px){.confirm-click-dialog .button:first-child{margin-left:36px}}@media (max-width: 400px){.confirm-click-dialog p{font-size:15px}.confirm-click-dialog .button{font-size:16px;width:100px}.confirm-click-dialog .button:first-child{margin-left:20px}}@media (max-width: 300px){.confirm-click-dialog p{font-size:14px}.confirm-click-dialog .buttons-div{margin-top:15px}.confirm-click-dialog .button{font-size:16px;width:80px}.confirm-click-dialog .button:first-child{margin-left:10px}}@media (max-width: 250px){.confirm-click-dialog p{font-size:13px}.confirm-click-dialog .buttons-div{margin-top:10px}}.bannerLogo{cursor:pointer;position:absolute;bottom:0;right:-50px;max-height:175px;z-index:12;transition:right 4s}.bannerLogo.sin{right:-60vw}.resume-btn{width:100px;height:100px;left:50%;position:relative;margin-left:-50px !important;background:rgba(0,0,0,0.3);top:50%;margin-top:-50px;border-radius:50%;display:inline-block;cursor:pointer}.resume-btn::before{content:\"\";width:0;height:0;border-top:20px solid transparent;border-bottom:20px solid transparent;border-left:30px solid #fff;position:absolute;top:50%;margin-top:-20px;right:50%;margin-right:-20px}.jw-vpaid-wrapper.resume-ad{background-color:rgba(0,0,0,0.59)}.bannerText{cursor:pointer;display:inline-block;width:0;margin:0;padding:5px 0;position:absolute;bottom:20px;right:0;background-color:#DF2002;color:#FFF;text-align:center;z-index:11;transition:all 4s;white-space:nowrap;font-family:IranSans, BTitr, Titr, BNazanin, Nazanin, BRoya, Roya, sans-serif;font-size:20px;font-weight:bold}.goButton{cursor:pointer;border-radius:0 30% 30% 0;background-color:#3FA92B;color:#FFF;text-align:center;position:absolute;bottom:70px;right:-50vw;margin-right:-118px;padding:5px;display:inline-block;opacity:0;transition:opacity 7s, right 4s;z-index:13;font-family:IranSans, BTitr, Titr, BNazanin, Nazanin, BRoya, Roya, sans-serif;font-size:22px;font-weight:bold;background:#53de38;background-image:-webkit-linear-gradient(top, #53de38, #3FA92B);background-image:-moz-linear-gradient(top, #53de38, #3FA92B);background-image:-ms-linear-gradient(top, #53de38, #3FA92B);background-image:-o-linear-gradient(top, #53de38, #3FA92B);background-image:linear-gradient(to bottom, #53de38, #3FA92B);-webkit-border-radius:28 28 28 0;-moz-border-radius:28 28 28 0;border-radius:28px 28px 28px 0;text-shadow:1px 1px 5px #666666;color:#ffffff;padding:5px 13px;text-decoration:none}.overlay-banner{position:absolute;bottom:0;left:50%;width:468px;height:60px;margin-left:-234px}.overlay-banner img{width:100%;height:100%;cursor:pointer}.confirm-click-dialog.overlay-banner{background-color:rgba(255,255,255,0);border:none;box-shadow:none}.confirm-click-dialog.overlay-banner .buttons-div{margin-top:10px}.confirm-click-dialog.overlay-banner .button{width:200px !important}	")},t.prototype.initAd=function(t,i,n,o,a,s){e.prototype.initAd.call(this,t,i,n,o,a,s),this.attributes_.width=t,this.attributes_.height=i,this.videoSlot_=s.videoSlot,this.imageUrls_=[this.parameters_.banner],this.videos_=this.parameters_.videos||[],this.optConfirmClick=Boolean(this.parameters_.confirmClick||!1),this.browserInfo.isDesktop&&(this.optConfirmClick=!1);var r=window.frameElement;if(r){var l=r.parentElement;if(l.getAttribute("data-overlay1-lock"))return console.log("Ad already open, skipping this one"),this.logEvent("overlap"),void this.stopAd();l.setAttribute("data-overlay1-lock","1"),r.style.position="absolute",r.style.bottom="2.6em",r.style.left="0",r.style.right="0",r.style.height="100%",r.style.minHeight="175px"}this.applyStyle(),this.callEvent_("AdLoaded")},t.prototype.startAd=function(){var e=this;if(this.log("Starting ad"),this.startTime_=(new Date).getTime(),this.isIframe)this.createIframe();else if("default"!=this.adTemplate){var t=null,i=function(){console.log("scheduleCollapse"),t=setTimeout(function(){d()},1e4)},n=function(){console.log("cancelCollapse"),t&&(clearTimeout(t),t=null)},o=this.parameters_.buttonText,a=document.createElement("img"),s=document.createElement("p"),r=document.createElement("a"),l=document.createElement("img"),c=!1;a.src=this.parameters_.logo,a.alt=this.parameters_.bannerCaption||"\u062a\u0628\u0644\u06cc\u063a",a.className="bannerLogo",l.src="https://player.vidad.net/content/unilever/7sin.png",l.alt=this.parameters_.bannerCaption||"\u062a\u0628\u0644\u06cc\u063a",l.className="bannerLogo sin";var p=function(){a.style.right="80vw",s.style.right="30vw",s.style.width="55vw",r.style.right="80vw",r.style.opacity="1",l.style.opacity="1",l.style.right="0vw",e.cancelScheduledAdStop(),i(),c=!0,e.logEvent("expand")},d=function(){a.style.right="10px",l.style.opacity="0",l.style.right="-60vw",s.style.width="0",s.style.right="0",r.style.right="-50vw",r.style.opacity="0",n(),e.scheduleAdStop(),c=!1},u=function(){c?d():p()};a.addEventListener("load",function(){e.logEvent("imp")},!1),a.addEventListener("click",function(t){t.preventDefault();var i=t.pageX-a.offsetLeft,n=t.pageY-a.offsetTop;if(i>=85&&n<=32)return e.logEvent("skip"),void setTimeout(function(){e.stopAd()},1e3);u()},!1),this.slot_.appendChild(a),this.slot_.appendChild(l),s.innerText=this.parameters_.bannerText||"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631",s.className="bannerText",o||s.addEventListener("click",function(){e.clickAd()},!1),this.slot_.appendChild(s),o&&(r.innerText=o,r.className="goButton",r.addEventListener("click",function(){e.clickAd()},!1),this.slot_.appendChild(r),s.style.cursor="auto"),setTimeout(function(){a.style.right="10px"},100),this.scheduleAdStop(),this.logEvent("start"),this.callEvent_("AdStarted")}else this.createBanner()},t.prototype.createIframe=function(){var e=this;console.debug("Creating IFrame");var t=document.createElement("span");t.className="closeAd",t.style.padding="0px 5px 2px 6px",t.style.color="#fff",t.style.position="absolute",t.style.bottom="50px",t.style.fontSize="15px",t.style.left="calc(50% + 228px)",t.style.backgroundColor="#000",t.style.borderRadius="50%",t.style.cursor="pointer",t.innerHTML="x",t.addEventListener("click",function(){console.debug("Skipping Ad"),e.logEvent("skip"),setTimeout(function(){e.stopAd()},1e3)});var i=document.createElement("div");i.className="v-iframe clickableFrame",i.addEventListener("click",function(){e.clickAd()});var n=document.createElement("iframe");return n.src=this.parameters_.banner,n.className="v-iframe",n.style.width="468px",n.style.height="60px",n.style.left="50%",n.style.bottom="0",n.style.marginLeft="-234px",n.style.position="absolute",n.style.marginBottom="0",n.frameBorder="0",n.scrolling="no",n.onload=function(){console.debug("Iframe loaded"),e.logEvent("imp"),e.scheduleAdStop()},this.slot_.appendChild(n),setTimeout(function(){e.slot_.appendChild(t)},1e3*this.skipOffset),this.logEvent("start"),this.callEvent_("AdStarted"),this.listenToRemoteClickEvent(),n},t.prototype.createBanner=function(){var e=this;console.debug("Creating Banner");var t=document.createElement("span");t.className="closeAd",t.style.padding="0px 5px 2px 6px",t.style.color="#fff",t.style.position="absolute",t.style.bottom="50px",t.style.fontSize="15px",t.style.left="calc(50% + 228px)",t.style.backgroundColor="#000",t.style.borderRadius="50%",t.style.cursor="pointer",t.innerHTML="x",t.addEventListener("click",function(){console.debug("Skipping Ad"),e.logEvent("skip"),setTimeout(function(){e.stopAd()},1e3)});var i=document.createElement("div");i.className="overlay-banner";var n=document.createElement("img");return n.src=this.parameters_.banner,n.style.width="468px",n.style.height="60px",n.onload=function(){console.debug("Banner loaded"),e.logEvent("imp"),e.scheduleAdStop()},i.appendChild(n),i.addEventListener("click",function(){e.clickAd()},!1),this.slot_.appendChild(i),setTimeout(function(){e.slot_.appendChild(t)},1e3*this.skipOffset),this.logEvent("start"),this.callEvent_("AdStarted"),i},t.prototype.stopAd=function(){if(this.log("Stopping ad"),this.cancelScheduledAdStop(),this.isPaused&&this.videoSlot_.play(),null===this.iframe_wrapper||void 0===this.iframe_wrapper){var e=window.frameElement;e?e.parentElement.removeAttribute("data-overlay1-lock"):console.log("Releasing lock failed!");t=this.callEvent_.bind(this);setTimeout(t,75,["AdStopped"])}else{this.iframe_wrapper.innerHTML="";var t=this.callEvent_.bind(this);setTimeout(t,75,["AdStopped"])}},t.prototype.subscribe=function(e,t,i){void 0===i&&(i=null),i=i||this,this.eventsCallbacks_[t]=e.bind(i)},t.prototype.unsubscribe=function(e){this.eventsCallbacks_[e]=null},t.prototype.callEvent_=function(e){e in this.eventsCallbacks_&&this.eventsCallbacks_[e]()},t.prototype.clickAd=function(e){void 0===e&&(e=!1),this.clickThrough?!this.optConfirmClick||this.isClickConfirmed?(this.pauseAd(),this.logEvent("nclick"),this.callEvent_("AdClickThru"),e||this.openExternalLandingPage()):this.openConfirmClickDialog():this.log("No clickThrough provided, click ignored.")},t.prototype.openConfirmClickDialog=function(){var e=this,t=document.createElement("div");t.className="overlay-banner confirm-click-dialog";document.createElement("p");var i=document.createElement("div");i.className="buttons-div",t.appendChild(i);!function(e,t){var n=document.createElement("button");n.className="button",n.innerText=e,n.addEventListener("click",t),i.appendChild(n)}(this.parameters_.bannerText||"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631",function(i){e.isClickConfirmed=!0,t.style.display="none",e.clickAd(),e.isClickConfirmed=!1,clearTimeout(e.confirmDialogDismissInterval)}),this.addGUIElement(t),this.debugMode||(this.confirmDialogDismissInterval=setTimeout(function(){t.style.display="none"},6e3))},t.prototype.pauseAd=function(){this.cancelScheduledAdStop(),this.videoSlot_.pause(),this.isPaused=!0,this.callEvent_("AdPaused"),this.showResumeButton()},t.prototype.showResumeButton=function(){var e=this,t=(document.getElementsByClassName("resume-btn"),this.slot_);t.className+=" resume-ad";var i=document.createElement("a");i.innerText="",i.className="resume-btn",i.addEventListener("click",function(){t.classList.remove("resume-ad"),i.style.opacity="0",i.parentNode.removeChild(i),e.videoSlot_.play(),setTimeout(function(){e.stopAd()},500)},!1),this.slot_.appendChild(i)},t.prototype.getAdWidth=function(){return this.attributes_.width},t.prototype.getAdHeight=function(){return this.attributes_.height},t.prototype.getAdRemainingTime=function(){return this.attributes_.remainingTime},t.prototype.getAdDuration=function(){return this.attributes_.duration},t.prototype.getAdCompanions=function(){return this.attributes_.companions},t.prototype.getAdIcons=function(){return this.attributes_.icons},t.prototype.getAdLinear=function(){return this.attributes_.linear},t}(VPAID.VPAIDBase),getVPAIDAd=function(){return new VPAIDNonLinear};;vpaidLogLevel=5;VPAID_ENV='latest';SAMPLING_RATE=3;
