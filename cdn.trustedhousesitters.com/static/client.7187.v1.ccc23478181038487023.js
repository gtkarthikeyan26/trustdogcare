"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7187], {
        7187: function(e, r, t) {
            var a = t(67294),
                l = t(1648),
                o = t(90512),
                n = Object.defineProperty,
                m = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                c = Object.prototype.propertyIsEnumerable,
                f = (e, r, t) => r in e ? n(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[r] = t;
            const s = (0, a.forwardRef)(((e, r) => {
                var t = e,
                    {
                        color: n = "primary",
                        isHero: s = !1,
                        className: d = null
                    } = t,
                    p = ((e, r) => {
                        var t = {};
                        for (var a in e) i.call(e, a) && r.indexOf(a) < 0 && (t[a] = e[a]);
                        if (null != e && m)
                            for (var a of m(e)) r.indexOf(a) < 0 && c.call(e, a) && (t[a] = e[a]);
                        return t
                    })(t, ["color", "isHero", "className"]);
                const u = s ? "text-[2rem] md:text-[4.5rem] leading-[2.75rem] md:leading-[5.75rem]" : "text-[2rem] md:text-[2.5rem] leading-[2.75rem] md:leading-[3.5rem]",
                    O = (0, o.W)("font-bold", u, l.J[n], d);
                return a.createElement("h1", ((e, r) => {
                    for (var t in r || (r = {})) i.call(r, t) && f(e, t, r[t]);
                    if (m)
                        for (var t of m(r)) c.call(r, t) && f(e, t, r[t]);
                    return e
                })({
                    ref: r,
                    className: O
                }, p))
            }));
            s.displayName = "H1", r.Z = s
        }
    }
]);
//# sourceMappingURL=client.7187.v1.ccc23478181038487023.js.map