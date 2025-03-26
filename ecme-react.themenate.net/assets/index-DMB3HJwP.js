import {
    b as n,
    j as x
} from "./index-CtGBfi03.js";
import {
    M as I,
    u as z,
    P as L,
    a as $,
    L as b
} from "./proxy-ClCKouzp.js";
class S extends n.Component {
    getSnapshotBeforeUpdate(u) {
        const t = this.props.childRef.current;
        if (t && u.isPresent && !this.props.isPresent) {
            const s = this.props.sizeRef.current;
            s.height = t.offsetHeight || 0, s.width = t.offsetWidth || 0, s.top = t.offsetTop, s.left = t.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function A({
    children: o,
    isPresent: u
}) {
    const t = n.useId(),
        s = n.useRef(null),
        a = n.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: C
        } = n.useContext(I);
    return n.useInsertionEffect(() => {
        const {
            width: p,
            height: e,
            top: l,
            left: d
        } = a.current;
        if (u || !s.current || !p || !e) return;
        s.current.dataset.motionPopId = t;
        const c = document.createElement("style");
        return C && (c.nonce = C), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${e}px !important;
            top: ${l}px !important;
            left: ${d}px !important;
          }
        `), () => {
            document.head.removeChild(c)
        }
    }, [u]), x.jsx(S, {
        isPresent: u,
        childRef: s,
        sizeRef: a,
        children: n.cloneElement(o, {
            ref: s
        })
    })
}
const B = ({
    children: o,
    initial: u,
    isPresent: t,
    onExitComplete: s,
    custom: a,
    presenceAffectsLayout: C,
    mode: p
}) => {
    const e = z(D),
        l = n.useId(),
        d = n.useCallback(i => {
            e.set(i, !0);
            for (const g of e.values())
                if (!g) return;
            s && s()
        }, [e, s]),
        c = n.useMemo(() => ({
            id: l,
            initial: u,
            isPresent: t,
            custom: a,
            onExitComplete: d,
            register: i => (e.set(i, !1), () => e.delete(i))
        }), C ? [Math.random(), d] : [t, d]);
    return n.useMemo(() => {
        e.forEach((i, g) => e.set(g, !1))
    }, [t]), n.useEffect(() => {
        !t && !e.size && s && s()
    }, [t]), p === "popLayout" && (o = x.jsx(A, {
        isPresent: t,
        children: o
    })), x.jsx(L.Provider, {
        value: c,
        children: o
    })
};

function D() {
    return new Map
}
const y = o => o.key || "";

function P(o) {
    const u = [];
    return n.Children.forEach(o, t => {
        n.isValidElement(t) && u.push(t)
    }), u
}
const F = ({
    children: o,
    exitBeforeEnter: u,
    custom: t,
    initial: s = !0,
    onExitComplete: a,
    presenceAffectsLayout: C = !0,
    mode: p = "sync"
}) => {
    const e = n.useMemo(() => P(o), [o]),
        l = e.map(y),
        d = n.useRef(!0),
        c = n.useRef(e),
        i = z(() => new Map),
        [g, k] = n.useState(e),
        [h, j] = n.useState(e);
    $(() => {
        d.current = !1, c.current = e;
        for (let f = 0; f < h.length; f++) {
            const r = y(h[f]);
            l.includes(r) ? i.delete(r) : i.get(r) !== !0 && i.set(r, !1)
        }
    }, [h, l.length, l.join("-")]);
    const E = [];
    if (e !== g) {
        let f = [...e];
        for (let r = 0; r < h.length; r++) {
            const m = h[r],
                M = y(m);
            l.includes(M) || (f.splice(r, 0, m), E.push(m))
        }
        p === "wait" && E.length && (f = E), j(P(f)), k(e);
        return
    }
    const {
        forceRender: R
    } = n.useContext(b);
    return x.jsx(x.Fragment, {
        children: h.map(f => {
            const r = y(f),
                m = e === h || l.includes(r),
                M = () => {
                    if (i.has(r)) i.set(r, !0);
                    else return;
                    let w = !0;
                    i.forEach(v => {
                        v || (w = !1)
                    }), w && (R == null || R(), j(c.current), a && a())
                };
            return x.jsx(B, {
                isPresent: m,
                initial: !d.current || s ? void 0 : !1,
                custom: m ? void 0 : t,
                presenceAffectsLayout: C,
                mode: p,
                onExitComplete: m ? void 0 : M,
                children: f
            }, r)
        })
    })
};
export {
    F as A
};