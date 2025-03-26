import {
    b as l,
    a8 as W,
    j as r,
    a9 as o,
    aa as g,
    Q as I
} from "./index-CtGBfi03.js";
import {
    c as u
} from "./classNames-CPhZIjRD.js";
const f = l.createContext(null),
    oe = f.Provider,
    se = f.Consumer;

function Y() {
    return l.useContext(f)
}
const h = l.createContext(null),
    ae = h.Provider;
h.Consumer;

function le() {
    return l.useContext(h)
}
const y = l.createContext(null),
    ce = y.Provider,
    ie = y.Consumer;

function ee() {
    return l.useContext(y)
}
const m = {
        round: "rounded-xl",
        circle: "rounded-full",
        none: "rounded-none"
    },
    ue = k => {
        var S, w, F;
        const {
            asElement: $ = "button",
            active: s = !1,
            block: z = !1,
            children: t,
            className: N,
            clickFeedback: G = !0,
            customColorClass: b,
            disabled: P,
            icon: n,
            loading: c = !1,
            ref: E,
            shape: a = "round",
            size: B,
            variant: T = "default",
            iconAlignment: v = "start",
            ...L
        } = k, {
            controlSize: O,
            ui: p
        } = W(), R = (S = Y()) == null ? void 0 : S.size, Z = (w = ee()) == null ? void 0 : w.size, A = "button", d = "inline-flex items-center justify-center", D = B || Z || R || O, M = !((F = p == null ? void 0 : p.button) != null && F.disableClickFeedback) || G, x = P || c, Q = () => {
            let e = "";
            switch (D) {
                case g.LG:
                    e = u(o.lg.h, m[a], n && !t ? `${o.lg.w} ${d} text-2xl` : "px-8 py-2 text-base");
                    break;
                case g.SM:
                    e = u(o.sm.h, a === "round" ? "rounded-xl" : m[a], n && !t ? `${o.sm.w} ${d} text-lg` : "px-3 py-2 text-sm");
                    break;
                case g.XS:
                    e = u(o.xs.h, a === "round" ? "rounded-lg" : m[a], n && !t ? `${o.xs.w} ${d} text-base` : "px-3 py-1 text-xs");
                    break;
                default:
                    e = u(o.md.h, m[a], n && !t ? `${o.md.w} ${d} text-xl` : "px-5 py-2");
                    break
            }
            return e
        }, X = "opacity-50 cursor-not-allowed", _ = () => C({
            bgColor: s ? "bg-primary-deep" : "bg-primary",
            textColor: "text-neutral",
            hoverColor: s ? "" : "hover:bg-primary-mild",
            activeColor: ""
        }), q = () => C({
            bgColor: s ? "" : "dark:primary-mild",
            textColor: "",
            hoverColor: s ? "" : "hover:text-primary-mild",
            activeColor: "dark:active:primary-mild"
        }), j = () => C({
            bgColor: s ? "bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:border-gray-500" : "bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700",
            textColor: "text-gray-600 dark:text-gray-100",
            hoverColor: s ? "" : "ring-primary dark:ring-white hover:border-primary dark:hover:border-white hover:ring-1 hover:text-primary dark:hover:text-white dark:hover:bg-transparent",
            activeColor: ""
        }), C = ({
            bgColor: e,
            hoverColor: i,
            activeColor: U,
            textColor: V
        }) => `${e} ${x?X:i+" "+U} ${V}`, H = u(A, (() => {
            switch (T) {
                case "solid":
                    return _();
                case "plain":
                    return q();
                case "default":
                    return j();
                default:
                    return j()
            }
        })(), Q(), N, z ? "w-full" : "", M && !x && "button-press-feedback", b == null ? void 0 : b({
            active: s,
            unclickable: x
        })), J = e => {
            const {
                onClick: i
            } = k;
            if (x) {
                e.preventDefault();
                return
            }
            i == null || i(e)
        }, K = () => c && t ? r.jsxs("span", {
            className: "flex items-center justify-center",
            children: [r.jsx(I, {
                enableTheme: !1,
                className: "mr-1"
            }), t]
        }) : n && !t && c ? r.jsx(I, {
            enableTheme: !1
        }) : n && !t && !c ? r.jsx(r.Fragment, {
            children: n
        }) : n && t && !c ? r.jsxs("span", {
            className: "flex gap-1 items-center justify-center",
            children: [v === "start" && r.jsx("span", {
                className: "text-lg",
                children: n
            }), r.jsx("span", {
                children: t
            }), v === "end" && r.jsx("span", {
                className: "text-lg",
                children: n
            })]
        }) : r.jsx(r.Fragment, {
            children: t
        });
        return r.jsx($, {
            ref: E,
            className: H,
            ...L,
            onClick: J,
            children: K()
        })
    };
export {
    ue as B, oe as F, ce as I, ie as a, ee as b, le as c, se as d, ae as e, Y as u
};