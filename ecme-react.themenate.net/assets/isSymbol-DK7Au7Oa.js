import {
    F as a,
    I as m
} from "./index-CtGBfi03.js";
var e, o;

function n() {
    if (o) return e;
    o = 1;
    var s = a(),
        i = m(),
        t = "[object Symbol]";

    function b(r) {
        return typeof r == "symbol" || i(r) && s(r) == t
    }
    return e = b, e
}
export {
    n as r
};