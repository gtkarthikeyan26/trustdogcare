"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8376], {
        40975: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return k
                }
            });
            var n = r(29439),
                a = r(15671),
                i = r(43144),
                o = r(97326),
                s = r(60136),
                c = r(82963),
                l = r(61120),
                u = r(4942),
                m = r(67294),
                f = r(10760),
                h = r(6635),
                d = r(72484),
                g = r(70131),
                p = r(62613),
                v = "loading",
                w = "loaded",
                Z = "error",
                y = "small",
                I = "big",
                _ = {
                    film_ratio: {
                        small: f.fX.width,
                        medium: f.Cm.width,
                        big: f.wK.width
                    },
                    original_ratio: {
                        small: f.o8.width,
                        medium: f.uB.width,
                        big: f.OM.width
                    },
                    square: {
                        small: f.Gr.width,
                        medium: f.Zp.width,
                        big: f.Np.width
                    }
                },
                E = r(29163),
                D = E.ZP.img.withConfig({
                    componentId: "sc-1ilgg1w-0"
                })(["width:100%;height:100%;"]),
                L = E.ZP.div.withConfig({
                    componentId: "sc-1ilgg1w-1"
                })(["width:100%;height:100%;"]);

            function O(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = (0, l.Z)(t);
                    if (e) {
                        var a = (0, l.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return (0, c.Z)(this, r)
                }
            }
            var S = function(t) {
                (0, s.Z)(r, t);
                var e = O(r);

                function r(t) {
                    var n;
                    (0, a.Z)(this, r), n = e.call(this, t), (0, u.Z)((0, o.Z)(n), "ref", void 0), (0, u.Z)((0, o.Z)(n), "placeholderUrl", void 0), (0, u.Z)((0, o.Z)(n), "resizeListener", void 0);
                    var i = t.imageId,
                        s = t.transformation,
                        c = t.customTransform;
                    n.placeholderUrl = t.placeholderUrl || p.ZP.vars.listings.defaultImage;
                    var l = i ? (0, d.F3)(i, s, c) : n.placeholderUrl;
                    return n.state = {
                        src: l,
                        imageState: v,
                        transformationData: {
                            width: 0,
                            transformation: s
                        }
                    }, n
                }
                return (0, i.Z)(r, [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        this.props.imageId && (this.resizeListener = (0, h.Oo)(window, "resize", (0, h.Ds)((function() {
                            t.onResize()
                        }), 1e3)), this.updateTransformation())
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.resizeListener && this.resizeListener.remove()
                    }
                }, {
                    key: "loadImage",
                    value: function(t) {
                        var e = this,
                            r = this.props,
                            n = r.imageId,
                            a = r.customTransform,
                            i = this.state.transformationData;
                        if (n) {
                            var o = (0, d.F3)(n, t || i.transformation, a),
                                s = new Image;
                            s.onload = function() {
                                return e.imageOnLoad(s.src)
                            }, s.onerror = function() {
                                return e.imageOnError()
                            }, s.src = o
                        }
                    }
                }, {
                    key: "imageOnLoad",
                    value: function(t) {
                        this.setState({
                            src: t,
                            imageState: w
                        })
                    }
                }, {
                    key: "imageOnError",
                    value: function() {
                        this.setState({
                            src: this.placeholderUrl,
                            imageState: Z
                        })
                    }
                }, {
                    key: "switchTransformations",
                    value: function(t, e) {
                        var r = this;
                        this.setState({
                            transformationData: {
                                transformation: t,
                                width: e
                            }
                        }, (function() {
                            r.loadImage(t)
                        }))
                    }
                }, {
                    key: "getNextTransformSize",
                    value: function(t) {
                        var e = this.props.transformation,
                            r = _[e];
                        return "undefined" === typeof r ? {
                            transformation: "".concat(e)
                        } : t < r.small ? {
                            transformation: "".concat(e, "_").concat(y),
                            width: t
                        } : t < r.medium ? {
                            transformation: e,
                            width: t
                        } : {
                            transformation: "".concat(e, "_").concat(I),
                            width: t
                        }
                    }
                }, {
                    key: "updateTransformation",
                    value: function() {
                        if (this.ref) {
                            var t = this.ref.getBoundingClientRect().width;
                            if (t > this.state.transformationData.width) {
                                var e = this.getNextTransformSize(t),
                                    r = e.transformation,
                                    n = e.width;
                                this.switchTransformations(r, n)
                            }
                        }
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        this.state.imageState === w && this.updateTransformation()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props,
                            r = e.className,
                            n = e.alt,
                            a = e.placeholderAlt,
                            i = this.state,
                            o = i.imageState,
                            s = i.src,
                            c = o === w ? n : a || n;
                        return m.createElement("img", {
                            ref: function(e) {
                                e && (t.ref = e)
                            },
                            className: r,
                            alt: c,
                            src: s
                        })
                    }
                }]), r
            }(m.Component);
            (0, u.Z)(S, "defaultProps", {
                transformation: f.Cm.name
            });
            var k = function(t) {
                var e = t.className,
                    r = t.style,
                    a = t.imageId,
                    i = t.transformation,
                    o = t.alt,
                    s = t.placeholderUrl,
                    c = t.customTransform,
                    l = void 0 === c ? "" : c,
                    u = (0, g.YD)({
                        triggerOnce: !0
                    }),
                    h = (0, n.Z)(u, 2),
                    v = h[0],
                    w = h[1],
                    Z = s || p.ZP.vars.listings.defaultImage,
                    y = a ? (0, d.F3)(a, i || f.fX.name, l) : Z;
                return w ? m.createElement(S, t) : m.createElement(L, {
                    ref: v
                }, m.createElement("noscript", null, m.createElement(D, {
                    src: y,
                    alt: o,
                    className: e,
                    style: r
                })))
            }
        },
        98376: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return u
                }
            });
            var n = r(67294),
                a = r(56794),
                i = r(29163),
                o = r(40975),
                s = (0, i.ZP)(o.Z).withConfig({
                    componentId: "sc-cevr3-0"
                })(["width:100%;"]),
                c = i.ZP.span.withConfig({
                    componentId: "sc-cevr3-1"
                })(["", ";color:", ";width:", ";height:", ";display:flex;align-items:center;justify-content:center;border:2px solid ", ";border-radius:", ";margin-right:", ";"], (function(t) {
                    return t.theme.typography.hero
                }), (function(t) {
                    return t.theme.palette.accent
                }), (function(t) {
                    return t.theme.spacing[8]
                }), (function(t) {
                    return t.theme.spacing[8]
                }), (function(t) {
                    return t.theme.palette.grey[100]
                }), (function(t) {
                    return t.theme.spacing[4]
                }), (function(t) {
                    return t.theme.spacing[2]
                })),
                l = r(62613),
                u = function(t) {
                    var e = t.className,
                        r = t.publicId,
                        i = t.letter;
                    return i ? n.createElement(c, null, i) : n.createElement(a.Z, {
                        className: e
                    }, n.createElement(s, {
                        key: r,
                        imageId: r,
                        transformation: "square",
                        alt: "avatar",
                        placeholderUrl: l.ZP.vars.profiles.defaultImage,
                        placeholderAlt: "avatar"
                    }))
                }
        }
    }
]);
//# sourceMappingURL=client.8376.v1.63a84174741ee6e39470.js.map