import {
    ap as F
} from "./index-CtGBfi03.js";
var ge = e => e.type === "checkbox",
    ne = e => e instanceof Date,
    W = e => e == null;
const fr = e => typeof e == "object";
var T = e => !W(e) && !Array.isArray(e) && fr(e) && !ne(e),
    dr = e => T(e) && e.target ? ge(e.target) ? e.target.checked : e.target.value : e,
    Tr = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
    yr = (e, s) => e.has(Tr(s)),
    Rr = e => {
        const s = e.constructor && e.constructor.prototype;
        return T(s) && s.hasOwnProperty("isPrototypeOf")
    },
    He = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function M(e) {
    let s;
    const r = Array.isArray(e);
    if (e instanceof Date) s = new Date(e);
    else if (e instanceof Set) s = new Set(e);
    else if (!(He && (e instanceof Blob || e instanceof FileList)) && (r || T(e)))
        if (s = r ? [] : {}, !r && !Rr(e)) s = e;
        else
            for (const i in e) e.hasOwnProperty(i) && (s[i] = M(e[i]));
    else return e;
    return s
}
var ve = e => Array.isArray(e) ? e.filter(Boolean) : [],
    E = e => e === void 0,
    c = (e, s, r) => {
        if (!s || !T(e)) return r;
        const i = ve(s.split(/[,[\].]+?/)).reduce((u, n) => W(u) ? u : u[n], e);
        return E(i) || i === e ? E(e[s]) ? r : e[s] : i
    },
    G = e => typeof e == "boolean",
    $e = e => /^\w*$/.test(e),
    _r = e => ve(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
    k = (e, s, r) => {
        let i = -1;
        const u = $e(s) ? [s] : _r(s),
            n = u.length,
            y = n - 1;
        for (; ++i < n;) {
            const g = u[i];
            let m = r;
            if (i !== y) {
                const O = e[g];
                m = T(O) || Array.isArray(O) ? O : isNaN(+u[i + 1]) ? {} : []
            }
            if (g === "__proto__") return;
            e[g] = m, e = e[g]
        }
        return e
    };
const Fe = {
        BLUR: "blur",
        FOCUS_OUT: "focusout",
        CHANGE: "change"
    },
    Y = {
        onBlur: "onBlur",
        onChange: "onChange",
        onSubmit: "onSubmit",
        onTouched: "onTouched",
        all: "all"
    },
    re = {
        max: "max",
        min: "min",
        maxLength: "maxLength",
        minLength: "minLength",
        pattern: "pattern",
        required: "required",
        validate: "validate"
    },
    Lr = F.createContext(null),
    Se = () => F.useContext(Lr);
var gr = (e, s, r, i = !0) => {
        const u = {
            defaultValues: s._defaultValues
        };
        for (const n in e) Object.defineProperty(u, n, {
            get: () => {
                const y = n;
                return s._proxyFormState[y] !== Y.all && (s._proxyFormState[y] = !i || Y.all), r && (r[y] = !0), e[y]
            }
        });
        return u
    },
    j = e => T(e) && !Object.keys(e).length,
    vr = (e, s, r, i) => {
        r(e);
        const {
            name: u,
            ...n
        } = e;
        return j(n) || Object.keys(n).length >= Object.keys(s).length || Object.keys(n).find(y => s[y] === (!i || Y.all))
    },
    q = e => Array.isArray(e) ? e : [e],
    hr = (e, s, r) => !e || !s || e === s || q(e).some(i => i && (r ? i === s : i.startsWith(s) || s.startsWith(i)));

function we(e) {
    const s = F.useRef(e);
    s.current = e, F.useEffect(() => {
        const r = !e.disabled && s.current.subject && s.current.subject.subscribe({
            next: s.current.next
        });
        return () => {
            r && r.unsubscribe()
        }
    }, [e.disabled])
}

function Mr(e) {
    const s = Se(),
        {
            control: r = s.control,
            disabled: i,
            name: u,
            exact: n
        } = e || {},
        [y, g] = F.useState(r._formState),
        m = F.useRef(!0),
        O = F.useRef({
            isDirty: !1,
            isLoading: !1,
            dirtyFields: !1,
            touchedFields: !1,
            validatingFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1
        }),
        A = F.useRef(u);
    return A.current = u, we({
        disabled: i,
        next: b => m.current && hr(A.current, b.name, n) && vr(b, O.current, r._updateFormState) && g({ ...r._formState,
            ...b
        }),
        subject: r._subjects.state
    }), F.useEffect(() => (m.current = !0, O.current.isValid && r._updateValid(!0), () => {
        m.current = !1
    }), [r]), gr(y, r, O.current, !1)
}
var ee = e => typeof e == "string",
    br = (e, s, r, i, u) => ee(e) ? (i && s.watch.add(e), c(r, e, u)) : Array.isArray(e) ? e.map(n => (i && s.watch.add(n), c(r, n))) : (i && (s.watchAll = !0), r);

function Br(e) {
    const s = Se(),
        {
            control: r = s.control,
            name: i,
            defaultValue: u,
            disabled: n,
            exact: y
        } = e || {},
        g = F.useRef(i);
    g.current = i, we({
        disabled: n,
        subject: r._subjects.values,
        next: A => {
            hr(g.current, A.name, y) && O(M(br(g.current, r._names, A.values || r._formValues, !1, u)))
        }
    });
    const [m, O] = F.useState(r._getWatch(i, u));
    return F.useEffect(() => r._removeUnmounted()), m
}

function Ir(e) {
    const s = Se(),
        {
            name: r,
            disabled: i,
            control: u = s.control,
            shouldUnregister: n
        } = e,
        y = yr(u._names.array, r),
        g = Br({
            control: u,
            name: r,
            defaultValue: c(u._formValues, r, c(u._defaultValues, r, e.defaultValue)),
            exact: !0
        }),
        m = Mr({
            control: u,
            name: r,
            exact: !0
        }),
        O = F.useRef(u.register(r, { ...e.rules,
            value: g,
            ...G(e.disabled) ? {
                disabled: e.disabled
            } : {}
        }));
    return F.useEffect(() => {
        const A = u._options.shouldUnregister || n,
            b = (D, H) => {
                const R = c(u._fields, D);
                R && R._f && (R._f.mount = H)
            };
        if (b(r, !0), A) {
            const D = M(c(u._options.defaultValues, r));
            k(u._defaultValues, r, D), E(c(u._formValues, r)) && k(u._formValues, r, D)
        }
        return () => {
            (y ? A && !u._state.action : A) ? u.unregister(r): b(r, !1)
        }
    }, [r, u, y, n]), F.useEffect(() => {
        c(u._fields, r) && u._updateDisabledField({
            disabled: i,
            fields: u._fields,
            name: r,
            value: c(u._fields, r)._f.value
        })
    }, [i, r, u]), {
        field: {
            name: r,
            value: g,
            ...G(i) || m.disabled ? {
                disabled: m.disabled || i
            } : {},
            onChange: F.useCallback(A => O.current.onChange({
                target: {
                    value: dr(A),
                    name: r
                },
                type: Fe.CHANGE
            }), [r]),
            onBlur: F.useCallback(() => O.current.onBlur({
                target: {
                    value: c(u._formValues, r),
                    name: r
                },
                type: Fe.BLUR
            }), [r, u]),
            ref: F.useCallback(A => {
                const b = c(u._fields, r);
                b && A && (b._f.ref = {
                    focus: () => A.focus(),
                    select: () => A.select(),
                    setCustomValidity: D => A.setCustomValidity(D),
                    reportValidity: () => A.reportValidity()
                })
            }, [u._fields, r])
        },
        formState: m,
        fieldState: Object.defineProperties({}, {
            invalid: {
                enumerable: !0,
                get: () => !!c(m.errors, r)
            },
            isDirty: {
                enumerable: !0,
                get: () => !!c(m.dirtyFields, r)
            },
            isTouched: {
                enumerable: !0,
                get: () => !!c(m.touchedFields, r)
            },
            isValidating: {
                enumerable: !0,
                get: () => !!c(m.validatingFields, r)
            },
            error: {
                enumerable: !0,
                get: () => c(m.errors, r)
            }
        })
    }
}
const rt = e => e.render(Ir(e));
var Nr = (e, s, r, i, u) => s ? { ...r[e],
        types: { ...r[e] && r[e].types ? r[e].types : {},
            [i]: u || !0
        }
    } : {},
    se = () => {
        const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, s => {
            const r = (Math.random() * 16 + e) % 16 | 0;
            return (s == "x" ? r : r & 3 | 8).toString(16)
        })
    },
    Oe = (e, s, r = {}) => r.shouldFocus || E(r.shouldFocus) ? r.focusName || `${e}.${E(r.focusIndex)?s:r.focusIndex}.` : "",
    _e = e => ({
        isOnSubmit: !e || e === Y.onSubmit,
        isOnBlur: e === Y.onBlur,
        isOnChange: e === Y.onChange,
        isOnAll: e === Y.all,
        isOnTouch: e === Y.onTouched
    }),
    We = (e, s, r) => !r && (s.watchAll || s.watch.has(e) || [...s.watch].some(i => e.startsWith(i) && /^\.\w+/.test(e.slice(i.length))));
