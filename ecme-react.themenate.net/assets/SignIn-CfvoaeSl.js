import {
    b as On,
    R as Mt,
    j as d,
    h as Nn,
    u as Dn
} from "./index-CtGBfi03.js";
import {
    L as Ln
} from "./Logo-BcOGei9n.js";
import {
    A as Mn
} from "./Alert-BbSdJZaa.js";
import {
    I as Un
} from "./Input-DOfW6eeK.js";
import {
    B as Le
} from "./Button-CLJjlrWi.js";
import {
    F as xn
} from "./Form-NmI-4yEx.js";
import "./FormContainer-0VCGEx0i.js";
import {
    F as st
} from "./FormItem-Bxnp8zb8.js";
import {
    P as Fn
} from "./PasswordInput-B-NX_v6T.js";
import {
    u as Bn,
    C as ot
} from "./index.esm-DEJyB0Hz.js";
import {
    t as jn,
    z as Ae
} from "./index-Djs8kSIX.js";
import {
    A as at
} from "./ActionLink-CpKMISnS.js";
import {
    u as $n
} from "./useTimeOutMessage-DHGQMdOE.js";
const Hn = Ae.object({
        email: Ae.string({
            required_error: "Please enter your email"
        }).min(1, {
            message: "Please enter your email"
        }),
        password: Ae.string({
            required_error: "Please enter your password"
        }).min(1, {
            message: "Please enter your password"
        })
    }),
    Vn = n => {
        var m, _, w;
        const [e, t] = On.useState(!1), {
            disableSubmit: r = !1,
            className: i,
            setMessage: s,
            passwordHint: o
        } = n, {
            handleSubmit: c,
            formState: {
                errors: a
            },
            control: l
        } = Bn({
            defaultValues: {
                email: "admin-01@ecme.com",
                password: "123Qwe"
            },
            resolver: jn(Hn)
        }), {
            signIn: h
        } = Mt(), p = async P => {
            const {
                email: Y,
                password: ae
            } = P;
            if (!r) {
                t(!0);
                const x = await h({
                    email: Y,
                    password: ae
                });
                (x == null ? void 0 : x.status) === "failed" && (s == null || s(x.message))
            }
            t(!1)
        };
        return d.jsx("div", {
            className: i,
            children: d.jsxs(xn, {
                onSubmit: c(p),
                children: [d.jsx(st, {
                    label: "Email",
                    invalid: !!a.email,
                    errorMessage: (m = a.email) == null ? void 0 : m.message,
                    children: d.jsx(ot, {
                        name: "email",
                        control: l,
                        render: ({
                            field: P
                        }) => d.jsx(Un, {
                            type: "email",
                            placeholder: "Email",
                            autoComplete: "off",
                            ...P
                        })
                    })
                }), d.jsx(st, {
                    label: "Password",
                    invalid: !!a.password,
                    errorMessage: (_ = a.password) == null ? void 0 : _.message,
                    className: Nn(o ? "mb-0" : "", (w = a.password) != null && w.message ? "mb-8" : ""),
                    children: d.jsx(ot, {
                        name: "password",
                        control: l,
                        rules: {
                            required: !0
                        },
                        render: ({
                            field: P
                        }) => d.jsx(Fn, {
                            type: "text",
                            placeholder: "Password",
                            autoComplete: "off",
                            ...P
                        })
                    })
                }), o, d.jsx(Le, {
                    block: !0,
                    loading: e,
                    variant: "solid",
                    type: "submit",
                    children: e ? "Signing in..." : "Sign In"
                })]
            })
        })
    };
var ct = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ut = function(n) {
        const e = [];
        let t = 0;
        for (let r = 0; r < n.length; r++) {
            let i = n.charCodeAt(r);
            i < 128 ? e[t++] = i : i < 2048 ? (e[t++] = i >> 6 | 192, e[t++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < n.length && (n.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (n.charCodeAt(++r) & 1023), e[t++] = i >> 18 | 240, e[t++] = i >> 12 & 63 | 128, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128) : (e[t++] = i >> 12 | 224, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128)
        }
        return e
    },
    Wn = function(n) {
        const e = [];
        let t = 0,
            r = 0;
        for (; t < n.length;) {
            const i = n[t++];
            if (i < 128) e[r++] = String.fromCharCode(i);
            else if (i > 191 && i < 224) {
                const s = n[t++];
                e[r++] = String.fromCharCode((i & 31) << 6 | s & 63)
            } else if (i > 239 && i < 365) {
                const s = n[t++],
                    o = n[t++],
                    c = n[t++],
                    a = ((i & 7) << 18 | (s & 63) << 12 | (o & 63) << 6 | c & 63) - 65536;
                e[r++] = String.fromCharCode(55296 + (a >> 10)), e[r++] = String.fromCharCode(56320 + (a & 1023))
            } else {
                const s = n[t++],
                    o = n[t++];
                e[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | o & 63)
            }
        }
        return e.join("")
    },
    xt = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: typeof atob == "function",
        encodeByteArray(n, e) {
            if (!Array.isArray(n)) throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                r = [];
            for (let i = 0; i < n.length; i += 3) {
                const s = n[i],
                    o = i + 1 < n.length,
                    c = o ? n[i + 1] : 0,
                    a = i + 2 < n.length,
                    l = a ? n[i + 2] : 0,
                    h = s >> 2,
                    p = (s & 3) << 4 | c >> 4;
                let m = (c & 15) << 2 | l >> 6,
                    _ = l & 63;
                a || (_ = 64, o || (m = 64)), r.push(t[h], t[p], t[m], t[_])
            }
            return r.join("")
        },
        encodeString(n, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? btoa(n) : this.encodeByteArray(Ut(n), e)
        },
        decodeString(n, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? atob(n) : Wn(this.decodeStringToByteArray(n, e))
        },
        decodeStringToByteArray(n, e) {
            this.init_();
            const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                r = [];
            for (let i = 0; i < n.length;) {
                const s = t[n.charAt(i++)],
                    c = i < n.length ? t[n.charAt(i)] : 0;
                ++i;
                const l = i < n.length ? t[n.charAt(i)] : 64;
                ++i;
                const p = i < n.length ? t[n.charAt(i)] : 64;
                if (++i, s == null || c == null || l == null || p == null) throw new zn;
                const m = s << 2 | c >> 4;
                if (r.push(m), l !== 64) {
                    const _ = c << 4 & 240 | l >> 2;
                    if (r.push(_), p !== 64) {
                        const w = l << 6 & 192 | p;
                        r.push(w)
                    }
                }
            }
            return r
        },
        init_() {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                for (let n = 0; n < this.ENCODED_VALS.length; n++) this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n), this.charToByteMap_[this.byteToCharMap_[n]] = n, this.byteToCharMapWebSafe_[n] = this.ENCODED_VALS_WEBSAFE.charAt(n), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n, n >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n)
            }
        }
    };
class zn extends Error {
    constructor() {
        super(...arguments), this.name = "DecodeBase64StringError"
    }
}
const Gn = function(n) {
        const e = Ut(n);
        return xt.encodeByteArray(e, !0)
    },
    Ft = function(n) {
        return Gn(n).replace(/\./g, "")
    },
    Bt = function(n) {
        try {
            return xt.decodeString(n, !0)
        } catch (e) {
            console.error("base64Decode failed: ", e)
        }
        return null
    };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qn() {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("Unable to locate global object.")
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kn = () => qn().__FIREBASE_DEFAULTS__,
    Jn = () => {
        if (typeof process > "u" || typeof ct > "u") return;
        const n = ct.__FIREBASE_DEFAULTS__;
        if (n) return JSON.parse(n)
    },
    Yn = () => {
        if (typeof document > "u") return;
        let n;
        try {
            n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
        } catch {
            return
        }
        const e = n && Bt(n[1]);
        return e && JSON.parse(e)
    },
    Ve = () => {
        try {
            return Kn() || Jn() || Yn()
        } catch (n) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
            return
        }
    },
    Xn = n => {
        var e, t;
        return (t = (e = Ve()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || t === void 0 ? void 0 : t[n]
    },
    jt = () => {
        var n;
        return (n = Ve()) === null || n === void 0 ? void 0 : n.config
    },
    $t = n => {
        var e;
        return (e = Ve()) === null || e === void 0 ? void 0 : e[`_${n}`]
    };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qn {
    constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, t) => {
            this.resolve = e, this.reject = t
        })
    }
    wrapCallback(e) {
        return (t, r) => {
            t ? this.reject(t) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => {}), e.length === 1 ? e(t) : e(t, r))
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g() {
    return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}

function Zn() {
    return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())
}

function er() {
    return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers"
}

function tr() {
    const n = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof n == "object" && n.id !== void 0
}

function nr() {
    return typeof navigator == "object" && navigator.product === "ReactNative"
}

function rr() {
    const n = g();
    return n.indexOf("MSIE ") >= 0 || n.indexOf("Trident/") >= 0
}

function ir() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}

function sr() {
    return new Promise((n, e) => {
        try {
            let t = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module",
                i = self.indexedDB.open(r);
            i.onsuccess = () => {
                i.result.close(), t || self.indexedDB.deleteDatabase(r), n(!0)
            }, i.onupgradeneeded = () => {
                t = !1
            }, i.onerror = () => {
                var s;
                e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || "")
            }
        } catch (t) {
            e(t)
        }
    })
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const or = "FirebaseError";
class U extends Error {
    constructor(e, t, r) {
        super(t), this.code = e, this.customData = r, this.name = or, Object.setPrototypeOf(this, U.prototype), Error.captureStackTrace && Error.captureStackTrace(this, te.prototype.create)
    }
}
class te {
    constructor(e, t, r) {
        this.service = e, this.serviceName = t, this.errors = r
    }
    create(e, ...t) {
        const r = t[0] || {},
            i = `${this.service}/${e}`,
            s = this.errors[e],
            o = s ? ar(s, r) : "Error",
            c = `${this.serviceName}: ${o} (${i}).`;
        return new U(i, c, r)
    }
}

function ar(n, e) {
    return n.replace(cr, (t, r) => {
        const i = e[r];
        return i != null ? String(i) : `<${r}?>`
    })
}
const cr = /\{\$([^}]+)}/g;

function lr(n) {
    for (const e in n)
        if (Object.prototype.hasOwnProperty.call(n, e)) return !1;
    return !0
}

function fe(n, e) {
    if (n === e) return !0;
    const t = Object.keys(n),
        r = Object.keys(e);
    for (const i of t) {
        if (!r.includes(i)) return !1;
        const s = n[i],
            o = e[i];
        if (lt(s) && lt(o)) {
            if (!fe(s, o)) return !1
        } else if (s !== o) return !1
    }
    for (const i of r)
        if (!t.includes(i)) return !1;
    return !0
}

function lt(n) {
    return n !== null && typeof n == "object"
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ne(n) {
    const e = [];
    for (const [t, r] of Object.entries(n)) Array.isArray(r) ? r.forEach(i => {
        e.push(encodeURIComponent(t) + "=" + encodeURIComponent(i))
    }) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r));
    return e.length ? "&" + e.join("&") : ""
}

function ur(n, e) {
    const t = new dr(n, e);
    return t.subscribe.bind(t)
}
class dr {
    constructor(e, t) {
        this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(() => {
            e(this)
        }).catch(r => {
            this.error(r)
        })
    }
    next(e) {
        this.forEachObserver(t => {
            t.next(e)
        })
    }
    error(e) {
        this.forEachObserver(t => {
            t.error(e)
        }), this.close(e)
    }
    complete() {
        this.forEachObserver(e => {
            e.complete()
        }), this.close()
    }
    subscribe(e, t, r) {
        let i;
        if (e === void 0 && t === void 0 && r === void 0) throw new Error("Missing Observer.");
        hr(e, ["next", "error", "complete"]) ? i = e : i = {
            next: e,
            error: t,
            complete: r
        }, i.next === void 0 && (i.next = ke), i.error === void 0 && (i.error = ke), i.complete === void 0 && (i.complete = ke);
        const s = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then(() => {
            try {
                this.finalError ? i.error(this.finalError) : i.complete()
            } catch {}
        }), this.observers.push(i), s
    }
    unsubscribeOne(e) {
        this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this))
    }
    forEachObserver(e) {
        if (!this.finalized)
            for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e)
    }
    sendOne(e, t) {
        this.task.then(() => {
            if (this.observers !== void 0 && this.observers[e] !== void 0) try {
                t(this.observers[e])
            } catch (r) {
                typeof console < "u" && console.error && console.error(r)
            }
        })
    }
    close(e) {
        this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
            this.observers = void 0, this.onNoObservers = void 0
        }))
    }
}

function hr(n, e) {
    if (typeof n != "object" || n === null) return !1;
    for (const t of e)
        if (t in n && typeof n[t] == "function") return !0;
    return !1
}

