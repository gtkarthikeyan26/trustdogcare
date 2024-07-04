"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1969], {
        71969: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return p
                }
            });
            var a = n(87462),
                i = n(44925),
                l = n(67294),
                s = n(64046),
                c = n(10575),
                r = n(29163),
                m = n(73313),
                o = r.ZP.ul.withConfig({
                    componentId: "sc-1c8x3fd-0"
                })(["display:flex;padding:0;margin:0;"]),
                u = r.ZP.li.withConfig({
                    componentId: "sc-1c8x3fd-1"
                })(["display:flex;align-items:center;justify-content:flex-start;margin-right:", ";&:last-of-type{margin-right:0;}"], (function(t) {
                    return t.theme.spacing[2]
                })),
                f = (0, r.ZP)(m.Dr).attrs({
                    styleOf: "smallText"
                }).withConfig({
                    componentId: "sc-1c8x3fd-2"
                })(["padding-right:", ";color:", ";"], (function(t) {
                    return t.theme.spacing[.5]
                }), (function(t) {
                    return t.theme.palette.textLight
                })),
                d = ["animals", "animalCount", "className"],
                g = function(t) {
                    var e = t.animals,
                        n = t.animalCount,
                        r = void 0 === n ? 2 : n,
                        m = t.className,
                        g = (0, i.Z)(t, d),
                        p = [s.Ox.POULTRY, s.Ox.FARMANIMAL, s.Ox.FISH],
                        _ = e.slice(0, r).map((function(t) {
                            return l.createElement(u, {
                                key: "".concat(t.slug)
                            }, (e = t.slug, !p.some((function(t) {
                                return t === e
                            })) && t.count ? l.createElement(f, {
                                "data-testid": "Animal__count"
                            }, t.count) : null), l.createElement(c.Z, {
                                animal: t.slug,
                                size: "large",
                                palette: "text"
                            }));
                            var e
                        }));
                    return e.length > r && (_ = _.concat(l.createElement(u, {
                        key: "animals-more"
                    }, l.createElement(f, {
                        "data-testid": "plus-sign"
                    }, "+")))), l.createElement(o, (0, a.Z)({
                        "data-testid": "animals-list",
                        className: m
                    }, g), _)
                };
            g.defaultProps = {
                className: ""
            };
            var p = g
        }
    }
]);
//# sourceMappingURL=client.1969.v1.8f4ba56a940770f952ea.js.map