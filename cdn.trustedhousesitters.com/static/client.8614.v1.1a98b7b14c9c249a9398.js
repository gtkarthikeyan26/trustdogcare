"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8614], {
        48614: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return w
                }
            });
            var i = n(4942),
                r = n(15671),
                o = n(43144),
                c = n(97326),
                s = n(60136),
                u = n(82963),
                a = n(61120),
                p = n(67294),
                h = n(90197),
                l = n(31794),
                f = n(29163),
                g = n(6518),
                d = n(68978),
                m = f.ZP.div.withConfig({
                    componentId: "sc-11zxped-0"
                })(["position:fixed;display:flex;align-items:center;justify-content:center;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,0.85);z-index:", ";@media screen and (min-width:", "px){padding:", ";}"], h.W, (function(e) {
                    return e.theme.screenSize.mediumDesktop
                }), (function(e) {
                    return e.theme.spacing[12]
                })),
                b = f.ZP.div.withConfig({
                    componentId: "sc-11zxped-1"
                })(["max-width:900px;width:100%;@media screen and (min-width:", "px){position:relative;}"], (function(e) {
                    return e.theme.screenSize.mediumDesktop
                })),
                x = (0, f.ZP)(g.z).withConfig({
                    componentId: "sc-11zxped-2"
                })(["position:absolute;top:", ";right:", ";padding:", ";border-style:none;@media screen and (min-width:", "px){top:", ";right:", ";}"], (function(e) {
                    return e.theme.spacing[2]
                }), (function(e) {
                    return e.theme.spacing[3]
                }), (function(e) {
                    return e.theme.spacing[2]
                }), (function(e) {
                    return e.theme.screenSize.mediumDesktop
                }), (function(e) {
                    var t = e.theme;
                    return "-".concat(t.spacing[2.5])
                }), (function(e) {
                    var t = e.theme;
                    return "-".concat(t.spacing[8])
                })),
                v = (0, f.ZP)(d.bMz).withConfig({
                    componentId: "sc-11zxped-3"
                })(["& svg{fill:", ";}"], (function(e) {
                    return e.theme.palette.white
                }));

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function L(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = (0, a.Z)(e);
                    if (t) {
                        var r = (0, a.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return (0, u.Z)(this, n)
                }
            }
            var w = function(e) {
                (0, s.Z)(n, e);
                var t = L(n);

                function n(e) {
                    var i;
                    return (0, r.Z)(this, n), (i = t.call(this, e)).state = {
                        isLightboxOpen: !1
                    }, i.openLightbox = i.openLightbox.bind((0, c.Z)(i)), i.closeLightbox = i.closeLightbox.bind((0, c.Z)(i)), i
                }
                return (0, o.Z)(n, [{
                    key: "openLightbox",
                    value: function() {
                        this.setState((function(e) {
                            return O(O({}, e), {}, {
                                isLightboxOpen: !0
                            })
                        }))
                    }
                }, {
                    key: "closeLightbox",
                    value: function() {
                        this.setState((function(e) {
                            return O(O({}, e), {}, {
                                isLightboxOpen: !1
                            })
                        }))
                    }
                }, {
                    key: "renderLightbox",
                    value: function() {
                        var e = this.props.video;
                        return p.createElement(h.Z, {
                            layer: "lightbox"
                        }, p.createElement(m, {
                            onClick: this.closeLightbox
                        }, p.createElement(b, null, p.createElement(x, {
                            variant: "flat",
                            onClick: this.closeLightbox
                        }, p.createElement(v, {
                            size: "xlarge"
                        })), p.createElement(l.Z, {
                            url: e,
                            title: "Why Housesitting Works"
                        }))))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state.isLightboxOpen,
                            t = this.props.children;
                        return p.createElement(p.Fragment, null, t({
                            openLightbox: this.openLightbox,
                            closeLightbox: this.closeLightbox
                        }), e && this.renderLightbox())
                    }
                }]), n
            }(p.Component)
        }
    }
]);
//# sourceMappingURL=client.8614.v1.1a98b7b14c9c249a9398.js.map