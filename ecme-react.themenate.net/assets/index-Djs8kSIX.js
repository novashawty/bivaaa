import {
    g as ke,
    s as ve,
    a as Ue
} from "./index.esm-DEJyB0Hz.js";
const Ee = (n, e, t) => {
        if (n && "reportValidity" in n) {
            const r = ke(t, e);
            n.setCustomValidity(r && r.message || ""), n.reportValidity()
        }
    },
    Re = (n, e) => {
        for (const t in e.fields) {
            const r = e.fields[t];
            r && r.ref && "reportValidity" in r.ref ? Ee(r.ref, t, n) : r.refs && r.refs.forEach(s => Ee(s, t, n))
        }
    },
    Be = (n, e) => {
        e.shouldUseNativeValidation && Re(n, e);
        const t = {};
        for (const r in n) {
            const s = ke(e.fields, r),
                a = Object.assign(n[r] || {}, {
                    ref: s && s.ref
                });
            if (We(e.names || Object.keys(n), r)) {
                const i = Object.assign({}, ke(t, r));
                ve(i, "root", a), ve(t, r, i)
            } else ve(t, r, a)
        }
        return t
    },
    We = (n, e) => n.some(t => t.startsWith(e + "."));
var qe = function(n, e) {
        for (var t = {}; n.length;) {
            var r = n[0],
                s = r.code,
                a = r.message,
                i = r.path.join(".");
            if (!t[i])
                if ("unionErrors" in r) {
                    var o = r.unionErrors[0].errors[0];
                    t[i] = {
                        message: o.message,
                        type: o.code
                    }
                } else t[i] = {
                    message: a,
                    type: s
                };
            if ("unionErrors" in r && r.unionErrors.forEach(function(m) {
                    return m.errors.forEach(function(w) {
                        return n.push(w)
                    })
                }), e) {
                var u = t[i].types,
                    c = u && u[r.code];
                t[i] = Ue(i, e, t, s, c ? [].concat(c, r.message) : r.message)
            }
            n.shift()
        }
        return t
    },
    Gt = function(n, e, t) {
        return t === void 0 && (t = {}),
            function(r, s, a) {
                try {
                    return Promise.resolve(function(i, o) {
                        try {
                            var u = Promise.resolve(n[t.mode === "sync" ? "parse" : "parseAsync"](r, e)).then(function(c) {
                                return a.shouldUseNativeValidation && Re({}, a), {
                                    errors: {},
                                    values: t.raw ? r : c
                                }
                            })
                        } catch (c) {
                            return o(c)
                        }
                        return u && u.then ? u.then(void 0, o) : u
                    }(0, function(i) {
                        if (function(o) {
                                return Array.isArray(o == null ? void 0 : o.errors)
                            }(i)) return {
                            values: {},
                            errors: Be(qe(i.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a)
                        };
                        throw i
                    }))
                } catch (i) {
                    return Promise.reject(i)
                }
            }
    },
    v;
(function(n) {
    n.assertEqual = s => s;

    function e(s) {}
    n.assertIs = e;

    function t(s) {
        throw new Error
    }
    n.assertNever = t, n.arrayToEnum = s => {
        const a = {};
        for (const i of s) a[i] = i;
        return a
    }, n.getValidEnumValues = s => {
        const a = n.objectKeys(s).filter(o => typeof s[s[o]] != "number"),
            i = {};
        for (const o of a) i[o] = s[o];
        return n.objectValues(i)
    }, n.objectValues = s => n.objectKeys(s).map(function(a) {
        return s[a]
    }), n.objectKeys = typeof Object.keys == "function" ? s => Object.keys(s) : s => {
        const a = [];
        for (const i in s) Object.prototype.hasOwnProperty.call(s, i) && a.push(i);
        return a
    }, n.find = (s, a) => {
        for (const i of s)
            if (a(i)) return i
    }, n.isInteger = typeof Number.isInteger == "function" ? s => Number.isInteger(s) : s => typeof s == "number" && isFinite(s) && Math.floor(s) === s;

    function r(s, a = " | ") {
        return s.map(i => typeof i == "string" ? `'${i}'` : i).join(a)
    }
    n.joinValues = r, n.jsonStringifyReplacer = (s, a) => typeof a == "bigint" ? a.toString() : a
})(v || (v = {}));
var be;
(function(n) {
    n.mergeShapes = (e, t) => ({ ...e,
        ...t
    })
})(be || (be = {}));
const f = v.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
    I = n => {
        switch (typeof n) {
            case "undefined":
                return f.undefined;
            case "string":
                return f.string;
            case "number":
                return isNaN(n) ? f.nan : f.number;
            case "boolean":
                return f.boolean;
            case "function":
                return f.function;
            case "bigint":
                return f.bigint;
            case "symbol":
                return f.symbol;
            case "object":
                return Array.isArray(n) ? f.array : n === null ? f.null : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function" ? f.promise : typeof Map < "u" && n instanceof Map ? f.map : typeof Set < "u" && n instanceof Set ? f.set : typeof Date < "u" && n instanceof Date ? f.date : f.object;
            default:
                return f.unknown
        }
    },
    d = v.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]),
    Ye = n => JSON.stringify(n, null, 2).replace(/"([^"]+)":/g, "$1:");
class T extends Error {
    constructor(e) {
        super(), this.issues = [], this.addIssue = r => {
            this.issues = [...this.issues, r]
        }, this.addIssues = (r = []) => {
            this.issues = [...this.issues, ...r]
        };
        const t = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e
    }
    get errors() {
        return this.issues
    }
    format(e) {
        const t = e || function(a) {
                return a.message
            },
            r = {
                _errors: []
            },
            s = a => {
                for (const i of a.issues)
                    if (i.code === "invalid_union") i.unionErrors.map(s);
                    else if (i.code === "invalid_return_type") s(i.returnTypeError);
                else if (i.code === "invalid_arguments") s(i.argumentsError);
                else if (i.path.length === 0) r._errors.push(t(i));
                else {
                    let o = r,
                        u = 0;
                    for (; u < i.path.length;) {
                        const c = i.path[u];
                        u === i.path.length - 1 ? (o[c] = o[c] || {
                            _errors: []
                        }, o[c]._errors.push(t(i))) : o[c] = o[c] || {
                            _errors: []
                        }, o = o[c], u++
                    }
                }
            };
        return s(this), r
    }
    static assert(e) {
        if (!(e instanceof T)) throw new Error(`Not a ZodError: ${e}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, v.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e = t => t.message) {
        const t = {},
            r = [];
        for (const s of this.issues) s.path.length > 0 ? (t[s.path[0]] = t[s.path[0]] || [], t[s.path[0]].push(e(s))) : r.push(e(s));
        return {
            formErrors: r,
            fieldErrors: t
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
T.create = n => new T(n);
const W = (n, e) => {
    let t;
    switch (n.code) {
        case d.invalid_type:
            n.received === f.undefined ? t = "Required" : t = `Expected ${n.expected}, received ${n.received}`;
            break;
        case d.invalid_literal:
            t = `Invalid literal value, expected ${JSON.stringify(n.expected,v.jsonStringifyReplacer)}`;
            break;
        case d.unrecognized_keys:
            t = `Unrecognized key(s) in object: ${v.joinValues(n.keys,", ")}`;
            break;
        case d.invalid_union:
            t = "Invalid input";
            break;
        case d.invalid_union_discriminator:
            t = `Invalid discriminator value. Expected ${v.joinValues(n.options)}`;
            break;
        case d.invalid_enum_value:
            t = `Invalid enum value. Expected ${v.joinValues(n.options)}, received '${n.received}'`;
            break;
        case d.invalid_arguments:
            t = "Invalid function arguments";
            break;
        case d.invalid_return_type:
            t = "Invalid function return type";
            break;
        case d.invalid_date:
            t = "Invalid date";
            break;
        case d.invalid_string:
            typeof n.validation == "object" ? "includes" in n.validation ? (t = `Invalid input: must include "${n.validation.includes}"`, typeof n.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${n.validation.position}`)) : "startsWith" in n.validation ? t = `Invalid input: must start with "${n.validation.startsWith}"` : "endsWith" in n.validation ? t = `Invalid input: must end with "${n.validation.endsWith}"` : v.assertNever(n.validation) : n.validation !== "regex" ? t = `Invalid ${n.validation}` : t = "Invalid";
            break;
        case d.too_small:
            n.type === "array" ? t = `Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}` : n.type === "date" ? t = `Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}` : t = "Invalid input";
            break;
        case d.too_big:
            n.type === "array" ? t = `Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}` : n.type === "bigint" ? t = `BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}` : n.type === "date" ? t = `Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}` : t = "Invalid input";
            break;
        case d.custom:
            t = "Invalid input";
            break;
        case d.invalid_intersection_types:
            t = "Intersection results could not be merged";
            break;
        case d.not_multiple_of:
            t = `Number must be a multiple of ${n.multipleOf}`;
            break;
        case d.not_finite:
            t = "Number must be finite";
            break;
        default:
            t = e.defaultError, v.assertNever(n)
    }
    return {
        message: t
    }
};
let je = W;

