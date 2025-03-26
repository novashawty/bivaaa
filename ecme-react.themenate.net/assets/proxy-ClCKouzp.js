import {
    b as S,
    j as ce
} from "./index-CtGBfi03.js";

function Zi(t) {
    if (typeof Proxy > "u") return t;
    const e = new Map,
        n = (...s) => t(...s);
    return new Proxy(n, {
        get: (s, i) => i === "create" ? t : (e.has(i) || e.set(i, t(i)), e.get(i))
    })
}

function $t(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const he = t => Array.isArray(t);

function Ss(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let s = 0; s < n; s++)
        if (e[s] !== t[s]) return !1;
    return !0
}

function St(t) {
    return typeof t == "string" || Array.isArray(t)
}

function ln(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach((n, s) => {
        e[0][s] = n.get(), e[1][s] = n.getVelocity()
    }), e
}

function Ce(t, e, n, s) {
    if (typeof e == "function") {
        const [i, o] = ln(s);
        e = e(n !== void 0 ? n : t.custom, i, o)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
        const [i, o] = ln(s);
        e = e(n !== void 0 ? n : t.custom, i, o)
    }
    return e
}

function zt(t, e, n) {
    const s = t.getProps();
    return Ce(s, e, n !== void 0 ? n : s.custom, t)
}
const De = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Me = ["initial", ...De],
    Ct = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    st = new Set(Ct),
    $ = t => t * 1e3,
    z = t => t / 1e3,
    Ji = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Qi = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    tr = {
        type: "keyframes",
        duration: .8
    },
    er = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    nr = (t, {
        keyframes: e
    }) => e.length > 2 ? tr : st.has(t) ? t.startsWith("scale") ? Qi(e[1]) : Ji : er;

function Re(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const sr = {
        useManualTiming: !1
    },
    ir = t => t !== null;

function Ht(t, {
    repeat: e,
    repeatType: n = "loop"
}, s) {
    const i = t.filter(ir),
        o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
    return !o || s === void 0 ? i[o] : s
}
const j = t => t;
let As = j;

function rr(t) {
    let e = new Set,
        n = new Set,
        s = !1,
        i = !1;
    const o = new WeakSet;
    let r = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function a(u) {
        o.has(u) && (l.schedule(u), t()), u(r)
    }
    const l = {
        schedule: (u, c = !1, h = !1) => {
            const d = h && s ? e : n;
            return c && o.add(u), d.has(u) || d.add(u), u
        },
        cancel: u => {
            n.delete(u), o.delete(u)
        },
        process: u => {
            if (r = u, s) {
                i = !0;
                return
            }
            s = !0, [e, n] = [n, e], e.forEach(a), e.clear(), s = !1, i && (i = !1, l.process(u))
        }
    };
    return l
}
const Lt = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    or = 40;

function bs(t, e) {
    let n = !1,
        s = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = () => n = !0,
        r = Lt.reduce((m, v) => (m[v] = rr(o), m), {}),
        {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: c,
            render: h,
            postRender: f
        } = r,
        d = () => {
            const m = performance.now();
            n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, or), 1), i.timestamp = m, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), h.process(i), f.process(i), i.isProcessing = !1, n && e && (s = !1, t(d))
        },
        p = () => {
            n = !0, s = !0, i.isProcessing || t(d)
        };
    return {
        schedule: Lt.reduce((m, v) => {
            const T = r[v];
            return m[v] = (b, P = !1, w = !1) => (n || p(), T.schedule(b, P, w)), m
        }, {}),
        cancel: m => {
            for (let v = 0; v < Lt.length; v++) r[Lt[v]].cancel(m)
        },
        state: i,
        steps: r
    }
}
const {
    schedule: V,
    cancel: Y,
    state: E,
    steps: Jt
} = bs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : j, !0), ws = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, ar = 1e-7, lr = 12;

function ur(t, e, n, s, i) {
    let o, r, a = 0;
    do r = e + (n - e) / 2, o = ws(r, s, i) - t, o > 0 ? n = r : e = r; while (Math.abs(o) > ar && ++a < lr);
    return r
}

function Dt(t, e, n, s) {
    if (t === e && n === s) return j;
    const i = o => ur(o, 0, 1, t, n);
    return o => o === 0 || o === 1 ? o : ws(i(o), e, s)
}
const Vs = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    Cs = t => e => 1 - t(1 - e),
    Ds = Dt(.33, 1.53, .69, .99),
    Ee = Cs(Ds),
    Ms = Vs(Ee),
    Rs = t => (t *= 2) < 1 ? .5 * Ee(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    Le = t => 1 - Math.sin(Math.acos(t)),
    Es = Cs(Le),
    Ls = Vs(Le),
    Fs = t => /^0[^.\s]+$/u.test(t);

function cr(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Fs(t) : !0
}
const Bs = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
    ks = t => e => typeof e == "string" && e.startsWith(t),
    js = ks("--"),
    hr = ks("var(--"),
    Fe = t => hr(t) ? fr.test(t.split("/*")[0].trim()) : !1,
    fr = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    dr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function mr(t) {
    const e = dr.exec(t);
    if (!e) return [, ];
    const [, n, s, i] = e;
    return [`--${n??s}`, i]
}

function Is(t, e, n = 1) {
    const [s, i] = mr(t);
    if (!s) return;
    const o = window.getComputedStyle(e).getPropertyValue(s);
    if (o) {
        const r = o.trim();
        return Bs(r) ? parseFloat(r) : r
    }
    return Fe(i) ? Is(i, e, n + 1) : i
}
const H = (t, e, n) => n > e ? e : n < t ? t : n,
    dt = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    },
    At = { ...dt,
        transform: t => H(0, 1, t)
    },
    Ft = { ...dt,
        default: 1
    },
    Mt = t => ({
        test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    X = Mt("deg"),
    K = Mt("%"),
    x = Mt("px"),
    pr = Mt("vh"),
    gr = Mt("vw"),
    un = { ...K,
        parse: t => K.parse(t) / 100,
        transform: t => K.transform(t * 100)
    },
    yr = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    cn = t => t === dt || t === x,
    hn = (t, e) => parseFloat(t.split(", ")[e]),
    fn = (t, e) => (n, {
        transform: s
    }) => {
        if (s === "none" || !s) return 0;
        const i = s.match(/^matrix3d\((.+)\)$/u);
        if (i) return hn(i[1], e); {
            const o = s.match(/^matrix\((.+)\)$/u);
            return o ? hn(o[1], t) : 0
        }
    },
    vr = new Set(["x", "y", "z"]),
    xr = Ct.filter(t => !vr.has(t));

function Tr(t) {
    const e = [];
    return xr.forEach(n => {
        const s = t.getValue(n);
        s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0))
    }), e
}
const ct = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: fn(4, 13),
    y: fn(5, 14)
};
ct.translateX = ct.x;
ct.translateY = ct.y;
const Os = t => e => e.test(t),
    Pr = {
        test: t => t === "auto",
        parse: t => t
    },
    Ns = [dt, x, K, X, gr, pr, Pr],
    dn = t => Ns.find(Os(t)),
    nt = new Set;
let fe = !1,
    de = !1;

function Us() {
    if (de) {
        const t = Array.from(nt).filter(s => s.needsMeasurement),
            e = new Set(t.map(s => s.element)),
            n = new Map;
        e.forEach(s => {
            const i = Tr(s);
            i.length && (n.set(s, i), s.render())
        }), t.forEach(s => s.measureInitialState()), e.forEach(s => {
            s.render();
            const i = n.get(s);
            i && i.forEach(([o, r]) => {
                var a;
                (a = s.getValue(o)) === null || a === void 0 || a.set(r)
            })
        }), t.forEach(s => s.measureEndState()), t.forEach(s => {
            s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
        })
    }
    de = !1, fe = !1, nt.forEach(t => t.complete()), nt.clear()
}

function _s() {
    nt.forEach(t => {
        t.readKeyframes(), t.needsMeasurement && (de = !0)
    })
}

