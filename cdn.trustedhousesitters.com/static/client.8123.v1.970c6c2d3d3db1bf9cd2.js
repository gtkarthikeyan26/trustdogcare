"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8123], {
        68123: function(n, r, t) {
            t.d(r, {
                CI: function() {
                    return I
                }
            });
            var e = t(72912),
                u = t(85184),
                _ = t(52053),
                i = t(46458),
                a = t(40166),
                v = t(84835),
                c = new Date("2024-04-19"),
                A = ["8997954"],
                D = function(n) {
                    var r = n.id;
                    return !!r && r % 2 === 0
                },
                f = function(n, r) {
                    var t = (0, e.JT)(n.joinDate, c),
                        u = (0, a.P7)(r),
                        _ = (0, a.RN)(r),
                        i = A.includes(n.id);
                    return t && u && _ && !i
                },
                I = function() {
                    var n = !0,
                        r = (0, i.v9)(_.jgj),
                        t = (0, i.v9)(_.tmM);
                    r && t || (n = !1);
                    var e = D(r) ? v.Ib.VARIATION1 : v.Ib.CONTROL,
                        a = (0, u.cr)({
                            name: u.R2.HIDE_FAVOURITES
                        }),
                        c = f(r, t);
                    return a && c || (n = !1), [n, e]
                };
            r.ZP = function() {
                var n = (0, i.v9)(_.jgj),
                    r = (0, i.v9)(_.tmM);
                if (!n || !r) return !1;
                var t = D(n),
                    e = (0, u.cr)({
                        name: u.R2.HIDE_FAVOURITES
                    }),
                    a = f(n, r);
                return t && e && a
            }
        }
    }
]);
//# sourceMappingURL=client.8123.v1.970c6c2d3d3db1bf9cd2.js.map