"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2485], {
        42729: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return qt
                }
            });
            var i = n(67294),
                s = n(46458),
                r = n(74840),
                o = n(40166),
                a = n(4942),
                d = n(29439),
                c = n(15137),
                m = n(91072),
                l = n(29163),
                u = n(2305),
                p = n(90197),
                h = n(41759),
                f = n(95972),
                g = n(66985),
                b = n(47020),
                v = n(97202),
                y = n(99879),
                w = n(12570),
                S = n(41689),
                P = n(84835),
                O = n(68978),
                k = n(68123),
                E = n(85184),
                x = n(82078),
                C = n(82776),
                A = n(76),
                I = n(17347),
                j = n(6518),
                L = n(15671),
                Z = n(43144),
                N = n(97326),
                T = n(60136),
                z = n(82963),
                F = n(61120),
                R = n(6635),
                D = n(63461),
                _ = n(74822),
                V = n(64606),
                U = l.ZP.button.withConfig({
                    componentId: "sc-1o99sjh-0"
                })(["background:transparent;border:0;cursor:pointer;height:100%;display:flex;align-items:center;padding:0 16px;transition:background-color 150ms ease-in-out;&:hover{background-color:", ";}"], _.O.white.modifiers.hover.value),
                W = (0, l.ZP)(V.Z).withConfig({
                    componentId: "sc-1o99sjh-1"
                })(["margin-right:", ";"], (function(e) {
                    return e.theme.spacing[2]
                })),
                M = l.ZP.span.withConfig({
                    componentId: "sc-1o99sjh-2"
                })(["margin-right:", ";"], (function(e) {
                    return e.theme.spacing[2]
                })),
                B = l.ZP.div.withConfig({
                    componentId: "sc-1o99sjh-3"
                })(["z-index:", ";min-width:270px;display:", ";position:absolute;top:84px;right:20px;background:white;border:1px solid ", ";padding:", ";box-shadow:0px 3px 4px rgba(0,0,0,0.08);white-space:nowrap;&:after{position:absolute;right:0;top:-8px;content:'';width:0;height:0;border-style:solid;border-width:0 0 8px 13px;border-color:transparent transparent white transparent;}&:before{position:absolute;right:-1px;top:-10px;content:'';width:0;height:0;border-style:solid;border-width:0 0 10px 16px;border-color:transparent transparent ", " transparent;}"], p.W, (function(e) {
                    return e.menuOpen ? "inline-block" : "none"
                }), (function(e) {
                    return e.theme.palette.border
                }), (function(e) {
                    var t = e.theme;
                    return "0 ".concat(t.spacing[1.5])
                }), (function(e) {
                    return e.theme.palette.border
                })),
                H = l.ZP.div.withConfig({
                    componentId: "sc-1o99sjh-4"
                })(["position:relative;display:inline-block;"]),
                K = (0, l.ZP)(O.C26).attrs({
                    size: "medium"
                }).withConfig({
                    componentId: "sc-1o99sjh-5"
                })(["transform:rotateX(", ");"], (function(e) {
                    return e.open ? "180deg" : 0
                })),
                q = n(93433);

            function $(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var X = G(G({}, g.sd.help), {}, {
                    i18nKey: "navigation_helpShort"
                }),
                J = [{
                    items: [G(G({}, g.sd.checkout), {}, {
                        url: y._j.accounts.explorePlans(),
                        accentLink: !0
                    }), X, g.sd.forum, g.sd.settings]
                }],
                Q = [{
                    items: [g.sd.dashboard, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.forum, g.sd.settings]
                }],
                Y = [{
                    items: [g.sd.dashboard, g.sd.yourListing, g.sd.inbox, g.sd.favorites, g.sd.pastSitters, g.sd.forum, g.sd.settings]
                }],
                ee = [{
                    items: [g.sd.dashboard, g.sd.yourListing, g.sd.inbox, g.sd.favorites, g.sd.pastSitters, g.sd.forum, g.sd.settings]
                }],
                te = [{
                    items: [g.sd.dashboard, g.sd.yourListing, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.pastSitters, g.sd.forum, g.sd.settings]
                }],
                ne = [{
                    items: [g.sd.dashboard, g.sd.yourListing, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.pastSitters, g.sd.forum, g.sd.settings]
                }],
                ie = {
                    partial: {
                        housesitter: J,
                        homeowner: J,
                        combined: J
                    },
                    member: {
                        housesitter: {
                            basic: Q,
                            classic: Q,
                            premium: Q,
                            standard: Q
                        },
                        homeowner: {
                            basic: Y,
                            classic: Y,
                            premium: ee,
                            standard: ee
                        },
                        combined: {
                            basic: te,
                            classic: te,
                            premium: ne,
                            standard: ne
                        }
                    },
                    expired: {
                        housesitter: [{
                            items: [G(G({}, g.sd.renew), {}, {
                                accentLink: !0
                            })]
                        }, {
                            items: [X, g.sd.settings]
                        }],
                        homeowner: [{
                            items: [G(G({}, g.sd.renew), {}, {
                                accentLink: !0
                            })]
                        }, {
                            items: [X, g.sd.settings]
                        }],
                        combined: [{
                            items: [G(G({}, g.sd.renew), {}, {
                                accentLink: !0
                            })]
                        }, {
                            items: [X, g.sd.settings]
                        }]
                    }
                };

            function se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? se(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var oe = re(re({}, g.sd.help), {}, {
                    i18nKey: "navigation_helpShort"
                }),
                ae = [{
                    items: [re(re({}, g.sd.checkout), {}, {
                        url: y._j.accounts.explorePlans(),
                        accentLink: !0
                    }), oe, g.sd.forum, g.sd.settings]
                }],
                de = [{
                    items: [g.sd.dashboard, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.forum, g.sd.findASitter, g.sd.settings]
                }],
                ce = [{
                    items: [g.sd.dashboard, g.sd.yourListing, g.sd.inbox, g.sd.favorites, g.sd.pastSitters, g.sd.forum, g.sd.settings]
                }],
                me = [{
                    items: [g.sd.dashboard, g.sd.yourListing, g.sd.inbox, g.sd.favorites, g.sd.pastSitters, g.sd.forum, g.sd.settings]
                }],
                le = [{
                    items: [g.sd.dashboard, g.sd.yourListing, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.pastSitters, g.sd.forum, g.sd.settings]
                }],
                ue = [{
                    items: [g.sd.dashboard, g.sd.yourListing, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.pastSitters, g.sd.forum, g.sd.settings]
                }],
                pe = {
                    partial: {
                        housesitter: ae,
                        homeowner: ae,
                        combined: ae
                    },
                    member: {
                        housesitter: {
                            basic: de,
                            classic: de,
                            premium: de,
                            standard: de
                        },
                        homeowner: {
                            basic: ce,
                            classic: ce,
                            premium: me,
                            standard: me
                        },
                        combined: {
                            basic: le,
                            classic: le,
                            premium: ue,
                            standard: ue
                        }
                    },
                    expired: {
                        housesitter: [{
                            items: [re(re({}, g.sd.renew), {}, {
                                accentLink: !0
                            })]
                        }, {
                            items: [oe, g.sd.settings]
                        }],
                        homeowner: [{
                            items: [re(re({}, g.sd.renew), {}, {
                                accentLink: !0
                            })]
                        }, {
                            items: [oe, g.sd.settings]
                        }],
                        combined: [{
                            items: [re(re({}, g.sd.renew), {}, {
                                accentLink: !0
                            })]
                        }, {
                            items: [oe, g.sd.settings]
                        }]
                    }
                };

            function he(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? he(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ge = fe(fe({}, g.sd.help), {}, {
                    i18nKey: "navigation_helpShort"
                }),
                be = [{
                    items: [fe(fe({}, g.sd.checkout), {}, {
                        url: y._j.accounts.explorePlans(),
                        accentLink: !0
                    }), ge, g.sd.forum, g.sd.settings]
                }],
                ve = [{
                    items: [g.sd.dashboard, g.sd.yourProfile, g.sd.inbox, g.sd.pastSits, g.sd.forum, g.sd.findASitter, g.sd.settings]
                }],
                ye = [{
                    items: [g.sd.dashboard, g.sd.yourListing, g.sd.inbox, g.sd.favorites, g.sd.pastSitters, g.sd.forum, g.sd.settings]
                }],
                we = [{
                    items: [g.sd.dashboard, g.sd.yourListing, g.sd.inbox, g.sd.favorites, g.sd.pastSitters, g.sd.forum, g.sd.settings]
                }],
                Se = [{
                    items: [g.sd.dashboard, g.sd.yourListing, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.pastSitters, g.sd.forum, g.sd.settings]
                }],
                Pe = [{
                    items: [g.sd.dashboard, g.sd.yourListing, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.pastSitters, g.sd.forum, g.sd.settings]
                }],
                Oe = {
                    partial: {
                        housesitter: be,
                        homeowner: be,
                        combined: be
                    },
                    member: {
                        housesitter: {
                            basic: ve,
                            classic: ve,
                            premium: ve,
                            standard: ve
                        },
                        homeowner: {
                            basic: ye,
                            classic: ye,
                            premium: we,
                            standard: we
                        },
                        combined: {
                            basic: Se,
                            classic: Se,
                            premium: Pe,
                            standard: Pe
                        }
                    },
                    expired: {
                        housesitter: [{
                            items: [fe(fe({}, g.sd.renew), {}, {
                                accentLink: !0
                            })]
                        }, {
                            items: [ge, g.sd.settings]
                        }],
                        homeowner: [{
                            items: [fe(fe({}, g.sd.renew), {}, {
                                accentLink: !0
                            })]
                        }, {
                            items: [ge, g.sd.settings]
                        }],
                        combined: [{
                            items: [fe(fe({}, g.sd.renew), {}, {
                                accentLink: !0
                            })]
                        }, {
                            items: [ge, g.sd.settings]
                        }]
                    }
                },
                ke = n(87462),
                Ee = n(44925),
                xe = n(31121),
                Ce = n(44744),
                Ae = ["accentLink", "to", "showNewLabel", "children", "tag"],
                Ie = (0, l.iv)(["display:none;@media screen and (min-width:", "px){display:flex;}"], (function(e) {
                    return e.showAtBreakpoint
                })),
                je = (0, l.iv)(["@media screen and (min-width:", "px){display:none;}"], (function(e) {
                    return e.hideAtBreakpoint
                })),
                Le = l.ZP.div.withConfig({
                    componentId: "sc-7aaevn-0"
                })(["width:100%;display:flex;flex-direction:column;padding:", ";position:relative;&:after{content:'';position:absolute;left:12px;right:12px;bottom:0;height:1px;background-color:", ";}&:last-of-type:after{content:none;}", " ", " ", ";", ";"], (function(e) {
                    var t = e.theme;
                    return "".concat(t.spacing[1.5], " 0")
                }), (function(e) {
                    return e.theme.palette.border
                }), (function(e) {
                    return e.removeSectionPartition && "\n        &:after {\n            content: none;\n        }\n    "
                }), (function(e) {
                    return e.removePadding && "\n        padding: 0\n\n    "
                }), (function(e) {
                    return e.showAtBreakpoint ? Ie : null
                }), (function(e) {
                    return e.hideAtBreakpoint ? je : null
                })),
                Ze = "active",
                Ne = (0, l.iv)(["display:flex;justify-content:space-between;padding:", ";text-decoration:none;color:", ";font-weight:", ";border-radius:0;transition:background-color 100ms ease-in-out;&.", "{font-weight:", ";color:", ";}&:hover:enabled,&:hover{text-decoration:none;color:inherit;background-color:", ";}"], (function(e) {
                    return e.theme.spacing[1.5]
                }), (function(e) {
                    var t = e.theme;
                    return e.accentLink ? t.palette.accent : t.palette.text
                }), (function(e) {
                    return e.theme.fontWeights.normal
                }), Ze, (function(e) {
                    return e.theme.fontWeights.semiBold
                }), (function(e) {
                    return e.theme.palette.black
                }), _.O.white.modifiers.hover.value),
                Te = l.ZP.div.withConfig({
                    componentId: "sc-7aaevn-1"
                })(["display:flex;align-items:center;"]),
                ze = (0, l.ZP)((function(e) {
                    e.accentLink;
                    var t = e.to,
                        n = e.showNewLabel,
                        s = e.children,
                        r = e.tag,
                        o = (0, Ee.Z)(e, Ae);
                    return "a" === r ? i.createElement(xe.Z, (0, ke.Z)({
                        href: t
                    }, o), s, " ", n && i.createElement(Te, null, i.createElement(Ce.gl, null))) : "button" === r ? i.createElement(j.z, o, s) : i.createElement(A.OL, (0, ke.Z)({
                        exact: !0,
                        to: t
                    }, o), s)
                })).attrs({
                    activeClassName: Ze
                }).withConfig({
                    componentId: "sc-7aaevn-2"
                })(["", ";"], Ne),
                Fe = function(e) {
                    var t = e.url;
                    return window.location = t
                },
                Re = function(e) {
                    var t = e.menuItems,
                        n = e.onCloseHandler,
                        s = e.t,
                        r = e.isLoggedIn,
                        o = (0, i.useState)(!1),
                        a = (0, d.Z)(o, 2),
                        c = a[0],
                        m = a[1];
                    return i.createElement(i.Fragment, null, t.map((function(e) {
                        return i.createElement(Le, {
                            "data-testid": "menu",
                            removeSectionPartition: e.removeSectionPartition,
                            showAtBreakpoint: e.showAt,
                            hideAtBreakpoint: e.hideAt,
                            key: e.items[0].url
                        }, e.items.map((function(e) {
                            var t = e.tag,
                                r = e.url,
                                o = e.accentLink,
                                a = e.i18nKey,
                                d = e.showNewLabel,
                                c = e.launchRegwall,
                                l = e.trackLink;
                            return c ? i.createElement(ze, {
                                onClick: function() {
                                    return m(!0)
                                },
                                key: "regwall-button",
                                tag: "button",
                                accentLink: o,
                                showNewLabel: d,
                                variant: j.z.Variant.LINK,
                                "data-testid": "regwall-menu-link"
                            }, s(a)) : i.createElement(ze, {
                                onClick: function() {
                                    l && (0, u.j)(u.zW.LINKCLICK.create({
                                            description: l
                                        })),
                                        function(e) {
                                            var t = e.linkText;
                                            (0, u.j)(u.zW.BUTTONCLICK.create({
                                                description: "main nav dropdown",
                                                item: t
                                            })), n()
                                        }({
                                            linkText: s(a)
                                        })
                                },
                                key: r,
                                tag: t,
                                accentLink: o,
                                showNewLabel: d,
                                to: r,
                                "data-testid": "menu-link"
                            }, s(a))
                        })))
                    })), c && i.createElement(i.Fragment, null, r ? i.createElement(Fe, {
                        url: y._j.accounts.explorePlans()
                    }) : i.createElement(v.Z, {
                        openMethod: v.c.NAV_BAR_MENU,
                        messaging: b.Z.JOIN,
                        onCloseHandler: function() {
                            n(), m(!1)
                        },
                        isOpen: !0,
                        t: s
                    })))
                },
                De = n(42639),
                _e = (0, s.$j)(null, (function(e) {
                    return {
                        logout: function() {
                            e(De.k.create())
                        }
                    }
                }))((function(e) {
                    return (0, e.children)({
                        logout: e.logout
                    })
                })),
                Ve = function(e) {
                    var t = e.onClick,
                        n = e.t;
                    return i.createElement(Le, null, i.createElement(_e, null, (function(e) {
                        var s = e.logout;
                        return i.createElement(ze, {
                            onClick: function() {
                                t(), s()
                            },
                            tag: "button",
                            key: "logout",
                            variant: j.z.Variant.LINK
                        }, n("navigation_account_logOut"))
                    })))
                };

            function Ue(e) {
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
                    var n, i = (0, F.Z)(e);
                    if (t) {
                        var s = (0, F.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, s)
                    } else n = i.apply(this, arguments);
                    return (0, z.Z)(this, n)
                }
            }
            var We = "open",
                Me = "closed",
                Be = function(e) {
                    (0, T.Z)(n, e);
                    var t = Ue(n);

                    function n(e) {
                        var i;
                        return (0, L.Z)(this, n), i = t.call(this, e), (0, a.Z)((0, N.Z)(i), "menuItems", void 0), (0, a.Z)((0, N.Z)(i), "shared", void 0), (0, a.Z)((0, N.Z)(i), "globalClickEvent", void 0), (0, a.Z)((0, N.Z)(i), "globalFocusEvent", void 0), (0, a.Z)((0, N.Z)(i), "wrapperRef", void 0), (0, a.Z)((0, N.Z)(i), "state", {
                            menuState: Me
                        }), i.onClick = i.onClick.bind((0, N.Z)(i)), i.handleExternalEvent = i.handleExternalEvent.bind((0, N.Z)(i)), i.toggleMenu = i.toggleMenu.bind((0, N.Z)(i)), i.closeMenu = i.closeMenu.bind((0, N.Z)(i)), i
                    }
                    return (0, Z.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.globalClickEvent = (0, R.Oo)(document, "click", this.handleExternalEvent), this.globalFocusEvent = (0, R.Oo)(document, "focusin", this.handleExternalEvent)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.globalClickEvent.remove(), this.globalFocusEvent.remove()
                        }
                    }, {
                        key: "onClick",
                        value: function() {
                            this.toggleMenu()
                        }
                    }, {
                        key: "handleExternalEvent",
                        value: function(e) {
                            this.state.menuState === We && this.wrapperRef && !this.wrapperRef.contains(e.target) && this.closeMenu()
                        }
                    }, {
                        key: "toggleMenu",
                        value: function() {
                            this.setState((function(e) {
                                return {
                                    menuState: e.menuState === We ? Me : We
                                }
                            }))
                        }
                    }, {
                        key: "closeMenu",
                        value: function() {
                            this.setState({
                                menuState: Me
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.userName,
                                s = t.avatarPublicId,
                                r = t.className,
                                o = t.membershipTier,
                                a = t.membershipType,
                                d = t.membershipStatus,
                                c = t.t,
                                m = t.isLoggedIn,
                                l = t.isSitterHomepageVariation,
                                u = t.isSitterOnly,
                                h = t.isPaidMember,
                                f = t.shouldHideFavouritesTest,
                                b = t.showUpgradeCTA,
                                v = this.state.menuState,
                                y = ie;
                            l && u && h && (y = pe), f && (y = Oe);
                            var w = d === D.UP.MEMBER,
                                S = w ? y[d][a][o] : y[d][a];
                            return b && w && (S = function(e) {
                                var t, n = e.items,
                                    i = e.theme;
                                if (!Array.isArray(null === n || void 0 === n || null === (t = n[0]) || void 0 === t ? void 0 : t.items)) return n;
                                var s = (0, q.Z)(n);
                                return s.push({
                                    showAt: 0,
                                    hideAt: i.screenSize.largeDesktop,
                                    items: [g.sd.upgradeCTA]
                                }), s
                            }({
                                items: S,
                                theme: this.context
                            })), i.createElement(H, {
                                ref: function(t) {
                                    e.wrapperRef = t
                                },
                                className: r
                            }, i.createElement(U, {
                                "data-testid": "menu-button-wrapper",
                                onClick: this.onClick
                            }, i.createElement(W, {
                                publicId: s,
                                size: "small"
                            }), i.createElement(M, null, n), i.createElement(K, {
                                open: v === We
                            })), i.createElement(p.Z, {
                                layer: "topnav"
                            }, i.createElement(B, {
                                "data-testid": "account-menu-wrapper",
                                menuOpen: v === We
                            }, i.createElement(Re, {
                                onCloseHandler: this.closeMenu,
                                menuItems: S,
                                t: c,
                                "data-testid": "account-menu"
                            }), m ? i.createElement(Ve, {
                                onClick: this.onClick,
                                t: c
                            }) : null)))
                        }
                    }]), n
                }(i.Component);
            (0, a.Z)(Be, "contextType", l.Ni), (0, a.Z)(Be, "defaultProps", {
                menuState: Me
            });
            var He = Be,
                Ke = (0, l.iv)(["position:fixed;top:0;left:0;right:0;"]),
                qe = l.ZP.div.withConfig({
                    componentId: "sc-1ldq8y2-0"
                })(["", ";z-index:", ";background-color:", ";display:flex;justify-content:space-between;padding:0;padding-left:", ";height:3rem;", " @media screen and (min-width:", "){height:4rem;}@media (min-width:", "px){padding-right:", ";}@media (min-width:", "px){padding-right:", ";padding-left:", ";}"], (function(e) {
                    return e.menuOpen ? Ke : null
                }), p.W, (function(e) {
                    return e.theme.palette.white
                }), (function(e) {
                    return e.theme.spacing[2]
                }), (function(e) {
                    var t = e.theme;
                    return "border-bottom: 1px solid ".concat(t.palette.border, ";")
                }), (function(e) {
                    var t = e.theme;
                    return "".concat(t.screenSize.largeHandset, "px")
                }), (function(e) {
                    return e.theme.screenSize.smallDesktop
                }), (function(e) {
                    return e.theme.spacing[2]
                }), (function(e) {
                    return e.theme.screenSize.largeDesktop
                }), (function(e) {
                    return e.theme.spacing[3]
                }), (function(e) {
                    return e.theme.spacing[3]
                })),
                $e = l.ZP.div.withConfig({
                    componentId: "sc-1ldq8y2-1"
                })(["display:flex;align-items:center;flex-grow:1;align-self:flex-start;height:100%;"]),
                Ge = l.ZP.div.withConfig({
                    componentId: "sc-1ldq8y2-2"
                })(["display:flex;align-items:center;align-self:flex-end;flex-shrink:1;height:100%;"]),
                Xe = (0, l.ZP)(j.E).attrs({
                    variant: j.E.Variant.FLAT
                }).withConfig({
                    componentId: "sc-1ldq8y2-3"
                })(["padding:", ";@media screen and (min-width:", "px){display:none;}", ";"], (function(e) {
                    var t = e.theme;
                    return "".concat(t.spacing[1.5], " ").concat(t.spacing[2])
                }), (function(e) {
                    return e.theme.screenSize.smallDesktop
                }), (function(e) {
                    return e.isMobileHidden && (0, l.iv)(["display:none;"])
                })),
                Je = l.ZP.div.withConfig({
                    componentId: "sc-1ldq8y2-4"
                })(["z-index:", ";padding:", ";", ";position:fixed;top:0;left:0;right:0;bottom:0;overflow:auto;background-color:", ";@media screen and (min-width:", "px){padding:", ";}@media (min-width:", "px){display:none;}"], p.W, (function(e) {
                    var t = e.theme;
                    return "3rem ".concat(t.spacing[1.5])
                }), (function(e) {
                    return e.menuOpen ? null : "display: none"
                }), (function(e) {
                    return e.theme.palette.white
                }), (function(e) {
                    return e.theme.screenSize.largeHandset
                }), (function(e) {
                    var t = e.theme;
                    return "4rem ".concat(t.spacing[3])
                }), (function(e) {
                    return e.theme.screenSize.smallDesktop
                })),
                Qe = (0, l.ZP)(A.rU).withConfig({
                    componentId: "sc-1ldq8y2-5"
                })(["display:flex;align-items:center;line-height:1;"]),
                Ye = (0, l.ZP)(He).withConfig({
                    componentId: "sc-1ldq8y2-6"
                })(["height:100%;display:none;@media (min-width:", "px){display:inline-block;}"], (function(e) {
                    return e.theme.screenSize.smallDesktop
                })),
                et = (0, l.ZP)(h.Z).withConfig({
                    componentId: "sc-1ldq8y2-7"
                })((function(e) {
                    var t = e.theme,
                        n = t.screenSize,
                        i = t.fontSizes;
                    return (0, l.iv)(["font-size:0.875rem;@media screen and (min-width:", "px){font-size:", ";}"], n.smallDesktop, i.medium)
                })),
                tt = (0, l.iv)(["display:flex;margin-right:", ";margin-left:", ";padding:", ";font-size:0.875rem;@media screen and (min-width:", "px){padding:", ";font-size:", ";}@media screen and (min-width:", "px){margin-right:", ";}"], (function(e) {
                    return e.theme.spacing[.5]
                }), (function(e) {
                    return e.theme.spacing[1.5]
                }), (function(e) {
                    var t = e.theme;
                    return "".concat(t.spacing[1], " ").concat(t.spacing[1.5])
                }), (function(e) {
                    return e.theme.screenSize.smallDesktop
                }), (function(e) {
                    var t = e.theme;
                    return "".concat(t.spacing[1.5], " ").concat(t.spacing[3])
                }), (function(e) {
                    return e.theme.fontSizes.medium
                }), (function(e) {
                    return e.theme.screenSize.smallDesktop
                }), (function(e) {
                    return e.theme.spacing[0]
                })),
                nt = (0, l.ZP)(h.Z).withConfig({
                    componentId: "sc-1ldq8y2-8"
                })(["", ";"], tt),
                it = (0, l.ZP)(h.Z).withConfig({
                    componentId: "sc-1ldq8y2-9"
                })(["", ";display:none;@media only screen and (min-width:", "px){display:inline;}"], tt, (function(e) {
                    return e.theme.screenSize.smallDesktop
                })),
                st = (0, l.ZP)(h.Z).withConfig({
                    componentId: "sc-1ldq8y2-10"
                })(["", ";@media (min-width:", "px){display:none;}"], tt, (function(e) {
                    return e.theme.screenSize.smallDesktop
                })),
                rt = (0, l.ZP)(j.z).attrs({
                    variant: j.z.Variant.CTA
                }).withConfig({
                    componentId: "sc-1ldq8y2-11"
                })(["", ";", ";"], tt, (function(e) {
                    return e.isMobileHidden && (0, l.iv)(["display:none;@media (min-width:", "px){display:block;}"], (function(e) {
                        return e.theme.screenSize.smallDesktop
                    }))
                })),
                ot = (0, l.ZP)(I.Z).attrs({
                    variant: I.Z.Variant.Button.ALTERNATE_CTA
                }).withConfig({
                    componentId: "sc-1ldq8y2-12"
                })(["", ";height:", ";@media screen and (min-width:", "px){height:", ";}"], tt, (function(e) {
                    return e.theme.spacing[4.5]
                }), (function(e) {
                    return e.theme.screenSize.smallDesktop
                }), (function(e) {
                    return e.theme.spacing[5]
                })),
                at = (0, l.ZP)(I.Z).attrs({
                    variant: I.Z.Variant.Button.CTA
                }).withConfig({
                    componentId: "sc-1ldq8y2-13"
                })((function(e) {
                    var t = e.theme,
                        n = t.palette,
                        i = t.spacing,
                        s = t.screenSize;
                    return (0, l.iv)(["", ";background-color:", ";height:", ";&:hover{background-color:", " !important;}@media screen and (min-width:", "px){height:", ";}"], tt, n.primaryDarkest, i[4.5], n.primaryDark, s.smallDesktop, i[5])
                })),
                dt = (0, l.ZP)(O.RiR).withConfig({
                    componentId: "sc-1ldq8y2-14"
                })((function(e) {
                    var t = e.theme,
                        n = t.palette,
                        i = t.spacing,
                        s = t.screenSize;
                    return (0, l.iv)(["display:none;margin-right:", ";& svg{fill:", ";}@media screen and (min-width:", "px){display:flex;}"], i[2], n.white, s.largeDesktop)
                })),
                ct = (0, l.ZP)(O.XKU).withConfig({
                    componentId: "sc-1ldq8y2-15"
                })((function(e) {
                    var t = e.theme,
                        n = t.palette,
                        i = t.spacing,
                        s = t.screenSize;
                    return (0, l.iv)(["display:none;margin-right:", ";width:", ";height:", ";& svg{fill:", ";}@media screen and (min-width:", "px){display:flex;}"], i[1], i[3], i[3], n.yellow, s.largeDesktop)
                })),
                mt = l.ZP.div.withConfig({
                    componentId: "sc-d9e5az-0"
                })(["display:flex;flex-direction:column;align-items:center;justify-content:space-between;background-color:", ";"], (function(e) {
                    return e.theme.palette.white
                }));

            function lt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function ut(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? lt(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var pt = function(e) {
                var t = e.isAnonymous,
                    n = e.isOwnerFunnelExp,
                    i = e.theme,
                    s = e.isNoWizardNavVariation,
                    r = e.isNoWizardNavbarV2Variation,
                    o = e.showUpgradeCTA,
                    a = ut(ut({}, g.sd.help), {}, {
                        i18nKey: "navigation_helpShort"
                    });
                var d = o ? [g.sd.referFriend, g.sd.upgradeCTA] : [g.sd.referFriend],
                    c = {
                        showAt: 0,
                        hideAt: i.screenSize.smallTablet,
                        items: function() {
                            if (t) {
                                if (r) return [g.sd.searchSittersWithRegwall, g.sd.searchSitsWithRegwall];
                                if (!s) return [g.sd.findASitterWizard, g.sd.findAHouseSitWizard]
                            }
                            return n ? [g.sd.meetSitters, g.sd.findHouses] : [g.sd.searchSitters, g.sd.searchSits]
                        }()
                    },
                    m = [{
                        items: [g.sd.home]
                    }, {
                        items: [g.sd.checkout]
                    }, c, {
                        items: [g.sd.howItWorks, g.sd.trustAndSafety, g.sd.pricing]
                    }, {
                        items: [g.sd.blog, g.sd.aboutUs]
                    }, {
                        items: [a, g.sd.forum, g.sd.settings]
                    }],
                    l = [{
                        items: [g.sd.home]
                    }, c, {
                        items: [g.sd.dashboard, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.settings]
                    }, {
                        items: d
                    }, {
                        items: [g.sd.forum, a],
                        removeSectionPartition: !0
                    }],
                    u = [{
                        items: [g.sd.home]
                    }, c, {
                        items: [g.sd.dashboard, g.sd.yourListing, g.sd.inbox, g.sd.favorites, g.sd.pastSitters, g.sd.settings]
                    }, {
                        items: d
                    }, {
                        items: [g.sd.forum, a],
                        removeSectionPartition: !0
                    }],
                    p = [{
                        items: [g.sd.home]
                    }, c, {
                        items: [g.sd.dashboard, g.sd.yourListing, g.sd.inbox, g.sd.favorites, g.sd.pastSitters, g.sd.settings]
                    }, {
                        items: d
                    }, {
                        items: [g.sd.forum, a],
                        removeSectionPartition: !0
                    }],
                    h = [{
                        items: [g.sd.home]
                    }, c, {
                        items: [g.sd.dashboard, g.sd.yourListing, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.pastSitters, g.sd.settings]
                    }, {
                        items: d
                    }, {
                        items: [g.sd.forum, a],
                        removeSectionPartition: !0
                    }],
                    f = [{
                        items: [g.sd.home]
                    }, c, {
                        items: [g.sd.dashboard, g.sd.yourListing, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.pastSitters, g.sd.settings]
                    }, {
                        items: d
                    }, {
                        items: [g.sd.forum, a],
                        removeSectionPartition: !0
                    }],
                    b = {
                        partial: {
                            housesitter: m,
                            homeowner: m,
                            combined: m
                        },
                        member: {
                            housesitter: {
                                basic: l,
                                classic: l,
                                premium: l,
                                standard: l
                            },
                            homeowner: {
                                basic: u,
                                classic: u,
                                premium: p,
                                standard: p
                            },
                            combined: {
                                basic: h,
                                classic: h,
                                premium: f,
                                standard: f
                            }
                        },
                        expired: {
                            housesitter: [{
                                items: [g.sd.home]
                            }, {
                                items: [ut(ut({}, g.sd.renew), {}, {
                                    accentLink: !0
                                })]
                            }, c, {
                                items: [a, g.sd.forum, g.sd.settings]
                            }],
                            homeowner: [{
                                items: [g.sd.home]
                            }, {
                                items: [ut(ut({}, g.sd.renew), {}, {
                                    accentLink: !0
                                })]
                            }, c, {
                                items: [a, g.sd.forum, g.sd.settings]
                            }],
                            combined: [{
                                items: [g.sd.home]
                            }, {
                                items: [ut(ut({}, g.sd.renew), {}, {
                                    accentLink: !0
                                })]
                            }, c, {
                                items: [a, g.sd.forum, g.sd.settings]
                            }]
                        }
                    },
                    v = [{
                        items: [g.sd.home]
                    }, c, {
                        items: [g.sd.howItWorks, g.sd.trustAndSafety, g.sd.pricingPlans]
                    }, {
                        items: [g.sd.blog, g.sd.aboutUs]
                    }, {
                        items: [a, g.sd.forum, g.sd.settings]
                    }],
                    y = ut(ut({}, b), {}, {
                        partial: {
                            housesitter: v,
                            homeowner: v,
                            combined: v
                        }
                    }),
                    w = [{
                        items: [g.sd.home]
                    }, {
                        items: [ut(ut({}, g.sd.login), {}, {
                            accentLink: !0
                        })]
                    }, c, {
                        items: [g.sd.howItWorks, g.sd.trustAndSafety, g.sd.pricingPlans]
                    }, {
                        items: [g.sd.blog, g.sd.aboutUs]
                    }, {
                        items: [a, g.sd.forum]
                    }];
                return t ? w : y
            };

            function ht(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function ft(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ht(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ht(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function gt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function bt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? gt(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var vt = function(e) {
                var t = e.className,
                    n = e.isLoggedIn,
                    r = e.membershipTier,
                    o = e.membershipType,
                    a = e.membershipStatus,
                    c = e.onCloseHandler,
                    u = e.isOwnerFunnelExp,
                    p = e.isSitterHomepageVariation,
                    h = e.isSitterOnly,
                    f = e.isPaidMember,
                    b = e.isNoWizardNavVariation,
                    v = e.showUpgradeCTA,
                    y = (0, m.$G)().t,
                    S = (0, s.v9)(x.a),
                    O = (0, i.useContext)(l.Ni),
                    E = (0, w.S)(P.V.NO_WIZARD_NAVBAR_V2, {
                        hasPaidTestConflict: (0, C.N)(S)
                    }),
                    A = (0, d.Z)(E, 1)[0],
                    I = pt({
                        isAnonymous: !0,
                        theme: O,
                        isNoWizardNavVariation: b,
                        isNoWizardNavbarV2Variation: A === P.Ib.VARIATION1,
                        showUpgradeCTA: v
                    }),
                    j = (0, k.ZP)(),
                    L = pt({
                        theme: O,
                        showUpgradeCTA: v
                    });
                p && h && f && (L = function(e) {
                    var t = e.isAnonymous,
                        n = e.isOwnerFunnelExp,
                        i = e.theme,
                        s = ft(ft({}, g.sd.help), {}, {
                            i18nKey: "navigation_helpShort"
                        }),
                        r = {
                            showAt: 0,
                            hideAt: i.screenSize.smallTablet,
                            items: t ? [g.sd.findASitterWizard, g.sd.findAHouseSitWizard] : n ? [g.sd.meetSitters, g.sd.findHouses] : [g.sd.variation1SitterHomepage]
                        },
                        o = [{
                            items: [g.sd.home]
                        }, {
                            items: [g.sd.checkout]
                        }, r, {
                            items: [g.sd.howItWorks, g.sd.trustAndSafety, g.sd.pricing]
                        }, {
                            items: [g.sd.blog, g.sd.aboutUs]
                        }, {
                            items: [s, g.sd.forum, g.sd.settings]
                        }],
                        a = [r, {
                            items: [g.sd.dashboard, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.settings]
                        }, {
                            items: [g.sd.referFriend]
                        }, {
                            items: [g.sd.forum, g.sd.findASitter, s],
                            removeSectionPartition: !0
                        }],
                        d = [{
                            items: [g.sd.home]
                        }, r, {
                            items: [g.sd.dashboard, g.sd.yourListing, g.sd.inbox, g.sd.favorites, g.sd.pastSitters, g.sd.settings]
                        }, {
                            items: [g.sd.referFriend]
                        }, {
                            items: [g.sd.forum, s],
                            removeSectionPartition: !0
                        }],
                        c = [{
                            items: [g.sd.home]
                        }, r, {
                            items: [g.sd.dashboard, g.sd.yourListing, g.sd.inbox, g.sd.favorites, g.sd.pastSitters, g.sd.settings]
                        }, {
                            items: [g.sd.referFriend]
                        }, {
                            items: [g.sd.forum, s],
                            removeSectionPartition: !0
                        }],
                        m = [{
                            items: [g.sd.home]
                        }, r, {
                            items: [g.sd.dashboard, g.sd.yourListing, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.pastSitters, g.sd.settings]
                        }, {
                            items: [g.sd.referFriend]
                        }, {
                            items: [g.sd.forum, s],
                            removeSectionPartition: !0
                        }],
                        l = [{
                            items: [g.sd.home]
                        }, r, {
                            items: [g.sd.dashboard, g.sd.yourListing, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.pastSitters, g.sd.settings]
                        }, {
                            items: [g.sd.referFriend]
                        }, {
                            items: [g.sd.forum, s],
                            removeSectionPartition: !0
                        }],
                        u = {
                            partial: {
                                housesitter: o,
                                homeowner: o,
                                combined: o
                            },
                            member: {
                                housesitter: {
                                    basic: a,
                                    classic: a,
                                    premium: a,
                                    standard: a
                                },
                                homeowner: {
                                    basic: d,
                                    classic: d,
                                    premium: c,
                                    standard: c
                                },
                                combined: {
                                    basic: m,
                                    classic: m,
                                    premium: l,
                                    standard: l
                                }
                            },
                            expired: {
                                housesitter: [{
                                    items: [g.sd.home]
                                }, {
                                    items: [ft(ft({}, g.sd.renew), {}, {
                                        accentLink: !0
                                    })]
                                }, r, {
                                    items: [s, g.sd.forum, g.sd.settings]
                                }],
                                homeowner: [{
                                    items: [g.sd.home]
                                }, {
                                    items: [ft(ft({}, g.sd.renew), {}, {
                                        accentLink: !0
                                    })]
                                }, r, {
                                    items: [s, g.sd.forum, g.sd.settings]
                                }],
                                combined: [{
                                    items: [g.sd.home]
                                }, {
                                    items: [ft(ft({}, g.sd.renew), {}, {
                                        accentLink: !0
                                    })]
                                }, r, {
                                    items: [s, g.sd.forum, g.sd.settings]
                                }]
                            }
                        },
                        p = [{
                            items: [g.sd.home]
                        }, r, {
                            items: [g.sd.howItWorks, g.sd.trustAndSafety, g.sd.pricingPlans]
                        }, {
                            items: [g.sd.blog, g.sd.aboutUs]
                        }, {
                            items: [s, g.sd.forum, g.sd.settings]
                        }],
                        h = ft(ft({}, u), {}, {
                            partial: {
                                housesitter: p,
                                homeowner: p,
                                combined: p
                            }
                        }),
                        f = [{
                            items: [g.sd.home]
                        }, {
                            items: [ft(ft({}, g.sd.login), {}, {
                                accentLink: !0
                            })]
                        }, r, {
                            items: [g.sd.howItWorks, g.sd.trustAndSafety, g.sd.pricingPlans]
                        }, {
                            items: [g.sd.blog, g.sd.aboutUs]
                        }, {
                            items: [s, g.sd.forum]
                        }];
                    return t ? f : h
                }({
                    theme: O
                })), j && (L = function(e) {
                    var t = e.isAnonymous,
                        n = e.isOwnerFunnelExp,
                        i = e.theme,
                        s = e.showUpgradeCTA,
                        r = bt(bt({}, g.sd.help), {}, {
                            i18nKey: "navigation_helpShort"
                        }),
                        o = s ? [g.sd.referFriend, g.sd.upgradeCTA] : [g.sd.referFriend],
                        a = {
                            showAt: 0,
                            hideAt: i.screenSize.smallTablet,
                            items: t ? [g.sd.findASitterWizard, g.sd.findAHouseSitWizard] : n ? [g.sd.meetSitters, g.sd.findHouses] : [g.sd.variation1SitterHomepage]
                        },
                        d = [{
                            items: [g.sd.home]
                        }, {
                            items: [g.sd.checkout]
                        }, a, {
                            items: [g.sd.howItWorks, g.sd.trustAndSafety, g.sd.pricing]
                        }, {
                            items: [g.sd.blog, g.sd.aboutUs]
                        }, {
                            items: [r, g.sd.forum, g.sd.settings]
                        }],
                        c = [a, {
                            items: [g.sd.dashboard, g.sd.yourProfile, g.sd.inbox, g.sd.pastSits, g.sd.settings]
                        }, {
                            items: o
                        }, {
                            items: [g.sd.forum, g.sd.findASitter, r],
                            removeSectionPartition: !0
                        }],
                        m = [{
                            items: [g.sd.home]
                        }, a, {
                            items: [g.sd.dashboard, g.sd.yourListing, g.sd.inbox, g.sd.favorites, g.sd.pastSitters, g.sd.settings]
                        }, {
                            items: o
                        }, {
                            items: [g.sd.forum, r],
                            removeSectionPartition: !0
                        }],
                        l = [{
                            items: [g.sd.home]
                        }, a, {
                            items: [g.sd.dashboard, g.sd.yourListing, g.sd.inbox, g.sd.favorites, g.sd.pastSitters, g.sd.settings]
                        }, {
                            items: o
                        }, {
                            items: [g.sd.forum, r],
                            removeSectionPartition: !0
                        }],
                        u = [{
                            items: [g.sd.home]
                        }, a, {
                            items: [g.sd.dashboard, g.sd.yourListing, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.pastSitters, g.sd.settings]
                        }, {
                            items: o
                        }, {
                            items: [g.sd.forum, r],
                            removeSectionPartition: !0
                        }],
                        p = [{
                            items: [g.sd.home]
                        }, a, {
                            items: [g.sd.dashboard, g.sd.yourListing, g.sd.yourProfile, g.sd.inbox, g.sd.favorites, g.sd.pastSits, g.sd.pastSitters, g.sd.settings]
                        }, {
                            items: o
                        }, {
                            items: [g.sd.forum, r],
                            removeSectionPartition: !0
                        }],
                        h = {
                            partial: {
                                housesitter: d,
                                homeowner: d,
                                combined: d
                            },
                            member: {
                                housesitter: {
                                    basic: c,
                                    classic: c,
                                    premium: c,
                                    standard: c
                                },
                                homeowner: {
                                    basic: m,
                                    classic: m,
                                    premium: l,
                                    standard: l
                                },
                                combined: {
                                    basic: u,
                                    classic: u,
                                    premium: p,
                                    standard: p
                                }
                            },
                            expired: {
                                housesitter: [{
                                    items: [g.sd.home]
                                }, {
                                    items: [bt(bt({}, g.sd.renew), {}, {
                                        accentLink: !0
                                    })]
                                }, a, {
                                    items: [r, g.sd.forum, g.sd.settings]
                                }],
                                homeowner: [{
                                    items: [g.sd.home]
                                }, {
                                    items: [bt(bt({}, g.sd.renew), {}, {
                                        accentLink: !0
                                    })]
                                }, a, {
                                    items: [r, g.sd.forum, g.sd.settings]
                                }],
                                combined: [{
                                    items: [g.sd.home]
                                }, {
                                    items: [bt(bt({}, g.sd.renew), {}, {
                                        accentLink: !0
                                    })]
                                }, a, {
                                    items: [r, g.sd.forum, g.sd.settings]
                                }]
                            }
                        },
                        f = [{
                            items: [g.sd.home]
                        }, a, {
                            items: [g.sd.howItWorks, g.sd.trustAndSafety, g.sd.pricingPlans]
                        }, {
                            items: [g.sd.blog, g.sd.aboutUs]
                        }, {
                            items: [r, g.sd.forum, g.sd.settings]
                        }],
                        b = bt(bt({}, h), {}, {
                            partial: {
                                housesitter: f,
                                homeowner: f,
                                combined: f
                            }
                        }),
                        v = [{
                            items: [g.sd.home]
                        }, {
                            items: [bt(bt({}, g.sd.login), {}, {
                                accentLink: !0
                            })]
                        }, a, {
                            items: [g.sd.howItWorks, g.sd.trustAndSafety, g.sd.pricingPlans]
                        }, {
                            items: [g.sd.blog, g.sd.aboutUs]
                        }, {
                            items: [r, g.sd.forum]
                        }];
                    return t ? v : b
                }({
                    theme: O,
                    showUpgradeCTA: v
                }));
                var Z = [];
                if (u) {
                    var N = pt({
                        isAnonymous: !1,
                        isOwnerFunnelExp: u,
                        theme: O
                    });
                    Z = n ? a === D.UP.MEMBER ? N[a][o][r] : N[a][o] : pt({
                        isAnonymous: !0,
                        isOwnerFunnelExp: u,
                        theme: O
                    })
                } else Z = n ? a === D.UP.MEMBER ? L[a][o][r] : L[a][o] : I;
                return i.createElement(mt, {
                    className: t
                }, i.createElement(Re, {
                    onCloseHandler: c,
                    t: y,
                    menuItems: Z,
                    isLoggedIn: n,
                    "data-testid": "mobile-menu"
                }), n ? i.createElement(Ve, {
                    onClick: c,
                    t: y
                }) : null)
            };
            vt.defaultProps = {};
            var yt = vt,
                wt = n(94696),
                St = n(17734),
                Pt = l.ZP.div.withConfig({
                    componentId: "sc-1k904hw-0"
                })((function(e) {
                    var t = e.theme.spacing;
                    return (0, l.iv)(["margin-right:", ";"], t[2])
                })),
                Ot = (0, l.ZP)(Pt).withConfig({
                    componentId: "sc-1k904hw-1"
                })((function(e) {
                    var t = e.theme.screenSize;
                    return (0, l.iv)(["display:block;@media only screen and (min-width:", "px){display:none;}& svg{width:auto;height:24px;@media only screen and (min-width:", "px){height:28px;}@media only screen and (min-width:", "px){width:unset;height:unset;}}"], t.largeDesktop, t.largeHandset, t.smallTablet)
                })),
                kt = (0, l.ZP)(Pt).withConfig({
                    componentId: "sc-1k904hw-2"
                })((function(e) {
                    var t = e.theme.screenSize;
                    return (0, l.iv)(["display:none;@media only screen and (min-width:", "px){display:block;}"], t.largeDesktop)
                })),
                Et = function() {
                    return i.createElement(i.Fragment, null, i.createElement(Ot, null, i.createElement(wt.uq, null)), i.createElement(kt, null, i.createElement(St.uq, null)))
                },
                xt = n(12592),
                Ct = n(71450),
                At = function(e) {
                    var t = e.membershipTier,
                        n = e.membershipType,
                        s = e.referAFriendClicked,
                        r = e.upgradeButtonCLicked,
                        o = (0, m.$G)().t;
                    return t === S.e.PREMIUM && n === D.$c.COMBINED ? i.createElement(ot, {
                        onClick: s,
                        to: y._j.accounts.referAFriend()
                    }, i.createElement(dt, null), o(g.sd.referAFriend.i18nKey)) : i.createElement(at, {
                        onClick: r,
                        to: "".concat(y._j.accounts.explorePlans()).concat(t === S.e.PREMIUM ? "?membershipType=".concat(D.$c.COMBINED) : "")
                    }, i.createElement(ct, null), o(g.sd.upgradeCTA.i18nKey))
                },
                It = function() {
                    var e = (0, m.$G)().t;
                    return i.createElement(xt.Z, {
                        className: "ml-4 h-8 min-[480px]:h-12",
                        spanClassName: "text-sm min-[480px]:text-md",
                        isButtonStyle: !0,
                        variant: "accent",
                        leftIcon: i.createElement(Ct.Z, {
                            className: "hidden size-5 min-[480px]:block"
                        }),
                        to: y._j.accounts.referAFriend(),
                        onClick: function() {
                            (0, u.j)(u.zW.BUTTONCLICK.create({
                                description: "RAF Nav Bar CTA 2"
                            }))
                        }
                    }, e("components_navbar_2_free_months"))
                },
                jt = function(e) {
                    var t = e.membershipTier,
                        n = e.membershipType,
                        s = e.referAFriendClicked,
                        r = e.upgradeButtonCLicked;
                    return i.createElement(P.ZP, {
                        experiment: P.V.NAVBAR_RAF,
                        analytics: !1,
                        control: i.createElement(At, {
                            membershipTier: t,
                            membershipType: n,
                            referAFriendClicked: s,
                            upgradeButtonCLicked: r
                        }),
                        variation1: i.createElement(It, null)
                    })
                };

            function Lt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function Zt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Lt(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Nt = "Navbar_navbar",
                Tt = "nav-link-find-a-sitter",
                zt = "nav-link-find-a-sit",
                Ft = "nav-link-refer-a-friend",
                Rt = "nav-link-upgrade",
                Dt = "partial-join-now",
                _t = "expired-member-renew",
                Vt = "regwall-dialog",
                Ut = function(e) {
                    return e.membershipStatus === D.UP.MEMBER ? i.createElement(c.Redirect, {
                        to: y._j.accounts.profile.dashboard()
                    }) : i.createElement(c.Redirect, {
                        to: y._j.accounts.explorePlans()
                    })
                },
                Wt = function() {
                    (0, u.j)(u.zW.BUTTONCLICK.create({
                        description: "How it works nav bar link"
                    }))
                },
                Mt = (0, c.withRouter)((function(e) {
                    var t = e.isLoggedIn,
                        n = e.avatarPublicId,
                        r = e.userName,
                        o = e.membershipStatus,
                        a = e.membershipTier,
                        c = e.membershipType,
                        A = e.isOnFreeTrial,
                        I = e.isOwnerFunnelExp,
                        j = e.sitterHomepageVariation,
                        L = e.isSitterOnly,
                        Z = e.isPaidMember,
                        N = e.shouldFireAnalyticsForSitterHomepage,
                        T = e.options,
                        z = void 0 === T ? {} : T,
                        F = e.isNoWizardNavVariation,
                        R = e.isNavbarRafVariation,
                        _ = (0, m.$G)().t,
                        V = (0, s.v9)(x.a),
                        U = (0, i.useState)(!1),
                        W = (0, d.Z)(U, 2),
                        M = W[0],
                        B = W[1],
                        H = (0, i.useState)(!1),
                        K = (0, d.Z)(H, 2),
                        q = K[0],
                        $ = K[1],
                        G = !(a === S.e.PREMIUM && c === D.$c.COMBINED),
                        X = (0, i.useState)(!1),
                        J = (0, d.Z)(X, 2),
                        Q = J[0],
                        Y = J[1],
                        ee = (0, k.ZP)(),
                        te = (0, k.CI)(),
                        ne = (0, d.Z)(te, 2),
                        ie = ne[0],
                        se = ne[1],
                        re = (0, i.useState)(!1),
                        oe = (0, d.Z)(re, 2),
                        ae = oe[0],
                        de = oe[1],
                        ce = (0, w.S)(P.V.NO_WIZARD_NAVBAR_V2, {
                            hasPaidTestConflict: (0, C.N)(V)
                        }),
                        me = (0, d.Z)(ce, 1)[0];
                    (0, i.useEffect)((function() {
                        L && Z && N && !Q && ((0, P.KR)(P.V.SITTER_HOMEPAGE.name, j, "sitter homepage test analytics"), Y(!0)), !ae && ie && ((0, P.KR)(E.R2.HIDE_FAVOURITES, se, "hide favourites test analytics"), de(!0))
                    }), [N, j, Q, Z, L, ae, ie, se]);
                    var le = j === P.Ib.VARIATION1,
                        ue = le && L && o === D.UP.MEMBER,
                        pe = R && G,
                        he = function() {
                            return B(!1)
                        },
                        fe = function() {
                            (0, u.j)(u.zW.BUTTONCLICK.create({
                                description: "Upgrade Nav Bar CTA"
                            }))
                        },
                        ge = (0, i.useContext)(l.Ni),
                        be = function() {
                            return i.createElement(i.Fragment, null, i.createElement(it, {
                                cta: !0,
                                menuItem: Zt(Zt({}, g.sd.joinNowVariation), {}, {
                                    url: y._j.accounts.explorePlans()
                                }),
                                "data-testid": Dt
                            }), i.createElement(st, {
                                cta: !0,
                                menuItem: Zt(Zt({}, g.sd.joinNowVariationShort), {}, {
                                    url: y._j.accounts.explorePlans()
                                }),
                                "data-testid": Dt
                            }))
                        };
                    return i.createElement(p.Z, {
                        layer: "topnav"
                    }, i.createElement(i.Fragment, null, i.createElement(Je, {
                        menuOpen: M
                    }, i.createElement(yt, {
                        onCloseHandler: he,
                        t: _,
                        isSitterOnly: L,
                        isPaidMember: Z,
                        isLoggedIn: t,
                        avatarPublicId: n,
                        userName: r,
                        membershipStatus: o,
                        membershipTier: a,
                        membershipType: c,
                        isOwnerFunnelExp: I,
                        isSitterHomepageVariation: le,
                        isNoWizardNavVariation: F,
                        showUpgradeCTA: pe
                    })), i.createElement("nav", {
                        "data-testid": Nt
                    }, i.createElement(P.ZP, {
                        experiment: P.V.NO_WIZARD_NAV,
                        control: i.createElement(i.Fragment, null),
                        excludeCombo: [P.vf.PaidUser, P.vf.ExpiredUser, P.vf.PartialUser],
                        variation1: i.createElement(i.Fragment, null)
                    }), i.createElement(P.ZP, {
                        experiment: P.V.NO_WIZARD_NAVBAR_V2,
                        control: i.createElement(i.Fragment, null),
                        excludeCombo: [P.vf.PaidUser, P.vf.ExpiredUser, P.vf.PartialUser],
                        variation1: i.createElement(i.Fragment, null),
                        hasPaidTestConflict: (0, C.N)(V)
                    }), i.createElement(P.ZP, {
                        experiment: P.V.NAVBAR_RAF,
                        excludeCombo: [P.vf.ExpiredUser, P.vf.PartialUser, P.vf.AnonymousUser],
                        control: i.createElement(i.Fragment, null),
                        variation1: i.createElement(i.Fragment, null)
                    }), i.createElement(qe, {
                        menuOpen: M
                    }, i.createElement($e, {
                        name: "navbar"
                    }, z.disableLogoLink ? i.createElement(Et, null) : i.createElement(Qe, {
                        onClick: function() {
                            (0, u.j)(u.zW.LINKCLICK.create({
                                description: "THS Logo nav bar"
                            })), he()
                        },
                        to: "/"
                    }, i.createElement(Et, null)), !z.hideLeftSide && !ue && i.createElement(i.Fragment, null, i.createElement(et, {
                        onClick: function() {
                            (0, u.j)(u.zW.LINKCLICK.create({
                                description: "Find a Pet Sitter nav bar link"
                            })), he()
                        },
                        breakpoint: ge.screenSize.smallTablet,
                        menuItem: function() {
                            if (!t) {
                                if (me === P.Ib.VARIATION1) return g.sd.searchSittersWithRegwall;
                                if (!F) return g.sd.findASitterWizard
                            }
                            return g.sd.searchSitters
                        }(),
                        "data-testid": Tt
                    }), i.createElement(et, {
                        onClick: function() {
                            (0, u.j)(u.zW.LINKCLICK.create({
                                description: "Find a House Sit Nav bar link"
                            })), he()
                        },
                        breakpoint: ge.screenSize.smallTablet,
                        menuItem: function() {
                            if (!t) {
                                if (me === P.Ib.VARIATION1) return g.sd.searchSitsWithRegwall;
                                if (!F) return g.sd.findAHouseSitWizard
                            }
                            return g.sd.searchSits
                        }(),
                        "data-testid": zt
                    }))), i.createElement(Ge, {
                        name: "navbar"
                    }, !z.hideRightSide && i.createElement(i.Fragment, null, o === D.UP.MEMBER ? i.createElement(i.Fragment, null, G && i.createElement(P.ZP, {
                        experiment: P.V.NAVBAR_RAF,
                        analytics: !1,
                        control: i.createElement(h.Z, {
                            breakpoint: ge.screenSize.smallDesktop,
                            menuItem: g.sd.referFriend,
                            onClick: function() {
                                (0, u.j)(u.zW.BUTTONCLICK.create({
                                    description: "RAF Nav Bar link CTA"
                                }))
                            },
                            "data-testid": Ft
                        }),
                        variation1: i.createElement(h.Z, {
                            breakpoint: ge.screenSize.largeDesktop,
                            menuItem: g.sd.upgradeCTA,
                            onClick: fe,
                            "data-testid": Rt
                        })
                    })) : i.createElement(h.Z, {
                        breakpoint: ge.screenSize.smallDesktop,
                        menuItem: g.sd.howItWorks,
                        onClick: Wt
                    }), i.createElement(h.Z, {
                        breakpoint: ge.screenSize.smallDesktop,
                        menuItem: Zt(Zt({}, g.sd.help), {}, {
                            i18nKey: "navigation_helpShort"
                        }),
                        onClick: function() {
                            (0, u.j)(u.zW.BUTTONCLICK.create({
                                description: "Help Nav Bar link CTA"
                            }))
                        }
                    })), t ? i.createElement(i.Fragment, null, i.createElement(Ye, {
                        avatarPublicId: n,
                        userName: r,
                        isSitterOnly: L,
                        isPaidMember: Z,
                        membershipTier: a,
                        membershipType: c,
                        membershipStatus: o,
                        isLoggedIn: t,
                        isSitterHomepageVariation: le,
                        t: _,
                        shouldHideFavouritesTest: ee,
                        showUpgradeCTA: pe
                    }), o === D.UP.PARTIAL && i.createElement(i.Fragment, null, c === D.$c.OWNER ? i.createElement(P.ZP, {
                        experiment: P.V.FREE_TRIAL_OWNER_V2,
                        control: i.createElement(be, null),
                        excludeUTMSources: [P.Du.CJ, P.Du.IMPACT],
                        variation1: i.createElement(nt, {
                            cta: !0,
                            menuItem: Zt({}, g.sd.partialOwnerStartFreeTrial),
                            "data-testid": Dt
                        })
                    }) : i.createElement(be, null)), o === D.UP.MEMBER && (A ? null : i.createElement(jt, {
                        membershipTier: a,
                        membershipType: c,
                        referAFriendClicked: function() {
                            (0, u.j)(u.zW.BUTTONCLICK.create({
                                description: "RAF Nav Bar CTA"
                            }))
                        },
                        upgradeButtonCLicked: fe
                    })), o === D.UP.EXPIRED && i.createElement(h.Z, {
                        cta: !0,
                        breakpoint: ge.screenSize.smallDesktop,
                        menuItem: Zt(Zt({}, g.sd.renew), {}, {
                            i18nKey: "navigation_account_renewShort"
                        }),
                        "data-testid": _t
                    })) : i.createElement(i.Fragment, null, i.createElement(f.Z, null, (function(e) {
                        return i.createElement(h.Z, {
                            onClick: function() {
                                (0, u.j)(u.zW.BUTTONCLICK.create({
                                    description: "Log in nav bar link"
                                })), e()
                            },
                            accentLink: !0,
                            breakpoint: ge.screenSize.smallDesktop,
                            menuItem: g.sd.login
                        })
                    })), i.createElement(rt, {
                        isMobileHidden: z.hideRightSide,
                        onClick: function() {
                            return $(!0)
                        }
                    }, _(g.sd.joinNow.i18nKey))), i.createElement(Xe, {
                        "aria-label": _("components_navbar_menuButtonAriaLabel"),
                        onClick: function() {
                            return B(!M)
                        },
                        icon: M ? O.bMz : O.dcc,
                        iconProps: {
                            size: "large",
                            title: _("components_navbar_menuButtonAriaLabel")
                        },
                        isMobileHidden: z.hideRightSide
                    })))), q && i.createElement(i.Fragment, null, t ? i.createElement(Ut, {
                        membershipStatus: o
                    }) : i.createElement(v.Z, {
                        openMethod: v.c.NAV_BAR,
                        messaging: b.Z.JOIN,
                        onCloseHandler: function() {
                            return $(!1)
                        },
                        isOpen: !0,
                        t: _,
                        "data-testid": Vt,
                        membershipType: c
                    }))))
                })),
                Bt = n(49148),
                Ht = n(9629),
                Kt = function(e) {
                    var t = e.isLoggedIn,
                        n = e.account,
                        s = e.promoCode,
                        r = e.isOwnerFunnelExp,
                        a = e.sitterHomepageVariation,
                        d = e.isPaidMember,
                        c = e.isSitterOnly,
                        m = e.shouldFireAnalyticsForSitterHomepage,
                        l = e.options,
                        u = void 0 === l ? {} : l,
                        p = e.isNoWizardNavVariation,
                        h = e.isNavbarRafVariation,
                        f = n.details.profilePhoto ? n.details.profilePhoto.publicId : null;
                    return i.createElement(Mt, {
                        isLoggedIn: t,
                        membershipStatus: t ? (0, o.DG)(n.membershipPlan) : null,
                        membershipTier: t ? n.membershipPlan.tier : null,
                        membershipType: t ? n.membershipPlan.membershipType : null,
                        avatarPublicId: t ? f : null,
                        isOnFreeTrial: t ? n.membershipPlan.isOnFreeTrial : null,
                        userName: t ? n.settings.firstName : null,
                        promoCode: s,
                        isOwnerFunnelExp: r,
                        sitterHomepageVariation: a,
                        isSitterOnly: c,
                        isPaidMember: d,
                        options: u,
                        shouldFireAnalyticsForSitterHomepage: m,
                        isNoWizardNavVariation: p,
                        isNavbarRafVariation: h
                    })
                };
            Kt.defaultProps = {
                promoCode: null,
                isOwnerFunnelExp: !1,
                sitterHomepageVariation: null,
                shouldFireAnalyticsForSitterHomepage: !1,
                options: {}
            };
            var qt = (0, s.$j)((function(e) {
                var t = (0, Ht.a)(e, {
                        experiment: P.V.SITTER_HOMEPAGE
                    }),
                    n = t.variation,
                    i = t.enabled,
                    s = t.fullRollout,
                    a = (0, r.tm)(e),
                    d = i && !s,
                    c = (0, Ht.a)(e, {
                        experiment: P.V.NO_WIZARD_NAV,
                        excludeCombo: [P.vf.PaidUser, P.vf.ExpiredUser, P.vf.PartialUser]
                    }).variation === P.Ib.VARIATION1,
                    m = (0, Ht.a)(e, {
                        experiment: P.V.NAVBAR_RAF,
                        excludeCombo: [P.vf.ExpiredUser, P.vf.PartialUser, P.vf.AnonymousUser]
                    }).variation === P.Ib.VARIATION1;
                return {
                    isLoggedIn: (0, Bt.M7)(e),
                    account: (0, r.D0)(e),
                    promoCode: (0, Bt.Xv)(e),
                    isSitterOnly: (0, o.P7)(a),
                    isPaidMember: (0, o.TU)(a),
                    router: e.router,
                    sitterHomepageVariation: n,
                    shouldFireAnalyticsForSitterHomepage: d,
                    isNoWizardNavVariation: c,
                    isNavbarRafVariation: m
                }
            }), {})(Kt)
        }
    }
]);
//# sourceMappingURL=client.containers-Nav.v1.f87ff7a870b56cf6ef04.js.map