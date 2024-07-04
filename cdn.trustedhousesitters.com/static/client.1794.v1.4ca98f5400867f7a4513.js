"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1794], {
        31794: function(t, n, e) {
            e.d(n, {
                Z: function() {
                    return p
                }
            });
            var i = e(87462),
                o = e(93433),
                r = e(29439),
                a = e(67294),
                c = e(2305),
                u = e(70131),
                s = e(29163),
                l = e(56310),
                d = s.ZP.div.withConfig({
                    componentId: "sc-klrj7a-0"
                })(["position:relative;padding-top:56.25%;@media only screen and (orientation:landscape){margin:0 15%;padding-top:48%;}@media only screen and (min-width:", "px) and (orientation:landscape){margin:0;padding-top:56.25%;}"], (function(t) {
                    return t.theme.screenSize.smallDesktop
                })),
                f = (0, s.ZP)(l.Z).withConfig({
                    componentId: "sc-klrj7a-1"
                })(["position:absolute;top:0;left:0;"]),
                p = function(t) {
                    var n = t.url,
                        e = t.title,
                        s = t.onStart,
                        l = t.onEnded,
                        p = t.onProgress,
                        g = t.progressEvents,
                        E = void 0 === g ? [25, 50, 75] : g,
                        m = t.autoplayVideo,
                        D = (0, u.YD)({
                            threshold: [.25, .75]
                        }),
                        _ = (0, r.Z)(D, 3),
                        y = _[0],
                        h = _[1],
                        v = _[2],
                        O = (0, a.useState)({
                            playing: !1
                        }),
                        S = (0, r.Z)(O, 2),
                        R = S[0],
                        Z = S[1];
                    (0, a.useEffect)((function() {
                        m && h && v && v.intersectionRatio >= .75 ? Z({
                            playing: !0
                        }) : m && (!h || !v || v.intersectionRatio <= .25) && Z({
                            playing: !1
                        })
                    }), [m, h, v]);
                    var A = s || function() {
                            (0, c.j)(c.zW.VIDEO_STARTED.create({
                                title: e
                            }))
                        },
                        I = l || function() {
                            (0, c.j)(c.zW.VIDEO_ENDED.create({
                                title: e
                            }))
                        },
                        P = function(t) {
                            t || (0, c.j)(c.zW.VIDEO_UNMUTED.create({
                                title: e
                            }))
                        },
                        j = function() {},
                        L = (0, a.useRef)();
                    (0, a.useEffect)((function() {
                        return j
                    }), []);
                    var w = (0, a.useRef)(-1);
                    return a.createElement(d, {
                        ref: y
                    }, a.createElement(f, (0, i.Z)({
                        ref: function(t) {
                            L.current = t
                        },
                        "data-testid": "video-component",
                        controls: !0,
                        url: n,
                        width: "100%",
                        height: "100%",
                        onStart: A,
                        onEnded: I,
                        onProgress: function(t) {
                            var n, i = t.played,
                                r = Math.max.apply(Math, (0, o.Z)(E.filter((function(t) {
                                    return t / 100 <= i
                                }))));
                            r >= 0 && (n = r, w.current !== n && ((0, c.j)(c.zW.VIDEO_PROGRESS.create({
                                title: e,
                                progressPercentage: n
                            })), w.current = n)), "function" === typeof p && p()
                        },
                        onReady: function(t) {
                            var n = t.player.player.constructor.displayName;
                            if (n && "Wistia" === n) {
                                var e = L.current.getInternalPlayer();
                                e.bind("mutechange", P), j = function() {
                                    e.unbind("mutechange", P)
                                }
                            }
                        },
                        volume: 1,
                        config: {
                            wistia: {
                                options: {
                                    plugin: {
                                        "captions-v1": {
                                            onByDefault: m
                                        }
                                    }
                                }
                            }
                        },
                        muted: m
                    }, R)))
                }
        }
    }
]);
//# sourceMappingURL=client.1794.v1.4ca98f5400867f7a4513.js.map