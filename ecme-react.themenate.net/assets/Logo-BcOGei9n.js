import {
    j as s,
    z as i,
    a7 as c
} from "./index-CtGBfi03.js";
const r = "/img/logo/",
    d = o => {
        const {
            type: l = "full",
            mode: a = "light",
            className: t,
            imgClass: e,
            style: g,
            logoWidth: m = "auto"
        } = o;
        return s.jsx("div", {
            className: i("logo", t),
            style: { ...g,
                width: m
            },
            children: s.jsx("img", {
                className: e,
                src: `${r}logo-${a}-${l}.png`,
                alt: `${c} logo`
            })
        })
    };
export {
    d as L
};