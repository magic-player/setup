jwplayer.vast = {},
    function(a) {
        function b(b) {
            var c;
            return a.utils.foreach(b, function(a, b) {
                c = c || {}, "_adQueue" === a ? c[a] = b.slice() : c[a] = b
            }), c
        }

        function c(a, b) {
            return "%" === a.toString().slice(-1) ? b * parseFloat(a.slice(0, -1)) / 100 : parseFloat(a)
        }
        a.vast.schedule = function() {
            function d(a, b) {
                for (var d = h.length; d--;)
                    if (a >= c(h[d]._offSet, b)) return d;
                return -1
            }
            var e, f, g, h = [],
                i = [];
            this.setPreRoll = function(a) {
                e = a
            }, this.getPreRoll = function() {
                return b(e)
            }, this.getPostRoll = function() {
                return b(g)
            }, this.getNextMidRoll = function(a, c) {
                if (this.sort(c), h.length > i.length) {
                    var e = d(a, c);
                    if (e >= 0 && i.indexOf(e) < 0) {
                        var f = h[e];
                        return i.push(e), b(f)
                    }
                }
            }, this.getMidRolls = function() {
                var c = [];
                return a.utils.foreach(h, function(a, d) {
                    c.push(b(d))
                }), c
            }, this.reset = function() {
                i = []
            }, this.addMidRoll = function(a) {
                h.push(a)
            }, this.setPostRoll = function(a) {
                g = a
            }, this.sort = function(a) {
                (!a || a < 1) && (a = 1), h.sort(function(b, d) {
                    return c(b._offSet, a) - c(d._offSet, a)
                })
            }, this.setVMAP = function(a) {
                f = a
            }, this.isVMAP = function() {
                return !!f
            }, this.getVMAP = function() {
                return f
            }
        }
    }(jwplayer),
    function(a) {
        function b(a) {
            return h.isString(a) ? [a] : h.isArray(a) ? a.slice(0) : a
        }

        function c(a) {
            if ("start" === a || "0%" === a) return "pre";
            if ("end" === a || "100%" === a) return "post";
            if ("pre" === a || "post" === a || h.indexOf(a, "%") > -1) return a;
            var b = g.seconds(a);
            return !!h.isNumber(b) && b
        }

        function d(a, d) {
            var e = d.schedule || d.adschedule;
            h.each(e, function(e) {
                e.ad && (g.extend(e, e.ad), delete e.ad);
                var f = c(e.offset),
                    i = {
                        _offSet: f,
                        _type: e.type
                    };
                f === !1 && g.log("Error: ad offset format not supported", f);
                var j = e.skipoffset || d.skipoffset;
                h.isUndefined(j) || (i.skipoffset = j);
                var k = e.adbreakid;
                k && (i.adbreakid = k);
                var l = e.adtagid;
                if (l && (i._adTagQueue = b(l)), e.tag) i._adQueue = b(e.tag), i._waterfallIndex = 0;
                else {
                    if (!h.isString(e.vastxml)) return void g.log("Error: no ad tag provided");
                    i._adXML = e.vastxml
                }
                switch (f) {
                    case "pre":
                        a.setPreRoll(i);
                        break;
                    case "post":
                        a.setPostRoll(i);
                        break;
                    default:
                        a.addMidRoll(i)
                }
            })
        }

        function e(c) {
            var e = new a.vast.schedule;
            if (c.tag) e.setPreRoll({
                _offSet: "pre",
                _adQueue: b(c.tag),
                _waterfallIndex: 0
            });
            else if (h.isString(c.vastxml)) e.setPreRoll({
                _offSet: "pre",
                _adXML: c.vastxml
            });
            else {
                if (h.isString(c.schedule)) return e.setVMAP(c.schedule), e;
                if (h.isString(c.adschedule)) return e.setVMAP(c.adschedule), e;
                d(e, c)
            }
            return e.sort(), e
        }

        function f(a) {
            var b = {
                    cuetext: a.cuetext || l,
                    dynamicMessage: a.admessage || i,
                    podMessage: a.podmessage || j,
                    skipoffset: a.skipoffset || k,
                    skipMessage: a.skipmessage || m,
                    skipText: a.skiptext || n,
                    vpaidcontrols: a.vpaidcontrols || !1
                },
                c = a.companiondiv;
            return c && (b.companion = {
                id: c.id,
                height: c.height,
                width: c.width
            }), b
        }
        var g = a.utils,
            h = a._,
            i = "This ad will end in xx seconds.",
            j = "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__. ",
            k = -1,
            l = "Advertisement",
            m = "Skip ad in xx",
            n = "Skip";
        a.vast.configparser = {
            getSchedule: e,
            getOptParams: f
        }
    }(jwplayer),
    function(a) {
        function b(a, b, c) {
            return a.replace(b, c)
        }

        function c(a) {
            var b = a.getConfig();
            return {
                playerHeight: a.getHeight() || b.height || "",
                playerWidth: a.getWidth() || b.width || "",
                itemDuration: d(a.getDuration(), 3) || "",
                item: b.playlist[a.getPlaylistIndex()] || {}
            }
        }

        function d(a, b) {
            var c = Math.pow(10, b);
            return Math.round(a * c) / c
        }
        a.vast.doReplacement = function(d, e, f, g) {
            if (!d) return d;
            var h = c(e),
                i = h.item,
                j = window.location.href;
            d = b(d, "__random-number__", Math.random() * Math.pow(10, 18)), d = b(d, "__timestamp__", (new Date).getTime()), d = b(d, "__page-url__", encodeURIComponent(j)), d = b(d, "__referrer__", encodeURIComponent(document.referrer)), d = b(d, "__player-height__", h.playerHeight), d = b(d, "__player-width__", h.playerWidth), d = b(d, "__item-duration__", h.itemDuration), d = b(d, "__domain__", encodeURIComponent(f)), d = g.companion ? b(d, "__companion-div__", g.companion.id) : b(d, "__companion-div__", "");
            for (var k = d.match(new RegExp(/__item-[a-z 0-9 A-Z]*__/g)), l = 0; k && l < k.length; l++) {
                var m = k[l],
                    n = m.substring(7, m.length - 2);
                if (i.hasOwnProperty(n) && a._.isString(i[n])) {
                    var o = i[n];
                    o.length > 1e3 && (o = o.substring(0, 1e3)), d = b(d, m, encodeURIComponent(o))
                } else d = b(d, m, "")
            }
            return d
        }
    }(window.jwplayer),
    function(a) {
        function b(a, b, c) {
            var d = [];
            return a && (d = a.getElementsByTagName(b), c && d && 0 === d.length && (d = a.getElementsByTagName(c + ":" + b))), d
        }

        function c(a, b) {
            return a ? a.getAttribute(b) : null
        }

        function d(a) {
            if (a) {
                var b = a.textContent || a.text;
                if (b) return g.trim(b)
            }
            return ""
        }

        function e(a, b) {
            var e = c(b, "event");
            if ("progress" === e) {
                var g = c(b, "offset");
                e = e + "_" + g
            }
            var h = d(b);
            f(a, e, h)
        }

        function f(a, b, c) {
            a[b] || (a[b] = []), c && a[b].push(c)
        }
        var g = a.utils,
            h = "vmap";
        a.vast.vmapparser = function(a, f) {
            for (var i = b(a, "AdBreak", h), j = 0; j < i.length; j++) {
                var k = {},
                    l = {},
                    m = i[j],
                    n = c(m, "timeOffset"),
                    o = c(m, "breakType"),
                    p = b(m, "AdTagURI", h)[0],
                    q = b(m, "VASTData", h)[0] || b(m, "VASTAdData", h)[0],
                    r = c(p, "templateType"),
                    s = d(p),
                    t = b(m, "Tracking", h);
                if (k._type = o, q) k._adXML = b(q, "VAST")[0];
                else {
                    if ("vast1" != r && "vast2" != r && "vast3" != r) continue;
                    k._adQueue = [s], k._waterfallIndex = 0
                }
                if (t)
                    for (var u = 0; u < t.length; u++) e(l, t[u]);
                switch (k._trackers = l, k._type = o, n) {
                    case "start":
                        k._offSet = "pre", f.setPreRoll(k);
                        break;
                    case "100%":
                    case "end":
                        k._offSet = "post", f.setPostRoll(k);
                        break;
                    default:
                        if (/^#/.test(n)) break;
                        /^\d\d?(?:\.\d+)?%$/.test(n) ? k._offSet = n : k._offSet = g.seconds(n), f.addMidRoll(k)
                }
            }
            f.sort()
        }, a.vast.vparser = function(a) {
            function h(a) {
                var d, e, f, g = [];
                "VAST" === a.nodeName ? d = a : (d = b(a, "VAST")[0], d || (d = b(a, "VideoAdServingTemplate")[0])), d || k(101, "Invalid VAST response"), e = "VideoAdServingTemplate" === d.tagName ? 1 : parseFloat(c(d, "version") || 0), f = b(d, "Ad");
                for (var h = 0; h < f.length; h++) {
                    var j = i(e, f[h]);
                    j.vastversion = e, g.push(j)
                }
                r = g
            }

            function i(a, e, f) {
                f = f || {};
                var g, h = b(e, "InLine")[0],
                    i = b(e, "Wrapper")[0],
                    o = h ? h : i,
                    p = o ? d(b(o, "AdTitle")[0]) : "";
                return f.sequence = c(e, "sequence"), f.adTitle = p, (!a || a > 3 || a < 1) && k(102, "Vast version not supported"), o ? (a >= 2 ? (g = m(o), l(o, "Impression", g.trackers), l(o, "Error", g.trackers)) : g = n(o), i && (g.wrappedURI = d(b(i, "VASTAdTagURI")[0]) || d(b(i, "VASTAdTagURL")[0])), g = j(f, g)) : k(101, "Invalid VAST response"), g
            }

            function j(a, b) {
                var c = g.extend({}, a);
                return g.foreach(b, function(a, d) {
                    g.exists(c[a]) ? "array" == g.typeOf(d) ? c[a] = c[a].concat(d) : "object" == g.typeOf(d) ? c[a] = g.extend(c[a], b[a]) : c[a] = d : c[a] = d
                }), c
            }

            function k(a, b) {
                throw s = {
                    code: a,
                    message: b,
                    toString: function() {
                        return this.code + " " + this.message
                    }
                }
            }

            function l(a, c, e) {
                var g, h = b(a, c);
                for (g = 0; g < h.length; g++) f(e, c.toLowerCase(), d(h[g]))
            }

            function m(a) {
                var g, h, i, j, k, l, m, n, r, s = b(b(a, "Creatives")[0], "Creative"),
                    t = {},
                    u = {
                        trackers: t
                    };
                for (u.adsystem = d(b(a, "AdSystem")[0]), h = 0; h < s.length; h++) {
                    if (g = s[h], j = b(g, "Linear")[0], k = b(g, "NonLinear")[0], l = b(b(g, "TrackingEvents")[0], "Tracking"), j || k)
                        for (i = 0; i < l.length; i++) e(t, l[i]);
                    if (m = d(b(g, "AdParameters")[0]), m && (u.adParams = m), j) {
                        n = b(j, "VideoClicks")[0], r = d(b(n, "ClickThrough")[0]);
                        for (var v = b(n, "ClickTracking"), w = c(j, "skipoffset"), x = 0; x < v.length; x++) f(t, "click", d(v[x]));
                        r && (u.clickthrough = r), w && (u.skipoffset = w), o(j, u)
                    } else k ? (r = d(b(k, "NonLinearClickThrough")[0]), r && (u.clickthrough = r), p(g, u)) : q(g, u)
                }
                return u
            }

            function n(a) {
                var g, h, i, j, k, l, m, n, p, q, r, s, t = b(a, "Video")[0] || a,
                    u = b(a, "NonLinear")[0],
                    v = {},
                    w = {
                        trackers: v
                    };
                if (t) {
                    for (g = b(b(a, "TrackingEvents")[0], "Tracking"), h = 0; h < g.length; h++) e(v, g[h]);
                    for (j = b(b(a, "Impression")[0], "URL"), h = 0; h < j.length; h++) i = j[h], f(v, "impression", d(i));
                    for (k = b(b(a, "Error")[0], "URL"), h = 0; h < k.length; h++) i = k[h], f(v, "error", d(i));
                    n = b(t, "VideoClicks")[0], p = d(b(n, "ClickThrough")[0]);
                    for (var x = b(b(n, "ClickTracking")[0], "URL"), y = 0; y < x.length; y++) f(v, "click", d(x[y]));
                    if (p && (w.clickthrough = p), q && f(v, "click", q), o(t, w), r = b(t, "AdParameters")[0], r && (s = c(r, "apiFramework"), "vpaid" == s.toLowerCase())) {
                        for (var z = 0; z < w.media.length; z++) w.media[z].adType = s;
                        w.adParams = d(r)
                    }
                }
                if (u) {
                    var A = w.media || [],
                        B = b(u, "URL")[0];
                    A.push({
                        type: c(u, "creativeType"),
                        file: d(B),
                        adType: c(u, "apiFramework")
                    }), w.media = A
                }
                for (l = b(a, "CompanionAds")[0], l = b(l, "Companion"), w.companions || (w.companions = []), h = 0; h < l.length; h++) m = l[h], w.companions.push({
                    width: parseInt(c(m, "width"), 10),
                    height: parseInt(c(m, "height"), 10),
                    type: c(m, "resourceType"),
                    resource: d(b(m, "URL")[0]),
                    trackers: [],
                    clickthrough: ""
                });
                return w
            }

            function o(a, e) {
                for (var f = b(b(a, "MediaFiles")[0], "MediaFile"), g = e.media ? e.media : [], h = 0; h < f.length; h++) {
                    var i = f[h],
                        j = {
                            type: c(i, "type"),
                            file: d(i),
                            adType: c(i, "apiFramework") || "",
                            width: parseInt(c(i, "width")) || 0,
                            height: parseInt(c(i, "height")) || 0
                        };
                    j.file && g.push(j)
                }
                e.media = g
            }

            function p(a, e) {
                var f = [],
                    g = b(a, "StaticResource")[0];
                g && (f.push({
                    type: c(g, "creativeType"),
                    file: d(g),
                    adType: c(b(a, "NonLinear")[0], "apiFramework") || "static",
                    minDuration: c(b(a, "NonLinear")[0], "minSuggestedDuration") || "00:00:00"
                }), e.media = f)
            }

            function q(a, e) {
                var g, h, i, j, k, l, m, n, o, p, q = b(b(a, "CompanionAds")[0], "Companion"),
                    r = e.companions ? e.companions : [];
                for (h = 0; h < q.length; h++) {
                    g = q[h], j = b(g, "StaticResource")[0], k = b(g, "IFrameResource")[0], l = b(g, "HTMLResource")[0];
                    var s = {};
                    if (j) m = c(j, "creativeType"), n = d(j);
                    else if (k) m = "iframe", n = d(k);
                    else {
                        if (!l) return;
                        m = "html", n = d(l)
                    }
                    var t = b(b(g, "TrackingEvents")[0], "Tracking");
                    for (i = 0; i < t.length; i++) o = c(t[i], "event"), f(s, o, d(t[i]));
                    p = d(b(g, "CompanionClickThrough")[0]), r.push({
                        width: parseInt(c(g, "width"), 10),
                        height: parseInt(c(g, "height"), 10),
                        type: m,
                        source: n,
                        trackers: s,
                        clickthrough: p
                    })
                }
                e.companions = r
            }
            var r = [],
                s = null;
            a && h(a), this.parse = h, this.parsedAds = function() {
                return r
            }, this.error = function() {
                return s
            }
        }
    }(window.jwplayer),
    function(a) {
        function b(a) {
            return c(a) ? a : f.parseXML(a)
        }

        function c(a) {
            return "object" == typeof Node ? a instanceof Node : a && "object" == typeof a && "number" == typeof a.nodeType && "string" == typeof a.nodeName
        }
        var d = a.jwplayer,
            e = d.events,
            f = d.utils,
            g = d._,
            h = d.vast;
        h.vloader = function(a, c, d) {
            function i() {
                var a = c.getContainer();
                return a.querySelector("object")
            }

            function j(a, b) {
                var d = c.id + ":vast:" + b.name + ":" + Math.random().toString(16).substr(2);
                return a.on(d, b, A), d
            }

            function k(a) {
                var b = function(b) {
                        m(b, a)
                    },
                    d = function(b, d) {
                        if (c) {
                            var h = i();
                            return h && "Invalid XML" !== b && "Timeout" !== b && f.crossdomain(d) ? void h.triggerFlash("loadXml", d, j(h, e), j(h, g)) : void t(b, a)
                        }
                    },
                    e = function(b) {
                        A.parseXmlString(b, a)
                    },
                    g = function(b) {
                        f.log(b), t(b, a)
                    };
                return f.ajax(a, b, d, {
                    withCredentials: !0,
                    retryWithoutCredentials: !0,
                    requireValidXML: !0,
                    timeout: 5e3
                })
            }

            function l(a) {
                a && (a.onload = null, a.onreadystatechange = null, a.onerror = null, a.abort && a.abort())
            }

            function m(b, g) {
                y = y || new h.vparser;
                try {
                    y.parse(b.responseXML)
                } catch (i) {
                    return void w(i.message, i.code || 900, g)
                }
                var j = y.parsedAds();
                j && j.length ? (C = j, d.wrapper = d.wrapper || [], d.wrapper.push(C[0].adsystem), f.foreach(C, function(b, f) {
                    if (f.wrappedURI) {
                        var g = new h.vloader(a, c, d);
                        g.on(e.COMPLETE, function() {
                            o(f, g.allAds())
                        }), g.on(e.ERROR, function(a) {
                            v(a.message, a.code, a.url), n(f, g)
                        }), g.load(f.wrappedURI)
                    } else d.wrapper.length > 1 && (f.wrapper = d.wrapper.slice(0, -1))
                }), r()) : w("Ad Tag Empty", 101, g)
            }

            function n(a, b) {
                var c = g.indexOf(C, a);
                C.splice(c, 1), b.destroy(), r()
            }

            function o(a, b) {
                var c = p(a, b),
                    d = g.indexOf(C, a);
                Array.prototype.splice.apply(C, [d, 1].concat(c)), r()
            }

            function p(a, b) {
                var c = [];
                return f.foreach(b, function(b, d) {
                    a.companions && (d.companions = (d.companions ? d.companions : []).concat(a.companions)), a.trackers && (d.trackers = q(d.trackers, a.trackers)), a.sequence && (d.sequence = a.sequence), c.push(d)
                }), c
            }

            function q(a, b) {
                return a = a || {}, f.foreach(b, function(b, c) {
                    a[b] ? a[b] = a[b].concat(c) : a[b] = c
                }), a
            }

            function r() {
                var a = !1;
                f.foreach(C, function(b, c) {
                    c.wrappedURI && (a = !0)
                }), a || s()
            }

            function s() {
                for (var a = C.slice(0), b = a.length, c = a.length; c--;) {
                    var d = a[c];
                    d.media && d.media.length || a.length--
                }
                var f = 0 === b,
                    g = a.length !== b;
                return f || g ? void w("Ad Tag Empty", 101, B[B.length - 1]) : void x(e.COMPLETE, {
                    vloader: A
                })
            }

            function t(a, b) {
                "Invalid XML" === a ? w(a, 100, b) : w("VAST could not be loaded", 301, b)
            }

            function u() {
                return B && B.length ? B[0] : ""
            }

            function v(a, b, c) {
                return 1 === C.length ? void w(a, b, c) : void A.trigger("adPodError", {
                    message: a,
                    code: b,
                    vloader: A,
                    url: u() || c,
                    wrappedUrl: c
                })
            }

            function w(a, b, c) {
                D || (D = !0, A.trigger(e.ERROR, {
                    message: a,
                    code: b,
                    vloader: A,
                    url: u() || c,
                    wrappedUrl: c
                }))
            }

            function x(a, b) {
                return A.trigger(a, b)
            }
            var y, z, A = this,
                B = [],
                C = [],
                D = !1;
            d = d || {}, f.extend(A, c.Events), A.load = function(a) {
                B.push(a), D = !1, z = k(a)
            }, A.destroy = function() {
                l(z), c = null
            }, A.scheduledAd = function() {
                return a
            }, A.allAds = function() {
                return C
            }, A.adPod = function() {
                var a = [];
                return f.foreach(C, function(b, c) {
                    c.sequence && a.push(c)
                }), a.sort(function(a, b) {
                    return a.sequence - b.sequence
                }), a
            }, A.adBuffet = function() {
                var a = [];
                return f.foreach(C, function(b, c) {
                    c.sequence || a.push(c)
                }), a
            }, A.history = function() {
                return B
            }, A.parseXmlString = function(a, c) {
                m({
                    responseXML: b(a)
                }, c)
            }
        }
    }(window),
    function(a) {
        a.vast.companion = function(b) {
            function c(a) {
                if (a = a.creativeView) {
                    for (var c = 0; c < a.length; c++) {
                        var d = new Image;
                        d.src = a[c]
                    }
                    k.isFunction(b) && b({
                        type: "companion",
                        data: {
                            trackers: a
                        }
                    })
                }
            }

            function d(a, b, c) {
                var d = document.createElement("param");
                d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d)
            }

            function e(a) {
                if (i.removeCompanion(), "html" === a.type) {
                    var b = document.createElement("div");
                    b.innerHTML = a.source;
                    var e = b.getElementsByTagName("script");
                    if (e.length)
                        for (var f = 0; f < e.length; f++) {
                            var k = new j.scriptloader(e[f].src);
                            k.load(), e[f].parentElement.removeChild(e[f])
                        }
                    return h.appendChild(b), void c(a.trackers)
                }
                if ("iframe" == a.type) {
                    var l = document.createElement("iframe");
                    return l.height = g.height, l.width = g.width, l.src = a.source, l.scrolling = "no", l.style.border = "none", l.marginWidth = 0, l.marginHeight = 0, c(a.trackers), h.innerHTML = "", void h.appendChild(l)
                }
                if ("application/x-shockwave-flash" == a.type) {
                    if (j.isMSIE()) {
                        var m = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width="100%" height="100%"id="' + h.id + '" name="' + h.id + '" tabindex=0"">';
                        m += '<param name="movie" value="' + a.source + '">', m += '<param name="allowfullscreen" value="true">', m += '<param name="allowscriptaccess" value="always">', m += '<param name="scale" value="exactfit">', m += '<param name="seamlesstabbing" value="true">', m += '<param name="wmode" value= "opaque">', m += "</object>", h.innerHTML = m
                    } else {
                        var n = document.createElement("object");
                        n.setAttribute("type", "application/x-shockwave-flash"), n.setAttribute("data", a.source), n.setAttribute("width", "100%"), n.setAttribute("height", "100%"), n.setAttribute("tabindex", 0), d(n, "allowfullscreen", "true"), d(n, "allowscriptaccess", "always"), d(n, "seamlesstabbing", "true"), d(n, "wmode", "opaque"), h.appendChild(n)
                    }
                    return void c(a.trackers)
                }
                var o = new Image;
                o.src = a.source, j.exists(a.clickthrough) && (o.onclick = function() {
                    var b = window.open(a.clickthrough, "_blank");
                    b.focus()
                }), h.innerHTML = "", h.appendChild(o), c(a.trackers)
            }

            function f(a) {
                return a.width == g.width && a.height == g.height
            }
            var g, h, i = this,
                j = a.utils,
                k = a._;
            i.addCompanion = function(a, b) {
                if (g = a, h = document.getElementById(g.id), !h) return !1;
                for (var c = 0; c < b.length; c++)
                    if (f(b[c])) return e(b[c]), !0;
                return !1
            }, i.removeCompanion = function() {
                h.innerHTML = ""
            }
        }
    }(window.jwplayer),
    function(a) {
        var b = a.utils,
            c = a._,
            d = "[ERRORCODE]",
            e = [];
        a.vast.tracker = function(a, f) {
            function g(b) {
                return a.hasOwnProperty(b) ? a[b] : []
            }

            function h(a, b) {
                var d, h, i, j = g(a),
                    k = [],
                    l = [];
                for (d = 0; d < j.length; d++)
                    if (h = j[d]) {
                        if (b)
                            for (var m in b)
                                if (b.hasOwnProperty(m)) {
                                    var n = b[m];
                                    h = h.replace(m, n)
                                }
                        i = new Image, i.src = h, k.push(h), l.push(i)
                    }
                for (d = e.length; d-- && (e[d].width || e[d].complete);) e.length = d;
                Array.prototype.push.apply(e, l), c.isFunction(f) && f({
                    type: "ping",
                    data: {
                        pingType: a,
                        urls: k,
                        images: l
                    }
                })
            }

            function i() {
                p.started = !0, h("start")
            }

            function j() {
                p.started = !0, h("breakStart")
            }

            function k(a, b) {
                if (!(b <= 1)) {
                    for (var c = (4 * a + .05) / b | 0; c > o && o < 3;) o++, 1 === o ? h("firstQuartile") : 2 === o ? h("midpoint") : 3 === o && h("thirdQuartile");
                    l(a, b)
                }
            }

            function l(a, b) {
                for (var c = q.length; c--;) {
                    var d = q[c];
                    if (!d.tracked) {
                        var e = d.offset;
                        d.percentage && (e = b * e / 100), a >= e && (d.tracked = !0, h(d.key))
                    }
                }
            }

            function m(a) {
                p.firedError = !0, a = a || 900;
                var b = {};
                b[d] = a, h("error", b)
            }

            function n(a) {
                return function() {
                    h(a)
                }
            }
            var o = 0,
                p = this,
                q = [];
            for (var r in a)
                if (a.hasOwnProperty(r) && 0 === r.indexOf("progress")) {
                    var s = "" + r.split("_")[1],
                        t = {
                            key: r,
                            offset: s,
                            tracked: !1,
                            percentage: !1
                        };
                    /^\d+%$/.test(s) ? (t.percentage = !0, t.offset = parseFloat(s)) : t.offset = b.seconds(s), q.push(t)
                }
            p.started = !1, p.firedError = !1, p.hasComp = !1, p.addUrl = function(b, c) {
                a.hasOwnProperty(b) ? a[b].push(c) : (a[b] = [], a[b].push(c))
            }, p.creativeView = n("creativeView"), p.start = i, p.click = n("click"), p.skip = n("skip"), p.complete = n("complete"), p.pause = n("pause"), p.resume = n("resume"), p.mute = n("mute"), p.unmute = n("unmute"), p.fullscreen = n("fullscreen"), p.expand = n("expand"), p.collapse = n("collapse"), p.acceptInvitation = n("acceptInvitation"), p.close = n("close"), p.rewind = n("rewind"), p.impression = n("impression"), p.breakStart = j, p.breakEnd = n("breakEnd"), p.time = k, p.error = m
        }
    }(window.jwplayer),
    function(a) {
        var b = a.utils,
            c = b.UI,
            d = a.events,
            e = d.JWPLAYER_MEDIA_TIME,
            f = {
                CLICK: "onClick",
                PLAY: "onPlay",
                PAUSE: "onPause",
                ERROR: "onError",
                COMPLETE: "onComplete"
            },
            g = document.createElement("img"),
            h = document.createElement("img"),
            i = {
                cursor: "pointer",
                position: "absolute",
                margin: "auto",
                left: 0,
                right: 0,
                bottom: 0,
                display: "block"
            },
            j = "opacity 0.2s",
            k = {
                "-webkit-transition": j,
                transition: j
            },
            l = function(a, d, e, i) {
                function j() {
                    clearTimeout(x), z.trigger(f.ERROR), v()
                }

                function k() {
                    z.trigger(f.CLICK)
                }

                function l() {
                    r(h)
                }

                function m() {
                    r(h, .75)
                }

                function n() {
                    r(g)
                }

                function o() {
                    r(g, .5)
                }

                function p(a) {
                    y === -1 && (a.preventDefault(), i.onmouseover = i.onmouseout = null, s([w, h, g]), i.appendChild(g), y = setTimeout(function() {
                        t(w), t(h), r(g, .5), i.onmouseover = n, i.onmouseout = o, y = -1
                    }, 250))
                }

                function q(a) {
                    y === -1 && (a.preventDefault(), i.onmouseover = i.onmouseout = null, i.appendChild(w), i.appendChild(h), y = setTimeout(function() {
                        r([w, h]), i.onmouseover = l, i.onmouseout = m, y = -1
                    }, 50), s(g))
                }

                function r(a, c) {
                    b.style(a, {
                        opacity: c || 1
                    })
                }

                function s(a) {
                    b.style(a, {
                        opacity: 0
                    })
                }

                function t(a) {
                    i.contains(a) && i.removeChild(a)
                }

                function u() {
                    w.onload = w.onerror = null
                }

                function v() {
                    u(), t(w)
                }
                var w, x = -1,
                    y = -1,
                    z = this;
                b.extend(this, a.Events), w = document.createElement("img"), w.className = "jw-banner", w.id = a.id + "_vast_static", s([h, g]), t(g), i.appendChild(w), i.appendChild(h), x = setTimeout(j, 5e3), w.onerror = j, w.onload = function() {
                    return clearTimeout(x), 0 === w.naturalWidth ? j() : (u(), b.style(h, {
                        top: -w.height - 8,
                        bottom: w.height - 8,
                        left: w.width
                    }, !0), b.style(g, {
                        top: -16
                    }, !0), r([i, w]), r(h, .75), new c(w).on("click tap", k), b.isMobile() || (i.onmouseover = l, i.onmouseout = m), h.onclick = h.ontouchstart = p, g.onclick = g.ontouchstart = q, void z.trigger(f.PLAY))
                }, w.src = d, z.removeListeners = function() {
                    clearTimeout(x), clearTimeout(y), i.onmouseover = i.onmouseout = h.onclick = g.onclick = null, z.off(), u()
                }, z.stop = function() {
                    s([i, w, h, g]), setTimeout(v, 400), t(h), t(g)
                }
            };
        g.src = h.src = 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#191919"/><line stroke="#CCC" stroke-width="6" x1="32" y1="20" x2="32" y2="44"/><line stroke="#CCC" stroke-width="6" x1="20" y1="32" x2="44" y2="32"/></svg>', a.vast.staticplayer = function(a, c) {
            function j(a) {
                v.trigger(e, a)
            }

            function m() {
                w = a.getPosition(), x > 0 && (0 === w ? v.on(e, n) : v.on(e, o)), r(f.PLAY)
            }

            function n(a) {
                w = a.position, v.off(e, n), v.on(e, o)
            }

            function o(a) {
                var b = a.position - w;
                b > x && (v.off(e, o), v.stop())
            }

            function p() {
                r(f.CLICK)
            }

            function q() {
                r(f.ERROR)
            }

            function r(a, b) {
                b = b || {}, b.tag = b.tag || u, v.trigger(a, b)
            }

            function s(a) {
                return function(b) {
                    v.on(a, b)
                }
            }
            var t, u, v = this,
                w = 0,
                x = 0;
            b.extend(this, a.Events), v.type = "static", a.onTime(j), v.playAd = function(d, e, j, n) {
                x = b.seconds(j), u = n, t && (t.removeListeners(), t.stop()), c.style.opacity = 0, c.style.visibility = "visible";
                var o = b.isFF() ? {} : k;
                b.style(c, b.extend({
                    top: "",
                    position: "absolute",
                    width: "100%"
                }, o)), b.style([h, g], b.extend({
                    width: "18px",
                    height: "18px",
                    opacity: .75
                }, i, o)), b.style(h, {
                    transform: "rotate(45deg)"
                }), t = new l(a, d, e, c), t.on(f.PLAY, m), t.on(f.CLICK, p), t.on(f.ERROR, q)
            }, v.removeEvents = function() {
                v.off()
            }, v.getState = function() {
                return d.state.PLAYING
            }, v.stop = function() {
                w && t && (w = 0, x = 0, v.off(e, n), v.off(e, o), t.removeListeners(), t.stop(), r(f.COMPLETE))
            }, v.pause = function() {}, v.onPlay = s(f.PLAY), v.onComplete = s(f.COMPLETE), v.onClick = s(f.CLICK), v.onError = s(f.ERROR)
        }
    }(window.jwplayer),
    function(a) {
        var b = a.vast,
            c = a.events.state,
            d = a.utils,
            e = a._;
        b.vpaidplayer = function(a, b, f, g, h, i) {
            function j() {
                k(S), H(T, p), H(V, q), H(U, r), H(X, u), H(Y, v), H(da, y), H(ea, z), H(W, w), H(ba, x), H(Z, A), H(ca, s), H(fa, t), H(ga, m), H($, B), H(_, C), H(aa, D);
                var b = a.getSafeRegion(!1);
                F("initAd", b.width, b.height + b.y, l(), 0, h)
            }

            function k(a) {
                d.isIE() && "PointerEvent" in window && (b.style.pointerEvents = a)
            }

            function l() {
                return a.getFullscreen() ? "fullscreen" : "normal"
            }

            function m() {
                n(Q.ERROR)
            }

            function n(a, b) {
                P || (b = b || {}, b.linear = M.linear ? "linear" : "nonlinear", b.tag = g, K.trigger(a, b))
            }

            function o(a) {
                a && (e.isBoolean(a.linear) && (M.linear = a.linear), e.isBoolean(a.expanded) && (M.expanded = a.expanded), e.isNumber(a.remainingTime) && (M.remainingTime = a.remainingTime))
            }

            function p(b) {
                u(b), G("adVolume", a.getMute() ? 0 : a.getVolume() / 100), F("startAd")
            }

            function q(a) {
                o(a), a.linear && K.blocking && !i && K.blocking.hide(), n(Q.STARTED), n(Q.PLAY, {
                    oldstate: c.BUFFERING,
                    newstate: c.PLAYING
                })
            }

            function r(a) {
                o(a), n(Q.IMPRESSION)
            }

            function s(a) {
                o(a), n(Q.CLICK)
            }

            function t(a) {
                o(a), n(Q.SKIPPED)
            }

            function u(b) {
                o(b);
                var c, d, e;
                if (b.linear) {
                    if (K.blocking) i || K.blocking.hide();
                    else {
                        L = !0, a.setControls(!1);
                        var f = a.getState();
                        f !== f.PLAYING && f !== f.BUFFERING || a.pause(!0)
                    }
                    e = a.getSafeRegion(!1), d = e.height + e.y, c = e.width
                } else K.blocking ? (K.blocking.destroy(), K.blocking = null) : L && (a.play(!0), a.setControls(!0)), e = a.getSafeRegion(!0), d = e.height + e.y, c = e.width;
                F("resizeAd", c, d, l())
            }

            function v(a) {
                o(a), n(Q.EXPANDED_CHANGE, {
                    expanded: M.expanded
                })
            }

            function w(b) {
                o(b), L && (a.play(!0), a.setControls(!0)), k(R), n(Q.STOPPED)
            }

            function x() {
                k(R), n(Q.COMPLETE)
            }

            function y(a) {
                o(a), N || (N = !0, n(Q.PAUSE, {
                    newstate: c.PAUSED,
                    oldstate: c.PLAYING
                }))
            }

            function z(a) {
                o(a), N && (N = !1, n(Q.PLAY, {
                    newstate: c.PLAYING,
                    oldstate: c.PAUSED
                }))
            }

            function A(a) {
                o(a), n(Q.REMAINING_TIME, {
                    remainingTime: a.remainingTime
                })
            }

            function B(a) {
                E(1, a)
            }

            function C(a) {
                E(2, a)
            }

            function D(a) {
                E(3, a)
            }

            function E(a, b) {
                o(b), n("quartile", {
                    quartile: a,
                    remainingTime: b.remainingTime
                })
            }

            function F() {
                var a = Array.prototype.slice.call(arguments);
                a.unshift("vast:callVpaid"), b.triggerFlash.apply(b, a)
            }

            function G(a, c) {
                b.triggerFlash("vast:setVpaidProperty", a, c)
            }

            function H(a, c) {
                b.triggerFlash("vast:addVpaidListener", a, I(c))
            }

            function I(c) {
                var d = a.id + ":vast:" + c.name + ":" + Math.random().toString(16).substr(2);
                return b.on(d, c, K), d
            }

            function J(a) {
                return function(b) {
                    this.on(a, b)
                }
            }
            var K = e.extend(this, a.Events),
                L = !1,
                M = {
                    linear: !1,
                    expanded: !1,
                    remainingTime: -1
                },
                N = !1,
                O = -1,
                P = !1,
                Q = {
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
                R = "none",
                S = "auto",
                T = "AdLoaded",
                U = "AdImpression",
                V = "AdStarted",
                W = "AdStopped",
                X = "AdLinearChange",
                Y = "AdExpandedChange",
                Z = "AdRemainingTimeChange",
                $ = "AdVideoFirstQuartile",
                _ = "AdVideoMidpoint",
                aa = "AdVideoThirdQuartile",
                ba = "AdVideoComplete",
                ca = "AdClickThru",
                da = "AdPaused",
                ea = "AdPlaying",
                fa = "AdSkipped",
                ga = "AdError";
            K.type = "vpaid", K.blocking = null, K.setVolume = function(a) {
                G("adVolume", a / 100)
            }, K.onQuartile = J(Q.QUARTILE), K.onRemainingTimeChange = J(Q.REMAINING_TIME), K.onSkipped = J(Q.SKIPPED), K.onComplete = J(Q.COMPLETE), K.onStopped = J(Q.STOPPED), K.onClick = J(Q.CLICK), K.onPlay = J(Q.PLAY), K.onPause = J(Q.PAUSE), K.onImpression = J(Q.IMPRESSION), K.onError = J(Q.ERROR), K.onStarted = J(Q.STARTED), K.onClose = J(Q.CLOSE), K.onExpandedChange = J(Q.EXPANDED_CHANGE), K.volume = function() {}, K.mute = function() {}, K.play = function() {
                F("resumeAd")
            }, K.pause = function() {
                F("pauseAd")
            }, K.stop = function() {
                F("stopAd")
            }, K.resize = function() {
                var b = a.getSafeRegion(!M.linear);
                F("resizeAd", b.width, b.height + b.y, l())
            }, K.removeEvents = function() {
                K.off()
            }, K.destroy = function() {
                K.removeEvents(), k(R), b.off(null, null, K), K.blocking = null
            }, K.getState = function() {
                return M.linear ? N ? c.PAUSED : c.PLAYING : c.IDLE
            }, d.isChrome() && b.on("throttle", function(a) {
                clearTimeout(O), "resume" === a.state ? (P = !1, z(M), k(R), F("resumeAd")) : O = setTimeout(function() {
                    k(S), F("pauseAd"), y(M), P = !0
                }, 250)
            }, this), b.triggerFlash("vast:loadVpaid", f, I(j), I(m))
        }
    }(window.jwplayer),
    function(a) {
        var b = a.vast,
            c = a.events.state;
        b.vpaidplayerjs = function(a, b, d, e, f) {
            function g(a, b) {
                b = b || {}, b.tag || (b.tag = d), p.trigger(a, b)
            }

            function h(a, b) {
                g("quartile", {
                    quartile: b,
                    duration: a.getAdDuration()
                })
            }

            function i(a) {
                return function(b) {
                    p.on(a, b)
                }
            }

            function j(b, c) {
                var d = document.createElement("iframe");
                d.src = "javascript:false", d.style.border = "0px", d.style.width = "100%", d.style.height = "100%", d.style.position = "relative", d.style.overflow = "hidden", d.scrolling = "no";
                var e = a.getContainer(),
                    f = e.getElementsByClassName("jw-media")[0];
                f.appendChild(d), q.push(d);
                var g = d.contentWindow.document;
                return g.open().write("<body onload=\"var js = document.createElement('script');js.src = '" + b + "';js.addEventListener('load', function() { window.myCallback(); });document.body.appendChild(js);\" style=\"margin: 0\">"), d.contentWindow.myCallback = c, g.close(), d
            }

            function k() {
                a.setMute(!p.vpaidAd.getAdVolume())
            }

            function l(b) {
                return {
                    AdLoaded: function() {
                        b.startAd()
                    },
                    AdStarted: function() {
                        b.getAdLinear() && p.blocking && !f && p.blocking.hide(), g("started"), g("play", {
                            oldstate: c.BUFFERING,
                            newstate: c.PLAYING,
                            linear: b.getAdLinear() ? "linear" : "nonlinear"
                        }), b.subscribe(k, "AdVolumeChange")
                    },
                    AdStopped: function() {
                        m(q), a.setControls(!0), g("stopped")
                    },
                    AdPaused: function() {
                        s || (s = !0, g("pause", {
                            newstate: c.PAUSED,
                            oldstate: c.PLAYING
                        }))
                    },
                    AdPlaying: function() {
                        s && (s = !1, g("play", {
                            newstate: c.PLAYING,
                            oldstate: c.PAUSED,
                            linear: b.getAdLinear() ? "linear" : "nonlinear"
                        }))
                    },
                    AdLinearChange: function() {
                        if (b.getAdLinear())
                            if (p.blocking) f || p.blocking.hide();
                            else {
                                a.setControls(!1);
                                var c = a.getState();
                                c !== c.PLAYING && c !== c.BUFFERING || a.pause(!0)
                            }
                        else p.blocking ? (p.blocking.destroy(), p.blocking = null) : (a.play(!0), a.setControls(!0))
                    },
                    AdDurationChange: function() {
                        g("remainingTimeChange", {
                            duration: b.getAdDuration(),
                            remainingTime: b.getAdRemainingTime()
                        })
                    },
                    AdRemainingTimeChange: function() {
                        g("remainingTimeChange", {
                            duration: b.getAdDuration(),
                            remainingTime: b.getAdRemainingTime()
                        })
                    },
                    AdExpandedChange: function() {
                        g("expandedChange", {
                            expanded: b.getAdExpanded()
                        })
                    },
                    AdSkipped: function() {
                        g("skipped")
                    },
                    AdVideoFirstQuartile: function() {
                        h(b, 1)
                    },
                    AdVideoMidpoint: function() {
                        h(b, 2)
                    },
                    AdVideoThirdQuartile: function() {
                        h(b, 3)
                    },
                    AdVideoComplete: function() {
                        g("complete")
                    },
                    AdUserClose: function() {
                        g("close")
                    },
                    AdImpression: function() {
                        g("impression", {
                            linear: b.getAdLinear() ? "linear" : "nonlinear"
                        })
                    },
                    AdClickThru: function(a, b, c) {
                        c && a && window.open(a), g("click", {
                            id: b
                        })
                    },
                    AdError: function(a, b) {
                        m(q), g("error", {
                            message: a,
                            code: b
                        })
                    }
                }
            }

            function m(a) {
                for (; a.length > 0;) {
                    var b = a.pop();
                    b.parentNode && b.parentNode.removeChild(b)
                }
            }
            var n = a._,
                o = a.Events,
                p = this,
                q = [],
                r = {
                    linear: !1,
                    expanded: !1,
                    remainingTime: -1
                },
                s = !1;
            this.type = "vpaid", this.blocking = null;
            var t = function() {
                    var b = p.vpaidAd = u.contentWindow.getVPAIDAd(),
                        c = b.handshakeVersion("2.0");
                    if (parseFloat(c) < 1) throw "Invalid vpaid version in handshake";
                    p.Listeners = l(b), n.each(p.Listeners, b.subscribe, b);
                    var d = "normal",
                        f = 1e3,
                        g = {
                            AdParameters: e
                        },
                        h = a.getContainer(),
                        i = h.getElementsByClassName("jw-media")[0],
                        j = i.getElementsByTagName("video")[0],
                        k = u.contentWindow.document.createElement("div");
                    k.className = "jw-vpaid-wrapper", k.style.height = "100%", u.contentWindow.document.body.appendChild(k), j ? j.removeAttribute("preload") : (j = document.createElement("video"), j.setAttribute("webkit-playsinline", ""), j.setAttribute("playsinline", ""), i.insertBefore(j, u), q.push(j));
                    var m = {
                        videoSlot: j,
                        slot: k
                    };
                    b.initAd(i.clientWidth, i.clientHeight, d, f, g, m)
                },
                u = j(b, t);
            n.extend(this, o, {
                play: function() {
                    p.vpaidAd.resumeAd()
                },
                pause: function() {
                    p.vpaidAd.pauseAd()
                },
                stop: function() {
                    if (p.vpaidAd) try {
                        p.vpaidAd.stopAd()
                    } catch (a) {
                        console.log("Unhandled exception from VPAID2 Creative stopAd", a)
                    }
                },
                setVolume: function(a) {
                    p.vpaidAd.setAdVolume(a / 100)
                },
                resize: function() {},
                destroy: function() {
                    if (m(q), p.removeEvents(), p.vpaidAd) try {
                        n.each(p.Listeners, p.vpaidAd.unsubscribe), p.vpaidAd.unsubscribe(k, "AdVolumeChange")
                    } catch (a) {
                        console.log("Unhandled exception from VPAID2 Creative", a)
                    }
                    p.blocking = null
                },
                removeEvents: function() {
                    p.off()
                },
                attachMedia: function() {},
                detachMedia: function() {},
                volume: function() {},
                mute: function() {},
                onTime: i("time"),
                onComplete: i("complete"),
                onClose: i("close"),
                onClick: i("click"),
                onPlay: i("play"),
                onPause: i("pause"),
                onError: i("error"),
                onImpression: i("impression"),
                onExpandedChange: i("expandedChange"),
                onSkipped: i("skipped"),
                onStopped: i("stopped"),
                onStarted: i("started"),
                onQuartile: i("quartile"),
                onRemainingTimeChange: i("remainingTimeChange"),
                getState: function() {
                    return r.linear ? s ? c.PAUSED : c.PLAYING : c.IDLE
                }
            })
        }
    }(window.jwplayer),
    function(a) {
        function b(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d, e = a[c],
                    f = "iframe" === e.type || "html" === e.type ? e.type : "static";
                e.trackers && e.trackers.creativeView && e.trackers.creativeView.length && (d = e.trackers.creativeView);
                var g = {
                    width: e.width,
                    height: e.height,
                    type: f,
                    resource: e.source,
                    creativeview: d,
                    click: e.clickthrough
                };
                b.push(g)
            }
            return b
        }

        function c(a) {
            for (var b = [], c = 0; a && c < a.length; c++) a[c].type.indexOf("flash") < 0 && b.push(a[c]);
            return b
        }
        var d = a.jwplayer,
            e = d.vast,
            f = d.utils,
            g = d._,
            h = d.events,
            i = 15e3;
        d.vast.adplayer = function(j, k, l, m, n, o) {
            function p() {
                var a = k.getProvider();
                return 0 === a.name.indexOf("flash") ? "flash" : a.name
            }

            function q() {
                var a = k.getContainer();
                return a.querySelector("object")
            }

            function r(a) {
                return "application/javascript" === a.type || "application/x-javascript" === a.type
            }

            function s(a) {
                return r(a) ? "html5" : "flash"
            }

            function t(a) {
                for (var b, c = "flash" === p(), d = 0; d < a.media.length; d++) {
                    var e = a.media[d];
                    if (c) {
                        b = e;
                        break
                    }
                    if ("html5" === s(e)) {
                        b = e;
                        break
                    }
                }
                return b
            }

            function u() {
                var a = null,
                    b = [],
                    c = 0;
                if (va && (z(va), a = G(va), a && "vpaid" === a.adType && !t(va) && (a = null)), ua)
                    for (var d = null, e = 0; e < ua.length; e++) {
                        var f = ua[e];
                        z(f);
                        var g = G(f);
                        if (g) {
                            if (d !== g.adType && "instream" === d) break;
                            if (d = g.adType, "vpaid" !== g.adType || t(f)) {
                                var h = b.length + c === e;
                                g && h && b.push(g)
                            } else c++
                        } else c++
                    }
                if (!b.length && !a) return J("No Compatible Creatives", 403), !1;
                var i;
                if (b.length) {
                    i = b, qa = [];
                    for (var j = 0; j < i.length; j++) qa.push(H(i[j].vastAd))
                } else i = a, qa = H(va);
                return oa = i, xa = 0, !0
            }

            function v() {
                var a = oa[xa] || oa;
                if (ja = a.adType, "vpaid" === ja) D(a.vastAd);
                else if ("static" === ja) B(), x();
                else {
                    var b = g.isArray(oa) ? oa.slice(xa) : oa,
                        c = g.isArray(qa) ? qa.slice(xa) : qa;
                    ya = xa, E(b, c), x()
                }
            }

            function w() {
                if (ka.blocking) {
                    var a = ka.blocking;
                    ka.blocking = null, x(a)
                }
            }

            function x(a) {
                a = a || ma, a && a !== la && a.destroy()
            }

            function y() {
                k && (k.off(h.JWPLAYER_FULLSCREEN, K), k.off(h.JWPLAYER_MEDIA_VOLUME, L), k.off(h.JWPLAYER_MEDIA_MUTE, M)), la && la.off(), ka && (ka.removeEvents(), w()), l.stop(), l.removeEvents()
            }

            function z(a) {
                a.tracker = new e.tracker(a.trackers, o)
            }

            function A() {
                var a = sa._adQueue || {},
                    b = {
                        id: sa._id,
                        tag: sa._currentTag,
                        client: "vast",
                        witem: sa._waterfallIndex || 1,
                        wcount: a.length || 1
                    };
                return oa && oa.length && (b.sequence = xa + 1, b.podcount = oa.length), na && (b.creativetype = na), b
            }

            function B() {
                va.tracker.linear = "nonlinear";
                var a = va.media[0];
                va.selectedMedia = a;
                var b = va.clickthrough || "",
                    c = l;
                c.removeEvents(), c.onPlay(P), c.onPlay(Q), c.onComplete(W), c.onClick(ba), c.onError(ha), c.playAd(a.file, b, a.minDuration, sa._currentTag)
            }

            function C(a, b) {
                J(a, b), oa && oa.length - 1 > xa && (ka && g.isFunction(ka.destroy) && ka.destroy(), xa++, v())
            }

            function D(a) {
                pa = setTimeout(function() {
                    C("VPAID tag communication timeout")
                }, i), va = a;
                var b = t(a);
                if (va.selectedMedia = b, na = b.type, "flash" === s(b)) {
                    var c = q();
                    ka = new e.vpaidplayer(k, c, b.file, sa._currentTag, va.adParams, n.vpaidcontrols)
                } else ka = new e.vpaidplayerjs(k, b.file, sa._currentTag, va.adParams, n.vpaidcontrols);
                ma.applyProviderListeners(ka), ka.blocking = ma, ka.onPlay(Q), ka.onPause(S), ka.onQuartile(U), ka.onRemainingTimeChange(T), ka.onClick(ca), ka.onError(ga), ka.onImpression(P), ka.onExpandedChange(ia), ka.onClose(Y), ka.onSkipped(fa), ka.onStopped($), ka.onComplete(X), ka.onStarted(Z)
            }

            function E(a, b) {
                la = ma ? ma : k.createInstream().init(), la.on("play", Q), la.on("pause", S), la.on("time", V), la.on("playlistItem", N), la.on("complete", X), la.on("playlistComplete", _), la.on("mute", aa), la.on("instreamClick", da), la.on("adSkipped", fa), la.on("error", ga), la.on("mediaError", ga), la.loadItem(a, b)
            }

            function F(a) {
                var b, c = p();
                return b = "flash" === c ? g.where(d.api.availableProviders, {
                    name: "flash"
                }) : g.filter(d.api.availableProviders, function(a) {
                    return "flash" !== a.name
                }), g.filter(a, function(a) {
                    return g.some(b, function(b) {
                        return b.supports(a)
                    })
                })
            }

            function G(a) {
                a.tracker.linear = "linear";
                var b = a.media[0],
                    c = ("" + b.adType).toLowerCase() || "instream",
                    e = {
                        vastAd: a,
                        sources: [],
                        adType: c,
                        mediaType: b.type
                    };
                sa.skipoffset && (e.skipoffset = sa.skipoffset);
                for (var f = a.media, g = {}, h = 0; h < f.length; h++) b = f[h], e.sources.push({
                    file: b.file,
                    type: b.type
                }), g[b.file] = {
                    width: b.width || 0,
                    height: b.height || 0
                };
                if (e = d.playlist.item(e), "instream" === c && (e.sources = F(e.sources)),
                    0 === e.sources.length) return null;
                na = ("" + e.sources[0].mimeType).toLowerCase(), e.vastAd.selectedMedia = e.sources[0];
                var i = k.getSafeRegion(!0),
                    j = null,
                    l = null;
                for (h = 0; h < e.sources.length; h++) {
                    var m = e.sources[h],
                        n = g[m.file];
                    n.width <= i.width && (!j || n.width > g[j.file].width) && (j = m), n.width >= i.width && (!l || n.width < g[l.file].width) && (l = m)
                }
                return j ? (e.vastAd.selectedMedia = j, j["default"] = !0) : l && (e.vastAd.selectedMedia = l, l["default"] = !0), e
            }

            function H(a) {
                var b = n.skipoffset >= 0 ? n.skipoffset : null;
                return {
                    skipoffset: a.skipoffset || sa.skipoffset || b,
                    skipMessage: n.skipMessage,
                    skipText: n.skipText
                }
            }

            function I(a) {
                if (oa) {
                    var b;
                    if (b = oa.length ? oa[a] : oa, b.vastAd) return b.vastAd
                } else if (ua && ua.length) return ua[a];
                return va
            }

            function J(a, b) {
                clearTimeout(pa), b = b || 900;
                var c = A();
                if (c.code = b, c.message = a, ua && xa < ua.length - 1) return void ra.trigger("adPodError", c);
                var d = I(xa),
                    e = d.tracker;
                e.error(b), ra.trigger(h.JWPLAYER_AD_ERROR, c)
            }

            function K(a) {
                var b = I(xa),
                    c = b.tracker;
                a.fullscreen && c.started && c.fullscreen()
            }

            function L(a) {
                ka && ka.setVolume(a.volume)
            }

            function M(a) {
                ka && ka.setVolume(a.mute ? 0 : k.getVolume())
            }

            function N(a) {
                la && (la.on("time", O), xa = a.index + ya)
            }

            function O(a) {
                if (0 !== a.position) {
                    this.off("time", O);
                    var b = I(xa),
                        c = b.tracker;
                    P({
                        linear: c.linear
                    })
                }
            }

            function P(a) {
                var b = I(xa),
                    c = b.tracker;
                c.impression();
                var d = A();
                d.adposition = sa._position || "", d.adtitle = b.adTitle || "", d.adsystem = b.adsystem || "", d.wrapper = b.wrapper || "", d.vastversion = b.vastversion, d.mediafile = {
                    file: b.selectedMedia.file
                }, d.linear = a.linear || c.linear, ra.trigger(h.JWPLAYER_AD_IMPRESSION, d)
            }

            function Q(a) {
                clearTimeout(pa);
                var d, e = I(xa),
                    g = e.tracker;
                if (g.started) a.oldstate === h.state.PAUSED && (g.resume(), R(a));
                else {
                    ka && (g.linear = a.linear);
                    var i = f.extend({
                        linear: g.linear
                    }, A(), H(e));
                    i.message = n.dynamicMessage || "", i.clickthrough = e.clickthrough, i.sequence && (i.podMessage = n.podMessage || ""), e.adTitle && (i.title = e.adTitle), e.companions && (i.companions = e.companions), k.dispatchEvent(h.JWPLAYER_AD_META, i), e.companions && (d = A(), d.companions = b(e.companions), k.dispatchEvent(h.JWPLAYER_AD_COMPANIONS, d));
                    var j, l = m;
                    j = f.flashVersion() > 9 ? e.companions : c(e.companions), n.companion && j && j.length && (g.hasComp = l.addCompanion(n.companion, j)), g.start(), g.creativeView(), R(a)
                }
            }

            function R(a) {
                if ("static" !== ja && ("vpaid" !== ja || "linear" === a.linear)) {
                    var b = a.oldstate,
                        c = a.newstate,
                        d = A();
                    d.oldstate = b, d.newstate = c, k.dispatchEvent(h.JWPLAYER_AD_PLAY, d), ka && ka.trigger(h.JWPLAYER_PLAYER_STATE, {
                        newstate: c,
                        oldstate: b
                    })
                }
            }

            function S(a) {
                var b = I(xa),
                    c = b.tracker;
                c.pause();
                var d = a.oldstate,
                    e = a.newstate,
                    f = A();
                f.oldstate = a.oldstate, f.newstate = a.newstate, k.dispatchEvent(h.JWPLAYER_AD_PAUSE, f), ka && ka.trigger(h.JWPLAYER_PLAYER_STATE, {
                    newstate: e,
                    oldstate: d
                })
            }

            function T(a) {
                wa = a.duration ? a.duration : Math.max(1, wa, a.remainingTime);
                var b = a.remainingTime >= 0 ? wa - a.remainingTime : 0;
                V({
                    position: b,
                    duration: wa
                })
            }

            function U(a) {
                if (a.duration) wa = a.duration;
                else {
                    var b = 4 * a.remainingTime / (4 - a.quartile);
                    wa = Math.max(wa, 1, b)
                }
                V({
                    position: wa * a.quartile * .25,
                    duration: wa
                })
            }

            function V(a) {
                var b = I(xa),
                    c = a.position,
                    d = a.duration,
                    e = n.dynamicMessage || "",
                    f = n.podMessage || "",
                    g = d - c,
                    i = b.tracker;
                if (i && i.time(c, d), e && g > 0) {
                    if (e = e.replace(/xx/gi, "" + Math.ceil(g)), oa && oa.length > 1) {
                        var j = xa + 1;
                        f = f.replace(/__AD_POD_CURRENT__/g, "" + j), f = f.replace(/__AD_POD_LENGTH__/g, "" + oa.length), e = f + e
                    }
                    la ? la.setText(e) : ka && ka.blocking && ka.blocking.setText(e)
                }
                var l = A();
                l.position = c, l.duration = d, k.dispatchEvent(h.JWPLAYER_AD_TIME, l)
            }

            function W() {
                X(), _()
            }

            function X() {
                var a = I(xa),
                    b = a.tracker;
                b.firedError || (b.complete(), k.dispatchEvent(h.JWPLAYER_AD_COMPLETE, A()))
            }

            function Y() {
                var a = I(xa),
                    b = a.tracker;
                b.firedError || b.close()
            }

            function Z() {
                k.dispatchEvent("adStarted", A())
            }

            function $() {
                return oa && oa.length - 1 > xa ? (ka && g.isFunction(ka.destroy) && ka.destroy(), xa++, void v()) : void _()
            }

            function _() {
                y(), ra.trigger(h.JWPLAYER_AD_COMPLETE)
            }

            function aa(a) {
                var b = I(xa),
                    c = b.tracker;
                c && (a.mute ? (c.mute(), ka && ka.setVolume(0)) : (c.unmute(), ka && ka.setVolume(k.getVolume() / 100)))
            }

            function ba() {
                var a = I(xa);
                k.pause(!0), ea(a)
            }

            function ca() {
                var a = I(xa);
                ea(a)
            }

            function da() {
                var a = I(xa),
                    b = la.getState() === h.state.PAUSED;
                b || ea(a)
            }

            function ea(b) {
                b.tracker.click(), k.dispatchEvent(h.JWPLAYER_AD_CLICK, A());
                var c = a.jwcast && a.jwcast.player.id;
                c || b.clickthrough && a.open(b.clickthrough)
            }

            function fa() {
                var a = I(xa);
                a.tracker.skip(), k.dispatchEvent(h.JWPLAYER_AD_SKIPPED, A())
            }

            function ga(a) {
                var b = a.message || "Error Playing Ad Tag",
                    c = a.code || 400;
                ka && g.isFunction(ka.off) ? (ka.off(), C(b, c)) : J(b, c)
            }

            function ha() {
                var a = "Unable to fetch NonLinear resource",
                    b = 502;
                J(a, b)
            }

            function ia(a) {
                var b = I(xa),
                    c = b.tracker;
                a.expanded ? c.expand() : c.collapse()
            }
            var ja, ka, la, ma, na, oa, pa, qa, ra = this,
                sa = j.scheduledAd(),
                ta = j.adBuffet(),
                ua = j.adPod(),
                va = ta.length ? ta[0] : null,
                wa = 0,
                xa = 0,
                ya = 0;
            f.extend(ra, k.Events), this.init = function(a) {
                ra.init = function() {
                    throw "vast.adplayer can only be initialized once"
                }, ma = a;
                var b = u();
                return !!b && (v(), k.onFullscreen(K), k.onVolume(L), k.onMute(M), !0)
            }, ra.getState = function() {
                return la ? la.getState() : ka ? ka.getState() : ""
            }, ra.clearNonlinear = function() {
                l.stop(), ka && (w(), ka && (ka.stop(), ka.destroy(), ka = null))
            }, ra.destroy = function() {
                ra.off(), y(), null !== ra && (la && la.destroy(), ka && (w(), ka && ka.destroy()), ra.clearNonlinear(), ra = j = k = ka = la = sa = ta = va = ua = null)
            }, ra.pause = function() {
                la ? la.pause() : ka && ka.pause()
            }, ra.play = function() {
                la ? la.play() : ka && ka.play()
            }
        }
    }(window),
    function(a) {
        function b(a) {
            return a._adQueue && a._waterfallIndex < a._adQueue.length
        }
        var c = a.vast,
            d = a.utils,
            e = a.events,
            f = a._,
            g = "-1";
        c.adcontroller = function(a, h, i) {
            function j(a) {
                if (a) {
                    ba && (F(ba), ba = null);
                    var b = function(b) {
                            ba = null;
                            try {
                                c.vmapparser(b.responseXML, V)
                            } catch (d) {
                                return void S({
                                    id: g,
                                    message: "Error parsing VMAP",
                                    code: 1002,
                                    vmap: a
                                })
                            }
                            if (aa && (U(V), ga)) {
                                var f = n({
                                    type: e.JWPLAYER_MEDIA_BEFOREPLAY
                                });
                                f === !0 && P()
                            }
                        },
                        f = function(b) {
                            ba = null, d.log(b), S({
                                id: g,
                                message: "Error Loading VMAP Schedule",
                                code: "Timeout" === b ? 1007 : 1008,
                                vmap: a
                            })
                        };
                    ba = d.ajax(a, b, f, {
                        withCredentials: !0,
                        retryWithoutCredentials: !0,
                        requireValidXML: !0,
                        timeout: 5e3
                    })
                }
            }

            function k() {
                aa = !0, Y = new c.staticplayer(a, i), Z = new c.companion(qa), _ = c.configparser.getOptParams(h)
            }

            function l(a) {
                ja = !!a.active
            }

            function m(a) {
                $.trigger(e.state.PLAYING, a)
            }

            function n(a) {
                if (!ja) {
                    var b = V.getPreRoll();
                    return ba ? void v() : !(!da && b) || (X = q(b), void r(b, a))
                }
            }

            function o(a) {
                if (!ja) {
                    var b = V.getNextMidRoll(a.position, a.duration);
                    b && (X = q(b), s(b, a))
                }
            }

            function p(a) {
                if (!ja) {
                    var b = V.getPostRoll();
                    !ea && b && (X = q(b), t(b, a))
                }
            }

            function q(a) {
                return a._trackers ? new c.tracker(a._trackers, qa) : null
            }

            function r(a, b) {
                a._position = "pre", da = !0, a._id = A(12), u(a, b)
            }

            function s(a, b) {
                a._position = "mid", a._id = A(12), u(a, b)
            }

            function t(b, c) {
                b._position = "post", ea = !0, a.detachMedia(), b._id = A(12), u(b, c)
            }

            function u(b, c) {
                if (ca = b._position, clearTimeout(ma), ma = -1, "nonlinear" !== b._type && !ga) {
                    var f = d.isMobile() && !pa && ("pre" === ca || a.isBeforePlay() || 0 === a.getPosition());
                    f ? (c && c.type === e.JWPLAYER_MEDIA_BEFOREPLAY || a.getState() === e.state.IDLE) && ($.off(e.state.PLAYING, v), $.once(e.state.PLAYING, v)) : v()
                }
                b._adXML ? (b._currentTag = b._currentTag || "clientloadedtag_" + fa++, z(b)) : b._adQueue ? y(b) : (d.log("scheduled ad has no url or xml", b), P())
            }

            function v() {
                ga = a.createInstream().init(), $.trigger("blockingStarted")
            }

            function w(b) {
                var d = V;
                x(b), d !== V && V.isVMAP() && j(c.doReplacement(V.getVMAP(), a, T(), _))
            }

            function x(b) {
                var d = a.getPlaylistItem(b.index);
                V = f.isObject(d) && d.adschedule ? c.configparser.getSchedule(d) : W, J(), K(), O(), ea = !1, da = !1, U(V), V.reset()
            }

            function y(b) {
                ka = b;
                var d = b._waterfallIndex || 0,
                    e = b._adQueue[d],
                    g = c.doReplacement(e, a, T(), _);
                b._waterfallIndex = d + 1, b._currentTag = g, f.isFunction(qa) && qa({
                    type: "tagReplacement",
                    data: {
                        actualTag: g,
                        originalTag: e
                    }
                }), B(b, g), D(b).load(g)
            }

            function z(a) {
                a._currentTag = a._currentTag || a._adXML.toString(), B(a, a._currentTag), D(a).parseXmlString(a._adXML)
            }

            function A(a) {
                return new Array(a + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, a)
            }

            function B(b, c) {
                a.dispatchEvent("adRequest", C(b, c))
            }

            function C(a, b) {
                var c = a._adQueue || {},
                    d = {},
                    e = a.adbreakid,
                    g = a._adTagQueue,
                    h = a.skipoffset;
                if (e && (d.adbreakid = e), g) {
                    var i = a._waterfallIndex - 1;
                    i = i < 0 ? 0 : i, d.adtagid = g[i]
                }
                return f.isUndefined(h) || (d.skipoffset = h), f.extend(d, {
                    id: a._id,
                    tag: b || a._currentTag,
                    client: "vast",
                    adposition: a._position,
                    offset: a._offSet,
                    witem: a._waterfallIndex || 1,
                    wcount: c.length || 1
                })
            }

            function D(b) {
                var d = new c.vloader(b, a);
                return d.on(e.COMPLETE, G), d.on(e.ERROR, R), d.on("adPodError", Q), ha.push(d), d
            }

            function E(a) {
                for (var b = ha.length; b--;) ha[b] === a && (ha.splice(b, 1), a.destroy())
            }

            function F(a) {
                a.onload = null, a.onreadystatechange = null, a.onerror = null, "abort" in a && a.abort()
            }

            function G(a) {
                var b = a.vloader.scheduledAd();
                null === ga && "nonlinear" !== b._type ? ($.off("blockingStarted"), $.once("blockingStarted", function() {
                    H(a)
                })) : H(a)
            }

            function H(b) {
                var d = b.vloader;
                clearTimeout(ma), ma = -1, ka.isWaterfalling || O(), E(d);
                var f = new c.adplayer(d, a, Y, Z, _, qa);
                f.on(e.JWPLAYER_AD_ERROR, L), f.on(e.JWPLAYER_AD_IMPRESSION, M), f.on("adPodError", S);
                var g = f.init(ga);
                return g ? (na = ga, ga = null, $.off("blockingStarted"), $.off(e.state.PLAYING, v), f.on(e.JWPLAYER_AD_COMPLETE, N), void ia.push(f)) : void f.destroy()
            }

            function I() {
                O(), ea = !1, da = !1
            }

            function J() {
                for (var a = ha.length; a--;) {
                    var b = ha[a];
                    ha.length--, b.destroy()
                }
            }

            function K() {
                for (var a = ia.length; a--;) {
                    var b = ia[a];
                    ia.length--, b.destroy()
                }
            }

            function L(c) {
                if (la = !1, S(c), !la && b(ka)) {
                    ga = ga || na;
                    var d = f.extend({}, ka);
                    return d._offset = 0, d.isWaterfalling = !0, void u(d)
                }
                K(), la = !1, ma = setTimeout(function() {
                    ma = -1, 0 === ha.length && ("post" === ca && a.attachMedia(), P())
                }, 0)
            }

            function M(b) {
                ka = {}, X && !X.started && X.breakStart(), a.dispatchEvent(e.JWPLAYER_AD_IMPRESSION, b)
            }

            function N() {
                X && X.breakEnd(), 0 === ha.length && "post" === ca && a.attachMedia()
            }

            function O() {
                if (ia.length) {
                    var a = ia[ia.length - 1];
                    a.clearNonlinear()
                }
            }

            function P() {
                ga && (ga.destroy(), ga = null, $.off("blockingStarted"), $.off(e.state.PLAYING, v)), na = null
            }

            function Q(a) {
                var b = a.vloader,
                    c = C(b.scheduledAd(), a.url);
                c.message = a.message, c.code = a.code, a.wrappedUrl !== a.url && (c.wrappedTag = a.wrappedUrl), la = !1, S(c)
            }

            function R(a) {
                var d = a.vloader,
                    g = d.allAds();
                if (E(d), g && g.length) {
                    var h = g[0];
                    if (h) {
                        var i = h.trackers;
                        if (i && i.error) {
                            var j = new c.tracker(i, qa);
                            j.error(a.code)
                        }
                    }
                }
                if (Q(a), !la && b(ka)) {
                    var k = f.extend({}, ka);
                    return k._offset = 0, k.isWaterfalling = !0, void u(k)
                }
                $.off(e.state.PLAYING, v), K(), la = !1, ma === -1 && (ma = setTimeout(function() {
                    ma = -1, 0 === ha.length && P()
                }, 0))
            }

            function S(b) {
                d.extend(b, {
                    client: "vast"
                }), X && X.error(b.code), a.dispatchEvent(e.JWPLAYER_AD_ERROR, b)
            }

            function T() {
                var a = window.location.href;
                return a = a.match(new RegExp(/^[^\/]*:\/\/\/?([^\/]*)/)), a && a.length > 1 ? a[1] : ""
            }

            function U(b) {
                var c = b.getMidRolls(),
                    e = [];
                c.length && d.foreach(c, function(a, b) {
                    "nonlinear" !== b._type && e.push({
                        begin: b._offSet,
                        text: _.cuetext
                    })
                }), a.setCues(e)
            }
            var V, W, X, Y, Z, $ = this,
                _ = {},
                aa = !1,
                ba = null,
                ca = "",
                da = !1,
                ea = !1,
                fa = 0,
                ga = null,
                ha = [],
                ia = [],
                ja = !1,
                ka = {},
                la = !1,
                ma = -1,
                na = null,
                oa = a.getConfig(),
                pa = !!oa.sdkplatform,
                qa = null;
            d.extend($, a.Events), h.debug && h.trackFn && (qa = h.trackFn), W = V = c.configparser.getSchedule(h), V.isVMAP() && j(c.doReplacement(V.getVMAP(), a, T(), _)), a.on("destroyPlugin", function() {
                    $.destroy()
                }, $), a.on({
                    ready: k,
                    beforePlay: n,
                    cast: l,
                    play: m,
                    time: o,
                    beforeComplete: p,
                    playlistItem: w,
                    playlistComplete: x,
                    complete: I
                }, $),
                function(a, b) {
                    a.jwplayerEntitlements = b(), "object" == typeof module && module.exports ? module.exports = b() : "function" == typeof define && define.amd && define([], b)
                }(this, function() {
                    return function(a, b, c) {
                        var d = new a.key(b).token(),
                        e = ["/player/jwpc791/7.9.1/all.json"];
                        "file:" === window.location.protocol && e.unshift("https:");
                        var f = {
                            canPlayAds: !0
                        };
                        a.ajax(e.join(""), function(a) {
                            f.canPlayAds = !a || !a.response || a.response.canPlayAds !== !1, c(f)
                        }, function() {
                            c(f)
                        }, {
                            timeout: 1e4,
                            responseType: "json"
                        })
                    }
                });
            var ra = oa.key;
            this.jwplayerEntitlements(d, ra, function(b) {
                if (!b.canPlayAds) {
                    a.off(null, null, $), a.pauseAd = a.playAd = d.noop;
                    var c = {
                        id: g,
                        code: 900,
                        message: "Ad Limit Reached"
                    };
                    L(c), $.destroy()
                }
            }), $.destroy = function() {
                ba && (F(ba), ba = null), J(), K(), O(), a.setCues([])
            }, a.pauseAd = function(a) {
                if (a = !f.isBoolean(a) || a, ia.length) {
                    var b = ia[ia.length - 1];
                    a ? b.pause() : b.play()
                }
            }, a.playAd = function(a) {
                la = !0, O();
                var b;
                b = f.isArray(a) ? a.slice(0) : [a];
                var c = {
                    _id: A(12),
                    _adQueue: b,
                    _waterfallIndex: 0,
                    _offset: 0,
                    _position: "api"
                };
                u(c)
            }
        }, a().registerPlugin("vast", "7.1", c.adcontroller, "vast.swf")
    }(window.jwplayer);