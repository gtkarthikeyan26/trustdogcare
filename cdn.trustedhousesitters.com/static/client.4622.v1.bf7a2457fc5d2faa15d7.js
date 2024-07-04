"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4622], {
        91313: function(t, e, n) {
            n.d(e, {
                F: function() {
                    return i
                }
            });
            var i = Object.freeze({
                LARGE: "large",
                SMALL: "small"
            })
        },
        40019: function(t, e, n) {
            n.d(e, {
                Px: function() {
                    return v
                },
                bD: function() {
                    return C
                },
                De: function() {
                    return P
                },
                Tx: function() {
                    return _
                },
                qf: function() {
                    return f
                },
                jJ: function() {
                    return b
                },
                OU: function() {
                    return d
                },
                ay: function() {
                    return m
                },
                jc: function() {
                    return p
                },
                Sb: function() {
                    return x
                },
                uB: function() {
                    return E
                },
                q3: function() {
                    return D
                },
                l1: function() {
                    return L
                },
                JN: function() {
                    return y
                },
                O1: function() {
                    return I
                },
                a1: function() {
                    return O
                },
                UY: function() {
                    return Z
                },
                kW: function() {
                    return h
                },
                lG: function() {
                    return w
                },
                v_: function() {
                    return g
                }
            });
            var i = n(29163),
                r = n(76),
                a = n(56794),
                o = n(94072),
                l = n(83601),
                c = n(73313),
                s = n(91313),
                u = n(44744),
                d = i.ZP.div.withConfig({
                    componentId: "sc-80wmlu-0"
                })(["position:relative;"]),
                m = i.ZP.div.withConfig({
                    componentId: "sc-80wmlu-1"
                })(["position:relative;padding-bottom:calc(100% / 1.5);margin-bottom:", ";"], (function(t) {
                    var e = t.theme;
                    return t.variant === s.F.LARGE ? e.spacing[4] : e.spacing[1]
                })),
                p = i.ZP.div.withConfig({
                    componentId: "sc-80wmlu-2"
                })(["position:absolute;width:100%;height:100%;overflow:hidden;background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0));"]),
                g = (0, i.ZP)(o.Z).withConfig({
                    componentId: "sc-80wmlu-3"
                })(["width:100%;height:100%;object-fit:cover;"]),
                f = (0, i.ZP)(l.Z).withConfig({
                    componentId: "sc-80wmlu-4"
                })(["position:absolute;padding:", ";top:", ";right:", ";z-index:2;transition:all 0.2s ease-in-out;:hover{transform:scale(1.2);}"], (function(t) {
                    return t.theme.spacing[1.5]
                }), (function(t) {
                    return t.theme.spacing[.5]
                }), (function(t) {
                    return t.theme.spacing[.5]
                })),
                h = i.ZP.div.withConfig({
                    componentId: "sc-80wmlu-5"
                })(["position:relative;font-size:", ";height:1.25em;margin-bottom:", ";"], (function(t) {
                    return t.theme.fontSizes.medLarge
                }), (function(t) {
                    return t.theme.spacing[.5]
                })),
                w = i.ZP.h3.withConfig({
                    componentId: "sc-80wmlu-6"
                })((function(t) {
                    var e = t.theme,
                        n = e.typography,
                        r = e.palette,
                        a = e.fontWeights;
                    return (0, i.iv)(["", ";font-weight:", ";color:", ";position:absolute;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;"], n.p, a.bold, r.text)
                })),
                v = (0, i.ZP)(a.Z).withConfig({
                    componentId: "sc-80wmlu-7"
                })(["position:absolute;bottom:calc(", " * -1.5);right:", ";margin:0;"], (function(t) {
                    var e = t.theme,
                        n = t.size;
                    return e.fontSizes[n]
                }), (function(t) {
                    return t.theme.spacing[1]
                })),
                b = (0, i.ZP)(r.rU).withConfig({
                    componentId: "sc-80wmlu-8"
                })(["display:block;text-decoration:none;color:inherit;&::before{content:' ';width:100%;height:", ";background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0));z-index:1;display:block;position:absolute;}"], (function(t) {
                    return t.theme.spacing[12]
                })),
                _ = i.ZP.div.withConfig({
                    componentId: "sc-80wmlu-9"
                })((function(t) {
                    var e = t.theme.screenSize;
                    return (0, i.iv)(["display:flex;flex-direction:column;align-items:start;@media only screen and (min-width:", "px){flex-direction:row;align-items:center;}"], e.mediumHandset)
                })),
                P = (0, i.ZP)(c.Dr).attrs({
                    styleOf: "smallText"
                }).withConfig({
                    componentId: "sc-80wmlu-10"
                })(["display:block;max-width:212px;margin-right:", ";white-space:nowrap;margin-bottom:", ";"], (function(t) {
                    return t.theme.spacing[1]
                }), (function(t) {
                    var e = t.theme;
                    return t.variant === s.F.SMALL ? e.spacing[1] : 0
                })),
                E = i.ZP.span.withConfig({
                    componentId: "sc-80wmlu-11"
                })((function(t) {
                    var e = t.theme,
                        n = e.fontSizes,
                        r = e.spacing,
                        a = e.palette,
                        o = e.fontWeights;
                    return (0, i.iv)(["color:", ";font-size:", ";padding:0px ", ";background-color:", ";font-weight:", ";text-transform:uppercase;border-radius:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"], a.white, n.xsmall, r[1], a.grey[500], o.bold)
                })),
                x = (0, i.ZP)(c.Dr).attrs({
                    styleOf: "smallText"
                }).withConfig({
                    componentId: "sc-80wmlu-12"
                })(["display:block;color:", ";margin-bottom:", ";"], (function(t) {
                    return t.theme.palette.textLight
                }), (function(t) {
                    var e = t.theme;
                    return t.variant === s.F.SMALL ? e.spacing[.5] : e.spacing[1]
                })),
                C = (0, i.ZP)(u.b1).withConfig({
                    componentId: "sc-80wmlu-13"
                })(["display:flex;align-items:flex-start;flex-direction:column;position:absolute;left:", ";;padding-top:4px;padding-bottom:4px;bottom:", ";'"], (function(t) {
                    return t.theme.spacing[2]
                }), (function(t) {
                    return t.theme.spacing[3]
                })),
                L = i.ZP.div.withConfig({
                    componentId: "sc-80wmlu-14"
                })(["", ";"], (function(t) {
                    var e = t.theme;
                    return (0, i.iv)(["aspect-ratio:3 / 2;background:", ";margin-bottom:32px;width:100%;"], e.palette.grey[300])
                })),
                Z = i.ZP.div.withConfig({
                    componentId: "sc-80wmlu-15"
                })(["", ";"], (function(t) {
                    var e = t.theme;
                    return (0, i.iv)(["background:", ";height:24px;margin-bottom:4px;"], e.palette.grey[300])
                })),
                D = i.ZP.div.withConfig({
                    componentId: "sc-80wmlu-16"
                })(["", ";"], (function(t) {
                    var e = t.theme;
                    return (0, i.iv)(["background:", ";height:20px;margin-bottom:4px;width:65%;"], e.palette.grey[300])
                })),
                y = i.ZP.div.withConfig({
                    componentId: "sc-80wmlu-17"
                })(["", ";"], (function(t) {
                    var e = t.theme;
                    return (0, i.iv)(["background:", ";height:20px;margin-bottom:8px;width:60%;"], e.palette.grey[300])
                })),
                O = i.ZP.div.withConfig({
                    componentId: "sc-80wmlu-18"
                })(["display:flex;"]),
                I = i.ZP.div.withConfig({
                    componentId: "sc-80wmlu-19"
                })(["", ";"], (function(t) {
                    var e = t.theme;
                    return (0, i.iv)(["background:", ";height:24px;margin-right:4px;width:24px;"], e.palette.grey[300])
                }))
        },
        1543: function(t, e, n) {
            var i = n(67294),
                r = n(40019);
            e.Z = function() {
                return i.createElement(i.Fragment, null, i.createElement(r.l1, null), i.createElement(r.UY, null), i.createElement(r.q3, null), i.createElement(r.JN, null), i.createElement(r.a1, null, i.createElement(r.O1, null), i.createElement(r.O1, null)))
            }
        },
        91506: function(t, e, n) {
            n.d(e, {
                ZP: function() {
                    return k
                }
            });
            var i = n(87462),
                r = n(4942),
                a = n(44925),
                o = n(67294),
                l = n(91072),
                c = n(15137),
                s = n(3151),
                u = n(24257),
                d = n(7069),
                m = n(77349),
                p = n(72912),
                g = n(2016),
                f = n(10760),
                h = n(71969),
                w = n(1756),
                v = n(84835),
                b = n(62613),
                _ = n(99879),
                P = n(64046),
                E = n(31731),
                x = n(68123),
                C = n(43871),
                L = n(19836),
                Z = n(44744),
                D = n(91313),
                y = n(40019),
                O = ["t", "dateRange", "listing", "variant", "isPaidOrExpired", "isOutsideSearchPage", "onClick", "onCloseLowApplicantsPrompt", "showLowApplicantsFeatures", "showLowApplicantsPrompt", "isSavedSearchDisplayRendered"];

            function I(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function A(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? I(Object(n), !0).forEach((function(e) {
                        (0, r.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var S = new URLSearchParams("?t=".concat(JSON.stringify({
                    productTrigger: "Find a House sit"
                }))),
                F = function(t) {
                    var e = t.t,
                        n = t.dateRange,
                        r = t.listing,
                        l = t.variant,
                        I = t.isPaidOrExpired,
                        F = t.isOutsideSearchPage,
                        k = t.onClick,
                        U = t.onCloseLowApplicantsPrompt,
                        j = t.showLowApplicantsFeatures,
                        R = void 0 !== j && j,
                        G = t.showLowApplicantsPrompt,
                        T = void 0 !== G && G,
                        z = t.isSavedSearchDisplayRendered,
                        B = (0, a.Z)(t, O),
                        J = r.id,
                        N = r.ownerAvatarPhoto,
                        H = r.mainPhoto,
                        M = r.openAssignments,
                        W = r.title,
                        q = r.location,
                        K = r.animals,
                        V = !(0, x.ZP)(),
                        Y = (0, E.a)("(min-width: 600px) and (pointer: fine)"),
                        Q = (0, C.Z)(),
                        X = (0, c.useLocation)().pathname,
                        $ = Y ? "_blank" : "_self",
                        tt = {
                            default: b.ZP.vars.listings.defaultImage,
                            publicId: H ? H.publicId : null
                        },
                        et = {
                            default: b.ZP.vars.profiles.defaultImage,
                            publicId: N ? N.publicId : null
                        },
                        nt = new URLSearchParams(Q.toString());
                    F && nt.append("selectMembershipRegwall", "true"), (0, L.Jj)("house-and-pet-sitting-assignments", X) && nt.append("routeParams", JSON.stringify((0, L.Ug)(X)));
                    var it = "".concat(_._j.search.listingsDetail(A(A({}, r.location), {}, {
                            id: r.id
                        })), "?").concat(S.toString()).concat(nt.toString() && "&".concat(nt.toString())),
                        rt = o.createElement(o.Fragment, null, o.createElement(y.ay, {
                            variant: l,
                            "data-testid": "ListingCard__image"
                        }, o.createElement(y.jc, null, o.createElement(y.v_, {
                            imageId: tt && tt.publicId,
                            transformation: f.wK,
                            placeholderAlt: e("components_listingcard_placeholder_image"),
                            alt: e("components_listingcard_alt_location", {
                                location: (0, g.Te)(q, !0)
                            })
                        })), l === D.F.LARGE && o.createElement(o.Fragment, null, o.createElement(y.Px, {
                            size: "medium",
                            "data-testid": "ListingCard__avatar"
                        }, o.createElement(y.v_, {
                            imageId: et && et.publicId,
                            transformation: f.Gr,
                            placeholderUrl: et.default,
                            placeholderAlt: e("components_listingcard_placeholder_image"),
                            alt: e("components_listingCard_owner_image_alt", {
                                name: null === r || void 0 === r ? void 0 : r.title
                            })
                        })), function() {
                            var t = r.publishedDate,
                                n = r.publishedAssignment,
                                i = new Date,
                                a = (0, w.EA)().setHours(0, 0, 0, 0),
                                l = new Date(t).setHours(0, 0, 0, 0),
                                c = (0, p.PU)(t, (0, d.Z)((0, w.EA)(), 1)),
                                s = (0, m.Z)(i, 7),
                                u = !1,
                                g = !1;
                            if (n && n.length)
                                for (var f = 0; f < n.length; f += 1) {
                                    var h = n[f];
                                    if ((0, p._B)(h.startDate, s) && (0, p.PU)(h.startDate, i)) {
                                        g = !0;
                                        break
                                    }
                                }
                            if (n && n.length && R && (0, p._B)(l, (0, d.Z)(a, P.p0)))
                                for (var v = 0; v < n.length; v += 1) {
                                    if (n[v].applicationsCount <= P.p0) {
                                        u = !0;
                                        break
                                    }
                                }
                            return c || g || u ? o.createElement(y.bD, {
                                "data-testid": "ListingCard__badges"
                            }, u && o.createElement(Z.gB, {
                                showLowApplicantsPrompt: T,
                                onCloseLowApplicantsPrompt: U,
                                t: e,
                                center: !0,
                                "data-testid": "ListingCard__badge__lowApplicants",
                                isSavedSearchDisplayRendered: z
                            }), c && o.createElement(Z.gl, {
                                center: !0,
                                "data-testid": "ListingCard__badge__new"
                            }), g && o.createElement(Z.Ud, {
                                center: !0,
                                "data-testid": "ListingCard__badge__lastMinute"
                            })) : null
                        }())), l === D.F.LARGE && o.createElement(y.kW, null, o.createElement(y.lG, {
                            variant: l,
                            "data-testid": "ListingCard__title"
                        }, W)), o.createElement(y.Tx, null, function() {
                            var t, i = M.map((function(t) {
                                    return A(A({}, t), {}, {
                                        startDate: (0, p.sG)(t.startDate),
                                        endDate: (0, p.sG)(t.endDate)
                                    })
                                })),
                                r = {
                                    dateFrom: (0, p.sG)(n.dateFrom),
                                    dateTo: (0, p.sG)(n.dateTo)
                                },
                                a = i.every((function(t) {
                                    return t.isReviewing
                                })),
                                c = i.filter((function(t) {
                                    return (!I || a || !t.isReviewing) && (0, p.PU)(t.startDate, (0, p.sS)(new Date))
                                }));
                            return (t = r.dateFrom && r.dateTo ? c.find((function(t) {
                                return (0, s.Z)(t.startDate, r.dateFrom) || (0, u.Z)(t.startDate, {
                                    start: r.dateFrom,
                                    end: r.dateTo
                                })
                            })) : r.dateFrom ? c.find((function(t) {
                                return (0, p.PU)(t.startDate, r.dateFrom)
                            })) : c[0]) ? o.createElement(o.Fragment, null, o.createElement(y.De, {
                                variant: l
                            }, e("components_listingCard_dates", {
                                startDate: t.startDate,
                                endDate: t.endDate
                            }), c.length > 1 && " +"), a && o.createElement(v.ZP, {
                                experiment: v.V.PAUSED_SITS_REVIEWING_LABEL,
                                analytics: !1,
                                showVariationToUsers: {
                                    variation1: [v.vf.PaidUser]
                                },
                                excludeCombo: [v.vf.ExpiredUser],
                                control: o.createElement(o.Fragment, null),
                                variation1: o.createElement(o.Fragment, null, o.createElement(y.uB, {
                                    "data-testid": "ListingCard__review__label"
                                }, e("components_listingCard_reviewing")))
                            })) : null
                        }()), l === D.F.LARGE && o.createElement(y.Sb, {
                            variant: l,
                            "data-testid": "ListingCard__location"
                        }, (0, g.Te)(q, !0)), o.createElement(h.Z, {
                            animals: K
                        })),
                        at = T ? o.createElement(o.Fragment, null, rt) : o.createElement(y.jJ, {
                            to: it,
                            target: $
                        }, rt);
                    return o.createElement(y.OU, (0, i.Z)({
                        "data-testid": "ListingCard__container",
                        "aria-label": e("components_listingcard_arialabel", {
                            title: W
                        }),
                        variant: l,
                        onClick: function() {
                            k && k(r)
                        }
                    }, B), at, V ? o.createElement(y.qf, {
                        listingId: J,
                        t: e
                    }) : null)
                };
            F.defaultProps = {
                dateRange: {},
                variant: D.F.LARGE
            };
            var k = (0, l.Zh)()(F)
        }
    }
]);
//# sourceMappingURL=client.4622.v1.bf7a2457fc5d2faa15d7.js.map