function Sr() {
    _s(), Us()
}
class Be {
    constructor(e, n, s, i, o, r = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (nt.add(this), fe || (fe = !0, V.read(_s), V.resolveKeyframes(Us))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: n,
            element: s,
            motionValue: i
        } = this;
        for (let o = 0; o < e.length; o++)
            if (e[o] === null)
                if (o === 0) {
                    const r = i == null ? void 0 : i.get(),
                        a = e[e.length - 1];
                    if (r !== void 0) e[0] = r;
                    else if (s && n) {
                        const l = s.readValue(n, a);
                        l != null && (e[0] = l)
                    }
                    e[0] === void 0 && (e[0] = a), i && r === void 0 && i.set(e[0])
                } else e[o] = e[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), nt.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, nt.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const vt = t => Math.round(t * 1e5) / 1e5,
    ke = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Ar(t) {
    return t == null
}
const br = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    je = (t, e) => n => !!(typeof n == "string" && br.test(n) && n.startsWith(t) || e && !Ar(n) && Object.prototype.hasOwnProperty.call(n, e)),
    Ks = (t, e, n) => s => {
        if (typeof s != "string") return s;
        const [i, o, r, a] = s.match(ke);
        return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [n]: parseFloat(r),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    wr = t => H(0, 255, t),
    Qt = { ...dt,
        transform: t => Math.round(wr(t))
    },
    et = {
        test: je("rgb", "red"),
        parse: Ks("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: s = 1
        }) => "rgba(" + Qt.transform(t) + ", " + Qt.transform(e) + ", " + Qt.transform(n) + ", " + vt(At.transform(s)) + ")"
    };

function Vr(t) {
    let e = "",
        n = "",
        s = "",
        i = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(s, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const me = {
        test: je("#"),
        parse: Vr,
        transform: et.transform
    },
    rt = {
        test: je("hsl", "hue"),
        parse: Ks("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: s = 1
        }) => "hsla(" + Math.round(t) + ", " + K.transform(vt(e)) + ", " + K.transform(vt(n)) + ", " + vt(At.transform(s)) + ")"
    },
    L = {
        test: t => et.test(t) || me.test(t) || rt.test(t),
        parse: t => et.test(t) ? et.parse(t) : rt.test(t) ? rt.parse(t) : me.parse(t),
        transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? et.transform(t) : rt.transform(t)
    },
    Cr = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Dr(t) {
    var e, n;
    return isNaN(t) && typeof t == "string" && (((e = t.match(ke)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Cr)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Ws = "number",
    Gs = "color",
    Mr = "var",
    Rr = "var(",
    mn = "${}",
    Er = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function bt(t) {
    const e = t.toString(),
        n = [],
        s = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let o = 0;
    const a = e.replace(Er, l => (L.test(l) ? (s.color.push(o), i.push(Gs), n.push(L.parse(l))) : l.startsWith(Rr) ? (s.var.push(o), i.push(Mr), n.push(l)) : (s.number.push(o), i.push(Ws), n.push(parseFloat(l))), ++o, mn)).split(mn);
    return {
        values: n,
        split: a,
        indexes: s,
        types: i
    }
}

function $s(t) {
    return bt(t).values
}

function zs(t) {
    const {
        split: e,
        types: n
    } = bt(t), s = e.length;
    return i => {
        let o = "";
        for (let r = 0; r < s; r++)
            if (o += e[r], i[r] !== void 0) {
                const a = n[r];
                a === Ws ? o += vt(i[r]) : a === Gs ? o += L.transform(i[r]) : o += i[r]
            }
        return o
    }
}
const Lr = t => typeof t == "number" ? 0 : t;

function Fr(t) {
    const e = $s(t);
    return zs(t)(e.map(Lr))
}
const q = {
        test: Dr,
        parse: $s,
        createTransformer: zs,
        getAnimatableNone: Fr
    },
    Br = new Set(["brightness", "contrast", "saturate", "opacity"]);

function kr(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [s] = n.match(ke) || [];
    if (!s) return t;
    const i = n.replace(s, "");
    let o = Br.has(e) ? 1 : 0;
    return s !== n && (o *= 100), e + "(" + o + i + ")"
}
const jr = /\b([a-z-]*)\(.*?\)/gu,
    pe = { ...q,
        getAnimatableNone: t => {
            const e = t.match(jr);
            return e ? e.map(kr).join(" ") : t
        }
    },
    Ir = {
        borderWidth: x,
        borderTopWidth: x,
        borderRightWidth: x,
        borderBottomWidth: x,
        borderLeftWidth: x,
        borderRadius: x,
        radius: x,
        borderTopLeftRadius: x,
        borderTopRightRadius: x,
        borderBottomRightRadius: x,
        borderBottomLeftRadius: x,
        width: x,
        maxWidth: x,
        height: x,
        maxHeight: x,
        top: x,
        right: x,
        bottom: x,
        left: x,
        padding: x,
        paddingTop: x,
        paddingRight: x,
        paddingBottom: x,
        paddingLeft: x,
        margin: x,
        marginTop: x,
        marginRight: x,
        marginBottom: x,
        marginLeft: x,
        backgroundPositionX: x,
        backgroundPositionY: x
    },
    Or = {
        rotate: X,
        rotateX: X,
        rotateY: X,
        rotateZ: X,
        scale: Ft,
        scaleX: Ft,
        scaleY: Ft,
        scaleZ: Ft,
        skew: X,
        skewX: X,
        skewY: X,
        distance: x,
        translateX: x,
        translateY: x,
        translateZ: x,
        x,
        y: x,
        z: x,
        perspective: x,
        transformPerspective: x,
        opacity: At,
        originX: un,
        originY: un,
        originZ: x
    },
    pn = { ...dt,
        transform: Math.round
    },
    Ie = { ...Ir,
        ...Or,
        zIndex: pn,
        size: x,
        fillOpacity: At,
        strokeOpacity: At,
        numOctaves: pn
    },
    Nr = { ...Ie,
        color: L,
        backgroundColor: L,
        outlineColor: L,
        fill: L,
        stroke: L,
        borderColor: L,
        borderTopColor: L,
        borderRightColor: L,
        borderBottomColor: L,
        borderLeftColor: L,
        filter: pe,
        WebkitFilter: pe
    },
    Oe = t => Nr[t];

function Hs(t, e) {
    let n = Oe(t);
    return n !== pe && (n = q), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const Ur = new Set(["auto", "none", "0"]);

function _r(t, e, n) {
    let s = 0,
        i;
    for (; s < t.length && !i;) {
        const o = t[s];
        typeof o == "string" && !Ur.has(o) && bt(o).values.length && (i = t[s]), s++
    }
    if (i && n)
        for (const o of e) t[o] = Hs(n, i)
}
class Xs extends Be {
    constructor(e, n, s, i, o) {
        super(e, n, s, i, o, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            element: n,
            name: s
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let l = 0; l < e.length; l++) {
            let u = e[l];
            if (typeof u == "string" && (u = u.trim(), Fe(u))) {
                const c = Is(u, n.current);
                c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !yr.has(s) || e.length !== 2) return;
        const [i, o] = e, r = dn(i), a = dn(o);
        if (r !== a)
            if (cn(r) && cn(a))
                for (let l = 0; l < e.length; l++) {
                    const u = e[l];
                    typeof u == "string" && (e[l] = parseFloat(u))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: n
        } = this, s = [];
        for (let i = 0; i < e.length; i++) cr(e[i]) && s.push(i);
        s.length && _r(e, s, n)
    }
    measureInitialState() {
        const {
            element: e,
            unresolvedKeyframes: n,
            name: s
        } = this;
        if (!e || !e.current) return;
        s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ct[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && e.getValue(s, i).jump(i, !1)
    }
    measureEndState() {
        var e;
        const {
            element: n,
            name: s,
            unresolvedKeyframes: i
        } = this;
        if (!n || !n.current) return;
        const o = n.getValue(s);
        o && o.jump(this.measuredOrigin, !1);
        const r = i.length - 1,
            a = i[r];
        i[r] = ct[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([l, u]) => {
            n.getValue(l).set(u)
        }), this.resolveNoneKeyframes()
    }
}

function Ne(t) {
    return typeof t == "function"
}
let kt;

function Kr() {
    kt = void 0
}
const W = {
        now: () => (kt === void 0 && W.set(E.isProcessing || sr.useManualTiming ? E.timestamp : performance.now()), kt),
        set: t => {
            kt = t, queueMicrotask(Kr)
        }
    },
    gn = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (q.test(t) || t === "0") && !t.startsWith("url("));

function Wr(t) {
    const e = t[0];
    if (t.length === 1) return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e) return !0
}

function Gr(t, e, n, s) {
    const i = t[0];
    if (i === null) return !1;
    if (e === "display" || e === "visibility") return !0;
    const o = t[t.length - 1],
        r = gn(i, e),
        a = gn(o, e);
    return !r || !a ? !1 : Wr(t) || (n === "spring" || Ne(n)) && s
}
const $r = 40;
class Ys {
    constructor({
        autoplay: e = !0,
        delay: n = 0,
        type: s = "keyframes",
        repeat: i = 0,
        repeatDelay: o = 0,
        repeatType: r = "loop",
        ...a
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = W.now(), this.options = {
            autoplay: e,
            delay: n,
            type: s,
            repeat: i,
            repeatDelay: o,
            repeatType: r,
            ...a
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > $r ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Sr(), this._resolved
    }
    onKeyframesResolved(e, n) {
        this.resolvedAt = W.now(), this.hasAttemptedResolve = !0;
        const {
            name: s,
            type: i,
            velocity: o,
            delay: r,
            onComplete: a,
            onUpdate: l,
            isGenerator: u
        } = this.options;
        if (!u && !Gr(e, s, i, o))
            if (r) this.options.duration = 0;
            else {
                l == null || l(Ht(e, this.options, n)), a == null || a(), this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(e, n);
        c !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: n,
            ...c
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(e, n) {
        return this.currentFinishedPromise.then(e, n)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        })
    }
}
const ht = (t, e, n) => {
        const s = e - t;
        return s === 0 ? 1 : (n - t) / s
    },
    qs = (t, e, n = 10) => {
        let s = "";
        const i = Math.max(Math.round(e / n), 2);
        for (let o = 0; o < i; o++) s += t(ht(0, i - 1, o)) + ", ";
        return `linear(${s.substring(0,s.length-2)})`
    };

function Zs(t, e) {
    return e ? t * (1e3 / e) : 0
}
const zr = 5;

function Js(t, e, n) {
    const s = Math.max(e - zr, 0);
    return Zs(n - t(s), e - s)
}
const D = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    yn = .001;

function Hr({
    duration: t = D.duration,
    bounce: e = D.bounce,
    velocity: n = D.velocity,
    mass: s = D.mass
}) {
    let i, o, r = 1 - e;
    r = H(D.minDamping, D.maxDamping, r), t = H(D.minDuration, D.maxDuration, z(t)), r < 1 ? (i = u => {
        const c = u * r,
            h = c * t,
            f = c - n,
            d = ge(u, r),
            p = Math.exp(-h);
        return yn - f / d * p
    }, o = u => {
        const h = u * r * t,
            f = h * n + n,
            d = Math.pow(r, 2) * Math.pow(u, 2) * t,
            p = Math.exp(-h),
            g = ge(Math.pow(u, 2), r);
        return (-i(u) + yn > 0 ? -1 : 1) * ((f - d) * p) / g
    }) : (i = u => {
        const c = Math.exp(-u * t),
            h = (u - n) * t + 1;
        return -.001 + c * h
    }, o = u => {
        const c = Math.exp(-u * t),
            h = (n - u) * (t * t);
        return c * h
    });
    const a = 5 / t,
        l = Yr(i, o, a);
    if (t = $(t), isNaN(l)) return {
        stiffness: D.stiffness,
        damping: D.damping,
        duration: t
    }; {
        const u = Math.pow(l, 2) * s;
        return {
            stiffness: u,
            damping: r * 2 * Math.sqrt(s * u),
            duration: t
        }
    }
}
const Xr = 12;

function Yr(t, e, n) {
    let s = n;
    for (let i = 1; i < Xr; i++) s = s - t(s) / e(s);
    return s
}

function ge(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const ye = 2e4;

function Qs(t) {
    let e = 0;
    const n = 50;
    let s = t.next(e);
    for (; !s.done && e < ye;) e += n, s = t.next(e);
    return e >= ye ? 1 / 0 : e
}
const qr = ["duration", "bounce"],
    Zr = ["stiffness", "damping", "mass"];

function vn(t, e) {
    return e.some(n => t[n] !== void 0)
}

function Jr(t) {
    let e = {
        velocity: D.velocity,
        stiffness: D.stiffness,
        damping: D.damping,
        mass: D.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!vn(t, Zr) && vn(t, qr))
        if (t.visualDuration) {
            const n = t.visualDuration,
                s = 2 * Math.PI / (n * 1.2),
                i = s * s,
                o = 2 * H(.05, 1, 1 - t.bounce) * Math.sqrt(i);
            e = { ...e,
                mass: D.mass,
                stiffness: i,
                damping: o
            }
        } else {
            const n = Hr(t);
            e = { ...e,
                ...n,
                mass: D.mass
            }, e.isResolvedFromDuration = !0
        }
    return e
}

function ti(t = D.visualDuration, e = D.bounce) {
    const n = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {
        restSpeed: s,
        restDelta: i
    } = n;
    const o = n.keyframes[0],
        r = n.keyframes[n.keyframes.length - 1],
        a = {
            done: !1,
            value: o
        },
        {
            stiffness: l,
            damping: u,
            mass: c,
            duration: h,
            velocity: f,
            isResolvedFromDuration: d
        } = Jr({ ...n,
            velocity: -z(n.velocity || 0)
        }),
        p = f || 0,
        g = u / (2 * Math.sqrt(l * c)),
        y = r - o,
        m = z(Math.sqrt(l / c)),
        v = Math.abs(y) < 5;
    s || (s = v ? D.restSpeed.granular : D.restSpeed.default), i || (i = v ? D.restDelta.granular : D.restDelta.default);
    let T;
    if (g < 1) {
        const P = ge(m, g);
        T = w => {
            const R = Math.exp(-g * m * w);
            return r - R * ((p + g * m * y) / P * Math.sin(P * w) + y * Math.cos(P * w))
        }
    } else if (g === 1) T = P => r - Math.exp(-m * P) * (y + (p + m * y) * P);
    else {
        const P = m * Math.sqrt(g * g - 1);
        T = w => {
            const R = Math.exp(-g * m * w),
                A = Math.min(P * w, 300);
            return r - R * ((p + g * m * y) * Math.sinh(A) + P * y * Math.cosh(A)) / P
        }
    }
    const b = {
        calculatedDuration: d && h || null,
        next: P => {
            const w = T(P);
            if (d) a.done = P >= h;
            else {
                let R = 0;
                g < 1 && (R = P === 0 ? $(p) : Js(T, P, w));
                const A = Math.abs(R) <= s,
                    k = Math.abs(r - w) <= i;
                a.done = A && k
            }
            return a.value = a.done ? r : w, a
        },
        toString: () => {
            const P = Math.min(Qs(b), ye),
                w = qs(R => b.next(P * R).value, P, 30);
            return P + "ms " + w
        }
    };
    return b
}

function xn({
    keyframes: t,
    velocity: e = 0,
    power: n = .8,
    timeConstant: s = 325,
    bounceDamping: i = 10,
    bounceStiffness: o = 500,
    modifyTarget: r,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: c
}) {
    const h = t[0],
        f = {
            done: !1,
            value: h
        },
        d = A => a !== void 0 && A < a || l !== void 0 && A > l,
        p = A => a === void 0 ? l : l === void 0 || Math.abs(a - A) < Math.abs(l - A) ? a : l;
    let g = n * e;
    const y = h + g,
        m = r === void 0 ? y : r(y);
    m !== y && (g = m - h);
    const v = A => -g * Math.exp(-A / s),
        T = A => m + v(A),
        b = A => {
            const k = v(A),
                O = T(A);
            f.done = Math.abs(k) <= u, f.value = f.done ? m : O
        };
    let P, w;
    const R = A => {
        d(f.value) && (P = A, w = ti({
            keyframes: [f.value, p(f.value)],
            velocity: Js(T, A, f.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    };
    return R(0), {
        calculatedDuration: null,
        next: A => {
            let k = !1;
            return !w && P === void 0 && (k = !0, b(A), R(A)), P !== void 0 && A >= P ? w.next(A - P) : (!k && b(A), f)
        }
    }
}
const Qr = Dt(.42, 0, 1, 1),
    to = Dt(0, 0, .58, 1),
    ei = Dt(.42, 0, .58, 1),
    eo = t => Array.isArray(t) && typeof t[0] != "number",
    Ue = t => Array.isArray(t) && typeof t[0] == "number",
    no = {
        linear: j,
        easeIn: Qr,
        easeInOut: ei,
        easeOut: to,
        circIn: Le,
        circInOut: Ls,
        circOut: Es,
        backIn: Ee,
        backInOut: Ms,
        backOut: Ds,
        anticipate: Rs
    },
    Tn = t => {
        if (Ue(t)) {
            As(t.length === 4);
            const [e, n, s, i] = t;
            return Dt(e, n, s, i)
        } else if (typeof t == "string") return no[t];
        return t
    },
    so = (t, e) => n => e(t(n)),
    Rt = (...t) => t.reduce(so),
    C = (t, e, n) => t + (e - t) * n;

function te(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function io({
    hue: t,
    saturation: e,
    lightness: n,
    alpha: s
}) {
    t /= 360, e /= 100, n /= 100;
    let i = 0,
        o = 0,
        r = 0;
    if (!e) i = o = r = n;
    else {
        const a = n < .5 ? n * (1 + e) : n + e - n * e,
            l = 2 * n - a;
        i = te(l, a, t + 1 / 3), o = te(l, a, t), r = te(l, a, t - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(r * 255),
        alpha: s
    }
}

function Ot(t, e) {
    return n => n > 0 ? e : t
}
const ee = (t, e, n) => {
        const s = t * t,
            i = n * (e * e - s) + s;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    ro = [me, et, rt],
    oo = t => ro.find(e => e.test(t));

function Pn(t) {
    const e = oo(t);
    if (!e) return !1;
    let n = e.parse(t);
    return e === rt && (n = io(n)), n
}
const Sn = (t, e) => {
        const n = Pn(t),
            s = Pn(e);
        if (!n || !s) return Ot(t, e);
        const i = { ...n
        };
        return o => (i.red = ee(n.red, s.red, o), i.green = ee(n.green, s.green, o), i.blue = ee(n.blue, s.blue, o), i.alpha = C(n.alpha, s.alpha, o), et.transform(i))
    },
    ve = new Set(["none", "hidden"]);

function ao(t, e) {
    return ve.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}

function lo(t, e) {
    return n => C(t, e, n)
}

function _e(t) {
    return typeof t == "number" ? lo : typeof t == "string" ? Fe(t) ? Ot : L.test(t) ? Sn : ho : Array.isArray(t) ? ni : typeof t == "object" ? L.test(t) ? Sn : uo : Ot
}

function ni(t, e) {
    const n = [...t],
        s = n.length,
        i = t.map((o, r) => _e(o)(o, e[r]));
    return o => {
        for (let r = 0; r < s; r++) n[r] = i[r](o);
        return n
    }
}

function uo(t, e) {
    const n = { ...t,
            ...e
        },
        s = {};
    for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = _e(t[i])(t[i], e[i]));
    return i => {
        for (const o in s) n[o] = s[o](i);
        return n
    }
}

function co(t, e) {
    var n;
    const s = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let o = 0; o < e.values.length; o++) {
        const r = e.types[o],
            a = t.indexes[r][i[r]],
            l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
        s[o] = l, i[r]++
    }
    return s
}
const ho = (t, e) => {
    const n = q.createTransformer(e),
        s = bt(t),
        i = bt(e);
    return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? ve.has(t) && !i.values.length || ve.has(e) && !s.values.length ? ao(t, e) : Rt(ni(co(s, i), i.values), n) : Ot(t, e)
};

function si(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? C(t, e, n) : _e(t)(t, e)
}

function fo(t, e, n) {
    const s = [],
        i = n || si,
        o = t.length - 1;
    for (let r = 0; r < o; r++) {
        let a = i(t[r], t[r + 1]);
        if (e) {
            const l = Array.isArray(e) ? e[r] || j : e;
            a = Rt(l, a)
        }
        s.push(a)
    }
    return s
}

function mo(t, e, {
    clamp: n = !0,
    ease: s,
    mixer: i
} = {}) {
    const o = t.length;
    if (As(o === e.length), o === 1) return () => e[0];
    if (o === 2 && t[0] === t[1]) return () => e[1];
    t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const r = fo(e, s, i),
        a = r.length,
        l = u => {
            let c = 0;
            if (a > 1)
                for (; c < t.length - 2 && !(u < t[c + 1]); c++);
            const h = ht(t[c], t[c + 1], u);
            return r[c](h)
        };
    return n ? u => l(H(t[0], t[o - 1], u)) : l
}

function po(t, e) {
    const n = t[t.length - 1];
    for (let s = 1; s <= e; s++) {
        const i = ht(0, e, s);
        t.push(C(n, 1, i))
    }
}

function go(t) {
    const e = [0];
    return po(e, t.length - 1), e
}

function yo(t, e) {
    return t.map(n => n * e)
}

function vo(t, e) {
    return t.map(() => e || ei).splice(0, t.length - 1)
}

function Nt({
    duration: t = 300,
    keyframes: e,
    times: n,
    ease: s = "easeInOut"
}) {
    const i = eo(s) ? s.map(Tn) : Tn(s),
        o = {
            done: !1,
            value: e[0]
        },
        r = yo(n && n.length === e.length ? n : go(e), t),
        a = mo(r, e, {
            ease: Array.isArray(i) ? i : vo(e, i)
        });
    return {
        calculatedDuration: t,
        next: l => (o.value = a(l), o.done = l >= t, o)
    }
}
const xo = t => {
        const e = ({
            timestamp: n
        }) => t(n);
        return {
            start: () => V.update(e, !0),
            stop: () => Y(e),
            now: () => E.isProcessing ? E.timestamp : W.now()
        }
    },
    To = {
        decay: xn,
        inertia: xn,
        tween: Nt,
        keyframes: Nt,
        spring: ti
    },
    Po = t => t / 100;
class Ke extends Ys {
    constructor(e) {
        super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: l
            } = this.options;
            l && l()
        };
        const {
            name: n,
            motionValue: s,
            element: i,
            keyframes: o
        } = this.options, r = (i == null ? void 0 : i.KeyframeResolver) || Be, a = (l, u) => this.onKeyframesResolved(l, u);
        this.resolver = new r(o, a, n, s, i), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {
            type: n = "keyframes",
            repeat: s = 0,
            repeatDelay: i = 0,
            repeatType: o,
            velocity: r = 0
        } = this.options, a = Ne(n) ? n : To[n] || Nt;
        let l, u;
        a !== Nt && typeof e[0] != "number" && (l = Rt(Po, si(e[0], e[1])), e = [0, 100]);
        const c = a({ ...this.options,
            keyframes: e
        });
        o === "mirror" && (u = a({ ...this.options,
            keyframes: [...e].reverse(),
            velocity: -r
        })), c.calculatedDuration === null && (c.calculatedDuration = Qs(c));
        const {
            calculatedDuration: h
        } = c, f = h + i, d = f * (s + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: h,
            resolvedDuration: f,
            totalDuration: d
        }
    }
    onPostResolved() {
        const {
            autoplay: e = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, n = !1) {
        const {
            resolved: s
        } = this;
        if (!s) {
            const {
                keyframes: A
            } = this.options;
            return {
                done: !0,
                value: A[A.length - 1]
            }
        }
        const {
            finalKeyframe: i,
            generator: o,
            mirroredGenerator: r,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: c,
            resolvedDuration: h
        } = s;
        if (this.startTime === null) return o.next(0);
        const {
            delay: f,
            repeat: d,
            repeatType: p,
            repeatDelay: g,
            onUpdate: y
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
            v = this.speed >= 0 ? m < 0 : m > c;
        this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let T = this.currentTime,
            b = o;
        if (d) {
            const A = Math.min(this.currentTime, c) / h;
            let k = Math.floor(A),
                O = A % 1;
            !O && A >= 1 && (O = 1), O === 1 && k--, k = Math.min(k, d + 1), !!(k % 2) && (p === "reverse" ? (O = 1 - O, g && (O -= g / h)) : p === "mirror" && (b = r)), T = H(0, 1, O) * h
        }
        const P = v ? {
            done: !1,
            value: l[0]
        } : b.next(T);
        a && (P.value = a(P.value));
        let {
            done: w
        } = P;
        !v && u !== null && (w = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const R = this.holdTime === null && (this.state === "finished" || this.state === "running" && w);
        return R && i !== void 0 && (P.value = Ht(l, this.options, i)), y && y(P.value), R && this.finish(), P
    }
    get duration() {
        const {
            resolved: e
        } = this;
        return e ? z(e.calculatedDuration) : 0
    }
    get time() {
        return z(this.currentTime)
    }
    set time(e) {
        e = $(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const n = this.playbackSpeed !== e;
        this.playbackSpeed = e, n && (this.time = z(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: e = xo,
            onPlay: n,
            startTime: s
        } = this.options;
        this.driver || (this.driver = e(o => this.tick(o))), n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = s ? ? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: e
        } = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0, this.tick(e, !0)
    }
}
const So = new Set(["opacity", "clipPath", "filter", "transform"]);

function We(t) {
    let e;
    return () => (e === void 0 && (e = t()), e)
}
const Ao = {
    linearEasing: void 0
};

function bo(t, e) {
    const n = We(t);
    return () => {
        var s;
        return (s = Ao[e]) !== null && s !== void 0 ? s : n()
    }
}
const Ut = bo(() => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}, "linearEasing");

function ii(t) {
    return !!(typeof t == "function" && Ut() || !t || typeof t == "string" && (t in xe || Ut()) || Ue(t) || Array.isArray(t) && t.every(ii))
}
const pt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
    xe = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: pt([0, .65, .55, 1]),
        circOut: pt([.55, 0, 1, .45]),
        backIn: pt([.31, .01, .66, -.59]),
        backOut: pt([.33, 1.53, .69, .99])
    };

function ri(t, e) {
    if (t) return typeof t == "function" && Ut() ? qs(t, e) : Ue(t) ? pt(t) : Array.isArray(t) ? t.map(n => ri(n, e) || xe.easeOut) : xe[t]
}

function wo(t, e, n, {
    delay: s = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: a = "easeInOut",
    times: l
} = {}) {
    const u = {
        [e]: n
    };
    l && (u.offset = l);
    const c = ri(a, i);
    return Array.isArray(c) && (u.easing = c), t.animate(u, {
        delay: s,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: r === "reverse" ? "alternate" : "normal"
    })
}

function An(t, e) {
    t.timeline = e, t.onfinish = null
}
const Vo = We(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    _t = 10,
    Co = 2e4;

function Do(t) {
    return Ne(t.type) || t.type === "spring" || !ii(t.ease)
}

function Mo(t, e) {
    const n = new Ke({ ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let s = {
        done: !1,
        value: t[0]
    };
    const i = [];
    let o = 0;
    for (; !s.done && o < Co;) s = n.sample(o), i.push(s.value), o += _t;
    return {
        times: void 0,
        keyframes: i,
        duration: o - _t,
        ease: "linear"
    }
}
const oi = {
    anticipate: Rs,
    backInOut: Ms,
    circInOut: Ls
};

function Ro(t) {
    return t in oi
}
class bn extends Ys {
    constructor(e) {
        super(e);
        const {
            name: n,
            motionValue: s,
            element: i,
            keyframes: o
        } = this.options;
        this.resolver = new Xs(o, (r, a) => this.onKeyframesResolved(r, a), n, s, i), this.resolver.scheduleResolve()
    }
    initPlayback(e, n) {
        var s;
        let {
            duration: i = 300,
            times: o,
            ease: r,
            type: a,
            motionValue: l,
            name: u,
            startTime: c
        } = this.options;
        if (!(!((s = l.owner) === null || s === void 0) && s.current)) return !1;
        if (typeof r == "string" && Ut() && Ro(r) && (r = oi[r]), Do(this.options)) {
            const {
                onComplete: f,
                onUpdate: d,
                motionValue: p,
                element: g,
                ...y
            } = this.options, m = Mo(e, y);
            e = m.keyframes, e.length === 1 && (e[1] = e[0]), i = m.duration, o = m.times, r = m.ease, a = "keyframes"
        }
        const h = wo(l.owner.current, u, e, { ...this.options,
            duration: i,
            times: o,
            ease: r
        });
        return h.startTime = c ? ? this.calcStartTime(), this.pendingTimeline ? (An(h, this.pendingTimeline), this.pendingTimeline = void 0) : h.onfinish = () => {
            const {
                onComplete: f
            } = this.options;
            l.set(Ht(e, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: h,
            duration: i,
            times: o,
            type: a,
            ease: r,
            keyframes: e
        }
    }
    get duration() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            duration: n
        } = e;
        return z(n)
    }
    get time() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            animation: n
        } = e;
        return z(n.currentTime || 0)
    }
    set time(e) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: s
        } = n;
        s.currentTime = $(e)
    }
    get speed() {
        const {
            resolved: e
        } = this;
        if (!e) return 1;
        const {
            animation: n
        } = e;
        return n.playbackRate
    }
    set speed(e) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: s
        } = n;
        s.playbackRate = e
    }
    get state() {
        const {
            resolved: e
        } = this;
        if (!e) return "idle";
        const {
            animation: n
        } = e;
        return n.playState
    }
    get startTime() {
        const {
            resolved: e
        } = this;
        if (!e) return null;
        const {
            animation: n
        } = e;
        return n.startTime
    }
    attachTimeline(e) {
        if (!this._resolved) this.pendingTimeline = e;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return j;
            const {
                animation: s
            } = n;
            An(s, e)
        }
        return j
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n
        } = e;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n
        } = e;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n,
            keyframes: s,
            duration: i,
            type: o,
            ease: r,
            times: a
        } = e;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: u,
                onUpdate: c,
                onComplete: h,
                element: f,
                ...d
            } = this.options, p = new Ke({ ...d,
                keyframes: s,
                duration: i,
                type: o,
                ease: r,
                times: a,
                isGenerator: !0
            }), g = $(this.time);
            u.setWithVelocity(p.sample(g - _t).value, p.sample(g).value, _t)
        }
        const {
            onStop: l
        } = this.options;
        l && l(), this.cancel()
    }
    complete() {
        const {
            resolved: e
        } = this;
        e && e.animation.finish()
    }
    cancel() {
        const {
            resolved: e
        } = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {
            motionValue: n,
            name: s,
            repeatDelay: i,
            repeatType: o,
            damping: r,
            type: a
        } = e;
        return Vo() && s && So.has(s) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && o !== "mirror" && r !== 0 && a !== "inertia"
    }
}
const Eo = We(() => window.ScrollTimeline !== void 0);
class Lo {
    constructor(e) {
        this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
    }
    then(e, n) {
        return Promise.all(this.animations).then(e).catch(n)
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, n) {
        for (let s = 0; s < this.animations.length; s++) this.animations[s][e] = n
    }
    attachTimeline(e, n) {
        const s = this.animations.map(i => Eo() && i.attachTimeline ? i.attachTimeline(e) : n(i));
        return () => {
            s.forEach((i, o) => {
                i && i(), this.animations[o].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let n = 0; n < this.animations.length; n++) e = Math.max(e, this.animations[n].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(n => n[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}

function Fo({
    when: t,
    delay: e,
    delayChildren: n,
    staggerChildren: s,
    staggerDirection: i,
    repeat: o,
    repeatType: r,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}
const Ge = (t, e, n, s = {}, i, o) => r => {
        const a = Re(s, t) || {},
            l = a.delay || s.delay || 0;
        let {
            elapsed: u = 0
        } = s;
        u = u - $(l);
        let c = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: f => {
                e.set(f), a.onUpdate && a.onUpdate(f)
            },
            onComplete: () => {
                r(), a.onComplete && a.onComplete()
            },
            name: t,
            motionValue: e,
            element: o ? void 0 : i
        };
        Fo(a) || (c = { ...c,
            ...nr(t, c)
        }), c.duration && (c.duration = $(c.duration)), c.repeatDelay && (c.repeatDelay = $(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
        let h = !1;
        if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (h = !0)), h && !o && e.get() !== void 0) {
            const f = Ht(c.keyframes, a);
            if (f !== void 0) return V.update(() => {
                c.onUpdate(f), c.onComplete()
            }), new Lo([])
        }
        return !o && bn.supports(c) ? new bn(c) : new Ke(c)
    },
    Bo = t => !!(t && typeof t == "object" && t.mix && t.toValue),
    ko = t => he(t) ? t[t.length - 1] || 0 : t;

function $e(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function ze(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class He {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return $e(this.subscriptions, e), () => ze(this.subscriptions, e)
    }
    notify(e, n, s) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](e, n, s);
            else
                for (let o = 0; o < i; o++) {
                    const r = this.subscriptions[o];
                    r && r(e, n, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const wn = 30,
    jo = t => !isNaN(parseFloat(t));
class Io {
    constructor(e, n = {}) {
        this.version = "11.15.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = !0) => {
            const o = W.now();
            this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner
    }
    setCurrent(e) {
        this.current = e, this.updatedAt = W.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = jo(this.current))
    }
    setPrevFrameValue(e = this.current) {
        this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new He);
        const s = this.events[e].add(n);
        return e === "change" ? () => {
            s(), V.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : s
    }
    clearListeners() {
        for (const e in this.events) this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e, this.stopPassiveEffect = n
    }
    set(e, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, s) {
        this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s
    }
    jump(e, n = !0) {
        this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = W.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > wn) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, wn);
        return Zs(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(e) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function wt(t, e) {
    return new Io(t, e)
}

function Oo(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, wt(n))
}

function No(t, e) {
    const n = zt(t, e);
    let {
        transitionEnd: s = {},
        transition: i = {},
        ...o
    } = n || {};
    o = { ...o,
        ...s
    };
    for (const r in o) {
        const a = ko(o[r]);
        Oo(t, r, a)
    }
}
const Xe = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    Uo = "framerAppearId",
    ai = "data-" + Xe(Uo);

function li(t) {
    return t.props[ai]
}
const F = t => !!(t && t.getVelocity);

function _o(t) {
    return !!(F(t) && t.add)
}

function Te(t, e) {
    const n = t.getValue("willChange");
    if (_o(n)) return n.add(e)
}

function Ko({
    protectedKeys: t,
    needsAnimating: e
}, n) {
    const s = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1, s
}

function ui(t, e, {
    delay: n = 0,
    transitionOverride: s,
    type: i
} = {}) {
    var o;
    let {
        transition: r = t.getDefaultTransition(),
        transitionEnd: a,
        ...l
    } = e;
    s && (r = s);
    const u = [],
        c = i && t.animationState && t.animationState.getState()[i];
    for (const h in l) {
        const f = t.getValue(h, (o = t.latestValues[h]) !== null && o !== void 0 ? o : null),
            d = l[h];
        if (d === void 0 || c && Ko(c, h)) continue;
        const p = {
            delay: n,
            ...Re(r || {}, h)
        };
        let g = !1;
        if (window.MotionHandoffAnimation) {
            const m = li(t);
            if (m) {
                const v = window.MotionHandoffAnimation(m, h, V);
                v !== null && (p.startTime = v, g = !0)
            }
        }
        Te(t, h), f.start(Ge(h, f, d, t.shouldReduceMotion && st.has(h) ? {
            type: !1
        } : p, t, g));
        const y = f.animation;
        y && u.push(y)
    }
    return a && Promise.all(u).then(() => {
        V.update(() => {
            a && No(t, a)
        })
    }), u
}

function Pe(t, e, n = {}) {
    var s;
    const i = zt(t, e, n.type === "exit" ? (s = t.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
    let {
        transition: o = t.getDefaultTransition() || {}
    } = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const r = i ? () => Promise.all(ui(t, i, n)) : () => Promise.resolve(),
        a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: h,
                staggerDirection: f
            } = o;
            return Wo(t, e, c + u, h, f, n)
        } : () => Promise.resolve(),
        {
            when: l
        } = o;
    if (l) {
        const [u, c] = l === "beforeChildren" ? [r, a] : [a, r];
        return u().then(() => c())
    } else return Promise.all([r(), a(n.delay)])
}

function Wo(t, e, n = 0, s = 0, i = 1, o) {
    const r = [],
        a = (t.variantChildren.size - 1) * s,
        l = i === 1 ? (u = 0) => u * s : (u = 0) => a - u * s;
    return Array.from(t.variantChildren).sort(Go).forEach((u, c) => {
        u.notify("AnimationStart", e), r.push(Pe(u, e, { ...o,
            delay: n + l(c)
        }).then(() => u.notify("AnimationComplete", e)))
    }), Promise.all(r)
}

function Go(t, e) {
    return t.sortNodePosition(e)
}

function $o(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let s;
    if (Array.isArray(e)) {
        const i = e.map(o => Pe(t, o, n));
        s = Promise.all(i)
    } else if (typeof e == "string") s = Pe(t, e, n);
    else {
        const i = typeof e == "function" ? zt(t, e, n.custom) : e;
        s = Promise.all(ui(t, i, n))
    }
    return s.then(() => {
        t.notify("AnimationComplete", e)
    })
}
const zo = Me.length;

function ci(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
        const n = t.parent ? ci(t.parent) || {} : {};
        return t.props.initial !== void 0 && (n.initial = t.props.initial), n
    }
    const e = {};
    for (let n = 0; n < zo; n++) {
        const s = Me[n],
            i = t.props[s];
        (St(i) || i === !1) && (e[s] = i)
    }
    return e
}
const Ho = [...De].reverse(),
    Xo = De.length;

function Yo(t) {
    return e => Promise.all(e.map(({
        animation: n,
        options: s
    }) => $o(t, n, s)))
}

function qo(t) {
    let e = Yo(t),
        n = Vn(),
        s = !0;
    const i = l => (u, c) => {
        var h;
        const f = zt(t, c, l === "exit" ? (h = t.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
        if (f) {
            const {
                transition: d,
                transitionEnd: p,
                ...g
            } = f;
            u = { ...u,
                ...g,
                ...p
            }
        }
        return u
    };

    function o(l) {
        e = l(t)
    }

    function r(l) {
        const {
            props: u
        } = t, c = ci(t.parent) || {}, h = [], f = new Set;
        let d = {},
            p = 1 / 0;
        for (let y = 0; y < Xo; y++) {
            const m = Ho[y],
                v = n[m],
                T = u[m] !== void 0 ? u[m] : c[m],
                b = St(T),
                P = m === l ? v.isActive : null;
            P === !1 && (p = y);
            let w = T === c[m] && T !== u[m] && b;
            if (w && s && t.manuallyAnimateOnMount && (w = !1), v.protectedKeys = { ...d
                }, !v.isActive && P === null || !T && !v.prevProp || $t(T) || typeof T == "boolean") continue;
            const R = Zo(v.prevProp, T);
            let A = R || m === l && v.isActive && !w && b || y > p && b,
                k = !1;
            const O = Array.isArray(T) ? T : [T];
            let it = O.reduce(i(m), {});
            P === !1 && (it = {});
            const {
                prevResolvedValues: on = {}
            } = v, qi = { ...on,
                ...it
            }, an = B => {
                A = !0, f.has(B) && (k = !0, f.delete(B)), v.needsAnimating[B] = !0;
                const G = t.getValue(B);
                G && (G.liveStyle = !1)
            };
            for (const B in qi) {
                const G = it[B],
                    qt = on[B];
                if (d.hasOwnProperty(B)) continue;
                let Zt = !1;
                he(G) && he(qt) ? Zt = !Ss(G, qt) : Zt = G !== qt, Zt ? G != null ? an(B) : f.add(B) : G !== void 0 && f.has(B) ? an(B) : v.protectedKeys[B] = !0
            }
            v.prevProp = T, v.prevResolvedValues = it, v.isActive && (d = { ...d,
                ...it
            }), s && t.blockInitialAnimation && (A = !1), A && (!(w && R) || k) && h.push(...O.map(B => ({
                animation: B,
                options: {
                    type: m
                }
            })))
        }
        if (f.size) {
            const y = {};
            f.forEach(m => {
                const v = t.getBaseTarget(m),
                    T = t.getValue(m);
                T && (T.liveStyle = !0), y[m] = v ? ? null
            }), h.push({
                animation: y
            })
        }
        let g = !!h.length;
        return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (g = !1), s = !1, g ? e(h) : Promise.resolve()
    }

    function a(l, u) {
        var c;
        if (n[l].isActive === u) return Promise.resolve();
        (c = t.variantChildren) === null || c === void 0 || c.forEach(f => {
            var d;
            return (d = f.animationState) === null || d === void 0 ? void 0 : d.setActive(l, u)
        }), n[l].isActive = u;
        const h = r(l);
        for (const f in n) n[f].protectedKeys = {};
        return h
    }
    return {
        animateChanges: r,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = Vn(), s = !0
        }
    }
}

function Zo(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !Ss(e, t) : !1
}

function J(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Vn() {
    return {
        animate: J(!0),
        whileInView: J(),
        whileHover: J(),
        whileTap: J(),
        whileDrag: J(),
        whileFocus: J(),
        exit: J()
    }
}
class Z {
    constructor(e) {
        this.isMounted = !1, this.node = e
    }
    update() {}
}
class Jo extends Z {
    constructor(e) {
        super(e), e.animationState || (e.animationState = qo(e))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: e
        } = this.node.getProps();
        $t(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: e
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let Qo = 0;
class ta extends Z {
    constructor() {
        super(...arguments), this.id = Qo++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: e,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: s
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === s) return;
        const i = this.node.animationState.setActive("exit", !e);
        n && !e && i.then(() => n(this.id))
    }
    mount() {
        const {
            register: e
        } = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const ea = {
        animation: {
            Feature: Jo
        },
        exit: {
            Feature: ta
        }
    },
    _ = {
        x: !1,
        y: !1
    };

function hi() {
    return _.x || _.y
}

function na(t, e, n) {
    var s;
    if (t instanceof Element) return [t];
    if (typeof t == "string") {
        let i = document;
        e && (i = e.current);
        const o = (s = n == null ? void 0 : n[t]) !== null && s !== void 0 ? s : i.querySelectorAll(t);
        return o ? Array.from(o) : []
    }
    return Array.from(t)
}

function fi(t, e) {
    const n = na(t),
        s = new AbortController,
        i = {
            passive: !0,
            ...e,
            signal: s.signal
        };
    return [n, i, () => s.abort()]
}

function Cn(t) {
    return e => {
        e.pointerType === "touch" || hi() || t(e)
    }
}

function sa(t, e, n = {}) {
    const [s, i, o] = fi(t, n), r = Cn(a => {
        const {
            target: l
        } = a, u = e(a);
        if (!u || !l) return;
        const c = Cn(h => {
            u(h), l.removeEventListener("pointerleave", c)
        });
        l.addEventListener("pointerleave", c, i)
    });
    return s.forEach(a => {
        a.addEventListener("pointerenter", r, i)
    }), o
}
const Ye = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
    gt = new WeakSet;

function Dn(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}

function ne(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const ia = (t, e) => {
        const n = t.currentTarget;
        if (!n) return;
        const s = Dn(() => {
            if (gt.has(n)) return;
            ne(n, "down");
            const i = Dn(() => {
                    ne(n, "up")
                }),
                o = () => ne(n, "cancel");
            n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e)
        });
        n.addEventListener("keydown", s, e), n.addEventListener("blur", () => n.removeEventListener("keydown", s), e)
    },
    ra = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function oa(t) {
    return ra.has(t.tagName) || t.tabIndex !== -1
}
const di = (t, e) => e ? t === e ? !0 : di(t, e.parentElement) : !1;

function Mn(t) {
    return Ye(t) && !hi()
}

function aa(t, e, n = {}) {
    const [s, i, o] = fi(t, n), r = a => {
        const l = a.currentTarget;
        if (!Mn(a) || gt.has(l)) return;
        gt.add(l);
        const u = e(a),
            c = (d, p) => {
                window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", f), !(!Mn(d) || !gt.has(l)) && (gt.delete(l), u && u(d, {
                    success: p
                }))
            },
            h = d => {
                c(d, n.useGlobalTarget || di(l, d.target))
            },
            f = d => {
                c(d, !1)
            };
        window.addEventListener("pointerup", h, i), window.addEventListener("pointercancel", f, i)
    };
    return s.forEach(a => {
        oa(a) || (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i), a.addEventListener("focus", u => ia(u, i), i)
    }), o
}

function la(t) {
    return t === "x" || t === "y" ? _[t] ? null : (_[t] = !0, () => {
        _[t] = !1
    }) : _.x || _.y ? null : (_.x = _.y = !0, () => {
        _.x = _.y = !1
    })
}

function Et(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const ua = t => e => Ye(e) && t(e, Et(e));

function Vt(t, e, n, s = {
    passive: !0
}) {
    return t.addEventListener(e, n, s), () => t.removeEventListener(e, n)
}

function xt(t, e, n, s) {
    return Vt(t, e, ua(n), s)
}
const Rn = (t, e) => Math.abs(t - e);

function ca(t, e) {
    const n = Rn(t.x, e.x),
        s = Rn(t.y, e.y);
    return Math.sqrt(n ** 2 + s ** 2)
}
class mi {
    constructor(e, n, {
        transformPagePoint: s,
        contextWindow: i,
        dragSnapToOrigin: o = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const h = ie(this.lastMoveEventInfo, this.history),
                    f = this.startEvent !== null,
                    d = ca(h.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!f && !d) return;
                const {
                    point: p
                } = h, {
                    timestamp: g
                } = E;
                this.history.push({ ...p,
                    timestamp: g
                });
                const {
                    onStart: y,
                    onMove: m
                } = this.handlers;
                f || (y && y(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, h)
            }, this.handlePointerMove = (h, f) => {
                this.lastMoveEvent = h, this.lastMoveEventInfo = se(f, this.transformPagePoint), V.update(this.updatePoint, !0)
            }, this.handlePointerUp = (h, f) => {
                this.end();
                const {
                    onEnd: d,
                    onSessionEnd: p,
                    resumeAnimation: g
                } = this.handlers;
                if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const y = ie(h.type === "pointercancel" ? this.lastMoveEventInfo : se(f, this.transformPagePoint), this.history);
                this.startEvent && d && d(h, y), p && p(h, y)
            }, !Ye(e)) return;
        this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
        const r = Et(e),
            a = se(r, this.transformPagePoint),
            {
                point: l
            } = a,
            {
                timestamp: u
            } = E;
        this.history = [{ ...l,
            timestamp: u
        }];
        const {
            onSessionStart: c
        } = n;
        c && c(e, ie(a, this.history)), this.removeListeners = Rt(xt(this.contextWindow, "pointermove", this.handlePointerMove), xt(this.contextWindow, "pointerup", this.handlePointerUp), xt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(), Y(this.updatePoint)
    }
}

function se(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function En(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function ie({
    point: t
}, e) {
    return {
        point: t,
        delta: En(t, pi(e)),
        offset: En(t, ha(e)),
        velocity: fa(e, .1)
    }
}

function ha(t) {
    return t[0]
}

function pi(t) {
    return t[t.length - 1]
}

function fa(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let n = t.length - 1,
        s = null;
    const i = pi(t);
    for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > $(e)));) n--;
    if (!s) return {
        x: 0,
        y: 0
    };
    const o = z(i.timestamp - s.timestamp);
    if (o === 0) return {
        x: 0,
        y: 0
    };
    const r = {
        x: (i.x - s.x) / o,
        y: (i.y - s.y) / o
    };
    return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
}

function ot(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
const gi = 1e-4,
    da = 1 - gi,
    ma = 1 + gi,
    yi = .01,
    pa = 0 - yi,
    ga = 0 + yi;

function I(t) {
    return t.max - t.min
}

function ya(t, e, n) {
    return Math.abs(t - e) <= n
}

function Ln(t, e, n, s = .5) {
    t.origin = s, t.originPoint = C(e.min, e.max, t.origin), t.scale = I(n) / I(e), t.translate = C(n.min, n.max, t.origin) - t.originPoint, (t.scale >= da && t.scale <= ma || isNaN(t.scale)) && (t.scale = 1), (t.translate >= pa && t.translate <= ga || isNaN(t.translate)) && (t.translate = 0)
}

function Tt(t, e, n, s) {
    Ln(t.x, e.x, n.x, s ? s.originX : void 0), Ln(t.y, e.y, n.y, s ? s.originY : void 0)
}

function Fn(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + I(e)
}

function va(t, e, n) {
    Fn(t.x, e.x, n.x), Fn(t.y, e.y, n.y)
}

function Bn(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + I(e)
}

function Pt(t, e, n) {
    Bn(t.x, e.x, n.x), Bn(t.y, e.y, n.y)
}

function xa(t, {
    min: e,
    max: n
}, s) {
    return e !== void 0 && t < e ? t = s ? C(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? C(n, t, s.max) : Math.min(t, n)), t
}

function kn(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}

function Ta(t, {
    top: e,
    left: n,
    bottom: s,
    right: i
}) {
    return {
        x: kn(t.x, n, i),
        y: kn(t.y, e, s)
    }
}

function jn(t, e) {
    let n = e.min - t.min,
        s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), {
        min: n,
        max: s
    }
}

function Pa(t, e) {
    return {
        x: jn(t.x, e.x),
        y: jn(t.y, e.y)
    }
}

function Sa(t, e) {
    let n = .5;
    const s = I(t),
        i = I(e);
    return i > s ? n = ht(e.min, e.max - s, t.min) : s > i && (n = ht(t.min, t.max - i, e.min)), H(0, 1, n)
}

function Aa(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
}
const Se = .35;

function ba(t = Se) {
    return t === !1 ? t = 0 : t === !0 && (t = Se), {
        x: In(t, "left", "right"),
        y: In(t, "top", "bottom")
    }
}

function In(t, e, n) {
    return {
        min: On(t, e),
        max: On(t, n)
    }
}

function On(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const Nn = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    at = () => ({
        x: Nn(),
        y: Nn()
    }),
    Un = () => ({
        min: 0,
        max: 0
    }),
    M = () => ({
        x: Un(),
        y: Un()
    });

function U(t) {
    return [t("x"), t("y")]
}

function vi({
    top: t,
    left: e,
    right: n,
    bottom: s
}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: s
        }
    }
}

function wa({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function Va(t, e) {
    if (!e) return t;
    const n = e({
            x: t.left,
            y: t.top
        }),
        s = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: s.y,
        right: s.x
    }
}

function re(t) {
    return t === void 0 || t === 1
}

function Ae({
    scale: t,
    scaleX: e,
    scaleY: n
}) {
    return !re(t) || !re(e) || !re(n)
}

function Q(t) {
    return Ae(t) || xi(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function xi(t) {
    return _n(t.x) || _n(t.y)
}

function _n(t) {
    return t && t !== "0%"
}

function Kt(t, e, n) {
    const s = t - n,
        i = e * s;
    return n + i
}

function Kn(t, e, n, s, i) {
    return i !== void 0 && (t = Kt(t, i, s)), Kt(t, n, s) + e
}

function be(t, e = 0, n = 1, s, i) {
    t.min = Kn(t.min, e, n, s, i), t.max = Kn(t.max, e, n, s, i)
}

function Ti(t, {
    x: e,
    y: n
}) {
    be(t.x, e.translate, e.scale, e.originPoint), be(t.y, n.translate, n.scale, n.originPoint)
}
const Wn = .999999999999,
    Gn = 1.0000000000001;

function Ca(t, e, n, s = !1) {
    const i = n.length;
    if (!i) return;
    e.x = e.y = 1;
    let o, r;
    for (let a = 0; a < i; a++) {
        o = n[a], r = o.projectionDelta;
        const {
            visualElement: l
        } = o.options;
        l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && ut(t, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Ti(t, r)), s && Q(o.latestValues) && ut(t, o.latestValues))
    }
    e.x < Gn && e.x > Wn && (e.x = 1), e.y < Gn && e.y > Wn && (e.y = 1)
}

function lt(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function $n(t, e, n, s, i = .5) {
    const o = C(t.min, t.max, i);
    be(t, e, n, o, s)
}

function ut(t, e) {
    $n(t.x, e.x, e.scaleX, e.scale, e.originX), $n(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function Pi(t, e) {
    return vi(Va(t.getBoundingClientRect(), e))
}

function Da(t, e, n) {
    const s = Pi(t, n),
        {
            scroll: i
        } = e;
    return i && (lt(s.x, i.offset.x), lt(s.y, i.offset.y)), s
}
const Si = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    Ma = new WeakMap;
class Ra {
    constructor(e) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = M(), this.visualElement = e
    }
    start(e, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: s
        } = this.visualElement;
        if (s && s.isPresent === !1) return;
        const i = c => {
                const {
                    dragSnapToOrigin: h
                } = this.getProps();
                h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Et(c).point)
            },
            o = (c, h) => {
                const {
                    drag: f,
                    dragPropagation: d,
                    onDragStart: p
                } = this.getProps();
                if (f && !d && (this.openDragLock && this.openDragLock(), this.openDragLock = la(f), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), U(y => {
                    let m = this.getAxisMotionValue(y).get() || 0;
                    if (K.test(m)) {
                        const {
                            projection: v
                        } = this.visualElement;
                        if (v && v.layout) {
                            const T = v.layout.layoutBox[y];
                            T && (m = I(T) * (parseFloat(m) / 100))
                        }
                    }
                    this.originPoint[y] = m
                }), p && V.postRender(() => p(c, h)), Te(this.visualElement, "transform");
                const {
                    animationState: g
                } = this.visualElement;
                g && g.setActive("whileDrag", !0)
            },
            r = (c, h) => {
                const {
                    dragPropagation: f,
                    dragDirectionLock: d,
                    onDirectionLock: p,
                    onDrag: g
                } = this.getProps();
                if (!f && !this.openDragLock) return;
                const {
                    offset: y
                } = h;
                if (d && this.currentDirection === null) {
                    this.currentDirection = Ea(y), this.currentDirection !== null && p && p(this.currentDirection);
                    return
                }
                this.updateAxis("x", h.point, y), this.updateAxis("y", h.point, y), this.visualElement.render(), g && g(c, h)
            },
            a = (c, h) => this.stop(c, h),
            l = () => U(c => {
                var h;
                return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) === null || h === void 0 ? void 0 : h.play())
            }),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new mi(e, {
            onSessionStart: i,
            onStart: o,
            onMove: r,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: Si(this.visualElement)
        })
    }
    stop(e, n) {
        const s = this.isDragging;
        if (this.cancel(), !s) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: o
        } = this.getProps();
        o && V.postRender(() => o(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: e,
            animationState: n
        } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: s
        } = this.getProps();
        !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, s) {
        const {
            drag: i
        } = this.getProps();
        if (!s || !Bt(e, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(e);
        let r = this.originPoint[e] + s[e];
        this.constraints && this.constraints[e] && (r = xa(r, this.constraints[e], this.elastic[e])), o.set(r)
    }
    resolveConstraints() {
        var e;
        const {
            dragConstraints: n,
            dragElastic: s
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
        n && ot(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Ta(i.layoutBox, n) : this.constraints = !1, this.elastic = ba(s), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && U(r => {
            this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Aa(i.layoutBox[r], this.constraints[r]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: e,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!e || !ot(e)) return !1;
        const s = e.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = Da(s, i.root, this.visualElement.getTransformPagePoint());
        let r = Pa(i.layout.layoutBox, o);
        if (n) {
            const a = n(wa(r));
            this.hasMutatedConstraints = !!a, a && (r = vi(a))
        }
        return r
    }
    startAnimation(e) {
        const {
            drag: n,
            dragMomentum: s,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: r,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = U(c => {
            if (!Bt(c, n, this.currentDirection)) return;
            let h = l && l[c] || {};
            r && (h = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6,
                d = i ? 40 : 1e7,
                p = {
                    type: "inertia",
                    velocity: s ? e[c] : 0,
                    bounceStiffness: f,
                    bounceDamping: d,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...h
                };
            return this.startAxisValueAnimation(c, p)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(e, n) {
        const s = this.getAxisMotionValue(e);
        return Te(this.visualElement, e), s.start(Ge(e, s, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        U(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        U(e => {
            var n;
            return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = `_drag${e.toUpperCase()}`,
            s = this.visualElement.getProps(),
            i = s[n];
        return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        U(n => {
            const {
                drag: s
            } = this.getProps();
            if (!Bt(n, s, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: r,
                    max: a
                } = i.layout.layoutBox[n];
                o.set(e[n] - C(r, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: e,
            dragConstraints: n
        } = this.getProps(), {
            projection: s
        } = this.visualElement;
        if (!ot(n) || !s || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        U(r => {
            const a = this.getAxisMotionValue(r);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[r] = Sa({
                    min: l,
                    max: l
                }, this.constraints[r])
            }
        });
        const {
            transformTemplate: o
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), U(r => {
            if (!Bt(r, e, null)) return;
            const a = this.getAxisMotionValue(r),
                {
                    min: l,
                    max: u
                } = this.constraints[r];
            a.set(C(l, u, i[r]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        Ma.set(this.visualElement, this);
        const e = this.visualElement.current,
            n = xt(e, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(l)
            }),
            s = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                ot(l) && l.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", s);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), V.read(s);
        const r = Vt(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (U(c => {
                    const h = this.getAxisMotionValue(c);
                    h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            r(), n(), o(), a && a()
        }
    }
    getProps() {
        const e = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: s = !1,
                dragPropagation: i = !1,
                dragConstraints: o = !1,
                dragElastic: r = Se,
                dragMomentum: a = !0
            } = e;
        return { ...e,
            drag: n,
            dragDirectionLock: s,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: r,
            dragMomentum: a
        }
    }
}

function Bt(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}

function Ea(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
class La extends Z {
    constructor(e) {
        super(e), this.removeGroupControls = j, this.removeListeners = j, this.controls = new Ra(e)
    }
    mount() {
        const {
            dragControls: e
        } = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || j
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const zn = t => (e, n) => {
    t && V.postRender(() => t(e, n))
};
class Fa extends Z {
    constructor() {
        super(...arguments), this.removePointerDownListener = j
    }
    onPointerDown(e) {
        this.session = new mi(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Si(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: e,
            onPanStart: n,
            onPan: s,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: zn(e),
            onStart: zn(n),
            onMove: s,
            onEnd: (o, r) => {
                delete this.session, i && V.postRender(() => i(o, r))
            }
        }
    }
    mount() {
        this.removePointerDownListener = xt(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const qe = S.createContext(null);

function Ba() {
    const t = S.useContext(qe);
    if (t === null) return [!0, null];
    const {
        isPresent: e,
        onExitComplete: n,
        register: s
    } = t, i = S.useId();
    S.useEffect(() => s(i), []);
    const o = S.useCallback(() => n && n(i), [i, n]);
    return !e && n ? [!1, o] : [!0]
}
const Ai = S.createContext({}),
    bi = S.createContext({}),
    jt = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };

function Hn(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const mt = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (x.test(t)) t = parseFloat(t);
                else return t;
            const n = Hn(t, e.target.x),
                s = Hn(t, e.target.y);
            return `${n}% ${s}%`
        }
    },
    ka = {
        correct: (t, {
            treeScale: e,
            projectionDelta: n
        }) => {
            const s = t,
                i = q.parse(t);
            if (i.length > 5) return s;
            const o = q.createTransformer(t),
                r = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * e.x,
                l = n.y.scale * e.y;
            i[0 + r] /= a, i[1 + r] /= l;
            const u = C(a, l, .5);
            return typeof i[2 + r] == "number" && (i[2 + r] /= u), typeof i[3 + r] == "number" && (i[3 + r] /= u), o(i)
        }
    },
    Wt = {};

function ja(t) {
    Object.assign(Wt, t)
}
const {
    schedule: Ze
} = bs(queueMicrotask, !1);
class Ia extends S.Component {
    componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: s,
            layoutId: i
        } = this.props, {
            projection: o
        } = e;
        ja(Oa), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), o.setOptions({ ...o.options,
            onExitComplete: () => this.safeToRemove()
        })), jt.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: n,
            visualElement: s,
            drag: i,
            isPresent: o
        } = this.props, r = s.projection;
        return r && (r.isPresent = o, i || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || V.postRender(() => {
            const a = r.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: e
        } = this.props.visualElement;
        e && (e.root.didUpdate(), Ze.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: s
        } = this.props, {
            projection: i
        } = e;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: e
        } = this.props;
        e && e()
    }
    render() {
        return null
    }
}

function wi(t) {
    const [e, n] = Ba(), s = S.useContext(Ai);
    return ce.jsx(Ia, { ...t,
        layoutGroup: s,
        switchLayoutGroup: S.useContext(bi),
        isPresent: e,
        safeToRemove: n
    })
}
const Oa = {
        borderRadius: { ...mt,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: mt,
        borderTopRightRadius: mt,
        borderBottomLeftRadius: mt,
        borderBottomRightRadius: mt,
        boxShadow: ka
    },
    Vi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    Na = Vi.length,
    Xn = t => typeof t == "string" ? parseFloat(t) : t,
    Yn = t => typeof t == "number" || x.test(t);

function Ua(t, e, n, s, i, o) {
    i ? (t.opacity = C(0, n.opacity !== void 0 ? n.opacity : 1, _a(s)), t.opacityExit = C(e.opacity !== void 0 ? e.opacity : 1, 0, Ka(s))) : o && (t.opacity = C(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
    for (let r = 0; r < Na; r++) {
        const a = `border${Vi[r]}Radius`;
        let l = qn(e, a),
            u = qn(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || Yn(l) === Yn(u) ? (t[a] = Math.max(C(Xn(l), Xn(u), s), 0), (K.test(u) || K.test(l)) && (t[a] += "%")) : t[a] = u
    }(e.rotate || n.rotate) && (t.rotate = C(e.rotate || 0, n.rotate || 0, s))
}

function qn(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const _a = Ci(0, .5, Es),
    Ka = Ci(.5, .95, j);

function Ci(t, e, n) {
    return s => s < t ? 0 : s > e ? 1 : n(ht(t, e, s))
}

function Zn(t, e) {
    t.min = e.min, t.max = e.max
}

function N(t, e) {
    Zn(t.x, e.x), Zn(t.y, e.y)
}

function Jn(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function Qn(t, e, n, s, i) {
    return t -= e, t = Kt(t, 1 / n, s), i !== void 0 && (t = Kt(t, 1 / i, s)), t
}

function Wa(t, e = 0, n = 1, s = .5, i, o = t, r = t) {
    if (K.test(e) && (e = parseFloat(e), e = C(r.min, r.max, e / 100) - r.min), typeof e != "number") return;
    let a = C(o.min, o.max, s);
    t === o && (a -= e), t.min = Qn(t.min, e, n, a, i), t.max = Qn(t.max, e, n, a, i)
}

function ts(t, e, [n, s, i], o, r) {
    Wa(t, e[n], e[s], e[i], e.scale, o, r)
}
const Ga = ["x", "scaleX", "originX"],
    $a = ["y", "scaleY", "originY"];

function es(t, e, n, s) {
    ts(t.x, e, Ga, n ? n.x : void 0, s ? s.x : void 0), ts(t.y, e, $a, n ? n.y : void 0, s ? s.y : void 0)
}

function ns(t) {
    return t.translate === 0 && t.scale === 1
}

function Di(t) {
    return ns(t.x) && ns(t.y)
}

function ss(t, e) {
    return t.min === e.min && t.max === e.max
}

function za(t, e) {
    return ss(t.x, e.x) && ss(t.y, e.y)
}

function is(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function Mi(t, e) {
    return is(t.x, e.x) && is(t.y, e.y)
}

function rs(t) {
    return I(t.x) / I(t.y)
}

function os(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class Ha {
    constructor() {
        this.members = []
    }
    add(e) {
        $e(this.members, e), e.scheduleRender()
    }
    remove(e) {
        if (ze(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(i => e === i);
        if (n === 0) return !1;
        let s;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                s = o;
                break
            }
        }
        return s ? (this.promote(s), !0) : !1
    }
    promote(e, n) {
        const s = this.lead;
        if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
            s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
                crossfade: i
            } = e.options;
            i === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {
                options: n,
                resumingFrom: s
            } = e;
            n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function Xa(t, e, n) {
    let s = "";
    const i = t.x.translate / e.x,
        o = t.y.translate / e.y,
        r = (n == null ? void 0 : n.z) || 0;
    if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1/e.x}, ${1/e.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: c,
            rotateX: h,
            rotateY: f,
            skewX: d,
            skewY: p
        } = n;
        u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), h && (s += `rotateX(${h}deg) `), f && (s += `rotateY(${f}deg) `), d && (s += `skewX(${d}deg) `), p && (s += `skewY(${p}deg) `)
    }
    const a = t.x.scale * e.x,
        l = t.y.scale * e.y;
    return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none"
}
const Ya = (t, e) => t.depth - e.depth;
class qa {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(e) {
        $e(this.children, e), this.isDirty = !0
    }
    remove(e) {
        ze(this.children, e), this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(Ya), this.isDirty = !1, this.children.forEach(e)
    }
}

function It(t) {
    const e = F(t) ? t.get() : t;
    return Bo(e) ? e.toValue() : e
}

function Za(t, e) {
    const n = W.now(),
        s = ({
            timestamp: i
        }) => {
            const o = i - n;
            o >= e && (Y(s), t(o - e))
        };
    return V.read(s, !0), () => Y(s)
}

function Ja(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}

function Qa(t, e, n) {
    const s = F(t) ? t : wt(t);
    return s.start(Ge("", s, e, n)), s.animation
}
const tt = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    yt = typeof window < "u" && window.MotionDebug !== void 0,
    oe = ["", "X", "Y", "Z"],
    tl = {
        visibility: "hidden"
    },
    as = 1e3;
let el = 0;

function ae(t, e, n, s) {
    const {
        latestValues: i
    } = e;
    i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0))
}

function Ri(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    const {
        visualElement: e
    } = t.options;
    if (!e) return;
    const n = li(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: o
        } = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", V, !(i || o))
    }
    const {
        parent: s
    } = t;
    s && !s.hasCheckedOptimisedAppear && Ri(s)
}

function Ei({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: n,
    checkIsScrollRoot: s,
    resetTransform: i
}) {
    return class {
        constructor(r = {}, a = e == null ? void 0 : e()) {
            this.id = el++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, yt && (tt.totalNodes = tt.resolvedTargetDeltas = tt.recalculatedProjection = 0), this.nodes.forEach(il), this.nodes.forEach(ul), this.nodes.forEach(cl), this.nodes.forEach(rl), yt && window.MotionDebug.record(tt)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new qa)
        }
        addEventListener(r, a) {
            return this.eventHandlers.has(r) || this.eventHandlers.set(r, new He), this.eventHandlers.get(r).add(a)
        }
        notifyListeners(r, ...a) {
            const l = this.eventHandlers.get(r);
            l && l.notify(...a)
        }
        hasListeners(r) {
            return this.eventHandlers.has(r)
        }
        mount(r, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = Ja(r), this.instance = r;
            const {
                layoutId: l,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
                let h;
                const f = () => this.root.updateBlockedByResize = !1;
                t(r, () => {
                    this.root.updateBlockedByResize = !0, h && h(), h = Za(f, 250), jt.hasAnimatedSinceResize && (jt.hasAnimatedSinceResize = !1, this.nodes.forEach(us))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
                delta: h,
                hasLayoutChanged: f,
                hasRelativeTargetChanged: d,
                layout: p
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const g = this.options.transition || c.getDefaultTransition() || pl,
                    {
                        onLayoutAnimationStart: y,
                        onLayoutAnimationComplete: m
                    } = c.getProps(),
                    v = !this.targetLayout || !Mi(this.targetLayout, p) || d,
                    T = !f && d;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || T || f && (v || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, T);
                    const b = { ...Re(g, "layout"),
                        onPlay: y,
                        onComplete: m
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b)
                } else f || us(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = p
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const r = this.getStack();
            r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Y(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(hl), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: r
            } = this.options;
            return r && r.getProps().transformTemplate
        }
        willUpdate(r = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ri(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const h = this.path[c];
                h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ls);
                return
            }
            this.isUpdating || this.nodes.forEach(al), this.isUpdating = !1, this.nodes.forEach(ll), this.nodes.forEach(nl), this.nodes.forEach(sl), this.clearAllSnapshots();
            const a = W.now();
            E.delta = H(0, 1e3 / 60, a - E.timestamp), E.timestamp = a, E.isProcessing = !0, Jt.update.process(E), Jt.preRender.process(E), Jt.render.process(E), E.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Ze.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(ol), this.sharedNodes.forEach(fl)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            V.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const r = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = M(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0)
        }
        updateScroll(r = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a) {
                const l = s(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: r,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !Di(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            r && (a || Q(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(r = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return r && (l = this.removeTransform(l)), gl(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var r;
            const {
                visualElement: a
            } = this.options;
            if (!a) return M();
            const l = a.measureViewportBox();
            if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(yl))) {
                const {
                    scroll: c
                } = this.root;
                c && (lt(l.x, c.offset.x), lt(l.y, c.offset.y))
            }
            return l
        }
        removeElementScroll(r) {
            var a;
            const l = M();
            if (N(l, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: h,
                        options: f
                    } = c;
                c !== this.root && h && f.layoutScroll && (h.wasRoot && N(l, r), lt(l.x, h.offset.x), lt(l.y, h.offset.y))
            }
            return l
        }
        applyTransform(r, a = !1) {
            const l = M();
            N(l, r);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && ut(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), Q(c.latestValues) && ut(l, c.latestValues)
            }
            return Q(this.latestValues) && ut(l, this.latestValues), l
        }
        removeTransform(r) {
            const a = M();
            N(a, r);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Q(u.latestValues)) continue;
                Ae(u.latestValues) && u.updateSnapshot();
                const c = M(),
                    h = u.measurePageBox();
                N(c, h), es(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return Q(this.latestValues) && es(a, this.latestValues), a
        }
        setTargetDelta(r) {
            this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(r) {
            this.options = { ...this.options,
                ...r,
                crossfade: r.crossfade !== void 0 ? r.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== E.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(r = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(r || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: h,
                layoutId: f
            } = this.options;
            if (!(!this.layout || !(h || f))) {
                if (this.resolvedRelativeTargetAt = E.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const d = this.getClosestProjectingParent();
                    d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = M(), this.relativeTargetOrigin = M(), Pt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = M(), this.targetWithTransforms = M()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), va(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : N(this.target, this.layout.layoutBox), Ti(this.target, this.targetDelta)) : N(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const d = this.getClosestProjectingParent();
                        d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = M(), this.relativeTargetOrigin = M(), Pt(this.relativeTargetOrigin, this.target, d.target), N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    yt && tt.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ae(this.parent.latestValues) || xi(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var r;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === E.timestamp && (u = !1), u) return;
            const {
                layout: c,
                layoutId: h
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || h)) return;
            N(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x,
                d = this.treeScale.y;
            Ca(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = M());
            const {
                target: p
            } = a;
            if (!p) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Jn(this.prevProjectionDelta.x, this.projectionDelta.x), Jn(this.prevProjectionDelta.y, this.projectionDelta.y)), Tt(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== d || !os(this.projectionDelta.x, this.prevProjectionDelta.x) || !os(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p)), yt && tt.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(r = !0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), r) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = at(), this.projectionDelta = at(), this.projectionDeltaWithTransform = at()
        }
        setAnimationOrigin(r, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = { ...this.latestValues
                },
                h = at();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const f = M(),
                d = l ? l.source : void 0,
                p = this.layout ? this.layout.source : void 0,
                g = d !== p,
                y = this.getStack(),
                m = !y || y.members.length <= 1,
                v = !!(g && !m && this.options.crossfade === !0 && !this.path.some(ml));
            this.animationProgress = 0;
            let T;
            this.mixTargetDelta = b => {
                const P = b / 1e3;
                cs(h.x, r.x, P), cs(h.y, r.y, P), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Pt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), dl(this.relativeTarget, this.relativeTargetOrigin, f, P), T && za(this.relativeTarget, T) && (this.isProjectionDirty = !1), T || (T = M()), N(T, this.relativeTarget)), g && (this.animationValues = c, Ua(c, u, this.latestValues, P, v, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = P
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(r) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Y(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update(() => {
                jt.hasAnimatedSinceResize = !0, this.currentAnimation = Qa(0, as, { ...r,
                    onUpdate: a => {
                        this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a)
                    },
                    onComplete: () => {
                        r.onComplete && r.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const r = this.getStack();
            r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(as), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const r = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: c
            } = r;
            if (!(!a || !l || !u)) {
                if (this !== r && this.layout && u && Li(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || M();
                    const h = I(this.layout.layoutBox.x);
                    l.x.min = r.target.x.min, l.x.max = l.x.min + h;
                    const f = I(this.layout.layoutBox.y);
                    l.y.min = r.target.y.min, l.y.max = l.y.min + f
                }
                N(a, l), ut(a, c), Tt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(r, a) {
            this.sharedNodes.has(r) || this.sharedNodes.set(r, new Ha), this.sharedNodes.get(r).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const r = this.getStack();
            return r ? r.lead === this : !0
        }
        getLead() {
            var r;
            const {
                layoutId: a
            } = this.options;
            return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this
        }
        getPrevLead() {
            var r;
            const {
                layoutId: a
            } = this.options;
            return a ? (r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: r
            } = this.options;
            if (r) return this.root.sharedNodes.get(r)
        }
        promote({
            needsReset: r,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const r = this.getStack();
            return r ? r.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: r
            } = this.options;
            if (!r) return;
            let a = !1;
            const {
                latestValues: l
            } = r;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const u = {};
            l.z && ae("z", r, u, this.animationValues);
            for (let c = 0; c < oe.length; c++) ae(`rotate${oe[c]}`, r, u, this.animationValues), ae(`skew${oe[c]}`, r, u, this.animationValues);
            r.render();
            for (const c in u) r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
            r.scheduleRender()
        }
        getProjectionStyles(r) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return tl;
            const u = {
                    visibility: ""
                },
                c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = It(r == null ? void 0 : r.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const h = this.getLead();
            if (!this.projectionDelta || !this.layout || !h.target) {
                const g = {};
                return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = It(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !Q(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g
            }
            const f = h.animationValues || h.latestValues;
            this.applyTransformsToTarget(), u.transform = Xa(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
            const {
                x: d,
                y: p
            } = this.projectionDelta;
            u.transformOrigin = `${d.origin*100}% ${p.origin*100}% 0`, h.animationValues ? u.opacity = h === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = h === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const g in Wt) {
                if (f[g] === void 0) continue;
                const {
                    correct: y,
                    applyTo: m
                } = Wt[g], v = u.transform === "none" ? f[g] : y(f[g], h);
                if (m) {
                    const T = m.length;
                    for (let b = 0; b < T; b++) u[m[b]] = v
                } else u[g] = v
            }
            return this.options.layoutId && (u.pointerEvents = h === this ? It(r == null ? void 0 : r.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(r => {
                var a;
                return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(ls), this.root.sharedNodes.clear()
        }
    }
}

function nl(t) {
    t.updateLayout()
}

function sl(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {
            layoutBox: s,
            measuredBox: i
        } = t.layout, {
            animationType: o
        } = t.options, r = n.source !== t.layout.source;
        o === "size" ? U(h => {
            const f = r ? n.measuredBox[h] : n.layoutBox[h],
                d = I(f);
            f.min = s[h].min, f.max = f.min + d
        }) : Li(o, n.layoutBox, s) && U(h => {
            const f = r ? n.measuredBox[h] : n.layoutBox[h],
                d = I(s[h]);
            f.max = f.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + d)
        });
        const a = at();
        Tt(a, s, n.layoutBox);
        const l = at();
        r ? Tt(l, t.applyTransform(i, !0), n.measuredBox) : Tt(l, s, n.layoutBox);
        const u = !Di(a);
        let c = !1;
        if (!t.resumeFrom) {
            const h = t.getClosestProjectingParent();
            if (h && !h.resumeFrom) {
                const {
                    snapshot: f,
                    layout: d
                } = h;
                if (f && d) {
                    const p = M();
                    Pt(p, n.layoutBox, f.layoutBox);
                    const g = M();
                    Pt(g, s, d.layoutBox), Mi(p, g) || (c = !0), h.options.layoutRoot && (t.relativeTarget = g, t.relativeTargetOrigin = p, t.relativeParent = h)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: s
        } = t.options;
        s && s()
    }
    t.options.transition = void 0
}

function il(t) {
    yt && tt.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function rl(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function ol(t) {
    t.clearSnapshot()
}

function ls(t) {
    t.clearMeasurements()
}

function al(t) {
    t.isLayoutDirty = !1
}

function ll(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function us(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function ul(t) {
    t.resolveTargetDelta()
}

function cl(t) {
    t.calcProjection()
}

function hl(t) {
    t.resetSkewAndRotation()
}

function fl(t) {
    t.removeLeadSnapshot()
}

function cs(t, e, n) {
    t.translate = C(e.translate, 0, n), t.scale = C(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function hs(t, e, n, s) {
    t.min = C(e.min, n.min, s), t.max = C(e.max, n.max, s)
}

function dl(t, e, n, s) {
    hs(t.x, e.x, n.x, s), hs(t.y, e.y, n.y, s)
}

function ml(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const pl = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    fs = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    ds = fs("applewebkit/") && !fs("chrome/") ? Math.round : j;

function ms(t) {
    t.min = ds(t.min), t.max = ds(t.max)
}

function gl(t) {
    ms(t.x), ms(t.y)
}

function Li(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !ya(rs(e), rs(n), .2)
}

function yl(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const vl = Ei({
        attachResizeListener: (t, e) => Vt(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    le = {
        current: void 0
    },
    Fi = Ei({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!le.current) {
                const t = new vl({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), le.current = t
            }
            return le.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    xl = {
        pan: {
            Feature: Fa
        },
        drag: {
            Feature: La,
            ProjectionNode: Fi,
            MeasureLayout: wi
        }
    };

function ps(t, e, n) {
    const {
        props: s
    } = t;
    t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n,
        o = s[i];
    o && V.postRender(() => o(e, Et(e)))
}
class Tl extends Z {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = sa(e, n => (ps(this.node, n, "Start"), s => ps(this.node, s, "End"))))
    }
    unmount() {}
}
class Pl extends Z {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Rt(Vt(this.node.current, "focus", () => this.onFocus()), Vt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function gs(t, e, n) {
    const {
        props: s
    } = t;
    t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n),
        o = s[i];
    o && V.postRender(() => o(e, Et(e)))
}
class Sl extends Z {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = aa(e, n => (gs(this.node, n, "Start"), (s, {
            success: i
        }) => gs(this.node, s, i ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const we = new WeakMap,
    ue = new WeakMap,
    Al = t => {
        const e = we.get(t.target);
        e && e(t)
    },
    bl = t => {
        t.forEach(Al)
    };

function wl({
    root: t,
    ...e
}) {
    const n = t || document;
    ue.has(n) || ue.set(n, {});
    const s = ue.get(n),
        i = JSON.stringify(e);
    return s[i] || (s[i] = new IntersectionObserver(bl, {
        root: t,
        ...e
    })), s[i]
}

function Vl(t, e, n) {
    const s = wl(e);
    return we.set(t, n), s.observe(t), () => {
        we.delete(t), s.unobserve(t)
    }
}
const Cl = {
    some: 0,
    all: 1
};
class Dl extends Z {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: e = {}
        } = this.node.getProps(), {
            root: n,
            margin: s,
            amount: i = "some",
            once: o
        } = e, r = {
            root: n ? n.current : void 0,
            rootMargin: s,
            threshold: typeof i == "number" ? i : Cl[i]
        }, a = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: h
            } = this.node.getProps(), f = u ? c : h;
            f && f(l)
        };
        return Vl(this.node.current, r, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: e,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(Ml(e, n)) && this.startObserver()
    }
    unmount() {}
}

function Ml({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return n => t[n] !== e[n]
}
const Rl = {
        inView: {
            Feature: Dl
        },
        tap: {
            Feature: Sl
        },
        focus: {
            Feature: Pl
        },
        hover: {
            Feature: Tl
        }
    },
    El = {
        layout: {
            ProjectionNode: Fi,
            MeasureLayout: wi
        }
    },
    Bi = S.createContext({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    }),
    Xt = S.createContext({}),
    Je = typeof window < "u",
    Ll = Je ? S.useLayoutEffect : S.useEffect,
    ki = S.createContext({
        strict: !1
    });

function Fl(t, e, n, s, i) {
    var o, r;
    const {
        visualElement: a
    } = S.useContext(Xt), l = S.useContext(ki), u = S.useContext(qe), c = S.useContext(Bi).reducedMotion, h = S.useRef(null);
    s = s || l.renderer, !h.current && s && (h.current = s(t, {
        visualState: e,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const f = h.current,
        d = S.useContext(bi);
    f && !f.projection && i && (f.type === "html" || f.type === "svg") && Bl(h.current, n, i, d);
    const p = S.useRef(!1);
    S.useInsertionEffect(() => {
        f && p.current && f.update(n, u)
    });
    const g = n[ai],
        y = S.useRef(!!g && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, g)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, g)));
    return Ll(() => {
        f && (p.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), Ze.render(f.render), y.current && f.animationState && f.animationState.animateChanges())
    }), S.useEffect(() => {
        f && (!y.current && f.animationState && f.animationState.animateChanges(), y.current && (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, g)
        }), y.current = !1))
    }), f
}

function Bl(t, e, n, s) {
    const {
        layoutId: i,
        layout: o,
        drag: r,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u
    } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : ji(t.parent)), t.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!r || a && ot(a),
        visualElement: t,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: s,
        layoutScroll: l,
        layoutRoot: u
    })
}

function ji(t) {
    if (t) return t.options.allowProjection !== !1 ? t.projection : ji(t.parent)
}

function kl(t, e, n) {
    return S.useCallback(s => {
        s && t.mount && t.mount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : ot(n) && (n.current = s))
    }, [e])
}

function Yt(t) {
    return $t(t.animate) || Me.some(e => St(t[e]))
}

function Ii(t) {
    return !!(Yt(t) || t.variants)
}

function jl(t, e) {
    if (Yt(t)) {
        const {
            initial: n,
            animate: s
        } = t;
        return {
            initial: n === !1 || St(n) ? n : void 0,
            animate: St(s) ? s : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function Il(t) {
    const {
        initial: e,
        animate: n
    } = jl(t, S.useContext(Xt));
    return S.useMemo(() => ({
        initial: e,
        animate: n
    }), [ys(e), ys(n)])
}

function ys(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const vs = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    ft = {};
for (const t in vs) ft[t] = {
    isEnabled: e => vs[t].some(n => !!e[n])
};

function Ol(t) {
    for (const e in t) ft[e] = { ...ft[e],
        ...t[e]
    }
}
const Nl = Symbol.for("motionComponentSymbol");

function Ul({
    preloadedFeatures: t,
    createVisualElement: e,
    useRender: n,
    useVisualState: s,
    Component: i
}) {
    t && Ol(t);

    function o(a, l) {
        let u;
        const c = { ...S.useContext(Bi),
                ...a,
                layoutId: _l(a)
            },
            {
                isStatic: h
            } = c,
            f = Il(a),
            d = s(a, h);
        if (!h && Je) {
            Kl();
            const p = Wl(c);
            u = p.MeasureLayout, f.visualElement = Fl(i, d, c, e, p.ProjectionNode)
        }
        return ce.jsxs(Xt.Provider, {
            value: f,
            children: [u && f.visualElement ? ce.jsx(u, {
                visualElement: f.visualElement,
                ...c
            }) : null, n(i, a, kl(d, f.visualElement, l), d, h, f.visualElement)]
        })
    }
    const r = S.forwardRef(o);
    return r[Nl] = i, r
}

function _l({
    layoutId: t
}) {
    const e = S.useContext(Ai).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function Kl(t, e) {
    S.useContext(ki).strict
}

function Wl(t) {
    const {
        drag: e,
        layout: n
    } = ft;
    if (!e && !n) return {};
    const s = { ...e,
        ...n
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}
const Gl = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Qe(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(Gl.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function Oi(t, {
    style: e,
    vars: n
}, s, i) {
    Object.assign(t.style, e, i && i.getProjectionStyles(s));
    for (const o in n) t.style.setProperty(o, n[o])
}
const Ni = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Ui(t, e, n, s) {
    Oi(t, e, void 0, s);
    for (const i in e.attrs) t.setAttribute(Ni.has(i) ? i : Xe(i), e.attrs[i])
}

function _i(t, {
    layout: e,
    layoutId: n
}) {
    return st.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Wt[t] || t === "opacity")
}

function tn(t, e, n) {
    var s;
    const {
        style: i
    } = t, o = {};
    for (const r in i)(F(i[r]) || e.style && F(e.style[r]) || _i(r, t) || ((s = n == null ? void 0 : n.getValue(r)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (o[r] = i[r]);
    return o
}

function Ki(t, e, n) {
    const s = tn(t, e, n);
    for (const i in t)
        if (F(t[i]) || F(e[i])) {
            const o = Ct.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            s[o] = t[i]
        }
    return s
}

function $l(t) {
    const e = S.useRef(null);
    return e.current === null && (e.current = t()), e.current
}

function zl({
    scrapeMotionValuesFromProps: t,
    createRenderState: e,
    onMount: n
}, s, i, o) {
    const r = {
        latestValues: Hl(s, i, o, t),
        renderState: e()
    };
    return n && (r.mount = a => n(s, a, r)), r
}
const Wi = t => (e, n) => {
    const s = S.useContext(Xt),
        i = S.useContext(qe),
        o = () => zl(t, e, s, i);
    return n ? o() : $l(o)
};

function Hl(t, e, n, s) {
    const i = {},
        o = s(t, {});
    for (const f in o) i[f] = It(o[f]);
    let {
        initial: r,
        animate: a
    } = t;
    const l = Yt(t),
        u = Ii(t);
    e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || r === !1;
    const h = c ? a : r;
    if (h && typeof h != "boolean" && !$t(h)) {
        const f = Array.isArray(h) ? h : [h];
        for (let d = 0; d < f.length; d++) {
            const p = Ce(t, f[d]);
            if (p) {
                const {
                    transitionEnd: g,
                    transition: y,
                    ...m
                } = p;
                for (const v in m) {
                    let T = m[v];
                    if (Array.isArray(T)) {
                        const b = c ? T.length - 1 : 0;
                        T = T[b]
                    }
                    T !== null && (i[v] = T)
                }
                for (const v in g) i[v] = g[v]
            }
        }
    }
    return i
}
const en = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    Gi = () => ({ ...en(),
        attrs: {}
    }),
    $i = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
    Xl = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Yl = Ct.length;

function ql(t, e, n) {
    let s = "",
        i = !0;
    for (let o = 0; o < Yl; o++) {
        const r = Ct[o],
            a = t[r];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
            const u = $i(a, Ie[r]);
            if (!l) {
                i = !1;
                const c = Xl[r] || r;
                s += `${c}(${u}) `
            }
            n && (e[r] = u)
        }
    }
    return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s
}

function nn(t, e, n) {
    const {
        style: s,
        vars: i,
        transformOrigin: o
    } = t;
    let r = !1,
        a = !1;
    for (const l in e) {
        const u = e[l];
        if (st.has(l)) {
            r = !0;
            continue
        } else if (js(l)) {
            i[l] = u;
            continue
        } else {
            const c = $i(u, Ie[l]);
            l.startsWith("origin") ? (a = !0, o[l] = c) : s[l] = c
        }
    }
    if (e.transform || (r || n ? s.transform = ql(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
        const {
            originX: l = "50%",
            originY: u = "50%",
            originZ: c = 0
        } = o;
        s.transformOrigin = `${l} ${u} ${c}`
    }
}

function xs(t, e, n) {
    return typeof t == "string" ? t : x.transform(e + n * t)
}

function Zl(t, e, n) {
    const s = xs(e, t.x, t.width),
        i = xs(n, t.y, t.height);
    return `${s} ${i}`
}
const Jl = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Ql = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function tu(t, e, n = 1, s = 0, i = !0) {
    t.pathLength = 1;
    const o = i ? Jl : Ql;
    t[o.offset] = x.transform(-s);
    const r = x.transform(e),
        a = x.transform(n);
    t[o.array] = `${r} ${a}`
}

function sn(t, {
    attrX: e,
    attrY: n,
    attrScale: s,
    originX: i,
    originY: o,
    pathLength: r,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
}, c, h) {
    if (nn(t, u, h), c) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    const {
        attrs: f,
        style: d,
        dimensions: p
    } = t;
    f.transform && (p && (d.transform = f.transform), delete f.transform), p && (i !== void 0 || o !== void 0 || d.transform) && (d.transformOrigin = Zl(p, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), s !== void 0 && (f.scale = s), r !== void 0 && tu(f, r, a, l, !1)
}
const rn = t => typeof t == "string" && t.toLowerCase() === "svg",
    eu = {
        useVisualState: Wi({
            scrapeMotionValuesFromProps: Ki,
            createRenderState: Gi,
            onMount: (t, e, {
                renderState: n,
                latestValues: s
            }) => {
                V.read(() => {
                    try {
                        n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), V.render(() => {
                    sn(n, s, rn(e.tagName), t.transformTemplate), Ui(e, n)
                })
            }
        })
    },
    nu = {
        useVisualState: Wi({
            scrapeMotionValuesFromProps: tn,
            createRenderState: en
        })
    };

function zi(t, e, n) {
    for (const s in e) !F(e[s]) && !_i(s, n) && (t[s] = e[s])
}

function su({
    transformTemplate: t
}, e) {
    return S.useMemo(() => {
        const n = en();
        return nn(n, e, t), Object.assign({}, n.vars, n.style)
    }, [e])
}

function iu(t, e) {
    const n = t.style || {},
        s = {};
    return zi(s, n, t), Object.assign(s, su(t, e)), s
}

function ru(t, e) {
    const n = {},
        s = iu(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n
}
const ou = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Gt(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || ou.has(t)
}
let Hi = t => !Gt(t);

function au(t) {
    t && (Hi = e => e.startsWith("on") ? !Gt(e) : t(e))
}
try {
    au(require("@emotion/is-prop-valid").default)
} catch {}

function lu(t, e, n) {
    const s = {};
    for (const i in t) i === "values" && typeof t.values == "object" || (Hi(i) || n === !0 && Gt(i) || !e && !Gt(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
    return s
}

function uu(t, e, n, s) {
    const i = S.useMemo(() => {
        const o = Gi();
        return sn(o, e, rn(s), t.transformTemplate), { ...o.attrs,
            style: { ...o.style
            }
        }
    }, [e]);
    if (t.style) {
        const o = {};
        zi(o, t.style, t), i.style = { ...o,
            ...i.style
        }
    }
    return i
}

function cu(t = !1) {
    return (n, s, i, {
        latestValues: o
    }, r) => {
        const l = (Qe(n) ? uu : ru)(s, o, r, n),
            u = lu(s, typeof n == "string", t),
            c = n !== S.Fragment ? { ...u,
                ...l,
                ref: i
            } : {},
            {
                children: h
            } = s,
            f = S.useMemo(() => F(h) ? h.get() : h, [h]);
        return S.createElement(n, { ...c,
            children: f
        })
    }
}

function hu(t, e) {
    return function(s, {
        forwardMotionProps: i
    } = {
        forwardMotionProps: !1
    }) {
        const r = { ...Qe(s) ? eu : nu,
            preloadedFeatures: t,
            useRender: cu(i),
            createVisualElement: e,
            Component: s
        };
        return Ul(r)
    }
}
const Ve = {
        current: null
    },
    Xi = {
        current: !1
    };

function fu() {
    if (Xi.current = !0, !!Je)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => Ve.current = t.matches;
            t.addListener(e), e()
        } else Ve.current = !1
}

function du(t, e, n) {
    for (const s in e) {
        const i = e[s],
            o = n[s];
        if (F(i)) t.addValue(s, i);
        else if (F(o)) t.addValue(s, wt(i, {
            owner: t
        }));
        else if (o !== i)
            if (t.hasValue(s)) {
                const r = t.getValue(s);
                r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i)
            } else {
                const r = t.getStaticValue(s);
                t.addValue(s, wt(r !== void 0 ? r : i, {
                    owner: t
                }))
            }
    }
    for (const s in n) e[s] === void 0 && t.removeValue(s);
    return e
}
const Ts = new WeakMap,
    mu = [...Ns, L, q],
    pu = t => mu.find(Os(t)),
    Ps = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class gu {
    scrapeMotionValuesFromProps(e, n, s) {
        return {}
    }
    constructor({
        parent: e,
        props: n,
        presenceContext: s,
        reducedMotionConfig: i,
        blockInitialAnimation: o,
        visualState: r
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Be, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const f = W.now();
            this.renderScheduledAt < f && (this.renderScheduledAt = f, V.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: u
        } = r;
        this.latestValues = l, this.baseTarget = { ...l
        }, this.initialValues = n.initial ? { ...l
        } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Yt(n), this.isVariantNode = Ii(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
        const {
            willChange: c,
            ...h
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const f in h) {
            const d = h[f];
            l[f] !== void 0 && F(d) && d.set(l[f], !1)
        }
    }
    mount(e) {
        this.current = e, Ts.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), Xi.current || fu(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ve.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        Ts.delete(this.current), this.projection && this.projection.unmount(), Y(this.notifyUpdate), Y(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const e in this.events) this.events[e].clear();
        for (const e in this.features) {
            const n = this.features[e];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, n) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const s = st.has(e),
            i = n.on("change", a => {
                this.latestValues[e] = a, this.props.onUpdate && V.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0)
            }),
            o = n.on("renderRequest", this.scheduleRender);
        let r;
        window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
            i(), o(), r && r(), n.owner && n.stop()
        })
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in ft) {
            const n = ft[e];
            if (!n) continue;
            const {
                isEnabled: s,
                Feature: i
            } = n;
            if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
                const o = this.features[e];
                o.isMounted ? o.update() : (o.mount(), o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : M()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let s = 0; s < Ps.length; s++) {
            const i = Ps[s];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = "on" + i,
                r = e[o];
            r && (this.propEventSubscriptions[i] = this.on(i, r))
        }
        this.prevMotionValues = du(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        const s = this.values.get(e);
        n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e]) return this.props.values[e];
        let s = this.values.get(e);
        return s === void 0 && n !== void 0 && (s = wt(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(e, s)), s
    }
    readValue(e, n) {
        var s;
        let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (s = this.getBaseTargetFromProps(this.props, e)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, e, this.options);
        return i != null && (typeof i == "string" && (Bs(i) || Fs(i)) ? i = parseFloat(i) : !pu(i) && q.test(n) && (i = Hs(e, n)), this.setBaseTarget(e, F(i) ? i.get() : i)), F(i) ? i.get() : i
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {
            initial: s
        } = this.props;
        let i;
        if (typeof s == "string" || typeof s == "object") {
            const r = Ce(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            r && (i = r[e])
        }
        if (s && i !== void 0) return i;
        const o = this.getBaseTargetFromProps(this.props, e);
        return o !== void 0 && !F(o) ? o : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new He), this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class Yi extends gu {
    constructor() {
        super(...arguments), this.KeyframeResolver = Xs
    }
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {
        vars: n,
        style: s
    }) {
        delete n[e], delete s[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: e
        } = this.props;
        F(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}

function yu(t) {
    return window.getComputedStyle(t)
}
class vu extends Yi {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = Oi
    }
    readValueFromInstance(e, n) {
        if (st.has(n)) {
            const s = Oe(n);
            return s && s.default || 0
        } else {
            const s = yu(e),
                i = (js(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(e, {
        transformPagePoint: n
    }) {
        return Pi(e, n)
    }
    build(e, n, s) {
        nn(e, n, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return tn(e, n, s)
    }
}
class xu extends Yi {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = M
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (st.has(n)) {
            const s = Oe(n);
            return s && s.default || 0
        }
        return n = Ni.has(n) ? n : Xe(n), e.getAttribute(n)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return Ki(e, n, s)
    }
    build(e, n, s) {
        sn(e, n, this.isSVGTag, s.transformTemplate)
    }
    renderInstance(e, n, s, i) {
        Ui(e, n, s, i)
    }
    mount(e) {
        this.isSVGTag = rn(e.tagName), super.mount(e)
    }
}
const Tu = (t, e) => Qe(t) ? new xu(e) : new vu(e, {
        allowProjection: t !== S.Fragment
    }),
    Pu = hu({ ...ea,
        ...Rl,
        ...xl,
        ...El
    }, Tu),
    Vu = Zi(Pu);
export {
    Lo as G, vu as H, Ai as L, Bi as M, qe as P, xu as S, gu as V, Ll as a, ye as b, Qs as c, z as d, C as e, ze as f, F as g, go as h, eo as i, po as j, Ne as k, M as l, Vu as m, Ja as n, Qa as o, ht as p, ui as q, na as r, $ as s, ti as t, $l as u, Ts as v, Tn as w
};