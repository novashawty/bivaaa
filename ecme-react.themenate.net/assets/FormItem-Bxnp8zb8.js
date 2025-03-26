import {
    a8 as w,
    j as t,
    ao as a,
    a9 as c
} from "./index-CtGBfi03.js";
import {
    c as d
} from "./classNames-CPhZIjRD.js";
import {
    u as E,
    e as H
} from "./Button-CLJjlrWi.js";
import {
    A as W
} from "./index-DMB3HJwP.js";
import {
    m as Z
} from "./proxy-ClCKouzp.js";
const M = p => {
    const {
        asterisk: u,
        children: h,
        className: f,
        errorMessage: x,
        extra: i,
        htmlFor: y,
        invalid: l,
        label: s,
        labelClass: L,
        labelWidth: b,
        layout: I,
        ref: N,
        style: o,
        size: j
    } = p, e = E(), {
        controlSize: v
    } = w(), n = j || (e == null ? void 0 : e.size) || v, O = b || (e == null ? void 0 : e.labelWidth), r = I || (e == null ? void 0 : e.layout) || "vertical", T = () => {
        switch (r) {
            case a.HORIZONTAL:
                return s ? `${c[n].h} ${s&&"ltr:pr-2 rtl:pl-2"}` : "ltr:pr-2 rtl:pl-2";
            case a.VERTICAL:
                return "mb-2";
            case a.INLINE:
                return `${c[n].h} ${s&&"ltr:pr-2 rtl:pl-2"}`;
            default:
                return ""
        }
    }, A = d("form-item", r, f, l ? "invalid" : ""), S = d("form-label", s && T(), L), g = () => r === a.HORIZONTAL ? { ...o,
        minWidth: O
    } : { ...o
    }, F = {
        opacity: 1,
        marginTop: 3,
        bottom: -21
    }, m = {
        opacity: 0,
        marginTop: -10
    }, R = m;
    return t.jsx(H, {
        value: {
            invalid: l
        },
        children: t.jsxs("div", {
            ref: N,
            className: A,
            children: [t.jsxs("label", {
                htmlFor: y,
                className: S,
                style: g(),
                children: [u && t.jsx("span", {
                    className: "text-red-500 ltr:mr-1 rtl:ml-1",
                    children: "*"
                }), s, i && t.jsx("span", {
                    children: i
                }), s && r !== "vertical" && ":"]
            }), t.jsxs("div", {
                className: r === a.HORIZONTAL ? "w-full flex flex-col justify-center relative" : "",
                children: [h, t.jsx(W, {
                    mode: "wait",
                    children: l && t.jsx(Z.div, {
                        className: "form-explain",
                        initial: R,
                        animate: F,
                        exit: m,
                        transition: {
                            duration: .15,
                            type: "tween"
                        },
                        children: x
                    })
                })]
            })]
        })
    })
};
export {
    M as F
};