const le = (e, s, r, i) => {
    for (const u of r || Object.keys(e)) {
        const n = c(e, u);
        if (n) {
            const {
                _f: y,
                ...g
            } = n;
            if (y) {
                if (y.refs && y.refs[0] && s(y.refs[0], u) && !i) return !0;
                if (y.ref && s(y.ref, y.name) && !i) return !0;
                if (le(g, s)) break
            } else if (T(g) && le(g, s)) break
        }
    }
};
var Ar = (e, s, r) => {
        const i = q(c(e, r));
        return k(i, "root", s[r]), k(e, r, i), e
    },
    Ke = e => e.type === "file",
    te = e => typeof e == "function",
    me = e => {
        if (!He) return !1;
        const s = e ? e.ownerDocument : 0;
        return e instanceof(s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement)
    },
    Ae = e => ee(e),
    Ge = e => e.type === "radio",
    Ve = e => e instanceof RegExp;
const ir = {
        value: !1,
        isValid: !1
    },
    ar = {
        value: !0,
        isValid: !0
    };
var Fr = e => {
    if (Array.isArray(e)) {
        if (e.length > 1) {
            const s = e.filter(r => r && r.checked && !r.disabled).map(r => r.value);
            return {
                value: s,
                isValid: !!s.length
            }
        }
        return e[0].checked && !e[0].disabled ? e[0].attributes && !E(e[0].attributes.value) ? E(e[0].value) || e[0].value === "" ? ar : {
            value: e[0].value,
            isValid: !0
        } : ar : ir
    }
    return ir
};
const ur = {
    isValid: !1,
    value: null
};
var mr = e => Array.isArray(e) ? e.reduce((s, r) => r && r.checked && !r.disabled ? {
    isValid: !0,
    value: r.value
} : s, ur) : ur;

