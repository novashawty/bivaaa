import {
    b as o,
    a8 as X,
    a9 as Y,
    z as N,
    j as a
} from "./index-CtGBfi03.js";
import {
    u as tt,
    c as et,
    b as st
} from "./Button-CLJjlrWi.js";
import {
    i as j
} from "./isNil-CcJuefmb.js";
const ot = f => {
    var I, z, v;
    const {
        asElement: b = "input",
        className: p,
        disabled: d,
        invalid: R,
        prefix: e,
        size: E,
        suffix: s,
        textArea: l,
        type: W = "text",
        ref: w,
        rows: A,
        style: m,
        unstyle: $ = !1,
        ...c
    } = f, [F, L] = o.useState(0), [P, T] = o.useState(0), {
        controlSize: O,
        direction: x
    } = X(), V = (I = tt()) == null ? void 0 : I.size, D = (z = et()) == null ? void 0 : z.invalid, Z = (v = st()) == null ? void 0 : v.size, h = E || Z || V || O, C = R || D, _ = t => typeof t > "u" || t === null ? "" : t;
    "value" in f && (c.value = _(f.value), delete c.defaultValue);
    const k = "input",
        q = `input-${h} ${Y[h].h}`,
        B = "focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary",
        H = N("input-wrapper", e || s ? p : ""),
        J = N(k, !l && q, !C && B, !e && !s ? p : "", d && "input-disabled", C && "input-invalid", l && "input-textarea"),
        i = o.useRef(null),
        u = o.useRef(null),
        K = () => {
            var n, G;
            if (!i.current && !u.current) return;
            const t = (n = i == null ? void 0 : i.current) == null ? void 0 : n.offsetWidth,
                r = (G = u == null ? void 0 : u.current) == null ? void 0 : G.offsetWidth;
            j(t) && j(r) || (t && L(t), r && T(r))
        };
    o.useEffect(() => {
        K()
    }, [e, s]);
    const S = t => .0625 * t,
        M = () => {
            const t = `${S(F)+1}rem`,
                r = `${S(P)+1}rem`,
                n = {};
            return x === "ltr" && (e && (n.paddingLeft = t), s && (n.paddingRight = r)), x === "rtl" && (e && (n.paddingRight = t), s && (n.paddingLeft = r)), n
        },
        g = {
            className: $ ? "" : J,
            disabled: d,
            type: W,
            ref: w,
            ...c
        },
        Q = a.jsx("textarea", {
            style: m,
            rows: A,
            ...g
        }),
        y = a.jsx(b, {
            style: { ...M(),
                ...m
            },
            ...g
        }),
        U = a.jsxs("span", {
            className: H,
            children: [e ? a.jsxs("div", {
                ref: i,
                className: "input-suffix-start",
                children: [" ", e, " "]
            }) : null, y, s ? a.jsx("div", {
                ref: u,
                className: "input-suffix-end",
                children: s
            }) : null]
        });
    return l ? Q : e || s ? U : y
};
export {
    ot as I
};