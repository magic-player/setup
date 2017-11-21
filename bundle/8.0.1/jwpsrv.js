! function() {
    function t() {
        return document.hasFocus && "function" == typeof document.hasFocus && document.hasFocus()
    }

    function e() {
        var t = (window.performance || {}).timing;
        if (t) {
            var e = t.loadEventEnd || (new Date).getTime(),
                n = e - t.navigationStart;
            if (0 < n) return 0 | 50 * Math.round(n / 50)
        }
        return null
    }

    function n(t) {
        for (var e = document.activeElement; e;) {
            if (e === t) return !0;
            e = e.parentNode
        }
        return !1
    }

    function i(t, e) {
        return 1 === t.nodeType && 0 <= (" " + t.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(" " + e + " ")
    }

    function r(t) {
        return t.getAdBlock ? t.getAdBlock() : -1
    }

    function a(t) {
        var e = t.getContainer().querySelector("video");
        return e ? e.currentTime : t.getPosition()
    }

    function o(t) {
        try {
            return t.getPlaylistItem()
        } catch (n) {
            var e = t.getPlaylistIndex();
            return t.getConfig().playlist[e] || null
        }
    }

    function u(t) {
        if ("function" == typeof t.getProvider) {
            var e = t.getProvider();
            return e ? e.name : ""
        }
        return ""
    }

    function c(t) {
        return "function" == typeof t.qoe ? 0 | 10 * ni(t.qoe().firstFrame / 10) : -1
    }

    function d(t) {
        if (t.getPlugin) {
            var e = t.getPlugin("vr");
            if (e) switch (e.getMode()) {
                case "magic-window":
                    return 0;
                case "cardboard":
                    return 1;
                case "gear-vr":
                    return 2;
                default:
                    return null
            }
        }
        return null
    }

    function s(t) {
        return t.getPlaybackRate ? ni(100 * t.getPlaybackRate()) / 100 : 1
    }

    function f(t) {
        var e = t.getVisualQuality();
        return e && e.level ? {
            width: e.level.width,
            height: e.level.height
        } : {
            width: null,
            height: null
        }
    }

    function l(t) {
        var e = t.getContainer().querySelector("video"),
            n = 0;
        if (e && (n = e.duration, e.buffered && e.buffered.length)) {
            var i = e.buffered.end(e.buffered.length - 1) || 0;
            return ni(10 * i) / 10
        }
        return n || (n = Math.abs(t.getDuration())), ni(n * t.getBuffer() / 10) / 10
    }

    function p() {
        var t = window.jwplayer,
            e = 0;
        if ("function" == typeof t)
            for (e = 0; 1e3 > e; e++)
                if (!t(e).uniqueId) return e;
        return e
    }

    function h() {
        try {
            var t = window.crypto || window.msCrypto;
            if (t && t.getRandomValues) return t.getRandomValues(new Uint32Array(1))[0].toString(36)
        } catch (t) {}
        return Math.random().toString(36).slice(2, 9)
    }

    function v(t) {
        for (var e = ""; e.length < t;) e += h();
        return e.slice(0, t)
    }

    function m(t) {
        if (t) {
            if (/vast/.test(t)) return 0;
            if (/googima/.test(t)) return 1;
            if (/freewheel/.test(t)) return 2
        }
        return -1
    }

    function g(t) {
        var e = /.*\/(?:manifests|videos)\/([a-zA-Z0-9]{8})[\.-].*/,
            n = e.exec(t);
        return n && 2 === n.length ? n[1] : null
    }

    function k(t) {
        return t.split("+")[0]
    }

    function w(t) {
        return /^[a-zA-Z0-9]{8}$/.test(t)
    }

    function y(t, e, n) {
        return n.some(t.tracks, function(t) {
            var e = t.kind;
            return "captions" === e || "subtitles" === e
        }) ? 1 : 1 < e.getCaptionsList().length ? 2 : 0
    }

    function b(t) {
        return S(t, "feedid")
    }

    function T(t) {
        return S(t, "feed_instance_id")
    }

    function C(t) {
        return t ? t.pin_set_id : null
    }

    function S(t, e) {
        return t ? (t.feedData || {})[e] || t[e] : null
    }

    function _(t, e) {
        var n;
        if (!t) return null;
        var i = t.sources;
        if (i) {
            for (var r = [], a = i.length; a--;) i[a].file && r.push(i[a].file);
            r.sort(), n = r[0]
        } else n = t.file;
        return e.getAbsolutePath(n)
    }

    function I(t) {
        if (!t) return null;
        var e = t.mediaid;
        return w(e) ? e : (e = g(t.file), w(e) ? e : null)
    }

    function P(t, e) {
        var n = t.tracks;
        return e.some(n, function(t) {
            return "thumbnails" === t.kind
        })
    }

    function A(t) {
        return t ? t.title : null
    }

    function x(t, e) {
        var n = t.sources[0],
            i = n.type;
        if (!i) {
            var r = n.file;
            i = e.extension(r)
        }
        return i
    }

    function R(t) {
        if (!t || !t.stereomode) return null;
        switch (t.stereomode) {
            case "monoscopic":
                return 0;
            case "stereoscopicTopBottom":
                return 1;
            case "stereoscopicLeftRight":
                return 2;
            default:
                return null
        }
    }

    function j(t, e, n) {
        function i(t) {
            return function(i) {
                t(i, e, n)
            }
        }
        var r, a;
        if (t.getPlugin) {
            var o = t.getPlugin("related");
            o && (o.on("playlist", i(D)), o.on("open", i(B)), o.on("play", i(q)), o.on("feedShown", function(t) {
                r = t.reason, L(t, e, n)
            }), o.on("feedClick", function(t) {
                M(t, e, n, r)
            }), o.on("feedAutoAdvance", function(t) {
                F(t, e, n, r)
            }));
            var u;
            t.on("playlistItem", function() {
                u = !0, r = null, a = null
            }), t.on("nextShown", function(t) {
                a = t.reason, ("hover" !== t.reason || u) && (u = !1, L(t, e, n))
            }), t.on("nextClick", function(t) {
                a && M(t, e, n, a)
            }), t.on("nextAutoAdvance", function(t) {
                a && F(t, e, n, a)
            })
        }
    }

    function D(t, e, n) {
        null === t.playlist || O(ft, t, [], e, n)
    }

    function B(t, e, n) {
        O(lt, t, [], e, n)
    }

    function q(t, e, n) {
        var i = [];
        if ("item" in t) {
            var r;
            r = "play" === t.onclick ? t.item.mediaid : t.item.link, i.push(ti(Fe, r, 17))
        }
        "autoplaytimer" in t && i.push(ti(Oe, t.autoplaytimer, 18)), O(st, t, i, e, n)
    }

    function L(t, e, n) {
        var i = t.feedData || {},
            r = t.itemsShown || [],
            a = 0,
            o = r.map(function(t) {
                return C(t) && a++, I(t)
            }),
            u = [ti(Ve, t.ui, 18), ti(Qe, o.join(","), 19), ti(Ne, o.length, 20), ti(He, a, 21), ti(We, t.page, 22), ti(Xe, t.reason, 23), ti($e, i.kind, 24), ti(Oe, t.autoTimer, 25)];
        O(pt, t, u, e, n)
    }

    function M(t, e, n, i) {
        var r = [ti(Ee, t.index, 19), ti(We, t.page, 22)].concat(E(t, i));
        O(ht, t, r, e, n)
    }

    function F(t, e, n, i) {
        var r = E(t, i);
        O(vt, t, r, e, n)
    }

    function E(t, e) {
        var n = t.feedData || {},
            i = t.itemsShown || [],
            r = t.target;
        return [ti(Ve, t.ui, 18), ti(ze, I(r), 20), ti(Ne, i.length, 21), ti(Xe, e, 23), ti($e, n.kind, 24), ti($t, C(r), 25)]
    }

    function O(t, e, n, i, r) {
        var a = b(e);
        a && r.track(t, tt, U(t, a, n, e).concat(i.getPlaylistTrackingParameters()))
    }

    function U(t, e, n, i) {
        if ("onclick" in i && n.push(ti(De, "play" === i.onclick ? 1 : 0, 19)), "method" in i) {
            var r, a = oi[i.method] || 0;
            t === st ? r = Le : t === lt && (r = Me), r && n.push(ti(r, a, 20))
        }
        "method_group_id" in i && n.push(ti(Be, i.method_group_id, 21)), "rec_id" in i && n.push(ti(qe, i.rec_id, 22)), "position" in i && n.push(ti(Ee, i.position + 1, 23));
        var o = T(i);
        if (n.push(ti(Wt, e, 24), ti(Xt, o, 25)), t === st) {
            var a = C(i);
            n.push(ti($t, a, 6))
        }
        return n
    }

    function V(t) {
        return !("number" != typeof t) || Math.random() < ci
    }

    function Q(t, e, n, i) {
        e("setupError" === t ? Kn : Zn, nt, [ti(Gn, n.code, 17)].concat(i))
    }

    function N(t, e, n) {
        var i = function(e) {
            return function(i) {
                si < di && V(i.code) && (si += 1, Q(e, n, i, t()))
            }
        };
        e.on("error", i("error")), e.on("setupError", i("setupError"))
    }

    function H(t, e, n) {
        var i = fi[t.method] || fi.custom;
        n(dt, tt, [ti(dn, i, 20)].concat(e))
    }

    function W(t, e, n) {
        if (t.getPlugin) {
            var i = t.getPlugin("sharing");
            i && i.on("click", function(t) {
                return function(i) {
                    t(i, e(), n)
                }
            }(H))
        }
    }

    function X() {
        var t = navigator.plugins;
        if (t && "object" == typeof t["Shockwave Flash"]) {
            var e = t["Shockwave Flash"].description;
            if (e) return e
        }
        if (void 0 !== window.ActiveXObject) try {
            var e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            if (e) {
                var n = e.GetVariable("$version");
                if (n) return n
            }
        } catch (e) {}
        return ""
    }

    function $() {
        var t = Si.jwplayerLocalId;
        if (t) return t;
        try {
            return Si.jwplayerLocalId = v(12), Si.jwplayerLocalId
        } catch (t) {}
        return null
    }

    function z(t) {
        return t ? _i[t] || 999 : 0
    }

    function K(t) {
        return Ii[t] || 0
    }

    function Z(t) {
        var e = t.preload;
        return Pi[e] || 0
    }

    function G(t, e, n) {
        return e === 1 / 0 ? null : 0 | t / (e / n) + 1
    }

    function J(t) {
        return t === 1 / 0 ? 1 / 0 : (t |= 0, 0 >= t ? 0 : 30 > t ? 1 : 60 > t ? 4 : 180 > t ? 8 : 300 > t ? 16 : 32)
    }

    function Y(t) {
        return t |= 0, 0 >= t || t === 1 / 0 ? 0 : 15 > t ? 1 : 300 >= t ? 2 : 1200 >= t ? 3 : 4
    }
    var tt = "jwplayer6",
        et = "clienta",
        nt = "error",
        it = "e",
        rt = "pa",
        at = "s",
        ot = "t",
        ut = "ret",
        ct = "vs",
        dt = "vsh",
        st = "rc",
        ft = "bs",
        lt = "rs",
        pt = "fs",
        ht = "fc",
        vt = "aa",
        mt = "c",
        gt = "ed",
        kt = "d",
        wt = "ph",
        yt = "mu",
        bt = "t",
        Tt = "ti",
        Ct = "pw",
        St = "etw",
        _t = "tb",
        It = "ps",
        Pt = "vs",
        At = "wd",
        xt = "pl",
        Rt = "l",
        jt = "q",
        Dt = "m",
        Bt = "id",
        qt = "fv",
        Lt = "eb",
        Mt = "st",
        Ft = "ff",
        Et = "plt",
        Ot = "pp",
        Ut = "pgi",
        Vt = "prc",
        Qt = "stc",
        Nt = "emi",
        Ht = "pli",
        Wt = "fed",
        Xt = "fid",
        $t = "psd",
        zt = "vp",
        Kt = "po",
        Zt = "s",
        Gt = "r",
        Jt = "sn",
        Yt = "cb",
        te = "ga",
        ee = "pr",
        ne = "vd",
        ie = "mk",
        re = "tt",
        ae = "cct",
        oe = "drm",
        ue = "pd",
        ce = "at",
        de = "df",
        se = "tf",
        fe = "plc",
        le = "pid",
        pe = "dd",
        he = "cp",
        ve = "ab",
        me = "pad",
        ge = "mt",
        ke = "vb",
        we = "vi",
        ye = "vl",
        be = "rf",
        Te = "tvs",
        Ce = "set",
        Se = "pdt",
        _e = "ccp",
        Ie = "aid",
        Pe = "i",
        Ae = "pv",
        xe = "pu",
        Re = "pt",
        je = "sdk",
        De = "os",
        Be = "mgi",
        qe = "ri",
        Le = "rct",
        Me = "rst",
        Fe = "rn",
        Ee = "oc",
        Oe = "rat",
        Ue = "lid",
        Ve = "fin",
        Qe = "fis",
        Ne = "fns",
        He = "fpc",
        We = "fpg",
        Xe = "fsr",
        $e = "ft",
        ze = "fct",
        Ke = "abt",
        Ze = "pbr",
        Ge = "pbd",
        Je = "pbc",
        Ye = "vh",
        tn = "vw",
        en = "ubi",
        nn = "cvl",
        rn = "tvl",
        an = "vso",
        on = "sdt",
        un = "pyc",
        cn = "pii",
        dn = "stg",
        sn = "pss",
        fn = "abc",
        ln = "v",
        pn = "adi",
        hn = "al",
        vn = "p",
        mn = "vv",
        gn = "ct",
        kn = "ad",
        wn = "du",
        yn = "tf",
        bn = "df",
        Tn = "pc",
        Cn = "pi",
        Sn = "vu",
        _n = "qt",
        In = "awi",
        Pn = "awc",
        An = "ask",
        xn = "abk",
        Rn = "atk",
        jn = "sko",
        Dn = "abo",
        Bn = "uav",
        qn = "adc",
        Ln = "vr",
        Mn = "vrt",
        Fn = "cx",
        En = "o",
        On = "cs",
        Un = "pip",
        Vn = "sv",
        Qn = "bi",
        Nn = "an",
        Hn = "did",
        Wn = "dm",
        Xn = "sc",
        $n = "ts",
        zn = "ha",
        Kn = "ers",
        Zn = "err",
        Gn = "erc",
        Jn = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        Yn = function t(e, n, i) {
            Jn(this, t), this.value = n, this.key = e, this.priority = i
        },
        ti = function(t, e, n) {
            return new Yn(t, e, n)
        },
        ei = function() {
            return "hidden" in document ? function() {
                return !document.hidden
            } : "webkitHidden" in document ? function() {
                return !document.webkitHidden
            } : function() {
                return !0
            }
        }(),
        ni = Math.round,
        ii = /^IAB(\d+(?:-\d+)?)$/,
        ri = {
            UNKNOWN: 999,
            IAB: 0
        },
        ai = function(e, i, r, a, u) {
            function c(t, e) {
                u.track(t, et, e)
            }

            function d(t) {
                -1 === e.adClient && t && (e.adClient = m(t.client)), t.sequence !== S.podIndex && (delete S.timeAdLoading, delete S.adCreativeType), s(t, "adbreakid"), s(t, "adtagid"), s(t, "offset"), s(t, "witem"), s(t, "wcount"), s(t, "skipoffset"), s(t, "linear", function(t, e) {
                    return e === t
                }), s(t, "adposition", function(t, e) {
                    return {
                        pre: 0,
                        mid: 1,
                        post: 2,
                        api: 3
                    }[e]
                }), s(t, "creativetype", function(t, e) {
                    var n = "";
                    return n = "static" === e ? "image/unknown" : "video" === e ? "video/unknown" : "vpaid" === e || "vpaid-swf" === e ? "application/x-shockwave-flash" : "vpaid-js" === e ? "application/javascript" : e || n, S.adCreativeType = n, n
                }), s(t, "tag", function(t, e) {
                    return S.tagdomain = p(a.utils.getAbsolutePath(e)), e
                }), t.timeLoading && (S.timeAdLoading = 10 * Math.round(t.timeLoading / 10)), t.universalAdIdRegistry && "unknown" !== t.universalAdIdRegistry ? S.universalAdId = t.universalAdIdRegistry + "." + t.universalAdIdValue : delete S.universalAdId, S.conditionalAd = t.conditionalAd, S.conditionalAdOptOut = !!t.conditionalAdOptOut, S.mediaFileCompliance = t.mediaFileCompliance, S.categories = t.categories, S.adSystem = t.adsystem || S.adSystem, S.vastVersion = t.vastversion || S.vastVersion, S.podIndex = t.sequence || S.podIndex, S.podCount = t.podcount || S.podCount
            }

            function s(t, e, n) {
                t.hasOwnProperty(e) && (S[e] = (n || f)(e, t[e]))
            }

            function f(t, e) {
                return e
            }

            function l(t, e) {
                if (y.adscheduleid && e > S.previousQuartile) {
                    d(t);
                    var n = [ti(wn, S.duration, 28), ti(_n, e, 29)].concat(h()).concat(g());
                    c(ln, n), S.previousQuartile = e
                }
            }

            function p(t) {
                if (t) {
                    var e = t.match(new RegExp(/^[^\/]*:\/\/\/?([^\/]*)/));
                    if (e && 1 < e.length) return e[1]
                }
                return ""
            }

            function h() {
                var e = null;
                return Array.isArray(S.categories) && (e = S.categories.map(function(t) {
                    var e = t.match(ii);
                    return e ? [ri.IAB, e[1]].join("-") : ri.UNKNOWN
                }).filter(function(t, e, n) {
                    return n.indexOf(t) === e
                }).slice(0, 10).join(",")), [ti(kn, S.adSystem, 17), ti(mn, S.vastVersion, 18), ti(gn, S.adCreativeType, 19), ti(hn, S.linear, 21), ti(Bn, S.universalAdId, 26), ti(qn, e, 27), ti(Tn, S.podCount, 30), ti(Cn, S.podIndex, 31), ti(bn, t(), 34), ti(yn, n(a.getContainer()), 35)].concat(v())
            }

            function v() {
                return [ti(vn, S.adposition, 20), ti(Sn, S.tagdomain, 22), ti(pn, S.adId, 25), ti(In, S.witem, 32), ti(Pn, S.wcount, 33)].concat(e.getCommonTrackingParameters())
            }

            function g() {
                return [ti(Dn, S.offset, 21), ti(xn, S.adbreakid, 23), ti(Rn, S.adtagid, 24), ti(jn, S.skipoffset, 26)]
            }
            var k = {
                    numCompanions: -1,
                    podCount: 0,
                    podIndex: 0,
                    linear: -1,
                    vastVersion: -1,
                    adSystem: "",
                    adCreativeType: "",
                    adposition: -1,
                    tagdomain: "",
                    position: "",
                    previousQuartile: 0,
                    duration: "",
                    witem: 1,
                    wcount: 1
                },
                w = a.getConfig(),
                y = (w || {}).advertising || {};
            e.adClient = m(y.client), e.adScheduleId = y.adscheduleid;
            var S = null;
            a.on("adRequest adMeta adImpression adComplete adSkipped adError adTime", function(t) {
                S && S.adId === t.id && -1 !== t.id || (S = this._.extend({
                    adId: t.id
                }, k))
            }).on("adRequest adMeta adImpression adComplete adSkipped adError", d).on("adRequest", function() {
                y.adscheduleid && c("ar", v().concat(g()))
            }).on("adImpression", function() {
                var t = o(a);
                c("i", [ti(Wt, b(t), 22), ti(Xt, T(t), 23), ti($t, C(t), 24), ti("tal", S.timeAdLoading, 25), ti("ca", S.conditionalAd, 30), ti("cao", S.conditionalAdOptOut, 31), ti("mfc", S.mediaFileCompliance, 32)].concat(h()).concat(g()))
            }).on("adStarted", function() {
                c("as", h().concat(g()))
            }).on("adComplete", function(t) {
                l(t, 4)
            }).on("adSkipped", function() {
                c("s", [ti("tw", S.position, 27), ti(wn, S.duration, 28), ti(_n, S.previousQuartile, 29)].concat(g()).concat(h()))
            }).on("adError", function(t) {
                if (y.adscheduleid) {
                    var e = 1;
                    "object" == typeof t && t && "code" in t && (e = t.code);
                    c("ae", [ti(kn, S.adSystem, 17), ti(gn, S.adCreativeType, 19), ti(Tn, S.podCount, 30), ti(Cn, S.podIndex, 31), ti("ec", e, 27), ti("ca", S.conditionalAd, 30), ti("cao", S.conditionalAdOptOut, 31), ti("mfc", S.mediaFileCompliance, 32)].concat(v().concat(g())))
                }
            }).on("adClick", function() {
                c("c", [ti("tw", S.position, 27), ti(wn, S.duration, 28), ti(_n, S.previousQuartile, 29)].concat(h().concat(g())))
            }).on("adTime", function(t) {
                if (S.position = t.position, S.duration = S.duration || t.duration, S.duration && !(S.position > S.duration)) {
                    l(t, Math.min(3, Math.floor((4 * S.position + .05) / S.duration)))
                }
            })
        },
        oi = {
            play: 1,
            api: 2,
            interaction: 3,
            complete: 4,
            auto: 5,
            manual: 6,
            link: 7
        },
        ui = function(t, e, n) {
            e.on("ready", function() {
                j(e, t, n)
            })
        },
        ci = .02,
        di = 1,
        si = 0,
        fi = {
            facebook: "fb",
            twitter: "twi",
            email: "em",
            link: "cl",
            embed: "ceb",
            pinterest: "pin",
            tumblr: "tbr",
            googleplus: "gps",
            reddit: "rdt",
            linkedin: "lkn",
            custom: "cus"
        },
        li = function(t, e, n) {
            e.on("ready", function() {
                W(e, t, n)
            })
        },
        pi = function(t) {
            var e = 0;
            if (t = decodeURIComponent(t), !t.length) return e;
            for (var n, i = 0; i < t.length; i++) n = t.charCodeAt(i), e = (e << 5) - e + n, e &= e;
            return e
        },
        hi = function() {
            function t(e, n, i) {
                Jn(this, t);
                var r = this;
                "function" == typeof e.onping && (r.onping = e.onping);
                var a = i.ownerDocument || window.document,
                    o = "complete" === a.readyState;
                r.config = e, r.pageLoaded = o, r.queue = [], r.images = [], r.debug = n, r.flushQueue = function() {
                    r.pageLoaded = !0;
                    for (var t = r.queue.length; t--;) r.ping(r.queue.shift());
                    window.removeEventListener("load", r.flushQueue)
                }, o || (window.addEventListener && window.addEventListener("load", r.flushQueue), setTimeout(r.flushQueue, 5e3))
            }
            return t.prototype.track = function(t, e, n) {
                var i = this.buildTrackingURL(t, e, n),
                    r = !this.pageLoaded;
                if (!r || "i" !== t && "ar" !== t && "as" !== t) {
                    if (r) return void this.queue.push(i)
                } else this.flushQueue();
                this.ping(i)
            }, t.prototype.buildTrackingURL = function(t, e, n) {
                var i = [ti("e", t, 0), ti("tv", "2.20.4", 1), ti("n", Math.random().toFixed(16).substr(2, 16), 2)].concat(n);
                i = i.filter(function(t) {
                    return !!t
                }).sort(function(t, e) {
                    return t.priority - e.priority
                });
                for (var r, a = [], o = 0; o < i.length; o++) r = i[o].value, !0 === r || !1 === r ? r = r ? 1 : 0 : (null === r || void 0 === r) && (r = ""), a.push(i[o].key + "=" + encodeURIComponent(r));
                var u = "file:" === window.location.protocol ? "https:" : "",
                    c = a.join("&");
                return u + "//jwpltx.com/v1/" + e + "/ping.gif?h=" + pi(c) + "&" + c
            }, t.prototype.ping = function(t) {
                var e = new Image;
                e.src = t;
                for (var n = this.images, i = n.length; i-- && (n[i].width || n[i].complete);) n.length = i;
                if (n.push(e), this.debug && this.onping) try {
                    this.onping.call(this, t)
                } catch (t) {}
            }, t
        }(),
        vi = {
            pro: 1,
            premium: 2,
            ads: 3,
            invalid: 4,
            enterprise: 6,
            trial: 7,
            platinum: 8,
            starter: 9,
            business: 10
        },
        mi = function(t, e) {
            var n, i = 0;
            if (t) {
                var r = new e(t),
                    a = r.edition();
                4 !== (i = vi[a] || 0) && (n = r.token())
            }
            n || (n = "_");
            var o = {};
            return o[Ie] = n, o[gt] = i, o
        },
        gi = function() {
            var t = X().replace(/\D+(\d+\.?\d*).*/, "$1");
            return function() {
                return t
            }
        }(),
        ki = function(t) {
            if (t) return {};
            var e = "",
                n = "",
                i = window.top !== window.self;
            if (i) {
                e = document.referrer;
                try {
                    e = e || window.top.location.href, n = window.top.document.title
                } catch (t) {}
            }
            var r = {};
            return r[xe] = e || window.location.href, r[Re] = n || document.title, r[Pe] = i, r[qt] = gi(), r
        },
        wi = function(t, e, n) {
            var i = {};
            return i[Ae] = k(t.version), i[je] = e.sdkplatform || 0, i[Nt] = v(12), n && (i[Hn] = e.mobiledeviceid, i[Vn] = e.iossdkversion, i[Wn] = e.mobiledevicemodel, i[Qn] = e.bundleid, i[Nn] = e.applicationname, i[Xn] = e.systemcaptions, i[$n] = e.texttospeech, i[zn] = e.hardwareacceleration), i
        },
        yi = function(t) {
            var e = {},
                n = window.jwplayer ? window.jwplayer.defaults || {} : {};
            e[wt] = t[wt] || n[wt] || 0, e[le] = t.pid, e[me] = t.pad, e[Jt] = t.skin, e[ve] = !!t.advertising, e[Zt] = !!t.sharing, e[Yt] = !!t.cast, e[te] = !!t.ga, e[kt] = !!t.autostart, e[Dt] = 1, e[zt] = !1 !== t.visualplaylist, e[pe] = !1 !== t.displaydescription, e[Kt] = !!t.image, e[Je] = !!t.playbackRateControls;
            var i = t.related;
            return e[Gt] = !!i, i && (e[be] = i.recommendations || i.file), e
        },
        bi = Math.round,
        Ti = function(t) {
            var e = t.getConfig(),
                n = e.containerWidth || t.getWidth(),
                r = e.containerHeight || t.getHeight();
            if (/\d+%/.test(n)) {
                var a = t.utils.bounds(t.getContainer());
                n = a.width, r = a.height
            }
            return n = 0 | bi(n), r = 0 | bi(r), /\d+%/.test(e.width || n) && e.aspectratio ? {
                bucket: 4,
                width: n,
                height: r
            } : i(t.getContainer(), "jw-flag-audio-player") ? {
                bucket: 5,
                width: n,
                height: r
            } : 0 === n ? {
                bucket: 0,
                width: n,
                height: r
            } : 320 >= n ? {
                bucket: 1,
                width: n,
                height: r
            } : 640 >= n ? {
                bucket: 2,
                width: n,
                height: r
            } : {
                bucket: 3,
                width: n,
                height: r
            }
        },
        Ci = function(t, e, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
            if (!e) return null;
            if (n && n.levels && n.levels.length) {
                var a = n.levels[0];
                if (a && "auto" === ("" + a.label).toLowerCase()) return 5
            }
            if (i(t.getContainer(), "jw-flag-audio-player")) return 6;
            var o = 0 | r.width,
                u = 0 | r.height;
            if (0 == o && 0 == u) {
                var a = e.sources;
                return "rtmp" === a[0].type ? 6 : 0
            }
            return 320 >= o ? 1 : 640 >= o ? 2 : 1280 >= o ? 3 : 4
        },
        Si = {};
    try {
        Si = window.localStorage
    } catch (t) {}
    var _i = {
            aes: 1,
            widevine: 2,
            playready: 3,
            fairplay: 4
        },
        Ii = {
            interaction: 1,
            autostart: 2,
            repeat: 3,
            external: 4,
            "related-interaction": 1,
            "related-auto": 5,
            playlist: 6
        },
        Pi = {
            none: 1,
            metadata: 2,
            auto: 3
        },
        Ai = function() {
            function t(e) {
                Jn(this, t), this._api = e, this.previousBufferTime = this.getTotalUnderBufferTime()
            }
            return t.prototype.getTotalUnderBufferTime = function() {
                try {
                    return this._api.qoe().item.sums.stalled || 0
                } catch (t) {
                    return 0
                }
            }, t.prototype.getUnderBufferTimeDelta = function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                    e = this.getTotalUnderBufferTime(),
                    n = Math.round(e - this.previousBufferTime);
                return t && (this.previousBufferTime = e), n
            }, t
        }(),
        xi = function() {
            function t(e) {
                Jn(this, t), this._generateTrackingFunc = e, this._numTrackedSeeks = 0, this._setupTrackingParams()
            }
            return t.prototype._isTrackingSeek = function() {
                return 0 < this._numTrackedSeeks
            }, t.prototype.trackSeek = function(t) {
                this._isTrackingSeek() || (this._trackingParams.videoStartDragTime = t.position, this._trackingParams.dragStartTime = Date.now()), this._numTrackedSeeks++, this._trackingParams.lastTargetTime = t.offset
            }, t.prototype.trackSeekEnd = function() {
                var t = this;
                if (this._isTrackingSeek()) {
                    clearTimeout(this._trackingParams.seekDebounceTimeout);
                    var e = Date.now() - this._trackingParams.dragStartTime;
                    1 === this._numTrackedSeeks && (e = 0);
                    var n = this._generateTrackingFunc(this._trackingParams.videoStartDragTime, this._trackingParams.lastTargetTime, e);
                    this._trackingParams.seekDebounceTimeout = setTimeout(function() {
                        n(), t._resetSeekData()
                    }, 1e3)
                }
            }, t.prototype._setupTrackingParams = function() {
                this._trackingParams = {
                    videoStartDragTime: 0,
                    dragStartTime: 0,
                    seekDebounceTimeout: -1,
                    lastTargetTime: 0
                }
            }, t.prototype._resetSeekData = function() {
                this._setupTrackingParams(), this._numTrackedSeeks = 0
            }, t
        }(),
        Ri = "playlistItem playAttempt time",
        ji = "adRequest adImpression adError",
        Di = function() {
            function t(e) {
                var n = this;
                Jn(this, t), this._adBreakCount = 0, this._shouldTrack = !1, e.on(Ri, function() {
                    n._shouldTrack = !0
                }), e.on(ji, function() {
                    n._shouldTrack && (n._shouldTrack = !1, n._adBreakCount++)
                })
            }
            return t.prototype.getAdBreakCount = function() {
                return this._adBreakCount
            }, t
        }(),
        Bi = Math.floor,
        qi = Math.round,
        Li = "play",
        Mi = "meta",
        Fi = "levels",
        Ei = "firstFrame",
        Oi = v(12),
        Ui = 0,
        Vi = function(i, h) {
            function m(t) {
                t = t || o(i);
                var e, n = u(i),
                    a = Ti(i),
                    c = ei(),
                    d = i.getConfig(),
                    f = d.visibility,
                    l = X.isUndefined(f) ? f : qi(100 * f) / 100,
                    h = d.defaultPlaybackRate;
                i.getViewable && (e = i.getViewable());
                var v = [ti(Ie, lt[Ie], 3), ti(gt, lt[gt], 4), ti(Ae, vt[Ae], 5), ti(je, vt[je], 6), ti(Nt, vt[Nt], 7), ti(wt, pt[wt], 8), ti(le, pt[le], 9), ti(Ut, Oi, 10), ti(Vt, p(), 10), ti(Qt, Be, 10), ti(Ue, $(), 10), ti(Ht, qe.itemId, 11), ti(Bt, qe.mediaId || I(t), 12), ti(Te, t[Te] || 0, 13), ti(Ce, t[Ce] || null, 14), ti(mt, Le.adClient, 15), ti(An, Le.adScheduleId, 16), ti(fe, i.getPlaylist().length, 21), ti(kt, pt[kt], 36), ti(Ot, n, 37), ti(It, a.bucket, 38), ti(At, a.width, 39), ti(xt, a.height, 40), ti(we, l, 42), ti(ce, c, 43), ti(Pe, ht[Pe], 44), ti(ye, i.getVolume(), 45), ti(ge, i.getMute(), 46), ti(_e, $e, 47), ti(Lt, r(i), 48), ti(Ze, s(i), 49), ti(Ge, h, 50), ti(Dt, !0, 101), ti(he, !i.getControls(), 102), ti(un, ln, 103), ti(cn, qe.index, 104), ti(sn, pn, 105), ti(bt, A(t), 106), ti(xe, ht[xe], 107), ti(Re, ht[Re], 108), Fe ? ti(fn, Fe.getAdBreakCount(), 109) : null];
                st && v.push(ti(Hn, vt[Hn], 49), ti(Vn, vt[Vn], 50), ti(Wn, vt[Wn], 51), ti(Qn, vt[Qn], 52), ti(Nn, vt[Nn], 53), ti(Xn, vt[Xn], 54), ti($n, vt[$n], 55), ti(zn, vt[zn], 56)), X.isUndefined(e) || v.push(ti(ke, e, 41));
                var m = d.ab;
                if (m && m.tests) {
                    var g = Object.keys(m.tests).map(function(t) {
                        return m.getSelected(t).join(",")
                    }).join(",");
                    v.push(ti(Ke, g, 8))
                }
                return v
            }

            function g(t) {
                return [ti(yt, _(t, et), 100)].concat(m(t))
            }

            function k(t, e) {
                return [ti(jt, e, 29), ti(Ln, d(i), 30)].concat(g(t))
            }

            function w(t) {
                var e = t || o(i),
                    n = B(),
                    r = f(i);
                return [ti(ee, K(qe.playReason), 17), ti(Wt, b(e), 18), ti(Xt, T(e), 19), ti($t, C(e), 20), ti(ue, Z(e), 21), ti(_t, l(i), 22), ti(ne, n, 23), ti(Ye, r.height, 24), ti(tn, r.width, 25)].concat(g(t))
            }

            function S(t) {
                qe.playReason = t.playReason || "", qe.mediaId = I(t.item || o(i)), q() && M()
            }

            function j() {
                Ee = {}, Oe = !1, Ve = 0
            }

            function D(t) {
                return function(e) {
                    var n = Ee[t];
                    if (t === Mi) {
                        var r = (e.metadata || e).TXXX;
                        if (r) {
                            var o = r.programDateTime;
                            if (o) {
                                var c = Date.parse(o);
                                isNaN(c) || O(null, Ne || 1, null, o)
                            }
                        }
                        e = e.metadata || e;
                        var d = e.segment;
                        if (d && (ze = !0, dn = d.encryption), qe.drm = e.drm || "", n && (e.width = e.width || n.width, e.height = e.height || n.height, e.duration = e.duration || n.duration), (100 === e.duration || 0 === e.duration) && 0 === e.width && 0 === e.height) return
                    }
                    if (Ee[t] = e, t === Li && (!n && (Ne = 0, He = 0), We = a(i)), Ee[Li] && Ee[Mi] && Ee[Fi] && Ee[Ei]) {
                        var r = u(i);
                        "flash_adaptive" === r ? !Oe && ze && (Oe = !0, ze = !1, E()) : !Oe && (Oe = !0, E())
                    }
                }
            }

            function B() {
                var t = i.getDuration();
                if (0 >= t) {
                    var e = Ee[Mi];
                    e && (t = e.duration)
                }
                return 0 | t
            }

            function q() {
                return !!qe.mediaId
            }

            function L() {
                Qe || (Qe = new xi(U))
            }

            function M() {
                var t = o(i);
                Me.track(rt, tt, w(t))
            }

            function F(t, n) {
                var i = -1;
                n && n.setupTime && (i = 0 | 10 * qi(n.setupTime / 10)), Me.track(it, tt, [ti(qt, ht[qt], 17), ti(Et, e(), 19), ti(Mt, i, 20), ti(ue, Z(t), 21), ti(zt, pt[zt], 22), ti(ve, pt[ve], 23), ti(Kt, pt[Kt], 24), ti(Zt, pt[Zt], 25), ti(Gt, pt[Gt], 26), ti(Jt, pt[Jt], 27), ti(me, pt[me], 28), ti(Yt, pt[Yt], 29), ti(te, pt[te], 30), ti(pe, pt[pe], 31), ti(be, pt[be], 32), ti(Mn, R(t), 33), ti(Je, pt[Je], 34)].concat(g(t)))
            }

            function E() {
                ln++;
                var t = B(),
                    e = o(i),
                    n = Ci(i, e, Ee[Fi], Ee[Mi]),
                    r = f(i);
                Me.track(at, tt, [ti(Pt, n, 17), ti(Rt, Y(t), 18), ti(ne, t, 19), ti(ie, x(e, et), 20), ti(ue, Z(e), 21), ti(_t, l(i), 22), ti(Wt, b(e), 22), ti(Xt, T(e), 23), ti($t, C(e), 23), ti(ee, K(qe.playReason), 23), ti(Ft, c(i), 24), ti(re, P(e, X), 25), ti(oe, z(qe.drm) || dn, 26), ti(ae, y(e, i, X), 27), ti(Mn, R(e), 28), ti(Ye, r.height, 57), ti(tn, r.width, 58)].concat(k(e, J(t))).concat(Q()))
            }

            function O(e, r, a, u) {
                if (Ne = 0, !!q()) {
                    var c = o(i),
                        d = [];
                    if (u) {
                        if (!c[Te]) return;
                        d.push(ti(Se, u, 23))
                    }
                    var s = 0 | r + .5;
                    if (0 < s) {
                        var l = f(i);
                        Me.track(ot, tt, [ti(Tt, s, 20), ti(Ct, 0 | e, 21), ti(Wt, b(c), 22), ti(Xt, T(c), 23), ti(de, t(), 30), ti(se, n(i.getContainer()), 31), ti(Ye, l.height, 57), ti(tn, l.width, 58), ti(en, Xe.getUnderBufferTimeDelta(), 59)].concat(d).concat(k(c, a)).concat(H()))
                    }
                }
            }

            function U(t, e, n) {
                t = Bi(t), e = Bi(e), n = Bi(n);
                var i = e - t;
                return 0 == i ? function() {} : Me.track.bind(Me, ct, tt, [ti(nn, t, 20), ti(rn, e, 21), ti(an, i, 22), ti(on, n, 23)].concat(m()))
            }

            function V(e, r, a) {
                if (q() && e < a && e + r >= a) {
                    var u = o(i),
                        c = f(i);
                    Me.track(ut, tt, [ti(St, a), ti(Wt, b(u), 22), ti(Xt, T(u), 23), ti(de, t(), 30), ti(se, n(i.getContainer()), 31), ti(Ye, c.height, 57), ti(tn, c.width, 58)].concat(k(u, J(B()))).concat(H()))
                }
            }

            function Q() {
                return st ? [ti(Fn, De.cx, 32), ti(En, De.o, 33)] : []
            }

            function H() {
                return st ? [ti(En, De.o, 32), ti(On, De.cs, 33), ti(Un, De.pip, 34)] : []
            }

            function W(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                q() && (L(), e ? Qe.trackSeekEnd(t) : Qe.trackSeek(t))
            }
            var X = i._,
                et = i.utils,
                dt = !0 === h.debug,
                st = parseInt(h.sdkplatform, 10),
                ft = i.getConfig(),
                lt = mi(ft.key, et.key),
                pt = yi(ft),
                ht = ki(st),
                vt = wi(i, h, st),
                De = {};
            st && (De.cx = 0, De.o = 0, De.cs = 0, De.pip = 0), Ui += 1;
            var Be = Ui,
                qe = {
                    ready: null,
                    item: null,
                    drm: "",
                    index: 0,
                    itemId: "",
                    mediaId: "",
                    playReason: ""
                },
                Le = this,
                Me = new hi(h, dt, i.getContainer());
            ai(Le, 0, 0, i, Me), ui(Le, i, Me);
            var Fe; - 1 !== Le.adClient && (Fe = new Di(i));
            var Ee, Oe, Ve, Qe, Ne = 0,
                He = 0,
                We = null,
                Xe = new Ai(i),
                $e = !1,
                ze = !1,
                dn = !1,
                ln = 0,
                pn = 0;
            Le.getCommonTrackingParameters = function() {
                return m(o(i))
            }, N(m, i, Me.track.bind(Me)), li(m, i, function() {
                q() && Me.track.apply(Me, arguments)
            }), Le.getPlaylistTrackingParameters = function() {
                return g(o(i))
            }, i.on("mobile-sdk-lt", function(t) {
                X.extend(De, t)
            }), i.on("idle", j), i.on("ready", function(t) {
                qe.ready = X.extend({}, t), qe.item = o(i)
            }), i.on("playlistItem", function(t) {
                qe.drm = "", qe.itemId = v(12), pn++, qe.index = t.index, qe.ready && (F(qe.item || o(i), qe.ready), qe.item = null, qe.ready = null), i.off("beforePlay", S), i.once("beforePlay", S), j(), ze = dn = !1
            }), i.on("playAttemptFailed", function(t) {
                qe.mediaId = I(t.item || o(i)), q() && Me.track("paf", nt, [ti(Gn, t.code, 17)].concat(w(t.item)))
            }), i.on("meta", D(Mi)), i.on("levels", D(Fi)), i.on("play", D(Li)), i.on("firstFrame", D(Ei)), i.on("time", function(t) {
                var e = a(i),
                    n = t.duration;
                if (e) {
                    if (1 < e) {
                        if (!Ee[Mi]) {
                            var r = {
                                    duration: n
                                },
                                o = i.getContainer().querySelector("video");
                            o && (r.width = o.videoWidth, r.height = o.videoHeight), D(Mi)(r)
                        }
                        Ee[Fi] || D(Fi)({})
                    }
                    var u = J(n),
                        c = G(e, n, u);
                    0 === Ve && (Ve = c), null === We && (We = e);
                    var d = e - We;
                    if (We = e, d = Math.min(Math.max(0, d), 4), Ne += d, V(He, d, 10), V(He, d, 30), V(He, d, 60), He += d, !(0 >= n || n === 1 / 0) && c === Ve + 1) {
                        var r = 128 * Ve / u;
                        if (Ve = 0, c > u) return;
                        O(r, Ne, u)
                    }
                }
            }), i.on("seek", function(t) {
                We = a(i), Ve = 0, W(t)
            }), i.on("seeked", function(t) {
                W(t, !0)
            }), i.on("complete", function() {
                var t = B();
                if (!(0 >= t || t === 1 / 0)) {
                    var e = J(t);
                    O(128, Ne, e), He = 0
                }
            }), i.on("cast", function(t) {
                $e = !!t.active
            });
            var hn = ft.defaultPlaybackRate || 1;
            i.on("playbackRateChanged", function(t) {
                q() && Me.track("pru", tt, [ti("ppr", hn, 20)].concat(Le.getCommonTrackingParameters())), hn = t.playbackRate
            }), j()
        };
    (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)("jwpsrv", "7.0", Vi)
}();