(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6310], {
        9996: function(e) {
            "use strict";
            var t = function(e) {
                return function(e) {
                    return !!e && "object" === typeof e
                }(e) && ! function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                        return e.$$typeof === n
                    }(e)
                }(e)
            };
            var n = "function" === typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function r(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? u((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
                var n
            }

            function o(e, t, n) {
                return e.concat(t).map((function(e) {
                    return r(e, n)
                }))
            }

            function a(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                        return e.propertyIsEnumerable(t)
                    })) : []
                }(e))
            }

            function i(e, t) {
                try {
                    return t in e
                } catch (n) {
                    return !1
                }
            }

            function l(e, t, n) {
                var o = {};
                return n.isMergeableObject(e) && a(e).forEach((function(t) {
                    o[t] = r(e[t], n)
                })), a(t).forEach((function(a) {
                    (function(e, t) {
                        return i(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    })(e, a) || (i(e, a) && n.isMergeableObject(t[a]) ? o[a] = function(e, t) {
                        if (!t.customMerge) return u;
                        var n = t.customMerge(e);
                        return "function" === typeof n ? n : u
                    }(a, n)(e[a], t[a], n) : o[a] = r(t[a], n))
                })), o
            }

            function u(e, n, a) {
                (a = a || {}).arrayMerge = a.arrayMerge || o, a.isMergeableObject = a.isMergeableObject || t, a.cloneUnlessOtherwiseSpecified = r;
                var i = Array.isArray(n);
                return i === Array.isArray(e) ? i ? a.arrayMerge(e, n, a) : l(e, n, a) : r(n, a)
            }
            u.all = function(e, t) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function(e, n) {
                    return u(e, n, t)
                }), {})
            };
            var c = u;
            e.exports = c
        },
        49090: function(e) {
            function t(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                }
            }

            function n(e, t) {
                e.onreadystatechange = function() {
                    "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                }
            }
            e.exports = function(e, r, o) {
                var a = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("script");
                "function" === typeof r && (o = r, r = {}), r = r || {}, o = o || function() {}, i.type = r.type || "text/javascript", i.charset = r.charset || "utf8", i.async = !("async" in r) || !!r.async, i.src = e, r.attrs && function(e, t) {
                    for (var n in t) e.setAttribute(n, t[n])
                }(i, r.attrs), r.text && (i.text = "" + r.text), ("onload" in i ? t : n)(i, o), i.onload || t(i, o), a.appendChild(i)
            }
        },
        30845: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = Number.isNaN || function(e) {
                return "number" === typeof e && e !== e
            };

            function o(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++)
                    if (o = e[n], a = t[n], !(o === a || r(o) && r(a))) return !1;
                var o, a;
                return !0
            }
            t.default = function(e, t) {
                var n;
                void 0 === t && (t = o);
                var r, a = [],
                    i = !1;
                return function() {
                    for (var o = [], l = 0; l < arguments.length; l++) o[l] = arguments[l];
                    return i && n === this && t(o, a) || (r = e.apply(this, o), i = !0, n = this, a = o), r
                }
            }
        },
        59605: function(e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o, a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n(67294)),
                i = (o = n(69590)) && o.__esModule ? o : {
                    default: o
                },
                l = n(29448);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function c() {
                return c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, c.apply(this, arguments)
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function y(e, t) {
                return y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, y(e, t)
            }

            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }

            function d(e, t) {
                return !t || "object" !== r(t) && "function" !== typeof t ? h(e) : t
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, v(e)
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && y(e, t)
                }(l, e);
                var t, n, r, o = p(l);

                function l() {
                    var e;
                    s(this, l);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return b(h(e = o.call.apply(o, [this].concat(n))), "mounted", !1), b(h(e), "isReady", !1), b(h(e), "isPlaying", !1), b(h(e), "isLoading", !0), b(h(e), "loadOnReady", null), b(h(e), "startOnPlay", !0), b(h(e), "seekOnPlay", null), b(h(e), "onDurationCalled", !1), b(h(e), "handlePlayerMount", (function(t) {
                        e.player = t, e.player.load(e.props.url), e.progress()
                    })), b(h(e), "getInternalPlayer", (function(t) {
                        return e.player ? e.player[t] : null
                    })), b(h(e), "progress", (function() {
                        if (e.props.url && e.player && e.isReady) {
                            var t = e.getCurrentTime() || 0,
                                n = e.getSecondsLoaded(),
                                r = e.getDuration();
                            if (r) {
                                var o = {
                                    playedSeconds: t,
                                    played: t / r
                                };
                                null !== n && (o.loadedSeconds = n, o.loaded = n / r), o.playedSeconds === e.prevPlayed && o.loadedSeconds === e.prevLoaded || e.props.onProgress(o), e.prevPlayed = o.playedSeconds, e.prevLoaded = o.loadedSeconds
                            }
                        }
                        e.progressTimeout = setTimeout(e.progress, e.props.progressFrequency || e.props.progressInterval)
                    })), b(h(e), "handleReady", (function() {
                        if (e.mounted) {
                            e.isReady = !0, e.isLoading = !1;
                            var t = e.props,
                                n = t.onReady,
                                r = t.playing,
                                o = t.volume,
                                a = t.muted;
                            n(), a || null === o || e.player.setVolume(o), e.loadOnReady ? (e.player.load(e.loadOnReady, !0), e.loadOnReady = null) : r && e.player.play(), e.handleDurationCheck()
                        }
                    })), b(h(e), "handlePlay", (function() {
                        e.isPlaying = !0, e.isLoading = !1;
                        var t = e.props,
                            n = t.onStart,
                            r = t.onPlay,
                            o = t.playbackRate;
                        e.startOnPlay && (e.player.setPlaybackRate && 1 !== o && e.player.setPlaybackRate(o), n(), e.startOnPlay = !1), r(), e.seekOnPlay && (e.seekTo(e.seekOnPlay), e.seekOnPlay = null), e.handleDurationCheck()
                    })), b(h(e), "handlePause", (function(t) {
                        e.isPlaying = !1, e.isLoading || e.props.onPause(t)
                    })), b(h(e), "handleEnded", (function() {
                        var t = e.props,
                            n = t.activePlayer,
                            r = t.loop,
                            o = t.onEnded;
                        n.loopOnEnded && r && e.seekTo(0), r || (e.isPlaying = !1, o())
                    })), b(h(e), "handleError", (function() {
                        var t;
                        e.isLoading = !1, (t = e.props).onError.apply(t, arguments)
                    })), b(h(e), "handleDurationCheck", (function() {
                        clearTimeout(e.durationCheckTimeout);
                        var t = e.getDuration();
                        t ? e.onDurationCalled || (e.props.onDuration(t), e.onDurationCalled = !0) : e.durationCheckTimeout = setTimeout(e.handleDurationCheck, 100)
                    })), b(h(e), "handleLoaded", (function() {
                        e.isLoading = !1
                    })), e
                }
                return t = l, n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.mounted = !0
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this;
                        if (this.player) {
                            var n = this.props,
                                r = n.url,
                                o = n.playing,
                                a = n.volume,
                                l = n.muted,
                                u = n.playbackRate,
                                c = n.pip,
                                s = n.loop,
                                f = n.activePlayer;
                            if (!(0, i.default)(e.url, r)) {
                                if (this.isLoading && !f.forceLoad) return console.warn("ReactPlayer: the attempt to load ".concat(r, " is being deferred until the player has loaded")), void(this.loadOnReady = r);
                                this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(r, this.isReady)
                            }
                            e.playing || !o || this.isPlaying || this.player.play(), e.playing && !o && this.isPlaying && this.player.pause(), !e.pip && c && this.player.enablePIP && this.player.enablePIP(), e.pip && !c && this.player.disablePIP && this.player.disablePIP(), e.volume !== a && null !== a && this.player.setVolume(a), e.muted !== l && (l ? this.player.mute() : (this.player.unmute(), null !== a && setTimeout((function() {
                                return t.player.setVolume(a)
                            })))), e.playbackRate !== u && this.player.setPlaybackRate && this.player.setPlaybackRate(u), e.loop !== s && this.player.setLoop && this.player.setLoop(s)
                        }
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.isReady ? this.player.getDuration() : null
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.isReady ? this.player.getCurrentTime() : null
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.isReady ? this.player.getSecondsLoaded() : null
                    }
                }, {
                    key: "seekTo",
                    value: function(e, t) {
                        var n = this;
                        if (!this.isReady && 0 !== e) return this.seekOnPlay = e, void setTimeout((function() {
                            n.seekOnPlay = null
                        }), 5e3);
                        if (t ? "fraction" === t : e > 0 && e < 1) {
                            var r = this.player.getDuration();
                            return r ? void this.player.seekTo(r * e) : void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")
                        }
                        this.player.seekTo(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.activePlayer;
                        return e ? a.default.createElement(e, c({}, this.props, {
                            onMount: this.handlePlayerMount,
                            onReady: this.handleReady,
                            onPlay: this.handlePlay,
                            onPause: this.handlePause,
                            onEnded: this.handleEnded,
                            onLoaded: this.handleLoaded,
                            onError: this.handleError
                        })) : null
                    }
                }], n && f(t.prototype, n), r && f(t, r), l
            }(a.Component);
            t.default = m, b(m, "displayName", "Player"), b(m, "propTypes", l.propTypes), b(m, "defaultProps", l.defaultProps)
        },
        71276: function(e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createReactPlayer = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = y();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n(67294)),
                a = f(n(9996)),
                i = f(n(30845)),
                l = f(n(69590)),
                u = n(29448),
                c = n(56281),
                s = f(n(59605));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function y() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return y = function() {
                    return e
                }, e
            }

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        A(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function h() {
                return h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, h.apply(this, arguments)
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function P(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t) {
                return g = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, g(e, t)
            }

            function w(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = S(e);
                    if (t) {
                        var o = S(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }

            function O(e, t) {
                return !t || "object" !== r(t) && "function" !== typeof t ? _(e) : t
            }

            function _(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e) {
                return S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, S(e)
            }

            function A(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var T = (0, o.lazy)((function() {
                    return n.e(7664).then(n.bind(n, 57284))
                })),
                k = "undefined" !== typeof window && window.document,
                E = "undefined" !== typeof n.g && n.g.window && n.g.window.document,
                I = Object.keys(u.propTypes),
                R = k || E ? o.Suspense : function() {
                    return null
                },
                j = [];
            t.createReactPlayer = function(e, t) {
                var n, r;
                return r = n = function(n) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && g(e, t)
                    }(b, n);
                    var r, f, y, p = w(b);

                    function b() {
                        var n;
                        m(this, b);
                        for (var r = arguments.length, l = new Array(r), f = 0; f < r; f++) l[f] = arguments[f];
                        return A(_(n = p.call.apply(p, [this].concat(l))), "state", {
                            showPreview: !!n.props.light
                        }), A(_(n), "references", {
                            wrapper: function(e) {
                                n.wrapper = e
                            },
                            player: function(e) {
                                n.player = e
                            }
                        }), A(_(n), "handleClickPreview", (function(e) {
                            n.setState({
                                showPreview: !1
                            }), n.props.onClickPreview(e)
                        })), A(_(n), "showPreview", (function() {
                            n.setState({
                                showPreview: !0
                            })
                        })), A(_(n), "getDuration", (function() {
                            return n.player ? n.player.getDuration() : null
                        })), A(_(n), "getCurrentTime", (function() {
                            return n.player ? n.player.getCurrentTime() : null
                        })), A(_(n), "getSecondsLoaded", (function() {
                            return n.player ? n.player.getSecondsLoaded() : null
                        })), A(_(n), "getInternalPlayer", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "player";
                            return n.player ? n.player.getInternalPlayer(e) : null
                        })), A(_(n), "seekTo", (function(e, t) {
                            if (!n.player) return null;
                            n.player.seekTo(e, t)
                        })), A(_(n), "handleReady", (function() {
                            n.props.onReady(_(n))
                        })), A(_(n), "getActivePlayer", (0, i.default)((function(n) {
                            for (var r = 0, o = [].concat(j, v(e)); r < o.length; r++) {
                                var a = o[r];
                                if (a.canPlay(n)) return a
                            }
                            return t || null
                        }))), A(_(n), "getConfig", (0, i.default)((function(e, t) {
                            var r = n.props.config;
                            return a.default.all([u.defaultProps.config, u.defaultProps.config[t] || {}, r, r[t] || {}])
                        }))), A(_(n), "getAttributes", (0, i.default)((function(e) {
                            return (0, c.omit)(n.props, I)
                        }))), A(_(n), "renderActivePlayer", (function(e) {
                            if (!e) return null;
                            var t = n.getActivePlayer(e);
                            if (!t) return null;
                            var r = n.getConfig(e, t.key);
                            return o.default.createElement(s.default, h({}, n.props, {
                                key: t.key,
                                ref: n.references.player,
                                config: r,
                                activePlayer: t.lazyPlayer || t,
                                onReady: n.handleReady
                            }))
                        })), n
                    }
                    return r = b, f = [{
                        key: "shouldComponentUpdate",
                        value: function(e, t) {
                            return !(0, l.default)(this.props, e) || !(0, l.default)(this.state, t)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.light;
                            !e.light && t && this.setState({
                                showPreview: !0
                            }), e.light && !t && this.setState({
                                showPreview: !1
                            })
                        }
                    }, {
                        key: "renderPreview",
                        value: function(e) {
                            if (!e) return null;
                            var t = this.props,
                                n = t.light,
                                r = t.playIcon,
                                a = t.previewTabIndex;
                            return o.default.createElement(T, {
                                url: e,
                                light: n,
                                playIcon: r,
                                previewTabIndex: a,
                                onClick: this.handleClickPreview
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.url,
                                n = e.style,
                                r = e.width,
                                a = e.height,
                                i = e.fallback,
                                l = e.wrapper,
                                u = this.state.showPreview,
                                c = this.getAttributes(t);
                            return o.default.createElement(l, h({
                                ref: this.references.wrapper,
                                style: d(d({}, n), {}, {
                                    width: r,
                                    height: a
                                })
                            }, c), o.default.createElement(R, {
                                fallback: i
                            }, u ? this.renderPreview(t) : this.renderActivePlayer(t)))
                        }
                    }], f && P(r.prototype, f), y && P(r, y), b
                }(o.Component), A(n, "displayName", "ReactPlayer"), A(n, "propTypes", u.propTypes), A(n, "defaultProps", u.defaultProps), A(n, "addCustomPlayer", (function(e) {
                    j.push(e)
                })), A(n, "removeCustomPlayers", (function() {
                    j.length = 0
                })), A(n, "canPlay", (function(t) {
                    for (var n = 0, r = [].concat(j, v(e)); n < r.length; n++) {
                        if (r[n].canPlay(t)) return !0
                    }
                    return !1
                })), A(n, "canEnablePIP", (function(t) {
                    for (var n = 0, r = [].concat(j, v(e)); n < r.length; n++) {
                        var o = r[n];
                        if (o.canEnablePIP && o.canEnablePIP(t)) return !0
                    }
                    return !1
                })), r
            }
        },
        56310: function(e, t, n) {
            "use strict";
            t.Z = void 0;
            var r, o = (r = n(29760)) && r.__esModule ? r : {
                    default: r
                },
                a = n(71276);
            var i = o.default[o.default.length - 1],
                l = (0, a.createReactPlayer)(o.default, i);
            t.Z = l
        },
        99790: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canPlay = t.FLV_EXTENSIONS = t.DASH_EXTENSIONS = t.HLS_EXTENSIONS = t.VIDEO_EXTENSIONS = t.AUDIO_EXTENSIONS = t.MATCH_URL_KALTURA = t.MATCH_URL_VIDYARD = t.MATCH_URL_MIXCLOUD = t.MATCH_URL_DAILYMOTION = t.MATCH_URL_TWITCH_CHANNEL = t.MATCH_URL_TWITCH_VIDEO = t.MATCH_URL_WISTIA = t.MATCH_URL_STREAMABLE = t.MATCH_URL_FACEBOOK_WATCH = t.MATCH_URL_FACEBOOK = t.MATCH_URL_VIMEO = t.MATCH_URL_SOUNDCLOUD = t.MATCH_URL_YOUTUBE = void 0;
            var r = n(56281);

            function o(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, l = !0,
                    u = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        u = !0, i = e
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var i = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
            t.MATCH_URL_YOUTUBE = i;
            var l = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
            t.MATCH_URL_SOUNDCLOUD = l;
            var u = /vimeo\.com\/.+/;
            t.MATCH_URL_VIMEO = u;
            var c = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
            t.MATCH_URL_FACEBOOK = c;
            var s = /^https?:\/\/fb\.watch\/.+$/;
            t.MATCH_URL_FACEBOOK_WATCH = s;
            var f = /streamable\.com\/([a-z0-9]+)$/;
            t.MATCH_URL_STREAMABLE = f;
            var y = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
            t.MATCH_URL_WISTIA = y;
            var p = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
            t.MATCH_URL_TWITCH_VIDEO = p;
            var d = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
            t.MATCH_URL_TWITCH_CHANNEL = d;
            var h = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
            t.MATCH_URL_DAILYMOTION = h;
            var v = /mixcloud\.com\/([^/]+\/[^/]+)/;
            t.MATCH_URL_MIXCLOUD = v;
            var b = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/;
            t.MATCH_URL_VIDYARD = b;
            var m = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_]+)$/;
            t.MATCH_URL_KALTURA = m;
            var P = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
            t.AUDIO_EXTENSIONS = P;
            var g = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
            t.VIDEO_EXTENSIONS = g;
            var w = /\.(m3u8)($|\?)/i;
            t.HLS_EXTENSIONS = w;
            var O = /\.(mpd)($|\?)/i;
            t.DASH_EXTENSIONS = O;
            var _ = /\.(flv)($|\?)/i;
            t.FLV_EXTENSIONS = _;
            var S = {
                youtube: function(e) {
                    return e instanceof Array ? e.every((function(e) {
                        return i.test(e)
                    })) : i.test(e)
                },
                soundcloud: function(e) {
                    return l.test(e) && !P.test(e)
                },
                vimeo: function(e) {
                    return u.test(e) && !g.test(e) && !w.test(e)
                },
                facebook: function(e) {
                    return c.test(e) || s.test(e)
                },
                streamable: function(e) {
                    return f.test(e)
                },
                wistia: function(e) {
                    return y.test(e)
                },
                twitch: function(e) {
                    return p.test(e) || d.test(e)
                },
                dailymotion: function(e) {
                    return h.test(e)
                },
                mixcloud: function(e) {
                    return v.test(e)
                },
                vidyard: function(e) {
                    return b.test(e)
                },
                kaltura: function(e) {
                    return m.test(e)
                },
                file: function e(t) {
                    if (t instanceof Array) {
                        var n, a = o(t);
                        try {
                            for (a.s(); !(n = a.n()).done;) {
                                var i = n.value;
                                if ("string" === typeof i && e(i)) return !0;
                                if (e(i.src)) return !0
                            }
                        } catch (l) {
                            a.e(l)
                        } finally {
                            a.f()
                        }
                        return !1
                    }
                    return !(!(0, r.isMediaStream)(t) && !(0, r.isBlobUrl)(t)) || (P.test(t) || g.test(t) || w.test(t) || O.test(t) || _.test(t))
                }
            };
            t.canPlay = S
        },
        29760: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(67294),
                o = n(56281),
                a = n(99790),
                i = [{
                    key: "youtube",
                    name: "YouTube",
                    canPlay: a.canPlay.youtube,
                    lazyPlayer: (0, r.lazy)((function() {
                        return n.e(4439).then(n.bind(n, 85034))
                    }))
                }, {
                    key: "soundcloud",
                    name: "SoundCloud",
                    canPlay: a.canPlay.soundcloud,
                    lazyPlayer: (0, r.lazy)((function() {
                        return n.e(6125).then(n.bind(n, 76655))
                    }))
                }, {
                    key: "vimeo",
                    name: "Vimeo",
                    canPlay: a.canPlay.vimeo,
                    lazyPlayer: (0, r.lazy)((function() {
                        return n.e(3743).then(n.bind(n, 86746))
                    }))
                }, {
                    key: "facebook",
                    name: "Facebook",
                    canPlay: a.canPlay.facebook,
                    lazyPlayer: (0, r.lazy)((function() {
                        return n.e(2121).then(n.bind(n, 26429))
                    }))
                }, {
                    key: "streamable",
                    name: "Streamable",
                    canPlay: a.canPlay.streamable,
                    lazyPlayer: (0, r.lazy)((function() {
                        return n.e(2546).then(n.bind(n, 76479))
                    }))
                }, {
                    key: "wistia",
                    name: "Wistia",
                    canPlay: a.canPlay.wistia,
                    lazyPlayer: (0, r.lazy)((function() {
                        return n.e(8055).then(n.bind(n, 13134))
                    }))
                }, {
                    key: "twitch",
                    name: "Twitch",
                    canPlay: a.canPlay.twitch,
                    lazyPlayer: (0, r.lazy)((function() {
                        return n.e(6216).then(n.bind(n, 89743))
                    }))
                }, {
                    key: "dailymotion",
                    name: "DailyMotion",
                    canPlay: a.canPlay.dailymotion,
                    lazyPlayer: (0, r.lazy)((function() {
                        return n.e(7596).then(n.bind(n, 65134))
                    }))
                }, {
                    key: "mixcloud",
                    name: "Mixcloud",
                    canPlay: a.canPlay.mixcloud,
                    lazyPlayer: (0, r.lazy)((function() {
                        return n.e(4667).then(n.bind(n, 99734))
                    }))
                }, {
                    key: "vidyard",
                    name: "Vidyard",
                    canPlay: a.canPlay.vidyard,
                    lazyPlayer: (0, r.lazy)((function() {
                        return n.e(8888).then(n.bind(n, 27287))
                    }))
                }, {
                    key: "kaltura",
                    name: "Kaltura",
                    canPlay: a.canPlay.kaltura,
                    lazyPlayer: (0, r.lazy)((function() {
                        return n.e(261).then(n.bind(n, 49289))
                    }))
                }, {
                    key: "file",
                    name: "FilePlayer",
                    canPlay: a.canPlay.file,
                    canEnablePIP: function(e) {
                        return a.canPlay.file(e) && (document.pictureInPictureEnabled || (0, o.supportsWebKitPresentationMode)()) && !a.AUDIO_EXTENSIONS.test(e)
                    },
                    lazyPlayer: (0, r.lazy)((function() {
                        return n.e(6011).then(n.bind(n, 33364))
                    }))
                }];
            t.default = i
        },
        29448: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultProps = t.propTypes = void 0;
            var r, o = (r = n(45697)) && r.__esModule ? r : {
                default: r
            };
            var a = o.default.string,
                i = o.default.bool,
                l = o.default.number,
                u = o.default.array,
                c = o.default.oneOfType,
                s = o.default.shape,
                f = o.default.object,
                y = o.default.func,
                p = o.default.node,
                d = {
                    url: c([a, u, f]),
                    playing: i,
                    loop: i,
                    controls: i,
                    volume: l,
                    muted: i,
                    playbackRate: l,
                    width: c([a, l]),
                    height: c([a, l]),
                    style: f,
                    progressInterval: l,
                    playsinline: i,
                    pip: i,
                    stopOnUnmount: i,
                    light: c([i, a]),
                    playIcon: p,
                    previewTabIndex: l,
                    fallback: p,
                    wrapper: c([a, y, s({
                        render: y.isRequired
                    })]),
                    config: s({
                        soundcloud: s({
                            options: f
                        }),
                        youtube: s({
                            playerVars: f,
                            embedOptions: f,
                            onUnstarted: y
                        }),
                        facebook: s({
                            appId: a,
                            version: a,
                            playerId: a,
                            attributes: f
                        }),
                        dailymotion: s({
                            params: f
                        }),
                        vimeo: s({
                            playerOptions: f
                        }),
                        file: s({
                            attributes: f,
                            tracks: u,
                            forceVideo: i,
                            forceAudio: i,
                            forceHLS: i,
                            forceDASH: i,
                            forceFLV: i,
                            hlsOptions: f,
                            hlsVersion: a,
                            dashVersion: a,
                            flvVersion: a
                        }),
                        wistia: s({
                            options: f,
                            playerId: a,
                            customControls: u
                        }),
                        mixcloud: s({
                            options: f
                        }),
                        twitch: s({
                            options: f,
                            playerId: a
                        }),
                        vidyard: s({
                            options: f
                        })
                    }),
                    onReady: y,
                    onStart: y,
                    onPlay: y,
                    onPause: y,
                    onBuffer: y,
                    onBufferEnd: y,
                    onEnded: y,
                    onError: y,
                    onDuration: y,
                    onSeek: y,
                    onProgress: y,
                    onClickPreview: y,
                    onEnablePIP: y,
                    onDisablePIP: y
                };
            t.propTypes = d;
            var h = function() {},
                v = {
                    playing: !1,
                    loop: !1,
                    controls: !1,
                    volume: null,
                    muted: !1,
                    playbackRate: 1,
                    width: "640px",
                    height: "360px",
                    style: {},
                    progressInterval: 1e3,
                    playsinline: !1,
                    pip: !1,
                    stopOnUnmount: !0,
                    light: !1,
                    fallback: null,
                    wrapper: "div",
                    previewTabIndex: 0,
                    config: {
                        soundcloud: {
                            options: {
                                visual: !0,
                                buying: !1,
                                liking: !1,
                                download: !1,
                                sharing: !1,
                                show_comments: !1,
                                show_playcount: !1
                            }
                        },
                        youtube: {
                            playerVars: {
                                playsinline: 1,
                                showinfo: 0,
                                rel: 0,
                                iv_load_policy: 3,
                                modestbranding: 1
                            },
                            embedOptions: {},
                            onUnstarted: h
                        },
                        facebook: {
                            appId: "1309697205772819",
                            version: "v3.3",
                            playerId: null,
                            attributes: {}
                        },
                        dailymotion: {
                            params: {
                                api: 1,
                                "endscreen-enable": !1
                            }
                        },
                        vimeo: {
                            playerOptions: {
                                autopause: !1,
                                byline: !1,
                                portrait: !1,
                                title: !1
                            }
                        },
                        file: {
                            attributes: {},
                            tracks: [],
                            forceVideo: !1,
                            forceAudio: !1,
                            forceHLS: !1,
                            forceDASH: !1,
                            forceFLV: !1,
                            hlsOptions: {},
                            hlsVersion: "0.14.16",
                            dashVersion: "3.1.3",
                            flvVersion: "1.5.0"
                        },
                        wistia: {
                            options: {},
                            playerId: null,
                            customControls: null
                        },
                        mixcloud: {
                            options: {
                                hide_cover: 1
                            }
                        },
                        twitch: {
                            options: {},
                            playerId: null
                        },
                        vidyard: {
                            options: {}
                        }
                    },
                    onReady: h,
                    onStart: h,
                    onPlay: h,
                    onPause: h,
                    onBuffer: h,
                    onBufferEnd: h,
                    onEnded: h,
                    onError: h,
                    onDuration: h,
                    onSeek: h,
                    onProgress: h,
                    onClickPreview: h,
                    onEnablePIP: h,
                    onDisablePIP: h
                };
            t.defaultProps = v
        },
        56281: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseStartTime = function(e) {
                return y(e, u)
            }, t.parseEndTime = function(e) {
                return y(e, c)
            }, t.randomString = function() {
                return Math.random().toString(36).substr(2, 5)
            }, t.queryString = function(e) {
                return Object.keys(e).map((function(t) {
                    return "".concat(t, "=").concat(e[t])
                })).join("&")
            }, t.getSDK = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                        return !0
                    },
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.default,
                    i = p(t);
                if (i && o(i)) return Promise.resolve(i);
                return new Promise((function(r, o) {
                    if (d[e]) d[e].push({
                        resolve: r,
                        reject: o
                    });
                    else {
                        d[e] = [{
                            resolve: r,
                            reject: o
                        }];
                        var i = function(t) {
                            d[e].forEach((function(e) {
                                return e.resolve(t)
                            }))
                        };
                        if (n) {
                            var l = window[n];
                            window[n] = function() {
                                l && l(), i(p(t))
                            }
                        }
                        a(e, (function(r) {
                            r ? (d[e].forEach((function(e) {
                                return e.reject(r)
                            })), d[e] = null) : n || i(p(t))
                        }))
                    }
                }))
            }, t.getConfig = function(e, t) {
                return (0, o.default)(t.config, e.config)
            }, t.omit = function(e) {
                for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                for (var a = (t = []).concat.apply(t, r), i = {}, l = Object.keys(e), u = 0, c = l; u < c.length; u++) {
                    var s = c[u]; - 1 === a.indexOf(s) && (i[s] = e[s])
                }
                return i
            }, t.callPlayer = function(e) {
                var t;
                if (!this.player || !this.player[e]) {
                    var n = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c \u2013 ");
                    return this.player ? this.player[e] || (n += "The method was not available") : n += "The player was not available", console.warn(n, "font-weight: bold", ""), null
                }
                for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                return (t = this.player)[e].apply(t, o)
            }, t.isMediaStream = function(e) {
                return "undefined" !== typeof window && "undefined" !== typeof window.MediaStream && e instanceof window.MediaStream
            }, t.isBlobUrl = function(e) {
                return /^blob:/.test(e)
            }, t.supportsWebKitPresentationMode = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.createElement("video"),
                    t = !1 === /iPhone|iPod/.test(navigator.userAgent);
                return e.webkitSupportsPresentationMode && "function" === typeof e.webkitSetPresentationMode && t
            };
            var r = a(n(49090)),
                o = a(n(9996));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        o = !0, a = u
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var u = /[?&#](?:start|t)=([0-9hms]+)/,
                c = /[?&#]end=([0-9hms]+)/,
                s = /(\d+)(h|m|s)/g,
                f = /^\d+$/;

            function y(e, t) {
                if (!(e instanceof Array)) {
                    var n = e.match(t);
                    if (n) {
                        var r = n[1];
                        if (r.match(s)) return function(e) {
                            var t = 0,
                                n = s.exec(e);
                            for (; null !== n;) {
                                var r = i(n, 3),
                                    o = r[1],
                                    a = r[2];
                                "h" === a && (t += 60 * parseInt(o, 10) * 60), "m" === a && (t += 60 * parseInt(o, 10)), "s" === a && (t += parseInt(o, 10)), n = s.exec(e)
                            }
                            return t
                        }(r);
                        if (f.test(r)) return parseInt(r)
                    }
                }
            }

            function p(e) {
                return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
            }
            var d = {}
        }
    }
]);
//# sourceMappingURL=client.6310.v1.71fa93df73ee6845495f.js.map