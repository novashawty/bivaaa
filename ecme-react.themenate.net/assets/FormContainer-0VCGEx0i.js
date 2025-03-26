import {
    a8 as c,
    aa as u,
    ao as d,
    j as a,
    z as C
} from "./index-CtGBfi03.js";
import {
    F,
    d as j
} from "./Button-CLJjlrWi.js";
const p = o => {
    const {
        controlSize: r
    } = c(), {
        children: e,
        className: n,
        labelWidth: i = 100,
        layout: t = d.VERTICAL,
        size: m = u.MD
    } = o, l = {
        labelWidth: i,
        layout: t,
        size: m || r
    };
    return a.jsx(F, {
        value: l,
        children: a.jsx(j, {
            children: s => a.jsx("div", {
                className: C("form-container", s == null ? void 0 : s.layout, n),
                children: e
            })
        })
    })
};
p.displayName = "FormContainer";
export {
    p as F
};