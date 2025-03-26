import {
    b as s
} from "./index-CtGBfi03.js";

function a(u = 3e3) {
    const [e, t] = s.useState("");
    return s.useEffect(() => {
        if (e) {
            const o = setTimeout(() => t(""), u);
            return () => {
                clearTimeout(o)
            }
        }
    }, [e]), [e, t]
}
export {
    a as u
};