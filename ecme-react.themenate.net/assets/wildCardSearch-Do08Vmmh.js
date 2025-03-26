function l(o, e, t) {
    const u = r => {
        for (const n in r)
            if (r[t || n] != null && r[t || n].toString().toUpperCase().indexOf(e.toString().toUpperCase()) !== -1) return !0
    };
    return o.filter(r => u(r))
}
export {
    l as w
};