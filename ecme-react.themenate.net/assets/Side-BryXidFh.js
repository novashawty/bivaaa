import {
    j as e,
    b as x
} from "./index-CtGBfi03.js";
const t = ({
    children: l,
    ...s
}) => e.jsxs("div", {
    className: "flex h-full p-6 bg-white dark:bg-gray-800",
    children: [e.jsx("div", {
        className: " flex flex-col justify-center items-center flex-1",
        children: e.jsx("div", {
            className: "w-full xl:max-w-[450px] px-8 max-w-[380px]",
            children: l ? x.cloneElement(l, { ...s
            }) : null
        })
    }), e.jsx("div", {
        className: "py-6 px-10 lg:flex flex-col flex-1 justify-between hidden rounded-3xl items-end relative max-w-[520px] 2xl:max-w-[720px]",
        children: e.jsx("img", {
            src: "/img/others/auth-side-bg.png",
            className: "absolute h-full w-full top-0 left-0 rounded-3xl"
        })
    })]
});
export {
    t as
    default
};