function ke() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(n) {
    return n && n._delegate ? n._delegate : n
}
class G {
    constructor(e, t, r) {
        this.name = e, this.instanceFactory = t, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
    }
    setInstantiationMode(e) {
        return this.instantiationMode = e, this
    }
    setMultipleInstances(e) {
        return this.multipleInstances = e, this
    }
    setServiceProps(e) {
        return this.serviceProps = e, this
    }
    setInstanceCreatedCallback(e) {
        return this.onInstanceCreated = e, this
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr {
    constructor(e, t) {
        this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
    }
    get(e) {
        const t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
            const r = new Qn;
            if (this.instancesDeferred.set(t, r), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                const i = this.getOrInitializeService({
                    instanceIdentifier: t
                });
                i && r.resolve(i)
            } catch {}
        }
        return this.instancesDeferred.get(t).promise
    }
    getImmediate(e) {
        var t;
        const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier),
            i = (t = e == null ? void 0 : e.optional) !== null && t !== void 0 ? t : !1;
        if (this.isInitialized(r) || this.shouldAutoInitialize()) try {
            return this.getOrInitializeService({
                instanceIdentifier: r
            })
        } catch (s) {
            if (i) return null;
            throw s
        } else {
            if (i) return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(e) {
        if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = e, !!this.shouldAutoInitialize()) {
            if (mr(e)) try {
                this.getOrInitializeService({
                    instanceIdentifier: F
                })
            } catch {}
            for (const [t, r] of this.instancesDeferred.entries()) {
                const i = this.normalizeInstanceIdentifier(t);
                try {
                    const s = this.getOrInitializeService({
                        instanceIdentifier: i
                    });
                    r.resolve(s)
                } catch {}
            }
        }
    }
    clearInstance(e = F) {
        this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
    }
    async delete() {
        const e = Array.from(this.instances.values());
        await Promise.all([...e.filter(t => "INTERNAL" in t).map(t => t.INTERNAL.delete()), ...e.filter(t => "_delete" in t).map(t => t._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(e = F) {
        return this.instances.has(e)
    }
    getOptions(e = F) {
        return this.instancesOptions.get(e) || {}
    }
    initialize(e = {}) {
        const {
            options: t = {}
        } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(r)) throw Error(`${this.name}(${r}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const i = this.getOrInitializeService({
            instanceIdentifier: r,
            options: t
        });
        for (const [s, o] of this.instancesDeferred.entries()) {
            const c = this.normalizeInstanceIdentifier(s);
            r === c && o.resolve(i)
        }
        return i
    }
    onInit(e, t) {
        var r;
        const i = this.normalizeInstanceIdentifier(t),
            s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set;
        s.add(e), this.onInitCallbacks.set(i, s);
        const o = this.instances.get(i);
        return o && e(o, i), () => {
            s.delete(e)
        }
    }
    invokeOnInitCallbacks(e, t) {
        const r = this.onInitCallbacks.get(t);
        if (r)
            for (const i of r) try {
                i(e, t)
            } catch {}
    }
    getOrInitializeService({
        instanceIdentifier: e,
        options: t = {}
    }) {
        let r = this.instances.get(e);
        if (!r && this.component && (r = this.component.instanceFactory(this.container, {
                instanceIdentifier: pr(e),
                options: t
            }), this.instances.set(e, r), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated)) try {
            this.component.onInstanceCreated(this.container, e, r)
        } catch {}
        return r || null
    }
    normalizeInstanceIdentifier(e = F) {
        return this.component ? this.component.multipleInstances ? e : F : e
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}

function pr(n) {
    return n === F ? void 0 : n
}

function mr(n) {
    return n.instantiationMode === "EAGER"
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr {
    constructor(e) {
        this.name = e, this.providers = new Map
    }
    addComponent(e) {
        const t = this.getProvider(e.name);
        if (t.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
        t.setComponent(e)
    }
    addOrOverwriteComponent(e) {
        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
    }
    getProvider(e) {
        if (this.providers.has(e)) return this.providers.get(e);
        const t = new fr(e, this);
        return this.providers.set(e, t), t
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var f;
(function(n) {
    n[n.DEBUG = 0] = "DEBUG", n[n.VERBOSE = 1] = "VERBOSE", n[n.INFO = 2] = "INFO", n[n.WARN = 3] = "WARN", n[n.ERROR = 4] = "ERROR", n[n.SILENT = 5] = "SILENT"
})(f || (f = {}));
const _r = {
        debug: f.DEBUG,
        verbose: f.VERBOSE,
        info: f.INFO,
        warn: f.WARN,
        error: f.ERROR,
        silent: f.SILENT
    },
    Ir = f.INFO,
    yr = {
        [f.DEBUG]: "log",
        [f.VERBOSE]: "log",
        [f.INFO]: "info",
        [f.WARN]: "warn",
        [f.ERROR]: "error"
    },
    br = (n, e, ...t) => {
        if (e < n.logLevel) return;
        const r = new Date().toISOString(),
            i = yr[e];
        if (i) console[i](`[${r}]  ${n.name}:`, ...t);
        else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)
    };
class Ht {
    constructor(e) {
        this.name = e, this._logLevel = Ir, this._logHandler = br, this._userLogHandler = null
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(e) {
        if (!(e in f)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
        this._logLevel = e
    }
    setLogLevel(e) {
        this._logLevel = typeof e == "string" ? _r[e] : e
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(e) {
        if (typeof e != "function") throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = e
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(e) {
        this._userLogHandler = e
    }
    debug(...e) {
        this._userLogHandler && this._userLogHandler(this, f.DEBUG, ...e), this._logHandler(this, f.DEBUG, ...e)
    }
    log(...e) {
        this._userLogHandler && this._userLogHandler(this, f.VERBOSE, ...e), this._logHandler(this, f.VERBOSE, ...e)
    }
    info(...e) {
        this._userLogHandler && this._userLogHandler(this, f.INFO, ...e), this._logHandler(this, f.INFO, ...e)
    }
    warn(...e) {
        this._userLogHandler && this._userLogHandler(this, f.WARN, ...e), this._logHandler(this, f.WARN, ...e)
    }
    error(...e) {
        this._userLogHandler && this._userLogHandler(this, f.ERROR, ...e), this._logHandler(this, f.ERROR, ...e)
    }
}
const wr = (n, e) => e.some(t => n instanceof t);
let ut, dt;

function vr() {
    return ut || (ut = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}

function Er() {
    return dt || (dt = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const Vt = new WeakMap,
    Me = new WeakMap,
    Wt = new WeakMap,
    Ce = new WeakMap,
    We = new WeakMap;

function Tr(n) {
    const e = new Promise((t, r) => {
        const i = () => {
                n.removeEventListener("success", s), n.removeEventListener("error", o)
            },
            s = () => {
                t(L(n.result)), i()
            },
            o = () => {
                r(n.error), i()
            };
        n.addEventListener("success", s), n.addEventListener("error", o)
    });
    return e.then(t => {
        t instanceof IDBCursor && Vt.set(t, n)
    }).catch(() => {}), We.set(e, n), e
}

function Sr(n) {
    if (Me.has(n)) return;
    const e = new Promise((t, r) => {
        const i = () => {
                n.removeEventListener("complete", s), n.removeEventListener("error", o), n.removeEventListener("abort", o)
            },
            s = () => {
                t(), i()
            },
            o = () => {
                r(n.error || new DOMException("AbortError", "AbortError")), i()
            };
        n.addEventListener("complete", s), n.addEventListener("error", o), n.addEventListener("abort", o)
    });
    Me.set(n, e)
}
let Ue = {
    get(n, e, t) {
        if (n instanceof IDBTransaction) {
            if (e === "done") return Me.get(n);
            if (e === "objectStoreNames") return n.objectStoreNames || Wt.get(n);
            if (e === "store") return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0])
        }
        return L(n[e])
    },
    set(n, e, t) {
        return n[e] = t, !0
    },
    has(n, e) {
        return n instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in n
    }
};

function Ar(n) {
    Ue = n(Ue)
}

function kr(n) {
    return n === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
        const r = n.call(Re(this), e, ...t);
        return Wt.set(r, e.sort ? e.sort() : [e]), L(r)
    } : Er().includes(n) ? function(...e) {
        return n.apply(Re(this), e), L(Vt.get(this))
    } : function(...e) {
        return L(n.apply(Re(this), e))
    }
}

function Cr(n) {
    return typeof n == "function" ? kr(n) : (n instanceof IDBTransaction && Sr(n), wr(n, vr()) ? new Proxy(n, Ue) : n)
}

function L(n) {
    if (n instanceof IDBRequest) return Tr(n);
    if (Ce.has(n)) return Ce.get(n);
    const e = Cr(n);
    return e !== n && (Ce.set(n, e), We.set(e, n)), e
}
const Re = n => We.get(n);

function Rr(n, e, {
    blocked: t,
    upgrade: r,
    blocking: i,
    terminated: s
} = {}) {
    const o = indexedDB.open(n, e),
        c = L(o);
    return r && o.addEventListener("upgradeneeded", a => {
        r(L(o.result), a.oldVersion, a.newVersion, L(o.transaction), a)
    }), t && o.addEventListener("blocked", a => t(a.oldVersion, a.newVersion, a)), c.then(a => {
        s && a.addEventListener("close", () => s()), i && a.addEventListener("versionchange", l => i(l.oldVersion, l.newVersion, l))
    }).catch(() => {}), c
}
const Pr = ["get", "getKey", "getAll", "getAllKeys", "count"],
    Or = ["put", "add", "delete", "clear"],
    Pe = new Map;

function ht(n, e) {
    if (!(n instanceof IDBDatabase && !(e in n) && typeof e == "string")) return;
    if (Pe.get(e)) return Pe.get(e);
    const t = e.replace(/FromIndex$/, ""),
        r = e !== t,
        i = Or.includes(t);
    if (!(t in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || Pr.includes(t))) return;
    const s = async function(o, ...c) {
        const a = this.transaction(o, i ? "readwrite" : "readonly");
        let l = a.store;
        return r && (l = l.index(c.shift())), (await Promise.all([l[t](...c), i && a.done]))[0]
    };
    return Pe.set(e, s), s
}
Ar(n => ({ ...n,
    get: (e, t, r) => ht(e, t) || n.get(e, t, r),
    has: (e, t) => !!ht(e, t) || n.has(e, t)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr {
    constructor(e) {
        this.container = e
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(t => {
            if (Dr(t)) {
                const r = t.getImmediate();
                return `${r.library}/${r.version}`
            } else return null
        }).filter(t => t).join(" ")
    }
}

function Dr(n) {
    const e = n.getComponent();
    return (e == null ? void 0 : e.type) === "VERSION"
}
const xe = "@firebase/app",
    ft = "0.10.17";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C = new Ht("@firebase/app"),
    Lr = "@firebase/app-compat",
    Mr = "@firebase/analytics-compat",
    Ur = "@firebase/analytics",
    xr = "@firebase/app-check-compat",
    Fr = "@firebase/app-check",
    Br = "@firebase/auth",
    jr = "@firebase/auth-compat",
    $r = "@firebase/database",
    Hr = "@firebase/data-connect",
    Vr = "@firebase/database-compat",
    Wr = "@firebase/functions",
    zr = "@firebase/functions-compat",
    Gr = "@firebase/installations",
    qr = "@firebase/installations-compat",
    Kr = "@firebase/messaging",
    Jr = "@firebase/messaging-compat",
    Yr = "@firebase/performance",
    Xr = "@firebase/performance-compat",
    Qr = "@firebase/remote-config",
    Zr = "@firebase/remote-config-compat",
    ei = "@firebase/storage",
    ti = "@firebase/storage-compat",
    ni = "@firebase/firestore",
    ri = "@firebase/vertexai",
    ii = "@firebase/firestore-compat",
    si = "firebase",
    oi = "11.1.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fe = "[DEFAULT]",
    ai = {
        [xe]: "fire-core",
        [Lr]: "fire-core-compat",
        [Ur]: "fire-analytics",
        [Mr]: "fire-analytics-compat",
        [Fr]: "fire-app-check",
        [xr]: "fire-app-check-compat",
        [Br]: "fire-auth",
        [jr]: "fire-auth-compat",
        [$r]: "fire-rtdb",
        [Hr]: "fire-data-connect",
        [Vr]: "fire-rtdb-compat",
        [Wr]: "fire-fn",
        [zr]: "fire-fn-compat",
        [Gr]: "fire-iid",
        [qr]: "fire-iid-compat",
        [Kr]: "fire-fcm",
        [Jr]: "fire-fcm-compat",
        [Yr]: "fire-perf",
        [Xr]: "fire-perf-compat",
        [Qr]: "fire-rc",
        [Zr]: "fire-rc-compat",
        [ei]: "fire-gcs",
        [ti]: "fire-gcs-compat",
        [ni]: "fire-fst",
        [ii]: "fire-fst-compat",
        [ri]: "fire-vertex",
        "fire-js": "fire-js",
        [si]: "fire-js-all"
    };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pe = new Map,
    ci = new Map,
    Be = new Map;

function pt(n, e) {
    try {
        n.container.addComponent(e)
    } catch (t) {
        C.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`, t)
    }
}

function Q(n) {
    const e = n.name;
    if (Be.has(e)) return C.debug(`There were multiple attempts to register component ${e}.`), !1;
    Be.set(e, n);
    for (const t of pe.values()) pt(t, n);
    for (const t of ci.values()) pt(t, n);
    return !0
}

function zt(n, e) {
    const t = n.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return t && t.triggerHeartbeat(), n.container.getProvider(e)
}

function T(n) {
    return n.settings !== void 0
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const li = {
        "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
        "bad-app-name": "Illegal App name: '{$appName}'",
        "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "server-app-deleted": "Firebase Server App has been deleted",
        "no-options": "Need to provide options, when not being deployed to hosting via source.",
        "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument": "First argument to `onLog` must be null or a function.",
        "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
        "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
        "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
    },
    M = new te("app", "Firebase", li);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ui {
    constructor(e, t, r) {
        this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new G("app", () => this, "PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(e) {
        this.checkDestroyed(), this._automaticDataCollectionEnabled = e
    }
    get name() {
        return this.checkDestroyed(), this._name
    }
    get options() {
        return this.checkDestroyed(), this._options
    }
    get config() {
        return this.checkDestroyed(), this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(e) {
        this._isDeleted = e
    }
    checkDestroyed() {
        if (this.isDeleted) throw M.create("app-deleted", {
            appName: this._name
        })
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const re = oi;

function Gt(n, e = {}) {
    let t = n;
    typeof e != "object" && (e = {
        name: e
    });
    const r = Object.assign({
            name: Fe,
            automaticDataCollectionEnabled: !1
        }, e),
        i = r.name;
    if (typeof i != "string" || !i) throw M.create("bad-app-name", {
        appName: String(i)
    });
    if (t || (t = jt()), !t) throw M.create("no-options");
    const s = pe.get(i);
    if (s) {
        if (fe(t, s.options) && fe(r, s.config)) return s;
        throw M.create("duplicate-app", {
            appName: i
        })
    }
    const o = new gr(i);
    for (const a of Be.values()) o.addComponent(a);
    const c = new ui(t, r, o);
    return pe.set(i, c), c
}

function di(n = Fe) {
    const e = pe.get(n);
    if (!e && n === Fe && jt()) return Gt();
    if (!e) throw M.create("no-app", {
        appName: n
    });
    return e
}

function H(n, e, t) {
    var r;
    let i = (r = ai[n]) !== null && r !== void 0 ? r : n;
    t && (i += `-${t}`);
    const s = i.match(/\s|\//),
        o = e.match(/\s|\//);
    if (s || o) {
        const c = [`Unable to register library "${i}" with version "${e}":`];
        s && c.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && o && c.push("and"), o && c.push(`version name "${e}" contains illegal characters (whitespace or "/")`), C.warn(c.join(" "));
        return
    }
    Q(new G(`${i}-version`, () => ({
        library: i,
        version: e
    }), "VERSION"))
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hi = "firebase-heartbeat-database",
    fi = 1,
    Z = "firebase-heartbeat-store";
let Oe = null;

function qt() {
    return Oe || (Oe = Rr(hi, fi, {
        upgrade: (n, e) => {
            switch (e) {
                case 0:
                    try {
                        n.createObjectStore(Z)
                    } catch (t) {
                        console.warn(t)
                    }
            }
        }
    }).catch(n => {
        throw M.create("idb-open", {
            originalErrorMessage: n.message
        })
    })), Oe
}
async function pi(n) {
    try {
        const t = (await qt()).transaction(Z),
            r = await t.objectStore(Z).get(Kt(n));
        return await t.done, r
    } catch (e) {
        if (e instanceof U) C.warn(e.message);
        else {
            const t = M.create("idb-get", {
                originalErrorMessage: e == null ? void 0 : e.message
            });
            C.warn(t.message)
        }
    }
}
async function mt(n, e) {
    try {
        const r = (await qt()).transaction(Z, "readwrite");
        await r.objectStore(Z).put(e, Kt(n)), await r.done
    } catch (t) {
        if (t instanceof U) C.warn(t.message);
        else {
            const r = M.create("idb-set", {
                originalErrorMessage: t == null ? void 0 : t.message
            });
            C.warn(r.message)
        }
    }
}

function Kt(n) {
    return `${n.name}!${n.options.appId}`
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mi = 1024,
    gi = 30 * 24 * 60 * 60 * 1e3;
class _i {
    constructor(e) {
        this.container = e, this._heartbeatsCache = null;
        const t = this.container.getProvider("app").getImmediate();
        this._storage = new yi(t), this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r, r))
    }
    async triggerHeartbeat() {
        var e, t;
        try {
            const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
                s = gt();
            return ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some(o => o.date === s) ? void 0 : (this._heartbeatsCache.heartbeats.push({
                date: s,
                agent: i
            }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(o => {
                const c = new Date(o.date).valueOf();
                return Date.now() - c <= gi
            }), this._storage.overwrite(this._heartbeatsCache))
        } catch (r) {
            C.warn(r)
        }
    }
    async getHeartbeatsHeader() {
        var e;
        try {
            if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) return "";
            const t = gt(),
                {
                    heartbeatsToSend: r,
                    unsentEntries: i
                } = Ii(this._heartbeatsCache.heartbeats),
                s = Ft(JSON.stringify({
                    version: 2,
                    heartbeats: r
                }));
            return this._heartbeatsCache.lastSentHeartbeatDate = t, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), s
        } catch (t) {
            return C.warn(t), ""
        }
    }
}

function gt() {
    return new Date().toISOString().substring(0, 10)
}

function Ii(n, e = mi) {
    const t = [];
    let r = n.slice();
    for (const i of n) {
        const s = t.find(o => o.agent === i.agent);
        if (s) {
            if (s.dates.push(i.date), _t(t) > e) {
                s.dates.pop();
                break
            }
        } else if (t.push({
                agent: i.agent,
                dates: [i.date]
            }), _t(t) > e) {
            t.pop();
            break
        }
        r = r.slice(1)
    }
    return {
        heartbeatsToSend: t,
        unsentEntries: r
    }
}
class yi {
    constructor(e) {
        this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return ir() ? sr().then(() => !0).catch(() => !1) : !1
    }
    async read() {
        if (await this._canUseIndexedDBPromise) {
            const t = await pi(this.app);
            return t != null && t.heartbeats ? t : {
                heartbeats: []
            }
        } else return {
            heartbeats: []
        }
    }
    async overwrite(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
            const i = await this.read();
            return mt(this.app, {
                lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
                heartbeats: e.heartbeats
            })
        } else return
    }
    async add(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
            const i = await this.read();
            return mt(this.app, {
                lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
                heartbeats: [...i.heartbeats, ...e.heartbeats]
            })
        } else return
    }
}

function _t(n) {
    return Ft(JSON.stringify({
        version: 2,
        heartbeats: n
    })).length
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(n) {
    Q(new G("platform-logger", e => new Nr(e), "PRIVATE")), Q(new G("heartbeat", e => new _i(e), "PRIVATE")), H(xe, ft, n), H(xe, ft, "esm2017"), H("fire-js", "")
}
bi("");

function ze(n, e) {
    var t = {};
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (t[r[i]] = n[r[i]]);
    return t
}

function Jt() {
    return {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    }
}
const wi = Jt,
    Yt = new te("auth", "Firebase", Jt());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const me = new Ht("@firebase/auth");

function vi(n, ...e) {
    me.logLevel <= f.WARN && me.warn(`Auth (${re}): ${n}`, ...e)
}

function le(n, ...e) {
    me.logLevel <= f.ERROR && me.error(`Auth (${re}): ${n}`, ...e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function b(n, ...e) {
    throw qe(n, ...e)
}

function I(n, ...e) {
    return qe(n, ...e)
}

function Ge(n, e, t) {
    const r = Object.assign(Object.assign({}, wi()), {
        [e]: t
    });
    return new te("auth", "Firebase", r).create(e, {
        appName: n.name
    })
}

function j(n) {
    return Ge(n, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp")
}

function Ei(n, e, t) {
    const r = t;
    if (!(e instanceof r)) throw r.name !== e.constructor.name && b(n, "argument-error"), Ge(n, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
}

function qe(n, ...e) {
    if (typeof n != "string") {
        const t = e[0],
            r = [...e.slice(1)];
        return r[0] && (r[0].appName = n.name), n._errorFactory.create(t, ...r)
    }
    return Yt.create(n, ...e)
}

function u(n, e, ...t) {
    if (!n) throw qe(e, ...t)
}

function S(n) {
    const e = "INTERNAL ASSERTION FAILED: " + n;
    throw le(e), new Error(e)
}

function R(n, e) {
    n || S(e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je() {
    var n;
    return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.href) || ""
}

function Ti() {
    return It() === "http:" || It() === "https:"
}

function It() {
    var n;
    return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.protocol) || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Si() {
    return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && (Ti() || tr() || "connection" in navigator) ? navigator.onLine : !0
}

function Ai() {
    if (typeof navigator > "u") return null;
    const n = navigator;
    return n.languages && n.languages[0] || n.language || null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie {
    constructor(e, t) {
        this.shortDelay = e, this.longDelay = t, R(t > e, "Short delay should be less than long delay!"), this.isMobile = Zn() || nr()
    }
    get() {
        return Si() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ke(n, e) {
    R(n.emulator, "Emulator should always be set here");
    const {
        url: t
    } = n.emulator;
    return e ? `${t}${e.startsWith("/")?e.slice(1):e}` : t
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt {
    static initialize(e, t, r) {
        this.fetchImpl = e, t && (this.headersImpl = t), r && (this.responseImpl = r)
    }
    static fetch() {
        if (this.fetchImpl) return this.fetchImpl;
        if (typeof self < "u" && "fetch" in self) return self.fetch;
        if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
        if (typeof fetch < "u") return fetch;
        S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static headers() {
        if (this.headersImpl) return this.headersImpl;
        if (typeof self < "u" && "Headers" in self) return self.Headers;
        if (typeof globalThis < "u" && globalThis.Headers) return globalThis.Headers;
        if (typeof Headers < "u") return Headers;
        S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static response() {
        if (this.responseImpl) return this.responseImpl;
        if (typeof self < "u" && "Response" in self) return self.Response;
        if (typeof globalThis < "u" && globalThis.Response) return globalThis.Response;
        if (typeof Response < "u") return Response;
        S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ki = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "missing-password",
    INVALID_LOGIN_CREDENTIALS: "invalid-credential",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
    RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
    MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
    INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
    INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
    MISSING_CLIENT_TYPE: "missing-client-type",
    MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
    INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
    INVALID_REQ_TYPE: "invalid-req-type"
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ci = new ie(3e4, 6e4);

function Je(n, e) {
    return n.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), {
        tenantId: n.tenantId
    }) : e
}
async function J(n, e, t, r, i = {}) {
    return Qt(n, i, async () => {
        let s = {},
            o = {};
        r && (e === "GET" ? o = r : s = {
            body: JSON.stringify(r)
        });
        const c = ne(Object.assign({
                key: n.config.apiKey
            }, o)).slice(1),
            a = await n._getAdditionalHeaders();
        a["Content-Type"] = "application/json", n.languageCode && (a["X-Firebase-Locale"] = n.languageCode);
        const l = Object.assign({
            method: e,
            headers: a
        }, s);
        return er() || (l.referrerPolicy = "no-referrer"), Xt.fetch()(Zt(n, n.config.apiHost, t, c), l)
    })
}
async function Qt(n, e, t) {
    n._canInitEmulator = !1;
    const r = Object.assign(Object.assign({}, ki), e);
    try {
        const i = new Pi(n),
            s = await Promise.race([t(), i.promise]);
        i.clearNetworkTimeout();
        const o = await s.json();
        if ("needConfirmation" in o) throw ce(n, "account-exists-with-different-credential", o);
        if (s.ok && !("errorMessage" in o)) return o; {
            const c = s.ok ? o.errorMessage : o.error.message,
                [a, l] = c.split(" : ");
            if (a === "FEDERATED_USER_ID_ALREADY_LINKED") throw ce(n, "credential-already-in-use", o);
            if (a === "EMAIL_EXISTS") throw ce(n, "email-already-in-use", o);
            if (a === "USER_DISABLED") throw ce(n, "user-disabled", o);
            const h = r[a] || a.toLowerCase().replace(/[_\s]+/g, "-");
            if (l) throw Ge(n, h, l);
            b(n, h)
        }
    } catch (i) {
        if (i instanceof U) throw i;
        b(n, "network-request-failed", {
            message: String(i)
        })
    }
}
async function Ri(n, e, t, r, i = {}) {
    const s = await J(n, e, t, r, i);
    return "mfaPendingCredential" in s && b(n, "multi-factor-auth-required", {
        _serverResponse: s
    }), s
}

function Zt(n, e, t, r) {
    const i = `${e}${t}?${r}`;
    return n.config.emulator ? Ke(n.config, i) : `${n.config.apiScheme}://${i}`
}
class Pi {
    clearNetworkTimeout() {
        clearTimeout(this.timer)
    }
    constructor(e) {
        this.auth = e, this.timer = null, this.promise = new Promise((t, r) => {
            this.timer = setTimeout(() => r(I(this.auth, "network-request-failed")), Ci.get())
        })
    }
}

function ce(n, e, t) {
    const r = {
        appName: n.name
    };
    t.email && (r.email = t.email), t.phoneNumber && (r.phoneNumber = t.phoneNumber);
    const i = I(n, e, r);
    return i.customData._tokenResponse = t, i
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oi(n, e) {
    return J(n, "POST", "/v1/accounts:delete", e)
}
async function en(n, e) {
    return J(n, "POST", "/v1/accounts:lookup", e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(n) {
    if (n) try {
        const e = new Date(Number(n));
        if (!isNaN(e.getTime())) return e.toUTCString()
    } catch {}
}
async function Ni(n, e = !1) {
    const t = K(n),
        r = await t.getIdToken(e),
        i = Ye(r);
    u(i && i.exp && i.auth_time && i.iat, t.auth, "internal-error");
    const s = typeof i.firebase == "object" ? i.firebase : void 0,
        o = s == null ? void 0 : s.sign_in_provider;
    return {
        claims: i,
        token: r,
        authTime: X(Ne(i.auth_time)),
        issuedAtTime: X(Ne(i.iat)),
        expirationTime: X(Ne(i.exp)),
        signInProvider: o || null,
        signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null
    }
}

function Ne(n) {
    return Number(n) * 1e3
}

function Ye(n) {
    const [e, t, r] = n.split(".");
    if (e === void 0 || t === void 0 || r === void 0) return le("JWT malformed, contained fewer than 3 sections"), null;
    try {
        const i = Bt(t);
        return i ? JSON.parse(i) : (le("Failed to decode base64 JWT payload"), null)
    } catch (i) {
        return le("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()), null
    }
}

function yt(n) {
    const e = Ye(n);
    return u(e, "internal-error"), u(typeof e.exp < "u", "internal-error"), u(typeof e.iat < "u", "internal-error"), Number(e.exp) - Number(e.iat)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ee(n, e, t = !1) {
    if (t) return e;
    try {
        return await e
    } catch (r) {
        throw r instanceof U && Di(r) && n.auth.currentUser === n && await n.auth.signOut(), r
    }
}

function Di({
    code: n
}) {
    return n === "auth/user-disabled" || n === "auth/user-token-expired"
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li {
    constructor(e) {
        this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
    }
    _start() {
        this.isRunning || (this.isRunning = !0, this.schedule())
    }
    _stop() {
        this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId))
    }
    getInterval(e) {
        var t;
        if (e) {
            const r = this.errorBackoff;
            return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4), r
        } else {
            this.errorBackoff = 3e4;
            const i = ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0 ? t : 0) - Date.now() - 3e5;
            return Math.max(0, i)
        }
    }
    schedule(e = !1) {
        if (!this.isRunning) return;
        const t = this.getInterval(e);
        this.timerId = setTimeout(async () => {
            await this.iteration()
        }, t)
    }
    async iteration() {
        try {
            await this.user.getIdToken(!0)
        } catch (e) {
            (e == null ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(!0);
            return
        }
        this.schedule()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e {
    constructor(e, t) {
        this.createdAt = e, this.lastLoginAt = t, this._initializeTime()
    }
    _initializeTime() {
        this.lastSignInTime = X(this.lastLoginAt), this.creationTime = X(this.createdAt)
    }
    _copy(e) {
        this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime()
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        }
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ge(n) {
    var e;
    const t = n.auth,
        r = await n.getIdToken(),
        i = await ee(n, en(t, {
            idToken: r
        }));
    u(i == null ? void 0 : i.users.length, t, "internal-error");
    const s = i.users[0];
    n._notifyReloadListener(s);
    const o = !((e = s.providerUserInfo) === null || e === void 0) && e.length ? tn(s.providerUserInfo) : [],
        c = Ui(n.providerData, o),
        a = n.isAnonymous,
        l = !(n.email && s.passwordHash) && !(c != null && c.length),
        h = a ? l : !1,
        p = {
            uid: s.localId,
            displayName: s.displayName || null,
            photoURL: s.photoUrl || null,
            email: s.email || null,
            emailVerified: s.emailVerified || !1,
            phoneNumber: s.phoneNumber || null,
            tenantId: s.tenantId || null,
            providerData: c,
            metadata: new $e(s.createdAt, s.lastLoginAt),
            isAnonymous: h
        };
    Object.assign(n, p)
}
async function Mi(n) {
    const e = K(n);
    await ge(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e)
}

function Ui(n, e) {
    return [...n.filter(r => !e.some(i => i.providerId === r.providerId)), ...e]
}

function tn(n) {
    return n.map(e => {
        var {
            providerId: t
        } = e, r = ze(e, ["providerId"]);
        return {
            providerId: t,
            uid: r.rawId || "",
            displayName: r.displayName || null,
            email: r.email || null,
            phoneNumber: r.phoneNumber || null,
            photoURL: r.photoUrl || null
        }
    })
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xi(n, e) {
    const t = await Qt(n, {}, async () => {
        const r = ne({
                grant_type: "refresh_token",
                refresh_token: e
            }).slice(1),
            {
                tokenApiHost: i,
                apiKey: s
            } = n.config,
            o = Zt(n, i, "/v1/token", `key=${s}`),
            c = await n._getAdditionalHeaders();
        return c["Content-Type"] = "application/x-www-form-urlencoded", Xt.fetch()(o, {
            method: "POST",
            headers: c,
            body: r
        })
    });
    return {
        accessToken: t.access_token,
        expiresIn: t.expires_in,
        refreshToken: t.refresh_token
    }
}
async function Fi(n, e) {
    return J(n, "POST", "/v2/accounts:revokeToken", Je(n, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V {
    constructor() {
        this.refreshToken = null, this.accessToken = null, this.expirationTime = null
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(e) {
        u(e.idToken, "internal-error"), u(typeof e.idToken < "u", "internal-error"), u(typeof e.refreshToken < "u", "internal-error");
        const t = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : yt(e.idToken);
        this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
    }
    updateFromIdToken(e) {
        u(e.length !== 0, "internal-error");
        const t = yt(e);
        this.updateTokensAndExpiration(e, null, t)
    }
    async getToken(e, t = !1) {
        return !t && this.accessToken && !this.isExpired ? this.accessToken : (u(this.refreshToken, e, "user-token-expired"), this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null)
    }
    clearRefreshToken() {
        this.refreshToken = null
    }
    async refresh(e, t) {
        const {
            accessToken: r,
            refreshToken: i,
            expiresIn: s
        } = await xi(e, t);
        this.updateTokensAndExpiration(r, i, Number(s))
    }
    updateTokensAndExpiration(e, t, r) {
        this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + r * 1e3
    }
    static fromJSON(e, t) {
        const {
            refreshToken: r,
            accessToken: i,
            expirationTime: s
        } = t, o = new V;
        return r && (u(typeof r == "string", "internal-error", {
            appName: e
        }), o.refreshToken = r), i && (u(typeof i == "string", "internal-error", {
            appName: e
        }), o.accessToken = i), s && (u(typeof s == "number", "internal-error", {
            appName: e
        }), o.expirationTime = s), o
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        }
    }
    _assign(e) {
        this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime
    }
    _clone() {
        return Object.assign(new V, this.toJSON())
    }
    _performRefresh() {
        return S("not implemented")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(n, e) {
    u(typeof n == "string" || typeof n > "u", "internal-error", {
        appName: e
    })
}
class A {
    constructor(e) {
        var {
            uid: t,
            auth: r,
            stsTokenManager: i
        } = e, s = ze(e, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase", this.proactiveRefresh = new Li(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = r, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = s.displayName || null, this.email = s.email || null, this.emailVerified = s.emailVerified || !1, this.phoneNumber = s.phoneNumber || null, this.photoURL = s.photoURL || null, this.isAnonymous = s.isAnonymous || !1, this.tenantId = s.tenantId || null, this.providerData = s.providerData ? [...s.providerData] : [], this.metadata = new $e(s.createdAt || void 0, s.lastLoginAt || void 0)
    }
    async getIdToken(e) {
        const t = await ee(this, this.stsTokenManager.getToken(this.auth, e));
        return u(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t
    }
    getIdTokenResult(e) {
        return Ni(this, e)
    }
    reload() {
        return Mi(this)
    }
    _assign(e) {
        this !== e && (u(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map(t => Object.assign({}, t)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager))
    }
    _clone(e) {
        const t = new A(Object.assign(Object.assign({}, this), {
            auth: e,
            stsTokenManager: this.stsTokenManager._clone()
        }));
        return t.metadata._copy(this.metadata), t
    }
    _onReload(e) {
        u(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
    }
    _notifyReloadListener(e) {
        this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(e, t = !1) {
        let r = !1;
        e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0), t && await ge(this), await this.auth._persistUserIfCurrent(this), r && this.auth._notifyListenersIfCurrent(this)
    }
    async delete() {
        if (T(this.auth.app)) return Promise.reject(j(this.auth));
        const e = await this.getIdToken();
        return await ee(this, Oi(this.auth, {
            idToken: e
        })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
    }
    toJSON() {
        return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map(e => Object.assign({}, e)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        })
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
    }
    static _fromJSON(e, t) {
        var r, i, s, o, c, a, l, h;
        const p = (r = t.displayName) !== null && r !== void 0 ? r : void 0,
            m = (i = t.email) !== null && i !== void 0 ? i : void 0,
            _ = (s = t.phoneNumber) !== null && s !== void 0 ? s : void 0,
            w = (o = t.photoURL) !== null && o !== void 0 ? o : void 0,
            P = (c = t.tenantId) !== null && c !== void 0 ? c : void 0,
            Y = (a = t._redirectEventId) !== null && a !== void 0 ? a : void 0,
            ae = (l = t.createdAt) !== null && l !== void 0 ? l : void 0,
            x = (h = t.lastLoginAt) !== null && h !== void 0 ? h : void 0,
            {
                uid: Ee,
                emailVerified: nt,
                isAnonymous: rt,
                providerData: Te,
                stsTokenManager: it
            } = t;
        u(Ee && it, e, "internal-error");
        const Rn = V.fromJSON(this.name, it);
        u(typeof Ee == "string", e, "internal-error"), O(p, e.name), O(m, e.name), u(typeof nt == "boolean", e, "internal-error"), u(typeof rt == "boolean", e, "internal-error"), O(_, e.name), O(w, e.name), O(P, e.name), O(Y, e.name), O(ae, e.name), O(x, e.name);
        const Se = new A({
            uid: Ee,
            auth: e,
            email: m,
            emailVerified: nt,
            displayName: p,
            isAnonymous: rt,
            photoURL: w,
            phoneNumber: _,
            tenantId: P,
            stsTokenManager: Rn,
            createdAt: ae,
            lastLoginAt: x
        });
        return Te && Array.isArray(Te) && (Se.providerData = Te.map(Pn => Object.assign({}, Pn))), Y && (Se._redirectEventId = Y), Se
    }
    static async _fromIdTokenResponse(e, t, r = !1) {
        const i = new V;
        i.updateFromServerResponse(t);
        const s = new A({
            uid: t.localId,
            auth: e,
            stsTokenManager: i,
            isAnonymous: r
        });
        return await ge(s), s
    }
    static async _fromGetAccountInfoResponse(e, t, r) {
        const i = t.users[0];
        u(i.localId !== void 0, "internal-error");
        const s = i.providerUserInfo !== void 0 ? tn(i.providerUserInfo) : [],
            o = !(i.email && i.passwordHash) && !(s != null && s.length),
            c = new V;
        c.updateFromIdToken(r);
        const a = new A({
                uid: i.localId,
                auth: e,
                stsTokenManager: c,
                isAnonymous: o
            }),
            l = {
                uid: i.localId,
                displayName: i.displayName || null,
                photoURL: i.photoUrl || null,
                email: i.email || null,
                emailVerified: i.emailVerified || !1,
                phoneNumber: i.phoneNumber || null,
                tenantId: i.tenantId || null,
                providerData: s,
                metadata: new $e(i.createdAt, i.lastLoginAt),
                isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length)
            };
        return Object.assign(a, l), a
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt = new Map;

function k(n) {
    R(n instanceof Function, "Expected a class definition");
    let e = bt.get(n);
    return e ? (R(e instanceof n, "Instance stored in cache mismatched with class"), e) : (e = new n, bt.set(n, e), e)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn {
    constructor() {
        this.type = "NONE", this.storage = {}
    }
    async _isAvailable() {
        return !0
    }
    async _set(e, t) {
        this.storage[e] = t
    }
    async _get(e) {
        const t = this.storage[e];
        return t === void 0 ? null : t
    }
    async _remove(e) {
        delete this.storage[e]
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
}
nn.type = "NONE";
const wt = nn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(n, e, t) {
    return `firebase:${n}:${e}:${t}`
}
class W {
    constructor(e, t, r) {
        this.persistence = e, this.auth = t, this.userKey = r;
        const {
            config: i,
            name: s
        } = this.auth;
        this.fullUserKey = ue(this.userKey, i.apiKey, s), this.fullPersistenceKey = ue("persistence", i.apiKey, s), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
    }
    setCurrentUser(e) {
        return this.persistence._set(this.fullUserKey, e.toJSON())
    }
    async getCurrentUser() {
        const e = await this.persistence._get(this.fullUserKey);
        return e ? A._fromJSON(this.auth, e) : null
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(e) {
        if (this.persistence === e) return;
        const t = await this.getCurrentUser();
        if (await this.removeCurrentUser(), this.persistence = e, t) return this.setCurrentUser(t)
    }
    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }
    static async create(e, t, r = "authUser") {
        if (!t.length) return new W(k(wt), e, r);
        const i = (await Promise.all(t.map(async l => {
            if (await l._isAvailable()) return l
        }))).filter(l => l);
        let s = i[0] || k(wt);
        const o = ue(r, e.config.apiKey, e.name);
        let c = null;
        for (const l of t) try {
            const h = await l._get(o);
            if (h) {
                const p = A._fromJSON(e, h);
                l !== s && (c = p), s = l;
                break
            }
        } catch {}
        const a = i.filter(l => l._shouldAllowMigration);
        return !s._shouldAllowMigration || !a.length ? new W(s, e, r) : (s = a[0], c && await s._set(o, c.toJSON()), await Promise.all(t.map(async l => {
            if (l !== s) try {
                await l._remove(o)
            } catch {}
        })), new W(s, e, r))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(n) {
    const e = n.toLowerCase();
    if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/")) return "Opera";
    if (an(e)) return "IEMobile";
    if (e.includes("msie") || e.includes("trident/")) return "IE";
    if (e.includes("edge/")) return "Edge";
    if (rn(e)) return "Firefox";
    if (e.includes("silk/")) return "Silk";
    if (ln(e)) return "Blackberry";
    if (un(e)) return "Webos";
    if (sn(e)) return "Safari";
    if ((e.includes("chrome/") || on(e)) && !e.includes("edge/")) return "Chrome";
    if (cn(e)) return "Android"; {
        const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
            r = n.match(t);
        if ((r == null ? void 0 : r.length) === 2) return r[1]
    }
    return "Other"
}

function rn(n = g()) {
    return /firefox\//i.test(n)
}

function sn(n = g()) {
    const e = n.toLowerCase();
    return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android")
}

function on(n = g()) {
    return /crios\//i.test(n)
}

function an(n = g()) {
    return /iemobile/i.test(n)
}

function cn(n = g()) {
    return /android/i.test(n)
}

function ln(n = g()) {
    return /blackberry/i.test(n)
}

function un(n = g()) {
    return /webos/i.test(n)
}

function Xe(n = g()) {
    return /iphone|ipad|ipod/i.test(n) || /macintosh/i.test(n) && /mobile/i.test(n)
}

function Bi(n = g()) {
    var e;
    return Xe(n) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
}

function ji() {
    return rr() && document.documentMode === 10
}

function dn(n = g()) {
    return Xe(n) || cn(n) || un(n) || ln(n) || /windows phone/i.test(n) || an(n)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hn(n, e = []) {
    let t;
    switch (n) {
        case "Browser":
            t = vt(g());
            break;
        case "Worker":
            t = `${vt(g())}-${n}`;
            break;
        default:
            t = n
    }
    const r = e.length ? e.join(",") : "FirebaseCore-web";
    return `${t}/JsCore/${re}/${r}`
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i {
    constructor(e) {
        this.auth = e, this.queue = []
    }
    pushCallback(e, t) {
        const r = s => new Promise((o, c) => {
            try {
                const a = e(s);
                o(a)
            } catch (a) {
                c(a)
            }
        });
        r.onAbort = t, this.queue.push(r);
        const i = this.queue.length - 1;
        return () => {
            this.queue[i] = () => Promise.resolve()
        }
    }
    async runMiddleware(e) {
        if (this.auth.currentUser === e) return;
        const t = [];
        try {
            for (const r of this.queue) await r(e), r.onAbort && t.push(r.onAbort)
        } catch (r) {
            t.reverse();
            for (const i of t) try {
                i()
            } catch {}
            throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: r == null ? void 0 : r.message
            })
        }
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Hi(n, e = {}) {
    return J(n, "GET", "/v2/passwordPolicy", Je(n, e))
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vi = 6;
class Wi {
    constructor(e) {
        var t, r, i, s;
        const o = e.customStrengthOptions;
        this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = (t = o.minPasswordLength) !== null && t !== void 0 ? t : Vi, o.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength), o.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = o.containsLowercaseCharacter), o.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = o.containsUppercaseCharacter), o.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = o.containsNumericCharacter), o.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = o.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = (i = (r = e.allowedNonAlphanumericCharacters) === null || r === void 0 ? void 0 : r.join("")) !== null && i !== void 0 ? i : "", this.forceUpgradeOnSignin = (s = e.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1, this.schemaVersion = e.schemaVersion
    }
    validatePassword(e) {
        var t, r, i, s, o, c;
        const a = {
            isValid: !0,
            passwordPolicy: this
        };
        return this.validatePasswordLengthOptions(e, a), this.validatePasswordCharacterOptions(e, a), a.isValid && (a.isValid = (t = a.meetsMinPasswordLength) !== null && t !== void 0 ? t : !0), a.isValid && (a.isValid = (r = a.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0), a.isValid && (a.isValid = (i = a.containsLowercaseLetter) !== null && i !== void 0 ? i : !0), a.isValid && (a.isValid = (s = a.containsUppercaseLetter) !== null && s !== void 0 ? s : !0), a.isValid && (a.isValid = (o = a.containsNumericCharacter) !== null && o !== void 0 ? o : !0), a.isValid && (a.isValid = (c = a.containsNonAlphanumericCharacter) !== null && c !== void 0 ? c : !0), a
    }
    validatePasswordLengthOptions(e, t) {
        const r = this.customStrengthOptions.minPasswordLength,
            i = this.customStrengthOptions.maxPasswordLength;
        r && (t.meetsMinPasswordLength = e.length >= r), i && (t.meetsMaxPasswordLength = e.length <= i)
    }
    validatePasswordCharacterOptions(e, t) {
        this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
        let r;
        for (let i = 0; i < e.length; i++) r = e.charAt(i), this.updatePasswordCharacterOptionsStatuses(t, r >= "a" && r <= "z", r >= "A" && r <= "Z", r >= "0" && r <= "9", this.allowedNonAlphanumericCharacters.includes(r))
    }
    updatePasswordCharacterOptionsStatuses(e, t, r, i, s) {
        this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = i)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = s))
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi {
    constructor(e, t, r, i) {
        this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = r, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Et(this), this.idTokenSubscription = new Et(this), this.beforeStateQueue = new $i(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Yt, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
            appVerificationDisabledForTesting: !1
        }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion
    }
    _initializeWithPersistence(e, t) {
        return t && (this._popupRedirectResolver = k(t)), this._initializationPromise = this.queue(async () => {
            var r, i;
            if (!this._deleted && (this.persistenceManager = await W.create(this, e), !this._deleted)) {
                if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively) try {
                    await this._popupRedirectResolver._initialize(this)
                } catch {}
                await this.initializeCurrentUser(t), this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null, !this._deleted && (this._isInitialized = !0)
            }
        }), this._initializationPromise
    }
    async _onStorageEvent() {
        if (this._deleted) return;
        const e = await this.assertedPersistence.getCurrentUser();
        if (!(!this.currentUser && !e)) {
            if (this.currentUser && e && this.currentUser.uid === e.uid) {
                this._currentUser._assign(e), await this.currentUser.getIdToken();
                return
            }
            await this._updateCurrentUser(e, !0)
        }
    }
    async initializeCurrentUserFromIdToken(e) {
        try {
            const t = await en(this, {
                    idToken: e
                }),
                r = await A._fromGetAccountInfoResponse(this, t, e);
            await this.directlySetCurrentUser(r)
        } catch (t) {
            console.warn("FirebaseServerApp could not login user with provided authIdToken: ", t), await this.directlySetCurrentUser(null)
        }
    }
    async initializeCurrentUser(e) {
        var t;
        if (T(this.app)) {
            const o = this.app.settings.authIdToken;
            return o ? new Promise(c => {
                setTimeout(() => this.initializeCurrentUserFromIdToken(o).then(c, c))
            }) : this.directlySetCurrentUser(null)
        }
        const r = await this.assertedPersistence.getCurrentUser();
        let i = r,
            s = !1;
        if (e && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const o = (t = this.redirectUser) === null || t === void 0 ? void 0 : t._redirectEventId,
                c = i == null ? void 0 : i._redirectEventId,
                a = await this.tryRedirectSignIn(e);
            (!o || o === c) && (a != null && a.user) && (i = a.user, s = !0)
        }
        if (!i) return this.directlySetCurrentUser(null);
        if (!i._redirectEventId) {
            if (s) try {
                await this.beforeStateQueue.runMiddleware(i)
            } catch (o) {
                i = r, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(o))
            }
            return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
        }
        return u(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i)
    }
    async tryRedirectSignIn(e) {
        let t = null;
        try {
            t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
        } catch {
            await this._setRedirectUser(null)
        }
        return t
    }
    async reloadAndSetCurrentUserOrClear(e) {
        try {
            await ge(e)
        } catch (t) {
            if ((t == null ? void 0 : t.code) !== "auth/network-request-failed") return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(e)
    }
    useDeviceLanguage() {
        this.languageCode = Ai()
    }
    async _delete() {
        this._deleted = !0
    }
    async updateCurrentUser(e) {
        if (T(this.app)) return Promise.reject(j(this));
        const t = e ? K(e) : null;
        return t && u(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this))
    }
    async _updateCurrentUser(e, t = !1) {
        if (!this._deleted) return e && u(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
            await this.directlySetCurrentUser(e), this.notifyAuthListeners()
        })
    }
    async signOut() {
        return T(this.app) ? Promise.reject(j(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0))
    }
    setPersistence(e) {
        return T(this.app) ? Promise.reject(j(this)) : this.queue(async () => {
            await this.assertedPersistence.setPersistence(k(e))
        })
    }
    _getRecaptchaConfig() {
        return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
    }
    async validatePassword(e) {
        this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
        const t = this._getPasswordPolicyInternal();
        return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e)
    }
    _getPasswordPolicyInternal() {
        return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
    }
    async _updatePasswordPolicy() {
        const e = await Hi(this),
            t = new Wi(e);
        this.tenantId === null ? this._projectPasswordPolicy = t : this._tenantPasswordPolicies[this.tenantId] = t
    }
    _getPersistence() {
        return this.assertedPersistence.persistence.type
    }
    _updateErrorMap(e) {
        this._errorFactory = new te("auth", "Firebase", e())
    }
    onAuthStateChanged(e, t, r) {
        return this.registerStateListener(this.authStateSubscription, e, t, r)
    }
    beforeAuthStateChanged(e, t) {
        return this.beforeStateQueue.pushCallback(e, t)
    }
    onIdTokenChanged(e, t, r) {
        return this.registerStateListener(this.idTokenSubscription, e, t, r)
    }
    authStateReady() {
        return new Promise((e, t) => {
            if (this.currentUser) e();
            else {
                const r = this.onAuthStateChanged(() => {
                    r(), e()
                }, t)
            }
        })
    }
    async revokeAccessToken(e) {
        if (this.currentUser) {
            const t = await this.currentUser.getIdToken(),
                r = {
                    providerId: "apple.com",
                    tokenType: "ACCESS_TOKEN",
                    token: e,
                    idToken: t
                };
            this.tenantId != null && (r.tenantId = this.tenantId), await Fi(this, r)
        }
    }
    toJSON() {
        var e;
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
        }
    }
    async _setRedirectUser(e, t) {
        const r = await this.getOrInitRedirectPersistenceManager(t);
        return e === null ? r.removeCurrentUser() : r.setCurrentUser(e)
    }
    async getOrInitRedirectPersistenceManager(e) {
        if (!this.redirectPersistenceManager) {
            const t = e && k(e) || this._popupRedirectResolver;
            u(t, this, "argument-error"), this.redirectPersistenceManager = await W.create(this, [k(t._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
    }
    async _redirectUserForId(e) {
        var t, r;
        return this._isInitialized && await this.queue(async () => {}), ((t = this._currentUser) === null || t === void 0 ? void 0 : t._redirectEventId) === e ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this.redirectUser : null
    }
    async _persistUserIfCurrent(e) {
        if (e === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(e))
    }
    _notifyListenersIfCurrent(e) {
        e === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
    }
    get _currentUser() {
        return this.currentUser
    }
    notifyAuthListeners() {
        var e, t;
        if (!this._isInitialized) return;
        this.idTokenSubscription.next(this.currentUser);
        const r = (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && t !== void 0 ? t : null;
        this.lastNotifiedUid !== r && (this.lastNotifiedUid = r, this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(e, t, r, i) {
        if (this._deleted) return () => {};
        const s = typeof t == "function" ? t : t.next.bind(t);
        let o = !1;
        const c = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        if (u(c, this, "internal-error"), c.then(() => {
                o || s(this.currentUser)
            }), typeof t == "function") {
            const a = e.addObserver(t, r, i);
            return () => {
                o = !0, a()
            }
        } else {
            const a = e.addObserver(t);
            return () => {
                o = !0, a()
            }
        }
    }
    async directlySetCurrentUser(e) {
        this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
    }
    queue(e) {
        return this.operations = this.operations.then(e, e), this.operations
    }
    get assertedPersistence() {
        return u(this.persistenceManager, this, "internal-error"), this.persistenceManager
    }
    _logFramework(e) {
        !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = hn(this.config.clientPlatform, this._getFrameworks()))
    }
    _getFrameworks() {
        return this.frameworks
    }
    async _getAdditionalHeaders() {
        var e;
        const t = {
            "X-Client-Version": this.clientVersion
        };
        this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
        const r = await ((e = this.heartbeatServiceProvider.getImmediate({
            optional: !0
        })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
        r && (t["X-Firebase-Client"] = r);
        const i = await this._getAppCheckToken();
        return i && (t["X-Firebase-AppCheck"] = i), t
    }
    async _getAppCheckToken() {
        var e;
        const t = await ((e = this.appCheckServiceProvider.getImmediate({
            optional: !0
        })) === null || e === void 0 ? void 0 : e.getToken());
        return t != null && t.error && vi(`Error while retrieving App Check token: ${t.error}`), t == null ? void 0 : t.token
    }
}

function be(n) {
    return K(n)
}
class Et {
    constructor(e) {
        this.auth = e, this.observer = null, this.addObserver = ur(t => this.observer = t)
    }
    get next() {
        return u(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qe = {
    async loadJS() {
        throw new Error("Unable to load external scripts")
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: ""
};

function Gi(n) {
    Qe = n
}

function qi(n) {
    return Qe.loadJS(n)
}

function Ki() {
    return Qe.gapiScript
}

function Ji(n) {
    return `__${n}${Math.floor(Math.random()*1e6)}`
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yi(n, e) {
    const t = zt(n, "auth");
    if (t.isInitialized()) {
        const i = t.getImmediate(),
            s = t.getOptions();
        if (fe(s, e ? ? {})) return i;
        b(i, "already-initialized")
    }
    return t.initialize({
        options: e
    })
}

function Xi(n, e) {
    const t = (e == null ? void 0 : e.persistence) || [],
        r = (Array.isArray(t) ? t : [t]).map(k);
    e != null && e.errorMap && n._updateErrorMap(e.errorMap), n._initializeWithPersistence(r, e == null ? void 0 : e.popupRedirectResolver)
}

function Qi(n, e, t) {
    const r = be(n);
    u(r._canInitEmulator, r, "emulator-config-failed"), u(/^https?:\/\//.test(e), r, "invalid-emulator-scheme");
    const i = !1,
        s = fn(e),
        {
            host: o,
            port: c
        } = Zi(e),
        a = c === null ? "" : `:${c}`;
    r.config.emulator = {
        url: `${s}//${o}${a}/`
    }, r.settings.appVerificationDisabledForTesting = !0, r.emulatorConfig = Object.freeze({
        host: o,
        port: c,
        protocol: s.replace(":", ""),
        options: Object.freeze({
            disableWarnings: i
        })
    }), es()
}

function fn(n) {
    const e = n.indexOf(":");
    return e < 0 ? "" : n.substr(0, e + 1)
}

function Zi(n) {
    const e = fn(n),
        t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
    if (!t) return {
        host: "",
        port: null
    };
    const r = t[2].split("@").pop() || "",
        i = /^(\[[^\]]+\])(:|$)/.exec(r);
    if (i) {
        const s = i[1];
        return {
            host: s,
            port: Tt(r.substr(s.length + 1))
        }
    } else {
        const [s, o] = r.split(":");
        return {
            host: s,
            port: Tt(o)
        }
    }
}

function Tt(n) {
    if (!n) return null;
    const e = Number(n);
    return isNaN(e) ? null : e
}

function es() {
    function n() {
        const e = document.createElement("p"),
            t = e.style;
        e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e)
    }
    typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", n) : n())
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pn {
    constructor(e, t) {
        this.providerId = e, this.signInMethod = t
    }
    toJSON() {
        return S("not implemented")
    }
    _getIdTokenResponse(e) {
        return S("not implemented")
    }
    _linkToIdToken(e, t) {
        return S("not implemented")
    }
    _getReauthenticationResolver(e) {
        return S("not implemented")
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function z(n, e) {
    return Ri(n, "POST", "/v1/accounts:signInWithIdp", Je(n, e))
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ts = "http://localhost";
class $ extends pn {
    constructor() {
        super(...arguments), this.pendingToken = null
    }
    static _fromParams(e) {
        const t = new $(e.providerId, e.signInMethod);
        return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : b("argument-error"), t
    }
    toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        }
    }
    static fromJSON(e) {
        const t = typeof e == "string" ? JSON.parse(e) : e,
            {
                providerId: r,
                signInMethod: i
            } = t,
            s = ze(t, ["providerId", "signInMethod"]);
        if (!r || !i) return null;
        const o = new $(r, i);
        return o.idToken = s.idToken || void 0, o.accessToken = s.accessToken || void 0, o.secret = s.secret, o.nonce = s.nonce, o.pendingToken = s.pendingToken || null, o
    }
    _getIdTokenResponse(e) {
        const t = this.buildRequest();
        return z(e, t)
    }
    _linkToIdToken(e, t) {
        const r = this.buildRequest();
        return r.idToken = t, z(e, r)
    }
    _getReauthenticationResolver(e) {
        const t = this.buildRequest();
        return t.autoCreate = !1, z(e, t)
    }
    buildRequest() {
        const e = {
            requestUri: ts,
            returnSecureToken: !0
        };
        if (this.pendingToken) e.pendingToken = this.pendingToken;
        else {
            const t = {};
            this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = ne(t)
        }
        return e
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze {
    constructor(e) {
        this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {}
    }
    setDefaultLanguage(e) {
        this.defaultLanguageCode = e
    }
    setCustomParameters(e) {
        return this.customParameters = e, this
    }
    getCustomParameters() {
        return this.customParameters
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se extends Ze {
    constructor() {
        super(...arguments), this.scopes = []
    }
    addScope(e) {
        return this.scopes.includes(e) || this.scopes.push(e), this
    }
    getScopes() {
        return [...this.scopes]
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N extends se {
    constructor() {
        super("facebook.com")
    }
    static credential(e) {
        return $._fromParams({
            providerId: N.PROVIDER_ID,
            signInMethod: N.FACEBOOK_SIGN_IN_METHOD,
            accessToken: e
        })
    }
    static credentialFromResult(e) {
        return N.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return N.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
        try {
            return N.credential(e.oauthAccessToken)
        } catch {
            return null
        }
    }
}
N.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
N.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v extends se {
    constructor() {
        super("google.com"), this.addScope("profile")
    }
    static credential(e, t) {
        return $._fromParams({
            providerId: v.PROVIDER_ID,
            signInMethod: v.GOOGLE_SIGN_IN_METHOD,
            idToken: e,
            accessToken: t
        })
    }
    static credentialFromResult(e) {
        return v.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return v.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e) return null;
        const {
            oauthIdToken: t,
            oauthAccessToken: r
        } = e;
        if (!t && !r) return null;
        try {
            return v.credential(t, r)
        } catch {
            return null
        }
    }
}
v.GOOGLE_SIGN_IN_METHOD = "google.com";
v.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E extends se {
    constructor() {
        super("github.com")
    }
    static credential(e) {
        return $._fromParams({
            providerId: E.PROVIDER_ID,
            signInMethod: E.GITHUB_SIGN_IN_METHOD,
            accessToken: e
        })
    }
    static credentialFromResult(e) {
        return E.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return E.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
        try {
            return E.credential(e.oauthAccessToken)
        } catch {
            return null
        }
    }
}
E.GITHUB_SIGN_IN_METHOD = "github.com";
E.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D extends se {
    constructor() {
        super("twitter.com")
    }
    static credential(e, t) {
        return $._fromParams({
            providerId: D.PROVIDER_ID,
            signInMethod: D.TWITTER_SIGN_IN_METHOD,
            oauthToken: e,
            oauthTokenSecret: t
        })
    }
    static credentialFromResult(e) {
        return D.credentialFromTaggedObject(e)
    }
    static credentialFromError(e) {
        return D.credentialFromTaggedObject(e.customData || {})
    }
    static credentialFromTaggedObject({
        _tokenResponse: e
    }) {
        if (!e) return null;
        const {
            oauthAccessToken: t,
            oauthTokenSecret: r
        } = e;
        if (!t || !r) return null;
        try {
            return D.credential(t, r)
        } catch {
            return null
        }
    }
}
D.TWITTER_SIGN_IN_METHOD = "twitter.com";
D.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q {
    constructor(e) {
        this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType
    }
    static async _fromIdTokenResponse(e, t, r, i = !1) {
        const s = await A._fromIdTokenResponse(e, r, i),
            o = St(r);
        return new q({
            user: s,
            providerId: o,
            _tokenResponse: r,
            operationType: t
        })
    }
    static async _forOperation(e, t, r) {
        await e._updateTokensIfNecessary(r, !0);
        const i = St(r);
        return new q({
            user: e,
            providerId: i,
            _tokenResponse: r,
            operationType: t
        })
    }
}

function St(n) {
    return n.providerId ? n.providerId : "phoneNumber" in n ? "phone" : null
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e extends U {
    constructor(e, t, r, i) {
        var s;
        super(t.code, t.message), this.operationType = r, this.user = i, Object.setPrototypeOf(this, _e.prototype), this.customData = {
            appName: e.name,
            tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
            _serverResponse: t.customData._serverResponse,
            operationType: r
        }
    }
    static _fromErrorAndOperation(e, t, r, i) {
        return new _e(e, t, r, i)
    }
}

function mn(n, e, t, r) {
    return (e === "reauthenticate" ? t._getReauthenticationResolver(n) : t._getIdTokenResponse(n)).catch(s => {
        throw s.code === "auth/multi-factor-auth-required" ? _e._fromErrorAndOperation(n, s, e, r) : s
    })
}
async function ns(n, e, t = !1) {
    const r = await ee(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
    return q._forOperation(n, "link", r)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rs(n, e, t = !1) {
    const {
        auth: r
    } = n;
    if (T(r.app)) return Promise.reject(j(r));
    const i = "reauthenticate";
    try {
        const s = await ee(n, mn(r, i, e, n), t);
        u(s.idToken, r, "internal-error");
        const o = Ye(s.idToken);
        u(o, r, "internal-error");
        const {
            sub: c
        } = o;
        return u(n.uid === c, r, "user-mismatch"), q._forOperation(n, i, s)
    } catch (s) {
        throw (s == null ? void 0 : s.code) === "auth/user-not-found" && b(r, "user-mismatch"), s
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function is(n, e, t = !1) {
    if (T(n.app)) return Promise.reject(j(n));
    const r = "signIn",
        i = await mn(n, r, e),
        s = await q._fromIdTokenResponse(n, r, i);
    return t || await n._updateCurrentUser(s.user), s
}

function ss(n, e, t, r) {
    return K(n).onIdTokenChanged(e, t, r)
}

function os(n, e, t) {
    return K(n).beforeAuthStateChanged(e, t)
}
const Ie = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn {
    constructor(e, t) {
        this.storageRetriever = e, this.type = t
    }
    _isAvailable() {
        try {
            return this.storage ? (this.storage.setItem(Ie, "1"), this.storage.removeItem(Ie), Promise.resolve(!0)) : Promise.resolve(!1)
        } catch {
            return Promise.resolve(!1)
        }
    }
    _set(e, t) {
        return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve()
    }
    _get(e) {
        const t = this.storage.getItem(e);
        return Promise.resolve(t ? JSON.parse(t) : null)
    }
    _remove(e) {
        return this.storage.removeItem(e), Promise.resolve()
    }
    get storage() {
        return this.storageRetriever()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const as = 1e3,
    cs = 10;
class _n extends gn {
    constructor() {
        super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = dn(), this._shouldAllowMigration = !0
    }
    forAllChangedKeys(e) {
        for (const t of Object.keys(this.listeners)) {
            const r = this.storage.getItem(t),
                i = this.localCache[t];
            r !== i && e(t, i, r)
        }
    }
    onStorageEvent(e, t = !1) {
        if (!e.key) {
            this.forAllChangedKeys((o, c, a) => {
                this.notifyListeners(o, a)
            });
            return
        }
        const r = e.key;
        t ? this.detachListener() : this.stopPolling();
        const i = () => {
                const o = this.storage.getItem(r);
                !t && this.localCache[r] === o || this.notifyListeners(r, o)
            },
            s = this.storage.getItem(r);
        ji() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, cs) : i()
    }
    notifyListeners(e, t) {
        this.localCache[e] = t;
        const r = this.listeners[e];
        if (r)
            for (const i of Array.from(r)) i(t && JSON.parse(t))
    }
    startPolling() {
        this.stopPolling(), this.pollTimer = setInterval(() => {
            this.forAllChangedKeys((e, t, r) => {
                this.onStorageEvent(new StorageEvent("storage", {
                    key: e,
                    oldValue: t,
                    newValue: r
                }), !0)
            })
        }, as)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
    }
    attachListener() {
        window.addEventListener("storage", this.boundEventHandler)
    }
    detachListener() {
        window.removeEventListener("storage", this.boundEventHandler)
    }
    _addListener(e, t) {
        Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t)
    }
    _removeListener(e, t) {
        this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling())
    }
    async _set(e, t) {
        await super._set(e, t), this.localCache[e] = JSON.stringify(t)
    }
    async _get(e) {
        const t = await super._get(e);
        return this.localCache[e] = JSON.stringify(t), t
    }
    async _remove(e) {
        await super._remove(e), delete this.localCache[e]
    }
}
_n.type = "LOCAL";
const ls = _n;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In extends gn {
    constructor() {
        super(() => window.sessionStorage, "SESSION")
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
}
In.type = "SESSION";
const yn = In;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function us(n) {
    return Promise.all(n.map(async e => {
        try {
            return {
                fulfilled: !0,
                value: await e
            }
        } catch (t) {
            return {
                fulfilled: !1,
                reason: t
            }
        }
    }))
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we {
    constructor(e) {
        this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
    }
    static _getInstance(e) {
        const t = this.receivers.find(i => i.isListeningto(e));
        if (t) return t;
        const r = new we(e);
        return this.receivers.push(r), r
    }
    isListeningto(e) {
        return this.eventTarget === e
    }
    async handleEvent(e) {
        const t = e,
            {
                eventId: r,
                eventType: i,
                data: s
            } = t.data,
            o = this.handlersMap[i];
        if (!(o != null && o.size)) return;
        t.ports[0].postMessage({
            status: "ack",
            eventId: r,
            eventType: i
        });
        const c = Array.from(o).map(async l => l(t.origin, s)),
            a = await us(c);
        t.ports[0].postMessage({
            status: "done",
            eventId: r,
            eventType: i,
            response: a
        })
    }
    _subscribe(e, t) {
        Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(t)
    }
    _unsubscribe(e, t) {
        this.handlersMap[e] && t && this.handlersMap[e].delete(t), (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler)
    }
}
we.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function et(n = "", e = 10) {
    let t = "";
    for (let r = 0; r < e; r++) t += Math.floor(Math.random() * 10);
    return n + t
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds {
    constructor(e) {
        this.target = e, this.handlers = new Set
    }
    removeMessageHandler(e) {
        e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e)
    }
    async _send(e, t, r = 50) {
        const i = typeof MessageChannel < "u" ? new MessageChannel : null;
        if (!i) throw new Error("connection_unavailable");
        let s, o;
        return new Promise((c, a) => {
            const l = et("", 20);
            i.port1.start();
            const h = setTimeout(() => {
                a(new Error("unsupported_event"))
            }, r);
            o = {
                messageChannel: i,
                onMessage(p) {
                    const m = p;
                    if (m.data.eventId === l) switch (m.data.status) {
                        case "ack":
                            clearTimeout(h), s = setTimeout(() => {
                                a(new Error("timeout"))
                            }, 3e3);
                            break;
                        case "done":
                            clearTimeout(s), c(m.data.response);
                            break;
                        default:
                            clearTimeout(h), clearTimeout(s), a(new Error("invalid_response"));
                            break
                    }
                }
            }, this.handlers.add(o), i.port1.addEventListener("message", o.onMessage), this.target.postMessage({
                eventType: e,
                eventId: l,
                data: t
            }, [i.port2])
        }).finally(() => {
            o && this.removeMessageHandler(o)
        })
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y() {
    return window
}

function hs(n) {
    y().location.href = n
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bn() {
    return typeof y().WorkerGlobalScope < "u" && typeof y().importScripts == "function"
}
async function fs() {
    if (!(navigator != null && navigator.serviceWorker)) return null;
    try {
        return (await navigator.serviceWorker.ready).active
    } catch {
        return null
    }
}

function ps() {
    var n;
    return ((n = navigator == null ? void 0 : navigator.serviceWorker) === null || n === void 0 ? void 0 : n.controller) || null
}

function ms() {
    return bn() ? self : null
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn = "firebaseLocalStorageDb",
    gs = 1,
    ye = "firebaseLocalStorage",
    vn = "fbase_key";
class oe {
    constructor(e) {
        this.request = e
    }
    toPromise() {
        return new Promise((e, t) => {
            this.request.addEventListener("success", () => {
                e(this.request.result)
            }), this.request.addEventListener("error", () => {
                t(this.request.error)
            })
        })
    }
}

function ve(n, e) {
    return n.transaction([ye], e ? "readwrite" : "readonly").objectStore(ye)
}

function _s() {
    const n = indexedDB.deleteDatabase(wn);
    return new oe(n).toPromise()
}

function He() {
    const n = indexedDB.open(wn, gs);
    return new Promise((e, t) => {
        n.addEventListener("error", () => {
            t(n.error)
        }), n.addEventListener("upgradeneeded", () => {
            const r = n.result;
            try {
                r.createObjectStore(ye, {
                    keyPath: vn
                })
            } catch (i) {
                t(i)
            }
        }), n.addEventListener("success", async () => {
            const r = n.result;
            r.objectStoreNames.contains(ye) ? e(r) : (r.close(), await _s(), e(await He()))
        })
    })
}
async function At(n, e, t) {
    const r = ve(n, !0).put({
        [vn]: e,
        value: t
    });
    return new oe(r).toPromise()
}
async function Is(n, e) {
    const t = ve(n, !1).get(e),
        r = await new oe(t).toPromise();
    return r === void 0 ? null : r.value
}

function kt(n, e) {
    const t = ve(n, !0).delete(e);
    return new oe(t).toPromise()
}
const ys = 800,
    bs = 3;
class En {
    constructor() {
        this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {})
    }
    async _openDb() {
        return this.db ? this.db : (this.db = await He(), this.db)
    }
    async _withRetries(e) {
        let t = 0;
        for (;;) try {
            const r = await this._openDb();
            return await e(r)
        } catch (r) {
            if (t++ > bs) throw r;
            this.db && (this.db.close(), this.db = void 0)
        }
    }
    async initializeServiceWorkerMessaging() {
        return bn() ? this.initializeReceiver() : this.initializeSender()
    }
    async initializeReceiver() {
        this.receiver = we._getInstance(ms()), this.receiver._subscribe("keyChanged", async (e, t) => ({
            keyProcessed: (await this._poll()).includes(t.key)
        })), this.receiver._subscribe("ping", async (e, t) => ["keyChanged"])
    }
    async initializeSender() {
        var e, t;
        if (this.activeServiceWorker = await fs(), !this.activeServiceWorker) return;
        this.sender = new ds(this.activeServiceWorker);
        const r = await this.sender._send("ping", {}, 800);
        r && !((e = r[0]) === null || e === void 0) && e.fulfilled && !((t = r[0]) === null || t === void 0) && t.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0)
    }
    async notifyServiceWorker(e) {
        if (!(!this.sender || !this.activeServiceWorker || ps() !== this.activeServiceWorker)) try {
            await this.sender._send("keyChanged", {
                key: e
            }, this.serviceWorkerReceiverAvailable ? 800 : 50)
        } catch {}
    }
    async _isAvailable() {
        try {
            if (!indexedDB) return !1;
            const e = await He();
            return await At(e, Ie, "1"), await kt(e, Ie), !0
        } catch {}
        return !1
    }
    async _withPendingWrite(e) {
        this.pendingWrites++;
        try {
            await e()
        } finally {
            this.pendingWrites--
        }
    }
    async _set(e, t) {
        return this._withPendingWrite(async () => (await this._withRetries(r => At(r, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)))
    }
    async _get(e) {
        const t = await this._withRetries(r => Is(r, e));
        return this.localCache[e] = t, t
    }
    async _remove(e) {
        return this._withPendingWrite(async () => (await this._withRetries(t => kt(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)))
    }
    async _poll() {
        const e = await this._withRetries(i => {
            const s = ve(i, !1).getAll();
            return new oe(s).toPromise()
        });
        if (!e) return [];
        if (this.pendingWrites !== 0) return [];
        const t = [],
            r = new Set;
        if (e.length !== 0)
            for (const {
                    fbase_key: i,
                    value: s
                } of e) r.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(s) && (this.notifyListeners(i, s), t.push(i));
        for (const i of Object.keys(this.localCache)) this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), t.push(i));
        return t
    }
    notifyListeners(e, t) {
        this.localCache[e] = t;
        const r = this.listeners[e];
        if (r)
            for (const i of Array.from(r)) i(t)
    }
    startPolling() {
        this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), ys)
    }
    stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
    }
    _addListener(e, t) {
        Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set, this._get(e)), this.listeners[e].add(t)
    }
    _removeListener(e, t) {
        this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling()
    }
}
En.type = "LOCAL";
const ws = En;
new ie(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tn(n, e) {
    return e ? k(e) : (u(n._popupRedirectResolver, n, "argument-error"), n._popupRedirectResolver)
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends pn {
    constructor(e) {
        super("custom", "custom"), this.params = e
    }
    _getIdTokenResponse(e) {
        return z(e, this._buildIdpRequest())
    }
    _linkToIdToken(e, t) {
        return z(e, this._buildIdpRequest(t))
    }
    _getReauthenticationResolver(e) {
        return z(e, this._buildIdpRequest())
    }
    _buildIdpRequest(e) {
        const t = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
        };
        return e && (t.idToken = e), t
    }
}

function vs(n) {
    return is(n.auth, new tt(n), n.bypassAuthState)
}

function Es(n) {
    const {
        auth: e,
        user: t
    } = n;
    return u(t, e, "internal-error"), rs(t, new tt(n), n.bypassAuthState)
}
async function Ts(n) {
    const {
        auth: e,
        user: t
    } = n;
    return u(t, e, "internal-error"), ns(t, new tt(n), n.bypassAuthState)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn {
    constructor(e, t, r, i, s = !1) {
        this.auth = e, this.resolver = r, this.user = i, this.bypassAuthState = s, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t]
    }
    execute() {
        return new Promise(async (e, t) => {
            this.pendingPromise = {
                resolve: e,
                reject: t
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
            } catch (r) {
                this.reject(r)
            }
        })
    }
    async onAuthEvent(e) {
        const {
            urlResponse: t,
            sessionId: r,
            postBody: i,
            tenantId: s,
            error: o,
            type: c
        } = e;
        if (o) {
            this.reject(o);
            return
        }
        const a = {
            auth: this.auth,
            requestUri: t,
            sessionId: r,
            tenantId: s || void 0,
            postBody: i || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(c)(a))
        } catch (l) {
            this.reject(l)
        }
    }
    onError(e) {
        this.reject(e)
    }
    getIdpTask(e) {
        switch (e) {
            case "signInViaPopup":
            case "signInViaRedirect":
                return vs;
            case "linkViaPopup":
            case "linkViaRedirect":
                return Ts;
            case "reauthViaPopup":
            case "reauthViaRedirect":
                return Es;
            default:
                b(this.auth, "internal-error")
        }
    }
    resolve(e) {
        R(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp()
    }
    reject(e) {
        R(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp()
    }
    unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ss = new ie(2e3, 1e4);
async function An(n, e, t) {
    if (T(n.app)) return Promise.reject(I(n, "operation-not-supported-in-this-environment"));
    const r = be(n);
    Ei(n, e, Ze);
    const i = Tn(r, t);
    return new B(r, "signInViaPopup", e, i).executeNotNull()
}
class B extends Sn {
    constructor(e, t, r, i, s) {
        super(e, t, i, s), this.provider = r, this.authWindow = null, this.pollId = null, B.currentPopupAction && B.currentPopupAction.cancel(), B.currentPopupAction = this
    }
    async executeNotNull() {
        const e = await this.execute();
        return u(e, this.auth, "internal-error"), e
    }
    async onExecution() {
        R(this.filter.length === 1, "Popup operations only handle one event");
        const e = et();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch(t => {
            this.reject(t)
        }), this.resolver._isIframeWebStorageSupported(this.auth, t => {
            t || this.reject(I(this.auth, "web-storage-unsupported"))
        }), this.pollUserCancellation()
    }
    get eventId() {
        var e;
        return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null
    }
    cancel() {
        this.reject(I(this.auth, "cancelled-popup-request"))
    }
    cleanUp() {
        this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, B.currentPopupAction = null
    }
    pollUserCancellation() {
        const e = () => {
            var t, r;
            if (!((r = (t = this.authWindow) === null || t === void 0 ? void 0 : t.window) === null || r === void 0) && r.closed) {
                this.pollId = window.setTimeout(() => {
                    this.pollId = null, this.reject(I(this.auth, "popup-closed-by-user"))
                }, 8e3);
                return
            }
            this.pollId = window.setTimeout(e, Ss.get())
        };
        e()
    }
}
B.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const As = "pendingRedirect",
    de = new Map;
class ks extends Sn {
    constructor(e, t, r = !1) {
        super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, r), this.eventId = null
    }
    async execute() {
        let e = de.get(this.auth._key());
        if (!e) {
            try {
                const r = await Cs(this.resolver, this.auth) ? await super.execute() : null;
                e = () => Promise.resolve(r)
            } catch (t) {
                e = () => Promise.reject(t)
            }
            de.set(this.auth._key(), e)
        }
        return this.bypassAuthState || de.set(this.auth._key(), () => Promise.resolve(null)), e()
    }
    async onAuthEvent(e) {
        if (e.type === "signInViaRedirect") return super.onAuthEvent(e);
        if (e.type === "unknown") {
            this.resolve(null);
            return
        }
        if (e.eventId) {
            const t = await this.auth._redirectUserForId(e.eventId);
            if (t) return this.user = t, super.onAuthEvent(e);
            this.resolve(null)
        }
    }
    async onExecution() {}
    cleanUp() {}
}
async function Cs(n, e) {
    const t = Os(e),
        r = Ps(n);
    if (!await r._isAvailable()) return !1;
    const i = await r._get(t) === "true";
    return await r._remove(t), i
}

function Rs(n, e) {
    de.set(n._key(), e)
}

function Ps(n) {
    return k(n._redirectPersistence)
}

function Os(n) {
    return ue(As, n.config.apiKey, n.name)
}
async function Ns(n, e, t = !1) {
    if (T(n.app)) return Promise.reject(j(n));
    const r = be(n),
        i = Tn(r, e),
        o = await new ks(r, i, t).execute();
    return o && !t && (delete o.user._redirectEventId, await r._persistUserIfCurrent(o.user), await r._setRedirectUser(null, e)), o
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ds = 10 * 60 * 1e3;
class Ls {
    constructor(e) {
        this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
    }
    registerConsumer(e) {
        this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
    }
    unregisterConsumer(e) {
        this.consumers.delete(e)
    }
    onEvent(e) {
        if (this.hasEventBeenHandled(e)) return !1;
        let t = !1;
        return this.consumers.forEach(r => {
            this.isEventForConsumer(e, r) && (t = !0, this.sendToConsumer(e, r), this.saveEventToCache(e))
        }), this.hasHandledPotentialRedirect || !Ms(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t
    }
    sendToConsumer(e, t) {
        var r;
        if (e.error && !kn(e)) {
            const i = ((r = e.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
            t.onError(I(this.auth, i))
        } else t.onAuthEvent(e)
    }
    isEventForConsumer(e, t) {
        const r = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
        return t.filter.includes(e.type) && r
    }
    hasEventBeenHandled(e) {
        return Date.now() - this.lastProcessedEventTime >= Ds && this.cachedEventUids.clear(), this.cachedEventUids.has(Ct(e))
    }
    saveEventToCache(e) {
        this.cachedEventUids.add(Ct(e)), this.lastProcessedEventTime = Date.now()
    }
}

function Ct(n) {
    return [n.type, n.eventId, n.sessionId, n.tenantId].filter(e => e).join("-")
}

function kn({
    type: n,
    error: e
}) {
    return n === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
}

function Ms(n) {
    switch (n.type) {
        case "signInViaRedirect":
        case "linkViaRedirect":
        case "reauthViaRedirect":
            return !0;
        case "unknown":
            return kn(n);
        default:
            return !1
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Us(n, e = {}) {
    return J(n, "GET", "/v1/projects", e)
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xs = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    Fs = /^https?/;
async function Bs(n) {
    if (n.config.emulator) return;
    const {
        authorizedDomains: e
    } = await Us(n);
    for (const t of e) try {
        if (js(t)) return
    } catch {}
    b(n, "unauthorized-domain")
}

function js(n) {
    const e = je(),
        {
            protocol: t,
            hostname: r
        } = new URL(e);
    if (n.startsWith("chrome-extension://")) {
        const o = new URL(n);
        return o.hostname === "" && r === "" ? t === "chrome-extension:" && n.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : t === "chrome-extension:" && o.hostname === r
    }
    if (!Fs.test(t)) return !1;
    if (xs.test(n)) return r === n;
    const i = n.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r)
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $s = new ie(3e4, 6e4);

function Rt() {
    const n = y().___jsl;
    if (n != null && n.H) {
        for (const e of Object.keys(n.H))
            if (n.H[e].r = n.H[e].r || [], n.H[e].L = n.H[e].L || [], n.H[e].r = [...n.H[e].L], n.CP)
                for (let t = 0; t < n.CP.length; t++) n.CP[t] = null
    }
}

function Hs(n) {
    return new Promise((e, t) => {
        var r, i, s;

        function o() {
            Rt(), gapi.load("gapi.iframes", {
                callback: () => {
                    e(gapi.iframes.getContext())
                },
                ontimeout: () => {
                    Rt(), t(I(n, "network-request-failed"))
                },
                timeout: $s.get()
            })
        }
        if (!((i = (r = y().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0) && i.Iframe) e(gapi.iframes.getContext());
        else if (!((s = y().gapi) === null || s === void 0) && s.load) o();
        else {
            const c = Ji("iframefcb");
            return y()[c] = () => {
                gapi.load ? o() : t(I(n, "network-request-failed"))
            }, qi(`${Ki()}?onload=${c}`).catch(a => t(a))
        }
    }).catch(e => {
        throw he = null, e
    })
}
let he = null;

function Vs(n) {
    return he = he || Hs(n), he
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ws = new ie(5e3, 15e3),
    zs = "__/auth/iframe",
    Gs = "emulator/auth/iframe",
    qs = {
        style: {
            position: "absolute",
            top: "-100px",
            width: "1px",
            height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
    },
    Ks = new Map([
        ["identitytoolkit.googleapis.com", "p"],
        ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
        ["test-identitytoolkit.sandbox.googleapis.com", "t"]
    ]);

function Js(n) {
    const e = n.config;
    u(e.authDomain, n, "auth-domain-config-required");
    const t = e.emulator ? Ke(e, Gs) : `https://${n.config.authDomain}/${zs}`,
        r = {
            apiKey: e.apiKey,
            appName: n.name,
            v: re
        },
        i = Ks.get(n.config.apiHost);
    i && (r.eid = i);
    const s = n._getFrameworks();
    return s.length && (r.fw = s.join(",")), `${t}?${ne(r).slice(1)}`
}
async function Ys(n) {
    const e = await Vs(n),
        t = y().gapi;
    return u(t, n, "internal-error"), e.open({
        where: document.body,
        url: Js(n),
        messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: qs,
        dontclear: !0
    }, r => new Promise(async (i, s) => {
        await r.restyle({
            setHideOnLeave: !1
        });
        const o = I(n, "network-request-failed"),
            c = y().setTimeout(() => {
                s(o)
            }, Ws.get());

        function a() {
            y().clearTimeout(c), i(r)
        }
        r.ping(a).then(a, () => {
            s(o)
        })
    }))
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xs = {
        location: "yes",
        resizable: "yes",
        statusbar: "yes",
        toolbar: "no"
    },
    Qs = 500,
    Zs = 600,
    eo = "_blank",
    to = "http://localhost";
class Pt {
    constructor(e) {
        this.window = e, this.associatedEvent = null
    }
    close() {
        if (this.window) try {
            this.window.close()
        } catch {}
    }
}

function no(n, e, t, r = Qs, i = Zs) {
    const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
        o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
    let c = "";
    const a = Object.assign(Object.assign({}, Xs), {
            width: r.toString(),
            height: i.toString(),
            top: s,
            left: o
        }),
        l = g().toLowerCase();
    t && (c = on(l) ? eo : t), rn(l) && (e = e || to, a.scrollbars = "yes");
    const h = Object.entries(a).reduce((m, [_, w]) => `${m}${_}=${w},`, "");
    if (Bi(l) && c !== "_self") return ro(e || "", c), new Pt(null);
    const p = window.open(e || "", c, h);
    u(p, n, "popup-blocked");
    try {
        p.focus()
    } catch {}
    return new Pt(p)
}

function ro(n, e) {
    const t = document.createElement("a");
    t.href = n, t.target = e;
    const r = document.createEvent("MouseEvent");
    r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), t.dispatchEvent(r)
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const io = "__/auth/handler",
    so = "emulator/auth/handler",
    oo = encodeURIComponent("fac");
async function Ot(n, e, t, r, i, s) {
    u(n.config.authDomain, n, "auth-domain-config-required"), u(n.config.apiKey, n, "invalid-api-key");
    const o = {
        apiKey: n.config.apiKey,
        appName: n.name,
        authType: t,
        redirectUrl: r,
        v: re,
        eventId: i
    };
    if (e instanceof Ze) {
        e.setDefaultLanguage(n.languageCode), o.providerId = e.providerId || "", lr(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
        for (const [h, p] of Object.entries({})) o[h] = p
    }
    if (e instanceof se) {
        const h = e.getScopes().filter(p => p !== "");
        h.length > 0 && (o.scopes = h.join(","))
    }
    n.tenantId && (o.tid = n.tenantId);
    const c = o;
    for (const h of Object.keys(c)) c[h] === void 0 && delete c[h];
    const a = await n._getAppCheckToken(),
        l = a ? `#${oo}=${encodeURIComponent(a)}` : "";
    return `${ao(n)}?${ne(c).slice(1)}${l}`
}

function ao({
    config: n
}) {
    return n.emulator ? Ke(n, so) : `https://${n.authDomain}/${io}`
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const De = "webStorageSupport";
class co {
    constructor() {
        this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = yn, this._completeRedirectFn = Ns, this._overrideRedirectResult = Rs
    }
    async _openPopup(e, t, r, i) {
        var s;
        R((s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager, "_initialize() not called before _openPopup()");
        const o = await Ot(e, t, r, je(), i);
        return no(e, o, et())
    }
    async _openRedirect(e, t, r, i) {
        await this._originValidation(e);
        const s = await Ot(e, t, r, je(), i);
        return hs(s), new Promise(() => {})
    }
    _initialize(e) {
        const t = e._key();
        if (this.eventManagers[t]) {
            const {
                manager: i,
                promise: s
            } = this.eventManagers[t];
            return i ? Promise.resolve(i) : (R(s, "If manager is not set, promise should be"), s)
        }
        const r = this.initAndGetManager(e);
        return this.eventManagers[t] = {
            promise: r
        }, r.catch(() => {
            delete this.eventManagers[t]
        }), r
    }
    async initAndGetManager(e) {
        const t = await Ys(e),
            r = new Ls(e);
        return t.register("authEvent", i => (u(i == null ? void 0 : i.authEvent, e, "invalid-auth-event"), {
            status: r.onEvent(i.authEvent) ? "ACK" : "ERROR"
        }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = {
            manager: r
        }, this.iframes[e._key()] = t, r
    }
    _isIframeWebStorageSupported(e, t) {
        this.iframes[e._key()].send(De, {
            type: De
        }, i => {
            var s;
            const o = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[De];
            o !== void 0 && t(!!o), b(e, "internal-error")
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    }
    _originValidation(e) {
        const t = e._key();
        return this.originValidationPromises[t] || (this.originValidationPromises[t] = Bs(e)), this.originValidationPromises[t]
    }
    get _shouldInitProactively() {
        return dn() || sn() || Xe()
    }
}
const lo = co;
var Nt = "@firebase/auth",
    Dt = "1.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo {
    constructor(e) {
        this.auth = e, this.internalListeners = new Map
    }
    getUid() {
        var e;
        return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null
    }
    async getToken(e) {
        return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? {
            accessToken: await this.auth.currentUser.getIdToken(e)
        } : null
    }
    addAuthTokenListener(e) {
        if (this.assertAuthConfigured(), this.internalListeners.has(e)) return;
        const t = this.auth.onIdTokenChanged(r => {
            e((r == null ? void 0 : r.stsTokenManager.accessToken) || null)
        });
        this.internalListeners.set(e, t), this.updateProactiveRefresh()
    }
    removeAuthTokenListener(e) {
        this.assertAuthConfigured();
        const t = this.internalListeners.get(e);
        t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
        u(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }
    updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ho(n) {
    switch (n) {
        case "Node":
            return "node";
        case "ReactNative":
            return "rn";
        case "Worker":
            return "webworker";
        case "Cordova":
            return "cordova";
        case "WebExtension":
            return "web-extension";
        default:
            return
    }
}

function fo(n) {
    Q(new G("auth", (e, {
        options: t
    }) => {
        const r = e.getProvider("app").getImmediate(),
            i = e.getProvider("heartbeat"),
            s = e.getProvider("app-check-internal"),
            {
                apiKey: o,
                authDomain: c
            } = r.options;
        u(o && !o.includes(":"), "invalid-api-key", {
            appName: r.name
        });
        const a = {
                apiKey: o,
                authDomain: c,
                clientPlatform: n,
                apiHost: "identitytoolkit.googleapis.com",
                tokenApiHost: "securetoken.googleapis.com",
                apiScheme: "https",
                sdkClientVersion: hn(n)
            },
            l = new zi(r, i, s, a);
        return Xi(l, t), l
    }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e, t, r) => {
        e.getProvider("auth-internal").initialize()
    })), Q(new G("auth-internal", e => {
        const t = be(e.getProvider("auth").getImmediate());
        return (r => new uo(r))(t)
    }, "PRIVATE").setInstantiationMode("EXPLICIT")), H(Nt, Dt, ho(n)), H(Nt, Dt, "esm2017")
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const po = 5 * 60,
    mo = $t("authIdTokenMaxAge") || po;
let Lt = null;
const go = n => async e => {
    const t = e && await e.getIdTokenResult(),
        r = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
    if (r && r > mo) return;
    const i = t == null ? void 0 : t.token;
    Lt !== i && (Lt = i, await fetch(n, {
        method: i ? "POST" : "DELETE",
        headers: i ? {
            Authorization: `Bearer ${i}`
        } : {}
    }))
};

function _o(n = di()) {
    const e = zt(n, "auth");
    if (e.isInitialized()) return e.getImmediate();
    const t = Yi(n, {
            popupRedirectResolver: lo,
            persistence: [ws, ls, yn]
        }),
        r = $t("authTokenSyncURL");
    if (r && typeof isSecureContext == "boolean" && isSecureContext) {
        const s = new URL(r, location.origin);
        if (location.origin === s.origin) {
            const o = go(s.toString());
            os(t, o, () => o(t.currentUser)), ss(t, c => o(c))
        }
    }
    const i = Xn("auth");
    return i && Qi(t, `http://${i}`), t
}

function Io() {
    var n, e;
    return (e = (n = document.getElementsByTagName("head")) === null || n === void 0 ? void 0 : n[0]) !== null && e !== void 0 ? e : document
}
Gi({
    loadJS(n) {
        return new Promise((e, t) => {
            const r = document.createElement("script");
            r.setAttribute("src", n), r.onload = e, r.onerror = i => {
                const s = I("internal-error");
                s.customData = i, t(s)
            }, r.type = "text/javascript", r.charset = "UTF-8", Io().appendChild(r)
        })
    },
    gapiScript: "https://apis.google.com/js/api.js",
    recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
    recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
fo("Browser");
var yo = "firebase",
    bo = "11.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
H(yo, bo, "app");
const wo = {
        apiKey: "AIzaSyAiX-HOy3AQvze3ZFyuSIHx_xUGLzy-SmM",
        authDomain: "ecme-2e85c.firebaseapp.com",
        projectId: "ecme-2e85c",
        storageBucket: "ecme-2e85c.appspot.com",
        messagingSenderId: "556186624955",
        appId: "1:556186624955:web:8a901721abe139822ada9e"
    },
    vo = Gt(wo),
    Cn = _o(vo),
    Eo = new v,
    To = async () => {
        try {
            const n = await An(Cn, Eo);
            return {
                token: await n.user.getIdToken(),
                user: n.user
            }
        } catch (n) {
            throw new Error(`Google sign-in failed: ${n}`)
        }
    },
    So = new E,
    Ao = async () => {
        try {
            const n = await An(Cn, So);
            return {
                token: await n.user.getIdToken(),
                user: n.user
            }
        } catch (n) {
            throw new Error(`GitHub sign-in failed: ${n}`)
        }
    };
async function ko() {
    return await To()
}
async function Co() {
    return await Ao()
}
const Ro = ({
        setMessage: n,
        disableSubmit: e
    }) => {
        const {
            oAuthSignIn: t
        } = Mt(), r = async () => {
            e || t(async ({
                redirect: s,
                onSignIn: o
            }) => {
                try {
                    const c = await ko();
                    if (c) {
                        const {
                            token: a,
                            user: l
                        } = c;
                        o({
                            accessToken: a
                        }, l), s()
                    }
                } catch (c) {
                    n == null || n((c == null ? void 0 : c.toString()) || "")
                }
            })
        }, i = async () => {
            e || t(async ({
                redirect: s,
                onSignIn: o
            }) => {
                try {
                    const c = await Co();
                    if (c) {
                        const {
                            token: a,
                            user: l
                        } = c;
                        o({
                            accessToken: a
                        }, l), s()
                    }
                } catch (c) {
                    n == null || n((c == null ? void 0 : c.toString()) || "")
                }
            })
        };
        return d.jsxs("div", {
            className: "flex items-center gap-2",
            children: [d.jsx(Le, {
                className: "flex-1",
                type: "button",
                onClick: r,
                children: d.jsxs("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [d.jsx("img", {
                        className: "h-[25px] w-[25px]",
                        src: "/img/others/google.png",
                        alt: "Google sign in"
                    }), d.jsx("span", {
                        children: "Google"
                    })]
                })
            }), d.jsx(Le, {
                className: "flex-1",
                type: "button",
                onClick: i,
                children: d.jsxs("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [d.jsx("img", {
                        className: "h-[25px] w-[25px]",
                        src: "/img/others/github.png",
                        alt: "Google sign in"
                    }), d.jsx("span", {
                        children: "Github"
                    })]
                })
            })]
        })
    },
    Po = ({
        signUpUrl: n = "/sign-up",
        forgetPasswordUrl: e = "/forgot-password",
        disableSubmit: t
    }) => {
        const [r, i] = $n(), s = Dn(o => o.mode);
        return d.jsxs(d.Fragment, {
            children: [d.jsx("div", {
                className: "mb-8",
                children: d.jsx(Ln, {
                    type: "streamline",
                    mode: s,
                    imgClass: "mx-auto",
                    logoWidth: 60
                })
            }), d.jsxs("div", {
                className: "mb-10",
                children: [d.jsx("h2", {
                    className: "mb-2",
                    children: "Welcome back!"
                }), d.jsx("p", {
                    className: "font-semibold heading-text",
                    children: "Please enter your credentials to sign in!"
                })]
            }), r && d.jsx(Mn, {
                showIcon: !0,
                className: "mb-4",
                type: "danger",
                children: d.jsx("span", {
                    className: "break-all",
                    children: r
                })
            }), d.jsx(Vn, {
                disableSubmit: t,
                setMessage: i,
                passwordHint: d.jsx("div", {
                    className: "mb-7 mt-2",
                    children: d.jsx(at, {
                        to: e,
                        className: "font-semibold heading-text mt-2 underline",
                        themeColor: !1,
                        children: "Forgot password"
                    })
                })
            }), d.jsxs("div", {
                className: "mt-8",
                children: [d.jsxs("div", {
                    className: "flex items-center gap-2 mb-6",
                    children: [d.jsx("div", {
                        className: "border-t border-gray-200 dark:border-gray-800 flex-1 mt-[1px]"
                    }), d.jsx("p", {
                        className: "font-semibold heading-text",
                        children: "or countinue with"
                    }), d.jsx("div", {
                        className: "border-t border-gray-200 dark:border-gray-800 flex-1 mt-[1px]"
                    })]
                }), d.jsx(Ro, {
                    disableSubmit: t,
                    setMessage: i
                })]
            }), d.jsx("div", {
                children: d.jsxs("div", {
                    className: "mt-6 text-center",
                    children: [d.jsxs("span", {
                        children: ["Don't have an account yet?", " "]
                    }), d.jsx(at, {
                        to: n,
                        className: "heading-text font-bold",
                        themeColor: !1,
                        children: "Sign up"
                    })]
                })
            })]
        })
    },
    Wo = () => d.jsx(Po, {});
export {
    Wo as S, Po as a
};