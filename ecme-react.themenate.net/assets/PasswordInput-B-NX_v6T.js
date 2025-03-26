import {
    b as i,
    j as s
} from "./index-CtGBfi03.js";
import {
    I as c
} from "./Input-DOfW6eeK.js";
import {
    s as l,
    t as f
} from "./index-Zi-xU0EH.js";
const j = r => {
    const {
        onVisibleChange: t,
        ref: n,
        ...p
    } = r, [e, a] = i.useState("password"), u = x => {
        x.preventDefault();
        const o = e === "password" ? "text" : "password";
        a(o), t == null || t(o === "text")
    };
    return s.jsx(c, { ...p,
        ref: n,
        type: e,
        suffix: s.jsx("span", {
            className: "cursor-pointer select-none text-xl",
            role: "button",
            onClick: u,
            children: e === "password" ? s.jsx(l, {}) : s.jsx(f, {})
        })
    })
};
export {
    j as P
};