function Je(n) {
    je = n
}

function ue() {
    return je
}
const le = n => {
        const {
            data: e,
            path: t,
            errorMaps: r,
            issueData: s
        } = n, a = [...t, ...s.path || []], i = { ...s,
            path: a
        };
        if (s.message !== void 0) return { ...s,
            path: a,
            message: s.message
        };
        let o = "";
        const u = r.filter(c => !!c).slice().reverse();
        for (const c of u) o = c(i, {
            data: e,
            defaultError: o
        }).message;
        return { ...s,
            path: a,
            message: o
        }
    },
    He = [];

function l(n, e) {
    const t = ue(),
        r = le({
            issueData: e,
            data: n.data,
            path: n.path,
            errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, t, t === W ? void 0 : W].filter(s => !!s)
        });
    n.common.issues.push(r)
}
class k {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(e, t) {
        const r = [];
        for (const s of t) {
            if (s.status === "aborted") return y;
            s.status === "dirty" && e.dirty(), r.push(s.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
    static async mergeObjectAsync(e, t) {
        const r = [];
        for (const s of t) {
            const a = await s.key,
                i = await s.value;
            r.push({
                key: a,
                value: i
            })
        }
        return k.mergeObjectSync(e, r)
    }
    static mergeObjectSync(e, t) {
        const r = {};
        for (const s of t) {
            const {
                key: a,
                value: i
            } = s;
            if (a.status === "aborted" || i.status === "aborted") return y;
            a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (r[a.value] = i.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
}
const y = Object.freeze({
        status: "aborted"
    }),
    U = n => ({
        status: "dirty",
        value: n
    }),
    b = n => ({
        status: "valid",
        value: n
    }),
    we = n => n.status === "aborted",
    Te = n => n.status === "dirty",
    G = n => n.status === "valid",
    X = n => typeof Promise < "u" && n instanceof Promise;

function fe(n, e, t, r) {
    if (typeof e == "function" ? n !== e || !0 : !e.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return e.get(n)
}

function Ie(n, e, t, r, s) {
    if (typeof e == "function" ? n !== e || !0 : !e.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return e.set(n, t), t
}
var h;
(function(n) {
    n.errToObj = e => typeof e == "string" ? {
        message: e
    } : e || {}, n.toString = e => typeof e == "string" ? e : e == null ? void 0 : e.message
})(h || (h = {}));
var J, H;
class N {
    constructor(e, t, r, s) {
        this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = s
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
    }
}
const Ne = (n, e) => {
    if (G(e)) return {
        success: !0,
        data: e.value
    };
    if (!n.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error) return this._error;
            const t = new T(n.common.issues);
            return this._error = t, this._error
        }
    }
};

function _(n) {
    if (!n) return {};
    const {
        errorMap: e,
        invalid_type_error: t,
        required_error: r,
        description: s
    } = n;
    if (e && (t || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: s
    } : {
        errorMap: (i, o) => {
            var u, c;
            const {
                message: m
            } = n;
            return i.code === "invalid_enum_value" ? {
                message: m ? ? o.defaultError
            } : typeof o.data > "u" ? {
                message: (u = m ? ? r) !== null && u !== void 0 ? u : o.defaultError
            } : i.code !== "invalid_type" ? {
                message: o.defaultError
            } : {
                message: (c = m ? ? t) !== null && c !== void 0 ? c : o.defaultError
            }
        },
        description: s
    }
}
class g {
    constructor(e) {
        this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
    }
    get description() {
        return this._def.description
    }
    _getType(e) {
        return I(e.data)
    }
    _getOrReturnCtx(e, t) {
        return t || {
            common: e.parent.common,
            data: e.data,
            parsedType: I(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new k,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: I(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        const t = this._parse(e);
        if (X(t)) throw new Error("Synchronous parse encountered promise.");
        return t
    }
    _parseAsync(e) {
        const t = this._parse(e);
        return Promise.resolve(t)
    }
    parse(e, t) {
        const r = this.safeParse(e, t);
        if (r.success) return r.data;
        throw r.error
    }
    safeParse(e, t) {
        var r;
        const s = {
                common: {
                    issues: [],
                    async: (r = t == null ? void 0 : t.async) !== null && r !== void 0 ? r : !1,
                    contextualErrorMap: t == null ? void 0 : t.errorMap
                },
                path: (t == null ? void 0 : t.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: I(e)
            },
            a = this._parseSync({
                data: e,
                path: s.path,
                parent: s
            });
        return Ne(s, a)
    }
    async parseAsync(e, t) {
        const r = await this.safeParseAsync(e, t);
        if (r.success) return r.data;
        throw r.error
    }
    async safeParseAsync(e, t) {
        const r = {
                common: {
                    issues: [],
                    contextualErrorMap: t == null ? void 0 : t.errorMap,
                    async: !0
                },
                path: (t == null ? void 0 : t.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: I(e)
            },
            s = this._parse({
                data: e,
                path: r.path,
                parent: r
            }),
            a = await (X(s) ? s : Promise.resolve(s));
        return Ne(r, a)
    }
    refine(e, t) {
        const r = s => typeof t == "string" || typeof t > "u" ? {
            message: t
        } : typeof t == "function" ? t(s) : t;
        return this._refinement((s, a) => {
            const i = e(s),
                o = () => a.addIssue({
                    code: d.custom,
                    ...r(s)
                });
            return typeof Promise < "u" && i instanceof Promise ? i.then(u => u ? !0 : (o(), !1)) : i ? !0 : (o(), !1)
        })
    }
    refinement(e, t) {
        return this._refinement((r, s) => e(r) ? !0 : (s.addIssue(typeof t == "function" ? t(r, s) : t), !1))
    }
    _refinement(e) {
        return new C({
            schema: this,
            typeName: p.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    optional() {
        return E.create(this, this._def)
    }
    nullable() {
        return $.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return S.create(this, this._def)
    }
    promise() {
        return Y.create(this, this._def)
    }
    or(e) {
        return ee.create([this, e], this._def)
    }
    and(e) {
        return te.create(this, e, this._def)
    }
    transform(e) {
        return new C({ ..._(this._def),
            schema: this,
            typeName: p.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        })
    }
    default (e) {
        const t = typeof e == "function" ? e : () => e;
        return new ie({ ..._(this._def),
            innerType: this,
            defaultValue: t,
            typeName: p.ZodDefault
        })
    }
    brand() {
        return new Se({
            typeName: p.ZodBranded,
            type: this,
            ..._(this._def)
        })
    } catch (e) {
        const t = typeof e == "function" ? e : () => e;
        return new oe({ ..._(this._def),
            innerType: this,
            catchValue: t,
            typeName: p.ZodCatch
        })
    }
    describe(e) {
        const t = this.constructor;
        return new t({ ...this._def,
            description: e
        })
    }
    pipe(e) {
        return ce.create(this, e)
    }
    readonly() {
        return de.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const Ge = /^c[^\s-]{8,}$/i,
    Xe = /^[0-9a-z]+$/,
    Qe = /^[0-9A-HJKMNP-TV-Z]{26}$/,
    Ke = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
    Fe = /^[a-z0-9_-]{21}$/i,
    et = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    tt = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    nt = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let xe;
const rt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    st = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    at = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    Ae = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
    it = new RegExp(`^${Ae}$`);

function Me(n) {
    let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return n.precision ? e = `${e}\\.\\d{${n.precision}}` : n.precision == null && (e = `${e}(\\.\\d+)?`), e
}

function ot(n) {
    return new RegExp(`^${Me(n)}$`)
}

function Ve(n) {
    let e = `${Ae}T${Me(n)}`;
    const t = [];
    return t.push(n.local ? "Z?" : "Z"), n.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`)
}

function dt(n, e) {
    return !!((e === "v4" || !e) && rt.test(n) || (e === "v6" || !e) && st.test(n))
}
class Z extends g {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== f.string) {
            const a = this._getOrReturnCtx(e);
            return l(a, {
                code: d.invalid_type,
                expected: f.string,
                received: a.parsedType
            }), y
        }
        const r = new k;
        let s;
        for (const a of this._def.checks)
            if (a.kind === "min") e.data.length < a.value && (s = this._getOrReturnCtx(e, s), l(s, {
                code: d.too_small,
                minimum: a.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: a.message
            }), r.dirty());
            else if (a.kind === "max") e.data.length > a.value && (s = this._getOrReturnCtx(e, s), l(s, {
            code: d.too_big,
            maximum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message
        }), r.dirty());
        else if (a.kind === "length") {
            const i = e.data.length > a.value,
                o = e.data.length < a.value;
            (i || o) && (s = this._getOrReturnCtx(e, s), i ? l(s, {
                code: d.too_big,
                maximum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message
            }) : o && l(s, {
                code: d.too_small,
                minimum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message
            }), r.dirty())
        } else if (a.kind === "email") tt.test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            validation: "email",
            code: d.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "emoji") xe || (xe = new RegExp(nt, "u")), xe.test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            validation: "emoji",
            code: d.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "uuid") Ke.test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            validation: "uuid",
            code: d.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "nanoid") Fe.test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            validation: "nanoid",
            code: d.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "cuid") Ge.test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            validation: "cuid",
            code: d.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "cuid2") Xe.test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            validation: "cuid2",
            code: d.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "ulid") Qe.test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            validation: "ulid",
            code: d.invalid_string,
            message: a.message
        }), r.dirty());
        else if (a.kind === "url") try {
            new URL(e.data)
        } catch {
            s = this._getOrReturnCtx(e, s), l(s, {
                validation: "url",
                code: d.invalid_string,
                message: a.message
            }), r.dirty()
        } else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            validation: "regex",
            code: d.invalid_string,
            message: a.message
        }), r.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(e, s), l(s, {
            code: d.invalid_string,
            validation: {
                includes: a.value,
                position: a.position
            },
            message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (s = this._getOrReturnCtx(e, s), l(s, {
            code: d.invalid_string,
            validation: {
                startsWith: a.value
            },
            message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (s = this._getOrReturnCtx(e, s), l(s, {
            code: d.invalid_string,
            validation: {
                endsWith: a.value
            },
            message: a.message
        }), r.dirty()) : a.kind === "datetime" ? Ve(a).test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            code: d.invalid_string,
            validation: "datetime",
            message: a.message
        }), r.dirty()) : a.kind === "date" ? it.test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            code: d.invalid_string,
            validation: "date",
            message: a.message
        }), r.dirty()) : a.kind === "time" ? ot(a).test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            code: d.invalid_string,
            validation: "time",
            message: a.message
        }), r.dirty()) : a.kind === "duration" ? et.test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            validation: "duration",
            code: d.invalid_string,
            message: a.message
        }), r.dirty()) : a.kind === "ip" ? dt(e.data, a.version) || (s = this._getOrReturnCtx(e, s), l(s, {
            validation: "ip",
            code: d.invalid_string,
            message: a.message
        }), r.dirty()) : a.kind === "base64" ? at.test(e.data) || (s = this._getOrReturnCtx(e, s), l(s, {
            validation: "base64",
            code: d.invalid_string,
            message: a.message
        }), r.dirty()) : v.assertNever(a);
        return {
            status: r.value,
            value: e.data
        }
    }
    _regex(e, t, r) {
        return this.refinement(s => e.test(s), {
            validation: t,
            code: d.invalid_string,
            ...h.errToObj(r)
        })
    }
    _addCheck(e) {
        return new Z({ ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...h.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...h.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...h.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...h.errToObj(e)
        })
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...h.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...h.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...h.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...h.errToObj(e)
        })
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...h.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...h.errToObj(e)
        })
    }
    datetime(e) {
        var t, r;
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof(e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            offset: (t = e == null ? void 0 : e.offset) !== null && t !== void 0 ? t : !1,
            local: (r = e == null ? void 0 : e.local) !== null && r !== void 0 ? r : !1,
            ...h.errToObj(e == null ? void 0 : e.message)
        })
    }
    date(e) {
        return this._addCheck({
            kind: "date",
            message: e
        })
    }
    time(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: e
        }) : this._addCheck({
            kind: "time",
            precision: typeof(e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            ...h.errToObj(e == null ? void 0 : e.message)
        })
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...h.errToObj(e)
        })
    }
    regex(e, t) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...h.errToObj(t)
        })
    }
    includes(e, t) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: t == null ? void 0 : t.position,
            ...h.errToObj(t == null ? void 0 : t.message)
        })
    }
    startsWith(e, t) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...h.errToObj(t)
        })
    }
    endsWith(e, t) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...h.errToObj(t)
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...h.errToObj(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...h.errToObj(t)
        })
    }
    length(e, t) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...h.errToObj(t)
        })
    }
    nonempty(e) {
        return this.min(1, h.errToObj(e))
    }
    trim() {
        return new Z({ ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new Z({ ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new Z({ ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e => e.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(e => e.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(e => e.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(e => e.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(e => e.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(e => e.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(e => e.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(e => e.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(e => e.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(e => e.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(e => e.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(e => e.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(e => e.kind === "ip")
    }
    get isBase64() {
        return !!this._def.checks.find(e => e.kind === "base64")
    }
    get minLength() {
        let e = null;
        for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
Z.create = n => {
    var e;
    return new Z({
        checks: [],
        typeName: p.ZodString,
        coerce: (e = n == null ? void 0 : n.coerce) !== null && e !== void 0 ? e : !1,
        ..._(n)
    })
};

function ct(n, e) {
    const t = (n.toString().split(".")[1] || "").length,
        r = (e.toString().split(".")[1] || "").length,
        s = t > r ? t : r,
        a = parseInt(n.toFixed(s).replace(".", "")),
        i = parseInt(e.toFixed(s).replace(".", ""));
    return a % i / Math.pow(10, s)
}
class A extends g {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== f.number) {
            const a = this._getOrReturnCtx(e);
            return l(a, {
                code: d.invalid_type,
                expected: f.number,
                received: a.parsedType
            }), y
        }
        let r;
        const s = new k;
        for (const a of this._def.checks) a.kind === "int" ? v.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), l(r, {
            code: d.invalid_type,
            expected: "integer",
            received: "float",
            message: a.message
        }), s.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (r = this._getOrReturnCtx(e, r), l(r, {
            code: d.too_small,
            minimum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message
        }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (r = this._getOrReturnCtx(e, r), l(r, {
            code: d.too_big,
            maximum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message
        }), s.dirty()) : a.kind === "multipleOf" ? ct(e.data, a.value) !== 0 && (r = this._getOrReturnCtx(e, r), l(r, {
            code: d.not_multiple_of,
            multipleOf: a.value,
            message: a.message
        }), s.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), l(r, {
            code: d.not_finite,
            message: a.message
        }), s.dirty()) : v.assertNever(a);
        return {
            status: s.value,
            value: e.data
        }
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, h.toString(t))
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, h.toString(t))
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, h.toString(t))
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, h.toString(t))
    }
    setLimit(e, t, r, s) {
        return new A({ ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: t,
                inclusive: r,
                message: h.toString(s)
            }]
        })
    }
    _addCheck(e) {
        return new A({ ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: h.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: h.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: h.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: h.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: h.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: h.toString(t)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: h.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: h.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: h.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && v.isInteger(e.value))
    }
    get isFinite() {
        let e = null,
            t = null;
        for (const r of this._def.checks) {
            if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return !0;
            r.kind === "min" ? (t === null || r.value > t) && (t = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value)
        }
        return Number.isFinite(t) && Number.isFinite(e)
    }
}
A.create = n => new A({
    checks: [],
    typeName: p.ZodNumber,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ..._(n)
});
class M extends g {
    constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== f.bigint) {
            const a = this._getOrReturnCtx(e);
            return l(a, {
                code: d.invalid_type,
                expected: f.bigint,
                received: a.parsedType
            }), y
        }
        let r;
        const s = new k;
        for (const a of this._def.checks) a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (r = this._getOrReturnCtx(e, r), l(r, {
            code: d.too_small,
            type: "bigint",
            minimum: a.value,
            inclusive: a.inclusive,
            message: a.message
        }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (r = this._getOrReturnCtx(e, r), l(r, {
            code: d.too_big,
            type: "bigint",
            maximum: a.value,
            inclusive: a.inclusive,
            message: a.message
        }), s.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), l(r, {
            code: d.not_multiple_of,
            multipleOf: a.value,
            message: a.message
        }), s.dirty()) : v.assertNever(a);
        return {
            status: s.value,
            value: e.data
        }
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, h.toString(t))
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, h.toString(t))
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, h.toString(t))
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, h.toString(t))
    }
    setLimit(e, t, r, s) {
        return new M({ ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: t,
                inclusive: r,
                message: h.toString(s)
            }]
        })
    }
    _addCheck(e) {
        return new M({ ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: h.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: h.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: h.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: h.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: h.toString(t)
        })
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
M.create = n => {
    var e;
    return new M({
        checks: [],
        typeName: p.ZodBigInt,
        coerce: (e = n == null ? void 0 : n.coerce) !== null && e !== void 0 ? e : !1,
        ..._(n)
    })
};
class Q extends g {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== f.boolean) {
            const r = this._getOrReturnCtx(e);
            return l(r, {
                code: d.invalid_type,
                expected: f.boolean,
                received: r.parsedType
            }), y
        }
        return b(e.data)
    }
}
Q.create = n => new Q({
    typeName: p.ZodBoolean,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ..._(n)
});
class D extends g {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== f.date) {
            const a = this._getOrReturnCtx(e);
            return l(a, {
                code: d.invalid_type,
                expected: f.date,
                received: a.parsedType
            }), y
        }
        if (isNaN(e.data.getTime())) {
            const a = this._getOrReturnCtx(e);
            return l(a, {
                code: d.invalid_date
            }), y
        }
        const r = new k;
        let s;
        for (const a of this._def.checks) a.kind === "min" ? e.data.getTime() < a.value && (s = this._getOrReturnCtx(e, s), l(s, {
            code: d.too_small,
            message: a.message,
            inclusive: !0,
            exact: !1,
            minimum: a.value,
            type: "date"
        }), r.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (s = this._getOrReturnCtx(e, s), l(s, {
            code: d.too_big,
            message: a.message,
            inclusive: !0,
            exact: !1,
            maximum: a.value,
            type: "date"
        }), r.dirty()) : v.assertNever(a);
        return {
            status: r.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(e) {
        return new D({ ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: h.toString(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: h.toString(t)
        })
    }
    get minDate() {
        let e = null;
        for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e != null ? new Date(e) : null
    }
    get maxDate() {
        let e = null;
        for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e != null ? new Date(e) : null
    }
}
D.create = n => new D({
    checks: [],
    coerce: (n == null ? void 0 : n.coerce) || !1,
    typeName: p.ZodDate,
    ..._(n)
});
class he extends g {
    _parse(e) {
        if (this._getType(e) !== f.symbol) {
            const r = this._getOrReturnCtx(e);
            return l(r, {
                code: d.invalid_type,
                expected: f.symbol,
                received: r.parsedType
            }), y
        }
        return b(e.data)
    }
}
he.create = n => new he({
    typeName: p.ZodSymbol,
    ..._(n)
});
class K extends g {
    _parse(e) {
        if (this._getType(e) !== f.undefined) {
            const r = this._getOrReturnCtx(e);
            return l(r, {
                code: d.invalid_type,
                expected: f.undefined,
                received: r.parsedType
            }), y
        }
        return b(e.data)
    }
}
K.create = n => new K({
    typeName: p.ZodUndefined,
    ..._(n)
});
class F extends g {
    _parse(e) {
        if (this._getType(e) !== f.null) {
            const r = this._getOrReturnCtx(e);
            return l(r, {
                code: d.invalid_type,
                expected: f.null,
                received: r.parsedType
            }), y
        }
        return b(e.data)
    }
}
F.create = n => new F({
    typeName: p.ZodNull,
    ..._(n)
});
class q extends g {
    constructor() {
        super(...arguments), this._any = !0
    }
    _parse(e) {
        return b(e.data)
    }
}
q.create = n => new q({
    typeName: p.ZodAny,
    ..._(n)
});
class P extends g {
    constructor() {
        super(...arguments), this._unknown = !0
    }
    _parse(e) {
        return b(e.data)
    }
}
P.create = n => new P({
    typeName: p.ZodUnknown,
    ..._(n)
});
class j extends g {
    _parse(e) {
        const t = this._getOrReturnCtx(e);
        return l(t, {
            code: d.invalid_type,
            expected: f.never,
            received: t.parsedType
        }), y
    }
}
j.create = n => new j({
    typeName: p.ZodNever,
    ..._(n)
});
class pe extends g {
    _parse(e) {
        if (this._getType(e) !== f.undefined) {
            const r = this._getOrReturnCtx(e);
            return l(r, {
                code: d.invalid_type,
                expected: f.void,
                received: r.parsedType
            }), y
        }
        return b(e.data)
    }
}
pe.create = n => new pe({
    typeName: p.ZodVoid,
    ..._(n)
});
class S extends g {
    _parse(e) {
        const {
            ctx: t,
            status: r
        } = this._processInputParams(e), s = this._def;
        if (t.parsedType !== f.array) return l(t, {
            code: d.invalid_type,
            expected: f.array,
            received: t.parsedType
        }), y;
        if (s.exactLength !== null) {
            const i = t.data.length > s.exactLength.value,
                o = t.data.length < s.exactLength.value;
            (i || o) && (l(t, {
                code: i ? d.too_big : d.too_small,
                minimum: o ? s.exactLength.value : void 0,
                maximum: i ? s.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: s.exactLength.message
            }), r.dirty())
        }
        if (s.minLength !== null && t.data.length < s.minLength.value && (l(t, {
                code: d.too_small,
                minimum: s.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: s.minLength.message
            }), r.dirty()), s.maxLength !== null && t.data.length > s.maxLength.value && (l(t, {
                code: d.too_big,
                maximum: s.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: s.maxLength.message
            }), r.dirty()), t.common.async) return Promise.all([...t.data].map((i, o) => s.type._parseAsync(new N(t, i, t.path, o)))).then(i => k.mergeArray(r, i));
        const a = [...t.data].map((i, o) => s.type._parseSync(new N(t, i, t.path, o)));
        return k.mergeArray(r, a)
    }
    get element() {
        return this._def.type
    }
    min(e, t) {
        return new S({ ...this._def,
            minLength: {
                value: e,
                message: h.toString(t)
            }
        })
    }
    max(e, t) {
        return new S({ ...this._def,
            maxLength: {
                value: e,
                message: h.toString(t)
            }
        })
    }
    length(e, t) {
        return new S({ ...this._def,
            exactLength: {
                value: e,
                message: h.toString(t)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
S.create = (n, e) => new S({
    type: n,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: p.ZodArray,
    ..._(e)
});

function z(n) {
    if (n instanceof x) {
        const e = {};
        for (const t in n.shape) {
            const r = n.shape[t];
            e[t] = E.create(z(r))
        }
        return new x({ ...n._def,
            shape: () => e
        })
    } else return n instanceof S ? new S({ ...n._def,
        type: z(n.element)
    }) : n instanceof E ? E.create(z(n.unwrap())) : n instanceof $ ? $.create(z(n.unwrap())) : n instanceof O ? O.create(n.items.map(e => z(e))) : n
}
class x extends g {
    constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const e = this._def.shape(),
            t = v.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: t
        }
    }
    _parse(e) {
        if (this._getType(e) !== f.object) {
            const c = this._getOrReturnCtx(e);
            return l(c, {
                code: d.invalid_type,
                expected: f.object,
                received: c.parsedType
            }), y
        }
        const {
            status: r,
            ctx: s
        } = this._processInputParams(e), {
            shape: a,
            keys: i
        } = this._getCached(), o = [];
        if (!(this._def.catchall instanceof j && this._def.unknownKeys === "strip"))
            for (const c in s.data) i.includes(c) || o.push(c);
        const u = [];
        for (const c of i) {
            const m = a[c],
                w = s.data[c];
            u.push({
                key: {
                    status: "valid",
                    value: c
                },
                value: m._parse(new N(s, w, s.path, c)),
                alwaysSet: c in s.data
            })
        }
        if (this._def.catchall instanceof j) {
            const c = this._def.unknownKeys;
            if (c === "passthrough")
                for (const m of o) u.push({
                    key: {
                        status: "valid",
                        value: m
                    },
                    value: {
                        status: "valid",
                        value: s.data[m]
                    }
                });
            else if (c === "strict") o.length > 0 && (l(s, {
                code: d.unrecognized_keys,
                keys: o
            }), r.dirty());
            else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const c = this._def.catchall;
            for (const m of o) {
                const w = s.data[m];
                u.push({
                    key: {
                        status: "valid",
                        value: m
                    },
                    value: c._parse(new N(s, w, s.path, m)),
                    alwaysSet: m in s.data
                })
            }
        }
        return s.common.async ? Promise.resolve().then(async () => {
            const c = [];
            for (const m of u) {
                const w = await m.key,
                    Ce = await m.value;
                c.push({
                    key: w,
                    value: Ce,
                    alwaysSet: m.alwaysSet
                })
            }
            return c
        }).then(c => k.mergeObjectSync(r, c)) : k.mergeObjectSync(r, u)
    }
    get shape() {
        return this._def.shape()
    }
    strict(e) {
        return h.errToObj, new x({ ...this._def,
            unknownKeys: "strict",
            ...e !== void 0 ? {
                errorMap: (t, r) => {
                    var s, a, i, o;
                    const u = (i = (a = (s = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s, t, r).message) !== null && i !== void 0 ? i : r.defaultError;
                    return t.code === "unrecognized_keys" ? {
                        message: (o = h.errToObj(e).message) !== null && o !== void 0 ? o : u
                    } : {
                        message: u
                    }
                }
            } : {}
        })
    }
    strip() {
        return new x({ ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new x({ ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(e) {
        return new x({ ...this._def,
            shape: () => ({ ...this._def.shape(),
                ...e
            })
        })
    }
    merge(e) {
        return new x({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: p.ZodObject
        })
    }
    setKey(e, t) {
        return this.augment({
            [e]: t
        })
    }
    catchall(e) {
        return new x({ ...this._def,
            catchall: e
        })
    }
    pick(e) {
        const t = {};
        return v.objectKeys(e).forEach(r => {
            e[r] && this.shape[r] && (t[r] = this.shape[r])
        }), new x({ ...this._def,
            shape: () => t
        })
    }
    omit(e) {
        const t = {};
        return v.objectKeys(this.shape).forEach(r => {
            e[r] || (t[r] = this.shape[r])
        }), new x({ ...this._def,
            shape: () => t
        })
    }
    deepPartial() {
        return z(this)
    }
    partial(e) {
        const t = {};
        return v.objectKeys(this.shape).forEach(r => {
            const s = this.shape[r];
            e && !e[r] ? t[r] = s : t[r] = s.optional()
        }), new x({ ...this._def,
            shape: () => t
        })
    }
    required(e) {
        const t = {};
        return v.objectKeys(this.shape).forEach(r => {
            if (e && !e[r]) t[r] = this.shape[r];
            else {
                let a = this.shape[r];
                for (; a instanceof E;) a = a._def.innerType;
                t[r] = a
            }
        }), new x({ ...this._def,
            shape: () => t
        })
    }
    keyof() {
        return $e(v.objectKeys(this.shape))
    }
}
x.create = (n, e) => new x({
    shape: () => n,
    unknownKeys: "strip",
    catchall: j.create(),
    typeName: p.ZodObject,
    ..._(e)
});
x.strictCreate = (n, e) => new x({
    shape: () => n,
    unknownKeys: "strict",
    catchall: j.create(),
    typeName: p.ZodObject,
    ..._(e)
});
x.lazycreate = (n, e) => new x({
    shape: n,
    unknownKeys: "strip",
    catchall: j.create(),
    typeName: p.ZodObject,
    ..._(e)
});
class ee extends g {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e), r = this._def.options;

        function s(a) {
            for (const o of a)
                if (o.result.status === "valid") return o.result;
            for (const o of a)
                if (o.result.status === "dirty") return t.common.issues.push(...o.ctx.common.issues), o.result;
            const i = a.map(o => new T(o.ctx.common.issues));
            return l(t, {
                code: d.invalid_union,
                unionErrors: i
            }), y
        }
        if (t.common.async) return Promise.all(r.map(async a => {
            const i = { ...t,
                common: { ...t.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await a._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: i
                }),
                ctx: i
            }
        })).then(s); {
            let a;
            const i = [];
            for (const u of r) {
                const c = { ...t,
                        common: { ...t.common,
                            issues: []
                        },
                        parent: null
                    },
                    m = u._parseSync({
                        data: t.data,
                        path: t.path,
                        parent: c
                    });
                if (m.status === "valid") return m;
                m.status === "dirty" && !a && (a = {
                    result: m,
                    ctx: c
                }), c.common.issues.length && i.push(c.common.issues)
            }
            if (a) return t.common.issues.push(...a.ctx.common.issues), a.result;
            const o = i.map(u => new T(u));
            return l(t, {
                code: d.invalid_union,
                unionErrors: o
            }), y
        }
    }
    get options() {
        return this._def.options
    }
}
ee.create = (n, e) => new ee({
    options: n,
    typeName: p.ZodUnion,
    ..._(e)
});
const R = n => n instanceof re ? R(n.schema) : n instanceof C ? R(n.innerType()) : n instanceof se ? [n.value] : n instanceof V ? n.options : n instanceof ae ? v.objectValues(n.enum) : n instanceof ie ? R(n._def.innerType) : n instanceof K ? [void 0] : n instanceof F ? [null] : n instanceof E ? [void 0, ...R(n.unwrap())] : n instanceof $ ? [null, ...R(n.unwrap())] : n instanceof Se || n instanceof de ? R(n.unwrap()) : n instanceof oe ? R(n._def.innerType) : [];
class _e extends g {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e);
        if (t.parsedType !== f.object) return l(t, {
            code: d.invalid_type,
            expected: f.object,
            received: t.parsedType
        }), y;
        const r = this.discriminator,
            s = t.data[r],
            a = this.optionsMap.get(s);
        return a ? t.common.async ? a._parseAsync({
            data: t.data,
            path: t.path,
            parent: t
        }) : a._parseSync({
            data: t.data,
            path: t.path,
            parent: t
        }) : (l(t, {
            code: d.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [r]
        }), y)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(e, t, r) {
        const s = new Map;
        for (const a of t) {
            const i = R(a.shape[e]);
            if (!i.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const o of i) {
                if (s.has(o)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
                s.set(o, a)
            }
        }
        return new _e({
            typeName: p.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: s,
            ..._(r)
        })
    }
}

function Ze(n, e) {
    const t = I(n),
        r = I(e);
    if (n === e) return {
        valid: !0,
        data: n
    };
    if (t === f.object && r === f.object) {
        const s = v.objectKeys(e),
            a = v.objectKeys(n).filter(o => s.indexOf(o) !== -1),
            i = { ...n,
                ...e
            };
        for (const o of a) {
            const u = Ze(n[o], e[o]);
            if (!u.valid) return {
                valid: !1
            };
            i[o] = u.data
        }
        return {
            valid: !0,
            data: i
        }
    } else if (t === f.array && r === f.array) {
        if (n.length !== e.length) return {
            valid: !1
        };
        const s = [];
        for (let a = 0; a < n.length; a++) {
            const i = n[a],
                o = e[a],
                u = Ze(i, o);
            if (!u.valid) return {
                valid: !1
            };
            s.push(u.data)
        }
        return {
            valid: !0,
            data: s
        }
    } else return t === f.date && r === f.date && +n == +e ? {
        valid: !0,
        data: n
    } : {
        valid: !1
    }
}
class te extends g {
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e), s = (a, i) => {
            if (we(a) || we(i)) return y;
            const o = Ze(a.value, i.value);
            return o.valid ? ((Te(a) || Te(i)) && t.dirty(), {
                status: t.value,
                value: o.data
            }) : (l(r, {
                code: d.invalid_intersection_types
            }), y)
        };
        return r.common.async ? Promise.all([this._def.left._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        })]).then(([a, i]) => s(a, i)) : s(this._def.left._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }))
    }
}
te.create = (n, e, t) => new te({
    left: n,
    right: e,
    typeName: p.ZodIntersection,
    ..._(t)
});
class O extends g {
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== f.array) return l(r, {
            code: d.invalid_type,
            expected: f.array,
            received: r.parsedType
        }), y;
        if (r.data.length < this._def.items.length) return l(r, {
            code: d.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), y;
        !this._def.rest && r.data.length > this._def.items.length && (l(r, {
            code: d.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }), t.dirty());
        const a = [...r.data].map((i, o) => {
            const u = this._def.items[o] || this._def.rest;
            return u ? u._parse(new N(r, i, r.path, o)) : null
        }).filter(i => !!i);
        return r.common.async ? Promise.all(a).then(i => k.mergeArray(t, i)) : k.mergeArray(t, a)
    }
    get items() {
        return this._def.items
    }
    rest(e) {
        return new O({ ...this._def,
            rest: e
        })
    }
}
O.create = (n, e) => {
    if (!Array.isArray(n)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new O({
        items: n,
        typeName: p.ZodTuple,
        rest: null,
        ..._(e)
    })
};
class ne extends g {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== f.object) return l(r, {
            code: d.invalid_type,
            expected: f.object,
            received: r.parsedType
        }), y;
        const s = [],
            a = this._def.keyType,
            i = this._def.valueType;
        for (const o in r.data) s.push({
            key: a._parse(new N(r, o, r.path, o)),
            value: i._parse(new N(r, r.data[o], r.path, o)),
            alwaysSet: o in r.data
        });
        return r.common.async ? k.mergeObjectAsync(t, s) : k.mergeObjectSync(t, s)
    }
    get element() {
        return this._def.valueType
    }
    static create(e, t, r) {
        return t instanceof g ? new ne({
            keyType: e,
            valueType: t,
            typeName: p.ZodRecord,
            ..._(r)
        }) : new ne({
            keyType: Z.create(),
            valueType: e,
            typeName: p.ZodRecord,
            ..._(t)
        })
    }
}
class me extends g {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== f.map) return l(r, {
            code: d.invalid_type,
            expected: f.map,
            received: r.parsedType
        }), y;
        const s = this._def.keyType,
            a = this._def.valueType,
            i = [...r.data.entries()].map(([o, u], c) => ({
                key: s._parse(new N(r, o, r.path, [c, "key"])),
                value: a._parse(new N(r, u, r.path, [c, "value"]))
            }));
        if (r.common.async) {
            const o = new Map;
            return Promise.resolve().then(async () => {
                for (const u of i) {
                    const c = await u.key,
                        m = await u.value;
                    if (c.status === "aborted" || m.status === "aborted") return y;
                    (c.status === "dirty" || m.status === "dirty") && t.dirty(), o.set(c.value, m.value)
                }
                return {
                    status: t.value,
                    value: o
                }
            })
        } else {
            const o = new Map;
            for (const u of i) {
                const c = u.key,
                    m = u.value;
                if (c.status === "aborted" || m.status === "aborted") return y;
                (c.status === "dirty" || m.status === "dirty") && t.dirty(), o.set(c.value, m.value)
            }
            return {
                status: t.value,
                value: o
            }
        }
    }
}
me.create = (n, e, t) => new me({
    valueType: e,
    keyType: n,
    typeName: p.ZodMap,
    ..._(t)
});
class L extends g {
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.parsedType !== f.set) return l(r, {
            code: d.invalid_type,
            expected: f.set,
            received: r.parsedType
        }), y;
        const s = this._def;
        s.minSize !== null && r.data.size < s.minSize.value && (l(r, {
            code: d.too_small,
            minimum: s.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: s.minSize.message
        }), t.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (l(r, {
            code: d.too_big,
            maximum: s.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: s.maxSize.message
        }), t.dirty());
        const a = this._def.valueType;

        function i(u) {
            const c = new Set;
            for (const m of u) {
                if (m.status === "aborted") return y;
                m.status === "dirty" && t.dirty(), c.add(m.value)
            }
            return {
                status: t.value,
                value: c
            }
        }
        const o = [...r.data.values()].map((u, c) => a._parse(new N(r, u, r.path, c)));
        return r.common.async ? Promise.all(o).then(u => i(u)) : i(o)
    }
    min(e, t) {
        return new L({ ...this._def,
            minSize: {
                value: e,
                message: h.toString(t)
            }
        })
    }
    max(e, t) {
        return new L({ ...this._def,
            maxSize: {
                value: e,
                message: h.toString(t)
            }
        })
    }
    size(e, t) {
        return this.min(e, t).max(e, t)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
L.create = (n, e) => new L({
    valueType: n,
    minSize: null,
    maxSize: null,
    typeName: p.ZodSet,
    ..._(e)
});
class B extends g {
    constructor() {
        super(...arguments), this.validate = this.implement
    }
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e);
        if (t.parsedType !== f.function) return l(t, {
            code: d.invalid_type,
            expected: f.function,
            received: t.parsedType
        }), y;

        function r(o, u) {
            return le({
                data: o,
                path: t.path,
                errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, ue(), W].filter(c => !!c),
                issueData: {
                    code: d.invalid_arguments,
                    argumentsError: u
                }
            })
        }

        function s(o, u) {
            return le({
                data: o,
                path: t.path,
                errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, ue(), W].filter(c => !!c),
                issueData: {
                    code: d.invalid_return_type,
                    returnTypeError: u
                }
            })
        }
        const a = {
                errorMap: t.common.contextualErrorMap
            },
            i = t.data;
        if (this._def.returns instanceof Y) {
            const o = this;
            return b(async function(...u) {
                const c = new T([]),
                    m = await o._def.args.parseAsync(u, a).catch(ge => {
                        throw c.addIssue(r(u, ge)), c
                    }),
                    w = await Reflect.apply(i, this, m);
                return await o._def.returns._def.type.parseAsync(w, a).catch(ge => {
                    throw c.addIssue(s(w, ge)), c
                })
            })
        } else {
            const o = this;
            return b(function(...u) {
                const c = o._def.args.safeParse(u, a);
                if (!c.success) throw new T([r(u, c.error)]);
                const m = Reflect.apply(i, this, c.data),
                    w = o._def.returns.safeParse(m, a);
                if (!w.success) throw new T([s(m, w.error)]);
                return w.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...e) {
        return new B({ ...this._def,
            args: O.create(e).rest(P.create())
        })
    }
    returns(e) {
        return new B({ ...this._def,
            returns: e
        })
    }
    implement(e) {
        return this.parse(e)
    }
    strictImplement(e) {
        return this.parse(e)
    }
    static create(e, t, r) {
        return new B({
            args: e || O.create([]).rest(P.create()),
            returns: t || P.create(),
            typeName: p.ZodFunction,
            ..._(r)
        })
    }
}
class re extends g {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e);
        return this._def.getter()._parse({
            data: t.data,
            path: t.path,
            parent: t
        })
    }
}
re.create = (n, e) => new re({
    getter: n,
    typeName: p.ZodLazy,
    ..._(e)
});
class se extends g {
    _parse(e) {
        if (e.data !== this._def.value) {
            const t = this._getOrReturnCtx(e);
            return l(t, {
                received: t.data,
                code: d.invalid_literal,
                expected: this._def.value
            }), y
        }
        return {
            status: "valid",
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
se.create = (n, e) => new se({
    value: n,
    typeName: p.ZodLiteral,
    ..._(e)
});

function $e(n, e) {
    return new V({
        values: n,
        typeName: p.ZodEnum,
        ..._(e)
    })
}
class V extends g {
    constructor() {
        super(...arguments), J.set(this, void 0)
    }
    _parse(e) {
        if (typeof e.data != "string") {
            const t = this._getOrReturnCtx(e),
                r = this._def.values;
            return l(t, {
                expected: v.joinValues(r),
                received: t.parsedType,
                code: d.invalid_type
            }), y
        }
        if (fe(this, J) || Ie(this, J, new Set(this._def.values)), !fe(this, J).has(e.data)) {
            const t = this._getOrReturnCtx(e),
                r = this._def.values;
            return l(t, {
                received: t.data,
                code: d.invalid_enum_value,
                options: r
            }), y
        }
        return b(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const e = {};
        for (const t of this._def.values) e[t] = t;
        return e
    }
    get Values() {
        const e = {};
        for (const t of this._def.values) e[t] = t;
        return e
    }
    get Enum() {
        const e = {};
        for (const t of this._def.values) e[t] = t;
        return e
    }
    extract(e, t = this._def) {
        return V.create(e, { ...this._def,
            ...t
        })
    }
    exclude(e, t = this._def) {
        return V.create(this.options.filter(r => !e.includes(r)), { ...this._def,
            ...t
        })
    }
}
J = new WeakMap;
V.create = $e;
class ae extends g {
    constructor() {
        super(...arguments), H.set(this, void 0)
    }
    _parse(e) {
        const t = v.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
        if (r.parsedType !== f.string && r.parsedType !== f.number) {
            const s = v.objectValues(t);
            return l(r, {
                expected: v.joinValues(s),
                received: r.parsedType,
                code: d.invalid_type
            }), y
        }
        if (fe(this, H) || Ie(this, H, new Set(v.getValidEnumValues(this._def.values))), !fe(this, H).has(e.data)) {
            const s = v.objectValues(t);
            return l(r, {
                received: r.data,
                code: d.invalid_enum_value,
                options: s
            }), y
        }
        return b(e.data)
    }
    get enum() {
        return this._def.values
    }
}
H = new WeakMap;
ae.create = (n, e) => new ae({
    values: n,
    typeName: p.ZodNativeEnum,
    ..._(e)
});
class Y extends g {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e);
        if (t.parsedType !== f.promise && t.common.async === !1) return l(t, {
            code: d.invalid_type,
            expected: f.promise,
            received: t.parsedType
        }), y;
        const r = t.parsedType === f.promise ? t.data : Promise.resolve(t.data);
        return b(r.then(s => this._def.type.parseAsync(s, {
            path: t.path,
            errorMap: t.common.contextualErrorMap
        })))
    }
}
Y.create = (n, e) => new Y({
    type: n,
    typeName: p.ZodPromise,
    ..._(e)
});
class C extends g {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === p.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e), s = this._def.effect || null, a = {
            addIssue: i => {
                l(r, i), i.fatal ? t.abort() : t.dirty()
            },
            get path() {
                return r.path
            }
        };
        if (a.addIssue = a.addIssue.bind(a), s.type === "preprocess") {
            const i = s.transform(r.data, a);
            if (r.common.async) return Promise.resolve(i).then(async o => {
                if (t.value === "aborted") return y;
                const u = await this._def.schema._parseAsync({
                    data: o,
                    path: r.path,
                    parent: r
                });
                return u.status === "aborted" ? y : u.status === "dirty" || t.value === "dirty" ? U(u.value) : u
            }); {
                if (t.value === "aborted") return y;
                const o = this._def.schema._parseSync({
                    data: i,
                    path: r.path,
                    parent: r
                });
                return o.status === "aborted" ? y : o.status === "dirty" || t.value === "dirty" ? U(o.value) : o
            }
        }
        if (s.type === "refinement") {
            const i = o => {
                const u = s.refinement(o, a);
                if (r.common.async) return Promise.resolve(u);
                if (u instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return o
            };
            if (r.common.async === !1) {
                const o = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return o.status === "aborted" ? y : (o.status === "dirty" && t.dirty(), i(o.value), {
                    status: t.value,
                    value: o.value
                })
            } else return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then(o => o.status === "aborted" ? y : (o.status === "dirty" && t.dirty(), i(o.value).then(() => ({
                status: t.value,
                value: o.value
            }))))
        }
        if (s.type === "transform")
            if (r.common.async === !1) {
                const i = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!G(i)) return i;
                const o = s.transform(i.value, a);
                if (o instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: t.value,
                    value: o
                }
            } else return this._def.schema._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            }).then(i => G(i) ? Promise.resolve(s.transform(i.value, a)).then(o => ({
                status: t.value,
                value: o
            })) : i);
        v.assertNever(s)
    }
}
C.create = (n, e, t) => new C({
    schema: n,
    typeName: p.ZodEffects,
    effect: e,
    ..._(t)
});
C.createWithPreprocess = (n, e, t) => new C({
    schema: e,
    effect: {
        type: "preprocess",
        transform: n
    },
    typeName: p.ZodEffects,
    ..._(t)
});
class E extends g {
    _parse(e) {
        return this._getType(e) === f.undefined ? b(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
E.create = (n, e) => new E({
    innerType: n,
    typeName: p.ZodOptional,
    ..._(e)
});
class $ extends g {
    _parse(e) {
        return this._getType(e) === f.null ? b(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
$.create = (n, e) => new $({
    innerType: n,
    typeName: p.ZodNullable,
    ..._(e)
});
class ie extends g {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e);
        let r = t.data;
        return t.parsedType === f.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
            data: r,
            path: t.path,
            parent: t
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
ie.create = (n, e) => new ie({
    innerType: n,
    typeName: p.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ..._(e)
});
class oe extends g {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e), r = { ...t,
            common: { ...t.common,
                issues: []
            }
        }, s = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: { ...r
            }
        });
        return X(s) ? s.then(a => ({
            status: "valid",
            value: a.status === "valid" ? a.value : this._def.catchValue({
                get error() {
                    return new T(r.common.issues)
                },
                input: r.data
            })
        })) : {
            status: "valid",
            value: s.status === "valid" ? s.value : this._def.catchValue({
                get error() {
                    return new T(r.common.issues)
                },
                input: r.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
oe.create = (n, e) => new oe({
    innerType: n,
    typeName: p.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ..._(e)
});
class ye extends g {
    _parse(e) {
        if (this._getType(e) !== f.nan) {
            const r = this._getOrReturnCtx(e);
            return l(r, {
                code: d.invalid_type,
                expected: f.nan,
                received: r.parsedType
            }), y
        }
        return {
            status: "valid",
            value: e.data
        }
    }
}
ye.create = n => new ye({
    typeName: p.ZodNaN,
    ..._(n)
});
const ut = Symbol("zod_brand");
class Se extends g {
    _parse(e) {
        const {
            ctx: t
        } = this._processInputParams(e), r = t.data;
        return this._def.type._parse({
            data: r,
            path: t.path,
            parent: t
        })
    }
    unwrap() {
        return this._def.type
    }
}
class ce extends g {
    _parse(e) {
        const {
            status: t,
            ctx: r
        } = this._processInputParams(e);
        if (r.common.async) return (async () => {
            const a = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return a.status === "aborted" ? y : a.status === "dirty" ? (t.dirty(), U(a.value)) : this._def.out._parseAsync({
                data: a.value,
                path: r.path,
                parent: r
            })
        })(); {
            const s = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return s.status === "aborted" ? y : s.status === "dirty" ? (t.dirty(), {
                status: "dirty",
                value: s.value
            }) : this._def.out._parseSync({
                data: s.value,
                path: r.path,
                parent: r
            })
        }
    }
    static create(e, t) {
        return new ce({ in: e,
            out: t,
            typeName: p.ZodPipeline
        })
    }
}
class de extends g {
    _parse(e) {
        const t = this._def.innerType._parse(e),
            r = s => (G(s) && (s.value = Object.freeze(s.value)), s);
        return X(t) ? t.then(s => r(s)) : r(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
de.create = (n, e) => new de({
    innerType: n,
    typeName: p.ZodReadonly,
    ..._(e)
});

function Pe(n, e = {}, t) {
    return n ? q.create().superRefine((r, s) => {
        var a, i;
        if (!n(r)) {
            const o = typeof e == "function" ? e(r) : typeof e == "string" ? {
                    message: e
                } : e,
                u = (i = (a = o.fatal) !== null && a !== void 0 ? a : t) !== null && i !== void 0 ? i : !0,
                c = typeof o == "string" ? {
                    message: o
                } : o;
            s.addIssue({
                code: "custom",
                ...c,
                fatal: u
            })
        }
    }) : q.create()
}
const lt = {
    object: x.lazycreate
};
var p;
(function(n) {
    n.ZodString = "ZodString", n.ZodNumber = "ZodNumber", n.ZodNaN = "ZodNaN", n.ZodBigInt = "ZodBigInt", n.ZodBoolean = "ZodBoolean", n.ZodDate = "ZodDate", n.ZodSymbol = "ZodSymbol", n.ZodUndefined = "ZodUndefined", n.ZodNull = "ZodNull", n.ZodAny = "ZodAny", n.ZodUnknown = "ZodUnknown", n.ZodNever = "ZodNever", n.ZodVoid = "ZodVoid", n.ZodArray = "ZodArray", n.ZodObject = "ZodObject", n.ZodUnion = "ZodUnion", n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", n.ZodIntersection = "ZodIntersection", n.ZodTuple = "ZodTuple", n.ZodRecord = "ZodRecord", n.ZodMap = "ZodMap", n.ZodSet = "ZodSet", n.ZodFunction = "ZodFunction", n.ZodLazy = "ZodLazy", n.ZodLiteral = "ZodLiteral", n.ZodEnum = "ZodEnum", n.ZodEffects = "ZodEffects", n.ZodNativeEnum = "ZodNativeEnum", n.ZodOptional = "ZodOptional", n.ZodNullable = "ZodNullable", n.ZodDefault = "ZodDefault", n.ZodCatch = "ZodCatch", n.ZodPromise = "ZodPromise", n.ZodBranded = "ZodBranded", n.ZodPipeline = "ZodPipeline", n.ZodReadonly = "ZodReadonly"
})(p || (p = {}));
const ft = (n, e = {
        message: `Input not instance of ${n.name}`
    }) => Pe(t => t instanceof n, e),
    De = Z.create,
    Le = A.create,
    ht = ye.create,
    pt = M.create,
    ze = Q.create,
    mt = D.create,
    yt = he.create,
    _t = K.create,
    gt = F.create,
    vt = q.create,
    xt = P.create,
    kt = j.create,
    bt = pe.create,
    wt = S.create,
    Tt = x.create,
    Zt = x.strictCreate,
    St = ee.create,
    Ct = _e.create,
    Et = te.create,
    Nt = O.create,
    Ot = ne.create,
    Rt = me.create,
    jt = L.create,
    It = B.create,
    At = re.create,
    Mt = se.create,
    Vt = V.create,
    $t = ae.create,
    Pt = Y.create,
    Oe = C.create,
    Dt = E.create,
    Lt = $.create,
    zt = C.createWithPreprocess,
    Ut = ce.create,
    Bt = () => De().optional(),
    Wt = () => Le().optional(),
    qt = () => ze().optional(),
    Yt = {
        string: n => Z.create({ ...n,
            coerce: !0
        }),
        number: n => A.create({ ...n,
            coerce: !0
        }),
        boolean: n => Q.create({ ...n,
            coerce: !0
        }),
        bigint: n => M.create({ ...n,
            coerce: !0
        }),
        date: n => D.create({ ...n,
            coerce: !0
        })
    },
    Jt = y;
var Xt = Object.freeze({
    __proto__: null,
    defaultErrorMap: W,
    setErrorMap: Je,
    getErrorMap: ue,
    makeIssue: le,
    EMPTY_PATH: He,
    addIssueToContext: l,
    ParseStatus: k,
    INVALID: y,
    DIRTY: U,
    OK: b,
    isAborted: we,
    isDirty: Te,
    isValid: G,
    isAsync: X,
    get util() {
        return v
    },
    get objectUtil() {
        return be
    },
    ZodParsedType: f,
    getParsedType: I,
    ZodType: g,
    datetimeRegex: Ve,
    ZodString: Z,
    ZodNumber: A,
    ZodBigInt: M,
    ZodBoolean: Q,
    ZodDate: D,
    ZodSymbol: he,
    ZodUndefined: K,
    ZodNull: F,
    ZodAny: q,
    ZodUnknown: P,
    ZodNever: j,
    ZodVoid: pe,
    ZodArray: S,
    ZodObject: x,
    ZodUnion: ee,
    ZodDiscriminatedUnion: _e,
    ZodIntersection: te,
    ZodTuple: O,
    ZodRecord: ne,
    ZodMap: me,
    ZodSet: L,
    ZodFunction: B,
    ZodLazy: re,
    ZodLiteral: se,
    ZodEnum: V,
    ZodNativeEnum: ae,
    ZodPromise: Y,
    ZodEffects: C,
    ZodTransformer: C,
    ZodOptional: E,
    ZodNullable: $,
    ZodDefault: ie,
    ZodCatch: oe,
    ZodNaN: ye,
    BRAND: ut,
    ZodBranded: Se,
    ZodPipeline: ce,
    ZodReadonly: de,
    custom: Pe,
    Schema: g,
    ZodSchema: g,
    late: lt,
    get ZodFirstPartyTypeKind() {
        return p
    },
    coerce: Yt,
    any: vt,
    array: wt,
    bigint: pt,
    boolean: ze,
    date: mt,
    discriminatedUnion: Ct,
    effect: Oe,
    enum: Vt,
    function: It,
    instanceof: ft,
    intersection: Et,
    lazy: At,
    literal: Mt,
    map: Rt,
    nan: ht,
    nativeEnum: $t,
    never: kt,
    null: gt,
    nullable: Lt,
    number: Le,
    object: Tt,
    oboolean: qt,
    onumber: Wt,
    optional: Dt,
    ostring: Bt,
    pipeline: Ut,
    preprocess: zt,
    promise: Pt,
    record: Ot,
    set: jt,
    strictObject: Zt,
    string: De,
    symbol: yt,
    transformer: Oe,
    tuple: Nt,
    undefined: _t,
    union: St,
    unknown: xt,
    void: bt,
    NEVER: Jt,
    ZodIssueCode: d,
    quotelessJson: Ye,
    ZodError: T
});
export {
    Gt as t, Xt as z
};