import {
    c as fi,
    g as yi,
    A as bi,
    D as Oe,
    a as oe,
    U as O,
    C as B,
    G as H,
    d as vi
} from "./index-CtGBfi03.js";
import {
    w as fe
} from "./wildCardSearch-Do08Vmmh.js";
import {
    u as wi
} from "./uniqueId-CiOPj8El.js";
import "./toString-P062oiF7.js";
import "./isSymbol-DK7Au7Oa.js";
var Ue = {
    exports: {}
}; /*! Axios v1.8.2 Copyright (c) 2025 Matt Zabriskie and contributors */
var et, zt;

function ki() {
    if (zt) return et;
    zt = 1;

    function d(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    const {
        toString: l
    } = Object.prototype, {
        getPrototypeOf: m
    } = Object, u = (e => t => {
        const a = l.call(t);
        return e[a] || (e[a] = a.slice(8, -1).toLowerCase())
    })(Object.create(null)), g = e => (e = e.toLowerCase(), t => u(t) === e), y = e => t => typeof t === e, {
        isArray: c
    } = Array, w = y("undefined");

    function M(e) {
        return e !== null && !w(e) && e.constructor !== null && !w(e.constructor) && A(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    }
    const h = g("ArrayBuffer");

    function F(e) {
        let t;
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && h(e.buffer), t
    }
    const P = y("string"),
        A = y("function"),
        W = y("number"),
        $ = e => e !== null && typeof e == "object",
        pe = e => e === !0 || e === !1,
        E = e => {
            if (u(e) !== "object") return !1;
            const t = m(e);
            return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
        },
        L = g("Date"),
        _ = g("File"),
        ie = g("Blob"),
        v = g("FileList"),
        j = e => $(e) && A(e.pipe),
        x = e => {
            let t;
            return e && (typeof FormData == "function" && e instanceof FormData || A(e.append) && ((t = u(e)) === "formdata" || t === "object" && A(e.toString) && e.toString() === "[object FormData]"))
        },
        z = g("URLSearchParams"),
        [Y, ye, ce, te] = ["ReadableStream", "Request", "Response", "Headers"].map(g),
        U = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

    function G(e, t, {
        allOwnKeys: a = !1
    } = {}) {
        if (e === null || typeof e > "u") return;
        let i, r;
        if (typeof e != "object" && (e = [e]), c(e))
            for (i = 0, r = e.length; i < r; i++) t.call(null, e[i], i, e);
        else {
            const o = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
                n = o.length;
            let p;
            for (i = 0; i < n; i++) p = o[i], t.call(null, e[p], p, e)
        }
    }

    function be(e, t) {
        t = t.toLowerCase();
        const a = Object.keys(e);
        let i = a.length,
            r;
        for (; i-- > 0;)
            if (r = a[i], t === r.toLowerCase()) return r;
        return null
    }
    const ne = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : fi,
        st = e => !w(e) && e !== ne;

    function ze() {
        const {
            caseless: e
        } = st(this) && this || {}, t = {}, a = (i, r) => {
            const o = e && be(t, r) || r;
            E(t[o]) && E(i) ? t[o] = ze(t[o], i) : E(i) ? t[o] = ze({}, i) : c(i) ? t[o] = i.slice() : t[o] = i
        };
        for (let i = 0, r = arguments.length; i < r; i++) arguments[i] && G(arguments[i], a);
        return t
    }
    const ia = (e, t, a, {
            allOwnKeys: i
        } = {}) => (G(t, (r, o) => {
            a && A(r) ? e[o] = d(r, a) : e[o] = r
        }, {
            allOwnKeys: i
        }), e),
        ra = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
        oa = (e, t, a, i) => {
            e.prototype = Object.create(t.prototype, i), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                value: t.prototype
            }), a && Object.assign(e.prototype, a)
        },
        na = (e, t, a, i) => {
            let r, o, n;
            const p = {};
            if (t = t || {}, e == null) return t;
            do {
                for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0;) n = r[o], (!i || i(n, e, t)) && !p[n] && (t[n] = e[n], p[n] = !0);
                e = a !== !1 && m(e)
            } while (e && (!a || a(e, t)) && e !== Object.prototype);
            return t
        },
        sa = (e, t, a) => {
            e = String(e), (a === void 0 || a > e.length) && (a = e.length), a -= t.length;
            const i = e.indexOf(t, a);
            return i !== -1 && i === a
        },
        la = e => {
            if (!e) return null;
            if (c(e)) return e;
            let t = e.length;
            if (!W(t)) return null;
            const a = new Array(t);
            for (; t-- > 0;) a[t] = e[t];
            return a
        },
        ma = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && m(Uint8Array)),
        ca = (e, t) => {
            const i = (e && e[Symbol.iterator]).call(e);
            let r;
            for (;
                (r = i.next()) && !r.done;) {
                const o = r.value;
                t.call(e, o[0], o[1])
            }
        },
        ua = (e, t) => {
            let a;
            const i = [];
            for (;
                (a = e.exec(t)) !== null;) i.push(a);
            return i
        },
        da = g("HTMLFormElement"),
        pa = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(a, i, r) {
            return i.toUpperCase() + r
        }),
        lt = (({
            hasOwnProperty: e
        }) => (t, a) => e.call(t, a))(Object.prototype),
        ga = g("RegExp"),
        mt = (e, t) => {
            const a = Object.getOwnPropertyDescriptors(e),
                i = {};
            G(a, (r, o) => {
                let n;
                (n = t(r, o, e)) !== !1 && (i[o] = n || r)
            }), Object.defineProperties(e, i)
        },
        ha = e => {
            mt(e, (t, a) => {
                if (A(e) && ["arguments", "caller", "callee"].indexOf(a) !== -1) return !1;
                const i = e[a];
                if (A(i)) {
                    if (t.enumerable = !1, "writable" in t) {
                        t.writable = !1;
                        return
                    }
                    t.set || (t.set = () => {
                        throw Error("Can not rewrite read-only method '" + a + "'")
                    })
                }
            })
        },
        fa = (e, t) => {
            const a = {},
                i = r => {
                    r.forEach(o => {
                        a[o] = !0
                    })
                };
            return c(e) ? i(e) : i(String(e).split(t)), a
        },
        ya = () => {},
        ba = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;

    function va(e) {
        return !!(e && A(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
    }
    const wa = e => {
            const t = new Array(10),
                a = (i, r) => {
                    if ($(i)) {
                        if (t.indexOf(i) >= 0) return;
                        if (!("toJSON" in i)) {
                            t[r] = i;
                            const o = c(i) ? [] : {};
                            return G(i, (n, p) => {
                                const k = a(n, r + 1);
                                !w(k) && (o[p] = k)
                            }), t[r] = void 0, o
                        }
                    }
                    return i
                };
            return a(e, 0)
        },
        ka = g("AsyncFunction"),
        Ta = e => e && ($(e) || A(e)) && A(e.then) && A(e.catch),
        ct = ((e, t) => e ? setImmediate : t ? ((a, i) => (ne.addEventListener("message", ({
            source: r,
            data: o
        }) => {
            r === ne && o === a && i.length && i.shift()()
        }, !1), r => {
            i.push(r), ne.postMessage(a, "*")
        }))(`axios@${Math.random()}`, []) : a => setTimeout(a))(typeof setImmediate == "function", A(ne.postMessage)),
        Sa = typeof queueMicrotask < "u" ? queueMicrotask.bind(ne) : typeof process < "u" && process.nextTick || ct;
    var s = {
        isArray: c,
        isArrayBuffer: h,
        isBuffer: M,
        isFormData: x,
        isArrayBufferView: F,
        isString: P,
        isNumber: W,
        isBoolean: pe,
        isObject: $,
        isPlainObject: E,
        isReadableStream: Y,
        isRequest: ye,
        isResponse: ce,
        isHeaders: te,
        isUndefined: w,
        isDate: L,
        isFile: _,
        isBlob: ie,
        isRegExp: ga,
        isFunction: A,
        isStream: j,
        isURLSearchParams: z,
        isTypedArray: ma,
        isFileList: v,
        forEach: G,
        merge: ze,
        extend: ia,
        trim: U,
        stripBOM: ra,
        inherits: oa,
        toFlatObject: na,
        kindOf: u,
        kindOfTest: g,
        endsWith: sa,
        toArray: la,
        forEachEntry: ca,
        matchAll: ua,
        isHTMLForm: da,
        hasOwnProperty: lt,
        hasOwnProp: lt,
        reduceDescriptors: mt,
        freezeMethods: ha,
        toObjectSet: fa,
        toCamelCase: pa,
        noop: ya,
        toFiniteNumber: ba,
        findKey: be,
        global: ne,
        isContextDefined: st,
        isSpecCompliantForm: va,
        toJSONObject: wa,
        isAsyncFn: ka,
        isThenable: Ta,
        setImmediate: ct,
        asap: Sa
    };

    function D(e, t, a, i, r) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), a && (this.config = a), i && (this.request = i), r && (this.response = r, this.status = r.status ? r.status : null)
    }
    s.inherits(D, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: s.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    const ut = D.prototype,
        dt = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
        dt[e] = {
            value: e
        }
    }), Object.defineProperties(D, dt), Object.defineProperty(ut, "isAxiosError", {
        value: !0
    }), D.from = (e, t, a, i, r, o) => {
        const n = Object.create(ut);
        return s.toFlatObject(e, n, function(k) {
            return k !== Error.prototype
        }, p => p !== "isAxiosError"), D.call(n, e.message, t, a, i, r), n.cause = e, n.name = e.name, o && Object.assign(n, o), n
    };
    var Ia = null;

    function Fe(e) {
        return s.isPlainObject(e) || s.isArray(e)
    }

    function pt(e) {
        return s.endsWith(e, "[]") ? e.slice(0, -2) : e
    }

    function gt(e, t, a) {
        return e ? e.concat(t).map(function(r, o) {
            return r = pt(r), !a && o ? "[" + r + "]" : r
        }).join(a ? "." : "") : t
    }

    function Ca(e) {
        return s.isArray(e) && !e.some(Fe)
    }
    const Aa = s.toFlatObject(s, {}, null, function(t) {
        return /^is[A-Z]/.test(t)
    });

    function Ie(e, t, a) {
        if (!s.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData, a = s.toFlatObject(a, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(R, I) {
            return !s.isUndefined(I[R])
        });
        const i = a.metaTokens,
            r = a.visitor || b,
            o = a.dots,
            n = a.indexes,
            k = (a.Blob || typeof Blob < "u" && Blob) && s.isSpecCompliantForm(t);
        if (!s.isFunction(r)) throw new TypeError("visitor must be a function");

        function f(S) {
            if (S === null) return "";
            if (s.isDate(S)) return S.toISOString();
            if (!k && s.isBlob(S)) throw new D("Blob is not supported. Use a Buffer instead.");
            return s.isArrayBuffer(S) || s.isTypedArray(S) ? k && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S
        }

        function b(S, R, I) {
            let V = S;
            if (S && !I && typeof S == "object") {
                if (s.endsWith(R, "{}")) R = i ? R : R.slice(0, -2), S = JSON.stringify(S);
                else if (s.isArray(S) && Ca(S) || (s.isFileList(S) || s.endsWith(R, "[]")) && (V = s.toArray(S))) return R = pt(R), V.forEach(function(Q, ue) {
                    !(s.isUndefined(Q) || Q === null) && t.append(n === !0 ? gt([R], ue, o) : n === null ? R : R + "[]", f(Q))
                }), !1
            }
            return Fe(S) ? !0 : (t.append(gt(I, R, o), f(S)), !1)
        }
        const T = [],
            J = Object.assign(Aa, {
                defaultVisitor: b,
                convertValue: f,
                isVisitable: Fe
            });

        function Z(S, R) {
            if (!s.isUndefined(S)) {
                if (T.indexOf(S) !== -1) throw Error("Circular reference detected in " + R.join("."));
                T.push(S), s.forEach(S, function(V, X) {
                    (!(s.isUndefined(V) || V === null) && r.call(t, V, s.isString(X) ? X.trim() : X, R, J)) === !0 && Z(V, R ? R.concat(X) : [X])
                }), T.pop()
            }
        }
        if (!s.isObject(e)) throw new TypeError("data must be an object");
        return Z(e), t
    }

    function ht(e) {
        const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(i) {
            return t[i]
        })
    }

    function Ge(e, t) {
        this._pairs = [], e && Ie(e, this, t)
    }
    const ft = Ge.prototype;
    ft.append = function(t, a) {
        this._pairs.push([t, a])
    }, ft.toString = function(t) {
        const a = t ? function(i) {
            return t.call(this, i, ht)
        } : ht;
        return this._pairs.map(function(r) {
            return a(r[0]) + "=" + a(r[1])
        }, "").join("&")
    };

    function Ma(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    function yt(e, t, a) {
        if (!t) return e;
        const i = a && a.encode || Ma;
        s.isFunction(a) && (a = {
            serialize: a
        });
        const r = a && a.serialize;
        let o;
        if (r ? o = r(t, a) : o = s.isURLSearchParams(t) ? t.toString() : new Ge(t, a).toString(i), o) {
            const n = e.indexOf("#");
            n !== -1 && (e = e.slice(0, n)), e += (e.indexOf("?") === -1 ? "?" : "&") + o
        }
        return e
    }
    class ja {
        constructor() {
            this.handlers = []
        }
        use(t, a, i) {
            return this.handlers.push({
                fulfilled: t,
                rejected: a,
                synchronous: i ? i.synchronous : !1,
                runWhen: i ? i.runWhen : null
            }), this.handlers.length - 1
        }
        eject(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }
        clear() {
            this.handlers && (this.handlers = [])
        }
        forEach(t) {
            s.forEach(this.handlers, function(i) {
                i !== null && t(i)
            })
        }
    }
    var bt = ja,
        vt = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        xa = typeof URLSearchParams < "u" ? URLSearchParams : Ge,
        Ea = typeof FormData < "u" ? FormData : null,
        Da = typeof Blob < "u" ? Blob : null,
        Na = {
            isBrowser: !0,
            classes: {
                URLSearchParams: xa,
                FormData: Ea,
                Blob: Da
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        };
    const Je = typeof window < "u" && typeof document < "u",
        _e = typeof navigator == "object" && navigator || void 0,
        Ra = Je && (!_e || ["ReactNative", "NativeScript", "NS"].indexOf(_e.product) < 0),
        Pa = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
        Oa = Je && window.location.href || "http://localhost";
    var Ua = Object.freeze({
            __proto__: null,
            hasBrowserEnv: Je,
            hasStandardBrowserWebWorkerEnv: Pa,
            hasStandardBrowserEnv: Ra,
            navigator: _e,
            origin: Oa
        }),
        ee = { ...Ua,
            ...Na
        };

    function Ba(e, t) {
        return Ie(e, new ee.classes.URLSearchParams, Object.assign({
            visitor: function(a, i, r, o) {
                return ee.isNode && s.isBuffer(a) ? (this.append(i, a.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
            }
        }, t))
    }

    function La(e) {
        return s.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
    }

    function Ha(e) {
        const t = {},
            a = Object.keys(e);
        let i;
        const r = a.length;
        let o;
        for (i = 0; i < r; i++) o = a[i], t[o] = e[o];
        return t
    }

    function wt(e) {
        function t(a, i, r, o) {
            let n = a[o++];
            if (n === "__proto__") return !0;
            const p = Number.isFinite(+n),
                k = o >= a.length;
            return n = !n && s.isArray(r) ? r.length : n, k ? (s.hasOwnProp(r, n) ? r[n] = [r[n], i] : r[n] = i, !p) : ((!r[n] || !s.isObject(r[n])) && (r[n] = []), t(a, i, r[n], o) && s.isArray(r[n]) && (r[n] = Ha(r[n])), !p)
        }
        if (s.isFormData(e) && s.isFunction(e.entries)) {
            const a = {};
            return s.forEachEntry(e, (i, r) => {
                t(La(i), r, a, 0)
            }), a
        }
        return null
    }

    function za(e, t, a) {
        if (s.isString(e)) try {
            return (t || JSON.parse)(e), s.trim(e)
        } catch (i) {
            if (i.name !== "SyntaxError") throw i
        }
        return (a || JSON.stringify)(e)
    }
    const qe = {
        transitional: vt,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function(t, a) {
            const i = a.getContentType() || "",
                r = i.indexOf("application/json") > -1,
                o = s.isObject(t);
            if (o && s.isHTMLForm(t) && (t = new FormData(t)), s.isFormData(t)) return r ? JSON.stringify(wt(t)) : t;
            if (s.isArrayBuffer(t) || s.isBuffer(t) || s.isStream(t) || s.isFile(t) || s.isBlob(t) || s.isReadableStream(t)) return t;
            if (s.isArrayBufferView(t)) return t.buffer;
            if (s.isURLSearchParams(t)) return a.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
            let p;
            if (o) {
                if (i.indexOf("application/x-www-form-urlencoded") > -1) return Ba(t, this.formSerializer).toString();
                if ((p = s.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
                    const k = this.env && this.env.FormData;
                    return Ie(p ? {
                        "files[]": t
                    } : t, k && new k, this.formSerializer)
                }
            }
            return o || r ? (a.setContentType("application/json", !1), za(t)) : t
        }],
        transformResponse: [function(t) {
            const a = this.transitional || qe.transitional,
                i = a && a.forcedJSONParsing,
                r = this.responseType === "json";
            if (s.isResponse(t) || s.isReadableStream(t)) return t;
            if (t && s.isString(t) && (i && !this.responseType || r)) {
                const n = !(a && a.silentJSONParsing) && r;
                try {
                    return JSON.parse(t)
                } catch (p) {
                    if (n) throw p.name === "SyntaxError" ? D.from(p, D.ERR_BAD_RESPONSE, this, null, this.response) : p
                }
            }
            return t
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: ee.classes.FormData,
            Blob: ee.classes.Blob
        },
        validateStatus: function(t) {
            return t >= 200 && t < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    s.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
        qe.headers[e] = {}
    });
    var We = qe;
    const Fa = s.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
    var Ga = e => {
        const t = {};
        let a, i, r;
        return e && e.split(`
`).forEach(function(n) {
            r = n.indexOf(":"), a = n.substring(0, r).trim().toLowerCase(), i = n.substring(r + 1).trim(), !(!a || t[a] && Fa[a]) && (a === "set-cookie" ? t[a] ? t[a].push(i) : t[a] = [i] : t[a] = t[a] ? t[a] + ", " + i : i)
        }), t
    };
    const kt = Symbol("internals");

    function ke(e) {
        return e && String(e).trim().toLowerCase()
    }

    function Ce(e) {
        return e === !1 || e == null ? e : s.isArray(e) ? e.map(Ce) : String(e)
    }

    function Ja(e) {
        const t = Object.create(null),
            a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let i;
        for (; i = a.exec(e);) t[i[1]] = i[2];
        return t
    }
    const _a = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

    function Ve(e, t, a, i, r) {
        if (s.isFunction(i)) return i.call(this, t, a);
        if (r && (t = a), !!s.isString(t)) {
            if (s.isString(i)) return t.indexOf(i) !== -1;
            if (s.isRegExp(i)) return i.test(t)
        }
    }

    function qa(e) {
        return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, a, i) => a.toUpperCase() + i)
    }

    function Wa(e, t) {
        const a = s.toCamelCase(" " + t);
        ["get", "set", "has"].forEach(i => {
            Object.defineProperty(e, i + a, {
                value: function(r, o, n) {
                    return this[i].call(this, t, r, o, n)
                },
                configurable: !0
            })
        })
    }
    class Ae {
        constructor(t) {
            t && this.set(t)
        }
        set(t, a, i) {
            const r = this;

            function o(p, k, f) {
                const b = ke(k);
                if (!b) throw new Error("header name must be a non-empty string");
                const T = s.findKey(r, b);
                (!T || r[T] === void 0 || f === !0 || f === void 0 && r[T] !== !1) && (r[T || k] = Ce(p))
            }
            const n = (p, k) => s.forEach(p, (f, b) => o(f, b, k));
            if (s.isPlainObject(t) || t instanceof this.constructor) n(t, a);
            else if (s.isString(t) && (t = t.trim()) && !_a(t)) n(Ga(t), a);
            else if (s.isHeaders(t))
                for (const [p, k] of t.entries()) o(k, p, i);
            else t != null && o(a, t, i);
            return this
        }
        get(t, a) {
            if (t = ke(t), t) {
                const i = s.findKey(this, t);
                if (i) {
                    const r = this[i];
                    if (!a) return r;
                    if (a === !0) return Ja(r);
                    if (s.isFunction(a)) return a.call(this, r, i);
                    if (s.isRegExp(a)) return a.exec(r);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(t, a) {
            if (t = ke(t), t) {
                const i = s.findKey(this, t);
                return !!(i && this[i] !== void 0 && (!a || Ve(this, this[i], i, a)))
            }
            return !1
        }
        delete(t, a) {
            const i = this;
            let r = !1;

            function o(n) {
                if (n = ke(n), n) {
                    const p = s.findKey(i, n);
                    p && (!a || Ve(i, i[p], p, a)) && (delete i[p], r = !0)
                }
            }
            return s.isArray(t) ? t.forEach(o) : o(t), r
        }
        clear(t) {
            const a = Object.keys(this);
            let i = a.length,
                r = !1;
            for (; i--;) {
                const o = a[i];
                (!t || Ve(this, this[o], o, t, !0)) && (delete this[o], r = !0)
            }
            return r
        }
        normalize(t) {
            const a = this,
                i = {};
            return s.forEach(this, (r, o) => {
                const n = s.findKey(i, o);
                if (n) {
                    a[n] = Ce(r), delete a[o];
                    return
                }
                const p = t ? qa(o) : String(o).trim();
                p !== o && delete a[o], a[p] = Ce(r), i[p] = !0
            }), this
        }
        concat(...t) {
            return this.constructor.concat(this, ...t)
        }
        toJSON(t) {
            const a = Object.create(null);
            return s.forEach(this, (i, r) => {
                i != null && i !== !1 && (a[r] = t && s.isArray(i) ? i.join(", ") : i)
            }), a
        }[Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map(([t, a]) => t + ": " + a).join(`
`)
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(t) {
            return t instanceof this ? t : new this(t)
        }
        static concat(t, ...a) {
            const i = new this(t);
            return a.forEach(r => i.set(r)), i
        }
        static accessor(t) {
            const i = (this[kt] = this[kt] = {
                    accessors: {}
                }).accessors,
                r = this.prototype;

            function o(n) {
                const p = ke(n);
                i[p] || (Wa(r, n), i[p] = !0)
            }
            return s.isArray(t) ? t.forEach(o) : o(t), this
        }
    }
    Ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), s.reduceDescriptors(Ae.prototype, ({
        value: e
    }, t) => {
        let a = t[0].toUpperCase() + t.slice(1);
        return {
            get: () => e,
            set(i) {
                this[a] = i
            }
        }
    }), s.freezeMethods(Ae);
    var se = Ae;

    function $e(e, t) {
        const a = this || We,
            i = t || a,
            r = se.from(i.headers);
        let o = i.data;
        return s.forEach(e, function(p) {
            o = p.call(a, o, r.normalize(), t ? t.status : void 0)
        }), r.normalize(), o
    }

    function Tt(e) {
        return !!(e && e.__CANCEL__)
    }

    function ve(e, t, a) {
        D.call(this, e ? ? "canceled", D.ERR_CANCELED, t, a), this.name = "CanceledError"
    }
    s.inherits(ve, D, {
        __CANCEL__: !0
    });

    function St(e, t, a) {
        const i = a.config.validateStatus;
        !a.status || !i || i(a.status) ? e(a) : t(new D("Request failed with status code " + a.status, [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4], a.config, a.request, a))
    }

    function Va(e) {
        const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return t && t[1] || ""
    }

    function $a(e, t) {
        e = e || 10;
        const a = new Array(e),
            i = new Array(e);
        let r = 0,
            o = 0,
            n;
        return t = t !== void 0 ? t : 1e3,
            function(k) {
                const f = Date.now(),
                    b = i[o];
                n || (n = f), a[r] = k, i[r] = f;
                let T = o,
                    J = 0;
                for (; T !== r;) J += a[T++], T = T % e;
                if (r = (r + 1) % e, r === o && (o = (o + 1) % e), f - n < t) return;
                const Z = b && f - b;
                return Z ? Math.round(J * 1e3 / Z) : void 0
            }
    }

    function Ya(e, t) {
        let a = 0,
            i = 1e3 / t,
            r, o;
        const n = (f, b = Date.now()) => {
            a = b, r = null, o && (clearTimeout(o), o = null), e.apply(null, f)
        };
        return [(...f) => {
            const b = Date.now(),
                T = b - a;
            T >= i ? n(f, b) : (r = f, o || (o = setTimeout(() => {
                o = null, n(r)
            }, i - T)))
        }, () => r && n(r)]
    }
    const Me = (e, t, a = 3) => {
            let i = 0;
            const r = $a(50, 250);
            return Ya(o => {
                const n = o.loaded,
                    p = o.lengthComputable ? o.total : void 0,
                    k = n - i,
                    f = r(k),
                    b = n <= p;
                i = n;
                const T = {
                    loaded: n,
                    total: p,
                    progress: p ? n / p : void 0,
                    bytes: k,
                    rate: f || void 0,
                    estimated: f && p && b ? (p - n) / f : void 0,
                    event: o,
                    lengthComputable: p != null,
                    [t ? "download" : "upload"]: !0
                };
                e(T)
            }, a)
        },
        It = (e, t) => {
            const a = e != null;
            return [i => t[0]({
                lengthComputable: a,
                total: e,
                loaded: i
            }), t[1]]
        },
        Ct = e => (...t) => s.asap(() => e(...t));
    var Ka = ee.hasStandardBrowserEnv ? ((e, t) => a => (a = new URL(a, ee.origin), e.protocol === a.protocol && e.host === a.host && (t || e.port === a.port)))(new URL(ee.origin), ee.navigator && /(msie|trident)/i.test(ee.navigator.userAgent)) : () => !0,
        Za = ee.hasStandardBrowserEnv ? {
            write(e, t, a, i, r, o) {
                const n = [e + "=" + encodeURIComponent(t)];
                s.isNumber(a) && n.push("expires=" + new Date(a).toGMTString()), s.isString(i) && n.push("path=" + i), s.isString(r) && n.push("domain=" + r), o === !0 && n.push("secure"), document.cookie = n.join("; ")
            },
            read(e) {
                const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read() {
                return null
            },
            remove() {}
        };

    function Xa(e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    }

    function Qa(e, t) {
        return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
    }

    function At(e, t, a) {
        let i = !Xa(t);
        return e && i || a == !1 ? Qa(e, t) : t
    }
    const Mt = e => e instanceof se ? { ...e
    } : e;

    function ge(e, t) {
        t = t || {};
        const a = {};

        function i(f, b, T, J) {
            return s.isPlainObject(f) && s.isPlainObject(b) ? s.merge.call({
                caseless: J
            }, f, b) : s.isPlainObject(b) ? s.merge({}, b) : s.isArray(b) ? b.slice() : b
        }

        function r(f, b, T, J) {
            if (s.isUndefined(b)) {
                if (!s.isUndefined(f)) return i(void 0, f, T, J)
            } else return i(f, b, T, J)
        }

        function o(f, b) {
            if (!s.isUndefined(b)) return i(void 0, b)
        }

        function n(f, b) {
            if (s.isUndefined(b)) {
                if (!s.isUndefined(f)) return i(void 0, f)
            } else return i(void 0, b)
        }

        function p(f, b, T) {
            if (T in t) return i(f, b);
            if (T in e) return i(void 0, f)
        }
        const k = {
            url: o,
            method: o,
            data: o,
            baseURL: n,
            transformRequest: n,
            transformResponse: n,
            paramsSerializer: n,
            timeout: n,
            timeoutMessage: n,
            withCredentials: n,
            withXSRFToken: n,
            adapter: n,
            responseType: n,
            xsrfCookieName: n,
            xsrfHeaderName: n,
            onUploadProgress: n,
            onDownloadProgress: n,
            decompress: n,
            maxContentLength: n,
            maxBodyLength: n,
            beforeRedirect: n,
            transport: n,
            httpAgent: n,
            httpsAgent: n,
            cancelToken: n,
            socketPath: n,
            responseEncoding: n,
            validateStatus: p,
            headers: (f, b, T) => r(Mt(f), Mt(b), T, !0)
        };
        return s.forEach(Object.keys(Object.assign({}, e, t)), function(b) {
            const T = k[b] || r,
                J = T(e[b], t[b], b);
            s.isUndefined(J) && T !== p || (a[b] = J)
        }), a
    }
    var jt = e => {
            const t = ge({}, e);
            let {
                data: a,
                withXSRFToken: i,
                xsrfHeaderName: r,
                xsrfCookieName: o,
                headers: n,
                auth: p
            } = t;
            t.headers = n = se.from(n), t.url = yt(At(t.baseURL, t.url), e.params, e.paramsSerializer), p && n.set("Authorization", "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : "")));
            let k;
            if (s.isFormData(a)) {
                if (ee.hasStandardBrowserEnv || ee.hasStandardBrowserWebWorkerEnv) n.setContentType(void 0);
                else if ((k = n.getContentType()) !== !1) {
                    const [f, ...b] = k ? k.split(";").map(T => T.trim()).filter(Boolean) : [];
                    n.setContentType([f || "multipart/form-data", ...b].join("; "))
                }
            }
            if (ee.hasStandardBrowserEnv && (i && s.isFunction(i) && (i = i(t)), i || i !== !1 && Ka(t.url))) {
                const f = r && o && Za.read(o);
                f && n.set(r, f)
            }
            return t
        },
        ei = typeof XMLHttpRequest < "u" && function(e) {
            return new Promise(function(a, i) {
                const r = jt(e);
                let o = r.data;
                const n = se.from(r.headers).normalize();
                let {
                    responseType: p,
                    onUploadProgress: k,
                    onDownloadProgress: f
                } = r, b, T, J, Z, S;

                function R() {
                    Z && Z(), S && S(), r.cancelToken && r.cancelToken.unsubscribe(b), r.signal && r.signal.removeEventListener("abort", b)
                }
                let I = new XMLHttpRequest;
                I.open(r.method.toUpperCase(), r.url, !0), I.timeout = r.timeout;

                function V() {
                    if (!I) return;
                    const Q = se.from("getAllResponseHeaders" in I && I.getAllResponseHeaders()),
                        ae = {
                            data: !p || p === "text" || p === "json" ? I.responseText : I.response,
                            status: I.status,
                            statusText: I.statusText,
                            headers: Q,
                            config: e,
                            request: I
                        };
                    St(function(he) {
                        a(he), R()
                    }, function(he) {
                        i(he), R()
                    }, ae), I = null
                }
                "onloadend" in I ? I.onloadend = V : I.onreadystatechange = function() {
                    !I || I.readyState !== 4 || I.status === 0 && !(I.responseURL && I.responseURL.indexOf("file:") === 0) || setTimeout(V)
                }, I.onabort = function() {
                    I && (i(new D("Request aborted", D.ECONNABORTED, e, I)), I = null)
                }, I.onerror = function() {
                    i(new D("Network Error", D.ERR_NETWORK, e, I)), I = null
                }, I.ontimeout = function() {
                    let ue = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
                    const ae = r.transitional || vt;
                    r.timeoutErrorMessage && (ue = r.timeoutErrorMessage), i(new D(ue, ae.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED, e, I)), I = null
                }, o === void 0 && n.setContentType(null), "setRequestHeader" in I && s.forEach(n.toJSON(), function(ue, ae) {
                    I.setRequestHeader(ae, ue)
                }), s.isUndefined(r.withCredentials) || (I.withCredentials = !!r.withCredentials), p && p !== "json" && (I.responseType = r.responseType), f && ([J, S] = Me(f, !0), I.addEventListener("progress", J)), k && I.upload && ([T, Z] = Me(k), I.upload.addEventListener("progress", T), I.upload.addEventListener("loadend", Z)), (r.cancelToken || r.signal) && (b = Q => {
                    I && (i(!Q || Q.type ? new ve(null, e, I) : Q), I.abort(), I = null)
                }, r.cancelToken && r.cancelToken.subscribe(b), r.signal && (r.signal.aborted ? b() : r.signal.addEventListener("abort", b)));
                const X = Va(r.url);
                if (X && ee.protocols.indexOf(X) === -1) {
                    i(new D("Unsupported protocol " + X + ":", D.ERR_BAD_REQUEST, e));
                    return
                }
                I.send(o || null)
            })
        },
        ti = (e, t) => {
            const {
                length: a
            } = e = e ? e.filter(Boolean) : [];
            if (t || a) {
                let i = new AbortController,
                    r;
                const o = function(f) {
                    if (!r) {
                        r = !0, p();
                        const b = f instanceof Error ? f : this.reason;
                        i.abort(b instanceof D ? b : new ve(b instanceof Error ? b.message : b))
                    }
                };
                let n = t && setTimeout(() => {
                    n = null, o(new D(`timeout ${t} of ms exceeded`, D.ETIMEDOUT))
                }, t);
                const p = () => {
                    e && (n && clearTimeout(n), n = null, e.forEach(f => {
                        f.unsubscribe ? f.unsubscribe(o) : f.removeEventListener("abort", o)
                    }), e = null)
                };
                e.forEach(f => f.addEventListener("abort", o));
                const {
                    signal: k
                } = i;
                return k.unsubscribe = () => s.asap(p), k
            }
        };
    const ai = function*(e, t) {
            let a = e.byteLength;
            if (a < t) {
                yield e;
                return
            }
            let i = 0,
                r;
            for (; i < a;) r = i + t, yield e.slice(i, r), i = r
        },
        ii = async function*(e, t) {
            for await (const a of ri(e)) yield* ai(a, t)
        },
        ri = async function*(e) {
            if (e[Symbol.asyncIterator]) {
                yield* e;
                return
            }
            const t = e.getReader();
            try {
                for (;;) {
                    const {
                        done: a,
                        value: i
                    } = await t.read();
                    if (a) break;
                    yield i
                }
            } finally {
                await t.cancel()
            }
        },
        xt = (e, t, a, i) => {
            const r = ii(e, t);
            let o = 0,
                n, p = k => {
                    n || (n = !0, i && i(k))
                };
            return new ReadableStream({
                async pull(k) {
                    try {
                        const {
                            done: f,
                            value: b
                        } = await r.next();
                        if (f) {
                            p(), k.close();
                            return
                        }
                        let T = b.byteLength;
                        if (a) {
                            let J = o += T;
                            a(J)
                        }
                        k.enqueue(new Uint8Array(b))
                    } catch (f) {
                        throw p(f), f
                    }
                },
                cancel(k) {
                    return p(k), r.return()
                }
            }, {
                highWaterMark: 2
            })
        },
        je = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
        Et = je && typeof ReadableStream == "function",
        oi = je && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer())),
        Dt = (e, ...t) => {
            try {
                return !!e(...t)
            } catch {
                return !1
            }
        },
        ni = Et && Dt(() => {
            let e = !1;
            const t = new Request(ee.origin, {
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return e = !0, "half"
                }
            }).headers.has("Content-Type");
            return e && !t
        }),
        Nt = 64 * 1024,
        Ye = Et && Dt(() => s.isReadableStream(new Response("").body)),
        xe = {
            stream: Ye && (e => e.body)
        };
    je && (e => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
            !xe[t] && (xe[t] = s.isFunction(e[t]) ? a => a[t]() : (a, i) => {
                throw new D(`Response type '${t}' is not supported`, D.ERR_NOT_SUPPORT, i)
            })
        })
    })(new Response);
    const si = async e => {
            if (e == null) return 0;
            if (s.isBlob(e)) return e.size;
            if (s.isSpecCompliantForm(e)) return (await new Request(ee.origin, {
                method: "POST",
                body: e
            }).arrayBuffer()).byteLength;
            if (s.isArrayBufferView(e) || s.isArrayBuffer(e)) return e.byteLength;
            if (s.isURLSearchParams(e) && (e = e + ""), s.isString(e)) return (await oi(e)).byteLength
        },
        li = async (e, t) => {
            const a = s.toFiniteNumber(e.getContentLength());
            return a ? ? si(t)
        };
    var mi = je && (async e => {
        let {
            url: t,
            method: a,
            data: i,
            signal: r,
            cancelToken: o,
            timeout: n,
            onDownloadProgress: p,
            onUploadProgress: k,
            responseType: f,
            headers: b,
            withCredentials: T = "same-origin",
            fetchOptions: J
        } = jt(e);
        f = f ? (f + "").toLowerCase() : "text";
        let Z = ti([r, o && o.toAbortSignal()], n),
            S;
        const R = Z && Z.unsubscribe && (() => {
            Z.unsubscribe()
        });
        let I;
        try {
            if (k && ni && a !== "get" && a !== "head" && (I = await li(b, i)) !== 0) {
                let ae = new Request(t, {
                        method: "POST",
                        body: i,
                        duplex: "half"
                    }),
                    de;
                if (s.isFormData(i) && (de = ae.headers.get("content-type")) && b.setContentType(de), ae.body) {
                    const [he, Pe] = It(I, Me(Ct(k)));
                    i = xt(ae.body, Nt, he, Pe)
                }
            }
            s.isString(T) || (T = T ? "include" : "omit");
            const V = "credentials" in Request.prototype;
            S = new Request(t, { ...J,
                signal: Z,
                method: a.toUpperCase(),
                headers: b.normalize().toJSON(),
                body: i,
                duplex: "half",
                credentials: V ? T : void 0
            });
            let X = await fetch(S);
            const Q = Ye && (f === "stream" || f === "response");
            if (Ye && (p || Q && R)) {
                const ae = {};
                ["status", "statusText", "headers"].forEach(Ht => {
                    ae[Ht] = X[Ht]
                });
                const de = s.toFiniteNumber(X.headers.get("content-length")),
                    [he, Pe] = p && It(de, Me(Ct(p), !0)) || [];
                X = new Response(xt(X.body, Nt, he, () => {
                    Pe && Pe(), R && R()
                }), ae)
            }
            f = f || "text";
            let ue = await xe[s.findKey(xe, f) || "text"](X, e);
            return !Q && R && R(), await new Promise((ae, de) => {
                St(ae, de, {
                    data: ue,
                    headers: se.from(X.headers),
                    status: X.status,
                    statusText: X.statusText,
                    config: e,
                    request: S
                })
            })
        } catch (V) {
            throw R && R(), V && V.name === "TypeError" && /fetch/i.test(V.message) ? Object.assign(new D("Network Error", D.ERR_NETWORK, e, S), {
                cause: V.cause || V
            }) : D.from(V, V && V.code, e, S)
        }
    });
    const Ke = {
        http: Ia,
        xhr: ei,
        fetch: mi
    };
    s.forEach(Ke, (e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    });
    const Rt = e => `- ${e}`,
        ci = e => s.isFunction(e) || e === null || e === !1;
    var Pt = {
        getAdapter: e => {
            e = s.isArray(e) ? e : [e];
            const {
                length: t
            } = e;
            let a, i;
            const r = {};
            for (let o = 0; o < t; o++) {
                a = e[o];
                let n;
                if (i = a, !ci(a) && (i = Ke[(n = String(a)).toLowerCase()], i === void 0)) throw new D(`Unknown adapter '${n}'`);
                if (i) break;
                r[n || "#" + o] = i
            }
            if (!i) {
                const o = Object.entries(r).map(([p, k]) => `adapter ${p} ` + (k === !1 ? "is not supported by the environment" : "is not available in the build"));
                let n = t ? o.length > 1 ? `since :
` + o.map(Rt).join(`
`) : " " + Rt(o[0]) : "as no adapter specified";
                throw new D("There is no suitable adapter to dispatch the request " + n, "ERR_NOT_SUPPORT")
            }
            return i
        },
        adapters: Ke
    };

    function Ze(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ve(null, e)
    }

    function Ot(e) {
        return Ze(e), e.headers = se.from(e.headers), e.data = $e.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Pt.getAdapter(e.adapter || We.adapter)(e).then(function(i) {
            return Ze(e), i.data = $e.call(e, e.transformResponse, i), i.headers = se.from(i.headers), i
        }, function(i) {
            return Tt(i) || (Ze(e), i && i.response && (i.response.data = $e.call(e, e.transformResponse, i.response), i.response.headers = se.from(i.response.headers))), Promise.reject(i)
        })
    }
    const Ut = "1.8.2",
        Ee = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
        Ee[e] = function(i) {
            return typeof i === e || "a" + (t < 1 ? "n " : " ") + e
        }
    });
    const Bt = {};
    Ee.transitional = function(t, a, i) {
        function r(o, n) {
            return "[Axios v" + Ut + "] Transitional option '" + o + "'" + n + (i ? ". " + i : "")
        }
        return (o, n, p) => {
            if (t === !1) throw new D(r(n, " has been removed" + (a ? " in " + a : "")), D.ERR_DEPRECATED);
            return a && !Bt[n] && (Bt[n] = !0, console.warn(r(n, " has been deprecated since v" + a + " and will be removed in the near future"))), t ? t(o, n, p) : !0
        }
    }, Ee.spelling = function(t) {
        return (a, i) => (console.warn(`${i} is likely a misspelling of ${t}`), !0)
    };

    function ui(e, t, a) {
        if (typeof e != "object") throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
        const i = Object.keys(e);
        let r = i.length;
        for (; r-- > 0;) {
            const o = i[r],
                n = t[o];
            if (n) {
                const p = e[o],
                    k = p === void 0 || n(p, o, e);
                if (k !== !0) throw new D("option " + o + " must be " + k, D.ERR_BAD_OPTION_VALUE);
                continue
            }
            if (a !== !0) throw new D("Unknown option " + o, D.ERR_BAD_OPTION)
        }
    }
    var De = {
        assertOptions: ui,
        validators: Ee
    };
    const le = De.validators;
    class Ne {
        constructor(t) {
            this.defaults = t, this.interceptors = {
                request: new bt,
                response: new bt
            }
        }
        async request(t, a) {
            try {
                return await this._request(t, a)
            } catch (i) {
                if (i instanceof Error) {
                    let r = {};
                    Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error;
                    const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
                    try {
                        i.stack ? o && !String(i.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + o) : i.stack = o
                    } catch {}
                }
                throw i
            }
        }
        _request(t, a) {
            typeof t == "string" ? (a = a || {}, a.url = t) : a = t || {}, a = ge(this.defaults, a);
            const {
                transitional: i,
                paramsSerializer: r,
                headers: o
            } = a;
            i !== void 0 && De.assertOptions(i, {
                silentJSONParsing: le.transitional(le.boolean),
                forcedJSONParsing: le.transitional(le.boolean),
                clarifyTimeoutError: le.transitional(le.boolean)
            }, !1), r != null && (s.isFunction(r) ? a.paramsSerializer = {
                serialize: r
            } : De.assertOptions(r, {
                encode: le.function,
                serialize: le.function
            }, !0)), a.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? a.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : a.allowAbsoluteUrls = !0), De.assertOptions(a, {
                baseUrl: le.spelling("baseURL"),
                withXsrfToken: le.spelling("withXSRFToken")
            }, !0), a.method = (a.method || this.defaults.method || "get").toLowerCase();
            let n = o && s.merge(o.common, o[a.method]);
            o && s.forEach(["delete", "get", "head", "post", "put", "patch", "common"], S => {
                delete o[S]
            }), a.headers = se.concat(n, o);
            const p = [];
            let k = !0;
            this.interceptors.request.forEach(function(R) {
                typeof R.runWhen == "function" && R.runWhen(a) === !1 || (k = k && R.synchronous, p.unshift(R.fulfilled, R.rejected))
            });
            const f = [];
            this.interceptors.response.forEach(function(R) {
                f.push(R.fulfilled, R.rejected)
            });
            let b, T = 0,
                J;
            if (!k) {
                const S = [Ot.bind(this), void 0];
                for (S.unshift.apply(S, p), S.push.apply(S, f), J = S.length, b = Promise.resolve(a); T < J;) b = b.then(S[T++], S[T++]);
                return b
            }
            J = p.length;
            let Z = a;
            for (T = 0; T < J;) {
                const S = p[T++],
                    R = p[T++];
                try {
                    Z = S(Z)
                } catch (I) {
                    R.call(this, I);
                    break
                }
            }
            try {
                b = Ot.call(this, Z)
            } catch (S) {
                return Promise.reject(S)
            }
            for (T = 0, J = f.length; T < J;) b = b.then(f[T++], f[T++]);
            return b
        }
        getUri(t) {
            t = ge(this.defaults, t);
            const a = At(t.baseURL, t.url, t.allowAbsoluteUrls);
            return yt(a, t.params, t.paramsSerializer)
        }
    }
    s.forEach(["delete", "get", "head", "options"], function(t) {
        Ne.prototype[t] = function(a, i) {
            return this.request(ge(i || {}, {
                method: t,
                url: a,
                data: (i || {}).data
            }))
        }
    }), s.forEach(["post", "put", "patch"], function(t) {
        function a(i) {
            return function(o, n, p) {
                return this.request(ge(p || {}, {
                    method: t,
                    headers: i ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: o,
                    data: n
                }))
            }
        }
        Ne.prototype[t] = a(), Ne.prototype[t + "Form"] = a(!0)
    });
    var Re = Ne;
    class Xe {
        constructor(t) {
            if (typeof t != "function") throw new TypeError("executor must be a function.");
            let a;
            this.promise = new Promise(function(o) {
                a = o
            });
            const i = this;
            this.promise.then(r => {
                if (!i._listeners) return;
                let o = i._listeners.length;
                for (; o-- > 0;) i._listeners[o](r);
                i._listeners = null
            }), this.promise.then = r => {
                let o;
                const n = new Promise(p => {
                    i.subscribe(p), o = p
                }).then(r);
                return n.cancel = function() {
                    i.unsubscribe(o)
                }, n
            }, t(function(o, n, p) {
                i.reason || (i.reason = new ve(o, n, p), a(i.reason))
            })
        }
        throwIfRequested() {
            if (this.reason) throw this.reason
        }
        subscribe(t) {
            if (this.reason) {
                t(this.reason);
                return
            }
            this._listeners ? this._listeners.push(t) : this._listeners = [t]
        }
        unsubscribe(t) {
            if (!this._listeners) return;
            const a = this._listeners.indexOf(t);
            a !== -1 && this._listeners.splice(a, 1)
        }
        toAbortSignal() {
            const t = new AbortController,
                a = i => {
                    t.abort(i)
                };
            return this.subscribe(a), t.signal.unsubscribe = () => this.unsubscribe(a), t.signal
        }
        static source() {
            let t;
            return {
                token: new Xe(function(r) {
                    t = r
                }),
                cancel: t
            }
        }
    }
    var di = Xe;

    function pi(e) {
        return function(a) {
            return e.apply(null, a)
        }
    }

    function gi(e) {
        return s.isObject(e) && e.isAxiosError === !0
    }
    const Qe = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(Qe).forEach(([e, t]) => {
        Qe[t] = e
    });
    var hi = Qe;

    function Lt(e) {
        const t = new Re(e),
            a = d(Re.prototype.request, t);
        return s.extend(a, Re.prototype, t, {
            allOwnKeys: !0
        }), s.extend(a, t, null, {
            allOwnKeys: !0
        }), a.create = function(r) {
            return Lt(ge(e, r))
        }, a
    }
    const K = Lt(We);
    return K.Axios = Re, K.CanceledError = ve, K.CancelToken = di, K.isCancel = Tt, K.VERSION = Ut, K.toFormData = Ie, K.AxiosError = D, K.Cancel = K.CanceledError, K.all = function(t) {
        return Promise.all(t)
    }, K.spread = pi, K.isAxiosError = gi, K.mergeConfig = ge, K.AxiosHeaders = se, K.formToJSON = e => wt(s.isHTMLForm(e) ? new FormData(e) : e), K.getAdapter = Pt.getAdapter, K.HttpStatusCode = hi, K.default = K, et = K, et
}
var tt, Ft;

