"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1759], {
        41759: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return k
                }
            });
            var a = n(67294),
                r = n(91072),
                i = n(87462),
                o = n(44925),
                c = n(29163),
                l = n(17347),
                s = n(31121),
                u = n(74822),
                m = n(76),
                f = ["accentLink", "to", "tag", "breakpoint"],
                p = (0, c.iv)(["&:after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background-color:", ";}&:after{transition:transform 0.1s ease-out,background-color 0.1s ease-in-out;transform-origin:0 100%;transform:scaleY(0);}"], (function(t) {
                    return t.theme.palette.accent
                })),
                h = (0, c.ZP)(l.Z).attrs({
                    variant: l.Z.Variant.Button.CTA
                }).withConfig({
                    componentId: "sc-lmwara-0"
                })(["display:none;margin-left:", ";@media screen and (min-width:", "px){display:flex;}"], (function(t) {
                    return t.theme.spacing[1.5]
                }), (function(t) {
                    return t.breakpoint
                })),
                d = "active",
                g = (0, c.ZP)((function(t) {
                    t.accentLink;
                    var e = t.to,
                        n = t.tag,
                        r = (t.breakpoint, (0, o.Z)(t, f));
                    return "a" === n ? a.createElement(s.Z, (0, i.Z)({
                        href: e
                    }, r)) : a.createElement(m.OL, (0, i.Z)({
                        to: e
                    }, r))
                })).attrs({
                    activeClassName: d
                }).withConfig({
                    componentId: "sc-lmwara-1"
                })(["display:none;align-items:center;height:100%;text-decoration:none;padding:", ";color:", ";position:relative;&:hover{color:", ";}-webkit-tap-highlight-color:rgba(0,0,0,0);@media (hover:none){&:hover{color:", ";}}", ";&.", "{&:after{transform:scaleY(1);}}@media screen and (min-width:", "px){display:flex;}"], (function(t) {
                    var e = t.theme;
                    return "0 ".concat(e.spacing[1.5])
                }), (function(t) {
                    var e = t.theme;
                    return t.accentLink ? e.palette.accent : e.palette.text
                }), (function(t) {
                    return t.accentLink ? u.O.accent[500].modifiers.hover.value : u.O.greys[500].modifiers.hover.value
                }), (function(t) {
                    var e = t.theme;
                    return t.accentLink ? e.palette.accent : e.palette.text
                }), p, d, (function(t) {
                    return t.breakpoint
                })),
                k = (0, r.Zh)()((function(t) {
                    var e = t.cta,
                        n = t.accentLink,
                        r = t.menuItem,
                        i = t.breakpoint,
                        o = t.t,
                        c = t.onClick,
                        l = t.className,
                        s = t.text,
                        u = t.exact;
                    return e ? a.createElement(h, {
                        onClick: c,
                        breakpoint: i,
                        to: r.url,
                        className: l,
                        exact: u
                    }, s || o(r.i18nKey)) : a.createElement(g, {
                        onClick: c,
                        accentLink: n,
                        breakpoint: i,
                        to: r.url,
                        tag: r.tag,
                        className: l,
                        exact: u
                    }, s || o(r.i18nKey))
                }))
        }
    }
]);
//# sourceMappingURL=client.1759.v1.0dd04a0d007faab9ad6b.js.map