import {
    h as l,
    j as a,
    e as x
} from "./index-CtGBfi03.js";
const p = o => {
    const {
        children: s,
        className: n,
        themeColor: c = !0,
        to: e,
        reloadDocument: m,
        href: i = "",
        ...r
    } = o, t = {
        className: l(c && "text-primary", "hover:underline", n)
    };
    return e ? a.jsx(x, {
        to: e,
        reloadDocument: m,
        ...t,
        ...r,
        children: s
    }) : a.jsx("a", {
        href: i,
        ...t,
        ...r,
        children: s
    })
};
export {
    p as A
};