function nr(e, s, r = "validate") {
    if (Ae(e) || Array.isArray(e) && e.every(Ae) || G(e) && !e) return {
        type: r,
        message: Ae(e) ? e : "",
        ref: s
    }
}
var ue = e => T(e) && !Ve(e) ? e : {
        value: e,
        message: ""
    },
    qe = async (e, s, r, i, u) => {
        const {
            ref: n,
            refs: y,
            required: g,
            maxLength: m,
            minLength: O,
            min: A,
            max: b,
            pattern: D,
            validate: H,
            name: R,
            valueAsNumber: oe,
            mount: z,
            disabled: Z
        } = e._f, p = c(s, R);
        if (!z || Z) return {};
        const J = y ? y[0] : n,
            Q = x => {
                i && J.reportValidity && (J.setCustomValidity(G(x) ? "" : x || ""), J.reportValidity())
            },
            _ = {},
            h = Ge(n),
            V = ge(n),
            C = h || V,
            $ = (oe || Ke(n)) && E(n.value) && E(p) || me(n) && n.value === "" || p === "" || Array.isArray(p) && !p.length,
            P = Nr.bind(null, R, r, _),
            he = (x, S, L, N = re.maxLength, X = re.minLength) => {
                const K = x ? S : L;
                _[R] = {
                    type: x ? N : X,
                    message: K,
                    ref: n,
                    ...P(x ? N : X, K)
                }
            };
        if (u ? !Array.isArray(p) || !p.length : g && (!C && ($ || W(p)) || G(p) && !p || V && !Fr(y).isValid || h && !mr(y).isValid)) {
            const {
                value: x,
                message: S
            } = Ae(g) ? {
                value: !!g,
                message: g
            } : ue(g);
            if (x && (_[R] = {
                    type: re.required,
                    message: S,
                    ref: J,
                    ...P(re.required, S)
                }, !r)) return Q(S), _
        }
        if (!$ && (!W(A) || !W(b))) {
            let x, S;
            const L = ue(b),
                N = ue(A);
            if (!W(p) && !isNaN(p)) {
                const X = n.valueAsNumber || p && +p;
                W(L.value) || (x = X > L.value), W(N.value) || (S = X < N.value)
            } else {
                const X = n.valueAsDate || new Date(p),
                    K = de => new Date(new Date().toDateString() + " " + de),
                    ce = n.type == "time",
                    fe = n.type == "week";
                ee(L.value) && p && (x = ce ? K(p) > K(L.value) : fe ? p > L.value : X > new Date(L.value)), ee(N.value) && p && (S = ce ? K(p) < K(N.value) : fe ? p < N.value : X < new Date(N.value))
            }
            if ((x || S) && (he(!!x, L.message, N.message, re.max, re.min), !r)) return Q(_[R].message), _
        }
        if ((m || O) && !$ && (ee(p) || u && Array.isArray(p))) {
            const x = ue(m),
                S = ue(O),
                L = !W(x.value) && p.length > +x.value,
                N = !W(S.value) && p.length < +S.value;
            if ((L || N) && (he(L, x.message, S.message), !r)) return Q(_[R].message), _
        }
        if (D && !$ && ee(p)) {
            const {
                value: x,
                message: S
            } = ue(D);
            if (Ve(x) && !p.match(x) && (_[R] = {
                    type: re.pattern,
                    message: S,
                    ref: n,
                    ...P(re.pattern, S)
                }, !r)) return Q(S), _
        }
        if (H) {
            if (te(H)) {
                const x = await H(p, s),
                    S = nr(x, J);
                if (S && (_[R] = { ...S,
                        ...P(re.validate, S.message)
                    }, !r)) return Q(S.message), _
            } else if (T(H)) {
                let x = {};
                for (const S in H) {
                    if (!j(x) && !r) break;
                    const L = nr(await H[S](p, s), J, S);
                    L && (x = { ...L,
                        ...P(S, L.message)
                    }, Q(L.message), r && (_[R] = x))
                }
                if (!j(x) && (_[R] = {
                        ref: J,
                        ...x
                    }, !r)) return _
            }
        }
        return Q(!0), _
    },
    Ue = (e, s) => [...e, ...q(s)],
    Te = e => Array.isArray(e) ? e.map(() => {}) : void 0;

function Re(e, s, r) {
    return [...e.slice(0, s), ...q(r), ...e.slice(s)]
}
var Le = (e, s, r) => Array.isArray(e) ? (E(e[r]) && (e[r] = void 0), e.splice(r, 0, e.splice(s, 1)[0]), e) : [],
    Me = (e, s) => [...q(s), ...q(e)];

function Pr(e, s) {
    let r = 0;
    const i = [...e];
    for (const u of s) i.splice(u - r, 1), r++;
    return ve(i).length ? i : []
}
var Be = (e, s) => E(s) ? [] : Pr(e, q(s).sort((r, i) => r - i)),
    Ie = (e, s, r) => {
        [e[s], e[r]] = [e[r], e[s]]
    };

function jr(e, s) {
    const r = s.slice(0, -1).length;
    let i = 0;
    for (; i < r;) e = E(e) ? i++ : e[s[i++]];
    return e
}

function Wr(e) {
    for (const s in e)
        if (e.hasOwnProperty(s) && !E(e[s])) return !1;
    return !0
}

function U(e, s) {
    const r = Array.isArray(s) ? s : $e(s) ? [s] : _r(s),
        i = r.length === 1 ? e : jr(e, r),
        u = r.length - 1,
        n = r[u];
    return i && delete i[n], u !== 0 && (T(i) && j(i) || Array.isArray(i) && Wr(i)) && U(e, r.slice(0, -1)), e
}
var lr = (e, s, r) => (e[s] = r, e);

