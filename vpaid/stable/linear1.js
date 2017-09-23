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
var adInterval, adTime, preloader, pausedPreloader = false;
function adTimer(t, d, p, isVideo) {
    this.adInterval = setInterval(function () {
        if (!pausedPreloader) {
            if (d >= t) {
                t++;
                adTime = t;
                p.style.width = ((adTime * 100) / d) + '%';
                if (isVideo)
                    pausedPreloader = true;
            }
        }
    }, 800);
}
var VPAIDVideoPlayer = (function (_super) {
    __extends(VPAIDVideoPlayer, _super);
    function VPAIDVideoPlayer() {
        var _this = _super.call(this) || this;
        _this.skipOffset = 5;
        _this.skipEnabled = false;
        _this.bannerDuration = 10;
        _this.banner_timer = 0;
        _this.ajaxSendEvents = true;
        _this.slot_ = null;
        _this.videoSlot_ = null;
        _this.eventsCallbacks_ = {};
        _this.AdVideoComplete_event = false;
        _this.attributes_ = {
            'companions': '',
            'desiredBitrate': 256,
            'duration': 30,
            'expanded': false,
            'height': 0,
            'icons': false,
            'linear': true,
            'remainingTime': 13,
            'skippableState': false,
            'viewMode': 'normal',
            'width': 0,
            'volume': 1.0
        };
        _this.intervalId_ = null;
        _this.quartileEvents_ = [
            { event: 'AdImpression', value: 0 },
            { event: 'AdVideoFirstQuartile', value: 20 },
            { event: 'AdVideoMidpoint', value: 45 },
            { event: 'AdVideoThirdQuartile', value: 70 },
            { event: 'AdVideoComplete', value: 95 }
        ];
        _this.lastQuartileIndex_ = 0;
        _this.parameters_ = {};
        _this.elements = {};
        _this.isVideo = false;
        _this.isIframe = false;
        _this.canSkip = false;
        return _this;
    }
    VPAIDVideoPlayer.prototype.applyStyle = function () {
        Utils.appendStyle("\n          @font-face {\n            font-family: 'IranSans';\n            src: url('https://static.vidad.net/fonts/IranSans/normal-fa.woff2') format('woff2'),\n                 url('https://static.vidad.net/fonts/IranSans/normal-fa.woff') format('woff'),\n                 url('https://static.vidad.net/fonts/IranSans/normal-fa.ttf') format('truetype');\n          }\n          .gifLoader {\n              display: none;\n          }\n          .footPrint{\n            color: #fff;\n            background-color: #000;\n            font-size: 15px;\n            font-family: arial;\n            position: absolute;\n            top: 0;\n            left : 0;\n            padding: 5px;\n            opacity: 0.7;\n            cursor : pointer;\n          }\n          .footPrint::after {\n            content: 'VidAd';\n            background-image: url(" + STATIC_URL + "images/information-button.png);\n            background-repeat: no-repeat;\n            background-position: 45px 50%;\n            background-size: 15px;\n            color: #d786ff;\n            padding-right: 20px;\n            padding-left: 2px;\n          }\n          .hotspotLink {\n            \n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 100%;\n            bottom: 40px;\n          }\n          .vidad-button {\n            display: block;\n            box-sizing: border-box;\n            color: #333;\n            text-align: center;\n            text-decoration: none;\n            transition: all 0.5s ease-out;\n            font-size: 14px;\n            font-weight: 900;\n            font-family: IranSans, BTitr, Titr, BNazanin, Nazanin, BRoya, Roya, sans-serif;\n            position: absolute;\n            bottom: 3%;\n          }\n          @media screen and (max-width: 480px) {\n              .vidad-button {\n                font-size: 10px;\n                font-weight: 100;\n              }\n              .footPrint{\n                  font-size: 10px;\n              }\n              .footPrint::after {\n                background-position: 34px 50%;\n                background-size: 10px;\n                color: #d786ff;\n                padding-right: 18px;\n                padding-left: 2px;\n              }\n              .vidad-button.adBtn.skipAd {\n                  padding-left : 100px;\n              }\n              .hotspotLink {\n                  bottom: 35px;\n              }\n              .sideBarElements {\n                  height: 40px;\n              }\n              .vidad-button.adBtn.specialSale::after {\n                background-size: 12px;  \n              }\n              .vidad-button.adBtn.skipAd:after{\n                background-size: 10px !important;\n              }\n          }\n          .vidad-button.resume-btn {\n            width: 100px;\n            height: 100px; \n            left: 50%;\n            position: absolute;\n            margin-left: -50px !important;\n            background : rgba(0,0,0,0.3);\n            top: 50%;\n            margin-top: -50px;\n            border-radius: 50%;\n          }\n          .vidad-button.resume-btn::before{\n            content: \"\";\n            width: 0;\n            height: 0;\n            border-top: 20px solid transparent;\n            border-bottom: 20px solid transparent;\n            border-left: 30px solid #fff;\n            position: absolute;\n            top: 50%;\n            margin-top: -20px;\n            right: 50%;\n            margin-right: -20px;\n          }\n          .jw-vpaid-wrapper.resume-ad {\n              background-color : rgba(0, 0, 0, 0.59);\n          }\n          .vidad-button.adBtn {\n            color: #fff;\n            text-decoration: none;\n            margin: 0 5px;\n          }\n          .vidad-button.adBtn::before {\n            content: ' ';\n            border-radius: 50% 0% 0% 0;\n            position: absolute;\n            left: -25px;\n            top: 0;\n            padding: 0 20px;\n            z-index : -1;\n            bottom: 0;\n          }\n          .vidad-button.adBtn::after {\n            content: ' ';\n            border-radius: 0% 50% 50% 0;\n            position: absolute;\n            right: -25px;\n            top: 0;\n            padding: 0 20px;\n            z-index : -1;\n            bottom: 0;\n          }\n          \n          .vidad-button.adBtn.skipAd {\n            right : 35px;\n            padding-left: 150px;\n          }\n          .vidad-button.adBtn.skipAd:after {\n            background-image : url(" + STATIC_URL + "images/arrow.png);\n            background-repeat : no-repeat;\n            background-size : 14px;\n            background-position : 20px 50%;\n          }\n          .vidad-button.adBtn.specialSale {\n            margin-left: 50px;\n            left : 0px;\n          }\n          \n          .vidad-button.adBtn.specialSale::after {\n              \n            background-image : url(" + STATIC_URL + "images/external-link.png);\n            background-repeat : no-repeat;\n            background-position : 20px 50%;\n          }\n          .vidad-button.adBtn.specialSale:hover,\n          .vidad-button.adBtn.specialSale:focus,\n          .vidad-button.adBtn.specialSale:active {\n            background: ##2d9019;\n            transition: all 0.9s ease-in;\n          }\n          .vidad-button:focus {\n            outline: none;\n          }\n          \n          .v-logo {\n            width: 90px;\n            z-index: -2;\n            float : left;\n            position: absolute;\n            bottom : 0;\n          }\n          \n          .v-banner {\n            display: inline-block;\n            box-sizing: border-box;\n            width: 100%;\n            width: 100vw;\n            height: 100%;\n            height: 100vh;\n            padding-bottom: 5.5%;\n            padding-bottom: 5.5vh;\n            z-index: 100;\n            background-color: #000;\n          }\n          \n          .sidebar {\n            position: absolute;\n            right: 0px;\n            left : 0px;\n            top: 0;\n            bottom: 0;\n            width: 100%;\n            height : 100%;\n            max-width: 100%;\n            // padding-top: 25px;\n            // padding-top: 20vh;\n            z-index: 101;\n            \n          }\n          .sideBarElements {\n            width: 100%;\n            height: 60px;\n            background: rgba(71,71,71,0);\n            background: -moz-linear-gradient(top, rgba(71,71,71,0) 0%, rgba(38,38,38,0.6) 35%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%);\n            background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(71,71,71,0)), color-stop(35%, rgba(38,38,38,0.6)), color-stop(70%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,0,1)));\n            background: -webkit-linear-gradient(top, rgba(71,71,71,0) 0%, rgba(38,38,38,0.6) 35%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%);\n            background: -o-linear-gradient(top, rgba(71,71,71,0) 0%, rgba(38,38,38,0.6) 35%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%);\n            background: -ms-linear-gradient(top, rgba(71,71,71,0) 0%, rgba(38,38,38,0.6) 35%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%);\n            background: linear-gradient(to bottom, rgba(71,71,71,0) 0%, rgba(38,38,38,0.6) 35%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%);\n            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#474747', endColorstr='#000000', GradientType=0 );\n            position: absolute;\n            bottom: 0;\n          }\n          .preloader {\n              width : 0;\n              height: 5px;\n              position: absolute;\n              bottom: 0;\n              left: 0;\n              display: block;\n              background: #fc0;\n              transition: width 0.8s linear;\n          }\n          .v-iframe {\n            width: 300px;\n            height: 300px;\n            top: 50%;\n            left: 50%;\n            position: absolute;\n            margin-top: -150px;\n            margin-left: -150px;\n          }\n          .black_frame {\n              width: 100vw;\n              height: 100vh;\n              background-color: #FFF;\n              position: absolute;\n              top:0;\n              left:0;\n              z-index: -1;\n          }\n        ");
    };
    VPAIDVideoPlayer.prototype.createDivAd = function (caption, callback, hidden, fromRight) {
        if (hidden === void 0) { hidden = false; }
        if (fromRight === void 0) { fromRight = false; }
        var hotspotLink = document.createElement('div');
        hotspotLink.className = 'hotspotLink';
        hotspotLink.addEventListener('click', callback, false);
        this.sidebarEl.appendChild(hotspotLink);
        return hotspotLink;
    };
    VPAIDVideoPlayer.prototype.createVidAdButton = function (caption, callback, hidden, fromRight) {
        if (hidden === void 0) { hidden = false; }
        if (fromRight === void 0) { fromRight = false; }
        var btn = document.createElement('a');
        btn.className = 'vidad-button';
        btn.href = '#';
        btn.text = caption;
        btn.addEventListener('click', callback, false);
        btn.style.opacity = '0';
        if (fromRight)
            btn.style.marginRight = '-100px';
        else
            btn.style.marginLeft = '-100px';
        this.sidebarEl.appendChild(btn);
        if (!hidden) {
            if (fromRight)
                Utils.fadeInFromRight(btn);
            else
                Utils.fadeInFromLeft(btn);
        }
        else {
            btn.style.display = 'none';
        }
        return btn;
    };
    VPAIDVideoPlayer.prototype.createLogo = function (src) {
        var _this = this;
        if (!src) {
            return null;
        }
        var img = document.createElement('img');
        img.src = src;
        img.className = 'v-logo';
        img.addEventListener('click', function (e) {
            e.preventDefault();
            _this.clickAd();
        }, false);
        return img;
    };
    VPAIDVideoPlayer.prototype.createPreloader = function (hidden) {
        if (hidden === void 0) { hidden = true; }
        var preloader = document.createElement('div');
        preloader.className = 'preloader';
        preloader.style.width = '0';
        pausedPreloader = false;
        if (hidden)
            preloader.style.display = 'none';
        else
            preloader.style.display = 'block';
        this.sidebarEl.appendChild(preloader);
        return preloader;
    };
    VPAIDVideoPlayer.prototype.createVidadFootPrint = function (callback, title) {
        var footPrint = document.createElement('span');
        footPrint.innerText = title ? title : "Ad By VidAd";
        footPrint.className = 'footPrint';
        footPrint.addEventListener('click', callback, false);
        this.sidebarEl.appendChild(footPrint);
        return footPrint;
    };
    VPAIDVideoPlayer.prototype.createGUI = function () {
        var _this = this;
        this.sidebarEl = document.createElement('div');
        this.sidebarEl.className = 'sidebar';
        this.gradientParent = document.createElement('div');
        this.gradientParent.className = 'sideBarElements';
        this.slot_.appendChild(this.sidebarEl);
        this.slot_.appendChild(this.gradientParent);
        this.createLogo(this.parameters_.logo);
        this.elements['hotspotArea'] = this.createDivAd('', function (e) {
            e.preventDefault();
            _this.clickAd();
        });
        this.elements['clickBtn'] = this.createVidAdButton(this.parameters_.bannerCaption || 'اطلاعات بیشتر', function (e) {
            e.preventDefault();
            _this.clickAd();
        });
        this.elements['vidAdFootPrint'] = this.createVidadFootPrint(function (e) {
            _this.clickVidAd();
        }, "Ads by");
        this.elements['clickBtn'].className += ' adBtn specialSale';
        this.elements['skipBtn'] = this.createVidAdButton(this.parameters_.bannerSkipCaption || 'رد کردن تبلیغ', function (e) {
            e.preventDefault();
            _this.logEvent('skip', function () {
                _this.stopAd();
                _this.callEvent_('AdSkipped');
            });
        }, true, true);
        this.elements['skipBtn'].className += ' adBtn skipAd';
        this.elements['preloader'] = this.createPreloader(false);
        preloader = this.elements['preloader'];
        var adDuration;
        var isVideo = this.isVideo;
        if (isVideo) {
            adDuration = this.videoSlot_.duration;
            var timer = 0;
            if (adDuration) {
                adTimer(timer, adDuration, preloader, isVideo);
            }
        }
        else {
            adDuration = this.bannerDuration;
            var timer = 0;
            if (adDuration) {
                adTimer(timer, adDuration, preloader, isVideo);
            }
        }
    };
    VPAIDVideoPlayer.prototype.initAd = function (width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
        var _this = this;
        _super.prototype.initAd.call(this, width, height, viewMode, desiredBitrate, creativeData, environmentVars);
        this.attributes_['width'] = width;
        this.attributes_['height'] = height;
        this.attributes_['viewMode'] = viewMode;
        this.attributes_['desiredBitrate'] = desiredBitrate;
        this.slot_ = environmentVars.slot;
        this.videoSlot_ = environmentVars.videoSlot;
        this.isVideo = Boolean(this.parameters_['isVideo']);
        this.isIframe = this.parameters_['banner'].indexOf('iframe') !== -1;
        this.canSkip = Boolean(this.parameters_['canSkip']);
        this.clickThrough = this.parameters_['clickThrough'];
        this.vidadLivk = this.parameters_['vidad_link'] || "http://vidad.net/?utm_source=preroll&utm_campaign=adsbutton&utm_medium=adsbutton";
        this.bannerDuration = this.parameters_['bannerDuration'] || 10;
        this.log('initAd ' + width + 'x' + height + ' ' + viewMode + ' ' + desiredBitrate);
        this.applyStyle();
        if (this.isVideo) {
            this.updateVideoSlot_();
            this.logEvent('imp');
            this.videoSlot_.addEventListener('timeupdate', this.timeUpdateHandler_.bind(this), false);
            this.videoSlot_.addEventListener('ended', this.stopAd.bind(this), false);
            this.videoSlot_.addEventListener('loadeddata', function () {
                _this.videoLoaded();
            });
        }
        this.subscribe(function () { _this.logEvent('start'); }, 'AdImpression');
        this.subscribe(function () { _this.logEvent('q1'); }, 'AdVideoFirstQuartile');
        this.subscribe(function () { _this.logEvent('q2'); }, 'AdVideoMidpoint');
        this.subscribe(function () { _this.logEvent('q3'); }, 'AdVideoThirdQuartile');
        this.subscribe(function () { _this.logEvent('q4'); }, 'AdVideoComplete');
        this.callEvent_('AdLoaded');
    };
    VPAIDVideoPlayer.prototype.timeUpdateHandler_ = function () {
        if (this.adFinished)
            return;
        this.attributes_['remainingTime'] = this.videoSlot_.duration - this.videoSlot_.currentTime;
        pausedPreloader = false;
        if (this.canSkip && !this.skipEnabled)
            if (this.videoSlot_.currentTime >= this.skipOffset)
                this.enableSkip();
        if (this.attributes_['duration'] != this.videoSlot_.duration) {
            this.attributes_['duration'] = this.videoSlot_.duration;
            this.callEvent_('AdDurationChange');
        }
        this.send_Quartile_events(this.videoSlot_.currentTime, this.videoSlot_.duration);
    };
    VPAIDVideoPlayer.prototype.send_Quartile_events = function (currentTime, duration, isVideo) {
        if (isVideo === void 0) { isVideo = true; }
        if (this.lastQuartileIndex_ >= this.quartileEvents_.length) {
            this.adFinished = true;
            return;
        }
        var percentPlayed = currentTime * 100.0 / duration;
        if (percentPlayed >= this.quartileEvents_[this.lastQuartileIndex_].value) {
            var lastQuartileEvent = this.quartileEvents_[this.lastQuartileIndex_].event;
            this.callEvent_(lastQuartileEvent);
            this.lastQuartileIndex_ += 1;
        }
        if (!this.isVideo && percentPlayed >= 80) {
            if (!this.AdVideoComplete_event) {
                console.log('I am calling last event');
                this.callEvent_('AdVideoComplete');
            }
        }
    };
    VPAIDVideoPlayer.prototype.videoLoaded = function () {
        this.createGUI();
        this.startAd.bind(this);
    };
    VPAIDVideoPlayer.prototype.updateVideoSlot_ = function () {
        if (this.videoSlot_ == null) {
            this.videoSlot_ = document.createElement('video');
            this.log('Warning: No video element passed to ad, creating element.');
            this.slot_.appendChild(this.videoSlot_);
        }
        var foundSource = false;
        var videos = [{ 'url': this.parameters_.banner, 'mimetype': 'video/mp4' }];
        for (var i = 0; i < videos.length; i++) {
            if (this.videoSlot_.canPlayType(videos[i].mimetype) != '') {
                this.videoSlot_.setAttribute('src', videos[i].url);
                foundSource = true;
                break;
            }
        }
        if (!foundSource) {
            this.callEvent_('AdError');
        }
    };
    VPAIDVideoPlayer.prototype.updateVideoPlayerSize_ = function () {
        try {
            this.videoSlot_.setAttribute('width', this.attributes_['width']);
            this.videoSlot_.setAttribute('height', this.attributes_['height']);
            this.videoSlot_.style.width = this.attributes_['width'] + 'px';
            this.videoSlot_.style.height = this.attributes_['height'] + 'px';
        }
        catch (e) {
        }
    };
    VPAIDVideoPlayer.prototype.createBanner = function () {
        var _this = this;
        var img = document.createElement('img');
        img.src = this.parameters_.banner;
        img.className = 'v-banner';
        img.addEventListener('load', function () {
            _this.logEvent('imp');
            _this.createGUI();
            _this.callEvent_('AdStarted');
            _this.bannerTimer();
        }, false);
        this.slot_.appendChild(img);
        return img;
    };
    VPAIDVideoPlayer.prototype.bannerTimer = function () {
        var _this = this;
        if (this.banner_timer < this.bannerDuration) {
            this.banner_interval = setInterval(function () {
                _this.banner_timer += 1;
                _this.send_Quartile_events(_this.banner_timer, _this.bannerDuration);
            }, 1000);
        }
        else {
            clearInterval(this.banner_interval);
        }
    };
    VPAIDVideoPlayer.prototype.startAd = function () {
        var _this = this;
        var bannerDuration_ = this.bannerDuration;
        if (this.isVideo) {
            this.videoSlot_.play();
        }
        else if (!this.isIframe) {
            this.createBanner();
            this.bannerAdTimeOutStop = setTimeout(function () {
                console.info('banner ad ended , stopping proccess started ...');
                _this.stopAd();
            }, bannerDuration_ * 1000);
            if (this.canSkip) {
                setTimeout(function () { _this.enableSkip(); }, this.skipOffset * 1000);
            }
        }
        else {
            this.createIframe();
            this.bannerAdTimeOutStop = setTimeout(function () {
                console.info('banner ad ended , stopping proccess started ...');
                _this.stopAd();
            }, bannerDuration_ * 1000);
            if (this.canSkip) {
                setTimeout(function () { _this.enableSkip(); }, this.skipOffset * 1000);
            }
        }
        this.callEvent_('AdStarted');
    };
    VPAIDVideoPlayer.prototype.createIframe = function () {
        var _this = this;
        var iFrame = document.createElement('iframe');
        var black_frame = document.createElement('div');
        black_frame.className = 'black_frame';
        black_frame.addEventListener('click', function () {
            _this.clickAd();
        });
        this.slot_.appendChild(black_frame);
        iFrame.src = this.parameters_.banner;
        iFrame.className = 'v-iframe';
        iFrame.frameBorder = '0';
        iFrame.scrolling = 'no';
        iFrame.onload = function () {
            _this.logEvent('imp');
            _this.createGUI();
            _this.callEvent_('AdStarted');
            _this.bannerTimer();
            _this.slot_.style.textAlign = 'center';
        };
        this.slot_.appendChild(iFrame);
        return iFrame;
    };
    VPAIDVideoPlayer.prototype.enableSkip = function () {
        this.skipEnabled = true;
        Utils.fadeInFromRight(this.elements['skipBtn']);
    };
    VPAIDVideoPlayer.prototype.stopAd = function () {
        var _this = this;
        this.log('Stopping ad');
        if (this.intervalId_) {
            clearInterval(this.intervalId_);
        }
        console.log(this.eventCompleteLoading);
        var stopAdInterval = setInterval(function () {
            console.log('stop ad proccess start ----------------');
            if (_this.eventCompleteLoading) {
                console.log('stop ad proccess success ----------------');
                var callback = _this.callEvent_.bind(_this);
                setTimeout(callback, 75, ['AdStopped']);
                clearInterval(stopAdInterval);
            }
            else {
                console.log('stop ad proccess failed ----------------');
            }
        }, 30);
        setTimeout(function () { _this.eventCompleteLoading = true; }, 400);
        setTimeout(function () { _this.adFinished = true; }, 25);
    };
    VPAIDVideoPlayer.prototype.setAdVolume = function (value) {
        this.attributes_['volume'] = value;
        this.videoSlot_.volume = value / 100.0;
        this.callEvent_('AdVolumeChange');
    };
    VPAIDVideoPlayer.prototype.getAdVolume = function () {
        return this.attributes_['volume'];
    };
    VPAIDVideoPlayer.prototype.resizeAd = function (width, height, viewMode) {
        this.attributes_['width'] = width;
        this.attributes_['height'] = height;
        this.attributes_['viewMode'] = viewMode;
        this.updateVideoPlayerSize_();
        this.callEvent_('AdSizeChange');
    };
    VPAIDVideoPlayer.prototype.pauseAd = function (finished) {
        var _this = this;
        if (finished === void 0) { finished = false; }
        if (this.bannerAdTimeOutStop) {
            clearTimeout(this.bannerAdTimeOutStop);
        }
        this.videoSlot_.pause();
        this.callEvent_('AdPaused');
        if (this.intervalId_) {
            clearInterval(this.intervalId_);
        }
        if (!this.elements['resumeBtn']) {
            pausedPreloader = true;
            var player_wrap = this.slot_;
            player_wrap.className += " resume-ad";
            this.elements['resumeBtn'] = this.createVidAdButton('', function (e) {
                e.preventDefault();
                player_wrap.classList.remove("resume-ad");
                if (finished) {
                    _this.stopAd();
                    return;
                }
                _this.resumeAd();
                var btn = _this.elements['resumeBtn'];
                if (btn) {
                    btn.opacity = '0';
                    btn.parentNode.removeChild(btn);
                    _this.elements['resumeBtn'] = null;
                }
            });
            this.elements['resumeBtn'].className += " resume-btn";
        }
    };
    VPAIDVideoPlayer.prototype.resumeAd = function () {
        this.videoSlot_.play();
        this.callEvent_('AdPlaying');
        var callback = (function () {
            this.attributes_['remainingTime'] -= 0.25;
            this.callEvent_('AdRemainingTimeChange');
        }).bind(this);
        this.intervalId_ = setInterval(callback, 250);
    };
    VPAIDVideoPlayer.prototype.expandAd = function () {
    };
    VPAIDVideoPlayer.prototype.getAdExpanded = function () {
        return this.attributes_['expanded'];
    };
    VPAIDVideoPlayer.prototype.getAdSkippableState = function () {
        return this.attributes_['skippableState'];
    };
    VPAIDVideoPlayer.prototype.collapseAd = function () {
        this.attributes_['expanded'] = false;
    };
    VPAIDVideoPlayer.prototype.skipAd = function () {
        var skippableState = this.attributes_['skippableState'];
        if (skippableState) {
            console.info('ad skipped ...');
            this.callEvent_('AdSkipped');
        }
    };
    VPAIDVideoPlayer.prototype.clickAd = function () {
        if (!this.clickThrough) {
            this.log('No clickThrough provided, click ignored.');
            return;
        }
        this.logEvent('lclick');
        clearInterval(this.banner_interval);
        this.callEvent_('AdClickThru');
        this.pauseAd(true);
        window.open(this.clickThrough, '_blank');
    };
    VPAIDVideoPlayer.prototype.clickVidAd = function () {
        if (!this.vidadLivk) {
            this.log('No clickThrough provided, click ignored.');
            return;
        }
        this.logEvent('lclick');
        this.callEvent_('vidAdLink');
        this.pauseAd(true);
        window.open(this.vidadLivk, '_blank');
    };
    VPAIDVideoPlayer.prototype.subscribe = function (aCallback, eventName, aContext) {
        if (aContext === void 0) { aContext = null; }
        var callBack;
        if (aContext) {
            callBack = aCallback.bind(aContext);
        }
        else {
            callBack = aCallback;
        }
        this.eventsCallbacks_[eventName] = callBack;
    };
    VPAIDVideoPlayer.prototype.unsubscribe = function (eventName) {
        if (typeof this.eventsCallbacks_ === 'undefined')
            return;
        this.eventsCallbacks_[eventName] = null;
    };
    VPAIDVideoPlayer.prototype.getAdWidth = function () {
        return this.attributes_['width'];
    };
    VPAIDVideoPlayer.prototype.getAdHeight = function () {
        return this.attributes_['height'];
    };
    VPAIDVideoPlayer.prototype.getAdRemainingTime = function () {
        return this.attributes_['remainingTime'];
    };
    VPAIDVideoPlayer.prototype.getAdDuration = function () {
        return this.attributes_['duration'];
    };
    VPAIDVideoPlayer.prototype.getAdCompanions = function () {
        return this.attributes_['companions'];
    };
    VPAIDVideoPlayer.prototype.getAdIcons = function () {
        return this.attributes_['icons'];
    };
    VPAIDVideoPlayer.prototype.getAdLinear = function () {
        return this.attributes_['linear'];
    };
    VPAIDVideoPlayer.prototype.callEvent_ = function (eventType) {
        if (eventType in this.eventsCallbacks_) {
            this.eventsCallbacks_[eventType]();
            if (eventType === 'AdVideoComplete') {
                this.AdVideoComplete_event = true;
            }
        }
    };
    return VPAIDVideoPlayer;
}(VPAID.VPAIDBase));
function getVPAIDAd() {
    return new VPAIDVideoPlayer();
}
//# sourceMappingURL=linear1.js.map
