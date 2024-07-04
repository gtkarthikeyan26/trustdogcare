"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3601], {
        83601: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return z
                }
            });
            var n = r(4942),
                i = r(87462),
                o = r(15671),
                a = r(43144),
                c = r(97326),
                s = r(60136),
                u = r(82963),
                l = r(61120),
                f = r(67294),
                v = r(46458),
                p = r(58716),
                d = r(48273),
                m = r(40166),
                h = r(69796),
                g = r(57248),
                F = r(74840),
                b = r(6518),
                O = r(68978),
                w = r(29163),
                y = r(41444),
                E = (0, w.F4)(["0%{transform:scale(1)}50%{transform:scale(1.2)}100%{transform:scale(1)}"]),
                k = (0, w.iv)(["", " 0.7s ease-in-out;"], E),
                _ = (0, w.iv)(["& > span > svg{fill:", ";stroke:", ";}"], (function(e) {
                    return e.theme.palette.accent
                }), (function(e) {
                    return e.theme.palette.accent
                })),
                Z = (0, w.iv)(["& > span > svg{fill:transparent;stroke:", ";stroke-width:2px;}"], (function(e) {
                    var t = e.theme;
                    return "notify" === e.iconStyle ? t.palette.highlight : t.palette.grey[600]
                })),
                P = (0, w.ZP)(b.E).withConfig({
                    componentId: "sc-1x8wkgb-0"
                })(["", ";"], (function(e) {
                    return e.isFavourited ? _ : Z
                })),
                C = (0, w.iv)(["animation:", ";& > span > svg{fill:", ";}"], k, (function(e) {
                    return e.theme.palette.accent
                })),
                A = (0, w.iv)(["& > span > svg{stroke:white;stroke-width:2px;}"]),
                R = w.ZP.span.withConfig({
                    componentId: "sc-1x8wkgb-1"
                })(["", ";display:flex;background-color:transparent;align-items:center;justify-content:center;& > span > svg{fill:transparent;}", ";"], (function(e) {
                    var t = e.theme;
                    return "\n        width: ".concat(t.spacing[3], ";\n        height: ").concat(t.spacing[3], ";\n    ")
                }), (function(e) {
                    return e.isFavourited ? C : A
                })),
                D = w.ZP.input.withConfig({
                    componentId: "sc-1x8wkgb-2"
                })(["width:0;height:0;opacity:0;margin:0;padding:0;"]),
                I = w.ZP.label.withConfig({
                    componentId: "sc-1x8wkgb-3"
                })(["display:flex;align-items:center;cursor:pointer;:focus-within{outline:", " auto 5px;outline:-webkit-focus-ring-color auto 5px;}"], (function(e) {
                    return e.theme.palette.focus
                })),
                j = w.ZP.span.withConfig({
                    componentId: "sc-1x8wkgb-4"
                })(["", ";"], y.JF),
                S = function(e) {
                    var t = e.isButton,
                        r = e.onFavourite,
                        n = e.disabled,
                        i = e.isFavourited,
                        o = e.id,
                        a = e.t,
                        c = e.className,
                        s = e.unfavouritedTranslationKey,
                        u = void 0 === s ? "components_listingFavourite_button_unFavourited" : s,
                        l = e.variant;
                    if (!t) return f.createElement(I, {
                        htmlFor: o,
                        className: c,
                        onClick: function(e) {
                            r(), e.preventDefault()
                        }
                    }, f.createElement(D, {
                        disabled: n,
                        id: o,
                        type: "checkbox",
                        checked: i
                    }), f.createElement(R, {
                        disabled: n,
                        isFavourited: i
                    }, f.createElement(O.sWz, {
                        isFavourited: i,
                        size: "large"
                    })), f.createElement(j, null, a("components_listingcard_favourite")));
                    var v = "notify" !== l || i ? b.z.Variant.SECONDARY : b.z.Variant.PRIMARY;
                    return f.createElement(P, {
                        isFavourited: i,
                        icon: O.sWz,
                        variant: v,
                        iconProps: {
                            size: "large"
                        },
                        onClick: r,
                        disabled: n,
                        iconStyle: l
                    }, a(i ? "components_listingFavourite_button_favourited" : u))
                };

            function x(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function M(e) {
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
                    var r, n = (0, l.Z)(e);
                    if (t) {
                        var i = (0, l.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, u.Z)(this, r)
                }
            }
            var N = function(e) {
                    (0, s.Z)(r, e);
                    var t = M(r);

                    function r(e) {
                        var n;
                        return (0, o.Z)(this, r), (n = t.call(this, e)).onFavourite = n.onFavourite.bind((0, c.Z)(n)), n
                    }
                    return (0, a.Z)(r, [{
                        key: "onFavourite",
                        value: function() {
                            var e, t = this.props,
                                r = t.listingId,
                                n = t.profileId,
                                i = t.isFavourited,
                                o = t.isSitterOrCombined,
                                a = t.createFavouriteAsSitter,
                                c = t.createFavouriteAsOwner,
                                s = t.removeFavouriteAsSitter,
                                u = t.removeFavouriteAsOwner,
                                l = t.afterFavouriteCallback,
                                f = t.afterUnfavouriteCallback;
                            o ? (e = {
                                id: r
                            }, i ? s({
                                forceReload: !0,
                                data: e
                            }) : a({
                                forceReload: !0,
                                data: e
                            })) : (e = {
                                id: n
                            }, i ? u({
                                forceReload: !0,
                                data: e
                            }) : c({
                                forceReload: !0,
                                data: e
                            })), l && !i && l(), f && i && f()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.listingId,
                                r = e.profileId,
                                n = e.showFavourite;
                            return f.createElement(f.Fragment, null, n ? f.createElement(S, (0, i.Z)({
                                onFavourite: this.onFavourite,
                                id: t || r
                            }, this.props)) : null)
                        }
                    }]), r
                }(f.Component),
                $ = {
                    createFavouriteAsSitter: p.Z.sitter.createFavourite,
                    createFavouriteAsOwner: p.Z.owner.createFavourite,
                    removeFavouriteAsSitter: p.Z.sitter.removeFavourite,
                    removeFavouriteAsOwner: p.Z.owner.removeFavourite
                },
                z = (0, v.$j)((function(e, t) {
                    var r = t.listingId,
                        n = t.profileId,
                        i = (0, F.tm)(e),
                        o = (0, m.$$)(i),
                        a = (0, m.DG)(i),
                        c = !1,
                        s = !1,
                        u = !1;
                    return !r || o !== d.$c.SITTER && o !== d.$c.COMBINED || (c = (0, h.jM)(e, r), s = !0, u = a === d.UP.MEMBER), !n || o !== d.$c.OWNER && o !== d.$c.COMBINED || (c = (0, g.$p)(e, n), u = a === d.UP.MEMBER), B(B({}, t), {}, {
                        isFavourited: c,
                        isSitterOrCombined: s,
                        showFavourite: u
                    })
                }), $)(N)
        }
    }
]);
//# sourceMappingURL=client.3601.v1.9275b6ec05584600d465.js.map