function tt(e) {
    const s = Se(),
        {
            control: r = s.control,
            name: i,
            keyName: u = "id",
            shouldUnregister: n
        } = e,
        [y, g] = F.useState(r._getFieldArray(i)),
        m = F.useRef(r._getFieldArray(i).map(se)),
        O = F.useRef(y),
        A = F.useRef(i),
        b = F.useRef(!1);
    A.current = i, O.current = y, r._names.array.add(i), e.rules && r.register(i, e.rules), we({
        next: ({
            values: _,
            name: h
        }) => {
            if (h === A.current || !h) {
                const V = c(_, A.current);
                Array.isArray(V) && (g(V), m.current = V.map(se))
            }
        },
        subject: r._subjects.array
    });
    const D = F.useCallback(_ => {
            b.current = !0, r._updateFieldArray(i, _)
        }, [r, i]),
        H = (_, h) => {
            const V = q(M(_)),
                C = Ue(r._getFieldArray(i), V);
            r._names.focus = Oe(i, C.length - 1, h), m.current = Ue(m.current, V.map(se)), D(C), g(C), r._updateFieldArray(i, C, Ue, {
                argA: Te(_)
            })
        },
        R = (_, h) => {
            const V = q(M(_)),
                C = Me(r._getFieldArray(i), V);
            r._names.focus = Oe(i, 0, h), m.current = Me(m.current, V.map(se)), D(C), g(C), r._updateFieldArray(i, C, Me, {
                argA: Te(_)
            })
        },
        oe = _ => {
            const h = Be(r._getFieldArray(i), _);
            m.current = Be(m.current, _), D(h), g(h), r._updateFieldArray(i, h, Be, {
                argA: _
            })
        },
        z = (_, h, V) => {
            const C = q(M(h)),
                $ = Re(r._getFieldArray(i), _, C);
            r._names.focus = Oe(i, _, V), m.current = Re(m.current, _, C.map(se)), D($), g($), r._updateFieldArray(i, $, Re, {
                argA: _,
                argB: Te(h)
            })
        },
        Z = (_, h) => {
            const V = r._getFieldArray(i);
            Ie(V, _, h), Ie(m.current, _, h), D(V), g(V), r._updateFieldArray(i, V, Ie, {
                argA: _,
                argB: h
            }, !1)
        },
        p = (_, h) => {
            const V = r._getFieldArray(i);
            Le(V, _, h), Le(m.current, _, h), D(V), g(V), r._updateFieldArray(i, V, Le, {
                argA: _,
                argB: h
            }, !1)
        },
        J = (_, h) => {
            const V = M(h),
                C = lr(r._getFieldArray(i), _, V);
            m.current = [...C].map(($, P) => !$ || P === _ ? se() : m.current[P]), D(C), g([...C]), r._updateFieldArray(i, C, lr, {
                argA: _,
                argB: V
            }, !0, !1)
        },
        Q = _ => {
            const h = q(M(_));
            m.current = h.map(se), D([...h]), g([...h]), r._updateFieldArray(i, [...h], V => V, {}, !0, !1)
        };
    return F.useEffect(() => {
        if (r._state.action = !1, We(i, r._names) && r._subjects.state.next({ ...r._formState
            }), b.current && (!_e(r._options.mode).isOnSubmit || r._formState.isSubmitted))
            if (r._options.resolver) r._executeSchema([i]).then(_ => {
                const h = c(_.errors, i),
                    V = c(r._formState.errors, i);
                (V ? !h && V.type || h && (V.type !== h.type || V.message !== h.message) : h && h.type) && (h ? k(r._formState.errors, i, h) : U(r._formState.errors, i), r._subjects.state.next({
                    errors: r._formState.errors
                }))
            });
            else {
                const _ = c(r._fields, i);
                _ && _._f && !(_e(r._options.reValidateMode).isOnSubmit && _e(r._options.mode).isOnSubmit) && qe(_, r._formValues, r._options.criteriaMode === Y.all, r._options.shouldUseNativeValidation, !0).then(h => !j(h) && r._subjects.state.next({
                    errors: Ar(r._formState.errors, h, i)
                }))
            }
        r._subjects.values.next({
            name: i,
            values: { ...r._formValues
            }
        }), r._names.focus && le(r._fields, (_, h) => {
            if (r._names.focus && h.startsWith(r._names.focus) && _.focus) return _.focus(), 1
        }), r._names.focus = "", r._updateValid(), b.current = !1
    }, [y, i, r]), F.useEffect(() => (!c(r._formValues, i) && r._updateFieldArray(i), () => {
        (r._options.shouldUnregister || n) && r.unregister(i)
    }), [i, r, u, n]), {
        swap: F.useCallback(Z, [D, i, r]),
        move: F.useCallback(p, [D, i, r]),
        prepend: F.useCallback(R, [D, i, r]),
        append: F.useCallback(H, [D, i, r]),
        remove: F.useCallback(oe, [D, i, r]),
        insert: F.useCallback(z, [D, i, r]),
        update: F.useCallback(J, [D, i, r]),
        replace: F.useCallback(Q, [D, i, r]),
        fields: F.useMemo(() => y.map((_, h) => ({ ..._,
            [u]: m.current[h] || se()
        })), [y, u])
    }
}
var Ne = () => {
        let e = [];
        return {
            get observers() {
                return e
            },
            next: u => {
                for (const n of e) n.next && n.next(u)
            },
            subscribe: u => (e.push(u), {
                unsubscribe: () => {
                    e = e.filter(n => n !== u)
                }
            }),
            unsubscribe: () => {
                e = []
            }
        }
    },
    xe = e => W(e) || !fr(e);

function ie(e, s) {
    if (xe(e) || xe(s)) return e === s;
    if (ne(e) && ne(s)) return e.getTime() === s.getTime();
    const r = Object.keys(e),
        i = Object.keys(s);
    if (r.length !== i.length) return !1;
    for (const u of r) {
        const n = e[u];
        if (!i.includes(u)) return !1;
        if (u !== "ref") {
            const y = s[u];
            if (ne(n) && ne(y) || T(n) && T(y) || Array.isArray(n) && Array.isArray(y) ? !ie(n, y) : n !== y) return !1
        }
    }
    return !0
}
var Vr = e => e.type === "select-multiple",
    qr = e => Ge(e) || ge(e),
    Pe = e => me(e) && e.isConnected,
    xr = e => {
        for (const s in e)
            if (te(e[s])) return !0;
        return !1
    };

function pe(e, s = {}) {
    const r = Array.isArray(e);
    if (T(e) || r)
        for (const i in e) Array.isArray(e[i]) || T(e[i]) && !xr(e[i]) ? (s[i] = Array.isArray(e[i]) ? [] : {}, pe(e[i], s[i])) : W(e[i]) || (s[i] = !0);
    return s
}

function pr(e, s, r) {
    const i = Array.isArray(e);
    if (T(e) || i)
        for (const u in e) Array.isArray(e[u]) || T(e[u]) && !xr(e[u]) ? E(s) || xe(r[u]) ? r[u] = Array.isArray(e[u]) ? pe(e[u], []) : { ...pe(e[u])
        } : pr(e[u], W(s) ? {} : s[u], r[u]) : r[u] = !ie(e[u], s[u]);
    return r
}
var be = (e, s) => pr(e, s, pe(s)),
    Sr = (e, {
        valueAsNumber: s,
        valueAsDate: r,
        setValueAs: i
    }) => E(e) ? e : s ? e === "" ? NaN : e && +e : r && ee(e) ? new Date(e) : i ? i(e) : e;