function Ti() {
    return Ft || (Ft = 1, tt = function d(l, m) {
        if (l === m) return !0;
        if (l && m && typeof l == "object" && typeof m == "object") {
            if (l.constructor !== m.constructor) return !1;
            var u, g, y;
            if (Array.isArray(l)) {
                if (u = l.length, u != m.length) return !1;
                for (g = u; g-- !== 0;)
                    if (!d(l[g], m[g])) return !1;
                return !0
            }
            if (l.constructor === RegExp) return l.source === m.source && l.flags === m.flags;
            if (l.valueOf !== Object.prototype.valueOf) return l.valueOf() === m.valueOf();
            if (l.toString !== Object.prototype.toString) return l.toString() === m.toString();
            if (y = Object.keys(l), u = y.length, u !== Object.keys(m).length) return !1;
            for (g = u; g-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(m, y[g])) return !1;
            for (g = u; g-- !== 0;) {
                var c = y[g];
                if (!d(l[c], m[c])) return !1
            }
            return !0
        }
        return l !== l && m !== m
    }), tt
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var at, Gt;

function Si() {
    return Gt || (Gt = 1, at = function(l) {
        return l != null && l.constructor != null && typeof l.constructor.isBuffer == "function" && l.constructor.isBuffer(l)
    }), at
}
/*!
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var it, Jt;

function Ii() {
    if (Jt) return it;
    Jt = 1;

    function d(l) {
        return typeof Blob > "u" ? !1 : l instanceof Blob || Object.prototype.toString.call(l) === "[object Blob]"
    }
    return it = d, it
}
var rt, _t;

function Yt() {
    if (_t) return rt;
    _t = 1;
    var d = ki(),
        l = Ti(),
        m = Si(),
        u = Ii(),
        g = Object.prototype.toString;

    function y(v, j) {
        for (var x = v.length, z = 0; z < x; z++) {
            var Y = v[z];
            if (j(Y)) return Y
        }
    }

    function c(v) {
        return g.call(v) === "[object Function]"
    }

    function w(v) {
        return v !== null && typeof v == "object"
    }

    function M(v) {
        return w(v) && c(v.pipe)
    }

    function h(v) {
        return g.call(v) === "[object ArrayBuffer]"
    }

    function F(v, j) {
        return v ? v.replace(/\/+$/, "") + "/" + j.replace(/^\/+/, "") : j
    }

    function P(v, j, x, z, Y, ye, ce) {
        return y(v[j.toLowerCase()], function(te) {
            var U = !1;
            return typeof te[0] == "string" ? U = A(x, te[0]) || A(F(ce, x), te[0]) : te[0] instanceof RegExp && (U = te[0].test(x) || te[0].test(F(ce, x))), U && W(z, Y, te[1]) && $(ye, te[2])
        })
    }

    function A(v, j) {
        var x = v[0] === "/" ? v.substr(1) : v,
            z = j[0] === "/" ? j.substr(1) : j;
        return x === z
    }

    function W(v, j, x) {
        return $(j, x && x.params) && pe(v, x && x.data)
    }

    function $(v, j) {
        return j === void 0 ? !0 : typeof j.asymmetricMatch == "function" ? j.asymmetricMatch(v) : l(v, j)
    }

    function pe(v, j) {
        if (j === void 0) return !0;
        var x;
        try {
            x = JSON.parse(v)
        } catch {}
        return $(x || v, j)
    }

    function E(v, j) {
        Object.keys(v.handlers).forEach(function(x) {
            var z = v.handlers[x].indexOf(j);
            z > -1 && v.handlers[x].splice(z, 1)
        })
    }

    function L(v, j, x, z) {
        if (z > 0) {
            setTimeout(L, z, v, j, x);
            return
        }!x.config.validateStatus || x.config.validateStatus(x.status) ? v(x) : j(_("Request failed with status code " + x.status, x.config, x))
    }

    function _(v, j, x, z) {
        if (typeof d.AxiosError == "function") return d.AxiosError.from(new Error(v), z, j, null, x);
        var Y = new Error(v);
        return Y.isAxiosError = !0, Y.config = j, x !== void 0 && (Y.response = x), z !== void 0 && (Y.code = z), Y.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, Y
    }

    function ie(v) {
        var j = `Could not find mock for: 
` + JSON.stringify({
                method: v.method,
                url: v.url,
                params: v.params,
                headers: v.headers
            }, null, 2),
            x = new Error(j);
        return x.isCouldNotFindMockError = !0, x.url = v.url, x.method = v.method, x
    }
    return rt = {
        find: y,
        findHandler: P,
        purgeIfReplyOnce: E,
        settle: L,
        isStream: M,
        isArrayBuffer: h,
        isFunction: c,
        isObjectOrArray: w,
        isBuffer: m,
        isBlob: u,
        isBodyOrParametersMatching: W,
        isEqual: l,
        createAxiosError: _,
        createCouldNotFindMockError: ie
    }, rt
}
var ot, qt;

function Ci() {
    if (qt) return ot;
    qt = 1;
    var d = Yt();

    function l(c) {
        return d.isArrayBuffer(c) || d.isBuffer(c) || d.isStream(c) || d.isBlob(c) ? c : d.isObjectOrArray(c) ? JSON.parse(JSON.stringify(c)) : c
    }

    function m(c, w) {
        return {
            status: c[0],
            data: l(c[1]),
            headers: c[2],
            config: w,
            request: {
                responseURL: w.url
            }
        }
    }

    function u(c, w, M, h) {
        var F = h.baseURL;
        if (h.baseURL && !/^https?:/.test(h.baseURL) && (F = void 0), typeof c.originalAdapter == "function") return c.originalAdapter(h).then(w, M);
        c.axiosInstanceWithoutInterceptors(Object.assign({}, h, {
            baseURL: F,
            adapter: c.originalAdapter,
            transformRequest: [],
            transformResponse: []
        })).then(w, M)
    }

    function g(c, w, M, h) {
        var F = h.url || "";
        h.baseURL && F.substr(0, h.baseURL.length) === h.baseURL && (F = F.slice(h.baseURL.length)), delete h.adapter, c.history[h.method].push(h);
        var P = d.findHandler(c.handlers, h.method, F, h.data, h.params, h.headers && h.headers.constructor.name === "AxiosHeaders" ? Object.assign({}, h.headers.toJSON()) : h.headers, h.baseURL);
        if (P)
            if (P[6] === !0 && d.purgeIfReplyOnce(c, P), P.length === 2) u(c, w, M, h);
            else if (typeof P[3] != "function") d.settle(w, M, m(P.slice(3), h), y(c, P));
        else {
            var A = P[3](h);
            typeof A.then != "function" ? d.settle(w, M, m(A, h), y(c, P)) : A.then(function(W) {
                W.config && W.status ? d.settle(w, M, m([W.status, W.data, W.headers], W.config), 0) : d.settle(w, M, m(W, h), y(c, P))
            }, function(W) {
                c.delayResponse > 0 ? setTimeout(function() {
                    M(W)
                }, y(c, P)) : M(W)
            })
        } else switch (c.onNoMatch) {
            case "passthrough":
                u(c, w, M, h);
                break;
            case "throwException":
                throw d.createCouldNotFindMockError(h);
            default:
                d.settle(w, M, {
                    status: 404,
                    config: h
                }, c.delayResponse)
        }
    }

    function y(c, w) {
        var M = w[7];
        return typeof M == "number" ? M : c.delayResponse
    }
    return ot = g, ot
}
var Wt;

function Ai() {
    if (Wt) return Ue.exports;
    Wt = 1;
    var d = Ci(),
        l = Yt(),
        m = ["get", "post", "head", "delete", "patch", "put", "options", "list", "link", "unlink"];

    function u() {
        return (function(E) {
            var L = this;
            return new Promise(function(_, ie) {
                d(L, _, ie, E)
            })
        }).bind(this)
    }

    function g() {
        return m.reduce(function(E, L) {
            return E[L] = [], E
        }, {})
    }

    function y() {
        c.call(this), w.call(this)
    }

    function c() {
        this.handlers = g()
    }

    function w() {
        this.history = g()
    }

    function M(E, L) {
        if (y.call(this), E) this.axiosInstance = E, this.axiosInstanceWithoutInterceptors = E.create ? E.create() : void 0, this.originalAdapter = E.defaults.adapter, this.delayResponse = L && L.delayResponse > 0 ? L.delayResponse : null, this.onNoMatch = L && L.onNoMatch || null, E.defaults.adapter = this.adapter.call(this);
        else throw new Error("Please provide an instance of axios to mock")
    }
    M.prototype.adapter = u, M.prototype.restore = function() {
        this.axiosInstance && (this.axiosInstance.defaults.adapter = this.originalAdapter, this.axiosInstance = void 0)
    }, M.prototype.reset = y, M.prototype.resetHandlers = c, M.prototype.resetHistory = w;
    var h = ["any", "get", "delete", "head", "options"];

    function F(E, L, _) {
        return h.includes(E) ? A(E, L || {}) : A(E, Object.assign({}, _, {
            data: L
        }))
    }
    var P = ["headers", "params", "data"];

    function A(E, L) {
        for (var _ in L)
            if (!P.includes(_)) throw new Error("Invalid config property " + JSON.stringify(_) + " provided to " + W(E) + ". Config: " + JSON.stringify(L));
        return L
    }

    function W(E) {
        return "on" + E.charAt(0).toUpperCase() + E.slice(1)
    }
    m.concat("any").forEach(function(E) {
        M.prototype[W(E)] = function(j, _, ie) {
            var v = this,
                j = j === void 0 ? /.*/ : j,
                x, z = F(E, _, ie);

            function Y(U, G, be) {
                var ne = [j, z, z.headers, U, G, be, !1, x];
                return pe(E, v.handlers, ne), v
            }

            function ye(U) {
                x = U;
                var G = te.reply.bind(te);
                return Object.assign(G, te), G
            }

            function ce(U, G, be) {
                var ne = [j, z, z.headers, U, G, be, !0, x];
                return pe(E, v.handlers, ne), v
            }
            var te = {
                reply: Y,
                replyOnce: ce,
                withDelayInMs: ye,
                passThrough: function() {
                    var G = [j, z];
                    return pe(E, v.handlers, G), v
                },
                abortRequest: function() {
                    return Y(function(U) {
                        var G = l.createAxiosError("Request aborted", U, void 0, "ECONNABORTED");
                        return Promise.reject(G)
                    })
                },
                abortRequestOnce: function() {
                    return ce(function(U) {
                        var G = l.createAxiosError("Request aborted", U, void 0, "ECONNABORTED");
                        return Promise.reject(G)
                    })
                },
                networkError: function() {
                    return Y(function(U) {
                        var G = l.createAxiosError("Network Error", U);
                        return Promise.reject(G)
                    })
                },
                networkErrorOnce: function() {
                    return ce(function(U) {
                        var G = l.createAxiosError("Network Error", U);
                        return Promise.reject(G)
                    })
                },
                timeout: function() {
                    return Y(function(U) {
                        var G = l.createAxiosError(U.timeoutErrorMessage || "timeout of " + U.timeout + "ms exceeded", U, void 0, U.transitional && U.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED");
                        return Promise.reject(G)
                    })
                },
                timeoutOnce: function() {
                    return ce(function(U) {
                        var G = l.createAxiosError(U.timeoutErrorMessage || "timeout of " + U.timeout + "ms exceeded", U, void 0, U.transitional && U.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED");
                        return Promise.reject(G)
                    })
                }
            };
            return te
        }
    });

    function $(E, L, _) {
        for (var ie = -1, v = 0; v < L[E].length; v += 1) {
            var j = L[E][v],
                x = j[6] === !0,
                z = j[0] instanceof RegExp && _[0] instanceof RegExp ? String(j[0]) === String(_[0]) : j[0] === _[0],
                Y = z && l.isEqual(j[1], _[1]) && l.isEqual(j[2], _[2]);
            Y && !x && (ie = v)
        }
        return ie
    }

    function pe(E, L, _) {
        if (E === "any") m.forEach(function(v) {
            L[v].push(_)
        });
        else {
            var ie = $(E, L, _);
            ie > -1 && _[6] !== !0 ? L[E].splice(ie, 1, _) : L[E].push(_)
        }
    }
    return Ue.exports = M, Ue.exports.default = M, Ue.exports
}
var Mi = Ai();
const ji = yi(Mi),
    C = new ji(bi),
    Kt = [{
        id: "21",
        avatar: "/img/avatars/thumb-1.jpg",
        userName: "Angelina Gotelli",
        email: "admin-01@ecme.com",
        authority: ["admin", "user"],
        password: "123Qwe",
        accountUserName: "admin"
    }];
C.onPost("/sign-in").reply(d => {
    const l = JSON.parse(d.data),
        {
            email: m,
            password: u
        } = l,
        g = Kt.find(y => y.email === m && y.password === u);
    return g ? new Promise(function(y) {
        setTimeout(function() {
            y([201, {
                user: g,
                token: "wVYrxaeNa9OxdnULvde1Au5m5w63"
            }])
        }, 800)
    }) : [401, {
        message: "Invalid email or password!"
    }]
});
C.onPost("/sign-up").reply(d => {
    const l = JSON.parse(d.data),
        {
            email: m,
            userName: u
        } = l,
        g = Kt.some(c => c.email === m),
        y = {
            avatar: "/img/avatars/thumb-1.jpg",
            userName: u,
            email: m,
            authority: ["admin", "user"]
        };
    return new Promise(function(c) {
        setTimeout(function() {
            g && c([400, {
                message: "User already exist!"
            }]), c([201, {
                user: y,
                token: "wVYrxaeNa9OxdnULvde1Au5m5w63"
            }])
        }, 800)
    })
});
C.onPost("/reset-password").reply(() => [200, !0]);
C.onPost("/forgot-password").reply(() => [200, !0]);
C.onPost("/sign-out").reply(() => [200, !0]);
const Zt = [{
        id: "e55adc24-1803-4ffd-b653-09be273f8df5",
        target: "Jeremiah Minsk",
        description: "mentioned your in comment.",
        date: "2 minutes ago",
        image: "thumb-2.jpg",
        type: 0,
        location: "",
        locationLabel: "",
        status: "",
        readed: !0
    }, {
        id: "b06ca3f5-8fb0-4979-a016-30dfe63e8fd6",
        target: "Max Alexander",
        description: "invited you to new project.",
        date: "10 minutes ago",
        image: "thumb-3.jpg",
        type: 0,
        location: "",
        locationLabel: "",
        status: "",
        readed: !1
    }, {
        id: "f644235d-dffc-4f17-883f-1ada117ff2c9",
        target: "",
        description: "Please submit your daily report.",
        date: "3 hours ago",
        image: "",
        type: 1,
        location: "",
        locationLabel: "",
        status: "",
        readed: !1
    }, {
        id: "2152cd09-413a-44be-9d5a-b2b820c6a661",
        target: "Shannon Baker",
        description: "comment in your ticket.",
        date: "4 hours ago",
        image: "thumb-4.jpg",
        type: 0,
        location: "",
        locationLabel: "",
        status: "",
        readed: !1
    }, {
        id: "8ca04d2c-0262-417b-8a3d-4ade49939059",
        target: "",
        description: "Your request was rejected",
        date: "2 days ago",
        image: "",
        type: 2,
        location: "",
        locationLabel: "",
        status: "failed",
        readed: !0
    }, {
        id: "8dd23dfd-a79b-40ad-b4e9-7e70a148d5b6",
        target: "",
        description: "Your request has been approved.",
        date: "4 minutes ago",
        image: "4 days ago",
        type: 2,
        location: "",
        locationLabel: "",
        status: "succeed",
        readed: !0
    }],
    xi = [{
        key: "dashboard.ecommerce",
        path: `${Oe}/ecommerce`,
        title: "Ecommerce",
        icon: "dashboardEcommerce",
        category: "Dashboard",
        categoryTitle: "Dashboard"
    }, {
        key: "dashboard.project",
        path: `${Oe}/project`,
        title: "Project",
        icon: "dashboardProject",
        category: "Dashboard",
        categoryTitle: "Dashboard"
    }, {
        key: "dashboard.marketing",
        path: `${Oe}/marketing`,
        title: "Marketing",
        icon: "dashboardMarketing",
        category: "Dashboard",
        categoryTitle: "Dashboard"
    }, {
        key: "dashboard.analytic",
        path: `${Oe}/analytic`,
        title: "Analytic",
        icon: "dashboardAnalytic",
        category: "Dashboard",
        categoryTitle: "Dashboard"
    }, {
        key: "authentication.signInSimple",
        path: `${oe}/sign-in-simple`,
        title: "Sign In Simple",
        icon: "signIn",
        category: "Authentication",
        categoryTitle: "Auth"
    }, {
        key: "authentication.signInSide",
        path: `${oe}/sign-in-side`,
        title: "Sign In Side",
        icon: "signIn",
        category: "Authentication",
        categoryTitle: "Auth"
    }, {
        key: "authentication.signInSplit",
        path: `${oe}/sign-in-split`,
        title: "Sign In Split",
        icon: "signIn",
        category: "Authentication",
        categoryTitle: "Auth"
    }, {
        key: "authentication.signUpSimple",
        path: `${oe}/sign-up-simple`,
        title: "Sign Up Simple",
        icon: "signUp",
        category: "Authentication",
        categoryTitle: "Auth"
    }, {
        key: "authentication.signUpSide",
        path: `${oe}/sign-up-side`,
        title: "Sign Up Side",
        icon: "signUp",
        category: "Authentication",
        categoryTitle: "Auth"
    }, {
        key: "authentication.signUpSplit",
        path: `${oe}/sign-up-split`,
        title: "Sign Up PasswordSplit",
        icon: "signUp",
        category: "Authentication",
        categoryTitle: "Auth"
    }, {
        key: "authentication.forgotPasswordSimple",
        path: `${oe}/forgot-password-simple`,
        title: "Forget PasswordSimple",
        icon: "forgotPassword",
        category: "Authentication",
        categoryTitle: "Auth"
    }, {
        key: "authentication.forgotPasswordSide",
        path: `${oe}/forgot-password-side`,
        title: "Forget Password Side",
        icon: "forgotPassword",
        category: "Authentication",
        categoryTitle: "Auth"
    }, {
        key: "authentication.forgotPasswordSplit",
        path: `${oe}/forgot-password-split`,
        title: "Forget Password Split",
        icon: "forgotPassword",
        category: "Authentication",
        categoryTitle: "Auth"
    }, {
        key: "authentication.resetPasswordSimple",
        path: `${oe}/reset-password-simple`,
        title: "Reset Password Simple",
        icon: "resetPassword",
        category: "Authentication",
        categoryTitle: "Auth"
    }, {
        key: "authentication.resetPasswordSide",
        path: `${oe}/reset-password-side`,
        title: "Reset Password Side",
        icon: "resetPassword",
        category: "Authentication",
        categoryTitle: "Auth"
    }, {
        key: "authentication.resetPasswordSplit",
        path: `${oe}/reset-password-split`,
        title: "Split",
        icon: "resetPassword",
        category: "Authentication",
        categoryTitle: "Auth"
    }, {
        key: "uiComponent.common.button",
        path: `${O}/button`,
        title: "Button",
        icon: "uiCommonButton",
        category: "Common",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.common.grid",
        path: `${O}/grid`,
        title: "Grid",
        icon: "uiCommonGrid",
        category: "Common",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.common.typography",
        path: `${O}/typography`,
        title: "Typography",
        icon: "uiCommonTypography",
        category: "Common",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.common.icons",
        path: `${O}/icons`,
        title: "Icons",
        icon: "uiCommonIcons",
        category: "Common",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.feedback.alert",
        path: `${O}/alert`,
        title: "Alert",
        icon: "uiFeedbackAlert",
        category: "Feedback",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.feedback.dialog",
        path: `${O}/dialog`,
        title: "Dialog",
        icon: "uiFeedbackDialog",
        category: "Feedback",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.feedback.drawer",
        path: `${O}/drawer`,
        title: "Drawer",
        icon: "uiFeedbackDrawer",
        category: "Feedback",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.feedback.progress",
        path: `${O}/progress`,
        title: "Progress",
        icon: "uiFeedbackProgress",
        category: "Feedback",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.feedback.skeleton",
        path: `${O}/skeleton`,
        title: "Skeleton",
        icon: "uiFeedbackSkeleton",
        category: "Feedback",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.feedback.spinner",
        path: `${O}/spinner`,
        title: "Spinner",
        icon: "uiFeedbackSpinner",
        category: "Feedback",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.feedback.toast",
        path: `${O}/toast`,
        title: "Toast",
        icon: "uiFeedbackToast",
        category: "Feedback",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.dataDisplay.avatar",
        path: `${O}/avatar`,
        title: "Avatar",
        icon: "uiDataDisplayAvatar",
        category: "Data Display",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.dataDisplay.badge",
        path: `${O}/badge`,
        title: "Badge",
        icon: "uiDataDisplayBadge",
        category: "Data Display",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.dataDisplay.calendar",
        path: `${O}/calendar`,
        title: "Calendar",
        icon: "uiDataDisplayCalendar",
        category: "Data Display",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.dataDisplay.cards",
        path: `${O}/cards`,
        title: "Cards",
        icon: "uiDataDisplayCard",
        category: "Data Display",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.dataDisplay.table",
        path: `${O}/table`,
        title: "Table",
        icon: "uiDataDisplayTable",
        category: "Data Display",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.dataDisplay.tag",
        path: `${O}/tag`,
        title: "Tag",
        icon: "uiDataDisplayTag",
        category: "Data Display",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.dataDisplay.timeline",
        path: `${O}/timeline`,
        title: "Timeline",
        icon: "uiDataDisplayTimeline",
        category: "Data Display",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.dataDisplay.tooltip",
        path: `${O}/tooltip`,
        title: "Tooltip",
        icon: "uiDataDisplayTooltip",
        category: "Data Display",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.forms.checkbox",
        path: `${O}/checkbox`,
        title: "Checkbox",
        icon: "uiFormsCheckbox",
        category: "Forms",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.forms.datePicker",
        path: `${O}/date-picker`,
        title: "Date picker",
        icon: "uiFormsDatepicker",
        category: "Forms",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.forms.formControl",
        path: `${O}/form-control`,
        title: "Form control",
        icon: "uiFormsFormControl",
        category: "Forms",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.forms.input",
        path: `${O}/input`,
        title: "Input",
        icon: "uiFormsInput",
        category: "Forms",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.forms.inputGroup",
        path: `${O}/input-group`,
        title: "Input Group",
        icon: "uiFormsInputGroup",
        category: "Forms",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.forms.radio",
        path: `${O}/radio`,
        title: "Radio",
        icon: "uiFormsRadio",
        category: "Forms",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.forms.segment",
        path: `${O}/segment`,
        title: "Segment",
        icon: "uiFormsSegment",
        category: "Forms",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.forms.select",
        path: `${O}/select`,
        title: "Select",
        icon: "uiFormsSelect",
        category: "Forms",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.forms.switcher",
        path: `${O}/switcher`,
        title: "Switcher",
        icon: "uiFormsSwitcher",
        category: "Forms",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.forms.timeInput",
        path: `${O}/time-input`,
        title: "Time Input",
        icon: "uiFormsTimePicker",
        category: "Forms",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.forms.upload",
        path: `${O}/upload`,
        title: "Upload",
        icon: "uiFormsUpload",
        category: "Forms",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.navigation.dropdown",
        path: `${O}/dropdown`,
        title: "Dropdown",
        icon: "uiNavigationDropdown",
        category: "Navigation",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.navigation.menu",
        path: `${O}/menu`,
        title: "Menu",
        icon: "uiNavigationMenu",
        category: "Navigation",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.navigation.pagination",
        path: `${O}/pagination`,
        title: "Pagination",
        icon: "uiNavigationPagination",
        category: "Navigation",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.navigation.steps",
        path: `${O}/steps`,
        title: "Steps",
        icon: "uiNavigationSteps",
        category: "Navigation",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.navigation.tabs",
        path: `${O}/tabs`,
        title: "Tabs",
        icon: "uiNavigationTabs",
        category: "Navigation",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.graph.charts",
        path: `${O}/graph/charts`,
        title: "Charts",
        icon: "uiGraphChart",
        category: "Graph",
        categoryTitle: "UI Components"
    }, {
        key: "uiComponent.graph.maps",
        path: `${O}/graph/maps`,
        title: "Maps",
        icon: "uiGraphMaps",
        category: "Graph",
        categoryTitle: "UI Components"
    }, {
        key: "concepts.ai.chat",
        path: `${B}/ai/chat`,
        title: "Chat",
        icon: "aiChat",
        category: "AI",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.ai.image",
        path: `${B}/ai/image`,
        title: "Image",
        icon: "aiImage",
        category: "AI",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.projects.scrumBoard",
        path: `${B}/projects/scrum-board`,
        title: "Scrum Board",
        icon: "projectScrumBoard",
        category: "Projects",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.projects.projectList",
        path: `${B}/projects/project-list`,
        title: "Project List",
        icon: "projectList",
        category: "Projects",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.projects.projectDetails",
        path: `${B}/projects/project-details/27`,
        title: "Details",
        icon: "projectDetails",
        category: "Projects",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.projects.projectTasks",
        path: `${B}/projects/tasks`,
        title: "Tasks",
        icon: "projectTask",
        category: "Projects",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.projects.projectIssue",
        path: `${B}/projects/tasks/1`,
        title: "Issue",
        icon: "projectIssue",
        category: "Projects",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.customers.customerList",
        path: `${B}/customers/customer-list`,
        title: "Customer List",
        icon: "customerList",
        category: "Customers",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.customers.customerEdit",
        path: `${B}/customers/customer-edit/1`,
        title: "Customer Edit",
        icon: "customerEdit",
        category: "Customers",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.customers.customerCreate",
        path: `${B}/customers/customer-create`,
        title: "Customer Create",
        icon: "customerCreate",
        category: "Customers",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.customers.customerDetails",
        path: `${B}/customers/customer-details/1`,
        title: "Customer Details",
        icon: "customerDetails",
        category: "Customers",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.products.productList",
        path: `${B}/products/product-list`,
        title: "Product List",
        icon: "productList",
        category: "Products",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.products.productEdit",
        path: `${B}/products/product-edit/12`,
        title: "Product Edit",
        icon: "productEdit",
        category: "Products",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.products.productCreate",
        path: `${B}/products/product-create`,
        title: "Product Create",
        icon: "productCreate",
        category: "Products",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.orders.orderList",
        path: `${B}/orders/order-list`,
        title: "Order List",
        icon: "orderList",
        category: "Orders",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.orders.orderEdit",
        path: `${B}/orders/order-edit/95954`,
        title: "Order Edit",
        icon: "orderEdit",
        category: "Orders",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.orders.orderCreate",
        path: `${B}/orders/order-create`,
        title: "Order Create",
        icon: "orderCreate",
        category: "Orders",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.orders.orderDetails",
        path: `${B}/orders/order-details/95954`,
        title: "Order Details",
        icon: "ordeDetails",
        category: "Orders",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.account.settings",
        path: `${B}/account/settings`,
        title: "Settings",
        icon: "accountSettings",
        category: "Account",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.account.activityLog",
        path: `${B}/account/activity-log`,
        title: "Activity log",
        icon: "accountActivityLogs",
        category: "Account",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.account.rolesPermissions",
        path: `${B}/account/roles-permissions`,
        title: "Roles & Permissions",
        icon: "accountRoleAndPermission",
        category: "Account",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.account.pricing",
        path: `${B}/account/pricing`,
        title: "Pricing",
        icon: "accountPricing",
        category: "Account",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.helpCenter.supportHub",
        path: `${B}/help-center/support-hub`,
        title: "Support Hub",
        icon: "helpCeterSupportHub",
        category: "Help Center",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.helpCenter.article",
        path: `${B}/help-center/article/pWBKE_0UiQ`,
        title: "Article",
        icon: "helpCeterArticle",
        category: "Help Center",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.helpCenter.editArticle",
        path: `${B}/help-center/edit-article/pWBKE_0UiQ`,
        title: "Edit Article",
        icon: "helpCeterEditArticle",
        category: "Help Center",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.helpCenter.manageArticle",
        path: `${B}/help-center/manage-article`,
        title: "Manage Article",
        icon: "helpCeterManageArticle",
        category: "Help Center",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.calendar",
        path: `${B}/calendar`,
        title: "Calendar",
        icon: "calendar",
        category: "Others",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.fileManager",
        path: `${B}/file-manager`,
        title: "File Manager",
        icon: "fileManager",
        category: "Others",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.mail",
        path: `${B}/mail`,
        title: "Mail",
        icon: "mail",
        category: "Others",
        categoryTitle: "Concepts"
    }, {
        key: "concepts.chat",
        path: `${B}/chat`,
        title: "Chat",
        icon: "chat",
        category: "Others",
        categoryTitle: "Concepts"
    }, {
        key: "documentation.introduction",
        path: `${H}/documentation/introduction`,
        title: "Introduction",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.installation",
        path: `${H}/documentation/installation`,
        title: "Installation",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.tailwindcss",
        path: `${H}/documentation/tailwindcss`,
        title: "TailwindCSS",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.css",
        path: `${H}/documentation/css`,
        title: "CSS",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.starter",
        path: `${H}/documentation/starter`,
        title: "Starter",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.typescript",
        path: `${H}/documentation/typescript`,
        title: "Typescript",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.updating",
        path: `${H}/documentation/updating`,
        title: "Updating",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.development-server",
        path: `${H}/documentation/development-server`,
        title: "Development Server",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.folder-structure",
        path: `${H}/documentation/folder-structure`,
        title: "Folder Structure",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.routing",
        path: `${H}/documentation/routing`,
        title: "Routing",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.stateManagement",
        path: `${H}/documentation/stateManagement`,
        title: "State management",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.api-integration",
        path: `${H}/documentation/api-integration`,
        title: "API Integration",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.authentication",
        path: `${H}/documentation/authentication`,
        title: "Authentication",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.mock-api",
        path: `${H}/documentation/mock-api`,
        title: "Mock Api",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.firebase",
        path: `${H}/documentation/firebase`,
        title: "Firebase",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.app",
        path: `${H}/documentation/app`,
        title: "App Config",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.layouts",
        path: `${H}/documentation/layouts`,
        title: "Layouts",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.navigation-config",
        path: `${H}/documentation/navigation-config`,
        title: "Navigation Config",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.theming",
        path: `${H}/documentation/theming`,
        title: "Theming",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.internationalization",
        path: `${H}/documentation/internationalization`,
        title: "Internationalization",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.dark-light-mode",
        path: `${H}/documentation/dark-light-mode`,
        title: "Dark/Light Mode",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.direction",
        path: `${H}/documentation/direction`,
        title: "Direction",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.overall-theme-config",
        path: `${H}/documentation/overall-theme-config`,
        title: "Overall Theme Config",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.build-production",
        path: `${H}/documentation/build-production`,
        title: "Build production",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "documentation.credit",
        path: `${H}/documentation/credit`,
        title: "Sources & Credits",
        icon: "documentation",
        category: "Documentation",
        categoryTitle: "Guide"
    }, {
        key: "guide.documentation",
        path: `${H}/documentation/introduction`,
        title: "Documentation",
        icon: "documentation",
        category: "Docs",
        categoryTitle: "Guide"
    }, {
        key: "guide.sharedComponentDoc",
        path: `${H}/shared-component-doc/abbreviate-number`,
        title: "Shared Component",
        icon: "sharedComponentDoc",
        category: "Docs",
        categoryTitle: "Guide"
    }, {
        key: "guide.utilsDoc",
        path: `${H}/utils-doc/use-auth`,
        title: "Utilities",
        icon: "utilsDoc",
        category: "Docs",
        categoryTitle: "Guide"
    }, {
        key: "guide.changeLog",
        path: `${H}/changelog`,
        title: "Changelog",
        icon: "changeLog",
        category: "Docs",
        categoryTitle: "Guide"
    }];
