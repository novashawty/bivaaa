import {
    b as E,
    j as t
} from "./index-CtGBfi03.js";
import {
    c as l
} from "./classNames-CPhZIjRD.js";
import {
    u as N,
    S as v
} from "./StatusIcon-DAnbvlRf.js";
import {
    o as A,
    p as H,
    q as I,
    r as P
} from "./index-Zi-xU0EH.js";
import {
    C as Y
} from "./CloseButton-DjoRqrlE.js";
import {
    m as D
} from "./proxy-ClCKouzp.js";
const C = "warning",
    R = {
        success: {
            backgroundColor: "bg-success-subtle",
            titleColor: "text-success",
            textColor: "text-success",
            iconColor: "text-success",
            icon: t.jsx(P, {})
        },
        info: {
            backgroundColor: "bg-info-subtle",
            titleColor: "text-info",
            textColor: "text-info",
            iconColor: "text-info",
            icon: t.jsx(I, {})
        },
        warning: {
            backgroundColor: "bg-warning-subtle",
            titleColor: "text-warning",
            textColor: "text-warning",
            iconColor: "text-warning",
            icon: t.jsx(H, {})
        },
        danger: {
            backgroundColor: "bg-error-subtle",
            titleColor: "text-error",
            textColor: "text-error",
            iconColor: "text-error",
            icon: t.jsx(A, {})
        }
    },
    S = ["success", "danger", "info", "warning"],
    X = a => {
        const {
            children: n,
            className: g,
            closable: i = !1,
            customClose: f,
            customIcon: p,
            duration: c = 3e3,
            title: e = null,
            onClose: s,
            ref: b,
            showIcon: h = !1,
            triggerByToast: u = !1,
            ...j
        } = a, x = (() => {
            const {
                type: o = C
            } = a;
            return S.includes(o) ? o : C
        })(), r = R[x], [m, d] = E.useState("show"), {
            clear: y
        } = N(s, c, c > 0), w = o => {
            d("hiding"), s == null || s(o), y(), u || setTimeout(() => {
                d("hide")
            }, 400)
        }, T = () => t.jsx("div", {
            className: "cursor-pointer",
            role: "presentation",
            onClick: o => w(o),
            children: f || t.jsx(Y, {
                resetDefaultClass: !0,
                className: "text-lg outline-hidden"
            })
        }), k = l("alert", r.backgroundColor, r.textColor, e ? "" : "font-semibold", i ? "justify-between" : "", i && !e ? "items-center" : "", !u && "rounded-xl", g);
        return m === "hide" ? null : t.jsxs(D.div, {
            ref: b,
            className: k,
            initial: {
                opacity: 1
            },
            animate: m === "hiding" ? "exit" : "animate",
            transition: {
                duration: .25,
                type: "tween"
            },
            variants: {
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                }
            },
            ...j,
            children: [t.jsxs("div", {
                className: l("flex gap-2", !e && n ? "items-center" : "", e && n ? "mt-0.5" : ""),
                children: [h && t.jsx(v, {
                    iconColor: r.iconColor,
                    custom: p,
                    type: x
                }), t.jsxs("div", {
                    children: [e ? t.jsx("div", {
                        className: l("font-semibold text-lg mb-1", r.titleColor),
                        children: e
                    }) : null, n]
                })]
            }), i ? T() : null]
        })
    };
export {
    X as A
};