function je(e) {
    const s = e.ref;
    if (!(e.refs ? e.refs.every(r => r.disabled) : s.disabled)) return Ke(s) ? s.files : Ge(s) ? mr(e.refs).value : Vr(s) ? [...s.selectedOptions].map(({
        value: r
    }) => r) : ge(s) ? Fr(e.refs).value : Sr(E(s.value) ? e.ref.value : s.value, e)
}
var Hr = (e, s, r, i) => {
        const u = {};
        for (const n of e) {
            const y = c(s, n);
            y && k(u, n, y._f)
        }
        return {
            criteriaMode: r,
            names: [...e],
            fields: u,
            shouldUseNativeValidation: i
        }
    },
    ye = e => E(e) ? e : Ve(e) ? e.source : T(e) ? Ve(e.value) ? e.value.source : e.value : e;
const or = "AsyncFunction";
var $r = e => (!e || !e.validate) && !!(te(e.validate) && e.validate.constructor.name === or || T(e.validate) && Object.values(e.validate).find(s => s.constructor.name === or)),
    Kr = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);

function cr(e, s, r) {
    const i = c(e, r);
    if (i || $e(r)) return {
        error: i,
        name: r
    };
    const u = r.split(".");
    for (; u.length;) {
        const n = u.join("."),
            y = c(s, n),
            g = c(e, n);
        if (y && !Array.isArray(y) && r !== n) return {
            name: r
        };
        if (g && g.type) return {
            name: n,
            error: g
        };
        u.pop()
    }
    return {
        name: r
    }
}
var Gr = (e, s, r, i, u) => u.isOnAll ? !1 : !r && u.isOnTouch ? !(s || e) : (r ? i.isOnBlur : u.isOnBlur) ? !e : (r ? i.isOnChange : u.isOnChange) ? e : !0,
    Yr = (e, s) => !ve(c(e, s)).length && U(e, s);
const zr = {
    mode: Y.onSubmit,
    reValidateMode: Y.onChange,
    shouldFocusError: !0
};

