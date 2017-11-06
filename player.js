window.jwplayer = function(e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var o = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = window.webpackJsonpjwplayer;
    window.webpackJsonpjwplayer = function(i, r) {
        for (var a, s, l = 0, u = []; l < i.length; l++) s = i[l], o[s] && u.push.apply(u, o[s]), o[s] = 0;
        for (a in r) e[a] = r[a];
        for (n && n(i, r); u.length;) u.shift().call(null, t)
    };
    var i = {},
        o = {
            0: 0
        };
    return t.e = function(e, n) {
        if (0 === o[e]) return n.call(null, t);
        if (void 0 !== o[e]) o[e].push(n);
        else {
            o[e] = [n];
            var i = document.getElementsByTagName("head")[0],
                r = document.createElement("script");
            r.type = "text/javascript", r.charset = "utf-8", r.async = !0, r.src = t.p + "" + ({
                1: "provider.hlsjs",
                2: "provider.shaka",
                3: "provider.cast",
                4: "provider.html5",
                5: "provider.flash",
                6: "provider.airplay",
                7: "provider.youtube",
                8: "polyfills.vttrenderer",
                9: "polyfills.promise",
                10: "polyfills.intersection-observer",
                11: "polyfills.base64",
                12: "vttparser"
            }[e] || e) + ".js", i.appendChild(r)
        }
    }, t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t, n) {
    e.exports = n(174)
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        var e = {},
            t = Array.prototype,
            n = Object.prototype,
            i = Function.prototype,
            o = t.slice,
            r = t.concat,
            a = n.toString,
            s = n.hasOwnProperty,
            l = t.map,
            u = t.reduce,
            c = t.forEach,
            d = t.filter,
            p = t.every,
            f = t.some,
            h = t.indexOf,
            g = Array.isArray,
            w = Object.keys,
            m = i.bind,
            v = function(e) {
                return e instanceof v ? e : this instanceof v ? void 0 : new v(e)
            },
            j = v.each = v.forEach = function(t, n, i) {
                if (null == t) return t;
                if (c && t.forEach === c) t.forEach(n, i);
                else if (t.length === +t.length) {
                    for (var o = 0, r = t.length; o < r; o++)
                        if (n.call(i, t[o], o, t) === e) return
                } else
                    for (var a = v.keys(t), o = 0, r = a.length; o < r; o++)
                        if (n.call(i, t[a[o]], a[o], t) === e) return;
                return t
            };
        v.map = v.collect = function(e, t, n) {
            var i = [];
            return null == e ? i : l && e.map === l ? e.map(t, n) : (j(e, function(e, o, r) {
                i.push(t.call(n, e, o, r))
            }), i)
        };
        var y = "Reduce of empty array with no initial value";
        v.reduce = v.foldl = v.inject = function(e, t, n, i) {
            var o = arguments.length > 2;
            if (null == e && (e = []), u && e.reduce === u) return i && (t = v.bind(t, i)), o ? e.reduce(t, n) : e.reduce(t);
            if (j(e, function(e, r, a) {
                    o ? n = t.call(i, n, e, r, a) : (n = e, o = !0)
                }), !o) throw new TypeError(y);
            return n
        }, v.find = v.detect = function(e, t, n) {
            var i;
            return b(e, function(e, o, r) {
                if (t.call(n, e, o, r)) return i = e, !0
            }), i
        }, v.filter = v.select = function(e, t, n) {
            var i = [];
            return null == e ? i : d && e.filter === d ? e.filter(t, n) : (j(e, function(e, o, r) {
                t.call(n, e, o, r) && i.push(e)
            }), i)
        }, v.reject = function(e, t, n) {
            return v.filter(e, function(e, i, o) {
                return !t.call(n, e, i, o)
            }, n)
        }, v.compact = function(e) {
            return v.filter(e, v.identity)
        }, v.every = v.all = function(t, n, i) {
            n || (n = v.identity);
            var o = !0;
            return null == t ? o : p && t.every === p ? t.every(n, i) : (j(t, function(t, r, a) {
                if (!(o = o && n.call(i, t, r, a))) return e
            }), !!o)
        };
        var b = v.some = v.any = function(t, n, i) {
            n || (n = v.identity);
            var o = !1;
            return null == t ? o : f && t.some === f ? t.some(n, i) : (j(t, function(t, r, a) {
                if (o || (o = n.call(i, t, r, a))) return e
            }), !!o)
        };
        v.size = function(e) {
            return null == e ? 0 : e.length === +e.length ? e.length : v.keys(e).length
        }, v.last = function(e, t, n) {
            if (null != e) return null == t || n ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
        }, v.after = function(e, t) {
            return function() {
                if (--e < 1) return t.apply(this, arguments)
            }
        }, v.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
            }
        };
        var x = function(e) {
                return null == e ? v.identity : v.isFunction(e) ? e : v.property(e)
            },
            E = function(e) {
                return function(t, n, i) {
                    var o = {};
                    return n = x(n), j(t, function(r, a) {
                        var s = n.call(i, r, a, t);
                        e(o, s, r)
                    }), o
                }
            };
        v.groupBy = E(function(e, t, n) {
            v.has(e, t) ? e[t].push(n) : e[t] = [n]
        }), v.indexBy = E(function(e, t, n) {
            e[t] = n
        }), v.sortedIndex = function(e, t, n, i) {
            n = x(n);
            for (var o = n.call(i, t), r = 0, a = e.length; r < a;) {
                var s = r + a >>> 1;
                n.call(i, e[s]) < o ? r = s + 1 : a = s
            }
            return r
        };
        var b = v.some = v.any = function(t, n, i) {
            n || (n = v.identity);
            var o = !1;
            return null == t ? o : f && t.some === f ? t.some(n, i) : (j(t, function(t, r, a) {
                if (o || (o = n.call(i, t, r, a))) return e
            }), !!o)
        };
        v.contains = v.include = function(e, t) {
            return null != e && (e.length !== +e.length && (e = v.values(e)), v.indexOf(e, t) >= 0)
        }, v.pluck = function(e, t) {
            return v.map(e, v.property(t))
        }, v.where = function(e, t) {
            return v.filter(e, v.matches(t))
        }, v.findWhere = function(e, t) {
            return v.find(e, v.matches(t))
        }, v.max = function(e, t, n) {
            if (!t && v.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            var i = -(1 / 0),
                o = -(1 / 0);
            return j(e, function(e, r, a) {
                var s = t ? t.call(n, e, r, a) : e;
                s > o && (i = e, o = s)
            }), i
        }, v.difference = function(e) {
            var n = r.apply(t, o.call(arguments, 1));
            return v.filter(e, function(e) {
                return !v.contains(n, e)
            })
        }, v.without = function(e) {
            return v.difference(e, o.call(arguments, 1))
        }, v.indexOf = function(e, t, n) {
            if (null == e) return -1;
            var i = 0,
                o = e.length;
            if (n) {
                if ("number" != typeof n) return i = v.sortedIndex(e, t), e[i] === t ? i : -1;
                i = n < 0 ? Math.max(0, o + n) : n
            }
            if (h && e.indexOf === h) return e.indexOf(t, n);
            for (; i < o; i++)
                if (e[i] === t) return i;
            return -1
        };
        var k = function() {};
        v.bind = function(e, t) {
            var n, i;
            if (m && e.bind === m) return m.apply(e, o.call(arguments, 1));
            if (!v.isFunction(e)) throw new TypeError;
            return n = o.call(arguments, 2), i = function() {
                if (!(this instanceof i)) return e.apply(t, n.concat(o.call(arguments)));
                k.prototype = e.prototype;
                var r = new k;
                k.prototype = null;
                var a = e.apply(r, n.concat(o.call(arguments)));
                return Object(a) === a ? a : r
            }
        }, v.partial = function(e) {
            var t = o.call(arguments, 1);
            return function() {
                for (var n = 0, i = t.slice(), o = 0, r = i.length; o < r; o++) i[o] === v && (i[o] = arguments[n++]);
                for (; n < arguments.length;) i.push(arguments[n++]);
                return e.apply(this, i)
            }
        }, v.once = v.partial(v.before, 2), v.memoize = function(e, t) {
            var n = {};
            return t || (t = v.identity),
                function() {
                    var i = t.apply(this, arguments);
                    return v.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
                }
        }, v.delay = function(e, t) {
            var n = o.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, v.defer = function(e) {
            return v.delay.apply(v, [e, 1].concat(o.call(arguments, 1)))
        }, v.throttle = function(e, t, n) {
            var i, o, r, a = null,
                s = 0;
            n || (n = {});
            var l = function() {
                s = n.leading === !1 ? 0 : v.now(), a = null, r = e.apply(i, o), i = o = null
            };
            return function() {
                var u = v.now();
                s || n.leading !== !1 || (s = u);
                var c = t - (u - s);
                return i = this, o = arguments, c <= 0 ? (clearTimeout(a), a = null, s = u, r = e.apply(i, o), i = o = null) : a || n.trailing === !1 || (a = setTimeout(l, c)), r
            }
        }, v.keys = function(e) {
            if (!v.isObject(e)) return [];
            if (w) return w(e);
            var t = [];
            for (var n in e) v.has(e, n) && t.push(n);
            return t
        }, v.invert = function(e) {
            for (var t = {}, n = v.keys(e), i = 0, o = n.length; i < o; i++) t[e[n[i]]] = n[i];
            return t
        }, v.defaults = function(e) {
            return j(o.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) void 0 === e[n] && (e[n] = t[n])
            }), e
        }, v.extend = function(e) {
            return j(o.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) e[n] = t[n]
            }), e
        }, v.pick = function(e) {
            var n = {},
                i = r.apply(t, o.call(arguments, 1));
            return j(i, function(t) {
                t in e && (n[t] = e[t])
            }), n
        }, v.omit = function(e) {
            var n = {},
                i = r.apply(t, o.call(arguments, 1));
            for (var a in e) v.contains(i, a) || (n[a] = e[a]);
            return n
        }, v.clone = function(e) {
            return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
        }, v.isArray = g || function(e) {
            return "[object Array]" == a.call(e)
        }, v.isObject = function(e) {
            return e === Object(e)
        }, j(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            v["is" + e] = function(t) {
                return a.call(t) == "[object " + e + "]"
            }
        }), v.isArguments(arguments) || (v.isArguments = function(e) {
            return !(!e || !v.has(e, "callee"))
        }), v.isFunction = function(e) {
            return "function" == typeof e
        }, v.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, v.isNaN = function(e) {
            return v.isNumber(e) && e != +e
        }, v.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" == a.call(e)
        }, v.isNull = function(e) {
            return null === e
        }, v.isUndefined = function(e) {
            return void 0 === e
        }, v.has = function(e, t) {
            return s.call(e, t)
        }, v.identity = function(e) {
            return e
        }, v.constant = function(e) {
            return function() {
                return e
            }
        }, v.property = function(e) {
            return function(t) {
                return t[e]
            }
        }, v.propertyOf = function(e) {
            return null == e ? function() {} : function(t) {
                return e[t]
            }
        }, v.matches = function(e) {
            return function(t) {
                if (t === e) return !0;
                for (var n in e)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
        }, v.now = Date.now || function() {
            return (new Date).getTime()
        }, v.result = function(e, t) {
            if (null != e) {
                var n = e[t];
                return v.isFunction(n) ? n.call(e) : n
            }
        };
        var C = 0;
        return v.uniqueId = function(e) {
            var t = ++C + "";
            return e ? e + t : t
        }, v
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(9), n(1), n(25), n(33), n(23), n(34), n(14), n(60), n(35), n(63), n(144), n(143)], o = function(e, t, n, i, o, r, a, s, l, u, c, d) {
        var p = {};
        return p.log = function() {
            window.console && ("object" == typeof console.log ? console.log(Array.prototype.slice.call(arguments, 0)) : console.log.apply(console, arguments))
        }, p.between = function(e, t, n) {
            return Math.max(Math.min(e, n), t)
        }, p.foreach = function(e, t) {
            var n, i;
            for (n in e) "function" === p.typeOf(e.hasOwnProperty) ? e.hasOwnProperty(n) && (i = e[n], t(n, i)) : (i = e[n], t(n, i))
        }, p.indexOf = t.indexOf, p.noop = function() {}, p.seconds = e.seconds, p.prefix = e.prefix, p.suffix = e.suffix, t.extend(p, r, a, l, n, s, i, o, u, c, d), p
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = [],
            n = t.slice,
            i = {
                on: function(e, t, n) {
                    if (!r(this, "on", e, [t, n]) || !t) return this;
                    this._events || (this._events = {});
                    var i = this._events[e] || (this._events[e] = []);
                    return i.push({
                        callback: t,
                        context: n
                    }), this
                },
                once: function(t, n, i) {
                    if (!r(this, "once", t, [n, i]) || !n) return this;
                    var o = this,
                        a = e.once(function() {
                            o.off(t, a), n.apply(this, arguments)
                        });
                    return a._callback = n, this.on(t, a, i)
                },
                off: function(t, n, i) {
                    var o, a, s, l, u, c, d, p;
                    if (!this._events || !r(this, "off", t, [n, i])) return this;
                    if (!t && !n && !i) return this._events = void 0, this;
                    for (l = t ? [t] : e.keys(this._events), u = 0, c = l.length; u < c; u++)
                        if (t = l[u], s = this._events[t]) {
                            if (this._events[t] = o = [], n || i)
                                for (d = 0, p = s.length; d < p; d++) a = s[d], (n && n !== a.callback && n !== a.callback._callback || i && i !== a.context) && o.push(a);
                            o.length || delete this._events[t]
                        }
                    return this
                },
                trigger: function(e) {
                    if (!this._events) return this;
                    var t = n.call(arguments, 1);
                    if (!r(this, "trigger", e, t)) return this;
                    var i = this._events[e],
                        o = this._events.all;
                    return i && a(i, t, this), o && a(o, arguments, this), this
                },
                triggerSafe: function(e) {
                    if (!this._events) return this;
                    var t = n.call(arguments, 1);
                    if (!r(this, "trigger", e, t)) return this;
                    var i = this._events[e],
                        o = this._events.all;
                    return i && s(i, t, this, e), o && s(o, arguments, this, e), this
                }
            },
            o = /\s+/,
            r = function(e, t, n, i) {
                if (!n) return !0;
                if ("object" == typeof n) {
                    for (var r in n) e[t].apply(e, [r, n[r]].concat(i));
                    return !1
                }
                if (o.test(n)) {
                    for (var a = n.split(o), s = 0, l = a.length; s < l; s++) e[t].apply(e, [a[s]].concat(i));
                    return !1
                }
                return !0
            },
            a = function(e, t, n) {
                var i, o = -1,
                    r = e.length,
                    a = t[0],
                    s = t[1],
                    l = t[2];
                switch (t.length) {
                    case 0:
                        for (; ++o < r;)(i = e[o]).callback.call(i.context || n);
                        return;
                    case 1:
                        for (; ++o < r;)(i = e[o]).callback.call(i.context || n, a);
                        return;
                    case 2:
                        for (; ++o < r;)(i = e[o]).callback.call(i.context || n, a, s);
                        return;
                    case 3:
                        for (; ++o < r;)(i = e[o]).callback.call(i.context || n, a, s, l);
                        return;
                    default:
                        for (; ++o < r;)(i = e[o]).callback.apply(i.context || n, t);
                        return
                }
            },
            s = function(e, t, n, i) {
                for (var o, r = -1, a = e.length; ++r < a;) try {
                    o = e[r], o.callback.apply(o.context || n, t)
                } catch (s) {
                    console.log('Error in "' + i + '" event handler:', s)
                }
            };
        return i
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        var e = {
                DRAG: "drag",
                DRAG_START: "dragStart",
                DRAG_END: "dragEnd",
                CLICK: "click",
                DOUBLE_CLICK: "doubleClick",
                TAP: "tap",
                DOUBLE_TAP: "doubleTap",
                OVER: "over",
                MOVE: "move",
                OUT: "out"
            },
            t = {
                COMPLETE: "complete",
                ERROR: "error",
                JWPLAYER_AD_CLICK: "adClick",
                JWPLAYER_AD_COMPANIONS: "adCompanions",
                JWPLAYER_AD_COMPLETE: "adComplete",
                JWPLAYER_AD_ERROR: "adError",
                JWPLAYER_AD_IMPRESSION: "adImpression",
                JWPLAYER_AD_META: "adMeta",
                JWPLAYER_AD_PAUSE: "adPause",
                JWPLAYER_AD_PLAY: "adPlay",
                JWPLAYER_AD_SKIPPED: "adSkipped",
                JWPLAYER_AD_TIME: "adTime",
                JWPLAYER_CAST_AD_CHANGED: "castAdChanged",
                JWPLAYER_MEDIA_COMPLETE: "complete",
                JWPLAYER_READY: "ready",
                JWPLAYER_MEDIA_SEEK: "seek",
                JWPLAYER_MEDIA_BEFOREPLAY: "beforePlay",
                JWPLAYER_MEDIA_BEFORECOMPLETE: "beforeComplete",
                JWPLAYER_MEDIA_BUFFER_FULL: "bufferFull",
                JWPLAYER_DISPLAY_CLICK: "displayClick",
                JWPLAYER_PLAYLIST_COMPLETE: "playlistComplete",
                JWPLAYER_CAST_SESSION: "cast",
                JWPLAYER_MEDIA_ERROR: "mediaError",
                JWPLAYER_MEDIA_FIRST_FRAME: "firstFrame",
                JWPLAYER_MEDIA_PLAY_ATTEMPT: "playAttempt",
                JWPLAYER_MEDIA_LOADED: "loaded",
                JWPLAYER_MEDIA_SEEKED: "seeked",
                JWPLAYER_SETUP_ERROR: "setupError",
                JWPLAYER_ERROR: "error",
                JWPLAYER_PLAYER_STATE: "state",
                JWPLAYER_CAST_AVAILABLE: "castAvailable",
                JWPLAYER_MEDIA_BUFFER: "bufferChange",
                JWPLAYER_MEDIA_TIME: "time",
                JWPLAYER_MEDIA_TYPE: "mediaType",
                JWPLAYER_MEDIA_VOLUME: "volume",
                JWPLAYER_MEDIA_MUTE: "mute",
                JWPLAYER_MEDIA_META: "meta",
                JWPLAYER_MEDIA_LEVELS: "levels",
                JWPLAYER_MEDIA_LEVEL_CHANGED: "levelsChanged",
                JWPLAYER_CONTROLS: "controls",
                JWPLAYER_FULLSCREEN: "fullscreen",
                JWPLAYER_RESIZE: "resize",
                JWPLAYER_PLAYLIST_ITEM: "playlistItem",
                JWPLAYER_PLAYLIST_LOADED: "playlist",
                JWPLAYER_AUDIO_TRACKS: "audioTracks",
                JWPLAYER_AUDIO_TRACK_CHANGED: "audioTrackChanged",
                JWPLAYER_LOGO_CLICK: "logoClick",
                JWPLAYER_CAPTIONS_LIST: "captionsList",
                JWPLAYER_CAPTIONS_CHANGED: "captionsChanged",
                JWPLAYER_PROVIDER_CHANGED: "providerChanged",
                JWPLAYER_PROVIDER_FIRST_FRAME: "providerFirstFrame",
                JWPLAYER_USER_ACTION: "userAction",
                JWPLAYER_PROVIDER_CLICK: "providerClick",
                JWPLAYER_VIEW_TAB_FOCUS: "tabFocus",
                JWPLAYER_CONTROLBAR_DRAGGING: "scrubbing",
                JWPLAYER_INSTREAM_CLICK: "instreamClick"
            };
        return t.touchEvents = e, t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return {
            BUFFERING: "buffering",
            IDLE: "idle",
            COMPLETE: "complete",
            PAUSED: "paused",
            PLAYING: "playing",
            ERROR: "error",
            LOADING: "loading",
            STALLED: "stalled"
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t, n) {
    var i, o;
    i = [n(3), n(4), n(1), n(2)], o = function(e, t, n, i) {
        function o(e, t) {
            return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]["page" + t] : e["page" + t]
        }

        function r(e) {
            var t = e || window.event;
            return e instanceof MouseEvent && ("which" in t ? 3 === t.which : "button" in t && 2 === t.button)
        }

        function a(e, t, n) {
            var i;
            return i = t instanceof MouseEvent || !t.touches && !t.changedTouches ? t : t.touches && t.touches.length ? t.touches[0] : t.changedTouches[0], {
                type: e,
                target: t.target,
                currentTarget: n,
                pageX: i.pageX,
                pageY: i.pageY
            }
        }

        function s(e) {
            (e instanceof MouseEvent || e instanceof window.TouchEvent) && (e.preventManipulation && e.preventManipulation(), e.preventDefault && e.preventDefault())
        }
        var l = t.touchEvents,
            u = "PointerEvent" in window,
            c = "ontouchstart" in window,
            d = !(u || c && i.isMobile()),
            p = i.isFF() && i.isOSX(),
            f = function(e, t) {
                function i(e) {
                    "touch" !== e.pointerType && v(l.OVER, e)
                }

                function c(e) {
                    "touch" !== e.pointerType && v(l.MOVE, e)
                }

                function f(t) {
                    (d || u && "touch" !== t.pointerType && !e.contains(document.elementFromPoint(t.x, t.y))) && v(l.OUT, t)
                }

                function h(e, t, n) {
                    e.removeEventListener(t, n), e.addEventListener(t, n)
                }

                function g(n) {
                    j = n.target, E = o(n, "X"), k = o(n, "Y"), r(n) || ("pointerdown" === n.type && n.isPrimary ? (t.preventScrolling && (y = n.pointerId, e.setPointerCapture(y)), h(e, "pointermove", w), h(e, "pointercancel", m), "mouse" === n.pointerType && "OBJECT" === j.nodeName ? h(document, "mouseup", m) : h(e, "pointerup", m)) : "mousedown" === n.type ? (h(document, "mousemove", w), p && "object" === n.target.nodeName.toLowerCase() ? h(e, "click", m) : h(document, "mouseup", m)) : "touchstart" === n.type && (h(j, "touchmove", w), h(j, "touchcancel", m), h(j, "touchend", m)), t.preventScrolling && s(n))
                }

                function w(e) {
                    var n = 6;
                    if (x) v(l.DRAG, e);
                    else {
                        var i = o(e, "X"),
                            r = o(e, "Y"),
                            a = i - E,
                            u = r - k;
                        a * a + u * u > n * n && (v(l.DRAG_START, e), x = !0, v(l.DRAG, e))
                    }
                    t.preventScrolling && s(e)
                }

                function m(n) {
                    var i = "pointerup" === n.type || "pointercancel" === n.type;
                    i && t.preventScrolling && e.releasePointerCapture(y), e.removeEventListener("pointermove", w), e.removeEventListener("pointercancel", m), e.removeEventListener("pointerup", m), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", m), j.removeEventListener("touchmove", w), j.removeEventListener("touchcancel", m), j.removeEventListener("touchend", m), x ? v(l.DRAG_END, n) : t.directSelect && n.target !== e || n.type.indexOf("cancel") !== -1 || ("mouseup" === n.type || "click" === n.type || i && "mouse" === n.pointerType ? v(l.CLICK, n) : (v(l.TAP, n), "touchend" === n.type && s(n))), j = null, x = !1
                }

                function v(e, i) {
                    var o;
                    if (t.enableDoubleTap && (e === l.CLICK || e === l.TAP))
                        if (n.now() - C < A) {
                            var r = e === l.CLICK ? l.DOUBLE_CLICK : l.DOUBLE_TAP;
                            o = a(r, i, b), L.trigger(r, o), C = 0
                        } else C = n.now();
                    o = a(e, i, b), L.trigger(e, o)
                }
                var j, y, b = e,
                    x = !1,
                    E = 0,
                    k = 0,
                    C = 0,
                    A = 300;
                t = t || {}, u ? (e.addEventListener("pointerdown", g), t.useHover && (e.addEventListener("pointerover", i), e.addEventListener("pointerout", f)), t.useMove && e.addEventListener("pointermove", c)) : (d && (e.addEventListener("mousedown", g), t.useHover && (e.addEventListener("mouseover", i), e.addEventListener("mouseout", f)), t.useMove && e.addEventListener("mousemove", c)), e.addEventListener("touchstart", g));
                var L = this;
                return this.triggerEvent = v, this.destroy = function() {
                    e.removeEventListener("touchstart", g), e.removeEventListener("mousedown", g), j && (j.removeEventListener("touchmove", w), j.removeEventListener("touchcancel", m), j.removeEventListener("touchend", m), j = null), u && (t.preventScrolling && e.releasePointerCapture(y), e.removeEventListener("pointerover", i), e.removeEventListener("pointerdown", g), e.removeEventListener("pointermove", w), e.removeEventListener("pointermove", c), e.removeEventListener("pointercancel", m), e.removeEventListener("pointerout", f), e.removeEventListener("pointerup", m)), e.removeEventListener("click", m), e.removeEventListener("mouseover", i), e.removeEventListener("mousemove", c), e.removeEventListener("mouseout", f), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", m)
                }, this
            };
        return n.extend(f.prototype, e), f
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    e.exports = n(82)["default"]
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        function t(e) {
            return /[\(,]format=m3u8-/i.test(e) ? "m3u8" : !!/[\(,]format=mpd-/i.test(e) && "mpd"
        }
        var n = function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            i = function(e, t, n) {
                for (e = "" + e, n = n || "0"; e.length < t;) e = n + e;
                return e
            },
            o = function(e, t) {
                for (var n = 0; n < e.attributes.length; n++)
                    if (e.attributes[n].name && e.attributes[n].name.toLowerCase() === t.toLowerCase()) return e.attributes[n].value.toString();
                return ""
            },
            r = function(e) {
                if (!e || "rtmp" === e.substr(0, 4)) return "";
                var n = t(e);
                return n ? n : (e = e.split("?")[0].split("#")[0], e.lastIndexOf(".") > -1 ? e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase() : void 0)
            },
            a = function(e) {
                var t = parseInt(e / 3600),
                    n = parseInt(e / 60) % 60,
                    o = e % 60;
                return i(t, 2) + ":" + i(n, 2) + ":" + i(o.toFixed(3), 6)
            },
            s = function(t, n) {
                if (e.isNumber(t)) return t;
                t = t.replace(",", ".");
                var i = t.split(":"),
                    o = i.length,
                    r = 0;
                if ("s" === t.slice(-1)) r = parseFloat(t);
                else if ("m" === t.slice(-1)) r = 60 * parseFloat(t);
                else if ("h" === t.slice(-1)) r = 3600 * parseFloat(t);
                else if (o > 1) {
                    var a = o - 1;
                    4 === o && (n && (r = parseFloat(i[a]) / n), a -= 1), r += parseFloat(i[a]), r += 60 * parseFloat(i[a - 1]), o >= 3 && (r += 3600 * parseFloat(i[a - 2]))
                } else r = parseFloat(t);
                return r
            },
            l = function(t, n) {
                return e.map(t, function(e) {
                    return n + e
                })
            },
            u = function(t, n) {
                return e.map(t, function(e) {
                    return e + n
                })
            };
        return {
            trim: n,
            pad: i,
            xmlAttribute: o,
            extension: r,
            hms: a,
            seconds: s,
            suffix: u,
            prefix: l
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t) {
    "use strict";

    function n(e) {
        return c[e]
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++)
            for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
        return e
    }

    function o(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t) return n;
        return -1
    }

    function r(e) {
        if ("string" != typeof e) {
            if (e && e.toHTML) return e.toHTML();
            if (null == e) return "";
            if (!e) return e + "";
            e = "" + e
        }
        return p.test(e) ? e.replace(d, n) : e
    }

    function a(e) {
        return !e && 0 !== e || !(!g(e) || 0 !== e.length)
    }

    function s(e) {
        var t = i({}, e);
        return t._parent = e, t
    }

    function l(e, t) {
        return e.path = t, e
    }

    function u(e, t) {
        return (e ? e + "." : "") + t
    }
    t.__esModule = !0, t.extend = i, t.indexOf = o, t.escapeExpression = r, t.isEmpty = a, t.createFrame = s, t.blockParams = l, t.appendContextPath = u;
    var c = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
            "=": "&#x3D;"
        },
        d = /[&<>"'`=]/g,
        p = /[&<>"'`=]/,
        f = Object.prototype.toString;
    t.toString = f;
    var h = function(e) {
        return "function" == typeof e
    };
    h(/x/) && (t.isFunction = h = function(e) {
        return "function" == typeof e && "[object Function]" === f.call(e)
    }), t.isFunction = h;
    var g = Array.isArray || function(e) {
        return !(!e || "object" != typeof e) && "[object Array]" === f.call(e)
    };
    t.isArray = g
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(4), n(5), n(1)], o = function(e, t, n, i) {
        var o = e.noop,
            r = i.constant(!1),
            a = {
                supports: r,
                play: o,
                load: o,
                stop: o,
                volume: o,
                mute: o,
                seek: o,
                resize: o,
                remove: o,
                destroy: o,
                setVisibility: o,
                setFullscreen: r,
                getFullscreen: o,
                getContainer: o,
                setContainer: r,
                getName: o,
                getQualityLevels: o,
                getCurrentQuality: o,
                setCurrentQuality: o,
                getAudioTracks: o,
                getCurrentAudioTrack: o,
                setCurrentAudioTrack: o,
                checkComplete: o,
                setControls: o,
                attachMedia: o,
                detachMedia: o,
                setState: function(e) {
                    var i = this.state || n.IDLE;
                    this.state = e, e !== i && this.trigger(t.JWPLAYER_PLAYER_STATE, {
                        newstate: e
                    })
                },
                sendMediaType: function(e) {
                    var n = e[0].type,
                        i = "oga" === n || "aac" === n || "mp3" === n || "mpeg" === n || "vorbis" === n;
                    this.trigger(t.JWPLAYER_MEDIA_TYPE, {
                        mediaType: i ? "audio" : "video"
                    })
                }
            };
        return a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = {},
            n = {
                TIT2: "title",
                TT2: "title",
                WXXX: "url",
                TPE1: "artist",
                TP1: "artist",
                TALB: "album",
                TAL: "album"
            };
        return t.utf8ArrayToStr = function(e, t) {
            var n, i, o, r, a, s;
            for (n = "", o = e.length, i = t || 0; i < o;)
                if (r = e[i++], 0 !== r && 3 !== r) switch (r >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        n += String.fromCharCode(r);
                        break;
                    case 12:
                    case 13:
                        a = e[i++], n += String.fromCharCode((31 & r) << 6 | 63 & a);
                        break;
                    case 14:
                        a = e[i++], s = e[i++], n += String.fromCharCode((15 & r) << 12 | (63 & a) << 6 | (63 & s) << 0)
                }
            return n
        }, t.utf16BigEndianArrayToStr = function(e, t) {
            var n, i, o;
            for (n = "", o = e.length - 1, i = t || 0; i < o;) 254 === e[i] && 255 === e[i + 1] || (n += String.fromCharCode((e[i] << 8) + e[i + 1])), i += 2;
            return n
        }, t.syncSafeInt = function(e) {
            var n = t.arrayToInt(e);
            return 127 & n | (32512 & n) >> 1 | (8323072 & n) >> 2 | (2130706432 & n) >> 3
        }, t.arrayToInt = function(e) {
            for (var t = "0x", n = 0; n < e.length; n++) t += e[n].toString(16);
            return parseInt(t)
        }, t.parseID3 = function(i) {
            return e.reduce(i, function(i, o) {
                if (!("value" in o) && "data" in o && o.data instanceof ArrayBuffer) {
                    var r = o,
                        a = new Uint8Array(r.data),
                        s = a.length;
                    o = {
                        value: {
                            key: "",
                            data: ""
                        }
                    };
                    for (var l = 10; l < 14 && l < a.length && 0 !== a[l];) o.value.key += String.fromCharCode(a[l]), l++;
                    var u = 19,
                        c = a[u];
                    3 !== c && 0 !== c || (c = a[++u], s--);
                    var d = 0;
                    if (1 !== c && 2 !== c)
                        for (var p = u + 1; p < s; p++)
                            if (0 === a[p]) {
                                d = p - u;
                                break
                            }
                    if (d > 0) {
                        var f = t.utf8ArrayToStr(a.subarray(u, u += d), 0);
                        if ("PRIV" === o.value.key) {
                            if ("com.apple.streaming.transportStreamTimestamp" === f) {
                                var h = 1 & t.syncSafeInt(a.subarray(u, u += 4)),
                                    g = t.syncSafeInt(a.subarray(u, u += 4));
                                h && (g += 4294967296), o.value.data = g
                            } else o.value.data = t.utf8ArrayToStr(a, u + 1);
                            o.value.info = f
                        } else o.value.info = f, o.value.data = t.utf8ArrayToStr(a, u + 1)
                    } else {
                        var w = a[u];
                        1 === w || 2 === w ? o.value.data = t.utf16BigEndianArrayToStr(a, u + 1) : o.value.data = t.utf8ArrayToStr(a, u + 1)
                    }
                }
                if (n.hasOwnProperty(o.value.key) && (i[n[o.value.key]] = o.value.data), o.value.info) {
                    var m = i[o.value.key];
                    e.isObject(m) || (m = {}, i[o.value.key] = m), m[o.value.info] = o.value.data
                } else i[o.value.key] = o.value.data;
                return i
            }, {})
        }, t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(4), n(3), n(1)], o = function(e, t, n) {
        var i = {},
            o = {
                NEW: 0,
                LOADING: 1,
                ERROR: 2,
                COMPLETE: 3
            },
            r = function(r, a) {
                function s(t) {
                    c = o.ERROR, u.trigger(e.ERROR, t)
                }

                function l(t) {
                    c = o.COMPLETE, u.trigger(e.COMPLETE, t)
                }
                var u = n.extend(this, t),
                    c = o.NEW;
                this.addEventListener = this.on, this.removeEventListener = this.off, this.makeStyleLink = function(e) {
                    var t = document.createElement("link");
                    return t.type = "text/css", t.rel = "stylesheet", t.href = e, t
                }, this.makeScriptTag = function(e) {
                    var t = document.createElement("script");
                    return t.src = e, t
                }, this.makeTag = a ? this.makeStyleLink : this.makeScriptTag, this.load = function() {
                    if (c === o.NEW) {
                        var t = i[r];
                        if (t && (c = t.getStatus(), c < 2)) return t.on(e.ERROR, s), void t.on(e.COMPLETE, l);
                        var n = document.getElementsByTagName("head")[0] || document.documentElement,
                            u = this.makeTag(r),
                            d = !1;
                        u.onload = u.onreadystatechange = function(e) {
                            d || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d = !0, l(e), u.onload = u.onreadystatechange = null, n && u.parentNode && !a && n.removeChild(u))
                        }, u.onerror = s, n.insertBefore(u, n.firstChild), c = o.LOADING, i[r] = this
                    }
                }, this.getStatus = function() {
                    return c
                }
            };
        return r.loaderstatus = o, r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = "free",
            n = "premium",
            i = "enterprise",
            o = "platinum",
            r = "ads",
            a = "unlimited",
            s = "trial",
            l = {
                setup: [t, n, i, r, a, s, o],
                dash: [n, i, r, a, s, o],
                drm: [i, r, a, s],
                hls: [n, r, i, a, s, o],
                ads: [r, a, s, o, i],
                casting: [n, i, r, a, s, o],
                jwpsrv: [t, n, i, r, s, o]
            },
            u = function(t) {
                return function(n) {
                    return e.contains(l[n], t)
                }
            };
        return u
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t) {
    "use strict";

    function n(e, t) {
        var o = t && t.loc,
            r = void 0,
            a = void 0;
        o && (r = o.start.line, a = o.start.column, e += " - " + r + ":" + a);
        for (var s = Error.prototype.constructor.call(this, e), l = 0; l < i.length; l++) this[i[l]] = s[i[l]];
        Error.captureStackTrace && Error.captureStackTrace(this, n);
        try {
            o && (this.lineNumber = r, Object.defineProperty ? Object.defineProperty(this, "column", {
                value: a
            }) : this.column = a)
        } catch (u) {}
    }
    t.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    n.prototype = new Error, t["default"] = n, e.exports = t["default"]
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return {
            createId: function(e, t) {
                var n, i = e.kind || "cc";
                return n = e["default"] || e.defaulttrack ? "default" : e._id || e.file || i + t
            },
            createLabel: function(e, t) {
                var n = e.label || e.name || e.language;
                return n || (n = "Unknown CC", t += 1, t > 1 && (n += " [" + t + "]")), {
                    label: n,
                    unknownCount: t
                }
            }
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2), n(20), n(31), n(130), n(46)], o = function(e, t, i, o, r, a) {
        function s(e, t, n, a) {
            var s, u, c = e.responseXML ? e.responseXML.firstChild : null;
            if (c)
                for ("xml" === i.localName(c) && (c = c.nextSibling); c.nodeType === c.COMMENT_NODE;) c = c.nextSibling;
            try {
                if (c && "tt" === i.localName(c)) s = r(e.responseXML), u = this.convertToVTTCues(s), delete t.xhr, n(u);
                else {
                    var d = e.responseText;
                    d.indexOf("WEBVTT") >= 0 ? l(d, t, n, a) : (s = o(d), u = this.convertToVTTCues(s), delete t.xhr, n(u))
                }
            } catch (p) {
                delete t.xhr, a(p)
            }
        }

        function l(e, t, i, o) {
            n.e(12, function(require) {
                var r = n(47),
                    a = new r(window),
                    s = [];
                a.oncue = function(e) {
                    s.push(e)
                }, a.onflush = function() {
                    delete t.xhr, i(s)
                };
                try {
                    a.parse(e).flush()
                } catch (l) {
                    delete t.xhr, o(l)
                }
            })
        }
        var u = {};
        return u.loadFile = function(e, n, i) {
            e.xhr = t.ajax(e.file, function(t) {
                s.call(u, t, e, n, i)
            }, i)
        }, u.cancelXhr = function(t) {
            e.each(t, function(e) {
                var t = e.xhr;
                t && (t.onload = null, t.onreadystatechange = null, t.onerror = null, "abort" in t && t.abort()), delete e.xhr
            })
        }, u.convertToVTTCues = function(t) {
            var n = e.map(t, function(e) {
                return new a(e.begin, e.end, e.text)
            });
            return n
        }, u
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(9)], o = function(e) {
        return {
            localName: function(e) {
                return e ? e.localName ? e.localName : e.baseName ? e.baseName : "" : ""
            },
            textContent: function(t) {
                return t ? t.textContent ? e.trim(t.textContent) : t.text ? e.trim(t.text) : "" : ""
            },
            getChildNode: function(e, t) {
                return e.childNodes[t]
            },
            numChildren: function(e) {
                return e.childNodes ? e.childNodes.length : 0
            }
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(134), n(135), n(52), n(24)], o = function(e, t, n, i) {
        var o = {},
            r = {},
            a = function(n, i) {
                return r[n] = new e(new t(o), i), r[n]
            },
            s = function(e, t, r, a) {
                var s = i.getPluginName(e);
                o[s] || (o[s] = new n(e)), o[s].registerPlugin(e, t, r, a)
            };
        return {
            loadPlugins: a,
            registerPlugin: s
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return {
            repo:"",
            SkinsIncluded: ["seven"],
            SkinsLoadable: ["beelden", "bekle", "five", "glow", "roundster", "six", "stormtrooper", "vapor"],
            dvrSeekLimit: -25
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(9), n(167)], o = function(e, t) {
        function n(e) {
            e = e.split("-");
            for (var t = 1; t < e.length; t++) e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
            return e.join("")
        }

        function i(t, n, i) {
            if ("" === n || void 0 === n || null === n) return "";
            var o = i ? " !important" : "";
            return "string" == typeof n && isNaN(n) ? /png|gif|jpe?g/i.test(n) && n.indexOf("url") < 0 ? "url(" + n + ")" : n + o : 0 === n || "z-index" === t || "opacity" === t ? "" + n + o : /color/i.test(t) ? "#" + e.pad(n.toString(16).replace(/^0x/i, ""), 6) + o : Math.ceil(n) + "px" + o
        }
        var o = function(e, n, i) {
                i = i || "all-players";
                var o = "";
                if ("object" == typeof n) {
                    var a;
                    for (a in n) break;
                    if (!a) return;
                    var s = document.createElement("div");
                    r(s, n), o = "{" + s.style.cssText + "}"
                } else "string" == typeof n && (o = n);
                t.style([
                    [e, e + o]
                ], i)
            },
            r = function(e, t) {
                if (void 0 !== e && null !== e) {
                    void 0 === e.length && (e = [e]);
                    var o, r = {};
                    for (o in t) r[o] = i(o, t[o]);
                    for (var a = 0; a < e.length; a++) {
                        var s, l = e[a];
                        if (void 0 !== l && null !== l)
                            for (o in r) s = n(o), l.style[s] !== r[o] && (l.style[s] = r[o])
                    }
                }
            },
            a = function(e, t) {
                r(e, {
                    transform: t,
                    webkitTransform: t,
                    msTransform: t,
                    mozTransform: t,
                    oTransform: t
                })
            },
            s = function(e, t) {
                var n = "rgb";
                e ? (e = String(e).replace("#", ""), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2])) : e = "000000";
                var i = [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)];
                return void 0 !== t && 100 !== t && (n += "a", i.push(t / 100)), n + "(" + i.join(",") + ")"
            };
        return {
            css: o,
            style: r,
            clearCss: t.clear,
            transform: a,
            hexToRgba: s
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(9)], o = function(e) {
        var t = {},
            n = t.pluginPathType = {
                ABSOLUTE: 0,
                RELATIVE: 1,
                CDN: 2
            };
        return t.getPluginPathType = function(t) {
            if ("string" == typeof t) {
                t = t.split("?")[0];
                var i = t.indexOf("://");
                if (i > 0) return n.ABSOLUTE;
                var o = t.indexOf("/"),
                    r = e.extension(t);
                return !(i < 0 && o < 0) || r && isNaN(r) ? n.RELATIVE : n.CDN
            }
        }, t.getPluginName = function(e) {
            return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, "$2")
        }, t.getPluginVersion = function(e) {
            return e.replace(/[^-]*-?([^\.]*).*$/, "$1")
        }, t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        function t(e) {
            return function() {
                return i(e)
            }
        }
        var n = {},
            i = e.memoize(function(e) {
                var t = navigator.userAgent.toLowerCase();
                return null !== t.match(e)
            }),
            o = n.isInt = function(e) {
                return parseFloat(e) % 1 === 0
            };
        n.isFlashSupported = function() {
            var e = n.flashVersion();
            return e && e >= 11.2
        }, n.isFF = t(/gecko\//i), n.isIPod = t(/iP(hone|od)/i), n.isIPad = t(/iPad/i), n.isSafari602 = t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i), n.isOSX = t(/Mac OS X/i);
        var r = n.isEdge = function(e) {
                return i(e ? new RegExp("\\sedge\\/" + e, "i") : /\sEdge\/\d+/i)
            },
            a = n.isIETrident = t(/trident\/.+rv:\s*11/i),
            s = n.isMSIE = function(e) {
                return e ? (e = parseFloat(e).toFixed(1), i(new RegExp("msie\\s*" + e, "i"))) : i(/msie/i)
            };
        n.isChrome = function() {
            return i(/\s(?:Chrome|CriOS)\//i) && !n.isEdge()
        }, n.isIE = function(e) {
            return e ? (e = parseFloat(e).toFixed(1), e >= 12 ? r(e) : e >= 11 ? a() : s(e)) : r() || a() || s()
        }, n.isSafari = function() {
            return i(/safari/i) && !i(/chrome/i) && !i(/crios/i) && !i(/chromium/i) && !i(/android/i)
        };
        var l = n.isIOS = function(e) {
            return i(e ? new RegExp("iP(hone|ad|od).+\\s(OS\\s" + e + "|.*\\sVersion/" + e + ")", "i") : /iP(hone|ad|od)/i)
        };
        n.isAndroidNative = function(e) {
            return u(e, !0)
        };
        var u = n.isAndroid = function(e, t) {
            return !(t && i(/chrome\/[123456789]/i) && !i(/chrome\/18/)) && (e ? (o(e) && !/\./.test(e) && (e = "" + e + "."), i(new RegExp("Android\\s*" + e, "i"))) : i(/Android/i))
        };
        return n.isMobile = function() {
            return l() || u()
        }, n.isIframe = function() {
            return window.frameElement && "IFRAME" === window.frameElement.nodeName
        }, n.flashVersion = function() {
            if (n.isAndroid()) return 0;
            var e, t = navigator.plugins;
            if (t && (e = t["Shockwave Flash"], e && e.description)) return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
            if ("undefined" != typeof window.ActiveXObject) {
                try {
                    if (e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
                } catch (i) {
                    return 0
                }
                return e
            }
            return 0
        }, n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return "7.9.1+commercial_v7-9-1.156.commercial.e05360.jwplayer.b85544.freewheel.f5bb34.googima.f2c593.vast.9a56a3.analytics.898d43.plugin-gapro.7e936b.plugin-related.d1b3e9.plugin-sharing.a93859.vr-plugin.84df0c.hls.js."
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(16)], o = function(e, t) {
        var n, i = [{
                configName: "clearkey",
                keyName: "org.w3.clearkey"
            }, {
                configName: "widevine",
                keyName: "com.widevine.alpha"
            }, {
                configName: "playready",
                keyName: "com.microsoft.playready"
            }],
            o = [],
            r = {},
            a = function(t) {
                var n = t.get("playlist");
                return !!t.get("drm") || e.some(n, function(t) {
                    return !!t.drm || e.some(t.sources, function(e) {
                        return !!e.drm
                    })
                })
            },
            s = function(e) {
                return new Promise(function(t, n) {
                    var i;
                    try {
                        i = new window.MSMediaKeys(e)
                    } catch (o) {}
                    i ? t() : n()
                })
            },
            l = function(t) {
                var a = s;
                return navigator.requestMediaKeySystemAccess && (a = navigator.requestMediaKeySystemAccess.bind(navigator)), n ? n.then(t) : (e.forEach(i, function(e) {
                    var t = a(e.keyName, [{}]).then(function() {
                        r[e.configName] = !0
                    }, function() {
                        r[e.configName] = !1
                    });
                    o.push(t)
                }), n = Promise.all(o).then(t));
            },
            u = function() {
                return !!navigator.requestMediaKeySystemAccess && !!MediaKeySystemAccess.prototype.getConfiguration || !!window.MSMediaKeys
            },
            c = function(e) {
                return r[e]
            },
            d = function(t) {
                n || console.error('DRM only supported with "drm" block in initial setup.', t);
                var i = e.keys(t);
                return e.some(i, function(e) {
                    return c(e)
                })
            };
        return {
            containsDrm: a,
            probe: function(e, n) {
                u() && t(n)("drm") ? l(e) : e()
            },
            anySupported: d,
            isSupported: c
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r, a = null != t ? t : {},
                s = n.helperMissing,
                l = "function",
                u = e.escapeExpression;
            return '<div class="jw-display-icon-container jw-display-icon-' + u((r = null != (r = n.iconName || (null != t ? t.iconName : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "iconName",
                hash: {},
                data: o
            }) : r)) + ' jw-background-color jw-reset">\n  <div class="jw-icon jw-icon-' + u((r = null != (r = n.iconName || (null != t ? t.iconName : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "iconName",
                hash: {},
                data: o
            }) : r)) + ' jw-button-color jw-reset" role="button" tabindex="0" aria-label="' + u((r = null != (r = n.ariaLabel || (null != t ? t.ariaLabel : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "ariaLabel",
                hash: {},
                data: o
            }) : r)) + '"></div>\n</div>\n'
        },
        useData: !0
    })
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(39), n(126), n(1), n(3), n(142), n(4), n(5)], o = function(e, t, n, i, o, r, a, s) {
        var l = function() {
                function r(e, t) {
                    var n = i.extend({}, t, {
                            type: e
                        }),
                        o = this.mediaModel;
                    switch (e) {
                        case "flashThrottle":
                            var r = "resume" !== t.state;
                            this.set("flashThrottle", r), this.set("flashBlocked", r);
                            break;
                        case "flashBlocked":
                            return void this.set("flashBlocked", !0);
                        case "flashUnblocked":
                            return void this.set("flashBlocked", !1);
                        case "volume":
                            return void this.set(e, t[e]);
                        case "mute":
                            return void(this.get("autostartMuted") || this.set(e, t[e]));
                        case a.JWPLAYER_MEDIA_TYPE:
                            return void(o.get("mediaType") !== t.mediaType && (o.set("mediaType", t.mediaType), this.mediaController.trigger(e, n)));
                        case a.JWPLAYER_PLAYER_STATE:
                            return void o.set("state", t.newstate);
                        case a.JWPLAYER_MEDIA_BUFFER:
                            this.set("buffer", t.bufferPercent);
                        case a.JWPLAYER_MEDIA_META:
                            var l = t.duration;
                            i.isNumber(l) && !i.isNaN(l) && (o.set("duration", l), this.set("duration", l));
                            break;
                        case a.JWPLAYER_MEDIA_BUFFER_FULL:
                            o.get("playAttempt") ? this.playVideo() : o.on("change:playAttempt", function() {
                                this.playVideo()
                            }, this);
                            break;
                        case a.JWPLAYER_MEDIA_TIME:
                            o.set("position", t.position), this.set("position", t.position), i.isNumber(t.duration) && (o.set("duration", t.duration), this.set("duration", t.duration));
                            break;
                        case a.JWPLAYER_PROVIDER_CHANGED:
                            this.set("provider", d.getName());
                            break;
                        case a.JWPLAYER_MEDIA_LEVELS:
                            this.setQualityLevel(t.currentQuality, t.levels), o.set("levels", t.levels);
                            break;
                        case a.JWPLAYER_MEDIA_LEVEL_CHANGED:
                            this.setQualityLevel(t.currentQuality, t.levels), this.persistQualityLevel(t.currentQuality, t.levels);
                            break;
                        case a.JWPLAYER_AUDIO_TRACKS:
                            this.setCurrentAudioTrack(t.currentTrack, t.tracks), o.set("audioTracks", t.tracks);
                            break;
                        case a.JWPLAYER_AUDIO_TRACK_CHANGED:
                            this.setCurrentAudioTrack(t.currentTrack, t.tracks);
                            break;
                        case "subtitlesTrackChanged":
                            this.persistVideoSubtitleTrack(t.currentTrack, t.tracks);
                            break;
                        case "visualQuality":
                            var u = i.extend({}, t);
                            o.set("visualQuality", u);
                            break;
                        case "autoplayFailed":
                            this.set("autostartFailed", !0), o.get("state") === s.PLAYING && o.set("state", s.PAUSED)
                    }
                    this.mediaController.trigger(e, n)
                }

                function l() {
                    return !!e.isIOS() && !(e.isIOS(6) || e.isIOS(7) || e.isIOS(8) || e.isIOS(9))
                }
                var c, d, p = this,
                    f = e.noop;
                this.mediaController = i.extend({}, o), this.mediaModel = new u, n.model(this), this.set("mediaModel", this.mediaModel), this.setup = function(e) {
                    return i.extend(this.attributes, e, {
                        item: 0,
                        state: s.IDLE,
                        flashBlocked: !1,
                        fullscreen: !1,
                        scrubbing: !1,
                        duration: 0,
                        position: 0,
                        buffer: 0
                    }), this.updateProviders(), this
                }, this.getConfiguration = function() {
                    return i.omit(this.clone(), ["mediaModel"])
                }, this.updateProviders = function() {
                    c = new t(this.getConfiguration())
                }, this.setQualityLevel = function(e, t) {
                    e > -1 && t.length > 1 && "youtube" !== d.getName().name && this.mediaModel.set("currentLevel", parseInt(e))
                }, this.persistQualityLevel = function(e, t) {
                    var n = t[e] || {},
                        i = n.label;
                    this.set("qualityLabel", i)
                }, this.setCurrentAudioTrack = function(e, t) {
                    e > -1 && t.length > 0 && e < t.length && this.mediaModel.set("currentAudioTrack", parseInt(e))
                }, this.onMediaContainer = function() {
                    var e = this.get("mediaContainer");
                    f.setContainer(e)
                }, this.changeVideoProvider = function(e) {
                    if (this.off("change:mediaContainer", this.onMediaContainer), d && (d.off(null, null, this), d.getContainer() && d.remove(), delete d.instreamMode), !e) return d = f = e, void this.set("provider", void 0);
                    f = new e(p.get("id"), p.getConfiguration());
                    var t = this.get("mediaContainer");
                    t ? f.setContainer(t) : this.once("change:mediaContainer", this.onMediaContainer), this.set("provider", f.getName()), f.getName().name.indexOf("flash") === -1 && (this.set("flashThrottle", void 0), this.set("flashBlocked", !1)), d = f, d.volume(p.get("volume")), d.mute(this.autoStartOnMobile() || p.get("mute")), d.on("all", r, this), this.get("instreamMode") === !0 && (d.instreamMode = !0), this.set("renderCaptionsNatively", d.renderNatively)
                }, this.destroy = function() {
                    this.off(), d && (d.off(null, null, this), d.destroy())
                }, this.getVideo = function() {
                    return d
                }, this.setFullscreen = function(e) {
                    e = !!e, e !== p.get("fullscreen") && p.set("fullscreen", e)
                }, this.chooseProvider = function(e) {
                    return c.choose(e).provider
                }, this.setItemIndex = function(e) {
                    var t = this.get("playlist");
                    e = parseInt(e, 10) || 0, e = (e + t.length) % t.length, this.set("item", e), this.set("playlistItem", t[e]), this.setActiveItem(t[e])
                }, this.setActiveItem = function(t) {
                    this.mediaModel.off(), this.mediaModel = new u, this.set("mediaModel", this.mediaModel), this.set("position", t.starttime || 0), this.set("minDvrWindow", t.minDvrWindow), this.set("duration", t.duration && e.seconds(t.duration) || 0), this.setProvider(t)
                }, this.setProvider = function(e) {
                    var t = e && e.sources && e.sources[0];
                    if (void 0 !== t) {
                        var n = this.chooseProvider(t);
                        n && f instanceof n || p.changeVideoProvider(n), f && (f.init && f.init(e), this.trigger("itemReady", e))
                    }
                }, this.getProviders = function() {
                    return c
                }, this.resetProvider = function() {
                    f = null
                }, this.setVolume = function(e) {
                    e = Math.round(e), this.set("volume", e), d && d.volume(e);
                    var t = 0 === e;
                    t !== this.getMute() && this.setMute(t)
                }, this.getMute = function() {
                    return this.get("autostartMuted") || this.get("mute")
                }, this.setMute = function(t) {
                    if (e.exists(t) || (t = !this.getMute()), this.set("mute", t), d && d.mute(t), !t) {
                        var n = Math.max(10, this.get("volume"));
                        this.set("autostartMuted", !1), this.setVolume(n)
                    }
                }, this.loadVideo = function(t) {
                    if (!t) {
                        var n = this.get("item");
                        t = this.get("playlist")[n]
                    }
                    this.set("position", t.starttime || 0), this.set("duration", t.duration && e.seconds(t.duration) || 0), this.mediaModel.set("playAttempt", !0), this.mediaController.trigger(a.JWPLAYER_MEDIA_PLAY_ATTEMPT, {
                        playReason: this.get("playReason")
                    }), d.load(t)
                }, this.stopVideo = function() {
                    d && d.stop()
                }, this.playVideo = function() {
                    d.play()
                }, this.persistCaptionsTrack = function() {
                    var e = this.get("captionsTrack");
                    e ? this.set("captionLabel", e.name) : this.set("captionLabel", "Off")
                }, this.setVideoSubtitleTrack = function(e, t) {
                    this.set("captionsIndex", e), e && t && e <= t.length && t[e - 1].data && this.set("captionsTrack", t[e - 1]), d && d.setSubtitlesTrack && d.setSubtitlesTrack(e)
                }, this.persistVideoSubtitleTrack = function(e, t) {
                    this.setVideoSubtitleTrack(e, t), this.persistCaptionsTrack()
                }, this.setNextUp = function(e) {
                    this.set("nextUp", e)
                }, this.autoStartOnMobile = function() {
                    return this.get("autostart") && !this.get("sdkplatform") && (l() && e.isSafari() || e.isAndroid() && e.isChrome()) && (!this.get("advertising") || this.get("advertising").autoplayadsmuted)
                }
            },
            u = l.MediaModel = function() {
                this.set("state", s.IDLE)
            };
        return i.extend(l.prototype, r), i.extend(u.prototype, r), l
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(5)], o = function(e) {
        function t(t) {
            return t === e.COMPLETE || t === e.ERROR ? e.IDLE : t
        }
        return function(e, n, i) {
            if (n = t(n), i = t(i), n !== i) {
                var o = n.replace(/(?:ing|d)$/, ""),
                    r = {
                        type: o,
                        newstate: n,
                        oldstate: i,
                        reason: e.mediaModel.get("state")
                    };
                "play" === o ? r.playReason = e.get("playReason") : "pause" === o && (r.pauseReason = e.get("pauseReason")), this.trigger(o, r)
            }
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(9)], o = function(e, t) {
        function n(e) {
            var t = {},
                n = e.split("\r\n");
            1 === n.length && (n = e.split("\n"));
            var o = 1;
            if (n[0].indexOf(" --> ") > 0 && (o = 0), n.length > o + 1 && n[o + 1]) {
                var r = n[o],
                    a = r.indexOf(" --> ");
                a > 0 && (t.begin = i(r.substr(0, a)), t.end = i(r.substr(a + 5)), t.text = n.slice(o + 1).join("\r\n"))
            }
            return t
        }
        var i = e.seconds;
        return function(e) {
            var i = [];
            e = t.trim(e);
            var o = e.split("\r\n\r\n");
            1 === o.length && (o = e.split("\n\n"));
            for (var r = 0; r < o.length; r++)
                if ("WEBVTT" !== o[r]) {
                    var a = n(o[r]);
                    a.text && i.push(a)
                }
            return i
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(51), n(133)], o = function(e, t, n) {
        var i = {
            sources: [],
            tracks: [],
            minDvrWindow: 120
        };
        return function(o) {
            o = o || {}, e.isArray(o.tracks) || delete o.tracks;
            var r = e.extend({}, i, o);
            e.isObject(r.sources) && !e.isArray(r.sources) && (r.sources = [t(r.sources)]), e.isArray(r.sources) && 0 !== r.sources.length || (o.levels ? r.sources = o.levels : r.sources = [t(o)]);
            for (var a = 0; a < r.sources.length; a++) {
                var s = r.sources[a];
                if (s) {
                    var l = s["default"];
                    l ? s["default"] = "true" === l.toString() : s["default"] = !1, r.sources[a].label || (r.sources[a].label = a.toString()), r.sources[a] = t(r.sources[a])
                }
            }
            return r.sources = e.compact(r.sources), e.isArray(r.tracks) || (r.tracks = []), e.isArray(r.captions) && (r.tracks = r.tracks.concat(r.captions), delete r.captions), r.tracks = e.compact(e.map(r.tracks, n)), r
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(9), n(1), n(141)], o = function(e, t, n) {
        var i = {};
        i.createElement = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e, t.firstChild
        }, i.styleDimension = function(e) {
            return e + (e.toString().indexOf("%") > 0 ? "" : "px")
        };
        var o = function(e) {
                return t.isString(e.className) ? e.className.split(" ") : []
            },
            r = function(t, n) {
                n = e.trim(n), t.className !== n && (t.className = n)
            };
        return i.classList = function(e) {
            return e.classList ? e.classList : o(e)
        }, i.hasClass = n.hasClass, i.addClass = function(e, n) {
            var i = o(e),
                a = t.isArray(n) ? n : n.split(" ");
            t.each(a, function(e) {
                t.contains(i, e) || i.push(e)
            }), r(e, i.join(" "))
        }, i.removeClass = function(e, n) {
            var i = o(e),
                a = t.isArray(n) ? n : n.split(" ");
            r(e, t.difference(i, a).join(" "))
        }, i.replaceClass = function(e, t, n) {
            var i = e.className || "";
            t.test(i) ? i = i.replace(t, n) : n && (i += " " + n), r(e, i)
        }, i.toggleClass = function(e, n, o) {
            var r = i.hasClass(e, n);
            o = t.isBoolean(o) ? o : !r, o !== r && (o ? i.addClass(e, n) : i.removeClass(e, n))
        }, i.emptyElement = function(e) {
            for (; e.firstChild;) e.removeChild(e.firstChild)
        }, i.addStyleSheet = function(e) {
            var t = document.createElement("link");
            t.rel = "stylesheet", t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
        }, i.empty = function(e) {
            if (e)
                for (; e.childElementCount > 0;) e.removeChild(e.children[0])
        }, i.bounds = function(e) {
            var t = {
                left: 0,
                right: 0,
                width: 0,
                height: 0,
                top: 0,
                bottom: 0
            };
            if (!e || !document.body.contains(e)) return t;
            var n = e.getBoundingClientRect(),
                i = window.pageYOffset,
                o = window.pageXOffset;
            return n.width || n.height || n.left || n.top ? (t.left = n.left + o, t.right = n.right + o, t.top = n.top + i, t.bottom = n.bottom + i, t.width = n.right - n.left, t.height = n.bottom - n.top, t) : t
        }, i
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(35)], o = function(e, t) {
        function n(e) {
            return /^(?:(?:https?|file)\:)?\/\//.test(e)
        }

        function i(t) {
            return e.some(t, function(e) {
                return "parsererror" === e.nodeName
            })
        }
        var o = {};
        return o.getAbsolutePath = function(e, i) {
            if (t.exists(i) || (i = document.location.href), t.exists(e)) {
                if (n(e)) return e;
                var o, r = i.substring(0, i.indexOf("://") + 3),
                    a = i.substring(r.length, i.indexOf("/", r.length + 1));
                if (0 === e.indexOf("/")) o = e.split("/");
                else {
                    var s = i.split("?")[0];
                    s = s.substring(r.length + a.length + 1, s.lastIndexOf("/")), o = s.split("/").concat(e.split("/"))
                }
                for (var l = [], u = 0; u < o.length; u++) o[u] && t.exists(o[u]) && "." !== o[u] && (".." === o[u] ? l.pop() : l.push(o[u]));
                return r + a + "/" + l.join("/")
            }
        }, o.getScriptPath = e.memoize(function(e) {
            for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
                var i = t[n].src;
                if (i && i.indexOf(e) >= 0) return i.substr(0, i.indexOf(e))
            }
            return ""
        }), o.parseXML = function(e) {
            var t = null;
            try {
                "DOMParser" in window ? (t = (new window.DOMParser).parseFromString(e, "text/xml"), (i(t.childNodes) || t.childNodes && i(t.childNodes[0].childNodes)) && (t = null)) : (t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch (n) {}
            return t
        }, o.serialize = function(e) {
            if (void 0 === e) return null;
            if ("string" == typeof e && e.length < 6) {
                var t = e.toLowerCase();
                if ("true" === t) return !0;
                if ("false" === t) return !1;
                if (!isNaN(Number(e)) && !isNaN(parseFloat(e))) return Number(e)
            }
            return e
        }, o.parseDimension = function(e) {
            return "string" == typeof e ? "" === e ? 0 : e.lastIndexOf("%") > -1 ? e : parseInt(e.replace("px", ""), 10) : e
        }, o.timeFormat = function(t, n) {
            if (t <= 0 && !n || e.isNaN(parseInt(t))) return "00:00";
            var i = t < 0 ? "-" : "";
            t = Math.abs(t);
            var o = Math.floor(t / 3600),
                r = Math.floor((t - 3600 * o) / 60),
                a = Math.floor(t % 60);
            return i + (o ? o + ":" : "") + (r < 10 ? "0" : "") + r + ":" + (a < 10 ? "0" : "") + a
        }, o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = {};
        return t.exists = function(e) {
            switch (typeof e) {
                case "string":
                    return e.length > 0;
                case "object":
                    return null !== e;
                case "undefined":
                    return !1
            }
            return !0
        }, t.isHTTPS = function() {
            return 0 === window.location.href.indexOf("https")
        }, t.isRtmp = function(e, t) {
            return 0 === e.indexOf("rtmp") || "rtmp" === t
        }, t.isYouTube = function(e, t) {
            return "youtube" === t || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)
        }, t.youTubeID = function(e) {
            var t = /v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e);
            return t ? t.slice(1).join("").replace("?", "") : ""
        }, t.typeOf = function(t) {
            if (null === t) return "null";
            var n = typeof t;
            return "object" === n && e.isArray(t) ? "array" : n
        }, t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(62), n(7), n(110), n(2)], o = function(e, t, n, i) {
        var o = function(e) {
                var t = i.bounds(e),
                    n = window.pageXOffset;
                return n && i.isAndroid() && document.body.parentElement.getBoundingClientRect().left >= 0 && (t.left -= n, t.right -= n), t
            },
            r = e.extend({
                constructor: function(e, t) {
                    this.className = e + " jw-background-color jw-reset", this.orientation = t, this.dragStartListener = this.dragStart.bind(this), this.dragMoveListener = this.dragMove.bind(this), this.dragEndListener = this.dragEnd.bind(this), this.tapListener = this.tap.bind(this), this.setup()
                },
                setup: function() {
                    var e = {
                        "default": this["default"],
                        className: this.className,
                        orientation: "jw-slider-" + this.orientation
                    };
                    this.el = i.createElement(n(e)), this.elementRail = this.el.getElementsByClassName("jw-slider-container")[0], this.elementBuffer = this.el.getElementsByClassName("jw-buffer")[0], this.elementProgress = this.el.getElementsByClassName("jw-progress")[0], this.elementThumb = this.el.getElementsByClassName("jw-knob")[0], this.userInteract = new t(this.element(), {
                        preventScrolling: !0
                    }), this.userInteract.on("dragStart", this.dragStartListener), this.userInteract.on("drag", this.dragMoveListener), this.userInteract.on("dragEnd", this.dragEndListener), this.userInteract.on("tap click", this.tapListener)
                },
                dragStart: function() {
                    this.trigger("dragStart"), this.railBounds = o(this.elementRail)
                },
                dragEnd: function(e) {
                    this.dragMove(e), this.trigger("dragEnd")
                },
                dragMove: function(e) {
                    var t, n, r = this.railBounds = this.railBounds ? this.railBounds : o(this.elementRail);
                    "horizontal" === this.orientation ? (t = e.pageX, n = t < r.left ? 0 : t > r.right ? 100 : 100 * i.between((t - r.left) / r.width, 0, 1)) : (t = e.pageY, n = t >= r.bottom ? 0 : t <= r.top ? 100 : 100 * i.between((r.height - (t - r.top)) / r.height, 0, 1));
                    var a = this.limit(n);
                    return this.render(a), this.update(a), !1
                },
                tap: function(e) {
                    this.railBounds = o(this.elementRail), this.dragMove(e)
                },
                limit: function(e) {
                    return e
                },
                update: function(e) {
                    this.trigger("update", {
                        percentage: e
                    })
                },
                render: function(e) {
                    e = Math.max(0, Math.min(e, 100)), "horizontal" === this.orientation ? (this.elementThumb.style.left = e + "%", this.elementProgress.style.width = e + "%") : (this.elementThumb.style.bottom = e + "%", this.elementProgress.style.height = e + "%")
                },
                updateBuffer: function(e) {
                    this.elementBuffer.style.width = e + "%"
                },
                element: function() {
                    return this.el
                }
            });
        return r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(62), n(2)], o = function(e, t) {
        var n = e.extend({
            constructor: function(e, t, n) {
                this.el = document.createElement("div"), this.el.className = "jw-icon jw-icon-tooltip " + e + " jw-button-color jw-reset jw-hidden", t && (this.el.setAttribute("tabindex", "0"), this.el.setAttribute("role", "button"), this.el.setAttribute("aria-label", t)), n === !0 ? this.el.setAttribute("aria-hidden", "false") : this.el.setAttribute("aria-hidden", "true"), this.container = document.createElement("div"), this.container.className = "jw-overlay jw-reset", this.openClass = "jw-open", this.componentType = "tooltip", this.el.appendChild(this.container)
            },
            addContent: function(e) {
                this.content && this.removeContent(), this.content = e, this.container.appendChild(e)
            },
            removeContent: function() {
                this.content && (this.container.removeChild(this.content), this.content = null)
            },
            hasContent: function() {
                return !!this.content
            },
            element: function() {
                return this.el
            },
            openTooltip: function(e) {
                this.trigger("open-" + this.componentType, e, {
                    isOpen: !0
                }), this.isOpen = !0, t.toggleClass(this.el, this.openClass, this.isOpen)
            },
            closeTooltip: function(e) {
                this.trigger("close-" + this.componentType, e, {
                    isOpen: !1
                }), this.isOpen = !1, t.toggleClass(this.el, this.openClass, this.isOpen)
            },
            toggleOpenState: function(e) {
                this.isOpen ? this.closeTooltip(e) : this.openTooltip(e)
            }
        });
        return n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(25), n(16), n(1), n(138), n(27)], o = function(e, t, n, i, o) {
        function r() {
            return !!window.MediaSource && !!window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
        }

        function a(i, r) {
            if (e.isSafari()) return !1;
            var a = t(r);
            if (!a("dash")) return !1;
            if (i.drm && !o.anySupported(i.drm)) return !1;
            var s = window.MediaSource;
            if (!window.HTMLVideoElement || !s) return !1;
            var l = !0;
            return i.mediaTypes && (l = n.all(i.mediaTypes, function(e) {
                return s.isTypeSupported(e)
            })), l && ("dash" === i.type || "mpd" === i.type || (i.file || "").indexOf("mpd-time-csf") > -1)
        }
        var s = n.find(i, n.matches({
                name: "flash"
            })),
            l = s.supports;
        s.supports = function(n, i) {
            if (!e.isFlashSupported() || n.drm) return !1;
            var o = n && n.type;
            if ("hls" === o || "m3u8" === o) {
                var r = t(i);
                return r("hls")
            }
            return l.apply(this, arguments)
        };
        var u = n.find(i, n.matches({
                name: "html5"
            })),
            c = u.supports;
        return u.supports = function(e, n) {
            var i = c.apply(this, arguments);
            if (i && e.drm && "hls" === e.type) {
                var o = t(n),
                    r = o("drm");
                if (r && e.drm.fairplay) {
                    var a = window.WebKitMediaKeys;
                    return a && a.isTypeSupported && a.isTypeSupported("com.apple.fps.1_0", "video/mp4")
                }
                return r
            }
            return i
        }, i.push({
            name: "shaka",
            supports: a
        }), i.splice(1, 0, {
            name: "hlsjs",
            supports: function(n, i) {
                var o = e.isChrome() || e.isFF() || e.isIE(11) && n.hlsjsdefault,
                    a = e.isAndroid() && n.hlsjsdefault;
                if (o && r() && (!e.isMobile() || a) && !n.drm) {
                    var s = n && n.type,
                        l = n && n.file;
                    if (l.indexOf(".m3u8") > -1 || "hls" === s || "m3u8" === s) {
                        var u = t(i);
                        return u("hls")
                    }
                }
            }
        }), i
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(139), n(1), n(38)], o = function(e, t) {
        function i(e, n, i) {
            var o = t.indexOf(e, t.findWhere(e, {
                    name: i
                })),
                r = t.indexOf(e, t.findWhere(e, {
                    name: n
                }));
            if (!(r < o)) {
                var a = e.splice(r, 1)[0];
                e.splice(o, 0, a)
            }
        }
        var o, r = e.registerProvider,
            a = e.prototype.reorderProviders;
        return t.extend(e.loaders, {
            shaka: function(e) {
                n.e(2, function(require) {
                    var t = n(71);
                    r(t), e(t)
                })
            },
            hlsjs: function(e) {
                n.e(1, function(require) {
                    var t = n(43);
                    t["default"] && (t = t["default"]), t.setEdition && t.setEdition(o), r(t), e(t)
                })
            }
        }), t.extend(e.prototype, {
            reorderProviders: function(e) {
                var t = a.call(this, e);
                return "flash" !== e ? i(t, "hlsjs", "flash") : (i(t, "flash", "hlsjs"), i(t, "hlsjs", "html5")), t
            },
            providerSupports: function(e, t) {
                return o = this.config.edition, e.supports(t, o)
            }
        }), e
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , , , , function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t, n) {
        this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this)
    }
    t.__esModule = !0, t.HandlebarsEnvironment = o;
    var r = n(11),
        a = n(17),
        s = i(a),
        l = n(85),
        u = n(83),
        c = n(93),
        d = i(c),
        p = "4.0.5";
    t.VERSION = p;
    var f = 7;
    t.COMPILER_REVISION = f;
    var h = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0"
    };
    t.REVISION_CHANGES = h;
    var g = "[object Object]";
    o.prototype = {
        constructor: o,
        logger: d["default"],
        log: d["default"].log,
        registerHelper: function(e, t) {
            if (r.toString.call(e) === g) {
                if (t) throw new s["default"]("Arg not supported with multiple helpers");
                r.extend(this.helpers, e)
            } else this.helpers[e] = t
        },
        unregisterHelper: function(e) {
            delete this.helpers[e]
        },
        registerPartial: function(e, t) {
            if (r.toString.call(e) === g) r.extend(this.partials, e);
            else {
                if ("undefined" == typeof t) throw new s["default"]('Attempting to register a partial called "' + e + '" as undefined');
                this.partials[e] = t
            }
        },
        unregisterPartial: function(e) {
            delete this.partials[e]
        },
        registerDecorator: function(e, t) {
            if (r.toString.call(e) === g) {
                if (t) throw new s["default"]("Arg not supported with multiple decorators");
                r.extend(this.decorators, e)
            } else this.decorators[e] = t
        },
        unregisterDecorator: function(e) {
            delete this.decorators[e]
        }
    };
    var w = d["default"].log;
    t.log = w, t.createFrame = r.createFrame, t.logger = d["default"]
}, , function(e, t, n) {
    var i;
    i = function() {
        function e(e) {
            if ("string" != typeof e) return !1;
            var t = r[e.toLowerCase()];
            return !!t && e.toLowerCase()
        }

        function t(e) {
            if ("string" != typeof e) return !1;
            var t = a[e.toLowerCase()];
            return !!t && e.toLowerCase()
        }

        function n(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) e[i] = n[i]
            }
            return e
        }

        function i(i, r, a) {
            var s = this,
                l = /MSIE\s8\.0/.test(navigator.userAgent),
                u = {};
            l ? s = document.createElement("custom") : u.enumerable = !0, s.hasBeenReset = !1;
            var c = "",
                d = !1,
                p = i,
                f = r,
                h = a,
                g = null,
                w = "",
                m = !0,
                v = "auto",
                j = "start",
                y = 50,
                b = "middle",
                x = 50,
                E = "middle";
            if (Object.defineProperty(s, "id", n({}, u, {
                    get: function() {
                        return c
                    },
                    set: function(e) {
                        c = "" + e
                    }
                })), Object.defineProperty(s, "pauseOnExit", n({}, u, {
                    get: function() {
                        return d
                    },
                    set: function(e) {
                        d = !!e
                    }
                })), Object.defineProperty(s, "startTime", n({}, u, {
                    get: function() {
                        return p
                    },
                    set: function(e) {
                        if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                        p = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "endTime", n({}, u, {
                    get: function() {
                        return f
                    },
                    set: function(e) {
                        if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                        f = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "text", n({}, u, {
                    get: function() {
                        return h
                    },
                    set: function(e) {
                        h = "" + e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "region", n({}, u, {
                    get: function() {
                        return g
                    },
                    set: function(e) {
                        g = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "vertical", n({}, u, {
                    get: function() {
                        return w
                    },
                    set: function(t) {
                        var n = e(t);
                        if (n === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                        w = n, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "snapToLines", n({}, u, {
                    get: function() {
                        return m
                    },
                    set: function(e) {
                        m = !!e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "line", n({}, u, {
                    get: function() {
                        return v
                    },
                    set: function(e) {
                        if ("number" != typeof e && e !== o) throw new SyntaxError("An invalid number or illegal string was specified.");
                        v = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "lineAlign", n({}, u, {
                    get: function() {
                        return j
                    },
                    set: function(e) {
                        var n = t(e);
                        if (!n) throw new SyntaxError("An invalid or illegal string was specified.");
                        j = n, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "position", n({}, u, {
                    get: function() {
                        return y
                    },
                    set: function(e) {
                        if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                        y = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "positionAlign", n({}, u, {
                    get: function() {
                        return b
                    },
                    set: function(e) {
                        var n = t(e);
                        if (!n) throw new SyntaxError("An invalid or illegal string was specified.");
                        b = n, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "size", n({}, u, {
                    get: function() {
                        return x
                    },
                    set: function(e) {
                        if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                        x = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "align", n({}, u, {
                    get: function() {
                        return E
                    },
                    set: function(e) {
                        var n = t(e);
                        if (!n) throw new SyntaxError("An invalid or illegal string was specified.");
                        E = n, this.hasBeenReset = !0
                    }
                })), s.displayState = void 0, l) return s
        }
        if (window.VTTCue) return window.VTTCue;
        var o = "auto",
            r = {
                "": !0,
                lr: !0,
                rl: !0
            },
            a = {
                start: !0,
                middle: !0,
                end: !0,
                left: !0,
                right: !0
            };
        return i.prototype.getCueAsHTML = function() {
            var e = window.WebVTT;
            return e.convertCueToDOMTree(window, this.text)
        }, i
    }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
}, , function(e, t, n) {
    var i, o;
    i = [n(9), n(20), n(131), n(132), n(32)], o = function(e, t, n, i, o) {
        function r(t) {
            for (var r = {}, s = 0; s < t.childNodes.length; s++) {
                var l = t.childNodes[s],
                    c = u(l);
                if (c) switch (c.toLowerCase()) {
                    case "enclosure":
                        r.file = e.xmlAttribute(l, "url");
                        break;
                    case "title":
                        r.title = a(l);
                        break;
                    case "guid":
                        r.mediaid = a(l);
                        break;
                    case "pubdate":
                        r.date = a(l);
                        break;
                    case "description":
                        r.description = a(l);
                        break;
                    case "link":
                        r.link = a(l);
                        break;
                    case "category":
                        r.tags ? r.tags += a(l) : r.tags = a(l)
                }
            }
            return r = i(t, r), r = n(t, r), new o(r)
        }
        var a = t.textContent,
            s = t.getChildNode,
            l = t.numChildren,
            u = t.localName,
            c = {};
        return c.parse = function(e) {
            for (var t = [], n = 0; n < l(e); n++) {
                var i = s(e, n),
                    o = u(i).toLowerCase();
                if ("channel" === o)
                    for (var a = 0; a < l(i); a++) {
                        var c = s(i, a);
                        "item" === u(c).toLowerCase() && t.push(r(c))
                    }
            }
            return t
        }, c
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(20), n(48), n(2), n(4), n(3), n(1)], o = function(e, t, n, i, o, r) {
        var a = function() {
            function a(o) {
                var a = n.tryCatch(function() {
                    var n, a = o.responseXML ? o.responseXML.childNodes : null,
                        s = "";
                    if (a) {
                        for (var c = 0; c < a.length && (s = a[c], 8 === s.nodeType); c++);
                        "xml" === e.localName(s) && (s = s.nextSibling), "rss" === e.localName(s) && (n = {
                            playlist: t.parse(s)
                        })
                    }
                    if (!n) try {
                        var d = JSON.parse(o.responseText);
                        if (r.isArray(d)) n = {
                            playlist: d
                        };
                        else {
                            if (!r.isArray(d.playlist)) throw null;
                            n = d
                        }
                    } catch (p) {
                        return void l("Not a valid RSS/JSON feed")
                    }
                    u.trigger(i.JWPLAYER_PLAYLIST_LOADED, n)
                });
                a instanceof n.Error && l()
            }

            function s(e) {
                l("Playlist load error: " + e)
            }

            function l(e) {
                u.trigger(i.JWPLAYER_ERROR, {
                    message: e ? e : "Error loading file"
                })
            }
            var u = r.extend(this, o);
            this.load = function(e) {
                n.ajax(e, a, s)
            }, this.destroy = function() {
                this.off()
            }
        };
        return a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(32), n(51), n(1), n(39)], o = function(e, t, n, i) {
        function o(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n],
                    o = t.choose(i);
                if (o) return {
                    type: i.type,
                    provider: o.providerToCheck
                }
            }
            return null
        }

        function r(e, t) {
            return n.isUndefined(e) ? t : e
        }
        var a = function(t) {
            return t = n.isArray(t) ? t : [t], n.compact(n.map(t, e))
        };
        a.filterPlaylist = function(e, t) {
            var i = [],
                o = t.getProviders(),
                r = t.get("preload"),
                a = t.get("feedid");
            return n.each(e, function(e) {
                e = n.extend({}, e), e.allSources = s(e, t), e.sources = l(e.allSources, o), e.sources.length && (e.file = e.sources[0].file, (e.preload || r) && (e.preload = e.preload || r), (e.feedid || a) && (e.feedid = e.feedid || a), i.push(e))
            }), i
        };
        var s = function(e, i) {
                var o = e.sources,
                    a = i.get("androidhls"),
                    s = e.drm || i.get("drm"),
                    l = e.preload || i.get("preload"),
                    u = r(e.withCredentials, i.get("withCredentials")),
                    c = i.get("hlsjsdefault");
                return n.compact(n.map(o, function(e) {
                    if (n.isObject(e)) {
                        void 0 !== a && null !== a && (e.androidhls = a), (e.drm || s) && (e.drm = e.drm || s), (e.preload || l) && (e.preload = e.preload || l);
                        var i = r(e.withCredentials, u);
                        return n.isUndefined(i) || (e.withCredentials = i), c && (e.hlsjsdefault = c), t(e)
                    }
                }))
            },
            l = function(e, t) {
                t && t.choose || (t = new i({
                    primary: t ? "flash" : null
                }));
                var r = o(e, t);
                if (!r) return [];
                var a = r.provider,
                    s = r.type;
                return n.filter(e, function(e) {
                    return e.type === s && t.providerSupports(a, e)
                })
            };
        return a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(9), n(1)], o = function(e, t, n) {
        var i = {
                "default": !1
            },
            o = function(o) {
                if (o && o.file) {
                    var r = n.extend({}, i, o);
                    r.file = t.trim("" + r.file);
                    var a = /^[^\/]+\/(?:x-)?([^\/]+)$/;
                    if (a.test(r.type) && (r.mimeType = r.type, r.type = r.type.replace(a, "$1")), e.isYouTube(r.file) ? r.type = "youtube" : e.isRtmp(r.file) ? r.type = "rtmp" : r.type || (r.type = t.extension(r.file)), r.type) {
                        switch (r.type) {
                            case "m3u8":
                            case "vnd.apple.mpegurl":
                                r.type = "hls";
                                break;
                            case "dash+xml":
                                r.type = "dash";
                                break;
                            case "smil":
                                r.type = "rtmp";
                                break;
                            case "m4a":
                                r.type = "aac"
                        }
                        return n.each(r, function(e, t) {
                            "" === e && delete r[t]
                        }), r
                    }
                }
            };
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(24), n(4), n(3), n(15), n(1)], o = function(e, t, n, i, o, r) {
        var a = {
                FLASH: 0,
                JAVASCRIPT: 1,
                HYBRID: 2
            },
            s = function(s) {
                function l() {
                    switch (t.getPluginPathType(s)) {
                        case t.pluginPathType.ABSOLUTE:
                            return s;
                        case t.pluginPathType.RELATIVE:
                            return e.getAbsolutePath(s, window.location.href)
                    }
                }

                function u() {
                    r.defer(function() {
                        w = o.loaderstatus.COMPLETE, g.trigger(n.COMPLETE)
                    })
                }

                function c() {
                    w = o.loaderstatus.ERROR, g.trigger(n.ERROR, {
                        url: s
                    })
                }
                var d, p, f, h, g = r.extend(this, i),
                    w = o.loaderstatus.NEW;
                this.load = function() {
                    if (w === o.loaderstatus.NEW) {
                        if (s.lastIndexOf(".swf") > 0) return d = s, w = o.loaderstatus.COMPLETE, void g.trigger(n.COMPLETE);
                        if (t.getPluginPathType(s) === t.pluginPathType.CDN) return w = o.loaderstatus.COMPLETE, void g.trigger(n.COMPLETE);
                        w = o.loaderstatus.LOADING;
                        var e = new o(l());
                        e.on(n.COMPLETE, u), e.on(n.ERROR, c), e.load()
                    }
                }, this.registerPlugin = function(e, t, i, r) {
                    h && (clearTimeout(h), h = void 0), f = t, i && r ? (d = r, p = i) : "string" == typeof i ? d = i : "function" == typeof i ? p = i : i || r || (d = e), w = o.loaderstatus.COMPLETE, g.trigger(n.COMPLETE)
                }, this.getStatus = function() {
                    return w
                }, this.getPluginName = function() {
                    return t.getPluginName(s)
                }, this.getFlashPath = function() {
                    if (d) switch (t.getPluginPathType(d)) {
                        case t.pluginPathType.ABSOLUTE:
                            return d;
                        case t.pluginPathType.RELATIVE:
                            return s.lastIndexOf(".swf") > 0 ? e.getAbsolutePath(d, window.location.href) : e.getAbsolutePath(d, l())
                    }
                    return null
                }, this.getJS = function() {
                    return p
                }, this.getTarget = function() {
                    return f
                }, this.getPluginmode = function() {
                    return void 0 !== typeof d && void 0 !== typeof p ? a.HYBRID : void 0 !== typeof d ? a.FLASH : void 0 !== typeof p ? a.JAVASCRIPT : void 0
                }, this.getNewInstance = function(e, t, n) {
                    return new p(e, t, n)
                }, this.getURL = function() {
                    return s
                }
            };
        return s
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , , , , , function(e, t, n) {
    var i, o;
    i = [n(25)], o = function(e) {
        return function(t) {
            if ("hls" === t.type) {
                if (t.androidhls === !1 && e.isAndroid()) return !1;
                var n = e.isAndroidNative;
                if (n(2) || n(3) || n("4.0")) return !1;
                if (e.isAndroid() && !e.isFF()) return !0
            }
            return null
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t, n) {
    var i, o;
    i = [n(1), n(34)], o = function(e, t) {
        function n(e) {
            e.onload = null, e.onprogress = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()
        }

        function i(t, i) {
            return function(o) {
                var r = o.currentTarget || i.xhr;
                if (clearTimeout(i.timeoutId), i.retryWithoutCredentials && i.xhr.withCredentials) {
                    n(r);
                    var a = e.extend({}, i, {
                        xhr: null,
                        withCredentials: !1,
                        retryWithoutCredentials: !1
                    });
                    return void d(a)
                }
                i.onerror(t, i.url, r)
            }
        }

        function o(e) {
            return function(t) {
                var n = t.currentTarget || e.xhr;
                if (4 === n.readyState) {
                    if (clearTimeout(e.timeoutId), n.status >= 400) {
                        var i;
                        return i = 404 === n.status ? "File not found" : "" + n.status + "(" + n.statusText + ")", e.onerror(i, e.url, n)
                    }
                    if (200 === n.status) return r(e)(t)
                }
            }
        }

        function r(e) {
            return function(n) {
                var i = n.currentTarget || e.xhr;
                if (clearTimeout(e.timeoutId), e.responseType) {
                    if ("json" === e.responseType) return a(i, e)
                } else {
                    var o, r = i.responseXML;
                    if (r) try {
                        o = r.firstChild
                    } catch (l) {}
                    if (r && o) return s(i, r, e);
                    if (u && i.responseText && !r && (r = t.parseXML(i.responseText), r && r.firstChild)) return s(i, r, e);
                    if (e.requireValidXML) return void e.onerror("Invalid XML", e.url, i)
                }
                e.oncomplete(i)
            }
        }

        function a(t, n) {
            if (!t.response || e.isString(t.response) && '"' !== t.responseText.substr(1)) try {
                t = e.extend({}, t, {
                    response: JSON.parse(t.responseText)
                })
            } catch (i) {
                return void n.onerror("Invalid JSON", n.url, t)
            }
            return n.oncomplete(t)
        }

        function s(t, n, i) {
            var o = n.documentElement;
            return i.requireValidXML && ("parsererror" === o.nodeName || o.getElementsByTagName("parsererror").length) ? void i.onerror("Invalid XML", i.url, t) : (t.responseXML || (t = e.extend({}, t, {
                responseXML: n
            })), i.oncomplete(t))
        }
        var l = function() {},
            u = !1,
            c = function(e) {
                var t = document.createElement("a"),
                    n = document.createElement("a");
                t.href = location.href;
                try {
                    return n.href = e, n.href = n.href, t.protocol + "//" + t.host != n.protocol + "//" + n.host
                } catch (i) {}
                return !0
            },
            d = function(t, a, s, d) {
                e.isObject(t) && (d = t, t = d.url);
                var p, f = e.extend({
                    xhr: null,
                    url: t,
                    withCredentials: !1,
                    retryWithoutCredentials: !1,
                    timeout: 6e4,
                    timeoutId: -1,
                    oncomplete: a || l,
                    onerror: s || l,
                    mimeType: d && !d.responseType ? "text/xml" : "",
                    requireValidXML: !1,
                    responseType: d && d.plainText ? "text" : ""
                }, d);
                if ("XDomainRequest" in window && c(t)) p = f.xhr = new window.XDomainRequest, p.onload = r(f), p.ontimeout = p.onprogress = l, u = !0;
                else {
                    if (!("XMLHttpRequest" in window)) return void f.onerror("", t);
                    p = f.xhr = new window.XMLHttpRequest, p.onreadystatechange = o(f);
                }
                var h = i("Error loading file", f);
                p.onerror = h, "overrideMimeType" in p ? f.mimeType && p.overrideMimeType(f.mimeType) : u = !0;
                try {
                    t = t.replace(/#.*$/, ""), p.open("GET", t, !0)
                } catch (g) {
                    return h(g), p
                }
                if (f.responseType) try {
                    p.responseType = f.responseType
                } catch (g) {}
                f.timeout && (f.timeoutId = setTimeout(function() {
                    n(p), f.onerror("Timeout", t, p)
                }, f.timeout), p.onabort = function() {
                    clearTimeout(f.timeoutId)
                });
                try {
                    f.withCredentials && "withCredentials" in p && (p.withCredentials = !0), p.send()
                } catch (g) {
                    h(g)
                }
                return p
            };
        return {
            ajax: d,
            crossdomain: c
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(3), n(1)], o = function(e, t, n) {
        function i(e, t, n) {
            var i = document.createElement("param");
            i.setAttribute("name", t), i.setAttribute("value", n), e.appendChild(i)
        }

        function o(e, t, n) {
            Object.defineProperty(e, t, {
                get: function() {
                    return n
                }
            })
        }

        function r(r, a, u, c) {
            var d, p = !0;
            if (c = c || "opaque", e.isMSIE()) {
                var f = document.createElement("div");
                a.appendChild(f), f.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="' + u + '" name="' + u + '" tabindex="0"><param name="movie" value="' + r + '"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="' + c + '"><param name="bgcolor" value="' + l + '"><param name="menu" value="false"></object>';
                for (var h = a.getElementsByTagName("object"), g = h.length; g--;) h[g].id === u && (d = h[g])
            } else d = document.createElement("object"), d.setAttribute("type", "application/x-shockwave-flash"), d.setAttribute("data", r), d.setAttribute("width", "100%"), d.setAttribute("height", "100%"), d.setAttribute("bgcolor", l), d.setAttribute("id", u), d.setAttribute("name", u), i(d, "allowfullscreen", "true"), i(d, "allowscriptaccess", "always"), i(d, "wmode", c), i(d, "menu", "false"), a.appendChild(d, a);
            return d.className = "jw-swf jw-reset", d.style.display = "block", d.style.position = "absolute", d.style.left = 0, d.style.right = 0, d.style.top = 0, d.style.bottom = 0, e.isIE() && "PointerEvent" in window && (d.style.pointerEvents = "none"), o(d, "on", t.on), o(d, "once", t.once), o(d, "off", t.off), o(d, "trigger", t.trigger), o(d, "_events", {}), o(d, "triggerFlash", function(t) {
                if ("setupCommandQueue" === t && (p = !1), "setup" !== t && p || !d.__externalCall) {
                    for (var i = d.__commandQueue, o = i.length; o--;) i[o][0] === t && i.splice(o, 1);
                    return i.push(Array.prototype.slice.call(arguments)), d
                }
                var r = Array.prototype.slice.call(arguments, 1),
                    a = e.tryCatch(function() {
                        if (r.length) {
                            for (var e = r.length; e--;) "object" == typeof r[e] && n.each(r[e], s);
                            var i = JSON.stringify(r);
                            d.__externalCall(t, i)
                        } else d.__externalCall(t)
                    });
                return a instanceof e.Error && (console.error(t, a), "setup" === t) ? (a.name = "Failed to setup flash", a) : d
            }), o(d, "__commandQueue", []), d
        }

        function a(e) {
            e && e.parentNode && (e.style.display = "none", e.parentNode.removeChild(e))
        }

        function s(e, t, n) {
            e instanceof window.HTMLElement && delete n[t]
        }
        var l = "#000000";
        return {
            embed: r,
            remove: a
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(3), n(1)], o = function(e, t) {
        function n() {}
        var i = function(e, n) {
            var i, o = this;
            i = e && t.has(e, "constructor") ? e.constructor : function() {
                return o.apply(this, arguments)
            }, t.extend(i, o, n);
            var r = function() {
                this.constructor = i
            };
            return r.prototype = o.prototype, i.prototype = new r, e && t.extend(i.prototype, e), i.__super__ = o.prototype, i
        };
        return n.extend = i, t.extend(n.prototype, e), n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(22), n(1), n(35), n(34), n(26)], o = function(e, t, n, i, o) {
        var r = {};
        return r.repo = t.memoize(function() {
            var t = o.split("+")[0],
                i = e.repo + t + "/";
            return n.isHTTPS() ? i.replace(/^http:/, "https:") : i
        }), r.versionCheck = function(e) {
            var t = ("0" + e).split(/\W/),
                n = o.split(/\W/),
                i = parseFloat(t[0]),
                r = parseFloat(n[0]);
            return !(i > r) && !(i === r && parseFloat("0" + t[1]) > parseFloat(n[1]))
        }, r.loadFrom = function() {
            return r.repo()
        }, r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = function() {
            var t = {},
                n = {},
                i = {},
                o = {};
            return {
                start: function(n) {
                    t[n] = e.now(), i[n] = i[n] + 1 || 1
                },
                end: function(i) {
                    if (t[i]) {
                        var o = e.now() - t[i];
                        n[i] = n[i] + o || o
                    }
                },
                dump: function() {
                    return {
                        counts: i,
                        sums: n,
                        events: o
                    }
                },
                tick: function(t, n) {
                    o[t] = n || e.now()
                },
                between: function(e, t) {
                    return o[t] && o[e] ? o[t] - o[e] : -1
                }
            }
        };
        return t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return document.createElement("video")
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(7)], o = function(e) {
        var t = function(t, n, i) {
            var o = document.createElement("div");
            return o.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + t, o.setAttribute("role", "button"), o.setAttribute("tabindex", "0"), i && o.setAttribute("aria-label", i), o.style.display = "none", n && new e(o).on("click tap", function() {
                n()
            }), {
                element: function() {
                    return o
                },
                toggle: function(e) {
                    e ? this.show() : this.hide()
                },
                show: function() {
                    o.style.display = ""
                },
                hide: function() {
                    o.style.display = "none"
                }
            }
        };
        return t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t, n) {
    var i, o;
    i = [n(119), n(21), n(1)], o = function(e, t, n) {
        var i = e.selectPlayer,
            o = function() {
                var e = i.apply(this, arguments);
                return e ? e : {
                    registerPlugin: function(e, n, i) {
                        "jwpsrv" !== e && t.registerPlugin(e, n, i)
                    }
                }
            };
        return n.extend(e, {
            selectPlayer: o
        })
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , , , function(e, t, n) {
    var i, o;
    i = [n(2), n(73), n(16)], o = function(e, t, n) {
        var i = "invalid",
            o = "RnXcsftYjWRDA^Uy",
            r = function(r) {
                function a(r) {
                    e.exists(r) || (r = "");
                    try {
                        r = t.decrypt(r, o);
                        var a = r.split("/");
                        s = a[0], "pro" === s && (s = "premium");
                        var c = n(s);
                        if (a.length > 2 && c("setup")) {
                            l = a[1];
                            var d = parseInt(a[2]);
                            d > 0 && (u = new Date, u.setTime(d))
                        } else s = i
                    } catch (p) {
                        s = i
                    }
                }
                var s, l, u;
                this.edition = function() {
                    return u && u.getTime() < (new Date).getTime() ? i : 'ads'
                }, this.token = function() {
                    return l
                }, this.expiration = function() {
                    return u
                }, a(r)
            };
        return r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        var e = function(e) {
                return window.atob(e)
            },
            t = function(e) {
                return unescape(encodeURIComponent(e))
            },
            n = function(e) {
                try {
                    return decodeURIComponent(escape(e))
                } catch (t) {
                    return e
                }
            },
            i = function(e) {
                for (var t = new Array(Math.ceil(e.length / 4)), n = 0; n < t.length; n++) t[n] = e.charCodeAt(4 * n) + (e.charCodeAt(4 * n + 1) << 8) + (e.charCodeAt(4 * n + 2) << 16) + (e.charCodeAt(4 * n + 3) << 24);
                return t
            },
            o = function(e) {
                for (var t = new Array(e.length), n = 0; n < e.length; n++) t[n] = String.fromCharCode(255 & e[n], e[n] >>> 8 & 255, e[n] >>> 16 & 255, e[n] >>> 24 & 255);
                return t.join("")
            };
        return {
            decrypt: function(r, a) {
                if (r = String(r), a = String(a), 0 == r.length) return "";
                for (var s, l, u = i(e(r)), c = i(t(a).slice(0, 16)), d = u.length, p = u[d - 1], f = u[0], h = 2654435769, g = Math.floor(6 + 52 / d), w = g * h; 0 != w;) {
                    l = w >>> 2 & 3;
                    for (var m = d - 1; m >= 0; m--) p = u[m > 0 ? m - 1 : d - 1], s = (p >>> 5 ^ f << 2) + (f >>> 3 ^ p << 4) ^ (w ^ f) + (c[3 & m ^ l] ^ p), f = u[m] -= s;
                    w -= h
                }
                var v = o(u);
                return v = v.replace(/\0+$/, ""), n(v)
            }
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(165), n(4), n(176), n(1)], o = function(e, t, n, i, o) {
        var r = function(r, a) {
            var s = new t(r, a),
                l = s.setup;
            return s.setup = function() {
                l.call(this), a.on("change:skipButton", this.onSkipButton, this), a.on("change:castAvailable", this.onCastAvailable, this), this.onCastAvailable(a, a.get("castAvailable")), a.on("change:castActive", this.onCastActive, this), this.onCastActive(a, a.get("castActive"))
            }, s.addSkipButton = function() {
                this._skipButton = new i(this.instreamModel), this._skipButton.on(n.JWPLAYER_AD_SKIPPED, function() {
                    this.api.skipAd()
                }, this), this.controlsContainer().appendChild(this._skipButton.element())
            }, s.onSkipButton = function(e, t) {
                t ? this.addSkipButton() : this._skipButton && (this._skipButton.destroy(), this._skipButton = null)
            }, s.onCastActive = function(t, n) {
                n = n || !1;
                var i = t.get("airplayActive") || !1;
                e.toggleClass(this.getContainer(), "jw-flag-casting", n), e.toggleClass(this.getContainer(), "jw-flag-airplay-casting", i)
            }, s.onCastAvailable = function(t, n) {
                var i = t.get("cast");
                o.isObject(i) && e.toggleClass(this.getContainer(), "jw-flag-cast-available", n)
            }, s
        };
        return r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , , , , , function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            return '<div class="jw-skip jw-background-color jw-hidden jw-reset">\n    <span class="jw-text jw-skiptext jw-reset"></span>\n    <span class="jw-icon-inline jw-skip-icon jw-reset"></span>\n</div>'
        },
        useData: !0
    })
}, , function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function r() {
        var e = new s.HandlebarsEnvironment;
        return f.extend(e, s), e.SafeString = u["default"], e.Exception = d["default"], e.Utils = f, e.escapeExpression = f.escapeExpression, e.VM = g, e.template = function(t) {
            return g.template(t, e)
        }, e
    }
    t.__esModule = !0;
    var a = n(44),
        s = o(a),
        l = n(96),
        u = i(l),
        c = n(17),
        d = i(c),
        p = n(11),
        f = o(p),
        h = n(95),
        g = o(h),
        w = n(94),
        m = i(w),
        v = r();
    v.create = r, m["default"](v), v["default"] = v, t["default"] = v, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        a["default"](e)
    }
    t.__esModule = !0, t.registerDefaultDecorators = o;
    var r = n(84),
        a = i(r)
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(11);
    t["default"] = function(e) {
        e.registerDecorator("inline", function(e, t, n, o) {
            var r = e;
            return t.partials || (t.partials = {}, r = function(o, r) {
                var a = n.partials;
                n.partials = i.extend({}, a, t.partials);
                var s = e(o, r);
                return n.partials = a, s
            }), t.partials[o.args[0]] = o.fn, r
        })
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        a["default"](e), l["default"](e), c["default"](e), p["default"](e), h["default"](e), w["default"](e), v["default"](e)
    }
    t.__esModule = !0, t.registerDefaultHelpers = o;
    var r = n(86),
        a = i(r),
        s = n(87),
        l = i(s),
        u = n(88),
        c = i(u),
        d = n(89),
        p = i(d),
        f = n(90),
        h = i(f),
        g = n(91),
        w = i(g),
        m = n(92),
        v = i(m)
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(11);
    t["default"] = function(e) {
        e.registerHelper("blockHelperMissing", function(t, n) {
            var o = n.inverse,
                r = n.fn;
            if (t === !0) return r(this);
            if (t === !1 || null == t) return o(this);
            if (i.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : o(this);
            if (n.data && n.ids) {
                var a = i.createFrame(n.data);
                a.contextPath = i.appendContextPath(n.data.contextPath, n.name), n = {
                    data: a
                }
            }
            return r(t, n)
        })
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(11),
        r = n(17),
        a = i(r);
    t["default"] = function(e) {
        e.registerHelper("each", function(e, t) {
            function n(t, n, r) {
                u && (u.key = t, u.index = n, u.first = 0 === n, u.last = !!r, c && (u.contextPath = c + t)), l += i(e[t], {
                    data: u,
                    blockParams: o.blockParams([e[t], t], [c + t, null])
                })
            }
            if (!t) throw new a["default"]("Must pass iterator to #each");
            var i = t.fn,
                r = t.inverse,
                s = 0,
                l = "",
                u = void 0,
                c = void 0;
            if (t.data && t.ids && (c = o.appendContextPath(t.data.contextPath, t.ids[0]) + "."), o.isFunction(e) && (e = e.call(this)), t.data && (u = o.createFrame(t.data)), e && "object" == typeof e)
                if (o.isArray(e))
                    for (var d = e.length; s < d; s++) s in e && n(s, s, s === e.length - 1);
                else {
                    var p = void 0;
                    for (var f in e) e.hasOwnProperty(f) && (void 0 !== p && n(p, s - 1), p = f, s++);
                    void 0 !== p && n(p, s - 1, !0)
                }
            return 0 === s && (l = r(this)), l
        })
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    t.__esModule = !0;
    var o = n(17),
        r = i(o);
    t["default"] = function(e) {
        e.registerHelper("helperMissing", function() {
            if (1 !== arguments.length) throw new r["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
        })
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(11);
    t["default"] = function(e) {
        e.registerHelper("if", function(e, t) {
            return i.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || i.isEmpty(e) ? t.inverse(this) : t.fn(this)
        }), e.registerHelper("unless", function(t, n) {
            return e.helpers["if"].call(this, t, {
                fn: n.inverse,
                inverse: n.fn,
                hash: n.hash
            })
        })
    }, e.exports = t["default"]
}, function(e, t) {
    "use strict";
    t.__esModule = !0, t["default"] = function(e) {
        e.registerHelper("log", function() {
            for (var t = [void 0], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++) t.push(arguments[i]);
            var o = 1;
            null != n.hash.level ? o = n.hash.level : n.data && null != n.data.level && (o = n.data.level), t[0] = o, e.log.apply(e, t)
        })
    }, e.exports = t["default"]
}, function(e, t) {
    "use strict";
    t.__esModule = !0, t["default"] = function(e) {
        e.registerHelper("lookup", function(e, t) {
            return e && e[t]
        })
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(11);
    t["default"] = function(e) {
        e.registerHelper("with", function(e, t) {
            i.isFunction(e) && (e = e.call(this));
            var n = t.fn;
            if (i.isEmpty(e)) return t.inverse(this);
            var o = t.data;
            return t.data && t.ids && (o = i.createFrame(t.data), o.contextPath = i.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
                data: o,
                blockParams: i.blockParams([e], [o && o.contextPath])
            })
        })
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = n(11),
        o = {
            methodMap: ["debug", "info", "warn", "error"],
            level: "info",
            lookupLevel: function(e) {
                if ("string" == typeof e) {
                    var t = i.indexOf(o.methodMap, e.toLowerCase());
                    e = t >= 0 ? t : parseInt(e, 10)
                }
                return e
            },
            log: function(e) {
                if (e = o.lookupLevel(e), "undefined" != typeof console && o.lookupLevel(o.level) <= e) {
                    var t = o.methodMap[e];
                    console[t] || (t = "log");
                    for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                    console[t].apply(console, i)
                }
            }
        };
    t["default"] = o, e.exports = t["default"]
}, function(e, t) {
    (function(n) {
        "use strict";
        t.__esModule = !0, t["default"] = function(e) {
            var t = "undefined" != typeof n ? n : window,
                i = t.Handlebars;
            e.noConflict = function() {
                return t.Handlebars === e && (t.Handlebars = i), e
            }
        }, e.exports = t["default"]
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function r(e) {
        var t = e && e[0] || 1,
            n = m.COMPILER_REVISION;
        if (t !== n) {
            if (t < n) {
                var i = m.REVISION_CHANGES[n],
                    o = m.REVISION_CHANGES[t];
                throw new w["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + o + ").")
            }
            throw new w["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
        }
    }

    function a(e, t) {
        function n(n, i, o) {
            o.hash && (i = h.extend({}, i, o.hash), o.ids && (o.ids[0] = !0)), n = t.VM.resolvePartial.call(this, n, i, o);
            var r = t.VM.invokePartial.call(this, n, i, o);
            if (null == r && t.compile && (o.partials[o.name] = t.compile(n, e.compilerOptions, t), r = o.partials[o.name](i, o)), null != r) {
                if (o.indent) {
                    for (var a = r.split("\n"), s = 0, l = a.length; s < l && (a[s] || s + 1 !== l); s++) a[s] = o.indent + a[s];
                    r = a.join("\n")
                }
                return r
            }
            throw new w["default"]("The partial " + o.name + " could not be compiled when running in runtime-only mode")
        }

        function i(t) {
            function n(t) {
                return "" + e.main(o, t, o.helpers, o.partials, a, l, s)
            }
            var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                a = r.data;
            i._setup(r), !r.partial && e.useData && (a = d(t, a));
            var s = void 0,
                l = e.useBlockParams ? [] : void 0;
            return e.useDepths && (s = r.depths ? t != r.depths[0] ? [t].concat(r.depths) : r.depths : [t]), (n = p(e.main, n, o, r.depths || [], a, l))(t, r)
        }
        if (!t) throw new w["default"]("No environment passed to template");
        if (!e || !e.main) throw new w["default"]("Unknown template object: " + typeof e);
        e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
        var o = {
            strict: function(e, t) {
                if (!(t in e)) throw new w["default"]('"' + t + '" not defined in ' + e);
                return e[t]
            },
            lookup: function(e, t) {
                for (var n = e.length, i = 0; i < n; i++)
                    if (e[i] && null != e[i][t]) return e[i][t]
            },
            lambda: function(e, t) {
                return "function" == typeof e ? e.call(t) : e
            },
            escapeExpression: h.escapeExpression,
            invokePartial: n,
            fn: function(t) {
                var n = e[t];
                return n.decorator = e[t + "_d"], n
            },
            programs: [],
            program: function(e, t, n, i, o) {
                var r = this.programs[e],
                    a = this.fn(e);
                return t || o || i || n ? r = s(this, e, a, t, n, i, o) : r || (r = this.programs[e] = s(this, e, a)), r
            },
            data: function(e, t) {
                for (; e && t--;) e = e._parent;
                return e
            },
            merge: function(e, t) {
                var n = e || t;
                return e && t && e !== t && (n = h.extend({}, t, e)), n
            },
            noop: t.VM.noop,
            compilerInfo: e.compiler
        };
        return i.isTop = !0, i._setup = function(n) {
            n.partial ? (o.helpers = n.helpers, o.partials = n.partials, o.decorators = n.decorators) : (o.helpers = o.merge(n.helpers, t.helpers), e.usePartial && (o.partials = o.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (o.decorators = o.merge(n.decorators, t.decorators)))
        }, i._child = function(t, n, i, r) {
            if (e.useBlockParams && !i) throw new w["default"]("must pass block params");
            if (e.useDepths && !r) throw new w["default"]("must pass parent depths");
            return s(o, t, e[t], n, 0, i, r)
        }, i
    }

    function s(e, t, n, i, o, r, a) {
        function s(t) {
            var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                s = a;
            return a && t != a[0] && (s = [t].concat(a)), n(e, t, e.helpers, e.partials, o.data || i, r && [o.blockParams].concat(r), s)
        }
        return s = p(n, s, e, a, i, r), s.program = t, s.depth = a ? a.length : 0, s.blockParams = o || 0, s
    }

    function l(e, t, n) {
        if (e) e.call || n.name || (n.name = e, e = n.partials[e]);
        else if ("@partial-block" === n.name) {
            for (var i = n.data; i["partial-block"] === c;) i = i._parent;
            e = i["partial-block"], i["partial-block"] = c
        } else e = n.partials[n.name];
        return e
    }

    function u(e, t, n) {
        n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
        var i = void 0;
        if (n.fn && n.fn !== c && (n.data = m.createFrame(n.data), i = n.data["partial-block"] = n.fn, i.partials && (n.partials = h.extend({}, n.partials, i.partials))), void 0 === e && i && (e = i), void 0 === e) throw new w["default"]("The partial " + n.name + " could not be found");
        if (e instanceof Function) return e(t, n)
    }

    function c() {
        return ""
    }

    function d(e, t) {
        return t && "root" in t || (t = t ? m.createFrame(t) : {}, t.root = e), t
    }

    function p(e, t, n, i, o, r) {
        if (e.decorator) {
            var a = {};
            t = e.decorator(t, a, n, i && i[0], o, r, i), h.extend(t, a)
        }
        return t
    }
    t.__esModule = !0, t.checkRevision = r, t.template = a, t.wrapProgram = s, t.resolvePartial = l, t.invokePartial = u, t.noop = c;
    var f = n(11),
        h = o(f),
        g = n(17),
        w = i(g),
        m = n(44)
}, function(e, t) {
    "use strict";

    function n(e) {
        this.string = e
    }
    t.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function() {
        return "" + this.string
    }, t["default"] = n, e.exports = t["default"]
}, , function(e, t, n) {
    t = e.exports = n(99)(), t.push([e.id, '.jw-reset{color:inherit;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}.jw-icon,.jw-reset{background-color:transparent;text-transform:none}.jw-icon{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-background-color{background:rgba(33,33,33,.8)}.jw-knob,.jw-text{color:#cecece}.jw-knob{background-color:#fff}.jw-button-color{color:#cecece}.jw-button-color:focus,:not(.jw-flag-touch) .jw-button-color:hover{outline:none;color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:#cecece}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:none}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-display-icon-container{background-color:rgba(33,33,33,.8);margin:0 .25em}.jw-display-icon-container .jw-icon{color:#cecece}.jw-rail{background:hsla(0,0%,100%,.2)}.jw-buffer{background:hsla(0,0%,100%,.3)}.jw-progress{background:#fff}.jw-slider-horizontal{height:.25em}.jw-slider-horizontal .jw-knob{margin-left:-.25em}.jw-slider-vertical .jw-knob{margin-bottom:-.25em}.jw-menu,.jw-time-tip,.jw-volume-tip{border:0}.jw-menu,.jw-time-tip{padding:.5em}.jw-volume-tip{padding:1em}.jw-skip{padding:.5em}.jw-dock-button .jw-text,.jw-skip .jw-skip-icon,.jw-skip .jw-skiptext,.jw-time-tip .jw-text{color:#cecece}.jw-dock-button{background:rgba(33,33,33,.8)}:not(.jw-flag-touch) .jw-dock-button:hover{background:#212121}.jw-icon-cast button{--connected-color:#fff;--disconnected-color:#cecece}.jw-icon-cast button:focus{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast button.jw-off{--connected-color:#cecece}.jw-icon-cast:hover button{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-nextup-header{background:rgba(33,33,33,.8);color:#fff}.jw-nextup-body{background:rgba(0,0,0,.8);color:#fff}.jw-nextup-thumbnail-visible+.jw-nextup-title:after{background:-webkit-linear-gradient(top,transparent,#000);background:linear-gradient(-180deg,transparent,#000)}.jw-nextup-close{color:#cecece}.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-display-icon-container:hover,.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-media:hover~.jw-controls .jw-display-icon-display{background-color:#212121}.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-display-icon-container:hover .jw-icon{color:#fff}.jw-color-active,:not(.jw-flag-touch) .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive,:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:#cecece;stroke:#cecece;border-color:#cecece}.jw-option{color:#cecece}.jw-option.jw-active-option{color:#fff;background-color:hsla(0,0%,100%,.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}@font-face{font-family:jw-icons;src:url(' + n(101) + ') format("woff"),url(' + n(100) + ') format("truetype");font-weight:400;font-style:normal}.jw-controlbar .jw-menu .jw-option:before,.jw-icon-display,.jw-icon-inline,.jw-icon-tooltip{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:"\\E600"}.jw-icon-buffer:before{content:"\\E601"}.jw-icon-airplay.jw-off:before,.jw-icon-airplay:before{content:"\\E901"}.jw-icon-cc:before{content:"\\E605"}.jw-icon-error:before{content:"\\E607"}.jw-icon-fullscreen:before{content:"\\E608"}.jw-icon-fullscreen.jw-off:before{content:"\\E613"}.jw-icon-hd:before{content:"\\E60A"}.jw-rightclick-logo:before{content:"\\E60B"}.jw-icon-next:before{content:"\\E60C"}.jw-icon-pause:before{content:"\\E60D"}.jw-icon-play:before{content:"\\E60E"}.jw-icon-replay:before{content:"\\E610"}.jw-icon-volume:before{content:"\\E612"}.jw-icon-volume.jw-off:before{content:"\\E611"}.jw-icon-close:before{content:"\\E615"}.jw-icon-rewind:before{content:"\\E900";font-size:1.5em}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted #585858}.jw-controls,.jw-media,.jw-overlays,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-overlays{cursor:auto}.jw-controls{overflow:hidden}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0;left:0;bottom:2.5em}.jw-flag-small-player .jw-controls,.jw-text{text-align:center}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-icon-playback:before{content:"\\E60E"}.jw-captions,.jw-controls,.jw-overlays,.jw-preview,.jw-title{pointer-events:none}.jw-autostart-mute,.jw-controlbar,.jw-display-icon-container,.jw-display-icon-container .jw-icon,.jw-dock .jw-dock-button,.jw-logo,.jw-media,.jw-nextup-container,.jw-overlays .jw-plugin,.jw-skip{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;object-fit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;object-fit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-error .jw-display-icon-container,.jwplayer .jw-display-icon-container{width:auto;height:auto;box-sizing:content-box}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display{display:table;height:100%;padding:2.5em 0;position:relative;width:100%}.jw-flag-dragging .jw-display{display:none}.jw-display-container{display:table-cell;height:100%;text-align:center;vertical-align:middle}.jw-display-controls{display:inline-block}.jwplayer .jw-display-icon-container{float:left}.jw-display-icon-container{display:inline-block;margin:0 .25em}.jw-display-icon-container .jw-icon{cursor:pointer;width:75px;height:75px;line-height:75px;text-align:center}.jw-display-icon-container .jw-icon:before{font-size:33px;position:relative}.jw-display-icon-container .jw-icon.jw-icon-rewind:before{padding:.2em .05em}.jw-state-idle .jw-display-icon-container .jw-icon.jw-icon-display:before,.jw-state-paused .jw-display-icon-container .jw-icon.jw-icon-display:before{left:1px}.jw-breakpoint-0 .jw-display-icon-next,.jw-breakpoint-0 .jw-display-icon-rewind{display:none}.jw-breakpoint-0 .jw-display .jw-icon{height:44px;line-height:44px;width:44px}.jw-breakpoint-0 .jw-display .jw-icon:before{font-size:22px}.jw-breakpoint-1 .jw-display .jw-icon{height:55px;line-height:55px;width:55px}.jw-breakpoint-1 .jw-display .jw-icon:before{font-size:22px}.jw-breakpoint-1 .jw-display .jw-icon.jw-icon-rewind:before{font-size:33px}.jw-breakpoint-3 .jw-display .jw-icon{height:77px;line-height:77px;width:77px}.jw-breakpoint-3 .jw-display .jw-icon:before{font-size:38.5px}.jw-breakpoint-4 .jw-display .jw-icon,.jw-breakpoint-5 .jw-display .jw-icon,.jw-breakpoint-6 .jw-display .jw-icon,.jw-breakpoint-7 .jw-display .jw-icon{height:88px;line-height:88px;width:88px}.jw-breakpoint-4 .jw-display .jw-icon:before,.jw-breakpoint-5 .jw-display .jw-icon:before,.jw-breakpoint-6 .jw-display .jw-icon:before,.jw-breakpoint-7 .jw-display .jw-icon:before{font-size:44px}.jw-controlbar{display:table;position:absolute;left:0;bottom:0;height:2.5em;width:100%;padding:0 .5em}.jw-slider-horizontal{background-color:transparent}.jw-group{display:table-cell}.jw-controlbar-center-group{padding:0 .5em;position:relative;width:100%}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none;position:absolute;top:-1px;bottom:0;width:100%;height:auto;line-height:2.5em;margin:.5em 0;padding-right:.5em;overflow:hidden;text-align:left;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#fff}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-countdown,.jw-text-duration,.jw-text-elapsed{display:inline-block;height:2.5em;position:relative;line-height:2.5em;vertical-align:middle;cursor:pointer;padding:0 .5em}.jw-controlbar-left-group .jw-text-duration{display:none}.jw-icon-inline,.jw-icon-tooltip{min-width:1.5625em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em;pointer-events:none}.jw-icon-cast{display:none;margin:0;padding:0}.jw-icon-cast button{background-color:transparent;border:none;cursor:pointer;font-size:inherit;width:2.25em}.jw-breakpoint-0 .jw-controlbar .jw-text-duration,.jw-breakpoint-0 .jw-controlbar .jw-text-elapsed,.jw-breakpoint-1:not(.jw-flag-time-slider-above) .jw-controlbar .jw-text-duration,.jw-breakpoint-1:not(.jw-flag-time-slider-above) .jw-controlbar .jw-text-elapsed,.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-autostart:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-small-player:not(.jw-flag-audio-player) .jw-group>.jw-icon-next,.jw-flag-small-player:not(.jw-flag-audio-player) .jw-group>.jw-icon-playback,.jw-flag-small-player:not(.jw-flag-audio-player) .jw-group>.jw-icon-rewind,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-icon-inline.jw-icon-volume,.jw-slider-volume.jw-slider-horizontal,.jwplayer .jw-text-countdown{display:none}.jw-dock{clear:right;margin:.75em;display:block;opacity:1}.jw-dock:after{content:"";clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;height:2.5em;margin:.5em;position:relative;width:2.5em}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-.2em;width:.5em;height:.2em;left:50%;margin-left:-.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-arrow,.jw-dock-button:hover .jw-overlay{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-flag-small-player .jw-dock{margin:0}.jw-flag-small-player .jw-dock-button{margin:1px;height:44px;width:44px}.jw-breakpoint-1 .jw-dock{padding:0 1%}.jw-breakpoint-1 .jw-dock-button{margin:2% 1%}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000 18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-flag-small-player .jw-title{background:-webkit-linear-gradient(top,rgba(51,51,51,.75),rgba(51,51,51,0));background:linear-gradient(180deg,rgba(51,51,51,.75),rgba(51,51,51,0));height:auto;padding:16px 0}.jw-flag-small-player .jw-title-primary,.jw-flag-small-player .jw-title-secondary{min-height:inherit;padding:0 16px}.jw-flag-small-player .jw-title-secondary{display:none;margin-top:5px}.jw-slider-container{height:1em;width:100%;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:hsla(0,0%,100%,.2)}.jw-buffer{background-color:hsla(0,0%,100%,.3)}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{height:.25em;background-color:rgba(33,33,33,.9);border-radius:25%;width:.5em}.jw-knob{width:.5em;height:.5em;border-radius:.25em}.jw-slider-horizontal{height:.25em;padding:0}.jw-slider-horizontal.jw-slider-volume{width:4em;margin:0 .5em}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-horizontal .jw-knob{top:-.125em;margin-left:-.25em}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:.25em}.jw-slider-vertical{padding:.66666667em 1em;position:absolute}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{bottom:0;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{width:.25em}.jw-slider-vertical .jw-slider-container{height:4em}.jw-slider-vertical .jw-knob{right:0;left:-.125em;margin-bottom:-.25em}.jw-slider-time{width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jw-captions{position:absolute;width:100%;height:inherit;text-align:center;display:none;max-height:81.375%;line-height:1.3em;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jw-text-track-display{font-size:inherit;line-height:1.3em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:81.375%;line-height:1.3em}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:none}.jwplayer .jw-rightclick ul{list-style:none;font-weight:700;border-radius:.15em;margin:0;border:1px solid #444;padding:0}.jwplayer .jw-rightclick ul li{background-color:#000;border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick ul li .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.jwplayer .jw-rightclick ul li a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em;line-height:1em}.jwplayer .jw-rightclick ul li:last-child{border-bottom:none}.jwplayer .jw-rightclick ul li:hover{background-color:#1a1a1a;cursor:pointer}.jwplayer .jw-rightclick ul .jw-featured{background-color:#252525;vertical-align:middle}.jwplayer .jw-rightclick ul .jw-featured a{color:#777}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-logo .jw-flag-audio-player{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right{bottom:0;right:0}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:transparent;content:" "}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-menu,.jw-time-tip,.jw-volume-tip{position:relative;left:-50%;margin:0}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;bottom:1.25em;padding:.5em;border-radius:.25em}.jw-time-tip .jw-text{color:#fff;line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2.5em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em;padding:.5em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em}.jw-skip .jw-skip-icon:before{content:"\\E60C"}.jw-skip .jw-skip-icon,.jw-skip .jw-text{color:#cecece;vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jw-cast{background-size:cover;display:none;height:100%;position:relative;width:100%}.jw-cast-container{background:-webkit-linear-gradient(top,rgba(25,25,25,.75),rgba(25,25,25,.25),rgba(25,25,25,0));background:linear-gradient(180deg,rgba(25,25,25,.75),rgba(25,25,25,.25),rgba(25,25,25,0));left:0;padding:20px 20px 80px;position:absolute;top:0;width:100%}.jw-cast-text{color:#fff;font-size:1.6em}.jw-breakpoint-0 .jw-cast-text{font-size:1.15em}.jw-breakpoint-1 .jw-cast-text,.jw-breakpoint-2 .jw-cast-text,.jw-breakpoint-3 .jw-cast-text{font-size:1.3em}.jw-nextup-container{-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;background-color:transparent;bottom:2.5em;cursor:pointer;left:0;margin:0 auto;opacity:0;padding:5px .5em;position:absolute;right:0;text-align:right;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:all .15s ease;transition:all .15s ease;visibility:hidden;width:100%}.jw-flag-small-player .jw-nextup-container{display:none}.jw-nextup-container-visible{opacity:1;-webkit-transform:translateY(5px);transform:translateY(5px);visibility:visible}.jw-nextup{border-radius:0;display:inline-block;overflow:hidden;position:relative;max-width:300px;width:100%}.jw-nextup-header{background:rgba(33,33,33,.8);box-sizing:border-box;color:#fff;font-size:12px;font-weight:700;line-height:normal;padding:8px}.jw-nextup-body{background:rgba(0,0,0,.8);color:#fff;overflow:hidden}.jw-nextup-thumbnail{background-position:50%;background-size:cover;display:none;float:left;height:60px;width:45%}.jw-nextup-thumbnail-visible{display:block}.jw-nextup-title{box-sizing:border-box;float:left;font-size:12px;font-weight:700;line-height:1.3;overflow:hidden;padding:5px 6px;position:relative;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-thumbnail-visible+.jw-nextup-title{height:60px;white-space:normal;width:55%}.jw-nextup-thumbnail-visible+.jw-nextup-title:after{background:-webkit-linear-gradient(top,transparent,#000);background:linear-gradient(-180deg,transparent,#000);bottom:0;content:"";height:30px;left:0;position:absolute;width:100%}.jw-nextup-close{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale;border:none;color:#cecece;font-size:13px;opacity:0;position:absolute;right:5px;top:6px;-webkit-transition:color .15s ease,opacity .15s ease,visibility .15s ease;transition:color .15s ease,opacity .15s ease,visibility .15s ease;visibility:hidden}.jw-nextup-close:before{content:"\\E615"}.jw-nextup-close:active,.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{opacity:1;visibility:visible}.jw-autostart-mute{min-width:1.75em;text-align:left;position:absolute;bottom:.5em;right:.5em;height:44px;width:44px;text-align:center}.jw-autostart-mute:before{content:"\\E612"}.jw-autostart-mute.jw-off:before{content:"\\E611"}.jw-autostart-mute:before{background-color:rgba(33,33,33,.8);padding:5px 4px 5px 6px}.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio) .jw-nextup,.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio):not(.jw-state-buffering):not(.jw-state-error):not(.jw-state-complete) .jw-display{display:none}.jw-state-idle .jw-preview{display:block}.jw-state-idle .jw-icon-display:before{content:"\\E60E"}.jw-state-idle .jw-captions,.jw-state-idle .jw-display-icon-next,.jw-state-idle .jw-display-icon-rewind{display:none}.jw-state-idle .jw-title{display:block}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-cast-available) .jw-controlbar,.jwplayer.jw-state-playing:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display:before,.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-paused:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display,.jwplayer.jw-state-playing.jw-flag-user-inactive .jw-display{display:none}.jwplayer.jw-state-paused .jw-display .jw-icon-display:before,.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-buffering .jw-display-icon-next,.jwplayer.jw-state-buffering .jw-display-icon-rewind,.jwplayer.jw-state-paused .jw-autostart-mute{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon:before{content:"\\E601"}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-text{display:none}.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player) .jw-preview{display:block}.jwplayer.jw-state-complete .jw-display .jw-icon-display:before{content:"\\E610"}.jwplayer.jw-state-complete .jw-display .jw-display-icon-next,.jwplayer.jw-state-complete .jw-display .jw-display-icon-rewind,.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-complete .jw-captions{display:none}body .jw-error .jw-title,body .jwplayer.jw-state-error .jw-title{display:block}body .jw-error .jw-title .jw-title-primary,body .jwplayer.jw-state-error .jw-title .jw-title-primary{white-space:normal}body .jw-error .jw-preview,body .jwplayer.jw-state-error .jw-preview{display:block}body .jw-error .jw-captions,body .jw-error .jw-controls .jw-controlbar,body .jwplayer.jw-state-error .jw-captions,body .jwplayer.jw-state-error .jw-controls .jw-controlbar{display:none}body .jw-error .jw-icon-display,body .jwplayer.jw-state-error .jw-icon-display{cursor:default;font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}body .jw-error .jw-icon-display:before,body .jwplayer.jw-state-error .jw-icon-display:before{content:"\\E607"}body .jw-error .jw-display-icon-next,body .jw-error .jw-display-icon-rewind,body .jwplayer.jw-state-error .jw-display-icon-next,body .jwplayer.jw-state-error .jw-display-icon-rewind{display:none}body .jw-error{font-size:16px;background-color:#000;color:#fff;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima) .jw-controlbar{display:table}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jw-flag-small-player .jw-display{padding-top:44px;padding-bottom:66px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-controlbar{background:-webkit-linear-gradient(top,transparent,rgba(0,0,0,.25) 30%,rgba(0,0,0,.4) 70%,rgba(0,0,0,.5));background:linear-gradient(180deg,transparent,rgba(0,0,0,.25) 30%,rgba(0,0,0,.4) 70%,rgba(0,0,0,.5));border:none;border-radius:0;background-size:auto;height:44px;width:100%;padding:0 10px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-state-idle:not(.jw-flag-cast-available) .jw-controls,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-casting) .jw-controls{background:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads) .jw-controlbar,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-live) .jw-controlbar{height:66px;padding:22px 0 0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-controlbar{box-shadow:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-controlbar .jw-overlay{bottom:44px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-controlbar .jw-overlay:after{content:"";display:block;height:22px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-group>.jw-icon,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-group>.jw-text{height:44px;line-height:40px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-group>.jw-icon{font-size:20px;padding:0 8px;max-width:44px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-group>.jw-icon:before{background-color:transparent;background:none;background-size:auto;border:none;border-radius:0;box-shadow:none;height:auto;padding:0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-group .jw-icon-cast button{font-size:inherit;height:36px;margin-bottom:8px;width:44px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live) .jw-controlbar-center-group{height:22px;left:0;padding:0 15px;position:absolute;right:0;top:0;width:100%}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live) .jw-controlbar-center-group .jw-slider-horizontal .jw-knob{border-radius:100%;height:16px;margin-left:-8px;margin-top:-8px;width:16px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live) .jw-controlbar-left-group{padding-left:0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live) .jw-controlbar-left-group .jw-text-countdown,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live) .jw-controlbar-left-group .jw-text-elapsed{padding:0 .5em}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live) .jw-controlbar-left-group .jw-text-duration{padding:0 .5em 0 0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-countdown{display:inline-block}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-flag-small-player .jw-text-countdown,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-flag-small-player .jw-text-elapsed{padding-left:15px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-breakpoint-0) .jw-text-duration{display:inline-block}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer:not(.jw-breakpoint-0) .jw-text-duration:before{content:"/";display:inline-block;padding-right:.5em}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-controlbar-right-group{padding-right:6px;text-align:right}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-controlbar-right-group .jw-text-duration{display:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-volume.jw-slider-vertical{padding:.5em}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-volume.jw-slider-horizontal{margin-bottom:2px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-small-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time{background:none;background-color:transparent;height:22px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-slider-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:22px;-webkit-box-pack:center;justify-content:center}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-cue{top:auto}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-buffer,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-knob,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-progress,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-rail{border:none;box-shadow:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-knob{background:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-buffer,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-progress,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-rail{height:2px;margin:auto;top:0;bottom:0}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-rail{background-color:hsla(0,0%,100%,.25)}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-buffer{background-color:hsla(0,0%,100%,.5)}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-slider-time .jw-knob{background-color:#fff;border-radius:100%;box-shadow:0 0 1px 1px rgba(0,0,0,.1);display:block;height:16px;margin-left:-8px;margin-top:-8px;top:50%;width:16px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-tooltip-time{bottom:0;height:auto;line-height:normal;padding:0;pointer-events:none;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-tooltip-time .jw-overlay{bottom:22px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-tooltip-time .jw-overlay:after{content:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-tooltip-time .jw-time-tip{bottom:0;border-radius:.25em}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-controlbar,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-controlbar{padding-right:5px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-controlbar-center-group,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-controlbar-center-group{height:auto}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-group>.jw-text-alt,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-group>.jw-text-alt{display:inline-block;margin:0;line-height:44px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads.jw-ie .jw-text-alt,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live.jw-ie .jw-text-alt{top:-1px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-controlbar .jw-overlay:after,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-text-duration,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-controlbar .jw-overlay:after,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-text-duration{display:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-controlbar{padding-left:10px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-text-duration,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-text-elapsed{display:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-controlbar{pointer-events:none}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-icon,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-slider-horizontal{pointer-events:all}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-controlbar-left-group{display:table-cell}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads.jw-flag-small-player .jw-group .jw-icon-playback{display:inline-block}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-plugin{bottom:66px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-captions,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer video::-webkit-media-text-track-container{max-height:74.21875%}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer .jw-nextup-container{bottom:66px;padding:5px 20px}.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-ads .jw-nextup-container,.jw-flag-time-slider-above:not(.jw-flag-ads-googleima).jwplayer.jw-flag-live .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-casting .jw-cast{display:block}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-display-icon-container,.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-volume,.jwplayer.jw-flag-casting .jw-icon-audio-tracks,.jwplayer.jw-flag-casting .jw-icon-cc,.jwplayer.jw-flag-casting .jw-icon-fullscreen,.jwplayer.jw-flag-casting .jw-icon-hd{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-airplay{color:#fff}.jwplayer.jw-state-paused.jw-flag-casting .jw-display,.jwplayer.jw-state-playing.jw-flag-casting .jw-display{display:table}.jwplayer.jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-countdown,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed,.jwplayer.jw-flag-live .jw-display-icon-rewind{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline-block}.jwplayer.jw-flag-controls-hidden .jw-dock,.jwplayer.jw-flag-controls-hidden .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-controls-hidden .jw-nextup-container,.jwplayer.jw-flag-controls-hidden .jw-plugin{bottom:.5em}.jwplayer.jw-flag-controls-hidden .jw-captions{max-height:none}.jwplayer.jw-flag-controls-hidden video::-webkit-media-text-track-container{max-height:none}.jw-flag-controls-hidden .jw-controls{visibility:hidden}.jw-flag-controls-hidden .jw-logo{visibility:visible}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-dock,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-captions{max-height:none}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-display{display:table}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-dock{display:block}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting .jw-nextup-container{bottom:2.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-flag-time-slider-above .jw-nextup-container{bottom:66px}.jwplayer.jw-flag-media-audio .jw-autostart-mute,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-state-idle .jw-nextup-container{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-autostart-mute,.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-dock,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-preview{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-display,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-next,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-rewind{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player.jw-state-buffering .jw-display-icon-display{display:inline-block}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-controlbar-center-group{padding:0}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-cast,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads.jw-ie .jw-controlbar-center-group{overflow:hidden}.jwplayer.jw-flag-ads.jw-flag-ads.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-flag-ads.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-ie .jw-controlbar-center-group .jw-text-alt{display:table}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-display-icon-display,.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-display-icon-display .jw-icon-display{pointer-events:none}.jwplayer.jw-flag-ads-googleima.jw-skin-seven .jw-controlbar{font-size:.9em}.jwplayer.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls{background:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none!important}.jwplayer.jw-flag-overlay-open-related .jw-controls,.jwplayer.jw-flag-overlay-open-related .jw-title,.jwplayer.jw-flag-overlay-open-sharing .jw-controls,.jwplayer.jw-flag-overlay-open-sharing .jw-title,.jwplayer.jw-flag-overlay-open .jw-controls-right .jw-logo,.jwplayer.jw-flag-overlay-open .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{visibility:hidden}.jw-flag-controls-disabled .jw-logo{visibility:visible}.jw-flag-controls-disabled .jw-media{cursor:auto}.jw-flag-controls-disabled.jwplayer .jw-captions{max-height:none}.jw-flag-controls-disabled.jwplayer video::-webkit-media-text-track-container{max-height:none}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch.jw-breakpoint-4 .jw-controlbar,.jw-flag-touch.jw-breakpoint-4 .jw-plugin,.jw-flag-touch.jw-breakpoint-4 .jw-skip,.jw-flag-touch.jw-breakpoint-5 .jw-controlbar,.jw-flag-touch.jw-breakpoint-5 .jw-plugin,.jw-flag-touch.jw-breakpoint-5 .jw-skip,.jw-flag-touch.jw-breakpoint-6 .jw-controlbar,.jw-flag-touch.jw-breakpoint-6 .jw-plugin,.jw-flag-touch.jw-breakpoint-6 .jw-skip,.jw-flag-touch.jw-breakpoint-7 .jw-controlbar,.jw-flag-touch.jw-breakpoint-7 .jw-plugin,.jw-flag-touch.jw-breakpoint-7 .jw-skip{font-size:1.5em}.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-7 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container{bottom:4.25em}.jw-flag-touch.jw-breakpoint-4 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-5 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-6 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-7 video::-webkit-media-text-track-container{max-height:70%}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:inline-block}.jw-flag-touch .jw-display,.jw-flag-touch .jw-display-container,.jw-flag-touch .jw-display-controls{pointer-events:none}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-rewind,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-rewind{display:none}.jw-flag-audio-player{background-color:transparent}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-media object{width:1px;height:1px}.jw-flag-audio-player .jw-display,.jw-flag-audio-player .jw-dock,.jw-flag-audio-player .jw-nextup-container,.jw-flag-audio-player .jw-preview,.jw-flag-audio-player .jw-title{display:none}.jw-flag-audio-player .jw-controlbar{vertical-align:middle;display:table;height:100%;left:0;bottom:0;margin:0;width:100%;min-width:100%}.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen,.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume,.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jw-flag-audio-player .jw-icon-inline{height:auto;line-height:normal}.jw-flag-audio-player .jw-group{vertical-align:middle}.jw-flag-audio-player .jw-controlbar-center-group{padding-bottom:2px}.jw-flag-audio-player.jw-flag-small-player .jw-text-duration,.jw-flag-audio-player.jw-flag-small-player .jw-text-elapsed,.jw-hidden{display:none}.jw-skin-seven .jw-display-icon-container{border-radius:3.5em}.jw-skin-seven .jw-display-icon-container>.jw-icon{color:hsla(0,0%,100%,.9)}.jw-skin-seven.jw-breakpoint-2 .jw-display .jw-icon{width:66px;height:66px;line-height:66px}.jw-skin-seven .jw-dock-button{border-radius:2.5em}.jw-skin-seven .jw-dock-button:hover{background:rgba(33,33,33,.8)}.jw-skin-seven .jw-menu{padding:0}.jw-skin-seven .jw-dock .jw-overlay,.jw-skin-seven .jw-skip{border-radius:.5em}.jw-skin-seven .jw-text{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}', ""]);
}, function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                "number" == typeof r && (i[r] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
}, function(e, t, n) {
    e.exports = n.p + "jw-icons.ttf"
}, function(e, t, n) {
    e.exports = n.p + "jw-icons.woff"
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            return '<div class="jw-display jw-reset">\n  <div class="jw-display-container jw-reset">\n    <div class="jw-display-controls jw-reset"></div>\n  </div>\n</div>\n'
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        1: function(e, t, n, i, o) {
            var r, a, s = null != t ? t : {};
            return '    <div class="jw-dock-button jw-background-color jw-reset' + (null != (r = n["if"].call(s, null != t ? t.btnClass : t, {
                name: "if",
                hash: {},
                fn: e.program(2, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + '" button="' + e.escapeExpression((a = null != (a = n.id || (null != t ? t.id : t)) ? a : n.helperMissing, "function" == typeof a ? a.call(s, {
                name: "id",
                hash: {},
                data: o
            }) : a)) + '">\n        <div class="jw-icon jw-dock-image jw-reset" ' + (null != (r = n["if"].call(s, null != t ? t.img : t, {
                name: "if",
                hash: {},
                fn: e.program(4, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + '></div>\n        <div class="jw-arrow jw-reset"></div>\n' + (null != (r = n["if"].call(s, null != t ? t.tooltip : t, {
                name: "if",
                hash: {},
                fn: e.program(6, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + "    </div>\n"
        },
        2: function(e, t, n, i, o) {
            var r;
            return " " + e.escapeExpression((r = null != (r = n.btnClass || (null != t ? t.btnClass : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                name: "btnClass",
                hash: {},
                data: o
            }) : r))
        },
        4: function(e, t, n, i, o) {
            var r;
            return "style='background-image: url(\"" + e.escapeExpression((r = null != (r = n.img || (null != t ? t.img : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                name: "img",
                hash: {},
                data: o
            }) : r)) + "\")'"
        },
        6: function(e, t, n, i, o) {
            var r;
            return '        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">' + e.escapeExpression((r = null != (r = n.tooltip || (null != t ? t.tooltip : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                name: "tooltip",
                hash: {},
                data: o
            }) : r)) + "</span>\n        </div>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r;
            return '<div class="jw-dock jw-reset">\n' + (null != (r = n.each.call(null != t ? t : {}, t, {
                name: "each",
                hash: {},
                fn: e.program(1, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + "</div>"
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r, a = null != t ? t : {},
                s = n.helperMissing,
                l = "function",
                u = e.escapeExpression;
            return '<div id="' + u((r = null != (r = n.id || (null != t ? t.id : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "id",
                hash: {},
                data: o
            }) : r)) + '"class="jw-skin-' + u((r = null != (r = n.skin || (null != t ? t.skin : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "skin",
                hash: {},
                data: o
            }) : r)) + ' jw-error jw-reset">\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset">' + u((r = null != (r = n.title || (null != t ? t.title : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "title",
                hash: {},
                data: o
            }) : r)) + '</div>\n        <div class="jw-title-secondary jw-reset">' + u((r = null != (r = n.body || (null != t ? t.body : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "body",
                hash: {},
                data: o
            }) : r)) + '</div>\n    </div>\n\n    <div class="jw-display-container jw-reset">\n        <div class="jw-display-icon-container jw-background-color jw-reset">\n            <div class="jw-icon jw-icon-display jw-reset" aria-hidden="true"></div>\n        </div>\n    </div>\n</div>\n'
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            return '<div class="jw-logo jw-reset"></div>'
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        1: function(e, t, n, i, o) {
            var r, a = e.escapeExpression;
            return "        <li class='jw-text jw-option jw-item-" + a((r = null != (r = n.index || o && o.index) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                name: "index",
                hash: {},
                data: o
            }) : r)) + " jw-reset'>" + a(e.lambda(null != t ? t.label : t, t)) + "</li>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r;
            return '<ul class="jw-menu jw-background-color jw-reset">\n' + (null != (r = n.each.call(null != t ? t : {}, t, {
                name: "each",
                hash: {},
                fn: e.program(1, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + "</ul>"
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r = e.lambda,
                a = e.escapeExpression;
            return '<div class="jw-nextup jw-reset">\n    <div class="jw-nextup-tooltip jw-reset">\n        <div class="jw-nextup-header jw-reset">\n            ' + a(r(null != t ? t.nextUpText : t, t)) + '\n        </div>\n        <div class="jw-nextup-body jw-background-color jw-reset">\n            <div class="jw-nextup-thumbnail jw-reset"></div>\n            <div class="jw-nextup-title jw-reset">' + a(r(null != t ? t.title : t, t)) + '</div>\n        </div>\n    </div>\n    <button class="jw-nextup-close" aria-label="' + a(r(null != t ? t.nextUpClose : t, t)) + '"></button>\n</div>\n'
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r;
            return '<div id="' + e.escapeExpression((r = null != (r = n.id || (null != t ? t.id : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t : {}, {
                name: "id",
                hash: {},
                data: o
            }) : r)) + '" class="jwplayer jw-reset jw-state-idle" tabindex="0">\n    <div class="jw-aspect jw-reset"></div>\n    <div class="jw-media jw-reset"></div>\n    <div class="jw-preview jw-reset"></div>\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset"></div>\n        <div class="jw-title-secondary jw-reset"></div>\n    </div>\n    <div class="jw-overlays jw-reset"></div>\n    <div class="jw-controls jw-reset"></div>\n</div>'
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        1: function(e, t, n, i, o) {
            var r, a, s = null != t ? t : {},
                l = n.helperMissing,
                u = "function",
                c = e.escapeExpression;
            return '        <li class="jw-reset' + (null != (r = n["if"].call(s, null != t ? t.featured : t, {
                name: "if",
                hash: {},
                fn: e.program(2, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + '">\n            <a href="' + c((a = null != (a = n.link || (null != t ? t.link : t)) ? a : l, typeof a === u ? a.call(s, {
                name: "link",
                hash: {},
                data: o
            }) : a)) + '" class="jw-reset" target="_top">\n' + (null != (r = n["if"].call(s, null != t ? t.showLogo : t, {
                name: "if",
                hash: {},
                fn: e.program(4, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + "                " + c((a = null != (a = n.title || (null != t ? t.title : t)) ? a : l, typeof a === u ? a.call(s, {
                name: "title",
                hash: {},
                data: o
            }) : a)) + "\n            </a>\n        </li>\n"
        },
        2: function(e, t, n, i, o) {
            return " jw-featured"
        },
        4: function(e, t, n, i, o) {
            return '                <span class="jw-icon jw-rightclick-logo jw-reset"></span>\n'
        },
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r;
            return '<div class="jw-rightclick jw-reset">\n    <ul class="jw-reset">\n' + (null != (r = n.each.call(null != t ? t : {}, null != t ? t.items : t, {
                name: "each",
                hash: {},
                fn: e.program(1, o, 0),
                inverse: e.noop,
                data: o
            })) ? r : "") + "    </ul>\n</div>"
        },
        useData: !0
    })
}, function(e, t, n) {
    var i = n(8);
    e.exports = (i["default"] || i).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, i, o) {
            var r, a = null != t ? t : {},
                s = n.helperMissing,
                l = "function",
                u = e.escapeExpression;
            return '<div class="' + u((r = null != (r = n.className || (null != t ? t.className : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "className",
                hash: {},
                data: o
            }) : r)) + " " + u((r = null != (r = n.orientation || (null != t ? t.orientation : t)) ? r : s, typeof r === l ? r.call(a, {
                name: "orientation",
                hash: {},
                data: o
            }) : r)) + ' jw-reset" aria-hidden="true">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>'
        },
        useData: !0
    })
}, , function(e, t, n) {
    var i;
    i = function(require, e, t) {
        function n(e, t) {
            o(t, r(e))
        }

        function i(e) {
            var t = c[e];
            if (t) {
                for (var n = Object.keys(t), i = 0; i < n.length; i += 1)
                    for (var o = t[n[i]], r = 0; r < o.parts.length; r += 1) o.parts[r]();
                delete c[e]
            }
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    o = (c[e] || {})[i.id];
                if (o) {
                    for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++) o.parts.push(l(e, i.parts[r]))
                } else {
                    for (var a = [], r = 0; r < i.parts.length; r++) a.push(l(e, i.parts[r]));
                    c[e] = c[e] || {}, c[e][i.id] = {
                        id: i.id,
                        parts: a
                    }
                }
            }
        }

        function r(e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var o = e[i],
                    r = o[0],
                    a = o[1],
                    s = o[2],
                    l = {
                        css: a,
                        media: s
                    };
                n[r] ? n[r].parts.push(l) : t.push(n[r] = {
                    id: r,
                    parts: [l]
                })
            }
            return t
        }

        function a(e) {
            f().appendChild(e)
        }

        function s(e) {
            var t = document.createElement("style");
            return t.type = "text/css", t.setAttribute("data-jwplayer-id", e), a(t), t
        }

        function l(e, t) {
            var n, i, o, r = d[e];
            r || (r = d[e] = {
                element: s(e),
                counter: 0
            });
            var a = r.counter++;
            return n = r.element, i = u.bind(null, n, a, !1), o = u.bind(null, n, a, !0), i(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media) return;
                        i(t = e)
                    } else o()
                }
        }

        function u(e, t, n, i) {
            var o = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = h(t, o);
            else {
                var r = document.createTextNode(o),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
            }
        }
        var c = {},
            d = {},
            p = function(e) {
                var t;
                return function() {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                }
            },
            f = p(function() {
                return document.head || document.getElementsByTagName("head")[0]
            });
        t.exports = {
            style: n,
            clear: i
        };
        var h = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
}, function(e, t, n) {
    var i = n(98);
    "string" == typeof i && (i = [
        ["all-players", i, ""]
    ]), n(112).style(i, "all-players"), i.locals && (e.exports = i.locals)
}, function(e, t, n) {
    var i, o;
    i = [n(21), n(1)], o = function(e, t) {
        return function(n, i) {
            var o = ["seek", "skipAd", "stop", "playlistNext", "playlistPrev", "playlistItem", "resize", "addButton", "removeButton", "registerPlugin", "attachMedia", "next"];
            t.each(o, function(e) {
                n[e] = function() {
                    return i[e].apply(i, arguments), n
                }
            }), n.registerPlugin = e.registerPlugin
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        return function(t, n) {
            var i = ["buffer", "controls", "position", "duration", "fullscreen", "volume", "item", "stretching", "playlist", "captions"];
            e.each(i, function(e) {
                var i = e.slice(0, 1).toUpperCase() + e.slice(1);
                t["get" + i] = function() {
                    return n._model.get(e)
                }
            });
            var o = ["getAudioTracks", "getCaptionsList", "getWidth", "getHeight", "getCurrentAudioTrack", "setCurrentAudioTrack", "getCurrentCaptions", "setCurrentCaptions", "getCurrentQuality", "setCurrentQuality", "getQualityLevels", "getVisualQuality", "getConfig", "getState", "getSafeRegion", "isBeforeComplete", "isBeforePlay", "getProvider", "detachMedia"],
                r = ["setControls", "setFullscreen", "setVolume", "setMute", "setCues", "setCaptions"];
            e.each(o, function(e) {
                t[e] = function() {
                    return n[e] ? n[e].apply(n, arguments) : null
                }
            }), e.each(r, function(e) {
                t[e] = function() {
                    return n[e].apply(n, arguments), t
                }
            }), t.getPlaylistIndex = t.getItem
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(4), n(5), n(3), n(2), n(64), n(1), n(172), n(114), n(115), n(117), n(26)], o = function(e, t, n, i, o, r, a, s, l, u, c) {
        var d = function(d, p) {
            var f, h = this,
                g = !1,
                w = {};
            r.extend(this, n), this.utils = i, this._ = r, this.Events = n, this.version = c, this.trigger = function(e, t) {
                t = r.isObject(t) ? r.extend({}, t) : {}, t.type = e;
                var i = window.jwplayer;
                return i && i.debug ? n.trigger.call(h, e, t) : n.triggerSafe.call(h, e, t)
            }, this.dispatchEvent = this.trigger, this.removeEventListener = this.off.bind(this);
            var m = function() {
                f = new a(d), s(h, f), l(h, f), f.on(e.JWPLAYER_PLAYLIST_ITEM, function() {
                    w = {}
                }), f.on(e.JWPLAYER_MEDIA_META, function(e) {
                    r.extend(w, e.metadata)
                }), f.on(e.JWPLAYER_READY, function(e) {
                    g = !0, v.tick("ready"), e.setupTime = v.between("setup", "ready")
                }), f.on("all", h.trigger)
            };
            m(), u(this), this.id = d.id;
            var v = this._qoe = new o;
            v.tick("init");
            var j = function() {
                g = !1, w = {}, h.off(), f && f.off(), f && f.playerDestroy && f.playerDestroy()
            };
            return this.getPlugin = function(e) {
                return h.plugins && h.plugins[e]
            }, this.addPlugin = function(e, t) {
                this.plugins = this.plugins || {}, this.plugins[e] = t, this.onReady(t.addToPlayer), t.resize && this.onResize(t.resizeHandler)
            }, this.setup = function(e) {
                return v.tick("setup"), j(), m(), i.foreach(e.events, function(e, t) {
                    var n = h[e];
                    "function" == typeof n && n.call(h, t)
                }), e.id = h.id, f.setup(e, this), h
            }, this.qoe = function() {
                var e = f.getItemQoe(),
                    t = v.between("setup", "ready"),
                    n = e.getFirstFrame();
                return {
                    setupTime: t,
                    firstFrame: n,
                    player: v.dump(),
                    item: e.dump()
                }
            }, this.getContainer = function() {
                return f.getContainer ? f.getContainer() : d
            }, this.getMeta = this.getItemMeta = function() {
                return w
            }, this.getPlaylistItem = function(e) {
                if (!i.exists(e)) return f._model.get("playlistItem");
                var t = h.getPlaylist();
                return t ? t[e] : null
            }, this.getRenderingMode = function() {
                return "html5"
            }, this.getMute = function() {
                return f._model.getMute()
            }, this.load = function(e) {
                return f.load(e), h
            }, this.play = function(e, n) {
                if (r.isObject(e) && e.reason && (n = e), n || (n = {
                        reason: "external"
                    }), e === !0) return f.play(n), h;
                if (e === !1) return f.pause(n), h;
                switch (e = h.getState()) {
                    case t.PLAYING:
                    case t.BUFFERING:
                        f.pause(n);
                        break;
                    default:
                        f.play(n)
                }
                return h
            }, this.pause = function(e, t) {
                return r.isBoolean(e) ? this.play(!e, t) : this.play(t)
            }, this.createInstream = function() {
                return f.createInstream()
            }, this.castToggle = function() {
                f && f.castToggle && f.castToggle()
            }, this.playAd = this.pauseAd = i.noop, this.remove = function() {
                return p(h), h.trigger("remove"), j(), h
            }, this
        };
        return d
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(4)], o = function(e, t) {
        return function(n) {
            var i = {
                    onBufferChange: t.JWPLAYER_MEDIA_BUFFER,
                    onBufferFull: t.JWPLAYER_MEDIA_BUFFER_FULL,
                    onError: t.JWPLAYER_ERROR,
                    onSetupError: t.JWPLAYER_SETUP_ERROR,
                    onFullscreen: t.JWPLAYER_FULLSCREEN,
                    onMeta: t.JWPLAYER_MEDIA_META,
                    onMute: t.JWPLAYER_MEDIA_MUTE,
                    onPlaylist: t.JWPLAYER_PLAYLIST_LOADED,
                    onPlaylistItem: t.JWPLAYER_PLAYLIST_ITEM,
                    onPlaylistComplete: t.JWPLAYER_PLAYLIST_COMPLETE,
                    onReady: t.JWPLAYER_READY,
                    onResize: t.JWPLAYER_RESIZE,
                    onComplete: t.JWPLAYER_MEDIA_COMPLETE,
                    onSeek: t.JWPLAYER_MEDIA_SEEK,
                    onTime: t.JWPLAYER_MEDIA_TIME,
                    onVolume: t.JWPLAYER_MEDIA_VOLUME,
                    onBeforePlay: t.JWPLAYER_MEDIA_BEFOREPLAY,
                    onBeforeComplete: t.JWPLAYER_MEDIA_BEFORECOMPLETE,
                    onDisplayClick: t.JWPLAYER_DISPLAY_CLICK,
                    onControls: t.JWPLAYER_CONTROLS,
                    onQualityLevels: t.JWPLAYER_MEDIA_LEVELS,
                    onQualityChange: t.JWPLAYER_MEDIA_LEVEL_CHANGED,
                    onCaptionsList: t.JWPLAYER_CAPTIONS_LIST,
                    onCaptionsChange: t.JWPLAYER_CAPTIONS_CHANGED,
                    onAdError: t.JWPLAYER_AD_ERROR,
                    onAdClick: t.JWPLAYER_AD_CLICK,
                    onAdImpression: t.JWPLAYER_AD_IMPRESSION,
                    onAdTime: t.JWPLAYER_AD_TIME,
                    onAdComplete: t.JWPLAYER_AD_COMPLETE,
                    onAdCompanions: t.JWPLAYER_AD_COMPANIONS,
                    onAdSkipped: t.JWPLAYER_AD_SKIPPED,
                    onAdPlay: t.JWPLAYER_AD_PLAY,
                    onAdPause: t.JWPLAYER_AD_PAUSE,
                    onAdMeta: t.JWPLAYER_AD_META,
                    onCast: t.JWPLAYER_CAST_SESSION,
                    onAudioTrackChange: t.JWPLAYER_AUDIO_TRACK_CHANGED,
                    onAudioTracks: t.JWPLAYER_AUDIO_TRACKS
                },
                o = {
                    onBuffer: "buffer",
                    onPause: "pause",
                    onPlay: "play",
                    onIdle: "idle"
                };
            e.each(o, function(t, i) {
                n[i] = e.partial(n.on, t, e)
            }), e.each(i, function(t, i) {
                n[i] = e.partial(n.on, t, e)
            })
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(1)], o = function(e, t) {
        function i(n) {
            t.each(n, function(t, i) {
                n[i] = e.serialize(t)
            })
        }

        function o(e) {
            return e.slice && "px" === e.slice(-2) && (e = e.slice(0, -2)), e
        }

        function r(t, n) {
            if (n.toString().indexOf("%") === -1) return 0;
            if ("string" != typeof t || !e.exists(t)) return 0;
            if (/^\d*\.?\d+%$/.test(t)) return t;
            var i = t.indexOf(":");
            if (i === -1) return 0;
            var o = parseFloat(t.substr(0, i)),
                r = parseFloat(t.substr(i + 1));
            return o <= 0 || r <= 0 ? 0 : r / o * 100 + "%"
        }
        var a = {
                autostart: !1,
                controls: !0,
                displaytitle: !0,
                displaydescription: !0,
                mobilecontrols: !1,
                repeat: !1,
                castAvailable: !1,
                skin: "seven",
                stretching: "uniform",
                mute: !1,
                volume: 90,
                width: 480,
                height: 270,
                audioMode: !1,
                localization: {
                    play: "Play",
                    playback: "Start playback",
                    pause: "Pause",
                    volume: "Volume",
                    prev: "Previous",
                    next: "Next",
                    cast: "Chromecast",
                    airplay: "Airplay",
                    fullscreen: "Fullscreen",
                    playlist: "Playlist",
                    hd: "Quality",
                    cc: "Closed captions",
                    audioTracks: "Audio tracks",
                    replay: "Replay",
                    buffer: "Loading",
                    more: "More",
                    liveBroadcast: "پخش زنده",
                    loadingAd: "آگهی بازرگانی",
                    rewind: "Rewind 10s",
                    nextUp: "Next Up",
                    nextUpClose: "Next Up Close",
                    related: "Related"
                },
                renderCaptionsNatively: !1
            },
            s = function(s, l) {
                var u = l && l.getAllItems(),
                    c = t.extend({}, (window.jwplayer || {}).defaults, u, s);
                i(c), c.localization = t.extend({}, a.localization, c.localization);
                var d = t.extend({}, a, c);
                "." === d.base && (d.base = e.getScriptPath("jwplayer.js")), d.base = (d.base || e.loadFrom()).replace(/\/?$/, "/"), n.p = d.base, d.width = o(d.width), d.height = o(d.height);
                var p = e.getScriptPath("jwplayer.js") || d.base;
                if (d.flashplayer = d.flashplayer || p + "jwplayer.flash.swf", d.flashloader = d.flashloader || p + "jwplayer.loader.swf", "http:" === window.location.protocol && (d.flashplayer = d.flashplayer.replace("https", "http"), d.flashloader = d.flashloader.replace("https", "http")), d.aspectratio = r(d.aspectratio, d.width), t.isObject(d.skin) && (d.skinUrl = d.skin.url, d.skinColorInactive = d.skin.inactive, d.skinColorActive = d.skin.active, d.skinColorBackground = d.skin.background, d.skin = t.isString(d.skin.name) ? d.skin.name : a.skin), t.isString(d.skin) && d.skin.indexOf(".xml") > 0 && (console.log("JW Player does not support XML skins, please update your config"), d.skin = d.skin.replace(".xml", "")), d.aspectratio || delete d.aspectratio, !d.playlist) {
                    var f = t.pick(d, ["title", "description", "type", "mediaid", "image", "file", "sources", "tracks", "preload"]);
                    d.playlist = [f]
                }
                return d
            };
        return s
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(116), n(1), n(39), n(38), n(21)], o = function(e, t, n, i, o) {
        var r = [],
            a = 0,
            s = function(t) {
                var n, i;
                return t ? "string" == typeof t ? (n = l(t), n || (i = document.getElementById(t))) : "number" == typeof t ? n = r[t] : t.nodeType && (i = t, n = l(i.id)) : n = r[0], n ? n : i ? u(new e(i, c)) : {
                    registerPlugin: o.registerPlugin
                }
            },
            l = function(e) {
                for (var t = 0; t < r.length; t++)
                    if (r[t].id === e) return r[t];
                return null
            },
            u = function(e) {
                return a++, e.uniqueId = a, r.push(e), e
            },
            c = function(e) {
                for (var t = r.length; t--;)
                    if (r[t].uniqueId === e.uniqueId) {
                        r.splice(t, 1);
                        break
                    }
            },
            d = {
                selectPlayer: s,
                registerProvider: n.registerProvider,
                availableProviders: i,
                registerPlugin: o.registerPlugin
            };
        return s.api = d, d
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(173), n(3), n(1), n(4)], o = function(e, t, n, i) {
        var o = function(t, o, r, a) {
            function s() {
                p("Setup Timeout Error", "Setup took longer than " + w + " seconds to complete.")
            }

            function l() {
                n.each(g, function(e) {
                    e.complete !== !0 && e.running !== !0 && null !== t && c(e.depends) && (e.running = !0, u(e))
                })
            }

            function u(e) {
                var n = function(t) {
                    t = t || {}, d(e, t)
                };
                e.method(n, o, t, r, a)
            }

            function c(e) {
                return n.all(e, function(e) {
                    return g[e].complete
                })
            }

            function d(e, t) {
                "error" === t.type ? p(t.msg, t.reason) : "complete" === t.type ? (clearTimeout(f), h.trigger(i.JWPLAYER_READY)) : (e.complete = !0, l())
            }

            function p(e, t) {
                clearTimeout(f), h.trigger(i.JWPLAYER_SETUP_ERROR, {
                    message: e + ": " + t
                }), h.destroy()
            }
            var f, h = this,
                g = e.getQueue(),
                w = 30;
            this.start = function() {
                f = setTimeout(s, 1e3 * w), l()
            }, this.destroy = function() {
                clearTimeout(f), this.off(), g.length = 0, t = null, o = null, r = null
            }
        };
        return o.prototype = t, o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(19), n(18)], o = function(e, t, n) {
        var i = function(i, o) {
            function r(e) {
                if (e.tracks.length) {
                    for (var t = e.tracks || [], n = 0; n < t.length; n++) {
                        var i = t[n];
                        v[i._id] || p(i)
                    }
                    var o = f();
                    h(), this.setCaptionsList(o)
                }
            }

            function a(e, t) {
                w = t, m = [], v = {}, j = {}, y = 0
            }

            function s(e) {
                a(o, e);
                var n = e.tracks,
                    i = n && n.length;
                if (!o.get("renderCaptionsNatively") && i) {
                    var r, s;
                    for (r = 0; r < i; r++) s = n[r], l(s.kind) && !v[s._id] && (p(s), t.loadFile(s, u.bind(null, s), c))
                }
                var d = f();
                h(), this.setCaptionsList(d)
            }

            function l(e) {
                return "subtitles" === e || "captions" === e
            }

            function u(e, t) {
                e.data = t
            }

            function c(t) {
                e.log("CAPTIONS(" + t + ")")
            }

            function d(e, t) {
                var n = null;
                0 !== t && (n = m[t - 1]), e.set("captionsTrack", n)
            }

            function p(e) {
                if (e.data = e.data || [], e.name = e.label || e.name || e.language, e._id = n.createId(e, m.length), !e.name) {
                    var t = n.createLabel(e, y);
                    e.name = t.label, y = t.unknownCount
                }
                m.push(e), v[e._id] = e
            }

            function f() {
                for (var e = [{
                        id: "off",
                        label: "Off"
                    }], t = 0; t < m.length; t++) e.push({
                    id: m[t]._id,
                    label: m[t].name || "Unknown CC"
                });
                return e
            }

            function h() {
                var e = 0,
                    t = o.get("captionLabel");
                if ("Off" === t) return void o.set("captionsIndex", 0);
                for (var n = 0; n < m.length; n++) {
                    var i = m[n];
                    if (t && t === i.name) {
                        e = n + 1;
                        break
                    }
                    i["default"] || i.defaulttrack || "default" === i._id ? e = n + 1 : i.autoselect
                }
                g(e)
            }

            function g(e) {
                m.length ? o.setVideoSubtitleTrack(e, m) : o.set("captionsIndex", e)
            }
            o.on("change:playlistItem", a, this), o.on("change:captionsIndex", d, this), o.on("itemReady", s, this), o.mediaController.on("subtitlesTracks", r, this);
            var w = {},
                m = [],
                v = {},
                j = {},
                y = 0;
            this.getCurrentIndex = function() {
                return o.get("captionsIndex")
            }, this.getCaptionsList = function() {
                return o.get("captionsList")
            }, this.setCaptionsList = function(e) {
                o.set("captionsList", e)
            }
        };
        return i
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(118), n(123), n(1), n(120), n(121), n(29), n(128), n(50), n(49), n(2), n(74), n(3), n(30), n(5), n(4), n(157)], o = function(e, t, i, o, r, a, s, l, u, c, d, p, f, h, g, w) {
        function m(e) {
            return function() {
                var t = Array.prototype.slice.call(arguments, 0);
                this._model.getVideo() ? this["_" + e].apply(this, t) : this.eventsQueue.push([e, t])
            }
        }

        function v(e) {
            return e === h.LOADING || e === h.STALLED ? h.BUFFERING : e
        }
        var j = function(e) {
            this.originalContainer = this.currentContainer = e, this.eventsQueue = [], i.extend(this, p), this._model = new a
        };
        return j.prototype = {
            play: m("play"),
            pause: m("pause"),
            seek: m("seek"),
            stop: m("stop"),
            load: m("load"),
            playlistNext: m("next"),
            playlistPrev: m("prev"),
            playlistItem: m("item"),
            setCurrentCaptions: m("setCurrentCaptions"),
            setCurrentQuality: m("setCurrentQuality"),
            setFullscreen: m("setFullscreen"),
            setup: function(a, p) {
                function w(e, t) {
                    fe.triggerAfterReady(e, t)
                }

                function m() {
                    ae = null, oe.on("all", w, fe), fe.showView(oe.element()), i.defer(j)
                }

                function j() {
                    fe.trigger(g.JWPLAYER_READY, {
                        setupTime: 0
                    }), fe.triggerAfterReady = fe.trigger;
                    for (var e = 0; e < me.length; e++) {
                        var t = me[e];
                        de = t.type === g.JWPLAYER_MEDIA_BEFOREPLAY, fe.trigger(t.type, t.args), de = !1
                    }
                    var n = p.getPlugin("related");
                    n && n.on("nextUp", ce.setNextUp, ce), ie() && (c.isMobile() && he().video ? y(he().video) : R())
                }

                function y(e) {
                    "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? b(e) : n.e(10, function(require) {
                        n(54), b(e)
                    })
                }

                function b(e) {
                    window.IntersectionObserver && (ue = new window.IntersectionObserver(E, {
                        threshold: .5
                    }), ue.observe(e))
                }

                function x() {
                    ue.disconnect(), ue = void 0
                }

                function E(e) {
                    if (e && e.length) {
                        var t = he().video,
                            n = e[0],
                            i = {
                                reason: "autostart"
                            };
                        n.target === t && n.intersectionRatio >= .5 ? fe.play(i) : fe.pause(i)
                    }
                }

                function k(e) {
                    var t = ce.getProviders(),
                        n = t.required(e, ce.get("primary"));
                    return t.load(n).then(function() {
                        fe.getProvider() || (ce.setProvider(ce.get("playlistItem")), C())
                    })
                }

                function C() {
                    for (; fe.eventsQueue.length > 0;) {
                        var e = fe.eventsQueue.shift(),
                            t = e[0],
                            n = e[1] || [];
                        fe["_" + t].apply(fe, n)
                    }
                }

                function A(e) {
                    switch (ce.get("state") === h.ERROR && ce.set("state", h.IDLE), ce.set("preInstreamState", "instream-idle"), M(!0), fe.trigger("destroyPlugin", {}), ie() && ce.once("itemReady", R), typeof e) {
                        case "string":
                            L(e);
                            break;
                        case "object":
                            var t = D(e);
                            t && Y(0);
                            break;
                        case "number":
                            Y(e)
                    }
                }

                function L(e) {
                    var t = new u;
                    t.on(g.JWPLAYER_PLAYLIST_LOADED, function(e) {
                        A(e.playlist)
                    }), t.on(g.JWPLAYER_ERROR, function(e) {
                        e.message = "Error loading playlist: " + e.message, this.triggerError(e)
                    }, this), t.load(e)
                }

                function _() {
                    return fe._instreamAdapter && fe._instreamAdapter.getState()
                }

                function T() {
                    var e = _();
                    return i.isString(e) ? e : ce.get("state")
                }

                function P(e) {
                    var t;
                    if (e && ce.set("playReason", e.reason), ce.get("state") !== h.ERROR) {
                        var n = _();
                        if (i.isString(n)) return p.pauseAd(!1);
                        if (ce.get("state") === h.COMPLETE && (M(!0), Y(0)), !de && (de = !0, fe.triggerAfterReady(g.JWPLAYER_MEDIA_BEFOREPLAY, {
                                playReason: ce.get("playReason")
                            }), de = !1, le)) return le = !1, void(se = null);
                        if (S()) {
                            if (0 === ce.get("playlist").length) return !1;
                            t = c.tryCatch(function() {
                                ce.loadVideo()
                            })
                        } else ce.get("state") === h.PAUSED && (t = c.tryCatch(function() {
                            ce.playVideo()
                        }));
                        return !(t instanceof c.Error) || (fe.triggerError(t), se = null, !1)
                    }
                }

                function R() {
                    P({
                        reason: "autostart"
                    })
                }

                function M(e) {
                    ce.off("itemReady", R);
                    var t = !e;
                    se = null;
                    var n = c.tryCatch(function() {
                        ce.stopVideo()
                    }, fe);
                    return n instanceof c.Error ? (fe.triggerError(n), !1) : (t && (pe = !0), de && (le = !0), !0)
                }

                function I(e) {
                    se = null, e && (ce.set("pauseReason", e.reason), !ue || "interaction" !== e.reason && "external" !== e.reason || x());
                    var t = _();
                    if (i.isString(t)) return p.pauseAd(!0);
                    switch (ce.get("state")) {
                        case h.ERROR:
                            return !1;
                        case h.PLAYING:
                        case h.BUFFERING:
                            var n = c.tryCatch(function() {
                                he().pause()
                            }, this);
                            if (n instanceof c.Error) return fe.triggerError(n), !1;
                            break;
                        default:
                            de && (le = !0)
                    }
                    return !0
                }

                function S() {
                    var e = ce.get("state");
                    return e === h.IDLE || e === h.COMPLETE || e === h.ERROR
                }

                function O(e, t) {
                    ce.get("state") !== h.ERROR && (ce.get("scrubbing") || ce.get("state") === h.PLAYING || P(t), he().seek(e))
                }

                function N(e, t) {
                    M(!0), ce.get("state") === h.ERROR && ce.set("state", h.IDLE), Y(e), P(t)
                }

                function D(e) {
                    var t = l(e);
                    return t = l.filterPlaylist(t, ce), ce.set("playlist", t), i.isArray(t) && 0 !== t.length ? (k(t), !0) : (fe.triggerError({
                        message: "Error loading playlist: No playable sources found"
                    }), !1)
                }

                function Y(e) {
                    ce.setItemIndex(e)
                }

                function F(e) {
                    N(ce.get("item") - 1, e || {
                        reason: "external"
                    })
                }

                function W(e) {
                    N(ce.get("item") + 1, e || {
                        reason: "external"
                    })
                }

                function J() {
                    if (S()) {
                        if (pe) return void(pe = !1);
                        se = J;
                        var e = ce.get("item");
                        return e === ce.get("playlist").length - 1 ? void(ce.get("repeat") ? W({
                            reason: "repeat"
                        }) : (ue && x(), ce.set("state", h.COMPLETE), fe.trigger(g.JWPLAYER_PLAYLIST_COMPLETE, {}))) : void W({
                            reason: "playlist"
                        })
                    }
                }

                function B(e) {
                    he() && (e = parseInt(e, 10) || 0, he().setCurrentQuality(e))
                }

                function V() {
                    return he() ? he().getCurrentQuality() : -1
                }

                function z() {
                    if (this._model) return this._model.getConfiguration()
                }

                function U() {
                    if (this._model.mediaModel) return this._model.mediaModel.get("visualQuality");
                    var e = H();
                    if (e) {
                        var t = V(),
                            n = e[t];
                        if (n) return {
                            level: i.extend({
                                index: t
                            }, n),
                            mode: "",
                            reason: ""
                        }
                    }
                    return null
                }

                function H() {
                    return he() ? he().getQualityLevels() : null
                }

                function G(e) {
                    he() && (e = parseInt(e, 10) || 0, he().setCurrentAudioTrack(e))
                }

                function K() {
                    return he() ? he().getCurrentAudioTrack() : -1
                }

                function q() {
                    return he() ? he().getAudioTracks() : null
                }

                function X(e) {
                    e = parseInt(e, 10) || 0, ce.persistVideoSubtitleTrack(e), fe.trigger(g.JWPLAYER_CAPTIONS_CHANGED, {
                        tracks: $(),
                        track: e
                    })
                }

                function Q() {
                    return re.getCurrentIndex()
                }

                function $() {
                    return re.getCaptionsList()
                }

                function Z() {
                    var e = ce.getVideo();
                    if (e) {
                        var t = e.detachMedia();
                        if (t instanceof HTMLVideoElement) return t
                    }
                    return null
                }

                function ee() {
                    var e = c.tryCatch(function() {
                        ce.getVideo().attachMedia()
                    });
                    return e instanceof c.Error ? void c.log("Error calling _attachMedia", e) : void("function" == typeof se && se())
                }

                function te(e) {
                    i.isBoolean(e) || (e = !ce.get("fullscreen")), ce.set("fullscreen", e), this._instreamAdapter && this._instreamAdapter._adModel && this._instreamAdapter._adModel.set("fullscreen", e)
                }

                function ne() {
                    var e = p.getPlugin("related");
                    e && e.next()
                }

                function ie() {
                    return ce.get("autostart") && !c.isMobile() || ce.autoStartOnMobile()
                }
                var oe, re, ae, se, le, ue, ce = this._model,
                    de = !1,
                    pe = !1,
                    fe = this,
                    he = function() {
                        return ce.getVideo()
                    },
                    ge = new s;
                ge.track(ce);
                var we = new e(a, ge),
                    me = [];
                ce.setup(we, ge), oe = this._view = new d(p, ce), ae = new o(p, ce, oe, D), ae.on(g.JWPLAYER_READY, m, this), ae.on(g.JWPLAYER_SETUP_ERROR, this.setupError, this), ce.mediaController.on("all", w, this), ce.mediaController.on(g.JWPLAYER_MEDIA_COMPLETE, function() {
                    i.defer(J)
                }), ce.mediaController.on(g.JWPLAYER_MEDIA_ERROR, this.triggerError, this), ce.on("change:flashBlocked", function(e, t) {
                    if (!t) return void this._model.set("errorEvent", void 0);
                    var n = !!e.get("flashThrottle"),
                        i = {
                            message: n ? "Click to run Flash" : "Flash plugin failed to load"
                        };
                    n || this.trigger(g.JWPLAYER_ERROR, i), this._model.set("errorEvent", i)
                }, this), ce.on("change:state", f, this), ce.on("change:castState", function(e, t) {
                    fe.trigger(g.JWPLAYER_CAST_SESSION, t)
                }), ce.on("change:fullscreen", function(e, t) {
                    fe.trigger(g.JWPLAYER_FULLSCREEN, {
                        fullscreen: t
                    }), t && ue && x()
                }), ce.on("itemReady", function() {
                    fe.triggerAfterReady(g.JWPLAYER_PLAYLIST_ITEM, {
                        index: ce.get("item"),
                        item: ce.get("playlistItem")
                    })
                }), ce.on("change:playlist", function(e, t) {
                    t.length && fe.triggerAfterReady(g.JWPLAYER_PLAYLIST_LOADED, {
                        playlist: t
                    })
                }), ce.on("change:volume", function(e, t) {
                    fe.trigger(g.JWPLAYER_MEDIA_VOLUME, {
                        volume: t
                    })
                }), ce.on("change:mute", function(e, t) {
                    fe.trigger(g.JWPLAYER_MEDIA_MUTE, {
                        mute: t
                    })
                }), ce.on("change:controls", function(e, t) {
                    fe.trigger(g.JWPLAYER_CONTROLS, {
                        controls: t
                    })
                }), ce.on("change:scrubbing", function(e, t) {
                    t ? I() : P({
                        reason: "interaction"
                    })
                }), ce.on("change:captionsList", function(e, t) {
                    try {
                        fe.triggerAfterReady(g.JWPLAYER_CAPTIONS_LIST, {
                            tracks: t,
                            track: Q()
                        })
                    } catch (n) {
                        c.log("Error with captionsList event:", n)
                    }
                }), ce.on("change:mediaModel", function(e) {
                    e.mediaModel.on("change:state", function(t, n) {
                        var i = v(n);
                        e.set("state", i)
                    })
                }), re = new r(p, ce), this.triggerAfterReady = function(e, t) {
                    me.push({
                        type: e,
                        args: t
                    })
                }, this._play = P, this._pause = I, this._seek = O, this._stop = M, this._load = A, this._next = W, this._prev = F, this._item = N, this._setCurrentCaptions = X, this._setCurrentQuality = B, this._setFullscreen = te, this.detachMedia = Z, this.attachMedia = ee, this.getCurrentQuality = V, this.getQualityLevels = H, this.setCurrentAudioTrack = G, this.getCurrentAudioTrack = K, this.getAudioTracks = q, this.getCurrentCaptions = Q, this.getCaptionsList = $, this.getVisualQuality = U, this.getConfig = z, this.getState = T, this.setVolume = ce.setVolume.bind(ce), this.setMute = ce.setMute.bind(ce), this.getProvider = function() {
                    return ce.get("provider")
                }, this.getWidth = function() {
                    return ce.get("containerWidth")
                }, this.getHeight = function() {
                    return ce.get("containerHeight")
                }, this.getContainer = function() {
                    return this.currentContainer
                }, this.resize = oe.resize, this.getSafeRegion = oe.getSafeRegion, this.setCues = oe.addCues, this.setCaptions = oe.setCaptions, this.next = ne, this.addButton = function(e, t, n, o, r) {
                    var a = {
                            img: e,
                            tooltip: t,
                            callback: n,
                            id: o,
                            btnClass: r
                        },
                        s = ce.get("dock");
                    s = s ? s.slice(0) : [], s = i.reject(s, i.matches({
                        id: a.id
                    })), s.push(a), ce.set("dock", s)
                }, this.removeButton = function(e) {
                    var t = ce.get("dock") || [];
                    t = i.reject(t, i.matches({
                        id: e
                    })), ce.set("dock", t)
                }, this.checkBeforePlay = function() {
                    return de
                }, this.getItemQoe = function() {
                    return ce._qoeItem
                }, this.setControls = function(e) {
                    i.isBoolean(e) || (e = !ce.get("controls")), ce.set("controls", e);
                    var t = ce.getVideo();
                    t && t.setControls(e)
                }, this.playerDestroy = function() {
                    this.stop(), this.showView(this.originalContainer), oe && oe.destroy(), ce && ce.destroy(), ae && (ae.destroy(), ae = null)
                }, this.isBeforePlay = this.checkBeforePlay, this.isBeforeComplete = function() {
                    return ce.getVideo().checkComplete()
                }, this.createInstream = function() {
                    return this.instreamDestroy(), this._instreamAdapter = new t(this, ce, oe), this._instreamAdapter
                }, this.skipAd = function() {
                    this._instreamAdapter && this._instreamAdapter.skipAd()
                }, this.instreamDestroy = function() {
                    fe._instreamAdapter && fe._instreamAdapter.destroy()
                }, ae.start()
            },
            showView: function(e) {
                (document.documentElement.contains(this.currentContainer) || (this.currentContainer = document.getElementById(this._model.get("id")), this.currentContainer)) && (this.currentContainer.parentElement && this.currentContainer.parentElement.replaceChild(e, this.currentContainer), this.currentContainer = e)
            },
            triggerError: function(e) {
                this._model.set("errorEvent", e), this._model.set("state", h.ERROR), this._model.once("change:state", function() {
                    this._model.set("errorEvent", void 0)
                }, this), this.trigger(g.JWPLAYER_ERROR, e)
            },
            setupError: function(e) {
                var t = e.message,
                    n = c.createElement(w(this._model.get("id"), this._model.get("skin"), t)),
                    o = this._model.get("width"),
                    r = this._model.get("height");
                c.style(n, {
                    width: o.toString().indexOf("%") > 0 ? o : o + "px",
                    height: r.toString().indexOf("%") > 0 ? r : r + "px"
                }), this.showView(n);
                var a = this;
                i.defer(function() {
                    a.trigger(g.JWPLAYER_SETUP_ERROR, {
                        message: t
                    })
                })
            }
        }, j
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(125), n(124), n(4), n(5), n(2), n(3), n(1)], o = function(e, t, n, i, o, r, a) {
        function s(n) {
            var i = "",
                o = n.get("provider");
            return o && (i = o.name), i.indexOf("flash") >= 0 ? t : e
        }
        var l = {
                skipoffset: null,
                tag: null
            },
            u = function(e, r, u) {
                function c() {
                    y._adModel.set("state", "buffering"), r.set("skipButton", !1), b++;
                    var e, t = h[b];
                    g && (e = g[b]), E.loadItem(t, e)
                }

                function d(e, t) {
                    "complete" !== e && (t = t || {}, x.tag && !t.tag && (t.tag = x.tag), this.trigger(e, t), "mediaError" !== e && "error" !== e || h && b + 1 < h.length && c());
                }

                function p(e) {
                    y._adModel.set("duration", e.duration), y._adModel.set("position", e.position)
                }

                function f(e) {
                    var t = {};
                    x.tag && (t.tag = x.tag), this.trigger(n.JWPLAYER_MEDIA_COMPLETE, t), A.call(this, e)
                }
                var h, g, w, m, v, j = s(r),
                    y = new j(e, r),
                    b = 0,
                    x = {},
                    E = this,
                    k = a.bind(function(e) {
                        e = e || {}, e.hasControls = !!r.get("controls"), this.trigger(n.JWPLAYER_INSTREAM_CLICK, e), y && y._adModel && (y._adModel.get("state") === i.PAUSED ? e.hasControls && y.instreamPlay() : y.instreamPause())
                    }, this),
                    C = a.bind(function() {
                        y && y._adModel && y._adModel.get("state") === i.PAUSED && r.get("controls") && (e.setFullscreen(), e.play())
                    }, this);
                this.type = "instream", this.init = function() {
                    w = r.getVideo(), m = r.get("position"), v = r.get("playlist")[r.get("item")], y.on("all", d, this), y.on(n.JWPLAYER_MEDIA_TIME, p, this), y.on(n.JWPLAYER_MEDIA_COMPLETE, f, this), y.init(), w.detachMedia(), r.mediaModel.set("state", i.BUFFERING), e.checkBeforePlay() || 0 === m && !w.checkComplete() ? (m = 0, r.set("preInstreamState", "instream-preroll")) : w && w.checkComplete() || r.get("state") === i.COMPLETE ? r.set("preInstreamState", "instream-postroll") : r.set("preInstreamState", "instream-midroll");
                    var t = r.get("state");
                    return t !== i.PLAYING && t !== i.BUFFERING || w.pause(), u.setupInstream(y._adModel), y._adModel.set("state", i.BUFFERING), u.clickHandler().setAlternateClickHandlers(o.noop, null), this.setText(r.get("localization").loadingAd), this
                };
                var A = function(e) {
                    h && b + 1 < h.length ? c() : (e.type === n.JWPLAYER_MEDIA_COMPLETE && this.trigger(n.JWPLAYER_PLAYLIST_COMPLETE, {}), this.destroy())
                };
                this.loadItem = function(e, i) {
                    if (o.isAndroid(2.3)) return void this.trigger({
                        type: n.JWPLAYER_ERROR,
                        message: "Error loading instream: Cannot play instream on Android 2.3"
                    });
                    var s = e;
                    a.isArray(e) ? (h = e, g = i, e = h[b], g && (i = g[b])) : s = [e];
                    var u = this,
                        c = r.getProviders(),
                        d = j === t ? "flash" : void 0,
                        p = c.required(s, d);
                    r.set("hideAdsControls", !1), c.load(p).then(function() {
                        if (null !== y) {
                            u.trigger(n.JWPLAYER_PLAYLIST_ITEM, {
                                index: b,
                                item: e
                            }), x = a.extend({}, l, i), y.load(e), u.addClickHandler();
                            var t = e.skipoffset || x.skipoffset;
                            t && u.setupSkipButton(t, x)
                        }
                    })
                }, this.setupSkipButton = function(e, t, n) {
                    r.set("skipButton", !1), n && (A = n), y._adModel.set("skipMessage", t.skipMessage), y._adModel.set("skipText", t.skipText), y._adModel.set("skipOffset", e), r.set("skipButton", !0)
                }, this.applyProviderListeners = function(e) {
                    y.applyProviderListeners(e), this.addClickHandler()
                }, this.play = function() {
                    y.instreamPlay()
                }, this.pause = function() {
                    y.instreamPause()
                }, this.addClickHandler = function() {
                    u.clickHandler().setAlternateClickHandlers(k, C), y.on(n.JWPLAYER_MEDIA_META, this.metaHandler, this)
                }, this.skipAd = function(e) {
                    var t = n.JWPLAYER_AD_SKIPPED;
                    this.trigger(t, e), A.call(this, {
                        type: t
                    })
                }, this.metaHandler = function(e) {
                    e.width && e.height && u.resizeMedia()
                }, this.destroy = function() {
                    if (this.off(), r.set("skipButton", !1), y) {
                        u.clickHandler() && u.clickHandler().revertAlternateClickHandlers(), r.off(null, null, y), y.instreamDestroy(), u.destroyInstream(), y = null, e.attachMedia();
                        var t = r.get("preInstreamState");
                        switch (t) {
                            case "instream-preroll":
                            case "instream-midroll":
                                var n = a.extend({}, v);
                                n.starttime = m, r.loadVideo(n), o.isMobile() && r.mediaModel.get("state") === i.BUFFERING && w.setState(i.BUFFERING), w.play();
                                break;
                            case "instream-postroll":
                            case "instream-idle":
                                w.stop()
                        }
                    }
                }, this.getState = function() {
                    return !(!y || !y._adModel) && y._adModel.get("state")
                }, this.setText = function(e) {
                    u.setAltText(e ? e : "")
                }, this.hide = function() {
                    r.set("hideAdsControls", !0)
                }
            };
        return a.extend(u.prototype, r), u
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(3), n(29), n(30), n(4), n(5), n(2), n(1)], o = function(e, t, n, i, o, r, a) {
        var s = function(e, i) {
            this.model = i, this._adModel = (new t).setup({
                id: i.get("id"),
                volume: i.get("volume"),
                fullscreen: i.get("fullscreen"),
                mute: i.get("mute")
            }), this._adModel.on("change:state", n, this);
            var o = e.getContainer();
            this.swf = o.querySelector("object")
        };
        return s.prototype = a.extend({
            init: function() {
                if (r.isChrome()) {
                    var e = -1,
                        t = !1;
                    this.swf.on("throttle", function(n) {
                        if (clearTimeout(e), "resume" === n.state) t && (t = !1, this.instreamPlay());
                        else {
                            var i = this;
                            e = setTimeout(function() {
                                i._adModel.get("state") === o.PLAYING && (t = !0, i.instreamPause())
                            }, 250)
                        }
                    }, this)
                }
                this.swf.on("instream:state", this.stateHandler, this).on("instream:time", function(e) {
                    this._adModel.set("position", e.position), this._adModel.set("duration", e.duration), this.trigger(i.JWPLAYER_MEDIA_TIME, e)
                }, this).on("instream:complete", function(e) {
                    this.trigger(i.JWPLAYER_MEDIA_COMPLETE, e)
                }, this).on("instream:error", function(e) {
                    this.trigger(i.JWPLAYER_MEDIA_ERROR, e)
                }, this), this.swf.triggerFlash("instream:init"), this.applyProviderListeners = function(e) {
                    this.model.on("change:volume", function(t, n) {
                        e.volume(n)
                    }, this), this.model.on("change:mute", function(t, n) {
                        e.mute(n)
                    }, this), e.volume(this.model.get("volume")), e.mute(this.model.get("mute")), e.off(), e.on(i.JWPLAYER_PLAYER_STATE, this.stateHandler, this), e.on(i.JWPLAYER_MEDIA_TIME, function(e) {
                        this.trigger(i.JWPLAYER_MEDIA_TIME, e)
                    }, this)
                }
            },
            stateHandler: function(e) {
                switch (e.newstate) {
                    case o.PLAYING:
                    case o.PAUSED:
                        this._adModel.set("state", e.newstate)
                }
            },
            instreamDestroy: function() {
                this._adModel && (this.off(), this.swf.off(null, null, this), this.swf.triggerFlash("instream:destroy"), this.swf = null, this._adModel.off(), this._adModel = null, this.model = null)
            },
            load: function(e) {
                this.swf.triggerFlash("instream:load", e)
            },
            instreamPlay: function() {
                this.swf.triggerFlash("instream:play")
            },
            instreamPause: function() {
                this.swf.triggerFlash("instream:pause")
            }
        }, e), s
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(3), n(30), n(4), n(5), n(29)], o = function(e, t, n, i, o, r) {
        var a = function(a, s) {
            function l(t) {
                var o = t || p.getVideo();
                if (f !== o) {
                    if (f = o, !o) return;
                    var r = "vpaid" === o.type;
                    o.off(), o.on("all", function(t, n) {
                        r && t === i.JWPLAYER_MEDIA_COMPLETE || this.trigger(t, e.extend({}, n, {
                            type: t
                        }))
                    }, h), o.on(i.JWPLAYER_MEDIA_BUFFER_FULL, d), o.on(i.JWPLAYER_PLAYER_STATE, u), o.attachMedia(), o.volume(s.get("volume")), o.mute(s.get("mute") || s.get("autostartMuted")), p.on("change:state", n, h)
                }
            }

            function u(e) {
                switch (e.newstate) {
                    case o.PLAYING:
                    case o.PAUSED:
                        p.set("state", e.newstate)
                }
            }

            function c(e) {
                s.trigger(e.type, e), h.trigger(i.JWPLAYER_FULLSCREEN, {
                    fullscreen: e.jwstate
                })
            }

            function d() {
                p.getVideo().play()
            }
            var p, f, h = e.extend(this, t);
            return a.on(i.JWPLAYER_FULLSCREEN, function(e) {
                this.trigger(i.JWPLAYER_FULLSCREEN, e)
            }, h), this.init = function() {
                p = (new r).setup({
                    id: s.get("id"),
                    volume: s.get("volume"),
                    fullscreen: s.get("fullscreen"),
                    mute: s.get("mute") || s.get("autostartMuted"),
                    instreamMode: !0
                }), p.on("fullscreenchange", c), this._adModel = p
            }, h.load = function(e) {
                p.set("item", 0), p.set("playlistItem", e), p.setActiveItem(e), l(), p.off(i.JWPLAYER_ERROR), p.on(i.JWPLAYER_ERROR, function(e) {
                    this.trigger(i.JWPLAYER_ERROR, e)
                }, h), p.loadVideo(e)
            }, h.applyProviderListeners = function(e) {
                l(e), e.off(i.JWPLAYER_ERROR), e.on(i.JWPLAYER_ERROR, function(e) {
                    this.trigger(i.JWPLAYER_ERROR, e)
                }, h), s.on("change:volume", function(e, t) {
                    f.volume(t)
                }, h), s.on("change:mute", function(e, t) {
                    f.mute(t)
                }, h), s.on("change:autostartMuted", function(e, t) {
                    t || f.mute(s.get("mute"))
                }, h)
            }, this.instreamDestroy = function() {
                p && (p.off(), this.off(), f && (f.detachMedia(), f.off(), p.getVideo() && f.destroy()), p = null, a.off(null, null, this), a = null)
            }, h.instreamPlay = function() {
                p.getVideo() && p.getVideo().play(!0)
            }, h.instreamPause = function() {
                p.getVideo() && p.getVideo().pause(!0)
            }, h
        };
        return a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(64), n(1)], o = function(e, t) {
        function n(e) {
            e.mediaController.off(a, e._onPlayAttempt), e.mediaController.off(s, e._triggerFirstFrame), e.mediaController.off(u, e._onTime), document.removeEventListener(p, e._onTabVisible)
        }

        function i(e) {
            n(e), e._triggerFirstFrame = t.once(function() {
                var t = e._qoeItem;
                t.tick(l);
                var i = t.getFirstFrame();
                e.mediaController.trigger(l, {
                    loadTime: i
                }), n(e)
            }), e._onTime = f(e._triggerFirstFrame), e._onPlayAttempt = function() {
                e._qoeItem.tick(a)
            }, e._onTabVisible = function(t) {
                var n = t.target.hidden;
                n === !0 ? e._qoeItem.tick(c) : n === !1 && e._qoeItem.tick(d)
            }, document.addEventListener(p, e._onTabVisible, !1), e.mediaController.on(a, e._onPlayAttempt), e.mediaController.once(s, e._triggerFirstFrame), e.mediaController.on(u, e._onTime)
        }

        function o(t) {
            function n(t, n, o) {
                t._qoeItem && o && t._qoeItem.end(o.get("state")), t._qoeItem = new e, t._qoeItem.getFirstFrame = function() {
                    var e = this.between(a, l),
                        t = this.between(d, l);
                    return t > 0 && t < e ? t : e
                }, t._qoeItem.tick(r), t._qoeItem.start(n.get("state")), i(t), n.on("change:state", function(e, n, i) {
                    t._qoeItem.end(i), t._qoeItem.start(n)
                })
            }
            t.on("change:mediaModel", n)
        }
        var r = "playlistItem",
            a = "playAttempt",
            s = "providerFirstFrame",
            l = "firstFrame",
            u = "time",
            c = "tabHidden",
            d = "tabVisible",
            p = "visibilitychange",
            f = function(e) {
                var t = 0;
                return function(n) {
                    var i = n.position;
                    i > t && e(), t = i
                }
            };
        return {
            model: o
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(21), n(49), n(15), n(61), n(22), n(1), n(2), n(4)], o = function(e, t, i, o, r, a, s, l) {
        function u() {
            var e = {
                LOAD_PROMISE_POLYFILL: {
                    method: c,
                    depends: []
                },
                LOAD_BASE64_POLYFILL: {
                    method: d,
                    depends: []
                },
                LOADED_POLYFILLS: {
                    method: p,
                    depends: ["LOAD_PROMISE_POLYFILL", "LOAD_BASE64_POLYFILL"]
                },
                LOAD_PLUGINS: {
                    method: f,
                    depends: ["LOADED_POLYFILLS"]
                },
                INIT_PLUGINS: {
                    method: h,
                    depends: ["LOAD_PLUGINS", "SETUP_VIEW"]
                },
                LOAD_SKIN: {
                    method: x,
                    depends: ["LOADED_POLYFILLS"]
                },
                LOAD_PLAYLIST: {
                    method: w,
                    depends: ["LOADED_POLYFILLS"]
                },
                CHECK_FLASH: {
                    method: m,
                    depends: ["LOADED_POLYFILLS"]
                },
                FILTER_PLAYLIST: {
                    method: v,
                    depends: ["LOAD_PLAYLIST", "CHECK_FLASH"]
                },
                SETUP_VIEW: {
                    method: E,
                    depends: ["LOAD_SKIN"]
                },
                SET_ITEM: {
                    method: k,
                    depends: ["INIT_PLUGINS", "FILTER_PLAYLIST"]
                },
                SEND_READY: {
                    method: C,
                    depends: ["SETUP_VIEW", "SET_ITEM"]
                }
            };
            return e
        }

        function c(e) {
            window.Promise ? e() : n.e(9, function(require) {
                n(55), e()
            })
        }

        function d(e) {
            window.btoa && window.atob ? e() : n.e(11, function(require) {
                n(53), e()
            })
        }

        function p(e) {
            e()
        }

        function f(t, n) {
            window.jwplayerPluginJsonp = e.registerPlugin, L = e.loadPlugins(n.get("id"), n.get("plugins")), L.on(l.COMPLETE, t), L.on(l.ERROR, a.partial(g, t)), L.load()
        }

        function h(e, t, n) {
            delete window.jwplayerPluginJsonp, L.setupPlugins(n, t), e()
        }

        function g(e, t) {
            A(e, "Could not load plugin", t.message)
        }

        function w(e, n) {
            var i = n.get("playlist");
            a.isString(i) ? (_ = new t, _.on(l.JWPLAYER_PLAYLIST_LOADED, function(t) {
                n.set("playlist", t.playlist), n.set("feedid", t.feedid), e()
            }), _.on(l.JWPLAYER_ERROR, a.partial(j, e)), _.load(i)) : e()
        }

        function m(e, t, n) {
            var i = "flash" === t.get("primary"),
                r = s.flashVersion();
            if (i && r) {
                var a = n.getContainer(),
                    l = a.parentElement;
                l || e();
                var u = document.createElement("div");
                u.id = t.get("id");
                var c = "" + u.id + "-" + Math.random().toString(16).substr(2),
                    d = t.get("flashloader"),
                    p = t.get("width"),
                    f = t.get("height");
                s.style(u, {
                    position: "relative",
                    width: p.toString().indexOf("%") > 0 ? p : p + "px",
                    height: f.toString().indexOf("%") > 0 ? f : f + "px"
                });
                var h = o.embed(d, u, c, null),
                    g = function() {
                        m !== -1 && (clearTimeout(m), m = -1, e())
                    },
                    w = function() {
                        t.set("primary", void 0), t.updateProviders(), g()
                    };
                if (Object.defineProperty(h, "embedCallback", {
                        get: function() {
                            return g
                        }
                    }), !h.on) return w();
                l.replaceChild(u, a);
                var m = setTimeout(w, 3e3)
            } else e()
        }

        function v(e, t, n, i, o) {
            var r = t.get("playlist"),
                a = o(r);
            a ? e() : j(e)
        }

        function j(e, t) {
            t && t.message ? A(e, "Error loading playlist", t.message) : A(e, "Error loading player", "No playable sources found")
        }

        function y(e, t) {
            if (a.contains(r.SkinsLoadable, e)) return t + "skins/" + e + ".css"
        }

        function b(e) {
            for (var t = document.styleSheets, n = 0, i = t.length; n < i; n++)
                if (t[n].href === e) return !0;
            return !1
        }

        function x(e, t) {
            var n = t.get("skin"),
                o = t.get("skinUrl");
            if (a.contains(r.SkinsIncluded, n)) return void e();
            if (o || (o = y(n, t.get("base"))), a.isString(o) && !b(o)) {
                t.set("skin-loading", !0);
                var s = !0,
                    u = new i(o, s);
                u.addEventListener(l.COMPLETE, function() {
                    t.set("skin-loading", !1)
                }), u.addEventListener(l.ERROR, function() {
                    t.set("skin", "seven"), t.set("skin-loading", !1)
                }), u.load()
            }
            a.defer(function() {
                e()
            })
        }

        function E(e, t, n, i) {
            i.setup(), e()
        }

        function k(e, t) {
            t.once("itemReady", e), t.setItemIndex(t.get("item"))
        }

        function C(e) {
            e({
                type: "complete"
            })
        }

        function A(e, t, n) {
            e({
                type: "error",
                msg: t,
                reason: n
            })
        }
        var L, _;
        return {
            getQueue: u,
            error: A
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2)], o = function(e, t) {
        function n(e) {
            return "jwplayer." + e
        }

        function i() {
            return e.reduce(this.persistItems, function(e, i) {
                var o = l[n(i)];
                return o && (e[i] = t.serialize(o)), e
            }, {})
        }

        function o(e, t) {
            try {
                l[n(e)] = t
            } catch (i) {
                var o = window.jwplayer;
                o && o.debug && console.error(i)
            }
        }

        function r() {
            e.each(this.persistItems, function(e) {
                l.removeItem(n(e))
            })
        }

        function a() {
            this.persistItems = ["volume", "mute", "captionLabel", "qualityLabel"]
        }

        function s(t) {
            e.each(this.persistItems, function(e) {
                t.on("change:" + e, function(t, n) {
                    o(e, n)
                })
            })
        }
        var l = {
            removeItem: t.noop
        };
        try {
            l = window.localStorage
        } catch (u) {}
        return e.extend(a.prototype, {
            getAllItems: i,
            track: s,
            clear: r
        }), a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(68), n(2)], o = function(e, t) {
        return n.p = t.loadFrom(), e.selectPlayer
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(9)], o = function(e) {
        function t(e) {
            e || n()
        }

        function n() {
            throw new Error("Invalid DFXP file")
        }
        var i = e.seconds;
        return function(o) {
            t(o);
            var r = [],
                a = o.getElementsByTagName("p"),
                s = 30,
                l = o.getElementsByTagName("tt");
            if (l && l[0]) {
                var u = parseFloat(l[0].getAttribute("ttp:frameRate"));
                isNaN(u) || (s = u)
            }
            t(a), a.length || (a = o.getElementsByTagName("tt:p"), a.length || (a = o.getElementsByTagName("tts:p")));
            for (var c = 0; c < a.length; c++) {
                for (var d = a[c], p = d.getElementsByTagName("br"), f = 0; f < p.length; f++) {
                    var h = p[f];
                    h.parentNode.replaceChild(o.createTextNode("\r\n"), h)
                }
                var g = d.innerHTML || d.textContent || d.text || "",
                    w = e.trim(g).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
                if (w) {
                    var m = d.getAttribute("begin"),
                        v = d.getAttribute("dur"),
                        j = d.getAttribute("end"),
                        y = {
                            begin: i(m, s),
                            text: w
                        };
                    j ? y.end = i(j, s) : v && (y.end = y.begin + i(v, s)), r.push(y)
                }
            }
            return r.length || n(), r
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(20), n(9), n(2)], o = function(e, t, n) {
        var i = "jwplayer",
            o = function(o, r) {
                for (var a = [], s = [], l = t.xmlAttribute, u = "default", c = "label", d = "file", p = "type", f = 0; f < o.childNodes.length; f++) {
                    var h = o.childNodes[f];
                    if (h.prefix === i) {
                        var g = e.localName(h);
                        "source" === g ? (delete r.sources, a.push({
                            file: l(h, d),
                            "default": l(h, u),
                            label: l(h, c),
                            type: l(h, p)
                        })) : "track" === g ? (delete r.tracks, s.push({
                            file: l(h, d),
                            "default": l(h, u),
                            kind: l(h, "kind"),
                            label: l(h, c)
                        })) : (r[g] = n.serialize(e.textContent(h)), "file" === g && r.sources && delete r.sources)
                    }
                    r[d] || (r[d] = r.link)
                }
                if (a.length)
                    for (r.sources = [], f = 0; f < a.length; f++) a[f].file.length > 0 && (a[f][u] = "true" === a[f][u], a[f].label.length || delete a[f].label, r.sources.push(a[f]));
                if (s.length)
                    for (r.tracks = [], f = 0; f < s.length; f++) s[f].file.length > 0 && (s[f][u] = "true" === s[f][u], s[f].kind = s[f].kind.length ? s[f].kind : "captions", s[f].label.length || delete s[f].label, r.tracks.push(s[f]));
                return r
            };
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(20), n(9), n(2)], o = function(e, t, n) {
        function i(e) {
            for (var t = [], n = 0; n < s(e); n++) {
                var i = e.childNodes[n];
                "jwplayer" === i.prefix && "mediatypes" === r(i).toLowerCase() && t.push(a(i))
            }
            return t
        }
        var o = t.xmlAttribute,
            r = e.localName,
            a = e.textContent,
            s = e.numChildren,
            l = "media",
            u = function(e, t) {
                function c(e) {
                    var t = {
                        zh: "Chinese",
                        nl: "Dutch",
                        en: "English",
                        fr: "French",
                        de: "German",
                        it: "Italian",
                        ja: "Japanese",
                        pt: "Portuguese",
                        ru: "Russian",
                        es: "Spanish"
                    };
                    return t[e] ? t[e] : e
                }
                var d, p, f = "tracks",
                    h = [];
                for (p = 0; p < s(e); p++)
                    if (d = e.childNodes[p], d.prefix === l) {
                        if (!r(d)) continue;
                        switch (r(d).toLowerCase()) {
                            case "content":
                                if (o(d, "duration") && (t.duration = n.seconds(o(d, "duration"))), o(d, "url")) {
                                    t.sources || (t.sources = []);
                                    var g = {
                                            file: o(d, "url"),
                                            type: o(d, "type"),
                                            width: o(d, "width"),
                                            label: o(d, "label")
                                        },
                                        w = i(d);
                                    w.length && (g.mediaTypes = w), t.sources.push(g)
                                }
                                s(d) > 0 && (t = u(d, t));
                                break;
                            case "title":
                                t.title = a(d);
                                break;
                            case "description":
                                t.description = a(d);
                                break;
                            case "guid":
                                t.mediaid = a(d);
                                break;
                            case "thumbnail":
                                t.image || (t.image = o(d, "url"));
                                break;
                            case "player":
                                break;
                            case "group":
                                u(d, t);
                                break;
                            case "subtitle":
                                var m = {};
                                m.file = o(d, "url"), m.kind = "captions", o(d, "lang").length > 0 && (m.label = c(o(d, "lang"))), h.push(m)
                        }
                    }
                for (t.hasOwnProperty(f) || (t[f] = []), p = 0; p < h.length; p++) t[f].push(h[p]);
                return t
            };
        return u
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = {
                kind: "captions",
                "default": !1
            },
            n = function(n) {
                if (n && n.file) return e.extend({}, t, n)
            };
        return n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(24), n(2), n(4), n(3), n(1), n(15)], o = function(e, t, n, i, o, r) {
        function a(e, t, n) {
            return function() {
                var i = e.getContainer().getElementsByClassName("jw-overlays")[0];
                i && (i.appendChild(n), n.left = i.style.left, n.top = i.style.top, t.displayArea = i)
            }
        }

        function s(e) {
            function t() {
                var t = e.displayArea;
                t && e.resize(t.clientWidth, t.clientHeight)
            }
            return function() {
                t(), setTimeout(t, 400)
            }
        }
        var l = function(l, u) {
            function c() {
                w || (w = !0, g = r.loaderstatus.COMPLETE, h.trigger(n.COMPLETE))
            }

            function d() {
                if (!v && (u && 0 !== o.keys(u).length || c(), !w)) {
                    var i = l.getPlugins();
                    f = o.after(m, c), o.each(u, function(o, a) {
                        var s = e.getPluginName(a),
                            l = i[s],
                            u = l.getJS(),
                            c = l.getTarget(),
                            d = l.getStatus();
                        d !== r.loaderstatus.LOADING && d !== r.loaderstatus.NEW && (u && !t.versionCheck(c) && h.trigger(n.ERROR, {
                            message: "Incompatible player version"
                        }), f())
                    })
                }
            }

            function p(e) {
                if (!v) {
                    var i = "File not found";
                    e.url && t.log(i, e.url), this.off(), this.trigger(n.ERROR, {
                        message: i
                    }), d()
                }
            }
            var f, h = o.extend(this, i),
                g = r.loaderstatus.NEW,
                w = !1,
                m = o.size(u),
                v = !1;
            this.setupPlugins = function(n, i) {
                var r = [],
                    u = l.getPlugins(),
                    c = i.get("plugins");
                o.each(c, function(i, l) {
                    var d = e.getPluginName(l),
                        p = u[d],
                        f = p.getFlashPath(),
                        h = p.getJS(),
                        g = p.getURL();
                    if (f) {
                        var w = o.extend({
                            name: d,
                            swf: f,
                            pluginmode: p.getPluginmode()
                        }, i);
                        r.push(w)
                    }
                    var m = t.tryCatch(function() {
                        if (h) {
                            var e = c[g];
                            if (!e) return void t.log("JW Plugin already loaded", d, g);
                            var i = document.createElement("div");
                            i.id = n.id + "_" + d, i.className = "jw-plugin jw-reset";
                            var r = o.extend({}, e),
                                l = p.getNewInstance(n, r, i);
                            l.addToPlayer = a(n, l, i), l.resizeHandler = s(l), n.addPlugin(d, l, i)
                        }
                    });
                    m instanceof t.Error && t.log("ERROR: Failed to load " + d + ".")
                }), i.set("flashPlugins", r)
            }, this.load = function() {
                if (t.exists(u) && "object" !== t.typeOf(u)) return void d();
                g = r.loaderstatus.LOADING, o.each(u, function(e, i) {
                    if (t.exists(i)) {
                        var o = l.addPlugin(i);
                        o.on(n.COMPLETE, d), o.on(n.ERROR, p)
                    }
                });
                var e = l.getPlugins();
                o.each(e, function(e) {
                    e.load()
                }), d()
            }, this.destroy = function() {
                v = !0, this.off()
            }, this.getStatus = function() {
                return g
            }
        };
        return l
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(24), n(52)], o = function(e, t) {
        var n = function(n) {
            this.addPlugin = function(i) {
                var o = e.getPluginName(i);
                return n[o] || (n[o] = new t(i)), n[o]
            }, this.getPlugins = function() {
                return n
            }
        };
        return n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return {}
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(58), n(2), n(1), n(65)], o = function(e, t, n, i) {
        var o = [{
            name: "youtube",
            supports: function(e) {
                return t.isYouTube(e.file, e.type)
            }
        }, {
            name: "html5",
            supports: function(n) {
                var o = {
                        aac: "audio/mp4",
                        mp4: "video/mp4",
                        f4v: "video/mp4",
                        m4v: "video/mp4",
                        mov: "video/mp4",
                        mp3: "audio/mpeg",
                        mpeg: "audio/mpeg",
                        ogv: "video/ogg",
                        ogg: "video/ogg",
                        oga: "video/ogg",
                        vorbis: "video/ogg",
                        webm: "video/webm",
                        f4a: "video/aac",
                        m3u8: "application/vnd.apple.mpegurl",
                        m3u: "application/vnd.apple.mpegurl",
                        hls: "application/vnd.apple.mpegurl"
                    },
                    r = n.file,
                    a = n.type,
                    s = e(n);
                if (null !== s) return s;
                if (t.isRtmp(r, a)) return !1;
                if (!o[a]) return !1;
                if (i.canPlayType) {
                    var l = i.canPlayType(o[a]);
                    return !!l
                }
                return !1
            }
        }, {
            name: "flash",
            supports: function(e) {
                var i = {
                        flv: "video",
                        f4v: "video",
                        mov: "video",
                        m4a: "video",
                        m4v: "video",
                        mp4: "video",
                        aac: "video",
                        f4a: "video",
                        mp3: "sound",
                        mpeg: "sound",
                        smil: "rtmp"
                    },
                    o = n.keys(i);
                if (!t.isFlashSupported()) return !1;
                var r = e.file,
                    a = e.type;
                return !!t.isRtmp(r, a) || n.contains(o, a)
            }
        }];
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(12), n(38), n(137), n(1), n(140)], o = function(e, t, i, o, r) {
        function a(e) {
            this.config = e || {}, this.providers = this.reorderProviders(this.config.primary)
        }
        a.loaders = {
            html5: function(e) {
                n.e(4, function(require) {
                    var t = n(70);
                    s(t), e(t)
                })
            },
            flash: function(e) {
                n.e(5, function(require) {
                    var t = n(57);
                    s(t), e(t)
                })
            },
            youtube: function(e) {
                n.e(7, function(require) {
                    var t = n(59);
                    s(t), e(t)
                })
            }
        };
        var s = a.registerProvider = function(n) {
            var a = n.getName().name;
            if (!i[a]) {
                if (!o.find(t, o.matches({
                        name: a
                    }))) {
                    if (!o.isFunction(n.supports)) throw {
                        message: "Tried to register a provider with an invalid object"
                    };
                    t.unshift({
                        name: a,
                        supports: n.supports
                    })
                }
                r(n.prototype, e), i[a] = n
            }
        };
        return o.extend(a.prototype, {
            load: function(e) {
                return Promise.all(o.map(e, function(e) {
                    return new Promise(function(t) {
                        var n = a.loaders[e.name];
                        n ? n(t) : t()
                    })
                }))
            },
            reorderProviders: function(e) {
                var n = o.clone(t);
                if ("flash" === e) {
                    var i = o.indexOf(n, o.findWhere(n, {
                            name: "flash"
                        })),
                        r = n.splice(i, 1)[0],
                        a = o.indexOf(n, o.findWhere(n, {
                            name: "html5"
                        }));
                    n.splice(a, 0, r)
                }
                return n
            },
            providerSupports: function(e, t) {
                return e.supports(t)
            },
            required: function(e, t) {
                var n = this,
                    i = this.reorderProviders(t);
                return e = e.slice(), o.compact(o.map(i, function(t) {
                    for (var i = !1, o = e.length; o--;) {
                        var r = e[o],
                            a = n.providerSupports(t, r.sources[0]);
                        a && e.splice(o, 1), i = i || a
                    }
                    if (i) return t
                }))
            },
            choose: function(e) {
                e = o.isObject(e) ? e : {};
                for (var t = this.providers.length, n = 0; n < t; n++) {
                    var r = this.providers[n];
                    if (this.providerSupports(r, e)) {
                        var a = t - n - 1;
                        return {
                            priority: a,
                            name: r.name,
                            type: e.type,
                            providerToCheck: r,
                            provider: i[r.name]
                        }
                    }
                }
                return null
            }
        }), a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        return function(t) {
            return e.each(Array.prototype.slice.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) n in t || (t[n] = e[n])
            }), t
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        return {
            hasClass: function(e, t) {
                var n = " " + t + " ";
                return 1 === e.nodeType && (" " + e.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(n) >= 0
            }
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(3)], o = function(e, t) {
        var n = e.extend({
            get: function(e) {
                return this.attributes = this.attributes || {}, this.attributes[e]
            },
            set: function(e, t) {
                if (this.attributes = this.attributes || {}, this.attributes[e] !== t) {
                    var n = this.attributes[e];
                    this.attributes[e] = t, this.trigger("change:" + e, this, t, n)
                }
            },
            clone: function() {
                return e.clone(this.attributes)
            }
        }, t);
        return n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1)], o = function(e) {
        var t = {};
        return t.isDvr = function(e, t) {
            return Math.abs(e) >= Math.max(t, 0)
        }, t.streamType = function(n, i) {
            var o = e.isUndefined(i) ? 120 : i,
                r = "VOD";
            return n === 1 / 0 ? r = "LIVE" : n < 0 && (r = t.isDvr(n, o) ? "DVR" : "LIVE"), r
        }, t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        var e = function(e, n, i) {
                n = n || this, i = i || [];
                var o = window.jwplayer;
                if (o && o.debug) return e.apply(n, i);
                try {
                    return e.apply(n, i)
                } catch (r) {
                    return new t(e.name, r)
                }
            },
            t = function(e, t) {
                this.name = e, this.message = t.message || t.toString(), this.error = t
            };
        return {
            tryCatch: e,
            Error: t
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(1)], o = function(e) {
        return function(t, n, i) {
            var o = n,
                r = i,
                a = 0;
            o >= 1280 ? a = 7 : o >= 960 ? a = 6 : o >= 800 ? a = 5 : o >= 640 ? a = 4 : o >= 540 ? a = 3 : o >= 420 ? a = 2 : o >= 320 && (a = 1);
            var s = "jw-breakpoint-" + a;
            return e.replaceClass(t, /jw-breakpoint-\d+/, s), e.toggleClass(t, "jw-orientation-portrait", r > o), a
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(23), n(5), n(1)], o = function(e, t, i, o) {
        var r = t.style,
            a = {
                back: !0,
                fontSize: 14,
                fontFamily: "Arial,sans-serif",
                fontOpacity: 100,
                color: "#FFF",
                backgroundColor: "#000",
                backgroundOpacity: 100,
                edgeStyle: null,
                windowColor: "#FFF",
                windowOpacity: 0,
                preprocessor: o.identity
            },
            s = function(s) {
                function l(e, n, i) {
                    if (t.css("#" + e + " .jw-text-track-display", n, e), t.css("#" + e + " .jw-text-track-cue", i, e), t.css("#" + e + " .jw-video::-webkit-media-text-track-display", n, e), t.css("#" + e + " .jw-video::cue", i, e), i.backgroundColor) {
                        var o = "{background-color: " + i.backgroundColor + " !important;}";
                        t.css("#" + e + " .jw-video::-webkit-media-text-track-display-backdrop", o, e)
                    }
                }

                function u(e, n, i) {
                    var o = t.hexToRgba("#000000", i);
                    "dropshadow" === e ? n.textShadow = "0 2px 1px " + o : "raised" === e ? n.textShadow = "0 0 5px " + o + ", 0 1px 5px " + o + ", 0 2px 5px " + o : "depressed" === e ? n.textShadow = "0 -2px 1px " + o : "uniform" === e && (n.textShadow = "-2px 0 1px " + o + ",2px 0 1px " + o + ",0 -2px 1px " + o + ",0 2px 1px " + o + ",-1px 1px 1px " + o + ",1px 1px 1px " + o + ",1px -1px 1px " + o + ",1px 1px 1px " + o)
                }

                function c(e) {
                    h = e, this.selectCues(p, h)
                }

                function d() {
                    s.get("renderCaptionsNatively") || n.e(8, function(require) {
                        v = n(56)
                    })
                }
                var p, f, h, g, w, m, v, j = {};
                g = document.createElement("div"), g.className = "jw-captions jw-reset", this.show = function() {
                    g.className = "jw-captions jw-captions-enabled jw-reset"
                }, this.hide = function() {
                    g.className = "jw-captions jw-reset"
                }, this.populate = function(e) {
                    return f = [], p = e, e ? void this.selectCues(e, h) : (f = [], void this.renderCues())
                }, this.resize = function() {
                    var e = g.clientWidth,
                        t = Math.pow(e / 400, .6);
                    if (t) {
                        var n = j.fontSize * t;
                        r(g, {
                            fontSize: Math.floor(2 * n) / 2 + "px"
                        })
                    }
                    this.renderCues(!0)
                }, this.renderCues = function(e) {
                    e = !!e, v && v.WebVTT.processCues(window, f, g, e)
                }, this.selectCues = function(e, t) {
                    var n, i;
                    e && e.data && t && (i = this.getAlignmentPosition(e, t), i !== !1 && (n = this.getCurrentCues(e.data, i), this.updateCurrentCues(n), this.renderCues(!0)))
                }, this.getCurrentCues = function(e, t) {
                    return o.filter(e, function(e) {
                        return t >= e.startTime && (!e.endTime || t <= e.endTime)
                    })
                }, this.updateCurrentCues = function(e) {
                    return e.length ? o.difference(e, f).length && (w.className = "jw-captions-window jw-reset jw-captions-window-active", f = e) : f = [], f
                }, this.getAlignmentPosition = function(e, t) {
                    var n = e.source,
                        i = t.metadata;
                    return n ? !(!i || !o.isNumber(i[n])) && i[n] : e.embedded && t.duration < 0 ? t.position - t.duration : t.position
                }, this.clear = function() {
                    e.empty(g)
                }, this.setContainerHeight = function(e) {
                    r(g, {
                        height: e
                    })
                }, this.setup = function(e, n) {
                    w = document.createElement("div"), m = document.createElement("span"), w.className = "jw-captions-window jw-reset", m.className = "jw-captions-text jw-reset", j = o.extend({}, a, n);
                    var i = j.fontOpacity,
                        c = j.windowOpacity,
                        d = j.edgeStyle,
                        p = j.backgroundColor,
                        f = {},
                        h = {
                            color: t.hexToRgba(j.color, i),
                            fontFamily: j.fontFamily,
                            fontStyle: j.fontStyle,
                            fontWeight: j.fontWeight,
                            textDecoration: j.textDecoration
                        };
                    c && (f.backgroundColor = t.hexToRgba(j.windowColor, c)), u(d, h, i), j.back ? h.backgroundColor = t.hexToRgba(p, j.backgroundOpacity) : null === d && u("uniform", h), r(w, f), r(m, h), l(e, f, h), w.appendChild(m), g.appendChild(w), this.populate(s.get("captionsTrack")), s.set("captions", j)
                }, this.element = function() {
                    return g
                }, s.on("change:playlistItem", function() {
                    h = null, f = []
                }, this), s.on("change:captionsTrack", function(e, t) {
                    this.populate(t)
                }, this), s.mediaController.on("seek", function() {
                    f = []
                }, this), s.mediaController.on("time seek", c, this), s.mediaController.on("subtitlesTrackData", function() {
                    this.selectCues(p, h)
                }, this), s.on("change:state", function(e, t) {
                    switch (t) {
                        case i.IDLE:
                        case i.ERROR:
                        case i.COMPLETE:
                            this.hide();
                            break;
                        default:
                            this.show()
                    }
                }, this), s.on("itemReady", d, this)
            };
        return s
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(7), n(4), n(3), n(1)], o = function(e, t, n, i) {
        var o = function(o, r, a) {
            function s(e) {
                if (!o.get("flashBlocked")) return c ? void c(e) : void h.trigger(e.type === t.touchEvents.CLICK ? "click" : "tap")
            }

            function l() {
                return d ? void d() : void h.trigger("doubleClick")
            }
            var u, c, d, p = {
                enableDoubleTap: !0,
                useMove: !0
            };
            i.extend(this, n), u = r, this.element = function() {
                return u
            };
            var f = new e(u, i.extend(p, a));
            f.on("click tap", s), f.on("doubleClick doubleTap", l), f.on("move", function() {
                h.trigger("move")
            }), f.on("over", function() {
                h.trigger("over")
            }), f.on("out", function() {
                h.trigger("out")
            }), this.clickHandler = s;
            var h = this;
            this.setAlternateClickHandlers = function(e, t) {
                c = e, d = t || null
            }, this.revertAlternateClickHandlers = function() {
                c = null, d = null
            }
        };
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2), n(31)], o = function(e, t, n) {
        function i(e, t) {
            this.time = e, this.text = t, this.el = document.createElement("div"), this.el.className = "jw-cue jw-reset"
        }
        e.extend(i.prototype, {
            align: function(e) {
                if ("%" === this.time.toString().slice(-1)) this.pct = this.time;
                else {
                    var t = this.time / e * 100;
                    this.pct = t + "%"
                }
                this.el.style.left = this.pct
            }
        });
        var o = {
            loadChapters: function(e) {
                t.ajax(e, this.chaptersLoaded.bind(this), this.chaptersFailed, {
                    plainText: !0
                })
            },
            chaptersLoaded: function(t) {
                var i = n(t.responseText);
                e.isArray(i) && (e.each(i, this.addCue, this), this.drawCues())
            },
            chaptersFailed: function() {},
            addCue: function(e) {
                this.cues.push(new i(e.begin, e.text))
            },
            drawCues: function() {
                var t = this._model.mediaModel.get("duration");
                if (!t || t <= 0) return void this._model.mediaModel.once("change:duration", this.drawCues, this);
                var n = this;
                e.each(this.cues, function(e) {
                    e.align(t), e.el.addEventListener("mouseover", function() {
                        n.activeCue = e
                    }), e.el.addEventListener("mouseout", function() {
                        n.activeCue = null
                    }), n.elementRail.appendChild(e.el)
                })
            },
            resetChapters: function() {
                e.each(this.cues, function(e) {
                    e.el.parentNode && e.el.parentNode.removeChild(e.el)
                }, this), this.cues = []
            }
        };
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(37), n(2), n(1), n(7), n(106)], o = function(e, t, n, i, o) {
        var r = e.extend({
            setup: function(e, r, a) {
                a = a || {}, this.iconUI || (this.iconUI = new i(this.el, {
                    useHover: !0,
                    directSelect: !0
                }), this.toggleValueListener = this.toggleValue.bind(this), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.select.bind(this)), this.reset(), e = n.isArray(e) ? e : [], t.toggleClass(this.el, "jw-hidden", e.length < 2);
                var s = e.length > 2 || 2 === e.length && a && a.toggle === !1,
                    l = !s && 2 === e.length;
                if (t.toggleClass(this.el, "jw-toggle", l || !!a.isToggle), t.toggleClass(this.el, "jw-button-color", !l), this.isActive = s || l, s) {
                    t.removeClass(this.el, "jw-off"), this.iconUI.on("tap", this.toggleOpenStateListener).on("over", this.openTooltipListener).on("out", this.closeTooltipListener);
                    var u = o(e),
                        c = t.createElement(u);
                    this.addContent(c), this.contentUI = new i(this.content).on("click tap", this.selectListener)
                } else l && this.iconUI.on("click tap", this.toggleValueListener);
                this.selectItem(r)
            },
            toggleValue: function() {
                this.trigger("toggleValue")
            },
            select: function(e) {
                if (e.target.parentElement === this.content) {
                    var i = t.classList(e.target),
                        o = n.find(i, function(e) {
                            return 0 === e.indexOf("jw-item")
                        });
                    o && (this.trigger("select", parseInt(o.split("-")[2])), this.closeTooltipListener())
                }
            },
            selectItem: function(e) {
                if (this.content)
                    for (var n = 0; n < this.content.children.length; n++) t.toggleClass(this.content.children[n], "jw-active-option", e === n);
                t.toggleClass(this.el, "jw-off", 0 === e)
            },
            reset: function() {
                t.addClass(this.el, "jw-off"), this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent()
            }
        });
        return r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(33), n(7), n(1), n(2), n(107)], o = function(e, t, n, i, o) {
        var r = function(e, t, n, i) {
            this._model = e, this._api = t, this._nextButton = n, this._playerElement = i, this.nextUpText = e.get("localization").nextUp, this.nextUpClose = e.get("localization").nextUpClose, this.state = "tooltip"
        };
        return n.extend(r.prototype, {
            setup: function() {
                this.container = document.createElement("div"), this.container.className = "jw-nextup-container jw-reset";
                var e = i.createElement(o());
                this.addContent(e), this.closeButton = this.content.querySelector(".jw-nextup-close"), this.closeButton.setAttribute("aria-label", this.nextUpClose), this.tooltip = this.content.querySelector(".jw-nextup-tooltip"), this.showNextUp = !1, this.streamType = void 0, this._model.on("change:mediaModel", this.onMediaModel, this), this._model.on("change:streamType", this.onStreamType, this), this._model.on("change:nextUp", this.onNextUp, this), this._model.on("change:duration", this.onDuration, this), this._model.on("change:position", this.onElapsed, this), this.onMediaModel(this._model, this._model.get("mediaModel")), new t(this.closeButton, {
                    directSelect: !0
                }).on("click tap", this.hide, this), new t(this.tooltip).on("click tap", this.click, this), new t(this._nextButton.element(), {
                    useHover: !0,
                    directSelect: !0
                }).on("click tap", this.click, this).on("over", this.show, this).on("out", this.hoverOut, this)
            },
            loadThumbnail: function(e) {
                return this.nextUpImage = new Image, this.nextUpImage.onload = function() {
                    this.nextUpImage.onload = null
                }.bind(this), this.nextUpImage.src = e, {
                    backgroundImage: 'url("' + e + '")'
                }
            },
            click: function() {
                this.state = "tooltip", this._api.next(), this.hide()
            },
            show: function() {
                "opened" === this.state || this.hideToolTip || (e.addClass(this.container, "jw-nextup-container-visible"), e.addClass(this._playerElement, "jw-flag-nextup"))
            },
            hide: function() {
                e.removeClass(this.container, "jw-nextup-container-visible"),
                    e.removeClass(this.container, "jw-nextup-sticky"), e.removeClass(this._playerElement, "jw-flag-nextup"), "opened" === this.state && (this.state = "closed")
            },
            hoverOut: function() {
                "opened" !== this.state && this.hide()
            },
            showTilEnd: function() {
                "opened" !== this.state && "closed" !== this.state && (e.addClass(this.container, "jw-nextup-sticky"), this.show(), this.state = "opened")
            },
            setNextUpItem: function(t) {
                var n = this;
                setTimeout(function() {
                    if (n.hideToolTip = !(t.title || t.image), !n.hideToolTip) {
                        if (n.thumbnail = n.content.querySelector(".jw-nextup-thumbnail"), e.toggleClass(n.thumbnail, "jw-nextup-thumbnail-visible", !!t.image), t.image) {
                            var o = n.loadThumbnail(t.image);
                            i.style(n.thumbnail, o)
                        }
                        n.header = n.content.querySelector(".jw-nextup-header"), n.header.innerText = n.nextUpText, n.title = n.content.querySelector(".jw-nextup-title");
                        var r = t.title;
                        n.title.innerText = r ? i.createElement(r).textContent : ""
                    }
                }, 500)
            },
            onNextUp: function(e, t) {
                return t ? (this.showNextUp = t.showNextUp, this._nextButton.toggle(!0), void this.setNextUpItem(t)) : (this._nextButton.toggle(!1), void(this.showNextUp = !1))
            },
            onDuration: function(e, t) {
                if (t) {
                    var n = i.seconds(e.get("nextupoffset") || -10);
                    n < 0 && (n += t), this.offset = n
                }
            },
            onMediaModel: function(e, t) {
                t.on("change:state", function(e, t) {
                    "complete" === t && (this.state = "tooltip", this.hide())
                }, this)
            },
            onElapsed: function(e, t) {
                "VOD" === this.streamType && this.showNextUp && t >= this.offset ? this.showTilEnd() : "opened" !== this.state && "closed" !== this.state || (this.state = "tooltip", this.hide())
            },
            onStreamType: function(e, t) {
                this.streamType = t
            },
            element: function() {
                return this.container
            },
            addContent: function(e) {
                this.content && this.removeContent(), this.content = e, this.container.appendChild(e)
            },
            removeContent: function() {
                this.content && (this.container.removeChild(this.content), this.content = null)
            }
        }), r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2), n(31)], o = function(e, t, n) {
        function i(e) {
            this.begin = e.begin, this.end = e.end, this.img = e.text
        }
        var o = {
            loadThumbnails: function(e) {
                e && (this.vttPath = e.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, t.ajax(e, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
                    plainText: !0
                }))
            },
            thumbnailsLoaded: function(t) {
                var o = n(t.responseText);
                e.isArray(o) && (e.each(o, function(e) {
                    this.thumbnails.push(new i(e))
                }, this), this.drawCues())
            },
            thumbnailsFailed: function() {},
            chooseThumbnail: function(t) {
                var n = e.sortedIndex(this.thumbnails, {
                    end: t
                }, e.property("end"));
                n >= this.thumbnails.length && (n = this.thumbnails.length - 1);
                var i = this.thumbnails[n].img;
                return i.indexOf("://") < 0 && (i = this.vttPath ? this.vttPath + "/" + i : i), i
            },
            loadThumbnail: function(t) {
                var n = this.chooseThumbnail(t),
                    i = {
                        display: "block",
                        margin: "0 auto",
                        backgroundPosition: "0 0"
                    },
                    o = n.indexOf("#xywh");
                if (o > 0) try {
                    var r = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(n);
                    n = r[1], i.backgroundPosition = r[2] * -1 + "px " + r[3] * -1 + "px", i.width = r[4], i.height = r[5]
                } catch (a) {
                    return
                } else this.individualImage || (this.individualImage = new Image, this.individualImage.onload = e.bind(function() {
                    this.individualImage.onload = null, this.timeTip.image({
                        width: this.individualImage.width,
                        height: this.individualImage.height
                    })
                }, this), this.individualImage.src = n);
                return i.backgroundImage = 'url("' + n + '")', i
            },
            showThumbnail: function(e) {
                this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(e))
            },
            resetThumbnails: function() {
                this.timeTip.image({
                    backgroundImage: "",
                    width: 0,
                    height: 0
                }), this.thumbnails = []
            }
        };
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2), n(22), n(36), n(37), n(148), n(151)], o = function(e, t, n, i, o, r, a) {
        function s() {
            return {
                reason: "interaction"
            }
        }
        var l = o.extend({
                setup: function() {
                    this.text = document.createElement("span"), this.text.className = "jw-text jw-reset", this.img = document.createElement("div"), this.img.className = "jw-reset";
                    var e = document.createElement("div");
                    e.className = "jw-time-tip jw-background-color jw-reset", e.appendChild(this.img), e.appendChild(this.text), t.removeClass(this.el, "jw-hidden"), this.addContent(e)
                },
                image: function(e) {
                    t.style(this.img, e)
                },
                update: function(e) {
                    this.text.innerHTML = e
                }
            }),
            u = i.extend({
                constructor: function(t, n) {
                    this._model = t, this._api = n, this.timeTip = new l("jw-tooltip-time"), this.timeTip.setup(), this.cues = [], this.seekThrottled = e.throttle(this.performSeek, 400), this._model.on("change:playlistItem", this.onPlaylistItem, this).on("change:position", this.onPosition, this).on("change:duration", this.onDuration, this).on("change:buffer", this.onBuffer, this), i.call(this, "jw-slider-time", "horizontal")
                },
                setup: function() {
                    i.prototype.setup.apply(this, arguments), this._model.get("playlistItem") && this.onPlaylistItem(this._model, this._model.get("playlistItem")), this.elementRail.appendChild(this.timeTip.element()), this.el.addEventListener("mousemove", this.showTimeTooltip.bind(this), !1), this.el.addEventListener("mouseout", this.hideTimeTooltip.bind(this), !1)
                },
                limit: function(t) {
                    if (this.activeCue && e.isNumber(this.activeCue.pct)) return this.activeCue.pct;
                    var i = this._model.get("duration"),
                        o = this._model.get("streamType");
                    if ("DVR" === o) {
                        var r = (1 - t / 100) * i,
                            a = this._model.get("position"),
                            s = Math.min(r, Math.max(n.dvrSeekLimit, a)),
                            l = 100 * s / i;
                        return 100 - l
                    }
                    return t
                },
                update: function(e) {
                    this.seekTo = e, this.seekThrottled(), i.prototype.update.apply(this, arguments)
                },
                dragStart: function() {
                    this._model.set("scrubbing", !0), i.prototype.dragStart.apply(this, arguments)
                },
                dragEnd: function() {
                    i.prototype.dragEnd.apply(this, arguments), this._model.set("scrubbing", !1)
                },
                onSeeked: function() {
                    this._model.get("scrubbing") && this.performSeek()
                },
                onBuffer: function(e, t) {
                    this.updateBuffer(t)
                },
                onPosition: function(e, t) {
                    this.updateTime(t, e.get("duration"))
                },
                onDuration: function(e, t) {
                    this.updateTime(e.get("position"), t)
                },
                updateTime: function(e, t) {
                    var n = 0;
                    if (t) {
                        var i = this._model.get("streamType");
                        "DVR" === i ? n = (t - e) / t * 100 : "VOD" === i && (n = e / t * 100)
                    }
                    this.render(n)
                },
                onPlaylistItem: function(t, n) {
                    this.reset(), t.mediaModel.on("seeked", this.onSeeked, this);
                    var i = n.tracks;
                    e.each(i, function(e) {
                        e && e.kind && "thumbnails" === e.kind.toLowerCase() ? this.loadThumbnails(e.file) : e && e.kind && "chapters" === e.kind.toLowerCase() && this.loadChapters(e.file)
                    }, this)
                },
                performSeek: function() {
                    var e, t = this.seekTo,
                        n = this._model.get("duration"),
                        i = this._model.get("streamType");
                    0 === n ? this._api.play(s()) : "DVR" === i ? (e = (100 - t) / 100 * n, this._api.seek(e, s())) : (e = t / 100 * n, this._api.seek(Math.min(e, n - .25), s()))
                },
                showTimeTooltip: function(e) {
                    var i = this._model.get("duration");
                    if (0 !== i) {
                        var o = t.bounds(this.elementRail),
                            r = e.pageX ? e.pageX - o.left : e.x;
                        r = t.between(r, 0, o.width);
                        var a = r / o.width,
                            s = i * a;
                        i < 0 && (s = i - s);
                        var l;
                        if (this.activeCue) l = this.activeCue.text;
                        else {
                            var u = !0;
                            l = t.timeFormat(s, u), i < 0 && s > n.dvrSeekLimit && (l = "Live")
                        }
                        this.timeTip.update(l), this.showThumbnail(s), t.addClass(this.timeTip.el, "jw-open"), this.timeTip.el.style.left = 100 * a + "%"
                    }
                },
                hideTimeTooltip: function() {
                    t.removeClass(this.timeTip.el, "jw-open")
                },
                reset: function() {
                    this.resetChapters(), this.resetThumbnails()
                }
            });
        return e.extend(u.prototype, r, a), u
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(37), n(36), n(7), n(2)], o = function(e, t, n, i) {
        var o = e.extend({
            constructor: function(o, r, a) {
                this._model = o, e.call(this, r, a, !0), this.volumeSlider = new t("jw-slider-volume jw-volume-tip", "vertical"), this.addContent(this.volumeSlider.element()), this.volumeSlider.on("update", function(e) {
                    this.trigger("update", e)
                }, this), i.removeClass(this.el, "jw-hidden"), new n(this.el, {
                    useHover: !0,
                    directSelect: !0
                }).on("click", this.toggleValue, this).on("tap", this.toggleOpenState, this).on("over", this.openTooltip, this).on("out", this.closeTooltip, this), this._model.on("change:volume", this.onVolume, this)
            },
            toggleValue: function() {
                this.trigger("toggleValue")
            }
        });
        return o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(1), n(3), n(22), n(7), n(36), n(152), n(149), n(153), n(66)], o = function(e, t, n, i, o, r, a, s, l, u) {
        function c(e, t) {
            var n = document.createElement("span");
            return n.className = "jw-text jw-reset " + e, t && n.setAttribute("role", t), n
        }

        function d(e, t) {
            return new s(e, t)
        }

        function p(t, n) {
            if (!e.isChrome() || e.isIOS()) return u("jw-icon-airplay jw-off", t, n.airplay);
            var i = document.createElement("button", "google-cast-button"),
                o = document.createElement("div"),
                r = n.cast;
            return i.className = "jw-button-color jw-icon-inline", o.className = "jw-reset jw-icon-cast", o.style.display = "none", o.style.cursor = "pointer", o.setAttribute("role", "button"), o.setAttribute("tabindex", "0"), r && o.setAttribute("aria-label", r), o.appendChild(i), {
                element: function() {
                    return o
                },
                toggle: function(e) {
                    e ? this.show() : this.hide()
                },
                show: function() {
                    o.style.display = ""
                },
                hide: function() {
                    o.style.display = "none"
                },
                button: i
            }
        }

        function f() {
            return {
                reason: "interaction"
            }
        }

        function h(e, n) {
            var i = document.createElement("div");
            return i.className = "jw-group jw-controlbar-" + e + "-group jw-reset", t.each(n, function(e) {
                e.element && (e = e.element()), i.appendChild(e)
            }), i
        }

        function g(t, n) {
            this._api = t, this._model = n, this._isMobile = e.isMobile(), this._localization = this._model.get("localization"), this.setup()
        }
        return t.extend(g.prototype, n, {
            setup: function() {
                this.build(), this.initialize()
            },
            build: function() {
                var n, i, o, s = new a(this._model, this._api),
                    g = this._localization.play,
                    w = this._localization.next,
                    m = this._localization.volume,
                    v = this._localization.rewind;
                this._isMobile || (n = new r("jw-slider-volume", "horizontal"), i = new l(this._model, "jw-icon-volume", m)), this._model.get("sdkplatform") || e.isIOS(8) || e.isIOS(9) || (o = u("jw-icon-volume", this._api.setMute, m)), this.elements = {
                    alt: c("jw-text-alt", "status"),
                    play: u("jw-icon-playback", this._api.play.bind(this, f()), g),
                    rewind: u("jw-icon-rewind", this.rewind.bind(this), v),
                    next: u("jw-icon-next", null, w),
                    elapsed: c("jw-text-elapsed", "timer"),
                    countdown: c("jw-text-countdown", "timer"),
                    time: s,
                    duration: c("jw-text-duration", "timer"),
                    durationLeft: c("jw-text-duration", "timer"),
                    hd: d("jw-icon-hd", this._localization.hd),
                    cc: d("jw-icon-cc", this._localization.cc),
                    audiotracks: d("jw-icon-audio-tracks", this._localization.audioTracks),
                    mute: o,
                    volume: n,
                    volumetooltip: i,
                    cast: p(this._api.castToggle, this._localization),
                    fullscreen: u("jw-icon-fullscreen", this._api.setFullscreen, this._localization.fullscreen)
                }, this.layout = {
                    left: [this.elements.play, this.elements.rewind, this.elements.elapsed, this.elements.durationLeft, this.elements.countdown],
                    center: [this.elements.time, this.elements.alt],
                    right: [this.elements.duration, this.elements.next, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.mute, this.elements.cast, this.elements.volume, this.elements.volumetooltip, this.elements.fullscreen]
                }, this.menus = t.compact([this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.volumetooltip]), this.layout.left = t.compact(this.layout.left), this.layout.center = t.compact(this.layout.center), this.layout.right = t.compact(this.layout.right), this.el = document.createElement("div"), this.el.className = "jw-controlbar jw-background-color jw-reset", this.elements.left = h("left", this.layout.left), this.elements.center = h("center", this.layout.center), this.elements.right = h("right", this.layout.right), this.el.appendChild(this.elements.left), this.el.appendChild(this.elements.center), this.el.appendChild(this.elements.right)
            },
            initialize: function() {
                this.elements.play.show(), this.elements.fullscreen.show(), this.elements.mute && this.elements.mute.show(), this.onVolume(this._model, this._model.get("volume")), this.onPlaylistItem(), this.onMediaModel(this._model, this._model.get("mediaModel")), this.onCastAvailable(this._model, this._model.get("castAvailable")), this.onCastActive(this._model, this._model.get("castActive")), this.onCaptionsList(this._model, this._model.get("captionsList")), this._model.on("change:volume", this.onVolume, this), this._model.on("change:mute", this.onMute, this), this._model.on("change:playlistItem", this.onPlaylistItem, this), this._model.on("change:mediaModel", this.onMediaModel, this), this._model.on("change:castAvailable", this.onCastAvailable, this), this._model.on("change:castActive", this.onCastActive, this), this._model.on("change:duration", this.onDuration, this), this._model.on("change:durationLeft", this.onDuration, this), this._model.on("change:position", this.onElapsed, this), this._model.on("change:fullscreen", this.onFullscreen, this), this._model.on("change:captionsList", this.onCaptionsList, this), this._model.on("change:captionsIndex", this.onCaptionsIndex, this), this._model.on("change:streamType", this.onStreamTypeChange, this), this.elements.volume && this.elements.volume.on("update", function(e) {
                    var t = e.percentage;
                    this._api.setVolume(t)
                }, this), this.elements.volumetooltip && (this.elements.volumetooltip.on("update", function(e) {
                    var t = e.percentage;
                    this._api.setVolume(t)
                }, this), this.elements.volumetooltip.on("toggleValue", function() {
                    this._api.setMute()
                }, this)), this.elements.cast.button && new o(this.elements.cast.button).on("click tap", function() {
                    this._model.set("castClicked", !0)
                }, this), this.elements.hd.on("select", function(e) {
                    this._model.getVideo().setCurrentQuality(e)
                }, this), this.elements.hd.on("toggleValue", function() {
                    this._model.getVideo().setCurrentQuality(0 === this._model.getVideo().getCurrentQuality() ? 1 : 0)
                }, this), this.elements.cc.on("select", function(e) {
                    this._api.setCurrentCaptions(e)
                }, this), this.elements.cc.on("toggleValue", function() {
                    var e = this._model.get("captionsIndex");
                    this._api.setCurrentCaptions(e ? 0 : 1)
                }, this), this.elements.audiotracks.on("select", function(e) {
                    this._model.getVideo().setCurrentAudioTrack(e)
                }, this), new o(this.elements.duration).on("click tap", function() {
                    if ("DVR" === this._model.get("streamType")) {
                        var e = this._model.get("position");
                        this._api.seek(Math.max(i.dvrSeekLimit, e), f())
                    }
                }, this), new o(this.elements.durationLeft).on("click tap", function() {
                    if ("DVR" === this._model.get("streamType")) {
                        var e = this._model.get("position");
                        this._api.seek(Math.max(i.dvrSeekLimit, e))
                    }
                }, this), new o(this.el).on("click tap drag", function() {
                    this.trigger("userAction")
                }, this), t.each(this.menus, function(e) {
                    e.on("open-tooltip", this.closeMenus, this)
                }, this)
            },
            onCaptionsList: function(e, t) {
                var n = e.get("captionsIndex");
                this.elements.cc.setup(t, n, {
                    isToggle: !0
                })
            },
            onCaptionsIndex: function(e, t) {
                this.elements.cc.selectItem(t)
            },
            onPlaylistItem: function() {
                this.elements.time.updateBuffer(0), this.elements.time.render(0), this.elements.duration.innerHTML = "00:00", this.elements.durationLeft.innerHTML = "00:00", this.elements.elapsed.innerHTML = "00:00", this.elements.countdown.innerHTML = "00:00", this.elements.audiotracks.setup()
            },
            onMediaModel: function(e, n) {
                n.on("change:levels", function(e, t) {
                    this.elements.hd.setup(t, e.get("currentLevel"))
                }, this), n.on("change:currentLevel", function(e, t) {
                    this.elements.hd.selectItem(t)
                }, this), n.on("change:audioTracks", function(e, n) {
                    var i = t.map(n, function(e) {
                        return {
                            label: e.name
                        }
                    });
                    this.elements.audiotracks.setup(i, e.get("currentAudioTrack"), {
                        toggle: !1
                    })
                }, this), n.on("change:currentAudioTrack", function(e, t) {
                    this.elements.audiotracks.selectItem(t)
                }, this)
            },
            onVolume: function(e, t) {
                this.renderVolume(e.get("mute"), t)
            },
            onMute: function(e, t) {
                this.renderVolume(t, e.get("volume"))
            },
            renderVolume: function(t, n) {
                this.elements.mute && e.toggleClass(this.elements.mute.element(), "jw-off", t), this.elements.volume && this.elements.volume.render(t ? 0 : n), this.elements.volumetooltip && (this.elements.volumetooltip.volumeSlider.render(t ? 0 : n), e.toggleClass(this.elements.volumetooltip.element(), "jw-off", t))
            },
            onCastAvailable: function(e, t) {
                this.elements.cast.toggle(t)
            },
            onCastActive: function(t, n) {
                this.elements.fullscreen.toggle(!n), this.elements.cast.button && e.toggleClass(this.elements.cast.button, "jw-off", !n)
            },
            onElapsed: function(t, n) {
                var i, o, r = t.get("duration");
                "DVR" === t.get("streamType") ? i = o = "-" + e.timeFormat(-r) : (i = e.timeFormat(n), o = e.timeFormat(r - n)), this.elements.elapsed.innerHTML = i, this.elements.countdown.innerHTML = o
            },
            onDuration: function(t, n) {
                var i;
                i = "DVR" === t.get("streamType") ? "Live" : e.timeFormat(n), this.elements.duration.innerHTML = i, this.elements.durationLeft.innerHTML = i
            },
            onFullscreen: function(t, n) {
                e.toggleClass(this.elements.fullscreen.element(), "jw-off", n)
            },
            element: function() {
                return this.el
            },
            setAltText: function(e) {
                this.elements.alt.innerHTML = e
            },
            addCues: function(e) {
                this.elements.time && (t.each(e, function(e) {
                    this.elements.time.addCue(e)
                }, this), this.elements.time.drawCues())
            },
            closeMenus: function(e) {
                t.each(this.menus, function(t) {
                    e && e.target === t.el || t.closeTooltip(e)
                })
            },
            hideComponents: function() {
                this.closeMenus()
            },
            rewind: function() {
                var e = this._model.get("position"),
                    t = this._model.get("duration"),
                    n = e - 10,
                    i = 0;
                "DVR" === this._model.get("streamType") && (i = t), this._api.seek(Math.max(n, i), f())
            },
            onStreamTypeChange: function(e) {
                var t = e.get("streamType");
                this.elements.rewind.toggle("LIVE" !== t), "DVR" === t && (this.elements.duration.innerHTML = "Live", this.elements.durationLeft.innerHTML = "Live")
            }
        }), g
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(3), n(7), n(102), n(1)], o = function(e, t, n, i, o) {
        var r = function() {
            this.el = e.createElement(i()), this.container = this.el.querySelector(".jw-display-controls"), this.addButton = function(e) {
                this.container.appendChild(e.el)
            }
        };
        return o.extend(r.prototype, {
            element: function() {
                return this.el
            }
        }), r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(103), n(2), n(1), n(7)], o = function(e, t, n, i) {
        var o = function(e) {
            this.model = e, this.setup(), this.model.on("change:dock", this.render, this)
        };
        return n.extend(o.prototype, {
            setup: function() {
                var n = this.model.get("dock"),
                    o = this.click.bind(this),
                    r = e(n);
                this.el = t.createElement(r), new i(this.el).on("click tap", o)
            },
            getDockButton: function(e) {
                return t.hasClass(e.target, "jw-dock-button") ? e.target : t.hasClass(e.target, "jw-dock-text") ? e.target.parentElement.parentElement : e.target.parentElement
            },
            click: function(e) {
                var t = this.getDockButton(e),
                    i = t.getAttribute("button"),
                    o = this.model.get("dock"),
                    r = n.findWhere(o, {
                        id: i
                    });
                r && r.callback && r.callback(e)
            },
            render: function() {
                var n = this.model.get("dock"),
                    i = e(n),
                    o = t.createElement(i);
                this.el.innerHTML = o.innerHTML
            },
            element: function() {
                return this.el
            }
        }), o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(104)], o = function(e) {
        function t(t, n, i, o) {
            return e({
                id: t,
                skin: n,
                title: i,
                body: o
            })
        }
        return t
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(7), n(2), n(4), n(1), n(3), n(105)], o = function(e, t, n, i, o, r) {
        var a = t.style,
            s = {
                linktarget: "_blank",
                margin: 8,
                hide: !1,
                position: "top-right"
            },
            l = function(l) {
                var u, c, d = new Image,
                    p = i.extend({}, l.get("logo"));
                return i.extend(this, o), this.setup = function(o) {
                    if (c = i.extend({}, s, p), c.hide = "true" === c.hide.toString(), u = t.createElement(r()), c.file) {
                        c.hide && t.addClass(u, "jw-hide"), t.addClass(u, "jw-logo-" + (c.position || s.position)), "top-right" === c.position && (l.on("change:dock", this.topRight, this), l.on("change:controls", this.topRight, this), this.topRight(l)), l.set("logo", c), d.onload = function() {
                            var e = {
                                backgroundImage: 'url("' + this.src + '")',
                                width: this.width,
                                height: this.height
                            };
                            if (c.margin !== s.margin) {
                                var t = /(\w+)-(\w+)/.exec(c.position);
                                3 === t.length && (e["margin-" + t[1]] = c.margin, e["margin-" + t[2]] = c.margin)
                            }
                            a(u, e), l.set("logoWidth", e.width)
                        }, d.src = c.file;
                        var f = new e(u);
                        f.on("click tap", function(e) {
                            t.exists(e) && e.stopPropagation && e.stopPropagation(), this.trigger(n.JWPLAYER_LOGO_CLICK, {
                                link: c.link,
                                linktarget: c.linktarget
                            })
                        }, this), o.appendChild(u)
                    }
                }, this.topRight = function(e) {
                    var t = e.get("controls"),
                        n = e.get("dock"),
                        i = t && (n && n.length || e.get("sharing") || e.get("related"));
                    a(u, {
                        top: i ? "3.5em" : 0
                    })
                }, this.element = function() {
                    return u
                }, this.position = function() {
                    return c.position
                }, this.destroy = function() {
                    d.onload = null
                }, this
            };
        return l
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(3), n(7), n(28), n(1)], o = function(e, t, n, i, o) {
        var r = function(t, o) {
            this.el = e.createElement(i({
                iconName: "next",
                ariaLabel: t.get("localization").next
            })), this.iconUI = new n(this.el).on("click tap", function() {
                o.next()
            }), this.el.style.display = "none", t.on("change:nextUp", function(e, t) {
                this.el.style.display = t ? "" : "none"
            }, this)
        };
        return o.extend(r.prototype, {
            element: function() {
                return this.el
            }
        }), r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(3), n(7), n(28), n(1)], o = function(e, t, n, i, o) {
        var r = function(r) {
            o.extend(this, t), this.model = r, this.el = e.createElement(i({
                iconName: "display",
                ariaLabel: this.model.get("localization").playback
            }));
            var a = this;
            this.iconUI = new n(this.el).on("click tap", function(e) {
                a.trigger(e.type)
            }), this.model.on("change:state", function(e, t) {
                var n = a.el.getElementsByClassName("jw-icon-display");
                if (n.length) {
                    var i = a.model.get("localization"),
                        o = i.playback;
                    switch (t) {
                        case "buffering":
                            o = i.buffer;
                            break;
                        case "playing":
                            o = i.pause;
                            break;
                        case "complete":
                            o = i.replay;
                            break;
                        case "error":
                            o = ""
                    }
                    "" === o ? n[0].removeAttribute("aria-label") : n[0].setAttribute("aria-label", o)
                }
            })
        };
        return o.extend(r.prototype, {
            element: function() {
                return this.el
            }
        }), r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2)], o = function(e, t) {
        function n(e, t) {
            t.off("change:mediaType", null, this), t.on("change:mediaType", function(t, n) {
                "audio" === n && this.setImage(e.get("playlistItem").image)
            }, this)
        }

        function i(e, n) {
            var i = e.get("autostart") && !t.isMobile() || e.get("item") > 0;
            return i ? (this.setImage(null), e.off("change:state", null, this), void e.on("change:state", function(e, t) {
                "complete" !== t && "idle" !== t && "error" !== t || (this.setImage(n.image), this.resize(null, null, e.get("stretching")))
            }, this)) : void this.setImage(n.image)
        }
        var o = function(e) {
            this.model = e, e.on("change:playlistItem", i, this), e.on("change:mediaModel", n, this)
        };
        return e.extend(o.prototype, {
            setup: function(e) {
                this.el = e;
                var t = this.model.get("playlistItem");
                t && this.setImage(t.image)
            },
            setImage: function(n) {
                var i = this.image;
                i && (i.onload = null, this.image = null), this.model.off("change:state", null, this);
                var o = "";
                e.isString(n) && (o = 'url("' + n + '")', i = this.image = new Image, i.src = n), t.style(this.el, {
                    backgroundImage: o
                })
            },
            resize: function(e, n, i) {
                if ("uniform" === i) {
                    if (e && (this.playerAspectRatio = e / n), !this.playerAspectRatio) return;
                    var o = this.image,
                        r = null;
                    if (o) {
                        if (0 === o.width) {
                            var a = this;
                            return void(o.onload = function() {
                                a.resize(e, n, i)
                            })
                        }
                        var s = o.width / o.height;
                        Math.abs(this.playerAspectRatio - s) < .09 && (r = "cover")
                    }
                    t.style(this.el, {
                        backgroundSize: r
                    })
                }
            },
            element: function() {
                return this.el
            }
        }), o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(3), n(7), n(28), n(1)], o = function(e, t, n, i, o) {
        var r = function(t, o) {
            this.el = e.createElement(i({
                iconName: "rewind",
                ariaLabel: t.get("localization").playback
            })), this.iconUI = new n(this.el).on("click tap", function() {
                var e = t.get("position"),
                    n = t.get("duration"),
                    i = e - 10,
                    r = 0;
                "DVR" === t.get("streamType") && (r = n), o.seek(Math.max(i, r))
            })
        };
        return o.extend(r.prototype, {
            element: function() {
                return this.el
            }
        }), r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(109), n(1), n(7), n(26)], o = function(e, t, n, i, o) {
        var r = function() {};
        return n.extend(r.prototype, {
            buildArray: function() {
                var t = o.split("+"),
                    n = t[0],
                    i = {
                        items: [{
                            title: "Powered by JW Player " + n,
                            featured: !0,
                            showLogo: !0,
                            link: "https://jwplayer.com/learn-more"
                        }]
                    },
                    r = n.indexOf("-") > 0,
                    a = t[1];
                if (r && a) {
                    var s = a.split(".");
                    i.items.push({
                        title: "build: (" + s[0] + "." + s[1] + ")",
                        link: "#"
                    })
                }
                var l = this.model.get("provider");
                if (l && l.name.indexOf("flash") >= 0) {
                    var u = "Flash Version " + e.flashVersion();
                    i.items.push({
                        title: u,
                        link: "http://www.adobe.com/software/flash/about/"
                    })
                }
                return i
            },
            buildMenu: function() {
                var n = this.buildArray();
                return e.createElement(t(n))
            },
            updateHtml: function() {
                this.el.innerHTML = this.buildMenu().innerHTML
            },
            rightClick: function(e) {
                return this.lazySetup(), !this.mouseOverContext && (this.hideMenu(), this.showMenu(e), !1)
            },
            getOffset: function(e) {
                for (var t = e.target, n = e.offsetX || e.layerX, i = e.offsetY || e.layerY; t !== this.playerElement;) n += t.offsetLeft, i += t.offsetTop, t = t.parentNode;
                return {
                    x: n,
                    y: i
                }
            },
            showMenu: function(t) {
                var n = this.getOffset(t);
                return this.el.style.left = n.x + "px", this.el.style.top = n.y + "px", e.addClass(this.playerElement, "jw-flag-rightclick-open"), e.addClass(this.el, "jw-open"), clearTimeout(this._menuTimeout), this._menuTimeout = setTimeout(this.hideMenu.bind(this), 3e3), !1
            },
            hideMenu: function() {
                return this.elementUI.off("out", this.hideMenu, this), this.mouseOverContext ? void this.elementUI.on("out", this.hideMenu, this) : (e.removeClass(this.playerElement, "jw-flag-rightclick-open"), void e.removeClass(this.el, "jw-open"))
            },
            lazySetup: function() {
                this.el || (this.el = this.buildMenu(), this.layer.appendChild(this.el), this.hideMenuHandler = this.hideMenu.bind(this), this.addOffListener(this.playerElement), this.addOffListener(document), this.model.on("change:provider", this.updateHtml, this), this.elementUI = new i(this.el, {
                    useHover: !0
                }).on("over", function() {
                    this.mouseOverContext = !0
                }, this).on("out", function() {
                    this.mouseOverContext = !1
                }, this))
            },
            setup: function(e, t, n) {
                this.playerElement = t, this.model = e, this.mouseOverContext = !1, this.layer = n, t.oncontextmenu = this.rightClick.bind(this)
            },
            addOffListener: function(e) {
                e.addEventListener("mousedown", this.hideMenuHandler), e.addEventListener("touchstart", this.hideMenuHandler), e.addEventListener("pointerdown", this.hideMenuHandler)
            },
            removeOffListener: function(e) {
                e.removeEventListener("mousedown", this.hideMenuHandler), e.removeEventListener("touchstart", this.hideMenuHandler), e.removeEventListener("pointerdown", this.hideMenuHandler)
            },
            destroy: function() {
                clearTimeout(this._menuTimeout), this.el && (this.hideMenu(), this.elementUI.off(), this.removeOffListener(this.playerElement), this.removeOffListener(document), this.hideMenuHandler = null, this.el = null), this.playerElement && (this.playerElement.oncontextmenu = null, this.playerElement = null), this.model && (this.model.off("change:provider", this.updateHtml), this.model = null)
            }
        }), r
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(1), n(2)], o = function(e, t) {
        var n = function(e) {
            this.model = e, this.model.on("change:playlistItem", this.playlistItem, this)
        };
        return e.extend(n.prototype, {
            hide: function() {
                this.el.style.display = "none"
            },
            show: function() {
                this.el.style.display = ""
            },
            setup: function(e) {
                this.el = e;
                var t = this.el.getElementsByTagName("div");
                this.title = t[0], this.description = t[1], this.model.get("playlistItem") && this.playlistItem(this.model, this.model.get("playlistItem")), this.model.on("change:logoWidth", this.update, this), this.model.on("change:dock", this.update, this)
            },
            update: function(e) {
                var n = {
                        paddingLeft: 0,
                        paddingRight: 0
                    },
                    i = e.get("controls"),
                    o = e.get("dock"),
                    r = e.get("logo");
                if (r) {
                    var a = 1 * ("" + r.margin).replace("px", ""),
                        s = e.get("logoWidth") + (isNaN(a) ? 0 : a);
                    "top-left" === r.position ? n.paddingLeft = s : "top-right" === r.position && (n.paddingRight = s)
                }
                if (i && o && o.length) {
                    var l = 56 * o.length;
                    n.paddingRight = Math.max(n.paddingRight, l)
                }
                t.style(this.el, n)
            },
            playlistItem: function(e, t) {
                if (e.get("displaytitle") || e.get("displaydescription")) {
                    var n = "",
                        i = "";
                    t.title && e.get("displaytitle") && (n = t.title), t.description && e.get("displaydescription") && (i = t.description), this.updateText(n, i)
                } else this.hide()
            },
            updateText: function(e, t) {
                this.title.innerHTML = e, this.description.innerHTML = t, this.title.firstChild || this.description.firstChild ? this.show() : this.hide()
            },
            element: function() {
                return this.el
            }
        }), n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(4), n(3), n(22), n(5), n(146), n(147), n(162), n(160), n(159), n(156), n(158), n(154), n(161), n(177), n(164), n(150), n(1), n(108), n(145), n(66), n(155)], o = function(e, t, i, o, r, a, s, l, u, c, d, p, f, h, g, w, m, v, j, y, b, x) {
        var E = e.style,
            k = e.bounds,
            C = e.isMobile(),
            A = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
            L = function(L, _) {
                function T() {
                    return {
                        reason: "interaction"
                    }
                }

                function P(t) {
                    var n = 0,
                        i = _.get("duration"),
                        r = _.get("position");
                    "DVR" === _.get("streamType") && (n = i, i = Math.max(r, o.dvrSeekLimit));
                    var a = e.between(r + t, n, i);
                    L.seek(a, T())
                }

                function R(t) {
                    var n = e.between(_.get("volume") + t, 0, 100);
                    L.setVolume(n)
                }

                function M(e) {
                    return !e.ctrlKey && !e.metaKey && !!_.get("controls")
                }

                function I(e) {
                    if (!M(e)) return !0;
                    switch (_e || ue(), e.keyCode) {
                        case 27:
                            L.setFullscreen(!1);
                            break;
                        case 13:
                        case 32:
                            L.play(T());
                            break;
                        case 37:
                            _e || P(-5);
                            break;
                        case 39:
                            _e || P(5);
                            break;
                        case 38:
                            R(10);
                            break;
                        case 40:
                            R(-10);
                            break;
                        case 67:
                            var t = L.getCaptionsList(),
                                n = t.length;
                            if (n) {
                                var i = (L.getCurrentCaptions() + 1) % n;
                                L.setCurrentCaptions(i)
                            }
                            break;
                        case 77:
                            L.setMute();
                            break;
                        case 70:
                            L.setFullscreen();
                            break;
                        default:
                            if (e.keyCode >= 48 && e.keyCode <= 59) {
                                var o = e.keyCode - 48,
                                    r = o / 10 * _.get("duration");
                                L.seek(r, T())
                            }
                    }
                    return /13|32|37|38|39|40/.test(e.keyCode) ? (e.preventDefault(), !1) : void 0
                }

                function S() {
                    tt = !1, e.removeClass(Ee, "jw-no-focus")
                }

                function O(e) {
                    e.target && e.target.blur && e.target.blur()
                }

                function N() {
                    tt = !0, e.addClass(Ee, "jw-no-focus")
                }

                function D() {
                    tt || S(), _e || C || ue()
                }

                function Y() {
                    var e = k(Ee),
                        n = Math.round(e.width),
                        i = Math.round(e.height);
                    if ($e(Xe), n !== Ae || i !== Le) {
                        if (!n || !i) return void(Ae && Le || W());
                        Ae = n, Le = i, clearTimeout(qe), qe = setTimeout(ne, 50), _.set("containerWidth", n), _.set("containerHeight", i);
                        var o = y(Ee, n, i);
                        Z(_.get("height")), F(o, _.get("audioMode")), nt.trigger(t.JWPLAYER_RESIZE, {
                            width: n,
                            height: i
                        })
                    }
                }

                function F(t, n) {
                    var i = t < 2,
                        o = _.get("timeSliderAbove"),
                        r = !n && o !== !1 && (o || i);
                    e.toggleClass(Ee, "jw-flag-small-player", i), e.toggleClass(Ee, "jw-flag-audio-player", n), e.toggleClass(Ee, "jw-flag-time-slider-above", r)
                }

                function W() {
                    $e(Xe), Xe = Qe(Y)
                }

                function J(t, n, i) {
                    if (t) {
                        var o = {
                            color: t,
                            borderColor: t,
                            stroke: t
                        };
                        e.css("#" + i + " .jw-color-active", o, i), e.css("#" + i + " .jw-color-active-hover:hover", o, i)
                    }
                    if (n) {
                        var r = {
                            color: n,
                            borderColor: n,
                            stroke: n
                        };
                        e.css("#" + i + " .jw-color-inactive", r, i), e.css("#" + i + " .jw-color-inactive-hover:hover", r, i)
                    }
                }

                function B(t, n) {
                    e.replaceClass(Ee, /jw-stretch-\S+/, "jw-stretch-" + n)
                }

                function V(e) {
                    e && !C && (e.element().addEventListener("mousemove", H, !1), e.element().addEventListener("mouseout", G, !1))
                }

                function z() {
                    var e = _.get("state");
                    _.get("controls") && (e === r.IDLE || e === r.COMPLETE || _e && _e.get("state") === r.PAUSED) && L.play(T()), e === r.PAUSED ? ce() : Ke ? se() : ue()
                }

                function U(e) {
                    e.link ? (L.pause(!0, T()), L.setFullscreen(!1), window.open(e.link, e.linktarget)) : _.get("controls") && L.play(T())
                }

                function H() {
                    clearTimeout(Ue)
                }

                function G() {
                    ue()
                }

                function K(e) {
                    nt.trigger(e.type, e)
                }

                function q(t, n) {
                    n ? (Fe && Fe.destroy(), e.addClass(Ee, "jw-flag-flash-blocked")) : (Fe && Fe.setup(_, Ee, Ee), e.removeClass(Ee, "jw-flag-flash-blocked"))
                }

                function X() {
                    _.get("controls") && L.setFullscreen()
                }

                function Q() {
                    var n = Ee.getElementsByClassName("jw-overlays")[0];
                    n.addEventListener("mousemove", le), Re = new s(_, Ce, {
                        useHover: !0
                    }), Re.on("click", function() {
                        K({
                            type: t.JWPLAYER_DISPLAY_CLICK
                        }), _.get("controls") && L.play(T())
                    }), Re.on("tap", function() {
                        K({
                            type: t.JWPLAYER_DISPLAY_CLICK
                        }), z()
                    }), Re.on("doubleClick", X), Re.on("move", le), Re.on("over", le), ke.appendChild(be()), Ie = new d(_), Se = new p(_), Se.on(t.JWPLAYER_LOGO_CLICK, U);
                    var i = document.createElement("div");
                    i.className = "jw-controls-right jw-reset", Se.setup(i), i.appendChild(Ie.element()), ke.appendChild(i), Ye = new a(_), Ye.setup(Ee.id, _.get("captions")), ke.parentNode.insertBefore(Ye.element(), Oe.element());
                    var o = _.get("height");
                    C && ("string" == typeof o || o >= Ge) ? e.addClass(Ee, "jw-flag-touch") : (Fe = new g, Fe.setup(_, Ee, Ee)), Te = new f(L, _), Te.on(t.JWPLAYER_USER_ACTION, le), _.on("change:scrubbing", je), _.autoStartOnMobile() && (De = b("jw-autostart-mute jw-off", ie, _.get("localization").volume), De.show(), ke.appendChild(De.element()), Te.renderVolume(!0, _.get("volume")), e.addClass(Ee, "jw-flag-autostart"), _.set("autostartMuted", !0), _.on("change:autostartFailed", ie), _.on("change:autostartMuted", ie), _.on("change:mute", ie)), Ne = new m(_, L, Te.elements.next, Ee), Ne.setup(), ke.appendChild(Ne.element()), ke.appendChild(Te.element()), Ee.addEventListener("focus", D), Ee.addEventListener("blur", S), Ee.addEventListener("keydown", I), Ee.onmousedown = N, Ee.onmouseup = O
                }

                function $(t, n, i) {
                    var o, r = Ee.className;
                    i = !!i, i && (r = r.replace(/\s*aspectMode/, ""), Ee.className !== r && (Ee.className = r), E(Ee, {
                        display: "block"
                    }, i)), e.exists(t) && e.exists(n) && (_.set("width", t), _.set("height", n)), o = {
                        width: t
                    }, e.hasClass(Ee, "jw-flag-aspect-mode") || (o.height = n), _.get("aspectratio") && ye(), E(Ee, o, !0), Z(n), ne(t, n)
                }

                function Z(e) {
                    var t = ee(e);
                    if (Te && !t) {
                        var n = _e ? _e : _;
                        me(n, n.get("state"))
                    }
                    _.set("audioMode", t)
                }

                function ee(e) {
                    if (_.get("aspectratio")) return !1;
                    if (v.isString(e) && e.indexOf("%") > -1) return !1;
                    var t = 1 * e || null;
                    return t = v.isNumber(t) ? t : _.get("containerHeight"), !!t && te(t)
                }

                function te(e) {
                    return e && e <= Ge
                }

                function ne(e, t) {
                    if (!e || isNaN(Number(e))) {
                        if (!Ce) return;
                        e = Ce.clientWidth
                    }
                    if (!t || isNaN(Number(t))) {
                        if (!Ce) return;
                        t = Ce.clientHeight
                    }
                    Pe && Pe.resize(e, t, _.get("stretching"));
                    var n = _.getVideo();
                    if (n) {
                        var i = n.resize(e, t, _.get("stretching"));
                        i && (clearTimeout(qe), qe = setTimeout(ne, 250)),
                            _.get("aspectratio") && ye(), Ye.resize()
                    }
                }

                function ie() {
                    var t = !_.get("autostartFailed"),
                        n = _.get("mute");
                    t && (n = !1), _.off("change:autostartFailed", ie), _.off("change:mute", ie), _.off("change:autostartMuted", ie), _.set("autostartFailed", void 0), _.set("autostartMuted", void 0), L.setMute(n), Te.renderVolume(n, _.get("volume")), De.hide(), e.removeClass(Ee, "jw-flag-autostart")
                }

                function oe() {
                    if (et) {
                        var e = document.fullscreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                        return !(!e || e.id !== _.get("id"))
                    }
                    return _e ? _e.getVideo().getFullScreen() : _.getVideo().getFullScreen()
                }

                function re(e) {
                    var t = _.get("fullscreen"),
                        n = void 0 !== e.jwstate ? e.jwstate : oe();
                    t !== n && _.set("fullscreen", n), W(), clearTimeout(qe), qe = setTimeout(ne, 200)
                }

                function ae(t, n) {
                    n ? (e.addClass(t, "jw-flag-fullscreen"), E(document.body, {
                        "overflow-y": "hidden"
                    }), ue()) : (e.removeClass(t, "jw-flag-fullscreen"), E(document.body, {
                        "overflow-y": ""
                    })), ne(), W()
                }

                function se() {
                    Ke = !1, clearTimeout(Ue), Te.hideComponents(), e.addClass(Ee, "jw-flag-user-inactive"), Ye.renderCues(!0)
                }

                function le() {
                    ue()
                }

                function ue(t) {
                    Ke || (e.removeClass(Ee, "jw-flag-user-inactive"), Ye.renderCues(!0)), Ke = !0, clearTimeout(Ue), Ue = setTimeout(se, t || He)
                }

                function ce() {
                    _e || _.get("castActive") || _.mediaModel && "audio" === _.mediaModel.get("mediaType") || (e.toggleClass(Ee, "jw-flag-controls-hidden"), Ye.renderCues(!0))
                }

                function de() {
                    L.setFullscreen(!1)
                }

                function pe() {
                    Me && Me.setState(_.get("state")), fe(_, _.mediaModel.get("mediaType")), _.mediaModel.on("change:mediaType", fe, this)
                }

                function fe(t, n) {
                    var i = "audio" === n,
                        o = _.getVideo(),
                        r = o && 0 === o.getName().name.indexOf("flash");
                    e.toggleClass(Ee, "jw-flag-media-audio", i), i && !r ? Ee.insertBefore(Pe.el, Ce) : Ee.insertBefore(Pe.el, Ye.element())
                }

                function he(t, n) {
                    var i = t.get("minDvrWindow"),
                        o = e.streamType(n, i),
                        r = "LIVE" === o;
                    t.set("streamType", o), e.toggleClass(Ee, "jw-flag-live", r), nt.setAltText(r ? t.get("localization").liveBroadcast : "")
                }

                function ge(e, t) {
                    return t ? void(t.name ? Oe.updateText(t.name, t.message) : Oe.updateText(t.message, "")) : void Oe.playlistItem(e, e.get("playlistItem"))
                }

                function we() {
                    e.replaceClass(Ee, /jw-state-\S+/, "jw-state-" + We)
                }

                function me(t, n) {
                    We = n, clearTimeout(Ze), n === r.PLAYING ? ve(t, n) : Ze = setTimeout(function() {
                        ve(t, n)
                    }, 33), n !== r.PAUSED && e.hasClass(Ee, "jw-flag-controls-hidden") && e.removeClass(Ee, "jw-flag-controls-hidden")
                }

                function ve(t, n) {
                    switch (e.toggleClass(Ee, "jw-flag-dragging", t.get("scrubbing")), we(), n) {
                        case r.PLAYING:
                            ne()
                    }
                }

                function je(e) {
                    me(e, e.get("state"))
                }

                function ye() {
                    var e = Ee.getElementsByClassName("jw-aspect")[0];
                    Ye.setContainerHeight(e.offsetHeight)
                }

                function be() {
                    var e = new x,
                        t = new l(_, L),
                        n = xe(),
                        i = new c(_, L);
                    return e.addButton(t), e.addButton(n), e.addButton(i), e.element()
                }

                function xe() {
                    var n = new u(_);
                    return n.on("click tap", function() {
                        K({
                            type: t.JWPLAYER_DISPLAY_CLICK
                        }), ue(1e3), L.play(T())
                    }), e.isChrome() && !e.isMobile() && n.el.addEventListener("mousedown", function() {
                        var e = _.getVideo(),
                            t = e && 0 === e.getName().name.indexOf("flash");
                        if (t) {
                            var i = function() {
                                document.removeEventListener("mouseup", i), n.el.style.pointerEvents = "auto"
                            };
                            this.style.pointerEvents = "none", document.addEventListener("mouseup", i)
                        }
                    }), n
                }
                var Ee, ke, Ce, Ae, Le, _e, Te, Pe, Re, Me, Ie, Se, Oe, Ne, De, Ye, Fe, We, Je, Be, Ve, ze, Ue = -1,
                    He = C ? 4e3 : 2e3,
                    Ge = 44,
                    Ke = !1,
                    qe = -1,
                    Xe = -1,
                    Qe = window.requestAnimationFrame || function(e) {
                        return window.setTimeout(e, 17)
                    },
                    $e = window.cancelAnimationFrame || window.clearTimeout,
                    Ze = -1,
                    et = !1,
                    tt = !1,
                    nt = v.extend(this, i);
                window.webpackJsonpjwplayer && n(113), this.model = _, this.api = L, Ee = e.createElement(j({
                    id: _.get("id")
                })), e.isIE() && e.addClass(Ee, "jw-ie");
                var it = _.get("width"),
                    ot = _.get("height");
                E(Ee, {
                    width: it.toString().indexOf("%") > 0 ? it : it + "px",
                    height: ot.toString().indexOf("%") > 0 ? ot : ot + "px"
                }), Be = Ee.requestFullscreen || Ee.webkitRequestFullscreen || Ee.webkitRequestFullScreen || Ee.mozRequestFullScreen || Ee.msRequestFullscreen, Ve = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen, et = Be && Ve, this.onChangeSkin = function(t, n) {
                    e.replaceClass(Ee, /jw-skin-\S+/, n ? "jw-skin-" + n : "")
                }, this.handleColorOverrides = function() {
                    function t(e, t) {
                        var n;
                        if (!ze) {
                            var i = document.createElement("canvas");
                            i.height = 1, i.width = 1, ze = i.getContext("2d")
                        }
                        return ze.clearRect(0, 0, 1, 1), ze.fillStyle = e, ze.fillRect(0, 0, 1, 1), n = ze.getImageData(0, 0, 1, 1).data, "rgba(" + n[0] + ", " + n[1] + ", " + n[2] + ", " + t + ")"
                    }

                    function n(t, n, o, r) {
                        t = e.prefix(t, "#" + i + (r ? "" : " "));
                        var a = {};
                        a[n] = o, e.css(t.join(", "), a, i)
                    }
                    var i = _.get("id"),
                        o = _.get("skinColorActive"),
                        r = _.get("skinColorInactive"),
                        a = _.get("skinColorBackground");
                    if (o && (n([".jw-button-color.jw-toggle", ".jw-button-color:hover", ".jw-button-color.jw-toggle.jw-off:hover", ".jw-option:not(.jw-active-option):hover", ".jw-nextup-header"], "color", o), n([".jw-option.jw-active-option", ".jw-progress"], "background", "none " + o)), r && (n([".jw-text", ".jw-option", ".jw-button-color", ".jw-toggle.jw-off", ".jw-skip .jw-skip-icon", ".jw-nextup-body"], "color", r), n([".jw-cue", ".jw-knob", ".jw-active-option", ".jw-nextup-header"], "background", "none " + r)), a) {
                        if (n([".jw-background-color"], "background", "none " + a), _.get("timeSliderAbove") !== !1) {
                            var s = "transparent linear-gradient(180deg, " + t(a, 0) + " 0%, " + t(a, .25) + " 30%, " + t(a, .4) + " 70%, " + t(a, .5) + ") 100%";
                            n([".jw-flag-time-slider-above .jw-background-color.jw-controlbar"], "background", s, !0)
                        }
                        n([".jw-flag-time-slider-above .jw-background-color.jw-slider-time"], "background", "transparent", !0)
                    }
                    J(o, r, i)
                }, this.setup = function() {
                    this.handleColorOverrides(), _.get("skin-loading") === !0 && (e.addClass(Ee, "jw-flag-skin-loading"), _.once("change:skin-loading", function() {
                        e.removeClass(Ee, "jw-flag-skin-loading")
                    })), this.onChangeSkin(_, _.get("skin"), ""), _.on("change:skin", this.onChangeSkin, this), Ce = Ee.getElementsByClassName("jw-media")[0], ke = Ee.getElementsByClassName("jw-controls")[0];
                    var n = Ee.getElementsByClassName("jw-preview")[0];
                    Pe = new h(_), Pe.setup(n);
                    var i = Ee.getElementsByClassName("jw-title")[0];
                    Oe = new w(_), Oe.setup(i), Q(), ue(), _.set("mediaContainer", Ce), _.mediaController.on("fullscreenchange", re);
                    for (var o = A.length; o--;) document.addEventListener(A[o], re, !1);
                    window.removeEventListener("resize", W), window.addEventListener("resize", W, !1), C && (window.removeEventListener("orientationchange", W), window.addEventListener("orientationchange", W, !1)), _.on("change:errorEvent", ge), _.on("change:controls", rt), rt(_, _.get("controls")), _.on("change:state", me), _.on("change:duration", he, this), _.on("change:flashBlocked", q), q(_, _.get("flashBlocked")), L.onPlaylistComplete(de), L.onPlaylistItem(pe), _.on("change:hideAdsControls", function(t, n) {
                        e.toggleClass(Ee, "jw-flag-ads-hide-controls", n)
                    }), _.get("stretching") && B(_, _.get("stretching")), _.on("change:stretching", B), me(_, r.IDLE), _.on("change:fullscreen", at), V(Te), V(Se);
                    var a = _.get("aspectratio");
                    if (a) {
                        e.addClass(Ee, "jw-flag-aspect-mode");
                        var s = Ee.getElementsByClassName("jw-aspect")[0];
                        E(s, {
                            paddingTop: a
                        })
                    }
                    L.on(t.JWPLAYER_READY, function() {
                        $(_.get("width"), _.get("height")), Y()
                    })
                };
                var rt = function(t, n) {
                        if (n) {
                            var i = _e ? _e.get("state") : _.get("state");
                            me(t, i)
                        }
                        e.toggleClass(Ee, "jw-flag-controls-disabled", !n)
                    },
                    at = function(t, n) {
                        var i = _.getVideo();
                        n && _.get("autostartMuted") && ie(), et ? (n ? Be.apply(Ee) : Ve.apply(document), ae(Ee, n)) : e.isIE() ? ae(Ee, n) : (_e && _e.getVideo() && _e.getVideo().setFullscreen(n), i.setFullscreen(n)), i && 0 === i.getName().name.indexOf("flash") && i.setFullscreen(n)
                    };
                this.resize = function(e, t) {
                    var n = !0;
                    $(e, t, n), Y()
                }, this.resizeMedia = ne, this.reset = function() {
                    document.contains(Ee) && Ee.parentNode.replaceChild(Je, Ee), e.emptyElement(Ee)
                }, this.setupInstream = function(t) {
                    this.instreamModel = _e = t, _e.on("change:controls", rt, this), _e.on("change:state", me, this), e.addClass(Ee, "jw-flag-ads"), ue()
                }, this.setAltText = function(e) {
                    Te.setAltText(e)
                }, this.destroyInstream = function() {
                    if (_e && (_e.off(null, null, this), _e = null), this.setAltText(""), e.removeClass(Ee, ["jw-flag-ads", "jw-flag-ads-hide-controls"]), _.set("hideAdsControls", !1), _.getVideo) {
                        var t = _.getVideo();
                        t.setContainer(Ce)
                    }
                    he(_, _.get("duration")), Re.revertAlternateClickHandlers()
                }, this.addCues = function(e) {
                    Te && Te.addCues(e)
                }, this.clickHandler = function() {
                    return Re
                }, this.controlsContainer = function() {
                    return ke
                }, this.getContainer = this.element = function() {
                    return Ee
                }, this.getSafeRegion = function(t) {
                    var n = {
                            x: 0,
                            y: 0,
                            width: _.get("containerWidth") || 0,
                            height: _.get("containerHeight") || 0
                        },
                        i = _.get("dock");
                    return i && i.length && _.get("controls") && (n.y = Ie.element().clientHeight, n.height -= n.y), t = t || !e.exists(t), t && _.get("controls") && (n.height -= Te.element().clientHeight), n
                }, this.setCaptions = function(e) {
                    Ye.clear(), Ye.setup(_.get("id"), e), Ye.resize()
                }, this.destroy = function() {
                    clearTimeout(Ze), clearTimeout(qe), clearTimeout(Ue), window.removeEventListener("resize", W), window.removeEventListener("orientationchange", W);
                    for (var t = A.length; t--;) document.removeEventListener(A[t], re, !1);
                    _.mediaController && _.mediaController.off("fullscreenchange", re), Ee.removeEventListener("keydown", I, !1), Fe && Fe.destroy(), Me && (_.off("change:state", Me.statusDelegate), Me.destroy(), Me = null), _e && this.destroyInstream(), Se && Se.destroy(), e.clearCss(_.get("id"))
                }
            };
        return L
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , function(e, t, n) {
    var i;
    i = function(require, e, t) {
        function n(e, t) {
            o(t, r(e))
        }

        function i(e) {
            var t = c[e];
            if (t) {
                for (var n = Object.keys(t), i = 0; i < n.length; i += 1)
                    for (var o = t[n[i]], r = 0; r < o.parts.length; r += 1) o.parts[r]();
                delete c[e]
            }
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    o = (c[e] || {})[i.id];
                if (o) {
                    for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++) o.parts.push(l(e, i.parts[r]))
                } else {
                    for (var a = [], r = 0; r < i.parts.length; r++) a.push(l(e, i.parts[r]));
                    c[e] = c[e] || {}, c[e][i.id] = {
                        id: i.id,
                        parts: a
                    }
                }
            }
        }

        function r(e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var o = e[i],
                    r = o[0],
                    a = o[1],
                    s = o[2],
                    l = {
                        css: a,
                        media: s
                    };
                n[r] ? n[r].parts.push(l) : t.push(n[r] = {
                    id: r,
                    parts: [l]
                })
            }
            return t
        }

        function a(e) {
            f().appendChild(e)
        }

        function s(e) {
            var t = document.createElement("style");
            return t.type = "text/css", t.setAttribute("data-jwplayer-id", e), a(t), t
        }

        function l(e, t) {
            var n, i, o, r = d[e];
            r || (r = d[e] = {
                element: s(e),
                counter: 0
            });
            var a = r.counter++;
            return n = r.element, i = u.bind(null, n, a, !1), o = u.bind(null, n, a, !0), i(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media) return;
                        i(t = e)
                    } else o()
                }
        }

        function u(e, t, n, i) {
            var o = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = h(t, o);
            else {
                var r = document.createTextNode(o),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
            }
        }
        var c = {},
            d = {},
            p = function(e) {
                var t;
                return function() {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                }
            },
            f = p(function() {
                return document.head || document.getElementsByTagName("head")[0]
            });
        t.exports = {
            style: n,
            clear: i
        };
        var h = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
}, function(e, t, n) {
    var i, o;
    i = [n(68), n(1), n(26), n(2), n(9), n(7), n(72), n(15), n(73), n(65), n(4), n(5), n(50), n(32), n(48), n(21)], o = function(e, t, n, i, o, r, a, s, l, u, c, d, p, f, h, g) {
        var w = {};
        return w.api = e, w._ = t, w._ = t, w.version = n, w.utils = t.extend(i, o, {
            key: a,
            extend: t.extend,
            scriptloader: s,
            rssparser: h,
            tea: l,
            UI: r
        }), w.utils.css.style = w.utils.style, w.vid = u, w.events = t.extend({}, c, {
            state: d
        }), w.playlist = t.extend({}, p, {
            item: f
        }), w.plugins = g, w
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, , , , function(e, t, n) {
    var i, o;
    i = [n(122), n(16), n(175), n(27), n(2), n(1)], o = function(e, t, i, o, r, a) {
        var s = e.prototype.setup;
        return e.prototype.setup = function(e, r) {
            function l() {
                var e = p.get("cast");
                return a.isObject(e) && h("casting") && !o.containsDrm(p)
            }

            function u() {
                var e = p.getVideo();
                l() ? (c.apply(this), d.apply(this)) : e && e.video && (e.video.webkitWirelessVideoPlaybackDisabled = !0)
            }

            function c() {
                n.e(3, function(require) {
                    if (window.chrome) {
                        var e = n(69);
                        this._castController = new e(this, p), this.castToggle = this._castController.castToggle.bind(this._castController)
                    }
                }.bind(this))
            }

            function d() {
                window.WebKitPlaybackTargetAvailabilityEvent && n.e(6, function(require) {
                    var e = n(67);
                    this._airplayController = new e(this, p), this.castToggle = this._airplayController.airplayToggle.bind(this._airplayController)
                }.bind(this))
            }
            s.apply(this, arguments);
            var p = this._model,
                f = p.get("edition"),
                h = t(f),
                g = i.setup();
            e.analytics && (e.sdkplatform = e.sdkplatform || e.analytics.sdkplatform), this.once("ready", u, this), this.once("ready", g.onReady, this), r.getAdBlock = g.checkAdBlock
        }, e
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(72), n(16), n(1), n(2), n(63), n(127), n(27)], o = function(e, t, i, o, r, a, s) {
        function l(e, t, n) {
            if (t) {
                var i = t.client;
                delete t.client, /\.(js|swf)$/.test(i || "") || (i = r.repo() + n), e[i] = t
            }
        }

        function u(e, n) {
            var o = i.clone(n.get("plugins")) || {},
                a = n.get("edition"),
                s = t(a),
                u = /^(vast|googima|freewheel)$/,
                c = /\.(js|swf)$/,
                d = r.repo(),
                p = i.clone(n.get("advertising"));
            if (s("ads") && p && (c.test(p.client) ? o[p.client] = p : u.test(p.client) && (o[d + p.client + ".js"] = p), delete p.client), s("jwpsrv")) {
                var f = n.get("analytics");
                i.isObject(f) || (f = {}), l(o, f, "jwpsrv.js")
            }
            l(o, n.get("ga"), "gapro.js"), l(o, n.get("sharing"), "sharing.js");
            var h = n.get("related"),
                g = i.isObject(h),
                w = n.get("visualplaylist") !== !1 || g;
            g || (h = {
                disableRelated: !0
            }), h.showDockButton = w, l(o, h, "related.js");
            var m = n.get("mobileSdk");
            if (!m) {
                var v = n.get("playlist");
                i.some(v, function(e) {
                    if (e.stereomode && e.stereomode.length > 0) return l(o, n.get("vr") || {}, "vr.js"), !0
                })
            }
            n.set("plugins", o), e()
        }

        function c(t, i) {
            var s = i.get("key") || window.jwplayer && window.jwplayer.key,
                l = new e(s),
                u = l.edition();
            if (i.set("key", s), i.set("edition", u), "unlimited" === u) {
                var c = o.getScriptPath("jwplayer.js");
                if (!c) return void a.error(t, "Error setting up player", "Could not locate jwplayer.js script tag");
                n.p = c, o.repo = r.repo = r.loadFrom = function() {
                    return c
                }
            }
            i.updateProviders(), "invalid" === u ? a.error(t, "Error setting up player", (void 0 === s ? "Missing" : "Invalid") + " license key") : t()
        }

        function d(e, t) {
            s.containsDrm(t) ? s.probe(e, t.get("edition")) : e()
        }

        function p() {
            var e = a.getQueue();
            return e.CHECK_KEY = {
                method: c,
                depends: ["LOADED_POLYFILLS"]
            }, e.PROBE_DRM_SUPPORT = {
                method: d,
                depends: ["CHECK_KEY"]
            }, e.FILTER_PLUGINS = {
                method: u,
                depends: ["CHECK_KEY"]
            }, e.FILTER_PLAYLIST.depends.push("PROBE_DRM_SUPPORT"), e.LOAD_PLUGINS.depends.push("FILTER_PLUGINS"), e.SETUP_VIEW.depends.push("CHECK_KEY"), e
        }
        return {
            getQueue: p
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(129), n(168), n(1)], o = function(e, t, n) {
        var i = window,
            o = n.extend(e, t);
        return "function" == typeof i.define && i.define.amd && i.define([], function() {
            return o
        }), i.jwplayer ? i.jwplayer : o
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [], o = function() {
        function e() {
            var e = document.createElement("div");
            return e.className = n, e.innerHTML = "&nbsp;", e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.background = "transparent", e
        }

        function t() {
            function t() {
                var e = this,
                    t = e._view.element();
                t.appendChild(a), o = !0, i() && e.trigger("adBlock")
            }

            function i() {
                return !!o && (!!r || ("" !== a.innerHTML && a.className === n && null !== a.offsetParent && 0 !== a.clientHeight || (r = !0), r))
            }
            var o = !1,
                r = !1,
                a = e();
            return {
                onReady: t,
                checkAdBlock: i
            }
        }
        var n = "afs_ads";
        return {
            setup: t
        }
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(2), n(4), n(7), n(3), n(1), n(80)], o = function(e, t, n, i, o, r) {
        var a = function(e) {
            this.model = e, this.setup()
        };
        return o.extend(a.prototype, i, {
            setup: function() {
                this.destroy(), this.skipMessage = this.model.get("skipText"), this.skipMessageCountdown = this.model.get("skipMessage"), this.setWaitTime(this.model.get("skipOffset"));
                var t = r();
                this.el = e.createElement(t), this.skiptext = this.el.getElementsByClassName("jw-skiptext")[0], this.skipAdOnce = o.once(this.skipAd.bind(this)), new n(this.el).on("click tap", o.bind(function() {
                    this.skippable && this.skipAdOnce()
                }, this)), this.model.on("change:duration", this.onChangeDuration, this), this.model.on("change:position", this.onChangePosition, this), this.onChangeDuration(this.model, this.model.get("duration")), this.onChangePosition(this.model, this.model.get("position"))
            },
            updateMessage: function(e) {
                this.skiptext.innerHTML = e
            },
            updateCountdown: function(e) {
                this.updateMessage(this.skipMessageCountdown.replace(/xx/gi, Math.ceil(this.waitTime - e)))
            },
            onChangeDuration: function(t, n) {
                if (n) {
                    if (this.waitPercentage) {
                        if (!n) return;
                        this.itemDuration = n, this.setWaitTime(this.waitPercentage), delete this.waitPercentage
                    }
                    e.removeClass(this.el, "jw-hidden")
                }
            },
            onChangePosition: function(t, n) {
                this.waitTime - n > 0 ? this.updateCountdown(n) : (this.updateMessage(this.skipMessage), this.skippable = !0, e.addClass(this.el, "jw-skippable"))
            },
            element: function() {
                return this.el
            },
            setWaitTime: function(t) {
                if (o.isString(t) && "%" === t.slice(-1)) {
                    var n = parseFloat(t);
                    return void(this.itemDuration && !isNaN(n) ? this.waitTime = this.itemDuration * n / 100 : this.waitPercentage = t)
                }
                o.isNumber(t) ? this.waitTime = t : "string" === e.typeOf(t) ? this.waitTime = e.seconds(t) : isNaN(Number(t)) ? this.waitTime = 0 : this.waitTime = Number(t)
            },
            skipAd: function() {
                this.trigger(t.JWPLAYER_AD_SKIPPED)
            },
            destroy: function() {
                this.el && (this.el.removeEventListener("click", this.skipAdOnce), this.el.parentElement && this.el.parentElement.removeChild(this.el)), delete this.skippable, delete this.itemDuration, delete this.waitPercentage
            }
        }), a
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}, function(e, t, n) {
    var i, o;
    i = [n(163), n(1)], o = function(e, t) {
        var n = function() {};
        return t.extend(n.prototype, e.prototype, {
            buildArray: function() {
                var t = e.prototype.buildArray.apply(this, arguments);
                if (this.model.get("abouttext")) {
                    t.items[0].showLogo = !1, t.items.push(t.items.shift());
                    var n = {
                        title: this.model.get("abouttext"),
                        link: this.model.get("aboutlink") || t.items[0].link
                    };
                    t.items.unshift(n)
                }
                return t
            }
        }), n
    }.apply(t, i), !(void 0 !== o && (e.exports = o))
}]);
