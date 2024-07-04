"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4793], {
        54793: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return u
                }
            });
            var a = t(67294),
                i = t(91072),
                r = t(29163),
                c = t(68978),
                o = t(73313),
                s = {
                    SMALL_FONT: "SMALL_FONT",
                    LARGE_FONT: "LARGE_FONT"
                },
                l = (0, r.ZP)(c.kuk).withConfig({
                    componentId: "sc-1ssa52-0"
                })(["display:inline-flex;vertical-align:middle;", ";"], (function(n) {
                    var e = n.theme;
                    return "\n      height: ".concat(e.spacing[1.5], ";\n      margin-right: ").concat(e.spacing[1], ";\n      width: ").concat(e.spacing[1.5], ";\n    ")
                })),
                d = r.ZP.div.withConfig({
                    componentId: "sc-1ssa52-1"
                })(["font-size:10px;line-height:2.4;display:flex;align-items:center;", ";", ";"], (function(n) {
                    var e = n.theme;
                    return "\n        background-color: ".concat(e.palette.primaryDarkest, ";\n        border-radius: ").concat(e.borderRadius.small, ";\n        color: ").concat(e.palette.white, ";\n        padding: 0 ").concat(e.spacing[1], ";\n\n\n    ")
                }), (function(n) {
                    var e = n.theme;
                    return n.variant === s.LARGE_FONT && (0, r.iv)(["@media screen and (min-width:", "px){", ";}"], e.screenSize.mediumTablet, o.tQ)
                })),
                m = function(n) {
                    var e = n.textString,
                        t = void 0 === e ? "components_badges_premium" : e,
                        r = n.className,
                        c = n.variant,
                        o = (0, i.$G)().t;
                    return a.createElement(d, {
                        className: r,
                        variant: c
                    }, a.createElement(l, {
                        palette: "yellow"
                    }), o(t))
                };
            m.defaultProps = {
                variant: s.SMALL_FONT
            }, m.Variant = s;
            var u = m
        }
    }
]);
//# sourceMappingURL=client.4793.v1.4cb3c491921c8320bf8a.js.map