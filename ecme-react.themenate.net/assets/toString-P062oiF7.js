import {
    a4 as m,
    a5 as l
} from "./index-CtGBfi03.js";
import {
    r as q
} from "./isSymbol-DK7Au7Oa.js";
var u, y;

function d() {
    if (y) return u;
    y = 1;

    function t(r, i) {
        for (var e = -1, o = r == null ? 0 : r.length, a = Array(o); ++e < o;) a[e] = i(r[e], e, r);
        return a
    }
    return u = t, u
}
var s, b;

function T() {
    if (b) return s;
    b = 1;
    var t = m(),
        r = d(),
        i = l(),
        e = q(),
        o = t ? t.prototype : void 0,
        a = o ? o.toString : void 0;

    function S(n) {
        if (typeof n == "string") return n;
        if (i(n)) return r(n, S) + "";
        if (e(n)) return a ? a.call(n) : "";
        var g = n + "";
        return g == "0" && 1 / n == -1 / 0 ? "-0" : g
    }
    return s = S, s
}
var f, p;

function h() {
    if (p) return f;
    p = 1;
    var t = T();

    function r(i) {
        return i == null ? "" : t(i)
    }
    return f = r, f
}
export {
    h as r
};