function Jr(e = {}) {
    let s = { ...zr,
            ...e
        },
        r = {
            submitCount: 0,
            isDirty: !1,
            isLoading: te(s.defaultValues),
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            validatingFields: {},
            errors: s.errors || {},
            disabled: s.disabled || !1
        },
        i = {},
        u = T(s.defaultValues) || T(s.values) ? M(s.defaultValues || s.values) || {} : {},
        n = s.shouldUnregister ? {} : M(u),
        y = {
            action: !1,
            mount: !1,
            watch: !1
        },
        g = {
            mount: new Set,
            unMount: new Set,
            array: new Set,
            watch: new Set
        },
        m, O = 0;
    const A = {
            isDirty: !1,
            dirtyFields: !1,
            validatingFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1
        },
        b = {
            values: Ne(),
            array: Ne(),
            state: Ne()
        },
        D = _e(s.mode),
        H = _e(s.reValidateMode),
        R = s.criteriaMode === Y.all,
        oe = t => a => {
            clearTimeout(O), O = setTimeout(t, a)
        },
        z = async t => {
            if (A.isValid || t) {
                const a = s.resolver ? j((await C()).errors) : await P(i, !0);
                a !== r.isValid && b.state.next({
                    isValid: a
                })
            }
        },
        Z = (t, a) => {
            (A.isValidating || A.validatingFields) && ((t || Array.from(g.mount)).forEach(l => {
                l && (a ? k(r.validatingFields, l, a) : U(r.validatingFields, l))
            }), b.state.next({
                validatingFields: r.validatingFields,
                isValidating: !j(r.validatingFields)
            }))
        },
        p = (t, a = [], l, d, f = !0, o = !0) => {
            if (d && l) {
                if (y.action = !0, o && Array.isArray(c(i, t))) {
                    const v = l(c(i, t), d.argA, d.argB);
                    f && k(i, t, v)
                }
                if (o && Array.isArray(c(r.errors, t))) {
                    const v = l(c(r.errors, t), d.argA, d.argB);
                    f && k(r.errors, t, v), Yr(r.errors, t)
                }
                if (A.touchedFields && o && Array.isArray(c(r.touchedFields, t))) {
                    const v = l(c(r.touchedFields, t), d.argA, d.argB);
                    f && k(r.touchedFields, t, v)
                }
                A.dirtyFields && (r.dirtyFields = be(u, n)), b.state.next({
                    name: t,
                    isDirty: x(t, a),
                    dirtyFields: r.dirtyFields,
                    errors: r.errors,
                    isValid: r.isValid
                })
            } else k(n, t, a)
        },
        J = (t, a) => {
            k(r.errors, t, a), b.state.next({
                errors: r.errors
            })
        },
        Q = t => {
            r.errors = t, b.state.next({
                errors: r.errors,
                isValid: !1
            })
        },
        _ = (t, a, l, d) => {
            const f = c(i, t);
            if (f) {
                const o = c(n, t, E(l) ? c(u, t) : l);
                E(o) || d && d.defaultChecked || a ? k(n, t, a ? o : je(f._f)) : N(t, o), y.mount && z()
            }
        },
        h = (t, a, l, d, f) => {
            let o = !1,
                v = !1;
            const w = {
                    name: t
                },
                B = !!(c(i, t) && c(i, t)._f && c(i, t)._f.disabled);
            if (!l || d) {
                A.isDirty && (v = r.isDirty, r.isDirty = w.isDirty = x(), o = v !== w.isDirty);
                const I = B || ie(c(u, t), a);
                v = !!(!B && c(r.dirtyFields, t)), I || B ? U(r.dirtyFields, t) : k(r.dirtyFields, t, !0), w.dirtyFields = r.dirtyFields, o = o || A.dirtyFields && v !== !I
            }
            if (l) {
                const I = c(r.touchedFields, t);
                I || (k(r.touchedFields, t, l), w.touchedFields = r.touchedFields, o = o || A.touchedFields && I !== l)
            }
            return o && f && b.state.next(w), o ? w : {}
        },
        V = (t, a, l, d) => {
            const f = c(r.errors, t),
                o = A.isValid && G(a) && r.isValid !== a;
            if (e.delayError && l ? (m = oe(() => J(t, l)), m(e.delayError)) : (clearTimeout(O), m = null, l ? k(r.errors, t, l) : U(r.errors, t)), (l ? !ie(f, l) : f) || !j(d) || o) {
                const v = { ...d,
                    ...o && G(a) ? {
                        isValid: a
                    } : {},
                    errors: r.errors,
                    name: t
                };
                r = { ...r,
                    ...v
                }, b.state.next(v)
            }
        },
        C = async t => {
            Z(t, !0);
            const a = await s.resolver(n, s.context, Hr(t || g.mount, i, s.criteriaMode, s.shouldUseNativeValidation));
            return Z(t), a
        },
        $ = async t => {
            const {
                errors: a
            } = await C(t);
            if (t)
                for (const l of t) {
                    const d = c(a, l);
                    d ? k(r.errors, l, d) : U(r.errors, l)
                } else r.errors = a;
            return a
        },
        P = async (t, a, l = {
            valid: !0
        }) => {
            for (const d in t) {
                const f = t[d];
                if (f) {
                    const {
                        _f: o,
                        ...v
                    } = f;
                    if (o) {
                        const w = g.array.has(o.name),
                            B = f._f && $r(f._f);
                        B && A.validatingFields && Z([d], !0);
                        const I = await qe(f, n, R, s.shouldUseNativeValidation && !a, w);
                        if (B && A.validatingFields && Z([d]), I[o.name] && (l.valid = !1, a)) break;
                        !a && (c(I, o.name) ? w ? Ar(r.errors, I, o.name) : k(r.errors, o.name, I[o.name]) : U(r.errors, o.name))
                    }!j(v) && await P(v, a, l)
                }
            }
            return l.valid
        },
        he = () => {
            for (const t of g.unMount) {
                const a = c(i, t);
                a && (a._f.refs ? a._f.refs.every(l => !Pe(l)) : !Pe(a._f.ref)) && De(t)
            }
            g.unMount = new Set
        },
        x = (t, a) => (t && a && k(n, t, a), !ie(Ye(), u)),
        S = (t, a, l) => br(t, g, { ...y.mount ? n : E(a) ? u : ee(t) ? {
                [t]: a
            } : a
        }, l, a),
        L = t => ve(c(y.mount ? n : u, t, e.shouldUnregister ? c(u, t, []) : [])),
        N = (t, a, l = {}) => {
            const d = c(i, t);
            let f = a;
            if (d) {
                const o = d._f;
                o && (!o.disabled && k(n, t, Sr(a, o)), f = me(o.ref) && W(a) ? "" : a, Vr(o.ref) ? [...o.ref.options].forEach(v => v.selected = f.includes(v.value)) : o.refs ? ge(o.ref) ? o.refs.length > 1 ? o.refs.forEach(v => (!v.defaultChecked || !v.disabled) && (v.checked = Array.isArray(f) ? !!f.find(w => w === v.value) : f === v.value)) : o.refs[0] && (o.refs[0].checked = !!f) : o.refs.forEach(v => v.checked = v.value === f) : Ke(o.ref) ? o.ref.value = "" : (o.ref.value = f, o.ref.type || b.values.next({
                    name: t,
                    values: { ...n
                    }
                })))
            }(l.shouldDirty || l.shouldTouch) && h(t, f, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && de(t)
        },
        X = (t, a, l) => {
            for (const d in a) {
                const f = a[d],
                    o = `${t}.${d}`,
                    v = c(i, o);
                (g.array.has(t) || !xe(f) || v && !v._f) && !ne(f) ? X(o, f, l) : N(o, f, l)
            }
        },
        K = (t, a, l = {}) => {
            const d = c(i, t),
                f = g.array.has(t),
                o = M(a);
            k(n, t, o), f ? (b.array.next({
                name: t,
                values: { ...n
                }
            }), (A.isDirty || A.dirtyFields) && l.shouldDirty && b.state.next({
                name: t,
                dirtyFields: be(u, n),
                isDirty: x(t, o)
            })) : d && !d._f && !W(o) ? X(t, o, l) : N(t, o, l), We(t, g) && b.state.next({ ...r
            }), b.values.next({
                name: y.mount ? t : void 0,
                values: { ...n
                }
            })
        },
        ce = async t => {
            y.mount = !0;
            const a = t.target;
            let l = a.name,
                d = !0;
            const f = c(i, l),
                o = () => a.type ? je(f._f) : dr(t),
                v = w => {
                    d = Number.isNaN(w) || ie(w, c(n, l, w))
                };
            if (f) {
                let w, B;
                const I = o(),
                    ae = t.type === Fe.BLUR || t.type === Fe.FOCUS_OUT,
                    Cr = !Kr(f._f) && !s.resolver && !c(r.errors, l) && !f._f.deps || Gr(ae, c(r.touchedFields, l), r.isSubmitted, H, D),
                    Ee = We(l, g, ae);
                k(n, l, I), ae ? (f._f.onBlur && f._f.onBlur(t), m && m(0)) : f._f.onChange && f._f.onChange(t);
                const Ce = h(l, I, ae, !1),
                    Or = !j(Ce) || Ee;
                if (!ae && b.values.next({
                        name: l,
                        type: t.type,
                        values: { ...n
                        }
                    }), Cr) return A.isValid && (e.mode === "onBlur" ? ae && z() : z()), Or && b.state.next({
                    name: l,
                    ...Ee ? {} : Ce
                });
                if (!ae && Ee && b.state.next({ ...r
                    }), s.resolver) {
                    const {
                        errors: tr
                    } = await C([l]);
                    if (v(I), d) {
                        const Ur = cr(r.errors, i, l),
                            sr = cr(tr, i, Ur.name || l);
                        w = sr.error, l = sr.name, B = j(tr)
                    }
                } else Z([l], !0), w = (await qe(f, n, R, s.shouldUseNativeValidation))[l], Z([l]), v(I), d && (w ? B = !1 : A.isValid && (B = await P(i, !0)));
                d && (f._f.deps && de(f._f.deps), V(l, B, w, Ce))
            }
        },
        fe = (t, a) => {
            if (c(r.errors, a) && t.focus) return t.focus(), 1
        },
        de = async (t, a = {}) => {
            let l, d;
            const f = q(t);
            if (s.resolver) {
                const o = await $(E(t) ? t : f);
                l = j(o), d = t ? !f.some(v => c(o, v)) : l
            } else t ? (d = (await Promise.all(f.map(async o => {
                const v = c(i, o);
                return await P(v && v._f ? {
                    [o]: v
                } : v)
            }))).every(Boolean), !(!d && !r.isValid) && z()) : d = l = await P(i);
            return b.state.next({ ...!ee(t) || A.isValid && l !== r.isValid ? {} : {
                    name: t
                },
                ...s.resolver || !t ? {
                    isValid: l
                } : {},
                errors: r.errors
            }), a.shouldFocus && !d && le(i, fe, t ? f : g.mount), d
        },
        Ye = t => {
            const a = { ...y.mount ? n : u
            };
            return E(t) ? a : ee(t) ? c(a, t) : t.map(l => c(a, l))
        },
        ze = (t, a) => ({
            invalid: !!c((a || r).errors, t),
            isDirty: !!c((a || r).dirtyFields, t),
            error: c((a || r).errors, t),
            isValidating: !!c(r.validatingFields, t),
            isTouched: !!c((a || r).touchedFields, t)
        }),
        wr = t => {
            t && q(t).forEach(a => U(r.errors, a)), b.state.next({
                errors: t ? r.errors : {}
            })
        },
        Je = (t, a, l) => {
            const d = (c(i, t, {
                    _f: {}
                })._f || {}).ref,
                f = c(r.errors, t) || {},
                {
                    ref: o,
                    message: v,
                    type: w,
                    ...B
                } = f;
            k(r.errors, t, { ...B,
                ...a,
                ref: d
            }), b.state.next({
                name: t,
                errors: r.errors,
                isValid: !1
            }), l && l.shouldFocus && d && d.focus && d.focus()
        },
        Dr = (t, a) => te(t) ? b.values.subscribe({
            next: l => t(S(void 0, a), l)
        }) : S(t, a, !0),
        De = (t, a = {}) => {
            for (const l of t ? q(t) : g.mount) g.mount.delete(l), g.array.delete(l), a.keepValue || (U(i, l), U(n, l)), !a.keepError && U(r.errors, l), !a.keepDirty && U(r.dirtyFields, l), !a.keepTouched && U(r.touchedFields, l), !a.keepIsValidating && U(r.validatingFields, l), !s.shouldUnregister && !a.keepDefaultValue && U(u, l);
            b.values.next({
                values: { ...n
                }
            }), b.state.next({ ...r,
                ...a.keepDirty ? {
                    isDirty: x()
                } : {}
            }), !a.keepIsValid && z()
        },
        Qe = ({
            disabled: t,
            name: a,
            field: l,
            fields: d,
            value: f
        }) => {
            if (G(t) && y.mount || t) {
                const o = t ? void 0 : E(f) ? je(l ? l._f : c(d, a)._f) : f;
                k(n, a, o), h(a, o, !1, !1, !0)
            }
        },
        ke = (t, a = {}) => {
            let l = c(i, t);
            const d = G(a.disabled) || G(e.disabled);
            return k(i, t, { ...l || {},
                _f: { ...l && l._f ? l._f : {
                        ref: {
                            name: t
                        }
                    },
                    name: t,
                    mount: !0,
                    ...a
                }
            }), g.mount.add(t), l ? Qe({
                field: l,
                disabled: G(a.disabled) ? a.disabled : e.disabled,
                name: t,
                value: a.value
            }) : _(t, !0, a.value), { ...d ? {
                    disabled: a.disabled || e.disabled
                } : {},
                ...s.progressive ? {
                    required: !!a.required,
                    min: ye(a.min),
                    max: ye(a.max),
                    minLength: ye(a.minLength),
                    maxLength: ye(a.maxLength),
                    pattern: ye(a.pattern)
                } : {},
                name: t,
                onChange: ce,
                onBlur: ce,
                ref: f => {
                    if (f) {
                        ke(t, a), l = c(i, t);
                        const o = E(f.value) && f.querySelectorAll && f.querySelectorAll("input,select,textarea")[0] || f,
                            v = qr(o),
                            w = l._f.refs || [];
                        if (v ? w.find(B => B === o) : o === l._f.ref) return;
                        k(i, t, {
                            _f: { ...l._f,
                                ...v ? {
                                    refs: [...w.filter(Pe), o, ...Array.isArray(c(u, t)) ? [{}] : []],
                                    ref: {
                                        type: o.type,
                                        name: t
                                    }
                                } : {
                                    ref: o
                                }
                            }
                        }), _(t, !1, void 0, o)
                    } else l = c(i, t, {}), l._f && (l._f.mount = !1), (s.shouldUnregister || a.shouldUnregister) && !(yr(g.array, t) && y.action) && g.unMount.add(t)
                }
            }
        },
        Xe = () => s.shouldFocusError && le(i, fe, g.mount),
        kr = t => {
            G(t) && (b.state.next({
                disabled: t
            }), le(i, (a, l) => {
                const d = c(i, l);
                d && (a.disabled = d._f.disabled || t, Array.isArray(d._f.refs) && d._f.refs.forEach(f => {
                    f.disabled = d._f.disabled || t
                }))
            }, 0, !1))
        },
        Ze = (t, a) => async l => {
            let d;
            l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
            let f = M(n);
            if (b.state.next({
                    isSubmitting: !0
                }), s.resolver) {
                const {
                    errors: o,
                    values: v
                } = await C();
                r.errors = o, f = v
            } else await P(i);
            if (U(r.errors, "root"), j(r.errors)) {
                b.state.next({
                    errors: {}
                });
                try {
                    await t(f, l)
                } catch (o) {
                    d = o
                }
            } else a && await a({ ...r.errors
            }, l), Xe(), setTimeout(Xe);
            if (b.state.next({
                    isSubmitted: !0,
                    isSubmitting: !1,
                    isSubmitSuccessful: j(r.errors) && !d,
                    submitCount: r.submitCount + 1,
                    errors: r.errors
                }), d) throw d
        },
        Er = (t, a = {}) => {
            c(i, t) && (E(a.defaultValue) ? K(t, M(c(u, t))) : (K(t, a.defaultValue), k(u, t, M(a.defaultValue))), a.keepTouched || U(r.touchedFields, t), a.keepDirty || (U(r.dirtyFields, t), r.isDirty = a.defaultValue ? x(t, M(c(u, t))) : x()), a.keepError || (U(r.errors, t), A.isValid && z()), b.state.next({ ...r
            }))
        },
        er = (t, a = {}) => {
            const l = t ? M(t) : u,
                d = M(l),
                f = j(t),
                o = f ? u : d;
            if (a.keepDefaultValues || (u = l), !a.keepValues) {
                if (a.keepDirtyValues)
                    for (const v of g.mount) c(r.dirtyFields, v) ? k(o, v, c(n, v)) : K(v, c(o, v));
                else {
                    if (He && E(t))
                        for (const v of g.mount) {
                            const w = c(i, v);
                            if (w && w._f) {
                                const B = Array.isArray(w._f.refs) ? w._f.refs[0] : w._f.ref;
                                if (me(B)) {
                                    const I = B.closest("form");
                                    if (I) {
                                        I.reset();
                                        break
                                    }
                                }
                            }
                        }
                    i = {}
                }
                n = e.shouldUnregister ? a.keepDefaultValues ? M(u) : {} : M(o), b.array.next({
                    values: { ...o
                    }
                }), b.values.next({
                    values: { ...o
                    }
                })
            }
            g = {
                mount: a.keepDirtyValues ? g.mount : new Set,
                unMount: new Set,
                array: new Set,
                watch: new Set,
                watchAll: !1,
                focus: ""
            }, y.mount = !A.isValid || !!a.keepIsValid || !!a.keepDirtyValues, y.watch = !!e.shouldUnregister, b.state.next({
                submitCount: a.keepSubmitCount ? r.submitCount : 0,
                isDirty: f ? !1 : a.keepDirty ? r.isDirty : !!(a.keepDefaultValues && !ie(t, u)),
                isSubmitted: a.keepIsSubmitted ? r.isSubmitted : !1,
                dirtyFields: f ? {} : a.keepDirtyValues ? a.keepDefaultValues && n ? be(u, n) : r.dirtyFields : a.keepDefaultValues && t ? be(u, t) : a.keepDirty ? r.dirtyFields : {},
                touchedFields: a.keepTouched ? r.touchedFields : {},
                errors: a.keepErrors ? r.errors : {},
                isSubmitSuccessful: a.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
                isSubmitting: !1
            })
        },
        rr = (t, a) => er(te(t) ? t(n) : t, a);
    return {
        control: {
            register: ke,
            unregister: De,
            getFieldState: ze,
            handleSubmit: Ze,
            setError: Je,
            _executeSchema: C,
            _getWatch: S,
            _getDirty: x,
            _updateValid: z,
            _removeUnmounted: he,
            _updateFieldArray: p,
            _updateDisabledField: Qe,
            _getFieldArray: L,
            _reset: er,
            _resetDefaultValues: () => te(s.defaultValues) && s.defaultValues().then(t => {
                rr(t, s.resetOptions), b.state.next({
                    isLoading: !1
                })
            }),
            _updateFormState: t => {
                r = { ...r,
                    ...t
                }
            },
            _disableForm: kr,
            _subjects: b,
            _proxyFormState: A,
            _setErrors: Q,
            get _fields() {
                return i
            },
            get _formValues() {
                return n
            },
            get _state() {
                return y
            },
            set _state(t) {
                y = t
            },
            get _defaultValues() {
                return u
            },
            get _names() {
                return g
            },
            set _names(t) {
                g = t
            },
            get _formState() {
                return r
            },
            set _formState(t) {
                r = t
            },
            get _options() {
                return s
            },
            set _options(t) {
                s = { ...s,
                    ...t
                }
            }
        },
        trigger: de,
        register: ke,
        handleSubmit: Ze,
        watch: Dr,
        setValue: K,
        getValues: Ye,
        reset: rr,
        resetField: Er,
        clearErrors: wr,
        unregister: De,
        setError: Je,
        setFocus: (t, a = {}) => {
            const l = c(i, t),
                d = l && l._f;
            if (d) {
                const f = d.refs ? d.refs[0] : d.ref;
                f.focus && (f.focus(), a.shouldSelect && f.select())
            }
        },
        getFieldState: ze
    }
}

function st(e = {}) {
    const s = F.useRef(),
        r = F.useRef(),
        [i, u] = F.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: te(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            validatingFields: {},
            errors: e.errors || {},
            disabled: e.disabled || !1,
            defaultValues: te(e.defaultValues) ? void 0 : e.defaultValues
        });
    s.current || (s.current = { ...Jr(e),
        formState: i
    });
    const n = s.current.control;
    return n._options = e, we({
        subject: n._subjects.state,
        next: y => {
            vr(y, n._proxyFormState, n._updateFormState, !0) && u({ ...n._formState
            })
        }
    }), F.useEffect(() => n._disableForm(e.disabled), [n, e.disabled]), F.useEffect(() => {
        if (n._proxyFormState.isDirty) {
            const y = n._getDirty();
            y !== i.isDirty && n._subjects.state.next({
                isDirty: y
            })
        }
    }, [n, i.isDirty]), F.useEffect(() => {
        e.values && !ie(e.values, r.current) ? (n._reset(e.values, n._options.resetOptions), r.current = e.values, u(y => ({ ...y
        }))) : n._resetDefaultValues()
    }, [e.values, n]), F.useEffect(() => {
        e.errors && n._setErrors(e.errors)
    }, [e.errors, n]), F.useEffect(() => {
        n._state.mount || (n._updateValid(), n._state.mount = !0), n._state.watch && (n._state.watch = !1, n._subjects.state.next({ ...n._formState
        })), n._removeUnmounted()
    }), F.useEffect(() => {
        e.shouldUnregister && n._subjects.values.next({
            values: n._getWatch()
        })
    }, [e.shouldUnregister, n]), s.current.formState = gr(i, n), s.current
}
export {
    rt as C, Nr as a, tt as b, c as g, k as s, st as u
};