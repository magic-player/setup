/* VidAd VPAID v1.1.0 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Utils;
(function (Utils) {
    function appendStyle(css) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        }
        else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }
    Utils.appendStyle = appendStyle;
    function fadeInFromRight(el) {
        el.style.display = 'inline-block';
        setTimeout(function () {
            el.style.opacity = '1';
            el.style.marginRight = '0';
        }, 100);
        return el;
    }
    Utils.fadeInFromRight = fadeInFromRight;
    function fadeInFromLeft(el) {
        el.style.display = 'inline-block';
        setTimeout(function () {
            el.style.opacity = '1';
            el.style.marginLeft = '40px';
        }, 100);
        return el;
    }
    Utils.fadeInFromLeft = fadeInFromLeft;
})(Utils || (Utils = {}));
var VPAID;
(function (VPAID) {
    var VPAIDBase = (function () {
        function VPAIDBase() {
            this.adFinished = false;
            this.eventCompleteLoading = false;
        }
        VPAIDBase.prototype.initAd = function (width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
            this.parameters_ = JSON.parse(creativeData['AdParameters']);
            this.trackers = this.parameters_['trackers'] || [];
            this.logAPI = this.parameters_['logAPI'];
        };
        VPAIDBase.prototype.handshakeVersion = function (version) {
            return ('2.0');
        };
        VPAIDBase.prototype.log = function (message) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            console.log(message, rest);
        };
        VPAIDBase.prototype.loadPixel = function (url, callback, cors) {
            var _this = this;
            if (callback === void 0) { callback = null; }
            if (cors === void 0) { cors = false; }
            if (!this.ajaxSendEvents || cors) {
                var image = document.createElement('img'), parent_1;
                image.src = url;
                image.style.display = 'none';
                image.addEventListener('load', function () {
                    console.info("event success ... ");
                    _this.eventCompleteLoading = true;
                    if (callback)
                        callback();
                });
                image.addEventListener('error', function () {
                    console.info("event failed ... ");
                    _this.eventCompleteLoading = true;
                    if (callback)
                        callback();
                });
                parent_1 = window.parent.document.firstElementChild;
                parent_1.appendChild(image);
            }
            else {
                var logReq = new XMLHttpRequest();
                logReq.open('GET', url);
                logReq.send();
                logReq.addEventListener('loadend', function () {
                    console.log('own call event');
                    console.info("event success ... ");
                    _this.eventCompleteLoading = true;
                    if (callback)
                        callback();
                });
            }
        };
        VPAIDBase.prototype.logEvent = function (event, callback) {
            var _this = this;
            if (callback === void 0) { callback = null; }
            if (this.adFinished)
                return;
            if (!this.logAPI)
                return;
            this.eventCompleteLoading = false;
            this.trackers.forEach(function (x) {
                if (x[0] == event) {
                    _this.loadPixel(x[1], callback, true);
                }
            });
            this.loadPixel(this.logAPI.replace("EVENT", event), callback);
        };
        return VPAIDBase;
    }());
    VPAID.VPAIDBase = VPAIDBase;
})(VPAID || (VPAID = {}));
var VERSION = '1.1.0';
var STATIC_URL = "https://static.vidad.net/templates/";
var VPAIDNonLinear = (function (_super) {
    __extends(VPAIDNonLinear, _super);
    function VPAIDNonLinear() {
        var _this = _super.call(this) || this;
        _this.slot_ = null;
        _this.eventsCallbacks_ = {};
        _this.ajaxSendEvents = true;
        _this.attributes_ = {
            'companions': '',
            'desiredBitrate': 256,
            'duration': 10,
            'expanded': false,
            'height': 0,
            'icons': false,
            'linear': false,
            'skippableState': false,
            'viewMode': 'normal',
            'width': 0,
            'volume': 50
        };
        _this.startTime_ = 0;
        _this.imageUrls_ = [];
        _this.videos_ = [];
        _this.parameters_ = {};
        _this.isVideo = false;
        _this.isIframe = false;
        return _this;
    }
    VPAIDNonLinear.prototype.applyStyle = function () {
        Utils.appendStyle("\n          @font-face {\n            font-family: 'IranSans';\n            src: url('https://static.vidad.net/fonts/IranSans/normal-fa.woff2') format('woff2'),\n                 url('https://static.vidad.net/fonts/IranSans/normal-fa.woff') format('woff'),\n                 url('https://static.vidad.net/fonts/IranSans/normal-fa.ttf') format('truetype');\n          }\n          \n          .bannerLogo {\n            cursor: pointer;\n             \n            position: absolute; \n            bottom: 0;\n            right: -50px;\n            max-height: 175px;\n            z-index: 12;\n            transition: right 4s;\n          }\n          .bannerLogo.sin {\n              right: -60vw;\n          }\n          .resume-btn {\n            width: 100px;\n            height: 100px; \n            left: 50%;\n            position: relative;\n            margin-left: -50px !important;\n            background : rgba(0,0,0,0.3);\n            top: 50%;\n            margin-top: -50px;\n            border-radius: 50%;\n            display: inline-block;\n            cursor: pointer;\n          }\n          .resume-btn::before{\n            content: \"\";\n            width: 0;\n            height: 0;\n            border-top: 20px solid transparent;\n            border-bottom: 20px solid transparent;\n            border-left: 30px solid #fff;\n            position: absolute;\n            top: 50%;\n            margin-top: -20px;\n            right: 50%;\n            margin-right: -20px;\n          }\n          .jw-vpaid-wrapper.resume-ad {\n              background-color : rgba(0, 0, 0, 0.59);\n          }\n          \n          .bannerText {\n            cursor: pointer;\n            display: inline-block;\n            width: 0;\n            margin: 0;\n            padding: 5px 0;\n            position: absolute;\n            bottom: 20px;\n            right: 0;\n            background-color: #DF2002;\n            color: #FFF;\n            text-align: center;\n            z-index: 11;\n            transition: all 4s;\n            white-space: nowrap;\n            font-family: IranSans, BTitr, Titr, BNazanin, Nazanin, BRoya, Roya, sans-serif;\n            font-size: 20px;\n            font-weight: bold;\n          }\n          \n          .goButton {\n            cursor: pointer;\n            border-radius: 0 30% 30% 0;\n            background-color: #3FA92B;\n            color: #FFF;\n            text-align: center;\n            position: absolute;\n            bottom: 70px;\n            right: -50vw;\n            margin-right: -118px;\n            padding: 5px;\n            display: inline-block;\n            opacity: 0;\n            transition: opacity 7s, right 4s;\n            z-index: 13;\n            font-family: IranSans, BTitr, Titr, BNazanin, Nazanin, BRoya, Roya, sans-serif;\n            font-size: 22px;\n            font-weight: bold;\n            background: #53de38;\n            background-image: -webkit-linear-gradient(top, #53de38, #3FA92B);\n            background-image: -moz-linear-gradient(top, #53de38, #3FA92B);\n            background-image: -ms-linear-gradient(top, #53de38, #3FA92B);\n            background-image: -o-linear-gradient(top, #53de38, #3FA92B);\n            background-image: linear-gradient(to bottom, #53de38, #3FA92B);\n            -webkit-border-radius: 28 28 28 0;\n            -moz-border-radius: 28 28 28 0;\n            border-radius: 28px 28px 28px 0;\n            text-shadow: 1px 1px 5px #666666;\n            color: #ffffff;\n            padding: 5px 13px;\n            text-decoration: none;\n          }\n        ");
    };
    VPAIDNonLinear.prototype.initAd = function (width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
        _super.prototype.initAd.call(this, width, height, viewMode, desiredBitrate, creativeData, environmentVars);
        this.attributes_['width'] = width;
        this.attributes_['height'] = height;
        this.attributes_['viewMode'] = viewMode;
        this.attributes_['desiredBitrate'] = desiredBitrate;
        this.slot_ = environmentVars.slot;
        this.videoSlot_ = environmentVars.videoSlot;
        this.imageUrls_ = [this.parameters_.banner];
        this.videos_ = this.parameters_.videos || [];
        this.clickThrough = this.parameters_['clickThrough'];
        this.isVideo = this.parameters_['isVideo'];
        this.isIframe = this.parameters_['banner'].indexOf('iframe') !== -1;
        this.bannerDuration = this.parameters_['bannerDuration'];
        this.log('initAd ' + width + 'x' + height + ' ' + viewMode + ' ' + desiredBitrate);
        var container_frame = window.frameElement;
        if (container_frame) {
            var jwpContainer = container_frame.parentElement;
            var lock = jwpContainer.getAttribute('data-overlay1-lock');
            var fn = container_frame;
            if (lock) {
                console.log('Ad already open, skipping this one');
                this.logEvent('overlap');
                this.stopAd();
                return;
            }
            else {
                jwpContainer.setAttribute('data-overlay1-lock', '1');
            }
            container_frame.style.position = 'absolute';
            container_frame.style.bottom = '2.6em';
            container_frame.style.left = '0';
            container_frame.style.right = '0';
            container_frame.style.height = '100%';
            container_frame.style.minHeight = '175px';
        }
        this.applyStyle();
        this.callEvent_('AdLoaded');
    };
    VPAIDNonLinear.prototype.startAd = function () {
        var _this = this;
        this.log('Starting ad');
        this.startTime_ = new Date().getTime();
        if (!this.isIframe) {
            var stopTimeout = null;
            var collapseTimeout = null;
            var banner_duration_1 = this.bannerDuration || 20000;
            var scheduleStop = function () {
                stopTimeout = setTimeout(function () { typeof _this.stopAd === 'undefined' || _this.stopAd(); }, banner_duration_1);
            };
            var cancelStop = function () {
                if (stopTimeout) {
                    clearTimeout(stopTimeout);
                    stopTimeout = null;
                }
            };
            var scheduleCollapse = function () {
                console.log('scheduleCollapse');
                collapseTimeout = setTimeout(function () { collapse(); }, 10000);
            };
            var cancelCollapse = function () {
                console.log('cancelCollapse');
                if (collapseTimeout) {
                    clearTimeout(collapseTimeout);
                    collapseTimeout = null;
                }
            };
            var buttonText = this.parameters_.buttonText;
            var img = document.createElement('img');
            var bannerText = document.createElement('p');
            var buttonEl = document.createElement('a');
            var img2 = document.createElement('img');
            var expanded = false;
            img.src = this.parameters_.logo;
            img.alt = this.parameters_.bannerCaption || 'تبلیغ';
            img.className = 'bannerLogo';
            img2.src = STATIC_URL + 'images/7sin.png';
            img2.alt = this.parameters_.bannerCaption || 'تبلیغ';
            img2.className = 'bannerLogo sin';
            var expand = function () {
                img.style.right = '80vw';
                bannerText.style.right = '30vw';
                bannerText.style.width = '55vw';
                buttonEl.style.right = '80vw';
                buttonEl.style.opacity = '1';
                img2.style.opacity = '1';
                img2.style.right = '0vw';
                cancelStop();
                scheduleCollapse();
                expanded = true;
                _this.logEvent('expand');
            };
            var collapse = function () {
                img.style.right = '10px';
                img2.style.opacity = '0';
                img2.style.right = '-60vw';
                bannerText.style.width = '0';
                bannerText.style.right = '0';
                buttonEl.style.right = '-50vw';
                buttonEl.style.opacity = '0';
                cancelCollapse();
                scheduleStop();
                expanded = false;
            };
            var toggle = function () {
                if (expanded) {
                    collapse();
                }
                else {
                    expand();
                }
            };
            img.addEventListener('load', function () { _this.logEvent('imp'); }, false);
            img.addEventListener('click', function (e) {
                e.preventDefault();
                var clickX = e.pageX - img.offsetLeft;
                var clickY = e.pageY - img.offsetTop;
                if (clickX >= 85 && clickY <= 32) {
                    _this.logEvent('skip');
                    setTimeout(function () { _this.stopAd(); }, 1000);
                    return;
                }
                toggle();
            }, false);
            this.slot_.appendChild(img);
            this.slot_.appendChild(img2);
            bannerText.innerText = this.parameters_.bannerText || 'اطلاعات بیشتر';
            bannerText.className = 'bannerText';
            if (!buttonText) {
                bannerText.addEventListener('click', function () {
                    _this.clickAd();
                }, false);
            }
            this.slot_.appendChild(bannerText);
            if (buttonText) {
                buttonEl.innerText = buttonText;
                buttonEl.className = "goButton";
                buttonEl.addEventListener('click', function () {
                    _this.clickAd();
                }, false);
                this.slot_.appendChild(buttonEl);
                bannerText.style.cursor = 'auto';
            }
            setTimeout(function () { img.style.right = '10px'; }, 100);
            scheduleStop();
            this.logEvent('start');
            this.callEvent_('AdStarted');
        }
        else {
            this.createIframe();
        }
    };
    VPAIDNonLinear.prototype.createIframe = function () {
        var _this = this;
        var iFrame = document.createElement('iframe');
        var clickableFrame = document.createElement('div');
        var closeAdElement = document.createElement('span');
        closeAdElement.className = 'closeAd';
        closeAdElement.style.padding = '0px 5px 2px 6px';
        closeAdElement.style.color = '#fff';
        closeAdElement.style.position = 'absolute';
        closeAdElement.style.bottom = '50px';
        closeAdElement.style.fontSize = '15px';
        closeAdElement.style.left = 'calc(50% + 228px)';
        closeAdElement.style.backgroundColor = '#000';
        closeAdElement.style.borderRadius = '50%';
        closeAdElement.style.cursor = 'pointer';
        closeAdElement.innerHTML = 'x';
        clickableFrame.className = 'v-iframe clickableFrame';
        iFrame.src = this.parameters_.banner;
        iFrame.className = 'v-iframe';
        iFrame.style.width = '468px';
        iFrame.style.height = '60px';
        iFrame.style.left = '50%';
        iFrame.style.bottom = '0';
        iFrame.style.marginLeft = '-234px';
        iFrame.style.position = 'absolute';
        iFrame.style.marginBottom = '0';
        iFrame.frameBorder = '0';
        iFrame.scrolling = 'no';
        var stopTimeout = null;
        this.logEvent('start');
        this.callEvent_('AdStarted');
        clickableFrame.addEventListener('click', function () {
            _this.clickAd();
        });
        iFrame.onload = function () {
            var banner_duration = _this.bannerDuration * 1000 || 20000;
            var scheduleStop = function () {
                stopTimeout = setTimeout(function () {
                    typeof _this.stopAd === 'undefined' || _this.stopAd();
                }, banner_duration + 3000);
            };
        };
        closeAdElement.addEventListener('click', function () {
            _this.logEvent('skip');
            setTimeout(function () { _this.stopAd(); }, 1000);
            clearTimeout(stopTimeout);
        });
        var vast_contain = setInterval(function () {
            _this.iframe_wrapper = window.parent.document.getElementById('myElement_vast');
            console.log('%%%%%%%%%%%%');
            console.log(window.parent.document.getElementById('myElement_vast'));
            if (_this.iframe_wrapper && _this.iframe_wrapper !== null) {
                _this.iframe_wrapper.style.width = '100%';
                _this.iframe_wrapper.style.height = '100%';
                _this.iframe_wrapper.style.position = 'relative';
                clearInterval(vast_contain);
                clearTimeout(timeOut_vast_contain);
                _this.iframe_wrapper.appendChild(iFrame);
                _this.iframe_wrapper.appendChild(closeAdElement);
                _this.iframe_wrapper.appendChild(clickableFrame);
            }
            else
                return;
        }, 50);
        var timeOut_vast_contain = setTimeout(function () {
            clearInterval(vast_contain);
            _this.slot_.appendChild(iFrame);
            _this.slot_.appendChild(closeAdElement);
            _this.slot_.appendChild(clickableFrame);
        }, 3000);
        return iFrame;
    };
    VPAIDNonLinear.prototype.stopAd = function () {
        this.log('Stopping ad');
        if (this.iframe_wrapper === null || this.iframe_wrapper === undefined) {
            var iframe = window.frameElement;
            if (iframe) {
                var jwpContainer = iframe.parentElement;
                jwpContainer.removeAttribute('data-overlay1-lock');
            }
            else {
                console.log('Releasing lock failed!');
            }
            var callback = this.callEvent_.bind(this);
            setTimeout(callback, 75, ['AdStopped']);
        }
        else {
            this.iframe_wrapper.innerHTML = '';
            var callback = this.callEvent_.bind(this);
            setTimeout(callback, 75, ['AdStopped']);
        }
    };
    VPAIDNonLinear.prototype.subscribe = function (aCallback, eventName, aContext) {
        if (aContext === void 0) { aContext = null; }
        aContext = aContext || this;
        this.eventsCallbacks_[eventName] = aCallback.bind(aContext);
    };
    VPAIDNonLinear.prototype.unsubscribe = function (eventName) {
        this.eventsCallbacks_[eventName] = null;
    };
    VPAIDNonLinear.prototype.callEvent_ = function (eventType) {
        if (eventType in this.eventsCallbacks_) {
            this.eventsCallbacks_[eventType]();
        }
    };
    VPAIDNonLinear.prototype.clickAd = function () {
        var _this = this;
        console.log(this.slot_);
        console.log(this.videoSlot_);
        if (!this.clickThrough) {
            this.log('No clickThrough provided, click ignored.');
            return;
        }
        this.logEvent('lclick');
        this.callEvent_('AdClickThru');
        window.open(this.clickThrough, '_blank');
        var resumeBtn = document.getElementsByClassName("resume-btn");
        var player_wrap = this.slot_;
        player_wrap.className += " resume-ad";
        this.videoSlot_.pause();
        var buttonE2 = document.createElement('a');
        buttonE2.innerText = "";
        buttonE2.className = "resume-btn";
        buttonE2.addEventListener('click', function () {
            player_wrap.classList.remove("resume-ad");
            buttonE2.style.opacity = '0';
            buttonE2.parentNode.removeChild(buttonE2);
            _this.videoSlot_.play();
        }, false);
        this.slot_.appendChild(buttonE2);
    };
    VPAIDNonLinear.prototype.getAdWidth = function () {
        return this.attributes_['width'];
    };
    VPAIDNonLinear.prototype.getAdHeight = function () {
        return this.attributes_['height'];
    };
    VPAIDNonLinear.prototype.getAdRemainingTime = function () {
        return this.attributes_['remainingTime'];
    };
    VPAIDNonLinear.prototype.getAdDuration = function () {
        return this.attributes_['duration'];
    };
    VPAIDNonLinear.prototype.getAdCompanions = function () {
        return this.attributes_['companions'];
    };
    VPAIDNonLinear.prototype.getAdIcons = function () {
        return this.attributes_['icons'];
    };
    VPAIDNonLinear.prototype.getAdLinear = function () {
        return this.attributes_['linear'];
    };
    return VPAIDNonLinear;
}(VPAID.VPAIDBase));
var getVPAIDAd = function () {
    return new VPAIDNonLinear();
};
//# sourceMappingURL=overlay1.js.map