C.onGet("/api/notification/list").reply(() => [200, Zt]);
C.onGet("/api/notification/count").reply(() => [200, {
    count: Zt.filter(l => !l.readed).length
}]);
C.onGet("/api/search/query").reply(d => {
    const {
        query: l
    } = d.params, m = fe(xi, l, "title"), u = [];
    return m.forEach(y => {
        u.includes(y.categoryTitle) || u.push(y.categoryTitle)
    }), [200, u.map(y => ({
        title: y,
        data: m.filter(c => c.categoryTitle === y).filter((c, w) => w < 5)
    }))]
});
const me = (d, l, m) => {
        const u = m ? function(y) {
                return m(y[d])
            } : function(y) {
                return y[d]
            },
            g = l ? -1 : 1;
        return function(y, c) {
            const w = u(y),
                M = u(c);
            return typeof w == "string" && typeof M == "string" ? g * w.localeCompare(M) : g * (w > M ? 1 : M > w ? -1 : 0)
        }
    },
    Se = (d, l, m) => d.slice((m - 1) * l, m * l),
    Vt = [{
        id: "1",
        name: "Angelina Gotelli",
        email: "eileen_h@hotmail.com",
        img: "/img/avatars/thumb-1.jpg"
    }, {
        id: "2",
        name: "Jeremiah Minsk",
        email: "terrance_moreno@infotech.io",
        img: "/img/avatars/thumb-2.jpg"
    }, {
        id: "3",
        name: "Max Alexander",
        email: "ronnie_vergas@infotech.io",
        img: "/img/avatars/thumb-3.jpg"
    }, {
        id: "4",
        name: "Shannon Baker",
        email: "cookie_lukie@hotmail.com",
        img: "/img/avatars/thumb-4.jpg"
    }, {
        id: "5",
        name: "Eugene Stewart",
        email: "joyce991@infotech.io",
        img: "/img/avatars/thumb-5.jpg"
    }, {
        id: "6",
        name: "Arlene Pierce",
        email: "samanthaphil@infotech.io",
        img: "/img/avatars/thumb-6.jpg"
    }, {
        id: "7",
        name: "Roberta Horton",
        email: "taratarara@imaze.edu.du",
        img: "/img/avatars/thumb-7.jpg"
    }, {
        id: "8",
        name: "Jessica Wells",
        email: "iamfred@imaze.infotech.io",
        img: "/img/avatars/thumb-8.jpg"
    }, {
        id: "9",
        name: "Camila Simmmons",
        email: "carolyn_h@gmail.com",
        img: "/img/avatars/thumb-9.jpg"
    }, {
        id: "10",
        name: "Earl Miles",
        email: "brittany1134@gmail.com",
        img: "/img/avatars/thumb-10.jpg"
    }, {
        id: "11",
        name: "Steve Sutton",
        email: "handsome-obrien@hotmail.com",
        img: "/img/avatars/thumb-11.jpg"
    }, {
        id: "12",
        name: "Miriam Herrera",
        email: "maymaymay12@infotech.io",
        img: "/img/avatars/thumb-12.jpg"
    }, {
        id: "13",
        name: "Cassandra Murray",
        email: "lee_wheeler@infotech.io",
        img: "/img/avatars/thumb-13.jpg"
    }, {
        id: "14",
        name: "Alvin Moreno",
        email: "gailby0116@infotech.io",
        img: "/img/avatars/thumb-14.jpg"
    }, {
        id: "15",
        name: "Jackie Soto",
        email: "ella_robinson@infotech.io",
        img: "/img/avatars/thumb-15.jpg"
    }],
    we = [{
        id: "1",
        name: "Angelina Gotelli",
        firstName: "Angelina",
        lastName: "Gotelli",
        email: "carolyn_h@hotmail.com",
        img: "/img/avatars/thumb-1.jpg",
        role: "admin",
        lastOnline: 1723430400,
        status: "active",
        title: "Product Manager",
        personalInfo: {
            location: "New York, US",
            address: "123 Main St",
            postcode: "10001",
            city: "New York",
            country: "US",
            dialCode: "+1",
            birthday: "10/10/1992",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Angelina Gotelli",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Angelina Gotelli",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 4367.15
    }, {
        id: "2",
        name: "Jeremiah Minsk",
        firstName: "Jeremiah",
        lastName: "Minsk",
        email: "terrance_moreno@infotech.io",
        img: "/img/avatars/thumb-2.jpg",
        role: "user",
        lastOnline: 1732393600,
        status: "active",
        title: "Software Engineer",
        personalInfo: {
            location: "Tokyo, JP",
            address: "456 Tokyo Blvd",
            postcode: "123-4567",
            city: "Tokyo",
            country: "JP",
            dialCode: "+81",
            birthday: "03/02/1984",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Jeremiah Minsk",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Jeremiah Minsk",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 7823.42
    }, {
        id: "3",
        name: "Max Alexander",
        firstName: "Ron",
        lastName: "Vargas",
        email: "ronnie_vergas@infotech.io",
        img: "/img/avatars/thumb-3.jpg",
        role: "user",
        lastOnline: 1732393600,
        status: "blocked",
        title: "UI/UX Designer",
        personalInfo: {
            location: "Mumbai, IN",
            address: "789 Mumbai Ave",
            postcode: "400001",
            city: "Mumbai",
            country: "IN",
            dialCode: "+91",
            birthday: "07/11/1987",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }, {
            id: "#31354",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1731532800
        }],
        paymentMethod: [{
            cardHolderName: "Max Alexander",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Max Alexander",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 2478.33
    }, {
        id: "4",
        name: "Shannon Baker",
        firstName: "Luke",
        lastName: "Cook",
        email: "cookie_lukie@hotmail.com",
        img: "/img/avatars/thumb-4.jpg",
        role: "supervisor",
        lastOnline: 1739132800,
        status: "active",
        title: "HR Executive",
        personalInfo: {
            location: "New York, US",
            address: "123 Main St",
            postcode: "10001",
            city: "New York",
            country: "US",
            dialCode: "+1",
            birthday: "07/11/1987",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Shannon Baker",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Shannon Baker",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 234.56
    }, {
        id: "5",
        name: "Eugene Stewart",
        firstName: "Joyce",
        lastName: "Freeman",
        email: "joyce991@infotech.io",
        img: "/img/avatars/thumb-5.jpg",
        role: "guest",
        lastOnline: 1732416e3,
        status: "active",
        title: "Frontend Developer",
        personalInfo: {
            location: "Ottawa, CA",
            address: "321 Ottawa St",
            postcode: "K1P 1A1",
            city: "Ottawa",
            country: "CA",
            dialCode: "+1 ",
            birthday: "17/11/1993",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Eugene Stewart",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Eugene Stewart",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 1201.45
    }, {
        id: "6",
        name: "Arlene Pierce",
        firstName: "Samantha",
        lastName: "Phillips",
        email: "samanthaphil@infotech.io",
        img: "/img/avatars/thumb-6.jpg",
        role: "auditor",
        lastOnline: 1733107200,
        status: "active",
        title: "Compliance Manager",
        personalInfo: {
            location: "London, UK",
            ddress: "987 London Lane",
            postcode: "SW1A 1AA",
            city: "London",
            country: "UK",
            dialCode: "+44",
            birthday: "17/11/1993",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Arlene Pierce",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Arlene Pierce",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 8923.11
    }, {
        id: "7",
        name: "Roberta Horton",
        firstName: "Tara",
        lastName: "Fletcher",
        email: "taratarara@imaze.edu.du",
        img: "/img/avatars/thumb-7.jpg",
        role: "support",
        lastOnline: 1732761600,
        status: "active",
        title: "Compliance Manager",
        personalInfo: {
            location: "Brasília, BR",
            address: "654 Brasília Blvd",
            postcode: "70000-000",
            city: "Brasília",
            country: "BR",
            dialCode: "+55",
            birthday: "17/11/1993",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Roberta Horton",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Roberta Horton",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 465.78
    }, {
        id: "8",
        name: "Jessica Wells",
        firstName: "Frederick",
        lastName: "Adams",
        email: "iamfred@imaze.infotech.io",
        img: "/img/avatars/thumb-8.jpg",
        role: "supervisor",
        lastOnline: 1739219200,
        status: "blocked",
        title: "Compliance Manager",
        personalInfo: {
            location: "London, UK",
            address: "987 London Lane",
            postcode: "SW1A 1AA",
            city: "London",
            country: "UK",
            dialCode: "+44",
            birthday: "17/11/1993",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Jessica Wells",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Jessica Wells",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 890.43
    }, {
        id: "9",
        name: "Camila Simmmons",
        firstName: "Carolyn",
        lastName: "Hanson",
        email: "carolyn_h@gmail.com",
        img: "/img/avatars/thumb-9.jpg",
        role: "guest",
        lastOnline: 1734489600,
        status: "blocked",
        title: "Compliance Manager",
        personalInfo: {
            location: "Ankara, TR",
            address: "321 Ankara St",
            postcode: "06000",
            city: "Ankara",
            country: "TR",
            dialCode: "+90",
            birthday: "03/06/1991",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Camila Simmmons",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Camila Simmmons",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 3456.22
    }, {
        id: "10",
        name: "Earl Miles",
        firstName: "Brittany",
        lastName: "Hale",
        email: "brittany1134@gmail.com",
        img: "/img/avatars/thumb-10.jpg",
        role: "admin",
        lastOnline: 1733452800,
        status: "active",
        title: "Compliance Manager",
        personalInfo: {
            location: "Texas, US",
            address: "159 Texas Ave",
            postcode: "75001",
            city: "Texas",
            country: "US",
            dialCode: "+1",
            birthday: "03/06/1991",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Earl Miles",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Earl Miles",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 7890.12
    }, {
        id: "11",
        name: "Steve Sutton",
        firstName: "Lloyd",
        lastName: "Obrien",
        email: "handsome-obrien@hotmail.com",
        img: "/img/avatars/thumb-11.jpg",
        role: "auditor",
        lastOnline: 1734576e3,
        status: "active",
        title: "Software Engineer",
        personalInfo: {
            location: "Berlin, DE",
            address: "852 Berlin Strasse",
            postcode: "10115",
            city: "Berlin",
            country: "DE",
            dialCode: "+49",
            birthday: "03/06/1991",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Steve Sutton",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Steve Sutton",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 432.67
    }, {
        id: "12",
        name: "Miriam Herrera",
        firstName: "Gabriella",
        lastName: "May",
        email: "maymaymay12@infotech.io",
        img: "/img/avatars/thumb-12.jpg",
        role: "guest",
        lastOnline: 1734208e3,
        status: "blocked",
        title: "Software Engineer",
        personalInfo: {
            location: "Mumbai, IN",
            address: "789 Mumbai Ave",
            postcode: "400001",
            city: "Mumbai",
            country: "IN",
            dialCode: "+91",
            birthday: "03/06/1991",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Miriam Herrera",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Miriam Herrera",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 987.54
    }, {
        id: "13",
        name: "Cassandra Murray",
        firstName: "Lee",
        lastName: "Wheeler",
        email: "lee_wheeler@infotech.io",
        img: "/img/avatars/thumb-13.jpg",
        role: "support",
        lastOnline: 1736649600,
        status: "active",
        title: "Software Engineer",
        personalInfo: {
            location: "Toronto, CA",
            address: "753 Toronto Blvd",
            postcode: "M5V 1J4",
            city: "Toronto",
            country: "CA",
            dialCode: "+1 ",
            birthday: "03/06/1991",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Cassandra Murray",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Cassandra Murray",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 6789.9
    }, {
        id: "14",
        name: "Alvin Moreno",
        firstName: "Gail",
        lastName: "Barnes",
        email: "gailby0116@infotech.io",
        img: "/img/avatars/thumb-14.jpg",
        role: "support",
        lastOnline: 1733020800,
        status: "active",
        title: "Software Engineer",
        personalInfo: {
            location: "Sydney, AU",
            address: "369 Sydney Street",
            postcode: "2000",
            city: "Sydney",
            country: "AU",
            dialCode: "+61",
            birthday: "03/06/1991",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Alvin Moreno",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Alvin Moreno",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 2103.21
    }, {
        id: "15",
        name: "Jackie Soto",
        firstName: "Ella",
        lastName: "Robinson",
        email: "ella_robinson@infotech.io",
        img: "/img/avatars/thumb-15.jpg",
        role: "guest",
        lastOnline: 1736217600,
        status: "active",
        title: "Software Engineer",
        personalInfo: {
            location: "London, UK",
            address: "369 London Street",
            postcode: "SW1A 1AA",
            city: "London",
            country: "UK",
            dialCode: "+44",
            birthday: "03/06/1991",
            phoneNumber: "+12-123-1234",
            facebook: "facebook.com",
            twitter: "twitter.com",
            pinterest: "pinterest.com",
            linkedIn: "linkedin"
        },
        orderHistory: [{
            id: "#36223",
            item: "Acme pro plan (monthly)",
            status: "pending",
            amount: 59.9,
            date: 1739132800
        }, {
            id: "#34283",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1736790880
        }, {
            id: "#32234",
            item: "Acme pro plan (monthly)",
            status: "paid",
            amount: 59.9,
            date: 1734090880
        }],
        paymentMethod: [{
            cardHolderName: "Jackie Soto",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardHolderName: "Jackie Soto",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        subscription: [{
            plan: "Business board basic",
            status: "active",
            billing: "monthly",
            nextPaymentdate: 1739132800,
            amount: 59.9
        }],
        totalSpending: 9876.54
    }],
    Ei = [{
        id: "1",
        date: 1746554397,
        events: [{
            type: "TICKET-IN-PROGRESS",
            dateTime: 1746356928,
            description: "Customer service team is working on support ticket #123456"
        }]
    }, {
        id: "2",
        date: 174645e4,
        events: [{
            type: "TICKET-IN-PROGRESS",
            dateTime: 1746459376,
            description: "Customer service team is working on support ticket #123456"
        }, {
            type: "SUPPORT-TICKET",
            dateTime: 1746458211,
            description: "opened a support ticket #113467"
        }]
    }, {
        id: "3",
        date: 174635e4,
        events: [{
            dateTime: 174658e4,
            type: "PAYMENT",
            description: "successfully made a payment for the order"
        }, {
            type: "PRODUCT-UPDATE",
            dateTime: 1746578417,
            description: "switch to Acme pro plan to anually"
        }, {
            dateTime: 1746574027,
            type: "PRODUCT-VIEW",
            description: "visit subscription page"
        }]
    }],
    Di = [{
        id: "1",
        date: 1646554397,
        events: [{
            type: "UPDATE-TICKET",
            dateTime: 164658e4,
            ticket: "PD-979",
            status: 0,
            userName: "Angelina Gotelli",
            userImg: ""
        }, {
            type: "COMMENT",
            dateTime: 1646578417,
            userName: "Max Alexander",
            userImg: "/img/avatars/thumb-3.jpg",
            comment: "Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like."
        }, {
            type: "ADD-TAGS-TO-TICKET",
            dateTime: 1646574027,
            userName: "Eugene Stewart",
            tags: ["Live Issue", "Backend"]
        }, {
            type: "ADD-FILES-TO-TICKET",
            dateTime: 1646569123,
            userName: "Shannon Baker",
            files: ["document.csv"],
            ticket: "PD-1092"
        }, {
            type: "COMMENT-MENTION",
            dateTime: 1646565473,
            userName: "Roberta Horton",
            userImg: "/img/avatars/thumb-7.jpg",
            comment: "<strong>@Carolyn</strong> One of the main causes of the fall of the Roman Empire was that-lacking zero-they had no way to indicate successful termination of their C programs. "
        }, {
            type: "ASSIGN-TICKET",
            dateTime: 1646554397,
            userName: "Lee Wheeler",
            assignee: "Alvin Moreno",
            ticket: "PD-1092"
        }]
    }, {
        id: "2",
        date: 164645e4,
        events: [{
            type: "COMMENT",
            dateTime: 1646459376,
            userName: "Jessica Wells",
            userImg: "/img/avatars/thumb-8.jpg",
            comment: "The trouble with programmers is that you can never tell what a programmer is doing until it's too late."
        }, {
            type: "UPDATE-TICKET",
            dateTime: 1646458211,
            ticket: "PD-977",
            status: 1,
            userName: "Earl Miles",
            userImg: "/img/avatars/thumb-10.jpg"
        }, {
            type: "CREATE-TICKET",
            dateTime: 1646457743,
            ticket: "PD-977",
            userName: "Arlene Pierce"
        }, {
            type: "ADD-TAGS-TO-TICKET",
            dateTime: 1646456743,
            userName: "Terrance Moreno",
            tags: ["Bug"]
        }, {
            type: "UPDATE-TICKET",
            dateTime: 1646455743,
            ticket: "PD-902",
            status: 2,
            userName: "Jackie Soto"
        }]
    }, {
        id: "3",
        date: 164635e4,
        events: [{
            type: "UPDATE-TICKET",
            dateTime: 1646356928,
            ticket: "PD-915",
            status: 0,
            userName: "Alvin Moreno",
            userImg: "/img/avatars/thumb-14.jpg"
        }, {
            type: "COMMENT-MENTION",
            dateTime: 1646356103,
            userName: "Roberta Horton",
            userImg: "/img/avatars/thumb-7.jpg",
            comment: "<strong>@Carolyn</strong> First, solve the problem. Then, write the code."
        }, {
            type: "ADD-FILES-TO-TICKET",
            dateTime: 1646354001,
            userName: "Shannon Baker",
            files: ["issue-1.jpg", "issue-2.jpg"],
            ticket: "PD-1011"
        }, {
            type: "CREATE-TICKET",
            dateTime: 1646353299,
            ticket: "PD-983",
            userName: "Eugene Stewart"
        }, {
            type: "COMMENT",
            dateTime: 1646351233,
            userName: "Shannon Baker",
            userImg: "/img/avatars/thumb-4.jpg",
            comment: "I've noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture. Near as I can tell, this coincides with the release of MS-DOS."
        }]
    }, {
        id: "4",
        date: 164625e4,
        events: [{
            type: "UPDATE-TICKET",
            dateTime: 1646259999,
            ticket: "PD-911",
            status: 1,
            userName: "Terrance Moreno",
            userImg: "/img/avatars/thumb-2.jpg"
        }, {
            type: "ADD-TAGS-TO-TICKET",
            dateTime: 1646258110,
            userName: "Terrance Moreno",
            tags: ["Bug"]
        }, {
            type: "CREATE-TICKET",
            dateTime: 1646258e3,
            ticket: "PD-911",
            userName: "Terrance Moreno"
        }, {
            type: "COMMENT",
            dateTime: 1646253204,
            userName: "Camila Simmmons",
            userImg: "/img/avatars/thumb-9.jpg",
            comment: "As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought. Debugging had to be discovered. I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs."
        }]
    }, {
        id: "5",
        date: 164615e4,
        events: [{
            type: "CREATE-TICKET",
            dateTime: 1646159652,
            ticket: "PD-908",
            userName: "Jackie Soto"
        }, {
            type: "CREATE-TICKET",
            dateTime: 1646159134,
            ticket: "PD-907",
            userName: "Jackie Soto"
        }, {
            type: "ADD-TAGS-TO-TICKET",
            dateTime: 1646253113,
            userName: "Jackie Soto",
            tags: ["Bug"],
            ticket: "PD-906"
        }, {
            type: "COMMENT-MENTION",
            dateTime: 1646252044,
            userName: "Miriam Herrera",
            userImg: "/img/avatars/thumb-12.jpg",
            comment: "<strong>@Carolyn</strong> Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots. So far the Universe is winning. "
        }, {
            type: "CREATE-TICKET",
            dateTime: 164625157,
            ticket: "PD-906",
            userName: "Jackie Soto"
        }]
    }, {
        id: "6",
        date: 164605e4,
        events: [{
            type: "COMMENT-MENTION",
            dateTime: 1646051653,
            userName: "Camila Simmmons",
            userImg: "/img/avatars/thumb-9.jpg",
            comment: "<strong>@Carolyn</strong> There are two ways to write error-free programs; only the third one works. "
        }, {
            type: "ADD-FILES-TO-TICKET",
            dateTime: 1646050199,
            username: "Angelina Gotelli",
            files: ["translation.xls"],
            ticket: "PD-1092"
        }, {
            type: "COMMENT-MENTION",
            dateTime: 1646050001,
            username: "Angelina Gotelli",
            userImg: "/img/avatars/thumb-1.jpg",
            comment: "<strong>@Carolyn</strong> Don't worry if it doesn't work right. If everything did, you'd be out of a job."
        }]
    }, {
        id: "7",
        date: 164649e4,
        events: [{
            type: "CREATE-TICKET",
            dateTime: 1646499327,
            ticket: "PD-919",
            userName: "Jackie Soto"
        }, {
            type: "COMMENT",
            dateTime: 1646497323,
            userName: "Jessica Wells",
            userImg: "/img/avatars/thumb-8.jpg",
            comment: "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies."
        }, {
            type: "COMMENT-MENTION",
            dateTime: 1646492123,
            userName: "Roberta Horton",
            userImg: "/img/avatars/thumb-7.jpg",
            comment: "<strong>@Carolyn</strong> That’s what’s cool about working with computers. They don’t argue, they remember everything, and they don’t drink all your beer. (Paul Leary) Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline."
        }, {
            type: "UPDATE-TICKET",
            dateTime: 1646491065,
            ticket: "PD-915",
            status: 1,
            userName: "Earl Miles",
            userImg: "/img/avatars/thumb-10.jpg"
        }]
    }];
C.onGet("/api/customers").reply(d => {
    const {
        pageIndex: l,
        pageSize: m,
        sort: u,
        query: g
    } = d.params, {
        order: y,
        key: c
    } = u, w = we;
    let h = w.filter(A => typeof A != "function"),
        F = w.length;
    c && y && (c !== "totalSpending" ? h.sort(me(c, y === "desc", A => A.toUpperCase())) : h.sort(me(c, y === "desc", parseInt))), g && (h = fe(h, g), F = h.length), h = Se(h, m, l);
    const P = {
        list: h,
        total: F
    };
    return new Promise(function(A) {
        setTimeout(function() {
            A([200, P])
        }, 500)
    })
});
C.onGet(new RegExp("/api/customers/*")).reply(function(d) {
    var u;
    const l = (u = d.url) == null ? void 0 : u.split("/")[2],
        m = we.find(g => g.id === l);
    return m ? [200, m] : [404, {}]
});
C.onGet(new RegExp("/api/customer/log")).reply(() => [200, Ei]);
const Xt = [{
    id: "12",
    name: "Flörven",
    productCode: "098327NT",
    img: "/img/products/product-1.jpg",
    imgList: [{
        id: "12-img-0",
        name: "image-1",
        img: "/img/products/product-1.jpg"
    }, {
        id: "12-img-1",
        name: "image-2",
        img: "/img/products/product-1-2.jpg"
    }, {
        id: "12-img-2",
        name: "image-3",
        img: "/img/products/product-1-3.jpg"
    }, {
        id: "12-img-3",
        name: "image-4",
        img: "/img/products/product-1-4.jpg"
    }],
    category: "chairs",
    price: 252,
    stock: 46,
    status: 0,
    costPerItem: 12,
    bulkDiscountPrice: 68,
    taxRate: 6,
    tags: ["trend", "unisex"],
    brand: "Luminaire",
    vendor: "Acme co, Ltd",
    active: !0,
    sales: 387,
    salesPercentage: 95,
    description: "<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>"
}, {
    id: "13",
    name: "Snövalla",
    productCode: "098359NT",
    img: "/img/products/product-2.jpg",
    imgList: [{
        id: "13-img-0",
        name: "image-1",
        img: "/img/products/product-2.jpg"
    }],
    category: "lamps",
    price: 139,
    stock: 28,
    status: 0,
    costPerItem: 12,
    bulkDiscountPrice: 68,
    taxRate: 6,
    tags: ["trend", "unisex"],
    brand: "Adidas",
    vendor: "Acme co, Ltd",
    active: !0,
    sales: 892,
    salesPercentage: 78,
    description: "<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>"
}, {
    id: "14",
    name: "Echoes Necklace",
    productCode: "098383NT",
    img: "/img/products/product-3.jpg",
    imgList: [{
        id: "14-img-0",
        name: "image-1",
        img: "/img/products/product-3.jpg"
    }],
    category: "accessories",
    price: 99,
    stock: 52,
    status: 0,
    costPerItem: 12,
    bulkDiscountPrice: 68,
    taxRate: 6,
    tags: ["trend", "unisex"],
    brand: "Adidas",
    vendor: "Acme co, Ltd",
    active: !0,
    sales: 1145,
    salesPercentage: 19,
    description: "<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>"
}, {
    id: "15",
    name: "Lömnäs",
    productCode: "098342NT",
    img: "/img/products/product-4.jpg",
    imgList: [{
        id: "15-img-0",
        name: "image-1",
        img: "/img/products/product-4.jpg"
    }],
    category: "lamps",
    price: 68,
    stock: 92,
    status: 0,
    costPerItem: 12,
    bulkDiscountPrice: 68,
    taxRate: 6,
    tags: ["trend", "unisex"],
    brand: "Adidas",
    vendor: "Acme co, Ltd",
    active: !0,
    sales: 651,
    salesPercentage: 82,
    description: "<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>"
}, {
    id: "16",
    name: "Kallaxa",
    productCode: "098371NT",
    img: "/img/products/product-5.jpg",
    imgList: [{
        id: "16-img-0",
        name: "image-1",
        img: "/img/products/product-5.jpg"
    }],
    category: "lamps",
    price: 70,
    stock: 119,
    status: 2,
    costPerItem: 12,
    bulkDiscountPrice: 68,
    taxRate: 6,
    tags: ["trend", "unisex"],
    brand: "Adidas",
    vendor: "Acme co, Ltd",
    active: !0,
    sales: 234,
    salesPercentage: 33,
    description: "<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>"
}, {
    id: "17",
    name: "Ringed Earring",
    productCode: "098314NT",
    img: "/img/products/product-6.jpg",
    imgList: [{
        id: "17-img-0",
        name: "image-1",
        img: "/img/products/product-6.jpg"
    }],
    category: "accessories",
    price: 29,
    stock: 18,
    status: 0,
    costPerItem: 12,
    bulkDiscountPrice: 68,
    taxRate: 6,
    tags: ["trend", "unisex"],
    brand: "Adidas",
    vendor: "Acme co, Ltd",
    active: !0,
    sales: 1201,
    salesPercentage: 76,
    description: "<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>"
}, {
    id: "18",
    name: "Maneki Neko Poster",
    productCode: "098336NT",
    img: "/img/products/product-7.jpg",
    imgList: [{
        id: "18-img-0",
        name: "image-1",
        img: "/img/products/product-7.jpg"
    }],
    category: "art",
    price: 389,
    stock: 7,
    status: 1,
    costPerItem: 12,
    bulkDiscountPrice: 68,
    taxRate: 6,
    tags: ["trend", "unisex"],
    brand: "Picasso",
    vendor: "Acme co, Ltd",
    active: !1,
    sales: 49,
    salesPercentage: 56,
    description: "<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>"
}, {
    id: "19",
    name: "Ektöra",
    productCode: "098368NT",
    img: "/img/products/product-8.jpg",
    imgList: [{
        id: "19-img-0",
        name: "image-1",
        img: "/img/products/product-8.jpg"
    }],
    category: "chairs",
    price: 869,
    stock: 30,
    status: 2,
    costPerItem: 12,
    bulkDiscountPrice: 68,
    taxRate: 6,
    tags: ["trend", "unisex"],
    brand: "Ikea",
    vendor: "Acme co, Ltd",
    active: !0,
    sales: 978,
    salesPercentage: 89,
    description: "<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>"
}, {
    id: "20",
    name: "Spiky Ring",
    productCode: "098392NT",
    img: "/img/products/product-9.jpg",
    imgList: [{
        id: "20-img-0",
        name: "image-1",
        img: "/img/products/product-9.jpg"
    }],
    category: "accessories",
    price: 1599,
    stock: 27,
    status: 0,
    costPerItem: 12,
    bulkDiscountPrice: 68,
    taxRate: 6,
    tags: ["trend", "unisex"],
    brand: "Apple",
    vendor: "Acme co, Ltd",
    active: !0,
    sales: 573,
    salesPercentage: 42,
    description: "<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>"
}, {
    id: "21",
    name: "Pastel Petals Poster",
    productCode: "098355NT",
    img: "/img/products/product-10.jpg",
    imgList: [{
        id: "21-img-0",
        name: "image-1",
        img: "/img/products/product-10.jpg"
    }],
    category: "art",
    price: 729,
    stock: 6,
    status: 1,
    costPerItem: 12,
    bulkDiscountPrice: 68,
    taxRate: 6,
    tags: ["trend", "unisex"],
    brand: "Vincent",
    vendor: "Acme co, Ltd",
    active: !0,
    sales: 1322,
    salesPercentage: 92,
    description: "<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>"
}, {
    id: "22",
    name: "Gränvika",
    productCode: "098320NT",
    img: "/img/products/product-11.jpg",
    imgList: [{
        id: "22-img-0",
        name: "image-1",
        img: "/img/products/product-11.jpg"
    }],
    category: "chairs",
    price: 388,
    stock: 51,
    status: 0,
    costPerItem: 12,
    bulkDiscountPrice: 68,
    taxRate: 6,
    tags: ["trend", "unisex"],
    brand: "Apple",
    vendor: "Acme co, Ltd",
    active: !0,
    sales: 846,
    salesPercentage: 64,
    description: "<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>"
}, {
    id: "23",
    name: "Il Limone",
    productCode: "098377NT",
    img: "/img/products/product-12.jpg",
    imgList: [{
        id: "23-img-0",
        name: "image-1",
        img: "/img/products/product-12.jpg"
    }],
    category: "art",
    price: 599,
    stock: 30,
    status: 0,
    costPerItem: 12,
    bulkDiscountPrice: 68,
    taxRate: 6,
    tags: ["trend", "unisex"],
    brand: "Vincent",
    vendor: "Acme co, Ltd",
    active: !1,
    sales: 12,
    salesPercentage: 77,
    description: "<p>Make a brew a right royal knees up and we all like figgy pudding a comely wench gutted its nicked pulled out the eating irons, ask your mother if on goggle box toad in the whole Sherlock rather, ar kid pennyboy naff superb pezzy little. </p><ul><li>Scally utter shambles blighty squirrel numbskull rumpy pumpy apple and pears bow ties are cool</li><li>pompous nosh have a butcher at this flabbergasted a right toff black cab jolly good made a pigs ear of it</li><li>Roast beef conked him one on the nose had a barney with the inlaws beefeater is she avin a laugh supper, gobsmacked argy-bargy challenge you to a duel</li><li>whizz air one dirty linen chav not some sort of dosshouse.</li></ul>"
}];
C.onGet("/api/products").reply(d => {
    const {
        pageIndex: l,
        pageSize: m,
        sort: u,
        query: g
    } = d.params, {
        order: y,
        key: c
    } = u, w = Xt;
    let h = w.filter(A => typeof A != "function"),
        F = w.length;
    c && y && (c === "category" || c === "name" ? h.sort(me(c, y === "desc", A => A.toUpperCase())) : h.sort(me(c, y === "desc", parseInt))), g && (h = fe(h, g, "name"), F = h.length), h = Se(h, m, l);
    const P = {
        list: h,
        total: F
    };
    return new Promise(function(A) {
        setTimeout(function() {
            A([200, P])
        }, 500)
    })
});
C.onGet(/\/api\/products\/\d+/).reply(function(d) {
    var u;
    const l = (u = d.url) == null ? void 0 : u.split("/")[2],
        m = Xt.find(g => g.id === l);
    return m ? [200, m] : [404, {}]
});
const q = new Date().getFullYear(),
    Ni = {
        content: `<h5>Project overview</h5><p>Bite plants chirp at birds for gnaw the corn cob be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day sleep on my human's head cat dog hate mouse eat string barf pillow no baths hate everything cat not kitten around . Swat turds around the house chase dog then run away but pet right here, no not there, here,</p><h5>About the client</h5><p>Lick butt. Under the bed purrrrrr or attack like a vicious monster and instantly break out into full speed gallop across the house for no reason for scream for no reason at 4 am or climb leg meowing chowing and wowing. Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers pelt around the house and up and down stairs chasing phantoms for sleep over your phone and make cute snoring noises take a deep sniff of sock then walk around with mouth half open drool sit in box, pee on walls it smells like breakfast. Cough furball kitty poochy.</p><ul><li>What the heck just happened, something feels fishy head nudges i cry and cry and cry unless you pet me, and then maybe i cry just for fun demand to have some of whatever the human is cooking, then sniff the offering and walk away lick the curtain just to be annoying the door is opening! how exciting oh, it's you, meh run off table persian cat jump eat fish. Knock dish off table head butt cant eat out of my own dish touch my tail, i shred your hand purrrr.</li><li>Pounce on unsuspecting person purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table but flex claws on the human's belly and purr like a lawnmower, yet ask for petting so cats are a queer kind of folk so lick yarn hanging out of own butt yet skid on floor, crash into wall.</li><li>Meow meow you are my owner so here is a dead rat get scared by sudden appearance of cucumber leave dead animals as gifts cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip </li></ul><img src="/img/others/article-img-1.jpg" alt="" /><h5>The goals</h5><p>Reward the chosen human with a slow blink making sure that fluff gets into the owner's eyes and sit on human cuddle no cuddle cuddle love scratch scratch. Grass smells good then cats take over the world but stare at ceiling light, sniff other cat's butt and hang jaw half open thereafter the dog smells bad. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff for bathe private parts with tongue then lick owner's face hit you unexpectedly. Growl at dogs in my sleep scratch the furniture inspect anything brought into the house, for pelt around the house and up and down stairs chasing phantoms x rub my belly hiss chew the plant. Licks your face mrow stare at the wall, play with food and get confused by dust. Commence midnight zoomies destroy house in 5 seconds, suddenly go on wild-eyed crazy rampage. </p><h5>Requirements</h5><p>Floof tum, tickle bum, jellybean footies curly toes no, you can't close the door, i haven't decided whether or not i wanna go out, yet hiding behind the couch until lured out by a feathery toy so chase red laser dot. Eat my own ears catching very fast laser pointer but eat fish on floor cough furball into food bowl then scratch owner for a new one use lap as chair reaches under door into adjacent room. Eat the fat cats food paw your face to wake you up in the morning. While happily ignoring when being called.</p>`,
        activities: [],
        members: [],
        tasks: [],
        client: {
            clientName: "Acme Agency inc.",
            skateHolder: {
                name: "Jeremiah Minsk",
                img: "/img/avatars/thumb-2.jpg"
            },
            projectManager: {
                name: "Max Alexander",
                img: "/img/avatars/thumb-3.jpg"
            }
        },
        schedule: {
            startDate: 1709994804,
            dueDate: 1741502004,
            status: "In progress",
            completion: 80
        }
    },
    Te = [{
        id: "27",
        name: "EVO SaaS",
        category: "Web Application",
        desc: "Most of you are familiar with the virtues of a programmer",
        attachmentCount: 12,
        totalTask: 32,
        completedTask: 27,
        progression: 80,
        dayleft: 21,
        favourite: !0,
        member: [{
            name: "Roberta Horton",
            img: "/img/avatars/thumb-8.jpg"
        }, {
            name: "Eugene Stewart",
            img: "/img/avatars/thumb-5.jpg"
        }]
    }, {
        id: "28",
        name: "AIA Bill App",
        category: "Mobile Application",
        desc: "We are not shipping your machine!",
        attachmentCount: 5,
        totalTask: 36,
        completedTask: 15,
        progression: 45,
        dayleft: 19,
        favourite: !0,
        member: [{
            name: "Angelina Gotelli",
            img: "/img/avatars/thumb-1.jpg"
        }]
    }, {
        id: "29",
        name: "IOP Web",
        category: "Web Backend Application",
        desc: "There are two ways to write error-free programs; only the third one works.",
        attachmentCount: 8,
        totalTask: 27,
        completedTask: 19,
        progression: 73,
        dayleft: 6,
        favourite: !1,
        member: [{
            name: "Max Alexander",
            img: "/img/avatars/thumb-3.jpg"
        }, {
            name: "Camila Simmmons",
            img: "/img/avatars/thumb-9.jpg"
        }]
    }, {
        id: "31",
        name: "Octonine POS",
        category: "Backend Application",
        desc: "Everything that can be invented has been invented.",
        attachmentCount: 8,
        totalTask: 78,
        completedTask: 23,
        progression: 21,
        dayleft: 52,
        favourite: !0,
        member: [{
            name: "Earl Miles",
            img: "/img/avatars/thumb-10.jpg"
        }, {
            name: "Roberta Horton",
            img: "/img/avatars/thumb-8.jpg"
        }, {
            name: "Arlene Pierce",
            img: "/img/avatars/thumb-6.jpg"
        }, {
            name: "Steve Sutton",
            img: "/img/avatars/thumb-11.jpg"
        }, {
            name: "Alvin Moreno",
            img: "/img/avatars/thumb-14.jpg"
        }]
    }, {
        id: "30",
        name: "Evo SaaS API",
        category: "Backend Services",
        desc: "Debugging is twice as hard as writing the code in the first place.",
        attachmentCount: 2,
        totalTask: 15,
        completedTask: 13,
        progression: 87,
        dayleft: 2,
        favourite: !0,
        member: [{
            name: "Steve Sutton",
            img: "/img/avatars/thumb-11.jpg"
        }]
    }, {
        id: "32",
        name: "Posiflex Web",
        category: "Frontend Web Application",
        desc: "The function of good software is to make the complex appear to be simple.",
        attachmentCount: 6,
        totalTask: 18,
        completedTask: 9,
        progression: 50,
        dayleft: 6,
        favourite: !1,
        member: [{
            name: "Miriam Herrera",
            img: "/img/avatars/thumb-12.jpg"
        }]
    }, {
        id: "33",
        name: "FoksMart APP",
        category: "Mobile Application",
        desc: "It is not about bits, bytes and protocols, but profits, losses and margins. ",
        attachmentCount: 3,
        totalTask: 26,
        completedTask: 19,
        progression: 67,
        dayleft: 14,
        favourite: !1,
        member: [{
            name: "Shannon Baker",
            img: "/img/avatars/thumb-4.jpg"
        }, {
            name: "Jessica Wells",
            img: "/img/avatars/thumb-8.jpg"
        }]
    }, {
        id: "34",
        name: "FlowBuzz SEO",
        category: "Marketing",
        desc: "Destroy couch lick the plastic bag for stare at owner accusingly then wink. ",
        attachmentCount: 3,
        totalTask: 26,
        completedTask: 19,
        progression: 88,
        dayleft: 18,
        favourite: !1,
        member: [{
            name: "Angelina Gotelli",
            img: "/img/avatars/thumb-1.jpg"
        }, {
            name: "Roberta Horton",
            img: "/img/avatars/thumb-7.jpg"
        }]
    }, {
        id: "35",
        name: "Mind Blast APP",
        category: "Mobile Application",
        desc: "Loves cheeseburgers suddenly go on wild-eyed crazy rampage drink from the toilet.",
        attachmentCount: 3,
        totalTask: 74,
        completedTask: 31,
        progression: 42,
        dayleft: 37,
        favourite: !1,
        member: [{
            name: "Cassandra Murray",
            img: "/img/avatars/thumb-13.jpg"
        }, {
            name: "Jackie Soto",
            img: "/img/avatars/thumb-15.jpg"
        }]
    }],
    Ri = [{
        id: "zb7zxtjctd",
        name: "Unable to upload file",
        description: "Scenester hashtag sustainable art party 3 wolf moon live-edge portland offal master cleanse disrupt viral palo santo tacos. Offal sriracha you probably havent heard of them vaporware glossier.",
        cover: "/img/others/img-13.jpg",
        members: [{
            id: "1",
            name: "Angelina Gotelli",
            email: "eileen_h@hotmail.com",
            img: "/img/avatars/thumb-1.jpg"
        }, {
            id: "2",
            name: "Jeremiah Minsk",
            email: "",
            img: "/img/avatars/thumb-2.jpg"
        }, {
            id: "3",
            name: "Max Alexander",
            email: "ronnie_vergas@infotech.io",
            img: "/img/avatars/thumb-3.jpg"
        }],
        labels: ["Task", "Live issue"],
        attachments: [{
            id: "jubuK7XGp3",
            name: "mail.jpg",
            src: "/img/others/img-13.jpg",
            size: "36.1kb"
        }, {
            id: "xsb3HCejCM",
            name: "mail.jpg",
            src: "/img/others/img-14.jpg",
            size: "55.9kb"
        }],
        comments: [{
            id: "R22TqMkACm",
            name: "Camila Simmmons",
            src: "/img/avatars/thumb-9.jpg",
            message: "I am baby kitsch plaid mustache, williamsburg butcher gluten-free 3 wolf moon authentic quinoa selvage knausgaard unicorn. Palo santo viral everyday carry, heirloom tumblr raw denim yr iceland wayfarers single-origin coffee tote bag shoreditch cloud bread poke.",
            date: new Date(q, 4, 20)
        }],
        dueDate: new Date(q, 7, 5),
        checked: !1
    }, {
        id: "7qgsduurxt",
        name: "Table data incorrect",
        description: "Extra  breve french press organic milk lungo bar. At, carajillo, saucer latte americano and shop rich french press. And barista mazagran, black, cup extraction ristretto plunger pot cinnamon café au lait.",
        cover: "",
        members: [{
            id: "8",
            name: "Jessica Wells",
            email: "iamfred@imaze.infotech.io",
            img: "/img/avatars/thumb-8.jpg"
        }],
        labels: ["Bug"],
        attachments: [],
        comments: [{
            id: "Wx8FDSsVTg",
            name: "Arlene Pierce",
            src: "/img/avatars/thumb-6.jpg",
            message: "Helvetica 8-bit photo booth tumblr food truck. Enamel pin wolf tousled sartorial, brunch shoreditch skateboard beard helvetica. Plaid typewriter gastropub bespoke.",
            date: new Date(q, 4, 20)
        }, {
            id: "3AhkqqSFFr",
            name: "Max Alexander",
            src: "/img/avatars/thumb-3.jpg",
            message: "Af trust fund meggings, meditation chicharrones brunch wolf narwhal shoreditch whatever bicycle rights ramps. ",
            date: new Date(q, 4, 20)
        }],
        dueDate: new Date(q, 6, 11)
    }, {
        id: "wtwgpz6csc",
        name: "Fix broken UI",
        description: "Air plant subway tile four loko ramps. Microdosing offal tote bag, single-origin coffee biodiesel before they sold out swag pok pok gastropub tacos letterpress.",
        cover: "",
        members: [{
            id: "13",
            name: "Cassandra Murray",
            email: "leeWheeler@infotech.io",
            img: "/img/avatars/thumb-13.jpg"
        }, {
            id: "5",
            name: "Eugene Stewart",
            email: "joyce991@infotech.io",
            img: "/img/avatars/thumb-5.jpg"
        }],
        labels: ["Low priority"],
        attachments: [],
        comments: [{
            id: "bAvBdtKHNC",
            name: "Steve Sutton",
            src: "/img/avatars/thumb-11.jpg",
            message: "Helvetica 8-bit photo booth tumblr food truck. Enamel pin wolf tousled sartorial, brunch shoreditch skateboard beard helvetica. Plaid typewriter gastropub bespoke.",
            date: new Date(q, 4, 20)
        }],
        dueDate: new Date(q, 7, 5),
        checked: !1
    }],
    Pi = [{
        id: "ywejrdr3rn",
        name: "Fix dashboard layout",
        description: "Biodiesel selvage letterpress 8-bit, coloring book banjo austin pabst post-ironic try-hard gluten-free tilde authentic prism man braid.",
        cover: "",
        members: [{
            id: "2",
            name: "Jeremiah Minsk",
            email: "",
            img: "/img/avatars/thumb-2.jpg"
        }, {
            id: "8",
            name: "Jessica Wells",
            email: "iamfred@imaze.infotech.io",
            img: "/img/avatars/thumb-8.jpg"
        }],
        labels: ["Bug"],
        attachments: [],
        comments: [{
            id: "afPugkEmkp",
            name: "Angelina Gotelli",
            src: "/img/avatars/thumb-1.jpg",
            message: "",
            date: new Date(q, 5, 16)
        }],
        dueDate: new Date(q, 3, 17),
        checked: !1
    }, {
        id: "tkBXWJGwkr",
        name: "New design",
        description: "Typewriter hell of cloud bread health goth beard mlkshk four loko.",
        cover: "",
        members: [{
            id: "10",
            name: "Earl Miles",
            email: "brittany1134@gmail.com",
            img: "/img/avatars/thumb-10.jpg"
        }],
        labels: ["Task"],
        attachments: [{
            id: "NjHJhHeWrG",
            name: "issue.jpg",
            src: "/img/others/img-16.jpg",
            size: "46.1kb"
        }],
        comments: [{
            id: "MAsPDzGwnA",
            name: "Max Alexander",
            src: "/img/avatars/thumb-3.jpg",
            message: "Af trust fund meggings, meditation chicharrones brunch wolf narwhal shoreditch whatever bicycle rights ramps. ",
            date: new Date(q, 4, 20)
        }],
        dueDate: null,
        checked: !1
    }, {
        id: "VQgUDrYJYH",
        name: "Improve user experiences",
        description: "Java, barista, single origin, aged foam, id dripper organic at grounds id turkish. Grounds french press viennese, strong dark that extra  spoon café au lait cappuccino. Doppio, coffee, affogato, skinny eu latte, ut carajillo black crema instant dark.",
        cover: "",
        members: [{
            id: "6",
            name: "Arlene Pierce",
            email: "samanthaphil@infotech.io",
            img: "/img/avatars/thumb-6.jpg"
        }],
        labels: ["Low priority", "Task"],
        attachments: [],
        comments: [],
        dueDate: new Date(q, 4, 20),
        checked: !1
    }],
    Oi = [{
        id: "jzjn95g3v4",
        name: "Update node environment",
        description: "Unicorn occupy locavore pug, stumptown literally tofu irony. Af street art paleo shoreditch. Banh mi before they sold out activated charcoal.",
        cover: "",
        members: [{
            id: "3",
            name: "Max Alexander",
            email: "ronnie_vergas@infotech.io",
            img: "/img/avatars/thumb-3.jpg"
        }],
        labels: ["Low priority"],
        attachments: [],
        comments: [{
            id: "nBAGhJqe9v",
            name: "Max Alexander",
            src: "/img/avatars/thumb-3.jpg",
            message: "",
            date: new Date(q, 1, 8)
        }],
        dueDate: null,
        checked: !1
    }, {
        id: "ZFQDPmscwA",
        name: "Remove user data",
        description: "Crucifix polaroid hot chicken asymmetrical wolf helvetica keytar fashion axe ramps YOLO wayfarers 90s.",
        cover: "/img/others/img-15.jpg",
        members: [{
            id: "9",
            name: "Camila Simmmons",
            email: "carolyn_h@gmail.com",
            img: "/img/avatars/thumb-9.jpg"
        }, {
            id: "10",
            name: "Earl Miles",
            email: "brittany1134@gmail.com",
            img: "/img/avatars/thumb-10.jpg"
        }],
        labels: ["Live issue"],
        attachments: [{
            id: "NjHJhHeWrG",
            name: "issue.jpg",
            src: "/img/others/img-15.jpg",
            size: "42.6kb"
        }],
        comments: [{
            id: "nBAGhJqe9v",
            name: "Max Alexander",
            src: "/img/avatars/thumb-3.jpg",
            message: "Lorem Khaled Ipsum is a major key to success. They key is to have every key, the key to open every door. Im up to something. Life is what you make it, so lets make it.",
            date: new Date(q, 1, 8)
        }],
        dueDate: null,
        checked: !1
    }],
    Ui = [{
        id: "yhjk5679xr",
        name: "Ready to test",
        description: "Yr green juice health goth, williamsburg four dollar toast shabby chic meggings jean shorts VHS.",
        cover: "",
        members: [{
            id: "13",
            name: "Cassandra Murray",
            email: "leeWheeler@infotech.io",
            img: "/img/avatars/thumb-13.jpg"
        }, {
            id: "9",
            name: "Camila Simmmons",
            email: "carolyn_h@gmail.com",
            img: "/img/avatars/thumb-9.jpg"
        }],
        labels: ["Task"],
        attachments: [],
        comments: [{
            id: "yxc5gwrXUZ",
            name: "Max Alexander",
            src: "/img/avatars/thumb-3.jpg",
            message: "True innovation often comes from the small startup who is lean enough to launch a market but lacks the heft to own it.",
            date: new Date(q, 3, 4)
        }],
        dueDate: new Date(q, 3, 4),
        checked: !0
    }, {
        id: "UMgvapYVXm",
        name: "Slow API connection",
        description: "Yr green juice health goth, williamsburg four dollar toast shabby chic meggings jean shorts VHS.",
        cover: "",
        members: [{
            id: "5",
            name: "Eugene Stewart",
            email: "joyce991@infotech.io",
            img: "/img/avatars/thumb-5.jpg"
        }, {
            id: "6",
            name: "Arlene Pierce",
            email: "samanthaphil@infotech.io",
            img: "/img/avatars/thumb-6.jpg"
        }, {
            id: "7",
            name: "Roberta Horton",
            email: "taratarara@imaze.edu.du",
            img: "/img/avatars/thumb-7.jpg"
        }],
        labels: ["Bug"],
        attachments: [],
        comments: [],
        dueDate: new Date(q, 7, 19),
        checked: !0
    }, {
        id: "uRZNVsCmDW",
        name: "Login failed",
        description: "Air plant subway tile four loko ramps. Microdosing offal tote bag, single-origin coffee biodiesel before they sold.",
        cover: "",
        members: [{
            id: "4",
            name: "Shannon Baker",
            email: "cookie_lukie@hotmail.com",
            img: "/img/avatars/thumb-4.jpg"
        }],
        labels: ["Live issue"],
        attachments: [],
        comments: [],
        dueDate: new Date(q, 4, 6),
        checked: !0
    }, {
        id: "PBSGmhVgvS",
        name: "Locale incorrect",
        description: "Hoodie mustache woke pour-over you probably havent heard of them cray.",
        cover: "",
        members: [{
            id: "5",
            name: "Eugene Stewart",
            email: "joyce991@infotech.io",
            img: "/img/avatars/thumb-5.jpg"
        }, {
            id: "3",
            name: "Max Alexander",
            email: "ronnie_vergas@infotech.io",
            img: "/img/avatars/thumb-3.jpg"
        }],
        labels: ["Low priority"],
        attachments: [],
        comments: [{
            id: "dNskbPFeQD",
            name: "Max Alexander",
            src: "/img/avatars/thumb-3.jpg",
            message: "Af trust fund meggings, meditation chicharrones brunch wolf narwhal shoreditch whatever bicycle rights ramps. ",
            date: new Date(q, 4, 20)
        }, {
            id: "qNzkmRZiTO",
            name: "Jeremiah Minsk",
            src: "/img/avatars/thumb-2.jpg",
            message: "Noted!",
            date: new Date(q, 4, 20)
        }],
        dueDate: new Date(q, 7, 13),
        checked: !0
    }],
    Bi = {
        ticketId: "#PD-127",
        title: "API not working",
        createdBy: "Angelina Gotelli",
        underProject: "Sprint 2",
        status: "In progress",
        priority: "High",
        description: `<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
	<p>Enslave the hooman pounce on unsuspecting person or tuxedo cats always looking dapper yet poop on grasses or growl at dogs in my sleep but love blinks and purr purr purr purr yawn.</p>
	<p>Decide to want nothing to do with my owner today being gorgeous with belly side up claw your carpet in places everyone can see - why hide my amazing artistic clawing skills?</p>
	<p>Bite nose of your human leave fur on owners clothes so scratch my tummy actually i hate you now fight me blow up sofa in 3 seconds.</p>
	`,
        dueDate: 1742795479,
        assignees: [{
            id: "2",
            name: "Jeremiah Minsk",
            email: "terrance_moreno@infotech.io",
            img: "/img/avatars/thumb-2.jpg"
        }, {
            id: "3",
            name: "Max Alexander",
            email: "ronnie_vergas@infotech.io",
            img: "/img/avatars/thumb-3.jpg"
        }],
        labels: [{
            id: "1",
            title: "Bug"
        }, {
            id: "2",
            title: "Live issue"
        }],
        comments: [{
            id: "Wx8FDSsVTg",
            name: "Arlene Pierce",
            src: "/img/avatars/thumb-6.jpg",
            message: "Helvetica 8-bit photo booth tumblr food truck. Enamel pin wolf tousled sartorial, brunch shoreditch skateboard beard helvetica. Plaid typewriter gastropub bespoke.",
            date: new Date(q, 4, 20)
        }, {
            id: "3AhkqqSFFr",
            name: "Roberta Horton",
            src: "/img/avatars/thumb-7.jpg",
            message: "<strong>@Angelina</strong> One of the main causes of the fall of the Roman Empire was that-lacking zero-they had no way to indicate successful termination of their C programs. ",
            date: new Date(q, 4, 20)
        }],
        attachments: [{
            id: "jubuK7XGp3",
            name: "mail.jpg",
            src: "/img/others/img-13.jpg",
            size: "36.1kb"
        }, {
            id: "NjHJhHeWrG",
            name: "issue.jpg",
            src: "/img/others/img-16.jpg",
            size: "46.1kb"
        }],
        activity: [{
            type: "UPDATE-TICKET",
            dateTime: 164658e4,
            ticket: "PD-127",
            status: 1,
            userName: "Angelina Gotelli",
            userImg: ""
        }, {
            type: "COMMENT",
            dateTime: 1646578417,
            userName: "Arlene Pierce",
            userImg: "/img/avatars/thumb-1.jpg",
            comment: "Helvetica 8-bit photo booth tumblr food truck. Enamel pin wolf tousled sartorial, brunch shoreditch skateboard beard helvetica. Plaid typewriter gastropub bespoke."
        }, {
            type: "ADD-TAGS-TO-TICKET",
            dateTime: 1646574027,
            userName: "Eugene Stewart",
            tags: ["Live Issue", "Bug"]
        }, {
            type: "ADD-FILES-TO-TICKET",
            dateTime: 1646569123,
            userName: "Shannon Baker",
            files: ["document.csv"],
            ticket: "PD-1092"
        }, {
            type: "COMMENT-MENTION",
            dateTime: 1646565473,
            userName: "Roberta Horton",
            userImg: "/img/avatars/thumb-7.jpg",
            comment: "<strong>@Angelina</strong> One of the main causes of the fall of the Roman Empire was that-lacking zero-they had no way to indicate successful termination of their C programs. "
        }, {
            type: "ASSIGN-TICKET",
            dateTime: 1646554397,
            userName: "Lee Wheeler",
            assignee: "Alvin Moreno",
            ticket: "PD-1092"
        }]
    },
    Li = {
        "To Do": Ri,
        "In Progress": Pi,
        "To Review": Oi,
        Completed: Ui
    },
    Qt = [{
        id: "0a2ff03d-1b61-4ab0-aa43-e5c7f4578a79",
        name: "Unable to upload file",
        dueDate: "2024-08-05T00:00:00.000Z",
        checked: !1,
        progress: "In Progress",
        priority: "High",
        assignee: {
            name: "Jessica Wells",
            img: "/img/avatars/thumb-8.jpg"
        }
    }, {
        id: "da1d38c9-e7ad-4d7d-88d4-bc88e152d10e",
        name: "Error in database query",
        dueDate: "2024-07-15T00:00:00.000Z",
        checked: !0,
        progress: "Completed",
        priority: "Medium",
        assignee: {
            name: "Jeremiah Minsk",
            img: "/img/avatars/thumb-2.jpg"
        }
    }, {
        id: "cd820d94-aa38-40f0-97ab-2a5c82f3c701",
        name: "Authentication problem",
        dueDate: "2024-09-20T00:00:00.000Z",
        checked: !1,
        progress: "In Progress",
        priority: "High",
        assignee: {
            name: "Earl Miles",
            img: "/img/avatars/thumb-10.jpg"
        }
    }, {
        id: "f5bfcff3-975c-4b22-a49b-1eeb8a3c03ec",
        name: "Bug in search functionality",
        dueDate: "2024-09-05T00:00:00.000Z",
        checked: !1,
        progress: "In Progress",
        priority: "High",
        assignee: {
            name: "Max Alexander",
            img: "/img/avatars/thumb-3.jpg"
        }
    }, {
        id: "c773847d-7f60-4d27-b3b0-6f61915e9b1a",
        name: "Compatibility issue with Firefox",
        dueDate: "2024-07-25T00:00:00.000Z",
        checked: !0,
        progress: "Completed",
        priority: "Medium",
        assignee: {
            name: "Angelina Gotelli",
            img: "/img/avatars/thumb-1.jpg"
        }
    }],
    Hi = [{
        id: "9ff33d5e-2f1c-4b20-b8ae-2241ed9cc624",
        name: "Performance optimization",
        dueDate: "2024-08-30T00:00:00.000Z",
        checked: !1,
        progress: "Pending",
        priority: "Medium",
        assignee: {
            name: "Jeremiah Minsk",
            img: "/img/avatars/thumb-2.jpg"
        }
    }, {
        id: "a6951cbb-fb0d-4223-b73a-8b8b9e40f0d2",
        name: "Payment gateway integration",
        dueDate: "2024-10-15T00:00:00.000Z",
        checked: !1,
        progress: "Pending",
        priority: "Low",
        assignee: {
            name: "Jeremiah Minsk",
            img: "/img/avatars/thumb-2.jpg"
        }
    }, {
        id: "b671d721-4d5e-4b63-8827-739e8d5cb22c",
        name: "Update user profile page layout",
        dueDate: "2024-08-10T00:00:00.000Z",
        checked: !1,
        progress: "In Progress",
        priority: "High",
        assignee: {
            name: "Max Alexander",
            img: "/img/avatars/thumb-3.jpg"
        }
    }, {
        id: "f4d29527-84e6-4702-92d6-805b6a703dc8",
        name: "Enhance security measures",
        dueDate: "2024-08-20T00:00:00.000Z",
        checked: !1,
        progress: "Pending",
        priority: "Medium",
        assignee: {
            name: "Arlene Pierce",
            img: "/img/avatars/thumb-6.jpg"
        }
    }],
    zi = [{
        id: "b8d49ba2-ae0e-4567-aa82-ef057f0a2d2b",
        name: "UI Layout Adjustment for Dashboard",
        dueDate: "2024-09-25T00:00:00.000Z",
        checked: !1,
        progress: "In Progress",
        priority: "High",
        assignee: {
            name: "Jeremiah Minsk",
            img: "/img/avatars/thumb-2.jpg"
        }
    }, {
        id: "fffb790d-fc52-4df6-8403-07128cc6fb31",
        name: "UX Improvement for Onboarding Process",
        dueDate: "2024-08-15T00:00:00.000Z",
        checked: !1,
        progress: "Pending",
        priority: "Medium",
        assignee: {
            name: "Arlene Pierce",
            img: "/img/avatars/thumb-6.jpg"
        }
    }, {
        id: "b32d5d2b-f762-426f-9bbd-ec15c879e1a5",
        name: "UI Element Styling for Product Page",
        dueDate: "2024-10-05T00:00:00.000Z",
        checked: !1,
        progress: "Pending",
        priority: "Low",
        assignee: {
            name: "Angelina Gotelli",
            img: "/img/avatars/thumb-1.jpg"
        }
    }],
    Fi = [{
        id: "8e00e8d5-b87e-4c97-8d80-695ff91f50b0",
        name: "Strategic Project Roadmap Planning",
        dueDate: "2024-09-30T00:00:00.000Z",
        checked: !1,
        progress: "In Progress",
        priority: "High",
        assignee: {
            name: "Jeremiah Minsk",
            img: "/img/avatars/thumb-2.jpg"
        }
    }, {
        id: "a1a1d440-8f4c-4be4-a92b-249107fd4e1d",
        name: "Quarterly Resource Allocation Plan",
        dueDate: "2024-08-20T00:00:00.000Z",
        checked: !1,
        progress: "Pending",
        priority: "Medium",
        assignee: {
            name: "Arlene Pierce",
            img: "/img/avatars/thumb-6.jpg"
        }
    }, {
        id: "c18b5a49-43f1-4dd3-bf5a-3f4e5e4b3db2",
        name: "Strategic Business Planning Session",
        dueDate: "2024-10-10T00:00:00.000Z",
        checked: !1,
        progress: "Pending",
        priority: "Low",
        assignee: {
            name: "Angelina Gotelli",
            img: "/img/avatars/thumb-1.jpg"
        }
    }],
    Gi = {
        "Bug fix": Qt,
        Development: Hi,
        "UI/UX": zi,
        Planing: Fi
    };
C.onGet("/api/projects").reply(() => [200, Te]);
C.onPost("/api/projects").reply(d => d.data.length > 0 ? (Te.push(JSON.parse(d.data)), [200, Te]) : [400, {}]);
C.onGet(/\/api\/projects\/\d+/).reply(function(d) {
    var g;
    const l = (g = d.url) == null ? void 0 : g.split("/")[2];
    let m = Te.find(y => y.id === l);
    return m || (m = Te[0]), [200, { ...Ni,
        ...m
    }]
});
C.onGet("/api/projects/scrum-board").reply(() => [200, Li]);
C.onGet("/api/projects/scrum-board/members").reply(() => {
    const d = ["3", "2", "4", "7", "1", "10", "9"];
    return [200, {
        participantMembers: Vt.filter(m => d.includes(m.id)),
        allMembers: Vt
    }]
});
C.onGet("/api/projects/tasks").reply(() => [200, Gi]);
C.onGet(/\/api\/projects\/tasks\/\d+/).reply(function() {
    return [200, Bi]
});
const ea = [{
        id: "95954",
        date: 1660132800,
        customer: "Ron Vargas",
        status: 0,
        paymentMehod: "visa",
        paymentIdendifier: "•••• 6165",
        totalAmount: 168
    }, {
        id: "95423",
        date: 1659132800,
        customer: "Carolyn Hanso",
        status: 0,
        paymentMehod: "visa",
        paymentIdendifier: "•••• 7128",
        totalAmount: 523
    }, {
        id: "92903",
        date: 1658132800,
        customer: "Gabriella May",
        status: 0,
        paymentMehod: "paypal",
        paymentIdendifier: "••••@gmail.com",
        totalAmount: 81
    }, {
        id: "92627",
        date: 1657332800,
        customer: "Tara Fletcher",
        status: 0,
        paymentMehod: "master",
        paymentIdendifier: "•••• 0921",
        totalAmount: 279
    }, {
        id: "92509",
        date: 1656232800,
        customer: "Joyce Freeman",
        status: 1,
        paymentMehod: "visa",
        paymentIdendifier: "•••• 1232",
        totalAmount: 831
    }, {
        id: "91631",
        date: 1655532800,
        customer: "Brittany Hale",
        status: 0,
        paymentMehod: "visa",
        paymentIdendifier: "•••• 4597",
        totalAmount: 142
    }, {
        id: "90963",
        date: 1654932800,
        customer: "Luke Cook",
        status: 0,
        paymentMehod: "master",
        paymentIdendifier: "•••• 3881",
        totalAmount: 232
    }, {
        id: "89332",
        date: 1654132800,
        customer: "Eileen Horton",
        status: 1,
        paymentMehod: "paypal",
        paymentIdendifier: "••••@gmail.com",
        totalAmount: 597
    }, {
        id: "89107",
        date: 1650132800,
        customer: "Frederick Adams",
        status: 2,
        paymentMehod: "visa",
        paymentIdendifier: "•••• 3356",
        totalAmount: 72
    }, {
        id: "89021",
        date: 1649832800,
        customer: "Lee Wheeler",
        status: 0,
        paymentMehod: "master",
        paymentIdendifier: "•••• 9564",
        totalAmount: 110
    }, {
        id: "88911",
        date: 1649432800,
        customer: "Gail Barnes",
        status: 0,
        paymentMehod: "visa",
        paymentIdendifier: "•••• 1357",
        totalAmount: 59
    }, {
        id: "87054",
        date: 1647932800,
        customer: "Ella Robinson",
        status: 0,
        paymentMehod: "visa",
        paymentIdendifier: "•••• 3561",
        totalAmount: 238
    }, {
        id: "86497",
        date: 1647632800,
        customer: "Steve Sutton",
        status: 2,
        paymentMehod: "visa",
        paymentIdendifier: "•••• 0443",
        totalAmount: 189
    }, {
        id: "86212",
        date: 1646832800,
        customer: "Tara Fletcher",
        status: 0,
        paymentMehod: "paypal",
        paymentIdendifier: "••••@gmail.com",
        totalAmount: 672
    }],
    nt = {
        id: "95954",
        progressStatus: 0,
        paymentStatus: 0,
        dateTime: 1646396117,
        paymentSummary: {
            subTotal: 1762,
            tax: 105.72,
            deliveryFees: 15,
            total: 1870.72,
            customerPayment: 1870.72
        },
        shipping: {
            deliveryFees: 15,
            estimatedMin: 1,
            estimatedMax: 3,
            shippingLogo: "/img/others/img-11.jpg",
            shippingVendor: "FedEx"
        },
        note: "If there are any issues or delays with my order, please don't hesitate to contact me, I value clear communication and appreciate your attention to detail.",
        activity: [{
            date: 1646554397,
            events: [{
                time: 1646554397,
                action: "Parcel has been delivered",
                recipient: "Steve Sutton"
            }, {
                time: 1646537537,
                action: "Parcel is out for delivery"
            }, {
                time: 1646529317,
                action: "Parcel has arrived at delivery station"
            }]
        }, {
            date: 1646442017,
            events: [{
                time: 1646462597,
                action: "Parcel has been picked up by courier"
            }, {
                time: 1646537537,
                action: "Seller is preparing to ship your parcel"
            }]
        }],
        product: [{
            id: "13",
            name: "Snövalla",
            productCode: "098359NT",
            img: "/img/products/product-2.jpg",
            price: 252,
            quantity: 2,
            total: 504
        }, {
            id: "18",
            name: "Maneki Neko Poster",
            productCode: "098336NT",
            img: "/img/products/product-7.jpg",
            price: 389,
            quantity: 1,
            total: 389
        }, {
            id: "19",
            name: "Ektöra",
            productCode: "098368NT",
            img: "/img/products/product-8.jpg",
            price: 869,
            quantity: 1,
            total: 869
        }],
        customer: {
            name: "Steve Sutton",
            firstName: "Steve",
            lastName: "Sutton",
            email: "handsome-obrien@hotmail.com",
            phone: "+1 (541) 754-3010",
            dialCode: "+1",
            phoneNumber: "541 754 3010",
            img: "/img/avatars/thumb-11.jpg",
            previousOrder: 11,
            address: "123 Main St",
            postcode: "10001",
            city: "New York",
            country: "US",
            shippingAddress: {
                line1: "100 Main ST",
                line2: "PO Box 1022",
                line3: "Seattle WA 98104",
                line4: "United States of America"
            },
            billingAddress: {
                line1: "1527 Pond Reef Rd",
                line2: "Ketchikan",
                line3: "Alaska 99901",
                line4: "United States of America"
            }
        }
    };
C.onGet("/api/orders").reply(d => {
    const {
        pageIndex: l,
        pageSize: m,
        sort: u,
        query: g
    } = d.params, {
        order: y,
        key: c
    } = u, w = ea;
    let h = w.filter(A => typeof A != "function"),
        F = w.length;
    c && y && (c === "category" || c === "name" ? h.sort(me(c, y === "desc", A => A.toUpperCase())) : h.sort(me(c, y === "desc", parseInt))), g && (h = fe(h, g, "id"), F = h.length), h = Se(h, m, l);
    const P = {
        list: h,
        total: F
    };
    return new Promise(function(A) {
        setTimeout(function() {
            A([200, P])
        }, 500)
    })
});
C.onGet(/\/api\/orders\/\d+/).reply(function(d) {
    var u;
    const l = (u = d.url) == null ? void 0 : u.split("/")[2],
        m = ea.find(g => g.id === l);
    return m ? (nt.id = m.id, nt.paymentStatus = m.status, [200, nt]) : [404, {}]
});
const Be = [{
        id: "1",
        name: "Tech design.pdf",
        fileType: "pdf",
        srcUrl: "",
        size: 22020096e-1,
        author: {
            name: "Eugene Stewart",
            email: "joyce991@infotech.io",
            img: "/img/avatars/thumb-5.jpg"
        },
        activities: [{
            userName: "Earl Miles",
            userImg: "/img/avatars/thumb-10.jpg",
            actionType: "EDIT",
            timestamp: 1710163777
        }, {
            userName: "Roberta Horton",
            userImg: "/img/avatars/thumb-7.jpg",
            actionType: "EDIT",
            timestamp: 1710163777
        }, {
            userName: "Eugene Stewartn",
            userImg: "/img/avatars/thumb-5.jpg",
            actionType: "CREATE",
            timestamp: 1710163777
        }],
        permissions: [{
            userName: "Earl Miles",
            userImg: "/img/avatars/thumb-10.jpg",
            role: "editor"
        }, {
            userName: "Roberta Horton",
            userImg: "/img/avatars/thumb-7.jpg",
            role: "editor"
        }, {
            userName: "Eugene Stewartn",
            userImg: "/img/avatars/thumb-5.jpg",
            role: "owner"
        }],
        uploadDate: 1710163777,
        recent: !0
    }, {
        id: "2",
        name: "Financial_Report.xlsx",
        fileType: "xls",
        srcUrl: "",
        size: 14589043e-1,
        author: {
            name: "Jackie Soto",
            email: "ella_robinson@infotech.io",
            img: "/img/avatars/thumb-15.jpg"
        },
        activities: [{
            userName: "Miriam Herrera",
            userImg: "/img/avatars/thumb-12.jpg",
            actionType: "VIEW",
            timestamp: 1723045896
        }, {
            userName: "Jessica Wells",
            userImg: "/img/avatars/thumb-8.jpg",
            actionType: "EDIT",
            timestamp: 1723045896
        }, {
            userName: "Jackie Soto",
            userImg: "/img/avatars/thumb-15.jpg",
            actionType: "DOWNLOAD",
            timestamp: 1723045896
        }],
        permissions: [{
            userName: "Miriam Herrera",
            userImg: "/img/avatars/thumb-12.jpg",
            role: "editor"
        }, {
            userName: "Jessica Wells",
            userImg: "/img/avatars/thumb-8.jpg",
            role: "editor"
        }, {
            userName: "Jackie Soto",
            userImg: "/img/avatars/thumb-15.jpg",
            role: "owner"
        }],
        uploadDate: 1723045896,
        recent: !1
    }, {
        id: "3",
        name: "Modern_Laputa.jpg",
        fileType: "jpeg",
        srcUrl: "/img/others/img-3.jpg",
        size: 139234.8,
        author: {
            name: "Camila Simmmons",
            email: "carolyn_h@gmail.com",
            img: "/img/avatars/thumb-9.jpg"
        },
        activities: [{
            userName: "Cassandra Murray",
            userImg: "/img/avatars/thumb-13.jpg",
            actionType: "VIEW",
            timestamp: 1721487234
        }, {
            userName: "Camila Simmmons",
            userImg: "/img/avatars/thumb-9.jpg",
            actionType: "CREATE",
            timestamp: 1721487234
        }],
        permissions: [{
            userName: "Cassandra Murray",
            userImg: "/img/avatars/thumb-13.jpg",
            role: "reader"
        }, {
            userName: "Camila Simmmons",
            userImg: "/img/avatars/thumb-9.jpg",
            role: "owner"
        }],
        uploadDate: 1721487234,
        recent: !0
    }, {
        id: "4",
        name: "Project_Presentation.pptx",
        fileType: "ppt",
        srcUrl: "",
        size: 30567891e-1,
        author: {
            name: "Arlene Pierce",
            email: "samanthaphil@infotech.io",
            img: "/img/avatars/thumb-6.jpg"
        },
        activities: [{
            userName: "Arlene Pierce",
            userImg: "/img/avatars/thumb-6.jpg",
            actionType: "CREATE",
            timestamp: 1724509123
        }],
        permissions: [{
            userName: "Arlene Pierce",
            userImg: "/img/avatars/thumb-6.jpg",
            role: "owner"
        }],
        uploadDate: 1724509123,
        recent: !1
    }, {
        id: "5",
        name: "Network_Diagram.fig",
        fileType: "figma",
        srcUrl: "",
        size: 123456.7,
        author: {
            name: "Camila Simmmons",
            email: "carolyn_h@gmail.com",
            img: "/img/avatars/thumb-9.jpg"
        },
        activities: [{
            userName: "Camila Simmmons",
            userImg: "/img/avatars/thumb-9.jpg",
            actionType: "CREATE",
            timestamp: 1726023412
        }],
        permissions: [{
            userName: "Camila Simmmons",
            userImg: "/img/avatars/thumb-9.jpg",
            role: "owner"
        }],
        uploadDate: 1726023412,
        recent: !0
    }, {
        id: "6",
        name: "Project_Files",
        fileType: "directory",
        srcUrl: "",
        size: 217976542e-1,
        author: {
            name: "Jessica Wells",
            email: "jessica@infotech.io",
            img: "/img/avatars/thumb-8.jpg"
        },
        activities: [{
            userName: "Jessica Wells",
            userImg: "/img/avatars/thumb-8.jpg",
            actionType: "CREATE",
            timestamp: 174e7
        }],
        permissions: [{
            userName: "Jessica Wells",
            userImg: "/img/avatars/thumb-8.jpg",
            role: "owner"
        }],
        uploadDate: 174e7,
        recent: !0
    }, {
        id: "7",
        name: "Project_Summary.docx",
        fileType: "doc",
        srcUrl: "",
        size: 987654.2,
        author: {
            name: "Steve Sutton",
            email: "handsome-obrien@hotmail.com",
            img: "/img/avatars/thumb-11.jpg"
        },
        activities: [{
            userName: "Earl Miles",
            userImg: "/img/avatars/thumb-10.jpg",
            actionType: "EDIT",
            timestamp: 1730156789
        }, {
            userName: "Steve Sutton",
            userImg: "/img/avatars/thumb-11.jpg",
            actionType: "CREATE",
            timestamp: 1730156789
        }],
        permissions: [{
            userName: "Earl Miles",
            userImg: "/img/avatars/thumb-10.jpg",
            role: "editor"
        }, {
            userName: "Steve Sutton",
            userImg: "/img/avatars/thumb-11.jpg",
            role: "owner"
        }],
        uploadDate: 1730156789,
        recent: !1
    }, {
        id: "8",
        name: "Gradient_store.jpg",
        fileType: "jpeg",
        srcUrl: "/img/others/img-5.jpg",
        size: 157890.8,
        author: {
            name: "Jackie Soto",
            email: "ella_robinson@infotech.io",
            img: "/img/avatars/thumb-15.jpg"
        },
        activities: [{
            userName: "Jessica Wells",
            userImg: "/img/avatars/thumb-8.jpg",
            actionType: "VIEW",
            timestamp: 1732012345
        }, {
            userName: "Jackie Soto",
            userImg: "/img/avatars/thumb-15.jpg",
            actionType: "CREATE",
            timestamp: 1732012345
        }],
        permissions: [{
            userName: "Jessica Wells",
            userImg: "/img/avatars/thumb-8.jpg",
            role: "reader"
        }, {
            userName: "Jackie Soto",
            userImg: "/img/avatars/thumb-15.jpg",
            role: "owner"
        }],
        uploadDate: 1732012345,
        recent: !0
    }, {
        id: "9",
        name: "Colorful_donunt.jpg",
        fileType: "jpeg",
        srcUrl: "/img/others/img-6.jpg",
        size: 216789.5,
        author: {
            name: "Angelina Gotelli",
            email: "eileen_h@hotmail.com",
            img: "/img/avatars/thumb-1.jpg"
        },
        activities: [{
            userName: "Shannon Baker",
            userImg: "/img/avatars/thumb-4.jpg",
            actionType: "VIEW",
            timestamp: 1733890123
        }, {
            userName: "Max Alexander",
            userImg: "/img/avatars/thumb-3.jpg",
            actionType: "DOWNLOAD",
            timestamp: 1733890123
        }, {
            userName: "Angelina Gotelli",
            userImg: "/img/avatars/thumb-11.jpg",
            actionType: "CREATE",
            timestamp: 1733890123
        }],
        permissions: [{
            userName: "Shannon Baker",
            userImg: "/img/avatars/thumb-4.jpg",
            role: "reader"
        }, {
            userName: "Max Alexander",
            userImg: "/img/avatars/thumb-3.jpg",
            role: "reader"
        }, {
            userName: "Angelina Gotelli",
            userImg: "/img/avatars/thumb-11.jpg",
            role: "owner"
        }],
        uploadDate: 1733890123,
        recent: !1
    }, {
        id: "10",
        name: "Annual_Report.pdf",
        fileType: "pdf",
        srcUrl: "",
        size: 16789014e-1,
        author: {
            name: "Eugene Stewart",
            email: "joyce991@infotech.io",
            img: "/img/avatars/thumb-5.jpg"
        },
        activities: [{
            userName: "Jeremiah Minsk",
            userImg: "/img/avatars/thumb-2.jpg",
            actionType: "VIEW",
            timestamp: 1735789012
        }, {
            userName: "Eugene Stewart",
            userImg: "/img/avatars/thumb-5.jpg",
            actionType: "CREATE",
            timestamp: 1735789012
        }],
        permissions: [{
            userName: "Jeremiah Minsk",
            userImg: "/img/avatars/thumb-2.jpg",
            role: "reader"
        }, {
            userName: "Eugene Stewart",
            userImg: "/img/avatars/thumb-5.jpg",
            role: "owner"
        }],
        uploadDate: 1735789012,
        recent: !0
    }, {
        id: "11",
        name: "Research_Paper.docx",
        fileType: "doc",
        srcUrl: "",
        size: 987654.2,
        author: {
            name: "Shannon Baker",
            email: "cookie_lukie@hotmail.com",
            img: "/img/avatars/thumb-4.jpg"
        },
        activities: [{
            userName: "Earl Miles",
            userImg: "/img/avatars/thumb-10.jpg",
            actionType: "VIEW",
            timestamp: 1737652345
        }, {
            userName: "Angelina Gotelli",
            userImg: "/img/avatars/thumb-1.jpg",
            actionType: "EDIT",
            timestamp: 1737652345
        }, {
            userName: "Camila Simmmons",
            userImg: "/img/avatars/thumb-9.jpg",
            actionType: "DOWNLOAD",
            timestamp: 1737652345
        }, {
            userName: "Shannon Baker",
            userImg: "/img/avatars/thumb-4.jpg",
            actionType: "CREATE",
            timestamp: 1737652345
        }],
        permissions: [{
            userName: "Earl Miles",
            userImg: "/img/avatars/thumb-10.jpg",
            role: "reader"
        }, {
            userName: "Angelina Gotelli",
            userImg: "/img/avatars/thumb-1.jpg",
            role: "editor"
        }, {
            userName: "Camila Simmmons",
            userImg: "/img/avatars/thumb-9.jpg",
            role: "reader"
        }, {
            userName: "Shannon Baker",
            userImg: "/img/avatars/thumb-4.jpg",
            role: "owner"
        }],
        uploadDate: 1737652345,
        recent: !1
    }, {
        id: "12",
        name: "Documents",
        fileType: "directory",
        srcUrl: "",
        size: 10485760,
        author: {
            name: "Earl Miles",
            email: "earl@infotech.io",
            img: "/img/avatars/thumb-10.jpg"
        },
        activities: [{
            userName: "Earl Miles",
            userImg: "/img/avatars/thumb-10.jpg",
            actionType: "CREATE",
            timestamp: 17401e5
        }],
        permissions: [{
            userName: "Earl Miles",
            userImg: "/img/avatars/thumb-10.jpg",
            role: "owner"
        }],
        uploadDate: 17401e5,
        recent: !0
    }, {
        id: "13",
        name: "Budget_Report.pdf",
        fileType: "pdf",
        srcUrl: "",
        size: 16789014e-1,
        author: {
            name: "Cassandra Murray",
            email: "lee_wheeler@infotech.io",
            img: "/img/avatars/thumb-13.jpg"
        },
        activities: [{
            userName: "Miriam Herrera",
            userImg: "/img/avatars/thumb-12.jpg",
            actionType: "VIEW",
            timestamp: 1728123456
        }, {
            userName: "Cassandra Murray",
            userImg: "/img/avatars/thumb-13.jpg",
            actionType: "CREATE",
            timestamp: 1728123456
        }],
        permissions: [{
            userName: "Miriam Herrera",
            userImg: "/img/avatars/thumb-12.jpg",
            role: "editor"
        }, {
            userName: "Cassandra Murray",
            userImg: "/img/avatars/thumb-13.jpg",
            role: "owner"
        }],
        uploadDate: 1728123456,
        recent: !0
    }, {
        id: "14",
        name: "Marketing_Strategy.pptx",
        fileType: "ppt",
        srcUrl: "",
        size: 21578908e-1,
        author: {
            name: "Jackie Soto",
            email: "ella_robinson@infotech.io",
            img: "/img/avatars/thumb-15.jpg"
        },
        activities: [{
            userName: "Jessica Wells",
            userImg: "/img/avatars/thumb-8.jpg",
            actionType: "VIEW",
            timestamp: 1732012345
        }, {
            userName: "Earl Miles",
            userImg: "/img/avatars/thumb-10.jpg",
            actionType: "EDIT",
            timestamp: 1732012345
        }, {
            userName: "Jackie Soto",
            userImg: "/img/avatars/thumb-15.jpg",
            actionType: "CREATE",
            timestamp: 1732012345
        }],
        permissions: [{
            userName: "Jessica Wells",
            userImg: "/img/avatars/thumb-8.jpg",
            role: "reader"
        }, {
            userName: "Earl Miles",
            userImg: "/img/avatars/thumb-10.jpg",
            role: "editor"
        }, {
            userName: "Jackie Soto",
            userImg: "/img/avatars/thumb-15.jpg",
            role: "owner"
        }],
        uploadDate: 1732012345,
        recent: !0
    }, {
        id: "15",
        name: "Architecture_Diagram.fig",
        fileType: "figma",
        srcUrl: "",
        size: 456789.5,
        author: {
            name: "Angelina Gotelli",
            email: "eileen_h@hotmail.com",
            img: "/img/avatars/thumb-1.jpg"
        },
        activities: [{
            userName: "Shannon Baker",
            userImg: "/img/avatars/thumb-4.jpg",
            actionType: "VIEW",
            timestamp: 1733890123
        }, {
            userName: "Roberta Horton",
            userImg: "/img/avatars/thumb-7.jpg",
            actionType: "EDIT",
            timestamp: 1733890123
        }, {
            userName: "Max Alexander",
            userImg: "/img/avatars/thumb-3.jpg",
            actionType: "DOWNLOAD",
            timestamp: 1733890123
        }, {
            userName: "Angelina Gotelli",
            userImg: "/img/avatars/thumb-11.jpg",
            actionType: "CREATE",
            timestamp: 1733890123
        }],
        permissions: [{
            userName: "Shannon Baker",
            userImg: "/img/avatars/thumb-4.jpg",
            role: "reader"
        }, {
            userName: "Roberta Horton",
            userImg: "/img/avatars/thumb-7.jpg",
            role: "editor"
        }, {
            userName: "Max Alexander",
            userImg: "/img/avatars/thumb-3.jpg",
            role: "editor"
        }, {
            userName: "Angelina Gotelli",
            userImg: "/img/avatars/thumb-11.jpg",
            role: "owner"
        }],
        uploadDate: 1733890123,
        recent: !1
    }, {
        id: "16",
        name: "Lone_bear.jpg",
        fileType: "jpeg",
        srcUrl: "/img/others/img-4.jpg",
        size: 16789014e-1,
        author: {
            name: "Cassandra Murray",
            email: "lee_wheeler@infotech.io",
            img: "/img/avatars/thumb-13.jpg"
        },
        activities: [{
            userName: "Miriam Herrera",
            userImg: "/img/avatars/thumb-12.jpg",
            actionType: "VIEW",
            timestamp: 1728123456
        }, {
            userName: "Cassandra Murray",
            userImg: "/img/avatars/thumb-13.jpg",
            actionType: "CREATE",
            timestamp: 1728123456
        }],
        permissions: [{
            userName: "Miriam Herrera",
            userImg: "/img/avatars/thumb-12.jpg",
            role: "reader"
        }, {
            userName: "Cassandra Murray",
            userImg: "/img/avatars/thumb-13.jpg",
            role: "owner"
        }],
        uploadDate: 1728123456,
        recent: !0
    }, {
        id: "17",
        name: "Meeting_Minutes.docx",
        fileType: "doc",
        srcUrl: "",
        size: 789234.8,
        author: {
            name: "Camila Simmmons",
            email: "carolyn_h@gmail.com",
            img: "/img/avatars/thumb-9.jpg"
        },
        activities: [{
            userName: "Cassandra Murray",
            userImg: "/img/avatars/thumb-13.jpg",
            actionType: "VIEW",
            timestamp: 1721487234
        }, {
            userName: "Camila Simmmons",
            userImg: "/img/avatars/thumb-9.jpg",
            actionType: "CREATE",
            timestamp: 1721487234
        }],
        permissions: [{
            userName: "Cassandra Murray",
            userImg: "/img/avatars/thumb-13.jpg",
            role: "editor"
        }, {
            userName: "Camila Simmmons",
            userImg: "/img/avatars/thumb-9.jpg",
            role: "owner"
        }],
        uploadDate: 1721487234,
        recent: !0
    }, {
        id: "18",
        name: "Team_Resources",
        fileType: "directory",
        srcUrl: "",
        size: 783120,
        author: {
            name: "Miriam Herrera",
            email: "miriam@infotech.io",
            img: "/img/avatars/thumb-12.jpg"
        },
        activities: [{
            userName: "Miriam Herrera",
            userImg: "/img/avatars/thumb-12.jpg",
            actionType: "CREATE",
            timestamp: 17402e5
        }],
        permissions: [{
            userName: "Miriam Herrera",
            userImg: "/img/avatars/thumb-12.jpg",
            role: "owner"
        }],
        uploadDate: 17402e5,
        recent: !0
    }, {
        id: "19",
        name: "Client_Data",
        fileType: "directory",
        srcUrl: "",
        size: 5390720,
        author: {
            name: "Camila Simmmons",
            email: "camila@infotech.io",
            img: "/img/avatars/thumb-9.jpg"
        },
        activities: [{
            userName: "Camila Simmmons",
            userImg: "/img/avatars/thumb-9.jpg",
            actionType: "CREATE",
            timestamp: 17403e5
        }],
        permissions: [{
            userName: "Camila Simmmons",
            userImg: "/img/avatars/thumb-9.jpg",
            role: "owner"
        }],
        uploadDate: 17403e5,
        recent: !0
    }, {
        id: "20",
        name: "Backup_Files",
        fileType: "directory",
        srcUrl: "",
        size: 2483948,
        author: {
            name: "Shannon Baker",
            email: "shannon@infotech.io",
            img: "/img/avatars/thumb-4.jpg"
        },
        activities: [{
            userName: "Shannon Baker",
            userImg: "/img/avatars/thumb-4.jpg",
            actionType: "CREATE",
            timestamp: 17404e5
        }],
        permissions: [{
            userName: "Shannon Baker",
            userImg: "/img/avatars/thumb-4.jpg",
            role: "owner"
        }],
        uploadDate: 17404e5,
        recent: !0
    }],
    ta = Be.filter(d => d.fileType === "directory"),
    Ji = ta.map(d => d.id);
C.onGet("/api/files").reply(d => {
    const {
        id: l
    } = d.params;
    let m = Be,
        u = [],
        g = [];
    if (ta.some(c => c.id === l)) switch (l) {
        case "6":
            u = ["2", "7", "8", "9", "15", "16"];
            break;
        case "12":
            u = ["1", "2", "5"];
            break;
        case "18":
            u = ["11", "13", "7", "4"];
            break;
        case "19":
            u = ["15", "17", "3", "8", "7"];
            break;
        case "20":
            u = ["3", "4", "10", "14"];
            break
    }
    if (u.length > 0) {
        m = Be.filter(w => u.includes(w.id));
        const c = Be.find(w => w.id === l);
        c && Ji.includes(l) && (g = [{
            id: c.id,
            label: c.name
        }])
    }
    return [200, {
        list: m,
        directory: g
    }]
});
C.onGet("/api/logs").reply(d => {
    const {
        filter: l,
        activityIndex: m
    } = d.params;
    let u = !0;
    const g = 3,
        y = (m - 1) * g;
    let c = Di;
    return y >= c.length && (u = !1), c = c.slice(y, m * g), l && (c = structuredClone(c).map(M => (M.events = M.events.filter(h => l.includes(h.type)), M))), [200, {
        data: c,
        loadable: u
    }]
});

function re(d) {
    const l = new Date,
        m = l.getFullYear().toString();
    let u = (l.getMonth() + 1).toString();
    return u.length === 1 && (u = "0" + u), d.replace("YEAR", m).replace("MONTH", u)
}
const _i = [{
    id: "0",
    title: "All Day Event",
    start: re("YEAR-MONTH-01"),
    eventColor: "orange"
}, {
    id: "1",
    title: "Long Event",
    start: re("YEAR-MONTH-07"),
    end: re("YEAR-MONTH-10"),
    eventColor: "red"
}, {
    id: "2",
    groupId: "999",
    title: "Repeating Event",
    start: re("YEAR-MONTH-09T16:00:00+00:00"),
    eventColor: "blue"
}, {
    id: "3",
    groupId: "999",
    title: "Repeating Event",
    start: re("YEAR-MONTH-16T16:00:00+00:00"),
    eventColor: "blue"
}, {
    id: "4",
    title: "Conference",
    start: "YEAR-MONTH-17",
    end: re("YEAR-MONTH-19"),
    eventColor: "blue"
}, {
    id: "5",
    title: "Meeting",
    start: re("YEAR-MONTH-18T10:30:00+00:00"),
    end: re("YEAR-MONTH-18T12:30:00+00:00"),
    eventColor: "blue"
}, {
    id: "6",
    title: "Lunch",
    start: re("YEAR-MONTH-18T12:00:00+00:00"),
    eventColor: "green"
}, {
    id: "7",
    title: "Birthday Party",
    start: re("YEAR-MONTH-19T07:00:00+00:00"),
    eventColor: "purple"
}, {
    id: "8",
    title: "Meeting",
    start: re("YEAR-MONTH-18T14:30:00+00:00"),
    eventColor: "blue"
}, {
    id: "9",
    title: "Happy Hour",
    start: re("YEAR-MONTH-18T17:30:00+00:00"),
    eventColor: "yellow"
}, {
    id: "10",
    title: "Dinner",
    start: re("YEAR-MONTH-22T20:00:00+00:00"),
    eventColor: "green"
}];
C.onGet("/api/calendar").reply(() => [200, _i]);
const Le = [{
    id: "1",
    name: "Eileen Horton",
    label: "",
    group: "sentItem",
    flagged: !1,
    starred: !1,
    from: "eileen_h@hotmail.com",
    avatar: "/img/avatars/thumb-1.jpg",
    title: "An 'extremely credible source'",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "11",
        name: "Eileen Horton",
        mail: ["nathan@themenate.com"],
        from: "eileen_h@hotmail.com",
        avatar: "/img/avatars/thumb-1.jpg",
        date: "12:06PM",
        content: "<p>Hi Nathan,</p><br /><p>An 'extremely credible source' has called my office and told me that Barack Obama's placeholder text is a fraud. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.</p><p>This can&apos;t be! Artoo, you're playing the wrong message. There will be no bargain. We're doomed. I will not give up my favorite decoration. I like Captain Solo where he is. Artoo, look! Captain Solo. And he's still frozen in carbonite. What could possibly have come over Master Luke. Is it something I did? He never expressed any unhappiness with my work. Oh! Oh! Hold it! Ohh!</p><p> <br>Your fleet has lost. And your friends on the Endor moon will not survive. There is no escape, my young apprentice. <br><br><br>Moruth Doole, <br></p>",
        attachment: [{
            file: "Prospectus.doc",
            size: "1MB",
            type: "doc"
        }, {
            file: "Financial_Report.xls",
            size: "652KB",
            type: "xls"
        }]
    }, {
        id: "12",
        name: "Nathan",
        mail: ["nathan@themenate.com"],
        from: "eileen_h@hotmail.com",
        avatar: "/img/avatars/thumb-15.jpg",
        date: "08:49AM",
        content: "<p>Hi Eileen,</p><br /><p>We will never become a truly paper-less society until the Palm Pilot folks come out with WipeMe 1.0. </p> <br><p> The cheapest, fastest, and most reliable components are those that aren't there. Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development. Software undergoes beta testing shortly before it's released. Beta is Latin for “still doesn't work”. </p> <br> <br><p>Regards,</p>",
        attachment: []
    }, {
        id: "22",
        name: "Eileen Horton",
        mail: ["nathan@themenate.com"],
        from: "eileen_h@hotmail.com",
        avatar: "/img/avatars/thumb-1.jpg",
        date: "03:27AM",
        content: "<p>Hi Nathan,</p><br /><p>Saucer grinder to go organic extraction coffee frappuccino lungo. Carajillo, dark, bar , qui, rich latte medium aged americano. Cream breve, mug at flavour half and half breve.</p> <br> <p>Plunger pot redeye con panna, in, espresso brewed et americano ut spoon. Java frappuccino plunger pot coffee, eu coffee shop variety percolator id robusta black. As plunger pot, americano, mocha skinny, at aroma grinder arabica americano wings spoon.</p> <br><br>Moruth Doole",
        attachment: []
    }]
}, {
    id: "2",
    name: "Terrance Moreno",
    label: "work",
    group: "",
    flagged: !0,
    starred: !1,
    from: "terrance_moreno@infotech.io",
    avatar: "/img/avatars/thumb-2.jpg",
    title: "Lorem Ipsum is FAKE TEXT!",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "13",
        name: "Terrance Moreno",
        mail: ["nathan@themenate.com"],
        from: "terrance_moreno@infotech.io",
        avatar: "/img/avatars/thumb-2.jpg",
        date: "9:35PM",
        content: "<p>Hi Nathan,</p><br /><p>All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. We have so many things that we have to do better</p> <p>The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I think my strongest asset maybe by far is my temperament. I have a placeholding temperament. The other thing with Lorem Ipsum is that you have to take out its family. The other thing with Lorem Ipsum is that you have to take out its family.</p><p>An ‘extremely credible source' has called my office and told me that Barack Obama's placeholder text is a fraud. Lorem Ipsum is unattractive, both inside and out. I fully understand why it's former users left it for something else. They made a good decision.</p><br/><p>Terrance Moreno<br/> Chief Officer</p>",
        attachment: [{
            file: "Prospectus.pdf",
            size: "219KB",
            type: "pdf"
        }, {
            file: "Company_img.jpg",
            size: "152KB",
            type: "jpg"
        }]
    }]
}, {
    id: "3",
    name: "Ron Vargas",
    label: "private",
    group: "starred",
    flagged: !1,
    starred: !0,
    from: "ronnie_vergas@infotech.io",
    avatar: "/img/avatars/thumb-3.jpg",
    title: "My text is long and beautiful",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "14",
        name: "Ron Vargas",
        mail: ["nathan@themenate.com"],
        from: "ronnie_vergas@infotech.io",
        avatar: "/img/avatars/thumb-3.jpg",
        date: "8:16am",
        content: "<p>Hi Nathan,</p><br /><p>I think my strongest asset maybe by far is my temperament. I have a placeholding temperament. When other websites give you text, they're not sending the best.</p> <p>I'm the best thing that ever happened to placeholder text. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I'll write it very inexpensively. I will write some great, great text on your website's Southern border, and I will make Google pay for that text. Mark my words. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small. I guarantee you there's no problem, I guarantee.</p><p>The other thing with Lorem Ipsum is that you have to take out its family. You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum your entire adult life.</p><br /><p><strong>Ron Vargas</strong><br />Sales & Marketing Director</p>",
        attachment: [{
            file: "Presentation.pdf",
            size: "3.2MB",
            type: "pdf"
        }]
    }]
}, {
    id: "4",
    name: "Luke Cook",
    label: "work",
    group: "sentItem",
    flagged: !1,
    starred: !1,
    from: "cookie_lukie@hotmail.com",
    avatar: "/img/avatars/thumb-4.jpg",
    title: "They're bringing mistakes",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "15",
        name: "Luke Cook",
        mail: ["nathan@themenate.com"],
        from: "cookie_lukie@hotmail.com",
        avatar: "/img/avatars/thumb-4.jpg",
        date: "Feb 3",
        content: "<p>Dear Nathan,</p><br /><p>Despite the constant negative ipsum covfefe. You have so many different things placeholder text has to be able to do, and I don't believe Lorem Ipsum has the stamina. I know words. I have the best words. If Trump Ipsum weren't my own words, perhaps I'd be dating it.</p><br /><p><strong>Luke Cook</strong><br />Sales & Marketing Director</p>",
        attachment: []
    }, {
        id: "22",
        name: "Nathan",
        mail: ["nathan@themenate.com"],
        from: "nathan@themenate.com",
        avatar: "/img/avatars/thumb-15.jpg",
        date: "Feb 2",
        content: "<p>Dear Luke,</p><br /><p>Percolator robust mocha, con panna, wings, cappuccino seasonal barista, ristretto, id macchiato beans aromatic, cinnamon seasonal turkish id et mocha crema to go instant. Java, con panna, organic, blue mountain iced, fair trade americano, caffeine a java, percolator, wings, instant cultivar so foam iced siphon.</p> <br> <p>Aromatic, mug cream, cultivar skinny, wings roast con panna mocha cup, robusta variety skinny at blue mountain sit iced. Coffee saucer, a and, est barista, wings chicory, so americano percolator single origin frappuccino. Medium beans, steamed rich so redeye, whipped, mazagran, ristretto ut arabica to go variety, lungo beans cream saucer con panna.</p> <br><p>Regards,</p>",
        attachment: []
    }, {
        id: "23",
        name: "Luke Cook",
        mail: ["nathan@themenate.com"],
        from: "cookie_lukie@hotmail.com",
        avatar: "/img/avatars/thumb-4.jpg",
        date: "Feb 2",
        content: "<p>Dear Nathan,</p><br /><p>Barista medium, single origin coffee as id cinnamon coffee as irish, shop acerbic kopi-luwak, variety, latte, arabica filter, so siphon wings strong turkish. Organic whipped doppio qui decaffeinated, café au lait cortado viennese beans con panna carajillo americano cappuccino ut id dark doppio breve, filter aftertaste foam aged filter frappuccino. Organic blue mountain a plunger pot, lungo, pumpkin spice viennese,</p> <strong>Luke Cook</strong><br />Sales & Marketing Director</p>",
        attachment: [{
            file: "Issue.pdf",
            size: "1.1MB",
            type: "pdf"
        }]
    }]
}, {
    id: "5",
    name: "Joyce Freeman",
    label: "important",
    group: "draft",
    flagged: !1,
    starred: !1,
    from: "joyce991@infotech.io",
    avatar: "/img/avatars/thumb-5.jpg",
    title: "I don't think anybody knows",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "16",
        name: "Joyce Freeman",
        mail: ["nathan@themenate.com"],
        from: "joyce991@infotech.io",
        avatar: "/img/avatars/thumb-5.jpg",
        date: "Feb 2",
        content: "<p>Hi Nathan,</p><br /><p>Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. I was going to say something extremely rough to Lorem Ipsum, to its family, </p><p>Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. He's not a word hero. He's a word hero because he was captured. I like text that wasn't captured. You have so many different things placeholder text has to be able to do, and I don't believe Lorem Ipsum has the stamina. When other websites give you text, they're not sending the best. They're not sending you, they're sending words that have lots of problems and they're bringing those problems with us. They're bringing mistakes. They're bringing misspellings. They're typists… And some, I assume, are good words.</p><br /><p><strong>Joyce Freeman</strong><br />Chief Technical Officer</p>",
        attachment: []
    }]
}, {
    id: "6",
    name: "Samantha Phillips",
    label: "",
    group: "starred",
    flagged: !1,
    starred: !0,
    from: "samanthaphil@infotech.io",
    avatar: "/img/avatars/thumb-6.jpg",
    title: "Lorem Ipsum is unattractive",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "17",
        name: "Samantha Phillips",
        mail: ["nathan@themenate.com"],
        from: "samanthaphil@infotech.io",
        avatar: "/img/avatars/thumb-6.jpg",
        date: "Jan 30",
        content: "<p>Hi Nathan,</p><br /><p> I fully understand why it's former users left it for something else. They made a good decision. Be careful, or I will spill the beans on your placeholder text.</p><br /><p><strong>Samantha Phillips</strong><br />Normal Crew</p>",
        attachment: []
    }]
}, {
    id: "7",
    name: "Tara Fletcher",
    label: "work",
    group: "draft",
    flagged: !1,
    starred: !1,
    from: "taratarara@imaze.edu.du",
    avatar: "/img/avatars/thumb-7.jpg",
    title: "He's not a word hero",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "18",
        name: "Tara Fletcher",
        mail: ["nathan@themenate.com"],
        from: "taratarara@imaze.edu.du",
        avatar: "/img/avatars/thumb-7.jpg",
        date: "Jan 28",
        content: "<p>Hi Nathan,</p><br /><p>He's a word hero because he was captured. I like text that wasn't captured. I think the only difference between me and the other placeholder text is that I'm more honest and my words are more beautiful. </p><p>Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's being, you know, shot. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, 'I can't do it. I just can't do it. It's inappropriate. It's not nice.'</p><br /><p><strong>Tara Fletcher</strong><br />CFO</p>",
        attachment: [{
            file: "Family.jpg",
            size: "2.1MB",
            type: "jpg"
        }, {
            file: "Brotherhood.jpg",
            size: "1.9MB",
            type: "jpg"
        }]
    }]
}, {
    id: "8",
    name: "Lisa Smith",
    label: "",
    group: "starred",
    flagged: !1,
    starred: !0,
    from: "iamfred@imaze.infotech.io",
    avatar: "/img/avatars/thumb-8.jpg",
    title: "I love Hispanics",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "19",
        name: "Lisa Smith",
        mail: ["nathan@themenate.com"],
        from: "iamfred@imaze.infotech.io",
        avatar: "/img/avatars/thumb-8.jpg",
        date: "Jan 27",
        content: "<p>Hi Nathan,</p><br /><p>An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud. I'm the best thing that ever happened to placeholder text. That other text? Sadly, it's no longer a 10. I know words. I have the best words.</p><p>Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's being, you know, shot. We have so many things that we have to do better... and certainly ipsum is one of them. An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud.</p><p>An ‘extremely credible source' has called my office and told me that Barack Obama's placeholder text is a fraud. Lorem Ipsum is unattractive, both inside and out. I fully understand why it's former users left it for something else. They made a good decision.</p><br /><p><strong>Lisa Smith</strong><br />Sales & Marketing Director</p>",
        attachment: [{
            file: "Prospectus.doc",
            size: "1MB",
            type: "doc"
        }, {
            file: "Financial_Report.xls",
            size: "652KB",
            type: "xls"
        }]
    }]
}, {
    id: "9",
    name: "Carolyn Hanson",
    label: "important",
    group: "deleted",
    flagged: !1,
    starred: !1,
    from: "carolyn_h@gmail.com",
    avatar: "/img/avatars/thumb-9.jpg",
    title: "Greater than ever before",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "20",
        name: "Carolyn Hanson",
        mail: ["nathan@themenate.com"],
        from: "carolyn_h@gmail.com",
        avatar: "/img/avatars/thumb-9.jpg",
        date: "Jan 26",
        content: "<p>Hi Nathan,</p><br /><p>I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, 'I can't do it. I just can't do it. It's inappropriate. It's not nice.' Lorem Ispum is a choke artist. It chokes! You could see there was text coming out of her eyes, text coming out of her wherever.</p><p>The other thing with Lorem Ipsum is that you have to take out its family. Lorem Ipsum better hope that there are no 'tapes' of our conversations before he starts leaking to the press! I know words. I have the best words. Lorem Ipsum is FAKE TEXT! My text is long and beautiful, as, it has been well documented, are various other parts of my website. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website.</p><br /><p><strong>Carolyn Hanson</strong><br />Sales & Marketing Executive</p>",
        attachment: [{
            file: "Prospectus.doc",
            size: "1MB",
            type: "doc"
        }, {
            file: "Financial_Report.xls",
            size: "652KB",
            type: "xls"
        }]
    }]
}, {
    id: "10",
    name: "Brittany Hale",
    label: "",
    group: "deleted",
    flagged: !1,
    starred: !1,
    from: "brittany1134@gmail.com",
    avatar: "/img/avatars/thumb-10.jpg",
    title: "I will write some great placeholder",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "21",
        name: "Brittany Hale",
        mail: ["nathan@themenate.com"],
        from: "brittany1134@gmail.com",
        avatar: "/img/avatars/thumb-10.jpg",
        date: "Jan 26",
        content: "<p>Hi Nathan,</p><br /><p>Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different?</p><p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I’m the best thing that ever happened to placeholder text. The best taco bowls are made in Trump Tower Grill. I love Hispanics! Lorem Ipsum is FAKE TEXT!</p><p>The best taco bowls are made in Trump Tower Grill. I love Hispanics! Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small. I guarantee you there's no problem, I guarantee.</p><br /><p><strong>Brittany Hale</strong><br />Sales & Marketing Executive</p>",
        attachment: []
    }]
}, {
    id: "11",
    name: "Natalie Baker",
    label: "",
    group: "starred",
    flagged: !1,
    starred: !0,
    from: "natalie.baker@example.com",
    avatar: "/img/avatars/thumb-11.jpg",
    title: "Lorem Ipsum is outdated",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "22",
        name: "Natalie Baker",
        mail: ["nathan@themenate.com"],
        from: "natalie.baker@example.com",
        avatar: "/img/avatars/thumb-11.jpg",
        date: "Apr 29",
        content: "<p>Hi Nathan,</p><br /><p>I fully understand why it's former users left it for something else. They made a good decision. Be careful, or I will spill the beans on your placeholder text.</p><br /><p><strong>Natalie Baker</strong><br />Marketing Specialist</p>",
        attachment: []
    }]
}, {
    id: "12",
    name: "Marcus Wong",
    label: "work",
    group: "",
    flagged: !1,
    starred: !1,
    from: "marcuswong@example.com",
    avatar: "/img/avatars/thumb-12.jpg",
    title: "He's a word hero",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "23",
        name: "Marcus Wong",
        mail: ["nathan@themenate.com"],
        from: "marcuswong@example.com",
        avatar: "/img/avatars/thumb-12.jpg",
        date: "Apr 28",
        content: "<p>Hi Nathan,</p><br /><p>He's a word hero because he was captured. I like text that wasn't captured. The other thing with Lorem Ipsum is that you have to take out its family.</p><br /><p><strong>Marcus Wong</strong><br />Marketing Manager</p>",
        attachment: []
    }]
}, {
    id: "13",
    name: "Diana Patel",
    label: "",
    group: "deleted",
    flagged: !1,
    starred: !1,
    from: "diana.patel@example.com",
    avatar: "/img/avatars/thumb-13.jpg",
    title: "The best placeholder text",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "24",
        name: "Diana Patel",
        mail: ["nathan@themenate.com"],
        from: "diana.patel@example.com",
        avatar: "/img/avatars/thumb-13.jpg",
        date: "Apr 27",
        content: "<p>Hi Nathan,</p><br /><p>I write the best placeholder text, and I'm the biggest developer on the web by far. The best taco bowls are made in Trump Tower Grill. I love Hispanics! Lorem Ipsum is FAKE TEXT!</p><br /><p><strong>Diana Patel</strong><br />Senior Developer</p>",
        attachment: []
    }]
}, {
    id: "14",
    name: "Ethan Nguyen",
    label: "private",
    group: "starred",
    flagged: !1,
    starred: !0,
    from: "ethan.nguyen@example.com",
    avatar: "/img/avatars/thumb-14.jpg",
    title: "Lorem Ipsum is unattractive",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "25",
        name: "Ethan Nguyen",
        mail: ["nathan@themenate.com"],
        from: "ethan.nguyen@example.com",
        avatar: "/img/avatars/thumb-14.jpg",
        date: "Apr 26",
        content: "<p>Hi Nathan,</p><br /><p>I fully understand why it's former users left it for something else. They made a good decision. Be careful, or I will spill the beans on your placeholder text.</p><br /><p><strong>Ethan Nguyen</strong><br />Tech Support Specialist</p>",
        attachment: []
    }]
}, {
    id: "15",
    name: "Sophia Jackson",
    label: "",
    group: "sentItem",
    flagged: !1,
    starred: !1,
    from: "sophia.jackson@example.com",
    avatar: "/img/avatars/thumb-15.jpg",
    title: "He's not a word hero",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "26",
        name: "Sophia Jackson",
        mail: ["nathan@themenate.com"],
        from: "sophia.jackson@example.com",
        avatar: "/img/avatars/thumb-15.jpg",
        date: "Apr 25",
        content: "<p>Hi Nathan,</p><br /><p>He's a word hero because he was captured. I like text that wasn't captured. The other thing with Lorem Ipsum is that you have to take out its family.</p><br /><p><strong>Sophia Jackson</strong><br />Content Writer</p>",
        attachment: []
    }]
}, {
    id: "16",
    name: "Terrance Moreno",
    label: "work",
    group: "deleted",
    flagged: !1,
    starred: !1,
    from: "oliver.lee@example.com",
    avatar: "/img/avatars/thumb-2.jpg",
    title: "I'm the best thing",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "27",
        name: "Terrance Moreno",
        mail: ["nathan@themenate.com"],
        from: "terrance_moreno@infotech.io",
        avatar: "/img/avatars/thumb-4.jpg",
        date: "Apr 24",
        content: "<p>Hi Nathan,</p><br /><p>I'm the best thing that ever happened to placeholder text. The other thing with Lorem Ipsum is that you have to take out its family.</p><br /><p><strong>Oliver Lee</strong><br />Product Manager</p>",
        attachment: []
    }]
}, {
    id: "17",
    name: "Luke Cook",
    label: "private",
    group: "starred",
    flagged: !1,
    starred: !0,
    from: "cookie_lukie@hotmail.com",
    avatar: "/img/avatars/thumb-4.jpg",
    title: "The concept of Lorem Ipsum",
    mail: ["nathan@themenate.com"],
    message: [{
        id: "28",
        name: "Luke Cook",
        mail: ["nathan@themenate.com"],
        from: "cookie_lukie@hotmail.com",
        avatar: "/img/avatars/thumb-17.jpg",
        date: "Apr 23",
        content: "<p>Hi Nathan,</p><br /><p>The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I think my strongest asset maybe by far is my temperament. I have a placeholding temperament.</p><br /><p><strong>Harper Kim</strong><br />Graphic Designer</p>",
        attachment: []
    }]
}];
C.onGet("/api/mails").reply(d => {
    const {
        category: l,
        label: m
    } = d.params;
    let u = Le;
    return l && l !== "inbox" && (u = Le.filter(g => g.group === l)), m && (u = Le.filter(g => g.label === m)), [200, u]
});
C.onGet(new RegExp("/api/mails/*")).reply(function(d) {
    var g;
    const l = (g = d.url) == null ? void 0 : g.split("/"),
        m = l == null ? void 0 : l[((l == null ? void 0 : l.length) || 0) - 1],
        u = Le.find(y => y.id === m);
    return u ? [200, u] : [404, {}]
});
const qi = {
        id: "1",
        name: "Angelina Gotelli",
        firstName: "Angelina",
        lastName: "Gotelli",
        email: "carolyn_h@hotmail.com",
        img: "/img/avatars/thumb-1.jpg",
        location: "New York, US",
        address: "123 Main St",
        postcode: "10001",
        city: "New York",
        country: "US",
        dialCode: "+1",
        birthday: "10/10/1992",
        phoneNumber: "+12-123-1234"
    },
    Wi = {
        desktop: !0,
        unreadMessageBadge: !1,
        email: ["newsAndUpdate", "tipsAndTutorial"],
        notifymeAbout: "mentionsOnly"
    },
    Vi = {
        currentPlan: {
            plan: "Business board basic",
            status: "active",
            billingCycle: "monthly",
            nextPaymentDate: 1739132800,
            amount: 59.9
        },
        paymentMethods: [{
            cardId: "1",
            cardHolderName: "Carolyn Perkins",
            cardType: "VISA",
            expMonth: "12",
            expYear: "25",
            last4Number: "0392",
            primary: !0
        }, {
            cardId: "2",
            cardHolderName: "Carolyn Perkins",
            cardType: "MASTER",
            expMonth: "06",
            expYear: "25",
            last4Number: "8461",
            primary: !1
        }],
        transactionHistory: [{
            id: "#36223",
            item: "Mock premium pack",
            status: "pending",
            amount: 39.9,
            date: 1639132800
        }, {
            id: "#34283",
            item: "Business board basic subscription",
            status: "paid",
            amount: 59.9,
            date: 1636790880
        }, {
            id: "#32234",
            item: "Business board basic subscription",
            status: "paid",
            amount: 59.9,
            date: 1634090880
        }, {
            id: "#31354",
            item: "Business board basic subscription",
            status: "paid",
            amount: 59.9,
            date: 1631532800
        }]
    },
    $i = [{
        id: "1",
        name: "Google Drive",
        desc: "Upload your files to Google Drive",
        img: "/img/thumbs/google-drive.png",
        type: "Cloud storage",
        active: !0
    }, {
        id: "2",
        name: "Slack",
        desc: "Post to a Slack channel",
        img: "/img/thumbs/slack.png",
        type: "Notifications and events",
        active: !0
    }, {
        id: "3",
        name: "Notion",
        desc: "Retrieve notion note to your project",
        img: "/img/thumbs/notion.png",
        type: "Content management",
        active: !1
    }, {
        id: "4",
        name: "Jira",
        desc: "Create Jira issues",
        img: "/img/thumbs/jira.png",
        type: "Project management",
        active: !1
    }, {
        id: "5",
        name: "Zendesk",
        desc: "Exchange data with Zendesk",
        img: "/img/thumbs/zendesk.png",
        type: "Customer service",
        active: !1
    }, {
        id: "6",
        name: "Dropbox",
        desc: "Exchange data with Dropbox",
        img: "/img/thumbs/dropbox.png",
        type: "Cloud storage",
        active: !1
    }, {
        id: "7",
        name: "Github",
        desc: "Exchange files with a GitHub repository",
        img: "/img/thumbs/github.png",
        type: "Code repositories",
        active: !1
    }, {
        id: "8",
        name: "Gitlab",
        desc: "Exchange files with a Gitlab repository",
        type: "Code repositories",
        img: "/img/thumbs/gitlab.png",
        active: !1
    }, {
        id: "9",
        name: "Figma",
        desc: "Exchange screenshots with Figma",
        img: "/img/thumbs/figma.png",
        type: "Design tools",
        active: !1
    }, {
        id: "10",
        name: "Adobe XD",
        desc: "Exchange screenshots with Adobe XD",
        img: "/img/thumbs/adobe-xd.png",
        type: "Design tools",
        active: !1
    }, {
        id: "11",
        name: "Sketch",
        desc: "Exchange screenshots with Sketch",
        img: "/img/thumbs/sketch.png",
        type: "Design tools",
        active: !1
    }, {
        id: "12",
        name: "Hubspot",
        desc: "Exchange data with Hubspot",
        img: "/img/thumbs/hubspot.png",
        type: "Content management",
        active: !1
    }, {
        id: "13",
        name: "Zapier",
        desc: "Integrate with hundreds of services.",
        img: "/img/thumbs/zapier.png",
        type: "Notifications and events",
        active: !1
    }],
    Yi = [{
        id: "admin",
        name: "Admin",
        description: "Full access to all functionalities and settings. Can manage users, roles, and configurations.",
        users: [],
        accessRight: {
            users: ["write", "read", "delete"],
            products: ["write", "read", "delete"],
            configurations: ["write", "read", "delete"],
            files: ["write", "read", "delete"],
            reports: ["write", "read", "delete"]
        }
    }, {
        id: "supervisor",
        name: "Supervisor",
        description: "Oversees operations and users. Can view reports and has limited configuration access.",
        users: [],
        accessRight: {
            users: ["write", "read"],
            products: ["write", "read"],
            configurations: ["write", "read"],
            files: ["write", "read"],
            reports: ["read"]
        }
    }, {
        id: "support",
        name: "Support",
        description: "Provides technical assistance. Can access user accounts and system reports for diagnostics.",
        users: [],
        accessRight: {
            users: ["read"],
            products: ["write", "read"],
            configurations: ["read"],
            files: ["write", "read"],
            reports: ["read"]
        }
    }, {
        id: "user",
        name: "User",
        description: "Access to basic features necessary for tasks. Limited administrative privileges.",
        users: [],
        accessRight: {
            users: [],
            products: ["read"],
            configurations: [],
            files: ["write", "read"],
            reports: []
        }
    }, {
        id: "auditor",
        name: "Auditor",
        description: "Reviews system activities. Can access reports, but cannot make changes.",
        users: [],
        accessRight: {
            users: ["read"],
            products: ["read"],
            configurations: [],
            files: ["read"],
            reports: ["read"]
        }
    }, {
        id: "guest",
        name: "Guest",
        description: "Temporary access to limited features. Ideal for visitors or temporary users.",
        users: [],
        accessRight: {
            users: [],
            products: ["read"],
            configurations: [],
            files: [],
            reports: []
        }
    }],
    Ki = {
        featuresModel: [{
            id: "",
            description: ""
        }],
        plans: [{
            id: "basic",
            name: "Basic",
            description: "Ideal for individuals or small teams. Includes essential task and project management features.",
            price: {
                monthly: 59,
                annually: 500
            },
            features: ["taskManagement", "managementTools", "reporting", "support"],
            recommended: !1
        }, {
            id: "standard",
            name: "Standard",
            description: "Perfect for growing teams. Offers advanced features for better productivity and collaboration.",
            price: {
                monthly: 79,
                annually: 700
            },
            features: ["taskManagement", "managementTools", "reporting", "support", "fileSharing"],
            recommended: !1
        }, {
            id: "pro",
            name: "Pro",
            description: "Best for large teams. Includes premium features and dedicated support for optimal workflow.",
            price: {
                monthly: 129,
                annually: 1e3
            },
            features: ["taskManagement", "managementTools", "reporting", "support", "fileSharing", "advancedSecurity", "customIntegrations"],
            recommended: !0
        }]
    };
