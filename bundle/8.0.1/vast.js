! function() {
    "use strict";

    function t(t) {
        for (; t.length > 0;) {
            var e = t.pop();
            e.parentNode && e.parentNode.removeChild(e)
        }
    }

    function e(t, e, i, n) {
        var a = document.createElement("iframe");
        a.src = "javascript:false", t.style(a, {
            border: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            overflow: "hidden"
        }), a.scrolling = "no";
        var r = i.getElementsByClassName("jw-media")[0];
        r.appendChild(a);
        var s = a.contentWindow.document;
        return s.open().write("\n    <body onload=\"\n        var js = document.createElement('script');\n        js.src = '" + e + "';\n        js.addEventListener('load', function() { window.myCallback(); });\n        document.body.appendChild(js);\"\n    style=\"margin: 0\">"), a.contentWindow.myCallback = n, s.close(), a
    }

    function i(t) {
        return {
            getPosition: function() {
                var e = t.getPosition();
                return e
            },
            getFile: function() {
                return t.getPlaylistItem().file
            }
        }
    }

    function n(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 900,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 60900,
            n = {};
        return n.message = t, n.code = e, n.adErrorCode = i, n
    }

    function a(t, e) {
        "boolean" == typeof t.mediaFileCompliance && (e.mediaFileCompliance = t.mediaFileCompliance, t.nonComplianceReasons && (e.nonComplianceReasons = t.nonComplianceReasons))
    }

    function r(t) {
        var e = [];
        return ve.map(t, function(t) {
            var i = "iframe" === t.type || "html" === t.type ? t.type : "static",
                n = void 0;
            t.trackers && t.trackers.creativeView && t.trackers.creativeView.length && (n = t.trackers.creativeView), e.push({
                width: t.width,
                height: t.height,
                type: i,
                resource: t.source,
                creativeview: n,
                click: t.clickthrough
            })
        }), e
    }

    function s() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = [];
        return ve.map(t, function(t) {
            t.type.indexOf("flash") < 0 && e.push(t)
        }), e
    }

    function o(t) {
        return "application/javascript" === t.type || "application/x-javascript" === t.type
    }

    function d(t) {
        return o(t) ? "html5" : "flash"
    }

    function l(t, e) {
        for (var i = void 0, n = "flash" === e, a = 0; a < t.media.length; a++) {
            var r = t.media[a];
            if (n) {
                i = r;
                break
            }
            if ("html5" === d(r)) {
                i = r;
                break
            }
        }
        return i
    }

    function h(t, e, i) {
        t.tracker = new me(t.trackers, e, i)
    }

    function p(t, e) {
        var i = void 0;
        return i = "flash" === e ? ve.where(jwplayer.api.availableProviders, {
            name: "flash"
        }) : ve.filter(jwplayer.api.availableProviders, function(t) {
            return "flash" !== t.name
        }), ve.filter(t, function(t) {
            return ve.some(i, function(e) {
                return e.supports(t, "ads")
            })
        })
    }

    function u(t, e, i) {
        var n = document.createElement("param");
        n.setAttribute("name", e), n.setAttribute("value", i), t.appendChild(n)
    }

    function c(t, e) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            e ? n._vmap.item = i + 1 : n._adbreak = {
                item: i + 1,
                tags: n._adQueue,
                breakid: n._breakId
            }
        }
    }

    function f(t, e, i) {
        var n = void 0;
        return ke.foreach(t, function(t, e) {
            n = n || {}, "_adQueue" === t ? n[t] = e.slice() : n[t] = e
        }), n && (n.requestTimeout = e, n.creativeTimeout = i), n
    }

    function m(t, e) {
        return "%" === t.toString().slice(-1) ? e * parseFloat(t.slice(0, -1)) / 100 : parseFloat(t)
    }

    function v(t) {
        return Ee.isString(t) ? [t] : Ee.isArray(t) ? t.slice(0) : t
    }

    function y(t) {
        if ("start" === t || "0%" === t) return "pre";
        if ("end" === t || "100%" === t) return "post";
        if ("pre" === t || "post" === t || Ee.indexOf(t, "%") > -1) return t;
        var e = be.seconds(t);
        return !!Ee.isNumber(e) && e
    }

    function g(t, e) {
        return 0 === t ? 1 / 0 : t || e
    }

    function A(t, e) {
        if (!e) return t;
        var i = t.indexOf("?") >= 0 ? "&" : "?",
            n = "cust_params=",
            a = t.indexOf(n),
            r = n.length,
            s = "",
            o = "";
        if (be.foreach(e, function(t, e) {
                s = "" + s + o + t + "=" + e, o = "&"
            }), s = encodeURIComponent(s), a >= 0) {
            var d = t.substr(0, a + r),
                l = t.substr(a + r);
            return "" + d + s + "%26" + l
        }
        return "" + t + i + "cust_params=" + s
    }

    function P(t, e) {
        var i = e.schedule || e.adschedule;
        i && Object.keys(i).map(function(n) {
            var a = i[n];
            a.ad && (be.extend(a, a.ad), delete a.ad);
            var r = y(a.offset),
                s = g(a.requestTimeout, ft),
                o = g(a.creativeTimeout, mt),
                d = {
                    _offSet: r,
                    _type: a.type,
                    _breakId: n,
                    requestTimeout: s,
                    creativeTimeout: o
                };
            r === !1 && be.log("Error: ad offset format not supported", r);
            var l = a.skipoffset || e.skipoffset;
            Ee.isUndefined(l) || (d.skipoffset = l);
            var h = a.adbreakid;
            h && (d.adbreakid = h);
            var p = a.adtagid;
            if (p && (d._adTagQueue = v(p)), a.tag) {
                var u = A(a.tag, a.custParams);
                d._adQueue = v(u), d._waterfallIndex = 0
            } else {
                if (!Ee.isString(a.vastxml)) return void be.log("Error: no ad tag provided");
                d._adXML = a.vastxml
            }
            switch (r) {
                case "pre":
                    t.setPreRoll(d);
                    break;
                case "post":
                    t.setPostRoll(d);
                    break;
                default:
                    t.addMidRoll(d)
            }
        })
    }

    function k(t, e) {
        Ce.style(t, {
            opacity: e || 1
        })
    }

    function T(t) {
        Ce.style(t, {
            opacity: 0
        })
    }

    function w() {
        k(xe)
    }

    function E() {
        k(xe, .75)
    }

    function b() {
        k(Se)
    }

    function _() {
        k(Se, .5)
    }

    function C(t, e) {
        for (var i = I(t, "AdBreak", ct), n = t.lookupNamespaceURI(ct), a = 0; a < i.length; a++) {
            var r = {},
                s = {},
                o = i[a],
                d = x(o, "timeOffset"),
                l = x(o, "breakId"),
                h = x(o, "breakType"),
                p = I(o, "AdSource", ct)[0],
                u = x(p, "id"),
                c = I(o, "AdTagURI", ct)[0],
                f = I(o, "VASTData", ct)[0] || I(o, "VASTAdData", ct)[0],
                m = x(c, "templateType"),
                v = R(c),
                y = S(n, o, "Tracking", ct);
            if (r._type = h, r._vmap = {
                    id: u,
                    breakid: l,
                    timeoffset: d
                }, f) r._adXML = I(f, "VAST")[0];
            else {
                if ("vast2" !== m && "vast3" !== m && "vast4" !== m) continue;
                r._adQueue = [v], r._waterfallIndex = 0
            }
            if (y)
                for (var g = 0; g < y.length; g++) V(s, y[g]);
            switch (r._trackers = s, r._type = h, d) {
                case "start":
                    r._offSet = "pre", e.setPreRoll(r);
                    break;
                case "100%":
                case "end":
                    r._offSet = "post", e.setPostRoll(r);
                    break;
                default:
                    if (/^#/.test(d)) break;
                    /^\d\d?(?:\.\d+)?%$/.test(d) ? r._offSet = d : r._offSet = De.seconds(d), e.addMidRoll(r)
            }
        }
        e.sort(null, !0)
    }

    function I(t, e, i) {
        var n = [];
        return t && (n = t.getElementsByTagName(e), i && n && 0 === n.length && (n = t.getElementsByTagName(i + ":" + e))), n
    }

    function S(t, e, i, n) {
        var a = [];
        return t || e ? a = e.getElementsByTagNameNS ? e.getElementsByTagNameNS(t, i) : e.getElementsByTagName(n + ":" + i) : a
    }

    function x(t, e) {
        return t ? t.getAttribute(e) : null
    }

    function V(t, e) {
        var i = x(e, "event");
        if ("progress" === i) {
            var n = x(e, "offset");
            i = i + "_" + n
        }
        var a = R(e);
        L(t, i, a)
    }

    function R(t) {
        if (t) {
            var e = t.textContent || t.text;
            if (e) return De.trim(e)
        }
        return ""
    }

    function L(t, e, i) {
        t[e] || (t[e] = []), i && t[e].push(i)
    }

    function M(t, e, i) {
        var n = I(t, e);
        Oe.map(n, function(t) {
            L(i, e.toLowerCase(), R(t))
        })
    }

    function H(t) {
        var e = {};
        Oe.map(t.media, function(t) {
            var i = t.type,
                n = "application/x-mpegURL" === i || "vnd.apple.mpegURL" === i;
            "vpaid" === t.adType.toLowerCase() || n || (e[i] = e[i] || 0, e[i]++)
        }), t.mediaFileCompliance = !0, Oe.map(e, function(e, i) {
            e < 3 && (t.mediaFileCompliance = !1, t.nonComplianceReasons = t.nonComplianceReasons || [], t.nonComplianceReasons.push(i + " has only " + e + " qualities"))
        })
    }

    function D(t) {
        var e = I(I(t, "Creatives")[0], "Creative"),
            i = {},
            n = {
                trackers: i
            };
        n.adsystem = R(I(t, "AdSystem")[0]);
        var a = [],
            r = I(t, "Category");
        return Oe.map(r, function(t) {
            a.push(R(t))
        }), n.categories = a, Oe.map(e, function(t) {
            var e = I(t, "Linear")[0],
                a = I(t, "NonLinear")[0],
                r = I(I(t, "TrackingEvents")[0], "Tracking"),
                s = I(t, "UniversalAdId")[0],
                o = x(s, "idRegistry") || "unknown",
                d = x(s, "idValue") || "unknown";
            e || a ? (Oe.map(r, function(t) {
                V(i, t)
            }), n.universalAdIdRegistry = o, n.universalAdIdValue = d) : (n.companionUniversalAdIdRegistry = o, n.companionUniversalAdIdValue = d);
            var l = R(I(t, "AdParameters")[0]);
            if (l && (n.adParams = l), e) {
                var h = I(e, "VideoClicks")[0],
                    p = R(I(h, "ClickThrough")[0]),
                    u = I(h, "ClickTracking"),
                    c = x(e, "skipoffset"),
                    f = R(I(e, "Duration")[0]);
                Oe.map(u, function(t) {
                    L(i, "click", R(t))
                }), f && (n.duration = De.seconds(f)), p && (n.clickthrough = p), c && (n.skipoffset = c), j(e, n)
            } else if (a) {
                var m = R(I(a, "NonLinearClickThrough")[0]);
                m && (n.clickthrough = m), U(t, n)
            } else N(t, n)
        }), n
    }

    function O(t) {
        var e = I(t, "Video")[0] || t,
            i = I(t, "NonLinear")[0],
            n = {},
            a = {
                trackers: n
            };
        if (e) {
            var r = I(I(t, "TrackingEvents")[0], "Tracking");
            Oe.map(r, function(t) {
                V(n, t)
            });
            var s = I(I(t, "Impression")[0], "URL");
            Oe.map(s, function(t) {
                L(n, "impression", R(t))
            });
            var o = I(I(t, "Error")[0], "URL");
            Oe.map(o, function(t) {
                L(n, "error", R(t))
            });
            var d = I(e, "VideoClicks")[0],
                l = R(I(d, "ClickThrough")[0]),
                h = I(I(d, "ClickTracking")[0], "URL");
            Oe.map(h, function(t) {
                L(n, "click", R(t))
            }), l && (a.clickthrough = l), j(e, a);
            var p = I(e, "AdParameters")[0];
            if (p) {
                var u = x(p, "apiFramework");
                "vpaid" === u.toLowerCase() && (Oe.map(a.media, function(t) {
                    t.adType = u
                }), a.adParams = R(p))
            }
        }
        if (i) {
            var c = a.media || [],
                f = I(i, "URL")[0];
            c.push({
                type: x(i, "creativeType"),
                file: R(f),
                adType: x(i, "apiFramework")
            }), a.media = c
        }
        var m = I(t, "CompanionAds")[0];
        return m = I(m, "Companion"), a.companions || (a.companions = []), Oe.map(m, function(t) {
            a.companions.push({
                width: parseInt(x(t, "width"), 10),
                height: parseInt(x(t, "height"), 10),
                type: x(t, "resourceType"),
                resource: R(I(t, "URL")[0]),
                trackers: [],
                clickthrough: ""
            })
        }), a
    }

    function j(t, e) {
        var i = I(I(t, "MediaFiles")[0], "MediaFile"),
            n = e.media ? e.media : [];
        Oe.map(i, function(t) {
            var e = {
                type: x(t, "type"),
                file: R(t),
                adType: x(t, "apiFramework") || "",
                width: parseInt(x(t, "width"), 10) || 0,
                height: parseInt(x(t, "height"), 10) || 0
            };
            e.file && n.push(e)
        }), e.media = n
    }

    function U(t, e) {
        var i = [],
            n = I(t, "StaticResource")[0];
        n && (i.push({
            type: x(n, "creativeType"),
            file: R(n),
            adType: x(I(t, "NonLinear")[0], "apiFramework") || "static",
            minDuration: x(I(t, "NonLinear")[0], "minSuggestedDuration") || "00:00:00"
        }), e.media = i)
    }

    function N(t, e) {
        var i = I(I(t, "CompanionAds")[0], "Companion"),
            n = e.companions ? e.companions : [];
        Oe.map(i, function(t) {
            var e = I(t, "StaticResource")[0],
                i = I(t, "IFrameResource")[0],
                a = I(t, "HTMLResource")[0],
                r = {},
                s = void 0,
                o = void 0;
            if (e) s = x(e, "creativeType"), o = R(e);
            else if (i) s = "iframe", o = R(i);
            else {
                if (!a) return;
                s = "html", o = R(a)
            }
            var d = I(I(t, "TrackingEvents")[0], "Tracking");
            Oe.map(d, function(t) {
                var e = x(t, "event");
                L(r, e, R(t))
            });
            var l = R(I(t, "CompanionClickThrough")[0]);
            n.push({
                width: parseInt(x(t, "width"), 10),
                height: parseInt(x(t, "height"), 10),
                type: s,
                source: o,
                trackers: r,
                clickthrough: l
            })
        }), e.companions = n
    }

    function F(t, e) {
        var i = De.extend({}, t);
        return De.foreach(e, function(t, n) {
            De.exists(i[t]) ? "array" === De.typeOf(n) ? i[t] = i[t].concat(n) : "object" === De.typeOf(n) ? i[t] = De.extend(i[t], e[t]) : i[t] = n : i[t] = n
        }), i
    }

    function B(t) {
        t && (t.onload = null, t.onreadystatechange = null, t.onerror = null, t.abort && t.abort())
    }

    function q(t, e, i) {
        var n = [];
        return i.foreach(e, function(e, a) {
            t.companions && (a.companions = (a.companions ? a.companions : []).concat(t.companions)), t.trackers && (a.trackers = Q(a.trackers, t.trackers, i)), t.sequence && (a.sequence = t.sequence), n.push(a)
        }), n
    }

    function Q(t, e, i) {
        return t = t || {}, i.foreach(e, function(e, i) {
            t[e] ? t[e] = t[e].concat(i) : t[e] = i
        }), t
    }

    function W(t, e) {
        return X(t) ? t : e.parseXML(t)
    }

    function X(t) {
        return "object" == typeof Node ? t instanceof Node : t && "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName
    }

    function z(t, e, i, n) {
        if (!t) return t;
        var a = Y(e),
            r = a.item,
            s = window.location.href;
        t = K(t, "__random-number__", Math.random() * Math.pow(10, 18)), t = K(t, "__timestamp__", (new Date).getTime()), t = K(t, "__page-url__", encodeURIComponent(s)), t = K(t, "__referrer__", encodeURIComponent(document.referrer)), t = K(t, "__player-height__", a.playerHeight), t = K(t, "__player-width__", a.playerWidth), t = K(t, "__item-duration__", a.itemDuration), t = K(t, "__domain__", encodeURIComponent(i)), t = n.companion ? K(t, "__companion-div__", n.companion.id) : K(t, "__companion-div__", "");
        for (var o = t.match(new RegExp(/__item-[a-z 0-9 A-Z]*__/g)), d = 0; o && d < o.length; d++) {
            var l = o[d],
                h = l.substring(7, l.length - 2);
            if (r.hasOwnProperty(h) && e._.isString(r[h])) {
                var p = r[h];
                p.length > 1e3 && (p = p.substring(0, 1e3)), t = K(t, l, encodeURIComponent(p))
            } else t = K(t, l, "")
        }
        return t = G(t)
    }

    function G(t) {
        return Be.test(t) || qe.test(t) ? t += "&sdk3p=jwplayer" : Qe.test(t) && (t += ";sdk3p=jwplayer"), t
    }

    function K(t, e, i) {
        return t.replace(e, i)
    }

    function Y(t) {
        var e = t.getConfig();
        return {
            playerHeight: t.getHeight() || e.height || "",
            playerWidth: t.getWidth() || e.width || "",
            itemDuration: $(t.getDuration(), 3) || "",
            item: e.playlist[t.getPlaylistIndex()] || {}
        }
    }

    function $(t, e) {
        var i = Math.pow(10, e);
        return Math.round(t * i) / i
    }

    function J(t) {
        return t._adQueue && t._waterfallIndex < t._adQueue.length
    }
    var Z = "vast",
        tt = "-1",
        et = "This ad will end in xx",
        it = "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__. ",
        nt = -1,
        at = "Advertisement",
        rt = "Skip ad in xx",
        st = "Skip",
        ot = "time",
        dt = "[ERRORCODE]",
        lt = "[CACHEBUSTING]",
        ht = "[ASSETURI]",
        pt = "[TIMESTAMP]",
        ut = "[CONTENTPLAYHEAD]",
        ct = "vmap",
        ft = 5e3,
        mt = 15e3,
        vt = "state",
        yt = "buffering",
        gt = "paused",
        At = "idle",
        Pt = "playing",
        kt = "complete",
        Tt = "fullscreen",
        wt = "volume",
        Et = "mute",
        bt = "error",
        _t = "adClick",
        Ct = "adCompanions",
        It = "adComplete",
        St = "adError",
        xt = "adImpression",
        Vt = "beforePlay",
        Rt = "adMeta",
        Lt = "adPause",
        Mt = "adPlay",
        Ht = "adSkipped",
        Dt = "adTime",
        Ot = "adStarted",
        jt = "none",
        Ut = "auto",
        Nt = {
            QUARTILE: "quartile",
            REMAINING_TIME: "remainingTimeChange",
            SKIPPED: "skipped",
            STARTED: "started",
            STOPPED: "stopped",
            CLICK: "click",
            PLAY: "play",
            IMPRESSION: "impression",
            PAUSE: "pause",
            ERROR: "error",
            COMPLETE: "complete",
            CLOSE: "close",
            EXPANDED_CHANGE: "expandedChange"
        },
        Ft = "AdLoaded",
        Bt = "AdStarted",
        qt = "AdStopped",
        Qt = "AdLinearChange",
        Wt = "AdExpandedChange",
        Xt = "AdRemainingTimeChange",
        zt = "AdVideoFirstQuartile",
        Gt = "AdVideoMidpoint",
        Kt = "AdVideoThirdQuartile",
        Yt = "AdVideoComplete",
        $t = "AdClickThru",
        Jt = "AdPaused",
        Zt = "AdPlaying",
        te = "AdSkipped",
        ee = "AdError",
        ie = "fullscreen",
        ne = "normal",
        ae = 60,
        re = 66,
        se = 150,
        oe = [xt, St, "adPodError"],
        de = [Ot, It, xt, _t, Ht, St, Mt, Lt, Rt],
        le = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        he = function() {
            function t(e, i, n, a, r, s) {
                var o = this;
                le(this, t), this.player = e, this.utils = e.utils, this.environment = e.getEnvironment(), this._ = e._, this.swf = i, this.adTag = a, this.adParams = r, this.vpaidControls = s, this.resumeOnAdStopped = !1, this.paused = !1, this.flashThrottled = !1, this.type = "vpaid", this.blocking = null, this.vpaidState = {
                    linear: !1,
                    expanded: !1,
                    remainingTime: -1
                };
                var d = -1;
                this._.extend(this, e.Events), this.environment.Browser.chrome && this.swf.on("throttle", function(t) {
                    clearTimeout(d), "resume" === t.state ? (o.flashThrottled = !1, o.onAdPlaying(o.vpaidState), o.setPointerEventsStyle(jt), o.callVPAID("resumeAd")) : d = setTimeout(function() {
                        o.setPointerEventsStyle(Ut), o.callVPAID("pauseAd"), o.onAdPaused(o.vpaidState), o.flashThrottled = !0
                    }, 250)
                }, this), this.swf.triggerFlash("vast:loadVpaid", n, this.genCallback(this.vpaidLoadSuccess.bind(this)), this.genCallback(this.vpaidError.bind(this)))
            }
            return t.prototype.vpaidLoadSuccess = function() {
                this.setPointerEventsStyle(Ut), this.addVPAIDListener(Ft, this.onAdLoaded), this.addVPAIDListener(Bt, this.onAdStarted), this.addVPAIDListener(Qt, this.onLinearChange), this.addVPAIDListener(Wt, this.onExpandedChange), this.addVPAIDListener(Jt, this.onAdPaused), this.addVPAIDListener(Zt, this.onAdPlaying), this.addVPAIDListener(qt, this.onAdStopped), this.addVPAIDListener(Yt, this.onAdComplete), this.addVPAIDListener(Xt, this.onRemainingTimeChangeHandler), this.addVPAIDListener($t, this.onAdClick), this.addVPAIDListener(te, this.onAdSkipped), this.addVPAIDListener(ee, this.vpaidError), this.addVPAIDListener(zt, this.onFirstQuartile), this.addVPAIDListener(Gt, this.onMidpoint), this.addVPAIDListener(Kt, this.onThirdQuartile);
                var t = this.player.getSafeRegion(!1);
                this.callVPAID("initAd", t.width, t.height + t.y, this.fullscreenMode(), 0, this.adParams)
            }, t.prototype.setPointerEventsStyle = function(t) {
                this.environment.Browser.ie && "PointerEvent" in window && (this.swf.style.pointerEvents = t)
            }, t.prototype.fullscreenMode = function() {
                return this.player.getFullscreen() ? "fullscreen" : "normal"
            }, t.prototype.vpaidError = function() {
                this.sendEvent(Nt.ERROR)
            }, t.prototype.sendEvent = function(t, e) {
                this.flashThrottled || (e = e || {}, e.linear = this.vpaidState.linear ? "linear" : "nonlinear", e.tag = this.adTag, this.trigger(t, e))
            }, t.prototype.updateVpaidState = function(t) {
                t && (this._.isBoolean(t.linear) && (this.vpaidState.linear = t.linear), this._.isBoolean(t.expanded) && (this.vpaidState.expanded = t.expanded), this._.isNumber(t.remainingTime) && (this.vpaidState.remainingTime = t.remainingTime))
            }, t.prototype.onAdLoaded = function(t) {
                this.onLinearChange(t), this.setVPAIDProperty("adVolume", this.player.getMute() ? 0 : this.player.getVolume() / 100), this.callVPAID("startAd")
            }, t.prototype.onAdStarted = function(t) {
                this.updateVpaidState(t), t.linear && this.blocking && !this.vpaidControls && this.blocking.hide(), this.sendEvent(Nt.IMPRESSION), this.sendEvent(Nt.PLAY, {
                    oldstate: yt,
                    newstate: Pt
                }), this.sendEvent(Nt.STARTED)
            }, t.prototype.onAdClick = function(t) {
                this.updateVpaidState(t), this.sendEvent(Nt.CLICK, {
                    url: t.url,
                    playerHandles: t.playerHandles
                })
            }, t.prototype.onAdSkipped = function(t) {
                this.updateVpaidState(t), this.sendEvent(Nt.SKIPPED)
            }, t.prototype.onLinearChange = function(t) {
                this.updateVpaidState(t);
                var e = void 0,
                    i = void 0,
                    n = void 0;
                if (t.linear) {
                    if (this.blocking) this.vpaidControls || this.blocking.hide();
                    else {
                        this.resumeOnAdStopped = !0, this.player.setControls(!1);
                        var a = this.player.getState();
                        a !== Pt && a !== yt || this.player.pause()
                    }
                    n = this.player.getSafeRegion(!1), i = n.height + n.y, e = n.width
                } else this.blocking ? (this.blocking.destroy(), this.blocking = null) : this.resumeOnAdStopped && (this.player.play(), this.player.setControls(!0)), n = this.player.getSafeRegion(!0), i = n.height + n.y, e = n.width;
                this.callVPAID("resizeAd", e, i, this.fullscreenMode())
            }, t.prototype.onExpandedChange = function(t) {
                this.updateVpaidState(t), this.sendEvent(Nt.EXPANDED_CHANGE, {
                    expanded: this.vpaidState.expanded
                })
            }, t.prototype.onAdStopped = function(t) {
                this.updateVpaidState(t), this.resumeOnAdStopped && (this.player.play(), this.player.setControls(!0)), this.setPointerEventsStyle(jt), this.sendEvent(Nt.STOPPED)
            }, t.prototype.onAdComplete = function() {
                this.setPointerEventsStyle(jt), this.sendEvent(Nt.COMPLETE)
            }, t.prototype.onAdPaused = function(t) {
                this.updateVpaidState(t), this.paused || (this.paused = !0, this.sendEvent(Nt.PAUSE, {
                    newstate: gt,
                    oldstate: Pt
                }))
            }, t.prototype.onAdPlaying = function(t) {
                this.updateVpaidState(t), this.paused && (this.paused = !1, this.sendEvent(Nt.PLAY, {
                    newstate: Pt,
                    oldstate: gt
                }))
            }, t.prototype.onRemainingTimeChangeHandler = function(t) {
                this.updateVpaidState(t), this.sendEvent(Nt.REMAINING_TIME, {
                    remainingTime: t.remainingTime
                })
            }, t.prototype.onFirstQuartile = function(t) {
                this.handleQuartile(1, t)
            }, t.prototype.onMidpoint = function(t) {
                this.handleQuartile(2, t)
            }, t.prototype.onThirdQuartile = function(t) {
                this.handleQuartile(3, t)
            }, t.prototype.handleQuartile = function(t, e) {
                this.updateVpaidState(e), this.sendEvent("quartile", {
                    quartile: t,
                    remainingTime: e.remainingTime
                })
            }, t.prototype.callVPAID = function() {
                var t = Array.prototype.slice.call(arguments);
                t.unshift("vast:callVpaid"), this.swf.triggerFlash.apply(this.swf, t)
            }, t.prototype.setVPAIDProperty = function(t, e) {
                this.swf.triggerFlash("vast:setVpaidProperty", t, e)
            }, t.prototype.addVPAIDListener = function(t, e) {
                this.swf.triggerFlash("vast:addVpaidListener", t, this.genCallback(e.bind(this)))
            }, t.prototype.genCallback = function(t) {
                var e = t.name ? t.name.replace("bound ", "") : "",
                    i = this.player.id + ":vast:" + e + ":" + Math.random().toString(16).substr(2);
                return this.swf.on(i, t, this), i
            }, t.prototype.genEvent = function(t) {
                var e = this;
                return function(i) {
                    e.on(t, i)
                }
            }, t.prototype.setVolume = function(t) {
                this.setVPAIDProperty("adVolume", t / 100)
            }, t.prototype.volume = function() {}, t.prototype.mute = function() {}, t.prototype.play = function() {
                this.callVPAID("resumeAd")
            }, t.prototype.pause = function() {
                this.callVPAID("pauseAd")
            }, t.prototype.stop = function() {
                this.callVPAID("stopAd")
            }, t.prototype.resize = function() {
                var t = this.player.getSafeRegion(!this.vpaidState.linear);
                this.callVPAID("resizeAd", t.width, t.height + t.y, this.fullscreenMode())
            }, t.prototype.removeEvents = function() {
                this.off()
            }, t.prototype.destroy = function() {
                this.removeEvents(), this.setPointerEventsStyle(jt), this.swf.off(null, null, this), this.blocking = null
            }, t.prototype.getState = function() {
                return this.vpaidState.linear ? this.paused ? gt : Pt : At
            }, t
        }(),
        pe = function() {
            function i(t, n, a, r, s, o) {
                var d = this;
                return le(this, i), this.player = t, this._ = t._, this.state = t.state, this.vpaidURL = n, this.adTag = a, this.adParams = r, this.vpaidControls = s, this.type = "vpaid", this.blocking = null, this.toRemove = [], this.vpaidState = {
                    linear: !1,
                    expanded: !1,
                    remainingTime: -1
                }, this.paused = !1, this._.extend(this, t.Events), this.setMuteCallback = this.setMute.bind(this), this.playerContainer = this.player.getContainer(), o ? void setTimeout(function() {
                    d.sendEvent("error", {
                        message: "Conditional ad rejected",
                        code: 408
                    })
                }, 0) : (this.iframe = e(t.utils, this.vpaidURL, this.playerContainer, this.callback.bind(this)), void this.toRemove.push(this.iframe))
            }
            return i.prototype.sendEvent = function(t, e) {
                e = e || {}, e.tag || (e.tag = this.adTag), this.trigger(t, e)
            }, i.prototype.sendTimeEvent = function(t, e, i) {
                var n = e.getAdDuration(),
                    a = e.getAdRemainingTime(),
                    r = this._.extend({
                        duration: n
                    }, i);
                this.sendEvent(t, r), a > 0 && (r.position = n - a, this.trigger("time", r))
            }, i.prototype.handleQuartile = function(t, e) {
                this.sendTimeEvent("quartile", t, {
                    quartile: e
                })
            }, i.prototype.genEvent = function(t) {
                var e = this;
                return function(i) {
                    e.on(t, i)
                }
            }, i.prototype.setMute = function() {
                this.player.setMute(!this.vpaidAd.getAdVolume())
            }, i.prototype.userActive = function() {
                var t = this.player.utils.hasClass(this.playerContainer, "jw-flag-time-slider-above");
                this.player.utils.style(this.iframe, {
                    bottom: t ? re : ae
                })
            }, i.prototype.userInactive = function() {
                "paused" !== this.player.getState() && this.player.utils.style(this.iframe, {
                    bottom: "0.5em"
                })
            }, i.prototype.prepareNonlinearAd = function() {
                var t = !this.player.utils.hasClass(this.playerContainer, "jw-flag-user-inactive");
                this.player.utils.style(this.iframe, {
                    height: se
                }), this.resize(null, se), this.userActive(t), this.player.on("userActive", this.userActive, this), this.player.on("userInactive", this.userInactive, this), this.blocking && (this.blocking.applyProviderListeners(null), this.blocking.destroy(), this.blocking = null)
            }, i.prototype.genListeners = function(e) {
                var i = this;
                return {
                    AdLoaded: function() {
                        e.startAd()
                    },
                    AdStarted: function() {
                        e.getAdLinear() ? i.blocking && !i.vpaidControls && i.blocking.hide() : i.prepareNonlinearAd(), i.sendEvent("impression", {
                            linear: e.getAdLinear() ? "linear" : "nonlinear"
                        }), i.sendEvent("play", {
                            oldstate: yt,
                            newstate: Pt,
                            linear: e.getAdLinear() ? "linear" : "nonlinear"
                        }), e.subscribe(i.setMuteCallback, "AdVolumeChange", e)
                    },
                    AdVideoStart: function() {
                        i.sendEvent("started")
                    },
                    AdStopped: function() {
                        t(i.toRemove), i.player.setControls(!0), i.sendEvent("stopped")
                    },
                    AdPaused: function() {
                        i.paused || (i.paused = !0, i.sendEvent("pause", {
                            newstate: gt,
                            oldstate: Pt
                        }))
                    },
                    AdPlaying: function() {
                        i.paused && (i.paused = !1, i.sendEvent("play", {
                            newstate: Pt,
                            oldstate: gt,
                            linear: e.getAdLinear() ? "linear" : "nonlinear"
                        }))
                    },
                    AdLinearChange: function() {
                        if (e.getAdLinear())
                            if (i.player.utils.style(i.iframe, {
                                    height: "100%"
                                }), i.player.off(null, null, i), i.blocking) i.vpaidControls || i.blocking.hide();
                            else {
                                i.player.setControls(!1);
                                var t = i.player.getState();
                                t !== Pt && t !== yt || i.player.pause(!0)
                            }
                        else i.prepareNonlinearAd(), i.player.play(), i.player.setControls(!0)
                    },
                    AdDurationChange: function() {
                        i.sendTimeEvent("remainingTimeChange", e, {
                            isDurationChange: !0,
                            remainingTime: e.getAdRemainingTime()
                        })
                    },
                    AdRemainingTimeChange: function() {
                        i.sendTimeEvent("remainingTimeChange", e, {
                            remainingTime: e.getAdRemainingTime()
                        })
                    },
                    AdExpandedChange: function() {
                        i.sendEvent("expandedChange", {
                            expanded: e.getAdExpanded()
                        })
                    },
                    AdSkipped: function() {
                        t(i.toRemove), i.player.setControls(!0), i.sendEvent("skipped")
                    },
                    AdVideoFirstQuartile: function() {
                        i.handleQuartile(e, 1)
                    },
                    AdVideoMidpoint: function() {
                        i.handleQuartile(e, 2)
                    },
                    AdVideoThirdQuartile: function() {
                        i.handleQuartile(e, 3)
                    },
                    AdVideoComplete: function() {
                        i.sendEvent("complete")
                    },
                    AdUserClose: function() {
                        i.sendEvent("close")
                    },
                    AdClickThru: function(t, e, n) {
                        i.sendEvent("click", {
                            id: e,
                            url: t,
                            playerHandles: n
                        })
                    },
                    AdError: function(e, n) {
                        t(i.toRemove), i.sendEvent("error", {
                            message: e,
                            code: n
                        })
                    }
                }
            }, i.prototype.callback = function() {
                var t = this.vpaidAd = this.iframe.contentWindow.getVPAIDAd(),
                    e = this.player.getMute() ? 0 : this.player.getVolume() / 100,
                    i = t.handshakeVersion("2.0");
                if (parseFloat(i) < 1) throw new Error("Invalid vpaid version in handshake");
                this.listeners = this.genListeners(t), this._.each(this.listeners, t.subscribe, t);
                var n = "normal",
                    a = 1e3,
                    r = {
                        AdParameters: this.adParams
                    },
                    s = this.playerContainer.getElementsByClassName("jw-media")[0],
                    o = this.video = s.getElementsByTagName("video")[0],
                    d = this.iframe.contentWindow.document.createElement("div");
                d.className = "jw-vpaid-wrapper", d.style.height = "100%", this.iframe.contentWindow.document.body.appendChild(d), o ? o.removeAttribute("preload") : (o = this.video = document.createElement("video"), o.setAttribute("webkit-playsinline", ""), o.setAttribute("playsinline", ""), s.insertBefore(o, this.iframe), this.toRemove.push(o));
                var l = {
                    videoSlot: o,
                    slot: d
                };
                t.initAd(s.clientWidth, s.clientHeight, n, a, r, l), t.setAdVolume(e)
            }, i.prototype.play = function() {
                this.vpaidAd.resumeAd()
            }, i.prototype.pause = function() {
                this.vpaidAd.pauseAd()
            }, i.prototype.stop = function() {
                if (this.vpaidAd) try {
                    this.vpaidAd.stopAd()
                } catch (t) {
                    console.log("Unhandled exception from VPAID2 Creative stopAd", t)
                }
            }, i.prototype.setVolume = function(t) {
                this.vpaidAd.setAdVolume(t / 100)
            }, i.prototype.resize = function(t, e) {
                if (this.vpaidAd && this.vpaidAd.resizeAd) {
                    var i = this.player.getFullscreen() || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen,
                        n = i ? ie : ne;
                    this.vpaidAd.resizeAd(t || this.player.getWidth(), e || this.player.getHeight(), n)
                }
            }, i.prototype.destroy = function() {
                if (t(this.toRemove), this.removeEvents(), this.vpaidAd) try {
                    this._.each(this.listeners, this.vpaidAd.unsubscribe, this.vpaidAd), this.vpaidAd.unsubscribe(this.setMuteCallback, "AdVolumeChange")
                } catch (e) {
                    console.log("Unhandled exception from VPAID2 Creative", e)
                }
                this.blocking = null
            }, i.prototype.removeEvents = function() {
                this.player.off(null, null, this), this.off()
            }, i.prototype.attachMedia = function() {}, i.prototype.detachMedia = function() {}, i.prototype.volume = function() {}, i.prototype.mute = function() {}, i.prototype.getState = function() {
                return this.vpaidState.linear ? this.paused ? gt : Pt : At
            }, i
        }(),
        ue = jwplayer.utils,
        ce = jwplayer._,
        fe = [],
        me = function() {
            function t(e, n, a) {
                var r = this;
                le(this, t), this.map = e, this.debugTrackFn = n, this.trackerPlayerUtils = i(a), this.lastQuartile = 0, this.progressEvents = [], this.started = !1, this.firedError = !1, this.hasComp = !1, ce.map(e, function(t, i) {
                    if (e.hasOwnProperty(i) && 0 === i.indexOf("progress")) {
                        var n = "" + i.split("_")[1],
                            a = {
                                key: i,
                                offset: n,
                                tracked: !1,
                                percentage: !1
                            };
                        /^\d+%$/.test(n) ? (a.percentage = !0, a.offset = parseFloat(n)) : a.offset = ue.seconds(n), r.progressEvents.push(a)
                    }
                }), this.setFactories()
            }
            return t.prototype.getUrls = function(t) {
                return this.map.hasOwnProperty(t) ? this.map[t] : []
            }, t.prototype.addUrl = function(t, e) {
                this.map.hasOwnProperty(t) ? this.map[t].push(e) : (this.map[t] = [], this.map[t].push(e))
            }, t.prototype.trackPings = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = this.getUrls(t),
                    n = [],
                    a = [];
                e = this.replaceMacros(e), ce.map(i, function(t) {
                    if (t) {
                        ce.each(e, function(e, i) {
                            t = t.replace(i, e)
                        });
                        var i = new Image;
                        i.src = t, n.push(t), a.push(i)
                    }
                });
                for (var r = fe.length; r-- && (fe[r].width || fe[r].complete);) fe.length = r;
                Array.prototype.push.apply(fe, a), ce.isFunction(this.debugTrackFn) && this.debugTrackFn({
                    type: "ping",
                    data: {
                        pingType: t,
                        urls: n,
                        images: a
                    }
                })
            }, t.prototype.replaceMacros = function(t) {
                return t[pt] = encodeURIComponent(this.generateTimestamp()), t[lt] = Math.random().toString().slice(2, 10), t[ht] = encodeURIComponent(this.trackerPlayerUtils.getFile()), t[ut] = encodeURIComponent(this.convertPlayheadOffset(this.trackerPlayerUtils.getPosition())), t
            }, t.prototype.generateTimestamp = function() {
                var t = new Date,
                    e = t.getTime(),
                    i = t.getTimezoneOffset() / 60,
                    n = 6e4 * t.getTimezoneOffset(),
                    a = new Date(e - n),
                    r = a.toISOString().slice(0, -1) + (i > 0 ? "-" : "+") + ("0" + i).slice(-2);
                return r
            }, t.prototype.convertPlayheadOffset = function(t) {
                var e = ("0" + Math.floor(t / 3600)).slice(-2),
                    i = ("0" + Math.floor((t - 3600 * e) / 60)).slice(-2),
                    n = ("0" + Math.floor(t - 3600 * e - 60 * i)).slice(-2),
                    a = (t % 1).toFixed(3).toString().slice(2, 5),
                    r = e + ":" + i + ":" + n + "." + a;
                return r
            }, t.prototype.start = function() {
                this.started = !0, this.trackPings("start")
            }, t.prototype.breakStart = function() {
                this.started = !0, this.trackPings("breakStart")
            }, t.prototype.time = function(t, e) {
                if (!(e <= 1)) {
                    for (var i = (4 * t + .05) / e | 0; i > this.lastQuartile && this.lastQuartile < 3;) this.lastQuartile++, 1 === this.lastQuartile ? this.trackPings("firstQuartile") : 2 === this.lastQuartile ? this.trackPings("midpoint") : 3 === this.lastQuartile && this.trackPings("thirdQuartile");
                    this.trackProgress(t, e)
                }
            }, t.prototype.trackProgress = function(t, e) {
                for (var i = this.progressEvents.length; i--;) {
                    var n = this.progressEvents[i];
                    if (!n.tracked) {
                        var a = n.offset;
                        n.percentage && (a = e * a / 100), t >= a && (n.tracked = !0, this.trackPings(n.key))
                    }
                }
            }, t.prototype.error = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 900;
                this.firedError = !0;
                var e = {};
                e[dt] = t, this.trackPings("error", e)
            }, t.prototype.factory = function(t) {
                var e = this;
                return function() {
                    e.trackPings(t)
                }
            }, t.prototype.setFactories = function() {
                this.creativeView = this.factory("creativeView"), this.click = this.factory("click"), this.skip = this.factory("skip"), this.complete = this.factory("complete"), this.pause = this.factory("pause"), this.resume = this.factory("resume"), this.mute = this.factory("mute"), this.unmute = this.factory("unmute"), this.fullscreen = this.factory("fullscreen"), this.expand = this.factory("expand"), this.collapse = this.factory("collapse"), this.acceptInvitation = this.factory("acceptInvitation"), this.close = this.factory("close"), this.rewind = this.factory("rewind"), this.impression = this.factory("impression"), this.breakEnd = this.factory("breakEnd")
            }, t
        }(),
        ve = jwplayer._,
        ye = function() {
            function t(e, i, n, a, r, s) {
                le(this, t), this.player = i, this.utils = i.utils, this._ = i._, this.staticPlayer = n, this.companion = a, this.optionalParams = r, this.debugTrackFn = s, this.scheduledAd = e.scheduledAd(), this.vastBuffet = e.adBuffet(), this.vastAdPod = e.adPod(), this.vastAd = this.vastBuffet.length ? this.vastBuffet[0] : null, this.adType = null, this.vpaidPlayer = null, this.instreamPlayer = null, this.blockingInstreamPlayer = null, this.mediaType = null, this.adPodItems = null, this.creativeTimeout = null, this.vastOptions = null, this.duration = 0, this.adPodIndex = 0, this.initialIndex = 0, this.utils.extend(this, i.Events)
            }
            return t.prototype.init = function(t) {
                this.init = function() {
                    throw new Error("Adplayer can only be initialized once")
                }, this.blockingInstreamPlayer = t;
                var e = this.prepareAdPod();
                return !!e && (this.playAd(), this.player.on("fullscreen", this.playerFullscreenHandler, this), this.player.on("volume", this.playerVolumeHandler, this), this.player.on("mute", this.muteHandler, this), this.player.on("resize", this.playerResizeHandler, this), !0)
            }, t.prototype.getProviderType = function() {
                var t = this.player.getProvider();
                return 0 === t.name.indexOf("flash") ? "flash" : t.name
            }, t.prototype.flashSwf = function() {
                var t = this.player.getContainer();
                return t.querySelector("object")
            }, t.prototype.prepareAdPod = function() {
                var t = this,
                    e = null,
                    i = 0,
                    n = [],
                    a = this.getProviderType();
                if (this.vastAd && (h(this.vastAd, this.debugTrackFn, this.player), e = this.prepareAdPodItem(this.vastAd), e && "vpaid" === e.adType && !l(this.vastAd, a) && (e = null)), this.vastAdPod)
                    for (var r = null, s = 0; s < this.vastAdPod.length; s++) {
                        var o = this.vastAdPod[s];
                        h(o, this.debugTrackFn, this.player);
                        var d = this.prepareAdPodItem(o);
                        if (d) {
                            if (r !== d.adType && "instream" === r) break;
                            if (r = d.adType, "vpaid" !== d.adType || l(o, a)) {
                                var p = n.length + i === s;
                                d && p && n.push(d)
                            } else i++
                        } else i++
                    }
                if (!n.length && !e) return this.adError("No Compatible Creatives", 403), !1;
                var u = void 0;
                return n.length ? (u = n, this.vastOptions = [], this._.map(u, function(e) {
                    t.vastOptions.push(t.getInstreamOptions(e.vastAd))
                })) : (u = e, this.vastOptions = this.getInstreamOptions(this.vastAd)), this.adPodItems = u, this.adPodIndex = 0, !0
            }, t.prototype.prepareAdPodItem = function(t) {
                t.tracker.linear = "linear";
                var e = this.getProviderType(),
                    i = ("" + t.media[0].adType).toLowerCase() || "instream";
                "vpaid" !== i || l(t, e) || (i = "instream");
                var n = {
                    vastAd: t,
                    sources: [],
                    adType: i
                };
                this.scheduledAd.skipoffset && (n.skipoffset = this.scheduledAd.skipoffset);
                var a = t.media,
                    r = {};
                if (this._.map(a, function(t) {
                        n.sources.push({
                            file: t.file,
                            mimeType: t.type,
                            type: ("" + t.type).replace(/^(?:video|audio)\/(?:x-)?/, "")
                        }), r[t.file] = {
                            width: t.width || 0,
                            height: t.height || 0
                        }
                    }), "instream" === i && (n.sources = p(n.sources, e)), 0 === n.sources.length) return null;
                this.mediaType = ("" + n.sources[0].mimeType).toLowerCase(), n.vastAd.selectedMedia = n.sources[0];
                var s = this.player.getSafeRegion(!0),
                    o = null,
                    d = null;
                return this._.map(n.sources, function(t) {
                    var e = r[t.file];
                    e.width <= s.width && (!o || e.width > r[o.file].width) && (o = t), e.width >= s.width && (!d || e.width < r[d.file].width) && (d = t)
                }), o ? (n.vastAd.selectedMedia = o, o["default"] = !0) : d && (n.vastAd.selectedMedia = d, d["default"] = !0), n
            }, t.prototype.getInstreamOptions = function(t) {
                var e = this.optionalParams.skipoffset >= 0 ? this.optionalParams.skipoffset : null;
                return {
                    skipoffset: t.skipoffset || this.scheduledAd.skipoffset || e,
                    skipMessage: this.optionalParams.skipMessage,
                    skipText: this.optionalParams.skipText
                }
            }, t.prototype.getVastAd = function(t) {
                if (this.adPodItems) {
                    var e = void 0;
                    if (e = this.adPodItems.length ? this.adPodItems[t] : this.adPodItems, e.vastAd) return e.vastAd
                } else if (this.vastAdPod && this.vastAdPod.length) return this.vastAdPod[t];
                return this.vastAd
            }, t.prototype.adError = function(t, e, i) {
                clearTimeout(this.creativeTimeout);
                var r = this.getVastAd(this.adPodIndex);
                i = i || e ? 1e4 + e : null;
                var s = n(t, e, i);
                if (a(r, s), this.vastAdPod && this.adPodIndex < this.vastAdPod.length - 1) return void this.triggerEvent("adPodError", s);
                var o = r.tracker;
                o.error(s.code), r.wrappedTags && (s.wrappedTags = r.wrappedTags), this.addConditionalAdData(s), this.triggerEvent(St, s)
            }, t.prototype.playAd = function() {
                var t = this.adPodItems[this.adPodIndex] || this.adPodItems;
                if (this.adType = t.adType, "vpaid" === this.adType) this.playVpaid(t.vastAd);
                else if ("static" === this.adType) this.playStatic(), this.clearBlocking();
                else {
                    var e = this._.isArray(this.adPodItems) ? this.adPodItems.slice(this.adPodIndex) : this.adPodItems,
                        i = this._.isArray(this.vastOptions) ? this.vastOptions.slice(this.adPodIndex) : this.vastOptions;
                    this.initialIndex = this.adPodIndex, this.playInstream(e, i), this.clearBlocking()
                }
            }, t.prototype.clearVpaidBlocking = function() {
                if (this.vpaidPlayer.blocking) {
                    var t = this.vpaidPlayer.blocking;
                    this.vpaidPlayer.blocking = null, this.clearBlocking(t)
                }
            }, t.prototype.clearBlocking = function(t) {
                t = t || this.blockingInstreamPlayer, t && t !== this.instreamPlayer && t.destroy()
            }, t.prototype.getState = function() {
                return this.instreamPlayer ? this.instreamPlayer.getState() : this.vpaidPlayer ? this.vpaidPlayer.getState() : ""
            }, t.prototype.clearNonlinear = function() {
                this.staticPlayer.stop(), this.vpaidPlayer && (this.clearVpaidBlocking(), this.vpaidPlayer && (this.vpaidPlayer.stop(), this.vpaidPlayer.destroy(), this.vpaidPlayer = null))
            }, t.prototype.destroy = function() {
                this.off(), this.removePlayerListeners(), this.instreamPlayer && this.instreamPlayer.destroy(), this.vpaidPlayer && (this.clearVpaidBlocking(), this.vpaidPlayer && this.vpaidPlayer.destroy()), this.clearNonlinear(), this.vastLoader = null, this.player = null, this.vpaidPlayer = null, this.instreamPlayer = null, this.scheduledAd = null, this.vastBuffet = null, this.vastAd = null, this.vastAdPod = null
            }, t.prototype.pause = function() {
                this.instreamPlayer ? this.instreamPlayer.pause() : this.vpaidPlayer && this.vpaidPlayer.pause()
            }, t.prototype.play = function() {
                this.instreamPlayer ? this.instreamPlayer.play() : this.vpaidPlayer && this.vpaidPlayer.play()
            }, t.prototype.removePlayerListeners = function() {
                this.player && (this.player.off(Tt, this.playerFullscreenHandler, this), this.player.off(wt, this.playerVolumeHandler, this), this.player.off(Et, this.muteHandler, this)), this.instreamPlayer && this.instreamPlayer.off(), this.vpaidPlayer && (this.vpaidPlayer.removeEvents(), this.clearVpaidBlocking(), this.vpaidPlayer && this.vpaidPlayer.destroy()), this.staticPlayer.stop(), this.staticPlayer.removeEvents()
            }, t.prototype.adEventObject = function(t) {
                var e = this.scheduledAd._adQueue || {},
                    i = {
                        id: this.scheduledAd._id,
                        tag: this.scheduledAd._currentTag,
                        client: "vast",
                        witem: this.scheduledAd._waterfallIndex || 1,
                        wcount: e.length || 1,
                        viewable: this.player.getViewable()
                    };
                if (this.scheduledAd._adbreak && (i.adschedule = this.scheduledAd._adbreak, i.adschedule.offset = this.scheduledAd._offSet), this.adPodItems && this.adPodItems.length && (i.sequence = this.adPodIndex + 1, i.podcount = this.adPodItems.length), this.mediaType && (i.creativetype = this.mediaType), this.scheduledAd._vmap && (i.vmap = this.scheduledAd._vmap), de.indexOf(t) !== -1) {
                    var n = this.getVastAd(this.adPodIndex);
                    i.universalAdIdRegistry = n.universalAdIdRegistry, i.universalAdIdValue = n.universalAdIdValue, i.categories = n.categories
                }
                return i
            }, t.prototype.playStatic = function() {
                this.vastAd.tracker.linear = "nonlinear";
                var t = this.vastAd.media[0];
                this.vastAd.selectedMedia = t;
                var e = this.vastAd.clickthrough || "",
                    i = this.staticPlayer;
                i.removeEvents(), i.on("play", this.impressionHandler, this), i.on("play", this.playHandler, this), i.on("complete", this.combinedCompleteHandler, this), i.on("click", this.clickStaticHandler, this), i.on("error", this.staticErrorHandler, this), i.playAd(t.file, e, t.minDuration, this.scheduledAd._currentTag, this.scheduledAd.requestTimeout)
            }, t.prototype.creativeAdError = function(t, e, i) {
                this.adError(t, e, i), this.adPodItems && this.adPodItems.length - 1 > this.adPodIndex && (this.vpaidPlayer && this._.isFunction(this.vpaidPlayer.destroy) && this.vpaidPlayer.destroy(), this.adPodIndex++, this.playAd())
            }, t.prototype.playVpaid = function(t) {
                var e = this;
                clearTimeout(this.creativeTimeout), this.creativeTimeout = setTimeout(function() {
                    e.creativeAdError("VPAID tag communication timeout")
                }, this.scheduledAd.creativeTimeout), this.vastAd = t;
                var i = l(t, this.getProviderType()),
                    n = this.optionalParams.conditionaladoptout && t.conditionalAd;
                if (this.vastAd.selectedMedia = i, this.mediaType = i.type, "flash" === d(i)) {
                    var a = this.flashSwf();
                    this.vpaidPlayer = new he(this.player, a, i.file, this.scheduledAd._currentTag, this.vastAd.adParams, this.optionalParams.vpaidcontrols)
                } else this.vpaidPlayer = new pe(this.player, i.file, this.scheduledAd._currentTag, this.vastAd.adParams, this.optionalParams.vpaidcontrols, n);
                this.blockingInstreamPlayer && this.blockingInstreamPlayer.applyProviderListeners(this.vpaidPlayer), this.vpaidPlayer.blocking = this.blockingInstreamPlayer, this.vpaidPlayer.on("play", this.playHandler, this), this.vpaidPlayer.on("pause", this.pauseHandler, this), this.vpaidPlayer.on("quartile", this.quartileHandler, this), this.vpaidPlayer.on("remainingTimeChange", this.remainingTimeHandler, this), this.vpaidPlayer.on("click", this.clickVpaidHandler, this), this.vpaidPlayer.on("error", this.playbackErrorHandler, this), this.vpaidPlayer.on("impression", this.impressionHandler, this), this.vpaidPlayer.on("expandedChange", this.vpaidExpandedHandler, this), this.vpaidPlayer.on("close", this.adCloseHandler, this), this.vpaidPlayer.on("skipped", this.vpaidAdSkipped, this), this.vpaidPlayer.on("stopped", this.endOfVpaidAdHandler, this), this.vpaidPlayer.on("complete", this.adCompleteHandler, this), this.vpaidPlayer.on("started", this.adStartedHandler, this), this.setupSkipButton()
            }, t.prototype.setupSkipButton = function() {
                var t = this.optionalParams.skipoffset;
                t && this.blockingInstreamPlayer && (this.blockingInstreamPlayer.off(Ht, this.skipVpaidAd, this), this.blockingInstreamPlayer.setupSkipButton(t, this.optionalParams, this.utils.noop), this.blockingInstreamPlayer.on(Ht, this.skipVpaidAd, this))
            }, t.prototype.playInstream = function(t, e) {
                var i = this;
                clearTimeout(this.creativeTimeout), this.creativeTimeout = setTimeout(function() {
                    i.creativeAdError("VAST tag communication timeout")
                }, this.scheduledAd.creativeTimeout), this.blockingInstreamPlayer ? this.instreamPlayer = this.blockingInstreamPlayer : this.instreamPlayer = this.player.createInstream().init(), this.instreamPlayer.on("play", this.playHandler, this), this.instreamPlayer.on("pause", this.pauseHandler, this), this.instreamPlayer.on("time", this.timeHandler, this), this.instreamPlayer.on("playlistItem", this.playlistItemHandler, this), this.instreamPlayer.on("complete", this.adCompleteHandler, this), this.instreamPlayer.on("playlistComplete", this.endOfAdBreakHandler, this), this.instreamPlayer.on("mute", this.muteHandler, this), this.instreamPlayer.on("instreamClick", this.clickInstreamHandler, this), this.instreamPlayer.on("adSkipped", this.adSkipped, this), this.instreamPlayer.on("error", this.playbackErrorHandler, this), this.instreamPlayer.on("mediaError", this.playbackErrorHandler, this), this.instreamPlayer.loadItem(t, e)
            }, t.prototype.playerFullscreenHandler = function(t) {
                var e = this.getVastAd(this.adPodIndex),
                    i = e.tracker;
                t.fullscreen && i.started && i.fullscreen()
            }, t.prototype.playerResizeHandler = function(t) {
                this.vpaidPlayer && this.vpaidPlayer.resize(t.width, t.height)
            }, t.prototype.playerVolumeHandler = function(t) {
                this.vpaidPlayer && this.vpaidPlayer.setVolume(t.volume)
            }, t.prototype.playlistItemHandler = function(t) {
                this.instreamPlayer && (this.adPodIndex = t.index + this.initialIndex)
            }, t.prototype.impressionHandler = function(t) {
                var e = this.getVastAd(this.adPodIndex),
                    i = e.tracker;
                i.impression();
                var n = {};
                n.adposition = this.scheduledAd._position || "", n.adtitle = e.adTitle || "", n.adsystem = e.adsystem || "", n.wrapper = e.wrapper || "", n.vastversion = e.vastversion, n.clickThroughUrl = e.clickthrough, n.duration = e.duration || 0, n.mediafile = {
                    file: e.selectedMedia.file
                }, n.linear = t.linear || i.linear, this.addConditionalAdData(n), a(e, n), this.triggerEvent(xt, n)
            }, t.prototype.playHandler = function(t) {
                clearTimeout(this.creativeTimeout);
                var e = this.getVastAd(this.adPodIndex),
                    i = e.tracker,
                    n = void 0;
                if (i.started) t.oldstate === gt && (i.resume(), this.dispatchPlay(t));
                else {
                    this.vpaidPlayer && (i.linear = t.linear), this.instreamPlayer && this.impressionHandler({
                        linear: i.linear
                    });
                    var a = this.utils.extend({
                        linear: i.linear
                    }, this.getInstreamOptions(e));
                    a.message = this.optionalParams.dynamicMessage || "", a.clickthrough = e.clickthrough, a.sequence && (a.podMessage = this.optionalParams.podMessage || ""), e.adTitle && (a.title = e.adTitle), e.companions && (a.companions = e.companions), this.triggerEvent(Rt, a), e.companions && (n = {}, n.companions = r(e.companions), n.universalAdIdRegistry = e.companionUniversalAdIdRegistry, n.universalAdIdValue = e.companionUniversalAdIdValue, this.triggerEvent(Ct, n));
                    var o = this.companion,
                        d = void 0;
                    d = this.utils.flashVersion() > 9 ? e.companions : s(e.companions), this.optionalParams.companion && d && d.length && (i.hasComp = o.addCompanion(this.optionalParams.companion, d)), i.start(), i.creativeView(), this.dispatchPlay(t)
                }
            }, t.prototype.dispatchPlay = function(t) {
                if ("static" !== this.adType && ("vpaid" !== this.adType || "linear" === t.linear)) {
                    var e = t.oldstate,
                        i = t.newstate,
                        n = {};
                    n.oldstate = e, n.newstate = i, this.triggerEvent(Mt, n), this.vpaidPlayer && this.vpaidPlayer.trigger(vt, n)
                }
            }, t.prototype.pauseHandler = function(t) {
                var e = this.getVastAd(this.adPodIndex),
                    i = e.tracker;
                i.pause();
                var n = t.oldstate,
                    a = t.newstate,
                    r = {};
                r.oldstate = n, r.newstate = a, this.triggerEvent(Lt, r), this.vpaidPlayer && this.vpaidPlayer.trigger(vt, {
                    newstate: a,
                    oldstate: n
                })
            }, t.prototype.remainingTimeHandler = function(t) {
                t.duration ? this.duration = t.duration : this.duration = Math.max(1, this.duration, t.remainingTime);
                var e = t.remainingTime >= 0 ? this.duration - t.remainingTime : 0;
                this.timeHandler({
                    position: e,
                    duration: this.duration,
                    isDurationChange: t.isDurationChange
                })
            }, t.prototype.quartileHandler = function(t) {
                if (t.duration) this.duration = t.duration;
                else {
                    var e = 4 * t.remainingTime / (4 - t.quartile);
                    this.duration = Math.max(this.duration, 1, e)
                }
                this.timeHandler({
                    position: this.duration * t.quartile * .25,
                    duration: this.duration
                })
            }, t.prototype.timeHandler = function(t) {
                var e = this.getVastAd(this.adPodIndex),
                    i = t.position,
                    n = t.duration,
                    a = n - i,
                    r = e.tracker,
                    s = this.optionalParams.dynamicMessage || "",
                    o = this.optionalParams.podMessage || "";
                if (s && a > 0) {
                    if (s = s.replace(/xx/gi, "" + Math.ceil(a)), this.adPodItems && this.adPodItems.length > 1) {
                        var d = this.adPodIndex + 1;
                        o = o.replace(/__AD_POD_CURRENT__/g, "" + d), o = o.replace(/__AD_POD_LENGTH__/g, "" + this.adPodItems.length), s = o + s
                    }
                    this.instreamPlayer ? this.instreamPlayer.setText(s) : this.vpaidPlayer && this.vpaidPlayer.blocking && this.vpaidPlayer.blocking.setText(s)
                }
                if (!t.isDurationChange) {
                    r && r.time(i, n);
                    var l = {};
                    l.position = i, l.duration = n, this.triggerEvent(Dt, l)
                }
            }, t.prototype.combinedCompleteHandler = function() {
                this.adCompleteHandler(), this.endOfAdBreakHandler()
            }, t.prototype.adCompleteHandler = function() {
                var t = this.getVastAd(this.adPodIndex),
                    e = t.tracker;
                e.firedError || (e.complete(), this.triggerEvent(It))
            }, t.prototype.adCloseHandler = function() {
                var t = this.getVastAd(this.adPodIndex),
                    e = t.tracker;
                e.firedError || e.close()
            }, t.prototype.adStartedHandler = function() {
                this.triggerEvent(Ot)
            }, t.prototype.endOfVpaidAdHandler = function() {
                return this.adPodItems && this.adPodItems.length - 1 > this.adPodIndex ? (this.vpaidPlayer && this._.isFunction(this.vpaidPlayer.destroy) && this.vpaidPlayer.destroy(), this.vpaidPlayer = null, this.adPodIndex++, void this.playAd()) : void this.endOfAdBreakHandler()
            }, t.prototype.endOfAdBreakHandler = function() {
                this.removePlayerListeners(), this.trigger(It)
            }, t.prototype.muteHandler = function(t) {
                var e = this.getVastAd(this.adPodIndex),
                    i = e.tracker;
                i && (t.mute ? (i.mute(), this.vpaidPlayer && this.vpaidPlayer.setVolume(0)) : (i.unmute(), this.vpaidPlayer && this.vpaidPlayer.setVolume(this.player.getVolume() / 100)))
            }, t.prototype.clickStaticHandler = function() {
                var t = this.getVastAd(this.adPodIndex);
                this.player.pause(!0), this.clickThrough(t)
            }, t.prototype.clickVpaidHandler = function(t) {
                var e = this.getVastAd(this.adPodIndex),
                    i = !0;
                t && t.url && (t.playerHandles === !1 && (i = !1), e.clickthrough = t.url), this.clickThrough(e, i)
            }, t.prototype.clickInstreamHandler = function() {
                this.instreamPlayer.getState() !== gt && this.clickThrough(this.getVastAd(this.adPodIndex))
            }, t.prototype.clickThrough = function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                t.tracker.click(), this.triggerEvent(_t), window.jwcast && window.jwcast.player.id || t.clickthrough && e && window.open(t.clickthrough)
            }, t.prototype.skipVpaidAd = function() {
                this.endOfVpaidAdHandler(), this.vpaidAdSkipped()
            }, t.prototype.vpaidAdSkipped = function() {
                this.adSkipped(), this.endOfVpaidAdHandler()
            }, t.prototype.adSkipped = function() {
                this.getVastAd(this.adPodIndex).tracker.skip(), this.triggerEvent(Ht)
            }, t.prototype.playbackErrorHandler = function(t) {
                var e = t.message || "Error Playing Ad Tag",
                    i = t.code;
                (!i || i <= 4) && (i = 400), this.vpaidPlayer && this._.isFunction(this.vpaidPlayer.off) ? (this.vpaidPlayer.off(), this.creativeAdError(e, i)) : this.adError(e, i)
            }, t.prototype.staticErrorHandler = function() {
                this.adError("Unable to fetch NonLinear resource", 502)
            }, t.prototype.vpaidExpandedHandler = function(t) {
                var e = this.getVastAd(this.adPodIndex),
                    i = e.tracker;
                t.expanded ? i.expand() : i.collapse()
            }, t.prototype.triggerEvent = function(t, e) {
                var i = this.adEventObject(t);
                e && this.utils.extend(i, e), oe.indexOf(t) !== -1 ? this.trigger(t, i) : this.player.trigger(t, i)
            }, t.prototype.addConditionalAdData = function(t) {
                this.vastAd && (t.conditionalAd = this.vastAd.conditionalAd), this.vastAdPod && this.vastAdPod.length && (t.conditionalAd = this.vastAdPod[this.adPodIndex].conditionalAd), t.conditionalAdOptOut = this.optionalParams.conditionaladoptout
            }, t
        }(),
        ge = jwplayer.utils,
        Ae = jwplayer._,
        Pe = function() {
            function t(e, i) {
                le(this, t), this.debugTrackFn = e, this.div = null, this.elem = null, this.environment = i
            }
            return t.prototype.addCompanion = function(t, e) {
                if (this.div = t, this.elem = document.getElementById(this.div.id), !this.elem) return !1;
                for (var i = 0; i < e.length; i++)
                    if (this.fitsDiv(e[i])) return this.placeCompanion(e[i]), !0;
                return !1
            }, t.prototype.removeCompanion = function() {
                this.elem.innerHTML = ""
            }, t.prototype.sendPings = function(t) {
                t = t.creativeView, t && (Ae.map(t, function(t) {
                    var e = new Image;
                    e.src = t
                }), Ae.isFunction(this.debugTrackFn) && this.debugTrackFn({
                    type: "companion",
                    data: {
                        trackers: t
                    }
                }))
            }, t.prototype.placeCompanion = function(t) {
                if (this.removeCompanion(), "html" === t.type) {
                    var e = document.createElement("div");
                    e.innerHTML = t.source;
                    var i = e.getElementsByTagName("script");
                    return i.length && Ae.map(i, function(t) {
                        var e = new ge.scriptloader(t.src);
                        e.load(), t.parentElement.removeChild(t)
                    }), this.elem.appendChild(e), void this.sendPings(t.trackers)
                }
                if ("iframe" === t.type) {
                    var n = document.createElement("iframe");
                    return n.height = this.div.height, n.width = this.div.width, n.src = t.source, n.scrolling = "no", n.style.border = "none", n.marginWidth = 0, n.marginHeight = 0, this.sendPings(t.trackers), this.elem.innerHTML = "", void this.elem.appendChild(n)
                }
                if ("application/x-shockwave-flash" === t.type) {
                    if (this.environment.Browser.msie) this.elem.innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"\n                    width="100%" height="100%"\n                    id="' + this.elem.id + '" name="' + this.elem.id + '"\n                    tabindex=0">\n                    <param name="movie" value="' + t.source + '">\n                    <param name="allowfullscreen" value="true">\n                    <param name="allowscriptaccess" value="always">\n                    <param name="scale" value="exactfit">\n                    <param name="seamlesstabbing" value="true">\n                    <param name="wmode" value= "opaque">\n                </object>';
                    else {
                        var a = document.createElement("object");
                        a.setAttribute("type", "application/x-shockwave-flash"), a.setAttribute("data", t.source), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("tabindex", 0), u(a, "allowfullscreen", "true"), u(a, "allowscriptaccess", "always"), u(a, "seamlesstabbing", "true"), u(a, "wmode", "opaque"), this.elem.appendChild(a)
                    }
                    return void this.sendPings(t.trackers)
                }
                var r = new Image;
                r.src = t.source, ge.exists(t.clickthrough) && (r.onclick = function() {
                    var e = window.open(t.clickthrough, "_blank");
                    e.focus()
                }), this.elem.innerHTML = "", this.elem.appendChild(r), this.sendPings(t.trackers)
            }, t.prototype.fitsDiv = function(t) {
                return t.width === this.div.width && t.height === this.div.height
            }, t
        }(),
        ke = jwplayer.utils,
        Te = jwplayer._,
        we = function() {
            function t() {
                le(this, t), this.preRoll = null, this.vmap = null, this.postRoll = null, this.midRolls = [], this.playedMidRolls = []
            }
            return t.prototype.setPreRoll = function(t) {
                this.preRoll = t
            }, t.prototype.getPreRoll = function() {
                return f(this.preRoll, this.requestTimeout, this.creativeTimeout)
            }, t.prototype.getPostRoll = function() {
                return f(this.postRoll, this.requestTimeout, this.creativeTimeout)
            }, t.prototype.getNextMidRoll = function(t, e) {
                if (this.sort(e), this.midRolls.length > this.playedMidRolls.length) {
                    var i = this.getClosestIndex(t, e);
                    if (i >= 0 && this.playedMidRolls.indexOf(i) < 0) {
                        var n = this.midRolls[i];
                        return this.playedMidRolls.push(i), f(n, this.requestTimeout, this.creativeTimeout)
                    }
                }
                return null
            }, t.prototype.getMidRolls = function() {
                var t = [];
                return ke.foreach(this.midRolls, function(e, i) {
                    t.push(f(i))
                }), t
            }, t.prototype.reset = function() {
                this.playedMidRolls = []
            }, t.prototype.addMidRoll = function(t) {
                this.midRolls.push(t)
            }, t.prototype.setPostRoll = function(t) {
                this.postRoll = t
            }, t.prototype.sort = function(t, e) {
                (!t || t < 1) && (t = 1), this.midRolls.sort(function(e, i) {
                    return m(e._offSet, t) - m(i._offSet, t)
                }), c(this.getAllAds(), e)
            }, t.prototype.getAllAds = function() {
                var t = this.preRoll ? [this.preRoll] : [],
                    e = this.postRoll ? [this.postRoll] : [];
                return t.concat(this.midRolls, e)
            }, t.prototype.getAdScheduleEventObject = function() {
                var t = this.getAllAds(),
                    e = [],
                    i = {
                        tag: this.getVMAP(),
                        client: "vast",
                        adbreaks: []
                    };
                return Te.map(t, function(t) {
                    var i = {
                        type: t._type,
                        offset: t._offSet
                    };
                    t._vmap ? i.vmap = t._vmap : i.adbreak = t._adbreak, e.push(i)
                }), i.adbreaks = e, i
            }, t.prototype.setVMAP = function(t) {
                this.vmap = t
            }, t.prototype.isVMAP = function() {
                return !!this.vmap
            }, t.prototype.getVMAP = function() {
                return this.vmap
            }, t.prototype.getClosestIndex = function(t, e) {
                for (var i = this.midRolls.length; i--;)
                    if (t >= m(this.midRolls[i]._offSet, e)) return i;
                return -1
            }, t
        }(),
        Ee = jwplayer._,
        be = jwplayer.utils,
        _e = function() {
            function t() {
                le(this, t)
            }
            return t.prototype.getSchedule = function(t) {
                var e = new we;
                if (e.requestTimeout = g(t.requestTimeout, ft), e.creativeTimeout = g(t.creativeTimeout, mt), t.tag) e.setPreRoll({
                    _offSet: "pre",
                    _adQueue: v(t.tag),
                    _waterfallIndex: 0
                });
                else if (Ee.isString(t.vastxml)) e.setPreRoll({
                    _offSet: "pre",
                    _adXML: t.vastxml
                });
                else {
                    if (Ee.isString(t.schedule)) return e.setVMAP(t.schedule), e;
                    if (Ee.isString(t.adschedule)) return e.setVMAP(t.adschedule), e;
                    P(e, t)
                }
                return e.sort(), e
            }, t.prototype.getOptParams = function(t) {
                var e = {
                        cuetext: t.cuetext || at,
                        dynamicMessage: t.admessage || et,
                        podMessage: t.podmessage || it,
                        skipoffset: t.skipoffset || nt,
                        skipMessage: t.skipmessage || rt,
                        skipText: t.skiptext || st,
                        vpaidcontrols: t.vpaidcontrols || !1,
                        conditionaladoptout: t.conditionaladoptout || !1
                    },
                    i = t.companiondiv;
                return i && (e.companion = {
                    id: i.id,
                    height: i.height,
                    width: i.width
                }), e
            }, t
        }(),
        Ce = jwplayer.utils,
        Ie = Ce.UI,
        Se = document.createElement("img"),
        xe = document.createElement("img");
    Se.src = xe.src = 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#191919"/><line stroke="#CCC" stroke-width="6" x1="32" y1="20" x2="32" y2="44"/><line stroke="#CCC" stroke-width="6" x1="20" y1="32" x2="44" y2="32"/></svg>', Se.className = "jw-vast-nonlinear-open-button", xe.className = "jw-vast-nonlinear-close-button";
    var Ve = {
            cursor: "pointer",
            position: "absolute",
            margin: "auto",
            left: 0,
            right: 0,
            bottom: 0,
            display: "block"
        },
        Re = "opacity 0.2s",
        Le = {
            "-webkit-transition": Re,
            transition: Re
        },
        Me = function() {
            function t(e, i, n, a, r) {
                le(this, t), this.player = e, this.environment = e.getEnvironment(), this.div = a, this.staticURL = i, this.clickURL = n, this.loadTimer = -1, this.animationTimer = -1, this.banner = null, Ce.extend(this, e.Events), this.banner = document.createElement("img"), this.banner.className = "jw-banner", this.banner.id = this.player.id + "_vast_static", T([xe, Se]), this.remove(Se), this.div.appendChild(this.banner), this.div.appendChild(xe), this.loadTimer = setTimeout(this.imageLoadError.bind(this), r), this.banner.onerror = this.imageLoadError.bind(this), this.banner.onload = this.onLoaded.bind(this), this.banner.src = this.staticURL
            }
            return t.prototype.onLoaded = function() {
                return clearTimeout(this.loadTimer), 0 === this.banner.naturalWidth ? void this.imageLoadError() : (this.removeBannerEventListeners(), Ce.style(xe, {
                    top: -this.banner.height - 8,
                    bottom: this.banner.height - 8,
                    left: this.banner.width
                }, !0), Ce.style(Se, {
                    top: -16
                }, !0), k([this.div, this.banner]), k(xe, .75), new Ie(this.banner).on("click tap", this.sendClick.bind(this)), this.environment.OS.mobile && (this.div.onmouseover = w, this.div.onmouseout = E), xe.onclick = xe.ontouchstart = this.collapse.bind(this), Se.onclick = Se.ontouchstart = this.expand.bind(this), void this.trigger(Nt.PLAY))
            }, t.prototype.imageLoadError = function() {
                clearTimeout(this.loadTimer), this.trigger(Nt.ERROR), this.removeBanner()
            }, t.prototype.sendClick = function() {
                this.trigger(Nt.CLICK)
            }, t.prototype.collapse = function(t) {
                var e = this;
                this.animationTimer === -1 && (t.preventDefault(), this.div.onmouseover = this.div.onmouseout = null, T([this.banner, xe, Se]), this.div.appendChild(Se), this.animationTimer = setTimeout(function() {
                    e.remove(e.banner), e.remove(xe), k(Se, .5), e.div.onmouseover = b, e.div.onmouseout = _, e.animationTimer = -1
                }, 250))
            }, t.prototype.expand = function(t) {
                var e = this;
                this.animationTimer === -1 && (t.preventDefault(), this.div.onmouseover = this.div.onmouseout = null, this.div.appendChild(this.banner), this.div.appendChild(xe), this.animationTimer = setTimeout(function() {
                    k([e.banner, xe]), e.div.onmouseover = w, e.div.onmouseout = E, e.animationTimer = -1
                }, 50), T(Se))
            }, t.prototype.remove = function(t) {
                this.div.contains(t) && this.div.removeChild(t)
            }, t.prototype.removeBannerEventListeners = function() {
                this.banner.onload = this.banner.onerror = null
            }, t.prototype.removeBanner = function() {
                this.removeBannerEventListeners(), this.remove(this.banner)
            }, t.prototype.removeListeners = function() {
                clearTimeout(this.loadTimer), clearTimeout(this.animationTimer), this.div.onmouseover = this.div.onmouseout = xe.onclick = Se.onclick = null, this.off(), this.removeBannerEventListeners()
            }, t.prototype.stop = function() {
                T([this.div, this.banner, xe, Se]), setTimeout(this.removeBanner.bind(this), 400), this.remove(xe), this.remove(Se)
            }, t
        }(),
        He = function() {
            function t(e, i) {
                le(this, t), this.player = e, this.div = i, this.startTime = 0, this.minDur = 0, this.environment = e.getEnvironment(), Ce.extend(this, e.Events), this.type = "static", e.on("time", this.dispatchTime, this)
            }
            return t.prototype.playAd = function(t, e, i, n, a) {
                this.minDur = Ce.seconds(i), this.adTag = n, this["static"] && (this["static"].removeListeners(), this["static"].stop()), this.div.style.opacity = 0, this.div.style.visibility = "visible";
                var r = this.environment.Browser.firefox ? {} : Le;
                Ce.style(this.div, Ce.extend({
                    top: "",
                    position: "absolute",
                    width: "100%"
                }, r)), Ce.style([xe, Se], Ce.extend({
                    width: "18px",
                    height: "18px",
                    opacity: .75
                }, Ve, r)), Ce.style(xe, {
                    transform: "rotate(45deg)"
                }), this["static"] = new Me(this.player, t, e, this.div, a), this["static"].on(Nt.PLAY, this.startAd, this), this["static"].on(Nt.CLICK, this.clickHandler, this), this["static"].on(Nt.ERROR, this.errorHandler, this)
            }, t.prototype.dispatchTime = function(t) {
                this.trigger(ot, t)
            }, t.prototype.startAd = function() {
                this.startTime = this.player.getPosition(), this.minDur > 0 && (0 === this.startTime ? this.on(ot, this.startTimingAd, this) : this.on(ot, this.timeAd, this)), this.sendEvent(Nt.PLAY)
            }, t.prototype.startTimingAd = function(t) {
                this.startTime = t.position, this.off(ot, this.startTimingAd, this), this.on(ot, this.timeAd, this)
            }, t.prototype.timeAd = function(t) {
                var e = t.position - this.startTime;
                e > this.minDur && (this.off(ot, this.timeAd, this), this.stop())
            }, t.prototype.clickHandler = function() {
                this.sendEvent(Nt.CLICK)
            }, t.prototype.errorHandler = function() {
                this.sendEvent(Nt.ERROR)
            }, t.prototype.sendEvent = function(t, e) {
                e = e || {}, e.tag = e.tag || this.adTag, this.trigger(t, e)
            }, t.prototype.removeEvents = function() {
                this.off()
            }, t.prototype.getState = function() {
                return Pt
            }, t.prototype.stop = function() {
                this.startTime && this["static"] && (this.startTime = 0, this.minDur = 0, this.off(ot, this.startTimingAd, this), this.off(ot, this.timeAd, this), this["static"].removeListeners(), this["static"].stop(), this.sendEvent(Nt.COMPLETE))
            }, t.prototype.pause = function() {}, t
        }(),
        De = jwplayer.utils,
        Oe = jwplayer._,
        je = function() {
            function t(e) {
                le(this, t), this._parsedAds = [], this._error = null, this._version = null, e && this.parse(e)
            }
            return t.prototype.parsedAds = function() {
                return this._parsedAds
            }, t.prototype.error = function() {
                return this._error
            }, t.prototype.version = function() {
                return this._version
            }, t.prototype.parse = function(t) {
                var e = this,
                    i = void 0,
                    n = void 0,
                    a = [];
                "VAST" === t.nodeName ? i = t : (i = I(t, "VAST")[0], i || (i = I(t, "VideoAdServingTemplate")[0])), i || this.throwError(101, "Invalid VAST response"), n = "VideoAdServingTemplate" === i.tagName ? 1 : parseFloat(x(i, "version") || 0), this._version = n;
                var r = I(i, "Ad");
                Oe.map(r, function(t) {
                    var i = e.parseAd(n, t);
                    i.vastversion = n, a.push(i)
                }), this._parsedAds = a
            }, t.prototype.parseAd = function(t, e, i) {
                i = i || {};
                var n = I(e, "InLine")[0],
                    a = I(e, "Wrapper")[0],
                    r = n ? n : a,
                    s = r ? R(I(r, "AdTitle")[0]) : "",
                    o = void 0;
                return i.sequence = x(e, "sequence"), i.adTitle = s, (!t || t > 4 || t < 2) && this.throwError(102, "Vast version not supported"), 4 === t && (i.conditionalAd = !!x(e, "conditionalAd")), r ? (t >= 2 ? (o = D(r), M(r, "Impression", o.trackers), M(r, "Error", o.trackers)) : o = O(r), H(o), a && (o.wrappedURI = R(I(a, "VASTAdTagURI")[0]) || R(I(a, "VASTAdTagURL")[0])), o = F(i, o)) : 2 === t ? this.throwError(900, "Invalid VAST response", 60001) : this.throwError(101, "Invalid VAST response", 10101), o
            }, t.prototype.throwError = function(t, e, i) {
                var a = this;
                i = i || 1e4 + t;
                var r = n(e, t, i);
                throw r.toString = function() {
                    return a.code + " " + a.message
                }, this._error = r, this._error
            }, t
        }(),
        Ue = function() {
            function t(e, i, n) {
                le(this, t), this._scheduledAd = e, this.player = i, this.utils = i.utils, this._ = i._, this.options = n || {}, this.utils.extend(this, i.Events), this._history = [], this.loadedAds = [], this.parser = null, this.xmlhttp = null, this.errorSent = !1
            }
            return t.prototype.flashSwf = function() {
                var t = this.player.getContainer();
                return t.querySelector("object")
            }, t.prototype.genCallback = function(t, e) {
                var i = this.player.id + ":vast:" + e.name + ":" + Math.random().toString(16).substr(2);
                return t.on(i, e, this), i
            }, t.prototype.load = function(t) {
                this._history.push(t), this.errorSent = !1, this.xmlhttp = this.getXhrRequest(t)
            }, t.prototype.getXhrRequest = function(t) {
                var e = this,
                    i = function(i) {
                        e.ajaxComplete(i, t)
                    },
                    n = function(i, n) {
                        if (e.player) {
                            var s = e.flashSwf();
                            return s && "Invalid XML" !== i && "Timeout" !== i && e.utils.crossdomain(n) ? void s.triggerFlash("loadXml", n, e.genCallback(s, a), e.genCallback(s, r)) : void e.ajaxError(i, t)
                        }
                    },
                    a = function(i) {
                        e.parseXmlString(i, t)
                    },
                    r = function(i) {
                        e.utils.log(i), e.ajaxError(i, t)
                    };
                return this.utils.ajax(t, i, n, {
                    withCredentials: !0,
                    retryWithoutCredentials: !0,
                    requireValidXML: !0,
                    timeout: this._scheduledAd.requestTimeout
                })
            }, t.prototype.destroy = function() {
                B(this.xmlhttp), this.player = null
            }, t.prototype.scheduledAd = function() {
                return this._scheduledAd
            }, t.prototype.allAds = function() {
                return this.loadedAds
            }, t.prototype.adPod = function() {
                var t = [];
                return this.utils.foreach(this.loadedAds, function(e, i) {
                    i.sequence && t.push(i)
                }), t.sort(function(t, e) {
                    return t.sequence - e.sequence
                }), t
            }, t.prototype.adBuffet = function() {
                var t = [];
                return this.utils.foreach(this.loadedAds, function(e, i) {
                    i.sequence || t.push(i)
                }), t
            }, t.prototype.history = function() {
                return this._history
            }, t.prototype.parseXmlString = function(t, e) {
                this.ajaxComplete({
                    responseXML: W(t, this.utils)
                }, e)
            }, t.prototype.ajaxComplete = function(e, i) {
                var n = this;
                this.parser = this.parser || new je;
                try {
                    this.parser.parse(e.responseXML)
                } catch (a) {
                    var r = a.code || 900,
                        s = a.adErrorCode || 1e4 + r;
                    return void this.sendErrorEvent(a.message, r, s, i)
                }
                var o = this.parser.parsedAds();
                if (o && o.length) this.loadedAds = o, this.options.wrapper = this.options.wrapper || [], this.options.wrapper.push(this.loadedAds[0].adsystem), this.utils.foreach(this.loadedAds, function(e, i) {
                    if (i.wrappedURI) {
                        n.options.wrappedTags = n.options.wrappedTags || [], n.options.wrappedTags.push(i.wrappedURI);
                        var a = new t(n._scheduledAd, n.player, n.options);
                        a.on(kt, function() {
                            n.replaceWrappedAd(i, a.allAds())
                        }), a.on(bt, function(t) {
                            n.sendAdpodErrorEvent(t.message, t.code, t.adErrorCode, t.url), n.destroyWrappedAd(i, a)
                        }), a.load(i.wrappedURI)
                    } else n.options.wrapper.length > 1 && (i.wrapper = n.options.wrapper.slice(0, -1), i.wrappedTags = n.options.wrappedTags)
                }), this.checkComplete();
                else {
                    var d = 2 === this.parser.version(),
                        l = d ? 900 : 101,
                        h = d ? 60001 : 10101;
                    this.sendErrorEvent("Ad Tag Empty", l, h, i)
                }
            }, t.prototype.destroyWrappedAd = function(t, e) {
                var i = this._.indexOf(this.loadedAds, t);
                this.loadedAds.splice(i, 1), e.destroy(), this.checkComplete()
            }, t.prototype.replaceWrappedAd = function(t, e) {
                var i = q(t, e, this.utils),
                    n = this._.indexOf(this.loadedAds, t);
                Array.prototype.splice.apply(this.loadedAds, [n, 1].concat(i)), this.checkComplete()
            }, t.prototype.checkComplete = function() {
                var t = !1;
                this.utils.foreach(this.loadedAds, function(e, i) {
                    i.wrappedURI && (t = !0)
                }), t || this.validateVast()
            }, t.prototype.validateVast = function() {
                var t = this.loadedAds.slice(0),
                    e = t.length;
                this._.map(t, function(e) {
                    e.media && e.media.length || t.length--
                });
                var i = 0 === e,
                    n = t.length !== e;
                return i || n ? void this.sendErrorEvent("Ad Tag Empty", 101, 10101, this._history[this._history.length - 1]) : void this.trigger(kt, {
                    vloader: this
                })
            }, t.prototype.ajaxError = function(t, e) {
                "Invalid XML" === t ? this.sendErrorEvent(t, 100, 10100, e) : this.sendErrorEvent("VAST could not be loaded", 301, 10301, e)
            }, t.prototype.firstUrl = function() {
                return this._history && this._history.length ? this._history[0] : ""
            }, t.prototype.sendAdpodErrorEvent = function(t, e, i, a) {
                if (1 === this.loadedAds.length) return void this.sendErrorEvent(t, e, i, a);
                var r = n(t, e, i);
                r.vloader = this, r.url = this.firstUrl() || a, this.wrappedUrl = a, this.trigger("adPodError", r)
            }, t.prototype.sendErrorEvent = function(t, e, i, a) {
                if (!this.errorSent) {
                    this.errorSent = !0;
                    var r = n(t, e, i);
                    r.vloader = this, r.url = this.firstUrl() || a, r.wrappedUrl = a, this.trigger(bt, r)
                }
            }, t
        }(),
        Ne = {},
        Fe = function(t, e) {
            var i = this,
                n = Ne[e];
            return n ? n : (function(t, e) {
                t.jwplayerEntitlements = e()
            }(this, function() {
                return function(t, e, i) {
                    var n = {
                            canPlayAds: !0
                        },
                        a = new t.key(e),
                        r = a.edition();
                    if ("unlimited" === r) return i(n);
                    var s = a.token(),
                        o = ["//", "player.vidad.net/7.9.1/all.json"];
                    "file:" === window.location.protocol && o.unshift("https:"), t.ajax(o.join(""), function(t) {
                        n.canPlayAds = !t || !t.response || t.response.canPlayAds !== !1, i(n)
                    }, function() {
                        i(n)
                    }, {
                        timeout: 1e4,
                        responseType: "json"
                    })
                }
            }), Ne[e] = new Promise(function(n, a) {
                i.jwplayerEntitlements(t, e, function(t) {
                    return t.canPlayAds ? void n() : void a({
                        message: "Ad Limit Reached"
                    })
                })
            }))
        },
        Be = /^((https?:)?\/\/)?(secure)?pubads\.g\.doubleclick\.net\/gampad\/ads\?[\S]*$/,
        qe = /^((https?:)?\/\/)?bid\.g\.doubleclick\.net\/dbm\/vast\?[\S]*$/,
        Qe = /^((https?:)?\/\/)?ad\.doubleclick\.net(\/ddm)?\/pfadx\/[\S]*$/,
        We = function(t, e, i) {
            function a(e) {
                if (e) {
                    _t && (I(_t), _t = null);
                    var i = function(i) {
                            _t = null;
                            try {
                                C(i.responseXML, Ct), t.trigger("adSchedule", Ct.getAdScheduleEventObject())
                            } catch (a) {
                                var r = n("Error parsing VMAP", 1002, 11002);
                                return r.id = tt, r.vmap = e, void B(r)
                            }
                            if (rt && (Q(Ct), Et)) {
                                var s = l({
                                    type: Vt
                                });
                                s && U()
                            }
                        },
                        a = function(t) {
                            _t = null, X.log(t), Et && U();
                            var i = n("Error Loading VMAP Schedule", "Timeout" === t ? 1007 : 1008, "Timeout" === t ? 11007 : 11008);
                            i.id = tt, i.vmap = e, B(i)
                        };
                    _t = X.ajax(e, i, a, {
                        withCredentials: !0,
                        retryWithoutCredentials: !0,
                        requireValidXML: !0,
                        timeout: Ct.requestTimeout
                    })
                }
            }

            function r() {
                rt = !0, Tt = new He(t, i), wt = new Pe(it, G), at = Rt.getOptParams(e)
            }

            function s(t) {
                ut = !!t.active
            }

            function o(t) {
                nt.trigger(Pt, t)
            }

            function d() {
                var e = t.getConfig().mediaElement,
                    i = "pre" === st || t.isBeforePlay() || 0 === t.getPosition(),
                    n = G.Browser.safari && G.Browser.version.major >= 11 || G.OS.mobile && !et && !!e.src,
                    a = i && n;
                a && e.load(), y()
            }

            function l(t) {
                if (ut) return !1;
                var e = Ct.getPreRoll();
                return _t ? (d(t), !1) : !(!ot && e) || (At = u(e), c(e, t), !1)
            }

            function h(t) {
                if (!ut) {
                    var e = Ct.getNextMidRoll(t.position, t.duration);
                    e && (At = u(e), f(e, t))
                }
            }

            function p(t) {
                if (!ut) {
                    var e = Ct.getPostRoll();
                    !dt && e && (At = u(e), m(e, t))
                }
            }

            function u(e) {
                return e._trackers ? new me(e._trackers, it, t) : null
            }

            function c(t, e) {
                t._position = "pre", ot = !0, t._id = T(12), v(t, e)
            }

            function f(t, e) {
                t._position = "mid", t._id = T(12), v(t, e)
            }

            function m(e, i) {
                e._position = "post", dt = !0, t.detachMedia(), e._id = T(12), v(e, i)
            }

            function v(t, e) {
                st = t._position, clearTimeout(yt), yt = -1, "nonlinear" !== t._type && (Et || d(e)), t._adXML ? (t._currentTag = t._currentTag || "clientloadedtag_" + lt++, k(t)) : t._adQueue ? P(t) : (X.log("scheduled ad has no url or xml", t),
                    U())
            }

            function y() {
                nt.off(Pt, y), Et = t.createInstream().init(), nt.trigger("blockingStarted")
            }

            function g(e) {
                var i = Ct;
                A(e), Ct.isVMAP() ? i !== Ct && a(z(Ct.getVMAP(), t, q(), at)) : t.trigger("adSchedule", Ct.getAdScheduleEventObject())
            }

            function A(e) {
                var i = t.getPlaylistItem(e.index);
                Ct = Y.isObject(i) && i.adschedule ? Rt.getSchedule(i) : Lt, L(), M(), j(), dt = !1, ot = !1, Q(Ct), Ct.reset()
            }

            function P(e) {
                ct = e;
                var i = e._waterfallIndex || 0,
                    n = e._adQueue[i],
                    a = z(n, t, q(), at);
                e._waterfallIndex = i + 1, e._currentTag = a, Y.isFunction(it) && it({
                    type: "tagReplacement",
                    data: {
                        actualTag: a,
                        originalTag: n
                    }
                }), w(e, a), b(e).load(a)
            }

            function k(t) {
                t._currentTag = t._currentTag || t._adXML.toString(), w(t, t._currentTag), b(t).parseXmlString(t._adXML)
            }

            function T(t) {
                return new Array(t + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, t)
            }

            function w(e, i) {
                t.trigger("adRequest", E(e, i)), nt._qoe.tick("adLoading" + e._id)
            }

            function E(t, e) {
                var i = t._adQueue || {},
                    n = {},
                    a = t.adbreakid,
                    r = t._adTagQueue,
                    s = t.skipoffset;
                if (a && (n.adbreakid = a), r) {
                    var o = t._waterfallIndex - 1;
                    o = o < 0 ? 0 : o, n.adtagid = r[o]
                }
                return Y.isUndefined(s) || (n.skipoffset = s), Y.extend(n, {
                    id: t._id,
                    tag: e || t._currentTag,
                    client: "vast",
                    adposition: t._position,
                    offset: t._offSet,
                    witem: t._waterfallIndex || 1,
                    wcount: i.length || 1
                })
            }

            function b(e) {
                var i = new Ue(e, t);
                return i.on(kt, x), i.on(bt, F), i.on("adPodError", N), ht.push(i), At && !At.started && At.breakStart(), i
            }

            function _(t) {
                for (var e = ht.length; e--;) ht[e] === t && (ht.splice(e, 1), t.destroy())
            }

            function I(t) {
                t.onload = null, t.onreadystatechange = null, t.onerror = null, "abort" in t && t.abort()
            }

            function S() {
                _t && (I(_t), _t = null), L(), M(), j(), t.setCues([])
            }

            function x(t) {
                var e = t.vloader.scheduledAd();
                Et || "nonlinear" === e._type ? V(t) : (nt.off("blockingStarted"), nt.once("blockingStarted", function() {
                    V(t)
                }))
            }

            function V(e) {
                var i = e.vloader;
                clearTimeout(yt), yt = -1, ct.isWaterfalling || j(), _(i);
                var n = new ye(i, t, Tt, wt, at, it);
                n.on(St, H), n.on(xt, D), n.on("adPodError", B);
                var a = n.init(Et);
                return a ? (gt = Et, Et = null, nt.off("blockingStarted"), nt.off(Pt, y), gt && gt.on("adBreakEnd", function() {
                    At && At.breakEnd()
                }), n.on(It, O), void pt.push(n)) : void n.destroy()
            }

            function R() {
                j(), dt = !1, ot = !1
            }

            function L() {
                for (var t = ht.length; t--;) {
                    var e = ht[t];
                    ht.length--, e.destroy()
                }
            }

            function M() {
                nt.off(Pt, y);
                for (var t = pt.length; t--;) {
                    var e = pt[t];
                    pt.length--, e.destroy()
                }
            }

            function H(e) {
                if (vt = !1, B(e), !vt && J(ct)) {
                    Et = Et || gt;
                    var i = Y.extend({}, ct);
                    return i._offset = 0, i.isWaterfalling = !0, void v(i)
                }
                M(), vt = !1, yt = setTimeout(function() {
                    yt = -1, 0 === ht.length && ("post" === st && t.attachMedia(), U())
                }, 0)
            }

            function D(e) {
                if (ct = {}, "pre" === e.adposition && (void 0 === e.podcount || 1 === e.sequence)) {
                    nt._qoe.tick("adImpression" + e.id);
                    var i = nt._qoe.between("adLoading" + e.id, "adImpression" + e.id);
                    e.timeLoading = i
                }
                t.trigger(xt, e)
            }

            function O() {
                0 === ht.length && "post" === st && t.attachMedia()
            }

            function j() {
                if (pt.length) {
                    var t = pt[pt.length - 1];
                    t.clearNonlinear()
                }
            }

            function U() {
                if (Et) {
                    var t = Et;
                    Et = null, t.destroy(), nt.off("blockingStarted"), nt.off(Pt, y)
                }
                gt = null
            }

            function N(t) {
                var e = t.vloader,
                    i = E(e.scheduledAd(), t.url),
                    a = n(t.message, t.code, t.adErrorCode);
                X.extend(i, a), t.wrappedUrl !== t.url && (i.wrappedTag = t.wrappedUrl), vt = !1, B(i)
            }

            function F(e) {
                var i = e.vloader,
                    n = i.allAds();
                if (_(i), n && n.length) {
                    var a = n[0];
                    if (a) {
                        var r = a.trackers;
                        if (r && r.error) {
                            var s = new me(r, it, t);
                            s.error(e.code)
                        }
                    }
                }
                if (N(e), !vt && J(ct)) {
                    var o = Y.extend({}, ct);
                    return o._offset = 0, o.isWaterfalling = !0, void v(o)
                }
                M(), vt = !1, yt === -1 && (yt = setTimeout(function() {
                    yt = -1, 0 === ht.length && U()
                }, 0))
            }

            function B(e) {
                X.extend(e, {
                    client: "vast"
                }), At && At.error(e.code), t.trigger(St, e)
            }

            function q() {
                var t = window.location.href;
                return t = t.match(new RegExp(/^[^\/]*:\/\/\/?([^\/]*)/)), t && t.length > 1 ? t[1] : ""
            }

            function Q(e) {
                var i = e.getMidRolls(),
                    n = [];
                i.length && X.foreach(i, function(t, e) {
                    "nonlinear" !== e._type && n.push({
                        begin: e._offSet,
                        text: at.cuetext
                    })
                }), t.setCues(n)
            }
            var W = this,
                X = t.utils,
                G = t.getEnvironment(),
                K = t.getConfig().key,
                Y = t._,
                $ = t.getConfig(),
                et = !!$.sdkplatform,
                it = e.debug && e.trackFn ? e.trackFn : null,
                nt = this,
                at = {},
                rt = !1,
                st = "",
                ot = !1,
                dt = !1,
                lt = 0,
                ht = [],
                pt = [],
                ut = !1,
                ct = {},
                vt = !1,
                yt = -1,
                gt = void 0,
                At = void 0,
                Tt = void 0,
                wt = void 0,
                Et = void 0,
                _t = void 0,
                Ct = void 0,
                Rt = new _e;
            this.version = "8.0.1", nt._qoe = new jwplayer.utils.Timer;
            var Lt = Ct = Rt.getSchedule(e);
            Ct.isVMAP() && a(z(Ct.getVMAP(), t, q(), at)), X.extend(this, t.Events), X.addClass(i, "jw-plugin-vast"), t.on("destroyPlugin", function() {
                S()
            }), t.on({
                ready: r,
                beforePlay: l,
                cast: s,
                play: o,
                time: h,
                beforeComplete: p,
                playlistItem: g,
                playlistComplete: A,
                complete: R
            }, this), t.pauseAd = function(t) {
                if (t = !Y.isBoolean(t) || t, pt.length) {
                    var e = pt[pt.length - 1];
                    t ? e.pause() : e.play()
                }
            }, t.playAd = function(t) {
                vt = !0, j();
                var e = void 0,
                    i = 0 === at.requestTimeout ? 1 / 0 : at.requestTimeout,
                    n = 0 === at.creativeTimeout ? 1 / 0 : at.creativeTimeout;
                e = Y.isArray(t) ? t.slice(0) : [t];
                var a = {
                    _id: T(12),
                    _adQueue: e,
                    _waterfallIndex: 0,
                    _offset: 0,
                    _position: "api",
                    requestTimeout: i || ft,
                    creativeTimeout: n || mt
                };
                v(a)
            }, Fe.call(this, X, K)["catch"](function(e) {
                S(), t.off(null, null, W), t.playAd = X.noop;
                var i = n("Ad Error: " + e.message, null, 60002);
                i.code = void 0, i.id = tt, i.client = Z, i.tag = "", t.trigger(St, i)
            }), this.destroy = S
        },
        Xe = window.jwplayerPluginJsonp || window.jwplayer().registerPlugin;
    Xe(Z, "8.0", We)
}();