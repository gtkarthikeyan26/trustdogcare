"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [211], {
        60330: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return Z
                }
            });
            var r = t(67294),
                i = t(87462),
                a = t(44925),
                o = t(29163),
                l = t(17347),
                u = t(66985),
                c = t(73313),
                m = t(82172),
                f = t(68978),
                s = t(31121),
                d = {
                    WHITE: "white",
                    GREY: "grey"
                },
                g = ["tag", "url"],
                p = (0, o.ZP)(m.JX).attrs((function(e) {
                    return {
                        span: 12,
                        mediumTablet: 6,
                        mediumDesktop: e.numberOfCards ? 12 / e.numberOfCards : void 0
                    }
                })).withConfig({
                    componentId: "sc-1lzer4l-0"
                })(["min-width:272px;max-width:400px;background-color:", ";border-radius:", ";padding:", ";@media screen and (min-width:", "px){padding:", ";}"], (function(e) {
                    var n = e.theme;
                    return e.variant === d.GREY ? n.palette.grey[200] : n.palette.white
                }), (function(e) {
                    return e.theme.borderRadius.regular
                }), (function(e) {
                    return e.theme.spacing[4]
                }), (function(e) {
                    return e.theme.screenSize.mediumTablet
                }), (function(e) {
                    return e.theme.spacing[6]
                })),
                h = (0, o.ZP)(c.H3).withConfig({
                    componentId: "sc-1lzer4l-1"
                })(["margin-top:0;margin-bottom:", ";"], (function(e) {
                    return e.theme.spacing[2]
                })),
                E = o.ZP.p.withConfig({
                    componentId: "sc-1lzer4l-2"
                })(["margin:0;margin-bottom:", ";"], (function(e) {
                    return e.theme.spacing[3]
                })),
                C = (0, o.ZP)((function(e) {
                    var n = e.tag,
                        t = e.url,
                        o = (0, a.Z)(e, g);
                    return n === u.Qy.A ? r.createElement(s.Z, (0, i.Z)({
                        href: t
                    }, o)) : r.createElement(l.Z, (0, i.Z)({
                        to: t
                    }, o))
                })).withConfig({
                    componentId: "sc-1lzer4l-3"
                })((function(e) {
                    var n = e.theme,
                        t = n.typography,
                        r = n.fontWeights,
                        i = n.palette;
                    return (0, o.iv)(["", ";font-weight:", ";color:", ";text-decoration:underline;padding:0;margin-top:auto;display:flex;align-items:center;"], t.p, r.bold, i.link)
                })),
                v = (0, o.ZP)(f.Ec8).withConfig({
                    componentId: "sc-1lzer4l-4"
                })(["margin-left:", ";& svg{fill:", ";}"], (function(e) {
                    return e.theme.spacing[1]
                }), (function(e) {
                    return e.theme.palette.link
                })),
                b = function(e) {
                    var n = e.informationHeading,
                        t = e.textBody,
                        i = e.linkURL,
                        a = e.linkTag,
                        o = e.linkText,
                        l = e.numberOfCards,
                        u = e.variant,
                        c = e.className,
                        m = e.onClick,
                        f = Boolean(o) && Boolean(i);
                    return r.createElement(p, {
                        numberOfCards: l,
                        className: c,
                        variant: u
                    }, r.createElement(h, null, n), r.createElement(E, null, t), f ? r.createElement(C, {
                        url: i,
                        tag: a,
                        onClick: m
                    }, o, r.createElement(v, {
                        size: "small"
                    })) : null)
                };
            b.defaultProps = {
                variant: d.GREY
            }, b.Variant = d;
            var Z = b
        },
        99764: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return l
                }
            });
            var r = t(67294),
                i = t(29163),
                a = t(82172),
                o = (0, i.ZP)(a.ff).attrs({
                    justify: a.ff.Justify.CENTER
                }).withConfig({
                    componentId: "sc-1453znx-0"
                })(["align-items:stretch;"]),
                l = function(e) {
                    var n = e.children;
                    return r.createElement(o, null, r.Children.map(n, (function(e) {
                        return r.cloneElement(e, {
                            numberOfCards: n.length
                        })
                    })))
                }
        }
    }
]);
//# sourceMappingURL=client.211.v1.7bfe654e9e5d3f13f140.js.map