import {
    b as r,
    j as n
} from "./index-CtGBfi03.js";
import {
    o as l,
    p as x,
    q as f,
    r as m
} from "./index-Zi-xU0EH.js";

function E(o, c = 0, s = !0) {
    const t = r.useRef(void 0),
        e = r.useRef(o),
        i = r.useCallback(() => {
            t.current && clearTimeout(t.current)
        }, []),
        u = r.useCallback(() => {
            t.current && clearTimeout(t.current), s && (t.current = setTimeout(() => {
                var a;
                (a = e.current) == null || a.call(e)
            }, c))
        }, [c, s]);
    return r.useEffect(() => {
        e.current = o
    }, [o]), r.useEffect(() => (u(), i), [c, s, u, i]), {
        clear: i,
        reset: u
    }
}
const p = {
        success: {
            color: "text-success",
            icon: n.jsx(m, {})
        },
        info: {
            color: "text-info",
            icon: n.jsx(f, {})
        },
        warning: {
            color: "text-warning",
            icon: n.jsx(x, {})
        },
        danger: {
            color: "text-error",
            icon: n.jsx(l, {})
        }
    },
    H = o => {
        const {
            type: c = "info",
            custom: s,
            iconColor: t
        } = o, e = p[c];
        return n.jsx("span", {
            className: `text-2xl ${t||e.color}`,
            children: s || e.icon
        })
    };
export {
    H as S, E as u
};