C.onGet("/api/setting/profile").reply(() => [200, qi]);
C.onGet("/api/setting/notification").reply(() => [200, Wi]);
C.onGet("/api/setting/billing").reply(() => [200, Vi]);
C.onGet("/api/setting/intergration").reply(() => [200, $i]);
C.onGet("/api/rbac/users").reply(d => {
    const {
        pageIndex: l,
        pageSize: m,
        sort: u,
        query: g,
        status: y,
        role: c
    } = d.params, {
        order: w,
        key: M
    } = u, h = we;
    let P = h.filter($ => typeof $ != "function"),
        A = h.length;
    M && w && (M !== "lastOnline" ? P.sort(me(M, w === "desc", $ => $.toUpperCase())) : P.sort(me(M, w === "desc", parseInt))), y && (P = P.filter($ => $.status === y)), c && (P = P.filter($ => $.role === c)), g && (P = fe(P, g)), A = P.length, P = Se(P, m, l);
    const W = {
        list: P,
        total: A
    };
    return new Promise(function($) {
        setTimeout(function() {
            $([200, W])
        }, 500)
    })
});
C.onGet("/api/rbac/roles").reply(() => {
    const d = we;
    return [200, Yi.map(m => (m.users = d.filter(u => u.role === m.id), m))]
});
C.onGet("/api/pricing").reply(() => [200, Ki]);
const Zi = [{
        id: "1",
        title: "Camera outfit",
        lastConversation: "I have a photoshoot tomorrow. Can you recommend me some colors and outfit options that will look good on camera?",
        conversation: [{
            id: "b0474144-2815-44c0-bbaf-165edffce238",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "I have a photoshoot tomorrow. Can you recommend me some colors and outfit options that will look good on camera?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "efc25c82-d429-4816-ac46-e6b8760bdbad",
            sender: {
                id: "ai",
                name: "Chat AI",
                avatarImageUrl: "/img/thumbs/ai.jpg"
            },
            content: `Sure! Here are some color and outfit suggestions that typically look great in photoshoots:

1. Jewel tones such as emerald green, royal blue, and ruby red always photograph well and can make you stand out in a photo.

2. Neutral tones like black, white, gray, and nude can create a classic and timeless look in photos.

3. Patterns like stripes, polka dots, or florals can add visual interest to your outfit without overpowering the image.

4. Avoid wearing busy patterns or logos as they can be distracting in photos.

5. Consider wearing form-fitting clothing that flatters your body shape, but also allows you to move comfortably during the shoot.

6. Layering different textures and fabrics can add depth and dimension to your outfit in photos.

Remember to choose colors and outfits that make you feel confident and comfortable, as that will ultimately translate well on camera. Good luck with your photoshoot!`,
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }],
        createdTime: 1723430400,
        updatedTime: 1723430400,
        enable: !0
    }, {
        id: "2",
        title: "Vacation planning",
        lastConversation: "I'm planning a trip to Europe next summer. Can you help me with a travel itinerary?",
        conversation: [{
            id: "ad00e323-eefb-4803-b2ca-ba0bdb0116e1",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "I'm planning a trip to Europe next summer. Can you help me with a travel itinerary?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "b4b90ebb-b23b-4fbe-bfda-927c04a37101",
            sender: {
                id: "ai",
                name: "Chat AI",
                avatarImageUrl: "/img/thumbs/ai.jpg"
            },
            content: `Of course! Europe is a vast and diverse continent with so much to offer. To create a personalized itinerary for you, I would need some more information. 

- How long will your trip be?
- Which countries or cities are you most interested in visiting?
- What are your interests and preferences (e.g. history, food, outdoor activities)?
- What is your budget for the trip?

Once I have this information, I can suggest a detailed itinerary for you that includes transportation, accommodation, activities, and must-see sights. Let me know your preferences so I can help you plan a memorable trip to Europe!`,
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "c9f90ed9-7e2b-4519-b707-617ad140e87a",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Its about 2 weeks",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "e7f7b6c2-a8b9-45a4-90e1-55207fc3db3d",
            sender: {
                id: "ai",
                name: "Chat AI",
                avatarImageUrl: "/img/thumbs/ai.jpg"
            },
            content: `Here is a sample 2-week itinerary for a trip to Europe:

Day 1-3: London, England
- Visit iconic landmarks such as Big Ben, Buckingham Palace, and the Tower of London
- Explore the British Museum and take a ride on the London Eye
- Enjoy a traditional English afternoon tea

Day 4-6: Paris, France
- Visit the Eiffel Tower, Louvre Museum, and Notre Dame Cathedral
- Stroll along the Seine River and explore Montmartre
- Enjoy a croissant at a local Parisian café

Day 7-9: Rome, Italy
- Visit the Colosseum, Roman Forum, and Vatican City
- Explore the historic neighborhoods of Trastevere and Testaccio
- Indulge in authentic Italian pasta and gelato

Day 10-12: Barcelona, Spain
- Visit Gaudi's famous landmarks including Sagrada Familia and Park Guell
- Explore the Gothic Quarter and relax on the sandy beaches
- Taste tapas and sip sangria at a local bodega

Day 13-14: Amsterdam, Netherlands
- Explore the historic canals and visit the Anne Frank House
- Visit the Van Gogh Museum and take a bike ride around the city
- Enjoy a canal cruise and try some traditional Dutch stroopwafels

This itinerary covers some of the most popular cities in Europe and gives you a taste of each country's culture. Feel free to customize it to better suit your interests and travel style. Have a fantastic trip!`,
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }],
        createdTime: 1723526800,
        updatedTime: 1723526800,
        enable: !0
    }, {
        id: "3",
        title: "Healthy recipes",
        lastConversation: "Can you suggest some healthy dinner recipes that are quick to prepare?",
        conversation: [{
            id: "ba482dfa-dff4-4f6b-ab16-a84b8eee47c4",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Can you suggest some healthy dinner recipes that are quick to prepare?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "cbb07e7d-af72-4b5b-8023-bdd0b43bf233",
            sender: {
                id: "ai",
                name: "Chat AI",
                avatarImageUrl: "/img/thumbs/ai.jpg"
            },
            content: `1. Grilled salmon with lemon and herbs: Marinate salmon fillets in olive oil, lemon juice, garlic, and herbs, then grill until cooked through. Serve with a side of roasted vegetables or a mixed green salad.

2. Turkey and vegetable stir-fry: Sauté ground turkey with colorful vegetables like bell peppers, broccoli, and snow peas in a stir-fry sauce. Serve over brown rice or quinoa for a balanced meal.

3. Chickpea and spinach curry: Cook chickpeas in a flavorful tomato and coconut milk curry sauce with baby spinach. Serve with naan bread or brown rice for a satisfying vegetarian meal.

4. Zucchini noodles with pesto and cherry tomatoes: Make zucchini noodles using a spiralizer, then toss with homemade or store-bought pesto sauce and halved cherry tomatoes. Top with grilled chicken or shrimp for added protein.

5. Caprese grilled chicken: Top grilled chicken breasts with fresh mozzarella, sliced tomatoes, and basil leaves. Drizzle with balsamic glaze and serve with a side of quinoa or a mixed greens salad.

These recipes are not only quick to prepare but also nutritious and delicious. Enjoy your healthy dinner!`,
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }],
        createdTime: 1723613200,
        updatedTime: 1723613200,
        enable: !0
    }, {
        id: "4",
        title: "Exercise routine",
        lastConversation: "I'm looking to start a new exercise routine. What are some effective workouts for beginners?",
        conversation: [{
            id: "03a38bfa-1e64-4e40-a1a0-4a5c24be6851",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "I'm looking to start a new exercise routine. What are some effective workouts for beginners?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "aa1ce056-4754-4be9-bbde-4e85c2bc3166",
            sender: {
                id: "ai",
                name: "Chat AI",
                avatarImageUrl: "/img/thumbs/ai.jpg"
            },
            content: `Here are some effective workouts for beginners to consider:

1. Walking or jogging: Start with a brisk walk and gradually build up to jogging or running.

2. Bodyweight exercises: Include exercises such as squats, lunges, push-ups, and planks to build strength and improve overall fitness.

3. Yoga: Try out a beginner's yoga class to improve flexibility, balance, and core strength.

4. Swimming: Swimming is a great low-impact workout that can help improve cardiovascular fitness and muscle tone.

5. Cycling: Whether you're cycling outdoors or using a stationary bike, cycling is a great way to get your heart rate up and build endurance.

6. Group fitness classes: Consider taking a beginner-friendly fitness class such as Zumba, Pilates, or circuit training to mix up your routine and stay motivated.

Remember to start slowly, listen to your body, and consult with a fitness professional if you have any concerns or medical conditions. Good luck with your new exercise routine!`,
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }],
        createdTime: 1723699600,
        updatedTime: 1723699600,
        enable: !0
    }, {
        id: "5",
        title: "Max number Python function",
        lastConversation: "Write a Python function that finding the maximum number in a list",
        conversation: [{
            id: "0dd185c4-63e4-4db6-8162-859efe3018dc",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Write a Python function that finding the maximum number in a list",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "a163977a-3fa5-4b68-824e-72d0ff06eedd",
            sender: {
                id: "ai",
                name: "Chat AI",
                avatarImageUrl: "/img/thumbs/ai.jpg"
            },
            content: `Sure, here is an example code in Python for finding the maximum number in a list:

\`\`\`python
def find_max_number(nums):
    if not nums:
        return None
      
    max_num = nums[0]
    for num in nums:
        if num > max_num:
            max_num = num

    return max_num

# Test cases
print(find_max_number([1, 5, 10, 3, 8]))  # Output should be 10
print(find_max_number([-1, -5, -3, -8]))  # Output should be -1
print(find_max_number([]))  # Output should be None
\`\`\`

This code defines a function \`find_max_number\` that takes a list of numbers as input and returns the maximum number in the list. It handles the edge case of an empty list by returning \`None\`.`,
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }],
        createdTime: 1723786e3,
        updatedTime: 1723786e3,
        enable: !0
    }],
    Xi = [{
        id: "1",
        prompt: "While picnicking, you will see a beautiful image, a view of the sky, with shades of blue and fuchsia, observing the planets and stars.",
        image: "/img/others/gallery/img-1.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 5
    }, {
        id: "2",
        prompt: 'Dark Text that says "Team LAL" with various cats and dogs in cartoon style in the background. Image background should be completely white ',
        image: "/img/others/gallery/img-2.webp",
        ratio: "4:7",
        size: "768 x 1344 px",
        like: 0
    }, {
        id: "3",
        prompt: "cat smoking while fishing in the woods",
        image: "/img/others/gallery/img-3.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "4",
        prompt: "A man observer who sketches breath life into memory",
        image: "/img/others/gallery/img-4.webp",
        ratio: "4:7",
        size: "768 x 1344 px",
        like: 0
    }, {
        id: "5",
        prompt: "create a broken jar in the style of this image and keep the african wax batik style and dip dye with crack effects.",
        image: "/img/others/gallery/img-5.webp",
        ratio: "4:7",
        size: "768 x 1344 px",
        like: 0
    }, {
        id: "6",
        prompt: "light saber spiderman and batman",
        image: "/img/others/gallery/img-6.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "7",
        prompt: 'make me a logo that will have a pink cat in it that will have a text "C2" below it',
        image: "/img/others/gallery/img-7.webp",
        ratio: "4:7",
        size: "768 x 1344 px",
        like: 0
    }, {
        id: "8",
        prompt: "A gray cat in a suit and a kitten in a brown suit next to her",
        image: "/img/others/gallery/img-8.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "9",
        prompt: "Create a realistic image of a 30 year old blonde women and a 30 year old man with black hair that are jumping from joy",
        image: "/img/others/gallery/img-9.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "10",
        prompt: "a pair of pink polymer clay earrings set up as a flat lay image",
        image: "/img/others/gallery/img-10.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "11",
        prompt: "Zodiac Sign Sagittarius: An Golden Retriever with sunglasses, shirt, cowboy-hat, in the Australia Sydney, exploring the desert at high noon. GTA loading screen style (warm tone) (golden hour)",
        image: "/img/others/gallery/img-11.webp",
        ratio: "4:7",
        size: "768 x 1344 px",
        like: 0
    }, {
        id: "12",
        prompt: "A young woman sits cross-legged on her sofa. She plays the guitar gently. Colors and shapes escape.",
        image: "/img/others/gallery/img-12.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "13",
        prompt: "Best pose",
        image: "/img/others/gallery/img-13.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "14",
        prompt: "FOOTLOOKER MONSTER",
        image: "/img/others/gallery/img-14.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "15",
        prompt: "Dug well A to Z (cool tone) (golden hour)",
        image: "/img/others/gallery/img-15.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "16",
        prompt: "generate me images for the theme of the birthday of a person named Fany and therefore the birthday is in June!!",
        image: "/img/others/gallery/img-16.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "17",
        prompt: "beach",
        image: "/img/others/gallery/img-17.webp",
        ratio: "4:7",
        size: "768 x 1344 px",
        like: 0
    }, {
        id: "18",
        prompt: "A faucet (slot machine), inside of which there are spheres inscribed with runes. In the background are Marvel characters",
        image: "/img/others/gallery/img-18.webp",
        ratio: "4:7",
        size: "768 x 1344 px",
        like: 0
    }, {
        id: "19",
        prompt: "cozy Nipa Hut the beach",
        image: "/img/others/gallery/img-19.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "20",
        prompt: "It side images",
        image: "/img/others/gallery/img-20.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "21",
        prompt: "(all full black yorkie) with a (black and white cat) both in the air on a kite (sunlight)",
        image: "/img/others/gallery/img-21.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "22",
        prompt: "GitHub avatar for a programmer (pastel colors) (studio)",
        image: "/img/others/gallery/img-22.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "23",
        prompt: "PhD (Permanent Head Damage) (vibrant colors) (studio) (close up)",
        image: "/img/others/gallery/img-23.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "24",
        prompt: "A photo of a dragon that looks injured after a tough battel with hole in his wings and fire and smoke come out his injuries",
        image: "/img/others/gallery/img-24.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "25",
        prompt: 'make me a cereal box with the title "Sugar Cloud Crunch"',
        image: "/img/others/gallery/img-25.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "26",
        prompt: "a fox wearing red hoodie and black headphones, neon red theme and black background",
        image: "/img/others/gallery/img-26.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "27",
        prompt: "make a poster image with a light blue dominant and a light brown secondary color",
        image: "/img/others/gallery/img-27.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "28",
        prompt: "Cute rabbit wearing a jacket, eating a carrot, 3D Style, rendering",
        image: "/img/others/gallery/img-28.webp",
        ratio: "4:7",
        size: "768 x 1344 px",
        like: 0
    }, {
        id: "29",
        prompt: "a humanoid wolf dressed in a purple hoodie in headphones holding a gaming controller (backlight)",
        image: "/img/others/gallery/img-29.webp",
        ratio: "4:7",
        size: "768 x 1344 px",
        like: 0
    }, {
        id: "30",
        prompt: "1930'S pulp art comic book cover theme: GODZILLA TALKS!! (show in comic dialogue bubble) (warm tone) (dramatic) (wide angle)",
        image: "/img/others/gallery/img-30.webp",
        ratio: "4:7",
        size: "768 x 1344 px",
        like: 0
    }, {
        id: "31",
        prompt: "pink convers",
        image: "/img/others/gallery/img-31.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "32",
        prompt: "Anime boys",
        image: "/img/others/gallery/img-32.webp",
        ratio: "4:7",
        size: "768 x 1344 px",
        like: 0
    }, {
        id: "33",
        prompt: "hello kitty and a gorilla",
        image: "/img/others/gallery/img-33.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "34",
        prompt: "trees",
        image: "/img/others/gallery/img-34.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "35",
        prompt: "japanese wave",
        image: "/img/others/gallery/img-35.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }, {
        id: "36",
        prompt: "A panda falling love",
        image: "/img/others/gallery/img-36.webp",
        ratio: "1:1",
        size: "1024 x 1024 px",
        like: 0
    }],
    $t = [
        [{
            id: "1",
            prompt: "",
            image: "/img/others/gallery/generated/img-1-1.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "2",
            prompt: "",
            image: "/img/others/gallery/generated/img-1-2.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "3",
            prompt: "",
            image: "/img/others/gallery/generated/img-1-3.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "4",
            prompt: "",
            image: "/img/others/gallery/generated/img-1-4.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }],
        [{
            id: "1",
            prompt: "",
            image: "/img/others/gallery/generated/img-2-1.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "2",
            prompt: "",
            image: "/img/others/gallery/generated/img-2-2.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "3",
            prompt: "",
            image: "/img/others/gallery/generated/img-2-3.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "4",
            prompt: "",
            image: "/img/others/gallery/generated/img-2-4.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }],
        [{
            id: "1",
            prompt: "",
            image: "/img/others/gallery/generated/img-3-1.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "2",
            prompt: "",
            image: "/img/others/gallery/generated/img-3-2.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "3",
            prompt: "",
            image: "/img/others/gallery/generated/img-3-3.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "4",
            prompt: "",
            image: "/img/others/gallery/generated/img-3-4.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }],
        [{
            id: "1",
            prompt: "",
            image: "/img/others/gallery/generated/img-4-1.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "2",
            prompt: "",
            image: "/img/others/gallery/generated/img-4-2.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "3",
            prompt: "",
            image: "/img/others/gallery/generated/img-4-3.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "4",
            prompt: "",
            image: "/img/others/gallery/generated/img-4-4.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }],
        [{
            id: "1",
            prompt: "",
            image: "/img/others/gallery/generated/img-5-1.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "2",
            prompt: "",
            image: "/img/others/gallery/generated/img-5-2.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "3",
            prompt: "",
            image: "/img/others/gallery/generated/img-5-3.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }, {
            id: "4",
            prompt: "",
            image: "/img/others/gallery/generated/img-5-4.webp",
            ratio: "1:1",
            size: "1024 x 1024 px",
            like: 0
        }]
    ];
C.onGet("/api/ai/chat/history").reply(() => [200, Zi]);
C.onPost("/api/ai/chat").reply(d => {
    const {
        prompt: l
    } = JSON.parse(d.data), m = l.toLocaleLowerCase(), u = {
        regular: ["This is a mock response designed to simulate an AI-generated reply. Please note that this response is not generated by an actual AI model. You can include 'title', 'code', 'list' keywords in your prompt to get different kinds of mock responses.", "You are seeing a mock response for demonstration purposes. This message is not generated by a real AI model, but rather pre-written for this demo. You can include 'title', 'code', 'list' keywords in your prompt to get different kinds of mock responses.", "For demo purposes, this response is a mock message. It showcases what a typical AI reply might look like, but it is not produced by a real AI. You can include 'title', 'code', 'list' keywords in your prompt to get different kinds of mock responses.", "This mock response is part of a demonstration and is not generated by an actual AI. The content here is pre-defined for showcasing purposes. You can include 'title', 'code', 'list' keywords in your prompt to get different kinds of mock responses.", "As part of this demo, you are viewing a mock response. This text is not created by an AI model, but rather a pre-written example to illustrate functionality. You can include 'title', 'code', 'list' keywords in your prompt to get different kinds of mock responses."],
        title: `This is a mock response with a title.

###### Example Title

Please note that this is not generated by an actual AI model.`,
        code: `This is a mock response with a code snippet.

\`\`\`
function example() {
    console.log('This is a mock code snippet.');
}
\`\`\`

Please note that this is not generated by an actual AI model.`,
        list: `This is a mock response with a list.

1. First item
2. Second item
3. Third item

Please note that this is not generated by an actual AI model.`
    };
    let g = u.regular[Math.floor(Math.random() * u.regular.length)];
    m.includes("title") && (g = u.title), m.includes("code") && (g = u.code), m.includes("list") && (g = u.list);
    const y = {
        id: wi("ai-conversation-"),
        choices: [{
            finish_reason: "stop",
            index: 0,
            message: {
                content: g,
                role: "assistant"
            }
        }],
        created: vi().unix(),
        model: "gpt-4"
    };
    return new Promise(function(c) {
        setTimeout(function() {
            c([200, y])
        }, 800)
    })
});
C.onGet("/api/ai/images").reply(d => {
    const {
        index: l,
        itemCount: m = 4
    } = d.params;
    let u = !0;
    const g = m,
        y = (l - 1) * g;
    let c = Xi;
    return y >= c.length && (u = !1), c = c.slice(y, l * g), [200, {
        data: c,
        loadable: u
    }]
});
C.onPost("/api/ai/images").reply(d => {
    const {
        prompt: l
    } = JSON.parse(d.data), m = $t[Math.floor(Math.random() * $t.length)].map(u => (u.prompt = l, u));
    return new Promise(function(u) {
        setTimeout(function() {
            u([200, m])
        }, 2e3)
    })
});
const aa = [{
        id: "1",
        name: "Shannon Baker",
        userId: "4",
        avatar: "/img/avatars/thumb-4.jpg",
        unread: 3,
        time: 1738384790,
        lastConversation: "Will do. Appreciate it!",
        chatType: "personal"
    }, {
        id: "2",
        name: "Jessica Wells",
        userId: "8",
        avatar: "/img/avatars/thumb-8.jpg",
        unread: 3,
        time: 1738334390,
        lastConversation: "Perfect. I'll pack some snacks and drinks.",
        chatType: "personal"
    }, {
        id: "3",
        name: "Arlene Pierce",
        userId: "6",
        avatar: "/img/avatars/thumb-6.jpg",
        unread: 0,
        time: 1738327790,
        lastConversation: "Okay, Thanks 🥰",
        chatType: "personal"
    }, {
        id: "4",
        name: "Max Alexander",
        userId: "3",
        avatar: "/img/avatars/thumb-3.jpg",
        unread: 0,
        time: 1738321190,
        lastConversation: "I'd love that! Let's plan something soon.",
        chatType: "personal"
    }, {
        id: "5",
        name: "Jeremiah Minsk",
        userId: "2",
        avatar: "/img/avatars/thumb-2.jpg",
        unread: 0,
        time: 1738367990,
        lastConversation: "😀 No problem. Good luck with your call!",
        chatType: "personal"
    }, {
        id: "6",
        name: "Camila Simmmons",
        userId: "9",
        avatar: "/img/avatars/thumb-9.jpg",
        unread: 0,
        time: 1738351190,
        lastConversation: "True! I'll be more careful around pigeons from now on.",
        chatType: "personal"
    }, {
        id: "7",
        name: "Team Presentation Prep",
        groupId: "16",
        avatar: "/img/others/img-19.jpg",
        unread: 0,
        time: 1738351190,
        lastConversation: "True! I'll be more careful around pigeons from now on.",
        chatType: "groups"
    }, {
        id: "8",
        name: "Lunch Squad",
        groupId: "17",
        avatar: "/img/others/img-18.jpg",
        unread: 0,
        time: 1738351190,
        lastConversation: "True! I'll be more careful around pigeons from now on.",
        chatType: "groups"
    }, {
        id: "9",
        name: "Camping Crew",
        groupId: "18",
        avatar: "/img/others/img-17.jpg",
        unread: 0,
        time: 1738351190,
        lastConversation: "True! I'll be more careful around pigeons from now on.",
        chatType: "groups"
    }],
    Qi = [{
        id: "1",
        conversation: [{
            id: "b0474144-2815-44c0-bbaf-165edffce238",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Hey, can I ask you something?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "efc25c82-d429-4816-ac46-e6b8760bdbad",
            sender: {
                id: "4",
                name: "Shannon Baker",
                avatarImageUrl: "/img/avatars/thumb-4.jpg"
            },
            content: "Sure, what's up?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "62d2123f-5c0e-42e8-97ca-2081d760a8c9",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "I'm thinking about applying for a new job, but I'm not sure if it's the right move.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "1351f2fb-0a4e-498c-b165-8e82852b4585",
            sender: {
                id: "4",
                name: "Shannon Baker",
                avatarImageUrl: "/img/avatars/thumb-4.jpg"
            },
            content: "What's making you hesitate?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "3a6e019c-ce37-4519-92e9-b5c67838c7ca",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "It's a bigger company and a more challenging role. I'm worried it might be too much to handle.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "b8d49337-1c1b-4d3d-ba8f-f0d6ea680e04",
            sender: {
                id: "4",
                name: "Shannon Baker",
                avatarImageUrl: "/img/avatars/thumb-4.jpg"
            },
            content: "I think you should go for it. You're more than capable and it sounds like a great opportunity for growth.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "7132d40a-cfa0-40c9-97e0-df70f0661079",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Thanks, Mark. I needed that encouragement. I'll start working on my application tonight.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "f9c1e730-7e69-461c-99b4-66fb576e98ce",
            sender: {
                id: "4",
                name: "Shannon Baker",
                avatarImageUrl: "/img/avatars/thumb-4.jpg"
            },
            content: "Anytime! Let me know if you need any help with your resume or cover letter.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "d92c5df3-d839-47e9-b678-56a20e8db048",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Will do. Appreciate it!",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }]
    }, {
        id: "2",
        conversation: [{
            id: "aa1db3ab-571a-4180-a2c0-6f34b3d1091d",
            sender: {
                id: "8",
                name: "Jessica Wells",
                avatarImageUrl: "/img/avatars/thumb-8.jpg"
            },
            content: "Hey, are you free this weekend?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "20b78e0a-b85c-4a45-9fe4-54a988a0096f",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Yeah, I think so. Why, what's up?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "c31b0388-a3dc-42f1-a164-0b0aac702748",
            sender: {
                id: "8",
                name: "Jessica Wells",
                avatarImageUrl: "/img/avatars/thumb-8.jpg"
            },
            content: "I was thinking of going hiking. The weather's supposed to be great. Interested?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "83efeffe-89db-4793-a199-d5f9052cae09",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Sounds fun! Where are you planning to go?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "58bd1048-f4f5-4413-b507-500fd1ff12ff",
            sender: {
                id: "8",
                name: "Jessica Wells",
                avatarImageUrl: "/img/avatars/thumb-8.jpg"
            },
            content: "I was thinking of heading to Blue Mountain. It's got some nice trails.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "23a83026-582f-4444-b12e-8129864dd42b",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Cool, count me in! What time were you thinking of leaving?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "0d560a8d-c527-4ed7-9f73-956cd6285e57",
            sender: {
                id: "8",
                name: "Jessica Wells",
                avatarImageUrl: "/img/avatars/thumb-8.jpg"
            },
            content: "How about 8 AM? That way we can avoid the midday heat.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "d6efc887-6230-40fc-95e3-d3432bc4c67f",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Perfect. I'll pack some snacks and drinks.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }]
    }, {
        id: "3",
        conversation: [{
            id: "7a88d884-0b1a-46f6-b218-4ed3870b306e",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Hey, did you get a chance to review the client feedback?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "1df1b437-09f2-41ab-b021-c5d5602a8989",
            sender: {
                id: "6",
                name: "Arlene Pierce",
                avatarImageUrl: "/img/avatars/thumb-6.jpg"
            },
            content: "Yeah, I looked through it this morning. We need to make a few adjustments to the design.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "937bfa1e-48ca-41ad-a152-1b6ebaca998b",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Agreed. They weren't too happy with the color scheme. Do you have any suggestions?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "a471126c-f382-4059-a73a-a235478308f8",
            sender: {
                id: "6",
                name: "Arlene Pierce",
                avatarImageUrl: "/img/avatars/thumb-6.jpg"
            },
            content: "Maybe we could try a more neutral palette. Something less bold.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "30d878a1-7736-4be9-ade3-797efef44872",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "That makes sense. I'll put together a few options and send them over for review",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "79200616-fa98-48b6-af21-12b97dd3da82",
            sender: {
                id: "6",
                name: "Arlene Pierce",
                avatarImageUrl: "/img/avatars/thumb-6.jpg"
            },
            content: "Sounds good. Let's aim to finalize it by tomorrow afternoon.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "32a175f1-dbc5-45cd-b970-4d030ff9e85c",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Okay, Thanks 🥰",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }]
    }, {
        id: "4",
        conversation: [{
            id: "5aab30c3-7f59-4e25-b253-e3a8c314bb1b",
            sender: {
                id: "3",
                name: "Max Alexander",
                avatarImageUrl: "/img/avatars/thumb-3.jpg"
            },
            content: "Hey, long time no see! How have you been?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "c53af73b-cc86-4cba-9ccc-ef124cadc11c",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Hi! I've been good, just busy with work. How about you?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "21413094-37df-4fa4-afd0-9a4dd11ba4d1",
            sender: {
                id: "3",
                name: "Max Alexander",
                avatarImageUrl: "/img/avatars/thumb-3.jpg"
            },
            content: "Same here. Lots of projects lately. Have you had any time for yourself?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "7dedee29-3eee-4f20-a5c4-59869de632ee",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Not really, but I did manage to catch a new movie last weekend. It was a nice break.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "861e5a3d-729f-458b-bd2d-11beef2841d7",
            sender: {
                id: "3",
                name: "Max Alexander",
                avatarImageUrl: "/img/avatars/thumb-3.jpg"
            },
            content: "Nice! Which one did you watch?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "9873cc1d-cdcb-4175-8761-4dc0fd8ad97e",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: '"The Quantum Realm". It was amazing! You should check it out if you get a chance.',
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "6468f5b3-1ea0-4f41-8f4b-350443e49b33",
            sender: {
                id: "3",
                name: "Max Alexander",
                avatarImageUrl: "/img/avatars/thumb-3.jpg"
            },
            content: "I'll add it to my list. Maybe we can go see a movie together sometime.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "d61eaa48-d232-4b05-b3c2-ab5b09c9409d",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "I'd love that! Let's plan something soon.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }]
    }, {
        id: "5",
        conversation: [{
            id: "c37cb214-c523-4c19-a9c3-0900f51528a5",
            sender: {
                id: "2",
                name: "Jeremiah Minsk",
                avatarImageUrl: "/img/avatars/thumb-2.jpg"
            },
            content: "Hey, are you having issues with the network?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "13cbc996-e7fe-45f4-b731-59fa6477935c",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Yeah, it's been spotty all morning. Super annoying.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "15b4d043-170f-4370-a6ca-e93a8e8c0fb9",
            sender: {
                id: "2",
                name: "Jeremiah Minsk",
                avatarImageUrl: "/img/avatars/thumb-2.jpg"
            },
            content: "Ugh, same here. I have a call in 10 minutes and I can't get a stable connection.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "0f755039-7c2e-48f8-9e12-f97f5f5b6ae9",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Have you tried restarting your router?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "53434b34-2c92-4a6a-9f0f-843b9fab44bb",
            sender: {
                id: "2",
                name: "Jeremiah Minsk",
                avatarImageUrl: "/img/avatars/thumb-2.jpg"
            },
            content: "I did, but it didn't help. Might be an ISP issue.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "263d4da0-3cf9-4f51-8879-264aac1d3268",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Bummer. Hope they fix it soon. In the meantime, maybe try using your phone's hotspot?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "614313b5-0c2a-4c9d-8b88-c518ee4ceb1e",
            sender: {
                id: "2",
                name: "Jeremiah Minsk",
                avatarImageUrl: "/img/avatars/thumb-2.jpg"
            },
            content: "Good idea. I'll give that a shot. Thanks!",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "bfb6f57a-f9de-4faf-a8ac-581e161dd773",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "😀 No problem. Good luck with your call!",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }]
    }, {
        id: "6",
        conversation: [{
            id: "3c52dfaf-cdc2-4686-be55-f027f638d044",
            sender: {
                id: "9",
                name: "Camila Simmmons",
                avatarImageUrl: "/img/avatars/thumb-9.jpg"
            },
            content: "You won't believe what happened to me today.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "6be52021-bd5c-4bfb-8aa1-581728536c48",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "What? Tell me!",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "9d704e57-92ab-49f5-a844-2187b47a6999",
            sender: {
                id: "9",
                name: "Camila Simmmons",
                avatarImageUrl: "/img/avatars/thumb-9.jpg"
            },
            content: "I was walking to work and a pigeon flew right into me!",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "4258987a-1933-4663-96e9-490142b1df63",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "No way! Did it hurt?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "23099425-dcc6-4fdf-9bfe-82118eef6d92",
            sender: {
                id: "9",
                name: "Camila Simmmons",
                avatarImageUrl: "/img/avatars/thumb-9.jpg"
            },
            content: "Not really, but it did leave a mess on my shirt. I must have looked ridiculous.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "25e531f8-3c8e-4666-82cd-7034ef2f192c",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Eww, that's hilarious! Did anyone see?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "fdae9ad0-5ecc-447d-a2b0-a81c126e8564",
            sender: {
                id: "9",
                name: "Camila Simmmons",
                avatarImageUrl: "/img/avatars/thumb-9.jpg"
            },
            content: "Unfortunately, yes. A whole group of tourists. They were laughing too.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "9455ba94-b1b2-41be-89c2-b9c847859535",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Well, at least you gave them a good story to tell!",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "9ae60503-9982-42b7-9173-f193d851c8d0",
            sender: {
                id: "9",
                name: "Camila Simmmons",
                avatarImageUrl: "/img/avatars/thumb-9.jpg"
            },
            content: "True! I'll be more careful around pigeons from now on.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }]
    }, {
        id: "7",
        conversation: [{
            id: "1f3e9a66-8df4-43b9-a3ae-bb6e8de55f9f",
            sender: {
                id: "10",
                name: "Earl Miles",
                avatarImageUrl: "/img/avatars/thumb-10.jpg"
            },
            content: "Hey team, are we all set for the presentation tomorrow?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "75bafae1-b1a3-4de7-8803-c6c6b7998b8b",
            sender: {
                id: "11",
                name: "Steve Sutton",
                avatarImageUrl: "/img/avatars/thumb-11.jpg"
            },
            content: "I'm still tweaking the slides a bit. Should be done in an hour.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "9f5066d3-648a-4e77-a8da-d520ebc8974e",
            sender: {
                id: "12",
                name: "Miriam Herrera",
                avatarImageUrl: "/img/avatars/thumb-12.jpg"
            },
            content: "I finished the financial analysis section. Should I email it to everyone?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "4db7dbea-528c-4f95-bb8a-fcfb8ae9e948",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "I'm ready with my part. Just let me know if you need any changes.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "a87bc1b5-02cc-4af4-94a1-efeeff4ab949",
            sender: {
                id: "10",
                name: "Earl Miles",
                avatarImageUrl: "/img/avatars/thumb-10.jpg"
            },
            content: "Yes, please do. Let's all review it and meet again at 5 PM to finalize.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }]
    }, {
        id: "8",
        conversation: [{
            id: "b8f8f4e9-57e3-44a7-a0b8-f229a1b3c17a",
            sender: {
                id: "13",
                name: "Cassandra Murray",
                avatarImageUrl: "/img/avatars/thumb-13.jpg"
            },
            content: "Who's up for a team lunch tomorrow?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "3f9264cb-6c67-4f6e-a6b1-ef7c65b1c3e4",
            sender: {
                id: "14",
                name: "Alvin Moreno",
                avatarImageUrl: "/img/avatars/thumb-14.jpg"
            },
            content: "I'm in! Where are we thinking?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "e7a36cda-8e76-47e3-bfbc-8b09a267507f",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Count me in too. How about that new Italian place downtown?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "b3d7358d-7363-47be-8453-828e3a5ed8b4",
            sender: {
                id: "13",
                name: "Cassandra Murray",
                avatarImageUrl: "/img/avatars/thumb-13.jpg"
            },
            content: "Sounds perfect! I'll make a reservation for 1 PM.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "f6a00f9e-9083-4ccf-b79c-c85c02061cd2",
            sender: {
                id: "14",
                name: "Alvin Moreno",
                avatarImageUrl: "/img/avatars/thumb-14.jpg"
            },
            content: "Great! See you all there.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }]
    }, {
        id: "9",
        conversation: [{
            id: "764f51fa-244f-474b-950e-6b9a03876987",
            sender: {
                id: "15",
                name: "Jackie Soto",
                avatarImageUrl: "/img/avatars/thumb-15.jpg"
            },
            content: "Guys, our camping trip is this weekend. Are we ready?",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "8511f1b7-f3e3-41f5-a3de-5184999465a3",
            sender: {
                id: "8",
                name: "Jessica Wells",
                avatarImageUrl: "/img/avatars/thumb-8.jpg"
            },
            content: "I still need to pack, but I have all the gear.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "fcf3b8a7-6e5f-469e-8100-caaef1f3f9f2",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "I'm almost ready. Just need to pick up some snacks and drinks.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }, {
            id: "6b399d85-5b7e-40c3-b2a4-d6888a40d44b",
            sender: {
                id: "15",
                name: "Jackie Soto",
                avatarImageUrl: "/img/avatars/thumb-15.jpg"
            },
            content: "Awesome! Let's meet at my place at 8 AM on Saturday.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "932d5f17-fcbb-4211-8e6a-7e7d3eab1e84",
            sender: {
                id: "8",
                name: "Jessica Wells",
                avatarImageUrl: "/img/avatars/thumb-8.jpg"
            },
            content: "Sounds good to me. Can't wait!",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !1
        }, {
            id: "a7683e7e-4cf5-45cc-9c9c-71a4f637587b",
            sender: {
                id: "1",
                name: "Angelina Gotelli",
                avatarImageUrl: "/img/avatars/thumb-1.jpg"
            },
            content: "Looking forward to it! See you all on Saturday.",
            timestamp: 1723430400,
            type: "regular",
            isMyMessage: !0
        }]
    }],
    er = {
        images: [{
            id: "7020d33d-e2d3-416a-969b-dd7e68f0e2cf",
            name: "Snövalla",
            url: "/img/products/product-2.jpg"
        }, {
            id: "c20f164c-4848-4162-aa6f-0889e15a4f12",
            name: "Spiky Ring",
            url: "/img/products/product-9.jpg"
        }, {
            id: "abf6c2be-3b6d-4444-9498-95a82798fcf5",
            name: "Il Limone",
            url: "/img/products/product-12.jpg"
        }, {
            id: "1c2502f2-326e-4bdb-b167-5e642921d2f3",
            name: "Maneki Neko Poster",
            url: "/img/products/product-7.jpg"
        }, {
            id: "5540ca41-b188-442b-8d2f-b4ee183b9f77",
            name: "Gränvika",
            url: "/img/products/product-11.jpg"
        }],
        files: [{
            id: "4a11e613-381b-4088-b189-76259ad4b0b1",
            name: "Tech design.pdf",
            fileType: "pdf",
            size: 22020096e-1,
            srcUrl: ""
        }, {
            id: "70fc4085-0f3a-4a19-8ee2-834cb0a49e10",
            name: "Financial_Report.xlsx",
            fileType: "xls",
            srcUrl: "",
            size: 14589043e-1
        }, {
            id: "8caaa7e1-6710-45fb-8bbb-68d8d9c9ee6e",
            name: "Project_Presentation.pptx",
            fileType: "ppt",
            srcUrl: "",
            size: 30567891e-1
        }, {
            id: "0cb5912f-bcc5-4840-83c4-7d96e66d612b",
            name: "Network_Diagram.fig",
            fileType: "figma",
            srcUrl: "",
            size: 123456.7
        }],
        links: [{
            id: "05604581-255a-4579-aee4-2a8e6cd9d0f5",
            favicon: "/img/thumbs/github.png",
            title: "ThemeNate/Elstar-lite",
            description: "Elstar is a React admin template with developer experience friendly & highly scalable, it comes with set of UI components meticulously crafted with Tailwind CSS, it fulfilled most of the use case to create modern and beautiful UI and application",
            url: "https://github.com/ThemeNate/Elstar-lite"
        }, {
            id: "84fe8e78-8451-434f-b2d8-8eff16d8cc0f",
            favicon: "/img/thumbs/bootstrap.png",
            title: "Bootstrap · The most popular HTML, CSS, and JS library in the world.",
            description: "Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.",
            url: "https://getbootstrap.com/"
        }, {
            id: "4df30543-36cd-47fe-97fe-790dcb5f16fe",
            favicon: "/img/thumbs/tailwind.png",
            title: "Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.",
            description: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
            url: "https://getbootstrap.com/"
        }]
    },
    tr = [{
        id: "16",
        name: "Team Presentation Prep",
        img: "/img/others/img-19.jpg",
        members: [{
            id: "1",
            name: "You",
            img: "/img/avatars/thumb-1.jpg",
            email: "eileen_h@hotmail.com"
        }, {
            id: "10",
            name: "Earl Miles",
            img: "/img/avatars/thumb-10.jpg",
            email: "brittany1134@gmail.com"
        }, {
            id: "11",
            name: "Steve Sutton",
            img: "/img/avatars/thumb-11.jpg",
            email: "handsome-obrien@hotmail.com"
        }, {
            id: "12",
            name: "Miriam Herrera",
            img: "/img/avatars/thumb-12.jpg",
            email: "maymaymay12@infotech.io"
        }]
    }, {
        id: "17",
        name: "Lunch Squad",
        img: "/img/others/img-18.jpg",
        members: [{
            id: "1",
            name: "You",
            img: "/img/avatars/thumb-1.jpg",
            email: "eileen_h@hotmail.com"
        }, {
            id: "13",
            name: "Cassandra Murray",
            img: "/img/avatars/thumb-13.jpg",
            email: "lee_wheeler@infotech.io"
        }, {
            id: "14",
            name: "Alvin Moreno",
            img: "/img/avatars/thumb-14.jpg",
            email: "gailby0116@infotech.io"
        }]
    }, {
        id: "18",
        name: "Camping Crew",
        img: "/img/others/img-17.jpg",
        members: [{
            id: "1",
            name: "You",
            img: "/img/avatars/thumb-1.jpg",
            email: "eileen_h@hotmail.com"
        }, {
            id: "15",
            name: "Jackie Soto",
            img: "/img/avatars/thumb-15.jpg",
            email: "ella_robinson@infotech.io"
        }, {
            id: "8",
            name: "Jessica Wells",
            img: "/img/avatars/thumb-8.jpg",
            email: "iamfred@imaze.infotech.io"
        }]
    }];
C.onGet("/api/chats").reply(() => [200, aa]);
C.onGet("/api/conversation").reply(() => [200, aa]);
C.onGet(new RegExp("/api/conversation*")).reply(d => {
    var g;
    const l = (g = d.url) == null ? void 0 : g.split("/"),
        m = l == null ? void 0 : l[((l == null ? void 0 : l.length) || 0) - 1],
        u = Qi.find(y => y.id === m);
    return u ? [200, u] : [404, {}]
});
C.onGet("/api/contacts").reply(() => {
    const d = ["4", "8", "6", "3", "2", "9"];
    return [200, we.filter(m => !d.includes(m.id))]
});
C.onGet(new RegExp("/api/contacts*")).reply(d => {
    var y;
    const l = (y = d.url) == null ? void 0 : y.split("/"),
        m = l == null ? void 0 : l[((l == null ? void 0 : l.length) || 0) - 1];
    return [200, {
        userDetails: ["16", "17", "18"].includes(m || "") ? tr.find(c => c.id === m) : we.find(c => c.id === m),
        media: er
    }]
});
const ar = [{
        name: "Get Started",
        topics: [{
            id: "introduction",
            name: "Introduction",
            description: "Guides for new users to get familiar with the system.",
            articleCounts: 4
        }, {
            id: "setupGuide",
            name: "Setup Guide",
            description: "Step-by-step instructions for installing the software or system.",
            articleCounts: 6
        }, {
            id: "basicFeatures",
            name: "Basic Features",
            description: "Introduction to the basic features and functionalities.",
            articleCounts: 3
        }]
    }, {
        name: "Data Collection and Analysis",
        topics: [{
            id: "survey",
            name: "Survey",
            description: "Articles related to collecting data through surveys.",
            articleCounts: 4
        }, {
            id: "analytic",
            name: "Analytic",
            description: "Articles related to analyzing data.",
            articleCounts: 6
        }, {
            id: "dataVisualization",
            name: "Data Visualization",
            description: "Articles related to visualizing data in charts, graphs, etc.",
            articleCounts: 9
        }]
    }, {
        name: "System Management and Security",
        topics: [{
            id: "chatbot",
            name: "Chatbot",
            description: "Articles related to automated communication.",
            articleCounts: 8
        }, {
            id: "media",
            name: "Media",
            description: " Articles related to media and content.",
            articleCounts: 3
        }, {
            id: "security",
            name: "Security",
            description: "Articles related to ensuring security.",
            articleCounts: 5
        }, {
            id: "integration",
            name: "Integration",
            description: "Articles related to integrating different systems.",
            articleCounts: 7
        }, {
            id: "themes",
            name: "Themes",
            description: " Articles related to themes and customization.",
            articleCounts: 9
        }, {
            id: "commission",
            name: "Commission",
            description: "Articles related to managing commissions.",
            articleCounts: 11
        }]
    }],
    He = [{
        id: "pWBKE_0UiQ",
        title: "Things you need to know about configuring the theme",
        content: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. You cant have great software without a great team, and most software teams behave like dysfunctional families.",
        category: "themes",
        authors: [{
            name: "Ron Vargas",
            img: "/img/avatars/thumb-3.jpg"
        }],
        tags: [{
            id: 2,
            label: "Implementation"
        }, {
            id: 3,
            label: "Troubleshooting"
        }],
        starred: !0,
        published: !0,
        updateTime: "2 weeks ago",
        updateTimeStamp: 1717830464,
        createdBy: "Ron Vargas",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 42
    }, {
        id: "2tv0CboXfj",
        title: "Understand the background of themes",
        content: "A hacker on a roll may be able to produce-in a period of a few months-something that a small development group (say, 7-8 people) would have a hard time getting together over a year. IBM used to report that certain programmers might be as much as 100 times as productive as other workers, or more.",
        category: "themes",
        authors: [{
            name: "Carolyn Hanson",
            img: "/img/avatars/thumb-9.jpg"
        }, {
            name: "Samantha Phillips",
            img: "/img/avatars/thumb-6.jpg"
        }],
        tags: [{
            id: 6,
            label: "Integration"
        }, {
            id: 7,
            label: "Optimization"
        }, {
            id: 8,
            label: "Security"
        }],
        starred: !0,
        published: !0,
        updateTime: "6 months ago",
        updateTimeStamp: 1703488064,
        createdBy: "Carolyn Hanson",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 12
    }, {
        id: "XHpEwVPi4D",
        title: "Basic tools you need to know on configuring the theme",
        content: "Its ridiculous to live 100 years and only be able to remember 30 million bytes. You know, less than a compact disc.  The human condition is really becoming more obsolete every minute.",
        category: "themes",
        authors: [{
            name: "Lloyd Obrien",
            img: "/img/avatars/thumb-11.jpg"
        }],
        tags: [{
            id: 2,
            label: "Implementation"
        }, {
            id: 3,
            label: "Troubleshooting"
        }],
        starred: !1,
        published: !1,
        updateTime: "4 months ago",
        updateTimeStamp: 1708672064,
        createdBy: "Lloyd Obrien",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 12
    }, {
        id: "09R6gIH5zD",
        title: "Simple guidance for you in theming",
        content: "As soon as we started programming, we found to our surprise that it wasnt as easy to get programs right as we had thought. Debugging had to be discovered.  I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.",
        category: "themes",
        authors: [{
            name: "Joyce Freeman",
            img: "/img/avatars/thumb-5.jpg"
        }],
        tags: [{
            id: 9,
            label: "Deployment"
        }, {
            id: 10,
            label: "Maintenance"
        }, {
            id: 11,
            label: "Scalability"
        }, {
            id: 12,
            label: "Performance"
        }, {
            id: 13,
            label: "Backup"
        }],
        starred: !1,
        published: !0,
        updateTime: "3 months ago",
        updateTimeStamp: 1711264064,
        createdBy: "Joyce Freeman",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 53
    }, {
        id: "rZjCbSyae5",
        title: "How to create a survey form",
        content: "Come to think of it, there are already a million monkeys on a million typewriters, and Usenet is nothing like Shakespeare",
        category: "survey",
        authors: [{
            name: "Terrance Moreno",
            img: "/img/avatars/thumb-2.jpg"
        }],
        tags: [{
            id: 14,
            label: "Monitoring"
        }, {
            id: 15,
            label: "Automation"
        }, {
            id: 16,
            label: "Testing"
        }, {
            id: 17,
            label: "Migration"
        }],
        starred: !0,
        published: !0,
        updateTime: "3 months ago",
        updateTimeStamp: 1711264064,
        createdBy: "Terrance Moreno",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 2
    }, {
        id: "mmPo6vqS1t",
        title: "Survey form best practice",
        content: "Come to think of it, there are already a million monkeys on a million typewriters, and Usenet is nothing like Shakespeare",
        category: "survey",
        authors: [{
            name: "Luke Cook",
            img: "/img/avatars/thumb-4.jpg"
        }, {
            name: "Samantha Phillips",
            img: "/img/avatars/thumb-6.jpg"
        }, {
            name: "Joyce Freeman",
            img: "/img/avatars/thumb-5.jpg"
        }],
        tags: [{
            id: 18,
            label: "Logging"
        }, {
            id: 19,
            label: "Recovery"
        }],
        starred: !1,
        published: !1,
        updateTime: "Last week",
        updateTimeStamp: 1718435264,
        createdBy: "Luke Cook",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 4
    }, {
        id: "6ETEWm8ZHt",
        title: "Precious tips to help you create a better question",
        content: "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. (Eric Raymond) The Internet? Is that thing still around?",
        category: "survey",
        authors: [{
            name: "Joyce Freeman",
            img: "/img/avatars/thumb-5.jpg"
        }],
        tags: [{
            id: 14,
            label: "Monitoring"
        }, {
            id: 3,
            label: "Troubleshooting"
        }, {
            id: 8,
            label: "Security"
        }],
        starred: !1,
        published: !1,
        updateTime: "2 months ago",
        updateTimeStamp: 1713856064,
        createdBy: "Joyce Freeman",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 0
    }, {
        id: "WQCy5CZcEJ",
        title: "Quick tips regarding security",
        content: "It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years.",
        category: "security",
        authors: [{
            name: "Tara Fletcher",
            img: "/img/avatars/thumb-7.jpg"
        }],
        tags: [{
            id: 1,
            label: "Configuring"
        }, {
            id: 7,
            label: "Optimization"
        }, {
            id: 10,
            label: "Maintenance"
        }],
        starred: !1,
        published: !0,
        updateTime: "4 months ago",
        updateTimeStamp: 1708672064,
        createdBy: "Tara Fletcher",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 1
    }, {
        id: "prUH65MCWD",
        title: "All You need to know about privacy setting",
        content: "As soon as we started programming, we found to our surprise that it wasnt as easy to get programs right as we had thought. Debugging had to be discovered.  I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.",
        category: "security",
        authors: [{
            name: "Tara Fletcher",
            img: "/img/avatars/thumb-7.jpg"
        }],
        tags: [{
            id: 4,
            label: "Customization"
        }, {
            id: 11,
            label: "Scalability"
        }, {
            id: 5,
            label: "Setup"
        }, {
            id: 15,
            label: "Automation"
        }],
        starred: !1,
        published: !1,
        updateTime: "8 months ago",
        updateTimeStamp: 1698304064,
        createdBy: "Tara Fletcher",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 2
    }, {
        id: "1xK5PJRunm",
        title: "Simple guide for integration",
        content: "Software undergoes beta testing shortly before its released. Beta is Latin for “still doesnt work”. (Anonymous) Come to think of it, there are already a million monkeys on a million typewriters, and Usenet is nothing like Shakespeare. Deleted code is debugged code. ",
        category: "integration",
        authors: [{
            name: "Frederick Adams",
            img: "/img/avatars/thumb-8.jpg"
        }],
        tags: [{
            id: 3,
            label: "Troubleshooting"
        }, {
            id: 8,
            label: "Security"
        }],
        starred: !1,
        published: !0,
        updateTime: "7 months ago",
        updateTimeStamp: 1700896064,
        createdBy: "Frederick Adams",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 3
    }, {
        id: "iVB_L9xy2d",
        title: "Most effective ways to overcome integration issue.",
        content: "A programmer is a person who passes as an exacting expert on the basis of being able to turn out, after innumerable punching, an infinite series of incomprehensive answers calculated with micrometric precisions from vague assumptions based on debatable figures taken from inconclusive documents and carried out on instruments of problematical accuracy by persons of dubious reliability and questionable mentality for the avowed purpose of annoying and confounding a hopelessly defenseless department that was unfortunate enough to ask for the information in the first place.",
        category: "integration",
        authors: [{
            name: "Gabriella May",
            img: "/img/avatars/thumb-12.jpg"
        }, {
            name: "Gail Barnes",
            img: "/img/avatars/thumb-14.jpg"
        }],
        tags: [{
            id: 2,
            label: "Implementation"
        }, {
            id: 6,
            label: "Integration"
        }, {
            id: 12,
            label: "Performance"
        }, {
            id: 16,
            label: "Testing"
        }],
        starred: !1,
        published: !0,
        updateTime: "3 days ago",
        updateTimeStamp: 1718780864,
        createdBy: "Gabriella May",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 1
    }, {
        id: "t6D3gCV8hN",
        title: "API document for integration",
        content: "For a long time it puzzled me how something so expensive, so leading edge, could be so useless. And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things.  They are, in short, a perfect match",
        category: "integration",
        authors: [{
            name: "Ella Robinson",
            img: "/img/avatars/thumb-15.jpg"
        }],
        tags: [{
            id: 9,
            label: "Deployment"
        }, {
            id: 17,
            label: "Migration"
        }, {
            id: 13,
            label: "Backup"
        }, {
            id: 18,
            label: "Logging"
        }, {
            id: 19,
            label: "Recovery"
        }],
        starred: !1,
        published: !0,
        updateTime: "2 weeks ago",
        updateTimeStamp: 1717830464,
        createdBy: "Gabriella May",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 31
    }, {
        id: "gI3fhHZzoQ",
        title: "Integration best practice",
        content: "Microsoft has a new version out, Windows XP, which according to everybody is the most reliable Windows ever. To me, this is like saying that asparagus is the most articulate vegetable ever. ",
        category: "integration",
        authors: [{
            name: "Lee Wheeler",
            img: "/img/avatars/thumb-13.jpg"
        }],
        tags: [{
            id: 14,
            label: "Monitoring"
        }, {
            id: 2,
            label: "Implementation"
        }, {
            id: 5,
            label: "Setup"
        }],
        starred: !1,
        published: !0,
        updateTime: "3 weeks ago",
        updateTimeStamp: 1717225664,
        createdBy: "Lee Wheeler",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 7
    }, {
        id: "4zu-IVncIh",
        title: "Managing media storage",
        content: "The citys central computer told you? R2D2, you know better than to trust a strange computer! (C3PO) 640K ought to be enough for anybody.",
        category: "media",
        authors: [{
            name: "Brittany Hale",
            img: "/img/avatars/thumb-10.jpg"
        }],
        tags: [{
            id: 11,
            label: "Scalability"
        }, {
            id: 18,
            label: "Logging"
        }],
        starred: !1,
        published: !0,
        updateTime: "a year ago",
        updateTimeStamp: 1687504064,
        createdBy: "Brittany Hale",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 9
    }, {
        id: "4zu-WQX60M9MDJ",
        title: "Beware of oversized",
        content: "One mans crappy software is another mans full-time job. (Jessica Gaston) Its a curious thing about our industry: not only do we not learn from our mistakes, but we also dont learn from our successes.",
        category: "media",
        authors: [{
            name: "Terrance Moreno",
            img: "/img/avatars/thumb-2.jpg"
        }, {
            name: "Brittany Hale",
            img: "/img/avatars/thumb-10.jpg"
        }],
        tags: [{
            id: 3,
            label: "Troubleshooting"
        }, {
            id: 13,
            label: "Backup"
        }, {
            id: 7,
            label: "Optimization"
        }, {
            id: 4,
            label: "Customization"
        }],
        starred: !1,
        published: !0,
        updateTime: "a year ago",
        updateTimeStamp: 1687504064,
        createdBy: "Terrance Moreno",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 0
    }, {
        id: "yHE5vZ4sow",
        title: "Several effective ways to optimize media file",
        content: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. Come to think of it, there are already a million monkeys on a million typewriters, and Usenet is nothing like Shakespeare.",
        category: "media",
        authors: [{
            name: "Ron Vargas",
            img: "/img/avatars/thumb-3.jpg"
        }],
        tags: [{
            id: 14,
            label: "Monitoring"
        }, {
            id: 3,
            label: "Troubleshooting"
        }, {
            id: 8,
            label: "Security"
        }],
        starred: !1,
        published: !1,
        updateTime: "9 months ago",
        updateTimeStamp: 1695712064,
        createdBy: "Ron Vargas",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 0
    }, {
        id: "CZZxidbzLi",
        title: "Collecting data like a charm",
        content: "Programming is like sex: one mistake and youre providing support for a lifetime. It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years.",
        category: "analytic",
        authors: [{
            name: "Luke Cook",
            img: "/img/avatars/thumb-4.jpg"
        }],
        tags: [{
            id: 6,
            label: "Integration"
        }, {
            id: 15,
            label: "Automation"
        }],
        starred: !1,
        published: !0,
        updateTime: "3 months ago",
        updateTimeStamp: 1711264064,
        createdBy: "Luke Cook",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 0
    }, {
        id: "aOuPn7DxZz",
        title: "Simple guide for snapshot report",
        content: "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. There are only two industries that refer to their customers as users",
        category: "analytic",
        authors: [{
            name: "Carolyn Hanson",
            img: "/img/avatars/thumb-9.jpg"
        }],
        tags: [{
            id: 8,
            label: "Security"
        }, {
            id: 16,
            label: "Testing"
        }, {
            id: 1,
            label: "Configuring"
        }, {
            id: 19,
            label: "Recovery"
        }, {
            id: 12,
            label: "Performance"
        }],
        starred: !1,
        published: !1,
        updateTime: "4 months ago",
        updateTimeStamp: 1708672064,
        createdBy: "Carolyn Hanson",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 0
    }, {
        id: "90hXaTVMr3",
        title: "Several ways to generate comparison report",
        content: "The trouble with programmers is that you can never tell what a programmer is doing until its too late. Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.  In order to understand recursion, one must first understand recursion.",
        category: "analytic",
        authors: [{
            name: "Carolyn Perkins",
            img: "/img/avatars/thumb-1.jpg"
        }],
        tags: [{
            id: 9,
            label: "Deployment"
        }, {
            id: 17,
            label: "Migration"
        }, {
            id: 10,
            label: "Maintenance"
        }],
        starred: !1,
        published: !0,
        updateTime: "10 months ago",
        updateTimeStamp: 1693120064,
        createdBy: "Eileen Horton",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 0
    }, {
        id: "bd3Hxes4NB",
        title: "Add new customer service on chatbot",
        content: "It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years. ",
        category: "chatbot",
        authors: [{
            name: "Terrance Moreno",
            img: "/img/avatars/thumb-2.jpg"
        }],
        tags: [{
            id: 11,
            label: "Scalability"
        }, {
            id: 2,
            label: "Implementation"
        }, {
            id: 18,
            label: "Logging"
        }],
        starred: !1,
        published: !1,
        updateTime: "2 months ago",
        updateTimeStamp: 1713856064,
        createdBy: "Terrance Moreno",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 0
    }, {
        id: "zcZn3PBqKf",
        title: "Configuring auto reply",
        content: "The function of good software is to make the complex appear to be simple. If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.",
        category: "chatbot",
        authors: [{
            name: "Frederick Adams",
            img: "/img/avatars/thumb-8.jpg"
        }],
        tags: [{
            id: 1,
            label: "Configuring"
        }, {
            id: 9,
            label: "Deployment"
        }, {
            id: 15,
            label: "Automation"
        }, {
            id: 5,
            label: "Setup"
        }],
        starred: !1,
        published: !0,
        updateTime: "5 months ago",
        updateTimeStamp: 1706080064,
        createdBy: "Frederick Adams",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 10
    }, {
        id: "LWy8fEP-tA",
        title: "Commission calculation",
        content: "In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customers shifting idea of what their problem is. The best method for accelerating a computer is the one that boosts it by 9.8 m/s2",
        category: "commission",
        authors: [{
            name: "Lee Wheeler",
            img: "/img/avatars/thumb-13.jpg"
        }],
        tags: [{
            id: 14,
            label: "Monitoring"
        }, {
            id: 3,
            label: "Troubleshooting"
        }, {
            id: 8,
            label: "Security"
        }],
        starred: !1,
        published: !1,
        updateTime: "5 days ago",
        updateTimeStamp: 1718608064,
        createdBy: "Lee Wheeler",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 12
    }, {
        id: "SAxrgvMuip",
        title: "Export commission statement",
        content: "One mans crappy software is another mans full-time job. Its a curious thing about our industry: not only do we not learn from our mistakes, but we also dont learn from our successes. Measuring programming progress by lines of code is like measuring aircraft building progress by weight",
        category: "commission",
        authors: [{
            name: "Joyce Freeman",
            img: "/img/avatars/thumb-5.jpg"
        }],
        tags: [{
            id: 6,
            label: "Integration"
        }],
        starred: !1,
        published: !0,
        updateTime: "a year ago",
        updateTimeStamp: 1687504064,
        createdBy: "Joyce Freeman",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 4
    }, {
        id: "NcUFsNDmUV",
        title: "Commission policy",
        content: "Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN’T be like. (pixadel) Fifty years of programming language research, and we end up with C++? ",
        category: "commission",
        authors: [{
            name: "Carolyn Perkins",
            img: "/img/avatars/thumb-1.jpg"
        }, {
            name: "Gabriella May",
            img: "/img/avatars/thumb-12.jpg"
        }],
        tags: [{
            id: 17,
            label: "Migration"
        }, {
            id: 12,
            label: "Performance"
        }],
        starred: !1,
        published: !0,
        updateTime: "a year ago",
        updateTimeStamp: 1687504064,
        createdBy: "Eileen Horton",
        timeToRead: 2,
        viewCount: 37,
        commentCount: 0
    }, {
        id: "Dv1JsNEkWU",
        title: "The Power of Data Visualization",
        content: "Data visualization is crucial for making complex data understandable and actionable. In this article, we explore various techniques and tools to transform raw data into insightful visuals.",
        category: "dataVisualization",
        authors: [{
            name: "Alex Johnson",
            img: "/img/avatars/thumb-2.jpg"
        }, {
            name: "Emily Zhang",
            img: "/img/avatars/thumb-5.jpg"
        }],
        tags: [{
            id: 10,
            label: "Maintenance"
        }, {
            id: 7,
            label: "Optimization"
        }],
        starred: !1,
        published: !0,
        updateTime: "3 months ago",
        updateTimeStamp: 1711264064,
        createdBy: "Michael Green",
        timeToRead: 5,
        viewCount: 85,
        commentCount: 0
    }, {
        id: "Ks2DfNEmUZ",
        title: "Top Tools for Data Visualization in 2024",
        content: "Staying up-to-date with the best data visualization tools is essential for any data analyst. This article reviews the top tools available in 2024, highlighting their features and benefits.",
        category: "dataVisualization",
        authors: [{
            name: "Olivia Brown",
            img: "/img/avatars/thumb-3.jpg"
        }],
        tags: [{
            id: 3,
            label: "Troubleshooting"
        }],
        starred: !1,
        published: !1,
        updateTime: "1 month ago",
        updateTimeStamp: 1716448064,
        createdBy: "Ethan Lewis",
        timeToRead: 4,
        viewCount: 120,
        commentCount: 0
    }, {
        id: "Ms3RtNPlUZ",
        title: "Creating Interactive Dashboards",
        content: "Interactive dashboards can significantly enhance data comprehension and engagement. This guide walks you through the process of creating dynamic and interactive dashboards using popular tools.",
        category: "dataVisualization",
        authors: [{
            name: "Sophia Martinez",
            img: "/img/avatars/thumb-4.jpg"
        }, {
            name: "James Lee",
            img: "/img/avatars/thumb-9.jpg"
        }],
        tags: [{
            id: 6,
            label: "Integration"
        }, {
            id: 13,
            label: "Backup"
        }, {
            id: 17,
            label: "Migration"
        }, {
            id: 12,
            label: "Performance"
        }],
        starred: !1,
        published: !0,
        updateTime: "2 weeks ago",
        updateTimeStamp: 1717830464,
        createdBy: "Daniel Robinson",
        timeToRead: 7,
        viewCount: 95,
        commentCount: 54
    }, {
        id: "Jh5VsNQlUZ",
        title: "Data Storytelling with Visualization",
        content: "Data storytelling combines data, visuals, and narrative to tell compelling stories. Learn how to craft engaging stories using data visualization techniques in this comprehensive guide.",
        category: "dataVisualization",
        authors: [{
            name: "Isabella Clark",
            img: "/img/avatars/thumb-7.jpg"
        }, {
            name: "William Davis",
            img: "/img/avatars/thumb-10.jpg"
        }],
        tags: [{
            id: 4,
            label: "Customization"
        }, {
            id: 10,
            label: "Maintenance"
        }, {
            id: 7,
            label: "Optimization"
        }, {
            id: 16,
            label: "Testing"
        }, {
            id: 19,
            label: "Recovery"
        }],
        starred: !1,
        published: !1,
        updateTime: "6 months ago",
        updateTimeStamp: 1703488064,
        createdBy: "Sophia Martinez",
        timeToRead: 8,
        viewCount: 110,
        commentCount: 67
    }, {
        id: "Ia6XsNPtVW",
        title: "Welcome to Our Platform",
        content: "This article provides an overview of our platform, highlighting its main features and functionalities. It's the perfect starting point for new users.",
        category: "introduction",
        authors: [{
            name: "John Smith",
            img: "/img/avatars/thumb-8.jpg"
        }, {
            name: "Sarah Brown",
            img: "/img/avatars/thumb-11.jpg"
        }],
        tags: [{
            id: 8,
            label: "Security"
        }, {
            id: 1,
            label: "Configuring"
        }, {
            id: 12,
            label: "Performance"
        }],
        starred: !1,
        published: !0,
        updateTime: "1 year ago",
        updateTimeStamp: 1687504064,
        createdBy: "Rachel Green",
        timeToRead: 3,
        viewCount: 150,
        commentCount: 10
    }, {
        id: "Bb7YsNQmUV",
        title: "Getting Started: A Beginner's Guide",
        content: "This beginner's guide will help you get up and running with our platform. Learn how to set up your account and start using our basic features.",
        category: "introduction",
        authors: [{
            name: "Michael Johnson",
            img: "/img/avatars/thumb-9.jpg"
        }],
        tags: [{
            id: 8,
            label: "Security"
        }],
        starred: !0,
        published: !0,
        updateTime: "2 months ago",
        updateTimeStamp: 1713856064,
        createdBy: "David Parker",
        timeToRead: 5,
        viewCount: 200,
        commentCount: 43
    }, {
        id: "Cc8ZsNRnWX",
        title: "Understanding the Dashboard",
        content: "This article explains the various components of the dashboard, helping new users to navigate and utilize its features effectively.",
        category: "introduction",
        authors: [{
            name: "Emma Davis",
            img: "/img/avatars/thumb-10.jpg"
        }, {
            name: "James Wilson",
            img: "/img/avatars/thumb-12.jpg"
        }],
        tags: [{
            id: 16,
            label: "Testing"
        }, {
            id: 1,
            label: "Configuring"
        }],
        starred: !1,
        published: !0,
        updateTime: "6 months ago",
        updateTimeStamp: 1703488064,
        createdBy: "Chris Martin",
        timeToRead: 4,
        viewCount: 175,
        commentCount: 10
    }, {
        id: "Dd9AsNStXY",
        title: "Introduction to Key Features",
        content: "Learn about the key features of our platform in this detailed introduction. We cover everything from basic tools to advanced functionalities.",
        category: "introduction",
        authors: [{
            name: "Olivia Taylor",
            img: "/img/avatars/thumb-3.jpg"
        }],
        tags: [{
            id: 2,
            label: "Implementation"
        }, {
            id: 6,
            label: "Integration"
        }, {
            id: 12,
            label: "Performance"
        }],
        starred: !1,
        published: !0,
        updateTime: "4 months ago",
        updateTimeStamp: 1708672064,
        createdBy: "Sophia Clark",
        timeToRead: 6,
        viewCount: 220,
        commentCount: 10
    }, {
        id: "Ee0BsNQuYZ",
        title: "New User Orientation",
        content: "This orientation guide is designed to help new users quickly get familiar with our platform. It covers essential tips and tricks for beginners.",
        category: "introduction",
        authors: [{
            name: "William Robinson",
            img: "/img/avatars/thumb-4.jpg"
        }, {
            name: "Isabella Martinez",
            img: "/img/avatars/thumb-5.jpg"
        }],
        tags: [{
            id: 4,
            label: "Customization"
        }, {
            id: 11,
            label: "Scalability"
        }],
        starred: !0,
        published: !0,
        updateTime: "1 week ago",
        updateTimeStamp: 1718435264,
        createdBy: "Emma Davis",
        timeToRead: 7,
        viewCount: 300,
        commentCount: 21
    }, {
        id: "Fg1WsNQuXY",
        title: "Step-by-Step Installation Guide",
        content: "This guide provides a detailed, step-by-step process for installing our platform on your system. It includes screenshots and troubleshooting tips to ensure a smooth installation.",
        category: "setupGuide",
        authors: [{
            name: "John Doe",
            img: "/img/avatars/thumb-1.jpg"
        }],
        tags: [{
            id: 5,
            label: "Setup"
        }, {
            id: 15,
            label: "Automation"
        }],
        starred: !0,
        published: !0,
        updateTime: "2 weeks ago",
        updateTimeStamp: 1717830464,
        createdBy: "Jane Smith",
        timeToRead: 10,
        viewCount: 250,
        commentCount: 30
    }, {
        id: "Gh2XsNPvYZ",
        title: "Initial Configuration Settings",
        content: "Learn how to configure the initial settings of our platform. This article covers essential configurations to get you started quickly and efficiently.",
        category: "setupGuide",
        authors: [{
            name: "Emily Watson",
            img: "/img/avatars/thumb-2.jpg"
        }, {
            name: "Mark Johnson",
            img: "/img/avatars/thumb-3.jpg"
        }],
        tags: [{
            id: 9,
            label: "Deployment"
        }],
        starred: !1,
        published: !1,
        updateTime: "1 month ago",
        updateTimeStamp: 1716448064,
        createdBy: "Chris Evans",
        timeToRead: 8,
        viewCount: 180,
        commentCount: 22
    }, {
        id: "Ij3YsNQwXZ",
        title: "Network Setup and Configuration",
        content: "This guide helps you set up and configure the network settings required for our platform. It includes detailed instructions and best practices for network optimization.",
        category: "setupGuide",
        authors: [{
            name: "Olivia Brown",
            img: "/img/avatars/thumb-4.jpg"
        }],
        tags: [{
            id: 18,
            label: "Logging"
        }, {
            id: 19,
            label: "Recovery"
        }],
        starred: !0,
        published: !0,
        updateTime: "3 months ago",
        updateTimeStamp: 1711264064,
        createdBy: "Liam White",
        timeToRead: 12,
        viewCount: 220,
        commentCount: 18
    }, {
        id: "Kl4ZsNQtYZ",
        title: "User Account Setup",
        content: "This article provides a comprehensive guide to setting up user accounts on our platform. It covers account creation, role assignment, and permission settings.",
        category: "setupGuide",
        authors: [{
            name: "Sophia Lee",
            img: "/img/avatars/thumb-5.jpg"
        }, {
            name: "James Wilson",
            img: "/img/avatars/thumb-6.jpg"
        }],
        tags: [{
            id: 13,
            label: "Backup"
        }],
        starred: !1,
        published: !1,
        updateTime: "5 months ago",
        updateTimeStamp: 1706080064,
        createdBy: "Emma Davis",
        timeToRead: 9,
        viewCount: 200,
        commentCount: 25
    }, {
        id: "Lm5WsNQuXY",
        title: "Navigating the Dashboard",
        content: "This article explains how to navigate the main dashboard of our platform. Learn about the various sections and how to access key features easily.",
        category: "basicFeatures",
        authors: [{
            name: "Alice Johnson",
            img: "/img/avatars/thumb-1.jpg"
        }],
        tags: [{
            id: 17,
            label: "Migration"
        }],
        starred: !1,
        published: !0,
        updateTime: "3 weeks ago",
        updateTimeStamp: 1717225664,
        createdBy: "David Lee",
        timeToRead: 5,
        viewCount: 389,
        commentCount: 14
    }, {
        id: "No6XsNPrYZ",
        title: "Using the Search Function",
        content: "Learn how to use the powerful search function of our platform to find the information you need quickly and efficiently. This guide covers basic and advanced search techniques.",
        category: "basicFeatures",
        authors: [{
            name: "Michael Brown",
            img: "/img/avatars/thumb-2.jpg"
        }, {
            name: "Laura White",
            img: "/img/avatars/thumb-3.jpg"
        }],
        tags: [{
            id: 9,
            label: "Deployment"
        }],
        starred: !0,
        published: !0,
        updateTime: "1 month ago",
        updateTimeStamp: 1716448064,
        createdBy: "Samantha Green",
        timeToRead: 4,
        viewCount: 457,
        commentCount: 19
    }, {
        id: "Op7YsNRqXZ",
        title: "Customizing Your Profile",
        content: "This guide walks you through the process of customizing your profile. Learn how to update your personal information, change your avatar, and set your preferences.",
        category: "basicFeatures",
        authors: [{
            name: "Emily Davis",
            img: "/img/avatars/thumb-4.jpg"
        }],
        tags: [{
            id: 2,
            label: "Implementation"
        }, {
            id: 5,
            label: "Setup"
        }],
        starred: !1,
        published: !0,
        updateTime: "2 months ago",
        updateTimeStamp: 1713856064,
        createdBy: "John Smith",
        timeToRead: 6,
        viewCount: 498,
        commentCount: 23
    }, {
        id: "Qq8ZsNQtYZ",
        title: "Basic Reporting Features",
        content: "Discover the basic reporting features available on our platform. This article covers how to generate, view, and export reports to gain insights from your data.",
        category: "basicFeatures",
        authors: [{
            name: "Sophia Lee",
            img: "/img/avatars/thumb-5.jpg"
        }, {
            name: "James Wilson",
            img: "/img/avatars/thumb-6.jpg"
        }],
        tags: [{
            id: 5,
            label: "Setup"
        }],
        starred: !1,
        published: !1,
        updateTime: "5 months ago",
        updateTimeStamp: 1706080064,
        createdBy: "Emma Davis",
        timeToRead: 7,
        viewCount: 512,
        commentCount: 27
    }],
    ir = {
        content: `
    <p>Technology is evolving at an unprecedented pace, transforming every aspect of our lives. From artificial intelligence to quantum computing, the advancements in technology are opening up new possibilities and reshaping industries across the globe.</p>
    <div id="artificialIntelligence">
        <h5>Artificial Intelligence</h5><p>Artificial Intelligence (AI) is one of the most significant technological advancements of our time. AI is being integrated into various sectors such as healthcare, finance, and transportation, offering innovative solutions to complex problems. In the future, AI is expected to further revolutionize industries by improving efficiency, accuracy, and decision-making processes.</p><p>In healthcare, AI is being used to develop personalized treatment plans, improve diagnostic accuracy, and enhance patient care. For instance, AI algorithms can analyze vast amounts of medical data to identify patterns and predict disease outbreaks. In finance, AI is transforming trading strategies, risk management, and customer service through advanced data analytics and automated systems.</p> </div>
    <div id="quantumComputing">
        <h5 >Quantum Computing</h5><p>Quantum computing is another groundbreaking technology that holds the potential to solve problems that are currently unsolvable by classical computers. With the ability to perform complex calculations at unprecedented speeds, quantum computers could transform fields such as cryptography, materials science, and pharmaceuticals.</p><p>Researchers are already exploring the use of quantum computing to design new materials with specific properties, optimize supply chains, and develop new drug therapies. The sheer computational power of quantum computers could also revolutionize machine learning, leading to more advanced AI systems and deeper insights from data.</p>
    </div>
    <div id="internetOfThings">
    <h5 >Internet of Things (IoT)</h5>
    <p>The Internet of Things (IoT) is connecting devices and systems like never before, creating a more interconnected world. From smart homes to industrial automation, IoT is enhancing the way we live and work by providing real-time data and insights. As IoT technology continues to evolve, it is expected to bring even more innovative applications and efficiencies.</p><p>Smart cities are emerging as a result of IoT, where interconnected systems manage everything from traffic flow to energy usage, improving the quality of urban life. In agriculture, IoT devices monitor soil conditions, weather patterns, and crop health, leading to more efficient farming practices and higher yields.</p>
    </div>
    <div id="5gTechnology">
        <h5>5G Technology</h5><p>5G technology is set to revolutionize the way we communicate and access information. With faster speeds and lower latency, 5G will enable new applications such as autonomous vehicles, smart cities, and advanced healthcare solutions. The widespread adoption of 5G is expected to drive economic growth and create new opportunities across various industries.</p><p>In addition to enhancing mobile communications, 5G will support the growth of IoT by providing the necessary infrastructure for millions of connected devices. This will lead to the development of innovative applications in various sectors, including remote surgery, real-time language translation, and immersive virtual reality experiences.</p>
    </div>
    <div id="blockchainTechnology">
    <h5>Blockchain Technology</h5><p>Blockchain technology, originally developed as the backbone of cryptocurrencies like Bitcoin, is now being recognized for its potential to revolutionize various industries beyond finance. By providing a decentralized and secure way to record transactions, blockchain technology can enhance transparency, security, and efficiency.</p><p>In supply chain management, blockchain can track products from origin to delivery, ensuring authenticity and reducing fraud. In healthcare, it can secure patient records, enabling better data sharing while maintaining privacy. Furthermore, smart contracts, which are self-executing contracts with the terms directly written into code, can automate and streamline complex legal and financial agreements.</p><p>Blockchain’s potential extends to voting systems, where it can ensure transparency and prevent tampering, thereby increasing trust in the electoral process. As the technology matures, its applications are expected to expand, driving innovation and efficiency in numerous fields.</p><p>As we look to the future, it is clear that technology will continue to play a crucial role in shaping our world. The advancements in AI, quantum computing, IoT, 5G, and blockchain are just the beginning. Embracing these technologies and leveraging their potential will be key to driving innovation and progress in the years to come.</p>
    </div>`,
        tableOfContent: [{
            id: "artificialIntelligence",
            label: "Artificial Intelligence"
        }, {
            id: "quantumComputing",
            label: "Quantum Computing"
        }, {
            id: "internetOfThings",
            label: "Internet of Things (IoT)"
        }, {
            id: "5gTechnology",
            label: "5G Technology"
        }, {
            id: "blockchainTechnology",
            label: "Block Chain Technology"
        }]
    };
C.onGet("/api/helps/categories").reply(() => [200, {
    categories: ar,
    popularArticles: He.filter(d => d.starred)
}]);
C.onGet("/api/helps/articles").reply(d => {
    const {
        topic: l,
        query: m
    } = d.params, u = He;
    return m ? [200, fe(u, m)] : l ? [200, u.filter(g => g.category === l)] : [200, u]
});
C.onGet(new RegExp("/api/helps/articles*")).reply(function(d) {
    var u;
    const l = (u = d.url) == null ? void 0 : u.split("/")[3],
        m = He.find(g => g.id === l);
    return m ? [200, { ...m,
        ...ir
    }] : [404, {}]
});
C.onGet("/api/helps/manage/articles").reply(d => {
    const {
        pageIndex: l,
        pageSize: m,
        sort: u,
        query: g,
        category: y
    } = d.params;
    console.log("config.params", d.params);
    const {
        order: c,
        key: w
    } = u, M = He;
    let h = M,
        F = M.length;
    w && c && (w !== "updateTimeStamp" ? h.sort(me(w, c === "desc", A => A.toUpperCase())) : h.sort(me(w, c === "desc", parseInt))), g && (h = fe(h, g), F = h.length), y && (h = h.filter(A => y.includes(A.category))), h = Se(h, m, l);
    const P = {
        list: h,
        total: F
    };
    return new Promise(function(A) {
        setTimeout(function() {
            A([200, P])
        }, 500)
    })
});
const N = new Date,
    rr = {
        statisticData: {
            totalProfit: {
                thisWeek: {
                    value: 21827.13,
                    growShrink: 11.4,
                    comparePeriod: "from last week",
                    chartData: {
                        series: [{
                            name: "Sales",
                            data: [24, 28, 21, 34, 30, 44, 25]
                        }],
                        date: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                    }
                },
                thisMonth: {
                    value: 82373.21,
                    growShrink: 3.4,
                    comparePeriod: "from last month",
                    chartData: {
                        series: [{
                            name: "Sales",
                            data: [242, 334, 297, 364, 342, 431, 368, 477, 398, 489, 364, 571]
                        }],
                        date: ["01 Jun", "02 Jun", "03 Jun", "04 Jun", "05 Jun", "06 Jun", "07 Jun", "08 Jun", "09 Jun", "10 Jun", "11 Jun", "12 Jun"]
                    }
                },
                thisYear: {
                    value: 329489.21,
                    growShrink: 5.1,
                    comparePeriod: "from last month",
                    chartData: {
                        series: [{
                            name: "Sales",
                            data: [240, 255, 210, 275, 230, 280, 220, 340, 305, 350, 300, 420]
                        }],
                        date: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                    }
                }
            },
            totalOrder: {
                thisWeek: {
                    value: 1782,
                    growShrink: 9.2,
                    comparePeriod: "from last week",
                    chartData: {
                        series: [{
                            name: "Orders",
                            data: [14, 18, 12, 24, 20, 27, 16]
                        }],
                        date: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                    }
                },
                thisMonth: {
                    value: 7234,
                    growShrink: -2.8,
                    comparePeriod: "from last month",
                    chartData: {
                        series: [{
                            name: "Orders",
                            data: [124, 173, 156, 183, 171, 211, 188, 244, 202, 258, 192, 271]
                        }],
                        date: ["01 Jun", "02 Jun", "03 Jun", "04 Jun", "05 Jun", "06 Jun", "07 Jun", "08 Jun", "09 Jun", "10 Jun", "11 Jun", "12 Jun"]
                    }
                },
                thisYear: {
                    value: 28349,
                    growShrink: 2.4,
                    comparePeriod: "from last year",
                    chartData: {
                        series: [{
                            name: "Orders",
                            data: [110, 118, 97, 121, 110, 137, 115, 171, 146, 167, 145, 202]
                        }],
                        date: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                    }
                }
            },
            totalImpression: {
                thisWeek: {
                    value: 832718,
                    growShrink: -5.1,
                    comparePeriod: "from last week",
                    chartData: {
                        series: [{
                            name: "Impressions",
                            data: [10234, 12812, 11721, 14344, 12030, 15444, 13225]
                        }],
                        date: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                    }
                },
                thisMonth: {
                    value: 3123734,
                    growShrink: 4.6,
                    comparePeriod: "from last month",
                    chartData: {
                        series: [{
                            name: "Impressions",
                            data: [242124, 334097, 297364, 364342, 342431, 431368, 368477, 477398, 398489, 489364, 364571, 571664]
                        }],
                        date: ["01 Jun", "02 Jun", "03 Jun", "04 Jun", "05 Jun", "06 Jun", "07 Jun", "08 Jun", "09 Jun", "10 Jun", "11 Jun", "12 Jun"]
                    }
                },
                thisYear: {
                    value: 12948921,
                    growShrink: 6.3,
                    comparePeriod: "from last year",
                    chartData: {
                        series: [{
                            name: "Impressions",
                            data: [240110, 255123, 210097, 275121, 230110, 280137, 220115, 340171, 305146, 350167, 300145, 420202]
                        }],
                        date: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                    }
                }
            }
        },
        salesTarget: {
            thisWeek: {
                target: 400,
                achieved: 260,
                percentage: 65
            },
            thisMonth: {
                target: 1750,
                achieved: 1320,
                percentage: 75
            },
            thisYear: {
                target: 22e3,
                achieved: 15823,
                percentage: 71
            }
        },
        recentOrders: [{
            id: "92627",
            date: 1657332800,
            customer: "Tara Fletcher",
            status: 0,
            paymentMehod: "master",
            paymentIdendifier: "•••• 0921",
            totalAmount: 279
        }, {
            id: "92509",
            date: 1656232800,
            customer: "Joyce Freeman",
            status: 1,
            paymentMehod: "visa",
            paymentIdendifier: "•••• 1232",
            totalAmount: 831
        }, {
            id: "91631",
            date: 1655532800,
            customer: "Brittany Hale",
            status: 0,
            paymentMehod: "visa",
            paymentIdendifier: "•••• 4597",
            totalAmount: 142
        }, {
            id: "90963",
            date: 1654932800,
            customer: "Luke Cook",
            status: 0,
            paymentMehod: "master",
            paymentIdendifier: "•••• 3881",
            totalAmount: 232
        }, {
            id: "89332",
            date: 1654132800,
            customer: "Eileen Horton",
            status: 1,
            paymentMehod: "paypal",
            paymentIdendifier: "••••@gmail.com",
            totalAmount: 597
        }, {
            id: "89107",
            date: 1650132800,
            customer: "Frederick Adams",
            status: 2,
            paymentMehod: "visa",
            paymentIdendifier: "•••• 3356",
            totalAmount: 72
        }, {
            id: "89021",
            date: 1649832800,
            customer: "Lee Wheeler",
            status: 0,
            paymentMehod: "master",
            paymentIdendifier: "•••• 9564",
            totalAmount: 110
        }],
        topProduct: [{
            id: "18",
            name: "Maneki Neko Poster",
            productCode: "098336NT",
            img: "/img/products/product-7.jpg",
            sales: 1249,
            growShrink: 15.2
        }, {
            id: "14",
            name: "Echoes Necklace",
            productCode: "098383NT",
            img: "/img/products/product-3.jpg",
            sales: 1145,
            growShrink: 13.9
        }, {
            id: "20",
            name: "Spiky Ring",
            productCode: "098392NT",
            img: "/img/products/product-9.jpg",
            sales: 1073,
            growShrink: 9.5
        }, {
            id: "21",
            name: "Pastel Petals Poster",
            productCode: "098355NT",
            img: "/img/products/product-10.jpg",
            sales: 1022,
            growShrink: 2.3
        }, {
            id: "23",
            name: "Il Limone",
            productCode: "098377NT",
            img: "/img/products/product-12.jpg",
            sales: 992,
            growShrink: -.7
        }, {
            id: "17",
            name: "Ringed Earring",
            productCode: "098314NT",
            img: "/img/products/product-6.jpg",
            sales: 1201,
            growShrink: -1.1
        }],
        customerDemographic: [{
            id: "us",
            name: "United States",
            value: 38.61,
            coordinates: [-95.7129, 37.0902]
        }, {
            id: "br",
            name: "Brazil",
            value: 32.79,
            coordinates: [-51.9253, -14.235]
        }, {
            id: "in",
            name: "India",
            value: 26.42,
            coordinates: [78.9629, 20.5937]
        }, {
            id: "uk",
            name: "United Kingdom",
            value: 17.42,
            coordinates: [.1278, 51.5074]
        }, {
            id: "tr",
            name: "Turkey",
            value: 12.85,
            coordinates: [28.9784, 41.0082]
        }],
        revenueByChannel: {
            thisWeek: {
                value: 21827.13,
                growShrink: 11.4,
                percentage: {
                    onlineStore: 24,
                    physicalStore: 35,
                    socialMedia: 41
                }
            },
            thisMonth: {
                value: 82373.21,
                growShrink: 3.4,
                percentage: {
                    onlineStore: 28,
                    physicalStore: 32,
                    socialMedia: 40
                }
            },
            thisYear: {
                value: 329489.21,
                growShrink: 5.1,
                percentage: {
                    onlineStore: 24,
                    physicalStore: 38,
                    socialMedia: 38
                }
            }
        }
    },
    or = {
        projectOverview: {
            ongoingProject: 12,
            projectCompleted: 68,
            upcomingProject: 7
        },
        taskOverview: {
            weekly: {
                onGoing: 126,
                finished: 87,
                total: 213,
                series: [{
                    name: "On Going",
                    data: [45, 52, 68, 84, 103, 112, 126]
                }, {
                    name: "Finished",
                    data: [35, 41, 62, 62, 75, 81, 87]
                }],
                range: ["21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan"]
            },
            daily: {
                onGoing: 25,
                finished: 18,
                total: 43,
                series: [{
                    name: "On Going",
                    data: [15, 20, 23, 24, 25]
                }, {
                    name: "Finished",
                    data: [10, 12, 15, 17, 18]
                }],
                range: ["08:00", "12:00", "16:00", "20:00", "24:00"]
            }
        },
        currentTasks: Qt,
        schedule: [{
            start: new Date(N.getFullYear(), N.getMonth(), 1),
            end: new Date(N.getFullYear(), N.getMonth(), 8),
            name: "Design",
            id: "fd521fec-35bb-4c84-abc7-df590afc9076",
            progress: 40,
            type: "project",
            hideChildren: !1,
            displayOrder: 1,
            barVariant: "overallDesign"
        }, {
            start: new Date(N.getFullYear(), N.getMonth(), 1),
            end: new Date(N.getFullYear(), N.getMonth(), 2, 12, 28),
            name: "User research",
            id: "2102bc55-6b7a-4218-b5d8-ed9ecc5fc737",
            progress: 85,
            type: "task",
            project: "fd521fec-35bb-4c84-abc7-df590afc9076",
            displayOrder: 2,
            barVariant: "design"
        }, {
            start: new Date(N.getFullYear(), N.getMonth(), 2),
            end: new Date(N.getFullYear(), N.getMonth(), 4, 0, 0),
            name: "Design system",
            id: "ae9ebb76-5241-4c24-a921-b4b704a7edbd",
            progress: 35,
            dependencies: ["2102bc55-6b7a-4218-b5d8-ed9ecc5fc737"],
            type: "task",
            project: "fd521fec-35bb-4c84-abc7-df590afc9076",
            displayOrder: 3,
            barVariant: "design"
        }, {
            start: new Date(N.getFullYear(), N.getMonth(), 4),
            end: new Date(N.getFullYear(), N.getMonth(), 8, 0, 0),
            name: "Prototype",
            id: "4bd47b1d-bb51-40f4-843e-0e4dd632b5e7",
            progress: 60,
            dependencies: ["ae9ebb76-5241-4c24-a921-b4b704a7edbd"],
            type: "task",
            project: "fd521fec-35bb-4c84-abc7-df590afc9076",
            displayOrder: 4,
            barVariant: "design"
        }, {
            start: new Date(N.getFullYear(), N.getMonth(), 6),
            end: new Date(N.getFullYear(), N.getMonth(), 20),
            name: "Development",
            id: "96c97159-aaff-45d0-b874-74e4aa059b0f",
            progress: 40,
            type: "project",
            hideChildren: !1,
            displayOrder: 5,
            barVariant: "overallDevelopment"
        }, {
            start: new Date(N.getFullYear(), N.getMonth(), 6),
            end: new Date(N.getFullYear(), N.getMonth(), 9),
            name: "Infra architure",
            id: "3209fd05-a73d-4947-84d9-cd0f6a286238",
            progress: 20,
            type: "task",
            project: "96c97159-aaff-45d0-b874-74e4aa059b0f",
            displayOrder: 6,
            barVariant: "development"
        }, {
            start: new Date(N.getFullYear(), N.getMonth(), 9),
            end: new Date(N.getFullYear(), N.getMonth(), 15),
            name: "Develop core modules",
            id: "68b2a36f-74b3-432a-a7f5-ec66db501514",
            progress: 10,
            type: "task",
            project: "96c97159-aaff-45d0-b874-74e4aa059b0f",
            displayOrder: 7,
            barVariant: "development"
        }, {
            start: new Date(N.getFullYear(), N.getMonth(), 12),
            end: new Date(N.getFullYear(), N.getMonth(), 20),
            name: "Integrate modules",
            id: "7d59bda8-c78e-4b7d-b66d-a5862f4c2644",
            progress: 10,
            type: "task",
            project: "96c97159-aaff-45d0-b874-74e4aa059b0f",
            displayOrder: 8,
            barVariant: "development"
        }],
        recentActivity: [{
            type: "UPDATE-TICKET",
            dateTime: 164658e4,
            ticket: "PD-979",
            status: 0,
            userName: "Angelina Gotelli",
            userImg: ""
        }, {
            type: "COMMENT",
            dateTime: 1646578417,
            userName: "Max Alexander",
            userImg: "/img/avatars/thumb-3.jpg",
            comment: "Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like."
        }, {
            type: "ADD-TAGS-TO-TICKET",
            dateTime: 1646574027,
            userName: "Eugene Stewart",
            tags: ["Live Issue", "Backend"]
        }, {
            type: "ADD-FILES-TO-TICKET",
            dateTime: 1646569123,
            userName: "Shannon Baker",
            files: ["document.csv"],
            ticket: "PD-1092"
        }, {
            type: "COMMENT-MENTION",
            dateTime: 1646565473,
            userName: "Roberta Horton",
            userImg: "/img/avatars/thumb-7.jpg",
            comment: "<strong>@Carolyn</strong> One of the main causes of the fall of the Roman Empire was that-lacking zero-they had no way to indicate successful termination of their C programs. "
        }, {
            type: "ASSIGN-TICKET",
            dateTime: 1646554397,
            userName: "Lee Wheeler",
            assignee: "Alvin Moreno",
            ticket: "PD-1092"
        }]
    },
    nr = {
        thisMonth: {
            metrics: {
                visitors: {
                    value: 149328,
                    growShrink: 5.2
                },
                conversionRate: {
                    value: 6.8,
                    growShrink: -1.8
                },
                adCampaignClicks: {
                    value: 17333,
                    growShrink: 2.3
                }
            },
            webAnalytic: {
                pageView: {
                    value: 32124,
                    growShrink: 4.2
                },
                avgTimeOnPage: {
                    value: "3m 16s",
                    growShrink: -.2
                },
                series: [{
                    name: "Natural",
                    data: [45756, 52543, 38853, 24234, 33654, 26654, 21872, 20124, 65431, 84255, 15354, 10023]
                }, {
                    name: "Referral",
                    data: [35434, 41654, 62396, 42352, 13146, 18653, 29543, 37867, 36810, 51491, 32257, 35542]
                }, {
                    name: "Direct",
                    data: [87122, 57872, 74768, 99322, 75147, 38764, 62533, 47234, 82741, 56325, 45781, 47582]
                }],
                date: ["01 Jun", "02 Jun", "03 Jun", "04 Jun", "05 Jun", "06 Jun", "07 Jun", "08 Jun", "09 Jun", "10 Jun", "11 Jun", "12 Jun"]
            },
            traffic: [{
                source: "Direct",
                visits: 1500,
                uniqueVisitors: 1200,
                bounceRate: "40%",
                avgSessionDuration: "00:03:45",
                progress: 60
            }, {
                source: "Natural",
                visits: 3e3,
                uniqueVisitors: 2500,
                bounceRate: "35%",
                avgSessionDuration: "00:04:20",
                progress: 75
            }, {
                source: "Referral",
                visits: 1e3,
                uniqueVisitors: 850,
                bounceRate: "45%",
                avgSessionDuration: "00:03:10",
                progress: 80
            }, {
                source: "Social Media",
                visits: 2e3,
                uniqueVisitors: 1800,
                bounceRate: "50%",
                avgSessionDuration: "00:02:50",
                progress: 40
            }, {
                source: "Email Campaign",
                visits: 800,
                uniqueVisitors: 700,
                bounceRate: "30%",
                avgSessionDuration: "00:05:00",
                progress: 55
            }],
            topChannel: {
                visitors: 79328,
                channels: [{
                    id: "google",
                    name: "Google",
                    img: "/img/others/google.png",
                    total: 31731,
                    percentage: 40
                }, {
                    id: "instagram",
                    name: "Instagram",
                    img: "/img/thumbs/instagram.png",
                    total: 23798,
                    percentage: 30
                }, {
                    id: "facebook",
                    name: "Facebook",
                    img: "/img/thumbs/facebook.png",
                    total: 11899,
                    percentage: 15
                }, {
                    id: "x",
                    name: "X",
                    img: "/img/thumbs/x.png",
                    total: 10313,
                    percentage: 13
                }]
            },
            deviceSession: {
                labels: ["Desktop", "Mobile", "Tablet"],
                series: [35103, 24633, 14441],
                percentage: [42.1, 33.7, 19.6]
            },
            topPages: [{
                pageUrl: "/dashboard",
                views: {
                    amount: 6465,
                    growth: 1.7
                },
                uniqueVisitor: {
                    amount: 1078,
                    growth: 1.2
                }
            }, {
                pageUrl: "/affiliate",
                views: {
                    amount: 3687,
                    growth: 1.4
                },
                uniqueVisitor: {
                    amount: 801,
                    growth: .9
                }
            }, {
                pageUrl: "/contract",
                views: {
                    amount: 2918,
                    growth: 2.6
                },
                uniqueVisitor: {
                    amount: 655,
                    growth: 1.4
                }
            }, {
                pageUrl: "/products",
                views: {
                    amount: 4882,
                    growth: -.7
                },
                uniqueVisitor: {
                    amount: 936,
                    growth: -.3
                }
            }, {
                pageUrl: "/sign-in",
                views: {
                    amount: 1527,
                    growth: 1.1
                },
                uniqueVisitor: {
                    amount: 389,
                    growth: .8
                }
            }, {
                pageUrl: "/about",
                views: {
                    amount: 2103,
                    growth: -.9
                },
                uniqueVisitor: {
                    amount: 450,
                    growth: -1.5
                }
            }]
        },
        thisYear: {
            metrics: {
                visitors: {
                    value: 1749853,
                    growShrink: 12.4
                },
                conversionRate: {
                    value: 7.2,
                    growShrink: .8
                },
                adCampaignClicks: {
                    value: 214987,
                    growShrink: 15.6
                }
            },
            webAnalytic: {
                pageView: {
                    value: 420354,
                    growShrink: 4.8
                },
                avgTimeOnPage: {
                    value: "3m 18s",
                    growShrink: -.3
                },
                series: [{
                    name: "Natural",
                    data: [50234, 46231, 54322, 61234, 48231, 52312, 57234, 51234, 46234, 54312, 61231, 57234]
                }, {
                    name: "Referral",
                    data: [42312, 41234, 45321, 53212, 48234, 45312, 49234, 42321, 51234, 48231, 45312, 50234]
                }, {
                    name: "Direct",
                    data: [57312, 65234, 61231, 54312, 59234, 64321, 67234, 61231, 55234, 59234, 64312, 67231]
                }],
                date: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            traffic: [{
                source: "Direct",
                visits: 18e3,
                uniqueVisitors: 14500,
                bounceRate: "38%",
                avgSessionDuration: "00:03:50",
                progress: 65
            }, {
                source: "Natural",
                visits: 36e3,
                uniqueVisitors: 3e4,
                bounceRate: "34%",
                avgSessionDuration: "00:04:25",
                progress: 78
            }, {
                source: "Referral",
                visits: 12e3,
                uniqueVisitors: 10200,
                bounceRate: "42%",
                avgSessionDuration: "00:03:15",
                progress: 82
            }, {
                source: "Social Media",
                visits: 24e3,
                uniqueVisitors: 21600,
                bounceRate: "48%",
                avgSessionDuration: "00:02:55",
                progress: 45
            }, {
                source: "Email Campaign",
                visits: 9600,
                uniqueVisitors: 8400,
                bounceRate: "28%",
                avgSessionDuration: "00:05:05",
                progress: 60
            }],
            topChannel: {
                visitors: 930540,
                channels: [{
                    id: "google",
                    name: "Google",
                    img: "/img/others/google.png",
                    total: 372216,
                    percentage: 40
                }, {
                    id: "instagram",
                    name: "Instagram",
                    img: "/img/thumbs/instagram.png",
                    total: 279162,
                    percentage: 30
                }, {
                    id: "facebook",
                    name: "Facebook",
                    img: "/img/thumbs/facebook.png",
                    total: 139581,
                    percentage: 15
                }, {
                    id: "x",
                    name: "X",
                    img: "/img/thumbs/x.png",
                    total: 120970,
                    percentage: 13
                }]
            },
            deviceSession: {
                labels: ["Desktop", "Mobile", "Tablet"],
                series: [421236, 295596, 177396],
                percentage: [43.5, 30.5, 18.2]
            },
            topPages: [{
                pageUrl: "/dashboard",
                views: {
                    amount: 77580,
                    growth: 2
                },
                uniqueVisitor: {
                    amount: 12936,
                    growth: 1.4
                }
            }, {
                pageUrl: "/affiliate",
                views: {
                    amount: 44244,
                    growth: 1.6
                },
                uniqueVisitor: {
                    amount: 9612,
                    growth: 1.1
                }
            }, {
                pageUrl: "/contract",
                views: {
                    amount: 35016,
                    growth: 3
                },
                uniqueVisitor: {
                    amount: 7860,
                    growth: 1.7
                }
            }, {
                pageUrl: "/products",
                views: {
                    amount: 58584,
                    growth: -.5
                },
                uniqueVisitor: {
                    amount: 11232,
                    growth: -.2
                }
            }, {
                pageUrl: "/sign-in",
                views: {
                    amount: 18324,
                    growth: 1.3
                },
                uniqueVisitor: {
                    amount: 4668,
                    growth: .9
                }
            }, {
                pageUrl: "/about",
                views: {
                    amount: 25236,
                    growth: -1
                },
                uniqueVisitor: {
                    amount: 5412,
                    growth: -1.6
                }
            }]
        },
        thisWeek: {
            metrics: {
                visitors: {
                    value: 35200,
                    growShrink: 3.8
                },
                conversionRate: {
                    value: 7.1,
                    growShrink: -.5
                },
                adCampaignClicks: {
                    value: 4120,
                    growShrink: 1.9
                }
            },
            webAnalytic: {
                pageView: {
                    value: 7450,
                    growShrink: 2.7
                },
                avgTimeOnPage: {
                    value: "3m 20s",
                    growShrink: .1
                },
                series: [{
                    name: "Natural",
                    data: [6543, 5234, 7432, 8123, 6032, 7456, 8223]
                }, {
                    name: "Referral",
                    data: [5423, 6123, 4832, 5421, 6832, 7221, 6645]
                }, {
                    name: "Direct",
                    data: [8321, 7564, 9234, 10234, 9345, 8732, 9434]
                }],
                date: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            },
            traffic: [{
                source: "Direct",
                visits: 750,
                uniqueVisitors: 640,
                bounceRate: "39%",
                avgSessionDuration: "00:03:50",
                progress: 61
            }, {
                source: "Natural",
                visits: 1500,
                uniqueVisitors: 1280,
                bounceRate: "36%",
                avgSessionDuration: "00:04:25",
                progress: 74
            }, {
                source: "Referral",
                visits: 500,
                uniqueVisitors: 430,
                bounceRate: "44%",
                avgSessionDuration: "00:03:15",
                progress: 78
            }, {
                source: "Social Media",
                visits: 1e3,
                uniqueVisitors: 890,
                bounceRate: "49%",
                avgSessionDuration: "00:02:55",
                progress: 43
            }, {
                source: "Email Campaign",
                visits: 400,
                uniqueVisitors: 350,
                bounceRate: "29%",
                avgSessionDuration: "00:05:10",
                progress: 57
            }],
            topChannel: {
                visitors: 18090,
                channels: [{
                    id: "google",
                    name: "Google",
                    img: "/img/others/google.png",
                    total: 7236,
                    percentage: 40
                }, {
                    id: "instagram",
                    name: "Instagram",
                    img: "/img/thumbs/instagram.png",
                    total: 5427,
                    percentage: 30
                }, {
                    id: "facebook",
                    name: "Facebook",
                    img: "/img/thumbs/facebook.png",
                    total: 2714,
                    percentage: 15
                }, {
                    id: "x",
                    name: "X",
                    img: "/img/thumbs/x.png",
                    total: 2353,
                    percentage: 13
                }]
            },
            deviceSession: {
                labels: ["Desktop", "Mobile", "Tablet"],
                series: [8021, 5612, 3457],
                percentage: [44.3, 31, 19.1]
            },
            topPages: [{
                pageUrl: "/dashboard",
                views: {
                    amount: 1452,
                    growth: 2.2
                },
                uniqueVisitor: {
                    amount: 236,
                    growth: 1.5
                }
            }, {
                pageUrl: "/affiliate",
                views: {
                    amount: 879,
                    growth: 1.5
                },
                uniqueVisitor: {
                    amount: 191,
                    growth: 1
                }
            }, {
                pageUrl: "/contract",
                views: {
                    amount: 698,
                    growth: 2.8
                },
                uniqueVisitor: {
                    amount: 157,
                    growth: 1.7
                }
            }, {
                pageUrl: "/products",
                views: {
                    amount: 1165,
                    growth: -.4
                },
                uniqueVisitor: {
                    amount: 223,
                    growth: -.1
                }
            }, {
                pageUrl: "/sign-in",
                views: {
                    amount: 364,
                    growth: 1.2
                },
                uniqueVisitor: {
                    amount: 93,
                    growth: .8
                }
            }, {
                pageUrl: "/about",
                views: {
                    amount: 501,
                    growth: -.8
                },
                uniqueVisitor: {
                    amount: 107,
                    growth: -1.3
                }
            }]
        }
    },
    sr = {
        kpiSummary: {
            totalMarketingSpend: {
                value: 192817,
                growShrink: 5.3
            },
            roi: {
                value: 270,
                growShrink: 8.1
            },
            conversionRates: {
                value: 4.5,
                growShrink: .9
            },
            totalLeads: {
                value: 1289,
                growShrink: 16.2
            }
        },
        adsPerformance: {
            campagin: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
            email: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
            label: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"]
        },
        leadPerformance: {
            categories: ["Lead Volume", "Conversion Rate", "Lead Quality", "Response Time", "Cost per Lead"],
            series: [78, 57, 26, 76, 42]
        },
        recentCampaign: [{
            id: "9b528c7c-2a14-4b28-a757-01ec7f658977",
            name: "Summer Sale",
            startDate: new Date().setDate(N.getDate() - 10),
            endDate: new Date().setDate(N.getDate() + 3),
            budget: 2e4,
            leadsGenerated: 500,
            conversions: 50,
            conversionRate: 10,
            status: "completed",
            type: "promotional",
            audienceGroup: ["General Public"]
        }, {
            id: "094ab259-bab2-40e0-8264-2a778d049dcf",
            name: "Back-to-School Promo",
            startDate: new Date().setDate(N.getDate() - 5),
            endDate: new Date().setDate(N.getDate() + 4),
            budget: 15e3,
            leadsGenerated: 400,
            conversions: 35,
            conversionRate: 8.75,
            status: "active",
            type: "seasonal",
            audienceGroup: ["Students and Parents"]
        }, {
            id: "5ee0a8f9-5426-4dfc-8aef-801aa377bea7",
            name: "New Product Launch",
            startDate: new Date().setDate(N.getDate() - 2),
            endDate: new Date().setDate(N.getDate() + 6),
            budget: 3e4,
            leadsGenerated: 600,
            conversions: 60,
            conversionRate: 10,
            status: "active",
            type: "seasonal",
            audienceGroup: ["Tech Enthusiasts"]
        }, {
            id: "8c6239d0-c512-46e6-9a08-fc3735229c77",
            name: "Holiday Gift Guide",
            startDate: new Date().setDate(N.getDate() - 5),
            endDate: new Date().setDate(N.getDate() + 4),
            budget: 5e4,
            leadsGenerated: 0,
            conversions: 0,
            conversionRate: 0,
            status: "scheduled",
            type: "launch",
            audienceGroup: ["Gift Shoppers"]
        }, {
            id: "7e35f7cb-04d5-4acc-a881-ab3faba1d310",
            name: "Clearance Sale",
            startDate: new Date().setDate(N.getDate() - 5),
            endDate: new Date().setDate(N.getDate() + 4),
            budget: 1e4,
            leadsGenerated: 300,
            conversions: 20,
            conversionRate: 6.67,
            status: "active",
            type: "promotional",
            audienceGroup: ["Existing Customers"]
        }]
    };
C.onGet("/api/dashboard/ecommerce").reply(() => [200, rr]);
C.onGet("/api/dashboard/project").reply(() => [200, { ...or
}]);
C.onGet("/api/dashboard/analytic").reply(() => [200, { ...nr
}]);
C.onGet("/api/dashboard/marketing").reply(() => [200, sr]);
C.onAny().passThrough();