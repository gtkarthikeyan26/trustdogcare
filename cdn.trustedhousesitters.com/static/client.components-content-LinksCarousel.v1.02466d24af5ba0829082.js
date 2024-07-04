"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5784], {
        21313: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var i = n(44925),
                r = n(67294),
                o = n(13734),
                c = n(29439),
                a = n(70131),
                m = n(29163),
                u = n(73313),
                l = m.ZP.a.withConfig({
                    componentId: "sc-g8h5xv-0"
                })(["width:100%;overflow:hidden;"]),
                g = m.ZP.div.withConfig({
                    componentId: "sc-g8h5xv-1"
                })(["padding-top:120%;contain:strict;position:relative;width:100%;border-radius:5px;@media (min-width:", "){padding-top:136px;}"], (function(e) {
                    var t = e.theme;
                    return "".concat(t.screenSize.mediumTablet, "px")
                })),
                d = m.ZP.div.withConfig({
                    componentId: "sc-g8h5xv-2"
                })(["position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;"]),
                h = m.ZP.div.withConfig({
                    componentId: "sc-g8h5xv-3"
                })(["html.no-js &{background-image:", ";}background-image:", ";background-size:cover;width:100%;height:100%;background-position:center center;background-repeat:no-repeat;"], (function(e) {
                    var t = e.image;
                    return "url(".concat(t, ")")
                }), (function(e) {
                    var t = e.image;
                    return e.inView ? "url(".concat(t, ")") : ""
                })),
                s = m.ZP.div.withConfig({
                    componentId: "sc-g8h5xv-4"
                })(["position:absolute;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:rgba(0,0,0,", ");"], (function(e) {
                    return e.theme.opacityOverlay.dark.active.strength
                })),
                p = (0, m.ZP)(u.Dr).withConfig({
                    componentId: "sc-g8h5xv-5"
                })(["color:", ";font-size:", ";line-height:1.2;font-weight:", ";text-align:center;padding:0 ", ";white-space:normal;@media (min-width:", "){padding:0 ", ";}"], (function(e) {
                    return e.theme.palette.white
                }), (function(e) {
                    return e.theme.fontSizes.medLarge
                }), (function(e) {
                    return e.theme.fontWeights.bold
                }), (function(e) {
                    return e.theme.spacing[2]
                }), (function(e) {
                    var t = e.theme;
                    return "".concat(t.screenSize.mediumTablet, "px")
                }), (function(e) {
                    return e.theme.spacing[3.5]
                })),
                f = function(e) {
                    var t = e.title,
                        n = e.link,
                        i = e.image,
                        o = (0, a.YD)({
                            triggerOnce: !0
                        }),
                        m = (0, c.Z)(o, 2),
                        u = m[0],
                        f = m[1];
                    return r.createElement(l, {
                        ref: u,
                        href: n
                    }, r.createElement(g, null, r.createElement(d, null, r.createElement(h, {
                        inView: f,
                        image: i
                    }, r.createElement(s, null, r.createElement(p, null, t))))))
                };
            f.defaultProps = {};
            var v = f,
                w = n(82172),
                k = m.ZP.div.withConfig({
                    componentId: "sc-1yem8ny-0"
                })(["width:100%;height:100%;"]),
                b = (0, m.ZP)(w.s_).withConfig({
                    componentId: "sc-1yem8ny-1"
                })(["margin-bottom:", ";@media screen and (min-width:", "px){margin-bottom:", ";}"], (function(e) {
                    return e.theme.spacing[8]
                }), (function(e) {
                    return e.theme.screenSize.mediumDesktop
                }), (function(e) {
                    return e.theme.spacing[12]
                })),
                E = ["compact", "links", "perPage"],
                P = function(e) {
                    var t = e.compact,
                        n = e.links,
                        c = e.perPage,
                        a = (0, i.Z)(e, E);
                    return r.createElement(b, null, r.createElement(o.Z, {
                        perPage: c
                    }, n.map((function(e, n) {
                        var i = "links-".concat(n);
                        return r.createElement(k, {
                            key: i,
                            compact: t,
                            onClick: function() {
                                return function(e) {
                                    a.onItemClick && a.onItemClick(e)
                                }(n)
                            }
                        }, r.createElement(v, {
                            link: e.url,
                            title: e.title,
                            image: e.image.url
                        }))
                    }))))
                };
            P.defaultProps = {
                links: [],
                perPage: {
                    mobile: 1.5,
                    largeHandset: 2.2,
                    mediumTablet: 3,
                    mediumDesktop: 4,
                    largeDesktop: 4
                }
            };
            var x = P
        }
    }
]);
//# sourceMappingURL=client.components-content-LinksCarousel.v1.02466d24af5ba0829082.js.map