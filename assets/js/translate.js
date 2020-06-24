'use strict';
var k, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    },
    ba = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    },
    ca = function(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    },
    da = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    },
    ea;
if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
else {
    var fa;
    a: {
        var ha = {
                Nj: !0
            },
            ia = {};
        try {
            ia.__proto__ = ha;
            fa = ia.Nj;
            break a
        } catch (a) {}
        fa = !1
    }
    ea = fa ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a
    } : null
}
var ja = ea,
    ka = function(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ja) ja(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.D = b.prototype
    },
    la = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                ii: e,
                kj: f
            }
        }
        return {
            ii: -1,
            kj: void 0
        }
    },
    ma = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a,
        b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    },
    na = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
    oa = function(a, b) {
        if (b) {
            var c = na;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ma(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
oa("Array.prototype.findIndex", function(a) {
    return a ? a : function(b, c) {
        return la(this, b, c).ii
    }
});
var pa = function(a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
};
oa("String.prototype.endsWith", function(a) {
    return a ? a : function(b, c) {
        var d = pa(this, b, "endsWith");
        b += "";
        void 0 === c && (c = d.length);
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var e = b.length; 0 < e && 0 < c;)
            if (d[--c] != b[--e]) return !1;
        return 0 >= e
    }
});
oa("Array.prototype.find", function(a) {
    return a ? a : function(b, c) {
        return la(this, b, c).kj
    }
});
oa("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
        var d = pa(this, b, "startsWith");
        b += "";
        var e = d.length,
            f = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var g = 0; g < f && c < e;)
            if (d[c++] != b[g++]) return !1;
        return g >= f
    }
});
oa("String.prototype.repeat", function(a) {
    return a ? a : function(b) {
        var c = pa(this, null, "repeat");
        if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
        b |= 0;
        for (var d = ""; b;)
            if (b & 1 && (d += c), b >>>= 1) c += c;
        return d
    }
});
var qa = function() {
        qa = function() {};
        na.Symbol || (na.Symbol = ra)
    },
    sa = function(a, b) {
        this.a = a;
        ma(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    };
sa.prototype.toString = function() {
    return this.a
};
var ra = function() {
        function a(c) {
            if (this instanceof a) throw new TypeError("Symbol is not a constructor");
            return new sa("jscomp_symbol_" + (c || "") + "_" + b++, c)
        }
        var b = 0;
        return a
    }(),
    ua = function() {
        qa();
        var a = na.Symbol.iterator;
        a || (a = na.Symbol.iterator = na.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && ma(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ta(aa(this))
            }
        });
        ua = function() {}
    },
    ta = function(a) {
        ua();
        a = {
            next: a
        };
        a[na.Symbol.iterator] = function() {
            return this
        };
        return a
    },
    va = function(a, b) {
        ua();
        a instanceof String && (a += "");
        var c = 0,
            d = {
                next: function() {
                    if (c < a.length) {
                        var e = c++;
                        return {
                            value: b(e, a[e]),
                            done: !1
                        }
                    }
                    d.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    };
                    return d.next()
                }
            };
        d[Symbol.iterator] = function() {
            return d
        };
        return d
    };
oa("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return va(this, function(b) {
            return b
        })
    }
});
oa("Array.prototype.values", function(a) {
    return a ? a : function() {
        return va(this, function(b, c) {
            return c
        })
    }
});
oa("Promise", function(a) {
    function b() {
        this.a = null
    }

    function c(g) {
        return g instanceof e ? g : new e(function(h) {
            h(g)
        })
    }
    if (a) return a;
    b.prototype.b = function(g) {
        if (null == this.a) {
            this.a = [];
            var h = this;
            this.c(function() {
                h.h()
            })
        }
        this.a.push(g)
    };
    var d = na.setTimeout;
    b.prototype.c = function(g) {
        d(g, 0)
    };
    b.prototype.h = function() {
        for (; this.a && this.a.length;) {
            var g = this.a;
            this.a = [];
            for (var h = 0; h < g.length; ++h) {
                var l = g[h];
                g[h] = null;
                try {
                    l()
                } catch (m) {
                    this.g(m)
                }
            }
        }
        this.a = null
    };
    b.prototype.g = function(g) {
        this.c(function() {
            throw g;
        })
    };
    var e = function(g) {
        this.b = 0;
        this.c = void 0;
        this.a = [];
        var h = this.g();
        try {
            g(h.resolve, h.reject)
        } catch (l) {
            h.reject(l)
        }
    };
    e.prototype.g = function() {
        function g(m) {
            return function(q) {
                l || (l = !0, m.call(h, q))
            }
        }
        var h = this,
            l = !1;
        return {
            resolve: g(this.C),
            reject: g(this.h)
        }
    };
    e.prototype.C = function(g) {
        if (g === this) this.h(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof e) this.L(g);
        else {
            a: switch (typeof g) {
                case "object":
                    var h = null != g;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
            }
            h ? this.G(g) : this.o(g)
        }
    };
    e.prototype.G = function(g) {
        var h = void 0;
        try {
            h = g.then
        } catch (l) {
            this.h(l);
            return
        }
        "function" == typeof h ? this.K(h, g) : this.o(g)
    };
    e.prototype.h = function(g) {
        this.m(2, g)
    };
    e.prototype.o = function(g) {
        this.m(1, g)
    };
    e.prototype.m = function(g, h) {
        if (0 != this.b) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.b);
        this.b = g;
        this.c = h;
        this.w()
    };
    e.prototype.w = function() {
        if (null != this.a) {
            for (var g = 0; g < this.a.length; ++g) f.b(this.a[g]);
            this.a = null
        }
    };
    var f = new b;
    e.prototype.L = function(g) {
        var h =
            this.g();
        g.Ue(h.resolve, h.reject)
    };
    e.prototype.K = function(g, h) {
        var l = this.g();
        try {
            g.call(h, l.resolve, l.reject)
        } catch (m) {
            l.reject(m)
        }
    };
    e.prototype.then = function(g, h) {
        function l(u, A) {
            return "function" == typeof u ? function(Q) {
                try {
                    m(u(Q))
                } catch (M) {
                    q(M)
                }
            } : A
        }
        var m, q, r = new e(function(u, A) {
            m = u;
            q = A
        });
        this.Ue(l(g, m), l(h, q));
        return r
    };
    e.prototype.catch = function(g) {
        return this.then(void 0, g)
    };
    e.prototype.Ue = function(g, h) {
        function l() {
            switch (m.b) {
                case 1:
                    g(m.c);
                    break;
                case 2:
                    h(m.c);
                    break;
                default:
                    throw Error("Unexpected state: " +
                        m.b);
            }
        }
        var m = this;
        null == this.a ? f.b(l) : this.a.push(l)
    };
    e.resolve = c;
    e.reject = function(g) {
        return new e(function(h, l) {
            l(g)
        })
    };
    e.race = function(g) {
        return new e(function(h, l) {
            for (var m = ba(g), q = m.next(); !q.done; q = m.next()) c(q.value).Ue(h, l)
        })
    };
    e.all = function(g) {
        var h = ba(g),
            l = h.next();
        return l.done ? c([]) : new e(function(m, q) {
            function r(Q) {
                return function(M) {
                    u[Q] = M;
                    A--;
                    0 == A && m(u)
                }
            }
            var u = [],
                A = 0;
            do u.push(void 0), A++, c(l.value).Ue(r(u.length - 1), q), l = h.next(); while (!l.done)
        })
    };
    return e
});
oa("Object.is", function(a) {
    return a ? a : function(b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    }
});
oa("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
oa("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        return -1 !== pa(this, b, "includes").indexOf(b, c || 0)
    }
});
oa("Array.from", function(a) {
    return a ? a : function(b, c, d) {
        c = null != c ? c : function(h) {
            return h
        };
        var e = [],
            f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
        if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
        } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
        return e
    }
});
var wa = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
oa("WeakMap", function(a) {
    function b() {}

    function c(h) {
        if (!wa(h, e)) {
            var l = new b;
            ma(h, e, {
                value: l
            })
        }
    }

    function d(h) {
        var l = Object[h];
        l && (Object[h] = function(m) {
            if (m instanceof b) return m;
            c(m);
            return l(m)
        })
    }
    if (function() {
            if (!a || !Object.seal) return !1;
            try {
                var h = Object.seal({}),
                    l = Object.seal({}),
                    m = new a([
                        [h, 2],
                        [l, 3]
                    ]);
                if (2 != m.get(h) || 3 != m.get(l)) return !1;
                m.delete(h);
                m.set(l, 4);
                return !m.has(h) && 4 == m.get(l)
            } catch (q) {
                return !1
            }
        }()) return a;
    var e = "$jscomp_hidden_" + Math.random();
    d("freeze");
    d("preventExtensions");
    d("seal");
    var f = 0,
        g = function(h) {
            this.ra = (f += Math.random() + 1).toString();
            if (h) {
                h = ba(h);
                for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        };
    g.prototype.set = function(h, l) {
        c(h);
        if (!wa(h, e)) throw Error("WeakMap key fail: " + h);
        h[e][this.ra] = l;
        return this
    };
    g.prototype.get = function(h) {
        return wa(h, e) ? h[e][this.ra] : void 0
    };
    g.prototype.has = function(h) {
        return wa(h, e) && wa(h[e], this.ra)
    };
    g.prototype.delete = function(h) {
        return wa(h, e) && wa(h[e], this.ra) ? delete h[e][this.ra] : !1
    };
    return g
});
oa("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) wa(b, d) && c.push(b[d]);
        return c
    }
});
oa("Map", function(a) {
    if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var h = Object.seal({
                        x: 4
                    }),
                    l = new a(ba([
                        [h, "s"]
                    ]));
                if ("s" != l.get(h) || 1 != l.size || l.get({
                        x: 4
                    }) || l.set({
                        x: 4
                    }, "t") != l || 2 != l.size) return !1;
                var m = l.entries(),
                    q = m.next();
                if (q.done || q.value[0] != h || "s" != q.value[1]) return !1;
                q = m.next();
                return q.done || 4 != q.value[0].x || "t" != q.value[1] || !m.next().done ? !1 : !0
            } catch (r) {
                return !1
            }
        }()) return a;
    ua();
    var b = new WeakMap,
        c = function(h) {
            this.b = {};
            this.a =
                f();
            this.size = 0;
            if (h) {
                h = ba(h);
                for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        };
    c.prototype.set = function(h, l) {
        h = 0 === h ? 0 : h;
        var m = d(this, h);
        m.list || (m.list = this.b[m.id] = []);
        m.qb ? m.qb.value = l : (m.qb = {
            next: this.a,
            Gc: this.a.Gc,
            head: this.a,
            key: h,
            value: l
        }, m.list.push(m.qb), this.a.Gc.next = m.qb, this.a.Gc = m.qb, this.size++);
        return this
    };
    c.prototype.delete = function(h) {
        h = d(this, h);
        return h.qb && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.b[h.id], h.qb.Gc.next = h.qb.next, h.qb.next.Gc = h.qb.Gc,
            h.qb.head = null, this.size--, !0) : !1
    };
    c.prototype.clear = function() {
        this.b = {};
        this.a = this.a.Gc = f();
        this.size = 0
    };
    c.prototype.has = function(h) {
        return !!d(this, h).qb
    };
    c.prototype.get = function(h) {
        return (h = d(this, h).qb) && h.value
    };
    c.prototype.entries = function() {
        return e(this, function(h) {
            return [h.key, h.value]
        })
    };
    c.prototype.keys = function() {
        return e(this, function(h) {
            return h.key
        })
    };
    c.prototype.values = function() {
        return e(this, function(h) {
            return h.value
        })
    };
    c.prototype.forEach = function(h, l) {
        for (var m = this.entries(),
                q; !(q = m.next()).done;) q = q.value, h.call(l, q[1], q[0], this)
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function(h, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g, b.set(l, m)) : m = "p_" + l;
            var q = h.b[m];
            if (q && wa(h.b, m))
                for (h = 0; h < q.length; h++) {
                    var r = q[h];
                    if (l !== l && r.key !== r.key || l === r.key) return {
                        id: m,
                        list: q,
                        index: h,
                        qb: r
                    }
                }
            return {
                id: m,
                list: q,
                index: -1,
                qb: void 0
            }
        },
        e = function(h, l) {
            var m = h.a;
            return ta(function() {
                if (m) {
                    for (; m.head != h.a;) m = m.Gc;
                    for (; m.next != m.head;) return m =
                        m.next, {
                            done: !1,
                            value: l(m)
                        };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        },
        f = function() {
            var h = {};
            return h.Gc = h.next = h.head = h
        },
        g = 0;
    return c
});
var xa = xa || {},
    n = this || self,
    p = function(a) {
        return void 0 !== a
    },
    t = function(a) {
        return "string" == typeof a
    },
    ya = function(a) {
        return "number" == typeof a
    },
    za = function(a, b) {
        a = a.split(".");
        var c = n;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) !a.length && p(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
    },
    Ca = function(a) {
        if (a && a != n) return Aa(a.document);
        null === Ba && (Ba = Aa(n.document));
        return Ba
    },
    Da = /^[\w+/_-]+[=]{0,2}$/,
    Ba = null,
    Aa = function(a) {
        return (a =
            a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Da.test(a) ? a : ""
    },
    Ea = function(a, b) {
        a = a.split(".");
        b = b || n;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    },
    Fa = function() {},
    Ga = function(a) {
        a.Ig = void 0;
        a.M = function() {
            return a.Ig ? a.Ig : a.Ig = new a
        }
    },
    Ha = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    },
    Ja = function(a) {
        return "array" == Ha(a)
    },
    Ka = function(a) {
        var b = Ha(a);
        return "array" == b || "object" ==
            b && "number" == typeof a.length
    },
    La = function(a) {
        return "function" == Ha(a)
    },
    Ma = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    },
    Qa = function(a) {
        return a[Na] || (a[Na] = ++Pa)
    },
    Na = "closure_uid_" + (1E9 * Math.random() >>> 0),
    Pa = 0,
    Ra = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    Sa = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b,
                    e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    },
    v = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? v = Ra : v = Sa;
        return v.apply(null, arguments)
    },
    Ta = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    },
    Ua = Date.now || function() {
        return +new Date
    },
    w = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.D = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.yq = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };
var Va = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Va);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
w(Va, Error);
Va.prototype.name = "CustomError";
var Wa;
var Xa = function(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    Va.call(this, c + a[d])
};
w(Xa, Va);
Xa.prototype.name = "AssertionError";
var Ya = function(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new Xa("" + e, f || []);
    },
    x = function(a, b, c) {
        a || Ya("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    Za = function(a, b) {
        throw new Xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
    $a = function(a, b, c) {
        ya(a) || Ya("Expected number but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    ab = function(a, b, c) {
        t(a) || Ya("Expected string but got %s: %s.", [Ha(a),
            a
        ], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    bb = function(a, b, c) {
        La(a) || Ya("Expected function but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    cb = function(a, b, c) {
        Ma(a) || Ya("Expected object but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    db = function(a, b, c) {
        Ja(a) || Ya("Expected array but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    eb = function(a, b, c) {
        "boolean" == typeof a || Ya("Expected boolean but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    fb = function(a, b, c) {
        Ma(a) && 1 == a.nodeType || Ya("Expected Element but got %s: %s.", [Ha(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    hb = function(a, b, c, d) {
        a instanceof b || Ya("Expected instanceof %s but got %s.", [gb(b), gb(a)], c, Array.prototype.slice.call(arguments, 3));
        return a
    },
    gb = function(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name ||
            Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
var ib = function(a) {
        return a[a.length - 1]
    },
    jb = Array.prototype.indexOf ? function(a, b) {
        x(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (t(a)) return t(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    y = Array.prototype.forEach ? function(a, b, c) {
        x(null != a.length);
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    kb = Array.prototype.filter ? function(a,
        b) {
        x(null != a.length);
        return Array.prototype.filter.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = t(a) ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    },
    lb = Array.prototype.map ? function(a, b, c) {
        x(null != a.length);
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = t(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    },
    mb = Array.prototype.reduce ? function(a, b, c) {
        x(null != a.length);
        return Array.prototype.reduce.call(a,
            b, c)
    } : function(a, b, c) {
        var d = c;
        y(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    },
    nb = Array.prototype.some ? function(a, b) {
        x(null != a.length);
        return Array.prototype.some.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    },
    ob = Array.prototype.every ? function(a, b) {
        x(null != a.length);
        return Array.prototype.every.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0,
                    d[e], e, a)) return !1;
        return !0
    },
    pb = function(a, b) {
        var c = 0;
        y(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    },
    qb = function(a, b) {
        a: {
            for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
    },
    rb = function(a, b) {
        a: {
            for (var c = t(a) ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
    },
    sb = function(a, b) {
        return 0 <= jb(a, b)
    },
    tb = function(a, b) {
        sb(a,
            b) || a.push(b)
    },
    vb = function(a, b) {
        b = jb(a, b);
        var c;
        (c = 0 <= b) && ub(a, b);
        return c
    },
    ub = function(a, b) {
        x(null != a.length);
        Array.prototype.splice.call(a, b, 1)
    },
    wb = function(a) {
        return Array.prototype.concat.apply([], arguments)
    },
    xb = function(a) {
        return Array.prototype.concat.apply([], arguments)
    },
    yb = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    },
    zb = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (Ka(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e +
                    f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    },
    Bb = function(a, b, c, d) {
        x(null != a.length);
        Array.prototype.splice.apply(a, Ab(arguments, 1))
    },
    Ab = function(a, b, c) {
        x(null != a.length);
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    },
    Cb = function(a, b) {
        return wb.apply([], lb(a, b, void 0))
    };
var Fb = function(a) {
        var b = Db(a);
        b && (!a || !(a instanceof b.Location) && a instanceof b.Element) && Za("Argument is not a Location (or a non-Element mock); got: %s", Eb(a))
    },
    Gb = function(a, b) {
        var c = Db(a);
        c && "undefined" != typeof c[b] && (a && (a instanceof c[b] || !(a instanceof c.Location || a instanceof c.Element)) || Za("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, Eb(a)))
    },
    Eb = function(a) {
        if (Ma(a)) try {
            return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
        } catch (b) {
            return "<object could not be stringified>"
        } else return void 0 ===
            a ? "undefined" : null === a ? "null" : typeof a
    },
    Db = function(a) {
        try {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c || n;
            if (c.Element && c.Location) return c
        } catch (d) {}
        return null
    };
var Jb = function() {
        return null
    },
    Kb = function(a) {
        var b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    },
    Lb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
var Mb = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    },
    Nb = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    },
    Ob = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    },
    Pb = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    },
    Qb = function(a, b) {
        return null !== a && b in a
    },
    Rb = function(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    },
    Tb = function() {
        var a = Sb,
            b;
        for (b in a) return !1;
        return !0
    },
    Ub = function(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' +
            b + '"');
        a[b] = c
    },
    Vb = function(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    },
    Wb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    Xb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Wb.length; f++) c = Wb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    },
    Yb = function(a) {
        var b = arguments.length;
        if (1 == b && Ja(arguments[0])) return Yb.apply(null, arguments[0]);
        if (b % 2) throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    },
    Zb = function(a) {
        var b = arguments.length;
        if (1 == b && Ja(arguments[0])) return Zb.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };
var $b = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
var cc = function(a, b) {
    this.a = a === ac && b || "";
    this.b = bc
};
cc.prototype.sc = !0;
cc.prototype.tb = function() {
    return this.a
};
cc.prototype.toString = function() {
    return "Const{" + this.a + "}"
};
var dc = function(a) {
        if (a instanceof cc && a.constructor === cc && a.b === bc) return a.a;
        Za("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    },
    ec = function(a) {
        return new cc(ac, a)
    },
    bc = {},
    ac = {},
    fc = ec("");
var gc = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
    hc = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
    ic = /^http:\/\/.*/,
    jc = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,
    kc = function(a) {
        return jc.test(a)
    },
    lc = /\s+/,
    mc = /[\d\u06f0-\u06f9]/,
    nc = function(a) {
        var b = 0,
            c = 0,
            d = !1;
        a = a.split(lc);
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            hc.test(f) ? (b++, c++) : ic.test(f) ? d = !0 : gc.test(f) ? c++ : mc.test(f) && (d = !0)
        }
        return -1 == (0 == c ? d ? 1 : 0 : .4 < b / c ? -1 : 1)
    };
var pc = function() {
    this.a = "";
    this.b = oc
};
k = pc.prototype;
k.sc = !0;
k.tb = function() {
    return this.a.toString()
};
k.Gg = !0;
k.Pc = function() {
    return 1
};
k.toString = function() {
    return "TrustedResourceUrl{" + this.a + "}"
};
var rc = function(a) {
        return qc(a).toString()
    },
    qc = function(a) {
        if (a instanceof pc && a.constructor === pc && a.b === oc) return a.a;
        Za("expected object of type TrustedResourceUrl, got '" + a + "' of type " + Ha(a));
        return "type_error:TrustedResourceUrl"
    },
    sc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    oc = {},
    tc = function(a) {
        var b = new pc;
        b.a = a;
        return b
    },
    uc = function(a, b, c) {
        if (null == c) return b;
        if (t(c)) return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
            var e = c[d];
            e = Ja(e) ? e : [e];
            for (var f = 0; f < e.length; f++) {
                var g = e[f];
                null != g && (b || (b = a),
                    b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
            }
        }
        return b
    };
var vc = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    },
    wc = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    },
    xc = function(a) {
        return /^[\s\xa0]*$/.test(a)
    },
    yc = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    },
    zc = function(a, b) {
        a = String(a).toLowerCase();
        b = String(b).toLowerCase();
        return a < b ? -1 : a == b ? 0 : 1
    },
    Ac = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, "<br>")
    },
    Ic = function(a, b) {
        if (b) a = a.replace(Bc, "&amp;").replace(Cc, "&lt;").replace(Dc,
            "&gt;").replace(Ec, "&quot;").replace(Fc, "&#39;").replace(Gc, "&#0;");
        else {
            if (!Hc.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Bc, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Cc, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Dc, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ec, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Fc, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Gc, "&#0;"))
        }
        return a
    },
    Bc = /&/g,
    Cc = /</g,
    Dc = />/g,
    Ec = /"/g,
    Fc = /'/g,
    Gc = /\x00/g,
    Hc = /[\x00&<>"']/,
    Jc = function(a, b) {
        return -1 != a.indexOf(b)
    },
    Lc = function(a,
        b) {
        var c = 0;
        a = yc(String(a)).split(".");
        b = yc(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Kc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Kc(0 == f[2].length, 0 == g[2].length) || Kc(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    },
    Kc = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
var Nc = function() {
    this.a = "";
    this.b = Mc
};
k = Nc.prototype;
k.sc = !0;
k.tb = function() {
    return this.a.toString()
};
k.Gg = !0;
k.Pc = function() {
    return 1
};
k.toString = function() {
    return "SafeUrl{" + this.a + "}"
};
var Pc = function(a) {
        return Oc(a).toString()
    },
    Oc = function(a) {
        if (a instanceof Nc && a.constructor === Nc && a.b === Mc) return a.a;
        Za("expected object of type SafeUrl, got '" + a + "' of type " + Ha(a));
        return "type_error:SafeUrl"
    },
    Qc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,
    Rc = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,
    Sc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Uc = function(a) {
        if (a instanceof Nc) return a;
        a = "object" == typeof a && a.sc ? a.tb() : String(a);
        Sc.test(a) || (a = "about:invalid#zClosurez");
        return Tc(a)
    },
    Vc = function(a, b) {
        if (a instanceof Nc) return a;
        a = "object" == typeof a && a.sc ? a.tb() : String(a);
        if (b && /^data:/i.test(a)) {
            b = a.replace(/(%0A|%0D)/g, "");
            var c = b.match(Rc);
            c = c && Qc.test(c[1]);
            b = Tc(c ? b : "about:invalid#zClosurez");
            if (b.tb() == a) return b
        }
        x(Sc.test(a), "%s does not match the safe URL pattern", a) || (a = "about:invalid#zClosurez");
        return Tc(a)
    },
    Mc = {},
    Tc = function(a) {
        var b =
            new Nc;
        b.a = a;
        return b
    };
Tc("about:blank");
var Xc = function() {
    this.a = "";
    this.b = Wc
};
Xc.prototype.sc = !0;
var Wc = {};
Xc.prototype.tb = function() {
    return this.a
};
Xc.prototype.toString = function() {
    return "SafeStyle{" + this.a + "}"
};
var Yc = function(a) {
        if (a instanceof Xc && a.constructor === Xc && a.b === Wc) return a.a;
        Za("expected object of type SafeStyle, got '" + a + "' of type " + Ha(a));
        return "type_error:SafeStyle"
    },
    Zc = function(a) {
        var b = new Xc;
        b.a = a;
        return b
    },
    $c = Zc(""),
    bd = function(a) {
        var b = "",
            c;
        for (c in a) {
            if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
            var d = a[c];
            null != d && (d = Ja(d) ? lb(d, ad).join(" ") : ad(d), b += c + ":" + d + ";")
        }
        return b ? Zc(b) : $c
    },
    ad = function(a) {
        if (a instanceof Nc) return 'url("' + Pc(a).replace(/</g,
            "%3c").replace(/[\\"]/g, "\\$&") + '")';
        a = a instanceof cc ? dc(a) : cd(String(a));
        if (/[{;}]/.test(a)) throw new Xa("Value does not allow [{;}], got: %s.", [a]);
        return a
    },
    cd = function(a) {
        var b = a.replace(dd, "$1").replace(dd, "$1").replace(ed, "url");
        if (fd.test(b)) {
            if (gd.test(a)) return Za("String value disallows comments, got: " + a), "zClosurez";
            for (var c = b = !0, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                "'" == e && c ? b = !b : '"' == e && b && (c = !c)
            }
            if (!b || !c) return Za("String value requires balanced quotes, got: " + a), "zClosurez";
            if (!hd(a)) return Za("String value requires balanced square brackets and one identifier per pair of brackets, got: " +
                a), "zClosurez"
        } else return Za("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: " + a), "zClosurez";
        return id(a)
    },
    hd = function(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    },
    fd = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
    ed = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    dd = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
    gd = /\/\*/,
    id = function(a) {
        return a.replace(ed, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, l) {
                f = h;
                return l
            });
            b = Uc(d).tb();
            return c + f + b + f + e
        })
    };
var kd = function() {
    this.a = "";
    this.b = jd
};
kd.prototype.sc = !0;
var jd = {},
    md = function(a, b) {
        if (Jc(a, "<")) throw Error("Selector does not allow '<', got: " + a);
        var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
        a: {
            for (var d = {
                    "(": ")",
                    "[": "]"
                }, e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                if (d[g]) e.push(d[g]);
                else if (Rb(d, g) && e.pop() != g) {
                    c = !1;
                    break a
                }
            }
            c = 0 == e.length
        }
        if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
        b instanceof Xc || (b = bd(b));
        a = a + "{" + Yc(b).replace(/</g, "\\3C ") + "}";
        return ld(a)
    },
    od = function(a) {
        var b = "",
            c = function(d) {
                Ja(d) ? y(d, c) : b += nd(d)
            };
        y(arguments, c);
        return ld(b)
    };
kd.prototype.tb = function() {
    return this.a
};
kd.prototype.toString = function() {
    return "SafeStyleSheet{" + this.a + "}"
};
var nd = function(a) {
        if (a instanceof kd && a.constructor === kd && a.b === jd) return a.a;
        Za("expected object of type SafeStyleSheet, got '" + a + "' of type " + Ha(a));
        return "type_error:SafeStyleSheet"
    },
    ld = function(a) {
        var b = new kd;
        b.a = a;
        return b
    },
    pd = ld("");
var qd;
a: {
    var rd = n.navigator;
    if (rd) {
        var sd = rd.userAgent;
        if (sd) {
            qd = sd;
            break a
        }
    }
    qd = ""
}
var z = function(a) {
        return Jc(qd, a)
    },
    td = function(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
var ud = function() {
        return z("Trident") || z("MSIE")
    },
    vd = function() {
        return z("Firefox") || z("FxiOS")
    },
    xd = function() {
        return z("Safari") && !(wd() || z("Coast") || z("Opera") || z("Edge") || z("Edg/") || z("OPR") || vd() || z("Silk") || z("Android"))
    },
    wd = function() {
        return (z("Chrome") || z("CriOS")) && !z("Edge")
    },
    yd = function() {
        function a(e) {
            e = qb(e, d);
            return c[e] || ""
        }
        var b = qd;
        if (!ud()) {
            b = td(b);
            var c = {};
            y(b, function(e) {
                c[e[0]] = e[1]
            });
            var d = Ta(Qb, c);
            z("Opera") ? a(["Version", "Opera"]) : z("Edge") ? a(["Edge"]) : z("Edg/") ? a(["Edg"]) : wd() &&
                a(["Chrome", "CriOS"])
        }
    };
var Ad = function() {
    this.a = "";
    this.c = zd;
    this.b = null
};
k = Ad.prototype;
k.Gg = !0;
k.Pc = function() {
    return this.b
};
k.sc = !0;
k.tb = function() {
    return this.a.toString()
};
k.toString = function() {
    return "SafeHtml{" + this.a + "}"
};
var Bd = function(a) {
        if (a instanceof Ad && a.constructor === Ad && a.c === zd) return a.a;
        Za("expected object of type SafeHtml, got '" + a + "' of type " + Ha(a));
        return "type_error:SafeHtml"
    },
    Dd = function(a) {
        if (a instanceof Ad) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.Gg && (c = a.Pc());
        return Cd(Ic(b && a.sc ? a.tb() : String(a)), c)
    },
    Ed = function(a) {
        if (a instanceof Ad) return a;
        a = Dd(a);
        return Cd(Ac(Bd(a).toString()), a.Pc())
    },
    Fd = /^[a-zA-Z0-9-]+$/,
    Gd = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    Hd = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    },
    Jd = function(a, b, c) {
        var d = String(a);
        if (!Fd.test(d)) throw Error("Invalid tag name <" + d + ">.");
        if (d.toUpperCase() in Hd) throw Error("Tag name <" + d + "> is not allowed for SafeHtml.");
        return Id(String(a), b, c)
    },
    Ld = function(a) {
        var b = Dd(Kd),
            c = b.Pc(),
            d = [],
            e = function(f) {
                Ja(f) ? y(f, e) : (f = Dd(f), d.push(Bd(f).toString()), f = f.Pc(), 0 == c ? c = f : 0 != f && c != f && (c = null))
            };
        y(a, e);
        return Cd(d.join(Bd(b).toString()),
            c)
    },
    Md = function(a) {
        return Ld(Array.prototype.slice.call(arguments))
    },
    zd = {},
    Cd = function(a, b) {
        return Nd(a, b)
    },
    Nd = function(a, b) {
        var c = new Ad;
        c.a = a;
        c.b = b;
        return c
    },
    Id = function(a, b, c) {
        var d = null,
            e = "";
        if (b)
            for (l in b) {
                if (!Fd.test(l)) throw Error('Invalid attribute name "' + l + '".');
                var f = b[l];
                if (null != f) {
                    var g = a;
                    var h = l;
                    if (f instanceof cc) f = dc(f);
                    else if ("style" == h.toLowerCase()) {
                        if (!Ma(f)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                        f instanceof Xc || (f = bd(f));
                        f = Yc(f)
                    } else {
                        if (/^on/i.test(h)) throw Error('Attribute "' + h + '" requires goog.string.Const value, "' + f + '" given.');
                        if (h.toLowerCase() in Gd)
                            if (f instanceof pc) f = rc(f);
                            else if (f instanceof Nc) f = Pc(f);
                        else if (t(f)) f = Uc(f).tb();
                        else throw Error('Attribute "' + h + '" on tag "' + g + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + f + '" given.');
                    }
                    f.sc && (f = f.tb());
                    x(t(f) || ya(f), "String or number value expected, got " + typeof f + " with value: " + f);
                    h = h + '="' + Ic(String(f)) +
                        '"';
                    e += " " + h
                }
            }
        var l = "<" + a + e;
        null != c ? Ja(c) || (c = [c]) : c = [];
        !0 === $b[a.toLowerCase()] ? (x(!c.length, "Void tag <" + a + "> does not allow content."), l += ">") : (d = Md(c), l += ">" + Bd(d).toString() + "</" + a + ">", d = d.Pc());
        (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
        return Nd(l, d)
    };
Nd("<!DOCTYPE html>", 0);
var Kd = Nd("", 0),
    Od = Nd("<br>", 0);
var Pd = function(a, b, c) {
        ab(dc(a), "must provide justification");
        x(!xc(dc(a)), "must provide non-empty justification");
        return Nd(b, c || null)
    },
    Qd = function(a) {
        var b = ec("Output of CSS sanitizer");
        ab(dc(b), "must provide justification");
        x(!xc(dc(b)), "must provide non-empty justification");
        return Zc(a)
    };
var Rd = {
        MATH: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    },
    Sd = Lb(function() {
        if ("undefined" === typeof document) return !1;
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        if (!a.firstChild) return !1;
        b = a.firstChild.firstChild;
        a.innerHTML = Bd(Kd);
        return !b.parentElement
    }),
    Td = function(a, b) {
        if (Sd())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Bd(b)
    },
    Ud = function(a, b) {
        if (Rd[a.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " +
            a.tagName + ".");
        Td(a, b)
    },
    Vd = function(a, b) {
        Gb(a, "HTMLAnchorElement");
        b = b instanceof Nc ? b : Vc(b);
        a.href = Oc(b)
    },
    Wd = function(a, b) {
        Gb(a, "HTMLIFrameElement");
        a.src = rc(b)
    },
    Xd = function(a, b) {
        Gb(a, "HTMLScriptElement");
        a.src = qc(b);
        (b = Ca()) && a.setAttribute("nonce", b)
    },
    Yd = function(a, b) {
        Fb(a);
        b = b instanceof Nc ? b : Vc(b);
        a.href = Oc(b)
    },
    Zd = function(a, b) {
        Fb(a);
        b = b instanceof Nc ? b : Vc(b);
        a.replace(Oc(b))
    },
    $d = function(a) {
        a = a instanceof Nc ? a : Vc(a);
        n.open(Oc(a), "", void 0, void 0)
    };
var ae = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, "\n")
    },
    be = function(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    },
    ce = function(a) {
        return encodeURIComponent(String(a))
    },
    de = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    },
    ee = function(a) {
        return a = Ic(a, void 0)
    },
    he = function(a) {
        return Jc(a, "&") ? "document" in n ? fe(a) : ge(a) : a
    },
    fe = function(a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var c = n.document.createElement("div");
        return a.replace(ie, function(d,
            e) {
            var f = b[d];
            if (f) return f;
            "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (f = String.fromCharCode(e)));
            f || (Ud(c, Pd(ec("Single HTML entity."), d + " ")), f = c.firstChild.nodeValue.slice(0, -1));
            return b[d] = f
        })
    },
    ge = function(a) {
        return a.replace(/&([^;]+);/g, function(b, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? b : String.fromCharCode(c)
            }
        })
    },
    ie = /&([^;\s<&]+);?/g,
    je = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
            "\\$1").replace(/\x08/g, "\\x08")
    },
    ke = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    },
    le = function(a) {
        return null == a ? "" : String(a)
    },
    me = function(a) {
        return Array.prototype.join.call(arguments, "")
    },
    ne = function(a) {
        var b = Number(a);
        return 0 == b && xc(a) ? NaN : b
    },
    oe = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    },
    pe = function(a) {
        var b = t(void 0) ? je(void 0) : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])",
            "g"), function(c, d, e) {
            return d + e.toUpperCase()
        })
    };
var qe = function() {
        return z("iPhone") && !z("iPod") && !z("iPad")
    },
    re = function() {
        return qe() || z("iPad") || z("iPod")
    },
    se = function(a) {
        var b = qd,
            c = "";
        z("Windows") ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (b = c.exec(b)) ? b[1] : "0.0") : re() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (b = c.exec(b)) && b[1].replace(/_/g, ".")) : z("Macintosh") ? (c = /Mac OS X ([0-9_.]+)/, c = (b = c.exec(b)) ? b[1].replace(/_/g, ".") : "10") : Jc(qd.toLowerCase(), "kaios") ? (c = /(?:KaiOS)\/(\S+)/i, c = (b = c.exec(b)) && b[1]) : z("Android") ? (c = /Android\s+([^\);]+)(\)|;)/,
            c = (b = c.exec(b)) && b[1]) : z("CrOS") && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, c = (b = c.exec(b)) && b[1]);
        return 0 <= Lc(c || "", a)
    };
var te = function(a) {
    te[" "](a);
    return a
};
te[" "] = Fa;
var ue = function(a, b) {
        try {
            return te(a[b]), !0
        } catch (c) {}
        return !1
    },
    ve = function(a, b, c) {
        return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
    };
var we = z("Opera"),
    B = ud(),
    xe = z("Edge"),
    ye = xe || B,
    ze = z("Gecko") && !(Jc(qd.toLowerCase(), "webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
    Ae = Jc(qd.toLowerCase(), "webkit") && !z("Edge"),
    Be = Ae && z("Mobile"),
    De = z("Macintosh"),
    Ee = z("Windows"),
    Fe = z("Android"),
    Ge = qe(),
    He = z("iPad"),
    Ie = z("iPod"),
    Je = re(),
    Ke = function() {
        var a = n.document;
        return a ? a.documentMode : void 0
    },
    Le;
a: {
    var Me = "",
        Ne = function() {
            var a = qd;
            if (ze) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (xe) return /Edge\/([\d\.]+)/.exec(a);
            if (B) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Ae) return /WebKit\/(\S+)/.exec(a);
            if (we) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
    Ne && (Me = Ne ? Ne[1] : "");
    if (B) {
        var Oe = Ke();
        if (null != Oe && Oe > parseFloat(Me)) {
            Le = String(Oe);
            break a
        }
    }
    Le = Me
}
var Pe = Le,
    Qe = {},
    Re = function(a) {
        return ve(Qe, a, function() {
            return 0 <= Lc(Pe, a)
        })
    },
    Te = function(a) {
        return Number(Se) >= a
    },
    Ue;
Ue = n.document && B ? Ke() : void 0;
var Se = Ue;
var Ve = vd(),
    We = qe() || z("iPod"),
    Xe = z("iPad"),
    Ye = z("Android") && !(wd() || vd() || z("Opera") || z("Silk")),
    Ze = wd(),
    $e = xd() && !re();
var af = null,
    bf = null,
    cf = function(a, b) {
        x(Ka(a), "encodeByteArray takes an array as a parameter");
        if (!af) {
            af = {};
            bf = {};
            for (var c = 0; 65 > c; c++) af[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), bf[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
        }
        b = b ? bf : af;
        c = [];
        for (var d = 0; d < a.length; d += 3) {
            var e = a[d],
                f = d + 1 < a.length,
                g = f ? a[d + 1] : 0,
                h = d + 2 < a.length,
                l = h ? a[d + 2] : 0,
                m = e >> 2;
            e = (e & 3) << 4 | g >> 4;
            g = (g & 15) << 2 | l >> 6;
            l &= 63;
            h || (l = 64, f || (g = 64));
            c.push(b[m], b[e], b[g],
                b[l])
        }
        return c.join("")
    };
var df = function() {},
    ef = "function" == typeof Uint8Array,
    hf = function(a, b, c, d) {
        a.a = null;
        b || (b = []);
        a.w = void 0;
        a.g = -1;
        a.b = b;
        a: {
            var e = a.b.length;
            b = -1;
            if (e && (b = e - 1, e = a.b[b], !(null === e || "object" != typeof e || Ja(e) || ef && e instanceof Uint8Array))) {
                a.h = b - a.g;
                a.c = e;
                break a
            } - 1 < c ? (a.h = Math.max(c, b + 1 - a.g), a.c = null) : a.h = Number.MAX_VALUE
        }
        a.m = {};
        if (d)
            for (c = 0; c < d.length; c++) b = d[c], b < a.h ? (b += a.g, a.b[b] = a.b[b] || ff) : (gf(a), a.c[b] = a.c[b] || ff)
    },
    ff = Object.freeze ? Object.freeze([]) : [],
    gf = function(a) {
        var b = a.h + a.g;
        a.b[b] || (a.c =
            a.b[b] = {})
    },
    jf = function(a, b) {
        if (b < a.h) {
            b += a.g;
            var c = a.b[b];
            return c === ff ? a.b[b] = [] : c
        }
        if (a.c) return c = a.c[b], c === ff ? a.c[b] = [] : c
    },
    kf = function(a, b) {
        a = jf(a, 1);
        return null == a ? b : a
    },
    C = function(a, b, c) {
        hb(a, df);
        b < a.h ? a.b[b + a.g] = c : (gf(a), a.c[b] = c)
    },
    lf = function(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[c]) {
            for (var d = jf(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.a[c] = e
        }
    },
    mf = function(a, b, c) {
        hb(a, df);
        a.a || (a.a = {});
        var d = c ? c.zb() : c;
        a.a[b] = c;
        C(a, b, d)
    },
    nf = function(a, b, c) {
        hb(a, df);
        a.a || (a.a = {});
        c = c || [];
        for (var d = [], e = 0; e <
            c.length; e++) d[e] = c[e].zb();
        a.a[b] = c;
        C(a, b, d)
    },
    of = function(a, b, c) {
        lf(a, c, b);
        var d = a.a[b];
        d || (d = a.a[b] = []);
        c = new c;
        a = jf(a, b);
        d.push(c);
        a.push(c.zb());
        return c
    },
    pf = function(a) {
        if (a.a)
            for (var b in a.a) {
                var c = a.a[b];
                if (Ja(c))
                    for (var d = 0; d < c.length; d++) c[d] && c[d].zb();
                else c && c.zb()
            }
    };
df.prototype.zb = function() {
    pf(this);
    return this.b
};
df.prototype.o = ef ? function() {
    var a = Uint8Array.prototype.toJSON;
    Uint8Array.prototype.toJSON = function() {
        return cf(this)
    };
    try {
        return JSON.stringify(this.b && this.zb(), qf)
    } finally {
        Uint8Array.prototype.toJSON = a
    }
} : function() {
    return JSON.stringify(this.b && this.zb(), qf)
};
var qf = function(a, b) {
    return ya(b) && (isNaN(b) || Infinity === b || -Infinity === b) ? String(b) : b
};
df.prototype.toString = function() {
    pf(this);
    return this.b.toString()
};
var sf = function(a) {
        return new a.constructor(rf(a.zb()))
    },
    rf = function(a) {
        if (Ja(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? rf(x(d)) : d)
            }
            return b
        }
        if (ef && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? rf(x(d)) : d);
        return b
    };
var uf = function(a) {
    hf(this, a, -1, tf)
};
w(uf, df);
var tf = [1, 2, 3, 4];
var vf = function(a) {
    if (!a) return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    a = a.substring(0, a.indexOf("://"));
    if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "app" !== a) throw Error("Invalid URI scheme in origin: " + a);
    c = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e =
            b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
    }
    return a + "://" + b + c
};
var wf = {
    ascii_tlds: "aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig aigo airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blockbuster blog bloomberg blue bm bms bmw bn bnl bnpparibas bo boats boehringer bofa bom bond boo book booking bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars cartier casa case caseih cash casino cat catering catholic cba cbn cbre cbs cc cd ceb center ceo cern cf cfa cfd cg ch chanel channel charity chase chat cheap chintai christmas chrome chrysler church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dodge dog doha domains dot download drive dtv dubai duck dunlop duns dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epson equipment er ericsson erni es esq estate esurance et etisalat eu eurovision eus events everbank exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda honeywell horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in inc industries infiniti info ing ink institute insurance insure int intel international intuit investments io ipiranga iq ir irish is iselect ismaili ist istanbul it itau itv iveco jaguar java jcb jcp je jeep jetzt jewelry jio jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa ladbrokes lamborghini lamer lancaster lancia lancome land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li liaison lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk llc loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck lupin luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu merckmsd metlife mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile mobily moda moe moi mom monash money monster mopar mormon mortgage moscow moto motorcycles mov movie movistar mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nadex nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new newholland news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio piaget pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh rightathome ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scor scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime shriram si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy space sport spot spreadbetting sr srl srt ss st stada staples star starhub statebank statefarm stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney symantec systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel telefonica temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs uconnect ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision vistaprint viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou warman watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xn--11b4c3d xn--1ck2e1b xn--1qqw23a xn--2scrj9c xn--30rr7y xn--3bst00m xn--3ds443g xn--3e0b707e xn--3hcrj9c xn--3oq18vl8pn36a xn--3pxu8k xn--42c2d9a xn--45br5cyl xn--45brj9c xn--45q11c xn--4gbrim xn--54b7fta0cc xn--55qw42g xn--55qx5d xn--5su34j936bgsg xn--5tzm5g xn--6frz82g xn--6qq986b3xl xn--80adxhks xn--80ao21a xn--80aqecdr1a xn--80asehdb xn--80aswg xn--8y0a063a xn--90a3ac xn--90ae xn--90ais xn--9dbq2a xn--9et52u xn--9krt00a xn--b4w605ferd xn--bck1b9a5dre4c xn--c1avg xn--c2br7g xn--cck2b3b xn--cg4bki xn--clchc0ea0b2g2a9gcd xn--czr694b xn--czrs0t xn--czru2d xn--d1acj3b xn--d1alf xn--e1a4c xn--eckvdtc9d xn--efvy88h xn--estv75g xn--fct429k xn--fhbei xn--fiq228c5hs xn--fiq64b xn--fiqs8s xn--fiqz9s xn--fjq720a xn--flw351e xn--fpcrj9c3d xn--fzc2c9e2c xn--fzys8d69uvgm xn--g2xx48c xn--gckr3f0f xn--gecrj9c xn--gk3at1e xn--h2breg3eve xn--h2brj9c xn--h2brj9c8c xn--hxt814e xn--i1b6b1a6a2e xn--imr513n xn--io0a7i xn--j1aef xn--j1amh xn--j6w193g xn--jlq61u9w7b xn--jvr189m xn--kcrx77d1x4a xn--kprw13d xn--kpry57d xn--kpu716f xn--kput3i xn--l1acc xn--lgbbat1ad8j xn--mgb9awbf xn--mgba3a3ejt xn--mgba3a4f16a xn--mgba7c0bbn0a xn--mgbaakc7dvf xn--mgbaam7a8h xn--mgbab2bd xn--mgbah1a3hjkrd xn--mgbai9azgqp6j xn--mgbayh7gpa xn--mgbb9fbpob xn--mgbbh1a xn--mgbbh1a71e xn--mgbc0a9azcg xn--mgbca7dzdo xn--mgberp4a5d4ar xn--mgbgu82a xn--mgbi4ecexp xn--mgbpl2fh xn--mgbt3dhd xn--mgbtx2b xn--mgbx4cd0ab xn--mix891f xn--mk1bu44c xn--mxtq1m xn--ngbc5azd xn--ngbe9e0a xn--ngbrx xn--node xn--nqv7f xn--nqv7fs00ema xn--nyqy26a xn--o3cw4h xn--ogbpf8fl xn--otu796d xn--p1acf xn--p1ai xn--pbt977c xn--pgbs0dh xn--pssy2u xn--q9jyb4c xn--qcka1pmc xn--qxam xn--rhqv96g xn--rovu88b xn--rvc1e0am3e xn--s9brj9c xn--ses554g xn--t60b56a xn--tckwe xn--tiq49xqyj xn--unup4y xn--vermgensberater-ctb xn--vermgensberatung-pwb xn--vhquv xn--vuq861b xn--w4r85el8fhu5dnra xn--w4rs40l xn--wgbh1c xn--wgbl6a xn--xhq521b xn--xkc2al3hye2a xn--xkc2dl3a5ee0h xn--y9a3aq xn--yfro4i67o xn--ygbi2ammx xn--zfr164b xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zm zone zuerich zw".split(" "),
    unicode_tlds: "\u0915\u0949\u092e \u30bb\u30fc\u30eb \u4f5b\u5c71 \u0cad\u0cbe\u0cb0\u0ca4 \u6148\u5584 \u96c6\u56e2 \u5728\u7ebf \ud55c\uad6d \u0b2d\u0b3e\u0b30\u0b24 \u5927\u4f17\u6c7d\u8f66 \u70b9\u770b \u0e04\u0e2d\u0e21 \u09ad\u09be\u09f0\u09a4 \u09ad\u09be\u09b0\u09a4 \u516b\u5366 \u0645\u0648\u0642\u0639 \u09ac\u09be\u0982\u09b2\u09be \u516c\u76ca \u516c\u53f8 \u9999\u683c\u91cc\u62c9 \u7f51\u7ad9 \u79fb\u52a8 \u6211\u7231\u4f60 \u043c\u043e\u0441\u043a\u0432\u0430 \u049b\u0430\u0437 \u043a\u0430\u0442\u043e\u043b\u0438\u043a \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0430\u0439\u0442 \u8054\u901a \u0441\u0440\u0431 \u0431\u0433 \u0431\u0435\u043b \u05e7\u05d5\u05dd \u65f6\u5c1a \u5fae\u535a \u6de1\u9a6c\u9521 \u30d5\u30a1\u30c3\u30b7\u30e7\u30f3 \u043e\u0440\u0433 \u0928\u0947\u091f \u30b9\u30c8\u30a2 \uc0bc\uc131 \u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd \u5546\u6807 \u5546\u5e97 \u5546\u57ce \u0434\u0435\u0442\u0438 \u043c\u043a\u0434 \u0435\u044e \u30dd\u30a4\u30f3\u30c8 \u65b0\u95fb \u5de5\u884c \u5bb6\u96fb \u0643\u0648\u0645 \u4e2d\u6587\u7f51 \u4e2d\u4fe1 \u4e2d\u56fd \u4e2d\u570b \u5a31\u4e50 \u8c37\u6b4c \u0c2d\u0c3e\u0c30\u0c24\u0c4d \u0dbd\u0d82\u0d9a\u0dcf \u96fb\u8a0a\u76c8\u79d1 \u8d2d\u7269 \u30af\u30e9\u30a6\u30c9 \u0aad\u0abe\u0ab0\u0aa4 \u901a\u8ca9 \u092d\u093e\u0930\u0924\u092e\u094d \u092d\u093e\u0930\u0924 \u092d\u093e\u0930\u094b\u0924 \u7f51\u5e97 \u0938\u0902\u0917\u0920\u0928 \u9910\u5385 \u7f51\u7edc \u043a\u043e\u043c \u0443\u043a\u0440 \u9999\u6e2f \u8bfa\u57fa\u4e9a \u98df\u54c1 \u98de\u5229\u6d66 \u53f0\u6e7e \u53f0\u7063 \u624b\u8868 \u624b\u673a \u043c\u043e\u043d \u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u0639\u0645\u0627\u0646 \u0627\u0631\u0627\u0645\u0643\u0648 \u0627\u06cc\u0631\u0627\u0646 \u0627\u0644\u0639\u0644\u064a\u0627\u0646 \u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0627\u0645\u0627\u0631\u0627\u062a \u0628\u0627\u0632\u0627\u0631 \u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627 \u067e\u0627\u06a9\u0633\u062a\u0627\u0646 \u0627\u0644\u0627\u0631\u062f\u0646 \u0645\u0648\u0628\u0627\u064a\u0644\u064a \u0628\u0627\u0631\u062a \u0628\u06be\u0627\u0631\u062a \u0627\u0644\u0645\u063a\u0631\u0628 \u0627\u0628\u0648\u0638\u0628\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0680\u0627\u0631\u062a \u0643\u0627\u062b\u0648\u0644\u064a\u0643 \u0633\u0648\u062f\u0627\u0646 \u0647\u0645\u0631\u0627\u0647 \u0639\u0631\u0627\u0642 \u0645\u0644\u064a\u0633\u064a\u0627 \u6fb3\u9580 \ub2f7\ucef4 \u653f\u5e9c \u0634\u0628\u0643\u0629 \u0628\u064a\u062a\u0643 \u0639\u0631\u0628 \u10d2\u10d4 \u673a\u6784 \u7ec4\u7ec7\u673a\u6784 \u5065\u5eb7 \u0e44\u0e17\u0e22 \u0633\u0648\u0631\u064a\u0629 \u62db\u8058 \u0440\u0443\u0441 \u0440\u0444 \u73e0\u5b9d \u062a\u0648\u0646\u0633 \u5927\u62ff \u307f\u3093\u306a \u30b0\u30fc\u30b0\u30eb \u03b5\u03bb \u4e16\u754c \u66f8\u7c4d \u0d2d\u0d3e\u0d30\u0d24\u0d02 \u0a2d\u0a3e\u0a30\u0a24 \u7f51\u5740 \ub2f7\ub137 \u30b3\u30e0 \u5929\u4e3b\u6559 \u6e38\u620f verm\u00f6gensberater verm\u00f6gensberatung \u4f01\u4e1a \u4fe1\u606f \u5609\u91cc\u5927\u9152\u5e97 \u5609\u91cc \u0645\u0635\u0631 \u0642\u0637\u0631 \u5e7f\u4e1c \u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8 \u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe \u0570\u0561\u0575 \u65b0\u52a0\u5761 \u0641\u0644\u0633\u0637\u064a\u0646 \u653f\u52a1".split(" ")
};
var xf = !B || Te(9),
    yf = !ze && !B || B && Te(9) || ze && Re("1.9.1"),
    zf = B && !Re("9"),
    Af = B || we || Ae,
    Bf = B && !Te(9);
var Cf = function(a, b) {
    return a + Math.random() * (b - a)
};
var Df = function(a, b) {
    this.x = p(a) ? a : 0;
    this.a = p(b) ? b : 0
};
Df.prototype.toString = function() {
    return "(" + this.x + ", " + this.a + ")"
};
var Ef = function(a, b) {
    return new Df(a.x - b.x, a.a - b.a)
};
Df.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.a = Math.ceil(this.a);
    return this
};
Df.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.a = Math.floor(this.a);
    return this
};
Df.prototype.round = function() {
    this.x = Math.round(this.x);
    this.a = Math.round(this.a);
    return this
};
var Ff = function(a, b) {
    this.width = a;
    this.height = b
};
k = Ff.prototype;
k.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
};
k.aspectRatio = function() {
    return this.width / this.height
};
k.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
k.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
k.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var If = function(a) {
        return a ? new Gf(Hf(a)) : Wa || (Wa = new Gf)
    },
    Jf = function(a) {
        return t(a) ? document.getElementById(a) : a
    },
    Kf = function(a, b) {
        return (b || document).getElementsByTagName(String(a))
    },
    Mf = function(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Lf(document, "*", a, b)
    },
    D = function(a, b) {
        var c = b || document,
            d = null;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : d = Nf("*", a, b);
        return d || null
    },
    E = function(a, b) {
        b = D(a, b);
        return x(b, "No element found with className: " +
            a)
    },
    Lf = function(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && sb(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    },
    Nf = function(a,
        b, c) {
        var d = document,
            e = c || d,
            f = a && "*" != a ? String(a).toUpperCase() : "";
        return e.querySelectorAll && e.querySelector && (f || b) ? e.querySelector(f + (b ? "." + b : "")) : Lf(d, a, b, c)[0] || null
    },
    Pf = function(a, b) {
        Mb(b, function(c, d) {
            c && "object" == typeof c && c.sc && (c = c.tb());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Of.hasOwnProperty(d) ? a.setAttribute(Of[d], c) : vc(d, "aria-") || vc(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    },
    Of = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    },
    Rf = function(a) {
        a = a.document;
        a = Qf(a) ? a.documentElement : a.body;
        return new Ff(a.clientWidth, a.clientHeight)
    },
    Tf = function(a) {
        var b = Sf(a);
        a = a.parentWindow || a.defaultView;
        return B && Re("10") && a.pageYOffset != b.scrollTop ? new Df(b.scrollLeft, b.scrollTop) : new Df(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    },
    Sf = function(a) {
        return a.scrollingElement ? a.scrollingElement :
            !Ae && Qf(a) ? a.documentElement : a.body || a.documentElement
    },
    Uf = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    },
    F = function(a, b, c) {
        return Vf(document, arguments)
    },
    Vf = function(a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!xf && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', ee(d.name), '"');
            if (d.type) {
                c.push(' type="', ee(d.type), '"');
                var e = {};
                Xb(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (t(d) ? c.className = d : Ja(d) ? c.className = d.join(" ") : Pf(c, d));
        2 < b.length && Wf(a, c, b, 2);
        return c
    },
    Wf = function(a, b, c, d) {
        function e(g) {
            g && b.appendChild(t(g) ? a.createTextNode(g) : g)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !Ka(f) || Ma(f) && 0 < f.nodeType ? e(f) : y(Xf(f) ? yb(f) : f, e)
        }
    },
    Yf = function(a) {
        return document.createElement(String(a))
    },
    Zf = function(a) {
        return document.createTextNode(String(a))
    },
    $f = function(a, b) {
        var c = a.createElement("DIV");
        B ? (Ud(c, Md(Od, b)), c.removeChild(x(c.firstChild))) : Ud(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(x(c.firstChild));
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    },
    Qf = function(a) {
        return "CSS1Compat" == a.compatMode
    },
    ag = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    },
    bg = function(a, b) {
        x(null != a && null != b,
            "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    },
    cg = function(a, b) {
        Wf(Hf(a), a, arguments, 1)
    },
    dg = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    },
    eg = function(a, b) {
        x(null != a && null != b, "goog.dom.insertSiblingBefore expects non-null arguments");
        b.parentNode && b.parentNode.insertBefore(a, b)
    },
    fg = function(a, b) {
        x(null != a && null != b, "goog.dom.insertSiblingAfter expects non-null arguments");
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    },
    gg = function(a, b, c) {
        x(null != a, "goog.dom.insertChildAt expects a non-null parent");
        a.insertBefore(b, a.childNodes[c] || null)
    },
    hg = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    },
    ig = function(a) {
        return yf && void 0 != a.children ? a.children : kb(a.childNodes, function(b) {
            return 1 == b.nodeType
        })
    },
    kg = function(a) {
        return p(a.firstElementChild) ? a.firstElementChild : jg(a.firstChild, !0)
    },
    jg = function(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    },
    lg = function(a) {
        return Ma(a) && 1 == a.nodeType
    },
    mg = function(a) {
        var b;
        if (Af && !(B && Re("9") && !Re("10") && n.SVGElement &&
                a instanceof n.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return lg(b) ? b : null
    },
    ng = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    },
    qg = function(a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (B && !Te(9)) {
            if (9 == a.nodeType) return -1;
            if (9 == b.nodeType) return 1
        }
        if ("sourceIndex" in
            a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType,
                d = 1 == b.nodeType;
            if (c && d) return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode,
                f = b.parentNode;
            return e == f ? og(a, b) : !c && ng(e, b) ? -1 * pg(a, b) : !d && ng(f, a) ? pg(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
        }
        d = Hf(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(n.Range.START_TO_END, a)
    },
    pg = function(a, b) {
        var c = a.parentNode;
        if (c == b) return -1;
        for (; b.parentNode != c;) b = b.parentNode;
        return og(b, a)
    },
    og = function(a, b) {
        for (; b = b.previousSibling;)
            if (b == a) return -1;
        return 1
    },
    rg = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    },
    Hf = function(a) {
        x(a, "Node cannot be null or undefined.");
        return 9 == a.nodeType ?
            a : a.ownerDocument || a.document
    },
    sg = function(a) {
        return a.contentDocument || a.contentWindow.document
    },
    G = function(a, b) {
        x(null != a, "goog.dom.setTextContent expects a non-null value for node");
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(x(a.lastChild));
            a.firstChild.data = String(b)
        } else {
            dg(a);
            var c = Hf(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    },
    tg = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    ug = {
        IMG: " ",
        BR: "\n"
    },
    vg = function(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    },
    xg = function(a) {
        return B && !Re("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
    },
    yg = function(a) {
        a = a.tabIndex;
        return ya(a) && 0 <= a && 32768 > a
    },
    Ag = function(a) {
        if (zf && null !== a && "innerText" in a) a = ae(a.innerText);
        else {
            var b = [];
            zg(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        zf || (a = a.replace(/ +/g, " "));
        " " != a && (a =
            a.replace(/^\s*/, ""));
        return a
    },
    Bg = function(a) {
        var b = [];
        zg(a, b, !1);
        return b.join("")
    },
    zg = function(a, b, c) {
        if (!(a.nodeName in tg))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ug) b.push(ug[a.nodeName]);
        else
            for (a = a.firstChild; a;) zg(a, b, c), a = a.nextSibling
    },
    Xf = function(a) {
        if (a && "number" == typeof a.length) {
            if (Ma(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (La(a)) return "function" == typeof a.item
        }
        return !1
    },
    Dg = function(a) {
        return Cg(a,
            function(b) {
                return t(b.className) && sb(b.className.split(/\s+/), "gt-baf-entry-clickable")
            }, void 0)
    },
    Cg = function(a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            x("parentNode" != a.name);
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    },
    Eg = function(a) {
        try {
            var b = a && a.activeElement;
            return b && b.nodeName ? b : null
        } catch (c) {
            return null
        }
    },
    Gf = function(a) {
        this.a = a || n.document || document
    };
Gf.prototype.j = function(a) {
    return t(a) ? this.a.getElementById(a) : a
};
Gf.prototype.c = Gf.prototype.j;
Gf.prototype.pd = function(a, b) {
    return D(a, b || this.a)
};
Gf.prototype.b = function(a, b, c) {
    return Vf(this.a, arguments)
};
var Fg = function(a, b) {
        return a.a.createElement(String(b))
    },
    Gg = function(a) {
        a = a.a;
        return a.parentWindow || a.defaultView
    };
k = Gf.prototype;
k.appendChild = bg;
k.Oh = cg;
k.jf = dg;
k.Rh = hg;
k.Ph = ig;
k.Nh = kg;
k.Tl = lg;
k.contains = ng;
k.kf = G;
k.Qh = Ag;
var Hg = function() {
    this.lc = this.lc;
    this.Fa = this.Fa
};
Hg.prototype.lc = !1;
Hg.prototype.La = function() {
    this.lc || (this.lc = !0, this.W())
};
var Jg = function(a, b) {
    b = Ta(Ig, b);
    a.lc ? p(void 0) ? b.call(void 0) : b() : (a.Fa || (a.Fa = []), a.Fa.push(p(void 0) ? v(b, void 0) : b))
};
Hg.prototype.W = function() {
    if (this.Fa)
        for (; this.Fa.length;) this.Fa.shift()()
};
var Ig = function(a) {
    a && "function" == typeof a.La && a.La()
};
var Kg = function(a, b) {
    this.type = a;
    this.a = this.target = b;
    this.defaultPrevented = this.c = !1;
    this.Ii = !0
};
Kg.prototype.stopPropagation = function() {
    this.c = !0
};
Kg.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.Ii = !1
};
var Lg = Object.freeze || function(a) {
    return a
};
var Mg = !B || Te(9),
    Ng = !B || Te(9),
    Og = B && !Re("9"),
    Pg = function() {
        if (!n.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            n.addEventListener("test", Fa, b), n.removeEventListener("test", Fa, b)
        } catch (c) {}
        return a
    }();
var Qg;
Qg = Ae ? "webkitTransitionEnd" : we ? "otransitionend" : "transitionend";
var Rg = {
    ge: "mousedown",
    he: "mouseup",
    fe: "mousecancel",
    zp: "mousemove",
    Bp: "mouseover",
    Ap: "mouseout",
    xp: "mouseenter",
    yp: "mouseleave"
};
var Tg = function(a, b) {
    Kg.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.g = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.b = null;
    if (a) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        (b = a.relatedTarget) ? ze && (ue(b, "nodeName") || (b =
            null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey =
            a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.g = De ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = t(a.pointerType) ? a.pointerType : Sg[a.pointerType] || "";
        this.state = a.state;
        this.b = a;
        a.defaultPrevented && this.preventDefault()
    }
};
w(Tg, Kg);
var Ug = Lg([1, 4, 2]),
    Sg = Lg({
        2: "touch",
        3: "pen",
        4: "mouse"
    }),
    Vg = function(a) {
        return (Mg ? 0 == a.b.button : "click" == a.type ? !0 : !!(a.b.button & Ug[0])) && !(Ae && De && a.ctrlKey)
    };
Tg.prototype.stopPropagation = function() {
    Tg.D.stopPropagation.call(this);
    this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
};
Tg.prototype.preventDefault = function() {
    Tg.D.preventDefault.call(this);
    var a = this.b;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Og) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var Wg = "closure_listenable_" + (1E6 * Math.random() | 0),
    Xg = function(a) {
        return !(!a || !a[Wg])
    },
    Yg = 0;
var Zg = function(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.zf = e;
        this.key = ++Yg;
        this.Ud = this.Te = !1
    },
    $g = function(a) {
        a.Ud = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.zf = null
    };
var ah = function(a) {
    this.src = a;
    this.a = {};
    this.b = 0
};
ah.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var g = bh(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Te = !1)) : (b = new Zg(b, this.src, f, !!d, e), b.Te = c, a.push(b));
    return b
};
var ch = function(a, b) {
    var c = b.type;
    if (!(c in a.a)) return !1;
    var d = vb(a.a[c], b);
    d && ($g(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
    return d
};
ah.prototype.cf = function(a, b) {
    a = this.a[a.toString()];
    var c = [];
    if (a)
        for (var d = 0; d < a.length; ++d) {
            var e = a[d];
            e.capture == b && c.push(e)
        }
    return c
};
ah.prototype.re = function(a, b, c, d) {
    a = this.a[a.toString()];
    var e = -1;
    a && (e = bh(a, b, c, d));
    return -1 < e ? a[e] : null
};
ah.prototype.hasListener = function(a, b) {
    var c = p(a),
        d = c ? a.toString() : "",
        e = p(b);
    return Nb(this.a, function(f) {
        for (var g = 0; g < f.length; ++g)
            if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
        return !1
    })
};
var bh = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Ud && f.listener == b && f.capture == !!c && f.zf == d) return e
    }
    return -1
};
var dh = "closure_lm_" + (1E6 * Math.random() | 0),
    eh = {},
    fh = 0,
    H = function(a, b, c, d, e) {
        if (d && d.once) return gh(a, b, c, d, e);
        if (Ja(b)) {
            for (var f = 0; f < b.length; f++) H(a, b[f], c, d, e);
            return null
        }
        c = hh(c);
        return Xg(a) ? a.O(b, c, Ma(d) ? !!d.capture : !!d, e) : ih(a, b, c, !1, d, e)
    },
    ih = function(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = Ma(e) ? !!e.capture : !!e,
            h = jh(a);
        h || (a[dh] = h = new ah(a));
        c = h.add(b, c, d, g, f);
        if (c.a) return c;
        d = kh();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) Pg || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
            d, e);
        else if (a.attachEvent) a.attachEvent(lh(b.toString()), d);
        else if (a.addListener && a.removeListener) x("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        fh++;
        return c
    },
    kh = function() {
        var a = mh,
            b = Ng ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    },
    gh = function(a, b, c, d, e) {
        if (Ja(b)) {
            for (var f = 0; f < b.length; f++) gh(a, b[f], c, d, e);
            return null
        }
        c = hh(c);
        return Xg(a) ?
            a.Og(b, c, Ma(d) ? !!d.capture : !!d, e) : ih(a, b, c, !0, d, e)
    },
    nh = function(a, b, c, d, e) {
        if (Ja(b))
            for (var f = 0; f < b.length; f++) nh(a, b[f], c, d, e);
        else d = Ma(d) ? !!d.capture : !!d, c = hh(c), Xg(a) ? a.Ja(b, c, d, e) : a && (a = jh(a)) && (b = a.re(b, c, d, e)) && oh(b)
    },
    oh = function(a) {
        if (ya(a) || !a || a.Ud) return !1;
        var b = a.src;
        if (Xg(b)) return ch(b.Pb, a);
        var c = a.type,
            d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(lh(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        fh--;
        (c = jh(b)) ? (ch(c, a), 0 ==
            c.b && (c.src = null, b[dh] = null)) : $g(a);
        return !0
    },
    ph = function(a, b) {
        if (!a) return 0;
        if (Xg(a)) return a.Ug(b);
        a = jh(a);
        if (!a) return 0;
        var c = 0;
        b = b && b.toString();
        for (var d in a.a)
            if (!b || d == b)
                for (var e = a.a[d].concat(), f = 0; f < e.length; ++f) oh(e[f]) && ++c;
        return c
    },
    lh = function(a) {
        return a in eh ? eh[a] : eh[a] = "on" + a
    },
    rh = function(a, b, c, d) {
        var e = !0;
        if (a = jh(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.Ud && (f = qh(f, d), e = e && !1 !== f)
                }
            return e
    },
    qh = function(a, b) {
        var c = a.listener,
            d = a.zf || a.src;
        a.Te && oh(a);
        return c.call(d, b)
    },
    sh = function(a, b) {
        x(Xg(a), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
        a.dispatchEvent(b)
    },
    mh = function(a, b) {
        if (a.Ud) return !0;
        if (!Ng) {
            var c = b || Ea("window.event");
            b = new Tg(c, this);
            var d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (e = b.a; e; e = e.parentNode) c.push(e);a = a.type;
                for (e = c.length - 1; !b.c && 0 <=
                    e; e--) {
                    b.a = c[e];
                    var f = rh(c[e], a, !0, b);
                    d = d && f
                }
                for (e = 0; !b.c && e < c.length; e++) b.a = c[e],
                f = rh(c[e], a, !1, b),
                d = d && f
            }
            return d
        }
        return qh(a, new Tg(b, this))
    },
    jh = function(a) {
        a = a[dh];
        return a instanceof ah ? a : null
    },
    th = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    hh = function(a) {
        x(a, "Listener can not be null.");
        if (La(a)) return a;
        x(a.handleEvent, "An object listener must have handleEvent method.");
        a[th] || (a[th] = function(b) {
            return a.handleEvent(b)
        });
        return a[th]
    };
var vh = function(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        if (uh(a.keyCode)) return !0;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !ze;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
        }
    },
    xh = function(a, b, c, d, e, f) {
        if (Ae && !Re("525")) return !0;
        if (De && e) return uh(a);
        if (e &&
            !d) return !1;
        if (!ze) {
            ya(b) && (b = wh(b));
            var g = 17 == b || 18 == b || De && 91 == b;
            if ((!c || De) && g || De && 16 == b && (d || f)) return !1
        }
        if ((Ae || xe) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (B && d && b == a) return !1;
        switch (a) {
            case 13:
                return ze ? f || e ? !1 : !(c && d) : !0;
            case 27:
                return !(Ae || xe || ze)
        }
        return ze && (d || e || f) ? !1 : uh(a)
    },
    uh = function(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (Ae || xe) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
                return !0;
            case 173:
                return ze;
            default:
                return !1
        }
    },
    wh = function(a) {
        if (ze) a = yh(a);
        else if (De && Ae) switch (a) {
            case 93:
                a = 91
        }
        return a
    },
    yh = function(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };
var zh = function(a, b) {
        b = yb(b);
        var c = Eg(document);
        if (c) {
            var d = b.indexOf(c);
            c = d + 1 === b.length ? 0 : d + 1;
            d = 0 > d - 1 ? b.length - 1 : d - 1;
            switch (a.keyCode) {
                case 39:
                    b[c].focus();
                    break;
                case 37:
                    b[d].focus()
            }
        }
    },
    Ah = function(a, b) {
        H(a, "click", b, !1);
        H(a, "keypress", function(c) {
            13 === c.keyCode && b(c)
        }, !1)
    };
var Bh = function(a, b, c, d) {
    window.__gaTracker && __gaTracker("send", "event", a, b, c, d)
};
var Jh = function(a) {
        this.b = !1;
        this.a = [];
        this.c = {};
        for (var b = 0; b < I(a, 1); b++) {
            var c = Ch(a, b),
                d = J(c, 0),
                e = "";
            Dh(c, 3) && (e = J(c, 3));
            d in this.c ? d = this.c[d] : (c = new Eh(d, e), this.c[d] = c, this.a.push(c), d = c);
            for (c = 0; c < Ch(a, b).b(); c++) {
                var f = Ch(a, b).c(c);
                e = f;
                e = 0 == I(e, 2) ? -Qa(e) : Fh(e, 2, 0);
                var g = d;
                if (e in g.b) e = g.b[e];
                else {
                    var h = new Gh;
                    g.b[e] = h;
                    g.a.push(h);
                    e = h
                }
                g = J(f, 0);
                h = J(f, 4);
                var l = Dh(f, 3) ? Hh(f, 3) : -1;
                var m = [];
                for (var q = 0; q < I(f, 1); q++) m.push(Fh(f, 1, q));
                f = e;
                g in f.b || (h = new Ih(g, h, l, m), f.b[g] = h, f.a.push(h));
                this.b |=
                    1 < e.a.length
            }
        }
    },
    Kh = function(a) {
        for (var b = 0, c = 0; c < a.a.length; c++) {
            for (var d = a.a[c], e = 0, f = 0; f < d.a.length; f++) e += d.a[f].a.length;
            b += e
        }
        for (d = c = 0; d < a.a.length; d++) {
            e = a.a[d];
            for (var g = f = 0; g < e.a.length; g++) {
                for (var h = e.a[g], l = 0, m = 0; m < h.a.length; m++) l += h.a[m].a ? 1 : 0;
                f += l
            }
            c += f
        }
        return b - c
    },
    Lh = function(a) {
        for (var b = [], c = 0; c < a.a.length; c++)
            for (var d = 0; d < a.a[c].a.length; d++) Array.prototype.push.apply(b, a.a[c].a[d].a);
        return b
    },
    Mh = function(a) {
        for (var b = 0; b < a.a.length; b++)
            for (var c = 0; c < a.a[b].a.length; c++) a.a[b].a[c].a.sort(function(d,
                e) {
                return e.Lb - d.Lb
            })
    },
    Eh = function(a, b) {
        this.g = a;
        this.c = b;
        this.a = [];
        this.b = {}
    };
Eh.prototype.Lb = function() {
    for (var a = 0, b = 0; b < this.a.length; b++) a = Math.max(a, this.a[b].Lb());
    return a
};
var Oh = function(a) {
        for (var b = 0; b < a.a.length; b++)
            if (Nh(a.a[b])) return !0;
        return !1
    },
    Gh = function() {
        this.a = [];
        this.b = {}
    };
Gh.prototype.Lb = function() {
    for (var a = 0, b = 0; b < this.a.length; b++) a = Math.max(a, this.a[b].Lb);
    return a
};
var Nh = function(a) {
        for (var b = 0; b < a.a.length; b++)
            if (a.a[b].a) return !0;
        return !1
    },
    Ih = function(a, b, c, d) {
        this.text = a;
        this.Fe = b;
        this.Lb = c;
        this.Of = d;
        this.a = !1;
        this.b = 0
    };
var K = function() {
    Hg.call(this);
    this.Pb = new ah(this);
    this.Pj = this;
    this.Tg = null
};
w(K, Hg);
K.prototype[Wg] = !0;
k = K.prototype;
k.df = function() {
    return this.Tg
};
k.Ad = function(a) {
    this.Tg = a
};
k.addEventListener = function(a, b, c, d) {
    H(this, a, b, c, d)
};
k.removeEventListener = function(a, b, c, d) {
    nh(this, a, b, c, d)
};
k.dispatchEvent = function(a) {
    Ph(this);
    var b = this.df();
    if (b) {
        var c = [];
        for (var d = 1; b; b = b.df()) c.push(b), x(1E3 > ++d, "infinite loop")
    }
    b = this.Pj;
    d = a.type || a;
    if (t(a)) a = new Kg(a, b);
    else if (a instanceof Kg) a.target = a.target || b;
    else {
        var e = a;
        a = new Kg(d, b);
        Xb(a, e)
    }
    e = !0;
    if (c)
        for (var f = c.length - 1; !a.c && 0 <= f; f--) {
            var g = a.a = c[f];
            e = Qh(g, d, !0, a) && e
        }
    a.c || (g = a.a = b, e = Qh(g, d, !0, a) && e, a.c || (e = Qh(g, d, !1, a) && e));
    if (c)
        for (f = 0; !a.c && f < c.length; f++) g = a.a = c[f], e = Qh(g, d, !1, a) && e;
    return e
};
k.W = function() {
    K.D.W.call(this);
    this.Ug();
    this.Tg = null
};
k.O = function(a, b, c, d) {
    Ph(this);
    return this.Pb.add(String(a), b, !1, c, d)
};
k.Og = function(a, b, c, d) {
    return this.Pb.add(String(a), b, !0, c, d)
};
k.Ja = function(a, b, c, d) {
    var e = this.Pb;
    a = String(a).toString();
    if (a in e.a) {
        var f = e.a[a];
        b = bh(f, b, c, d); - 1 < b ? ($g(f[b]), ub(f, b), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1
    } else e = !1;
    return e
};
k.Ug = function(a) {
    if (this.Pb) {
        var b = this.Pb;
        a = a && a.toString();
        var c = 0,
            d;
        for (d in b.a)
            if (!a || d == a) {
                for (var e = b.a[d], f = 0; f < e.length; f++) ++c, $g(e[f]);
                delete b.a[d];
                b.b--
            }
        b = c
    } else b = 0;
    return b
};
var Qh = function(a, b, c, d) {
    b = a.Pb.a[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.Ud && g.capture == c) {
            var h = g.listener,
                l = g.zf || g.src;
            g.Te && ch(a.Pb, g);
            e = !1 !== h.call(l, d) && e
        }
    }
    return e && 0 != d.Ii
};
K.prototype.cf = function(a, b) {
    return this.Pb.cf(String(a), b)
};
K.prototype.re = function(a, b, c, d) {
    return this.Pb.re(String(a), b, c, d)
};
K.prototype.hasListener = function(a, b) {
    return this.Pb.hasListener(p(a) ? String(a) : void 0, b)
};
var Ph = function(a) {
    x(a.Pb, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var Rh = function(a, b) {
    this.c = a;
    this.g = b;
    this.b = 0;
    this.a = null
};
Rh.prototype.get = function() {
    if (0 < this.b) {
        this.b--;
        var a = this.a;
        this.a = a.next;
        a.next = null
    } else a = this.c();
    return a
};
var Sh = function(a, b) {
    a.g(b);
    100 > a.b && (a.b++, b.next = a.a, a.a = b)
};
var Th = function(a) {
        n.setTimeout(function() {
            throw a;
        }, 0)
    },
    Uh, Vh = function() {
        var a = n.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function() {
            var e = document.createElement("IFRAME");
            e.style.display = "none";
            Wd(e, tc(dc(fc)));
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(Bd(Kd));
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol +
                "//" + f.location.host;
            e = v(function(l) {
                if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !ud()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (p(c.next)) {
                    c = c.next;
                    var e = c.Fh;
                    c.Fh = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Fh: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
            function(e) {
                var f = document.createElement("SCRIPT");
                f.onreadystatechange = function() {
                    f.onreadystatechange = null;
                    f.parentNode.removeChild(f);
                    f = null;
                    e();
                    e = null
                };
                document.documentElement.appendChild(f)
            } : function(e) {
                n.setTimeout(e, 0)
            }
    };
var Wh = function() {
        this.b = this.a = null
    },
    Yh = new Rh(function() {
        return new Xh
    }, function(a) {
        a.reset()
    });
Wh.prototype.add = function(a, b) {
    var c = Yh.get();
    c.set(a, b);
    this.b ? this.b.next = c : (x(!this.a), this.a = c);
    this.b = c
};
var $h = function() {
        var a = Zh,
            b = null;
        a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
        return b
    },
    Xh = function() {
        this.next = this.a = this.zc = null
    };
Xh.prototype.set = function(a, b) {
    this.zc = a;
    this.a = b;
    this.next = null
};
Xh.prototype.reset = function() {
    this.next = this.a = this.zc = null
};
var di = function(a, b) {
        ai || bi();
        ci || (ai(), ci = !0);
        Zh.add(a, b)
    },
    ai, bi = function() {
        if (n.Promise && n.Promise.resolve) {
            var a = n.Promise.resolve(void 0);
            ai = function() {
                a.then(ei)
            }
        } else ai = function() {
            var b = ei;
            !La(n.setImmediate) || n.Window && n.Window.prototype && !z("Edge") && n.Window.prototype.setImmediate == n.setImmediate ? (Uh || (Uh = Vh()), Uh(b)) : n.setImmediate(b)
        }
    },
    ci = !1,
    Zh = new Wh,
    ei = function() {
        for (var a; a = $h();) {
            try {
                a.zc.call(a.a)
            } catch (b) {
                Th(b)
            }
            Sh(Yh, a)
        }
        ci = !1
    };
var fi = function(a) {
    if (!a) return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
};
var ii = function(a) {
        this.a = 0;
        this.m = void 0;
        this.g = this.b = this.c = null;
        this.h = this.o = !1;
        if (a != Fa) try {
            var b = this;
            a.call(void 0, function(c) {
                gi(b, 2, c)
            }, function(c) {
                if (!(c instanceof hi)) try {
                    if (c instanceof Error) throw c;
                    throw Error("Promise rejected.");
                } catch (d) {}
                gi(b, 3, c)
            })
        } catch (c) {
            gi(this, 3, c)
        }
    },
    ji = function() {
        this.next = this.context = this.c = this.b = this.a = null;
        this.g = !1
    };
ji.prototype.reset = function() {
    this.context = this.c = this.b = this.a = null;
    this.g = !1
};
var ki = new Rh(function() {
        return new ji
    }, function(a) {
        a.reset()
    }),
    li = function(a, b, c) {
        var d = ki.get();
        d.b = a;
        d.c = b;
        d.context = c;
        return d
    },
    ni = function(a, b, c) {
        mi(a, b, c, null) || di(Ta(b, a))
    },
    oi = function(a) {
        new ii(function(b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (var f = function(m, q) {
                        d--;
                        e[m] = q;
                        0 == d && b(e)
                    }, g = function(m) {
                        c(m)
                    }, h = 0, l; h < a.length; h++) l = a[h], ni(l, Ta(f, h), g);
            else b(e)
        })
    };
ii.prototype.then = function(a, b, c) {
    null != a && bb(a, "opt_onFulfilled should be a function.");
    null != b && bb(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return pi(this, La(a) ? a : null, La(b) ? b : null, c)
};
ii.prototype.$goog_Thenable = !0;
ii.prototype.cancel = function(a) {
    0 == this.a && di(function() {
        var b = new hi(a);
        qi(this, b)
    }, this)
};
var qi = function(a, b) {
        if (0 == a.a)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var d = 0, e = null, f = null, g = c.b; g && (g.g || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.a && 1 == d ? qi(c, b) : (f ? (d = f, x(c.b), x(null != d), d.next == c.g && (c.g = d), d.next = d.next.next) : ri(c), si(c, e, 3, b)))
                }
                a.c = null
            } else gi(a, 3, b)
    },
    ui = function(a, b) {
        a.b || 2 != a.a && 3 != a.a || ti(a);
        x(null != b.b);
        a.g ? a.g.next = b : a.b = b;
        a.g = b
    },
    pi = function(a, b, c, d) {
        var e = li(null, null, null);
        e.a = new ii(function(f, g) {
            e.b = b ? function(h) {
                    try {
                        var l = b.call(d, h);
                        f(l)
                    } catch (m) {
                        g(m)
                    }
                } :
                f;
            e.c = c ? function(h) {
                try {
                    var l = c.call(d, h);
                    !p(l) && h instanceof hi ? g(h) : f(l)
                } catch (m) {
                    g(m)
                }
            } : g
        });
        e.a.c = a;
        ui(a, e);
        return e.a
    };
ii.prototype.G = function(a) {
    x(1 == this.a);
    this.a = 0;
    gi(this, 2, a)
};
ii.prototype.C = function(a) {
    x(1 == this.a);
    this.a = 0;
    gi(this, 3, a)
};
var gi = function(a, b, c) {
        0 == a.a && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, mi(c, a.G, a.C, a) || (a.m = c, a.a = b, a.c = null, ti(a), 3 != b || c instanceof hi || vi(a, c)))
    },
    mi = function(a, b, c, d) {
        if (a instanceof ii) return null != b && bb(b, "opt_onFulfilled should be a function."), null != c && bb(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), ui(a, li(b || Fa, c || null, d)), !0;
        if (fi(a)) return a.then(b, c, d), !0;
        if (Ma(a)) try {
            var e = a.then;
            if (La(e)) return wi(a,
                e, b, c, d), !0
        } catch (f) {
            return c.call(d, f), !0
        }
        return !1
    },
    wi = function(a, b, c, d, e) {
        var f = !1,
            g = function(l) {
                f || (f = !0, c.call(e, l))
            },
            h = function(l) {
                f || (f = !0, d.call(e, l))
            };
        try {
            b.call(a, g, h)
        } catch (l) {
            h(l)
        }
    },
    ti = function(a) {
        a.o || (a.o = !0, di(a.w, a))
    },
    ri = function(a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.g = null);
        null != b && x(null != b.b);
        return b
    };
ii.prototype.w = function() {
    for (var a; a = ri(this);) si(this, a, this.a, this.m);
    this.o = !1
};
var si = function(a, b, c, d) {
        if (3 == c && b.c && !b.g)
            for (; a && a.h; a = a.c) a.h = !1;
        if (b.a) b.a.c = null, xi(b, c, d);
        else try {
            b.g ? b.b.call(b.context) : xi(b, c, d)
        } catch (e) {
            yi.call(null, e)
        }
        Sh(ki, b)
    },
    xi = function(a, b, c) {
        2 == b ? a.b.call(a.context, c) : a.c && a.c.call(a.context, c)
    },
    vi = function(a, b) {
        a.h = !0;
        di(function() {
            a.h && yi.call(null, b)
        })
    },
    yi = Th,
    hi = function(a) {
        Va.call(this, a)
    };
w(hi, Va);
hi.prototype.name = "cancel";
var zi = function(a, b) {
    K.call(this);
    this.c = a || 1;
    this.b = b || n;
    this.g = v(this.o, this);
    this.h = Ua()
};
w(zi, K);
zi.prototype.enabled = !1;
zi.prototype.a = null;
var Ai = function(a, b) {
    a.c = b;
    a.a && a.enabled ? (a.stop(), a.start()) : a.a && a.stop()
};
zi.prototype.o = function() {
    if (this.enabled) {
        var a = Ua() - this.h;
        0 < a && a < .8 * this.c ? this.a = this.b.setTimeout(this.g, this.c - a) : (this.a && (this.b.clearTimeout(this.a), this.a = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
    }
};
zi.prototype.start = function() {
    this.enabled = !0;
    this.a || (this.a = this.b.setTimeout(this.g, this.c), this.h = Ua())
};
zi.prototype.stop = function() {
    this.enabled = !1;
    this.a && (this.b.clearTimeout(this.a), this.a = null)
};
zi.prototype.W = function() {
    zi.D.W.call(this);
    this.stop();
    delete this.b
};
var Bi = function(a, b, c) {
        if (La(a)) c && (a = v(a, c));
        else if (a && "function" == typeof a.handleEvent) a = v(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0)
    },
    Ci = function(a) {
        n.clearTimeout(a)
    };
var Di = function() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        q = m = 0
    }

    function b(r) {
        for (var u = g, A = 0; 64 > A; A += 4) u[A / 4] = r[A] << 24 | r[A + 1] << 16 | r[A + 2] << 8 | r[A + 3];
        for (A = 16; 80 > A; A++) r = u[A - 3] ^ u[A - 8] ^ u[A - 14] ^ u[A - 16], u[A] = (r << 1 | r >>> 31) & 4294967295;
        r = e[0];
        var Q = e[1],
            M = e[2],
            Oa = e[3],
            Hb = e[4];
        for (A = 0; 80 > A; A++) {
            if (40 > A)
                if (20 > A) {
                    var Ia = Oa ^ Q & (M ^ Oa);
                    var Ib = 1518500249
                } else Ia = Q ^ M ^ Oa, Ib = 1859775393;
            else 60 > A ? (Ia = Q & M | Oa & (Q | M), Ib = 2400959708) : (Ia = Q ^ M ^ Oa, Ib = 3395469782);
            Ia = ((r << 5 | r >>>
                27) & 4294967295) + Ia + Hb + Ib + u[A] & 4294967295;
            Hb = Oa;
            Oa = M;
            M = (Q << 30 | Q >>> 2) & 4294967295;
            Q = r;
            r = Ia
        }
        e[0] = e[0] + r & 4294967295;
        e[1] = e[1] + Q & 4294967295;
        e[2] = e[2] + M & 4294967295;
        e[3] = e[3] + Oa & 4294967295;
        e[4] = e[4] + Hb & 4294967295
    }

    function c(r, u) {
        if ("string" === typeof r) {
            r = unescape(encodeURIComponent(r));
            for (var A = [], Q = 0, M = r.length; Q < M; ++Q) A.push(r.charCodeAt(Q));
            r = A
        }
        u || (u = r.length);
        A = 0;
        if (0 == m)
            for (; A + 64 < u;) b(r.slice(A, A + 64)), A += 64, q += 64;
        for (; A < u;)
            if (f[m++] = r[A++], q++, 64 == m)
                for (m = 0, b(f); A + 64 < u;) b(r.slice(A, A + 64)), A += 64, q +=
                    64
    }

    function d() {
        var r = [],
            u = 8 * q;
        56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56));
        for (var A = 63; 56 <= A; A--) f[A] = u & 255, u >>>= 8;
        b(f);
        for (A = u = 0; 5 > A; A++)
            for (var Q = 24; 0 <= Q; Q -= 8) r[u++] = e[A] >> Q & 255;
        return r
    }
    for (var e = [], f = [], g = [], h = [128], l = 1; 64 > l; ++l) h[l] = 0;
    var m, q;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        ek: function() {
            for (var r = d(), u = "", A = 0; A < r.length; A++) u += "0123456789ABCDEF".charAt(Math.floor(r[A] / 16)) + "0123456789ABCDEF".charAt(r[A] % 16);
            return u
        }
    }
};
var Fi = function(a, b, c) {
        var d = [],
            e = [];
        if (1 == (Ja(c) ? 2 : 1)) return e = [b, a], y(d, function(h) {
            e.push(h)
        }), Ei(e.join(" "));
        var f = [],
            g = [];
        y(c, function(h) {
            g.push(h.key);
            f.push(h.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        y(d, function(h) {
            e.push(h)
        });
        a = Ei(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    },
    Ei = function(a) {
        var b = Di();
        b.update(a);
        return b.ek().toLowerCase()
    };
var Gi = function() {
    this.a = document || {
        cookie: ""
    }
};
k = Gi.prototype;
k.isEnabled = function() {
    return navigator.cookieEnabled
};
k.set = function(a, b, c, d, e, f) {
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    p(c) || (c = -1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    f = f ? ";secure" : "";
    c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Ua() + 1E3 * c)).toUTCString();
    this.a.cookie = a + "=" + b + e + d + c + f
};
k.get = function(a, b) {
    for (var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = yc(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return ""
    }
    return b
};
k.Cb = function() {
    return Hi(this).keys
};
k.Rb = function() {
    return Hi(this).values
};
k.og = function() {
    return this.a.cookie ? (this.a.cookie || "").split(";").length : 0
};
var Hi = function(a) {
    a = (a.a.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = yc(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {
        keys: b,
        values: c
    }
};
var Ii = function(a) {
    var b = vf(String(n.location.href)),
        c = n.__OVERRIDE_SID;
    null == c && (c = (new Gi).get("SID"));
    if (c && (b = (c = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? n.__SAPISID : n.__APISID, null == b && (b = (new Gi).get(c ? "SAPISID" : "APISID")), b)) {
        c = c ? "SAPISIDHASH" : "APISIDHASH";
        var d = String(n.location.href);
        return d && b && c ? [c, Fi(vf(d), b, a || null)].join(" ") : null
    }
    return null
};
var Ji = function(a, b, c) {
    this.reset(a, b, c, void 0, void 0)
};
Ji.prototype.a = null;
var Ki = 0;
Ji.prototype.reset = function(a, b, c, d, e) {
    "number" == typeof e || Ki++;
    d || Ua();
    delete this.a
};
var Li = function(a) {
        this.g = a;
        this.b = this.c = this.a = null
    },
    Mi = function(a, b) {
        this.name = a;
        this.value = b
    };
Mi.prototype.toString = function() {
    return this.name
};
var Ni = new Mi("SEVERE", 1E3),
    Oi = new Mi("WARNING", 900),
    Pi = new Mi("INFO", 800),
    Qi = new Mi("CONFIG", 700),
    Ri = new Mi("FINE", 500);
Li.prototype.getParent = function() {
    return this.a
};
var Si = function(a) {
    if (a.c) return a.c;
    if (a.a) return Si(a.a);
    Za("Root logger has no level set.");
    return null
};
Li.prototype.log = function(a, b, c) {
    if (a.value >= Si(this).value)
        for (La(b) && (b = b()), a = new Ji(a, String(b), this.g), c && (a.a = c), c = this; c;) c = c.getParent()
};
var Ti = {},
    Ui = null,
    Vi = function(a) {
        Ui || (Ui = new Li(""), Ti[""] = Ui, Ui.c = Qi);
        var b;
        if (!(b = Ti[a])) {
            b = new Li(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            c = Vi(a.substr(0, c));
            c.b || (c.b = {});
            c.b[d] = b;
            b.a = c;
            Ti[a] = b
        }
        return b
    };
var Wi = function(a, b) {
        a && a.log(Ni, b, void 0)
    },
    Xi = function(a, b) {
        a && a.log(Oi, b, void 0)
    },
    Yi = function(a, b) {
        a && a.log(Pi, b, void 0)
    },
    Zi = function(a, b) {
        a && a.log(Ri, b, void 0)
    };
var $i = function(a) {
    x(0 < a, "Initial value must be greater than zero.");
    x(3E5 >= a, "Max value should be at least as large as initial value.");
    p(.1) && x(!0, "Randomness factor should be between 0 and 1.");
    p(void 0) && x(!1, "Backoff factor should be greater than 1");
    p(void 0) && x(!1, "Decay factor should be greater than 1");
    this.a = this.b = this.c = a
};
$i.prototype.reset = function() {
    this.a = this.b = this.c
};
$i.prototype.Z = function() {
    return this.b
};
var aj = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    },
    dj = function(a) {
        var b = [];
        bj(new cj, a, b);
        return b.join("")
    },
    cj = function() {},
    bj = function(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Ja(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), bj(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), ej(d, c), c.push(":"), bj(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    ej(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    },
    fj = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    },
    gj = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    ej = function(a, b) {
        b.push('"', a.replace(gj, function(c) {
            var d = fj[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), fj[c] = d);
            return d
        }), '"')
    };
var hj = function() {};
hj.prototype.a = null;
var jj = function(a) {
    var b;
    (b = a.a) || (b = {}, ij(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
    return b
};
var kj, lj = function() {};
w(lj, hj);
var mj = function(a) {
        return (a = ij(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    },
    ij = function(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.b = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    };
kj = new lj;
var nj = "StopIteration" in n ? n.StopIteration : {
        message: "StopIteration",
        stack: ""
    },
    oj = function() {};
oj.prototype.next = function() {
    throw nj;
};
oj.prototype.hc = function() {
    return this
};
var pj = function(a) {
        if (a instanceof oj) return a;
        if ("function" == typeof a.hc) return a.hc(!1);
        if (Ka(a)) {
            var b = 0,
                c = new oj;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw nj;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    },
    qj = function(a, b, c) {
        if (Ka(a)) try {
            y(a, b, c)
        } catch (d) {
            if (d !== nj) throw d;
        } else {
            a = pj(a);
            try {
                for (;;) b.call(c, a.next(), void 0, a)
            } catch (d) {
                if (d !== nj) throw d;
            }
        }
    },
    rj = function(a, b, c) {
        a = pj(a);
        try {
            for (; b.call(c, a.next(), void 0, a););
        } catch (d) {
            if (d !== nj) throw d;
        }
    };
var sj = function(a, b) {
    this.b = {};
    this.a = [];
    this.g = this.c = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a)
        if (a instanceof sj)
            for (c = a.Cb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
        else
            for (d in a) this.set(d, a[d])
};
sj.prototype.og = function() {
    return this.c
};
sj.prototype.Rb = function() {
    tj(this);
    for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
    return a
};
sj.prototype.Cb = function() {
    tj(this);
    return this.a.concat()
};
var vj = function(a, b) {
    return uj(a.b, b)
};
sj.prototype.Qc = function() {
    this.b = {};
    this.g = this.c = this.a.length = 0
};
var tj = function(a) {
    if (a.c != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length;) {
            var d = a.a[b];
            uj(a.b, d) && (a.a[c++] = d);
            b++
        }
        a.a.length = c
    }
    if (a.c != a.a.length) {
        var e = {};
        for (c = b = 0; b < a.a.length;) d = a.a[b], uj(e, d) || (a.a[c++] = d, e[d] = 1), b++;
        a.a.length = c
    }
};
sj.prototype.get = function(a, b) {
    return uj(this.b, a) ? this.b[a] : b
};
sj.prototype.set = function(a, b) {
    uj(this.b, a) || (this.c++, this.a.push(a), this.g++);
    this.b[a] = b
};
sj.prototype.forEach = function(a, b) {
    for (var c = this.Cb(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this)
    }
};
sj.prototype.hc = function(a) {
    tj(this);
    var b = 0,
        c = this.g,
        d = this,
        e = new oj;
    e.next = function() {
        if (c != d.g) throw Error("The map has changed since the iterator was created");
        if (b >= d.a.length) throw nj;
        var f = d.a[b++];
        return a ? f : d.b[f]
    };
    return e
};
var uj = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var wj = function(a) {
        if (a.Rb && "function" == typeof a.Rb) return a.Rb();
        if (t(a)) return a.split("");
        if (Ka(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return Ob(a)
    },
    xj = function(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
        else if (Ka(a) || t(a)) y(a, b, c);
        else {
            if (a.Cb && "function" == typeof a.Cb) var d = a.Cb();
            else if (a.Rb && "function" == typeof a.Rb) d = void 0;
            else if (Ka(a) || t(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++) d.push(f)
            } else d = Pb(a);
            e = wj(a);
            f = e.length;
            for (var g = 0; g < f; g++) b.call(c,
                e[g], d && d[g], a)
        }
    };
var yj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    zj = function(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? de(e) : "")
            }
        }
    },
    Aj = function(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.substr(0, d), e, a.substr(c)];
        c = a[1];
        a[1] = b ?
            c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    },
    Bj = function(a, b, c) {
        ab(a);
        if (Ja(b)) {
            db(b);
            for (var d = 0; d < b.length; d++) Bj(a, String(b[d]), c)
        } else null != b && c.push(a + ("" === b ? "" : "=" + ce(b)))
    },
    Cj = function(a, b) {
        x(0 == Math.max(a.length - (b || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
        var c = [];
        for (b = b || 0; b < a.length; b += 2) Bj(a[b], a[b + 1], c);
        return c.join("&")
    },
    Dj = function(a) {
        var b = [],
            c;
        for (c in a) Bj(c, a[c], b);
        return b.join("&")
    },
    Ej = function(a, b) {
        var c = 2 == arguments.length ? Cj(arguments[1],
            0) : Cj(arguments, 1);
        return Aj(a, c)
    },
    Fj = function(a, b, c) {
        c = null != c ? "=" + ce(c) : "";
        return Aj(a, b + c)
    },
    Gj = function(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    },
    Hj = /#|$/,
    Ij = function() {
        var a = n.location.href,
            b = a.search(Hj),
            c = Gj(a, 0, "authuser", b);
        if (0 > c) return null;
        var d = a.indexOf("&", c);
        if (0 > d || d > b) d = b;
        c += 9;
        return de(a.substr(c, d - c))
    },
    Jj = /[?&]($|#)/,
    Kj = function(a, b) {
        x(0 > a.indexOf("#") &&
            0 > a.indexOf("?"), "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", a);
        wc(a, "/") && (a = a.substr(0, a.length - 1));
        vc(b, "/") && (b = b.substr(1));
        return me(a, "/", b)
    };
var Lj = function(a) {
    K.call(this);
    this.headers = new sj;
    this.Rf = a || null;
    this.Hb = !1;
    this.Qf = this.Aa = null;
    this.pi = this.Rd = "";
    this.wd = 0;
    this.Ee = "";
    this.vd = this.Hg = this.Cf = this.hg = !1;
    this.Wd = 0;
    this.Mf = null;
    this.Hi = "";
    this.Pf = this.Ke = !1
};
w(Lj, K);
Lj.prototype.F = Vi("goog.net.XhrIo");
var Mj = /^https?$/i,
    Nj = ["POST", "PUT"],
    Oj = [],
    Pj = function(a, b, c, d, e, f, g) {
        var h = new Lj;
        Oj.push(h);
        b && h.O("complete", b);
        h.Og("ready", h.Tj);
        f && (h.Wd = Math.max(0, f));
        g && (h.Ke = g);
        h.send(a, c, d, e);
        return h
    };
Lj.prototype.Tj = function() {
    this.La();
    vb(Oj, this)
};
Lj.prototype.send = function(a, b, c, d) {
    if (this.Aa) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Rd + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Rd = a;
    this.Ee = "";
    this.wd = 0;
    this.pi = b;
    this.hg = !1;
    this.Hb = !0;
    this.Aa = this.Rf ? mj(this.Rf) : mj(kj);
    this.Qf = this.Rf ? jj(this.Rf) : jj(kj);
    this.Aa.onreadystatechange = v(this.Di, this);
    try {
        Zi(this.F, Rj(this, "Opening Xhr")), this.Hg = !0, this.Aa.open(b, String(a), !0), this.Hg = !1
    } catch (f) {
        Zi(this.F, Rj(this, "Error opening Xhr: " + f.message));
        this.$e(5,
            f);
        return
    }
    a = c || "";
    var e = new sj(this.headers);
    d && xj(d, function(f, g) {
        e.set(g, f)
    });
    d = qb(e.Cb(), Sj);
    c = n.FormData && a instanceof n.FormData;
    !sb(Nj, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(f, g) {
        this.Aa.setRequestHeader(g, f)
    }, this);
    this.Hi && (this.Aa.responseType = this.Hi);
    "withCredentials" in this.Aa && this.Aa.withCredentials !== this.Ke && (this.Aa.withCredentials = this.Ke);
    try {
        Tj(this), 0 < this.Wd && (this.Pf = Uj(this.Aa), Zi(this.F, Rj(this, "Will abort after " +
            this.Wd + "ms if incomplete, xhr2 " + this.Pf)), this.Pf ? (this.Aa.timeout = this.Wd, this.Aa.ontimeout = v(this.bd, this)) : this.Mf = Bi(this.bd, this.Wd, this)), Zi(this.F, Rj(this, "Sending request")), this.Cf = !0, this.Aa.send(a), this.Cf = !1
    } catch (f) {
        Zi(this.F, Rj(this, "Send error: " + f.message)), this.$e(5, f)
    }
};
var Uj = function(a) {
        return B && Re(9) && ya(a.timeout) && p(a.ontimeout)
    },
    Sj = function(a) {
        return "content-type" == a.toLowerCase()
    };
Lj.prototype.bd = function() {
    "undefined" != typeof xa && this.Aa && (this.Ee = "Timed out after " + this.Wd + "ms, aborting", this.wd = 8, Zi(this.F, Rj(this, this.Ee)), this.dispatchEvent("timeout"), this.abort(8))
};
Lj.prototype.$e = function(a, b) {
    this.Hb = !1;
    this.Aa && (this.vd = !0, this.Aa.abort(), this.vd = !1);
    this.Ee = b;
    this.wd = a;
    Vj(this);
    Wj(this)
};
var Vj = function(a) {
    a.hg || (a.hg = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
};
Lj.prototype.abort = function(a) {
    this.Aa && this.Hb && (Zi(this.F, Rj(this, "Aborting")), this.Hb = !1, this.vd = !0, this.Aa.abort(), this.vd = !1, this.wd = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Wj(this))
};
Lj.prototype.W = function() {
    this.Aa && (this.Hb && (this.Hb = !1, this.vd = !0, this.Aa.abort(), this.vd = !1), Wj(this, !0));
    Lj.D.W.call(this)
};
Lj.prototype.Di = function() {
    this.lc || (this.Hg || this.Cf || this.vd ? Xj(this) : this.Gm())
};
Lj.prototype.Gm = function() {
    Xj(this)
};
var Xj = function(a) {
        if (a.Hb && "undefined" != typeof xa)
            if (a.Qf[1] && 4 == Yj(a) && 2 == a.Mc()) Zi(a.F, Rj(a, "Local request error detected and ignored"));
            else if (a.Cf && 4 == Yj(a)) Bi(a.Di, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == Yj(a)) {
            Zi(a.F, Rj(a, "Request complete"));
            a.Hb = !1;
            try {
                if (Zj(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    a.wd = 6;
                    try {
                        var b = 2 < Yj(a) ? a.Aa.statusText : ""
                    } catch (c) {
                        Zi(a.F, "Can not get status: " + c.message), b = ""
                    }
                    a.Ee = b + " [" + a.Mc() + "]";
                    Vj(a)
                }
            } finally {
                Wj(a)
            }
        }
    },
    Wj = function(a,
        b) {
        if (a.Aa) {
            Tj(a);
            var c = a.Aa,
                d = a.Qf[0] ? Fa : null;
            a.Aa = null;
            a.Qf = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                Wi(a.F, "Problem encountered resetting onreadystatechange: " + e.message)
            }
        }
    },
    Tj = function(a) {
        a.Aa && a.Pf && (a.Aa.ontimeout = null);
        a.Mf && (Ci(a.Mf), a.Mf = null)
    };
Lj.prototype.kb = function() {
    return !!this.Aa
};
var Zj = function(a) {
        var b = a.Mc();
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.Rd).match(yj)[1] || null, !a && n.self && n.self.location && (a = n.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Mj.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    },
    Yj = function(a) {
        return a.Aa ? a.Aa.readyState : 0
    };
Lj.prototype.Mc = function() {
    try {
        return 2 < Yj(this) ? this.Aa.status : -1
    } catch (a) {
        return -1
    }
};
var ak = function(a) {
        try {
            return a.Aa ? a.Aa.responseText : ""
        } catch (b) {
            return Zi(a.F, "Can not get responseText: " + b.message), ""
        }
    },
    bk = function(a) {
        if (a.Aa) {
            a: {
                a = a.Aa.responseText;
                if (n.JSON) try {
                    var b = n.JSON.parse(a);
                    x("object" == typeof b);
                    var c = b;
                    break a
                } catch (d) {}
                c = aj(a)
            }
            return c
        }
    };
Lj.prototype.getResponseHeader = function(a) {
    if (this.Aa && 4 == Yj(this)) return a = this.Aa.getResponseHeader(a), null === a ? void 0 : a
};
Lj.prototype.getAllResponseHeaders = function() {
    return this.Aa && 4 == Yj(this) ? this.Aa.getAllResponseHeaders() || "" : ""
};
var Rj = function(a, b) {
    return b + " [" + a.pi + " " + a.Rd + " " + a.Mc() + "]"
};
var ck = function(a, b, c) {
    Pj(a.url, function(d) {
        d = d.target;
        Zj(d) ? b(ak(d)) : c(d.Mc())
    }, a.b, a.body, a.a, a.c, a.withCredentials)
};
var dk = function(a) {
    hf(this, a, -1, null)
};
w(dk, df);
var ek = function(a) {
    hf(this, a, -1, null)
};
w(ek, df);
var gk = function(a) {
    hf(this, a, -1, fk)
};
w(gk, df);
var fk = [2];
var ik = function(a) {
    hf(this, a, 29, hk)
};
w(ik, df);
var hk = [3, 20, 27];
var kk = function(a) {
    hf(this, a, 17, jk)
};
w(kk, df);
var jk = [3, 5],
    lk = function(a) {
        var b = Ua().toString();
        C(a, 4, b)
    };
var nk = function(a) {
    hf(this, a, 6, mk)
};
w(nk, df);
var mk = [5];
var ok = function(a) {
    hf(this, a, -1, null)
};
w(ok, df);
var pk = new function() {
    this.a = ok
};
var rk = function(a, b, c, d, e, f, g, h, l, m) {
    K.call(this);
    this.aa = a;
    this.N = b || Fa;
    this.h = new kk;
    this.ba = d;
    this.a = [];
    this.T = "";
    this.sa = Ta(Cf, 0, 1);
    this.G = e || null;
    this.m = c || null;
    this.C = g || !1;
    this.K = l || null;
    this.X = this.na = !1;
    this.V = this.R = -1;
    this.c = null;
    this.F = Vi("playlog.clearcut.ClearcutBase");
    this.Ke = !h;
    this.L = 0;
    this.Na = 1;
    this.Y = f || !1;
    a = new ek;
    C(a, 1, 1);
    f || (f = new dk, b = document.documentElement.getAttribute("lang"), C(f, 5, b), mf(a, 11, f));
    mf(this.h, 1, a);
    C(this.h, 2, this.aa);
    this.g = new $i(1E4);
    this.b = new zi(this.g.Z());
    Jg(this, this.b);
    H(this.b, "tick", Kb(qk(this, m)), !1, this);
    this.w = new zi(6E5);
    Jg(this, this.w);
    H(this.w, "tick", Kb(qk(this, m)), !1, this);
    this.C || this.w.start();
    this.Y || (H(Uf(), "beforeunload", this.o, !1, this), H(Uf(), "unload", this.o, !1, this), H(document, "pagehide", this.o, !1, this))
};
w(rk, K);
var qk = function(a, b) {
    return b ? function() {
        b().then(a.flush.bind(a))
    } : a.flush
};
rk.prototype.W = function() {
    this.o();
    rk.D.W.call(this)
};
var sk = function(a) {
    a.G || (a.G = .01 > a.sa() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
    return a.G
};
rk.prototype.log = function(a) {
    a = sf(a);
    var b = this.Na++;
    C(a, 21, b);
    if (!jf(a, 1)) {
        b = a;
        var c = Ua().toString();
        C(b, 1, c)
    }
    this.c && (b = sf(this.c), mf(a, 16, b));
    for (; 1E3 <= this.a.length;) this.a.shift(), ++this.L;
    this.a.push(a);
    this.dispatchEvent(new tk(a));
    this.C || this.b.enabled || this.b.start()
};
rk.prototype.flush = function(a, b) {
    if (0 == this.a.length) a && a();
    else {
        var c = Ua();
        if (this.V > c && this.R < c) Yi(this.F, "Not flushing because server requested delay."), b && b("throttled");
        else {
            var d = sf(this.h);
            lk(d);
            nf(d, 3, this.a);
            C(d, 14, this.L);
            c = {};
            var e = this.N();
            e && (c.Authorization = e);
            var f = sk(this);
            this.m && (c["X-Goog-AuthUser"] = this.m, f = Fj(f, "authuser", this.m));
            this.K && (c["X-Goog-PageId"] = this.K, f = Fj(f, "pageId", this.K));
            if (e && this.T == e) Yi(this.F, "XHR with unauthorized request not retried"), b && b("stale-auth-token");
            else {
                Yi(this.F, "Flushing log to clearcut.");
                this.a = [];
                this.b.enabled && this.b.stop();
                this.L = 0;
                var g = d.o();
                c = {
                    url: f,
                    body: g,
                    g: 1,
                    a: c,
                    b: "POST",
                    withCredentials: this.Ke,
                    c: 0
                };
                f = v(function(h) {
                    this.g.reset();
                    Ai(this.b, this.g.Z());
                    if (h) {
                        try {
                            var l = JSON.parse(h.replace(")]}'\n", ""));
                            var m = new nk(l)
                        } catch (q) {
                            Xi(this.F, "Response parse failed: " + q)
                        }
                        m && (h = kf(m, "-1"), h = Number(h), 0 < h && (this.R = Ua(), this.V = this.R + h), m.c ? (m.a || (m.a = {}), pk.a ? (!m.a[175237375] && m.c[175237375] && (m.a[175237375] = new pk.a(m.c[175237375])), m =
                            m.a[175237375]) : m = m.c[175237375]) : m = void 0, m && (m = kf(m, -1), -1 != m && (this.g = new $i(1 > m ? 1 : m), Ai(this.b, this.g.Z()))))
                    }
                    a && a()
                }, this);
                g = v(function(h) {
                    lf(d, ik, 3);
                    var l = d.a[3];
                    l == ff && (l = d.a[3] = []);
                    var m = this.g;
                    m.a = Math.min(3E5, 2 * m.a);
                    m.b = Math.min(3E5, m.a + Math.round(.2 * (Math.random() - .5) * m.a));
                    Ai(this.b, this.g.Z());
                    401 == h && e && (this.T = e);
                    if (500 <= h && 600 > h || 401 == h || 0 == h) this.a = l.concat(this.a), this.C || this.b.enabled || this.b.start();
                    Xi(this.F, "Flush failed. Status code: " + h);
                    b && b("net-send-failed", h)
                }, this);
                this.ba(c,
                    f, g)
            }
        }
    }
};
rk.prototype.o = function() {
    this.na && uk(this);
    this.X && vk(this);
    this.flush()
};
var uk = function(a) {
        Yi(a.F, "Flushing log using sendBeacon.");
        wk(a, 32, 10, function(b, c) {
            b = Fj(b, "format", "json");
            return Uf().navigator.sendBeacon(b, c.o())
        })
    },
    vk = function(a) {
        Yi(a.F, "Flushing log using Image GET.");
        wk(a, 6, 5, function(b, c) {
            c = c.o();
            for (var d = [], e = 0, f = 0; f < c.length; f++) {
                var g = c.charCodeAt(f);
                255 < g && (d[e++] = g & 255, g >>= 8);
                d[e++] = g
            }
            c = cf(d, !0);
            c = Ej(b, "format", "base64json", "p", c);
            b = new Image;
            Gb(b, "HTMLImageElement");
            c = c instanceof Nc ? c : Vc(c, /^data:image\//i.test(c));
            b.src = Oc(c);
            return !0
        })
    },
    wk = function(a,
        b, c, d) {
        if (0 != a.a.length) {
            var e = sk(a);
            for (var f = e.search(Hj), g = 0, h, l = []; 0 <= (h = Gj(e, g, "format", f));) l.push(e.substring(g, h)), g = Math.min(e.indexOf("&", h) + 1 || f, f);
            l.push(e.substr(g));
            e = l.join("").replace(Jj, "$1");
            e = Ej(e, "auth", a.N(), "authuser", a.m || "0");
            for (f = 0; f < c && a.a.length; ++f) {
                g = a.a.slice(0, b);
                h = sf(a.h);
                lk(h);
                nf(h, 3, g);
                if (!d(e, h)) break;
                a.a = a.a.slice(g.length)
            }
        }
    },
    tk = function() {
        this.type = "event-logged"
    };
w(tk, Kg);
var xk = function(a, b, c, d, e, f, g) {
    rk.call(this, a, Ii, b, ck, c, d, e, void 0, f, g)
};
w(xk, rk);
var yk = function(a, b) {
    this.a = new xk(375, a, void 0, !1, !0);
    Jg(this, this.a);
    this.a.na = !!Uf().navigator.sendBeacon && (Ze || Ve && Re(45));
    this.a.X = !0;
    b && 0 < b.length && (a = new uf, C(a, 3, b || []), b = this.a, a ? (b.c || (b.c = new gk), a = a.o(), C(b.c, 4, a)) : b.c && C(b.c, 4, void 0));
    this.g = 0;
    this.b = new zi(1E3);
    Jg(this, this.b);
    H(this.b, "tick", this.c, !1, this);
    this.b.start()
};
w(yk, K);
yk.prototype.W = function() {
    this.b.stop();
    nh(this.b, "tick", this.c, !1, this);
    this.c();
    yk.D.W.call(this)
};
yk.prototype.c = function() {
    0 < this.g && this.a.flush(v(this.h, this))
};
yk.prototype.h = function() {
    this.g = 0
};
yk.prototype.log = function(a) {
    this.a.log(a);
    900 <= ++this.g && this.c()
};
var zk = function(a) {
        return (a = a.exec(qd)) ? a[1] : ""
    },
    Ak = function() {
        if (Ve) return zk(/Firefox\/([0-9.]+)/);
        if (B || xe || we) return Pe;
        if (Ze) return re() ? zk(/CriOS\/([0-9.]+)/) : zk(/Chrome\/([0-9.]+)/);
        if ($e && !re()) return zk(/Version\/([0-9.]+)/);
        if (We || Xe) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(qd);
            if (a) return a[1] + "." + a[2]
        } else if (Ye) return (a = zk(/Android\s+([0-9.]+)/)) ? a : zk(/Version\/([0-9.]+)/);
        return ""
    }(),
    Bk = function(a) {
        return 0 <= Lc(Ak, a)
    };
var Ck = function() {
    this.a = B ? Bk(9) : Ze && Bk(25) || B && Bk(8) || xe || Ve && Bk(19) || we && Bk(12.1) || $e && Bk(5.1) || Xe && Bk(3.2) || Ye && Bk(2.1)
};
Ga(Ck);
var Fk = function(a, b) {
        var c = Dk[b];
        b = Ek[b];
        c = null != c ? yb(c) : [];
        if (a.a && null != b)
            for (a = 0; a < b.length; a++) c.push(b[a]);
        return c
    },
    Ik = function(a) {
        return 0 <= a.indexOf("-i0-") && !Gk(a)
    },
    Gk = function(a) {
        return 0 <= a.indexOf("-i0-handwrit")
    },
    Dk = {
        af: ["latn-002-t-k0-und"],
        am: ["am-t-i0-und", "und-ethi-t-k0-und"],
        ar: ["ar-t-i0-und", "ar-t-k0-und"],
        be: ["be-t-i0-und", "be-t-k0-und"],
        bg: ["bg-t-i0-und", "bg-t-k0-und", "bg-t-k0-qwerty"],
        bn: ["bn-t-i0-und", "bn-t-k0-und", "bn-t-und-latn-k0-und"],
        bs: ["bs-t-k0-und"],
        ca: ["ca-t-k0-und"],
        chr: ["chr-t-k0-und", "chr-t-und-latn-k0-und"],
        cs: ["cs-t-k0-und", "cs-t-k0-qwertz"],
        cy: ["latn-002-t-k0-und"],
        da: ["da-t-k0-und"],
        de: ["de-t-k0-und", "de-ch-t-k0-und", "en-us-t-k0-intl"],
        el: ["el-t-i0-und", "el-t-k0-und"],
        en: ["en-t-k0-und", "en-t-k0-dvorak"],
        es: ["es-t-k0-und", "en-us-t-k0-intl"],
        et: ["et-t-k0-und"],
        eu: ["eu-t-k0-und"],
        fa: ["fa-t-i0-und", "fa-t-k0-und"],
        fi: ["fi-t-k0-und"],
        fr: ["fr-t-k0-und", "en-us-t-k0-intl"],
        ga: ["latn-002-t-k0-und"],
        gl: ["gl-t-k0-und"],
        gu: ["gu-t-i0-und", "gu-t-k0-und", "gu-t-und-latn-k0-qwerty"],
        ha: ["latn-002-t-k0-und"],
        hi: ["hi-t-i0-und", "hi-t-k0-und", "hi-t-k0-qwerty"],
        hr: ["hr-t-k0-und"],
        ht: ["fr-t-k0-und"],
        hu: ["hu-t-k0-101key"],
        hy: ["hy-hyr-t-k0-und", "hy-hyt-t-k0-und"],
        id: ["latn-002-t-k0-und"],
        ig: ["latn-002-t-k0-und"],
        is: ["is-t-k0-und"],
        it: ["it-t-k0-und", "en-us-t-k0-intl"],
        iw: ["he-t-i0-und", "he-t-k0-und"],
        jw: ["latn-002-t-k0-und"],
        ja: ["ja-t-ja-hira-i0-und"],
        ka: ["ka-t-k0-und", "ka-t-k0-legacy"],
        kk: ["kk-t-k0-und"],
        km: ["km-t-k0-und"],
        kn: ["kn-t-i0-und", "kn-t-k0-und", "kn-t-und-latn-k0-und"],
        ko: ["ko-t-k0-und"],
        ku: ["ku-t-k0-und"],
        ky: ["ky-cyrl-t-k0-und"],
        lb: ["fr-t-k0-und", "en-us-t-k0-intl"],
        lo: ["lo-t-k0-und"],
        lt: ["lt-t-k0-und"],
        lv: ["lv-t-k0-und"],
        mg: ["latn-002-t-k0-und"],
        mi: ["mi-t-k0-und"],
        mk: ["mk-t-k0-und"],
        ml: ["ml-t-i0-und", "ml-t-und-latn-k0-und", "ml-t-k0-und"],
        mn: ["mn-cyrl-t-k0-und"],
        mr: ["mr-t-i0-und", "hi-t-k0-qwerty"],
        ms: ["latn-002-t-k0-und"],
        mt: ["mt-t-k0-und"],
        my: ["my-t-k0-und", "my-t-k0-myansan"],
        ne: ["ne-t-i0-und", "ne-t-k0-und", "ne-t-und-latn-k0-und"],
        nl: ["nl-t-k0-und", "en-us-t-k0-intl"],
        no: ["no-t-k0-und"],
        ny: ["latn-002-t-k0-und"],
        pa: ["pa-t-i0-und", "pa-guru-t-und-latn-k0-und", "pa-guru-t-k0-und"],
        pl: ["pl-t-k0-und"],
        ps: ["ps-t-k0-und"],
        pt: ["pt-br-t-k0-und", "pt-pt-t-k0-und", "en-us-t-k0-intl"],
        ro: ["ro-t-k0-und", "ro-t-k0-legacy", "ro-t-k0-extended"],
        ru: ["ru-t-i0-und", "ru-t-k0-und"],
        rw: ["latn-002-t-k0-und"],
        sd: ["sd-t-k0-und"],
        si: ["si-t-i0-und", "si-t-k0-und"],
        sk: ["sk-t-k0-und", "sk-t-k0-qwerty"],
        sl: ["sl-t-k0-und"],
        sn: ["latn-002-t-k0-und"],
        so: ["latn-002-t-k0-und"],
        sq: ["sq-t-k0-und"],
        sr: ["sr-t-i0-und", "sr-cyrl-t-k0-und",
            "sr-latn-t-k0-und"
        ],
        st: ["latn-002-t-k0-und"],
        su: ["latn-002-t-k0-und"],
        sv: ["sv-t-k0-und"],
        sw: ["latn-002-t-k0-und"],
        ta: "ta-t-i0-und ta-t-k0-ta99 ta-t-und-latn-k0-und ta-t-k0-und ta-t-k0-typewriter ta-t-k0-itrans".split(" "),
        te: ["te-t-i0-und", "te-t-k0-und", "te-t-und-latn-k0-und"],
        tg: ["tg-t-k0-und"],
        th: ["th-t-i0-und", "th-t-k0-und", "th-t-k0-pattajoti", "th-t-k0-tis"],
        tk: ["latn-002-t-k0-und"],
        tl: ["latn-002-t-k0-und"],
        tr: ["tr-t-k0-und", "tr-t-k0-legacy"],
        tt: ["tt-t-k0-und"],
        ug: ["ug-t-k0-und"],
        uk: ["uk-t-i0-und",
            "uk-t-k0-101key"
        ],
        ur: ["ur-t-i0-und", "ur-t-k0-und"],
        uz: ["uz-latn-t-k0-und", "uz-cyrl-t-k0-und", "uz-cyrl-t-k0-legacy"],
        vi: ["vi-t-i0-und", "vi-t-k0-legacy", "vi-t-k0-viqr", "vi-t-k0-und", "vi-t-k0-vni"],
        wo: ["latn-002-t-k0-und"],
        xh: ["latn-002-t-k0-und"],
        yi: ["yi-t-k0-und"],
        yo: ["latn-002-t-k0-und"],
        yue: ["yue-hant-t-i0-und", "zh-hant-t-i0-cangjie-1982"],
        zu: ["latn-002-t-k0-und"],
        "zh-CN": "zh-t-i0-pinyin zh-t-i0-wubi-1986 zh-hant-t-i0-und zh-hant-t-i0-cangjie-1982 zh-hant-t-i0-pinyin yue-hant-t-i0-und".split(" "),
        "zh-TW": ["zh-hant-t-i0-und", "zh-hant-t-i0-cangjie-1982", "zh-hant-t-i0-pinyin", "yue-hant-t-i0-und"]
    },
    Ek = {
        af: ["af-t-i0-handwrit"],
        am: ["am-t-i0-handwrit"],
        ar: ["ar-t-i0-handwrit"],
        auto: ["mul-t-i0-handwrit"],
        az: ["az-t-i0-handwrit"],
        be: ["be-t-i0-handwrit"],
        bg: ["bg-t-i0-handwrit"],
        bn: ["bn-t-i0-handwrit"],
        bs: ["bs-t-i0-handwrit"],
        ca: ["ca-t-i0-handwrit"],
        ceb: ["ceb-t-i0-handwrit"],
        co: ["co-t-i0-handwrit"],
        cs: ["cs-t-i0-handwrit"],
        cy: ["cy-t-i0-handwrit"],
        da: ["da-t-i0-handwrit"],
        de: ["de-t-i0-handwrit"],
        el: ["el-t-i0-handwrit"],
        en: ["en-t-i0-handwrit"],
        eo: ["eo-t-i0-handwrit"],
        es: ["es-t-i0-handwrit"],
        et: ["et-t-i0-handwrit"],
        eu: ["eu-t-i0-handwrit"],
        fa: ["fa-t-i0-handwrit"],
        fi: ["fi-t-i0-handwrit"],
        fr: ["fr-t-i0-handwrit"],
        fy: ["fy-t-i0-handwrit"],
        ga: ["ga-t-i0-handwrit"],
        gd: ["gd-t-i0-handwrit"],
        gl: ["gl-t-i0-handwrit"],
        gu: ["gu-t-i0-handwrit"],
        haw: ["haw-t-i0-handwrit"],
        hi: ["hi-t-i0-handwrit"],
        hmn: ["hmn-t-i0-handwrit"],
        hr: ["hr-t-i0-handwrit"],
        ht: ["ht-t-i0-handwrit"],
        hu: ["hu-t-i0-handwrit"],
        hy: ["hy-t-i0-handwrit"],
        id: ["id-t-i0-handwrit"],
        is: ["is-t-i0-handwrit"],
        it: ["it-t-i0-handwrit"],
        iw: ["he-t-i0-handwrit"],
        ja: ["ja-t-i0-handwrit"],
        jv: ["jv-t-i0-handwrit"],
        ka: ["ka-t-i0-handwrit"],
        kk: ["kk-t-i0-handwrit"],
        km: ["km-t-i0-handwrit"],
        kn: ["kn-t-i0-handwrit"],
        ko: ["ko-t-i0-handwrit"],
        ku: ["ku-t-i0-handwrit"],
        ky: ["ky-t-i0-handwrit"],
        la: ["la-t-i0-handwrit"],
        lb: ["lb-t-i0-handwrit"],
        lo: ["lo-t-i0-handwrit"],
        lt: ["lt-t-i0-handwrit"],
        lv: ["lv-t-i0-handwrit"],
        mg: ["mg-t-i0-handwrit"],
        mi: ["mi-t-i0-handwrit"],
        mk: ["mk-t-i0-handwrit"],
        ml: ["ml-t-i0-handwrit"],
        mn: ["mn-t-i0-handwrit"],
        mr: ["mr-t-i0-handwrit"],
        ms: ["ms-t-i0-handwrit"],
        mt: ["mt-t-i0-handwrit"],
        my: ["my-t-i0-handwrit"],
        ne: ["ne-t-i0-handwrit"],
        nl: ["nl-t-i0-handwrit"],
        no: ["no-t-i0-handwrit"],
        ny: ["ny-t-i0-handwrit"],
        pa: ["pa-t-i0-handwrit"],
        pl: ["pl-t-i0-handwrit"],
        pt: ["pt-t-i0-handwrit"],
        ro: ["ro-t-i0-handwrit"],
        ru: ["ru-t-i0-handwrit"],
        si: ["si-t-i0-handwrit"],
        sk: ["sk-t-i0-handwrit"],
        sl: ["sl-t-i0-handwrit"],
        sm: ["sm-t-i0-handwrit"],
        sn: ["sn-t-i0-handwrit"],
        so: ["so-t-i0-handwrit"],
        sq: ["sq-t-i0-handwrit"],
        sr: ["sr-t-i0-handwrit"],
        su: ["su-t-i0-handwrit"],
        sv: ["sv-t-i0-handwrit"],
        sw: ["sw-t-i0-handwrit"],
        ta: ["ta-t-i0-handwrit"],
        te: ["te-t-i0-handwrit"],
        tg: ["tg-t-i0-handwrit"],
        th: ["th-t-i0-handwrit"],
        tl: ["fil-t-i0-handwrit"],
        tr: ["tr-t-i0-handwrit"],
        uk: ["uk-t-i0-handwrit"],
        ur: ["ur-t-i0-handwrit"],
        uz: ["uz-t-i0-handwrit"],
        vi: ["vi-t-i0-handwrit"],
        xh: ["xh-t-i0-handwrit"],
        "zh-CN": ["zh-t-i0-handwrit"],
        zu: ["zu-t-i0-handwrit"]
    };
var Jk = function(a) {
    hf(this, a, -1, null)
};
w(Jk, df);
Jk.prototype.Id = function() {
    return jf(this, 1)
};
Jk.prototype.jb = function() {
    return jf(this, 4)
};
var Kk = function(a) {
    hf(this, a, -1, null)
};
w(Kk, df);
var Lk = function(a) {
    hf(this, a, -1, null)
};
w(Lk, df);
var Mk = function(a) {
    hf(this, a, -1, null)
};
w(Mk, df);
var Ok = function(a) {
    hf(this, a, -1, Nk)
};
w(Ok, df);
var Nk = [1];
var Pk = function(a) {
    hf(this, a, -1, null)
};
w(Pk, df);
var Qk = function(a) {
    hf(this, a, -1, null)
};
w(Qk, df);
var Rk = function(a) {
    hf(this, a, -1, null)
};
w(Rk, df);
var Sk = function(a) {
    hf(this, a, -1, null)
};
w(Sk, df);
var Tk = function(a) {
    hf(this, a, -1, null)
};
w(Tk, df);
Tk.prototype.Va = function() {
    return jf(this, 1)
};
var Uk = function(a) {
    hf(this, a, -1, null)
};
w(Uk, df);
var Wk = function(a) {
    hf(this, a, -1, Vk)
};
w(Wk, df);
var Vk = [1, 3, 4];
var Xk = function(a) {
    hf(this, a, -1, null)
};
w(Xk, df);
var Yk = function(a) {
    hf(this, a, -1, null)
};
w(Yk, df);
Yk.prototype.Jb = function() {
    return jf(this, 1)
};
var Zk = function(a) {
    hf(this, a, -1, null)
};
w(Zk, df);
var al = function(a) {
    hf(this, a, -1, $k)
};
w(al, df);
var $k = [1];
al.prototype.jb = function() {
    return jf(this, 5)
};
var bl = function(a) {
    hf(this, a, -1, null)
};
w(bl, df);
var dl = function(a) {
    hf(this, a, -1, cl)
};
w(dl, df);
var cl = [2];
var el = function(a) {
    hf(this, a, -1, null)
};
w(el, df);
var fl = function(a) {
    hf(this, a, -1, null)
};
w(fl, df);
var gl = function(a) {
    hf(this, a, -1, null)
};
w(gl, df);
var hl = function(a) {
    hf(this, a, -1, null)
};
w(hl, df);
var jl = function(a) {
    hf(this, a, -1, il)
};
w(jl, df);
var il = [3, 4];
var ll = function(a) {
    hf(this, a, -1, kl)
};
w(ll, df);
var kl = [3];
var nl = function(a) {
    hf(this, a, -1, ml)
};
w(nl, df);
var ml = [2];
var pl = function(a) {
    hf(this, a, -1, ol)
};
w(pl, df);
var ol = [26, 80];
pl.prototype.ue = function() {
    return jf(this, 1)
};
var ql = function() {
        this.h = 0;
        this.G = this.o = this.g = this.c = this.w = "";
        this.m = this.b = this.C = 0;
        Ck.M();
        this.a = null
    },
    rl = {
        bh: 27,
        btn: 1,
        clks: 2,
        clkt: 3,
        pb: 4,
        sel: 5,
        selalt: 6,
        tws_confirm: 7,
        tws_lsugg: 8,
        tws_revert: 9,
        tws_spell: 10,
        is: 11
    };
Ga(ql);
var sl = function() {
        var a = DATA.DisplayLanguage,
            b = ql.M();
        b.h = 2;
        b.w = a;
        return b
    },
    tl = function(a) {
        var b = 0;
        0 <= a.indexOf("-k0-") ? b = 2 : Ik(a) ? b = 1 : Gk(a) && (b = 5);
        return b
    },
    ul = function(a, b) {
        t(b) && (b = rl[b], b = null != b ? b : 0);
        a.C = b
    };
ql.prototype.store = function(a) {
    C(a, 65, this.h);
    C(a, 16, this.c);
    C(a, 14, this.o);
    C(a, 1, this.g);
    C(a, 50, this.w);
    C(a, 52, this.G);
    C(a, 32, this.b)
};
new ArrayBuffer(0);
var wl = function(a, b) {
        var c = a[b - 1];
        if (null == c || vl(c)) a = a[a.length - 1], vl(a) && (c = a[b]);
        return c
    },
    vl = function(a) {
        return Ma(a) && !Ka(a)
    },
    xl = function(a, b) {
        a[b] || (a[b] = []);
        return a[b]
    };
var zl = function(a, b) {
        return a === b ? !0 : ob(a, function(c, d) {
            if (vl(c)) {
                d = cb(c);
                for (var e in d) {
                    c = d[e];
                    var f = wl(b, +e);
                    if (!yl(c, f)) return !1
                }
                return !0
            }
            e = wl(b, d + 1);
            return yl(c, e)
        }) && ob(b, function(c, d) {
            if (vl(c)) {
                c = cb(c);
                for (var e in c)
                    if (null == wl(a, +e)) return !1;
                return !0
            }
            return null == c == (null == wl(a, d + 1))
        })
    },
    yl = function(a, b) {
        return a === b || null == a && null == b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b) ? !0 : Ja(a) && Ja(b) ? zl(db(a), db(b)) : !1
    };
var Al = function() {},
    Bl = function(a, b, c) {
        a = a.Ra = b = b || [];
        if (a.length) {
            var d = a.length - 1;
            b = a[d];
            if (vl(b) && (delete a[d], d < c)) {
                d = 0;
                for (var e in b) {
                    var f = +e;
                    f <= c ? (a[f - 1] = b[e], delete b[e]) : d++
                }
                d && (a[c] = b)
            }
        }
    },
    Dh = function(a, b) {
        return null != a.Ra[b]
    },
    Cl = function(a, b, c) {
        a = a.Ra[b];
        return null != a ? a : c
    },
    Dl = function(a, b) {
        return !!Cl(a, b, void 0)
    },
    Hh = function(a, b) {
        return Cl(a, b, 0)
    },
    J = function(a, b, c) {
        return Cl(a, b, c || "")
    },
    Fh = function(a, b, c) {
        return xl(a.Ra, b)[c]
    },
    El = function(a, b, c) {
        return xl(a.Ra, b)[c]
    },
    Fl = function(a, b,
        c) {
        for (var d = [], e = 0; e < I(a, b); e++) d.push(new c(El(a, b, e)));
        return d
    },
    I = function(a, b) {
        return a.Ra[b] ? a.Ra[b].length : 0
    };
Al.prototype.zb = function() {
    return this.Ra
};
var Gl = function(a) {
    var b = a.a();
    a = a.Ra;
    for (var c = {}, d = 0; d < a.length; d++)
        if (void 0 !== a[d] && null !== a[d]) {
            var e = !1,
                f = void 0,
                g = void 0,
                h;
            for (h in b)
                if (g = b[h], f = h, g.H == d) {
                    e = !0;
                    break
                }
            if (e)
                if (g = x(g), g.va)
                    if (g.J)
                        for (c[f] = [], e = 0; e < a[d].length; e++) c[f].push(g.va(a[d][e]));
                    else c[f] = g.va(a[d]);
            else c[f] = a[d]
        }
    return c
};
Al.prototype.toString = function() {
    return JSON.stringify(Gl(this))
};
var Hl = function(a, b) {
    var c = [];
    a = new a(c);
    var d = hb(a, Al).a(),
        e;
    for (e in b) {
        var f = x(d[e]),
            g = b[e];
        if (f.wa)
            if (g instanceof Array) {
                var h = [];
                for (var l = 0; l < g.length; l++) h.push(f.wa(g[l]).zb())
            } else h = f.wa(g).zb();
        else h = g;
        c[f.H] = h
    }
    return a
};
var Il = function(a) {
    Bl(this, a, 1)
};
w(Il, Al);
var Jl = {
    romanization: {
        H: 0,
        J: !1
    }
};
Il.prototype.a = function() {
    return Jl
};
var Kl = function(a) {
    Bl(this, a, 3)
};
w(Kl, Al);
var Ll = {
    source_span_index: {
        H: 0,
        J: !1
    },
    target_span_index: {
        H: 1,
        J: !1
    },
    direction: {
        H: 2,
        J: !1
    }
};
Kl.prototype.a = function() {
    return Ll
};
var Ml = function(a) {
    Bl(this, a, 2)
};
w(Ml, Al);
var Nl = {
    begin: {
        H: 0,
        J: !1
    },
    end: {
        H: 1,
        J: !1
    }
};
Ml.prototype.a = function() {
    return Nl
};
var Ol = function(a) {
    Bl(this, a, 3)
};
w(Ol, Al);
var Pl = {
    source_span: {
        H: 0,
        wa: function(a) {
            return Hl(Ml, a)
        },
        va: function(a) {
            return Gl(new Ml(a))
        },
        J: !0
    },
    target_span: {
        H: 1,
        wa: function(a) {
            return Hl(Ml, a)
        },
        va: function(a) {
            return Gl(new Ml(a))
        },
        J: !0
    },
    link: {
        H: 2,
        wa: function(a) {
            return Hl(Kl, a)
        },
        va: function(a) {
            return Gl(new Kl(a))
        },
        J: !0
    }
};
Ol.prototype.a = function() {
    return Pl
};
var Ql = function(a) {
    Bl(this, a, 2)
};
w(Ql, Al);
var Rl = {
    model_path: {
        H: 0,
        J: !1
    },
    label: {
        H: 1,
        J: !1
    }
};
Ql.prototype.a = function() {
    return Rl
};
var Sl = function(a) {
    Bl(this, a, 2)
};
w(Sl, Al);
var Tl = {
    checkpoint_md5: {
        H: 0,
        J: !1
    },
    launch_doc: {
        H: 1,
        J: !1
    }
};
Sl.prototype.a = function() {
    return Tl
};
var Ul = function(a) {
    Bl(this, a, 1)
};
w(Ul, Al);
var Vl = {
    model_tracking: {
        H: 0,
        wa: function(a) {
            return Hl(Sl, a)
        },
        va: function(a) {
            return Gl(new Sl(a))
        },
        J: !1
    }
};
Ul.prototype.a = function() {
    return Vl
};
var Wl = function(a) {
    Bl(this, a, 9)
};
w(Wl, Al);
var Xl = {
    trans: {
        H: 0,
        J: !1
    },
    orig: {
        H: 1,
        J: !1
    },
    translit: {
        H: 2,
        J: !1
    },
    src_translit: {
        H: 3,
        J: !1
    },
    backend: {
        H: 4,
        J: !1
    },
    model: {
        H: 5,
        J: !0
    },
    word_alignment: {
        H: 6,
        wa: function(a) {
            return Hl(Ol, a)
        },
        va: function(a) {
            return Gl(new Ol(a))
        },
        J: !1
    },
    model_specification: {
        H: 7,
        wa: function(a) {
            return Hl(Ql, a)
        },
        va: function(a) {
            return Gl(new Ql(a))
        },
        J: !0
    },
    translation_engine_debug_info: {
        H: 8,
        wa: function(a) {
            return Hl(Ul, a)
        },
        va: function(a) {
            return Gl(new Ul(a))
        },
        J: !0
    }
};
Wl.prototype.a = function() {
    return Xl
};
Wl.prototype.Nc = function() {
    return J(this, 0)
};
var Yl = function(a) {
    Bl(this, a, 4)
};
w(Yl, Al);
var Zl = {
    gender: {
        H: 0,
        J: !1
    },
    translation: {
        H: 1,
        J: !1
    },
    sentences: {
        H: 2,
        wa: function(a) {
            return Hl(Wl, a)
        },
        va: function(a) {
            return Gl(new Wl(a))
        },
        J: !0
    },
    romanization: {
        H: 3,
        wa: function(a) {
            return Hl(Il, a)
        },
        va: function(a) {
            return Gl(new Il(a))
        },
        J: !1
    }
};
Yl.prototype.a = function() {
    return Zl
};
Yl.prototype.sb = function() {
    return J(this, 1)
};
Yl.prototype.cc = function() {
    return I(this, 2)
};
Yl.prototype.ab = function(a) {
    return new Wl(El(this, 2, a))
};
var $l = function(a) {
    Bl(this, a, 2)
};
w($l, Al);
var am = {
    gendered_translations: {
        H: 0,
        wa: function(a) {
            return Hl(Yl, a)
        },
        va: function(a) {
            return Gl(new Yl(a))
        },
        J: !0
    },
    status: {
        H: 1,
        J: !1
    }
};
$l.prototype.a = function() {
    return am
};
$l.prototype.Mc = function() {
    return Cl(this, 1, 0)
};
var L = function() {
    this.b = null;
    this.a = ql.M()
};
w(L, Hg);
Ga(L);
var bm = function(a) {
        var b = Ij() || "0";
        a.b = new yk(b, EXPERIMENT_IDS);
        Jg(a, a.b)
    },
    em = function(a, b, c, d, e) {
        b = cm(a, 237, b, void 0, void 0, void 0, e);
        if (null != c) {
            e = new Ok;
            var f = a.a.a;
            null != f && C(e, 1, f || []);
            C(e, 2, dm(c));
            mf(b, 83, e)
        }
        p(d) && 0 != d && C(b, 74, d);
        N(a, b)
    },
    fm = function(a, b, c) {
        N(a, cm(a, 190, b, c, !0, 0))
    },
    gm = function(a, b, c, d) {
        N(a, cm(a, 78, b, c, d, 0))
    },
    hm = function(a, b) {
        var c = O(a, 21),
            d = new el;
        C(d, 1, 3);
        mf(c, 56, d);
        if (null != b) {
            d = new Ok;
            var e = a.a.a;
            null != e && C(d, 1, e || []);
            C(d, 2, dm(b));
            mf(c, 83, d)
        }
        N(a, c)
    },
    im = {},
    jm = (im.st = 231, im.unst =
        232, im.sw = 229, im.lnk = 230, im),
    km = function(a, b, c) {
        var d = O(a, 148),
            e = new Lk;
        C(e, 1, b);
        c && C(e, 5, c);
        mf(d, 63, e);
        N(a, d)
    },
    lm = function(a, b) {
        b = O(a, b);
        var c = new Xk;
        C(c, 1, 1);
        mf(b, 46, c);
        N(a, b)
    },
    mm = function(a, b, c, d, e, f) {
        b = O(a, b ? 84 : 85);
        var g = new Xk;
        C(g, 1, 1);
        C(g, 2, c);
        C(g, 3, d);
        C(g, 4, e + 1);
        0 < f.length && C(g, 5, f);
        mf(b, 46, g);
        N(a, b)
    },
    om = function(a, b, c) {
        N(a, nm(a, 251, b, c))
    },
    qm = function(a, b) {
        N(a, pm(a, 71, b))
    },
    rm = function(a, b) {
        N(a, pm(a, 72, b))
    },
    sm = function(a, b) {
        var c = O(a, 244);
        C(c, 74, b);
        N(a, c)
    },
    um = function(a, b) {
        N(a, tm(a, 245, b))
    },
    vm = function(a) {
        N(a, O(a, 223))
    },
    wm = function(a) {
        var b = L.M(),
            c = O(b, 22),
            d = new el;
        C(d, 1, 3);
        C(d, 2, a);
        mf(c, 56, d);
        N(b, c)
    };
L.prototype.c = function() {
    N(this, O(this, 145))
};
var xm = function(a, b, c, d, e, f, g, h) {
        b = O(a, b);
        var l = new gl;
        C(l, 1, c);
        C(l, 4, 1);
        C(l, 7, d);
        C(l, 5, e);
        f && C(l, 8, f);
        p(g) && C(l, 6, g + 1);
        mf(b, 43, l);
        null != h && (c = new Ok, C(c, 2, dm(h)), h = a.a.a, null != h && C(c, 1, h || []), mf(b, 83, c));
        N(a, b)
    },
    ym = function(a) {
        var b = O(a, 1);
        C(b, 53, a.a.C);
        N(a, b);
        ul(a.a, 0)
    },
    zm = function(a, b, c, d) {
        b = O(a, b);
        var e = new hl;
        C(e, 1, c);
        C(e, 2, d);
        mf(b, 75, e);
        N(a, b)
    };
L.prototype.g = function() {
    N(this, O(this, 25))
};
var Am = function(a, b) {
        for (var c = O(a, 339), d = new Ok, e = 0; e < b.length; e++) {
            var f = dm(Cl(b[e], 0, 0));
            hb(d, df);
            jf(d, 1).push(f)
        }
        b = jf(d, 1);
        a.a.a = b;
        mf(c, 83, d);
        N(a, c)
    },
    O = function(a, b) {
        var c = new pl;
        a.a.store(c);
        C(c, 31, b);
        return c
    },
    cm = function(a, b, c, d, e, f, g) {
        var h = new Jk;
        C(h, 1, c);
        p(d) && C(h, 4, d);
        p(e) && C(h, 2, e);
        p(f) && 0 != f && C(h, 3, f);
        p(g) && 0 != g && C(h, 5, g);
        a = O(a, b);
        mf(a, 61, h);
        return a
    },
    Bm = function(a, b, c, d) {
        var e = new Pk;
        C(e, 1, c + 1);
        C(e, 2, d);
        a = O(a, b);
        mf(a, 60, e);
        return a
    },
    Cm = function(a, b, c, d, e, f, g, h) {
        for (var l = new Wk, m = [],
                q = 0; q < c.length; q++) {
            var r = c[q],
                u = new Qk;
            C(u, 1, r[0]);
            C(u, 2, !!r[1]);
            m.push(u)
        }
        nf(l, 1, m);
        c = new Uk;
        C(c, 1, !!d);
        mf(l, 2, c);
        d = [];
        for (c = 0; c < e.length; c++) m = new Tk, C(m, 1, e[c]), d.push(m);
        nf(l, 3, d);
        e = [];
        for (d = 0; d < f.length; d++) c = f[d], m = new Rk, C(m, 1, !!c[0]), C(m, 2, !!c[1]), e.push(m);
        nf(l, 4, e);
        g && (f = new Sk, C(f, 1, !0), mf(l, 5, f));
        0 != h && C(l, 6, h);
        a = O(a, b);
        mf(a, 66, l);
        return a
    },
    Dm = function(a, b) {
        a = O(a, b);
        b = new al;
        C(b, 1, []);
        C(b, 4, 1);
        mf(a, 59, b);
        return a
    },
    nm = function(a, b, c, d) {
        var e = new Zk;
        C(e, 1, d);
        a = O(a, b);
        C(a, 74, c);
        mf(a, 71,
            e);
        return a
    },
    pm = function(a, b, c) {
        var d = new bl;
        C(d, 1, c);
        a = O(a, b);
        mf(a, 44, d);
        return a
    },
    tm = function(a, b, c) {
        a = O(a, b);
        b = new al;
        C(b, 5, c);
        p(void 0) && C(b, 6, void 0);
        mf(a, 59, b);
        return a
    },
    N = function(a, b) {
        if (a.b) {
            var c = new ik;
            b = b.o();
            C(c, 8, b);
            a.b.log(c)
        }
    },
    dm = function(a) {
        switch (a) {
            case 2:
                return 1;
            case 1:
                return 2;
            default:
                return 0
        }
    };
var Em = function() {
    this.g = [];
    this.b = {};
    this.a = {};
    this.h = !1;
    this.Vg = 1;
    this.ie = {};
    this.c = null;
    this.o = "";
    H(window, "beforeunload", this.G, !1, this)
};
Ga(Em);
var Fm = function(a, b, c) {
        if (null == b) return "1";
        switch (Ha(b)) {
            case "string":
                return a = b, !(64 < a.length) || null != c && c || (a = a.substr(0, 64)), ce(a);
            case "number":
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case "array":
                var d = [],
                    e;
                for (e in b) d.push(Fm(a, b[e], c));
                return d.join(",");
            case "object":
                d = [];
                for (e in b) d.push(Gm(a, e, b[e], c));
                return d.join(",");
            default:
                return ""
        }
    },
    Gm = function(a, b, c, d) {
        return [ce(b), Fm(a, c, d || "smtalt" == b)].join("=")
    };
Em.prototype.log = function(a, b) {
    this.g.push([a, b]);
    this.h || (this.h = !0, Bi(this.m, 0, this))
};
var Jm = function(a, b, c, d, e) {
        b = a.o + "/gen204?" + Gm(a, c, d) + "&" + Gm(a, "client", b, !0);
        e && (b += Hm(a, e));
        Im(a, b)
    },
    Hm = function(a, b) {
        var c = "";
        p(b) && Mb(b, function(d, e) {
            if (d instanceof Array)
                for (var f = 0; f < d.length; f++) c += "&" + Gm(this, e, d[f]);
            else c += "&" + Gm(this, e, d)
        }, a);
        return c
    };
Em.prototype.m = function() {
    for (var a = 0; a < this.g.length; a++) {
        var b = this.g[a];
        Km(this, b[0], b[1])
    }
    this.g = [];
    this.h = !1
};
var Km = function(a, b, c) {
        Im(a, a.o + "/gen204?" + (a.c ? ["client=", a.c, "&"].join("") : "") + Gm(a, b, c))
    },
    Im = function(a, b) {
        var c = new Image,
            d = a.Vg++;
        a.ie[d] = c;
        c.onload = c.onerror = function() {
            delete Em.M().ie[d]
        };
        c.src = b;
        c = null
    },
    Mm = function(a, b, c, d) {
        var e = null;
        b in a.b && (e = a.b[b]);
        a.b[b] = Lm(e, c, d)
    },
    Nm = function(a, b) {
        var c = 0,
            d = null;
        b in a.a && (d = a.a[b], c = d[0], d = d[1]);
        d = Lm(d, 1, "accumulate");
        a.a[b] = [c, d];
        Ci(a.a[b][0]);
        c = Bi(v(a.w, a, b), 2E3);
        a.a[b][0] = c
    };
Em.prototype.w = function(a) {
    Km(this, a, this.a[a][1]);
    a in this.a && (Ci(this.a[a][0]), delete this.a[a])
};
var Om = function(a, b, c) {
        null != b || (b = 1);
        "accumulate" == c ? (isNaN(a) && (a = parseInt(a, 10)), isNaN(b) && (b = parseInt(b, 10)), a += b) : a = b;
        return a
    },
    Lm = function(a, b, c) {
        if ("object" == Ha(b)) {
            "object" != Ha(a) && (a = {});
            for (var d in b) a[d] = Om(d in a ? a[d] : null, b[d], c)
        } else a = Om(a, b, c);
        return a
    },
    Pm = function(a) {
        var b = [],
            c;
        for (c in a.b) b.push(Gm(a, c, a.b[c]));
        a.b = {};
        return b.join("&")
    };
Em.prototype.G = function() {
    this.m();
    for (var a in this.a) 0 != this.a[a] && this.w(a)
};
var Qm = function(a, b) {
    this.b = this.m = this.c = "";
    this.w = null;
    this.g = this.h = "";
    this.o = !1;
    var c;
    a instanceof Qm ? (this.o = p(b) ? b : a.o, Rm(this, a.c), this.m = a.m, this.b = a.b, Tm(this, a.w), Um(this, a.h), Vm(this, Wm(a.a)), this.g = a.g) : a && (c = String(a).match(yj)) ? (this.o = !!b, Rm(this, c[1] || "", !0), this.m = Xm(c[2] || ""), this.b = Xm(c[3] || "", !0), Tm(this, c[4]), Um(this, c[5] || "", !0), Vm(this, c[6] || "", !0), this.g = Xm(c[7] || "")) : (this.o = !!b, this.a = new Ym(null, this.o))
};
Qm.prototype.toString = function() {
    var a = [],
        b = this.c;
    b && a.push(Zm(b, $m, !0), ":");
    var c = this.b;
    if (c || "file" == b) a.push("//"), (b = this.m) && a.push(Zm(b, $m, !0), "@"), a.push(ce(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.w, null != c && a.push(":", String(c));
    if (c = this.h) this.b && "/" != c.charAt(0) && a.push("/"), a.push(Zm(c, "/" == c.charAt(0) ? an : bn, !0));
    (c = this.a.toString()) && a.push("?", c);
    (c = this.g) && a.push("#", Zm(c, cn));
    return a.join("")
};
Qm.prototype.resolve = function(a) {
    var b = new Qm(this),
        c = !!a.c;
    c ? Rm(b, a.c) : c = !!a.m;
    c ? b.m = a.m : c = !!a.b;
    c ? b.b = a.b : c = null != a.w;
    var d = a.h;
    if (c) Tm(b, a.w);
    else if (c = !!a.h) {
        if ("/" != d.charAt(0))
            if (this.b && !this.h) d = "/" + d;
            else {
                var e = b.h.lastIndexOf("/"); - 1 != e && (d = b.h.substr(0, e + 1) + d)
            }
        e = d;
        if (".." == e || "." == e) d = "";
        else if (Jc(e, "./") || Jc(e, "/.")) {
            d = vc(e, "/");
            e = e.split("/");
            for (var f = [], g = 0; g < e.length;) {
                var h = e[g++];
                "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length &&
                    f.push("")) : (f.push(h), d = !0)
            }
            d = f.join("/")
        } else d = e
    }
    c ? Um(b, d) : c = "" !== a.a.toString();
    c ? Vm(b, Wm(a.a)) : c = !!a.g;
    c && (b.g = a.g);
    return b
};
var Rm = function(a, b, c) {
        a.c = c ? Xm(b, !0) : b;
        a.c && (a.c = a.c.replace(/:$/, ""))
    },
    Tm = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.w = b
        } else a.w = null
    },
    Um = function(a, b, c) {
        a.h = c ? Xm(b, !0) : b
    },
    Vm = function(a, b, c) {
        b instanceof Ym ? (a.a = b, dn(a.a, a.o)) : (c || (b = Zm(b, en)), a.a = new Ym(b, a.o))
    },
    gn = function(a, b, c) {
        Ja(c) || (c = [String(c)]);
        fn(a.a, b, c)
    },
    hn = function(a) {
        return a instanceof Qm ? new Qm(a) : new Qm(a, void 0)
    },
    Xm = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) :
            ""
    },
    Zm = function(a, b, c) {
        return t(a) ? (a = encodeURI(a).replace(b, jn), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    },
    jn = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    },
    $m = /[#\/\?@]/g,
    bn = /[#\?:]/g,
    an = /[#\?]/g,
    en = /[#\?@]/g,
    cn = /#/g,
    Ym = function(a, b) {
        this.b = this.a = null;
        this.c = a || null;
        this.h = !!b
    },
    kn = function(a) {
        a.a || (a.a = new sj, a.b = 0, a.c && zj(a.c, function(b, c) {
            a.add(de(b), c)
        }))
    };
Ym.prototype.og = function() {
    kn(this);
    return this.b
};
Ym.prototype.add = function(a, b) {
    kn(this);
    this.c = null;
    a = ln(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b = $a(this.b) + 1;
    return this
};
var mn = function(a, b) {
        kn(a);
        b = ln(a, b);
        vj(a.a, b) && (a.c = null, a.b = $a(a.b) - a.a.get(b).length, a = a.a, uj(a.b, b) && (delete a.b[b], a.c--, a.g++, a.a.length > 2 * a.c && tj(a)))
    },
    nn = function(a, b) {
        kn(a);
        b = ln(a, b);
        return vj(a.a, b)
    };
k = Ym.prototype;
k.forEach = function(a, b) {
    kn(this);
    this.a.forEach(function(c, d) {
        y(c, function(e) {
            a.call(b, e, d, this)
        }, this)
    }, this)
};
k.Cb = function() {
    kn(this);
    for (var a = this.a.Rb(), b = this.a.Cb(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
};
k.Rb = function(a) {
    kn(this);
    var b = [];
    if (t(a)) nn(this, a) && (b = wb(b, this.a.get(ln(this, a))));
    else {
        a = this.a.Rb();
        for (var c = 0; c < a.length; c++) b = wb(b, a[c])
    }
    return b
};
k.set = function(a, b) {
    kn(this);
    this.c = null;
    a = ln(this, a);
    nn(this, a) && (this.b = $a(this.b) - this.a.get(a).length);
    this.a.set(a, [b]);
    this.b = $a(this.b) + 1;
    return this
};
k.get = function(a, b) {
    if (!a) return b;
    a = this.Rb(a);
    return 0 < a.length ? String(a[0]) : b
};
var fn = function(a, b, c) {
    mn(a, b);
    0 < c.length && (a.c = null, a.a.set(ln(a, b), yb(c)), a.b = $a(a.b) + c.length)
};
Ym.prototype.toString = function() {
    if (this.c) return this.c;
    if (!this.a) return "";
    for (var a = [], b = this.a.Cb(), c = 0; c < b.length; c++) {
        var d = b[c],
            e = ce(d);
        d = this.Rb(d);
        for (var f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + ce(d[f]));
            a.push(g)
        }
    }
    return this.c = a.join("&")
};
var Wm = function(a) {
        var b = new Ym;
        b.c = a.c;
        a.a && (b.a = new sj(a.a), b.b = a.b);
        return b
    },
    ln = function(a, b) {
        b = String(b);
        a.h && (b = b.toLowerCase());
        return b
    },
    dn = function(a, b) {
        b && !a.h && (kn(a), a.c = null, a.a.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (mn(this, d), fn(this, e, c))
        }, a));
        a.h = b
    };
Ym.prototype.g = function(a) {
    for (var b = 0; b < arguments.length; b++) xj(arguments[b], function(c, d) {
        this.add(d, c)
    }, this)
};
var on = {
        Fq: !0
    },
    pn = {
        Hq: !0
    },
    qn = {
        Gq: !0
    },
    rn = {
        Eq: !0
    },
    sn = {
        Dq: !0
    },
    tn = function() {
        throw Error("Do not instantiate directly");
    };
tn.prototype.ld = null;
tn.prototype.Ta = function() {
    return this.content
};
tn.prototype.toString = function() {
    return this.content
};
var un = function(a) {
        if (a.jc !== on) throw Error("Sanitized content was not of kind HTML.");
        return Pd(ec("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), a.toString(), a.ld)
    },
    vn = function() {
        tn.call(this)
    };
w(vn, tn);
vn.prototype.jc = on;
var wn = function() {
    tn.call(this)
};
w(wn, tn);
wn.prototype.jc = pn;
wn.prototype.ld = 1;
var xn = function() {
    tn.call(this)
};
w(xn, tn);
xn.prototype.jc = qn;
xn.prototype.ld = 1;
var yn = function() {
    tn.call(this)
};
w(yn, tn);
yn.prototype.jc = rn;
yn.prototype.ld = 1;
var zn = function() {
    tn.call(this)
};
w(zn, tn);
zn.prototype.jc = sn;
zn.prototype.ld = 1;
var An = function(a, b, c) {
    (b = null != a && a.jc === b) && x(a.constructor === c);
    return b
};
var Bn = function(a) {
        if (null != a) switch (a.ld) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    },
    R = function(a) {
        return An(a, on, vn) ? a : a instanceof Ad ? P(Bd(a).toString(), a.Pc()) : P(ee(String(String(a))), Bn(a))
    },
    P = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.ld = d);
            return c
        }
    }(vn),
    Cn = function(a, b) {
        return La(a) && La(b) ? a.jc !== b.jc ? !1 : a.toString() === b.toString() : a instanceof tn && b instanceof tn ? a.jc != b.jc ? !1 : a.toString() == b.toString() :
            a == b
    },
    Dn = function(a) {
        return a instanceof tn ? !!a.Ta() : !!a
    },
    En = function(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    },
    S = function(a) {
        An(a, on, vn) ? (a = a.Ta(), a = String(a).replace(Fn, "").replace(Gn, "&lt;"), a = String(a).replace(Hn, In)) : a = ee(String(a));
        return a
    },
    Jn = /['()]/g,
    Kn = function(a) {
        return "%" + a.charCodeAt(0).toString(16)
    },
    Ln = function(a) {
        a = ce(String(a));
        Jn.lastIndex = 0;
        return Jn.test(a) ? a.replace(Jn, Kn) : a
    },
    Pn = function(a) {
        An(a, pn, wn) || An(a, qn, xn) ? a = String(a).replace(Mn, Nn) : a instanceof Nc ?
            a = String(Pc(a)).replace(Mn, Nn) : a instanceof pc ? a = String(rc(a)).replace(Mn, Nn) : (a = String(a), On.test(a) ? a = a.replace(Mn, Nn) : (Za("Bad value `%s` for |filterNormalizeUri", [a]), a = "about:invalid#zSoyz"));
        return a
    },
    Rn = function(a) {
        An(a, sn, zn) ? a = En(a.Ta()) : null == a ? a = "" : a instanceof Xc ? a = En(Yc(a)) : a instanceof kd ? a = En(nd(a)) : (a = String(a), Qn.test(a) || (Za("Bad value `%s` for |filterCssValue", [a]), a = "zSoyz"));
        return a
    },
    Sn = function(a, b, c, d) {
        a || (a = c instanceof Function ? c.displayName || c.name || "unknown type name" :
            c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null === c ? "null" : typeof c, Za("expected param " + b + " of type " + d + (", but got " + a) + "."));
        return c
    },
    Tn = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    },
    In = function(a) {
        return Tn[a]
    },
    Un = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\x0B": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    },
    Vn = function(a) {
        return Un[a]
    },
    Wn = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    },
    Nn = function(a) {
        return Wn[a]
    },
    Hn = /[\x00\x22\x27\x3c\x3e]/g,
    Xn = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
    Mn = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Qn = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s+|$))*$/i,
    On = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
    Yn = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
    Zn = function(a) {
        return String(a).replace(Xn, Vn)
    },
    Fn = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Gn = /</g;
var $n = function(a) {
    var b = a.dm,
        c = a.bm,
        d = a.Fn,
        e = a.vn,
        f = a.url;
    return P('<div id="' + S(a.id) + '" class="cp-promo" style="display:none"><div class="cp-promo-c"><div class="cp-dismiss"></div><a href="' + S(Pn(f)) + '" target="_blank" class="cp-promo-href"><div class="cp-promo-graphic"></div><div class="cp-promo-text-c"><div class="cp-promo-text"><div class="cp-promo-title">' + R(d) + '</div><div class="cp-promo-subtext">' + R(e) + '</div></div></div><div class="cp-promo-bottom"><div class="cp-promo-link"><div class="cp-promo-link-badge"></div><div class="cp-promo-link-arrow"></div><div class="cp-promo-link-text">' +
        R(b) + '</div><div class="cp-promo-link-subtext">' + R(c) + "</div></div></div></a></div></div>")
};
$n.a = "trans.common.templates.communityPromotion";
var ao = function(a) {
    return P('<div><div class="speech-mic"><div class="gt-speech-l1"></div><div class="gt-speech-l2"></div><div class="gt-speech-l3"></div><div class="gt-speech-l4"></div></div><div class="speech-mic-label">' + R(a.label) + "</div></div>")
};
ao.a = "trans.common.templates.speechInput";
var bo = function(a) {
    var b = a.Bd,
        c = a.Zl,
        d = a.$l,
        e = a.fh,
        f = a.Xn;
    return P('<div class="gt-ex-info">' + (a.nn ? '<span class="gt-ex-quote">\x3c!--This SVG renders a quotation mark.--\x3e<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span>' : "") + '<div class="gt-ex-top"><div class="gt-ex-text" dir="' + S(a.qn) + '">' + R(b) + '</div></div><div class="gt-ex-mt" style="display:none"><span class="gt-cd-mt" dir="' + S(e) + '"></span><br><span class="gt-cd-mt-label">' +
        R(f) + '</span><span class="gt-ex-credit"><a class="gt-ex-link" target="_blank" href="' + S(Pn(c)) + '">' + R(d) + "</a></span></div></div>")
};
bo.a = "trans.common.templates.exampleSentence";
var co = function(a) {
    var b = a.ym;
    a = a.zm;
    return P('<div class="st-stp1">' + (b ? "" : '<div class="st-stp1-text"><div>' + R(a) + "</div></div>") + '<div id="st-buttons"></div>' + (b ? '<div class="st-stp1-epu-text">' + R(a) + "</div>" : "") + "</div>")
};
co.a = "trans.common.templates.submitTranslation";
var eo = function() {
    return P('<div class="gt-cc-t"><span class="gt-cc-tc"></span><span class="gt-cc-bc"></span></div><div class="gt-cc"><div class="gt-cc-l"><div class="gt-cc-l-i"></div><div class="gt-cc-exp" style="display:none"><div class="cd-exp-ar"></div></div></div><div class="gt-cc-r"><div class="gt-cc-r-i"></div></div></div>')
};
eo.a = "trans.common.templates.cardContainer";
var fo = function() {
    return P('<div class="gt-cd-t"><div class="gt-cd-tl"></div><div class="gt-cd-tr"></div></div><div class="gt-cd-c"></div><div class="cd-expand-button" role="button" tabindex="0"><span class="jfk-button-img"></span><span class="cd-expand-label"></span></div>')
};
fo.a = "trans.common.templates.card";
var go = function() {
    return P('<span class="gt-ct-text"></span><span class="gt-ct-translit" style="display:none"></span><div class="gt-ct-tts goog-inline-block"></div>')
};
go.a = "trans.common.templates.lexiconTitle";
var ho = function(a) {
    var b = a.ck,
        c = a.uj,
        d = a.dk,
        e = a.Ak,
        f = a.yn,
        g = a.xn,
        h = a.fh,
        l = a.Vj;
    a = '<div class="gt-def-info" lang="' + S(a.za) + '">' + (c ? '<span class="gt-def-num">' + R(b) + "</span>" : "") + '<div class="gt-def-row">' + R(d) + '<div class="gt-mt-md" style="display:none"><span class="gt-cd-mt"></span></div></div>' + (e ? '<div class="gt-def-example"><q>' + R(e) + '</q><div class="gt-mt-ex" style="display:none"><q class="gt-cd-mt" dir="' + S(h) + '"></q></div></div>' : "");
    if (0 < g.length) {
        a += '<div class="gt-def-synonym"><span class="gt-def-synonym-title">' +
            R(f) + ': </span><span class="gt-def-synonyms-group"></span><span class="gt-def-synonyms-group"></span>';
        f = g.length;
        for (b = 0; b < f; b++)
            for (d = g[b], e = d.length, h = 0; h < e; h++) {
                var m = d[h];
                var q = c ? "" : h != e - 1 ? ", " : b != f - 1 ? "; " : "";
                a += (l ? c ? '<span class="gt-cd-cl"> ' + R(m) + " </span>" : '<span class="gt-cd-cl">' + R(m) + "</span>" : '<span class="gt-cd-ncl">' + R(m) + "</span>") + q
            }
        a += "</div>"
    }
    return P(a + "</div>")
};
ho.a = "trans.common.templates.definitionRow";
var io = function(a) {
    var b = a.ik,
        c = a.Fk,
        d = a.Gk,
        e = a.Lm;
    a = a.Dd;
    return P((a ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-pos-head">' + (e ? '<span class="gt-cd-pos">' + R(e) + "</span>" : "") + (b ? '<div class="gt-cd-pos-pop">' + R(c) + '<div class="help-icon-container tlid-frequency-help-icon-container"><div class="help-icon tlid-frequency-help-icon"></div><div class="help-tooltip tlid-frequency-help-tooltip"><p>' + R(d) + "</p></div></div></div>" : "") + "</div>" + (a ? "" : "</div>"))
};
io.a = "trans.common.templates.partOfSpeechEntryHeading";
var jo = function(a) {
    var b = a.Kg,
        c = a.Fe,
        d = a.Cn,
        e = a.Dd,
        f = a.ho;
    a = a.io;
    return P((e ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-term-text-parent"' + (d ? ' style="direction: ' + S(Rn(d)) + ';"' : "") + '><span class="gt-baf-term-text' + (b ? " gt-baf-word-selected" : "") + '">' + (c ? '<span class="gt-baf-cell gt-baf-previous-word gt-baf-previous-word-mobile">' + R(c) + "</span>" : "") + '<span class="' + S(a) + '">' + R(f) + "</span></span></div>" + (e ? "" : "</div>"))
};
jo.a = "trans.common.templates.termText";
var ko = function(a) {
    var b = a.Ve,
        c = a.fk,
        d = a.Of;
    a = a.Dd;
    c = (a ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-translations gt-baf-translations-mobile"' + (c ? ' style="direction: ' + S(Rn(c)) + ';"' : "") + ">";
    for (var e = d.length, f = 0; f < e; f++) {
        var g = d[f];
        c += "<span" + (b ? ' class="' + S(b) + '"' : "") + ">" + R(g) + "</span>" + (f != e - 1 ? ", " : "")
    }
    return P(c + ("</div>" + (a ? "" : "</div>")))
};
ko.a = "trans.common.templates.translationsCell";
var mo = function(a) {
    var b = a.Lb,
        c = a.Dd;
    a = (c ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-entry-score" title="' + S(a.vc) + '">';
    for (var d = Math.max(0, Math.ceil(b + 1 - 1)), e = 0; e < d; e++) {
        var f = P(lo({
            className: "filled"
        }));
        a += f
    }
    if (3 > b)
        for (b = Math.max(0, Math.ceil(4 - (b + 1))), d = 0; d < b; d++) e = P(lo({
            className: "empty"
        })), a += e;
    return P(a + ("</div>" + (c ? "" : "</div>")))
};
mo.a = "trans.common.templates.backAndForthViewEntryScore";
var lo = function(a) {
    return P('<div class="' + S(a.className) + ' gt-score-dot"></div>')
};
var no = null != window.KNOWLEDGE_PANEL,
    oo = null != window.MSG_SPEECH_INPUT_TURN_ON,
    po = null != window.ADD_INFLECTION;
var qo = {
    es: {
        en: !0
    },
    fr: {
        en: !0
    },
    it: {
        en: !0
    },
    nl: {
        en: !0
    },
    pt: {
        en: !0
    },
    en: {
        tr: !0
    }
};

function ro(a, b) {
    if ("auto" === a) throw Error('detectedSourceLanguage should not be "auto". Did you mean shouldRequestGenderedTranslations()?');
    return !!qo[b] && !!qo[b][a]
};
var so = function(a, b) {
    try {
        return JSON.parse(a)
    } catch (d) {
        var c = Em.M();
        b.js = a;
        b.error = d.message;
        c.log("jsonParseErr", b);
        throw d;
    }
};
var to = function(a) {
        return function() {
            return a
        }
    },
    uo = function(a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2);
            d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
            d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
        }
        return a
    },
    vo = null,
    wo = function(a) {
        if (null !== vo) var b = vo;
        else {
            b = to(String.fromCharCode(84));
            var c = to(String.fromCharCode(75));
            b = [b(), b()];
            b[1] = c();
            b = (vo = window[b.join(c())] || "") || ""
        }
        var d = to(String.fromCharCode(116));
        c = to(String.fromCharCode(107));
        d = [d(), d()];
        d[1] = c();
        c = "&" + d.join("") +
            "=";
        d = b.split(".");
        b = Number(d[0]) || 0;
        for (var e = [], f = 0, g = 0; g < a.length; g++) {
            var h = a.charCodeAt(g);
            128 > h ? e[f++] = h : (2048 > h ? e[f++] = h >> 6 | 192 : (55296 == (h & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = h >> 18 | 240, e[f++] = h >> 12 & 63 | 128) : e[f++] = h >> 12 | 224, e[f++] = h >> 6 & 63 | 128), e[f++] = h & 63 | 128)
        }
        a = b;
        for (f = 0; f < e.length; f++) a += e[f], a = uo(a, "+-a^+6");
        a = uo(a, "+-3^+b+-f");
        a ^= Number(d[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        a %= 1E6;
        return c + (a.toString() + "." +
            (a ^ b))
    };
var xo = function(a) {
    Bl(this, a, 4)
};
w(xo, Al);
var yo = {
    word_postproc: {
        H: 0,
        J: !1
    },
    score: {
        H: 1,
        J: !1
    },
    has_preceding_space: {
        H: 2,
        J: !1
    },
    attach_to_next_token: {
        H: 3,
        J: !1
    }
};
xo.prototype.a = function() {
    return yo
};
var zo = function(a) {
    Bl(this, a, 2)
};
w(zo, Al);
var Ao = {
    begin: {
        H: 0,
        J: !1
    },
    end: {
        H: 1,
        J: !1
    }
};
zo.prototype.a = function() {
    return Ao
};
var Bo = function(a) {
    Bl(this, a, 7)
};
w(Bo, Al);
var Co = {
    src_phrase: {
        H: 0,
        J: !1
    },
    alternative: {
        H: 2,
        wa: function(a) {
            return Hl(xo, a)
        },
        va: function(a) {
            return Gl(new xo(a))
        },
        J: !0
    },
    srcunicodeoffsets: {
        H: 3,
        wa: function(a) {
            return Hl(zo, a)
        },
        va: function(a) {
            return Gl(new zo(a))
        },
        J: !0
    },
    raw_src_segment: {
        H: 4,
        J: !1
    },
    start_pos: {
        H: 5,
        J: !1
    },
    end_pos: {
        H: 6,
        J: !1
    }
};
Bo.prototype.a = function() {
    return Co
};
var Do = function(a, b) {
        return new xo(El(a, 2, b))
    },
    Eo = function(a, b) {
        return new zo(El(a, 3, b))
    };
var Fo = function(a) {
    Bl(this, a, 8)
};
w(Fo, Al);
var Go = {
    word: {
        H: 0,
        J: !1
    },
    styles: {
        H: 1,
        J: !0
    },
    has_preceding_space: {
        H: 2,
        J: !1
    },
    attach_to_next_token: {
        H: 3,
        J: !1
    },
    confidence: {
        H: 4,
        J: !1
    },
    start_pos: {
        H: 5,
        J: !1
    },
    end_pos: {
        H: 6,
        J: !1
    },
    not_from_first_segment: {
        H: 7,
        J: !1
    }
};
Fo.prototype.a = function() {
    return Go
};
var Ho = function(a) {
    Bl(this, a, 3)
};
w(Ho, Al);
var Io = {
    gloss: {
        H: 0,
        J: !1
    },
    definition_id: {
        H: 1,
        J: !1
    },
    example: {
        H: 2,
        J: !1
    }
};
Ho.prototype.a = function() {
    return Io
};
var Jo = function(a) {
    Bl(this, a, 3)
};
w(Jo, Al);
var Ko = {
    pos: {
        H: 0,
        J: !1
    },
    entry: {
        H: 1,
        wa: function(a) {
            return Hl(Ho, a)
        },
        va: function(a) {
            return Gl(new Ho(a))
        },
        J: !0
    },
    base_form: {
        H: 2,
        J: !1
    }
};
Jo.prototype.a = function() {
    return Ko
};
Jo.prototype.b = function() {
    return I(this, 1)
};
Jo.prototype.c = function(a) {
    return new Ho(El(this, 1, a))
};
var Lo = function(a) {
    Bl(this, a, 6)
};
w(Lo, Al);
var Mo = {
    word: {
        H: 0,
        J: !1
    },
    reverse_translation: {
        H: 1,
        J: !0
    },
    synset_id: {
        H: 2,
        J: !0
    },
    score: {
        H: 3,
        J: !1
    },
    previous_word: {
        H: 4,
        J: !1
    },
    gender: {
        H: 5,
        J: !1
    }
};
Lo.prototype.a = function() {
    return Mo
};
var No = function(a) {
    Bl(this, a, 5)
};
w(No, Al);
var Oo = {
    pos: {
        H: 0,
        J: !1
    },
    terms: {
        H: 1,
        J: !0
    },
    entry: {
        H: 2,
        wa: function(a) {
            return Hl(Lo, a)
        },
        va: function(a) {
            return Gl(new Lo(a))
        },
        J: !0
    },
    base_form: {
        H: 3,
        J: !1
    },
    pos_enum: {
        H: 4,
        J: !1
    }
};
No.prototype.a = function() {
    return Oo
};
var Po = function(a, b) {
    return Fh(a, 1, b)
};
No.prototype.b = function() {
    return I(this, 2)
};
No.prototype.c = function(a) {
    return new Lo(El(this, 2, a))
};
var Qo = function(a) {
    Bl(this, a, 17)
};
w(Qo, Al);
var Ro = {
    animacy: {
        H: 0,
        J: !1
    },
    inflection_aspect: {
        H: 1,
        J: !1
    },
    grammatical_case: {
        H: 2,
        J: !1
    },
    degree: {
        H: 3,
        J: !1
    },
    gender: {
        H: 4,
        J: !1
    },
    mood: {
        H: 5,
        J: !1
    },
    nonfinite_form: {
        H: 6,
        J: !1
    },
    number: {
        H: 7,
        J: !1
    },
    person: {
        H: 8,
        J: !1
    },
    polarity: {
        H: 9,
        J: !1
    },
    referent: {
        H: 10,
        J: !1
    },
    strength: {
        H: 11,
        J: !1
    },
    tense: {
        H: 12,
        J: !1
    },
    imperfect_suffix: {
        H: 13,
        J: !1
    },
    voice: {
        H: 14,
        J: !1
    },
    infinitive_number: {
        H: 15,
        J: !1
    },
    precedes: {
        H: 16,
        J: !1
    }
};
Qo.prototype.a = function() {
    return Ro
};
var So = function(a) {
    Bl(this, a, 2)
};
w(So, Al);
var To = {
    written_form: {
        H: 0,
        J: !1
    },
    features: {
        H: 1,
        wa: function(a) {
            return Hl(Qo, a)
        },
        va: function(a) {
            return Gl(new Qo(a))
        },
        J: !1
    }
};
So.prototype.a = function() {
    return To
};
var Uo = function(a) {
    Bl(this, a, 4)
};
w(Uo, Al);
var Vo = {
    title: {
        H: 0,
        J: !1
    },
    description: {
        H: 1,
        J: !1
    },
    image_url: {
        H: 2,
        J: !1
    },
    image_ref_url: {
        H: 3,
        J: !1
    }
};
Uo.prototype.a = function() {
    return Vo
};
var Wo = function(a) {
    Bl(this, a, 4)
};
w(Wo, Al);
var Xo = {
    srclangs: {
        H: 0,
        J: !0
    },
    extended_srclangs: {
        H: 3,
        J: !0
    },
    detected_target: {
        H: 1,
        J: !1
    },
    srclangs_confidences: {
        H: 2,
        J: !0
    }
};
Wo.prototype.a = function() {
    return Xo
};
var Yo = function(a) {
    Bl(this, a, 1)
};
w(Yo, Al);
var Zo = {
    word: {
        H: 0,
        J: !0
    }
};
Yo.prototype.a = function() {
    return Zo
};
var $o = function(a) {
    Bl(this, a, 6)
};
w($o, Al);
var ap = {
    spell_html_res: {
        H: 0,
        J: !1
    },
    spell_res: {
        H: 1,
        J: !1
    },
    correction_type: {
        H: 2,
        J: !0
    },
    correction_translation: {
        H: 3,
        J: !1
    },
    related: {
        H: 4,
        J: !1
    },
    confident: {
        H: 5,
        J: !1
    }
};
$o.prototype.a = function() {
    return ap
};
var bp = function(a) {
    Bl(this, a, 2)
};
w(bp, Al);
var cp = {
    synonym: {
        H: 0,
        J: !0
    },
    definition_id: {
        H: 1,
        J: !1
    }
};
bp.prototype.a = function() {
    return cp
};
var dp = function(a) {
    Bl(this, a, 3)
};
w(dp, Al);
var ep = {
    pos: {
        H: 0,
        J: !1
    },
    entry: {
        H: 1,
        wa: function(a) {
            return Hl(bp, a)
        },
        va: function(a) {
            return Gl(new bp(a))
        },
        J: !0
    },
    base_form: {
        H: 2,
        J: !1
    }
};
dp.prototype.a = function() {
    return ep
};
dp.prototype.b = function() {
    return I(this, 1)
};
dp.prototype.c = function(a) {
    return new bp(El(this, 1, a))
};
var fp = function(a) {
    Bl(this, a, 6)
};
w(fp, Al);
var gp = {
    text: {
        H: 0,
        J: !1
    },
    source: {
        H: 1,
        J: !1
    },
    link: {
        H: 2,
        J: !1
    },
    translation: {
        H: 3,
        J: !1
    },
    source_type: {
        H: 4,
        J: !1
    },
    definition_id: {
        H: 5,
        J: !1
    }
};
fp.prototype.a = function() {
    return gp
};
fp.prototype.sb = function() {
    return J(this, 3)
};
var hp = function(a) {
    Bl(this, a, 1)
};
w(hp, Al);
var ip = {
    example: {
        H: 0,
        wa: function(a) {
            return Hl(fp, a)
        },
        va: function(a) {
            return Gl(new fp(a))
        },
        J: !0
    }
};
hp.prototype.a = function() {
    return ip
};
var jp = function(a) {
    Bl(this, a, 19)
};
w(jp, Al);
var kp = {
    sentences: {
        H: 0,
        wa: function(a) {
            return Hl(Wl, a)
        },
        va: function(a) {
            return Gl(new Wl(a))
        },
        J: !0
    },
    dict: {
        H: 1,
        wa: function(a) {
            return Hl(No, a)
        },
        va: function(a) {
            return Gl(new No(a))
        },
        J: !0
    },
    src: {
        H: 2,
        J: !1
    },
    err: {
        H: 3,
        J: !1
    },
    styled_words: {
        H: 4,
        wa: function(a) {
            return Hl(Fo, a)
        },
        va: function(a) {
            return Gl(new Fo(a))
        },
        J: !0
    },
    alternative_translations: {
        H: 5,
        wa: function(a) {
            return Hl(Bo, a)
        },
        va: function(a) {
            return Gl(new Bo(a))
        },
        J: !0
    },
    confidence: {
        H: 6,
        J: !1
    },
    spell: {
        H: 7,
        wa: function(a) {
            return Hl($o, a)
        },
        va: function(a) {
            return Gl(new $o(a))
        },
        J: !1
    },
    autocorrection: {
        H: 10,
        J: !1
    },
    ld_result: {
        H: 8,
        wa: function(a) {
            return Hl(Wo, a)
        },
        va: function(a) {
            return Gl(new Wo(a))
        },
        J: !1
    },
    server_time: {
        H: 9,
        J: !1
    },
    synsets: {
        H: 11,
        wa: function(a) {
            return Hl(dp, a)
        },
        va: function(a) {
            return Gl(new dp(a))
        },
        J: !0
    },
    definitions: {
        H: 12,
        wa: function(a) {
            return Hl(Jo, a)
        },
        va: function(a) {
            return Gl(new Jo(a))
        },
        J: !0
    },
    examples: {
        H: 13,
        wa: function(a) {
            return Hl(hp, a)
        },
        va: function(a) {
            return Gl(new hp(a))
        },
        J: !1
    },
    related_words: {
        H: 14,
        wa: function(a) {
            return Hl(Yo, a)
        },
        va: function(a) {
            return Gl(new Yo(a))
        },
        J: !1
    },
    knowledge_results: {
        H: 15,
        wa: function(a) {
            return Hl(Uo, a)
        },
        va: function(a) {
            return Gl(new Uo(a))
        },
        J: !0
    },
    query_inflections: {
        H: 16,
        wa: function(a) {
            return Hl(So, a)
        },
        va: function(a) {
            return Gl(new So(a))
        },
        J: !0
    },
    target_inflections: {
        H: 17,
        wa: function(a) {
            return Hl(So, a)
        },
        va: function(a) {
            return Gl(new So(a))
        },
        J: !0
    },
    gendered_translation_result: {
        H: 18,
        wa: function(a) {
            return Hl($l, a)
        },
        va: function(a) {
            return Gl(new $l(a))
        },
        J: !1
    }
};
jp.prototype.a = function() {
    return kp
};
var lp = function(a) {
        return new $o(a.Ra[7])
    },
    mp = function(a) {
        return new Yo(a.Ra[14])
    };
jp.prototype.cc = function() {
    return I(this, 0)
};
jp.prototype.ab = function(a) {
    return new Wl(El(this, 0, a))
};
var Ch = function(a, b) {
        return new No(El(a, 1, b))
    },
    np = function(a, b) {
        return new Bo(El(a, 5, b))
    };
var op = function(a, b) {
        this.b = a;
        this.a = "";
        b && (this.a = b);
        this.c = 0;
        this.F = L.M()
    },
    pp = function(a) {
        a = a.Rb("q").join("");
        return wo(a)
    },
    qp = function(a, b, c, d, e, f) {
        c = c.toString();
        c += pp(d);
        d = d.toString();
        var g = "POST";
        b += "?" + c;
        2E3 > b.length + d.length && (g = "GET", b += "&" + d, d = "");
        ++a.c;
        return Pj(b, function(h) {
            --a.c;
            e(h)
        }, g, d, void 0, f)
    },
    rp = function(a, b, c, d, e, f, g, h, l) {
        var m = a.a + "/translate_a/t",
            q = new Ym,
            r = new Ym;
        q.set("client", a.b);
        q.set("sl", b);
        q.set("tl", c);
        q.set("hl", d);
        q.set("v", "1.0");
        null != g && q.set("source", g);
        h &&
            q.g(h);
        (b = !Ja(e) || Ja(e) && 1 == e.length) ? r.set("q", e): fn(r, "q", e);
        e = v(a.h, a, b, f);
        return qp(a, m, q, r, e, l)
    },
    sp = function(a, b, c, d) {
        var e = new Ym,
            f = new Ym;
        e.set("client", a.b);
        e.set("sl", c);
        c = a.a + "/translate_a/single";
        e.set("dt", "rm");
        f.set("q", b);
        qp(a, c, e, f, v(a.o, a, d), void 0)
    },
    tp = function(a, b, c, d, e, f, g, h, l, m, q) {
        var r = a.a + "/translate_a/single",
            u = new Ym,
            A = new Ym;
        u.set("client", a.b);
        u.set("sl", b);
        u.set("tl", c);
        u.set("hl", d);
        fn(u, "dt", f);
        null != h && (u.set("ie", h), u.set("oe", h));
        m && u.set("dj", "1");
        l && u.g(l);
        A.set("q",
            e);
        qp(a, r, u, A, v(a.g, a, g, q), void 0)
    },
    up = function(a, b, c, d, e, f, g, h, l, m) {
        var q = "at bd ex ld md qc rw rm ss t".split(" ");
        g && (q = "at bd ex ld md qca rw rm ss t".split(" "));
        no && q.push("kr");
        po && qo[c] && (qo[c][b] || "auto" === b) && q.push("gt");
        tp(a, b, c, d, e, q, f, h, l, void 0, m)
    };
op.prototype.o = function(a, b) {
    b = b.target;
    vp(b) && (b = wp(b, "handleTransliterationResult_"), b = new jp(b), 0 < b.cc() && a(J(b.ab(0), 3)))
};
op.prototype.g = function(a, b, c) {
    c = c.target;
    vp(c) ? (b = wp(c, "handleSingleResult_"), Ja(b) && (b = new jp(b)), a(b)) : (xp(this, c), b && b(c.Mc()))
};
op.prototype.h = function(a, b, c) {
    c = c.target;
    if (Zj(c)) {
        c = wp(c, "handleTextResult_");
        var d = [];
        if (a) d.push(Ja(c) ? c[0] : c);
        else if (Ja(c))
            for (a = 0; a < c.length; ++a) d.push(Ja(c[a]) ? c[a][0] : c[a]);
        b(d)
    } else xp(this, c), b(null, c.wd)
};
var wp = function(a, b) {
        return so(ak(a), {
            "class": "trans.common.TranslationAPI",
            func: b,
            url: String(a.Rd)
        })
    },
    vp = function(a) {
        return Zj(a) && ("[" == ak(a)[0] || "{" == ak(a)[0])
    },
    yp = {},
    zp = (yp[1] = 15, yp[2] = 16, yp[3] = 17, yp[4] = 18, yp[5] = 19, yp[6] = 20, yp[7] = 21, yp[8] = 22, yp[9] = 23, yp),
    xp = function(a, b) {
        var c = b.wd;
        km(a.F, 156, c in zp ? zp[c] : 0);
        a = Em.M();
        c = String(b.Rd);
        b = ak(b);
        a.log("invalidResponse", {
            q: c.substring(0, 500),
            ql: c.length,
            r: b.substring(0, 500),
            rl: b.length
        })
    };
op.prototype.m = function() {
    return this.c
};
var Ap, Bp = {
    po: "activedescendant",
    zo: "atomic",
    Ao: "autocomplete",
    Co: "busy",
    Fo: "checked",
    Go: "colindex",
    Lo: "controls",
    No: "describedby",
    Qo: "disabled",
    So: "dropeffect",
    To: "expanded",
    Uo: "flowto",
    Wo: "grabbed",
    $o: "haspopup",
    bp: "hidden",
    ep: "invalid",
    fp: "label",
    gp: "labelledby",
    hp: "level",
    mp: "live",
    Cp: "multiline",
    Dp: "multiselectable",
    Hp: "orientation",
    Ip: "owns",
    Jp: "posinset",
    Lp: "pressed",
    Pp: "readonly",
    Rp: "relevant",
    Sp: "required",
    Xp: "rowindex",
    $p: "selected",
    bq: "setsize",
    SORT: "sort",
    rq: "valuemax",
    tq: "valuemin",
    uq: "valuenow",
    vq: "valuetext"
};
var Cp = {
    qo: "alert",
    uo: "alertdialog",
    vo: "application",
    xo: "article",
    Bo: "banner",
    Do: "button",
    Eo: "checkbox",
    Ho: "columnheader",
    Io: "combobox",
    Jo: "complementary",
    Ko: "contentinfo",
    Mo: "definition",
    Oo: "dialog",
    Po: "directory",
    Ro: "document",
    Vo: "form",
    Xo: "grid",
    Yo: "gridcell",
    Zo: "group",
    ap: "heading",
    cp: "img",
    ip: "link",
    jp: "list",
    kp: "listbox",
    lp: "listitem",
    np: "log",
    pp: "main",
    qp: "marquee",
    rp: "math",
    sp: "menu",
    tp: "menubar",
    up: "menuitem",
    vp: "menuitemcheckbox",
    wp: "menuitemradio",
    Ep: "navigation",
    Fp: "note",
    Gp: "option",
    Kp: "presentation",
    Mp: "progressbar",
    Np: "radio",
    Op: "radiogroup",
    Qp: "region",
    Tp: "row",
    Vp: "rowgroup",
    Wp: "rowheader",
    Yp: "scrollbar",
    Zp: "search",
    aq: "separator",
    cq: "slider",
    eq: "spinbutton",
    fq: "status",
    gq: "tab",
    hq: "tablist",
    iq: "tabpanel",
    jq: "textbox",
    kq: "textinfo",
    lq: "timer",
    mq: "toolbar",
    nq: "tooltip",
    oq: "tree",
    pq: "treegrid",
    qq: "treeitem"
};
Zb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
var Dp = "combobox grid group listbox menu menubar radiogroup row rowgroup tablist textbox toolbar tree treegrid".split(" "),
    Ep = function(a, b) {
        b ? (x(Rb(Cp, b), "No such ARIA role " + b), a.setAttribute("role", b)) : a.removeAttribute("role")
    },
    Gp = function(a, b, c) {
        Ja(c) && (c = c.join(" "));
        var d = Fp(b);
        "" === c || void 0 == c ? (Ap || (Ap = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = Ap, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    },
    Hp = function(a, b) {
        a = a.getAttribute(Fp(b));
        return null == a || void 0 == a ? "" : String(a)
    },
    Ip = function(a) {
        var b = Hp(a, "activedescendant");
        return Hf(a).getElementById(b)
    },
    Jp = function(a, b) {
        var c = "";
        b && (c = b.id, x(c, "The active element should have an id."));
        Gp(a, "activedescendant", c)
    },
    Kp = function(a, b) {
        Gp(a, "label", b)
    },
    Fp = function(a) {
        x(a, "ARIA attribute cannot be empty.");
        x(Rb(Bp, a), "No such ARIA attribute " +
            a);
        return "aria-" + a
    };
var Lp = function(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return t(a) && a.match(/\S+/g) || []
    },
    Mp = function(a, b) {
        return a.classList ? a.classList.contains(b) : sb(Lp(a), b)
    },
    T = function(a, b) {
        a.classList ? a.classList.add(b) : Mp(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    },
    Np = function(a, b) {
        if (a.classList) y(b, function(e) {
            T(a, e)
        });
        else {
            var c = {};
            y(Lp(a), function(e) {
                c[e] = !0
            });
            y(b, function(e) {
                c[e] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " + d : d
        }
    },
    U = function(a, b) {
        a.classList ?
            a.classList.remove(b) : Mp(a, b) && (a.className = kb(Lp(a), function(c) {
                return c != b
            }).join(" "))
    },
    Op = function(a, b) {
        a.classList ? y(b, function(c) {
            U(a, c)
        }) : a.className = kb(Lp(a), function(c) {
            return !sb(b, c)
        }).join(" ")
    },
    V = function(a, b, c) {
        c ? T(a, b) : U(a, b)
    };
var Sp = function(a, b) {
        x(a, "Soy template may not be null.");
        var c = If();
        a = a(b || Pp, void 0, void 0);
        a = Qp(a);
        Rp(a.tb());
        return $f(c.a, a)
    },
    Tp = function(a, b, c, d) {
        x(a, "Soy template may not be null.");
        a = a(b || Pp, void 0, c);
        d = Fg(d || If(), "DIV");
        a = Qp(a);
        Rp(a.tb());
        Td(d, a);
        1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType && (d = a));
        return d
    },
    Qp = function(a) {
        if (!Ma(a)) return Dd(String(a));
        if (a instanceof tn) return un(a);
        Za("Soy template output is unsafe for use as HTML: " + a);
        return Dd("zSoyz")
    },
    Rp = function(a) {
        var b =
            a.match(Up);
        x(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a)
    },
    Up = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
    Pp = {};
var Vp = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
k = Vp.prototype;
k.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
k.contains = function(a) {
    return this && a ? a instanceof Vp ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.a >= this.top && a.a <= this.bottom : !1
};
k.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
k.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
k.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
var Wp = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    },
    Xp = function(a) {
        return new Vp(a.top, a.left + a.width, a.top + a.height, a.left)
    };
k = Wp.prototype;
k.toString = function() {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
k.contains = function(a) {
    return a instanceof Df ? a.x >= this.left && a.x <= this.left + this.width && a.a >= this.top && a.a <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
};
k.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
k.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
k.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var Zp = function(a, b, c) {
        if (t(b))(b = Yp(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Yp(c, d);
                f && (c.style[f] = e)
            }
    },
    $p = {},
    Yp = function(a, b) {
        var c = $p[b];
        if (!c) {
            var d = oe(b);
            c = d;
            void 0 === a.style[d] && (d = (Ae ? "Webkit" : ze ? "Moz" : B ? "ms" : we ? "O" : null) + pe(d), void 0 !== a.style[d] && (c = d));
            $p[b] = c
        }
        return c
    },
    aq = function(a, b) {
        var c = Hf(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    },
    bq = function(a, b) {
        return aq(a, b) || (a.currentStyle ?
            a.currentStyle[b] : null) || a.style && a.style[b]
    },
    dq = function(a, b, c) {
        if (b instanceof Df) {
            var d = b.x;
            b = b.a
        } else d = b, b = c;
        a.style.left = cq(d, !1);
        a.style.top = cq(b, !1)
    },
    eq = function(a) {
        a = a ? Hf(a) : document;
        return !B || Te(9) || Qf(If(a).a) ? a.documentElement : a.body
    },
    fq = function(a) {
        var b = a.body;
        a = a.documentElement;
        return new Df(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
    },
    gq = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        B && a.ownerDocument.body && (a = a.ownerDocument,
            b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    },
    hq = function(a) {
        if (B && !Te(8)) return x(a && "offsetParent" in a), a.offsetParent;
        var b = Hf(a),
            c = bq(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = bq(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" ==
                    c)) return a;
        return null
    },
    jq = function(a) {
        for (var b = new Vp(0, Infinity, Infinity, 0), c = If(a), d = c.a.body, e = c.a.documentElement, f = Sf(c.a); a = hq(a);)
            if (!(B && 0 == a.clientWidth || Ae && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != bq(a, "overflow")) {
                var g = iq(a),
                    h = new Df(a.clientLeft, a.clientTop);
                g.x += h.x;
                g.a += h.a;
                b.top = Math.max(b.top, g.a);
                b.right = Math.min(b.right, g.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, g.a + a.clientHeight);
                b.left = Math.max(b.left, g.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = Rf(Gg(c) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    },
    mq = function(a, b) {
        b = b || Sf(document);
        var c = b || Sf(document);
        var d = iq(a),
            e = iq(c),
            f = kq(c);
        if (c == Sf(document)) {
            var g = d.x - c.scrollLeft;
            d = d.a - c.scrollTop;
            B && !Te(10) && (g += f.left, d += f.top)
        } else g = d.x - e.x - f.left, d = d.a - e.a - f.top;
        a = lq(a);
        f = c.clientHeight - a.height;
        e = c.scrollLeft;
        var h = c.scrollTop;
        e += Math.min(g, Math.max(g - (c.clientWidth -
            a.width), 0));
        h += Math.min(d, Math.max(d - f, 0));
        c = new Df(e, h);
        b.scrollLeft = c.x;
        b.scrollTop = c.a
    },
    iq = function(a) {
        var b = Hf(a);
        cb(a, "Parameter is required");
        var c = new Df(0, 0),
            d = eq(b);
        if (a == d) return c;
        a = gq(a);
        b = Tf(If(b).a);
        c.x = a.left + b.x;
        c.a = a.top + b.a;
        return c
    },
    oq = function(a, b) {
        a = nq(a);
        b = nq(b);
        return new Df(a.x - b.x, a.a - b.a)
    },
    pq = function(a) {
        a = gq(a);
        return new Df(a.left, a.top)
    },
    nq = function(a) {
        x(a);
        if (1 == a.nodeType) return pq(a);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new Df(a.clientX, a.clientY)
    },
    qq = function(a,
        b, c) {
        if (b instanceof Ff) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        a.style.width = cq(b, !0);
        a.style.height = cq(c, !0)
    },
    cq = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    },
    rq = function(a) {
        var b = lq;
        if ("none" != bq(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    },
    lq = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Ae && !b && !c;
        return p(b) && !d || !a.getBoundingClientRect ? new Ff(b, c) : (a = gq(a), new Ff(a.right - a.left, a.bottom - a.top))
    },
    sq = function(a) {
        var b = iq(a);
        a = rq(a);
        return new Wp(b.x, b.a, a.width, a.height)
    },
    tq = function(a, b) {
        x(a);
        a = a.style;
        "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
    },
    W = function(a, b) {
        a.style.display = b ? "" : "none"
    },
    uq = function(a) {
        return "none" != a.style.display
    },
    wq = function(a) {
        var b = If(void 0),
            c = b.a;
        if (B && c.createStyleSheet) return b =
            c.createStyleSheet(), vq(b, a), b;
        c = Lf(b.a, "HEAD", void 0, void 0)[0];
        if (!c) {
            var d = Lf(b.a, "BODY", void 0, void 0)[0];
            c = b.b("HEAD");
            d.parentNode.insertBefore(c, d)
        }
        d = b.b("STYLE");
        vq(d, a);
        b.appendChild(c, d);
        return d
    },
    vq = function(a, b) {
        b = nd(b);
        B && p(a.cssText) ? a.cssText = b : a.innerHTML = b
    },
    xq = function(a) {
        return "rtl" == bq(a, "direction")
    },
    yq = ze ? "MozUserSelect" : Ae || xe ? "WebkitUserSelect" : null,
    zq = function(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (yq) {
            if (b = b ? "none" : "", a.style && (a.style[yq] = b), c) {
                a = 0;
                for (var d; d = c[a]; a++) d.style &&
                    (d.style[yq] = b)
            }
        } else if (B || we)
            if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
                for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    },
    Aq = function(a, b, c) {
        a = a.style;
        ze ? a.MozBoxSizing = c : Ae ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + "px";
        a.height = Math.max(b.height, 0) + "px"
    },
    Bq = function(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var e = a.style[c],
            f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f;
        return +b
    },
    Cq = function(a,
        b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Bq(a, b, "left", "pixelLeft") : 0
    },
    Dq = function(a, b) {
        if (B) {
            var c = Cq(a, b + "Left"),
                d = Cq(a, b + "Right"),
                e = Cq(a, b + "Top");
            a = Cq(a, b + "Bottom");
            return new Vp(e, d, a, c)
        }
        c = aq(a, b + "Left");
        d = aq(a, b + "Right");
        e = aq(a, b + "Top");
        a = aq(a, b + "Bottom");
        return new Vp(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
    },
    Eq = function(a) {
        return Dq(a, "padding")
    },
    Fq = {
        thin: 2,
        medium: 4,
        thick: 6
    },
    Gq = function(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ?
            a.currentStyle[b + "Width"] : null;
        return b in Fq ? Fq[b] : Bq(a, b, "left", "pixelLeft")
    },
    kq = function(a) {
        if (B && !Te(9)) {
            var b = Gq(a, "borderLeft"),
                c = Gq(a, "borderRight"),
                d = Gq(a, "borderTop");
            a = Gq(a, "borderBottom");
            return new Vp(d, c, a, b)
        }
        b = aq(a, "borderLeftWidth");
        c = aq(a, "borderRightWidth");
        d = aq(a, "borderTopWidth");
        a = aq(a, "borderBottomWidth");
        return new Vp(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };
var Hq = function(a) {
    Hg.call(this);
    this.m = a;
    this.c = {}
};
w(Hq, Hg);
var Iq = [];
Hq.prototype.O = function(a, b, c, d) {
    return Jq(this, a, b, c, d)
};
var Kq = function(a, b, c, d) {
        Jq(a, b, "click", c, !1, d)
    },
    Jq = function(a, b, c, d, e, f) {
        Ja(c) || (c && (Iq[0] = c.toString()), c = Iq);
        for (var g = 0; g < c.length; g++) {
            var h = H(b, c[g], d || a.handleEvent, e || !1, f || a.m || a);
            if (!h) break;
            a.c[h.key] = h
        }
        return a
    };
Hq.prototype.Og = function(a, b, c, d) {
    return Lq(this, a, b, c, d)
};
var Lq = function(a, b, c, d, e, f) {
    if (Ja(c))
        for (var g = 0; g < c.length; g++) Lq(a, b, c[g], d, e, f);
    else {
        b = gh(b, c, d || a.handleEvent, e, f || a.m || a);
        if (!b) return a;
        a.c[b.key] = b
    }
    return a
};
Hq.prototype.Ja = function(a, b, c, d, e) {
    if (Ja(b))
        for (var f = 0; f < b.length; f++) this.Ja(a, b[f], c, d, e);
    else c = c || this.handleEvent, d = Ma(d) ? !!d.capture : !!d, e = e || this.m || this, c = hh(c), d = !!d, b = Xg(a) ? a.re(b, c, d, e) : a ? (a = jh(a)) ? a.re(b, c, d, e) : null : null, b && (oh(b), delete this.c[b.key]);
    return this
};
var Mq = function(a) {
    Mb(a.c, function(b, c) {
        this.c.hasOwnProperty(c) && oh(b)
    }, a);
    a.c = {}
};
Hq.prototype.W = function() {
    Hq.D.W.call(this);
    Mq(this)
};
Hq.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};
var Nq = function() {};
Ga(Nq);
Nq.prototype.a = 0;
var X = function(a) {
    K.call(this);
    this.a = a || If();
    this.Na = Oq;
    this.ra = null;
    this.Ba = !1;
    this.v = null;
    this.R = void 0;
    this.L = this.o = this.G = this.na = null;
    this.ob = !1
};
w(X, K);
X.prototype.Ed = Nq.M();
var Oq = null,
    Pq = function(a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? "focus" : "blur";
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    },
    Qq = function(a) {
        return a.ra || (a.ra = ":" + (a.Ed.a++).toString(36))
    },
    Rq = function(a, b) {
        if (a.G && a.G.L) {
            var c = a.G.L,
                d = a.ra;
            d in c && delete c[d];
            Ub(a.G.L, b, a)
        }
        a.ra = b
    };
X.prototype.j = function() {
    return this.v
};
var Sq = function(a) {
    a = a.v;
    x(a, "Can not call getElementStrict before rendering/decorating.");
    return a
};
X.prototype.pd = function(a) {
    return this.v ? this.a.pd(a, this.v) : null
};
var Y = function(a) {
        a.R || (a.R = new Hq(a));
        return x(a.R)
    },
    Uq = function(a, b) {
        if (a == b) throw Error("Unable to set parent component");
        if (b && a.G && a.ra && Tq(a.G, a.ra) && a.G != b) throw Error("Unable to set parent component");
        a.G = b;
        X.D.Ad.call(a, b)
    };
X.prototype.getParent = function() {
    return this.G
};
X.prototype.Ad = function(a) {
    if (this.G && this.G != a) throw Error("Method not supported");
    X.D.Ad.call(this, a)
};
X.prototype.Ma = function() {
    this.v = Fg(this.a, "DIV")
};
X.prototype.Ua = function(a) {
    Vq(this, a)
};
var Vq = function(a, b, c) {
    if (a.Ba) throw Error("Component already rendered");
    a.v || a.Ma();
    b ? b.insertBefore(a.v, c || null) : a.a.a.body.appendChild(a.v);
    a.G && !a.G.Ba || a.ea()
};
k = X.prototype;
k.ia = function(a) {
    if (this.Ba) throw Error("Component already rendered");
    if (a && this.Rc(a)) {
        this.ob = !0;
        var b = Hf(a);
        this.a && this.a.a == b || (this.a = If(a));
        this.Da(a);
        this.ea()
    } else throw Error("Invalid element to decorate");
};
k.Rc = function() {
    return !0
};
k.Da = function(a) {
    this.v = a
};
k.ea = function() {
    this.Ba = !0;
    Wq(this, function(a) {
        !a.Ba && a.j() && a.ea()
    })
};
k.nb = function() {
    Wq(this, function(a) {
        a.Ba && a.nb()
    });
    this.R && Mq(this.R);
    this.Ba = !1
};
k.W = function() {
    this.Ba && this.nb();
    this.R && (this.R.La(), delete this.R);
    Wq(this, function(a) {
        a.La()
    });
    !this.ob && this.v && hg(this.v);
    this.G = this.na = this.v = this.L = this.o = null;
    X.D.W.call(this)
};
k.hb = function(a, b) {
    this.kd(a, Xq(this), b)
};
k.kd = function(a, b, c) {
    x(!!a, "Provided element must not be null.");
    if (a.Ba && (c || !this.Ba)) throw Error("Component already rendered");
    if (0 > b || b > Xq(this)) throw Error("Child component index out of bounds");
    this.L && this.o || (this.L = {}, this.o = []);
    if (a.getParent() == this) {
        var d = Qq(a);
        this.L[d] = a;
        vb(this.o, a)
    } else Ub(this.L, Qq(a), a);
    Uq(a, this);
    Bb(this.o, b, 0, a);
    a.Ba && this.Ba && a.getParent() == this ? (c = this.$b(), b = c.childNodes[b] || null, b != a.j() && c.insertBefore(a.j(), b)) : c ? (this.v || this.Ma(), b = Yq(this, b + 1), Vq(a, this.$b(),
        b ? b.v : null)) : this.Ba && !a.Ba && a.v && a.v.parentNode && 1 == a.v.parentNode.nodeType && a.ea()
};
k.$b = function() {
    return this.v
};
var Zq = function(a) {
        null == a.Na && (a.Na = xq(a.Ba ? a.v : a.a.a.body));
        return a.Na
    },
    Xq = function(a) {
        return a.o ? a.o.length : 0
    },
    Tq = function(a, b) {
        a.L && b ? (a = a.L, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
        return b
    },
    Yq = function(a, b) {
        return a.o ? a.o[b] || null : null
    },
    Wq = function(a, b, c) {
        a.o && y(a.o, b, c)
    },
    $q = function(a, b) {
        return a.o && b ? jb(a.o, b) : -1
    };
X.prototype.removeChild = function(a, b) {
    if (a) {
        var c = t(a) ? a : Qq(a);
        a = Tq(this, c);
        if (c && a) {
            var d = this.L;
            c in d && delete d[c];
            vb(this.o, a);
            b && (a.nb(), a.v && hg(a.v));
            Uq(a, null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};
var br = function(a, b) {
    K.call(this);
    a && ar(this, a, b)
};
w(br, K);
k = br.prototype;
k.v = null;
k.Gf = null;
k.Lg = null;
k.Hf = null;
k.Eb = -1;
k.qc = -1;
k.rg = !1;
var cr = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    dr = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    er = !Ae || Re("525"),
    fr = De && ze;
br.prototype.a = function(a) {
    if (Ae || xe)
        if (17 == this.Eb && !a.ctrlKey || 18 == this.Eb && !a.altKey || De && 91 == this.Eb && !a.metaKey) this.qc = this.Eb = -1; - 1 == this.Eb && (a.ctrlKey && 17 != a.keyCode ? this.Eb = 17 : a.altKey && 18 != a.keyCode ? this.Eb = 18 : a.metaKey && 91 != a.keyCode && (this.Eb = 91));
    er && !xh(a.keyCode, this.Eb, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.qc = wh(a.keyCode), fr && (this.rg = a.altKey))
};
br.prototype.b = function(a) {
    this.qc = this.Eb = -1;
    this.rg = a.altKey
};
br.prototype.handleEvent = function(a) {
    var b = a.b,
        c = b.altKey;
    if (B && "keypress" == a.type) {
        var d = this.qc;
        var e = 13 != d && 27 != d ? b.keyCode : 0
    } else(Ae || xe) && "keypress" == a.type ? (d = this.qc, e = 0 <= b.charCode && 63232 > b.charCode && uh(d) ? b.charCode : 0) : we && !Ae ? (d = this.qc, e = uh(d) ? b.keyCode : 0) : ("keypress" == a.type ? (fr && (c = this.rg), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.qc, e = b.charCode) : (d = b.keyCode || this.qc, e = b.charCode || 0)) : (d = b.keyCode || this.qc, e = b.charCode || 0), De && 63 == e && 224 == d && (d = 191));
    var f = d = wh(d);
    d ? 63232 <= d && d in cr ? f = cr[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in dr && (f = dr[b.keyIdentifier]);
    ze && er && "keypress" == a.type && !xh(f, this.Eb, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.Eb, this.Eb = f, b = new gr(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
};
br.prototype.j = function() {
    return this.v
};
var ar = function(a, b, c) {
        a.Hf && hr(a);
        a.v = b;
        a.Gf = H(a.v, "keypress", a, c);
        a.Lg = H(a.v, "keydown", a.a, c, a);
        a.Hf = H(a.v, "keyup", a.b, c, a)
    },
    hr = function(a) {
        a.Gf && (oh(a.Gf), oh(a.Lg), oh(a.Hf), a.Gf = null, a.Lg = null, a.Hf = null);
        a.v = null;
        a.Eb = -1;
        a.qc = -1
    };
br.prototype.W = function() {
    br.D.W.call(this);
    hr(this)
};
var gr = function(a, b, c, d) {
    Tg.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.repeat = c
};
w(gr, Tg);
var ir = function() {},
    jr;
Ga(ir);
var kr = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
};
ir.prototype.Vc = function() {};
ir.prototype.ub = function(a) {
    return a.a.b("DIV", lr(this, a).join(" "), a.Ta())
};
ir.prototype.Ub = function(a) {
    return a
};
var nr = function(a, b, c) {
    if (a = a.j ? a.j() : a) {
        var d = [b];
        B && !Re("7") && (d = mr(Lp(a), b), d.push(b));
        (c ? Np : Op)(a, d)
    }
};
ir.prototype.Uc = function() {
    return !0
};
ir.prototype.Xa = function(a, b) {
    b.id && Rq(a, b.id);
    var c = this.Ub(b);
    c && c.firstChild ? or(a, c.firstChild.nextSibling ? yb(c.childNodes) : c.firstChild) : a.Wc = null;
    var d = 0,
        e = this.xa(),
        f = this.xa(),
        g = !1,
        h = !1,
        l = !1,
        m = yb(Lp(b));
    y(m, function(r) {
        g || r != e ? h || r != f ? d |= this.g(r) : h = !0 : (g = !0, f == e && (h = !0));
        1 == this.g(r) && (fb(c), xg(c) && yg(c) && vg(c, !1))
    }, this);
    a.Xc = d;
    g || (m.push(e), f == e && (h = !0));
    h || m.push(f);
    (a = a.Xb) && m.push.apply(m, a);
    if (B && !Re("7")) {
        var q = mr(m);
        0 < q.length && (m.push.apply(m, q), l = !0)
    }
    if (!g || !h || a || l) b.className =
        m.join(" ");
    return b
};
ir.prototype.Uh = function(a) {
    Zq(a) && this.xg(a.j(), !0);
    a.isEnabled() && this.Kd(a, a.isVisible())
};
var pr = function(a, b, c) {
        if (a = c || a.Vc()) x(b, "The element passed as a first parameter cannot be null."), c = b.getAttribute("role") || null, a != c && Ep(b, a)
    },
    rr = function(a, b, c) {
        x(b);
        x(c);
        var d = b.Za;
        null != d && Kp(c, d);
        b.isVisible() || Gp(c, "hidden", !b.isVisible());
        b.isEnabled() || a.fc(c, 1, !b.isEnabled());
        qr(b, 8) && a.fc(c, 8, b.Kg());
        qr(b, 16) && a.fc(c, 16, b.Ea(16));
        qr(b, 64) && a.fc(c, 64, b.Ea(64))
    };
k = ir.prototype;
k.pf = function(a, b) {
    zq(a, !b, !B && !we)
};
k.xg = function(a, b) {
    nr(a, this.xa() + "-rtl", b)
};
k.wg = function(a) {
    var b;
    return qr(a, 32) && (b = a.j()) ? xg(b) && yg(b) : !1
};
k.Kd = function(a, b) {
    var c;
    if (qr(a, 32) && (c = a.j())) {
        if (!b && a.Ea(32)) {
            try {
                c.blur()
            } catch (d) {}
            a.Ea(32) && a.qf(null)
        }(xg(c) && yg(c)) != b && vg(c, b)
    }
};
k.setVisible = function(a, b) {
    W(a, b);
    a && Gp(a, "hidden", !b)
};
k.rd = function(a, b, c) {
    var d = a.j();
    if (d) {
        var e = this.a(b);
        e && nr(a, e, c);
        this.fc(d, b, c)
    }
};
k.fc = function(a, b, c) {
    jr || (jr = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    x(a, "The element passed as a first parameter cannot be null.");
    b = jr[b];
    var d = a.getAttribute("role") || null;
    d && (d = kr[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && Gp(a, b, c)
};
k.ac = function(a, b) {
    var c = this.Ub(a);
    c && (dg(c), b && (t(b) ? G(c, b) : (a = function(d) {
        if (d) {
            var e = Hf(c);
            c.appendChild(t(d) ? e.createTextNode(d) : d)
        }
    }, Ja(b) ? y(b, a) : !Ka(b) || "nodeType" in b ? a(b) : y(yb(b), a))))
};
k.xa = function() {
    return "goog-control"
};
var lr = function(a, b) {
        var c = a.xa(),
            d = [c],
            e = a.xa();
        e != c && d.push(e);
        c = b.Xc;
        for (e = []; c;) {
            var f = c & -c;
            e.push(a.a(f));
            c &= ~f
        }
        d.push.apply(d, e);
        (a = b.Xb) && d.push.apply(d, a);
        B && !Re("7") && d.push.apply(d, mr(d));
        return d
    },
    mr = function(a, b) {
        var c = [];
        b && (a = wb(a, [b]));
        y([], function(d) {
            !ob(d, Ta(sb, a)) || b && !sb(d, b) || c.push(d.join("_"))
        });
        return c
    };
ir.prototype.a = function(a) {
    this.b || sr(this);
    return this.b[a]
};
ir.prototype.g = function(a) {
    if (!this.R) {
        this.b || sr(this);
        var b = this.b,
            c = {},
            d;
        for (d in b) c[b[d]] = d;
        this.R = c
    }
    a = parseInt(this.R[a], 10);
    return isNaN(a) ? 0 : a
};
var sr = function(a) {
    var b = a.xa(),
        c = !Jc(b.replace(/\xa0|\s/g, " "), " ");
    x(c, "ControlRenderer has an invalid css class: '" + b + "'");
    a.b = {
        1: b + "-disabled",
        2: b + "-hover",
        4: b + "-active",
        8: b + "-selected",
        16: b + "-checked",
        32: b + "-focused",
        64: b + "-open"
    }
};
var tr = function() {};
w(tr, ir);
Ga(tr);
k = tr.prototype;
k.Vc = function() {
    return "button"
};
k.fc = function(a, b, c) {
    switch (b) {
        case 8:
        case 16:
            x(a, "The button DOM element cannot be null.");
            Gp(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            tr.D.fc.call(this, a, b, c)
    }
};
k.ub = function(a) {
    var b = tr.D.ub.call(this, a);
    ur(b, a.h);
    var c = a.Z();
    c && this.lf(b, c);
    qr(a, 16) && this.fc(b, 16, a.Ea(16));
    return b
};
k.Xa = function(a, b) {
    b = tr.D.Xa.call(this, a, b);
    var c = this.Z(b);
    a.aa = c;
    a.h = b.title;
    qr(a, 16) && this.fc(b, 16, a.Ea(16));
    return b
};
k.Z = Fa;
k.lf = Fa;
var ur = function(a, b) {
        a && (b ? a.title = b : a.removeAttribute("title"))
    },
    wr = function(a, b, c) {
        var d = Zq(b),
            e = a.xa() + "-collapse-left";
        a = a.xa() + "-collapse-right";
        vr(b, d ? a : e, !!(c & 1));
        vr(b, d ? e : a, !!(c & 2))
    };
tr.prototype.xa = function() {
    return "goog-button"
};
var yr = function(a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (!La(b)) throw Error("Invalid decorator function " + b);
        xr[a] = b
    },
    zr = {},
    xr = {};
var Z = function(a, b, c) {
    X.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b;) {
            d = Qa(b);
            if (d = zr[d]) break;
            b = b.D ? b.D.constructor : null
        }
        b = d ? La(d.M) ? d.M() : new d : null
    }
    this.c = b;
    this.Wc = p(a) ? a : null;
    this.Za = null
};
w(Z, X);
k = Z.prototype;
k.Wc = null;
k.Xc = 0;
k.Je = 39;
k.xc = 255;
k.Ie = 0;
k.rf = !0;
k.Xb = null;
k.Dg = !0;
k.Oe = !1;
k.zg = null;
var Br = function(a, b) {
        a.Ba && b != a.Dg && Ar(a, b);
        a.Dg = b
    },
    Cr = function(a, b) {
        b && (a.Xb ? sb(a.Xb, b) || a.Xb.push(b) : a.Xb = [b], nr(a, b, !0))
    },
    Dr = function(a, b) {
        b && a.Xb && vb(a.Xb, b) && (0 == a.Xb.length && (a.Xb = null), nr(a, b, !1))
    },
    vr = function(a, b, c) {
        c ? Cr(a, b) : Dr(a, b)
    };
Z.prototype.Ma = function() {
    var a = this.c.ub(this);
    this.v = a;
    pr(this.c, a, this.C());
    this.Oe || this.c.pf(a, !1);
    this.isVisible() || this.c.setVisible(a, !1)
};
Z.prototype.C = function() {
    return this.zg
};
var Er = function(a, b) {
    a.Za = b;
    (a = a.j()) && Kp(a, b)
};
Z.prototype.$b = function() {
    return this.c.Ub(this.j())
};
Z.prototype.Rc = function(a) {
    return this.c.Uc(a)
};
Z.prototype.Da = function(a) {
    this.v = a = this.c.Xa(this, a);
    pr(this.c, a, this.C());
    this.Oe || this.c.pf(a, !1);
    this.rf = "none" != a.style.display
};
Z.prototype.ea = function() {
    Z.D.ea.call(this);
    rr(this.c, this, Sq(this));
    this.c.Uh(this);
    if (this.Je & -2 && (this.Dg && Ar(this, !0), qr(this, 32))) {
        var a = this.j();
        if (a) {
            var b = this.w || (this.w = new br);
            ar(b, a);
            Y(this).O(b, "key", this.bb).O(a, "focus", this.Lk).O(a, "blur", this.qf)
        }
    }
};
var Ar = function(a, b) {
    var c = Y(a),
        d = a.j();
    b ? (c.O(d, Rg.ge, a.vb).O(d, [Rg.he, Rg.fe], a.Db).O(d, "mouseover", a.yg).O(d, "mouseout", a.Eg), a.Be != Fa && c.O(d, "contextmenu", a.Be), B && (Re(9) || c.O(d, "dblclick", a.Yh), a.K || (a.K = new Fr(a), Jg(a, a.K)))) : (c.Ja(d, Rg.ge, a.vb).Ja(d, [Rg.he, Rg.fe], a.Db).Ja(d, "mouseover", a.yg).Ja(d, "mouseout", a.Eg), a.Be != Fa && c.Ja(d, "contextmenu", a.Be), B && (Re(9) || c.Ja(d, "dblclick", a.Yh), Ig(a.K), a.K = null))
};
Z.prototype.nb = function() {
    Z.D.nb.call(this);
    this.w && hr(this.w);
    this.isVisible() && this.isEnabled() && this.c.Kd(this, !1)
};
Z.prototype.W = function() {
    Z.D.W.call(this);
    this.w && (this.w.La(), delete this.w);
    delete this.c;
    this.K = this.Xb = this.Wc = null
};
Z.prototype.Ta = function() {
    return this.Wc
};
Z.prototype.g = function(a) {
    this.c.ac(this.j(), a);
    this.Wc = a
};
var or = function(a, b) {
    a.Wc = b
};
k = Z.prototype;
k.rb = function() {
    var a = this.Ta();
    if (!a) return "";
    a = t(a) ? a : Ja(a) ? lb(a, Bg).join("") : Ag(a);
    return be(a)
};
k.isVisible = function() {
    return this.rf
};
k.setVisible = function(a, b) {
    return b || this.rf != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.j()) && this.c.setVisible(b, a), this.isEnabled() && this.c.Kd(this, a), this.rf = a, !0) : !1
};
k.isEnabled = function() {
    return !this.Ea(1)
};
k.qa = function(a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Gr(this, 1, !a) || (a || (Hr(this, !1), Ir(this, !1)), this.isVisible() && this.c.Kd(this, a), Jr(this, 1, !a, !0))
};
var Ir = function(a, b) {
    Gr(a, 2, b) && Jr(a, 2, b)
};
Z.prototype.kb = function() {
    return this.Ea(4)
};
var Hr = function(a, b) {
    Gr(a, 4, b) && Jr(a, 4, b)
};
k = Z.prototype;
k.Kg = function() {
    return this.Ea(8)
};
k.ad = function(a) {
    Gr(this, 8, a) && Jr(this, 8, a)
};
k.$c = function(a) {
    Gr(this, 16, a) && Jr(this, 16, a)
};
k.Vd = function(a) {
    Gr(this, 32, a) && Jr(this, 32, a)
};
k.Wa = function(a) {
    Gr(this, 64, a) && Jr(this, 64, a)
};
k.Ea = function(a) {
    return !!(this.Xc & a)
};
var Jr = function(a, b, c, d) {
        d || 1 != b ? qr(a, b) && c != a.Ea(b) && (a.c.rd(a, b, c), a.Xc = c ? a.Xc | b : a.Xc & ~b) : a.qa(!c)
    },
    qr = function(a, b) {
        return !!(a.Je & b)
    };
Z.prototype.Oa = function(a, b) {
    if (this.Ba && this.Ea(a) && !b) throw Error("Component already rendered");
    !b && this.Ea(a) && Jr(this, a, !1);
    this.Je = b ? this.Je | a : this.Je & ~a
};
var Kr = function(a, b) {
        return !!(a.xc & b) && qr(a, b)
    },
    Gr = function(a, b, c) {
        return qr(a, b) && a.Ea(b) != c && (!(a.Ie & b) || a.dispatchEvent(Pq(b, c))) && !a.lc
    };
k = Z.prototype;
k.yg = function(a) {
    (!a.relatedTarget || !ng(this.j(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Kr(this, 2) && Ir(this, !0)
};
k.Eg = function(a) {
    a.relatedTarget && ng(this.j(), a.relatedTarget) || !this.dispatchEvent("leave") || (Kr(this, 4) && Hr(this, !1), Kr(this, 2) && Ir(this, !1))
};
k.Be = Fa;
k.vb = function(a) {
    this.isEnabled() && (Kr(this, 2) && Ir(this, !0), Vg(a) && (Kr(this, 4) && Hr(this, !0), this.c && this.c.wg(this) && this.j().focus()));
    !this.Oe && Vg(a) && a.preventDefault()
};
k.Db = function(a) {
    this.isEnabled() && (Kr(this, 2) && Ir(this, !0), this.kb() && this.Yc(a) && Kr(this, 4) && Hr(this, !1))
};
k.Yh = function(a) {
    this.isEnabled() && this.Yc(a)
};
k.Yc = function(a) {
    Kr(this, 16) && this.$c(!this.Ea(16));
    Kr(this, 8) && this.ad(!0);
    Kr(this, 64) && this.Wa(!this.Ea(64));
    var b = new Kg("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.g = a.g);
    return this.dispatchEvent(b)
};
k.Lk = function() {
    Kr(this, 32) && this.Vd(!0)
};
k.qf = function() {
    Kr(this, 4) && Hr(this, !1);
    Kr(this, 32) && this.Vd(!1)
};
k.bb = function(a) {
    return this.isVisible() && this.isEnabled() && this.Ld(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
k.Ld = function(a) {
    return 13 == a.keyCode && this.Yc(a)
};
if (!La(Z)) throw Error("Invalid component class " + Z);
if (!La(ir)) throw Error("Invalid renderer class " + ir);
var Lr = Qa(Z);
zr[Lr] = ir;
yr("goog-control", function() {
    return new Z(null)
});
var Fr = function(a) {
    Hg.call(this);
    this.b = a;
    this.a = !1;
    this.c = new Hq(this);
    Jg(this, this.c);
    a = Sq(this.b);
    this.c.O(a, "mousedown", this.h).O(a, "mouseup", this.o).O(a, "click", this.g)
};
w(Fr, Hg);
var Mr = !B || Te(9);
Fr.prototype.h = function() {
    this.a = !1
};
Fr.prototype.o = function() {
    this.a = !0
};
var Nr = function(a, b) {
    if (!Mr) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
};
Fr.prototype.g = function(a) {
    if (this.a) this.a = !1;
    else {
        var b = a.b,
            c = b.button,
            d = b.type,
            e = Nr(b, "mousedown");
        this.b.vb(new Tg(e, a.a));
        e = Nr(b, "mouseup");
        this.b.Db(new Tg(e, a.a));
        Mr || (b.button = c, b.type = d)
    }
};
Fr.prototype.W = function() {
    this.b = null;
    Fr.D.W.call(this)
};
var Or = function() {};
w(Or, tr);
Ga(Or);
k = Or.prototype;
k.Vc = function() {};
k.ub = function(a) {
    Br(a, !1);
    a.xc &= -256;
    a.Oa(32, !1);
    return a.a.b("BUTTON", {
        "class": lr(this, a).join(" "),
        disabled: !a.isEnabled(),
        title: a.h || "",
        value: a.Z() || ""
    }, a.rb() || "")
};
k.Uc = function(a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
};
k.Xa = function(a, b) {
    Br(a, !1);
    a.xc &= -256;
    a.Oa(32, !1);
    if (b.disabled) {
        var c = ab(this.a(1));
        T(b, c)
    }
    return Or.D.Xa.call(this, a, b)
};
k.Uh = function(a) {
    Y(a).O(a.j(), "click", a.Yc)
};
k.pf = Fa;
k.xg = Fa;
k.wg = function(a) {
    return a.isEnabled()
};
k.Kd = Fa;
k.rd = function(a, b, c) {
    Or.D.rd.call(this, a, b, c);
    (a = a.j()) && 1 == b && (a.disabled = c)
};
k.Z = function(a) {
    return a.value
};
k.lf = function(a, b) {
    a && (a.value = b)
};
k.fc = Fa;
var Pr = function(a, b, c) {
    Z.call(this, a, b || Or.M(), c)
};
w(Pr, Z);
k = Pr.prototype;
k.Z = function() {
    return this.aa
};
k.mf = function(a) {
    this.aa = a;
    this.c.lf(this.j(), a)
};
k.qd = function(a) {
    this.h = a;
    ur(this.j(), a)
};
k.W = function() {
    Pr.D.W.call(this);
    delete this.aa;
    delete this.h
};
k.ea = function() {
    Pr.D.ea.call(this);
    if (qr(this, 32)) {
        var a = this.j();
        a && Y(this).O(a, "keyup", this.Ld)
    }
};
k.Ld = function(a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Yc(a) : 32 == a.keyCode
};
yr("goog-button", function() {
    return new Pr(null)
});
var Qr = function(a) {
    a = a || {};
    var b = a.attributes,
        c = a.content,
        d = a.disabled,
        e = a.id,
        f = a.Lq,
        g = a.title,
        h = a.Zn,
        l = a.value,
        m = P;
    e = '<div role="button"' + (e ? ' id="' + S(e) + '"' : "") + ' class="';
    var q = a || {};
    a = q.zq;
    var r = q.disabled,
        u = q.checked,
        A = q.width,
        Q = "goog-inline-block jfk-button ";
    q = q.style;
    switch (Ma(q) ? q.toString() : q) {
        case 0:
            Q += "jfk-button-standard";
            break;
        case 2:
            Q += "jfk-button-action";
            break;
        case 3:
            Q += "jfk-button-primary";
            break;
        case 1:
            Q += "jfk-button-default";
            break;
        case 4:
            Q += "jfk-button-flat";
            break;
        case 5:
            Q += "jfk-button-mini";
            break;
        case 6:
            Q += "jfk-button-contrast";
            break;
        default:
            Q += "jfk-button-standard"
    }
    Q += (Cn(A, 1) ? " jfk-button-narrow" : "") + (u ? " jfk-button-checked" : "") + (a ? " " + a : "") + (r ? " jfk-button-disabled" : "");
    d = e + S(Q) + '"' + (d ? ' aria-disabled="true"' : ' tabindex="' + (f ? S(f) : "0") + '"') + (g ? h ? ' data-tooltip="' + S(g) + '"' : ' title="' + S(g) + '"' : "") + (l ? ' value="' + S(l) + '"' : "");
    b ? (An(b, rn, yn) ? b = b.Ta().replace(/([^"'\s])$/, "$1 ") : (b = String(b), Yn.test(b) || (Za("Bad value `%s` for |filterHtmlAttributes", [b]), b = "zSoyz")), b = " " + b) : b = "";
    return m(d +
        b + ">" + R(null != c ? c : "") + "</div>")
};
Qr.a = "jfk.templates.button.strict";
var Rr = function(a, b, c) {
    Hg.call(this);
    this.tc = a;
    this.c = b || 0;
    this.a = c;
    this.b = v(this.pg, this)
};
w(Rr, Hg);
k = Rr.prototype;
k.ra = 0;
k.W = function() {
    Rr.D.W.call(this);
    this.stop();
    delete this.tc;
    delete this.a
};
k.start = function(a) {
    this.stop();
    this.ra = Bi(this.b, p(a) ? a : this.c)
};
k.stop = function() {
    this.kb() && Ci(this.ra);
    this.ra = 0
};
k.kb = function() {
    return 0 != this.ra
};
k.pg = function() {
    this.ra = 0;
    this.tc && this.tc.call(this.a)
};
var Ur = function(a) {
        return he(yc(a.replace(Sr, function(b, c) {
            return Tr.test(c) ? "" : " "
        }).replace(/[\t\n ]+/g, " ")))
    },
    Tr = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,
    Sr = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;
var Vr = function() {
    if (Ee) {
        var a = /Windows NT ([0-9.]+)/;
        return (a = a.exec(qd)) ? a[1] : "0"
    }
    return De ? (a = /10[_.][0-9_.]+/, (a = a.exec(qd)) ? a[0].replace(/_/g, ".") : "10") : Fe ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(qd)) ? a[1] : "") : Ge || He || Ie ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(qd)) ? a[1].replace(/_/g, ".") : "") : ""
}();
var Zr = function(a, b, c, d, e, f, g, h, l) {
        x(c);
        var m = Wr(c),
            q = sq(a),
            r = jq(a);
        if (r) {
            var u = new Wp(r.left, r.top, r.right - r.left, r.bottom - r.top);
            r = Math.max(q.left, u.left);
            var A = Math.min(q.left + q.width, u.left + u.width);
            if (r <= A) {
                var Q = Math.max(q.top, u.top);
                u = Math.min(q.top + q.height, u.top + u.height);
                Q <= u && (q.left = r, q.top = Q, q.width = A - r, q.height = u - Q)
            }
        }
        r = If(a);
        Q = If(c);
        if (r.a != Q.a) {
            A = r.a.body;
            Q = Gg(Q);
            u = new Df(0, 0);
            var M = Uf(Hf(A));
            if (ue(M, "parent")) {
                var Oa = A;
                do {
                    var Hb = M == Q ? iq(Oa) : pq(x(Oa));
                    u.x += Hb.x;
                    u.a += Hb.a
                } while (M && M !=
                    Q && M != M.parent && (Oa = M.frameElement) && (M = M.parent))
            }
            A = Ef(u, iq(A));
            !B || Te(9) || Qf(r.a) || (A = Ef(A, Tf(r.a)));
            q.left += A.x;
            q.top += A.a
        }
        a = Xr(a, b);
        b = q.left;
        a & 4 ? b += q.width : a & 2 && (b += q.width / 2);
        q = new Df(b, q.top + (a & 1 ? q.height : 0));
        q = Ef(q, m);
        e && (q.x += (a & 4 ? -1 : 1) * e.x, q.a += (a & 1 ? -1 : 1) * e.a);
        if (g)
            if (l) var Ia = l;
            else if (Ia = jq(c)) Ia.top -= m.a, Ia.right -= m.x, Ia.bottom -= m.a, Ia.left -= m.x;
        return Yr(q, c, d, f, Ia, g, h)
    },
    Wr = function(a) {
        if (a = a.offsetParent) {
            var b = "HTML" == a.tagName || "BODY" == a.tagName;
            if (!b || "static" != bq(a, "position")) {
                var c =
                    iq(a);
                if (!b) {
                    b = xq(a);
                    var d;
                    if (d = b) {
                        d = $e && Bk(10);
                        var e = Je && 0 <= Lc(Vr, 10);
                        d = ze || d || e
                    }
                    b = d ? -a.scrollLeft : !b || ye && Re("8") || "visible" == bq(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                    c = Ef(c, new Df(b, a.scrollTop))
                }
            }
        }
        return c || new Df
    },
    Yr = function(a, b, c, d, e, f, g) {
        a = new Df(a.x, a.a);
        var h = Xr(b, c);
        c = rq(b);
        g = g ? new Ff(g.width, g.height) : new Ff(c.width, c.height);
        a = new Df(a.x, a.a);
        g = new Ff(g.width, g.height);
        var l = 0;
        if (d || 0 != h) h & 4 ? a.x -= g.width + (d ? d.right : 0) : h & 2 ? a.x -= g.width / 2 : d && (a.x += d.left),
            h & 1 ? a.a -= g.height + (d ? d.bottom : 0) : d && (a.a += d.top);
        if (f) {
            if (e) {
                d = a;
                h = g;
                l = 0;
                65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                132 == (f & 132) && (d.a < e.top || d.a >= e.bottom) && (f &= -5);
                d.x < e.left && f & 1 && (d.x = e.left, l |= 1);
                if (f & 16) {
                    var m = d.x;
                    d.x < e.left && (d.x = e.left, l |= 4);
                    d.x + h.width > e.right && (h.width = Math.min(e.right - d.x, m + h.width - e.left), h.width = Math.max(h.width, 0), l |= 4)
                }
                d.x + h.width > e.right && f & 1 && (d.x = Math.max(e.right - h.width, e.left), l |= 1);
                f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + h.width > e.right ? 32 : 0));
                d.a < e.top && f & 4 && (d.a =
                    e.top, l |= 2);
                f & 32 && (m = d.a, d.a < e.top && (d.a = e.top, l |= 8), d.a + h.height > e.bottom && (h.height = Math.min(e.bottom - d.a, m + h.height - e.top), h.height = Math.max(h.height, 0), l |= 8));
                d.a + h.height > e.bottom && f & 4 && (d.a = Math.max(e.bottom - h.height, e.top), l |= 2);
                f & 8 && (l |= (d.a < e.top ? 64 : 0) | (d.a + h.height > e.bottom ? 128 : 0));
                e = l
            } else e = 256;
            l = e
        }
        f = new Wp(0, 0, 0, 0);
        f.left = a.x;
        f.top = a.a;
        f.width = g.width;
        f.height = g.height;
        e = l;
        if (e & 496) return e;
        dq(b, new Df(f.left, f.top));
        g = new Ff(f.width, f.height);
        c == g || c && g && c.width == g.width && c.height ==
            g.height || (c = g, a = Hf(b), g = Qf(If(a).a), !B || Re("10") || g && Re("8") ? Aq(b, c, "border-box") : (a = b.style, g ? (g = Eq(b), b = kq(b), a.pixelWidth = c.width - b.left - g.left - g.right - b.right, a.pixelHeight = c.height - b.top - g.top - g.bottom - b.bottom) : (a.pixelWidth = c.width, a.pixelHeight = c.height)));
        return e
    },
    Xr = function(a, b) {
        return (b & 8 && xq(a) ? b ^ 4 : b) & -9
    };
var $r = function() {};
$r.prototype.c = function() {};
var as = function(a, b) {
    this.g = a;
    this.m = !!b;
    this.o = {
        0: this.g + "-arrowright",
        1: this.g + "-arrowup",
        2: this.g + "-arrowdown",
        3: this.g + "-arrowleft"
    }
};
w(as, $r);
k = as.prototype;
k.Df = !1;
k.Uf = 2;
k.Ah = 20;
k.Wf = 3;
k.Rg = -5;
k.Ne = !1;
var bs = function(a, b, c, d, e) {
    null != b && (a.Wf = b);
    null != c && (a.Uf = c);
    ya(d) && (a.Ah = Math.max(d, 15));
    ya(e) && (a.Rg = e)
};
as.prototype.c = function(a, b, c) {
    x(this.h, "Must call setElements first.");
    a = this.Uf;
    2 == a && (a = 0);
    cs(this, this.Wf, a, 2 == this.Uf ? ds(this.Wf) ? this.a.offsetHeight / 2 : this.a.offsetWidth / 2 : this.Ah, 0, c)
};
var cs = function(a, b, c, d, e, f) {
        if (a.b) {
            var g = es(b, c);
            var h = a.b;
            var l = rq(h);
            l = (ds(b) ? l.height / 2 : l.width / 2) - d;
            var m = Xr(h, g),
                q;
            if (q = jq(h)) h = Xp(sq(h)), ds(b) ? h.top < q.top && !(m & 1) ? l -= q.top - h.top : h.bottom > q.bottom && m & 1 && (l -= h.bottom - q.bottom) : h.left < q.left && !(m & 4) ? l -= q.left - h.left : h.right > q.right && m & 4 && (l -= h.right - q.right);
            h = l;
            h = ds(b) ? new Df(a.Rg, h) : new Df(h, a.Rg);
            l = ds(b) ? 6 : 9;
            a.Ne && 2 == e && (l = ds(b) ? 4 : 1);
            m = b ^ 3;
            ds(b) && "rtl" == a.b.dir && (m = b);
            g = Zr(a.b, es(m, c), a.a, g, h, f, a.Df ? l : 0, void 0, null);
            if (2 != e && g & 496) {
                cs(a, b ^
                    3, c, d, a.Ne && 0 == e ? 1 : 2, f);
                return
            }!a.m || g & 496 || (e = parseFloat(a.a.style.left), f = parseFloat(a.a.style.top), x(!isNaN(e) && !isNaN(f), "Could not parse position."), isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || dq(a.a, Math.round(e), Math.round(f)))
        }
        fs(a, b, c, d)
    },
    fs = function(a, b, c, d) {
        var e = a.h;
        Mb(a.o, function(f) {
            V(e, f, !1)
        }, a);
        T(e, a.o[b]);
        e.style.top = e.style.left = e.style.right = e.style.bottom = "";
        a.b ? (c = oq(a.b, a.a), d = gs(a.b, b), ds(b) ? e.style.top = hs(c.a + d.a, a.a.offsetHeight - 15) + "px" : e.style.left = hs(c.x + d.x, a.a.offsetWidth -
            15) + "px") : e.style[0 == c ? ds(b) ? "top" : "left" : ds(b) ? "bottom" : "right"] = d + "px"
    },
    hs = function(a, b) {
        return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
    },
    es = function(a, b) {
        switch (a) {
            case 2:
                return 0 == b ? 1 : 5;
            case 1:
                return 0 == b ? 0 : 4;
            case 0:
                return 0 == b ? 12 : 13;
            default:
                return 0 == b ? 8 : 9
        }
    },
    gs = function(a, b) {
        var c = 0,
            d = 0;
        a = rq(a);
        switch (b) {
            case 2:
                c = a.width / 2;
                break;
            case 1:
                c = a.width / 2;
                d = a.height;
                break;
            case 0:
                d = a.height / 2;
                break;
            case 3:
                c = a.width, d = a.height / 2
        }
        return new Df(c, d)
    },
    ds = function(a) {
        return 0 == a || 3 == a
    };
var is = function(a) {
    Hg.call(this);
    this.b = a || If()
};
w(is, Hg);
is.prototype.h = function() {
    Ep(this.j(), "tooltip");
    Gp(this.j(), "live", "polite")
};
var js = function(a) {
    is.call(this, a);
    this.a = this.b.b("DIV", "jfk-tooltip-contentId");
    this.g = this.b.b("DIV", "jfk-tooltip-arrow", this.b.b("DIV", "jfk-tooltip-arrowimplbefore"), this.b.b("DIV", "jfk-tooltip-arrowimplafter"));
    this.c = this.b.b("DIV", {
        "class": "jfk-tooltip",
        role: "tooltip"
    }, this.a, this.g);
    this.h()
};
w(js, is);
js.prototype.j = function() {
    return this.c
};
js.prototype.W = function() {
    js.D.W.call(this);
    this.c && hg(this.c)
};
var ks = function(a) {
    js.call(this, a)
};
w(ks, js);
ks.prototype.h = function() {
    Ep(this.j(), "tooltip")
};
var ms = function(a) {
        var b = a.getAttribute("title");
        b && ls(a, b)
    },
    ls = function(a, b, c) {
        c || (c = b instanceof Ad ? Ur(Bd(b).toString()) : b);
        a.removeAttribute("title");
        a.removeAttribute("data-tooltip-contained");
        a.removeAttribute("data-tooltip");
        b ? (b instanceof Ad ? a.a = b : (a.setAttribute("data-tooltip", b), a.a = null), a.setAttribute("aria-label", c)) : (a.a = null, a.removeAttribute("aria-label"));
        a = If(a) || If();
        b = Qa(a.a);
        ns[b] || (ns[b] = new os(a))
    },
    ps = function(a, b) {
        var c = "";
        switch (b) {
            case 0:
                c += "l";
                break;
            case 2:
                c += "t";
                break;
            case 3:
                c += "r";
                break;
            default:
                c += "b"
        }
        a.setAttribute("data-tooltip-align", c + ",c")
    },
    ns = {},
    os = function(a) {
        Hq.call(this);
        this.K = a;
        this.L = new Rr(this.Y, 0, this);
        Jg(this, this.L);
        var b = Uf();
        this.w = La(b.MutationObserver) ? new b.MutationObserver(v(this.V, this)) : null;
        a = a.a;
        this.O(a, "mouseout mousedown click blur focusout keydown".split(" "), this.T, !0);
        this.O(a, ["mouseover", "focus", "focusin"], this.na, !0)
    };
w(os, Hq);
os.prototype.W = function() {
    qs(this);
    os.D.W.call(this)
};
var rs = function(a, b) {
    switch (b.type) {
        case "mousedown":
        case "mouseover":
        case "mouseout":
        case "click":
            a.R = !1;
            break;
        case "keydown":
            a.R = !0
    }
};
os.prototype.na = function(a) {
    this.w && this.w.disconnect();
    rs(this, a);
    var b = a.target;
    a = "focus" == a.type || "focusin" == a.type;
    var c = this.a && ng(this.a.a, b);
    if (this.R || !a || c) {
        this.X = a;
        if (a = b && b.getAttribute && this.w) a = b.getAttribute("role") || null, a = sb(Dp, a);
        a && (this.w.observe(b, {
            attributes: !0
        }), (a = Ip(b)) && (b = a));
        this.g = b
    } else this.g = null;
    ss(this)
};
os.prototype.T = function(a) {
    rs(this, a);
    var b = a.target;
    a = "mousedown" == a.type || "click" == a.type;
    b = this.a && ng(this.a.a, b);
    a && b || (this.g = null, ss(this))
};
os.prototype.V = function(a) {
    y(a, v(function(b) {
        var c = Ip(b.target);
        c && "aria-activedescendant" == b.attributeName && (this.g = c, ss(this))
    }, this))
};
var ss = function(a) {
        if (!(a.L.kb() && a.b && a.o)) {
            qs(a);
            var b = null != a.o ? a.o : 50;
            a.L.start(a.b ? b : 300)
        }
    },
    qs = function(a) {
        a.G && (Ci(a.G), a.G = 0, a.b = null)
    };
os.prototype.Y = function() {
    if (!this.g) ts(this), this.o = this.b = null;
    else if (!(this.b && this.a && ng(this.a.j(), this.g)) || this.b.getAttribute("data-tooltip-unhoverable")) {
        var a = Cg(this.g, function(h) {
                return h.getAttribute && (h.getAttribute("data-tooltip-contained") || h.getAttribute("data-tooltip") || h.a) && !h.getAttribute("data-tooltip-suspended")
            }),
            b = !1;
        this.b && this.b != a && (ts(this), this.o = this.b = null, b = !0);
        if (!this.b && a && (this.b = a, us(this, a))) {
            var c = Kd;
            if (a.getAttribute("data-tooltip-contained"))
                for (var d = Mf("jfk-tooltip-data",
                        a), e = 0; e < d.length; e++) {
                    if (d[e].parentNode == a) {
                        c = d[e].cloneNode(!0);
                        break
                    }
                } else c = a.a ? a.a : Ed(a.getAttribute("data-tooltip"));
            d = a.getAttribute("data-tooltip-align");
            e = a.getAttribute("data-tooltip-class");
            var f = a.getAttribute("data-tooltip-offset");
            f = xc(le(f)) ? -1 : Number(f);
            var g = a.getAttribute("data-tooltip-hide-delay");
            g = xc(le(g)) ? null : Number(g);
            if (!b && (a = a.getAttribute("data-tooltip-delay"), a = Math.max(0, a - 300))) {
                this.G = Bi(Ta(this.N, this.b, c, d, f, e, g), a, this);
                return
            }
            this.N(this.b, c, d, f, e, g)
        }
    }
};
var us = function(a, b) {
        return b.getAttribute("data-tooltip-only-on-overflow") && b.offsetWidth >= b.scrollWidth && b.offsetHeight >= b.scrollHeight || a.X && "mouse" == b.getAttribute("data-tooltip-trigger") ? !1 : !0
    },
    vs = function(a) {
        if (a) switch (a.toLowerCase().split(",")[0]) {
            case "l":
                return 0;
            case "t":
                return 2;
            case "r":
                return 3
        }
        return 1
    };
os.prototype.N = function(a, b, c, d, e, f) {
    this.G = 0;
    this.o = f;
    if (!this.a) {
        this.a = new ks(this.K);
        ts(this);
        bg(this.K.a.body, this.a.j());
        Jg(this, this.a);
        this.h = new as("jfk-tooltip", !0);
        this.h.Df = !0;
        this.h.Ne = !0;
        f = this.h;
        var g = this.a.g;
        f.a = this.a.j();
        f.h = g
    }
    a: {
        if (c) switch (c.toLowerCase().split(",")[1]) {
            case "l":
                f = 0;
                break a;
            case "r":
                f = 1;
                break a
        }
        f = 2
    }
    bs(this.h, vs(c), f, void 0, d);
    U(this.a.j(), "jfk-tooltip-hide");
    this.C != e && (this.C && !xc(le(this.C)) && U(this.a.j(), this.C), xc(le(e)) || T(this.a.j(), e), this.C = e);
    dq(this.a.j(),
        0, 0);
    if (b instanceof Ad) Ud(this.a.a, b);
    else
        for (dg(this.a.a); c = b.firstChild;) this.a.a.appendChild(c);
    this.h.b = a;
    this.h.c(null, 0)
};
var ts = function(a) {
    a.a && T(a.a.j(), "jfk-tooltip-hide")
};
var xs = function(a, b, c, d) {
    Pr.call(this, a, ws.M(), b);
    this.m = c || 0;
    this.N = d || 0;
    this.Pa = !1
};
w(xs, Pr);
var zs = function(a, b) {
    a.m != b && (a.m = b, ys(a))
};
k = xs.prototype;
k.qd = function(a) {
    this.h = a;
    var b = this.j();
    b && (this.Pa ? ls(b, a, void 0) : a ? b.title = a : b.removeAttribute("title"))
};
k.qa = function(a) {
    this.isEnabled() != a && (xs.D.qa.call(this, a), ys(this))
};
k.Vd = function(a) {
    xs.D.Vd.call(this, a);
    As(this, !1)
};
k.vb = function(a) {
    xs.D.vb.call(this, a);
    this.isEnabled() && As(this, !0)
};
k.Db = function(a) {
    xs.D.Db.call(this, a);
    this.isEnabled() && As(this, !0)
};
var As = function(a, b) {
        a.j() && V(a.j(), "jfk-button-clear-outline", b)
    },
    ys = function(a) {
        a.j() && Bs(a.c, a)
    },
    ws = function() {
        this.K = this.xa() + "-standard";
        this.c = this.xa() + "-action";
        this.L = this.xa() + "-primary";
        this.m = this.xa() + "-default";
        this.w = this.xa() + "-flat";
        this.C = this.xa() + "-narrow";
        this.G = this.xa() + "-mini";
        this.o = this.xa() + "-contrast"
    };
w(ws, tr);
Ga(ws);
k = ws.prototype;
k.cd = function(a, b, c) {
    a && zs(c, a);
    b && c.N != b && (c.N = b, ys(c))
};
k.xa = function() {
    return "jfk-button"
};
k.ub = function(a) {
    hb(a, xs, "Button is expected to be instance of jfk.Button");
    var b = a.a,
        c = Tp(Qr, {
            disabled: !a.isEnabled(),
            checked: a.Ea(16),
            style: a.m,
            title: a.h,
            Zn: a.Pa,
            value: a.Z(),
            width: a.N
        }, void 0, b);
    b.Oh(c, a.Ta());
    this.Xa(a, c);
    return c
};
k.Xa = function(a, b) {
    ws.D.Xa.call(this, a, b);
    this.h || (this.h = Yb(this.K, Ta(this.cd, 0, null), this.c, Ta(this.cd, 2, null), this.L, Ta(this.cd, 3, null), this.m, Ta(this.cd, 1, null), this.w, Ta(this.cd, 4, null), this.G, Ta(this.cd, 5, null), this.o, Ta(this.cd, 6, null), this.C, Ta(this.cd, null, 1)));
    for (var c = Lp(b), d = 0; d < c.length; ++d) {
        var e = this.h[c[d]];
        e && e(a)
    }
    if (c = b.getAttribute("data-tooltip")) a.h = c, a.Pa = !0;
    return b
};
k.Z = function(a) {
    return a.getAttribute("value") || ""
};
k.lf = function(a, b) {
    a && a.setAttribute("value", b)
};
var Bs = function(a, b) {
    function c(g, h) {
        (g ? d : e).push(h)
    }
    x(b.j(), "Button element must already exist when updating style.");
    var d = [],
        e = [],
        f = b.m;
    c(0 == f, a.K);
    c(2 == f, a.c);
    c(3 == f, a.L);
    c(4 == f, a.w);
    c(5 == f, a.G);
    c(1 == f, a.m);
    c(6 == f, a.o);
    c(1 == b.N, a.C);
    c(!b.isEnabled(), a.xa() + "-disabled");
    Op(b.j(), e);
    Np(b.j(), d)
};
var Cs = function(a, b) {
    X.call(this);
    this.X = b;
    this.Sa = a;
    this.Se = this.text = this.Ia = this.za = "";
    this.data = null;
    this.wb = Em.M()
};
w(Cs, X);
k = Cs.prototype;
k.update = function(a, b, c, d) {
    this.text = a;
    this.za = b;
    this.Ia = c;
    this.data = d;
    this.setVisible(!1);
    return !1
};
k.setVisible = function(a) {
    var b = this.j();
    b && W(b, a)
};
k.isVisible = function() {
    var a = this.j();
    return a ? uq(a) : !1
};
k.dj = function() {
    return {}
};
k.Jb = function() {
    return this.X
};
k.log = function(a, b) {
    var c = {};
    c.dt = this.X;
    c.sl = this.za;
    c.tl = this.Ia;
    c.hl = this.Sa;
    c.q = this.text;
    c.e = a;
    null != b && Xb(c, b);
    Xb(c, this.dj());
    this.wb.log("lexicon", c);
    b = this.za;
    c = this.Ia;
    window.__gaTracker && (__gaTracker("set", "dimension1", this.Sa), __gaTracker("set", "dimension2", b + "|" + c), __gaTracker("set", "dimension3", b), __gaTracker("set", "dimension4", c));
    Bh("lexicon", this.X + ":" + a, "", 1)
};
var Ds = function(a, b, c, d, e) {
    Cs.call(this, a, b);
    this.Jc = this.b = null;
    this.V = c;
    this.bj = d;
    this.Y = e;
    this.N = this.h = null;
    this.m = !1;
    this.ba = "More";
    this.mc = !1;
    this.Ca = "Less";
    this.Kb = [];
    new op("mt");
    this.wh = !1;
    this.F = L.M();
    this.c = []
};
w(Ds, Cs);
k = Ds.prototype;
k.Ma = function() {
    Ds.D.Ma.call(this);
    this.Da(Yf("DIV"))
};
k.Da = function(a) {
    Ds.D.Da.call(this, a);
    T(this.j(), "gt-cd");
    T(this.j(), "gt-cd-" + this.X);
    vg(this.j(), !0);
    this.j().appendChild(Sp(fo));
    this.Jc = D("gt-cd-tl", this.j());
    this.b = D("gt-cd-c", this.j());
    this.h = D("cd-expand-button", this.j());
    this.N = D("cd-expand-label", this.j());
    W(this.h, !1)
};
k.W = function() {
    this.zd();
    Ds.D.W.call(this)
};
k.Id = function() {
    return this.Y
};
k.qe = function() {
    return this.c.length
};
k.ng = function(a) {
    return this.c.indexOf(a)
};
k.zd = function() {
    this.c = []
};
k.jb = function() {
    return this.qe()
};
k.update = function(a, b, c, d) {
    Ds.D.update.call(this, a, b, c, d);
    this.m = this.mc = !1;
    hg(null);
    W(this.h, !1);
    U(this.h, "collapse");
    Es(this, a);
    return !1
};
k.ea = function() {
    var a = this;
    Ds.D.ea.call(this);
    this.h && Ah(this.h, this.Hn.bind(this));
    Y(this).O(this, "a", v(this.ti, this, "clks"), !1);
    Y(this).O(this, "b", v(this.ti, this, "clkt"), !1);
    this.j() && (Y(this).O(this.j(), "focusout", function(b) {
        ng(a.j(), b.relatedTarget) || U(a.j(), "clear-outline")
    }), Y(this).O(this.j(), "mousedown", function() {
        T(a.j(), "clear-outline")
    }), Y(this).O(this.j(), "mouseup", function() {
        T(a.j(), "clear-outline")
    }))
};
k.Hn = function() {
    this.m = !this.m;
    this.Xd(this.m);
    if (this.m) T(this.h, "collapse"), G(this.N, this.Ca), this.log("expand"), fm(this.F, this.Y, this.jb());
    else {
        U(this.h, "collapse");
        G(this.N, this.ba);
        this.log("collapse");
        var a = this.F,
            b = this.jb();
        N(a, cm(a, 189, this.Y, b, !0, 0))
    }
};
k.ti = function(a, b) {
    b = b.target;
    var c = this.F;
    N(c, cm(c, 79, this.Y, this.qe(), this.mc, this.ng(b) + 1));
    b = Ag(b);
    this.log(a, {
        clk: b
    })
};
var Es = function(a, b) {
        var c = F("DIV"),
            d = a.V.indexOf("%1$s");
        if (-1 != d) {
            var e = a.V.slice(0, d);
            d = a.V.slice(d + 4, a.V.length);
            e && cg(c, e);
            e = F("SPAN", {
                "class": "gt-card-ttl-txt"
            });
            Zp(e, "direction", kc(a.za) ? "rtl" : "ltr");
            G(e, b);
            c.appendChild(e);
            d && cg(c, d);
            a.Jc && (dg(a.Jc), a.Jc.appendChild(c))
        } else a.Jc && G(a.Jc, a.bj)
    },
    Fs = function(a, b, c) {
        a.mc = !0;
        W(a.h, !0);
        null != b && (a.ba = b);
        null != c && (a.Ca = c);
        G(a.N, a.ba)
    };
Ds.prototype.Xd = function(a) {
    for (var b, c, d = Mf("gt-card-expand-wrapper", this.j()), e = 0; e < d.length; e++) {
        b = d[e];
        Zp(b, "max-height", aq(b, "height"));
        c = b.firstChild;
        var f = Dq(c, "margin");
        c = rq(c).height + f.top + f.bottom;
        Zp(b, "max-height", a ? c + "px" : 0);
        a ? (U(b, "gt-card-collapsed"), T(b, "gt-card-expanded"), Gp(b, "hidden", !1), gh(b, Qg, function(g) {
            Zp(g.target, "max-height", "unset")
        }, !1)) : (U(b, "gt-card-expanded"), T(b, "gt-card-collapsed"), Gp(b, "hidden", !0))
    }
};
var Gs = function(a, b) {
        if (b) return a;
        a = F("DIV", {
            "class": "gt-card-expand-wrapper gt-card-collapsed"
        }, a);
        Gp(a, "hidden", !0);
        return a
    },
    Hs = function(a, b, c) {
        a.Kb.push([b, c])
    };
var Js = function(a, b) {
        var c = Array.prototype.slice.call(arguments),
            d = c.shift();
        if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, l, m, q, r) {
            if ("%" == m) return "%";
            var u = c.shift();
            if ("undefined" == typeof u) throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = u;
            return Is[m].apply(null, arguments)
        })
    },
    Is = {
        s: function(a, b, c) {
            return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                a + ke(" ", Number(c) - a.length) : ke(" ", Number(c) - a.length) + a
        },
        f: function(a, b, c, d, e) {
            d = a.toString();
            isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
            var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
            0 <= Number(a) && (d = f + d);
            if (isNaN(c) || d.length >= Number(c)) return d;
            d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
            a = Number(c) - d.length - f.length;
            return d = 0 <= b.indexOf("-", 0) ? f + d + ke(" ", a) : f + ke(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
        },
        d: function(a, b, c, d, e, f, g, h) {
            return Is.f(parseInt(a,
                10), b, c, d, 0, f, g, h)
        }
    };
Is.i = Is.d;
Is.u = Is.d;
var Ks = function(a, b, c, d, e, f, g) {
    Ds.call(this, a, null != c && c ? "mbd" : "bd", MSG_TRANSLATIONS_OF, "", 11);
    this.g = c;
    this.T = null != d ? d : !1;
    this.ya = "";
    this.ya = this.g && this.T ? "gt-baf-cell gt-baf-word" : this.g ? "gt-baf-cell gt-baf-word-clickable" : "gt-baf-word-clickable";
    this.C = this.T ? null : "gt-baf-back";
    this.Vb = f || "";
    this.Wb = g || "";
    this.w = null;
    this.sa = !1;
    this.aa = null != e ? e : !0;
    this.K = {};
    this.K[1] = b[2];
    this.K[2] = b[1];
    this.K[3] = b[0];
    this.Pa = b[3]
};
w(Ks, Ds);
Ks.prototype.update = function(a, b, c, d) {
    Ks.D.update.call(this, a, b, c, d);
    if (!d || 0 == I(d, 1)) return !1;
    dg(this.b);
    this.zd();
    this.w = new Jh(d);
    Ls(this, this.w);
    a = F("TBODY");
    b = F("TABLE", {
        "class": "gt-baf-table"
    }, a);
    c = this.w.a;
    for (var e = 0; e < c.length; e++) {
        var f = c[e],
            g = Ms(this, f, this.g && this.aa && 0 === e);
        bg(a, g);
        f = f.a;
        for (var h = g = 0; h < f.length; h++) {
            var l = f[h];
            if (!this.g && this.w.b && 0 < h) {
                var m = Nh(l);
                var q = F("DIV", {
                    "class": "gt-baf-cell gt-baf-sep"
                });
                m = Gs(q, m);
                this.g || (m = F("TD", {
                    colspan: 4
                }, m), m = F("TR", null, m));
                bg(a, m)
            }
            l =
                l.a;
            for (m = 0; m < l.length; m++) {
                q = l[m];
                var r = d.ab(0).Nc();
                q = Ns(this, q, r, g);
                a.appendChild(q);
                g++
            }
        }
        this.b.appendChild(b);
        0 < Kh(this.w) && (f = this.Pa.replace("%1$s", Kh(this.w).toLocaleString(this.Sa)), Fs(this, f, MSG_FEWER_TRANSLATIONS_LABEL))
    }
    this.setVisible(!0);
    return !0
};
Ks.prototype.ea = function() {
    Ks.D.ea.call(this);
    T(this.j(), "gt-cd-baf");
    Y(this).O(this.j(), "click", this.xb);
    Y(this).O(this.j(), "mouseover", this.cb);
    Y(this).O(this.j(), "mouseout", this.Za)
};
var Ls = function(a, b) {
        var c = Lh(b);
        c = c.sort(function(g, h) {
            return h.Lb - g.Lb
        });
        var d = 0;
        a.sa = !1;
        for (var e = 0; e < c.length; e++) {
            var f = c[e]; - 1 < f.Lb && (a.sa = !0);
            f.b = .05 <= f.Lb ? 3 : .0025 <= f.Lb ? 2 : 1;
            f.a = 12 > e || 3 == f.b;
            d += f.a ? 0 : 1
        }
        if (4 >= d)
            for (e = 0; e < c.length; e++) c[e].a = !0;
        b.b && Mh(b)
    },
    Os = function(a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = F("SPAN", null, b[d]);
            null != a.C && (T(e, a.C), a.c.push(e));
            c.push(e);
            d < b.length - 1 && c.push(Zf(", "))
        }
        return c
    },
    Ms = function(a, b, c) {
        var d = b.c;
        d && (a.Se = d, Es(a, d));
        b = Tp(io, {
            ik: c,
            Fk: a.Vb,
            Gk: a.Wb,
            Lm: b.g,
            Dd: Oh(b)
        });
        if (c) {
            c = E("tlid-frequency-help-icon", b);
            var e = E("tlid-frequency-help-icon-container", b),
                f = E("tlid-frequency-help-tooltip", b);
            Y(a).O(c, "click", function() {
                V(e, "show-tooltip", !Mp(e, "show-tooltip"))
            });
            Y(a).O(document, "click", function(g) {
                var h = fb(g.target);
                Mp(e, "show-tooltip") && (g = h.classList.contains("tlid-frequency-help-icon"), h = ng(f, h), g || h || U(e, "show-tooltip"))
            })
        }
        a = F("TD", {
            colspan: 4
        }, b);
        return F("TR", null, a)
    },
    Ps = function(a, b) {
        return kc(b) !== kc(a.Sa) ? kc(b) ? "rtl" : "ltr" : ""
    },
    Ns = function(a,
        b, c, d) {
        if (a.g) {
            var e = b.text,
                f = null != b.Fe ? b.Fe : "",
                g = e === c;
            c = b.a;
            d = a.T ? "gt-baf-entry-clickable" : "gt-baf-entry";
            g && (d += " gt-baf-entry-selected");
            d = F("TR", {
                "class": d
            });
            var h = F("TD");
            e = Tp(jo, {
                Kg: g,
                Fe: f,
                Cn: Ps(a, a.Ia),
                Dd: c,
                ho: e,
                io: a.ya
            });
            bg(h, e);
            e = F("TD");
            f = Tp(ko, {
                Ve: null != a.C ? a.C : "",
                fk: Ps(a, a.za),
                Of: b.Of,
                Dd: c
            });
            bg(e, f);
            bg(d, h);
            bg(d, e);
            h = b.b;
            b = a.K[b.b];
            a.g && a.aa && h && b && (b = Tp(mo, {
                Lb: h,
                vc: b,
                Dd: c
            }), c = F("TD"), bg(c, b), bg(d, c));
            a.C && (b = Mf(a.C, d), y(b, function(l) {
                this.c.push(l)
            }, a));
            b = a.T ? E("gt-baf-word", d) : E("gt-baf-word-clickable",
                d);
            a.c.push(b);
            return d
        }
        f = b.text;
        g = b.Fe;
        e = b.a;
        c = Qs(a, b.b, e);
        h = null;
        g && (h = Rs(g, e));
        f = Ss(a, f, g, e);
        b = Os(a, b.Of);
        b = Ts(a, b, e);
        b = F("TR", null, c, h, f, b);
        kc(a.za) != kc(a.Sa) && 1 == d % 2 && T(b, "gt-baf-translations-alt");
        return b
    },
    Qs = function(a, b, c) {
        if (!a.sa || !a.aa) return a = F("DIV", {
            "class": "gt-baf-cell"
        }), c = Gs(a, c), F("TD", null, c);
        a = F("DIV", {
            "class": "gt-baf-cell gt-baf-marker-container",
            title: a.K[b]
        });
        b = Js("width: %dpx", 8 * b);
        b = F("DIV", {
            "class": "gt-baf-cts",
            style: b
        });
        bg(a, b);
        c = Gs(a, c);
        return F("TD", null, c)
    },
    Rs = function(a,
        b) {
        var c = F("DIV", {
            "class": "gt-baf-cell gt-baf-previous-word"
        });
        G(c, a);
        a = Gs(c, b);
        return F("TD", null, a)
    },
    Ss = function(a, b, c, d) {
        var e = "";
        kc(a.Ia) !== kc(a.Sa) && (e = Js("direction: %s", kc(a.Ia) ? "rtl" : "ltr"));
        b = F("SPAN", a.ya, b);
        a.c.push(b);
        a = F("DIV", "gt-baf-cell", b);
        a = Gs(a, d);
        d || T(a, "gt-card-widen-wrapper");
        return F("TD", c ? null : {
            colspan: 2,
            style: e
        }, a)
    },
    Ts = function(a, b, c) {
        a = kc(a.za) !== kc(a.Sa) ? Js("direction: %s", kc(a.za) ? "rtl" : "ltr") : "";
        b = F("DIV", {
            "class": "gt-baf-cell gt-baf-translations",
            style: a
        }, b);
        c = Gs(b,
            c);
        return F("TD", {
            style: "width: 100%"
        }, c)
    };
Ks.prototype.Xd = function(a) {
    Ks.D.Xd.call(this, a);
    for (var b = Mf("gt-card-widen-wrapper", this.j()), c = 0; c < b.length; c++) {
        var d = b[c],
            e = D("gt-baf-cell", d),
            f = Dq(e, "margin");
        e = e.scrollWidth + f.left + f.right + 1;
        Zp(d, "max-width", a ? e + "px" : 0)
    }
};
Ks.prototype.xb = function(a) {
    var b = Dg(a.target);
    null != b ? (a = D("gt-baf-word", b), null != a && this.dispatchEvent(new Kg("b", a))) : Mp(a.target, "gt-baf-word-clickable") ? this.dispatchEvent(new Kg("b", a.target)) : Mp(a.target, "gt-baf-back") && this.dispatchEvent(new Kg("a", a.target))
};
Ks.prototype.cb = function(a) {
    if (Mp(a.target, "gt-baf-back")) {
        var b = Lf(document, null, "gt-baf-back", this.j());
        a = Ag(a.target);
        for (var c = 0; c < b.length; c++) Ag(b[c]) == a && T(b[c], "gt-baf-hl")
    }
};
Ks.prototype.Za = function() {
    for (var a = Lf(document, null, "gt-baf-hl", this.j()), b = 0; b < a.length; b++) U(a[b], "gt-baf-hl")
};
var Vs = function(a) {
        this.a = null != a ? new Ym(Us(a)) : new Ym;
        this.b = "home";
        nn(this.a, "view") && (this.b = this.a.get("view"), mn(this.a, "view"))
    },
    Ws = function(a, b) {
        a.b = b;
        return a
    },
    Ys = function(a, b, c, d) {
        Xs(a);
        a.a.set("op", "translate").set("sl", b).set("tl", c);
        null != d && !xc(d) && a.a.set("text", d)
    },
    Zs = function(a, b, c, d) {
        Xs(a);
        a.a.set("op", "star").set("sl", b).set("tl", c).set("text", d)
    },
    Xs = function(a) {
        mn(a.a, "op");
        mn(a.a, "sl");
        mn(a.a, "tl");
        mn(a.a, "text")
    };
Vs.prototype.Qa = function() {
    return $s(this, "sl")
};
Vs.prototype.oa = function() {
    return $s(this, "tl")
};
var $s = function(a, b) {
        var c = "";
        nn(a.a, b) && (c = a.a.get(b), c = de(c));
        return c
    },
    dt = function(a, b) {
        return nn(a.a, "op") && a.a.get("op") === b
    };
Vs.prototype.toString = function() {
    var a = "view=" + this.b,
        b = this.a;
    kn(b);
    0 == b.b || (a += "&" + this.a.toString());
    return a
};

function Us(a) {
    if (a.startsWith("view=")) return a;
    var b = new Vs;
    if (a.startsWith("op=")) switch (a = new Ym(a), a.get("op")) {
        case "showhistory":
            return Ws(b, "history").toString();
        case "showsaved":
            return Ws(b, "saved").toString();
        case "star":
            if (nn(a, "sl") && nn(a, "tl") && nn(a, "text") && nn(a, "page")) {
                switch (a.get("page")) {
                    case "history":
                        Ws(b, "history");
                        break;
                    default:
                        Ws(b, "home")
                }
                Zs(b, a.get("sl"), a.get("tl"), a.get("text"))
            }
            return b.toString();
        default:
            return Ws(b, "home").toString()
    } else {
        a = a.split(/[|\/]/);
        Ws(b, "home");
        var c = "",
            d = "",
            e = "";
        0 < a.length && 0 < a[0].length && (c = a[0]);
        1 < a.length && 0 < a[1].length && (d = a[1]);
        2 < a.length && 0 < a[2].length && (e = a[2]);
        0 < c.length && 0 < d.length && (0 < e.length ? Ys(b, c, d, e) : Ys(b, c, d), 3 < a.length && "share" === a[3] && b.a.set("op", "share"));
        return b.toString()
    }
};
var et = function(a, b) {
    Kg.call(this, "navigate");
    this.dh = a;
    this.Vl = b
};
w(et, Kg);
var gt = function() {
        return !ft() && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"))
    },
    ft = function() {
        return z("iPad") || z("Android") && !z("Mobile") || z("Silk")
    },
    ht = function() {
        return !gt() && !ft()
    };
var it = function(a, b) {
    a = [a];
    for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
    return a.join("\x0B")
};
var ot = function(a, b, c, d) {
    K.call(this);
    if (a && !b) throw Error("Can't use invisible history without providing a blank page.");
    if (c) var e = c;
    else {
        e = "history_state" + jt;
        var f = Jd("input", {
            type: "text",
            name: e,
            id: e,
            style: ec("display:none")
        });
        document.write(Bd(f));
        e = Jf(e)
    }
    this.w = e;
    this.a = c ? Uf(Hf(c)) : window;
    this.G = b;
    B && !b && (this.G = "https" == window.location.protocol ? tc(dc(ec("https:///"))) : tc(dc(ec('javascript:""'))));
    this.b = new zi(150);
    Jg(this, this.b);
    this.g = !a;
    this.c = new Hq(this);
    if (a || kt) {
        if (d) var g = d;
        else {
            a =
                "history_iframe" + jt;
            d = this.G;
            b = {
                id: a,
                style: ec("display:none"),
                sandbox: void 0
            };
            d && rc(d);
            c = {};
            c.src = d || null;
            c.srcdoc = null;
            d = {
                sandbox: ""
            };
            e = {};
            for (g in c) x(g.toLowerCase() == g, "Must be lower case"), e[g] = c[g];
            for (g in d) x(g.toLowerCase() == g, "Must be lower case"), e[g] = d[g];
            for (g in b) {
                f = g.toLowerCase();
                if (f in c) throw Error('Cannot override "' + f + '" attribute, got "' + g + '" with value "' + b[g] + '"');
                f in d && delete e[f];
                e[g] = b[g]
            }
            g = Id("iframe", e, void 0);
            document.write(Bd(g));
            g = Jf(a)
        }
        this.C = g;
        this.N = !0
    }
    kt && (this.c.O(this.a,
        "load", this.Cm), this.R = this.L = !1);
    this.g ? lt(this, mt(this), !0) : nt(this, this.w.value);
    jt++
};
w(ot, K);
ot.prototype.m = !1;
ot.prototype.o = !1;
ot.prototype.h = null;
var pt = function(a, b) {
        var c = b || it;
        return function() {
            var d = this || n;
            d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
            var e = c(Qa(a), arguments);
            return d.hasOwnProperty(e) ? d[e] : d[e] = a.apply(this, arguments)
        }
    }(function() {
        return B ? Te(8) : "onhashchange" in n
    }),
    kt = B && !Te(8);
k = ot.prototype;
k.Sd = null;
k.W = function() {
    ot.D.W.call(this);
    this.c.La();
    this.qa(!1)
};
k.qa = function(a) {
    if (a != this.m)
        if (kt && !this.L) this.R = a;
        else if (a)
        if (we ? this.c.O(this.a.document, qt, this.T) : ze && this.c.O(this.a, "pageshow", this.Hm), pt() && this.g) this.c.O(this.a, "hashchange", this.Em), this.m = !0, this.dispatchEvent(new et(mt(this), !1));
        else {
            if (!B || gt() || this.L) this.c.O(this.b, "tick", v(this.K, this, !0)), this.m = !0, kt || (this.h = mt(this), this.dispatchEvent(new et(mt(this), !1))), this.b.start()
        } else this.m = !1, Mq(this.c), this.b.stop()
};
k.Cm = function() {
    this.L = !0;
    this.w.value && nt(this, this.w.value, !0);
    this.qa(this.R)
};
k.Hm = function(a) {
    a.b.persisted && (this.qa(!1), this.qa(!0))
};
k.Em = function() {
    var a = rt(this.a);
    a != this.h && st(this, a, !0)
};
var mt = function(a) {
        return null != a.Sd ? a.Sd : a.g ? rt(a.a) : tt(a) || ""
    },
    rt = function(a) {
        a = a.location.href;
        var b = a.indexOf("#");
        return 0 > b ? "" : a.substring(b + 1)
    },
    ut = function(a, b, c) {
        mt(a) != b && (a.g ? (lt(a, b, c), pt() || B && !gt() && nt(a, b, c, void 0), a.m && a.K(!1)) : (nt(a, b, c), a.Sd = a.h = a.w.value = b, a.dispatchEvent(new et(b, !1))))
    },
    lt = function(a, b, c) {
        a = a.a.location;
        var d = a.href.split("#")[0],
            e = Jc(a.href, "#");
        if (kt || e || b) d += "#" + b;
        d != a.href && (b = d, d = ec("URL taken from location.href."), ab(dc(d), "must provide justification"), x(!xc(dc(d)),
            "must provide non-empty justification"), b = Tc(b), c ? Zd(a, b) : Yd(a, b))
    },
    nt = function(a, b, c, d) {
        if (a.N || b != tt(a))
            if (a.N = !1, b = ce(b), B) {
                var e = sg(a.C);
                e.open("text/html", c ? "replace" : void 0);
                c = Md(Jd("title", {}, d || a.a.document.title), Jd("body", {}, b));
                e.write(Bd(c));
                e.close()
            } else hb(a.G, pc, "this.iframeSrc_ must be set on calls to setIframeToken_"), e = rc(a.G) + "#" + b, (a = a.C.contentWindow) && (c ? Zd(a.location, e) : Yd(a.location, e))
    },
    tt = function(a) {
        if (B) return a = sg(a.C), a.body ? de(a.body.innerHTML) : null;
        var b = a.C.contentWindow;
        if (b) {
            try {
                var c = de(rt(b))
            } catch (d) {
                return a.o || (1 != a.o && Ai(a.b, 1E4), a.o = !0), null
            }
            a.o && (0 != a.o && Ai(a.b, 150), a.o = !1);
            return c || null
        }
        return null
    };
ot.prototype.K = function(a) {
    if (this.g) {
        var b = rt(this.a);
        b != this.h && st(this, b, a)
    }
    if (!this.g || kt)
        if (b = tt(this) || "", null == this.Sd || b == this.Sd) this.Sd = null, b != this.h && st(this, b, a)
};
var st = function(a, b, c) {
    a.h = a.w.value = b;
    a.g ? (kt && nt(a, b), lt(a, b)) : nt(a, b);
    a.dispatchEvent(new et(mt(a), c))
};
ot.prototype.T = function() {
    this.b.stop();
    this.b.start()
};
var qt = ["mousedown", "keydown", "mousemove"],
    jt = 0;
var vt = function(a, b, c) {
    var d = this;
    K.call(this);
    this.b = new ot(!1, void 0, b, c);
    this.c = null;
    this.h = 0;
    this.g = a || !1;
    H(this.b, "navigate", function(e) {
        e.Vl && d.dispatchEvent({
            type: "c",
            dh: e.dh
        })
    }, !1)
};
w(vt, K);
var xt = function(a, b, c, d) {
        var e = "",
            f = "",
            g = "";
        if (a.g) b = new Vs(b), e = b.Qa(), f = b.oa(), g = $s(b, "text");
        else {
            var h = [];
            y(b.split(/[|\/]/), function(l) {
                h.push(de(l))
            });
            e = le(h[0]);
            f = le(h[1]);
            2 < h.length && (g = h[2])
        }!xc(e) && !xc(f) && 0 <= c.indexOf(e) && ("auto" === f || 0 <= d.indexOf(f)) ? wt(a.c, e, f, g, "bh") : wt(a.c, "", "", "", "bh")
    },
    yt = function(a, b, c, d) {
        var e = new Vs(b);
        b = e.Qa();
        e = e.oa();
        !xc(b) && !xc(e) && 0 <= c.indexOf(b) && ("auto" === e || 0 <= d.indexOf(e)) ? wt(a.c, b, e, "", "bh") : wt(a.c, "", "", "", "bh")
    },
    At = function(a, b, c, d, e) {
        b = null != b ? b :
            "auto";
        c = null != c ? c : "en";
        a.g ? (a = zt(a), Ys(a, b, c, d), null != e && "share" === e && a.a.set("op", "share"), b = a.toString()) : (b = b + "/" + c + "/" + ce(d), e && (b += "/" + e));
        return b
    },
    zt = function(a) {
        if (!a.g) throw Error("Should never be invoked without new URL fragment schema");
        return new Vs(mt(a.b))
    },
    Bt = function(a, b, c, d, e, f) {
        a.a(At(a, b, c, d, f), !e || null != f)
    };
vt.prototype.a = function(a, b) {
    var c = (new Date).getTime();
    2E3 < c - this.h ? ut(this.b, a, !1) : ut(this.b, a, !0);
    this.h = b ? 0 : c
};
var Ct = function() {};
w(Ct, tr);
Ga(Ct);
k = Ct.prototype;
k.ub = function(a) {
    var b = lr(this, a);
    b = a.a.b("DIV", "goog-inline-block " + b.join(" "), this.We(a.Ta(), a.a));
    ur(b, a.h);
    return b
};
k.Vc = function() {
    return "button"
};
k.Ub = function(a) {
    return a && a.firstChild && a.firstChild.firstChild
};
k.We = function(a, b) {
    return b.b("DIV", "goog-inline-block " + (this.xa() + "-outer-box"), b.b("DIV", "goog-inline-block " + (this.xa() + "-inner-box"), a))
};
k.Uc = function(a) {
    return "DIV" == a.tagName
};
k.Xa = function(a, b) {
    x(b);
    Dt(b, !0);
    Dt(b, !1);
    a: {
        var c = a.a.Nh(b);
        var d = this.xa() + "-outer-box";
        if (c && Mp(c, d) && (c = a.a.Nh(c), d = this.xa() + "-inner-box", c && Mp(c, d))) {
            c = !0;
            break a
        }
        c = !1
    }
    c || b.appendChild(this.We(b.childNodes, a.a));
    Np(b, ["goog-inline-block", this.xa()]);
    return Ct.D.Xa.call(this, a, b)
};
k.xa = function() {
    return "goog-custom-button"
};
var Dt = function(a, b) {
    if (a)
        for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
            d = b ? c.nextSibling : c.previousSibling;
            if (3 == c.nodeType) {
                var e = c.nodeValue;
                if ("" == yc(e)) a.removeChild(c);
                else {
                    c.nodeValue = b ? e.replace(/^[\s\xa0]+/, "") : e.replace(/[\s\xa0]+$/, "");
                    break
                }
            } else break;
            c = d
        }
};
var Et = function(a, b, c) {
    Pr.call(this, a, b || Ct.M(), c);
    this.Oa(16, !0)
};
w(Et, Pr);
yr("goog-toggle-button", function() {
    return new Et(null)
});
var Ft = function(a, b, c, d) {
    Et.call(this, a, c || tr.M(), d);
    this.N = a;
    this.m = b || null;
    this.b = null
};
w(Ft, Et);
Ft.prototype.$c = function(a) {
    Ft.D.$c.call(this, a);
    Gt(this)
};
Ft.prototype.qa = function(a) {
    Ft.D.qa.call(this, a);
    Gt(this)
};
var Gt = function(a) {
        a.isEnabled() ? null != a.m && a.g(a.Ea(16) ? a.m : a.N) : a.b ? (a.g(a.b), a.b = null) : a.g("")
    },
    It = function() {
        xs.call(this);
        this.b = !1;
        Ht(this)
    };
w(It, xs);
var Ht = function(a) {
        a.b ? (Dr(a, "unstarred"), Cr(a, "starred")) : (Dr(a, "starred"), Cr(a, "unstarred"))
    },
    Jt = function() {};
w(Jt, tr);
Ga(Jt);
Jt.prototype.ub = function(a) {
    var b = a.a.b("DIV", lr(this, a).join(" ")),
        c = a.a.b("SPAN"),
        d = a.a.b("SPAN");
    T(b, "gt-icon-c");
    d.className = "gt-icon-text";
    c.className = "gt-icon";
    b.appendChild(c);
    a.Ta() && (b.appendChild(d), this.ac(b, a.Ta()));
    return b
};
Jt.prototype.ac = function(a, b) {
    a && (a = p(a.lastElementChild) ? a.lastElementChild : jg(a.lastChild, !1)) && G(a, b)
};
Jt.prototype.xa = function() {
    return "trans-tool-button"
};
Jt.prototype.Xa = function(a, b) {
    var c = a.Ta();
    b = Jt.D.Xa.call(this, a, b);
    a.Wc = c;
    c = a.a.b("SPAN");
    var d = a.a.b("SPAN");
    T(b, "gt-icon-c");
    d.className = "gt-icon-text";
    c.className = "gt-icon";
    dg(b);
    b.appendChild(c);
    a.Ta() && (b.appendChild(d), this.ac(b, a.Ta()));
    return b
};
var Kt = function(a, b) {
    this.c = a;
    this.h = b || !1
};
w(Kt, tr);
Kt.prototype.ub = function(a) {
    var b = a.a.b("DIV", lr(this, a).join(" ") + " goog-inline-block"),
        c = a.a.b("SPAN");
    this.c && T(b, this.c);
    c.className = "jfk-button-img";
    b.appendChild(c);
    a.Ta() && this.ac(b, a.Ta());
    return b
};
Kt.prototype.ac = function(a, b) {
    a && !this.h && (ls(a, b, void 0), ps(a, 2))
};
Kt.prototype.xa = function() {
    return "goog-toolbar-button"
};
Kt.prototype.Xa = function(a, b) {
    var c = a.a.b("SPAN");
    this.c && T(b, this.c);
    c.className = "jfk-button-img";
    dg(b);
    b.appendChild(c);
    a.Ta() && this.ac(b, a.Ta());
    return b = Kt.D.Xa.call(this, a, b)
};
var Lt = function(a, b, c, d) {
        this.text = a;
        this.za = b;
        this.Ia = c;
        this.data = d
    },
    Mt = function(a, b, c, d) {
        this.g = a;
        this.c = b;
        this.h = c;
        this.o = d;
        this.a = [];
        this.b = -1;
        H(this.g, "action", this.Nm, !1, this);
        H(this.c, "action", this.xm, !1, this);
        H(this.h, "action", this.Kn, !1, this)
    };
k = Mt.prototype;
k.push = function(a, b, c, d) {
    this.a.splice(++this.b);
    this.a.push(new Lt(a, b, c, d));
    Nt(this)
};
k.reset = function() {
    this.a = [];
    this.b = -1
};
k.Nm = function() {
    0 < this.b && (--this.b, Nt(this));
    Em.M().log("lxprev")
};
k.xm = function() {
    this.b < this.a.length - 1 && (++this.b, Nt(this));
    Em.M().log("lxnext")
};
k.Kn = function() {
    1 < this.a.length && (this.a.splice(1), this.b = 0, Nt(this));
    Em.M().log("lxclear")
};
var Nt = function(a) {
    var b = a.a[a.b];
    a.o.update(b.text, b.za, b.Ia, b.data);
    a.g.qa(1 < a.b);
    a.c.qa(a.b < a.a.length - 1)
};
var Ot = function() {
    this.b = 0;
    this.a = []
};
Ga(Ot);
Ot.prototype.c = function(a) {
    var b = new Image,
        c = this.b++;
    this.a[c] = b;
    b.onload = b.onerror = function() {
        delete Ot.M().a[c]
    };
    b.src = a;
    b = null
};
var Pt = !1,
    Qt = function(a) {
        if (a = a.match(/[\d]+/g)) a.length = 3
    };
(function() {
    if (navigator.plugins && navigator.plugins.length) {
        var a = navigator.plugins["Shockwave Flash"];
        if (a && (Pt = !0, a.description)) {
            Qt(a.description);
            return
        }
        if (navigator.plugins["Shockwave Flash 2.0"]) {
            Pt = !0;
            return
        }
    }
    if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], Pt = !(!a || !a.enabledPlugin))) {
        Qt(a.enabledPlugin.description);
        return
    }
    if ("undefined" != typeof ActiveXObject) {
        try {
            var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            Pt = !0;
            Qt(b.GetVariable("$version"));
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            Pt = !0;
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Pt = !0, Qt(b.GetVariable("$version"))
        } catch (c) {}
    }
})();
var Rt = Pt;
var St = function() {
    K.call(this);
    this.url = ""
};
w(St, K);
St.prototype.Yd = function() {
    this.dispatchEvent(new Tt(this.url))
};
St.prototype.play = function(a) {
    this.url = a
};
St.prototype.c = function() {
    this.dispatchEvent(new Ut(this.url))
};
var Vt = function(a) {
    Kg.call(this, "sound_play_start");
    this.url = a
};
w(Vt, Kg);
var Wt = function(a) {
    Kg.call(this, "sound_finished");
    this.url = a
};
w(Wt, Kg);
var Tt = function(a) {
    Kg.call(this, "sound_interrupted");
    this.url = a
};
w(Tt, Kg);
var Ut = function(a) {
    Kg.call(this, "sound_error");
    this.url = a
};
w(Ut, Kg);
var Xt = function() {
    St.call(this);
    this.o = Audio;
    this.a = new this.o;
    this.b = {}
};
w(Xt, St);
Xt.prototype.eh = function() {
    return !this.a.paused
};
Xt.prototype.Yd = function() {
    Xt.D.Yd.call(this);
    this.a.pause()
};
Xt.prototype.play = function(a) {
    Xt.D.play.call(this, a);
    Yt(this, this.a);
    this.a = null;
    null != this.b[a] ? (this.a = this.b[a], this.b[a] = null, this.a.play()) : (this.a = Zt(this, a), this.a.autoplay = !0)
};
Xt.prototype.jj = function(a) {
    n.setTimeout(v(this.m, this, a), 1E3)
};
var Zt = function(a, b) {
        var c = new a.o;
        c.setAttribute("src", b);
        H(c, "play", a.h, !1, a);
        H(c, "ended", a.g, !1, a);
        H(c, "error", a.c, !1, a);
        c.load();
        return c
    },
    Yt = function(a, b) {
        nh(b, "play", a.h);
        nh(b, "ended", a.g)
    };
Xt.prototype.m = function(a) {
    null != this.b[a] && (Yt(this, this.b[a]), this.b[a] = null);
    this.b[a] = Zt(this, a)
};
Xt.prototype.h = function() {
    nh(this.a, "play", this.h);
    this.dispatchEvent(new Vt(this.url))
};
Xt.prototype.g = function() {
    nh(this.a, "ended", this.g);
    this.dispatchEvent(new Wt(this.url))
};
var $t = function(a) {
    St.call(this);
    this.a = a;
    this.b = !1
};
w($t, St);
k = $t.prototype;
k.eh = function() {
    return this.b
};
k.Yd = function() {
    this.b = !1;
    null != this.a.o && this.a.o();
    au();
    $t.D.Yd.call(this)
};
k.play = function(a) {
    $t.D.play.call(this, a);
    n.setTimeout(v(this.Rm, this), 0)
};
k.Rm = function() {
    this.b = !0;
    var a = v(this.Ln, this);
    n.SoundStopCB_ = a;
    null != this.a.g && this.a.g("SoundStopCB_");
    try {
        if (null != this.a.c) this.a.c(this.ej());
        else {
            this.b = !1;
            au();
            this.c();
            return
        }
        var b = v(this.ej, this);
        n._TTSSoundFile = b
    } catch (c) {
        this.b = !1;
        au();
        this.c();
        return
    }
    null != this.a.h ? this.a.h() : (this.b = !1, au(), this.c())
};
k.jj = function(a) {
    var b = Ot.M();
    n.setTimeout(v(b.c, b, a), 1E3)
};
k.ej = function() {
    return this.url.substring(1)
};
k.Ln = function() {
    this.b = !1;
    au();
    this.dispatchEvent(new Wt(this.url))
};
var au = function() {
        n.SoundStopCB_ = null
    },
    bu = function() {
        this.a = "";
        this.b = null;
        this.c = !1;
        this.F = null
    };
Ga(bu);
bu.prototype.get = function() {
    if (null != this.a && 0 != this.a.length) {
        var a = Jf(this.a);
        if (!this.c && (cu("audio/mpeg") ? (this.b = new Xt, a = "html5") : null != a && "OBJECT" == a.tagName && Rt ? (this.b = new $t(a), a = "flash") : (this.b = null, a = "none"), this.c = !0, !this.g && this.F)) {
            this.g = !0;
            var b = cu("audio/mpeg") ? 1 : 0,
                c = cu("audio/ogg") ? 1 : 0,
                d = cu("audio/wav") ? 1 : 0;
            a: {
                try {
                    var e = F("AUDIO");
                    if (null != e && null != e.volume) {
                        var f = e.volume;
                        break a
                    }
                } catch (g) {}
                f = -1
            }
            this.F.log("ttsaudio", {
                mp3: b,
                ogg: c,
                wav: d,
                vol: f,
                type: a
            })
        }
    }
    return this.b
};
var cu = function(a) {
    try {
        var b = F("AUDIO");
        return null != b && null != b.canPlayType && null != b.load && null != b.play && null != b.paused && null != b.pause && "no" != b.canPlayType(a) && "" != b.canPlayType(a)
    } catch (c) {
        return !1
    }
};
var du = function(a, b, c) {
    K.call(this);
    this.K = b;
    this.m = c ? c : 0;
    this.F = L.M();
    this.C = bu.M();
    this.C.a = a;
    this.C.F = b;
    this.b = this.C.get();
    this.G = this.c = null;
    this.a = this.o = 0;
    this.g = {};
    this.h = 0;
    this.w = !1;
    this.R = null
};
w(du, K);
du.prototype.set = function(a, b, c, d, e) {
    this.c = a;
    this.o = b;
    this.G = c;
    null != d && (this.R = d);
    null != e && (this.g = Vb(e));
    this.g.total = a.length;
    this.g.ttslocation = this.m;
    eu(this)
};
du.prototype.start = function() {
    this.b.eh() && this.b.Yd();
    H(this.b, "sound_play_start", this.V, !1, this);
    H(this.b, "sound_finished", this.T, !1, this);
    H(this.b, "sound_interrupted", this.L, !1, this);
    H(this.b, "sound_error", this.N, !1, this);
    this.h = (new Date).getTime();
    fu(this, "ttsstart", this.g);
    var a = this.F,
        b = this.m,
        c = this.o,
        d = this.c.length,
        e = this.R;
    null != e ? xm(a, 31, b, c, d, void 0, void 0, e) : xm(a, 31, b, c, d);
    this.b.play(this.c[this.a]);
    gu(this)
};
du.prototype.stop = function() {
    if (this.c && this.b.eh()) {
        var a = Vb(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.h;
        fu(this, "ttsstop", a);
        xm(this.F, 32, this.m, this.o, this.c.length, this.G[this.a], this.a);
        eu(this);
        this.b.Yd();
        hu(this)
    }
};
var eu = function(a) {
        a.a = 0;
        a.w = !1;
        nh(a.b, "sound_play_start", a.V, !1, a);
        nh(a.b, "sound_finished", a.T, !1, a);
        nh(a.b, "sound_interrupted", a.L, !1, a);
        nh(a.b, "sound_error", a.N, !1, a)
    },
    fu = function(a, b, c) {
        a.K && a.K.log(b, c)
    };
du.prototype.V = function() {
    if (!this.w) {
        this.dispatchEvent(new iu(this.c));
        var a = Vb(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.h;
        fu(this, "ttsplaystart", a);
        xm(this.F, 33, this.m, this.o, this.c.length, this.G[this.a], this.a);
        this.w = !0
    }
};
du.prototype.T = function() {
    this.a += 1;
    if (this.a < this.c.length) this.b.play(this.c[this.a]), gu(this);
    else {
        hu(this);
        eu(this);
        var a = Vb(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.h;
        fu(this, "ttsfinish", a);
        xm(this.F, 34, this.m, this.o, this.c.length)
    }
};
du.prototype.L = function() {
    var a = Vb(this.g);
    a.idx = this.a;
    a.time = (new Date).getTime() - this.h;
    fu(this, "ttsinterrupted", a);
    hu(this);
    eu(this)
};
du.prototype.N = function() {
    var a = Vb(this.g);
    a.idx = this.a;
    a.time = (new Date).getTime() - this.h;
    fu(this, "ttserror", a);
    km(this.F, 155);
    hu(this);
    eu(this)
};
var hu = function(a) {
        a.dispatchEvent(new ju(a.c))
    },
    gu = function(a) {
        var b = a.c[a.a + 1];
        null != b && a.b.jj(b)
    },
    iu = function() {
        Kg.call(this, "play_start_playlist")
    };
w(iu, Kg);
var ju = function() {
    Kg.call(this, "stop_playlist")
};
w(ju, Kg);
var ku = function(a) {
    this.F = a
};
ku.prototype.g = function(a, b, c) {
    lu(a, b, c, v(this.b, this), v(this.c, this))
};
var lu = function(a, b, c, d, e) {
    var f = [];
    d(f, b);
    b = "";
    for (d = 0; d < f.length; d++) {
        var g = yc(b + f[d]);
        g.length <= c ? b += f[d] : (xc(b) || (a.push(yc(b)), b = ""), g = yc(f[d]), g.length <= c ? b = f[d] : e(a, g, c))
    }
    xc(b) || a.push(yc(b))
};
ku.prototype.c = function(a, b, c) {
    for (var d = 0; d < b.length; d += c) a.push(b.substr(d, c))
};
var mu = / /g,
    nu = /([?.,;:!][ ]+)|([\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f][ ]?)/g;
ku.prototype.b = function(a, b) {
    ou(a, b, mu)
};
ku.prototype.a = function(a, b) {
    ou(a, b, nu);
    for (b = 0; b < a.length; b++) {
        var c = {
            length: a[b].length
        };
        this.F && this.F.log("tbphrase", c)
    }
};
var ou = function(a, b, c) {
    for (var d = 0; c.test(b);) {
        var e = c.lastIndex;
        e > d && a.push(b.substr(d, e - d));
        d = e
    }
    b.length > d && a.push(b.substr(d))
};
var pu = [0, 200],
    qu = {
        af: 1,
        ar: 1,
        bn: 1,
        bs: 1,
        ca: 1,
        cs: 1,
        cy: 1,
        da: 1,
        de: 1,
        el: 1,
        en: 1,
        eo: 1,
        es: 1,
        et: 1,
        fi: 1,
        fr: 1,
        hi: 1,
        hr: 1,
        hu: 1,
        hy: 1,
        id: 1,
        is: 1,
        it: 1,
        ja: 1,
        jw: 1,
        km: 1,
        ko: 1,
        la: 1,
        lv: 1,
        mk: 1,
        ml: 1,
        mr: 1,
        my: 1,
        ne: 1,
        nl: 1,
        no: 1,
        pl: 1,
        pt: 1,
        ro: 1,
        ru: 1,
        si: 1,
        sk: 1,
        sq: 1,
        sr: 1,
        su: 1,
        sv: 1,
        sw: 1,
        ta: 1,
        te: 1,
        th: 1,
        tl: 1,
        tr: 1,
        vi: 1,
        uk: 1,
        zh: 1,
        "zh-cn": 1,
        "zh-tw": 1
    };
var ru = function(a, b) {
        this.a = b;
        for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
            var f = a[e] | 0;
            d && f == b || (c[e] = f, d = !1)
        }
        this.b = c
    },
    su = {},
    tu = function(a) {
        return -128 <= a && 128 > a ? ve(su, a, function(b) {
            return new ru([b | 0], 0 > b ? -1 : 0)
        }) : new ru([a | 0], 0 > a ? -1 : 0)
    },
    wu = function(a) {
        if (isNaN(a) || !isFinite(a)) return uu;
        if (0 > a) return vu(wu(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
        return new ru(b, 0)
    },
    xu = function(a, b) {
        if (0 == a.length) throw Error("number format error: empty string");
        b = b || 10;
        if (2 > b || 36 < b) throw Error("radix out of range: " +
            b);
        if ("-" == a.charAt(0)) return vu(xu(a.substring(1), b));
        if (0 <= a.indexOf("-")) throw Error('number format error: interior "-" character');
        for (var c = wu(Math.pow(b, 8)), d = uu, e = 0; e < a.length; e += 8) {
            var f = Math.min(8, a.length - e),
                g = parseInt(a.substring(e, e + f), b);
            8 > f ? (f = wu(Math.pow(b, f)), d = yu(d, f).add(wu(g))) : (d = yu(d, c), d = d.add(wu(g)))
        }
        return d
    },
    uu = tu(0),
    zu = tu(1),
    Au = tu(16777216),
    Bu = function(a) {
        if (-1 == a.a) return -Bu(vu(a));
        for (var b = 0, c = 1, d = 0; d < a.b.length; d++) b += Cu(a, d) * c, c *= 4294967296;
        return b
    };
ru.prototype.toString = function(a) {
    a = a || 10;
    if (2 > a || 36 < a) throw Error("radix out of range: " + a);
    if (Du(this)) return "0";
    if (-1 == this.a) return "-" + vu(this).toString(a);
    for (var b = wu(Math.pow(a, 6)), c = this, d = "";;) {
        var e = Eu(c, b).a;
        c = Fu(c, yu(e, b));
        var f = ((0 < c.b.length ? c.b[0] : c.a) >>> 0).toString(a);
        c = e;
        if (Du(c)) return f + d;
        for (; 6 > f.length;) f = "0" + f;
        d = "" + f + d
    }
};
var Gu = function(a, b) {
        return 0 > b ? 0 : b < a.b.length ? a.b[b] : a.a
    },
    Cu = function(a, b) {
        a = Gu(a, b);
        return 0 <= a ? a : 4294967296 + a
    },
    Du = function(a) {
        if (0 != a.a) return !1;
        for (var b = 0; b < a.b.length; b++)
            if (0 != a.b[b]) return !1;
        return !0
    },
    Hu = function(a, b) {
        a = Fu(a, b);
        return -1 == a.a ? -1 : Du(a) ? 0 : 1
    },
    vu = function(a) {
        for (var b = a.b.length, c = [], d = 0; d < b; d++) c[d] = ~a.b[d];
        return (new ru(c, ~a.a)).add(zu)
    };
ru.prototype.abs = function() {
    return -1 == this.a ? vu(this) : this
};
ru.prototype.add = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0, e = 0; e <= b; e++) {
        var f = d + (Gu(this, e) & 65535) + (Gu(a, e) & 65535),
            g = (f >>> 16) + (Gu(this, e) >>> 16) + (Gu(a, e) >>> 16);
        d = g >>> 16;
        f &= 65535;
        g &= 65535;
        c[e] = g << 16 | f
    }
    return new ru(c, c[c.length - 1] & -2147483648 ? -1 : 0)
};
var Fu = function(a, b) {
        return a.add(vu(b))
    },
    yu = function(a, b) {
        if (Du(a) || Du(b)) return uu;
        if (-1 == a.a) return -1 == b.a ? yu(vu(a), vu(b)) : vu(yu(vu(a), b));
        if (-1 == b.a) return vu(yu(a, vu(b)));
        if (0 > Hu(a, Au) && 0 > Hu(b, Au)) return wu(Bu(a) * Bu(b));
        for (var c = a.b.length + b.b.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
        for (e = 0; e < a.b.length; e++)
            for (var f = 0; f < b.b.length; f++) {
                var g = Gu(a, e) >>> 16,
                    h = Gu(a, e) & 65535,
                    l = Gu(b, f) >>> 16,
                    m = Gu(b, f) & 65535;
                d[2 * e + 2 * f] += h * m;
                Iu(d, 2 * e + 2 * f);
                d[2 * e + 2 * f + 1] += g * m;
                Iu(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 1] += h * l;
                Iu(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 2] += g * l;
                Iu(d, 2 * e + 2 * f + 2)
            }
        for (e = 0; e < c; e++) d[e] = d[2 * e + 1] << 16 | d[2 * e];
        for (e = c; e < 2 * c; e++) d[e] = 0;
        return new ru(d, 0)
    },
    Iu = function(a, b) {
        for (;
            (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
    },
    Ju = function(a, b) {
        this.a = a;
        this.b = b
    },
    Eu = function(a, b) {
        if (Du(b)) throw Error("division by zero");
        if (Du(a)) return new Ju(uu, uu);
        if (-1 == a.a) return b = Eu(vu(a), b), new Ju(vu(b.a), vu(b.b));
        if (-1 == b.a) return b = Eu(a, vu(b)), new Ju(vu(b.a), b.b);
        if (30 < a.b.length) {
            if (-1 == a.a || -1 == b.a) throw Error("slowDivide_ only works with positive integers.");
            for (var c = zu, d = b; 0 >= Hu(d, a);) c = Ku(c, 1), d = Ku(d, 1);
            var e = Lu(c, 1),
                f = Lu(d, 1);
            d = Lu(d, 2);
            for (c = Lu(c, 2); !Du(d);) {
                var g = f.add(d);
                0 >= Hu(g, a) && (e = e.add(c), f = g);
                d = Lu(d, 1);
                c = Lu(c, 1)
            }
            b = Fu(a, yu(e, b));
            return new Ju(e, b)
        }
        for (e = uu; 0 <= Hu(a, b);) {
            c = Math.max(1, Math.floor(Bu(a) / Bu(b)));
            d = Math.ceil(Math.log(c) / Math.LN2);
            d = 48 >= d ? 1 : Math.pow(2, d - 48);
            f = wu(c);
            for (g = yu(f, b); - 1 == g.a || 0 < Hu(g, a);) c -= d, f = wu(c), g = yu(f, b);
            Du(f) && (f = zu);
            e = e.add(f);
            a = Fu(a, g)
        }
        return new Ju(e, a)
    };
ru.prototype.and = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++) c[d] = Gu(this, d) & Gu(a, d);
    return new ru(c, this.a & a.a)
};
ru.prototype.or = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++) c[d] = Gu(this, d) | Gu(a, d);
    return new ru(c, this.a | a.a)
};
ru.prototype.xor = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++) c[d] = Gu(this, d) ^ Gu(a, d);
    return new ru(c, this.a ^ a.a)
};
var Ku = function(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.b.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++) e[f] = 0 < b ? Gu(a, f - c) << b | Gu(a, f - c - 1) >>> 32 - b : Gu(a, f - c);
        return new ru(e, a.a)
    },
    Lu = function(a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.b.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b ? Gu(a, f + c) >>> b | Gu(a, f + c + 1) << 32 - b : Gu(a, f + c);
        return new ru(e, a.a)
    };
var Mu = function(a) {
        this.a = a
    },
    Pu = function(a) {
        this.b = null;
        var b = uu;
        if (a instanceof ru) {
            if (0 != a.a || 0 > Hu(a, uu) || 0 < Hu(a, Nu)) throw Error("The address does not look like an IPv4.");
            b = Vb(a)
        } else {
            if (!Ou.test(a)) throw Error(a + " does not look like an IPv4 address.");
            var c = a.split(".");
            if (4 != c.length) throw Error(a + " does not look like an IPv4 address.");
            for (var d = 0; d < c.length; d++) {
                var e = ne(c[d]);
                if (isNaN(e) || 0 > e || 255 < e || 1 != c[d].length && vc(c[d], "0")) throw Error("In " + a + ", octet " + d + " is not valid");
                e = wu(e);
                b =
                    Ku(b, 8).or(e)
            }
        }
        this.a = b
    };
w(Pu, Mu);
var Ou = /^[0-9.]*$/,
    Nu = Fu(Ku(zu, 32), zu);
Pu.prototype.toString = function() {
    if (this.b) return this.b;
    for (var a = Cu(this.a, 0), b = [], c = 3; 0 <= c; c--) b[c] = String(a & 255), a >>>= 8;
    return this.b = b.join(".")
};
var Tu = function(a) {
    this.b = null;
    var b = uu;
    if (a instanceof ru) {
        if (0 != a.a || 0 > Hu(a, uu) || 0 < Hu(a, Qu)) throw Error("The address does not look like a valid IPv6.");
        b = Vb(a)
    } else {
        if (!Ru.test(a)) throw Error(a + " is not a valid IPv6 address.");
        var c = a.split(":");
        if (-1 != c[c.length - 1].indexOf(".")) {
            a = Cu(Vb((new Pu(c[c.length - 1])).a), 0);
            var d = [];
            d.push((a >>> 16 & 65535).toString(16));
            d.push((a & 65535).toString(16));
            ub(c, c.length - 1);
            zb(c, d);
            a = c.join(":")
        }
        d = a.split("::");
        if (2 < d.length || 1 == d.length && 8 != c.length) throw Error(a +
            " is not a valid IPv6 address.");
        if (1 < d.length) {
            c = d[0].split(":");
            d = d[1].split(":");
            1 == c.length && "" == c[0] && (c = []);
            1 == d.length && "" == d[0] && (d = []);
            var e = 8 - (c.length + d.length);
            if (1 > e) c = [];
            else {
                for (var f = [], g = 0; g < e; g++) f[g] = "0";
                c = xb(c, f, d)
            }
        }
        if (8 != c.length) throw Error(a + " is not a valid IPv6 address");
        for (d = 0; d < c.length; d++) {
            e = xu(c[d], 16);
            if (0 > Hu(e, uu) || 0 < Hu(e, Su)) throw Error(c[d] + " in " + a + " is not a valid hextet.");
            b = Ku(b, 16).or(e)
        }
    }
    this.a = b
};
w(Tu, Mu);
var Ru = /^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/,
    Su = tu(65535),
    Qu = Fu(Ku(zu, 128), zu);
Tu.prototype.toString = function() {
    if (this.b) return this.b;
    for (var a = [], b = 3; 0 <= b; b--) {
        var c = Cu(this.a, b),
            d = c & 65535;
        a.push((c >>> 16).toString(16));
        a.push(d.toString(16))
    }
    c = b = -1;
    for (var e = d = 0, f = 0; f < a.length; f++) "0" == a[f] ? (e++, -1 == c && (c = f), e > d && (d = e, b = c)) : (c = -1, e = 0);
    0 < d && (b + d == a.length && a.push(""), a.splice(b, d, ""), 0 == b && (a = [""].concat(a)));
    return this.b = a.join(":")
};
var Uu = function() {},
    Vu, Wu = {
        http: 1,
        https: 1,
        ftp: 1
    },
    Xu = function(a, b) {
        try {
            var c = hn(a)
        } catch (l) {
            return !1
        }
        if (!(a = c.c && !Wu[c.c.toLowerCase()] || !c.b)) {
            c = c.b;
            a: {
                a = c.split(".");
                for (var d = 0; d < a.length; d++)
                    if (!a[d]) {
                        var e = !1;
                        break a
                    }
                if (1 < a.length) {
                    b = a[a.length - 1].toLowerCase();
                    if (!Vu) {
                        try {
                            e = wf
                        } catch (l) {
                            throw Error("Variable CFG_twsfe_likelyurl_module_file has not been loaded. This is probaly due the configuration data not being properly included.");
                        }
                        a = {};
                        var f = e.ascii_tlds;
                        for (d = 0; d < f.length; d++) {
                            var g = f[d];
                            a[g.toLowerCase()] = 1
                        }
                        e = e.unicode_tlds;
                        for (d = 0; d < e.length; d++) g = e[d], a[g.toLowerCase()] = 1;
                        Vu = a
                    }
                    e = !!Vu[b]
                } else e = !b
            }
            if (!e) {
                try {
                    var h = vc(c, "[") && wc(c, "]") ? new Tu(c.substring(1, c.length - 1)) : new Pu(c)
                } catch (l) {
                    h = null
                }
                e = null != h
            }
            a = !e
        }
        return a ? !1 : !0
    },
    Yu = function(a) {
        a = yc(a);
        if (0 <= a.search(/[\s\xa0@]/)) return !1;
        if (Xu(a, !1)) return !0;
        var b = a.replace(/%([0-9A-Fa-f][0-9A-Fa-f])/g, function(c, d) {
            return String.fromCharCode(Number("0x" + d))
        });
        return Xu(b, !1) ? !0 : Xu("http://" + a, !0) || Xu("http://" + b, !0)
    };
Uu.prototype.a = function(a, b) {
    if ("string" != typeof a) throw Error("Pattern is not a string.");
    var c = arguments;
    return a.replace(/%(\d+)\$\w/g, function(d, e) {
        e = parseInt(e, 10);
        return 0 < e && e < c.length ? c[e] : d
    })
};
var Zu = function() {
        var a = (new Qm(n.location.href)).a,
            b = a.get("e");
        a = a.get("expid");
        var c = "";
        b && (c += "e=" + b);
        "ForceExperiment" == b && a && (c += "&expid=" + a);
        return c
    },
    $u = function(a) {
        for (var b = "", c = 0; c < I(a, 5); c++) {
            var d = np(a, c);
            Dh(d, 4) && 0 < J(d, 4).length ? b = J(d, 4) : (new Bo(d.zb())).Ra[4] = b
        }
    },
    av = function(a) {
        var b = DATA.DisplayLanguage,
            c = DATA.LoginUrl,
            d = hn(n.location.href),
            e = d.toString();
        a && (d.g = a, 2E3 >= ce(d.toString()).length && (e = d.toString()));
        d = c + "/Login?hl=" + b + "&continue=" + ce(e);
        a = {
            target: "_top"
        };
        b = window;
        c = d instanceof
        Nc ? d : Uc("undefined" != typeof d.href ? d.href : String(d));
        d = a.target || d.target;
        e = [];
        for (var f in a) switch (f) {
            case "width":
            case "height":
            case "top":
            case "left":
                e.push(f + "=" + a[f]);
                break;
            case "target":
            case "noopener":
            case "noreferrer":
                break;
            default:
                e.push(f + "=" + (a[f] ? 1 : 0))
        }
        f = e.join(",");
        re() && b.navigator && b.navigator.standalone && d && "_self" != d ? (f = b.document.createElement("A"), Vd(f, c), f.setAttribute("target", d), a.noreferrer && f.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent("click", !0, !0, b, 1), f.dispatchEvent(a)) : a.noreferrer ? (f = b.open("", d, f), a = Pc(c), f && (ye && Jc(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), f.opener = null, a = Pd(ec("b/12014412, meta tag with sanitized URL"), '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + ee(a) + '">'), f.document.write(Bd(a)), f.document.close())) : (f = b.open(Pc(c), d, f)) && a.noopener && (f.opener = null)
    },
    bv = function(a) {
        a = kb(Fl(a, 0, Wl), function(b) {
            return Dh(b, 4)
        });
        a = lb(a, function(b) {
            return Cl(b, 4, 0)
        });
        return mb(a, function(b,
            c) {
            return b && 1 == c
        }, 0 < a.length)
    };
var cv = function(a, b, c, d, e, f, g) {
    K.call(this);
    this.a = a;
    this.aa = Em.M();
    this.F = L.M();
    this.ba = new ku(this.aa);
    this.Na = b;
    this.N = this.X = this.h = this.c = "";
    this.V = 0;
    this.m = !1;
    this.b = new du("tts", Em.M(), c);
    this.Y = null != this.b.b && (Fe && Jc(qd, "UCBrowser") ? !1 : !0);
    this.G = Xe || We;
    H(this.b, "stop_playlist", this.R, !1, this);
    H(this.a, "action", this.ij, !1, this);
    null != this.a.j() && H(this.a.j(), "click", this.Rn, !1, this);
    this.T = (a = /(sa=[^#&]+)/.exec(window.location.href)) ? a[0] : null;
    this.C = (a = /ttsspeed=([^&]+)/.exec(window.location.href)) ?
        a[0] : null;
    this.K = (a = /gl=([^&]+)/.exec(window.location.href)) ? a[0] : null;
    this.g = 0;
    this.sa = !!d;
    this.ya = !!e;
    this.L = f || null;
    this.na = g || null;
    this.o = "";
    this.Ca = new Uu;
    this.w = null
};
w(cv, K);
cv.prototype.W = function() {
    cv.D.W.call(this);
    nh(this.b, "stop_playlist", this.R, !1, this);
    nh(this.a, "action", this.ij, !1, this)
};
cv.prototype.R = function() {
    this.a.$c(!1)
};
var dv = function(a, b, c, d, e, f) {
    b = me("/translate_tts?ie=UTF-8&q=", ce(b), "&tl=", c, "&total=", d, "&idx=", e, "&textlen=", b.length, wo(b), a.Na, f);
    a.K && (b += "&" + a.K);
    return b
};
k = cv.prototype;
k.update = function(a, b, c, d, e) {
    var f = /([^?.,;:!"#$%&'()*+\-/<=>?@[\]^_`{|}~\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f])/;
    this.o = "";
    if (null != c)
        for (var g = 0; g < I(c, 5); g++) {
            var h = np(c, g),
                l = Hh(Eo(h, 0), 0),
                m = Hh(Eo(h, 0), 1);
            l = J(h, 4).substring(l, m);
            h = J(Do(h, 0), 0);
            if (l == h && f.test(l)) {
                this.o = J(c, 2);
                break
            }
        }
    this.g = 0;
    this.Y ? xc(a) ? (ev(this, !1), this.a.qa(!1)) : (a != this.c || b != this.h || e != this.w ? (this.c = a, this.h = b, this.w = e || null, c = !1) : c = !0, c || (this.b.stop(), this.m = !this.Y || !b || xc(a) || this.G && a.length > pu[qu[b.toLowerCase()]] ?
        !1 : b.toLowerCase() in qu), ev(this, this.ya || this.m), this.a.qa(this.m)) : (ev(this, !1), this.a.qa(!1));
    null != d && (this.a.isEnabled() && null != this.L ? this.a.j().setAttribute("data-tooltip", this.L) : !this.a.isEnabled() && null != this.na && this.a.j().setAttribute("data-tooltip", this.Ca.a(this.na, d)))
};
k.play = function() {
    if (this.c != this.X || this.h != this.N || this.g != this.V) {
        if (this.G) var a = [this.c];
        else {
            a = pu[qu[this.h.toLowerCase()]];
            var b = [],
                c = this.ba,
                d = this.c.replace(/[ \u3000\n\r\t\s]+/g, " ");
            lu(b, d, a, v(c.a, c), v(c.g, c));
            a = b
        }
        b = [];
        c = [];
        d = "";
        null != this.T && (d += "&" + this.T);
        null != this.C ? d += "&ttsspeed=" + this.C : 0 != this.g && (d += "&ttsspeed=" + this.g);
        this.o && (d += "&hint=" + this.o);
        for (var e = 0; e < a.length; e++) b.push(dv(this, a[e], this.h, a.length, e, d)), c.push(a[e].length);
        this.b.set(b, this.c.length, c, this.w, {
            textlen: this.c.length,
            tl: this.h
        });
        this.X = this.c;
        this.N = this.h;
        this.V = this.g
    }
    this.b.start();
    this.sa && (this.g = 0 === this.g ? .24 : 0)
};
k.stop = function() {
    this.b.stop()
};
k.ij = function() {
    this.a.Ea(16) ? this.play() : this.stop()
};
k.Rn = function(a) {
    this.a.isEnabled() || (a.stopPropagation(), this.dispatchEvent("userInteractionWhileDisabled"), a = this.F, N(a, O(a, 306)), Jm(this.aa, "webapp", "dia", "click", {
        dias: "vo"
    }))
};
var ev = function(a, b) {
    a.a.setVisible(b);
    b || a.b.stop()
};
var fv = function(a) {
        if (0 == a) return 0;
        if (1 == a) return 1;
        var b = .4 * a,
            c = .4 + -.2 * a;
        b += a * (c - b);
        return b + a * (c + a * (.2 + .8 * a - c) - b)
    },
    gv = function(a) {
        if (0 == a) return 0;
        if (1 == a) return 1;
        var b = 0 * a,
            c = 1 * a;
        b += a * (c - b);
        return b + a * (c + a * (1 + 0 * a - c) - b)
    },
    hv = function(a) {
        var b = a - 0;
        if (0 >= b) return 0;
        if (1 <= b) return 1;
        for (var c = 0, d = 1, e = 0, f = 0; 8 > f; f++) {
            e = fv(b);
            var g = (fv(b + 1E-6) - e) / 1E-6;
            if (1E-6 > Math.abs(e - a)) return b;
            if (1E-6 > Math.abs(g)) break;
            else e < a ? c = b : d = b, b -= (e - a) / g
        }
        for (f = 0; 1E-6 < Math.abs(e - a) && 8 > f; f++) e < a ? (c = b, b = (b + d) / 2) : (d = b, b = (b +
            c) / 2), e = fv(b);
        return b
    };
var iv = function(a) {
        var b = [];
        if (a.sentences)
            for (var c = 0, d; d = a.sentences[c]; c++) d.trans && b.push(d.trans);
        return b.join("")
    },
    jv = function() {
        for (var a = Array(51), b = 0; 51 > b; b++) a[b] = gv(hv(b / 50));
        return function(c) {
            if (0 >= c) return 0;
            if (1 <= c) return 1;
            var d = 50 * c;
            c = Math.floor(d);
            d -= c;
            return a[c] * (1 - d) + a[c + 1] * d
        }
    };
var kv = function(a, b) {
    Cs.call(this, a, "ttl");
    this.b = this.c = null;
    this.g = new Ft(MSG_LISTEN, void 0, new Kt("trans-listen-button"));
    this.h = new cv(this.g, "&client=" + (b ? b : "webapp") + "&prev=lc", 7)
};
w(kv, Cs);
kv.prototype.Ma = function() {
    kv.D.Ma.call(this);
    this.Da(Yf("DIV"))
};
kv.prototype.Da = function(a) {
    kv.D.Da.call(this, a);
    this.j().appendChild(Sp(go));
    this.c = D("gt-ct-text", this.j());
    a = D("gt-ct-tts", this.j());
    this.b = D("gt-ct-translit", this.j());
    this.g.ia(a)
};
kv.prototype.update = function(a, b, c, d) {
    kv.D.update.call(this, a, b, c, d);
    G(this.c, a);
    this.h.update(a, b);
    if (this.data) {
        a = [];
        if (0 < this.data.cc())
            for (b = 0; b < this.data.cc(); b++) c = this.data.ab(b), Dh(c, 3) && "" != J(c, 3) && a.push(J(c, 3));
        0 < a.length ? (G(this.b, a.join(" ")), W(this.b, !0)) : W(this.b, !1)
    }
    this.setVisible(!0);
    return !0
};
var lv = function(a, b, c, d, e) {
    Cs.call(this, a, "cm");
    this.aa = b;
    this.C = new kv(a, e ? e : "webapp");
    this.w = null;
    this.sa = c;
    this.b = new X;
    this.hb(this.b);
    this.c = new X;
    this.hb(this.c);
    this.g = this.m = this.K = this.N = this.T = null;
    this.h = [];
    this.Y = !!d;
    this.ba = ql.M();
    this.F = L.M()
};
w(lv, Cs);
k = lv.prototype;
k.Ma = function() {
    lv.D.Ma.call(this);
    this.Da(Yf("DIV"))
};
k.Da = function(a) {
    lv.D.Da.call(this, a);
    this.j().appendChild(Sp(eo));
    this.C.ia(D("gt-cc-tc", this.j()));
    this.w = D("gt-cc-t", this.j());
    W(this.w, !1);
    this.b.ia(D("gt-cc-l-i", this.j()));
    this.c.ia(D("gt-cc-r-i", this.j()));
    a = D("gt-cc-bc", this.j());
    this.T = new Pr("", new Kt("prev-button"));
    this.T.Ua(a);
    this.N = new Pr("", new Kt("next-button"));
    this.N.Ua(a);
    this.K = new Pr("", new Kt("big-clear-button"));
    this.K.Ua(a);
    this.m = D("gt-cc-exp", this.j());
    this.g = new Mt(this.T, this.N, this.K, this)
};
k.ea = function() {
    lv.D.ea.call(this);
    Y(this).O(this, "a", this.ul);
    Y(this).O(this, "b", this.Dl);
    Y(this).O(this.m, "click", this.al)
};
k.al = function() {
    W(this.m, !1);
    y(this.h, function(c) {
        c.setVisible(!0)
    });
    var a = {},
        b = this.F;
    Wq(this.b, function(c) {
        c.isVisible() && (gm(b, c.Id(), c.jb(), c.mc), a[c.Jb()] = c.mc ? "e" : "ne")
    });
    fm(this.F, 15, Xq(this.b));
    this.log("expand", a)
};
k.ul = function(a) {
    a = Ag(a.target);
    mv(this, this.za, this.Ia, a, !1, "clks")
};
k.Dl = function(a) {
    a = Ag(a.target);
    mv(this, this.Ia, this.za, a, !1, "clkt")
};
k.kl = function(a) {
    var b = a.text;
    if (!(50 < b.length)) {
        var c = this.g.a[0];
        a.o ? mv(this, c.Ia, c.za, b, !0, "sel") : mv(this, c.za, c.Ia, b, !0, "sel")
    }
};
var mv = function(a, b, c, d, e, f) {
    if (d != a.text || b != a.za) "zh-TW" == b && (b = "zh-CN"), ul(a.ba, f), e ? (G(a.C.c, "..."), up(a.aa, b, c, a.Sa, d, v(a.V, a, d, b, c), !1, "UTF-8", new Ym("source=" + f))) : (a.dispatchEvent("translationRefreshed"), wt(a.sa, b, c, d, f))
};
lv.prototype.setVisible = function(a) {
    var b = this.j();
    b = !(!b || !D("gender-promo-visible", b));
    lv.D.setVisible.call(this, a || b)
};
lv.prototype.update = function(a, b, c, d) {
    lv.D.update.call(this, a, b, c, d);
    var e = 1 != this.g.a.length;
    W(this.w, e);
    V(this.j(), "show-as-one-card", this.Y && e);
    var f = 0,
        g = 0,
        h = !0;
    this.h = [];
    Wq(this.b, function(r) {
        var u = r.update(a, b, c, d);
        f |= u;
        u && (h ? h = !1 : r.wh || (r.setVisible(!1), this.h.push(r)))
    }, this);
    nv(this, this.b);
    e = 0 < this.h.length;
    W(this.m, e);
    Wq(this.c, function(r) {
        g |= r.update(a, b, c, d)
    }, this);
    var l = f || g;
    this.setVisible(l);
    this.C.update(a, b, c, d);
    if (l) {
        var m = {},
            q = this.F;
        Wq(this.b, function(r) {
            r.isVisible() && (gm(q, r.Id(),
                r.jb(), r.mc), m[r.Jb()] = r.mc ? "e" : "ne")
        });
        Wq(this.c, function(r) {
            r.isVisible() && (gm(q, r.Id(), r.jb(), r.mc), m[r.Jb()] = r.mc ? "e" : "ne")
        });
        m[this.Jb()] = e ? "e" : "ne";
        this.log("show", m);
        gm(this.F, 15, Xq(this.b), !0)
    }
    return l
};
lv.prototype.V = function(a, b, c, d) {
    this.g.push(a, b, c, d);
    this.isVisible() || (a = this.g, 1 < a.a.length && (a.a.splice(a.a.length - 1), a.b = a.a.length - 1, Nt(a)))
};
var nv = function(a, b) {
    var c = [];
    Wq(b, function(d) {
        if (d.isVisible() || sb(this.h, d)) {
            var e = d.Se || d.text;
            sb(c, e) ? d.Jc && G(d.Jc, d.bj) : c.push(e)
        }
    }, a)
};
var ov = {
        hh: {
            1E3: {
                other: "0K"
            },
            1E4: {
                other: "00K"
            },
            1E5: {
                other: "000K"
            },
            1E6: {
                other: "0M"
            },
            1E7: {
                other: "00M"
            },
            1E8: {
                other: "000M"
            },
            1E9: {
                other: "0B"
            },
            1E10: {
                other: "00B"
            },
            1E11: {
                other: "000B"
            },
            1E12: {
                other: "0T"
            },
            1E13: {
                other: "00T"
            },
            1E14: {
                other: "000T"
            }
        },
        pj: {
            1E3: {
                other: "0 thousand"
            },
            1E4: {
                other: "00 thousand"
            },
            1E5: {
                other: "000 thousand"
            },
            1E6: {
                other: "0 million"
            },
            1E7: {
                other: "00 million"
            },
            1E8: {
                other: "000 million"
            },
            1E9: {
                other: "0 billion"
            },
            1E10: {
                other: "00 billion"
            },
            1E11: {
                other: "000 billion"
            },
            1E12: {
                other: "0 trillion"
            },
            1E13: {
                other: "00 trillion"
            },
            1E14: {
                other: "000 trillion"
            }
        }
    },
    pv = ov;
pv = ov;
var qv = {
    AED: [2, "dh", "\u062f.\u0625."],
    ALL: [0, "Lek", "Lek"],
    AUD: [2, "$", "AU$"],
    BDT: [2, "\u09f3", "Tk"],
    BGN: [2, "lev", "lev"],
    BRL: [2, "R$", "R$"],
    CAD: [2, "$", "C$"],
    CDF: [2, "FrCD", "CDF"],
    CHF: [2, "CHF", "CHF"],
    CLP: [0, "$", "CL$"],
    CNY: [2, "\u00a5", "RMB\u00a5"],
    COP: [32, "$", "COL$"],
    CRC: [0, "\u20a1", "CR\u20a1"],
    CZK: [50, "K\u010d", "K\u010d"],
    DKK: [50, "kr.", "kr."],
    DOP: [2, "RD$", "RD$"],
    EGP: [2, "\u00a3", "LE"],
    ETB: [2, "Birr", "Birr"],
    EUR: [2, "\u20ac", "\u20ac"],
    GBP: [2, "\u00a3", "GB\u00a3"],
    HKD: [2, "$", "HK$"],
    HRK: [2, "kn", "kn"],
    HUF: [34,
        "Ft", "Ft"
    ],
    IDR: [0, "Rp", "Rp"],
    ILS: [34, "\u20aa", "IL\u20aa"],
    INR: [2, "\u20b9", "Rs"],
    IRR: [0, "Rial", "IRR"],
    ISK: [0, "kr", "kr"],
    JMD: [2, "$", "JA$"],
    JPY: [0, "\u00a5", "JP\u00a5"],
    KRW: [0, "\u20a9", "KR\u20a9"],
    LKR: [2, "Rs", "SLRs"],
    LTL: [2, "Lt", "Lt"],
    MNT: [0, "\u20ae", "MN\u20ae"],
    MVR: [2, "Rf", "MVR"],
    MXN: [2, "$", "Mex$"],
    MYR: [2, "RM", "RM"],
    NOK: [50, "kr", "NOkr"],
    PAB: [2, "B/.", "B/."],
    PEN: [2, "S/.", "S/."],
    PHP: [2, "\u20b1", "PHP"],
    PKR: [0, "Rs", "PKRs."],
    PLN: [50, "z\u0142", "z\u0142"],
    RON: [2, "RON", "RON"],
    RSD: [0, "din", "RSD"],
    RUB: [50, "\u20bd",
        "RUB"
    ],
    SAR: [2, "Rial", "Rial"],
    SEK: [50, "kr", "kr"],
    SGD: [2, "$", "S$"],
    THB: [2, "\u0e3f", "THB"],
    TRY: [2, "\u20ba", "TRY"],
    TWD: [2, "NT$", "NT$"],
    TZS: [0, "TSh", "TSh"],
    UAH: [2, "\u0433\u0440\u043d.", "UAH"],
    USD: [2, "$", "US$"],
    UYU: [2, "$", "$U"],
    VND: [48, "\u20ab", "VN\u20ab"],
    YER: [0, "Rial", "Rial"],
    ZAR: [2, "R", "ZAR"]
};
var rv = {
        sj: ".",
        jh: ",",
        Aj: "%",
        vh: "0",
        Dj: "+",
        nh: "-",
        vj: "E",
        Cj: "\u2030",
        yj: "\u221e",
        zj: "NaN",
        ih: "#,##0.###",
        Ej: "#E0",
        Bj: "#,##0%",
        qj: "\u00a4#,##0.00",
        Sf: "USD"
    },
    sv = rv;
sv = rv;
var vv = function(a) {
        this.m = 40;
        this.a = 1;
        this.L = 0;
        this.b = 3;
        this.w = this.c = 0;
        this.V = !1;
        this.N = this.Fa = "";
        this.G = sv.nh;
        this.C = "";
        this.g = 1;
        this.o = !1;
        this.h = [];
        this.K = this.T = !1;
        this.R = 0;
        if ("number" == typeof a) switch (a) {
            case 1:
                tv(this, sv.ih);
                break;
            case 2:
                tv(this, sv.Ej);
                break;
            case 3:
                tv(this, sv.Bj);
                break;
            case 4:
                a = sv.qj;
                var b = ["0"],
                    c = qv[sv.Sf][0] & 7;
                if (0 < c) {
                    b.push(".");
                    for (var d = 0; d < c; d++) b.push("0")
                }
                a = a.replace(/0.00/g, b.join(""));
                tv(this, a);
                break;
            case 5:
                uv(this, 1);
                break;
            case 6:
                uv(this, 2);
                break;
            default:
                throw Error("Unsupported pattern type.");
        } else tv(this, a)
    },
    tv = function(a, b) {
        b.replace(/ /g, "\u00a0");
        var c = [0];
        a.Fa = wv(a, b, c);
        for (var d = c[0], e = -1, f = 0, g = 0, h = 0, l = -1, m = b.length, q = !0; c[0] < m && q; c[0]++) switch (b.charAt(c[0])) {
            case "#":
                0 < g ? h++ : f++;
                0 <= l && 0 > e && l++;
                break;
            case "0":
                if (0 < h) throw Error('Unexpected "0" in pattern "' + b + '"');
                g++;
                0 <= l && 0 > e && l++;
                break;
            case ",":
                0 < l && a.h.push(l);
                l = 0;
                break;
            case ".":
                if (0 <= e) throw Error('Multiple decimal separators in pattern "' + b + '"');
                e = f + g + h;
                break;
            case "E":
                if (a.K) throw Error('Multiple exponential symbols in pattern "' +
                    b + '"');
                a.K = !0;
                a.w = 0;
                c[0] + 1 < m && "+" == b.charAt(c[0] + 1) && (c[0]++, a.V = !0);
                for (; c[0] + 1 < m && "0" == b.charAt(c[0] + 1);) c[0]++, a.w++;
                if (1 > f + g || 1 > a.w) throw Error('Malformed exponential pattern "' + b + '"');
                q = !1;
                break;
            default:
                c[0]--, q = !1
        }
        0 == g && 0 < f && 0 <= e && (g = e, 0 == g && g++, h = f - g, f = g - 1, g = 1);
        if (0 > e && 0 < h || 0 <= e && (e < f || e > f + g) || 0 == l) throw Error('Malformed pattern "' + b + '"');
        h = f + g + h;
        a.b = 0 <= e ? h - e : 0;
        0 <= e && (a.c = f + g - e, 0 > a.c && (a.c = 0));
        a.a = (0 <= e ? e : h) - f;
        a.K && (a.m = f + a.a, 0 == a.b && 0 == a.a && (a.a = 1));
        a.h.push(Math.max(0, l));
        a.T = 0 == e || e == h;
        d = c[0] - d;
        a.N = wv(a, b, c);
        c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++, 1 != a.g && (a.o = !0), a.G = wv(a, b, c), c[0] += d, a.C = wv(a, b, c)) : (a.G += a.Fa, a.C += a.N)
    },
    uv = function(a, b) {
        a.R = b;
        tv(a, sv.ih);
        a.c = 0;
        a.b = 2;
        if (0 < a.c) throw Error("Can't combine significant digits and minimum fraction digits");
        a.L = 2
    },
    Ev = function(a, b) {
        if (isNaN(b)) return sv.zj;
        var c = [];
        var d = b,
            e = b;
        if (0 == a.R) var f = xv;
        else d = Math.abs(d), e = Math.abs(e), f = yv(a, 1 >= d ? 0 : zv(d)).dg, e = Av(e, -f), Bv(a, e), d = Av(d, -f), d = Bv(a, d), f = yv(a, f + zv(d.ki));
        b = Av(b, -f.dg);
        c.push(f.prefix);
        d = 0 > b || 0 == b && 0 > 1 / b;
        c.push(d ? a.G : a.Fa);
        if (isFinite(b))
            if (b = b * (d ? -1 : 1) * a.g, a.K)
                if (0 == b) Cv(a, b, a.a, c), Dv(a, 0, c);
                else {
                    e = Math.log(b) / Math.log(10);
                    x(!p(void 0) || !1);
                    e = Math.floor(e + 2E-15);
                    b = Av(b, -e);
                    var g = a.a;
                    1 < a.m && a.m > a.a ? (g = e % a.m, 0 > g && (g = a.m + g), b = Av(b, g), e -= g, g = 1) : 1 > a.a ? (e++, b = Av(b, -1)) : (e -= a.a - 1, b = Av(b, a.a - 1));
                    Cv(a, b, g, c);
                    Dv(a, e, c)
                } else Cv(a, b, a.a, c);
        else c.push(sv.yj);
        c.push(d ? a.C : a.N);
        c.push(f.Ui);
        return c.join("")
    },
    Bv = function(a, b) {
        var c = Av(b, a.b);
        0 < a.L && (c = Fv(c, a.L, a.b));
        c = Math.round(c);
        isFinite(c) ?
            (b = Math.floor(Av(c, -a.b)), a = Math.floor(c - Av(b, a.b))) : a = 0;
        return {
            ki: b,
            Ek: a
        }
    },
    Cv = function(a, b, c, d) {
        if (a.c > a.b) throw Error("Min value must be less than max value");
        d || (d = []);
        b = Bv(a, b);
        var e = b.ki,
            f = b.Ek,
            g = 0 < a.c || 0 < f || !1;
        b = a.c;
        g && (b = a.c);
        for (var h = "", l = e; 1E20 < l;) h = "0" + h, l = Math.round(Av(l, -1));
        h = l + h;
        var m = sv.sj;
        l = sv.vh.charCodeAt(0);
        var q = h.length,
            r = 0;
        if (0 < e || 0 < c) {
            for (e = q; e < c; e++) d.push(String.fromCharCode(l));
            if (2 <= a.h.length)
                for (c = 1; c < a.h.length; c++) r += a.h[c];
            c = q - r;
            if (0 < c) {
                e = a.h;
                r = q = 0;
                for (var u, A = sv.jh,
                        Q = h.length, M = 0; M < Q; M++)
                    if (d.push(String.fromCharCode(l + 1 * Number(h.charAt(M)))), 1 < Q - M)
                        if (u = e[r], M < c) {
                            var Oa = c - M;
                            (1 === u || 0 < u && 1 === Oa % u) && d.push(A)
                        } else r < e.length && (M === c ? r += 1 : u === M - c - q + 1 && (d.push(A), q += u, r += 1))
            } else {
                c = h;
                h = a.h;
                e = sv.jh;
                u = c.length;
                A = [];
                for (q = h.length - 1; 0 <= q && 0 < u; q--) {
                    r = h[q];
                    for (Q = 0; Q < r && 0 <= u - Q - 1; Q++) A.push(String.fromCharCode(l + 1 * Number(c.charAt(u - Q - 1))));
                    u -= r;
                    0 < u && A.push(e)
                }
                d.push.apply(d, A.reverse())
            }
        } else g || d.push(String.fromCharCode(l));
        (a.T || g) && d.push(m);
        f = String(f);
        g = f.split("e+");
        2 == g.length && (f = String(Fv(parseFloat(g[0]), a.L, 1)), f = f.replace(".", ""), f += ke("0", parseInt(g[1], 10) - f.length + 1));
        a.b + 1 > f.length && (f = "1" + ke("0", a.b - f.length) + f);
        for (a = f.length;
            "0" == f.charAt(a - 1) && a > b + 1;) a--;
        for (e = 1; e < a; e++) d.push(String.fromCharCode(l + 1 * Number(f.charAt(e))))
    },
    Dv = function(a, b, c) {
        c.push(sv.vj);
        0 > b ? (b = -b, c.push(sv.nh)) : a.V && c.push(sv.Dj);
        b = "" + b;
        for (var d = sv.vh, e = b.length; e < a.w; e++) c.push(d);
        c.push(b)
    },
    wv = function(a, b, c) {
        for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
            var g = b.charAt(c[0]);
            if ("'" == g) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
            else if (e) d += g;
            else switch (g) {
                case "#":
                case "0":
                case ",":
                case ".":
                case ";":
                    return d;
                case "\u00a4":
                    c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0]++, d += sv.Sf) : d += qv[sv.Sf][1];
                    break;
                case "%":
                    if (!a.o && 1 != a.g) throw Error("Too many percent/permill");
                    if (a.o && 100 != a.g) throw Error("Inconsistent use of percent/permill characters");
                    a.g = 100;
                    a.o = !1;
                    d += sv.Aj;
                    break;
                case "\u2030":
                    if (!a.o && 1 != a.g) throw Error("Too many percent/permill");
                    if (a.o && 1E3 != a.g) throw Error("Inconsistent use of percent/permill characters");
                    a.g = 1E3;
                    a.o = !1;
                    d += sv.Cj;
                    break;
                default:
                    d += g
            }
        }
        return d
    },
    xv = {
        prefix: "",
        Ui: "",
        dg: 0
    },
    yv = function(a, b) {
        a = 1 == a.R ? pv.hh : pv.pj;
        null == a && (a = pv.hh);
        if (3 > b) return xv;
        b = Math.min(14, b);
        var c = a[Av(1, b)];
        for (--b; !c && 3 <= b;) c = a[Av(1, b)], b--;
        if (!c) return xv;
        a = c.other;
        return a && "0" != a ? (a = /([^0]*)(0+)(.*)/.exec(a)) ? {
            prefix: a[1],
            Ui: a[3],
            dg: b + 1 - (a[2].length - 1)
        } : xv : xv
    },
    zv = function(a) {
        if (!isFinite(a)) return 0 < a ? a : 0;
        for (var b = 0; 1 <= (a /= 10);) b++;
        return b
    },
    Av = function(a, b) {
        x(0 == b % 1, 'Cannot shift by fractional digits "%s".', b);
        if (!a || !isFinite(a) || 0 == b) return a;
        a = String(a).split("e");
        return parseFloat(a[0] + "e" + (parseInt(a[1] || 0, 10) + b))
    },
    Gv = function(a, b) {
        x(0 == b % 1, 'Cannot round to fractional digits "%s".', b);
        return a && isFinite(a) ? Av(Math.round(Av(a, b)), -b) : a
    },
    Fv = function(a, b, c) {
        if (!a) return a;
        b = b - zv(a) - 1;
        return b < -c ? Gv(a, -c) : Gv(a, b)
    };
var Hv = function(a, b, c) {
    X.call(this);
    this.h = a;
    this.b = b;
    this.c = c;
    this.g = new vv("######")
};
w(Hv, X);
Hv.prototype.Rc = function(a) {
    return a && "DIV" == a.tagName && D("cc-ctr", a) && D("cc-msg", a) ? !0 : !1
};
var Kv = function(a) {
        Iv(a, !1);
        Jv(a, 0)
    },
    Jv = function(a, b) {
        b = Ev(a.g, b);
        var c = Ev(a.g, a.h);
        G(D("cc-ctr", a.j()), b + "/" + c)
    },
    Iv = function(a, b) {
        if (b) {
            var c = D("cc-ctr", a.j()),
                d = a.c;
            U(c, a.b);
            T(c, d)
        } else c = D("cc-ctr", a.j()), d = a.b, U(c, a.c), T(c, d);
        W(D("cc-msg", a.j()), b)
    };
var Lv = function(a, b) {
    Hg.call(this);
    this.c = this.b = 0;
    this.tc = a;
    this.g = b;
    this.a = new Rr(v(this.Jk, this), 0, this)
};
w(Lv, Hg);
k = Lv.prototype;
k.W = function() {
    this.a.La();
    delete this.tc;
    delete this.g;
    Lv.D.W.call(this)
};
k.start = function(a, b) {
    this.stop();
    b = b || 0;
    this.b = Math.max(a || 0, 0);
    this.c = 0 > b ? -1 : Ua() + b;
    this.a.start(0 > b ? this.b : Math.min(this.b, b))
};
k.stop = function() {
    this.a.stop()
};
k.kb = function() {
    return this.a.kb()
};
k.Jk = function() {
    if (!this.tc.call(this.g))
        if (0 > this.c) this.a.start(this.b);
        else {
            var a = this.c - Ua();
            0 >= a || this.a.start(Math.min(this.b, a))
        }
};
var Nv = function(a) {
    K.call(this);
    this.v = a;
    this.a = this.v.value;
    this.b = new Hq(this);
    this.g = Ua();
    Mv ? this.b.O(a, "paste", this.Gd) : this.b.O(a, ["keydown", "blur", "focus", "mouseover", "input"], this.$k);
    this.c = new Lv(v(this.Gh, this))
};
w(Nv, K);
var Mv = Ae || B || xe || ze && Re("1.9");
k = Nv.prototype;
k.rc = "init";
k.F = Vi("goog.events.PasteHandler");
k.W = function() {
    Nv.D.W.call(this);
    this.b.La();
    this.b = null;
    this.c.La();
    this.c = null
};
k.Gh = function() {
    if (this.a == this.v.value) return !1;
    Yi(this.F, "detected textchange after paste");
    this.dispatchEvent("after_paste");
    return !0
};
k.Gd = function(a) {
    a = new Tg(a.b);
    a.type = "paste";
    this.dispatchEvent(a);
    Bi(function() {
        this.Gh() || this.c.start(50, 200)
    }, 0, this)
};
k.$k = function(a) {
    switch (this.rc) {
        case "init":
            switch (a.type) {
                case "blur":
                    this.rc = "init";
                    break;
                case "focus":
                    this.rc = "focused";
                    break;
                case "mouseover":
                    this.rc = "init";
                    this.v.value != this.a && (Yi(this.F, "paste by dragdrop while on init!"), this.Gd(a));
                    break;
                default:
                    Wi(this.F, "unexpected event " + a.type + "during init")
            }
            break;
        case "focused":
            switch (a.type) {
                case "input":
                    var b = this.g + 400;
                    if (Ua() > b || "focus" == this.h) Yi(this.F, "paste by textchange while focused!"), this.Gd(a);
                    break;
                case "blur":
                    this.rc = "init";
                    break;
                case "keydown":
                    Yi(this.F,
                        "key down ... looking for ctrl+v");
                    if (De && we && 0 == a.keyCode || De && we && 17 == a.keyCode) break;
                    this.rc = "typing";
                    break;
                case "mouseover":
                    this.v.value != this.a && (Yi(this.F, "paste by dragdrop while focused!"), this.Gd(a));
                    break;
                default:
                    Wi(this.F, "unexpected event " + a.type + " during focused")
            }
            break;
        case "typing":
            switch (a.type) {
                case "input":
                    this.rc = "focused";
                    break;
                case "blur":
                    this.rc = "init";
                    break;
                case "keydown":
                    if (a.ctrlKey && 86 == a.keyCode || a.shiftKey && 45 == a.keyCode || a.metaKey && 86 == a.keyCode) Yi(this.F, "paste by ctrl+v while keypressed!"),
                        this.Gd(a);
                    break;
                case "mouseover":
                    this.v.value != this.a && (Yi(this.F, "paste by dragdrop while keypressed!"), this.Gd(a));
                    break;
                default:
                    Wi(this.F, "unexpected event " + a.type + " during keypressed")
            }
            break;
        default:
            Wi(this.F, "invalid " + this.rc + " state")
    }
    this.g = Ua();
    this.a = this.v.value;
    Yi(this.F, a.type + " -> " + this.rc);
    this.h = a.type
};
var Ov = function() {};
w(Ov, ir);
Ga(Ov);
k = Ov.prototype;
k.Vc = function() {};
k.Xa = function(a, b) {
    Br(a, !1);
    a.xc &= -256;
    a.Oa(32, !1);
    Ov.D.Xa.call(this, a, b);
    a.g(b.value);
    return b
};
k.ub = function(a) {
    Br(a, !1);
    a.xc &= -256;
    a.Oa(32, !1);
    return a.a.b("TEXTAREA", {
        "class": lr(this, a).join(" "),
        disabled: !a.isEnabled()
    }, a.Ta() || "")
};
k.Uc = function(a) {
    return "TEXTAREA" == a.tagName
};
k.xg = Fa;
k.wg = function(a) {
    return a.isEnabled()
};
k.Kd = Fa;
k.rd = function(a, b, c) {
    Ov.D.rd.call(this, a, b, c);
    (a = a.j()) && 1 == b && (a.disabled = c)
};
k.fc = Fa;
k.ac = function(a, b) {
    a && (a.value = b)
};
k.xa = function() {
    return "goog-textarea"
};
var Pv = function(a, b, c) {
    Z.call(this, a, b || Ov.M(), c);
    Br(this, !1);
    this.Oe = !0;
    (b = this.j()) && this.c.pf(b, !0);
    this.Nd = "" != a;
    a || (this.Wc = "")
};
w(Pv, Z);
var Qv = !(B && !Te(11));
k = Pv.prototype;
k.Od = !1;
k.Af = !1;
k.Nd = !1;
k.Ec = 0;
k.Pg = 0;
k.di = !1;
k.Jf = !1;
k.Xg = !1;
k.Wg = !1;
k.yd = "";
var Rv = function(a) {
        return a.m.top + a.m.bottom + a.X.top + a.X.bottom
    },
    Sv = function(a) {
        var b = a.Pg,
            c = a.j();
        b && c && a.Jf && (b -= Rv(a));
        return b
    };
Pv.prototype.b = function(a) {
    this.g(String(a))
};
Pv.prototype.Z = function() {
    return this.j().value != this.yd || Tv(this) || this.Nd ? this.j().value : ""
};
Pv.prototype.g = function(a) {
    Pv.D.g.call(this, a);
    this.Nd = "" != a;
    Uv(this)
};
Pv.prototype.qa = function(a) {
    Pv.D.qa.call(this, a);
    this.j().disabled = !a
};
var Uv = function(a) {
        a.j() && a.N()
    },
    Tv = function(a) {
        x(a.j());
        return "placeholder" in a.j()
    },
    Vv = function(a) {
        a.yd && (Tv(a) ? a.j().placeholder = a.yd : !a.j() || a.Nd || a.Af || (T(x(a.j()), "textarea-placeholder-input"), a.j().value = a.yd))
    };
Pv.prototype.ea = function() {
    Pv.D.ea.call(this);
    var a = this.j();
    Zp(a, {
        overflowY: "hidden",
        overflowX: "auto",
        boxSizing: "border-box",
        MsBoxSizing: "border-box",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box"
    });
    this.m = Eq(a);
    this.X = kq(a);
    Y(this).O(a, "scroll", this.N).O(a, "focus", this.N).O(a, "keyup", this.N).O(a, "mouseup", this.Vb).O(a, "blur", this.cb);
    Vv(this);
    Uv(this)
};
var Wv = function(a) {
        if (!a.di) {
            var b = a.j().cloneNode(!1);
            Zp(b, {
                position: "absolute",
                height: "auto",
                top: "-9999px",
                margin: "0",
                padding: "1px",
                border: "1px solid #000",
                overflow: "hidden"
            });
            bg(a.a.a.body, b);
            var c = b.scrollHeight;
            b.style.padding = "10px";
            var d = b.scrollHeight;
            a.Xg = d > c;
            b.style.borderWidth = "10px";
            a.Wg = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.Jf = !0);
            hg(b);
            a.di = !0
        }
        b = a.j();
        isNaN(a.m.top) && (a.m = Eq(b), a.X = kq(b));
        c = a.j().scrollHeight;
        var e = a.j();
        d = e.offsetHeight - e.clientHeight;
        if (!a.Xg) {
            var f =
                a.m;
            d -= f.top + f.bottom
        }
        a.Wg || (e = kq(e), d -= e.top + e.bottom);
        c += 0 < d ? d : 0;
        a.Jf ? c -= Rv(a) : (a.Xg || (d = a.m, c += d.top + d.bottom), a.Wg || (a = kq(b), c += a.top + a.bottom));
        return c
    },
    Xv = function(a, b) {
        a.Ec != b && (a.Ec = b, a.j().style.height = b + "px")
    },
    Yv = function(a) {
        var b = a.j();
        b.style.height = "auto";
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.Ec = 0
    };
Pv.prototype.cb = function() {
    Tv(this) || (this.Af = !1, "" == this.j().value && (this.Nd = !1, Vv(this)))
};
Pv.prototype.N = function(a) {
    if (!this.Od) {
        var b = this.j();
        !Tv(this) && a && "focus" == a.type && (b.value == this.yd && this.yd && !this.Af && (U(b, "textarea-placeholder-input"), b.value = ""), this.Af = !0, this.Nd = "" != b.value);
        var c = !1;
        this.Od = !0;
        a = this.Ec;
        if (b.scrollHeight) {
            var d = !1,
                e = !1,
                f = Wv(this),
                g = b.offsetHeight,
                h = Sv(this);
            var l = 0;
            var m = this.j();
            l && m && this.Jf && (l -= Rv(this));
            h && f < h ? (Xv(this, h), d = !0) : l && f > l ? (Xv(this, l), b.style.overflowY = "", e = !0) : g != f ? Xv(this, f) : this.Ec || (this.Ec = f);
            d || e || !Qv || (c = !0)
        } else Yv(this);
        this.Od = !1;
        c && (b = this.j(), this.Od || (this.Od = !0, (e = b.scrollHeight) ? (f = Wv(this), c = Sv(this), c && f <= c || (d = this.m, b.style.paddingBottom = d.bottom + 1 + "px", Wv(this) == f && (b.style.paddingBottom = d.bottom + e + "px", b.scrollTop = 0, e = Wv(this) - e, e >= c ? Xv(this, e) : Xv(this, c)), b.style.paddingBottom = d.bottom + "px")) : Yv(this), this.Od = !1));
        a != this.Ec && this.dispatchEvent("resize")
    }
};
Pv.prototype.Vb = function() {
    var a = this.j(),
        b = a.offsetHeight;
    a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
    b != this.Ec && (this.Ec = this.Pg = b)
};
var Zv = function(a, b) {
    Pv.call(this, a);
    this.Wb = !!b;
    this.sa = "";
    this.ya = null;
    this.T = 0;
    this.Y = this.ba = !1;
    this.Ca = null
};
w(Zv, Pv);
Zv.prototype.b = function(a) {
    Zv.D.b.call(this, a);
    this.V("set")
};
Zv.prototype.ea = function() {
    Zv.D.ea.call(this);
    H(this.j(), "compositionstart", v(this.xb, this), !1, this);
    H(this.j(), "compositionend", v(this.wb, this), !1, this);
    this.Ca = new br(this.j());
    H(this.Ca, "key", function(a) {
        $v(this, "key", {
            keyCode: a.keyCode
        })
    }, !1, this);
    H(this.j(), "input", function() {
        $v(this, "input")
    }, !1, this);
    H(new Nv(this.j()), "paste", function() {
        this.ba = !0;
        $v(this, "paste")
    }, !1, this);
    H(this.j(), "drop", function() {
        $v(this, "drop")
    }, !1, this);
    this.ya = new zi(1E3);
    H(this.ya, "tick", function() {
        this.V("timer")
    }, !1, this);
    this.ya.start()
};
Zv.prototype.xb = function() {
    this.Y = !0
};
Zv.prototype.wb = function() {
    this.Y = !1;
    $v(this, "input")
};
var $v = function(a, b, c) {
    Bi(v(a.V, a, b, c), 0, a)
};
Zv.prototype.V = function(a, b) {
    if (!this.Y)
        if (this.Wb && "key" == a && b && 13 == b.keyCode) this.dispatchEvent("enter");
        else {
            var c = this.Z();
            "" == c.trim() && c != this.sa && this.dispatchEvent("clear");
            c != this.sa && (this.T += 1, this.sa = c, c = new Kg("change"), this.ba && (this.ba = !1, a = "paste"), c.changeType = a, null != b && Xb(c, b), this.dispatchEvent(c))
        }
};
var aw = function(a) {
        return yc(a.Z())
    },
    bw = function(a) {
        var b = a.T;
        a.T = 0;
        return b
    };
var cw = function(a, b) {
    K.call(this);
    this.md = a;
    this.a = [];
    null != b && this.Ad(b)
};
w(cw, K);
cw.prototype.update = function(a, b) {
    for (var c = this.a.length = 0; c < a.length; ++c) this.a.push(a[c]);
    this.dispatchEvent({
        type: this.md,
        data: this.a,
        selected: null != b ? b : null
    })
};
var dw = function(a, b) {
    K.call(this);
    this.T = !!b;
    this.a = "";
    this.V = a;
    this.c = this.b = "";
    this.L = new cw("srcSuggestionUpdated", this);
    this.K = new cw("staticSrcSuggestionUpdated", this);
    this.R = new cw("staticTgtSuggestionUpdated", this);
    this.X = [];
    this.ba = new cw("srcEmphasizeUpdated", this);
    this.Y = new cw("tgtEmphasizeUpdated", this);
    this.aa = this.na = 0;
    this.o = [];
    this.m = [];
    this.C = [];
    this.N = [];
    this.G = !1;
    this.w = ""
};
w(dw, K);
var ew = function(a, b) {
        var c = [];
        if (b) {
            for (var d = "auto" == a.a ? a.c : a.a, e = -1, f = 0; f < b.length; ++f) b[f] == d ? "auto" != a.a && (e = f) : c.push(b[f]);
            b = -1 != e && 3 > e
        } else b = !1;
        b || a.G || a.L.update(c ? c.slice(0, 3) : [])
    },
    gw = function(a) {
        var b = a.K,
            c = a.a;
        a = fw(a.C, a.o);
        b.update(a, c)
    },
    hw = function(a) {
        var b = a.R,
            c = a.b;
        a = fw(a.N, a.m);
        b.update(a, c)
    };
dw.prototype.g = function(a, b) {
    b = null != b ? b : 0;
    if (3 == b || 4 == b || 5 == b) this.G = !0;
    6 == b && (this.w = a);
    "zh-TW" == a && (a = "zh-CN");
    "auto" != a && iw(this, "");
    if (this.a != a) {
        jw(this, this.K, a, this.o);
        var c = this.a;
        this.a = a;
        this.T && kw(this.a, this.o);
        this.V && c != this.a && this.V(kc(this.a) ? "rtl" : "ltr");
        a = "auto" == c ? void 0 : v(this.h, this, c, 6);
        this.na = b;
        lw(this, this.a, "srcLanguageUpdated", b, a)
    }
};
dw.prototype.h = function(a, b) {
    b = null != b ? b : 0;
    6 != b && 5 != b || "zh-CN" != a || "zh-TW" != this.w || (a = "zh-TW");
    5 == b && (this.w = this.b);
    jw(this, this.R, a, this.m);
    if (this.b != a) {
        var c = this.b;
        this.b = a;
        this.T && kw(this.b, this.m);
        this.aa = b;
        lw(this, this.b, "tgtLanguageUpdated", b, v(this.g, this, c, 6))
    }
};
var jw = function(a, b, c, d) {
        for (var e = yb(b.a), f = "auto" != c, g = 0; g < e.length; g++)
            if (c == e[g]) {
                f = !1;
                break
            }
        if (a.T && "auto" != c) {
            g = e.length;
            d = e = [c].concat(d instanceof Array ? d : ca(ba(d)), e instanceof Array ? e : ca(ba(e)));
            a = {};
            for (var h = f = 0; h < d.length;) {
                var l = d[h++];
                var m = l;
                m = Ma(m) ? "o" + Qa(m) : (typeof m).charAt(0) + m;
                Object.prototype.hasOwnProperty.call(a, m) || (a[m] = !0, d[f++] = l)
            }
            d.length = f;
            e.length = g
        } else if (f)
            for (a = {}, 0 < d.length && (a[d[0]] = !0), 1 < d.length && (a[d[1]] = !0), g = e.length - 1; 0 <= g; g--)
                if (!a[e[g]]) {
                    e[g] = c;
                    break
                }
        b.update(e,
            c)
    },
    iw = function(a, b) {
        "auto" == b && (b = "");
        a.c != b && (a.c = b, a.dispatchEvent({
            type: "detectSrcUpdated",
            data: a.c
        }))
    },
    mw = function(a) {
        for (var b = DATA.RecentLanguages.recent_sl, c = 0; c < b.length; ++c) a.o.push(b[c])
    },
    nw = function(a) {
        for (var b = DATA.RecentLanguages.recent_tl, c = 0; c < b.length; ++c) a.m.push(b[c])
    },
    ow = function(a) {
        a.C = [];
        a.N = [];
        for (var b = window.DEFAULT_SOURCES || [], c = window.DEFAULT_TARGETS || [], d = 0; d < b.length; d++) tb(a.C, b[d]);
        for (b = 0; b < c.length; b++) tb(a.N, c[b])
    },
    pw = function(a) {
        if (!a || 0 == a.length) return "";
        for (var b = [], c = 0; c < a.length; ++c) b.push(a[c]);
        return b.join("|")
    },
    lw = function(a, b, c, d, e) {
        a.dispatchEvent({
            type: c,
            data: b,
            Dh: 6 == d
        });
        e && (3 == d || 4 == d) && a.a == a.b && "zh-CN" != a.a && e();
        4 != d && 3 != d || a.dispatchEvent("languageSelected")
    },
    qw = function(a, b) {
        for (var c = [], d = 0; d < a.length && !(a[d] != b && c.push(a[d]), 3 <= c.length); ++d);
        return c
    },
    kw = function(a, b) {
        if ("auto" != a) {
            for (var c = 0; c < b.length && b[c] != a; ++c);
            c == b.length ? (b.unshift(a), 10 < b.length && b.pop()) : (b.splice(c, 1), b.unshift(a))
        }
    },
    fw = function(a, b) {
        for (var c = {}, d = [], e = 0; e < b.length &&
            3 > d.length; e++) d.push(b[e]), c[b[e]] = !0;
        for (e = 0; e < a.length && 3 > d.length; e++) null == c[a[e]] && (c[a[e]] = !0, d.push(a[e]));
        return d
    };
var uw = function(a, b) {
        var c = 0,
            d = 0;
        if (rw(a)) c = a.selectionStart, d = b ? -1 : a.selectionEnd;
        else if (sw()) {
            var e = tw(a),
                f = e[0];
            e = e[1];
            if (f.inRange(e)) {
                f.setEndPoint("EndToStart", e);
                if ("textarea" == a.type) {
                    a = e.duplicate();
                    var g = f.text;
                    c = g;
                    e = d = a.text;
                    for (var h = !1; !h;) 0 == f.compareEndPoints("StartToEnd", f) ? h = !0 : (f.moveEnd("character", -1), f.text == g ? c += "\r\n" : h = !0);
                    if (b) b = [c.length, -1];
                    else {
                        for (b = !1; !b;) 0 == a.compareEndPoints("StartToEnd", a) ? b = !0 : (a.moveEnd("character", -1), a.text == d ? e += "\r\n" : b = !0);
                        b = [c.length, c.length +
                            e.length
                        ]
                    }
                    return b
                }
                c = f.text.length;
                d = b ? -1 : f.text.length + e.text.length
            }
        }
        return [c, d]
    },
    tw = function(a) {
        var b = a.ownerDocument || a.document,
            c = b.selection.createRange();
        "textarea" == a.type ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
        return [b, c]
    },
    vw = function(a, b) {
        "textarea" == a.type && (b = ae(a.value.substring(0, b)).length);
        return b
    },
    rw = function(a) {
        try {
            return "number" == typeof a.selectionStart
        } catch (b) {
            return !1
        }
    },
    sw = function() {
        return B && !Re("9")
    };
var ww = function(a, b, c, d) {
        var e = DATA.DisplayLanguage,
            f = DATA.MaxSingleQueryLength;
        this.b = a;
        this.h = b;
        this.L = e;
        this.g = c;
        this.c = f;
        this.a = d || null;
        this.o = !1;
        this.m = new Em;
        this.m.c = "webapp";
        this.F = L.M()
    },
    xw = function(a) {
        H(a.b, "change", a.w, !1, a);
        H(document, "selectionchange", a.C, !1, a);
        H(new Nv(a.b.j()), "paste", a.G, !1, a)
    };
ww.prototype.w = function(a) {
    var b = this.b.Z().length;
    this.a && Jv(this.a, b);
    var c = "set" == a.changeType;
    a = "key" == a.changeType;
    if (b > this.c) {
        if (!uq(this.g.j()) && !a || c) this.g.setVisible(!0), a = this.h.c, "" == a && (a = this.h.a), c = b - this.c, Jm(this.m, "webapp", "ov", "1", {
            sl: this.h.a,
            tl: this.h.b,
            dl: a,
            hl: this.L,
            ql: b,
            ol: c
        }), a = this.F, N(a, nm(a, 250, b, c)), this.a && Iv(this.a, !0), b = this.b.Z().substring(this.c), this.g.g = b, b = this.g, c = {
            maximum_input_count: Ev(b.X, this.c)
        }, a = yw(b.V, c), G(D("snck-msg", b.j()), a), c = yw(b.Y, c), G(D("ovfl-xlt",
            b.j()), c);
        this.b.g(this.b.Z().substring(0, this.c));
        this.a && Jv(this.a, this.c)
    } else b < this.c && this.a && Iv(this.a, !1), (c || 0 == b) && zw(this)
};
var zw = function(a) {
    a.g.g = "";
    a.g.setVisible(!1);
    a.a && Iv(a.a, !1)
};
ww.prototype.C = function() {
    var a = uw(this.b.j(), !1),
        b = this.b.Z().length;
    this.o = 0 != b && 0 == a[0] && a[1] == b
};
ww.prototype.G = function() {
    this.o && zw(this)
};
var Aw = function(a, b, c, d, e, f, g, h) {
    X.call(this);
    this.c = Em.M();
    this.T = a;
    this.N = b;
    this.X = c;
    this.V = d;
    this.Y = e;
    this.b = f;
    this.m = g;
    this.h = null != h ? h : null;
    this.F = L.M();
    this.w = !1
};
w(Aw, X);
Aw.prototype.setVisible = function(a) {
    a && !this.w ? (this.c.log("community-promo", "show-" + this.b), qm(this.F, this.m), W(this.g, !0)) : W(this.g, !1)
};
Aw.prototype.Da = function(a) {
    Aw.D.Da.call(this, a);
    this.g = Sp($n, {
        dm: this.T,
        bm: this.N,
        Fn: this.X,
        vn: this.V,
        url: this.Y,
        id: this.b
    });
    a.appendChild(this.g);
    var b = D("cp-dismiss", a);
    Y(this).O(b, "click", this.C);
    a = D("cp-promo-href", a);
    Y(this).O(a, "click", this.K)
};
Aw.prototype.C = function() {
    this.c.log("community-promo", "dismiss-" + this.b);
    Im(this.c, "/translate/uc?ua=dcp&uav=" + this.b);
    var a = this.F;
    N(a, pm(a, 74, this.m));
    this.setVisible(!1);
    this.w = !0
};
Aw.prototype.K = function(a) {
    this.c.log("community-promo", "click-" + this.b);
    rm(this.F, this.m);
    this.h && this.h.a() && (this.h.reset(), a.preventDefault(), a.stopPropagation())
};
var Bw = function(a, b) {
    this.a = a;
    this.b = b || null
};
Bw.prototype.Va = function() {
    return this.a
};
Bw.prototype.sb = function() {
    return this.b
};
var Cw = function() {};
w(Cw, ir);
Ga(Cw);
k = Cw.prototype;
k.Vc = function() {
    return "menuitem"
};
k.ub = function(a) {
    var b = F("DIV", null, a.Va());
    T(b, "gt-is-sg");
    var c = F("DIV", null, "");
    T(c, a.Lh ? "gt-is-ld-top" : "gt-is-ld");
    c = ["DIV", lr(this, a), c];
    var d = F("SPAN");
    if (a.Kc) {
        var e = new Pr(null, new Kt);
        e.Ua(d);
        T(e.j(), "gt-is-flag");
        ls(e.j(), a.jg, void 0);
        e.setVisible(!1);
        a.Qb = e;
        d.id = Qq(e)
    }
    e = F("DIV");
    T(e, "gt-is-ca");
    var f = new Pr;
    f.v = e;
    a.kc = f;
    c = c.concat([b, d, e]);
    a.Wm && (b = F("DIV", null, a.sb()), c.push(b), T(b, "gt-is-tr"));
    b = F.apply(null, c);
    b.id = Qq(a);
    return a.v = b
};
k.Uc = function(a) {
    return "DIV" == a.tagName
};
k.xa = function() {
    return "gt-is-itm"
};
k.rd = function(a, b, c) {
    Cw.D.rd.call(this, a, b, c);
    2 == b && a.Kc && a.Qb && !a.Hd && a.Qb.setVisible(c)
};
var Dw = function(a, b, c, d, e, f, g) {
    Z.call(this, a.Va(), f || Cw.M(), g);
    this.Td = a;
    this.Kc = b;
    this.jg = c;
    this.kc = null;
    this.Lh = d;
    this.Wm = e;
    this.Hd = !1;
    this.Oa(1, !1)
};
w(Dw, Z);
Dw.prototype.Va = function() {
    return this.Td.Va()
};
Dw.prototype.sb = function() {
    return this.Td.sb()
};
Dw.prototype.vb = function(a) {
    this.Kc && ng(this.Qb.j(), a.target) ? (this.Hd = !0, this.Qb.vb(a)) : this.kc && ng(this.kc.j(), a.target) ? this.kc.vb(a) : Dw.D.vb.call(this, a)
};
Dw.prototype.Db = function(a) {
    if (this.kc && ng(this.kc.j(), a.target)) this.kc.Db(a);
    else if (this.Kc && ng(this.Qb.j(), a.target) && this.Hd) this.Qb.Db(a), this.Hd = !1, this.Ea(2) || this.Qb.setVisible(!1);
    else {
        if (this.Kc) {
            var b = this.getParent();
            y(b.b, function(c) {
                c.Hd && (c.Hd = !1, Hr(c.Qb, !1));
                c != this && c.Qb.setVisible(!1)
            })
        }
        Dw.D.Db.call(this, a)
    }
};
var Ew = function(a, b, c, d) {
    var e = "md";
    null != d && d && (e = "m" + e);
    Ds.call(this, a, e, MSG_DEFINITIONS_OF, "", 7);
    this.K = b;
    this.C = null != c ? c : !0
};
w(Ew, Ds);
Ew.prototype.update = function(a, b, c, d) {
    Ew.D.update.call(this, a, b, c, d);
    if (!d || 0 == I(d, 12) && 0 == I(d, 15)) return !1;
    dg(this.b);
    this.zd();
    this.g = 0;
    a = I(d, 12);
    b = 3 > a;
    for (var e = c = 0; e < I(d, 12); e++) c += (new Jo(El(d, 12, e))).b();
    c = 5 > c ? c : 3;
    for (e = this.w = 0; e < a; ++e) {
        var f = new Jo(El(d, 12, e)),
            g = J(new Jo(El(d, 12, e)), 2),
            h = F("DIV", {
                "class": "gt-cd-pos"
            });
        this.b.appendChild(h);
        G(h, J(f, 0));
        h = d;
        var l = b,
            m = c,
            q = Math.ceil(m / a),
            r = F("DIV", {
                "class": "gt-def-list"
            }),
            u = kc(this.za) ? "rtl" : "ltr";
        Zp(r, {
            direction: u
        });
        for (u = 0; u < f.b(); ++u) {
            var A =
                f.c(u),
                Q = J(A, 0),
                M = J(A, 2);
            var Oa = h;
            for (var Hb = [], Ia = 0; Ia < I(Oa, 11); ++Ia)
                for (var Ib = new dp(El(Oa, 11, Ia)), wg = 0; wg < Ib.b(); ++wg) {
                    var Ce = Ib.c(wg);
                    if (J(A, 1) == J(Ce, 1)) {
                        for (var Sm = [], Qj = 0; Qj < I(Ce, 0); ++Qj) tb(Sm, Fh(Ce, 0, Qj));
                        tb(Hb, Sm)
                    }
                }
            Oa = Hb;
            if (A = 1 > u || l && u < q && this.w < m) this.w += 1;
            Q = Fw(this, u + 1, Q, M, Oa, A);
            r.appendChild(Q);
            this.g += 1
        }
        this.b.appendChild(r)
    }
    for (e = 0; e < I(d, 15); e++) l = new Uo(El(d, 15, e)), m = J(l, 1), h = J(l, 2), f = F("DIV", {
        "class": "gt-def-row"
    }), m = F("DIV", {
        "class": "gt-kp-desc"
    }, m), q = F("A"), q.setAttribute("href",
        J(l, 3)), q.setAttribute("target", "_blank"), l = F("IMG", {
        "class": "gt-kp-image"
    }), l.setAttribute("src", h), q.appendChild(l), f.appendChild(q), f.appendChild(m), this.b.appendChild(f);
    g && (this.Se = g, Es(this, g));
    if (!b && this.g > 1 * a || b && this.g > c) d = MSG_N_MORE_DEFINITIONS_LABEL.replace("%1$s", (this.g - this.w).toLocaleString(this.Sa)), Fs(this, d, MSG_FEWER_DEFINITIONS_LABEL);
    else
        for (d = Mf("gt-card-expand-wrapper", this.j()), g = 0; g < d.length; g++) a = d[g], D("gt-def-synonym", a) && U(a, "gt-card-expand-wrapper");
    this.setVisible(!0);
    return !0
};
Ew.prototype.ea = function() {
    Ew.D.ea.call(this);
    Y(this).O(this.j(), "click", this.T)
};
Ew.prototype.Da = function(a) {
    Ew.D.Da.call(this, a)
};
var Fw = function(a, b, c, d, e, f) {
    var g = kc(a.Ia) ? "rtl" : "ltr";
    b = Tp(ho, {
        ck: b.toLocaleString(a.Sa),
        uj: a.K,
        dk: c,
        Ak: d,
        yn: MSG_SYNONYMS_LOWERCASE,
        xn: e,
        fh: g,
        Vj: a.C,
        za: a.za
    });
    a.C && y(Mf("gt-cd-cl", b), function(h) {
        this.c.push(h)
    }, a);
    Hs(a, D("gt-mt-md", b), c);
    (c = D("gt-ex-mt", b)) && Hs(a, c, d);
    (d = D("gt-def-synonym-title", b)) && kc(a.Sa) != kc(a.za) && (a = kc(a.Sa), Zp(d, "direction", a ? "rtl" : "ltr"), Zp(d, "padding-" + (a ? "left" : "right"), "8px"));
    return Gs(b, f)
};
Ew.prototype.T = function(a) {
    Mp(a.target, "gt-cd-cl") && this.dispatchEvent(new Kg("a", a.target))
};
Ew.prototype.jb = function() {
    return this.C ? this.qe() : this.g
};
var Hw = function(a) {
        Gw();
        return ld(a)
    },
    Iw = function(a) {
        Gw();
        return tc(a)
    },
    Gw = Fa;
var Jw = function(a, b, c) {
    var d = "ex";
    null != c && c && (d = "m" + d);
    this.K = b;
    Ds.call(this, a, d, MSG_EXAMPLES_OF, MSG_EXAMPLES, 9);
    this.g = new hp;
    this.C = this.w = "ltr"
};
w(Jw, Ds);
Jw.prototype.update = function(a, b, c, d) {
    Jw.D.update.call(this, a, b, c, d);
    dg(this.b);
    this.g = new hp(d.Ra[13]);
    if (0 == I(this.g, 0)) return !1;
    this.setVisible(!0);
    3 <= I(this.g, 0) && (a = MSG_N_MORE_EXAMPLES_LABEL.replace("%1$s", (I(this.g, 0) - 1).toLocaleString(this.Sa)), Fs(this, a, MSG_FEWER_EXAMPLES_LABEL));
    this.w = kc(this.za) ? "rtl" : "ltr";
    this.C = kc(this.Ia) ? "rtl" : "ltr";
    for (a = 0; a < I(this.g, 0); ++a) {
        b = 0 == a || 1 == a && 2 == I(this.g, 0);
        var e = new fp(El(this.g, 0, a));
        c = J(e, 1);
        d = J(e, 2);
        var f = MSG_MT_FROM_GOOGLE,
            g = this.w;
        e = J(e, 0);
        Gw();
        e = Nd(e, null);
        c = Tp(bo, {
            qn: g,
            Bd: e,
            Zl: d,
            $l: c,
            fh: this.C,
            Xn: f,
            nn: this.K
        });
        b = Gs(c, b);
        this.b.appendChild(b)
    }
    return !0
};
Jw.prototype.dj = function() {
    var a = {};
    a.total = I(this.g, 0);
    return a
};
Jw.prototype.jb = function() {
    return I(this.g, 0)
};
var Kw = function() {};
Ga(Kw);
var Lw = function(a) {
        a: {
            var b = a.changedTouches[0];
            switch (a.type) {
                case "touchstart":
                    var c = "mousedown";
                    break;
                case "touchmove":
                    c = "mousemove";
                    break;
                case "touchend":
                    c = "mouseup";
                    break;
                default:
                    b = null;
                    break a
            }
            var d = document.createEvent("MouseEvent");
            d.initMouseEvent(c, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
            b = d
        }
        null != b && (a.changedTouches[0].target.dispatchEvent(b), a.preventDefault())
    },
    Mw = We || Xe || Ye,
    Nw = function(a, b) {
        Mw && (b.addEventListener("touchstart", Lw, !0), b.addEventListener("touchmove",
            Lw, !0), b.addEventListener("touchend", Lw, !0), b.addEventListener("touchcancel", Lw, !0))
    };
var Ow = function(a) {
    this.c = a
};
Ga(Ow);
var Pw = function(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
};
Ow.prototype.m = function(a) {
    return a.a.b("DIV", Qw(this, a).join(" "))
};
Ow.prototype.h = function(a) {
    return a
};
Ow.prototype.b = function(a) {
    return "DIV" == a.tagName
};
var Tw = function(a, b, c) {
        c.id && Rq(b, c.id);
        var d = a.a(),
            e = !1,
            f = Lp(c);
        f && y(f, function(g) {
            g == d ? e = !0 : g && (g == d + "-disabled" ? b.qa(!1) : g == d + "-horizontal" ? Rw(b, "horizontal") : g == d + "-vertical" && Rw(b, "vertical"))
        }, a);
        e || T(c, d);
        Sw(a, b, a.h(c));
        return c
    },
    Sw = function(a, b, c) {
        if (c)
            for (var d = c.firstChild, e; d && d.parentNode == c;) {
                e = d.nextSibling;
                if (1 == d.nodeType) {
                    var f = a.g(d);
                    f && (f.v = d, b.isEnabled() || f.qa(!1), b.hb(f), f.ia(d))
                } else d.nodeValue && "" != yc(d.nodeValue) || c.removeChild(d);
                d = e
            }
    };
Ow.prototype.g = function(a) {
    a: {
        x(a);
        a = Lp(a);
        for (var b = 0, c = a.length; b < c; b++) {
            var d = a[b];
            if (d = d in xr ? xr[d]() : null) {
                a = d;
                break a
            }
        }
        a = null
    }
    return a
};
Ow.prototype.o = function(a) {
    a = a.j();
    x(a, "The container DOM element cannot be null.");
    zq(a, !0, ze);
    B && (a.hideFocus = !0);
    var b = this.c;
    b && Ep(a, b)
};
Ow.prototype.a = function() {
    return "goog-container"
};
var Qw = function(a, b) {
        a = a.a();
        var c = [a, "horizontal" == b.xd ? a + "-horizontal" : a + "-vertical"];
        b.isEnabled() || c.push(a + "-disabled");
        return c
    },
    Uw = function() {
        return "vertical"
    };
var Vw = function(a, b, c) {
    X.call(this, c);
    this.Tc = b || Ow.M();
    this.xd = a || Uw()
};
w(Vw, X);
k = Vw.prototype;
k.Qd = null;
k.ye = null;
k.Tc = null;
k.xd = null;
k.Cc = !0;
k.Sc = !0;
k.nd = !0;
k.Ka = -1;
k.eb = null;
k.Fc = !1;
k.yc = null;
var Ww = function(a) {
        return a.Qd || a.j()
    },
    Zw = function(a, b) {
        if (a.nd) {
            var c = Ww(a),
                d = a.Ba;
            a.Qd = b;
            var e = Ww(a);
            d && (a.Qd = c, Xw(a, !1), a.Qd = b, ar(Yw(a), e), Xw(a, !0))
        } else throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    },
    Yw = function(a) {
        return a.ye || (a.ye = new br(Ww(a)))
    };
k = Vw.prototype;
k.Ma = function() {
    this.v = this.Tc.m(this)
};
k.$b = function() {
    return this.Tc.h(this.j())
};
k.Rc = function(a) {
    return this.Tc.b(a)
};
k.Da = function(a) {
    this.v = Tw(this.Tc, this, a);
    "none" == a.style.display && (this.Cc = !1)
};
k.ea = function() {
    Vw.D.ea.call(this);
    Wq(this, function(b) {
        b.Ba && $w(this, b)
    }, this);
    var a = this.j();
    this.Tc.o(this);
    this.setVisible(this.Cc, !0);
    Y(this).O(this, "enter", this.Bg).O(this, "highlight", this.we).O(this, "unhighlight", this.vg).O(this, "open", this.il).O(this, "close", this.Kk).O(a, Rg.ge, this.vb).O(Hf(a), [Rg.he, Rg.fe], this.Wk).O(a, [Rg.ge, Rg.he, Rg.fe, "mouseover", "mouseout", "contextmenu"], this.Pk);
    this.nd && Xw(this, !0)
};
var Xw = function(a, b) {
    var c = Y(a),
        d = Ww(a);
    b ? c.O(d, "focus", a.Th).O(d, "blur", a.nf).O(Yw(a), "key", a.bb) : c.Ja(d, "focus", a.Th).Ja(d, "blur", a.nf).Ja(Yw(a), "key", a.bb)
};
k = Vw.prototype;
k.nb = function() {
    this.uc(-1);
    this.eb && this.eb.Wa(!1);
    this.Fc = !1;
    Vw.D.nb.call(this)
};
k.W = function() {
    Vw.D.W.call(this);
    this.ye && (this.ye.La(), this.ye = null);
    this.Tc = this.eb = this.yc = this.Qd = null
};
k.Bg = function() {
    return !0
};
k.we = function(a) {
    var b = $q(this, a.target);
    if (-1 < b && b != this.Ka) {
        var c = ax(this);
        c && Ir(c, !1);
        this.Ka = b;
        c = ax(this);
        this.Fc && Hr(c, !0);
        this.eb && c != this.eb && (qr(c, 64) ? c.Wa(!0) : this.eb.Wa(!1))
    }
    b = this.j();
    x(b, "The DOM element for the container cannot be null.");
    null != a.target.j() && Gp(b, "activedescendant", a.target.j().id)
};
k.vg = function(a) {
    a.target == ax(this) && (this.Ka = -1);
    a = this.j();
    x(a, "The DOM element for the container cannot be null.");
    a.removeAttribute(Fp("activedescendant"))
};
k.il = function(a) {
    (a = a.target) && a != this.eb && a.getParent() == this && (this.eb && this.eb.Wa(!1), this.eb = a)
};
k.Kk = function(a) {
    a.target == this.eb && (this.eb = null);
    var b = this.j(),
        c = a.target.j();
    b && a.target.Ea(2) && c && Jp(b, c)
};
k.vb = function(a) {
    this.Sc && (this.Fc = !0);
    var b = Ww(this);
    b && xg(b) && yg(b) ? b.focus() : a.preventDefault()
};
k.Wk = function() {
    this.Fc = !1
};
k.Pk = function(a) {
    a: {
        var b = a.target;
        if (this.yc)
            for (var c = this.j(); b && b !== c;) {
                var d = b.id;
                if (d in this.yc) {
                    b = this.yc[d];
                    break a
                }
                b = b.parentNode
            }
        b = null
    }
    if (b) switch (a.type) {
        case Rg.ge:
            b.vb(a);
            break;
        case Rg.he:
        case Rg.fe:
            b.Db(a);
            break;
        case "mouseover":
            b.yg(a);
            break;
        case "mouseout":
            b.Eg(a);
            break;
        case "contextmenu":
            b.Be(a)
    }
};
k.Th = function() {};
k.nf = function() {
    this.uc(-1);
    this.Fc = !1;
    this.eb && this.eb.Wa(!1)
};
k.bb = function(a) {
    return this.isEnabled() && this.isVisible() && (0 != Xq(this) || this.Qd) && this.xe(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
k.xe = function(a) {
    var b = ax(this);
    if (b && "function" == typeof b.bb && b.bb(a) || this.eb && this.eb != b && "function" == typeof this.eb.bb && this.eb.bb(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
        case 27:
            if (this.nd) Ww(this).blur();
            else return !1;
            break;
        case 36:
            bx(this);
            break;
        case 35:
            cx(this);
            break;
        case 38:
            if ("vertical" == this.xd) dx(this);
            else return !1;
            break;
        case 37:
            if ("horizontal" == this.xd) Zq(this) ? ex(this) : dx(this);
            else return !1;
            break;
        case 40:
            if ("vertical" == this.xd) ex(this);
            else return !1;
            break;
        case 39:
            if ("horizontal" == this.xd) Zq(this) ? dx(this) : ex(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};
var $w = function(a, b) {
    var c = b.j();
    c = c.id || (c.id = Qq(b));
    a.yc || (a.yc = {});
    a.yc[c] = b
};
Vw.prototype.hb = function(a, b) {
    hb(a, Z, "The child of a container must be a control");
    Vw.D.hb.call(this, a, b)
};
Vw.prototype.kd = function(a, b, c) {
    hb(a, Z);
    a.Ie |= 2;
    a.Ie |= 64;
    a.Oa(32, !1);
    Br(a, !1);
    var d = a.getParent() == this ? $q(this, a) : -1;
    Vw.D.kd.call(this, a, b, c);
    a.Ba && this.Ba && $w(this, a);
    a = d; - 1 == a && (a = Xq(this));
    a == this.Ka ? this.Ka = Math.min(Xq(this) - 1, b) : a > this.Ka && b <= this.Ka ? this.Ka++ : a < this.Ka && b > this.Ka && this.Ka--
};
Vw.prototype.removeChild = function(a, b) {
    a = t(a) ? Tq(this, a) : a;
    hb(a, Z);
    if (a) {
        var c = $q(this, a); - 1 != c && (c == this.Ka ? (Ir(a, !1), this.Ka = -1) : c < this.Ka && this.Ka--);
        var d = a.j();
        d && d.id && this.yc && (c = this.yc, d = d.id, d in c && delete c[d])
    }
    a = Vw.D.removeChild.call(this, a, b);
    Br(a, !0);
    return a
};
var Rw = function(a, b) {
    if (a.j()) throw Error("Component already rendered");
    a.xd = b
};
Vw.prototype.isVisible = function() {
    return this.Cc
};
Vw.prototype.setVisible = function(a, b) {
    if (b || this.Cc != a && this.dispatchEvent(a ? "show" : "hide")) {
        this.Cc = a;
        var c = this.j();
        c && (W(c, a), this.nd && Pw(Ww(this), this.Sc && this.Cc), b || this.dispatchEvent(this.Cc ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
Vw.prototype.isEnabled = function() {
    return this.Sc
};
Vw.prototype.qa = function(a) {
    this.Sc != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Sc = !0, Wq(this, function(b) {
        b.lj ? delete b.lj : b.qa(!0)
    })) : (Wq(this, function(b) {
        b.isEnabled() ? b.qa(!1) : b.lj = !0
    }), this.Fc = this.Sc = !1), this.nd && Pw(Ww(this), a && this.Cc))
};
var fx = function(a, b) {
    b != a.nd && a.Ba && Xw(a, b);
    a.nd = b;
    a.Sc && a.Cc && Pw(Ww(a), b)
};
Vw.prototype.uc = function(a) {
    (a = Yq(this, a)) ? Ir(a, !0): -1 < this.Ka && Ir(ax(this), !1)
};
var ax = function(a) {
        return Yq(a, a.Ka)
    },
    bx = function(a) {
        gx(a, function(b, c) {
            return (b + 1) % c
        }, Xq(a) - 1)
    },
    cx = function(a) {
        gx(a, function(b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, 0)
    },
    ex = function(a) {
        gx(a, function(b, c) {
            return (b + 1) % c
        }, a.Ka)
    },
    dx = function(a) {
        gx(a, function(b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, a.Ka)
    },
    gx = function(a, b, c) {
        c = 0 > c ? $q(a, a.eb) : c;
        var d = Xq(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d;) {
            var f = Yq(a, c);
            if (f && a.Eh(f)) {
                a.uc(c);
                break
            }
            e++;
            c = b.call(a, c, d)
        }
    };
Vw.prototype.Eh = function(a) {
    return a.isVisible() && a.isEnabled() && qr(a, 2)
};
var hx = function() {};
w(hx, ir);
Ga(hx);
hx.prototype.xa = function() {
    return "goog-menuheader"
};
var ix = function(a, b, c) {
    Z.call(this, a, c || hx.M(), b);
    this.Oa(1, !1);
    this.Oa(2, !1);
    this.Oa(4, !1);
    this.Oa(32, !1);
    this.Xc = 1
};
w(ix, Z);
yr("goog-menuheader", function() {
    return new ix(null)
});
var jx = function() {
    this.c = []
};
w(jx, ir);
Ga(jx);
var kx = function(a, b) {
    var c = a.c[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.xa() + "-highlight";
                break;
            case 1:
                c = a.xa() + "-checkbox";
                break;
            case 2:
                c = a.xa() + "-content"
        }
        a.c[b] = c
    }
    return c
};
k = jx.prototype;
k.Vc = function() {
    return "menuitem"
};
k.ub = function(a) {
    var b = a.a.b("DIV", lr(this, a).join(" "), lx(this, a.Ta(), a.a));
    mx(this, a, b, qr(a, 8) || qr(a, 16));
    return b
};
k.Ub = function(a) {
    return a && a.firstChild
};
k.Xa = function(a, b) {
    x(b);
    var c = kg(b),
        d = kx(this, 2);
    c && Mp(c, d) || b.appendChild(lx(this, b.childNodes, a.a));
    Mp(b, "goog-option") && (a.Oa(16, !0), a && b && mx(this, a, b, !0));
    return jx.D.Xa.call(this, a, b)
};
k.ac = function(a, b) {
    var c = this.Ub(a),
        d = nx(this, a) ? c.firstChild : null;
    jx.D.ac.call(this, a, b);
    d && !nx(this, a) && c.insertBefore(d, c.firstChild || null)
};
var lx = function(a, b, c) {
        a = kx(a, 2);
        return c.b("DIV", a, b)
    },
    nx = function(a, b) {
        return (b = a.Ub(b)) ? (b = b.firstChild, a = kx(a, 1), !!b && lg(b) && Mp(b, a)) : !1
    },
    mx = function(a, b, c, d) {
        pr(a, c, b.C());
        rr(a, b, c);
        d != nx(a, c) && (V(c, "goog-option", d), c = a.Ub(c), d ? (a = kx(a, 1), c.insertBefore(b.a.b("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
    };
jx.prototype.a = function(a) {
    switch (a) {
        case 2:
            return kx(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return jx.D.a.call(this, a)
    }
};
jx.prototype.g = function(a) {
    var b = kx(this, 0);
    switch (a) {
        case "goog-option-selected":
            return 16;
        case b:
            return 2;
        default:
            return jx.D.g.call(this, a)
    }
};
jx.prototype.xa = function() {
    return "goog-menuitem"
};
var ox = function(a, b, c, d) {
    Z.call(this, a, d || jx.M(), c);
    this.na = b
};
w(ox, Z);
k = ox.prototype;
k.Z = function() {
    var a = this.na;
    return null != a ? a : this.rb()
};
k.Oa = function(a, b) {
    ox.D.Oa.call(this, a, b);
    switch (a) {
        case 8:
            this.Ea(16) && !b && this.$c(!1);
            (a = this.j()) && this && a && mx(this.c, this, a, b);
            break;
        case 16:
            (a = this.j()) && this && a && mx(this.c, this, a, b)
    }
};
k.rb = function() {
    var a = this.Ta();
    return Ja(a) ? (a = lb(a, function(b) {
        return lg(b) && (Mp(b, "goog-menuitem-accel") || Mp(b, "goog-menuitem-mnemonic-separator")) ? "" : Bg(b)
    }).join(""), be(a)) : ox.D.rb.call(this)
};
k.Db = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.aa;
        b.aa = null;
        if (b = c && ya(a.clientX)) b = new Df(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.a == b.a : !1;
        if (b) return
    }
    ox.D.Db.call(this, a)
};
k.Ld = function(a) {
    return a.keyCode == this.xi && this.Yc(a) ? !0 : ox.D.Ld.call(this, a)
};
k.Ik = function() {
    return this.xi
};
yr("goog-menuitem", function() {
    return new ox(null)
});
ox.prototype.C = function() {
    return qr(this, 16) ? "menuitemcheckbox" : qr(this, 8) ? "menuitemradio" : ox.D.C.call(this)
};
ox.prototype.getParent = function() {
    return Z.prototype.getParent.call(this)
};
ox.prototype.df = function() {
    return Z.prototype.df.call(this)
};
var px = function() {};
w(px, ir);
Ga(px);
px.prototype.ub = function(a) {
    return a.a.b("DIV", this.xa())
};
px.prototype.Xa = function(a, b) {
    b.id && Rq(a, b.id);
    if ("HR" == b.tagName) {
        var c = b;
        b = this.ub(a);
        eg(b, c);
        hg(c)
    } else T(b, this.xa());
    return b
};
px.prototype.ac = function() {};
px.prototype.xa = function() {
    return "goog-menuseparator"
};
var qx = function(a, b) {
    Z.call(this, null, a || px.M(), b);
    this.Oa(1, !1);
    this.Oa(2, !1);
    this.Oa(4, !1);
    this.Oa(32, !1);
    this.Xc = 1
};
w(qx, Z);
qx.prototype.ea = function() {
    qx.D.ea.call(this);
    var a = this.j();
    x(a, "The DOM element for the separator cannot be null.");
    Ep(a, "separator")
};
yr("goog-menuseparator", function() {
    return new qx
});
var rx = function(a) {
    this.c = a || "menu"
};
w(rx, Ow);
Ga(rx);
rx.prototype.b = function(a) {
    return "UL" == a.tagName || rx.D.b.call(this, a)
};
rx.prototype.g = function(a) {
    return "HR" == a.tagName ? new qx : rx.D.g.call(this, a)
};
rx.prototype.a = function() {
    return "goog-menu"
};
rx.prototype.o = function(a) {
    rx.D.o.call(this, a);
    a = a.j();
    x(a, "The menu DOM element cannot be null.");
    Gp(a, "haspopup", "true")
};
var sx = function(a) {
    qx.call(this, px.M(), a)
};
w(sx, qx);
yr("goog-menuseparator", function() {
    return new qx
});
var ux = function(a, b) {
    Vw.call(this, "vertical", b || rx.M(), a);
    fx(this, !1)
};
w(ux, Vw);
ux.prototype.N = !0;
var vx = function(a, b) {
    if (ng(a.j(), b)) return !0;
    for (var c = 0, d = Xq(a); c < d; c++) {
        var e = Yq(a, c);
        if ("function" == typeof e.Ag && e.Ag(b)) return !0
    }
    return !1
};
k = ux.prototype;
k.jb = function() {
    return Xq(this)
};
k.setVisible = function(a, b, c) {
    (b = ux.D.setVisible.call(this, a, b)) && a && this.Ba && this.N && Ww(this).focus();
    a && c && ya(c.clientX) ? this.aa = new Df(c.clientX, c.clientY) : this.aa = null;
    return b
};
k.Bg = function(a) {
    this.N && Ww(this).focus();
    return ux.D.Bg.call(this, a)
};
k.gi = function(a) {
    var b = new RegExp("^" + je(a), "i");
    gx(this, function(c, d) {
        var e = 0 > c ? 0 : c,
            f = !1;
        do {
            ++c;
            c == d && (c = 0, f = !0);
            var g = Yq(this, c).rb();
            if (g && g.match(b)) return c
        } while (!f || c != e);
        return this.Ka
    }, this.Ka)
};
k.Eh = function(a) {
    return a.isEnabled() && a.isVisible() && qr(a, 2)
};
k.Da = function(a) {
    for (var b = this.Tc, c = Lf(this.a.a, "DIV", b.a() + "-content", a), d = c.length, e = 0; e < d; e++) Sw(b, this, c[e]);
    ux.D.Da.call(this, a)
};
k.xe = function(a) {
    var b = ux.D.xe.call(this, a);
    b || Wq(this, function(c) {
        !b && c.Ik && c.xi == a.keyCode && (this.isEnabled() && this.uc($q(this, c)), b = c.bb(a))
    }, this);
    return b
};
k.uc = function(a) {
    ux.D.uc.call(this, a);
    (a = Yq(this, a)) && mq(a.j(), this.j())
};
var wx = function(a, b, c) {
    ox.call(this, a, b, c);
    this.Oa(8, !0)
};
w(wx, ox);
wx.prototype.Yc = function() {
    return this.dispatchEvent("action")
};
yr("goog-option", function() {
    return new wx(null)
});
var xx = function(a, b, c) {
    this.a = a;
    this.g = b;
    this.w = c
};
w(xx, $r);
xx.prototype.c = function(a, b, c) {
    Zr(this.a, this.g, a, b, void 0, c, this.w)
};
var yx = function(a, b, c, d) {
    xx.call(this, a, b);
    this.h = c ? 5 : 0;
    this.o = d || void 0
};
w(yx, xx);
yx.prototype.m = function() {
    return this.h
};
yx.prototype.b = function(a) {
    this.h = a
};
yx.prototype.c = function(a, b, c, d) {
    var e = Zr(this.a, this.g, a, b, null, c, 10, d, this.o);
    if (e & 496) {
        var f = zx(e, this.g);
        b = zx(e, b);
        e = Zr(this.a, f, a, b, null, c, 10, d, this.o);
        e & 496 && (f = zx(e, f), b = zx(e, b), Zr(this.a, f, a, b, null, c, this.h, d, this.o))
    }
};
var zx = function(a, b) {
    a & 48 && (b ^= 4);
    a & 192 && (b ^= 1);
    return b
};
var Ax = function(a, b, c, d) {
    yx.call(this, a, b, c || d);
    (c || d) && this.b(65 | (d ? 32 : 132))
};
w(Ax, yx);
var Bx = function() {};
w(Bx, Ct);
Ga(Bx);
Bx.prototype.Ub = function(a) {
    return Bx.D.Ub.call(this, a && a.firstChild)
};
Bx.prototype.Xa = function(a, b) {
    var c = Lf(document, "*", "goog-menu", b)[0];
    if (c) {
        W(c, !1);
        bg(Hf(c).body, c);
        var d = new ux;
        d.ia(c);
        a.He(d)
    }
    return Bx.D.Xa.call(this, a, b)
};
Bx.prototype.We = function(a, b) {
    return Bx.D.We.call(this, [b.b("DIV", "goog-inline-block " + (this.xa() + "-caption"), a), b.b("DIV", "goog-inline-block " + (this.xa() + "-dropdown"), "\u00a0")], b)
};
Bx.prototype.xa = function() {
    return "goog-menu-button"
};
var Cx = function(a, b, c, d, e) {
    Pr.call(this, a, c || Bx.M(), d);
    this.Oa(64, !0);
    this.m = new Ax(null, 9);
    b && this.He(b);
    this.ba = null;
    this.N = new zi(500);
    !We && !Xe || Re("533.17.9") || (this.Ef = !0);
    this.hd = e || rx.M()
};
w(Cx, Pr);
k = Cx.prototype;
k.Ef = !1;
k.ea = function() {
    Cx.D.ea.call(this);
    Dx(this, !0);
    this.b && Ex(this, this.b, !0);
    Gp(Sq(this), "haspopup", !!this.b)
};
k.nb = function() {
    Cx.D.nb.call(this);
    Dx(this, !1);
    if (this.b) {
        this.Wa(!1);
        this.b.nb();
        Ex(this, this.b, !1);
        var a = this.b.j();
        a && hg(a)
    }
};
k.W = function() {
    Cx.D.W.call(this);
    this.b && (this.b.La(), delete this.b);
    delete this.wb;
    this.N.La()
};
k.vb = function(a) {
    Cx.D.vb.call(this, a);
    this.kb() && (this.Wa(!this.Ea(64), a), this.b && (this.b.Fc = this.Ea(64)))
};
k.Db = function(a) {
    Cx.D.Db.call(this, a);
    this.b && !this.kb() && (this.b.Fc = !1)
};
k.Yc = function() {
    Hr(this, !1);
    return !0
};
k.Vk = function(a) {
    this.b && this.b.isVisible() && !this.Ag(a.target) && this.Wa(!1)
};
k.Ag = function(a) {
    return a && ng(this.j(), a) || this.b && vx(this.b, a) || !1
};
k.Ld = function(a) {
    if (32 == a.keyCode) {
        if (a.preventDefault(), "keyup" != a.type) return !0
    } else if ("key" != a.type) return !1;
    if (this.b && this.b.isVisible()) {
        var b = 13 == a.keyCode || 32 == a.keyCode,
            c = this.b.bb(a);
        return 27 == a.keyCode || b ? (this.Wa(!1), !0) : c
    }
    return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Wa(!0, a), !0) : !1
};
k.Cg = function() {
    this.Wa(!1)
};
k.cl = function() {
    this.kb() || this.Wa(!1)
};
k.qf = function(a) {
    this.Ef || this.Wa(!1);
    Cx.D.qf.call(this, a)
};
var Fx = function(a) {
    a.b || a.He(new ux(a.a, a.hd));
    return a.b || null
};
Cx.prototype.He = function(a) {
    var b = this.b;
    if (a != b && (b && (this.Wa(!1), this.Ba && Ex(this, b, !1), delete this.b), this.Ba && Gp(Sq(this), "haspopup", !!a), a)) {
        this.b = a;
        Uq(a, this);
        a.setVisible(!1);
        var c = this.Ef;
        (a.N = c) && fx(a, !0);
        this.Ba && Ex(this, a, !0)
    }
    return b
};
var Gx = function(a, b) {
        b && (a.m = b, a.wb = b.a)
    },
    Hx = function(a, b) {
        a.ba = b
    };
k = Cx.prototype;
k.ze = function(a) {
    Fx(this).hb(a, !0)
};
k.jb = function() {
    return this.b ? Xq(this.b) : 0
};
k.setVisible = function(a, b) {
    (a = Cx.D.setVisible.call(this, a, b)) && !this.isVisible() && this.Wa(!1);
    return a
};
k.qa = function(a) {
    Cx.D.qa.call(this, a);
    this.isEnabled() || this.Wa(!1)
};
k.Wa = function(a, b) {
    Cx.D.Wa.call(this, a);
    if (this.b && this.Ea(64) == a) {
        if (a) this.b.Ba || this.b.Ua(), this.xb = jq(this.j()), this.cb = sq(this.j()), Ix(this), !b || 40 != b.keyCode && 38 != b.keyCode ? this.b.uc(-1) : bx(this.b);
        else {
            Hr(this, !1);
            this.b.Fc = !1;
            var c = this.j();
            c && (Gp(c, "activedescendant", ""), Gp(c, "owns", ""));
            null != this.T && (this.T = void 0, (c = this.b.j()) && qq(c, "", ""))
        }
        this.b.setVisible(a, !1, b);
        this.lc || (b = Y(this), c = a ? b.O : b.Ja, c.call(b, this.a.a, "mousedown", this.Vk, !0), this.Ef && c.call(b, this.b, "blur", this.cl), c.call(b,
            this.N, "tick", this.ed), a ? this.N.start() : this.N.stop())
    }
    this.b && this.b.j() && Sq(this.b).removeAttribute(Fp("hidden"))
};
var Ix = function(a) {
    if (a.b.Ba) {
        var b = a.m;
        a.m.a = a.wb || a.j();
        var c = a.b.j();
        a.b.isVisible() || (c.style.visibility = "hidden", W(c, !0));
        !a.T && a.m.m && a.m.h & 32 && (a.T = rq(c));
        b.c(c, b.g ^ 1, a.ba, a.T);
        a.b.isVisible() || (W(c, !1), c.style.visibility = "visible")
    }
};
Cx.prototype.ed = function() {
    var a = sq(this.j()),
        b = jq(this.j());
    var c = this.cb;
    (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.xb, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
    c && (this.cb = a, this.xb = b, Ix(this))
};
var Ex = function(a, b, c) {
        var d = Y(a);
        c = c ? d.O : d.Ja;
        c.call(d, b, "action", a.Cg);
        c.call(d, b, "close", a.Wb);
        c.call(d, b, "highlight", a.Zc);
        c.call(d, b, "unhighlight", a.dd)
    },
    Dx = function(a, b) {
        var c = Y(a);
        (b ? c.O : c.Ja).call(c, a.j(), "keydown", a.fd)
    };
Cx.prototype.Zc = function(a) {
    (a = a.target.j()) && Jx(this, a)
};
Cx.prototype.fd = function(a) {
    qr(this, 32) && this.j() && this.b && this.b.isVisible() && a.stopPropagation()
};
Cx.prototype.dd = function() {
    if (!ax(this.b)) {
        var a = this.j();
        x(a, "The menu button DOM element cannot be null.");
        Gp(a, "activedescendant", "");
        Gp(a, "owns", "")
    }
};
Cx.prototype.Wb = function(a) {
    if (this.Ea(64) && a.target instanceof ox) {
        a = a.target;
        var b = a.j();
        a.isVisible() && a.Ea(2) && null != b && Jx(this, b)
    }
};
var Jx = function(a, b) {
    a = a.j();
    x(a, "The menu button DOM element cannot be null.");
    b = Ip(b) || b;
    if (!b.id) {
        var c = Nq.M();
        b.id = ":" + (c.a++).toString(36)
    }
    Jp(a, b);
    Gp(a, "owns", b.id)
};
yr("goog-menu-button", function() {
    return new Cx(null)
});
var Lx = function(a) {
    K.call(this);
    this.a = [];
    Kx(this, a)
};
w(Lx, K);
Lx.prototype.b = null;
Lx.prototype.jb = function() {
    return this.a.length
};
var Kx = function(a, b) {
        b && (y(b, function(c) {
            Mx(c, !1)
        }, a), zb(a.a, b))
    },
    Nx = function(a, b, c) {
        b && (Mx(b, !1), Bb(a.a, c, 0, b))
    },
    Ox = function(a) {
        var b = a.b;
        return b ? jb(a.a, b) : -1
    },
    Px = function(a) {
        var b = a.a;
        if (!Ja(b))
            for (var c = b.length - 1; 0 <= c; c--) delete b[c];
        b.length = 0;
        a.b = null
    };
Lx.prototype.W = function() {
    Lx.D.W.call(this);
    delete this.a;
    this.b = null
};
var Mx = function(a, b) {
    a && "function" == typeof a.ad && a.ad(b)
};
var Qx = function(a, b, c, d, e) {
    Cx.call(this, a, b, c, d, e || new rx("listbox"));
    this.Y = this.Ta();
    this.sa = null;
    this.zg = "listbox"
};
w(Qx, Cx);
k = Qx.prototype;
k.Ga = null;
k.ea = function() {
    Qx.D.ea.call(this);
    Rx(this);
    Sx(this)
};
k.Da = function(a) {
    Qx.D.Da.call(this, a);
    (a = this.rb()) ? (this.Y = a, Rx(this)) : Tx(this) || Ux(this, 0)
};
k.W = function() {
    Qx.D.W.call(this);
    this.Ga && (this.Ga.La(), this.Ga = null);
    this.Y = null
};
k.Cg = function(a) {
    Vx(this, a.target);
    Qx.D.Cg.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action")
};
k.ll = function() {
    var a = Tx(this);
    Qx.D.mf.call(this, a && a.Z());
    Rx(this)
};
k.He = function(a) {
    var b = Qx.D.He.call(this, a);
    a != b && (this.Ga && Px(this.Ga), a && (this.Ga ? Wq(a, function(c) {
        Wx(c);
        var d = this.Ga;
        Nx(d, c, d.jb())
    }, this) : Xx(this, a)));
    return b
};
k.ze = function(a) {
    Wx(a);
    Qx.D.ze.call(this, a);
    if (this.Ga) {
        var b = this.Ga;
        Nx(b, a, b.jb())
    } else Xx(this, Fx(this));
    Yx(this)
};
var Vx = function(a, b) {
        if (a.Ga) {
            var c = Tx(a),
                d = a.Ga;
            b != d.b && (Mx(d.b, !1), d.b = b, Mx(b, !0));
            d.dispatchEvent("select");
            b != c && a.dispatchEvent("change")
        }
    },
    Ux = function(a, b) {
        a.Ga && Vx(a, a.Ga.a[b] || null)
    };
Qx.prototype.mf = function(a) {
    if (null != a && this.Ga)
        for (var b = 0, c; c = this.Ga.a[b] || null; b++)
            if (c && "function" == typeof c.Z && c.Z() == a) {
                Vx(this, c);
                return
            }
    Vx(this, null)
};
Qx.prototype.Z = function() {
    var a = Tx(this);
    return a ? a.Z() : null
};
var Tx = function(a) {
        return a.Ga ? a.Ga.b : null
    },
    Xx = function(a, b) {
        a.Ga = new Lx;
        b && Wq(b, function(c) {
            Wx(c);
            var d = this.Ga;
            Nx(d, c, d.jb())
        }, a);
        Sx(a)
    },
    Sx = function(a) {
        a.Ga && Y(a).O(a.Ga, "select", a.ll)
    },
    Rx = function(a) {
        var b = Tx(a);
        a.g(b ? b.rb() : a.Y);
        var c = a.c.Ub(a.j());
        c && a.a.Tl(c) && (null == a.sa && (a.sa = Hp(c, "label")), b = b ? b.j() : null, Kp(c, b ? Hp(b, "label") : a.sa), Yx(a))
    },
    Yx = function(a) {
        var b = a.c;
        if (b && (b = b.Ub(a.j()))) {
            var c = Sq(a);
            b.id || (b.id = ":" + (Nq.M().a++).toString(36));
            Ep(b, "option");
            Gp(c, "activedescendant", b.id);
            a.Ga &&
                (c = yb(a.Ga.a), Gp(b, "setsize", Zx(c)), a = Ox(a.Ga), Gp(b, "posinset", 0 <= a ? Zx(Ab(c, 0, a + 1)) : 0))
        }
    },
    Zx = function(a) {
        return pb(a, function(b) {
            return b instanceof ox
        })
    },
    Wx = function(a) {
        a.zg = a instanceof ox ? "option" : "separator"
    };
Qx.prototype.Wa = function(a, b) {
    Qx.D.Wa.call(this, a, b);
    this.Ea(64) ? Fx(this).uc(this.Ga ? Ox(this.Ga) : -1) : Yx(this)
};
yr("goog-select", function() {
    return new Qx(null)
});
var by = function(a, b, c, d, e, f, g, h, l) {
    c = new $x(c);
    Qx.call(this, "", c, g, h);
    this.m.b && this.m.b(33);
    this.Ca = a;
    this.Vb = a.id;
    Rq(c, this.Vb + "-menu");
    this.X = [];
    this.V = null;
    this.ya = null != f ? f : "";
    this.Fd = !!l;
    for (a = 0; a < b.length; a++) {
        var m;
        f = null != d && a < d.length && null != d[a] ? d[a] : b[a];
        "separator" != f ? m = new wx(b[a], f) : m = new sx;
        this.ze(m)
    }
    this.ia(this.Ca);
    a: {
        b = null != e ? e : ay(this, 0);
        for (e = 0; d = this.b ? Yq(this.b, e) : null; e++)
            if (d instanceof ox && d.Z() == b) {
                b = e;
                break a
            }
        b = -1
    }
    0 <= b && Ux(this, b)
};
w(by, Qx);
by.prototype.g = function(a) {
    this.Fd ? a = this.ya : this.ya && (a = this.ya + " " + a);
    by.D.g.call(this, a)
};
var cy = function(a) {
    a.V && (Ci(a.V), a.V = null);
    a.V = Bi(function() {
        a.X = []
    }, 1E3)
};
by.prototype.W = function() {
    hg(this.Ca);
    this.Ca = null;
    by.D.W.call(this)
};
by.prototype.bb = function(a) {
    if (!this.Ea(64) && 48 <= a.keyCode && 90 >= a.keyCode) {
        cy(this);
        this.X.push(String.fromCharCode(a.keyCode));
        a = this.X.join("");
        var b = new RegExp("^" + je(a), "i"),
            c = this.Ga ? Ox(this.Ga) : -1,
            d = c; - 1 < d && 1 < a.length && d--;
        var e = this.jb(),
            f = 0 > d ? 0 : d,
            g = !1,
            h = !1;
        do {
            ++d;
            d == e && (d = 0, g = !0);
            var l = this.b ? Yq(this.b, d) : null;
            if (l instanceof ox && (l = l.rb()) && l.match(b)) {
                h = !0;
                break
            }
            g && d == f && 3 == a.length && (l = a.split(""), l[1] == l[2] && (b = new RegExp("^" + l[1], "i"), this.X = [l[1]], g = !1))
        } while (!g || d != f);
        h && d != c && Ux(this,
            d);
        return !0
    }
    return by.D.bb.call(this, a)
};
var ay = function(a, b) {
    var c = "";
    a = a.b ? Yq(a.b, b) : null;
    a instanceof ox && (c = a.Z());
    return c
};
by.prototype.Z = function() {
    var a = this.Ga ? Ox(this.Ga) : -1;
    return -1 != a ? ay(this, a) : ""
};
var $x = function(a, b, c) {
    this.b = a;
    this.m = [];
    this.K = [];
    ux.call(this, b, c)
};
w($x, ux);
k = $x.prototype;
k.Wh = F("DIV", {
    id: "goog-menuitem-group-",
    "class": "goog-menuitem-group"
});
k.Fg = !1;
k.Cd = 0;
k.Ma = function() {
    $x.D.Ma.call(this);
    this.j().id = Qq(this)
};
k.kd = function(a, b, c) {
    this.Fg && (this.c = b == Xq(this) ? this.g[b - 1] : this.g[b]);
    $x.D.kd.call(this, a, b, c);
    this.c && (this.c = null, dy(this))
};
k.removeChild = function(a, b) {
    t(a) && (a = Tq(this, a));
    var c = $q(this, a);
    this.Fg && (this.c = 0 == c ? this.g[c + 1] : this.g[c]);
    a = $x.D.removeChild.call(this, a, b);
    this.c && (this.c = null, dy(this));
    return a
};
k.$b = function() {
    var a;
    this.c ? a = this.c : a = $x.D.$b.call(this);
    return a
};
k.Ua = function(a) {
    $x.D.Ua.call(this, a);
    dy(this);
    Nw(Kw.M(), this.j())
};
k.ia = function(a) {
    $x.D.ia.call(this, a);
    dy(this);
    Nw(Kw.M(), this.j())
};
var dy = function(a) {
        a.Fg = !0;
        ey(a);
        var b = a.j();
        b.innerHTML = "";
        var c = [],
            d = 0;
        var e = document.createElement("table");
        var f = e.insertRow(-1);
        for (var g = 0, h; h = a.h[g]; g++) {
            var l = f.insertCell(f.cells.length);
            l.appendChild(h);
            Mp(h, "goog-groupmenu-separator") ? (c.push(l), f = e.insertRow(e.rows.length)) : d++
        }
        for (g = 0; l = c[g]; g++) l.setAttribute("colspan", d);
        b.appendChild(e)
    },
    fy = function(a, b, c) {
        sb(a.h, b.Ob) || a.h.push(b.Ob);
        Yq(a, c + 1) && (b.Ob = a.Wh.cloneNode(!0), b.Ob.id += b.Ai, b.Ai++, b.xf = 1);
        return b
    },
    ey = function(a) {
        a.h = [];
        a.g = {};
        var b = a.Wh.cloneNode(!0);
        b.id += 1;
        var c = {
            Ob: b,
            Ai: 2,
            xf: 1
        };
        Wq(a, function(d, e) {
            c.Ob.appendChild(d.j());
            this.g[e] = c.Ob;
            c.xf == this.b ? c = fy(this, c, e) : d instanceof ox && c.xf++;
            sb(this.K, e) && (U(c.Ob, "goog-menuitem-group"), T(c.Ob, "goog-groupmenu-separator"), this.g[e] = c.Ob, c = fy(this, c, e))
        }, a);
        1 == c.xf || sb(a.h, c.Ob) || a.h.push(c.Ob)
    };
$x.prototype.setVisible = function(a, b, c) {
    (a = $x.D.setVisible.call(this, a, b, c)) && this.Cd && (Ci(this.Cd), this.Cd = 0);
    return a
};
$x.prototype.xe = function(a) {
    var b = $x.D.xe.call(this, a);
    if (b) return b;
    switch (a.keyCode) {
        case 37:
            return gx(this, v(this.w, this), this.Ka), !0;
        case 39:
            return gx(this, v(this.C, this), this.Ka), !0;
        default:
            return 48 <= a.keyCode && 90 >= a.keyCode ? (gy(this), this.m.push(String.fromCharCode(a.keyCode)), this.gi(this.m.join("")), !0) : !1
    }
};
var gy = function(a) {
    a.Cd && (Ci(a.Cd), a.Cd = 0);
    a.Cd = Bi(function() {
        this.m = []
    }, 1E3, a)
};
$x.prototype.gi = function(a) {
    var b = new RegExp("^" + je(a), "i"),
        c = this.Ka; - 1 < c && 1 < a.length && c--;
    gx(this, function(d, e) {
        var f = 0 > d ? 0 : d,
            g = !1;
        do {
            ++d;
            d == e && (d = 0, g = !0);
            var h = Yq(this, d).rb();
            if (h && h.match(b)) return d
        } while (!g || d != f);
        return this.Ka
    }, c)
};
$x.prototype.w = function(a, b) {
    a -= this.b;
    var c;
    0 > a && (c = a + b + (Math.ceil(b / this.b) * this.b - b) + this.b);
    return c || a
};
$x.prototype.C = function(a, b) {
    a += this.b;
    var c;
    a > b && (c = a - b - (Math.ceil(b / this.b) * this.b - b) - this.b);
    return c || a
};
var iy = function(a, b) {
        this.a = hy;
        this.b = a;
        this.c = Zb(b)
    },
    hy = null,
    ky = function(a, b) {
        var c = ["sl", "tl", "src", "trg", "ts"];
        if (!hy && "openDatabase" in window) try {
            hy = window.openDatabase("GoogleTranslateMobileWebApp", "1.0", "Google Translate Mobile Web App", 5E5)
        } catch (e) {}
        if (hy) {
            var d = new iy(a, c);
            jy(d, a, c, function(e) {
                b && b(e, d)
            })
        } else b && b(!1, null)
    },
    ly = function(a) {
        return function(b) {
            a && a(!1, b.code)
        }
    },
    jy = function(a, b, c, d) {
        var e = [];
        e.push("CREATE TABLE IF NOT EXISTS", b);
        b = [];
        for (var f = 0, g = c.length; f < g; f++) b.push(c[f] +
            " TEXT");
        e.push("(", b.join(","), ")");
        a.a.transaction(function(h) {
            h.executeSql(e.join(" "))
        }, ly(d), d ? Ta(d, !0, null) : Fa)
    },
    my = function(a, b) {
        for (var c in b)
            if (!Qb(a.c, c)) return !1;
        return !0
    },
    oy = function(a, b, c, d) {
        var e = [
            ["ts"]
        ];
        if (my(a, b)) {
            var f = [];
            f.push("SELECT * FROM", a.b);
            var g = [],
                h = [];
            ny(b, g, h);
            g.length && f.push("WHERE", g.join(" AND "));
            if (e && 0 < e.length) {
                b = [];
                for (g = 0; g < e.length; ++g) b.push(e[g][0] + " " + (e[g][1] ? "ASC" : "DESC"));
                f.push("ORDER BY", b.join(","))
            }
            c && f.push("LIMIT", c);
            var l = [];
            a.a.transaction(function(m) {
                m.executeSql(f.join(" "),
                    h,
                    function(q, r) {
                        q = 0;
                        for (var u = r.rows.length; q < u; q++) l.push(r.rows.item(q))
                    })
            }, ly(d), d ? Ta(d, !0, l || null) : Fa)
        } else d && d(!1, -1)
    },
    qy = function(a, b, c) {
        py(a, [b], c)
    },
    py = function(a, b, c) {
        for (var d = 0, e = b.length; d < e; d++)
            if (!my(a, b[d])) {
                c && c(!1, -1);
                return
            }
        var f = [];
        d = 0;
        for (e = b.length; d < e; d++) {
            var g = b[d],
                h = [],
                l = [],
                m = [],
                q;
            for (q in g) h.push(q), l.push(g[q]), m.push("?");
            f.push([
                ["INSERT INTO", a.b, "(", h.join(","), ") VALUES (", m.join(","), ")"].join(" "), l
            ])
        }
        a.a.transaction(function(r) {
            for (var u = 0, A = f.length; u < A; u++) r.executeSql(f[u][0],
                f[u][1])
        }, ly(c), c ? Ta(c, !0, null) : Fa)
    },
    ry = function(a, b, c) {
        if (my(a, b)) {
            var d = [];
            d.push("DELETE FROM", a.b);
            var e = [],
                f = [];
            ny(b, e, f);
            e.length && d.push("WHERE", e.join(" AND "));
            a.a.transaction(function(g) {
                g.executeSql(d.join(" "), f)
            }, ly(c), c ? Ta(c, !0, null) : Fa)
        } else c && c(!1, -1)
    },
    ny = function(a, b, c) {
        for (var d in a) b.push(d + "=?"), c.push(a[d])
    };
var sy = function(a) {
        this.a = a
    },
    ty = function(a, b) {
        ky(a, function(c, d) {
            var e = null;
            c && (e = new sy(d));
            b && b(c, e)
        })
    },
    wy = function(a, b, c, d) {
        var e = uy.a;
        vy(e, a, b, c, function(f) {
            f && (f = {}, f.sl = a, f.tl = b, f.src = c, f.trg = dj(d), f.ts = (new Date).getTime(), qy(e.a, f, function() {}))
        })
    },
    vy = function(a, b, c, d, e) {
        var f = {};
        b && (f.sl = b);
        c && (f.tl = c);
        d && (f.src = d);
        ry(a.a, f, function(g) {
            e && e(g)
        })
    },
    xy = function(a, b, c, d, e, f) {
        var g = {};
        b && (g.sl = b);
        c && (g.tl = c);
        d && (g.src = d);
        oy(a.a, g, e, function(h, l) {
            var m = [];
            if (h)
                for (var q = 0, r = l.length; q < r; q++) {
                    var u = {},
                        A;
                    for (A in l[q]) u[A] = l[q][A];
                    var Q = so(u.trg, {
                        "class": "trans.common.WebSqlTranslations"
                    });
                    u.trg = Q;
                    m.push(u)
                }
            f && f(h, m)
        })
    },
    yy = function(a, b, c, d, e, f) {
        xy(a, b, c, d, e, function(g, h) {
            f && f(g, h)
        })
    };
var zy = function(a) {
        this.a = a
    },
    Ay = function(a) {
        ty("TranslationHistory", function(b, c) {
            c = b ? new zy(c) : null;
            a && a(b, c)
        })
    };
var By = ec("//www.gstatic.com/inputtools/js/ita/inputtools_3.js"),
    Cy = ec("//www.gstatic.com/inputtools/js/ita/inputtools_d_3.js");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Ey = function(a) {
    var b = Dy;
    this.h = [];
    this.R = b;
    this.K = a || null;
    this.g = this.a = !1;
    this.c = void 0;
    this.G = this.C = this.m = !1;
    this.o = 0;
    this.b = null;
    this.w = 0
};
Ey.prototype.cancel = function(a) {
    if (this.a) this.c instanceof Ey && this.c.cancel();
    else {
        if (this.b) {
            var b = this.b;
            delete this.b;
            a ? b.cancel(a) : (b.w--, 0 >= b.w && b.cancel())
        }
        this.R ? this.R.call(this.K, this) : this.G = !0;
        this.a || Fy(this, new Gy(this))
    }
};
Ey.prototype.L = function(a, b) {
    this.m = !1;
    Hy(this, a, b)
};
var Hy = function(a, b, c) {
        a.a = !0;
        a.c = c;
        a.g = !b;
        Iy(a)
    },
    Ky = function(a) {
        if (a.a) {
            if (!a.G) throw new Jy(a);
            a.G = !1
        }
    };
Ey.prototype.ke = function(a) {
    Ky(this);
    Ly(a);
    Hy(this, !0, a)
};
var Fy = function(a, b) {
        Ky(a);
        Ly(b);
        Hy(a, !1, b)
    },
    Ly = function(a) {
        x(!(a instanceof Ey), "An execution sequence may not be initiated with a blocking Deferred.")
    },
    My = function(a, b, c, d) {
        x(!a.C, "Blocking Deferreds can not be re-used");
        a.h.push([b, c, d]);
        a.a && Iy(a)
    };
Ey.prototype.then = function(a, b, c) {
    var d, e, f = new ii(function(g, h) {
        d = g;
        e = h
    });
    My(this, d, function(g) {
        g instanceof Gy ? f.cancel() : e(g)
    });
    return f.then(a, b, c)
};
Ey.prototype.$goog_Thenable = !0;
var Ny = function(a) {
        return nb(a.h, function(b) {
            return La(b[1])
        })
    },
    Iy = function(a) {
        if (a.o && a.a && Ny(a)) {
            var b = a.o,
                c = Oy[b];
            c && (n.clearTimeout(c.ra), delete Oy[b]);
            a.o = 0
        }
        a.b && (a.b.w--, delete a.b);
        b = a.c;
        for (var d = c = !1; a.h.length && !a.m;) {
            var e = a.h.shift(),
                f = e[0],
                g = e[1];
            e = e[2];
            if (f = a.g ? g : f) try {
                var h = f.call(e || a.K, b);
                p(h) && (a.g = a.g && (h == b || h instanceof Error), a.c = b = h);
                if (fi(b) || "function" === typeof n.Promise && b instanceof n.Promise) d = !0, a.m = !0
            } catch (l) {
                b = l, a.g = !0, Ny(a) || (c = !0)
            }
        }
        a.c = b;
        d && (h = v(a.L, a, !0), d = v(a.L,
            a, !1), b instanceof Ey ? (My(b, h, d), b.C = !0) : b.then(h, d));
        c && (b = new Py(b), Oy[b.ra] = b, a.o = b.ra)
    },
    Jy = function() {
        Va.call(this)
    };
w(Jy, Va);
Jy.prototype.message = "Deferred has already fired";
Jy.prototype.name = "AlreadyCalledError";
var Gy = function() {
    Va.call(this)
};
w(Gy, Va);
Gy.prototype.message = "Deferred was canceled";
Gy.prototype.name = "CanceledError";
var Py = function(a) {
    this.ra = n.setTimeout(v(this.a, this), 0);
    this.$e = a
};
Py.prototype.a = function() {
    x(Oy[this.ra], "Cannot throw an error that is not scheduled.");
    delete Oy[this.ra];
    throw this.$e;
};
var Oy = {};
var Ty = function(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = rc(a),
            e = Yf("SCRIPT"),
            f = {
                Ji: e,
                bd: void 0
            },
            g = new Ey(f),
            h = null,
            l = null != c.timeout ? c.timeout : 5E3;
        0 < l && (h = window.setTimeout(function() {
            Qy(e, !0);
            Fy(g, new Ry(1, "Timeout reached for loading script " + d))
        }, l), f.bd = h);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Qy(e, c.Uj || !1, h), g.ke(null))
        };
        e.onerror = function() {
            Qy(e, !0, h);
            Fy(g, new Ry(0, "Error while loading script " + d))
        };
        f = c.attributes || {};
        Xb(f, {
            type: "text/javascript",
            charset: "UTF-8"
        });
        Pf(e, f);
        Xd(e, a);
        Sy(b).appendChild(e);
        return g
    },
    Sy = function(a) {
        var b = Kf("HEAD", a);
        return b && 0 != b.length ? b[0] : a.documentElement
    },
    Dy = function() {
        if (this && this.Ji) {
            var a = this.Ji;
            a && "SCRIPT" == a.tagName && Qy(a, !0, this.bd)
        }
    },
    Qy = function(a, b, c) {
        null != c && n.clearTimeout(c);
        a.onload = Fa;
        a.onerror = Fa;
        a.onreadystatechange = Fa;
        b && window.setTimeout(function() {
            hg(a)
        }, 0)
    },
    Ry = function(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Va.call(this, c);
        this.code = a
    };
w(Ry, Va);
var Uy = function() {
    this.c = this.b = !1;
    this.a = []
};
Ga(Uy);
var Vy = ec("//www.gstatic.cn/inputtools/js/ita/inputtools_1.js"),
    Wy = ec("//www.gstatic.cn/inputtools/js/ita/inputtools_d_1.js");
Uy.prototype.g = function() {
    this.c = !0;
    for (var a = 0; a < this.a.length; ++a) this.a[a]()
};
Uy.prototype.load = function(a, b) {
    this.b ? this.b && !this.c ? this.a.push(a) : a() : (this.b = !0, this.a.push(a), a = 0 <= n.location.href.indexOf("?deb=static") || 0 <= n.location.href.indexOf("&deb=static"), Ty(tc(dc(b ? a ? Wy : Vy : a ? Cy : By))).then(v(this.g, this)))
};
var Yy = function() {
    this.g = Ck.M();
    this.c = {};
    this.b = {};
    this.a = {};
    this.a["gt-input-tool"] = new Xy
};
Ga(Yy);
var $y = function(a, b, c) {
        b = Zy(a, b, c);
        if (p(b)) a = b.ri;
        else {
            a: {
                a = Fk(a.g, c);
                if (null != a)
                    for (c = 0; c < a.length; c++)
                        if (Ik(a[c])) {
                            a = a[c];
                            break a
                        }
                a = ""
            }
            a = a || ""
        }
        return a
    },
    Zy = function(a, b, c) {
        if (a = az(a, b)) return a.a[c]
    },
    az = function(a, b, c) {
        var d = a.a[b];
        c && !p(d) && (d = new Xy, a.a[b] = d);
        return d
    },
    bz = function(a, b, c) {
        var d = {
            ua: "itui"
        };
        d.uav = t(a) ? a : a ? 1 : 0;
        d.sl = b;
        d.tl = "und";
        d.hl = c;
        var e = new Image;
        e.src = "/translate/uc?" + Dj(d);
        e.onload = function() {
            e.onload = null
        }
    },
    Xy = function() {
        this.a = {};
        for (var a in cz) this.a[a] = new dz(cz[a], "")
    },
    cz = {
        iw: !1,
        ja: !1,
        vi: !1,
        "zh-CN": !1
    };
Xy.prototype.update = function(a, b, c) {
    var d = this.a[a];
    p(d) ? (d.isEnabled = b, d.ri = c) : this.a[a] = new dz(b, c)
};
var dz = function(a, b) {
    this.isEnabled = a;
    this.ri = b
};
var ez = function(a, b, c, d, e, f) {
    K.call(this);
    this.C = Ck.M();
    this.h = a;
    this.X = c;
    this.aa = b;
    this.g = this.b = null;
    this.o = this.L = "";
    this.G = this.h.id;
    this.a = "";
    this.m = this.c = !1;
    Em.M();
    this.R = d;
    this.V = e;
    this.Y = kc(d) ? [5, 4] : [1, 0];
    this.na = [30, 0, 0, 0];
    this.w = Yy.M();
    this.N = ql.M();
    this.F = L.M();
    this.K = !0;
    null != f && f.a(this, "change")
};
w(ez, K);
var hz = function(a, b) {
        if (null == a.b) a.o = b, (null != Dk[b] || a.C.a && null != Ek[b]) && a.K && (a.K = !1, Uy.M().load(v(a.ba, a), a.V));
        else if (a.L != b)
            if (a.L = b, null != Dk[b] || a.C.a && null != Ek[b]) {
                var c = Fk(a.C, b),
                    d = $y(a.w, a.G, b),
                    e = a.w,
                    f = a.G,
                    g = Zy(e, f, b);
                b = p(g) ? g.isEnabled : Ik($y(e, f, b));
                a.m = !0;
                a.a = sb(c, d) ? d : c[0];
                a.b.disableCurrentInputTool();
                a.c = b;
                a.b.setInputTools(c);
                a.b.activateInputTool(a.a);
                a.c ? a.b.enableCurrentInputTool() : a.b.disableCurrentInputTool();
                null == a.g && (a.g = a.b.showControl({
                    ui: "kd",
                    container: a.h
                }));
                a.b.localize(a.R);
                a.g.show();
                fz(a);
                gz(a);
                a.m = !1;
                c = a.c ? a.a : "";
                a.N.b = t(c) ? tl(c) : c
            } else a.b.disableCurrentInputTool(), null != a.g && a.g.hide()
    },
    fz = function(a) {
        null != a.b && a.b.repositionKeyboard(a.X, a.Y, a.na)
    };
ez.prototype.isEnabled = function() {
    return null != this.b && this.c
};
var iz = function(a) {
    return a.isEnabled() && Ik(a.a)
};
ez.prototype.T = function(a) {
    fz(this);
    if (!this.m && (this.a != a.currInputToolName || this.c != a.currInputToolActive)) {
        this.a = a.currInputToolName;
        this.c = a.currInputToolActive;
        gz(this);
        a = this.c;
        var b = this.L,
            c = this.R,
            d = this.G,
            e = this.a;
        az(this.w, d, !0).update(b, a, e);
        bz((a ? "1" : "0") + "." + d + "." + e, b, c);
        a = this.c ? this.a : "";
        this.N.b = t(a) ? tl(a) : a;
        this.c && (0 <= this.a.indexOf("-k0-") ? (a = this.F, N(a, O(a, 171))) : Ik(this.a) ? (a = this.F, N(a, O(a, 172))) : Gk(this.a) && (a = this.F, N(a, O(a, 146))))
    }
    this.dispatchEvent("change")
};
ez.prototype.ba = function() {
    var a = new google.elements.inputtools.InputToolsController;
    a.setAutoDirection(!1);
    a.setApplicationName("translate");
    a.addPageElements([this.aa]);
    a.addEventListener(google.elements.inputtools.EventType.INPUT_TOOL_ENABLED, this.T, this);
    this.b = a;
    "" != this.o && (hz(this, this.o), this.o = "")
};
var gz = function(a) {
    var b = D("ita-kd-inputtool-icon", a.h);
    if (null != b) {
        var c = Ik(a.a) ? a.isEnabled() ? window.MSG_IME_OFF || "" : window.MSG_IME_ON || "" : 0 <= a.a.indexOf("-k0-") ? a.isEnabled() ? window.MSG_VK_OFF || "" : window.MSG_VK_ON || "" : Gk(a.a) ? a.isEnabled() ? window.MSG_HW_OFF || "" : window.MSG_HW_ON || "" : "";
        ls(b, c, void 0);
        ps(b, 2)
    }
    a = D("ita-kd-dropdown", a.h);
    null != a && (ls(a, window.MSG_CHANGE_ITA || "", void 0), ps(a, 2))
};
Vi("goog.dom.SavedRange");
var kz = function(a, b, c, d, e) {
    this.c = !!b;
    this.h = null;
    this.g = 0;
    this.L = !1;
    this.K = !c;
    a && jz(this, a, d);
    this.depth = void 0 != e ? e : this.g || 0;
    this.c && (this.depth *= -1)
};
w(kz, oj);
var jz = function(a, b, c, d) {
    if (a.h = b) a.g = ya(c) ? c : 1 != a.h.nodeType ? 0 : a.c ? -1 : 1;
    ya(d) && (a.depth = d)
};
kz.prototype.next = function() {
    if (this.L) {
        if (!this.h || this.K && 0 == this.depth) throw nj;
        var a = this.h;
        var b = this.c ? -1 : 1;
        if (this.g == b) {
            var c = this.c ? a.lastChild : a.firstChild;
            c ? jz(this, c) : jz(this, a, -1 * b)
        } else(c = this.c ? a.previousSibling : a.nextSibling) ? jz(this, c) : jz(this, a.parentNode, -1 * b);
        this.depth += this.g * (this.c ? -1 : 1)
    } else this.L = !0;
    a = this.h;
    if (!this.h) throw nj;
    return a
};
kz.prototype.splice = function(a) {
    var b = this.h,
        c = this.c ? 1 : -1;
    this.g == c && (this.g = -1 * c, this.depth += this.g * (this.c ? -1 : 1));
    this.c = !this.c;
    kz.prototype.next.call(this);
    this.c = !this.c;
    c = Ka(arguments[0]) ? arguments[0] : arguments;
    for (var d = c.length - 1; 0 <= d; d--) fg(c[d], b);
    hg(b)
};
var lz = function() {},
    mz = function(a) {
        if (a.getSelection) return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a) return null
                } else if (!c.length || c.item(0).document != a) return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    },
    nz = function(a) {
        for (var b = [], c = 0, d = a.ve(); c < d; c++) b.push(a.Jd(c));
        return b
    },
    oz = function(a) {
        return a.Jg() ? a.Sb() : a.nc()
    };
lz.prototype.Jg = function() {
    return !1
};
var pz = function(a, b) {
    kz.call(this, a, b, !0)
};
w(pz, kz);
var qz = function(a, b, c, d, e) {
    this.b = this.a = null;
    this.G = this.C = 0;
    this.o = !!e;
    if (a) {
        this.a = a;
        this.C = b;
        this.b = c;
        this.G = d;
        if (1 == a.nodeType && "BR" != a.tagName)
            if (a = a.childNodes, b = a[b]) this.a = b, this.C = 0;
            else {
                a.length && (this.a = ib(a));
                var f = !0
            }
        1 == c.nodeType && ((this.b = c.childNodes[d]) ? this.G = 0 : this.b = c)
    }
    kz.call(this, this.o ? this.b : this.a, this.o, !0);
    if (f) try {
        this.next()
    } catch (g) {
        if (g != nj) throw g;
    }
};
w(qz, pz);
qz.prototype.w = function() {
    return this.a
};
qz.prototype.m = function() {
    return this.L && (this.h != (this.o ? this.a : this.b) ? !1 : this.o ? this.C ? -1 != this.g : 1 == this.g : !this.G || 1 != this.g)
};
qz.prototype.next = function() {
    if (this.m()) throw nj;
    return qz.D.next.call(this)
};
var rz = function() {},
    sz = function(a, b) {
        b = b.pe();
        try {
            return 0 <= a.ic(b, 0, 0) && 0 >= a.ic(b, 1, 1)
        } catch (c) {
            if (!B) throw c;
            return !1
        }
    };
rz.prototype.hc = function() {
    return new qz(this.Yb(), this.Bc(), this.Ac(), this.Oc())
};
var tz = function(a) {
    this.a = a
};
w(tz, rz);
var vz = function(a) {
        var b = Hf(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
        else if (uz(a)) {
            for (var c, d = a;
                (c = d.firstChild) && uz(c);) d = c;
            b.setStart(d, 0);
            for (d = a;
                (c = d.lastChild) && uz(c);) d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else c = a.parentNode, a = jb(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
        return b
    },
    wz = function(a, b, c, d) {
        var e = Hf(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e
    };
k = tz.prototype;
k.pe = function() {
    return this.a
};
k.qg = function() {
    return this.a.commonAncestorContainer
};
k.Yb = function() {
    return this.a.startContainer
};
k.Bc = function() {
    return this.a.startOffset
};
k.Ac = function() {
    return this.a.endContainer
};
k.Oc = function() {
    return this.a.endOffset
};
k.ic = function(a, b, c) {
    return this.a.compareBoundaryPoints(1 == c ? 1 == b ? n.Range.START_TO_START : n.Range.START_TO_END : 1 == b ? n.Range.END_TO_START : n.Range.END_TO_END, a)
};
k.Zb = function() {
    return this.a.collapsed
};
k.Sh = function() {
    return this.a.toString()
};
k.select = function(a) {
    var b = Uf(Hf(this.Yb()));
    this.Ge(b.getSelection(), a)
};
k.Ge = function(a) {
    a.removeAllRanges();
    a.addRange(this.a)
};
var xz = function(a) {
    this.a = a
};
w(xz, tz);
xz.prototype.Ge = function(a, b) {
    !b || this.Zb() ? xz.D.Ge.call(this, a, b) : (a.collapse(this.Ac(), this.Oc()), a.extend(this.Yb(), this.Bc()))
};
var yz = function(a) {
    this.b = this.a = this.o = null;
    this.h = this.g = -1;
    this.c = a
};
w(yz, rz);
var zz = Vi("goog.dom.browserrange.IeRange"),
    Az = function(a) {
        var b = Hf(a).body.createTextRange();
        if (1 == a.nodeType) b.moveToElementText(a), uz(a) && !a.childNodes.length && b.collapse(!1);
        else {
            for (var c = 0, d = a; d = d.previousSibling;) {
                var e = d.nodeType;
                if (3 == e) c += d.length;
                else if (1 == e) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move("character", c);
            b.moveEnd("character", a.length)
        }
        return b
    };
yz.prototype.pe = function() {
    return this.c
};
yz.prototype.qg = function() {
    if (!this.o) {
        var a = this.c.text,
            b = this.c.duplicate(),
            c = a.replace(/ +$/, "");
        (c = a.length - c.length) && b.moveEnd("character", -c);
        c = b.parentElement();
        b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
        if (this.Zb() && 0 < b) return this.o = c;
        for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
        for (; 1 == c.childNodes.length && c.innerText == Bz(c.firstChild) && uz(c.firstChild);) c = c.firstChild;
        0 == a.length && (c = Cz(this, c));
        this.o = c
    }
    return this.o
};
var Cz = function(a, b) {
    for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
        var f = c[d];
        if (uz(f)) {
            var g = Az(f),
                h = g.htmlText != f.outerHTML;
            if (a.Zb() && h ? 0 <= a.ic(g, 1, 1) && 0 >= a.ic(g, 1, 0) : a.c.inRange(g)) return Cz(a, f)
        }
    }
    return b
};
k = yz.prototype;
k.Yb = function() {
    this.a || (this.a = Dz(this, 1), this.Zb() && (this.b = this.a));
    return this.a
};
k.Bc = function() {
    0 > this.g && (this.g = Ez(this, 1), this.Zb() && (this.h = this.g));
    return this.g
};
k.Ac = function() {
    if (this.Zb()) return this.Yb();
    this.b || (this.b = Dz(this, 0));
    return this.b
};
k.Oc = function() {
    if (this.Zb()) return this.Bc();
    0 > this.h && (this.h = Ez(this, 0), this.Zb() && (this.g = this.h));
    return this.h
};
k.ic = function(a, b, c) {
    return this.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
};
var Dz = function(a, b, c) {
        c = c || a.qg();
        if (!c || !c.firstChild) return c;
        for (var d = 1 == b, e = 0, f = c.childNodes.length; e < f; e++) {
            var g = d ? e : f - e - 1,
                h = c.childNodes[g];
            try {
                var l = Fz(h)
            } catch (q) {
                continue
            }
            var m = l.pe();
            if (a.Zb())
                if (!uz(h)) {
                    if (0 == a.ic(m, 1, 1)) {
                        a.g = a.h = g;
                        break
                    }
                } else {
                    if (sz(l, a)) return Dz(a, b, h)
                } else {
                if (sz(a, l)) {
                    if (!uz(h)) {
                        d ? a.g = g : a.h = g + 1;
                        break
                    }
                    return Dz(a, b, h)
                }
                if (0 > a.ic(m, 1, 0) && 0 < a.ic(m, 0, 1)) return Dz(a, b, h)
            }
        }
        return c
    },
    Ez = function(a, b) {
        var c = 1 == b,
            d = c ? a.Yb() : a.Ac();
        if (1 == d.nodeType) {
            d = d.childNodes;
            for (var e =
                    d.length, f = c ? 1 : -1, g = c ? 0 : e - 1; 0 <= g && g < e; g += f) {
                var h = d[g];
                if (!uz(h) && 0 == a.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Fz(h).pe())) return c ? g : g + 1
            }
            return -1 == g ? 0 : g
        }
        a = a.c.duplicate();
        b = Az(d);
        a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
        a = a.text.length;
        return c ? d.length - a : a
    },
    Bz = function(a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    };
yz.prototype.Zb = function() {
    return 0 == this.c.compareEndPoints("StartToEnd", this.c)
};
yz.prototype.Sh = function() {
    return this.c.text
};
yz.prototype.select = function() {
    this.c.select()
};
var Gz = function(a) {
    this.a = a
};
w(Gz, tz);
Gz.prototype.Ge = function(a) {
    a.collapse(this.Yb(), this.Bc());
    this.Ac() == this.Yb() && this.Oc() == this.Bc() || a.extend(this.Ac(), this.Oc());
    0 == a.rangeCount && a.addRange(this.a)
};
var Hz = function(a) {
    this.a = a
};
w(Hz, tz);
Hz.prototype.ic = function(a, b, c) {
    return Re("528") ? Hz.D.ic.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? n.Range.START_TO_START : n.Range.END_TO_START : 1 == b ? n.Range.START_TO_END : n.Range.END_TO_END, a)
};
Hz.prototype.Ge = function(a, b) {
    b ? a.setBaseAndExtent(this.Ac(), this.Oc(), this.Yb(), this.Bc()) : a.setBaseAndExtent(this.Yb(), this.Bc(), this.Ac(), this.Oc())
};
var Iz = function(a) {
        return Bf ? new yz(a, Hf(a.parentElement())) : Ae ? new Hz(a) : ze ? new xz(a) : we ? new Gz(a) : new tz(a)
    },
    Fz = function(a) {
        if (B && !Te(9)) {
            var b = new yz(Az(a), Hf(a));
            if (uz(a)) {
                for (var c, d = a;
                    (c = d.firstChild) && uz(c);) d = c;
                b.a = d;
                b.g = 0;
                for (d = a;
                    (c = d.lastChild) && uz(c);) d = c;
                b.b = d;
                b.h = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.o = a
            } else b.a = b.b = b.o = a.parentNode, b.g = jb(b.o.childNodes, a), b.h = b.g + 1;
            a = b
        } else a = Ae ? new Hz(vz(a)) : ze ? new xz(vz(a)) : we ? new Gz(vz(a)) : new tz(vz(a));
        return a
    },
    uz = function(a) {
        return ag(a) ||
            3 == a.nodeType
    };
var Jz = function() {
    this.c = this.b = this.h = this.a = this.o = null;
    this.g = !1
};
w(Jz, lz);
var Kz = function(a, b) {
        var c = new Jz;
        c.o = a;
        c.g = !!b;
        return c
    },
    Lz = function(a, b) {
        return Kz(Fz(a), b)
    };
Jz.prototype.Jb = function() {
    return "text"
};
Jz.prototype.lg = function() {
    return Mz(this).pe()
};
Jz.prototype.ve = function() {
    return 1
};
Jz.prototype.Jd = function() {
    return this
};
var Mz = function(a) {
    var b;
    if (!(b = a.o)) {
        b = a.Sb();
        var c = a.Tb(),
            d = a.nc(),
            e = a.oc();
        if (B && !Te(9)) {
            var f = b,
                g = c,
                h = d,
                l = e,
                m = !1;
            1 == f.nodeType && (g > f.childNodes.length && Wi(zz, "Cannot have startOffset > startNode child count"), g = f.childNodes[g], m = !g, f = g || f.lastChild || f, g = 0);
            var q = Az(f);
            g && q.move("character", g);
            f == h && g == l ? q.collapse(!0) : (m && q.collapse(!1), m = !1, 1 == h.nodeType && (l > h.childNodes.length && Wi(zz, "Cannot have endOffset > endNode child count"), h = (g = h.childNodes[l]) || h.lastChild || h, l = 0, m = !g), f = Az(h), f.collapse(!m),
                l && f.moveEnd("character", l), q.setEndPoint("EndToEnd", f));
            l = new yz(q, Hf(b));
            l.a = b;
            l.g = c;
            l.b = d;
            l.h = e;
            b = l
        } else b = Ae ? new Hz(wz(b, c, d, e)) : ze ? new xz(wz(b, c, d, e)) : we ? new Gz(wz(b, c, d, e)) : new tz(wz(b, c, d, e));
        b = a.o = b
    }
    return b
};
k = Jz.prototype;
k.ff = function() {
    return Mz(this).qg()
};
k.Sb = function() {
    return this.a || (this.a = Mz(this).Yb())
};
k.Tb = function() {
    return null != this.h ? this.h : this.h = Mz(this).Bc()
};
k.nc = function() {
    return this.b || (this.b = Mz(this).Ac())
};
k.oc = function() {
    return null != this.c ? this.c : this.c = Mz(this).Oc()
};
k.Jg = function() {
    return this.g
};
k.hf = function() {
    return Mz(this).Zb()
};
k.gf = function() {
    return Mz(this).Sh()
};
k.hc = function() {
    return new qz(this.Sb(), this.Tb(), this.nc(), this.oc())
};
k.select = function() {
    Mz(this).select(this.g)
};
var Nz = function() {};
w(Nz, lz);
var Oz = function() {
    this.c = this.b = this.a = null
};
w(Oz, Nz);
k = Oz.prototype;
k.Jb = function() {
    return "control"
};
k.lg = function() {
    return this.a || document.body.createControlRange()
};
k.ve = function() {
    return this.a ? this.a.length : 0
};
k.Jd = function(a) {
    return Lz(this.a.item(a))
};
k.ff = function() {
    return rg.apply(null, Pz(this))
};
k.Sb = function() {
    return Qz(this)[0]
};
k.Tb = function() {
    return 0
};
k.nc = function() {
    var a = Qz(this),
        b = ib(a);
    return qb(a, function(c) {
        return ng(c, b)
    })
};
k.oc = function() {
    return this.nc().childNodes.length
};
var Pz = function(a) {
        if (!a.b && (a.b = [], a.a))
            for (var b = 0; b < a.a.length; b++) a.b.push(a.a.item(b));
        return a.b
    },
    Qz = function(a) {
        a.c || (a.c = Pz(a).concat(), a.c.sort(function(b, c) {
            return b.sourceIndex - c.sourceIndex
        }));
        return a.c
    };
Oz.prototype.hf = function() {
    return !this.a || !this.a.length
};
Oz.prototype.gf = function() {
    return ""
};
Oz.prototype.hc = function() {
    return new Rz(this)
};
Oz.prototype.select = function() {
    this.a && this.a.select()
};
var Rz = function(a) {
    this.o = this.b = this.a = null;
    a && (this.o = Qz(a), this.a = this.o.shift(), this.b = ib(this.o) || this.a);
    kz.call(this, this.a, !1, !0)
};
w(Rz, pz);
Rz.prototype.w = function() {
    return this.a
};
Rz.prototype.m = function() {
    return !this.depth && !this.o.length
};
Rz.prototype.next = function() {
    if (this.m()) throw nj;
    if (!this.depth) {
        var a = this.o.shift();
        jz(this, a, 1, 1);
        return a
    }
    return Rz.D.next.call(this)
};
var Sz = function() {
    this.F = Vi("goog.dom.MultiRange");
    this.a = [];
    this.g = [];
    this.c = this.b = null
};
w(Sz, Nz);
k = Sz.prototype;
k.Jb = function() {
    return "mutli"
};
k.lg = function() {
    1 < this.a.length && Xi(this.F, "getBrowserRangeObject called on MultiRange with more than 1 range");
    return this.a[0]
};
k.ve = function() {
    return this.a.length
};
k.Jd = function(a) {
    this.g[a] || (this.g[a] = Kz(Iz(this.a[a]), void 0));
    return this.g[a]
};
k.ff = function() {
    if (!this.c) {
        for (var a = [], b = 0, c = this.ve(); b < c; b++) a.push(this.Jd(b).ff());
        this.c = rg.apply(null, a)
    }
    return this.c
};
var Uz = function(a) {
    a.b || (a.b = nz(a), a.b.sort(function(b, c) {
        var d = b.Sb();
        b = b.Tb();
        var e = c.Sb();
        c = c.Tb();
        return d == e && b == c ? 0 : Tz(d, b, e, c) ? 1 : -1
    }));
    return a.b
};
k = Sz.prototype;
k.Sb = function() {
    return Uz(this)[0].Sb()
};
k.Tb = function() {
    return Uz(this)[0].Tb()
};
k.nc = function() {
    return ib(Uz(this)).nc()
};
k.oc = function() {
    return ib(Uz(this)).oc()
};
k.hf = function() {
    return 0 == this.a.length || 1 == this.a.length && this.Jd(0).hf()
};
k.gf = function() {
    return lb(nz(this), function(a) {
        return a.gf()
    }).join("")
};
k.hc = function() {
    return new Vz(this)
};
k.select = function() {
    var a = mz(Uf(Hf(B ? this.ff() : this.Sb())));
    a.removeAllRanges();
    for (var b = 0, c = this.ve(); b < c; b++) a.addRange(this.Jd(b).lg())
};
var Vz = function(a) {
    this.a = null;
    this.b = 0;
    a && (this.a = lb(Uz(a), function(b) {
        return pj(b)
    }));
    kz.call(this, a ? this.w() : null, !1, !0)
};
w(Vz, pz);
Vz.prototype.w = function() {
    return this.a[0].w()
};
Vz.prototype.m = function() {
    return this.a[this.b].m()
};
Vz.prototype.next = function() {
    try {
        var a = this.a[this.b],
            b = a.next();
        jz(this, a.h, a.g, a.depth);
        return b
    } catch (c) {
        if (c !== nj || this.a.length - 1 == this.b) throw c;
        this.b++;
        return this.next()
    }
};
var Xz = function() {
        var a = mz(window);
        return a && Wz(a)
    },
    Wz = function(a) {
        var b = !1;
        if (a.createRange) try {
                var c = a.createRange()
            } catch (e) {
                return null
            } else if (a.rangeCount) {
                if (1 < a.rangeCount) {
                    b = new Sz;
                    c = 0;
                    for (var d = a.rangeCount; c < d; c++) b.a.push(a.getRangeAt(c));
                    return b
                }
                c = a.getRangeAt(0);
                b = Tz(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
            } else return null;
            (a = c) && a.addElement ? (b = new Oz, b.a = a, a = b) : a = Kz(Iz(a), b);
        return a
    },
    Tz = function(a, b, c, d) {
        if (a == c) return d < b;
        var e;
        if (1 == a.nodeType && b)
            if (e = a.childNodes[b]) a =
                e, b = 0;
            else if (ng(a, c)) return !0;
        if (1 == c.nodeType && d)
            if (e = c.childNodes[d]) c = e, d = 0;
            else if (ng(c, a)) return !1;
        return 0 < (qg(a, c) || b - d)
    };
var Yz = function() {
        var a = Xz();
        return null != a && !a.hf() && 0 < a.gf().length
    },
    Zz = function(a) {
        Xz();
        Lz(a, void 0).select();
        a.setAttribute("tabIndex", "-1")
    },
    $z = function(a) {
        var b = F("TEXTAREA", {
            id: "hdt"
        });
        Zp(b, {
            position: "absolute",
            top: Tf(document).a + "px",
            left: "-1000px"
        });
        bg(document.body, b);
        b.focus();
        G(b, a);
        a = 0;
        if (rw(b)) b.selectionStart = a;
        else if (sw()) {
            var c = tw(b),
                d = c[0];
            d.inRange(c[1]) && (a = vw(b, a), d.collapse(!0), d.move("character", a), d.select())
        }
        a = b.value.length;
        rw(b) ? b.selectionEnd = a : sw() && (d = tw(b), c = d[1], d[0].inRange(c) &&
            (a = vw(b, a), d = vw(b, uw(b, !0)[0]), c.collapse(!0), c.moveEnd("character", a - d), c.select()));
        return b
    };
var aA = function(a, b, c, d, e, f, g) {
    g = void 0 === g ? function() {} : g;
    this.L = Em.M();
    this.G = b;
    this.g = c;
    this.C = d;
    this.o = e || null;
    this.w = f;
    this.m = g;
    this.b = this.c = this.a = 0;
    this.F = L.M();
    this.delay = new Rr(this.If, 3E3, this);
    this.h = a;
    H(a, "copy", this.gj, !1, this);
    H(a, "mouseup", this.hj, !1, this);
    H(a, "contextmenu", this.Xh, !1, this);
    H(a, "click", this.fj, !1, this);
    H(n, "blur", this.flush, !1, this);
    H(n, "beforeunload", this.flush, !1, this)
};
w(aA, Hg);
k = aA.prototype;
k.flush = function() {
    this.delay.stop();
    0 < this.a + this.c + this.b && this.If()
};
k.W = function() {
    this.flush();
    this.delay.La();
    nh(this.h, "copy", this.gj, !1, this);
    nh(this.h, "mouseup", this.hj, !1, this);
    nh(this.h, "contextmenu", this.Xh, !1, this);
    nh(this.h, "click", this.fj, !1, this);
    nh(n, "blur", this.flush, !1, this);
    nh(n, "beforeunload", this.flush, !1, this);
    aA.D.W.call(this)
};
k.gj = function() {
    this.delay.stop();
    if (p(this.w)) {
        var a = this.w().length,
            b = null != n.getSelection ? n.getSelection().toString().length : document.selection && "Control" != document.selection.type ? document.selection.createRange().text.length : 0;
        this.If(1, a, b);
        em(this.F, this.g, this.m(), a, b)
    } else this.If(1), em(this.F, this.g, this.m())
};
k.If = function(a, b, c) {
    a = {
        cpy: a || 0,
        clk: this.a,
        sel: this.c,
        ctx: this.b
    };
    null != b && null != c && (a.ql = b, a.cpl = c);
    null != this.o && (a.sl = this.o.a(), a.tl = this.o.b());
    Jm(this.L, this.C, "ilog", this.G, a);
    this.b = this.c = this.a = 0
};
k.hj = function() {
    if (Yz()) {
        this.c++;
        var a = this.F;
        N(a, cm(a, 211, this.g));
        59 <= this.c ? this.flush() : this.delay.start()
    }
};
k.fj = function(a) {
    Vg(a) && (this.a++, a = this.F, N(a, cm(a, 212, this.g)), 59 <= this.a ? this.flush() : this.delay.start())
};
k.Xh = function() {
    this.b++;
    var a = this.F;
    N(a, cm(a, 210, this.g));
    59 <= this.b ? this.flush() : this.delay.start()
};
var bA = {
    8: "backspace",
    9: "tab",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "caps-lock",
    27: "esc",
    32: "space",
    33: "pg-up",
    34: "pg-down",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: "delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    59: "semicolon",
    61: "equals",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    93: "context",
    96: "num-0",
    97: "num-1",
    98: "num-2",
    99: "num-3",
    100: "num-4",
    101: "num-5",
    102: "num-6",
    103: "num-7",
    104: "num-8",
    105: "num-9",
    106: "num-multiply",
    107: "num-plus",
    109: "num-minus",
    110: "num-period",
    111: "num-division",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    186: "semicolon",
    187: "equals",
    189: "dash",
    188: ",",
    190: ".",
    191: "/",
    192: "`",
    219: "open-square-bracket",
    220: "\\",
    221: "close-square-bracket",
    222: "single-quote",
    224: "win"
};
var cA = function(a, b, c, d, e, f, g, h, l) {
        this.a = a;
        this.h = b;
        this.G = c;
        this.c = d;
        this.g = e;
        this.o = f;
        this.m = g;
        this.w = h;
        this.b = l
    },
    iA = function(a) {
        var b = a.b;
        b = (b = b && "composed" in b && b && "composedPath" in b && b.composed && b.composedPath()) && 0 < b.length ? b[0] : a.target;
        return dA(eA(fA(gA((new hA).keyCode(a.keyCode || 0).key(a.key || "").shiftKey(!!a.shiftKey).altKey(!!a.altKey).ctrlKey(!!a.ctrlKey).metaKey(!!a.metaKey).target(a.target), b), function() {
            return a.preventDefault()
        }), function() {
            return a.stopPropagation()
        }))
    },
    hA = function() {
        this.c =
            null;
        this.g = "";
        this.G = this.o = this.m = this.C = this.h = this.b = this.a = this.w = null
    };
k = hA.prototype;
k.keyCode = function(a) {
    this.c = a;
    return this
};
k.key = function(a) {
    this.g = a;
    return this
};
k.shiftKey = function(a) {
    this.w = a;
    return this
};
k.altKey = function(a) {
    this.a = a;
    return this
};
k.ctrlKey = function(a) {
    this.b = a;
    return this
};
k.metaKey = function(a) {
    this.h = a;
    return this
};
k.target = function(a) {
    this.C = a;
    return this
};
var gA = function(a, b) {
        a.m = b;
        return a
    },
    fA = function(a, b) {
        a.o = b;
        return a
    },
    eA = function(a, b) {
        a.G = b;
        return a
    },
    dA = function(a) {
        return new cA($a(a.c), a.g, eb(a.w), eb(a.a), eb(a.b), eb(a.h), x(a.C), x(a.m), bb(a.o), bb(a.G))
    };
var lA = function(a) {
        K.call(this);
        this.b = this.c = {};
        this.h = 0;
        this.N = Zb(jA);
        this.V = Zb(kA);
        this.m = !0;
        this.o = null;
        this.a = a;
        H(this.a, "keydown", this.w, void 0, this);
        H(this.a, "synthetic-keydown", this.C, void 0, this);
        Ee && (H(this.a, "keypress", this.K, void 0, this), H(this.a, "synthetic-keypress", this.R, void 0, this));
        H(this.a, "keyup", this.G, void 0, this);
        H(this.a, "synthetic-keyup", this.L, void 0, this)
    },
    mA;
w(lA, K);
var nA = function(a) {
        this.a = a || null;
        this.next = a ? null : {}
    },
    jA = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
    kA = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
lA.prototype.T = function(a, b) {
    oA(this.c, pA(arguments), a)
};
var pA = function(a) {
    if (t(a[1])) a = lb(qA(a[1]), function(d) {
        $a(d.keyCode, "A non-modifier key is needed in each stroke.");
        return rA(d.key || "", d.keyCode, d.qm)
    });
    else {
        var b = a,
            c = 1;
        Ja(a[1]) && (b = a[1], c = 0);
        for (a = []; c < b.length; c += 2) a.push(rA("", b[c], b[c + 1]))
    }
    return a
};
lA.prototype.W = function() {
    lA.D.W.call(this);
    this.c = {};
    nh(this.a, "keydown", this.w, !1, this);
    nh(this.a, "synthetic-keydown", this.C, !1, this);
    Ee && (nh(this.a, "keypress", this.K, !1, this), nh(this.a, "synthetic-keypress", this.R, !1, this));
    nh(this.a, "keyup", this.G, !1, this);
    nh(this.a, "synthetic-keyup", this.L, !1, this);
    this.a = null
};
var qA = function(a) {
    a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
    a = a.split(" ");
    for (var b = [], c, d = 0; c = a[d]; d++) {
        var e = c.split("+"),
            f = null,
            g = null;
        c = 0;
        for (var h, l = 0; h = e[l]; l++) {
            switch (h) {
                case "shift":
                    c |= 1;
                    continue;
                case "ctrl":
                    c |= 2;
                    continue;
                case "alt":
                    c |= 4;
                    continue;
                case "meta":
                    c |= 8;
                    continue
            }
            null === g || Za("At most one non-modifier key can be in a stroke.");
            e = void 0;
            f = h;
            if (!mA) {
                g = {};
                for (e in bA) g[bA[e]] = wh(parseInt(e, 10));
                mA = g
            }
            g = mA[f];
            $a(g, "Key name not found in goog.events.KeyNames: " +
                h);
            f = h;
            break
        }
        b.push({
            key: f,
            keyCode: g,
            qm: c
        })
    }
    return b
};
lA.prototype.G = function(a) {
    a = iA(a);
    ze && sA(this, a);
    Ee && !this.g && tA(a) && uA(this, a, !0)
};
lA.prototype.L = function(a) {
    a = a.b();
    ze && sA(this, a);
    Ee && !this.g && tA(a) && uA(this, a, !0)
};
var sA = function(a, b) {
        32 == a.o && 32 == b.a && (0, b.b)();
        a.o = null
    },
    tA = function(a) {
        return Ee && a.g && a.c
    };
lA.prototype.K = function(a) {
    a = iA(a);
    32 < a.a && tA(a) && (this.g = !0)
};
lA.prototype.R = function(a) {
    a = a.b();
    32 < a.a && tA(a) && (this.g = !0)
};
var oA = function(a, b, c) {
        var d = b.shift();
        y(d, function(e) {
            if ((e = a[e]) && (0 == b.length || e.a)) throw Error("Keyboard shortcut conflicts with existing shortcut");
        });
        b.length ? y(d, function(e) {
            e = e.toString();
            var f = new nA;
            e = e in a ? a[e] : a[e] = f;
            f = b.slice(0);
            oA(x(e.next, "An internal node must have a next map"), f, c)
        }) : y(d, function(e) {
            a[e] = new nA(c)
        })
    },
    vA = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = a[b[c]];
            if (d) return d
        }
    },
    rA = function(a, b, c) {
        c = c || 0;
        b = ["c_" + b + "_" + c];
        "" != a && b.push("n_" + a + "_" + c);
        return b
    };
lA.prototype.w = function(a) {
    uA(this, iA(a))
};
lA.prototype.C = function(a) {
    uA(this, a.b())
};
var uA = function(a, b, c) {
        a: {
            var d = b.a;
            if ("" != b.h) {
                var e = b.h;
                if ("Control" == e || "Shift" == e || "Meta" == e || "AltGraph" == e) {
                    d = !1;
                    break a
                }
            } else if (16 == d || 17 == d || 18 == d) {
                d = !1;
                break a
            }
            e = b.w;
            var f = "TEXTAREA" == e.tagName || "INPUT" == e.tagName || "BUTTON" == e.tagName || "SELECT" == e.tagName,
                g = !f && (e.isContentEditable || e.ownerDocument && "on" == e.ownerDocument.designMode);
            d = !f && !g || a.N[d] ? !0 : g ? !1 : b.c || b.g || b.o ? !0 : "INPUT" == e.tagName && a.V[e.type] ? 13 == d : "INPUT" == e.tagName || "BUTTON" == e.tagName ? 32 != d : !1
        }
        d && (!c && tA(b) ? a.g = !1 : (c = wh(b.a),
            d = rA(b.h, c, (b.G ? 1 : 0) | (b.g ? 2 : 0) | (b.c ? 4 : 0) | (b.o ? 8 : 0)), (e = vA(a.b, d)) && (e = !(1500 <= Ua() - a.h)), e || (a.b = a.c, a.h = Ua()), (e = vA(a.b, d)) && e.next && (a.b = e.next, a.h = Ua()), e && (e.next ? (0, b.b)() : (a.b = a.c, a.h = Ua(), a.m && (0, b.b)(), d = ab(e.a, "A terminal node must have a string shortcut identifier."), e = a.dispatchEvent(new wA("shortcut", d, b.m)), (e &= a.dispatchEvent(new wA("shortcut_" + d, d, b.m))) || (0, b.b)(), ze && (a.o = c)))))
    },
    wA = function(a, b, c) {
        Kg.call(this, a, c);
        this.identifier = b
    };
w(wA, Kg);
var xA = function(a) {
    this.c = a;
    this.g = Em.M();
    this.F = L.M();
    this.a = new lA(document);
    this.a.m = !1;
    this.a.T("CTRL_SHIFT_S", 83, (De ? 8 : 2) | 1);
    H(this.a, "shortcut", this.b, !1, this)
};
w(xA, Hg);
xA.prototype.W = function() {
    xA.D.W.call(this);
    nh(this.a, "shortcut", this.b, !1, this)
};
xA.prototype.b = function(a) {
    "CTRL_SHIFT_S" == a.identifier && (sh(this.c.b, "action"), a = this.F, N(a, O(a, 289)), this.g.log("swaplang"))
};
var zA = function(a, b, c, d, e, f) {
    K.call(this);
    this.v = a;
    this.b = F("DIV", "sl-sugg-button-container");
    this.C = b;
    a = D("sl-sugg-button-container", this.v) ? ig(this.v.firstElementChild) : ig(this.v);
    this.g = c ? c : a.length;
    dg(this.v);
    this.c = !!d;
    this.o = !!e;
    this.a = [];
    c = this.c ? this.g + 1 : this.g;
    for (d = 0; d < c; ++d) e = new xs(""), e.Oa(16, !0), H(e, "action", this.R, !1, this), e.Ua(this.b), wr(e.c, e, 0 == d ? 2 : 3), this.a.push(e);
    this.v.appendChild(this.b);
    this.h = [];
    this.m = F("DIV", "ls-left-arrow");
    this.w = F("DIV", "ls-right-arrow");
    this.G = 0;
    f &&
        (this.v.insertBefore(this.m, this.v.firstChild), this.v.appendChild(this.w), H(this.m, "mouseover", function() {
            yA(this, 2)
        }, !1, this), H(this.m, "mouseout", function() {
            clearTimeout(this.G)
        }, !1, this), H(this.w, "mouseover", function() {
            yA(this, -2)
        }, !1, this), H(this.w, "mouseout", function() {
            clearTimeout(this.G)
        }, !1, this));
    this.F = L.M()
};
w(zA, K);
var yA = function(a, b) {
    a.b.scrollLeft -= b;
    a.G = setTimeout(function() {
        yA(a, b)
    }, 10)
};
zA.prototype.L = function(a) {
    var b = a.selected;
    a = a.data.slice(0, this.g);
    var c = this.h.slice();
    c.length = this.g;
    a: {
        c = yb(c).sort();
        var d = yb(a).sort();
        if (Ka(c) && Ka(d) && c.length == d.length) {
            for (var e = c.length, f = 0; f < e; f++)
                if (c[f] !== d[f]) {
                    c = !1;
                    break a
                }
            c = !0
        } else c = !1
    }
    c = !c;
    this.h = a;
    a = 0;
    this.c && this.o && (a = 1);
    for (d = 0; d < this.h.length; d++) {
        e = this.a[a];
        f = this.h[d];
        if (c) {
            e.mf(f);
            var g = this.C(f);
            e.g(g)
        }
        AA(this, e, e.Z() == b, f);
        a++
    }
    for (; a < this.g; a++) this.a[a].setVisible(!1);
    this.c && (a = this.a[this.o ? 0 : this.a.length - 1], a.mf("auto"),
        a.g(detect_language), AA(this, a, a.Z() == b));
    W(this.v, !0)
};
zA.prototype.R = function(a) {
    var b = a.a.Z();
    if (a.a.Ea(16)) {
        a: {
            var c = a.a;
            for (var d = 0, e = 0; d < this.a.length; d++) {
                var f = this.a[d];
                if (f && f.isVisible()) {
                    if (c == f) {
                        c = e;
                        break a
                    }
                    e++
                }
            }
            c = -1
        }
        mm(this.F, this.c, 2, b, c, "")
    } else a.a.$c(!0);
    mq(a.a.j(), this.v);
    this.dispatchEvent({
        type: "click",
        data: b
    })
};
var AA = function(a, b, c, d) {
    b.setVisible(!0);
    b.$c(c);
    c && mq(b.j(), a.b);
    d && (b.j().id = "sugg-item-" + d)
};
zA.prototype.K = function(a) {
    if (this.c) {
        var b = this.a[this.o ? 0 : this.a.length - 1];
        "" == a.data ? b.g(detect_language) : (a = source_language_detected.replace(/%\d\$s/g, this.C(a.data)), b.g(a))
    }
};
var BA = function(a) {
        this.a = a;
        this.b = this.m = this.h = this.o = this.g = null;
        this.R = !1;
        this.c = null;
        this.C = function() {
            return ""
        };
        this.w = Em.M();
        this.na = ql.M();
        this.F = L.M();
        this.G = null
    },
    EA = function(a, b) {
        b.Oi && (a.g = b.Oi, CA(a.g, a.N, a), DA(a, a.a, "srcLanguageUpdated", a.vl), DA(a, a.a, "detectSrcUpdated", a.Uk));
        b.Yi && (a.o = b.Yi, CA(a.o, a.T, a), DA(a, a.a, "tgtLanguageUpdated", a.El));
        b.Ki && (a.K = b.Ki, DA(a, a.K, "action", a.Fa));
        b.Ni && (a.V = b.Ni, DA(a, a.V, "action", v(a.L, a, "src", !0)));
        b.Xi && (a.X = b.Xi, DA(a, a.X, "action", v(a.L, a, "tgt", !1)));
        if (b.Pi) {
            a.h = b.Pi;
            DA(a, a.h, "click", a.wl);
            var c = a.h;
            H(a.a, "staticSrcSuggestionUpdated", c.L, !1, c);
            c = a.h;
            H(a.a, "detectSrcUpdated", c.K, !1, c)
        }
        b.Zi && (a.m = b.Zi, DA(a, a.m, "click", a.Fl), c = a.m, H(a.a, "staticTgtSuggestionUpdated", c.L, !1, c));
        b.Ic && (a.b = b.Ic, DA(a, a.b, "action", a.Cl));
        b.aj && (a.c = b.aj, DA(a, new br(a.c.j()), "key", a.bi), DA(a, new Nv(a.c.j()), "paste", a.bi));
        b.$a && (a.C = b.$a)
    },
    GA = function(a, b) {
        (a.R = b) && a.b ? a.b.qa(!1) : FA(a)
    },
    DA = function(a, b, c, d) {
        b && H(b, c, d, !1, a)
    };
BA.prototype.N = function() {
    var a = this.g,
        b = this.a.g;
    var c = pw(this.a.X);
    HA(this, a, b, c, "slc")
};
BA.prototype.T = function() {
    var a = this.o,
        b = this.a.h;
    var c = pw(this.a.Y.a);
    HA(this, a, b, c, "tlc", !0)
};
var IA = function(a, b, c) {
    var d = {};
    d.lpk = c;
    a.G = d;
    a.G.lsa = b;
    Jm(a.w, "webapp", "lsa", b, d)
};
BA.prototype.Fa = function() {
    this.g && this.g.isVisible() ? (IA(this, "lso", "src"), lm(this.F, 217)) : this.o && this.o.isVisible() && (IA(this, "lso", "tgt"), lm(this.F, 219))
};
BA.prototype.L = function(a, b) {
    IA(this, "lsc", a);
    lm(this.F, b ? 218 : 220)
};
var HA = function(a, b, c, d, e, f) {
    var g = b.Z(),
        h = JA(a),
        l = KA(a, f);
    c.call(a.a, g, 4);
    null != b.R && Xb(h, b.R);
    "" != d && (h.emphlang = d);
    b = pw(a.a.L.a);
    f || "" == b || (h.bslang = b);
    "" != l && (h.sugglang = l);
    a.G = h;
    a.G[e] = g;
    Jm(a.w, "webapp", e, g, h)
};
k = BA.prototype;
k.vl = function(a) {
    this.g.Z() != a.data && LA(this.g, a.data);
    FA(this);
    a.Dh && (MA(this, "slauto", JA(this)), lm(this.F, 221))
};
k.Uk = function() {
    FA(this)
};
k.El = function(a) {
    this.o.Z() != a.data && LA(this.o, a.data);
    FA(this);
    a.Dh && (MA(this, "tlauto", JA(this)), lm(this.F, 222))
};
k.wl = function(a) {
    if (a.data == this.a.a) a.target.dispatchEvent({
        type: "clickSelected"
    }), a.preventDefault();
    else {
        var b = this.a.g,
            c = KA(this),
            d = JA(this, a.data);
        b.call(this.a, a.data, 3);
        d.sugglang = c;
        MA(this, "ssuggclick", d)
    }
};
k.Fl = function(a) {
    if (a.data == this.a.b) a.target.dispatchEvent({
        type: "clickSelected"
    }), a.preventDefault();
    else {
        var b = this.a.h,
            c = KA(this, !0),
            d = JA(this, a.data);
        b.call(this.a, a.data, 3);
        d.sugglang = c;
        MA(this, "tsuggclick", d)
    }
};
k.Cl = function() {
    var a = JA(this),
        b = this.a.a,
        c = this.a.b,
        d = b;
    if ("auto" == b && (d = this.a.c, !d)) return;
    (b = this.C()) && this.c && (this.c.b(b), ul(this.na, 28));
    MA(this, "swapclick", a);
    a = this.a;
    a.g(c, 5);
    a.h(d, 5);
    a.dispatchEvent("languageSelected");
    Mm(this.w, "swap", 1, "accumulate");
    c = this.F;
    d = O(c, 89);
    a = new Xk;
    C(a, 1, 1);
    mf(d, 46, a);
    N(c, d)
};
k.bi = function(a) {
    if ("paste" == a.type || 2 > yc(this.c.Z()).length) this.a.G = !1
};
var JA = function(a, b) {
        var c = {};
        c.sl = a.a.a;
        c.tl = a.a.b;
        b && (c.val = b);
        (b = a.a.c) && (c.dsl = b);
        a.c && (c.ql = yc(a.c.Z()).length);
        return c
    },
    NA = function(a) {
        Mm(a.w, "ssel", a.a.na);
        Mm(a.w, "tsel", a.a.aa)
    },
    MA = function(a, b, c) {
        a.G = c;
        a.w.log(b, c)
    },
    KA = function(a, b) {
        return b ? pw(a.a.R.a) : pw(a.a.K.a)
    },
    FA = function(a) {
        if (a.b && !a.R) {
            var b = a.a.a;
            "auto" == b && (b = a.a.c);
            "zh-CN" == b && "zh-TW" == a.a.w && (b = "zh-TW");
            "" == b || b == a.a.b ? a.b.qa(!1) : a.b.qa(!0)
        }
    };
var OA = 0,
    PA = /^[a-zA-Z0-9_\-]*$/,
    QA = function(a) {
        x(a.match(PA), "ControlType.create contains invalid characters" + a);
        return a + "+" + OA++
    };
var RA = function(a, b) {
    Hg.call(this);
    this.c = null;
    this.g = b;
    this.a = [];
    if (a > this.g) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
    for (b = 0; b < a; b++) this.a.push(this.b())
};
w(RA, Hg);
var SA = function(a, b) {
        a.c = b
    },
    UA = function(a, b) {
        a.a.length < a.g ? a.a.push(b) : TA(b)
    };
RA.prototype.b = function() {
    return this.c ? this.c() : {}
};
var TA = function(a) {
    if (Ma(a))
        if (La(a.La)) a.La();
        else
            for (var b in a) delete a[b]
};
RA.prototype.W = function() {
    RA.D.W.call(this);
    for (var a = this.a; a.length;) TA(a.pop());
    delete this.a
};
var XA = function() {
    this.a = [];
    this.b = new sj;
    this.L = this.K = this.R = this.m = 0;
    this.c = new sj;
    this.o = this.C = 0;
    this.Fa = 1;
    this.g = new RA(0, 4E3);
    this.g.b = function() {
        return new VA
    };
    this.G = new RA(0, 50);
    this.G.b = function() {
        return new WA
    };
    var a = this;
    this.w = new RA(0, 2E3);
    SA(this.w, function() {
        return a.Fa++
    });
    this.h = {}
};
XA.prototype.F = Vi("goog.debug.Trace");
var WA = function() {
    this.gh = this.time = this.count = 0
};
WA.prototype.toString = function() {
    var a = [];
    a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
    this.gh && a.push(" [VarAlloc = ", this.gh, "]");
    return a.join("")
};
var VA = function() {},
    $A = function(a, b, c, d) {
        var e = []; - 1 == c ? e.push("    ") : e.push(YA(a.b - c));
        e.push(" ", ZA(a.b - b));
        0 == a.a ? e.push(" Start        ") : 1 == a.a ? (e.push(" Done "), e.push(YA(a.h - a.startTime), " ms ")) : e.push(" Comment      ");
        e.push(d, a);
        0 < a.g && e.push("[VarAlloc ", a.g, "] ");
        return e.join("")
    };
VA.prototype.toString = function() {
    return null == this.type ? x(this.c) : "[" + this.type + "] " + this.c
};
var aB = {
    Oq: !0
};
XA.prototype.Ug = function() {
    this.h = {}
};
var bB = function(a) {
    a.h.stop && qj(a.b, function(b) {
        this.h.stop(b.id, aB)
    }, a);
    a.b.Qc()
};
XA.prototype.reset = function() {
    bB(this);
    for (var a = 0; a < this.a.length; a++) {
        var b = this.a[a];
        b.id ? vj(this.b, b.id) || (UA(this.w, b.id), UA(this.g, b)) : UA(this.g, b)
    }
    this.a.length = 0;
    this.m = Ua();
    this.o = this.C = this.L = this.K = this.R = 0;
    a = this.c.Cb();
    for (b = 0; b < a.length; b++) {
        var c = this.c.get(a[b]);
        c.count = 0;
        c.time = 0;
        c.gh = 0;
        UA(this.G, c)
    }
    this.c.Qc()
};
XA.prototype.toString = function() {
    for (var a = [], b = -1, c = [], d = 0; d < this.a.length; d++) {
        var e = this.a[d];
        1 == e.a && c.pop();
        a.push(" ", $A(e, this.m, b, c.join("")));
        b = e.b;
        a.push("\n");
        0 == e.a && c.push("|  ")
    }
    if (0 != this.b.og()) {
        var f = Ua();
        a.push(" Unstopped timers:\n");
        qj(this.b, function(g) {
            a.push("  ", g, " (", f - g.startTime, " ms, started at ", ZA(g.startTime), ")\n")
        })
    }
    b = this.c.Cb();
    for (d = 0; d < b.length; d++) c = this.c.get(b[d]), 1 < c.count && a.push(" TOTAL ", c, "\n");
    a.push("Total tracers created ", this.C, "\n", "Total comments created ",
        this.o, "\n", "Overhead start: ", this.R, " ms\n", "Overhead end: ", this.K, " ms\n", "Overhead comment: ", this.L, " ms\n");
    return a.join("")
};
var YA = function(a) {
        a = Math.round(a);
        var b = "";
        1E3 > a && (b = " ");
        100 > a && (b = "  ");
        10 > a && (b = "   ");
        return b + a
    },
    ZA = function(a) {
        a = Math.round(a);
        return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
    };
new XA;
var cB = function() {};
cB.prototype.stopPropagation = function() {
    this.g = !0;
    this.h()
};
cB.prototype.c = function() {
    return this.g || !1
};
var dB = function(a) {
    this.a = [];
    this.name = a
};
dB.prototype.c = Vi("wireless.events.browser.Dispatcher");
dB.prototype.dispatchEvent = function(a, b) {
    var c = "*" == a.a.charAt(0),
        d;
    this.handleEvent(a, b) && (d = !0);
    for (var e = (b || "") + this.name + "->", f = -1, g;
        (!d || c) && (g = this.a[++f]);) d = g.dispatchEvent(a, e) || d;
    d || b || Xi(this.c, "Event not handled: " + a.a + " type: " + (a ? a.type : "none") + " customArg: " + a.b);
    return d
};
var eB = function(a, b) {
    dB.call(this, b);
    this.g = a;
    this.b = [];
    this.C = {}
};
w(eB, dB);
var fB = new eB(void 0, "root");
za("_e", function(a, b, c, d) {
    a = a || {};
    a.a = b;
    a.b = c;
    a.o = d || a.currentTarget || null;
    a.h = a.stopPropagation;
    a.stopPropagation = cB.prototype.stopPropagation;
    a.c = cB.prototype.c;
    return fB.dispatchEvent(a)
});
var gB = function(a, b, c) {
    x(b, a.name + " - registerHandler: Missing controlType.");
    x(c, a.name + " - registerHandler: Missing handlerFunc. controlType: " + b);
    x(!a.C[b], a.name + " - registerHandler: Handler already defined. controlType: " + b);
    c = a.b.push(c, a.g) - 2;
    a.C[b] = c
};
eB.prototype.handleEvent = function(a, b) {
    var c = this.C[a.a];
    if (p(c)) return hB(this, a, a.a, a.b, b), this.b[c].call(this.b[c + 1], a, a.a, a.b), !0
};
var hB = function(a, b, c, d, e) {
    ")" == c.slice(-1) || Yi(a.c, v(function() {
        var f = "";
        b && (f = "BrowserType=" + b.type, b.which && (f += " key=" + b.which), f = " (" + f + ")");
        var g = "";
        p(d) && (g = " customArg: " + d);
        return (e || "") + this.name + " handling event: " + c + g + f
    }, a))
};
var iB = function(a, b) {
        this.Code = a;
        this.Name = b
    },
    mB = function(a, b, c) {
        this.ra = b.ra + "_" + a.Code;
        "rcnt" == c ? this.ra += "_r" : "srch" == c && (this.ra += "_s");
        jB[this.ra] = this;
        this.b = b;
        this.a = c;
        this.Ya = a.Name;
        this.code = a.Code;
        this.v = Tp(kB, {
            id: this.ra,
            name: a.Name,
            code: a.Code,
            ke: lB
        })
    },
    nB = {},
    oB = (nB.rglr = 0, nB.rcnt = 2, nB.srch = 3, nB);
mB.prototype.j = function() {
    return this.v
};
mB.prototype.le = function(a) {
    this.b.le(this.Ya, this.code, this.a, a)
};
var jB = {},
    pB = function(a) {
        if (a && a.parentNode && a.parentNode.children)
            for (var b = 0, c = 0, d = a.parentNode; b < d.children.length; b++) {
                var e = d.children[b];
                if (uq(e) && Mp(e, "language_list_item_wrapper")) {
                    if (a == e) return c;
                    c++
                }
            }
        return -1
    },
    qB = function(a, b, c) {
        (b = jB[c]) && b.le(pB(a.currentTarget))
    },
    rB = null,
    lB = QA("changeLanguage"),
    sB = QA("searchEdited"),
    wB = function(a, b) {
        Hg.call(this);
        this.a = [];
        this.c = [];
        this.g = [];
        this.ra = a;
        this.C = null;
        this.L = [];
        this.sa = new K;
        this.v = F("DIV", "language-list");
        this.h = b;
        this.o = Tp(tB, {
            ke: sB,
            em: this.ra,
            fm: this.h.o
        });
        bg(this.v, this.o);
        W(this.o, !1);
        this.G = new xs;
        this.G.ia(D("back-image-black", this.o));
        this.G.qd(this.h.b);
        Er(this.G, this.h.b);
        H(this.G, "action", this.ba, !1, this);
        if (b = D("clear-image-black", this.o)) this.N = new xs, this.N.ia(b), this.N.qd(this.h.a), Er(this.N, this.h.a), H(this.N, "action", this.X, !1, this), W(b, !1);
        this.m = F("DIV", "language-list-unfiltered-langs-" + this.ra);
        this.aa = F("DIV", "language_list_languages language_list_" + a);
        bg(this.aa, this.m);
        bg(this.v, this.aa);
        this.b = F("DIV", "language_list_languages language_list_" +
            a);
        bg(this.v, this.b);
        W(this.b, !1);
        this.T = "";
        this.w = uB(this.h.h, this.m);
        W(this.w, !1);
        this.Ca = uB(this.h.c, this.m);
        vB[this.ra] = this;
        this.ya = 0;
        this.F = L.M();
        this.Na = "";
        this.R = {}
    };
w(wB, Hg);
var vB = {},
    CA = function(a, b, c) {
        H(a.sa, "returned", b, !1, c)
    },
    LA = function(a, b) {
        for (var c = 0; c < a.a.length; c++)
            if (a.a[c].code === b) {
                null != a.C && (a.C.setAttribute("aria-label", a.a[c].Ya), G(a.C, a.a[c].Ya));
                a.V(a.a[c].Ya, a.a[c].code);
                a.T = b;
                break
            }
    };
wB.prototype.Z = function() {
    return this.T
};
var yB = function(a, b, c) {
        xB(vB[c], (new Tg(a)).target.value)
    },
    xB = function(a, b) {
        var c = D("clear-image-black", a.o);
        a.Na = b;
        if ("" === b) W(a.m.parentElement, !0), W(a.b, !1), c && W(c, !1);
        else
            for (W(a.m.parentElement, !1), W(a.b, !0), c && W(c, !0), a = ig(a.b), c = 0; c < a.length; c++) {
                var d = a[c],
                    e = b,
                    f = Ag(d),
                    g = 0 == zc(e, f.substr(0, e.length));
                W(d, g);
                d = D("language_list_item", d);
                d.innerHTML = f;
                g && (e = f.substr(0, e.length), f = f.replace(e, "<b>" + e + "</b>"), d.innerHTML = f)
            }
    };
wB.prototype.le = function(a, b, c, d) {
    LA(this, b);
    mm(this.F, "sl_list" == this.ra, oB[c], b, d, "srch" == c ? this.Na : "");
    this.R.ct = (Ua() - this.ya).toString();
    this.R.stp = c;
    this.close()
};
wB.prototype.V = function(a, b) {
    if ("auto" != b) {
        a = new iB(b, a);
        for (var c = 0; c < this.c.length; c++)
            if (this.c[c].code === b) {
                zB(this, c, 1);
                break
            }
        b = new mB(a, this, "rcnt");
        gg(this.w, b.j(), 1);
        this.c.splice(0, 0, b);
        5 < this.c.length && zB(this, 5, this.c.length - 5);
        W(this.w, !0)
    }
};
var BB = function(a) {
    a.ya = Ua();
    a.ba();
    AB(a, a.a);
    AB(a, a.c);
    AB(a, a.g);
    for (var b = 0; b < a.a.length; b++) {
        var c = a.a[b],
            d = a.L.includes(c.code);
        V(c.j(), "item-emphasized", d)
    }
    lm(a.F, "sl_list" === a.ra ? 82 : 83)
};
wB.prototype.close = function() {
    sh(this.sa, "returned")
};
var AB = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            V(b[c].j(), "item-selected", b[c].code === a.T);
            var d = D("language_list_item", b[c].j()),
                e = "";
            b[c].code === a.T && (e = a.h.g.replace("%1$s", b[c].Ya));
            d.setAttribute("aria-label", e)
        }
    },
    zB = function(a, b, c) {
        for (var d = b; d < b + c; d++) hg(a.c[d].j());
        a.c.splice(b, c);
        W(a.w, 0 < a.c.length)
    },
    DB = function(a, b) {
        zB(a, 0, a.c.length);
        W(a.w, 0 < b.length);
        for (var c = 0; c < b.length && 5 > c; c++) {
            for (var d = new iB(b[c], ""), e = 0; e < a.a.length; e++) a.a[e].code === b[c] && (d.Name = a.a[e].Ya);
            d = CB(a, d, a.w, "rcnt");
            a.c.push(d)
        }
        a.L = b
    },
    FB = function(a) {
        W(a.o, !0);
        a.X();
        EB(a).focus()
    },
    GB = function(a) {
        !uq(a.o) && FB(a)
    };
wB.prototype.ba = function() {
    this.X();
    W(this.o, !1)
};
wB.prototype.setVisible = function(a) {
    W(this.v, a)
};
wB.prototype.isVisible = function() {
    return uq(this.v)
};
wB.prototype.X = function() {
    EB(this).value = "";
    xB(this, "")
};
var EB = function(a) {
        return fb(a.v.querySelector("#" + a.ra + "-search-box"))
    },
    CB = function(a, b, c, d) {
        d = new mB(b, a, d);
        "auto" === b.Code ? gg(a.m, d.j(), 0) : bg(c, d.j());
        return d
    },
    uB = function(a, b) {
        a = Tp(HB, {
            text: a
        });
        bg(b, a);
        return a
    };
wB.prototype.K = function(a) {
    for (var b = 0; b < this.a.length; b++) hg(this.a[b].j());
    for (b = 0; b < this.g.length; b++) hg(this.g[b].j());
    this.a = [];
    this.g = [];
    if (null != a)
        for (b = 0; b < a.length; b++) {
            var c = CB(this, a[b], this.Ca, "rglr");
            this.a.push(c);
            "auto" != a[b].Code && (c = CB(this, a[b], this.b, "srch"), this.g.push(c))
        }
};
wB.prototype.W = function() {
    wB.D.W.call(this)
};
wB.prototype.j = function() {
    return this.v
};
var IB = function(a) {
    this.a = a
};
IB.prototype.sb = function() {
    return null
};
IB.prototype.Va = function() {
    return this.a
};
var JB = {
        "* ARIA-CHECKED": !0,
        "* ARIA-COLCOUNT": !0,
        "* ARIA-COLINDEX": !0,
        "* ARIA-DESCRIBEDBY": !0,
        "* ARIA-DISABLED": !0,
        "* ARIA-GOOG-EDITABLE": !0,
        "* ARIA-LABEL": !0,
        "* ARIA-LABELLEDBY": !0,
        "* ARIA-MULTILINE": !0,
        "* ARIA-MULTISELECTABLE": !0,
        "* ARIA-ORIENTATION": !0,
        "* ARIA-PLACEHOLDER": !0,
        "* ARIA-READONLY": !0,
        "* ARIA-REQUIRED": !0,
        "* ARIA-ROLEDESCRIPTION": !0,
        "* ARIA-ROWCOUNT": !0,
        "* ARIA-ROWINDEX": !0,
        "* ARIA-SELECTED": !0,
        "* ABBR": !0,
        "* ACCEPT": !0,
        "* ACCESSKEY": !0,
        "* ALIGN": !0,
        "* ALT": !0,
        "* AUTOCOMPLETE": !0,
        "* AXIS": !0,
        "* BGCOLOR": !0,
        "* BORDER": !0,
        "* CELLPADDING": !0,
        "* CELLSPACING": !0,
        "* CHAROFF": !0,
        "* CHAR": !0,
        "* CHECKED": !0,
        "* CLEAR": !0,
        "* COLOR": !0,
        "* COLSPAN": !0,
        "* COLS": !0,
        "* COMPACT": !0,
        "* COORDS": !0,
        "* DATETIME": !0,
        "* DIR": !0,
        "* DISABLED": !0,
        "* ENCTYPE": !0,
        "* FACE": !0,
        "* FRAME": !0,
        "* HEIGHT": !0,
        "* HREFLANG": !0,
        "* HSPACE": !0,
        "* ISMAP": !0,
        "* LABEL": !0,
        "* LANG": !0,
        "* MAX": !0,
        "* MAXLENGTH": !0,
        "* METHOD": !0,
        "* MULTIPLE": !0,
        "* NOHREF": !0,
        "* NOSHADE": !0,
        "* NOWRAP": !0,
        "* OPEN": !0,
        "* READONLY": !0,
        "* REQUIRED": !0,
        "* REL": !0,
        "* REV": !0,
        "* ROLE": !0,
        "* ROWSPAN": !0,
        "* ROWS": !0,
        "* RULES": !0,
        "* SCOPE": !0,
        "* SELECTED": !0,
        "* SHAPE": !0,
        "* SIZE": !0,
        "* SPAN": !0,
        "* START": !0,
        "* SUMMARY": !0,
        "* TABINDEX": !0,
        "* TITLE": !0,
        "* TYPE": !0,
        "* VALIGN": !0,
        "* VALUE": !0,
        "* VSPACE": !0,
        "* WIDTH": !0
    },
    KB = {
        "* USEMAP": !0,
        "* ACTION": !0,
        "* CITE": !0,
        "* HREF": !0,
        "* LONGDESC": !0,
        "* SRC": !0,
        "LINK HREF": !0,
        "* FOR": !0,
        "* HEADERS": !0,
        "* NAME": !0,
        "A TARGET": !0,
        "* CLASS": !0,
        "* ID": !0,
        "* STYLE": !0
    };
var LB = {};

function MB(a) {
    if (B && !Re(9)) return [0, 0, 0, 0];
    var b = LB.hasOwnProperty(a) ? LB[a] : null;
    if (b) return b;
    65536 < Object.keys(LB).length && (LB = {});
    var c = [0, 0, 0, 0];
    b = NB(a, /\\[0-9A-Fa-f]{6}\s?/g);
    b = NB(b, /\\[0-9A-Fa-f]{1,5}\s/g);
    b = NB(b, /\\./g);
    b = b.replace(/:not\(([^\)]*)\)/g, "     $1 ");
    b = b.replace(/{[^]*/gm, "");
    b = OB(b, c, /(\[[^\]]+\])/g, 2);
    b = OB(b, c, /(#[^\#\s\+>~\.\[:]+)/g, 1);
    b = OB(b, c, /(\.[^\s\+>~\.\[:]+)/g, 2);
    b = OB(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
    b = OB(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
    b = OB(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
    b = b.replace(/[\*\s\+>~]/g, " ");
    b = b.replace(/[#\.]/g, " ");
    OB(b, c, /([^\s\+>~\.\[:]+)/g, 3);
    b = c;
    return LB[a] = b
}

function OB(a, b, c, d) {
    return a.replace(c, function(e) {
        b[d] += 1;
        return Array(e.length + 1).join(" ")
    })
}

function NB(a, b) {
    return a.replace(b, function(c) {
        return Array(c.length + 1).join("A")
    })
};
var PB = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0
    },
    QB = /[\n\f\r"'()*<>]/g,
    RB = {
        "\n": "%0a",
        "\f": "%0c",
        "\r": "%0d",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "*": "%2a",
        "<": "%3c",
        ">": "%3e"
    };

function SB(a) {
    return x(RB[a])
}
var TB = function(a, b, c) {
    b = yc(b);
    if ("" == b) return null;
    if (0 == zc("url(", b.substr(0, 4))) {
        if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c) a = null;
        else {
            a: {
                b = b.substring(4, b.length - 1);
                for (var d = 0; 2 > d; d++) {
                    var e = "\"'".charAt(d);
                    if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                        b = b.substring(1, b.length - 1);
                        break a
                    }
                }
            }
            a = c ? (a = c(b, a)) && "about:invalid#zClosurez" != Pc(a) ? 'url("' + Pc(a).replace(QB, SB) + '")' : null : null
        }
        return a
    }
    if (0 < b.indexOf("(")) {
        if (/"|'/.test(b)) return null;
        for (a = /([\-\w]+)\(/g; c =
            a.exec(b);)
            if (!(c[1] in PB)) return null
    }
    return b
};

function UB(a, b) {
    a = n[a];
    return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
}

function VB(a, b) {
    return (a = n[a]) && a.prototype && a.prototype[b] || null
}
var WB = UB("Element", "attributes") || UB("Node", "attributes"),
    XB = VB("Element", "hasAttribute"),
    YB = VB("Element", "getAttribute"),
    ZB = VB("Element", "setAttribute"),
    $B = VB("Element", "removeAttribute"),
    aC = VB("Element", "getElementsByTagName"),
    bC = VB("Element", "matches") || VB("Element", "msMatchesSelector"),
    cC = UB("Node", "nodeName"),
    dC = UB("Node", "nodeType"),
    eC = UB("Node", "parentNode"),
    fC = UB("HTMLElement", "style") || UB("Element", "style"),
    gC = UB("HTMLStyleElement", "sheet"),
    hC = VB("CSSStyleDeclaration", "getPropertyValue"),
    iC = VB("CSSStyleDeclaration", "setProperty");

function jC(a, b, c, d) {
    if (a) return a.apply(b);
    a = b[c];
    if (!d(a)) throw Error("Clobbering detected");
    return a
}

function kC(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (B && 10 > document.documentMode) {
        if (!b[c].call) throw Error("IE Clobbering detected");
    } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
    return b[c].apply(b, d)
}

function lC(a) {
    return jC(WB, a, "attributes", function(b) {
        return b instanceof NamedNodeMap
    })
}

function mC(a, b, c) {
    try {
        kC(ZB, a, "setAttribute", [b, c])
    } catch (d) {
        if (-1 == d.message.indexOf("A security problem occurred")) throw d;
    }
}

function nC(a) {
    oC(a);
    return jC(fC, a, "style", function(b) {
        return b instanceof CSSStyleDeclaration
    })
}

function oC(a) {
    if (!(a instanceof HTMLElement)) throw Error("Not an HTMLElement");
}

function pC(a) {
    oC(a);
    return jC(gC, a, "sheet", function(b) {
        return b instanceof CSSStyleSheet
    })
}

function qC(a) {
    return jC(cC, a, "nodeName", function(b) {
        return "string" == typeof b
    })
}

function rC(a) {
    return jC(dC, a, "nodeType", function(b) {
        return "number" == typeof b
    })
}

function sC(a) {
    return jC(eC, a, "parentNode", function(b) {
        return !(b && "string" == typeof b.name && b.name && "parentnode" == b.name.toLowerCase())
    })
}

function tC(a, b) {
    return kC(hC, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) || ""
}

function uC(a, b, c) {
    kC(iC, a, a.setProperty ? "setProperty" : "setAttribute", [b, c])
};
var vC = B && 10 > document.documentMode ? null : /\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g,
    wC = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    },
    zC = function(a, b, c) {
        var d = [];
        a = xC(yb(a.cssRules));
        y(a, function(e) {
            if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
            if (!(b && B && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
                var f = b ? e.selectorText.replace(vC, "#" + b + " $1") : e.selectorText;
                d.push(md(f, yC(e.style, c)))
            }
        });
        return od(d)
    },
    xC = function(a) {
        return kb(a, function(b) {
            return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
        })
    },
    BC = function(a, b, c) {
        a = AC("<style>" + a + "</style>");
        return null == a || null == a.sheet ? pd : zC(a.sheet, void 0 != b ? b : null, c)
    },
    AC = function(a) {
        if (B && !Re(10) || "function" != typeof n.DOMParser) return null;
        a = Pd(ec("Never attached to DOM."), "<html><head></head><body>" + a + "</body></html>");
        return (new DOMParser).parseFromString(Bd(a), "text/html").body.children[0]
    },
    yC = function(a, b) {
        if (!a) return $c;
        var c = document.createElement("div").style,
            d = CC(a);
        y(d, function(e) {
            var f = Ae && e in wC ? e : e.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            vc(f, "--") || vc(f, "var") || (e = tC(a, e), e = TB(f, e, b), null != e && uC(c, f, e))
        });
        return Qd(c.cssText || "")
    },
    EC = function(a) {
        var b = Array.from(kC(aC, a, "getElementsByTagName", ["STYLE"])),
            c = Cb(b, function(e) {
                return yb(pC(e).cssRules)
            });
        c = xC(c);
        c.sort(function(e, f) {
            e = MB(e.selectorText);
            a: {
                f = MB(f.selectorText);
                for (var g = Math.min(e.length, f.length), h = 0; h < g; h++) {
                    var l = e[h];
                    var m = f[h];
                    l = l > m ? 1 : l <
                        m ? -1 : 0;
                    if (0 != l) {
                        e = l;
                        break a
                    }
                }
                e = e.length;
                f = f.length;
                e = e > f ? 1 : e < f ? -1 : 0
            }
            return -e
        });
        a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
        for (var d; d = a.nextNode();) y(c, function(e) {
            kC(bC, d, d.matches ? "matches" : "msMatchesSelector", [e.selectorText]) && e.style && DC(d, e.style)
        });
        y(b, hg)
    },
    DC = function(a, b) {
        var c = CC(a.style),
            d = CC(b);
        y(d, function(e) {
            if (!(0 <= c.indexOf(e))) {
                var f = tC(b, e);
                uC(a.style, e, f)
            }
        })
    },
    CC = function(a) {
        Ka(a) ? a = yb(a) : (a = Pb(a), vb(a, "cssText"));
        return a
    };
var FC = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]"),
    GC = 0,
    HC = function() {
        this.c = [];
        this.b = [];
        this.a = "data-elementweakmap-index-" + GC++
    };
HC.prototype.set = function(a, b) {
    if (kC(XB, a, "hasAttribute", [this.a])) {
        var c = parseInt(kC(YB, a, "getAttribute", [this.a]) || null, 10);
        this.b[c] = b
    } else c = this.b.push(b) - 1, mC(a, this.a, c.toString()), this.c.push(a);
    return this
};
HC.prototype.get = function(a) {
    if (kC(XB, a, "hasAttribute", [this.a])) return a = parseInt(kC(YB, a, "getAttribute", [this.a]) || null, 10), this.b[a]
};
HC.prototype.clear = function() {
    this.c.forEach(function(a) {
        kC($B, a, "removeAttribute", [this.a])
    }, this);
    this.c = [];
    this.b = []
};
var IC = Vi("goog.html.sanitizer.SafeDomTreeProcessor"),
    JC = !B || Te(10),
    KC = !B || null == document.documentMode,
    LC = function() {};
var MC = {
    APPLET: !0,
    AUDIO: !0,
    BASE: !0,
    BGSOUND: !0,
    EMBED: !0,
    FORM: !0,
    IFRAME: !0,
    ISINDEX: !0,
    KEYGEN: !0,
    LAYER: !0,
    LINK: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    SVG: !0,
    STYLE: !0,
    TEMPLATE: !0,
    VIDEO: !0
};
var NC = {
    A: !0,
    ABBR: !0,
    ACRONYM: !0,
    ADDRESS: !0,
    AREA: !0,
    ARTICLE: !0,
    ASIDE: !0,
    B: !0,
    BDI: !0,
    BDO: !0,
    BIG: !0,
    BLOCKQUOTE: !0,
    BR: !0,
    BUTTON: !0,
    CAPTION: !0,
    CENTER: !0,
    CITE: !0,
    CODE: !0,
    COL: !0,
    COLGROUP: !0,
    DATA: !0,
    DATALIST: !0,
    DD: !0,
    DEL: !0,
    DETAILS: !0,
    DFN: !0,
    DIALOG: !0,
    DIR: !0,
    DIV: !0,
    DL: !0,
    DT: !0,
    EM: !0,
    FIELDSET: !0,
    FIGCAPTION: !0,
    FIGURE: !0,
    FONT: !0,
    FOOTER: !0,
    FORM: !0,
    H1: !0,
    H2: !0,
    H3: !0,
    H4: !0,
    H5: !0,
    H6: !0,
    HEADER: !0,
    HGROUP: !0,
    HR: !0,
    I: !0,
    IMG: !0,
    INPUT: !0,
    INS: !0,
    KBD: !0,
    LABEL: !0,
    LEGEND: !0,
    LI: !0,
    MAIN: !0,
    MAP: !0,
    MARK: !0,
    MENU: !0,
    METER: !0,
    NAV: !0,
    NOSCRIPT: !0,
    OL: !0,
    OPTGROUP: !0,
    OPTION: !0,
    OUTPUT: !0,
    P: !0,
    PRE: !0,
    PROGRESS: !0,
    Q: !0,
    S: !0,
    SAMP: !0,
    SECTION: !0,
    SELECT: !0,
    SMALL: !0,
    SOURCE: !0,
    SPAN: !0,
    STRIKE: !0,
    STRONG: !0,
    STYLE: !0,
    SUB: !0,
    SUMMARY: !0,
    SUP: !0,
    TABLE: !0,
    TBODY: !0,
    TD: !0,
    TEXTAREA: !0,
    TFOOT: !0,
    TH: !0,
    THEAD: !0,
    TIME: !0,
    TR: !0,
    TT: !0,
    U: !0,
    UL: !0,
    VAR: !0,
    WBR: !0
};
var RC = function(a) {
    a = a || new OC;
    PC(a);
    this.a = Vb(a.a);
    this.g = Vb(a.C);
    this.h = Vb(a.L);
    this.w = a.w;
    y(a.o, function(b) {
        if (!vc(b, "data-")) throw new Xa('Only "data-" attributes allowed, got: %s.', [b]);
        if (vc(b, "data-sanitizer-")) throw new Xa('Attributes with "%s" prefix are not allowed, got: %s.', ["data-sanitizer-", b]);
        this.a["* " + b.toUpperCase()] = QC
    }, this);
    this.m = a.c;
    this.c = a.G;
    this.b = null;
    this.o = a.m
};
w(RC, LC);
var SC = function(a) {
        return function(b, c) {
            return (b = a(yc(b), c)) && "about:invalid#zClosurez" != Pc(b) ? Pc(b) : null
        }
    },
    OC = function() {
        this.a = {};
        y([JB, KB], function(a) {
            y(Pb(a), function(b) {
                this.a[b] = QC
            }, this)
        }, this);
        this.b = {};
        this.o = [];
        this.C = Vb(MC);
        this.L = Vb(NC);
        this.w = !1;
        this.Fa = Uc;
        this.R = this.h = this.K = this.c = Jb;
        this.G = null;
        this.g = this.m = !1
    },
    TC = function(a, b) {
        return function(c, d, e, f) {
            c = a(c, d, e, f);
            return null == c ? null : b(c, d, e, f)
        }
    },
    UC = function(a, b, c, d) {
        a[c] && !b[c] && (a[c] = TC(a[c], d))
    },
    PC = function(a) {
        if (a.g) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
        UC(a.a, a.b, "* USEMAP", VC);
        var b = SC(a.Fa);
        y(["* ACTION", "* CITE", "* HREF"], function(d) {
            UC(this.a, this.b, d, b)
        }, a);
        var c = SC(a.c);
        y(["* LONGDESC", "* SRC", "LINK HREF"], function(d) {
            UC(this.a, this.b, d, c)
        }, a);
        y(["* FOR", "* HEADERS", "* NAME"], function(d) {
            UC(this.a, this.b, d, Ta(WC, this.K))
        }, a);
        UC(a.a, a.b, "A TARGET", Ta(XC, ["_blank", "_self"]));
        UC(a.a, a.b, "* CLASS", Ta(YC, a.h));
        UC(a.a, a.b, "* ID", Ta(ZC, a.h));
        UC(a.a, a.b, "* STYLE", Ta(a.R, c));
        a.g = !0
    },
    $C = function(a, b) {
        a || (a = "*");
        return (a + " " + b).toUpperCase()
    },
    QC = function(a) {
        return yc(a)
    },
    XC = function(a, b) {
        b = yc(b);
        return sb(a, b.toLowerCase()) ? b : null
    },
    VC = function(a) {
        return (a = yc(a)) && "#" == a.charAt(0) ? a : null
    },
    WC = function(a, b, c) {
        return a(yc(b), c)
    },
    YC = function(a, b, c) {
        b = b.split(/(?:\s+)/);
        for (var d = [], e = 0; e < b.length; e++) {
            var f = a(b[e], c);
            f && d.push(f)
        }
        return 0 == d.length ? null : d.join(" ")
    },
    ZC = function(a, b, c) {
        return a(yc(b), c)
    },
    aD = function(a, b) {
        var c = b.data;
        (b = sC(b)) && "style" == qC(b).toLowerCase() && !("STYLE" in a.g) && "STYLE" in a.h && (c = nd(BC(c, a.b, v(function(d, e) {
            return this.m(d, {
                Aq: e
            })
        }, a))));
        return document.createTextNode(c)
    },
    bD = function(a) {
        var b = new OC;
        b = new RC(b);
        var c = !("STYLE" in b.g) && "STYLE" in b.h;
        c = "*" == b.c && c ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Ua()).toString(36)) : b.c;
        b.b = c;
        if (JC) {
            c = a;
            if (JC) {
                a = Yf("SPAN");
                b.b && "*" == b.c && (a.id = b.b);
                b.o && (c = AC("<div>" + c + "</div>"), x(c, "Older browsers that don't support inert parsing should not get to this branch"), EC(c), c = c.innerHTML);
                c = Pd(ec("Never attached to DOM."), c);
                var d = document.createElement("template");
                if (KC && "content" in d) Td(d, c), d = d.content;
                else {
                    var e = document.implementation.createHTMLDocument("x");
                    d = e.body;
                    Td(e.body, c)
                }
                c = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
                for (d = FC ? new WeakMap : new HC; e = c.nextNode();) {
                    c: {
                        var f = b;
                        var g = e;
                        var h = rC(g);
                        switch (h) {
                            case 3:
                                g = aD(f, g);
                                break c;
                            case 1:
                                h = g;
                                1 == rC(h) || Za("Expected Node of type Element but got Node of type %s", rC(h));
                                g = f;
                                f = h;
                                if ("TEMPLATE" == qC(f).toUpperCase()) g = null;
                                else {
                                    h = qC(f).toUpperCase();
                                    if (h in g.g) var l = null;
                                    else g.h[h] ? l = document.createElement(h) : (l = Yf("SPAN"), g.w && mC(l, "data-sanitizer-original-tag", h.toLowerCase()));
                                    if (l) {
                                        var m = l,
                                            q = lC(f);
                                        if (null != q)
                                            for (var r = 0; h = q[r]; r++)
                                                if (h.specified) {
                                                    var u = g;
                                                    var A = f,
                                                        Q = h,
                                                        M = Q.name;
                                                    if (vc(M, "data-sanitizer-")) u = null;
                                                    else {
                                                        var Oa = qC(A);
                                                        Q = Q.value;
                                                        var Hb = {
                                                                tagName: yc(Oa).toLowerCase(),
                                                                attributeName: yc(M).toLowerCase()
                                                            },
                                                            Ia = {
                                                                $j: void 0
                                                            };
                                                        "style" == Hb.attributeName && (Ia.$j = nC(A));
                                                        A = $C(Oa, M);
                                                        A in u.a ? (u = u.a[A], u = u(Q, Hb, Ia)) : (M = $C(null, M), M in u.a ? (u = u.a[M], u = u(Q, Hb, Ia)) : u = null)
                                                    }
                                                    null ===
                                                        u || mC(m, h.name, u)
                                                }
                                        g = l
                                    } else g = null
                                }
                                break c;
                            default:
                                Xi(IC, "Dropping unknown node type: " + h), g = null
                        }
                    }
                    if (g) {
                        if (1 == rC(g) && d.set(e, g), e = sC(e), f = !1, e) h = rC(e), l = qC(e).toLowerCase(), m = sC(e), 11 != h || m ? "body" == l && m && (h = sC(m)) && !sC(h) && (f = !0) : f = !0, h = null, f || !e ? h = a : 1 == rC(e) && (h = d.get(e)), h.content && (h = h.content), h.appendChild(g)
                    } else dg(e)
                }
                d.clear && d.clear();
                b = a
            } else b = Yf("SPAN");
            0 < lC(b).length && (a = Yf("SPAN"), a.appendChild(b), b = a);
            b = (new XMLSerializer).serializeToString(b);
            b = b.slice(b.indexOf(">") + 1, b.lastIndexOf("</"))
        } else b =
            "";
        return Pd(ec("Output of HTML sanitizer"), b)
    };
var cD = function() {};
w(cD, ir);
Ga(cD);
cD.prototype.Vc = function() {
    return "menuitem"
};
cD.prototype.ub = function(a) {
    var b = bD(a.jd),
        c = $f(document, b);
    b = c.querySelector("div");
    if (!b) throw Error("Invalid item label");
    b.innerHTML = a.Va();
    Np(b, ["gt-is-sp", "gt-is-cont"]);
    b = ["DIV", lr(this, a)];
    var d = F("DIV");
    T(d, "gt-is-ld");
    c = F("DIV", null, c);
    T(c, "gt-is-lb");
    b = b.concat([d, c]);
    if (a.Kb) {
        c = F("A", {
            href: "#"
        }, a.Kb);
        T(c, "gt-is-act");
        var e = new Z;
        e.ia(c);
        Uq(e, a);
        c.addEventListener("mouseup", function(f) {
            e.kb() && f.stopPropagation()
        });
        b.push(c)
    }
    b = F.apply(null, b);
    b.id = Qq(a);
    return a.v = b
};
cD.prototype.Uc = function(a) {
    return "DIV" == a.tagName
};
cD.prototype.xa = function() {
    return "gt-is-itm"
};
var dD = function(a, b, c, d, e) {
    e = void 0 === e ? "" : e;
    Z.call(this, a.Va(), c || cD.M(), d);
    this.Td = a;
    this.jd = b;
    this.Kb = e;
    this.Oa(1, !1)
};
w(dD, Z);
dD.prototype.Va = function() {
    return this.Td.Va()
};
dD.prototype.sb = function() {
    return this.Td.sb()
};
var eD = function(a) {
    Kg.call(this, a)
};
w(eD, Kg);
If(window.document);
new K;
var fD = function(a) {
        var b = a.getBoundingClientRect();
        if (B) {
            var c = nq(a);
            a = rq(a);
            b.left = c.x;
            b.right = c.x + a.width;
            b.top = c.a;
            b.bottom = c.a + a.height
        }
        return b
    },
    gD = function(a, b) {
        var c = If(a),
            d = 0;
        if (ya(b)) d = b;
        else if (B && !Re(9)) {
            if (b = c.a.selection.createRange()) try {
                var e = a.createTextRange(),
                    f = e.duplicate();
                e.moveToBookmark(b.getBookmark());
                f.setEndPoint("EndToStart", e);
                d = f.text.length
            } catch (m) {}
        } else d = a.selectionStart;
        e = "_h#" + Qa(a);
        var g = c.j(e);
        g ? c.jf(g) : g = c.b("PRE", {
            id: e
        });
        g.parentNode || c.a.body.appendChild(g);
        var h = [];
        y(a.value, function(m, q, r) {
            h.push(" " == m && q + 1 != r.length && " " == r[q + 1] ? "\u00a0" : m)
        });
        h = h.join("");
        c.appendChild(g, c.a.createTextNode(String(h.substring(0, d))));
        e = Fg(c, "SPAN");
        e.appendChild(c.a.createTextNode("\u200b"));
        c.appendChild(g, e);
        c.appendChild(g, c.a.createTextNode(String(h.substring(d) + " ")));
        c = Lp(a);
        y(c, function(m) {
            T(g, m)
        });
        var l = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;";
        y("font-family font-size font-weight font-style text-transform text-decoration letter-spacing word-spacing line-height text-align vertical-align direction width height margin-top margin-right margin-bottom margin-left padding-top padding-right padding-bottom padding-left border-top-width border-right-width border-bottom-width border-left-width border-top-style border-right-style border-bottom-style border-left-style overflow-x overflow-y".split(" "),
            function(m) {
                try {
                    var q;
                    (q = aq(a, m) || (a.currentStyle ? a.currentStyle[m] : null) || a.style[m]) && (l += m + ":" + q + ";")
                } catch (r) {}
            });
        g.style.cssText = l;
        c = bq(a, "overflowX");
        g.style.overflowX = c && "visible" != c ? c : "auto";
        c = bq(a, "overflowY");
        g.style.overflowY = c && "visible" != c ? c : "auto";
        g.scrollTop = a.scrollTop;
        g.scrollLeft = a.scrollLeft;
        dq(g, iq(a));
        c = fD(e);
        return "INPUT" == a.tagName.toUpperCase() ? new Df(c.left, Math.ceil(nq(a).a + rq(a).height)) : new Df(c.left, Math.ceil(c.bottom))
    };
var hD = function(a, b) {
    X.call(this, b);
    this.c = a
};
w(hD, X);
hD.prototype.b = "info";
hD.prototype.g = !1;
var iD = {
    info: "jfk-butterBar-info",
    error: "jfk-butterBar-error",
    warning: "jfk-butterBar-warning",
    promo: "jfk-butterBar-promo"
};
hD.prototype.Jb = function() {
    return this.b
};
var jD = function(a, b) {
    a.c = b;
    if (b = a.j()) {
        var c = a.a;
        c.jf(b);
        c.Oh(b, a.c)
    }
};
hD.prototype.isVisible = function() {
    var a = this.j();
    return null != a && Mp(a, "jfk-butterBar-shown")
};
hD.prototype.setVisible = function(a) {
    x(this.Ba, "setVisible must only be called after the butter bar is rendered.");
    V(this.j(), "jfk-butterBar-shown", a)
};
hD.prototype.Ma = function() {
    this.v = this.a.b("DIV", "jfk-butterBar");
    x(this.j(), "The DOM element for the butter bar cannot be null.");
    var a = this.j();
    a && (Gp(a, "live", "assertive"), Gp(a, "atomic", "true"));
    jD(this, this.c);
    this.g = this.g;
    (a = this.j()) && V(a, "jfk-butterBar-mini", this.g);
    a = this.b;
    if (this.$b()) {
        var b = this.j(),
            c = iD[a];
        U(b, iD[this.b]);
        T(b, c)
    }
    this.b = a
};
var kD = function(a, b, c) {
    K.call(this);
    this.w = c.client;
    this.g = a;
    this.a = b;
    this.o = c.Ql;
    this.X = !1;
    this.C = c.hn;
    this.R = c.Rl;
    this.ob = c.Yj || null;
    this.N = c.ma;
    this.ae = c.Sa;
    this.ya = c.wn;
    this.Le = c.Wn;
    this.K = null;
    this.T = c.Un;
    this.sa = c.hm;
    this.L = 0;
    this.m = {};
    this.Kc = c.Sj;
    this.jg = c.Dk;
    this.Fd = c.on;
    this.Pa = c.xq;
    this.ed = c.Ul;
    this.hd = !!c.Iq;
    this.Y = !!c.Sl;
    this.ba = !!c.wq;
    this.$d = c.rn || "Did you mean: <div>%1$s</div>";
    this.jd = c.Jq || "Translating <div>%1$s</div>";
    this.Zd = c.Kq || "Undo";
    this.Me = c.Nq || 500;
    a = new hD("");
    a.Ua(Jf("gt-bbar"));
    a.setVisible(!1);
    this.V = a;
    this.c = this.b = this.h = "";
    this.G = Em.M();
    "async_translate_onebox" == this.w && (this.G.o = "/translate");
    this.aa = new Hq(this);
    this.ce = new br(this.o.j());
    this.Ca = ql.M();
    this.F = L.M();
    this.na = !0;
    this.Fd && this.aa.O(this.ce, "key", this.Vb).O(this.o, "change", this.Zc);
    this.aa.O(this.a, "action", this.Za).O(this.o.j(), "blur", this.xb).O(this.o.j(), "focus", this.Wb).O(this.N, "srcLanguageUpdated", this.Na).O(this.N, "tgtLanguageUpdated", this.Na);
    null != this.R && this.aa.O(this.R, "change", this.dd)
};
w(kD, K);
kD.prototype.update = function() {
    0 != this.h.length || this.ba ? this.na && (mD(this, this.g.a[0]), this.L++, this.m[this.L] = {}, this.m[this.L][0] = Ua(), nD(this.ya, this.h, this.b, this.c, v(this.fd, this, this.h, this.b, this.c, this.L))) : lD(this)
};
var pD = function(a) {
    var b = a.a;
    b.c && b.removeChild(b.c, !0);
    b.c = null;
    oD(a, !!Xq(a.a))
};
kD.prototype.dd = function() {
    iz(this.R) && lD(this)
};
kD.prototype.Vb = function(a) {
    if (!this.a.isVisible()) return !1;
    if (27 == a.keyCode) {
        var b = qD(this.g.a);
        Jm(this.G, this.w, "is", "0", {
            q: this.h,
            sl: this.b,
            tl: this.c,
            sn: b.length,
            s: b
        });
        b = this.F;
        var c = rD(this),
            d = sD(this);
        N(b, Cm(b, 204, c, d, tD(this), [], null != this.a.h, 0));
        lD(this)
    }
    13 == a.keyCode && -1 == this.a.Ka && (b = qD(this.g.a), Jm(this.G, this.w, "is", "8", {
        q: this.h,
        sl: this.b,
        tl: this.c,
        sn: b.length,
        s: b
    }), b = this.F, c = rD(this), d = sD(this), N(b, Cm(b, 205, c, d, tD(this), [], null != this.a.h, 0)), lD(this));
    if (36 == a.keyCode || 35 == a.keyCode) return !1;
    b = this.a.bb(a);
    38 != a.keyCode && 40 != a.keyCode || -1 == this.a.Ka || (a = ax(this.a), a != this.a.c && this.o.Z() != a.Va() && (this.X = !0, ul(this.Ca, "is"), this.o.b(a.Va()), mD(this)));
    return b
};
kD.prototype.Zc = function(a) {
    this.X ? this.X = !1 : this.R && iz(this.R) ? lD(this) : "set" == a.changeType ? lD(this) : Bi(v(this.ee, this, a), 0)
};
kD.prototype.ee = function() {
    var a = Jc(this.o.Z(), "\n") ? "" : uD(this.o.Z()),
        b = this.N.a,
        c = this.N.b;
    if (a != this.h || b != this.b || c != this.c) this.h = a, this.b = b, this.c = c, this.update()
};
var uD = function(a) {
    return a.replace(/[ \n\t\r\f,\.\?!]+/g, " ").replace(/^ /, "")
};
kD.prototype.Za = function(a) {
    var b = rD(this),
        c = sD(this),
        d = tD(this),
        e = [],
        f = null != this.a.h;
    if (a.target == this.a.h) f = this.F, N(f, Cm(f, 185, b, c, d, e, !0, 1)), vD(this, "it", "translationSelected", "");
    else if (a.target == this.a.g) a = this.F, N(a, Cm(a, 181, b, c, d, e, f, 1)), vD(this, "ss", "spellingSelected", c);
    else if (a.target.getParent && a.target.getParent() === this.a.g) vD(this, "ss", "ignoreSpellingSuggestion", "");
    else if (a.target == this.a.c) a = this.F, N(a, Cm(a, 183, b, c, d, e, f, 1)), vD(this, "ls", "languageSelected", d[0]);
    else {
        a = a.target;
        a: {
            var g = this.a.b;
            for (var h = 0; h < g.length; h++)
                if (g[h] == a) {
                    g = h;
                    break a
                }
            g = -1
        }
        h = this.F;
        N(h, Cm(h, 142, b, c, d, e, f, g + 1));
        wD(this, a.Va(), "2")
    }
};
var vD = function(a, b, c, d) {
        var e = qD(a.g.a);
        Jm(a.G, a.w, "is", "b", {
            q: a.h,
            sl: a.b,
            tl: a.c,
            sn: e.length,
            s: e,
            si: 0,
            sy: b
        });
        lD(a);
        a.dispatchEvent(new eD(c, d))
    },
    wD = function(a, b, c) {
        for (var d = qD(a.g.a), e = 0, f = 0; f < d.length; f++)
            if (d[f] == b) {
                e = f + 1;
                break
            }
        Jm(a.G, a.w, "is", c, {
            q: a.h,
            sl: a.b,
            tl: a.c,
            sn: d.length,
            s: d,
            si: e
        });
        a.h = uD(b);
        ul(a.Ca, "is");
        a.o.b(b);
        "2" == c ? (lD(a), a.o.j().blur(), a.dispatchEvent("suggestionSelected")) : (a.update(), a.dispatchEvent("suggestionCopied"))
    };
kD.prototype.Na = function() {
    lD(this)
};
kD.prototype.fd = function(a, b, c, d, e) {
    this.m[d][1] = Ua();
    0 == this.h.length && !this.ba || 0 == e.length && !this.Y ? lD(this) : 0 == e.length ? xD(this) : this.b != b || this.c != c ? xD(this) : this.T ? (this.m[d][2] = Ua(), this.K && this.K.abort(), this.K = rp(this.Le, this.b, this.c, this.ae, e, v(this.Ed, this, a, d, e), "is", void 0, this.Me)) : yD(this, a, lb(e, function(f) {
        return new Bw(f)
    }), d)
};
kD.prototype.Ed = function(a, b, c, d, e) {
    null == d ? (zD(this, a, c, e), km(this.F, 145)) : (this.m[b][3] = Ua(), c.length == d.length ? yD(this, a, lb(c, function(f, g) {
        return new Bw(c[g], d[g])
    }), b) : (AD(this), km(this.F, 146), yD(this, a, lb(c, function(f) {
        return new Bw(f)
    }), b)))
};
var xD = function(a) {
        BD(a.a, []);
        a.g.a = [];
        mD(a);
        var b = a.a;
        b.o && 0 != b.o.length || oD(a, !1)
    },
    lD = function(a) {
        CD(a.ya);
        a.K && a.K.abort();
        oD(a, !1);
        for (var b = a.a, c = []; b.o && 0 != b.o.length;) c.push(b.removeChild(Yq(b, 0), !0));
        b.b = [];
        b.c = null;
        b.g = null;
        b.h = null;
        b = a.g;
        b.a = [];
        b.b = null;
        b.c = null;
        mD(a)
    },
    yD = function(a, b, c, d) {
        var e = a.m[d][1] - a.m[d][0];
        if (a.T) var f = a.m[d][3] - a.m[d][2];
        delete a.m[d];
        if (0 != c.length) {
            var g = c;
            c.length > a.sa && (g = Ab(c, 0, a.sa));
            a.g.a = g;
            c = {};
            a.T && (c.td = f);
            if (a.L > d) DD(a, !1), ED(a, e, b, g, c, !1);
            else {
                var h = [];
                y(g, function(m, q) {
                    q = new Dw(m, this.Kc, this.jg, 0 == q && !this.Y, this.T, this.ob);
                    h.push(q);
                    if ((q = this.g.b) && q.Va() == m.Va()) {
                        m = "";
                        var r = void 0 === r ? !1 : r;
                        q = qD(this.g.a);
                        sb(q, m) && (m = "");
                        m ? (m = new IB(m), r = new dD(m, r ? this.jd : this.$d, void 0, void 0, r ? this.Zd : void 0), this.g.b = m, FD(this.a, r), GD(this.a, !0), oD(this, !0)) : (this.g.b = null, FD(this.a, null), oD(this, !!Xq(this.a)))
                    }
                }, a);
                BD(a.a, h);
                6 < HD(a.g) && pD(a);
                a.Y && GD(a.a, !!a.a.h);
                mD(a, g[0]);
                if (!a.ed) {
                    d = Tf(If(document).a);
                    f = gD(a.o.j(), a.o.Z().length);
                    var l = iq(mg(a.a.j()));
                    f.x = 0;
                    f.a += d.a;
                    f.a -= l.a;
                    dq(a.a.j(), f)
                }
                a.Kc && ID(a);
                JD(a);
                oD(a, !0);
                DD(a, !0);
                ED(a, e, b, g, c, !0)
            }
        }
    },
    oD = function(a, b) {
        a.Pa || a.a.setVisible(b)
    },
    rD = function(a) {
        var b = [];
        a = a.a.b;
        for (var c = 0; c < a.length; c++) b.push([a[c].Va(), a[c].sb()]);
        return b
    },
    sD = function(a) {
        return a.a.g ? a.a.g.Va() : ""
    },
    tD = function(a) {
        a = a.a.c ? a.a.c.Td.a : "";
        return "" != a ? [a] : []
    },
    DD = function(a, b) {
        var c = a.F,
            d = rD(a),
            e = sD(a);
        N(c, Cm(c, b ? 141 : 203, d, e, tD(a), [], null != a.a.h, 0))
    },
    mD = function(a, b) {
        if (a.C)
            if (b) {
                var c = a.o.Z();
                vc(b.Va(), c) ? a.C.b(b.Va()) : a.C.b(c)
            } else a.C.b("")
    },
    ID = function(a) {
        y(a.a.b, function(b) {
            b.Qb && H(b.Qb, "action", this.Kb, !1, this)
        }, a)
    };
kD.prototype.Kb = function(a) {
    var b = this.a.b;
    y(b, function(c, d) {
        if (c.Qb == a.target) {
            var e = F("SPAN", null, (window.MSG_SUGGESTION_FLAGGED || "").replace("%1$s", c.Va())),
                f = F("SPAN", null, " ");
            c = F("A", {
                href: "javascript:;"
            }, window.MSG_DISMISS || "");
            e = F("DIV", null, e, f, c);
            jD(this.V, e);
            this.V.setVisible(!0);
            H(c, "click", this.wb, !1, this);
            KD(this, d + 1, b)
        }
    }, this)
};
var JD = function(a) {
    y(a.a.b, function(b) {
        b.kc && H(b.kc, "action", this.cb, !1, this)
    }, a)
};
kD.prototype.cb = function(a) {
    y(this.a.b, function(b) {
        b.kc == a.target && wD(this, b.Va(), "a")
    }, this)
};
kD.prototype.wb = function() {
    this.V.setVisible(!1)
};
kD.prototype.xb = function() {
    this.a && (this.hd ? (xD(this), this.na = !1) : oD(this, !1));
    this.C && this.C.b("")
};
kD.prototype.Wb = function() {
    this.na = !0
};
var KD = function(a, b, c) {
        c = lb(c, function(d) {
            return d.Va()
        });
        Jm(a.G, a.w, "is", "3", {
            q: a.h,
            sl: a.b,
            tl: a.c,
            sn: c.length,
            s: c,
            si: b
        })
    },
    qD = function(a) {
        return a ? lb(a, function(b) {
            return b ? b.Va() : ""
        }) : []
    },
    LD = function(a) {
        if (!a) return [];
        a = lb(a, function(b) {
            return b ? b.sb() : ""
        });
        return kb(a, function(b) {
            return null != b
        })
    },
    ED = function(a, b, c, d, e, f) {
        d = qD(d);
        b = {
            q: c,
            sl: a.b,
            tl: a.c,
            sd: b,
            sn: d.length,
            s: d
        };
        for (var g in e) b[g] = e[g];
        Jm(a.G, a.w, "is", f ? "1" : "7", b)
    },
    AD = function(a) {
        var b = a.g.a,
            c = qD(b);
        b = LD(b);
        Jm(a.G, a.w, "is", "6", {
            q: a.h,
            sl: a.b,
            tl: a.c,
            sn: c.length,
            s: c,
            tn: b.length,
            st: b
        })
    },
    zD = function(a, b, c, d) {
        b = {
            q: b,
            sl: a.b,
            tl: a.c,
            sn: c.length,
            s: c
        };
        d && (b.ec = d);
        Jm(a.G, a.w, "is", "9", b)
    };
var MD = function(a, b, c, d) {
    var e = ht();
    this.g = a;
    this.C = b;
    this.R = c;
    this.w = d;
    this.G = void 0 === e ? !1 : e;
    this.a = "";
    this.b = new Rr(this.K, 300, this);
    this.c = this.h = 0;
    this.m = !1;
    this.o = Em.M();
    H(this.g, "change", this.L, !1, this);
    this.b.start(void 0)
};
MD.prototype.L = function(a) {
    var b = "";
    a.changeType && (b = a.changeType);
    "paste" == b && (this.h++, Mm(this.o, "pc", 1, "accumulate"));
    "set" == b && this.c++;
    this.b.start(void 0)
};
MD.prototype.K = function() {
    if (this.C) {
        this.b.stop();
        var a = yc(this.g.Z());
        if (a != this.a)
            if (this.w && this.w()) this.b.start(300);
            else if (!(2E3 < ce(a).length && 0 == this.h && 0 == this.c) || this.G) {
            this.c = this.h = 0;
            var b = a.substring(0, this.a.length) == this.a;
            (a = this.a.substring(0, a.length) == a) || 0 != this.a.length && b && !this.m ? Mm(this.o, "otf", "2") : Mm(this.o, "otf", "1");
            this.m = a;
            this.R()
        }
    }
};
MD.prototype.reset = function(a) {
    this.b.stop();
    this.a = yc(this.g.Z());
    a || (this.m = !1)
};
var ND = function() {
    K.call(this);
    this.a = 0;
    this.endTime = this.startTime = null
};
w(ND, K);
ND.prototype.c = function() {
    this.b("begin")
};
ND.prototype.g = function() {
    this.b("end")
};
ND.prototype.b = function(a) {
    this.dispatchEvent(a)
};
var OD = function(a, b) {
        Ja(b) || (b = [b]);
        x(0 < b.length, "At least one Css3Property should be specified.");
        b = lb(b, function(c) {
            if (t(c)) return c;
            cb(c, "Expected css3 property to be an object.");
            var d = c.Fi + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
            x(c.Fi && ya(c.duration) && c.timing && ya(c.delay), "Unexpected css3 property value: %s", d);
            return d
        });
        Zp(a, "transition", b.join(","))
    },
    PD = Lb(function() {
        if (B) return Re("10.0");
        var a = Yf("DIV"),
            b = Ae ? "-webkit" : ze ? "-moz" : B ? "-ms" : we ? "-o" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        Ud(a, Jd("div", {
            style: c
        }));
        a = a.firstChild;
        x(a.nodeType == Node.ELEMENT_NODE);
        b = a.style[oe("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Yp(a, "transition")] || "")
    });
var QD = function(a, b, c, d, e) {
    ND.call(this);
    this.v = a;
    this.m = b;
    this.w = c;
    this.h = d;
    this.G = Ja(e) ? e : [e]
};
w(QD, ND);
k = QD.prototype;
k.play = function() {
    if (1 == this.a) return !1;
    this.c();
    this.b("play");
    this.startTime = Ua();
    this.a = 1;
    if (PD()) return Zp(this.v, this.w), this.o = Bi(this.Mm, void 0, this), !0;
    this.sg(!1);
    return !1
};
k.Mm = function() {
    rq(this.v);
    OD(this.v, this.G);
    Zp(this.v, this.h);
    this.o = Bi(v(this.sg, this, !1), 1E3 * this.m)
};
k.stop = function() {
    1 == this.a && this.sg(!0)
};
k.sg = function(a) {
    Zp(this.v, "transition", "");
    Ci(this.o);
    Zp(this.v, this.h);
    this.endTime = Ua();
    this.a = 0;
    a ? this.b("stop") : this.b("finish");
    this.g()
};
k.W = function() {
    this.stop();
    QD.D.W.call(this)
};
var SD = function(a, b) {
    K.call(this);
    this.c = new Hq(this);
    a = a || null;
    RD(this);
    this.v = a;
    b && (this.Md = b)
};
w(SD, K);
k = SD.prototype;
k.v = null;
k.Ch = !0;
k.Bh = null;
k.Pd = !1;
k.Ng = -1;
k.Md = "toggle_display";
k.Jb = function() {
    return this.Md
};
k.j = function() {
    return this.v
};
k.setAutoHide = function(a) {
    RD(this);
    this.Ch = a
};
var RD = function(a) {
    if (a.Pd) throw Error("Can not change this state of the popup while showing.");
};
SD.prototype.isVisible = function() {
    return this.Pd
};
SD.prototype.setVisible = function(a) {
    this.o && this.o.stop();
    this.h && this.h.stop();
    if (a) {
        if (!this.Pd && this.dispatchEvent("beforeshow")) {
            if (!this.v) throw Error("Caller must call setElement before trying to show the popup");
            this.m();
            a = Hf(this.v);
            if (this.Ch)
                if (this.c.O(a, "mousedown", this.Ci, !0), B) {
                    try {
                        var b = a.activeElement
                    } catch (d) {}
                    for (; b && "IFRAME" == b.nodeName;) {
                        try {
                            var c = sg(b)
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.c.O(a, "mousedown", this.Ci, !0);
                    this.c.O(a, "deactivate", this.Bi)
                } else this.c.O(a, "blur",
                    this.Bi);
                "toggle_display" == this.Md ? (this.v.style.visibility = "visible", W(this.v, !0)) : "move_offscreen" == this.Md && this.m();
            this.Pd = !0;
            this.Ng = Ua();
            this.o ? (gh(this.o, "end", this.Vh, !1, this), this.o.play()) : this.Vh()
        }
    } else TD(this)
};
SD.prototype.m = Fa;
var TD = function(a, b) {
    a.Pd && a.dispatchEvent({
        type: "beforehide",
        target: b
    }) && (a.c && Mq(a.c), a.Pd = !1, Ua(), a.h ? (gh(a.h, "end", Ta(a.Ih, b), !1, a), a.h.play()) : a.Ih(b))
};
k = SD.prototype;
k.Ih = function(a) {
    "toggle_display" == this.Md ? this.Ml() : "move_offscreen" == this.Md && (this.v.style.top = "-10000px");
    this.dispatchEvent({
        type: "hide",
        target: a
    })
};
k.Ml = function() {
    this.v.style.visibility = "hidden";
    W(this.v, !1)
};
k.Vh = function() {
    this.dispatchEvent("show")
};
k.Ci = function(a) {
    a = a.target;
    ng(this.v, a) || UD(this, a) || 150 > Ua() - this.Ng || TD(this, a)
};
k.Bi = function(a) {
    var b = Hf(this.v);
    if ("undefined" != typeof document.activeElement) {
        if (a = b.activeElement, !a || ng(this.v, a) || "BODY" == a.tagName) return
    } else if (a.target != b) return;
    150 > Ua() - this.Ng || TD(this)
};
var UD = function(a, b) {
    return nb(a.Bh || [], function(c) {
        return b === c || ng(c, b)
    })
};
SD.prototype.W = function() {
    SD.D.W.call(this);
    this.c.La();
    Ig(this.o);
    Ig(this.h);
    delete this.v;
    delete this.c;
    delete this.Bh
};
var VD = function(a, b) {
    this.L = b || void 0;
    SD.call(this, a)
};
w(VD, SD);
VD.prototype.m = function() {
    if (this.L) {
        var a = !this.isVisible() && "move_offscreen" != this.Jb(),
            b = this.j();
        a && (b.style.visibility = "hidden", W(b, !0));
        this.L.c(b, 8, this.wi);
        a && W(b, !1)
    }
};
var WD = function(a, b) {
    VD.call(this, a);
    this.g = b;
    this.a = 0;
    this.b = null;
    this.w = 0;
    this.setVisible(!0);
    this.setVisible(!1);
    T(this.j(), "round-trip-popup");
    T(this.g, "round-trip-content")
};
w(WD, VD);
WD.prototype.K = function() {
    Ci(this.w);
    1 == this.a ? gh(this.b, "finish", v(this.K, this)) : 0 == this.a && (this.w = Bi(v(this.C, this, -1), 200))
};
WD.prototype.C = function(a) {
    if (this.a != a && (0 != this.a || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
        var b = this.isVisible();
        this.setVisible(!0);
        var c = -Math.ceil(rq(this.g).width);
        xq(this.j()) && (c = -c);
        var d = 1 == a ? c : 0;
        c = 1 == a ? 0 : c;
        this.setVisible(b);
        if (PD()) {
            b = .2;
            if (0 != this.a) {
                var e = parseInt(aq(this.g, "left"), 10);
                this.G();
                b *= (c - e) / (c - d);
                d = e
            }
            this.a = a;
            this.b = new QD(this.g, b, {
                left: d + "px"
            }, {
                left: c + "px"
            }, "left " + b + "s");
            this.b.play();
            gh(this.b, "finish", v(this.G, this)); - 1 == a ? gh(this.b, "finish", v(this.setVisible,
                this, !1)) : this.setVisible(!0)
        } else Zp(this.g, "left", c + "px"), this.setVisible(1 == a ? !0 : !1)
    }
};
WD.prototype.G = function() {
    0 != this.a && (this.b.stop(), Bi(v(ph, this, this.b)), this.a = 0, this.b = null)
};
var YD = function(a) {
        this.v = a || null;
        this.a = F("DIV", "gt-hl-layer", Zf(""));
        this.b = null;
        this.v && (eg(this.a, this.v), XD(this))
    },
    $D = function(a, b, c, d, e) {
        var f = d || "gt-hl-text";
        d = a.v && (a.v.value || Ag(a.v));
        XD(a);
        dg(a.a);
        if (b != c || e) {
            if (0 < b) {
                var g = d.substring(0, b);
                ZD(a.a, g, 0, e)
            }
            b < c && (g = d.substring(b, c), f = F("SPAN", f), ZD(f, g, b, e), bg(a.a, f));
            c < d.length && (g = d.substring(c), ZD(a.a, g, c, e))
        }
    },
    XD = function(a) {
        var b;
        var c = a.v,
            d = Hf(c);
        (b = B && c.currentStyle) && Qf(If(d).a) && "auto" != b.width && "auto" != b.height && !b.boxSizing ? (d = Bq(c,
            b.width, "width", "pixelWidth"), c = Bq(c, b.height, "height", "pixelHeight"), b = new Ff(d, c)) : (b = new Ff(c.offsetWidth, c.offsetHeight), d = Eq(c), c = kq(c), b = new Ff(b.width - c.left - d.left - d.right - c.right, b.height - c.top - d.top - d.bottom - c.bottom));
        c = a.a;
        d = Hf(c);
        var e = Qf(If(d).a);
        !B || Re("10") || e && Re("8") ? Aq(c, b, "content-box") : (d = c.style, e ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (e = Eq(c), c = kq(c), d.pixelWidth = b.width + c.left + e.left + e.right + c.right, d.pixelHeight = b.height + c.top + e.top + e.bottom + c.bottom));
        d = iq(a.v);
        c =
            a.a;
        b = d.x;
        d = d.a;
        e = iq(c);
        b instanceof Df && (d = b.a, b = b.x);
        b = $a(b) - e.x;
        dq(c, c.offsetLeft + b, c.offsetTop + (Number(d) - e.a));
        c = Eq(a.v);
        Zp(a.a, "paddingLeft", c.left + "px");
        Zp(a.a, "paddingRight", c.right + "px");
        a.a.dir = a.v.dir
    },
    ZD = function(a, b, c, d) {
        d = d || [];
        for (var e = 0, f; f = d[e]; e++)
            if (!(0 > f.oe - c)) {
                if (f.oe - c >= b.length) break;
                if (0 < f.oe - c) {
                    var g = b.substring(0, f.oe - c);
                    aE(a, g)
                }
                var h = f.className || "gt-hl-text";
                g = b.substring(f.oe - c, f.ah - c);
                h = F("SPAN", h);
                aE(h, g);
                bg(a, h);
                b = b.substring(f.ah - c);
                c = f.ah
            }
        b && aE(a, b)
    },
    aE = function(a,
        b) {
        b = ae(b).split("\n");
        for (var c = 0, d = b.length; c < d; c++) 0 < c && bg(a, F("BR")), bg(a, Zf(b[c]))
    };
var bE = function(a, b) {
    this.a = a instanceof Df ? a : new Df(a, b)
};
w(bE, $r);
bE.prototype.c = function(a, b, c, d) {
    x(a);
    var e = fq(Hf(a)),
        f = this.a.x + e.x;
    e = this.a.a + e.a;
    var g = Wr(a);
    f -= g.x;
    e -= g.a;
    Yr(new Df(f, e), a, b, c, null, null, d)
};
var cE = function(a, b) {
    bE.call(this, a, b)
};
w(cE, bE);
cE.prototype.g = 0;
cE.prototype.b = function(a) {
    this.g = a
};
cE.prototype.c = function(a, b, c, d) {
    var e = eq(a);
    e = jq(e);
    var f = Sf(If(a).a);
    f = new Df(this.a.x + f.scrollLeft, this.a.a + f.scrollTop);
    var g = b,
        h = Yr(f, a, g, c, e, 10, d);
    if (0 != (h & 496)) {
        if (h & 16 || h & 32) g ^= 4;
        if (h & 64 || h & 128) g ^= 1;
        h = Yr(f, a, g, c, e, 10, d);
        0 != (h & 496) && Yr(f, a, b, c, e, this.g, d)
    }
};
var dE = function(a, b) {
    ux.call(this, a, b);
    this.N = !0;
    fx(this, !0);
    this.setVisible(!1, !0);
    this.b = new sj
};
w(dE, ux);
k = dE.prototype;
k.cj = !1;
k.oi = 0;
k.Bb = null;
k.Da = function(a) {
    dE.D.Da.call(this, a);
    (a = a.getAttribute("for") || a.htmlFor) && eE(this, this.a.j(a), 1)
};
k.ea = function() {
    dE.D.ea.call(this);
    this.b.forEach(this.Qe, this);
    var a = Y(this);
    a.O(this, "action", this.Sg);
    a.O(this.a.a, "mousedown", this.Pa, !0)
};
var eE = function(a, b, c, d, e, f) {
    b && vj(a.b, Qa(b)) || (c = a.$f(b, c, d, e, f), a.Ba && a.Qe(c), b = Ta(a.Fm, b), a.j() && Y(a).O(a.j(), "keydown", b))
};
k = dE.prototype;
k.Fm = function(a, b) {
    if (27 == b.keyCode) a.focus();
    else if (a = Yq(this, this.Ka)) {
        a = a.j();
        var c = new Tg(b.b, a);
        c.target = a;
        if (32 == b.keyCode || 13 == b.keyCode) Xg(a) ? Qh(a, "keydown", !1, c) : rh(a, "keydown", !1, c);
        32 == b.keyCode && this.Dc()
    }
};
k.$f = function(a, b, c, d, e) {
    if (!a) return null;
    b = {
        v: a,
        Vi: b,
        lm: c,
        md: d ? "contextmenu" : "mousedown",
        wi: e
    };
    this.b.set(Qa(a), b);
    return b
};
k.Qe = function(a) {
    Y(this).O(a.v, a.md, this.Kf);
    "contextmenu" != a.md && Y(this).O(a.v, "keydown", this.Im)
};
k.Ye = function() {
    if (this.Ba)
        for (var a = this.b.Cb(), b = 0; b < a.length; b++) this.cg(this.b.get(a[b]));
    this.b.Qc()
};
k.cg = function(a) {
    Y(this).Ja(a.v, a.md, this.Kf)
};
k.wf = function(a, b, c) {
    b = p(a.Vi) ? new yx(a.v, a.Vi, !0) : new cE(b, c);
    b.b && b.b(5);
    var d = a.lm;
    c = a.wi;
    var e = a.v;
    a = this.isVisible();
    var f;
    (f = this.isVisible()) || (f = 150 > Ua() - this.oi);
    f && this.cj ? this.Dc() : (this.Bb = e || null, this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8, a || (this.j().style.visibility = "hidden"), W(this.j(), !0), b.c(this.j(), d, c), a || (this.j().style.visibility = "visible"), this.uc(-1), this.setVisible(!0)))
};
k.Dc = function() {
    this.isVisible() && (this.setVisible(!1), this.isVisible() || (this.oi = Ua(), this.Bb = null))
};
k.Sg = function() {
    this.Dc()
};
k.Kf = function(a) {
    fE(this, a)
};
k.Im = function(a) {
    32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || fE(this, a);
    40 == a.keyCode && bx(this)
};
var fE = function(a, b) {
    for (var c = a.b.Cb(), d = 0; d < c.length; d++) {
        var e = a.b.get(c[d]);
        if (e.v == b.a) {
            a.wf(e, b.clientX, b.clientY);
            b.preventDefault();
            b.stopPropagation();
            break
        }
    }
};
dE.prototype.Pa = function(a) {
    this.isVisible() && !vx(this, a.target) && this.Dc()
};
dE.prototype.nf = function(a) {
    dE.D.nf.call(this, a);
    this.Dc()
};
dE.prototype.W = function() {
    dE.D.W.call(this);
    this.b && (this.b.Qc(), delete this.b)
};
var gE = function(a, b, c, d) {
    return new QD(a, .218, {
        opacity: c
    }, {
        opacity: d
    }, {
        Fi: "opacity",
        duration: .218,
        timing: b,
        delay: 0
    })
};
var hE = function(a) {
    K.call(this);
    this.v = a;
    a = B ? "focusout" : "blur";
    this.a = H(this.v, B ? "focusin" : "focus", this, !B);
    this.b = H(this.v, a, this, !B)
};
w(hE, K);
hE.prototype.handleEvent = function(a) {
    var b = new Tg(a.b);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
};
hE.prototype.W = function() {
    hE.D.W.call(this);
    oh(this.a);
    oh(this.b);
    delete this.v
};
var iE = function(a, b, c) {
    dE.call(this, b, c);
    this.w = new sj;
    this.g = a || 5;
    this.C = null;
    this.K = !1;
    this.h = Array(this.g);
    this.X = Array(this.g);
    this.V = Em.M();
    this.F = L.M();
    this.Y = this.m = this.vc = null;
    this.cj = !0
};
w(iE, dE);
var jE = "";
iE.prototype.Ma = function() {
    iE.D.Ma.call(this);
    for (var a = 0; a < this.g; ++a) this.hb(new ox(""), !0);
    "" != jE && (this.m = new ox(jE), Cr(this.m, "gt-edit-menuitem"), this.hb(this.m, !0))
};
iE.prototype.Ua = function(a) {
    iE.D.Ua.call(this, a);
    T(this.j(), "alt-menu")
};
iE.prototype.Yg = function(a) {
    a = this.w.get(Qa(a));
    for (var b = 0; b < I(a, 2) && b < this.g; ++b) {
        var c = Yq(this, b);
        c.g(J(Do(a, b), 0));
        c.na = b;
        c.setVisible(!0, !0)
    }
    for (; b < this.g; ++b) Yq(this, b).setVisible(!1);
    this.m && this.m.setVisible(!0, !0)
};
var kE = function(a, b, c) {
    a.w.set(Qa(b), c);
    eE(a, b, 9, 8, !1, new Vp(-2, 1, -2, 1))
};
k = iE.prototype;
k.Ye = function() {
    iE.D.Ye.call(this);
    null != this.vc && this.vc.b();
    this.w.Qc()
};
k.setVisible = function(a, b) {
    var c = this.Bb;
    this.Y = c;
    if (a && null != c) {
        lE(this, c);
        Nm(this.V, "altshow");
        var d = this.F;
        N(d, O(d, 207))
    } else null != this.C && $D(this.C, 0, 0);
    null != c && (a ? this.ag(c) : this.Yf(c));
    b = iE.D.setVisible.call(this, a, b);
    a && null != this.j() && zq(this.j(), !1);
    return b
};
k.rb = function() {
    if (null != this.Y) {
        var a = Ag(this.Y);
        if (null != a) return a
    }
    return ""
};
k.Dc = function() {
    iE.D.Dc.call(this);
    if (this.K)
        for (var a = 0; a < this.h.length; a++) {
            var b = this.h[a];
            Ci(b.w);
            b.G();
            b.C(-1);
            b.G();
            b.setVisible(!1)
        }
};
k.ag = function(a) {
    T(a, "trans-target");
    null === this.vc ? a.title = "" : this.vc.b(a)
};
k.Yf = function(a) {
    U(a, "trans-target");
    null === this.vc ? a.title = "" : this.vc.a(a)
};
k.bb = function(a) {
    if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
    var b = iE.D.bb.call(this, a);
    if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
        var c = xq(this.Bb.parentNode.parentNode),
            d = null;
        if (!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
        if (!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
        if (this.Tf(d) && (c = this.Bb, (c = d ? p(c.nextElementSibling) ? c.nextElementSibling : jg(c.nextSibling, !0) : p(c.previousElementSibling) ? c.previousElementSibling : jg(c.previousSibling, !1)) && c != this.Bb)) return this.Dc(), this.Li(d),
            this.wf(c ? this.b.get(Qa(c)) : null, 0, 0), mE(this), a.preventDefault(), a.stopPropagation(), !0
    }
    return b
};
k.wf = function(a, b, c) {
    xq((a.v || this.Bb).parentNode.parentNode) ? Zp(this.j(), "direction", "rtl") : Zp(this.j(), "direction", "");
    if (this.K)
        for (var d = 0; d < this.h.length; d++) nE(this, d), G(this.h[d].g, "...");
    this.Yg(a.v);
    iE.D.wf.call(this, a, b, c)
};
var oE = function(a, b, c) {
        !a.K || b >= a.g || "" == c || (G(a.h[b].g, c), nE(a, b))
    },
    nE = function(a, b) {
        Zr(Yq(a, b).j(), 12, a.h[b].j(), 8, new Df(1, 0))
    };
k = iE.prototype;
k.we = function(a) {
    iE.D.we.call(this, a);
    var b = this.Bb;
    if (null != b) {
        Nm(this.V, "altmenuhl");
        var c = this.F;
        N(c, O(c, 209));
        lE(this, b);
        a = this.ef(a.target); - 1 != a && a != this.g && (Ci(this.X[a]), this.X[a] = Bi(this.gm, 300, this), this.K && (b = this.h[a], xq(this.Bb.parentNode.parentNode) ? (T(b.j(), "rtl"), Zp(b.j(), "direction", "rtl")) : (U(b.j(), "rtl"), Zp(b.j(), "direction", "")), nE(this, a), Ci(b.w), 0 == b.a ? b.w = Bi(v(b.C, b, 1), 300) : b.C(1)))
    }
};
k.gm = function() {
    Nm(this.V, "altmenuhold");
    var a = this.F;
    N(a, O(a, 208))
};
k.vg = function(a) {
    iE.D.vg.call(this, a);
    a = this.ef(a.target); - 1 != a && a != this.g && (Ci(this.X[a]), this.K && this.h[a].K())
};
k.ef = function(a) {
    return $q(this, a)
};
k.Tf = function() {
    return !0
};
k.Li = function() {};
k.$f = function(a, b, c, d, e) {
    (a = iE.D.$f.call(this, a, b, c, d, e)) && "mousedown" == a.md && (a.md = "click");
    return a
};
k.Qe = function(a) {
    iE.D.Qe.call(this, a);
    Y(this).O(a.v, "mouseover", this.Ca);
    Y(this).O(a.v, "mouseout", this.T);
    Y(this).O(a.v, "contextmenu", this.sa);
    Y(this).O(a.v, "mousemove", this.ya)
};
k.cg = function(a) {
    iE.D.cg.call(this, a);
    Y(this).Ja(a.v, "mouseover", this.Ca);
    Y(this).Ja(a.v, "mouseout", this.T);
    Y(this).Ja(a.v, "contextmenu", this.sa);
    Y(this).Ja(a.v, "mousemove", this.ya)
};
var lE = function(a, b) {
        if (null != a.C && (b = a.w.get(Qa(b))) && (a = a.C, a.b))
            for (var c = a.v && (a.v.value || Ag(a.v)), d = -1, e = -1, f = !1, g = 0; g < I(a.b, 5); g++) {
                var h = np(a.b, g);
                if (0 != I(h, 2) && (0 == Hh(h, 5) && (f = c.indexOf(J(h, 4), e + 1), 0 <= f ? (d = f, e = d + J(h, 4).length, f = !0) : f = !1), np(a.b, g).zb() == b.zb())) {
                    if (f) {
                        c = [];
                        for (e = 0; e < I(b, 3); ++e) c.push({
                            oe: d + Hh(Eo(b, e), 0),
                            ah: d + Hh(Eo(b, e), 1)
                        });
                        $D(a, 0, 0, void 0, c)
                    } else d = c.indexOf(J(b, 0)), 0 <= d && $D(a, d, d + J(b, 0).length);
                    break
                }
            }
    },
    pE = function(a, b) {
        b ? rj(a.b.hc(!1), function(c) {
            "" == this.a.Qh(c.v) && (T(c.v,
                "trans-target-empty"), this.a.kf(c.v, "_"));
            return !0
        }, a) : rj(a.b.hc(!1), function(c) {
            Mp(c.v, "trans-target-empty") && (U(c.v, "trans-target-empty"), this.a.kf(c.v, ""));
            return !0
        }, a)
    };
iE.prototype.Ca = function(a) {
    !Yz() && this.isEnabled() && (T(a.target, "trans-target-highlight"), lE(this, a.target), pE(this, !0), Nm(this.V, "althighlight"), a = this.F, N(a, O(a, 206)))
};
iE.prototype.T = function(a) {
    U(a.target, "trans-target-highlight");
    null == this.C || this.isVisible() || $D(this.C, 0, 0);
    pE(this, !1)
};
iE.prototype.ya = function(a) {
    Yz() && this.T(a)
};
iE.prototype.sa = function(a) {
    Yz() || (this.T(a), Lz(a.target, void 0).select())
};
var mE = function(a) {
    rj(a.b.hc(!1), function(b) {
        U(b.v, "trans-target-highlight");
        return !0
    }, a)
};
iE.prototype.Sg = function(a) {
    a && a.a && a.a.Bb && (a.h = a.a.Bb);
    iE.D.Sg.call(this, a)
};
iE.prototype.Kf = function(a) {
    Yz() ? mE(this) : this.Sc && iE.D.Kf.call(this, a)
};
var qE = function(a, b, c) {
    this.ba = this.c = null;
    iE.call(this, a, b, c)
};
w(qE, iE);
k = qE.prototype;
k.Li = function(a) {
    this.c = a
};
k.setVisible = function(a, b) {
    b = qE.D.setVisible.call(this, a, b);
    this.c = null;
    a ? this.ba = this.rb() : null != this.ba && this.ba != this.rb() && this.dispatchEvent(new Kg("action", this));
    return b
};
k.ag = function(a) {
    qE.D.ag.call(this, a);
    T(a, "trans-edit");
    a.contentEditable = !0;
    Zw(this, a);
    Ww(this).focus();
    vg(Ww(this), !0);
    Y(this).O(a, "keydown", this.Zh);
    Y(this).O(a, "mouseout", this.yf);
    Y(this).O(a, "mouseover", this.yf);
    if (null != this.c) {
        a = Lz(a, void 0);
        var b = this.c ? a.Tb() : a.oc(),
            c = oz(a);
        a = c;
        var d = b,
            e = new Jz;
        e.g = Tz(a, d, c, b);
        if (lg(a) && !ag(a)) {
            var f = a.parentNode;
            d = jb(f.childNodes, a);
            a = f
        }
        lg(c) && !ag(c) && (f = c.parentNode, b = jb(f.childNodes, c), c = f);
        e.g ? (e.a = c, e.h = b, e.b = a, e.c = d) : (e.a = a, e.h = d, e.b = c, e.c = b);
        e.select()
    }
};
k.Yf = function(a) {
    qE.D.Yf.call(this, a);
    U(a, "trans-edit");
    a.contentEditable = !1;
    Ww(this) && vg(Ww(this), !1);
    Y(this).Ja(a, "keydown", this.Zh);
    Y(this).Ja(a, "mouseout", this.yf);
    Y(this).Ja(a, "mouseover", this.yf)
};
k.yf = function() {
    var a = Xz();
    null == a || a.Sb() == a.nc() && a.Tb() == a.oc() || this.setVisible(a.Sb() == a.nc())
};
k.Zh = function(a) {
    for (var b = 0; b < this.g; ++b) Yq(this, b).setVisible(!1);
    this.m && this.m.setVisible(!1);
    if (13 == a.keyCode || 3 == a.keyCode) return null === ax(this) ? (this.Dc(), a.stopPropagation(), a.preventDefault(), !0) : !1;
    null === ax(this) || !vh(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Bb.focus(), this.uc($q(this, null)));
    return !1
};
k.Tf = function(a) {
    var b = Xz();
    if (b.Sb() == b.nc() && b.Tb() == b.oc()) {
        var c = b.Jg() ? b.Tb() : b.oc();
        b = Lz(oz(b), void 0);
        if (!a && c == b.Tb() || a && c == b.oc()) return !0
    }
    return !1
};
var rE = function(a, b, c) {
    iE.call(this, a, b, c);
    this.c = null
};
w(rE, iE);
k = rE.prototype;
k.Ua = function(a) {
    rE.D.Ua.call(this, a);
    this.c = new sE("");
    this.hb(this.c, !0)
};
k.Yg = function(a) {
    rE.D.Yg.call(this, a);
    this.c.j().firstChild.value = this.a.Qh(a)
};
k.setVisible = function(a, b) {
    b = rE.D.setVisible.call(this, a, b);
    a && null != this.j() && (Ww(this) == this.c.j().firstChild || Ww(this) == this.c.j().firstChild.nextSibling) && Ir(this.c, !0);
    return b
};
k.we = function(a) {
    rE.D.we.call(this, a);
    a.target == this.c ? Zw(this, this.c.j().firstChild) : Zw(this, this.j());
    Ww(this).focus();
    Ww(this).tabIndex = 0
};
k.ef = function(a) {
    return a == this.c ? -1 : rE.D.ef.call(this, a)
};
k.bb = function(a) {
    return 9 == a.keyCode ? (this.c.Ea(2) ? (Ww(this) == this.c.j().firstChild ? Zw(this, this.c.j().firstChild.nextSibling) : Zw(this, this.c.j().firstChild), Ww(this).focus(), Ww(this).tabIndex = 0) : Ir(this.c, !0), a.preventDefault(), a.stopPropagation(), !0) : rE.D.bb.call(this, a)
};
k.Tf = function() {
    return null === ax(this) || !(ax(this) instanceof sE)
};
var sE = function(a, b, c) {
    Z.call(this, a, c || tE.M(), b);
    this.Oa(4, !1)
};
w(sE, Z);
sE.prototype.vb = function(a) {
    a.target == this.j().firstChild.nextSibling && this.dispatchEvent("action")
};
sE.prototype.ea = function() {
    sE.D.ea.call(this);
    Y(this).O(this.j().firstChild, "keydown", function(a) {
        32 == a.keyCode && a.stopPropagation()
    })
};
sE.prototype.rb = function() {
    return this.j().firstChild.value
};
var tE = function() {};
w(tE, ir);
Ga(tE);
tE.prototype.ub = function(a) {
    var b = a.a.b("INPUT", {
            value: a.Ta(),
            id: "alt-input-text",
            type: "text"
        }),
        c = a.a.b("INPUT", {
            value: "",
            id: "alt-input-submit",
            "class": "",
            type: "button"
        });
    return a.a.b("DIV", {
        id: "alt-input"
    }, b, c)
};
var uE = function(a, b, c, d, e, f) {
    this.a = a;
    this.w = b;
    this.C = c;
    this.G = d;
    H(this.a.j(), "focus", function() {
        T(d, "focus")
    });
    H(this.a.j(), "blur", function() {
        U(d, "focus")
    });
    this.c = f;
    null != this.c && H(this.c, "action", this.K, !1, this);
    this.h = !1;
    this.g = null;
    this.b = !1;
    this.m = null;
    this.o = e;
    this.L = !1;
    this.F = L.M()
};
uE.prototype.K = function() {
    this.b = !1;
    this.a.b("");
    this.a.j().focus();
    var a = this.F;
    N(a, O(a, 27));
    this.c.setVisible(!1)
};
var vE = function(a) {
    a.h = !1;
    U(a.G, "full-edit");
    W(a.C, !0);
    W(a.w, !1);
    W(a.o, a.L);
    a.a.setVisible(!1);
    a.a.Vd(!1)
};
uE.prototype.R = function(a) {
    this.b = !1;
    "" != this.a.Z() && (this.c.setVisible(!0), this.a.Z() != this.m && (this.b = !0));
    a()
};
var wE = function(a, b, c, d, e) {
    X.call(this);
    this.b = d;
    Em.M();
    this.c = new xs(a);
    zs(this.c, 2);
    this.m = null;
    this.w = new xs(b);
    this.h = null;
    this.N = c;
    this.K = e || !1;
    this.C = this.g = null
};
w(wE, X);
k = wE.prototype;
k.qa = function(a) {
    this.c.qa(a)
};
k.Ma = function() {
    wE.D.Ma.call(this);
    this.Da(Yf("DIV"))
};
k.Da = function(a) {
    wE.D.Da.call(this, a);
    null != this.b && !this.b.ob && this.b.ia(a);
    T(a, "st-wrap");
    a.appendChild(Sp(co, {
        ym: this.K,
        zm: this.N
    }));
    this.g = D("st-stp1", a);
    a = Jf("st-buttons");
    this.c.Ua(a);
    this.c.Ad(this);
    Y(this).O(this.c, "action", this.Tk);
    this.w.Ua(a);
    this.w.Ad(this);
    Y(this).O(this.w, "action", this.Pn)
};
k.Tk = function(a) {
    W(this.g, !1);
    null != this.b && this.b.setVisible(!0);
    null != this.m && this.m(a)
};
k.Pn = function(a) {
    W(this.g, !1);
    null != this.h && this.h(a)
};
k.reset = function() {
    this.C && Ci(this.C);
    this.C = null;
    zs(this.c, 2);
    tq(this.j(), 1);
    W(this.j(), !0);
    W(this.g, !0);
    null != this.b && this.b.setVisible(!1)
};
var xE = B || Ae || we || xe || !1;
Ze && Bk("4") || $e && Re("533") || ze && Re("2.0") || B && Re("10") || we && yd();
var yE = function(a, b, c, d, e, f, g, h, l) {
    X.call(this, a);
    this.c = g || null;
    if (null != this.c) {
        a = this.c;
        g = v(this.Xk, this);
        a.g = v(a.R, a, g);
        g = a.a.j();
        var m = new br(g);
        H(m, "key", a.g, !1, a);
        m = new Nv(g);
        H(m, "paste", a.g, !1, a);
        H(g, "keyup", a.g, !1, a)
    }
    this.h = null;
    this.C = "auto";
    this.Y = this.m = "";
    this.Ca = new op("mt");
    this.cb = !!b && xE && !B;
    this.T = null != e ? e : 0;
    this.b = null;
    this.cb ? this.b = new qE : this.b = new rE;
    l && this.b.qa(!1);
    if (0 < this.T)
        for (b = this.b, b.K = !0, e = 0; e < b.g; e++) a = F("DIV", "goog-menu", ""), l = F("DIV", null, a), a = new WD(l, a), b.h[e] =
            a, document.body.appendChild(l);
    this.b.Ua(c);
    this.g = h || null;
    this.sa = null != d ? d : -1;
    this.N = Em.M();
    this.K = new sj;
    this.ya = "t";
    this.V = this.X = null;
    this.w = f || null;
    this.aa = !1;
    null != this.w && (c = v(this.Za, this), this.w.m = c, c = v(this.Sk, this), this.w.h = c);
    this.ba = null;
    this.F = L.M()
};
w(yE, X);
var HE = function(a, b, c, d, e) {
        if (null != a.w) {
            var f = a.w;
            W(f.j(), !1);
            W(f.g, !1);
            null != f.b && f.b.setVisible(!1)
        }
        b && (a.h = new jp(b), a.V = null);
        c && (a.C = c);
        d && (a.m = d);
        e && (a.Y = e);
        zE(a) && (vE(a.c), null != a.g && a.g.a(!1));
        if (a.h) {
            b = 0 != Mf("alt-edited").length;
            a.a.jf(a.j());
            a.b.Ye();
            a.ba && (a.ba.b = a.h);
            d = "";
            for (c = e = 0; c < I(a.h, 5); c++) AE(a.h, c) && (d += " "), d += BE(a.h, c), e += I(np(a.h, c), 2);
            if (0 == e) return !1;
            d = [];
            e = !1;
            $u(a.h);
            for (c = 0; c < I(a.h, 5); c++) {
                f = np(a.h, c);
                var g = Do(f, 0);
                AE(a.h, c) ? a.a.appendChild(a.j(), a.a.a.createTextNode(" ")) :
                    ("km" == a.m || "lo" == a.m) && a.a.appendChild(a.j(), Ae ? $f(document, Jd("WBR")) : we ? Zf("&shy;") : B ? Zf("&#8203;") : $f(document, Jd("WBR")));
                Dh(f, 4) && 0 < J(f, 4).length && 0 == Hh(f, 5) && d.push(J(f, 4));
                var h, l = BE(a.h, c);
                xc(l) ? 0 == l.length || (h = CE(l)) : (h = a.a.b("SPAN", null, l), g = Hh(g, 1), x(0 <= g, "Invalid confidence value: " + g), x(1E3 >= g, "Invalid confidence value: " + g), 0 <= a.sa && g < a.sa && T(h, "alt-low-conf"), vj(a.K, a.C + "." + a.m + "." + J(f, 0)) && (g = a.K.get(a.C + "." + a.m + "." + J(f, 0)), g != DE(f, 0) && (a.a.kf(h, g), T(h, "alt-edited"), e = !0, EE(a, !0))),
                    null != a.b.vc ? a.b.vc.a(h) : h.title = "", kE(a.b, h, f));
                h && a.a.appendChild(a.j(), h)
            }
            if (null != a.c) {
                h = a.C + "." + a.m;
                for (c = 0; c < d.length; ++c) h += "." + d[c];
                vj(a.K, h) && (FE(a, !1), e = !0, GE(a, a.K.get(h)), null != a.g && a.g.a(!1), EE(a, !0))
            }
            e || (EE(a, !1), FE(a, !1));
            (e || b) && a.dispatchEvent("action");
            return 0 < I(a.h, 5)
        }
        EE(a, !1);
        FE(a, !1);
        return !1
    },
    CE = function(a) {
        a = Ac(ee(a)).split("<br>");
        var b = document.createDocumentFragment(),
            c = 0;
        y(a, function(d) {
            0 != c && b.appendChild(F("BR"));
            c++;
            "" != d && b.appendChild(Zf(he(d)))
        });
        return b
    },
    IE = function(a,
        b) {
        if (zE(a)) return a.c.a.Z();
        var c = [];
        if (a.j() && a.j().childNodes)
            for (var d = 0; d < a.j().childNodes.length; ++d) {
                var e = a.j().childNodes[d];
                c[d] = b && "BR" == e.tagName ? "\n" : Ag(e)
            }
        return c.join("")
    },
    KE = function(a, b, c, d) {
        for (a = 0; a < I(b, 5); a++) {
            var e = np(b, a),
                f = c;
            if ((e = e && hb(e, Al)) && zl(f.Ra, e.Ra)) {
                c = b;
                b = a;
                f = -1;
                a = I(c, 5);
                for (e = b; 0 <= e; e--)
                    if (0 == Hh(np(c, e), 5)) {
                        f = e;
                        break
                    }
                for (e = b + 1; e <= I(c, 5); e++)
                    if (0 == Hh(np(c, e), 5)) {
                        a = e;
                        break
                    }
                if (null != d && d) b = JE(c, f, a);
                else if (d = c, c = f, d) {
                    f = b + 1;
                    e = b;
                    for (b = BE(d, b).length; 64 > b && (f != a || e !=
                            c);) f < a && (b += BE(d, f++).length + 1), 64 > b && e > c && (b += BE(d, --e).length + 1);
                    b = JE(d, e, f)
                } else b = "";
                return b
            }
        }
        return ""
    },
    JE = function(a, b, c) {
        var d = [];
        d.push(BE(a, b));
        for (b += 1; b < c; b++) AE(a, b) && d.push(" "), d.push(BE(a, b));
        return d.join("")
    },
    AE = function(a, b) {
        if (0 == b) return !1;
        var c = np(a, b),
            d = np(a, b - 1);
        return Dl(Do(c, 0), 2) && !Dl(Do(d, 0), 3) && !wc(BE(a, b - 1), "\n")
    };
k = yE.prototype;
k.ue = function() {
    return this.m
};
k.Ma = function() {
    this.Da(Fg(this.a, "span"))
};
k.Da = function(a) {
    yE.D.Da.call(this, a);
    HE(this)
};
k.ea = function() {
    yE.D.ea.call(this);
    Y(this).O(this.b, "action", this.Pa);
    null != this.g && null != this.g.b && (Y(this).O(this.g.b, "click", this.Gl), Kq(Y(this), this.g.b, this.F.g, this.F));
    Y(this).O(this.b, "show", this.jl);
    this.j() && Y(this).O(this.j(), "keydown", function(a) {
        32 == a.keyCode && a.stopPropagation()
    }, !0)
};
k.W = function() {
    yE.D.W.call(this);
    this.b.La()
};
k.Xk = function() {
    this.w.qa(this.c.b);
    EE(this, this.c.b)
};
var LE = function(a) {
    null != a.g && a.g.a(!0);
    var b = a.c,
        c = IE(a);
    T(b.G, "full-edit");
    b.c.setVisible(!0);
    b.m = c;
    b.a.g(c);
    b.a.setVisible(!0);
    b.a.Vd(!0);
    W(b.w, !0);
    W(b.C, !1);
    b.L = uq(b.o);
    W(b.o, !1);
    c = b.a.j();
    c.focus();
    c.setSelectionRange(c.value.length, c.value.length);
    b.h = !0;
    a.aa = uq(a.w.j());
    a.w.reset();
    null != a.g ? a.w.qa(uq(a.g.b)) : a.w.qa(!1);
    EE(a, !1)
};
yE.prototype.Pa = function(a) {
    if ("hide" != a.type || a.target == this.b)
        if (a.target == this.b.m && null != this.c) {
            this.N.log("editpopupclk");
            var b = this.F;
            N(b, O(b, 233));
            LE(this)
        } else {
            var c = a.h;
            null == c && null != a.a && (c = a.a.Bb);
            b = a.target.rb();
            if (null != c && null != a.target) {
                var d = c,
                    e = x(this.b.w.get(Qa(d)));
                this.a.kf(d, b);
                b == DE(e, 0) ? (U(d, "alt-edited"), 0 == Mf("alt-edited").length && (EE(this, !1), FE(this, !1))) : (T(d, "alt-edited"), EE(this, !0), FE(this, !0));
                null != this.K && this.K.set(this.C + "." + this.m + "." + J(e, 0), b);
                e = x(this.b.w.get(Qa(c)));
                null != this.K && this.K.set(this.C + "." + this.m + "." + J(e, 0), b);
                d = DE(e, 0);
                c = $q(this.b, a.target);
                d = {
                    sl: this.C,
                    tl: this.m,
                    utrans: b,
                    gtrans: d,
                    index: c,
                    ophrase: J(e, 0),
                    osentence: J(e, 4),
                    tsentence: KE(this, this.h, e)
                };
                0 < I(e, 2) && (d.confidence = Hh(Do(e, 0), 1));
                if (a.target instanceof sE || -1 == c) d.manual = 1, c = this.F, N(c, O(c, 240));
                else {
                    a = this.F;
                    e = O(a, 239);
                    var f = new nl,
                        g = of(of(f, 2, ll), 3, jl);
                    C(g, 1, c);
                    mf(e, 27, f);
                    N(a, e)
                }
                for (var h in d) t(d[h]) && 64 < d[h].length && (d.tr = 1, d[h] = d[h].substr(0, 64));
                this.N.log("usealt", d, null);
                h = new Kg("usealt");
                h.text = b;
                this.dispatchEvent(h);
                this.dispatchEvent("action")
            }
        }
};
var GE = function(a, b) {
    if (a.j()) {
        null == a.X && (a.V = yb(a.a.Ph(a.j())));
        a.X = b;
        var c;
        if (c = a.j().childNodes && 0 < a.j().childNodes.length) c = (c = a.j().childNodes[0]) ? vj(a.b.b, Qa(c)) : !1;
        c ? (a.a.jf(a.j()), a.b.Ye(), b = a.a.b("SPAN", "alt-edited", a.X), a.a.appendChild(a.j(), b), kE(a.b, b, new Bo)) : a.j().innerHTML = Ac(ee(b))
    }
};
k = yE.prototype;
k.Gl = function() {
    if (null != this.c && zE(this)) {
        var a = this.c;
        a.c.setVisible(!0);
        a.a.g(a.m);
        a.a.j().focus();
        a.g(null)
    } else zE(this) && (null != this.g && this.g.a(!1), vE(this.c)), this.K.Qc(), this.X = null, HE(this), this.dispatchEvent("action");
    this.N.log("clkundo", void 0, null)
};
k.Sk = function() {
    zE(this) && (this.c.b && (GE(this, this.c.a.Z()), this.aa = !0), vE(this.c), null != this.g && this.g.a(!1), this.c.b && EE(this, !0), this.w.qa(!0), W(this.w.j(), this.aa), this.dispatchEvent("action"));
    var a = this.F;
    N(a, O(a, 215));
    this.N.log("clkcancel", void 0, null)
};
k.jl = function() {
    var a = this.b.w.get(Qa(this.b.Bb));
    if (a) {
        if (0 < this.T) {
            var b = new Ym("source=baf");
            if (1 == this.T) {
                for (var c = [], d = 0, e = I(a, 2); d < e; d++) c.push(DE(a, d));
                rp(this.Ca, this.m, this.C, ME(this), c, v(this.fn, this), void 0, b, void 0)
            } else
                for (d = 0, e = I(a, 2); d < e; d++) c = DE(a, d), tp(this.Ca, this.m, this.C, ME(this), c, ["at", "t"], v(this.gn, this, d), void 0, b)
        }
        b = new Kg("click");
        b.text = this.b.rb();
        b.m = I(this.h, 5);
        this.dispatchEvent(b);
        b = {};
        b.confidence = Hh(Do(a, 0), 1);
        this.C && this.m && this.Y && (b.segments = I(this.h, 5), b.sl =
            this.C, b.tl = this.m, b.hl = this.Y);
        a = this.F;
        N(a, O(a, 238));
        this.N.log("phrsclk", b, null)
    }
};
k.gn = function(a, b) {
    if (1 == this.T || 1 < I(b, 5)) {
        var c = b.ab(0).Nc();
        var d = 1;
        for (var e = b.cc(); d < e; d++) c += " " + b.ab(d).Nc();
        d = c
    } else if (1 == I(b, 5)) {
        c = [];
        b = np(b, 0);
        d = 0;
        for (e = Math.min(this.T, I(b, 2)); d < e; d++) c.push(DE(b, d));
        d = c.join(", ")
    } else d = "...";
    oE(this.b, a, d)
};
k.fn = function(a) {
    for (var b = 0; b < a.length; b++) oE(this.b, b, a[b])
};
var EE = function(a, b) {
        null != a.g && null != a.g.b && W(a.g.b, b)
    },
    FE = function(a, b) {
        null != a.w && (b && a.w.reset(), W(a.w.j(), b))
    };
yE.prototype.Za = function() {
    var a = [],
        b;
    null != this.V ? b = this.V : b = ig(this.j());
    for (var c = {
            segment: []
        }, d = null, e = 0, f = 0; f < b.length; f++) {
        var g = np(this.h, f);
        if (null != g) {
            var h = Ag(b[f]);
            a: {
                var l = h;
                var m = g;
                if (0 == I(m, 2)) l = 0;
                else {
                    for (var q = 0; q < I(m, 2); ++q)
                        if (l == DE(m, q)) {
                            l = q;
                            break a
                        }
                    l = -1
                }
            }
            m = yc(J(g, 4));
            q = KE(this, this.h, g, !0);
            if (0 != m.length) {
                if (0 == a.length || m != a[a.length - 1]) a.push(m), d = NE(this, a.length - 1), e = 0, d = {
                    source: m,
                    original_target: q,
                    segment_source: d,
                    phrase_correction: []
                }, c.segment.push(d);
                if (0 != l)
                    for (m = DE(g,
                            0).length, l = {
                            alternative_index: l,
                            edited_phrase: h,
                            source_span: [],
                            target_span: [{
                                start: e,
                                end: e + m
                            }]
                        }, d.phrase_correction.push(l), m = 0; m < I(g, 3); ++m) q = Eo(g, m), l.source_span.push({
                        start: Hh(q, 0),
                        end: Hh(q, 1)
                    });
                e += h.length;
                Dl(Do(g, 0), 2) && e++
            }
        }
    }
    if (zE(this)) {
        this.dispatchEvent("action");
        vE(this.c);
        null != this.g && this.g.a(!1);
        EE(this, !0);
        this.c.a.Z() != IE(this) && GE(this, this.c.a.Z());
        b = this.C + "." + this.m;
        for (f = 0; f < a.length; ++f) b += "." + a[f];
        a = this.c.a.Z();
        this.K.set(b, a);
        c.contains_full_edit = !0
    }
    c.edited_target = IE(this, !0);
    a = new Ym;
    a.set("ue", JSON.stringify(c));
    a.set("sl", this.C);
    a.set("tl", this.m);
    Pj("/translate_suggestion?client=" + this.ya, void 0, "POST", a.toString(), void 0, 1E4)
};
var NE = function(a, b) {
        if (b < a.h.cc()) switch (a = a.h.ab(b), Cl(a, 4, 0)) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5
        }
        return 0
    },
    zE = function(a) {
        return null != a.c && a.c.h
    },
    BE = function(a, b) {
        a = np(a, b);
        return 0 == I(a, 2) ? J(a, 0) : DE(a, 0)
    },
    DE = function(a, b) {
        return J(Do(a, b), 0)
    },
    ME = function(a) {
        a = a.Y;
        0 === a.length && null != Jf("hl") && (a = Jf("hl").value);
        return a
    };
var OE = function(a) {
    Bl(this, a, 7)
};
w(OE, Al);
var PE = {
    translation_id: {
        H: 0,
        J: !1
    },
    sl: {
        H: 1,
        J: !1
    },
    tl: {
        H: 2,
        J: !1
    },
    source: {
        H: 3,
        J: !1
    },
    trans: {
        H: 4,
        J: !1
    },
    write_timestamp: {
        H: 5,
        J: !1
    },
    label: {
        H: 6,
        J: !0
    }
};
OE.prototype.a = function() {
    return PE
};
OE.prototype.Nc = function() {
    return J(this, 4)
};
var QE = function(a) {
    Bl(this, a, 7)
};
w(QE, Al);
var RE = {
    total: {
        H: 0,
        J: !1
    },
    token: {
        H: 1,
        J: !1
    },
    translations: {
        H: 2,
        wa: function(a) {
            return Hl(OE, a)
        },
        va: function(a) {
            return Gl(new OE(a))
        },
        J: !0
    },
    error: {
        H: 3,
        J: !1
    },
    timestamp: {
        H: 4,
        J: !1
    },
    id: {
        H: 5,
        J: !1
    },
    max_translations: {
        H: 6,
        J: !1
    }
};
QE.prototype.a = function() {
    return RE
};
var SE = function() {
    var a = DATA.Usage;
    this.g = DATA.DisplayLanguage;
    this.a = "";
    this.c = a;
    this.h = ""
};
SE.prototype.b = function(a, b) {
    b = b.target;
    if (Zj(b) && "" != ak(b) && null != bk(b)) {
        b = bk(b);
        b = new QE(b);
        var c = J(b, 1);
        null != c && "" != c && (this.a = c)
    } else b = new QE, b.Ra[3] = this.h;
    a(b)
};
var TE = function(a, b, c, d, e) {
    var f = window.location.href;
    b = new Qm(b);
    (f = (new Qm(f, !0)).a.get("authuser")) && b.a.set("authuser", f);
    b = b.toString();
    b += "&hl=" + a.g;
    a.c && (b += "&xt=" + a.c);
    null != e ? Pj(b, v(a.b, a, c), d, e) : Pj(b, v(a.b, a, c), d)
};
SE.prototype.sb = function(a, b, c, d, e, f) {
    var g = {
        cm: "g"
    };
    null != b && "all" != b && (g.sl = b);
    null != c && "all" != c && (g.tl = c);
    null != d && "" != d && (g.q = d);
    null != e && "" != e && (g.utrans = e);
    null != f && "0" != f && (g.od = f);
    "" != this.a && (g.tk = this.a, this.a = "");
    TE(this, "/translate_a/sg?client=webapp&" + Dj(g), a, "GET")
};
var UE = function(a, b, c, d, e, f, g) {
        var h = {
            cm: "a"
        };
        h.sl = c;
        h.tl = d;
        h.ql = e.length + "";
        g && (h.edit = "1");
        c = {};
        c.q = e;
        c.utrans = f;
        TE(a, "/translate_a/sg?client=webapp&" + Dj(h), b, "POST", Dj(c))
    },
    VE = function(a, b, c) {
        var d = {
            cm: "d"
        };
        d.count = c.length + "";
        var e = {};
        e.id = c;
        TE(a, "/translate_a/sg?client=webapp&" + Dj(d), b, "POST", Dj(e))
    };
var Sb = {},
    WE = null,
    XE = function(a) {
        a = Qa(a);
        delete Sb[a];
        Tb() && WE && WE.stop()
    },
    ZE = function() {
        WE || (WE = new Rr(function() {
            YE()
        }, 20));
        var a = WE;
        a.kb() || a.start()
    },
    YE = function() {
        var a = Ua();
        Mb(Sb, function(b) {
            $E(b, a)
        });
        Tb() || ZE()
    };
var aF = function(a, b, c, d) {
    ND.call(this);
    if (!Ja(a) || !Ja(b)) throw Error("Start and end parameters must be arrays");
    if (a.length != b.length) throw Error("Start and end points must be the same length");
    this.o = a;
    this.K = b;
    this.duration = c;
    this.L = d;
    this.coords = [];
    this.progress = 0;
    this.G = null
};
w(aF, ND);
aF.prototype.play = function(a) {
    if (a || 0 == this.a) this.progress = 0, this.coords = this.o;
    else if (1 == this.a) return !1;
    XE(this);
    this.startTime = a = Ua(); - 1 == this.a && (this.startTime -= this.duration * this.progress);
    this.endTime = this.startTime + this.duration;
    this.G = this.startTime;
    this.progress || this.c();
    this.b("play"); - 1 == this.a && this.b("resume");
    this.a = 1;
    var b = Qa(this);
    b in Sb || (Sb[b] = this);
    ZE();
    $E(this, a);
    return !0
};
aF.prototype.stop = function(a) {
    XE(this);
    this.a = 0;
    a && (this.progress = 1);
    bF(this, this.progress);
    this.b("stop");
    this.g()
};
aF.prototype.W = function() {
    0 == this.a || this.stop(!1);
    this.b("destroy");
    aF.D.W.call(this)
};
var $E = function(a, b) {
        $a(a.startTime);
        $a(a.endTime);
        $a(a.G);
        b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.progress && (a.progress = 1);
        a.G = b;
        bF(a, a.progress);
        1 == a.progress ? (a.a = 0, XE(a), a.b("finish"), a.g()) : 1 == a.a && a.C()
    },
    bF = function(a, b) {
        La(a.L) && (b = a.L(b));
        a.coords = Array(a.o.length);
        for (var c = 0; c < a.o.length; c++) a.coords[c] = (a.K[c] - a.o[c]) * b + a.o[c]
    };
aF.prototype.C = function() {
    this.b("animate")
};
aF.prototype.b = function(a) {
    this.dispatchEvent(new cF(a, this))
};
var cF = function(a, b) {
    Kg.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.duration = b.duration;
    this.progress = b.progress;
    this.state = b.a
};
w(cF, Kg);
var dF = function(a, b, c, d, e) {
    aF.call(this, b, c, d, e);
    this.h = a
};
w(dF, aF);
dF.prototype.m = Fa;
dF.prototype.C = function() {
    this.m();
    dF.D.C.call(this)
};
dF.prototype.g = function() {
    this.m();
    dF.D.g.call(this)
};
dF.prototype.c = function() {
    this.m();
    dF.D.c.call(this)
};
var eF = function(a, b, c, d, e) {
    ya(b) && (b = [b]);
    ya(c) && (c = [c]);
    dF.call(this, a, b, c, d, e);
    if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
    this.w = -1
};
w(eF, dF);
var fF = 1 / 1024;
eF.prototype.m = function() {
    var a = this.coords[0];
    Math.abs(a - this.w) >= fF && (tq(this.h, a), this.w = a)
};
eF.prototype.c = function() {
    this.w = -1;
    eF.D.c.call(this)
};
eF.prototype.g = function() {
    this.w = -1;
    eF.D.g.call(this)
};
var gF = function(a, b, c) {
    eF.call(this, a, 0, 1, b, c)
};
w(gF, eF);
var hF = function(a, b, c) {
    eF.call(this, a, 1, 0, b, c)
};
w(hF, eF);
hF.prototype.c = function() {
    this.h.style.display = "";
    hF.D.c.call(this)
};
hF.prototype.g = function() {
    this.h.style.display = "none";
    hF.D.g.call(this)
};
var iF = function(a, b, c) {
    eF.call(this, a, 0, 1, b, c)
};
w(iF, eF);
iF.prototype.c = function() {
    this.h.style.display = "";
    iF.D.c.call(this)
};
var jF = function(a, b, c) {
    var d = "rw";
    null != c && c && (d = "m" + d);
    this.g = b;
    Ds.call(this, a, d, MSG_SEE_ALSO, MSG_SEE_ALSO, 10);
    this.wh = !0
};
w(jF, Ds);
jF.prototype.update = function(a, b, c, d) {
    jF.D.update.call(this, a, b, c, d);
    if (!d || 0 == I(mp(d), 0)) return !1;
    (a = this.j()) && Kp(a, Ag(this.Jc));
    dg(this.b);
    this.zd();
    c = a = F("DIV", {
        "class": "gt-rw-div"
    });
    b = 15 < I(mp(d), 0);
    for (var e = 0; e < I(mp(d), 0); ++e) {
        var f = mp(d);
        var g = Fh(f, 0, e);
        f = F("SPAN", {
            "class": "gt-cd-cl"
        });
        G(f, g);
        Ep(f, "option");
        f.tabIndex = -1;
        this.c.push(f);
        if (10 == e && b) {
            var h = F("DIV", {
                "class": "gt-rw-div"
            });
            c = h;
            h = b ? F("SPAN", {
                "class": "gt-card-fadein-wrapper"
            }, h) : h;
            Zp(h, {
                display: "none"
            })
        }
        this.g || 0 != e && e != I(mp(d), 0) &&
            c.appendChild(Zf(", "));
        c.appendChild(f)
    }
    c = kc(this.za) ? "rtl" : "ltr";
    Zp(this.b, {
        direction: c
    });
    this.b.appendChild(a);
    h && this.b.appendChild(h);
    b && (d = MSG_N_MORE_RELATED_LABEL.replace("%1$s", (I(mp(d), 0) - 7).toLocaleString(this.Sa)), Fs(this, d, MSG_FEWER_RELATED_LABEL));
    kF(this, yb(ig(a)));
    this.setVisible(!0);
    return !0
};
jF.prototype.ea = function() {
    jF.D.ea.call(this);
    var a = this.j();
    a && (Ep(a, "listbox"), Ah(a, this.w.bind(this)))
};
var kF = function(a, b) {
    a.g && (ph(a.j(), "keydown"), H(a.j(), "keydown", function(c) {
        zh(c, b)
    }, !1))
};
jF.prototype.w = function(a) {
    Mp(a.target, "gt-cd-cl") && this.dispatchEvent(new Kg("a", a.target))
};
jF.prototype.Xd = function(a) {
    var b = [],
        c = Mf("gt-card-fadein-wrapper", this.j());
    if (this.g) {
        if (a) var d = yb(Mf("gt-cd-cl", this.j()));
        else d = D("gt-rw-div", this.j()), d = yb(ig(d));
        kF(this, d)
    }
    for (var e = 0; e < c.length; e++) d = c[e], a ? b.push(new iF(d, 218)) : b.push(new hF(d, 218));
    for (e = 0; e < b.length; e++) b[e].play()
};
var lF = function() {},
    mF = function(a) {
        var b = F("SPAN");
        b.style.color = "transparent";
        b.style.background = "transparent";
        b.style.top = "-1000px";
        b.style.left = "-1000px";
        b.style.position = "absolute";
        bg(document.body, b);
        G(b, a);
        a = b.offsetWidth;
        hg(b);
        return a
    };
Ga(lF);
var nF = function() {
    lF.M()
};
Ga(nF);
var oF = function(a) {
    var b = mF(a);
    a = mF(a.substr(0, 1));
    return b != a
};
var pF = function() {
    wB.apply(this, arguments)
};
ka(pF, wB);
pF.prototype.K = function(a) {
    wB.prototype.K.call(this, a);
    qF(this.aa);
    qF(this.b);
    this.j().addEventListener("keydown", v(this.Pa, this), !1)
};
var qF = function(a) {
        V(a, "tw-ll-top", !0);
        a.addEventListener("scroll", function() {
            V(a, "tw-ll-top", 0 >= a.scrollTop)
        })
    },
    rF = function(a) {
        return Eg(document) === EB(a)
    };
pF.prototype.na = function(a) {
    return Eg(document) === a.j()
};
var sF = function(a) {
    a = aq(a.m, "columnCount");
    return parseInt(a, 10) || 1
};
pF.prototype.Pa = function(a) {
    if (this.isVisible()) switch (a.keyCode) {
        case 27:
            this.close();
            break;
        case 13:
            if (rF(this)) {
                var b = tF(this);
                uq(this.b) && null != b && (b.le(pB(b.j())), a.preventDefault())
            } else b = (uq(this.b) ? this.g : this.a).find(this.na) || null, null != b && (b.le(pB(b.j())), a.preventDefault());
            break;
        case 40:
            rF(this) ? (b = tF(this), null != b && (EB(this).blur(), b.j().focus(), a.preventDefault())) : uF(this, a);
            break;
        case 38:
            rF(this) || vF(this, a);
            break;
        case 39:
            if (!rF(this) && (b = sF(this), 1 < b)) {
                var c = Math.ceil(this.a.length /
                        b),
                    d = (uq(this.b) ? this.g : this.a).findIndex(this.na) + c;
                d >= this.a.length && (d -= b * c);
                0 > d && (d += c);
                this.a[d].j().focus();
                a.preventDefault()
            }
            break;
        case 37:
            rF(this) || (b = sF(this), 1 < b && (c = Math.ceil(this.a.length / b), d = (uq(this.b) ? this.g : this.a).findIndex(this.na) - c, 0 > d && (d += b * c), d >= this.a.length && (d -= c), this.a[d].j().focus(), a.preventDefault()));
            break;
        default:
            this.Y(a)
    }
};
var uF = function(a, b) {
        var c = Eg(document);
        if (c)
            for (var d = a.a.find(function(g) {
                    return "auto" === g.code
                }), e = a.a.find(function(g) {
                    return "auto" !== g.code
                }), f = c;;) {
                (f = d && f === d.j() ? e.j() : f.nextElementSibling) || (f = !uq(a.b) && d ? d.j() : c.parentElement.children[0]);
                if (f === c) break;
                if (0 <= f.tabIndex && uq(f)) {
                    f.focus();
                    b.preventDefault();
                    break
                }
            }
    },
    vF = function(a, b) {
        var c = Eg(document);
        if (c)
            for (var d = a.a.find(function(g) {
                    return "auto" === g.code
                }), e = rb(a.a, function(g) {
                    return "auto" !== g.code
                }), f = c;;) {
                (f = d && f === d.j() ? e.j() : f.previousElementSibling) ||
                (f = !uq(a.b) && d ? d.j() : ib(c.parentElement.children));
                if (f === c) break;
                if (0 <= f.tabIndex && uq(f)) {
                    f.focus();
                    b.preventDefault();
                    break
                }
            }
    },
    tF = function(a) {
        if (uq(a.b)) return a = a.g.find(function(c) {
            return uq(c.j())
        }), null != a ? a : null;
        var b = ib(a.a);
        return "auto" === b.code ? b : a.a[0]
    };
pF.prototype.Y = function(a) {
    rF(this) || !uh(a.keyCode) || a.altKey || a.ctrlKey || a.metaKey || (GB(this), EB(this).focus())
};
var wF = function(a, b, c, d) {
    this.za = a;
    this.Ia = b;
    this.Bd = c;
    this.c = d;
    this.b = this.a = null
};
var xF = function(a) {
        this.a = a;
        Em.M()
    },
    yF = function(a) {
        ty("TranslationStarred", function(b, c) {
            c = b ? new xF(c) : null;
            a && a(b, c)
        })
    },
    zF = function(a, b, c, d, e) {
        yy(a.a, b, c, d, 0, e)
    };
var AF = function(a, b, c, d) {
    this.a = a;
    this.w = b;
    this.o = c;
    this.h = "AUTO" === this.o.toUpperCase() && b.src ? b.src : null;
    this.m = d;
    this.b = this.$a();
    this.g = this.c = null
};
AF.prototype.$a = function() {
    return iv(this.w)
};
AF.prototype.Qa = function() {
    return this.o
};
var BF = function(a) {
    return "AUTO" === a.o.toUpperCase() && null != a.h ? a.h : a.o
};
AF.prototype.oa = function() {
    return this.m
};
var CF = function(a, b) {
        a.w = b;
        a.b = a.$a()
    },
    DF = function(a, b) {
        xc(a.b) || (a.b = b)
    },
    EF = function(a, b) {
        return a.a === b.a && a.b === b.b && BF(a) === BF(b) && a.oa() === b.oa()
    },
    FF = function(a, b) {
        var c = a.a.toLowerCase();
        a = a.$a().toLowerCase();
        b = b.toLowerCase();
        return c.includes(b) || a.includes(b)
    },
    GF = function(a) {
        return a.$a() !== a.b
    },
    HF = function(a) {
        var b = JSON.parse(JSON.stringify(a.w));
        x(b instanceof Object, "Translation result isn't JSON");
        b = new AF(a.a, b, a.o, a.m);
        null != a.c && (b.c = a.c);
        null != a.g && (b.g = a.g);
        null != a.h && (b.h = a.h);
        DF(b, a.b);
        return b
    };
var IF = function(a) {
        return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
    },
    JF = IF;
JF = IF;
var KF = function(a, b) {
        if (void 0 === b) {
            b = a + "";
            var c = b.indexOf(".");
            b = Math.min(-1 == c ? 0 : b.length - c - 1, 3)
        }
        return 1 == (a | 0) && 0 == b ? "one" : "other"
    },
    LF = KF;
LF = KF;
var PF = function(a) {
        this.g = a;
        this.b = this.a = this.h = null;
        a = sv;
        var b = pv;
        if (MF !== a || NF !== b) MF = a, NF = b, OF = new vv(1);
        this.o = OF
    },
    MF = null,
    NF = null,
    OF = null,
    QF = /'([{}#].*?)'/g,
    RF = /''/g,
    SF = function(a, b) {
        return yw(a, b)
    },
    yw = function(a, b) {
        if (a.g) {
            a.h = [];
            var c = TF(a, a.g);
            a.b = UF(a, c);
            a.g = null
        }
        if (!a.b || 0 == a.b.length) return "";
        a.a = yb(a.h);
        c = [];
        VF(a, a.b, b, !1, c);
        b = c.join("");
        for (x(-1 == b.search("#"), "Not all # were replaced."); 0 < a.a.length;) b = b.replace(a.c(a.a), a.a.pop());
        return b
    },
    VF = function(a, b, c, d, e) {
        for (var f = 0; f < b.length; f++) switch (b[f].type) {
            case 4:
                e.push(b[f].value);
                break;
            case 3:
                var g = b[f].value,
                    h = a,
                    l = e,
                    m = c[g];
                p(m) ? (h.a.push(m), l.push(h.c(h.a))) : l.push("Undefined parameter - " + g);
                break;
            case 2:
                g = b[f].value;
                h = a;
                l = c;
                m = d;
                var q = e,
                    r = g.Pe;
                p(l[r]) ? (r = g[l[r]], p(r) || (r = g.other, db(r, "Invalid option or missing other option for select block.")), VF(h, r, l, m, q)) : q.push("Undefined parameter - " + r);
                break;
            case 0:
                g = b[f].value;
                WF(a, g, c, LF, d, e);
                break;
            case 1:
                g = b[f].value;
                WF(a, g, c, JF, d, e);
                break;
            default:
                Za("Unrecognized block type: " + b[f].type)
        }
    },
    WF = function(a, b, c, d, e, f) {
        var g = b.Pe,
            h = b.yh,
            l = +c[g];
        isNaN(l) ? f.push("Undefined or invalid parameter - " + g) : (h = l - h, g = b[c[g]], p(g) || (x(0 <= h, "Argument index smaller than offset."), d = d(h), ab(d, "Invalid plural key."), g = b[d], p(g) || (g = b.other), db(g, "Invalid option or missing other option for plural block.")), b = [], VF(a, g, c, e, b), c = b.join(""), ab(c, "Empty block in plural."), e ? f.push(c) : (a = Ev(a.o, h), f.push(c.replace(/#/g, a))))
    },
    TF = function(a, b) {
        var c = a.h,
            d = v(a.c, a);
        b = b.replace(RF, function() {
            c.push("'");
            return d(c)
        });
        return b = b.replace(QF, function(e,
            f) {
            c.push(f);
            return d(c)
        })
    },
    XF = function(a) {
        var b = 0,
            c = [],
            d = [],
            e = /[{}]/g;
        e.lastIndex = 0;
        for (var f; f = e.exec(a);) {
            var g = f.index;
            "}" == f[0] ? (f = c.pop(), x(p(f) && "{" == f, "No matching { for }."), 0 == c.length && (f = {
                type: 1
            }, f.value = a.substring(b, g), d.push(f), b = g + 1)) : (0 == c.length && (b = a.substring(b, g), "" != b && d.push({
                type: 0,
                value: b
            }), b = g + 1), c.push("{"))
        }
        x(0 == c.length, "There are mismatched { or } in the pattern.");
        b = a.substring(b);
        "" != b && d.push({
            type: 0,
            value: b
        });
        return d
    },
    YF = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
    ZF = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
    $F = /^\s*(\w+)\s*,\s*select\s*,/,
    UF = function(a, b) {
        var c = [];
        b = XF(b);
        for (var d = 0; d < b.length; d++) {
            var e = {};
            if (0 == b[d].type) e.type = 4, e.value = b[d].value;
            else if (1 == b[d].type) {
                var f = b[d].value;
                switch (YF.test(f) ? 0 : ZF.test(f) ? 1 : $F.test(f) ? 2 : /^\s*\w+\s*/.test(f) ? 3 : 5) {
                    case 2:
                        e.type = 2;
                        e.value = aG(a, b[d].value);
                        break;
                    case 0:
                        e.type = 0;
                        e.value = bG(a, b[d].value);
                        break;
                    case 1:
                        e.type = 1;
                        e.value = cG(a, b[d].value);
                        break;
                    case 3:
                        e.type = 3;
                        e.value = b[d].value;
                        break;
                    default:
                        Za("Unknown block type for pattern: " +
                            b[d].value)
                }
            } else Za("Unknown part of the pattern.");
            c.push(e)
        }
        return c
    },
    aG = function(a, b) {
        var c = "";
        b = b.replace($F, function(h, l) {
            c = l;
            return ""
        });
        var d = {};
        d.Pe = c;
        b = XF(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            ab(f, "Missing select key element.");
            e++;
            x(e < b.length, "Missing or invalid select value element.");
            if (1 == b[e].type) var g = UF(a, b[e].value);
            else Za("Expected block type.");
            d[f.replace(/\s/g, "")] = g;
            e++
        }
        db(d.other, "Missing other key in select statement.");
        return d
    },
    bG = function(a, b) {
        var c = "",
            d = 0;
        b =
            b.replace(YF, function(l, m, q) {
                c = m;
                q && (d = parseInt(q, 10));
                return ""
            });
        var e = {};
        e.Pe = c;
        e.yh = d;
        b = XF(b);
        for (var f = 0; f < b.length;) {
            var g = b[f].value;
            ab(g, "Missing plural key element.");
            f++;
            x(f < b.length, "Missing or invalid plural value element.");
            if (1 == b[f].type) var h = UF(a, b[f].value);
            else Za("Expected block type.");
            e[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = h;
            f++
        }
        db(e.other, "Missing other key in plural statement.");
        return e
    },
    cG = function(a, b) {
        var c = "";
        b = b.replace(ZF, function(h, l) {
            c = l;
            return ""
        });
        var d = {};
        d.Pe = c;
        d.yh = 0;
        b = XF(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            ab(f, "Missing ordinal key element.");
            e++;
            x(e < b.length, "Missing or invalid ordinal value element.");
            if (1 == b[e].type) var g = UF(a, b[e].value);
            else Za("Expected block type.");
            d[f.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = g;
            e++
        }
        db(d.other, "Missing other key in selectordinal statement.");
        return d
    };
PF.prototype.c = function(a) {
    x(0 < a.length, "Literal array is empty.");
    return "\ufddf_" + (a.length - 1).toString(10) + "_"
};
var fG = function(a, b, c, d) {
        this.T = a;
        this.V = b;
        this.L = c;
        this.b = d;
        this.F = L.M();
        this.G = 1E4;
        this.h = 0;
        this.Fa = new vv("######");
        this.R = new PF(DATA.TooManyPhrases);
        this.o = null;
        this.g = [];
        if ("openDatabase" in window) {
            a = !0;
            try {
                window.openDatabase("", "", "", 0)
            } catch (e) {
                a = !1
            }
        } else a = !1;
        this.c = a;
        this.C = !1;
        this.c && dG(this);
        this.w = new SE;
        this.a = [];
        this.m = !1;
        eG(this)
    },
    dG = function(a) {
        yF(function(b, c) {
            b && c && (a.o = c, zF(a.o, null, null, null, function(d, e) {
                d && (a.g = lb(e, function(f) {
                    return new wF(f.sl, f.tl, f.src, f.trg)
                }), a.g.reverse());
                a.C = !0;
                gG(a)
            }))
        })
    },
    hG = function(a, b) {
        Dh(b, 6) && (b = Number(J(b, 6, ""))) && (a.G = b)
    },
    eG = function(a) {
        DATA.SignedIn && a.w.sb(function(b) {
            return iG(a, b)
        }, "", "", "", "", "1")
    },
    gG = function(a) {
        if ((!a.c || a.C) && a.m) {
            var b = a.F;
            N(b, tm(b, 241, a.g.length));
            b = a.F;
            N(b, tm(b, 242, a.a.length));
            b = {};
            Jm(a.b, "webapp", "stld", "b", (b.wc = a.g.length, b.gc = a.a.length, b));
            b = a.g.concat(a.a);
            a.h = b.length;
            a.T(b)
        }
    },
    jG = function(a, b, c) {
        if (a.c && !a.o) return !1;
        var d = BF(b),
            e = b.oa(),
            f = b.a,
            g = function() {
                var h = 0 === c;
                a.h += h ? 1 : -1;
                a.V(b, h)
            };
        if (0 === c) {
            if (300 <
                f.length) return a.L(DATA.PhraseTooLong), d = {}, Jm(a.b, "webapp", "stlm", "l", (d.sz = f.length, d)), sm(a.F, f.length), !1;
            if (a.h >= a.G) return f = {}, Jm(a.b, "webapp", "stlm", "n", (f.sz = a.h + 1, f)), um(a.F, a.h + 1), a.L(SF(a.R, {
                saved_phrase_limit: Ev(a.Fa, a.G)
            })), !1;
            UE(a.w, v(a.N, a, b, g), d, e, f, b.b, GF(b))
        } else if (1 == c) null != b.c ? VE(a.w, v(a.K, a, b, g), [b.c]) : a.c && vy(a.o.a, d, e, f, g);
        else throw "Unexpected operation";
        return !0
    };
fG.prototype.N = function(a, b, c) {
    hG(this, c);
    if (c && !J(c, 3) && J(c, 5)) {
        a.c = J(c, 5);
        a.g = Number(J(c, 4, ""));
        var d = {};
        d.trans = a.b;
        d = {
            sentences: [d]
        };
        a = new wF(BF(a), a.oa(), a.a, d);
        a.a = J(c, 5);
        a.b = ne(J(c, 4, ""));
        this.a.push(a);
        b(!0)
    } else Jm(this.b, "webapp", "stfl", "a"), km(this.F, 151)
};
fG.prototype.K = function(a, b, c) {
    hG(this, c);
    c && !J(c, 3) ? (Jm(this.b, "webapp", "stsu", "d"), c = this.F, N(c, O(c, 234)), a = kG(this, a), -1 === a ? (Jm(this.b, "webapp", "stfl", "u"), km(this.F, 154)) : (Jm(this.b, "webapp", "stsu", "u"), c = this.F, N(c, O(c, 235)), Bb(this.a, a, 1)), b(!0)) : (Jm(this.b, "webapp", "stfl", "d"), km(this.F, 152))
};
var iG = function(a, b) {
        hG(a, b);
        a.a = Fl(b, 2, OE).map(function(c) {
            var d = {};
            d.trans = c.Nc();
            d = new wF(J(c, 1), J(c, 2), J(c, 3), {
                sentences: [d]
            });
            d.a = J(c, 0);
            d.b = Number(J(c, 5, ""));
            return d
        });
        a.m = !0;
        gG(a)
    },
    lG = function(a, b, c, d, e) {
        zF(a.o, b, c, d, function(f, g) {
            e(f && 0 < g.length)
        })
    },
    kG = function(a, b) {
        var c = BF(b),
            d = b.oa(),
            e = b.a,
            f = b.b,
            g = -1;
        a.a.forEach(function(h, l) {
            c === h.za && d === h.Ia && e === h.Bd && f === iv(h.c) && (h.a && (b.c = h.a), h.b && (b.g = h.b), g = l)
        });
        return g
    },
    mG = function(a, b, c) {
        if (!a.c || a.o) {
            var d = BF(b),
                e = b.oa(),
                f = b.a; - 1 !== kG(a,
                b) ? c(!0) : a.c ? lG(a, d, e, f, c) : c(!1)
        }
    };
var oG = function(a, b) {
    K.call(this);
    var c = ba(a);
    for (a = c.next(); !a.done; a = c.next()) nG(a.value, this.a.bind(this));
    b = ba(b);
    for (a = b.next(); !a.done; a = b.next()) nG(a.value, this.b.bind(this))
};
ka(oG, K);
oG.prototype.a = function(a) {
    a = pG(a.target);
    if ("" != a) {
        var b = new Kg("select");
        b.text = a;
        this.dispatchEvent(b)
    }
};
oG.prototype.b = function(a) {
    a = pG(a.target);
    if ("" != a) {
        var b = new Kg("select");
        b.text = a;
        b.o = !0;
        this.dispatchEvent(b)
    }
};
var pG = function(a) {
    var b = "";
    try {
        if (rw(a)) var c = a.value.substring(a.selectionStart, a.selectionEnd);
        else if (sw()) {
            var d = tw(a),
                e = d[1];
            if (d[0].inRange(e)) {
                if ("textarea" == a.type) {
                    var f = e.duplicate(),
                        g = f.text;
                    a = g;
                    for (d = !1; !d;) 0 == f.compareEndPoints("StartToEnd", f) ? d = !0 : (f.moveEnd("character", -1), f.text == g ? a += "\r\n" : d = !0);
                    var h = a
                } else h = e.text;
                var l = h
            } else l = "";
            c = l
        } else throw Error("Cannot get the selection text");
        b = c.trim();
        if ("" != b) return b
    } catch (m) {}
    b = mz(window);
    return b.toString ? b.toString().trim() : ""
};

function nG(a, b) {
    H(a, "mouseup", b);
    H(a, "keyup", function(c) {
        16 == c.keyCode && b(c)
    })
};
var qG = function() {},
    rG = new qG,
    sG = ["click", "keydown", "keyup"];
qG.prototype.O = function(a, b, c, d, e) {
    var f = function(g) {
        var h = hh(b),
            l = lg(g.target) ? g.target.getAttribute("role") || null : null;
        "click" == g.type && Vg(g) ? h.call(d, g) : 13 != g.keyCode && 3 != g.keyCode || "keyup" == g.type ? 32 != g.keyCode || "keyup" != g.type || "button" != l && "tab" != l || (h.call(d, g), g.preventDefault()) : (g.type = "keypress", h.call(d, g))
    };
    f.tc = b;
    f.an = d;
    e ? e.O(a, sG, f, c) : H(a, sG, f, c)
};
qG.prototype.Ja = function(a, b, c, d, e) {
    for (var f, g = 0; f = sG[g]; g++) {
        var h = a;
        var l = f;
        var m = !!c;
        l = Xg(h) ? h.cf(l, m) : h ? (h = jh(h)) ? h.cf(l, m) : [] : [];
        for (h = 0; m = l[h]; h++) {
            var q = m.listener;
            if (q.tc == b && q.an == d) {
                e ? e.Ja(a, f, m.listener, c, d) : nh(a, f, m.listener, c, d);
                break
            }
        }
    }
};
var tG = function(a) {
    var b = a.jn;
    a = a.uid;
    a = '<div class="' + S("jfk-bubble") + '" role="alertdialog"' + (a ? ' aria-describedby="' + S(a) + '"' : "") + '><div class="' + S("jfk-bubble-content-id") + '"' + (a ? ' id="' + S(a) + '"' : "") + "></div>";
    b && (b = a += '<div class="' + S("jfk-bubble-closebtn-id") + " " + S("jfk-bubble-closebtn") + '" aria-label="', a = "Close".replace(Hn, In), a = b + a + '" role="button" tabindex=0></div>');
    a += '<div class="' + S("jfk-bubble-arrow-id") + " " + S("jfk-bubble-arrow") + '"><div class="' + S("jfk-bubble-arrowimplbefore") + '"></div><div class="' +
        S("jfk-bubble-arrowimplafter") + '"></div></div></div>';
    return P(a)
};
tG.a = "jfk.templates.bubble.main";
var uG = function(a) {
    X.call(this, a);
    this.c = new as("jfk-bubble", !0);
    this.b = new VD;
    this.K = []
};
w(uG, X);
uG.prototype.g = !0;
uG.prototype.h = !1;
var vG = function(a, b, c, d) {
        x(!a.Ba, "Must call setPosition() before rendering");
        a.c.Ne = !1;
        bs(a.c, 1, b, c, d)
    },
    wG = function(a, b) {
        x(!a.Ba, "Must call showCloseButton() before rendering");
        a.g = b
    },
    yG = function(a, b) {
        x(t(b) || b.nodeType || b instanceof vn || b instanceof Ad, "Content must be a string or HTML.");
        a.V = b;
        xG(a, b)
    },
    xG = function(a, b) {
        a = a.$b();
        b && a && (t(b) ? G(a, b) : b instanceof vn ? Ud(a, un(b)) : b instanceof Ad ? Ud(a, b) : (Ud(a, Kd), bg(a, b)))
    };
k = uG.prototype;
k.setAutoHide = function(a) {
    this.b.setAutoHide(a)
};
k.$b = function() {
    return this.pd("jfk-bubble-content-id")
};
k.Ma = function() {
    this.v = Tp(tG, {
        jn: this.g,
        uid: "bubble-" + Qa(this)
    }, void 0, this.a);
    xG(this, this.V);
    W(this.j(), !1);
    var a = this.b,
        b = this.j();
    RD(a);
    a.v = b;
    if (!Be) {
        a = this.b;
        b = gE(this.j(), "ease-out", 0, 1);
        var c = gE(this.j(), "ease-in", 1, 0);
        a.o = b;
        a.h = c
    }
    Np(this.j(), this.K)
};
k.ea = function() {
    uG.D.ea.call(this);
    Y(this).O(this.b, ["beforeshow", "show", "beforehide", "hide"], this.T);
    if (this.g) {
        var a = Y(this),
            b = this.pd("jfk-bubble-closebtn-id");
        rG.O(b, Ta(this.setVisible, !1), void 0, a.m || a, a)
    }
    a = this.j();
    x(a, "getElement() returns null.");
    b = this.pd("jfk-bubble-arrow-id");
    x(b, "No arrow element is found!");
    var c = this.c;
    c.a = a;
    c.h = b;
    a = this.b;
    a.L = this.c || void 0;
    a.isVisible() && a.m()
};
k.setVisible = function(a) {
    this.b.setVisible(a)
};
k.isVisible = function() {
    return this.b.isVisible()
};
var zG = function(a) {
    a.isVisible() && a.b.m()
};
uG.prototype.W = function() {
    this.b.La();
    delete this.b;
    uG.D.W.call(this)
};
uG.prototype.m = function() {
    nq(this.j());
    return !1
};
uG.prototype.T = function(a) {
    if ("show" == a.type || "hide" == a.type) {
        var b = Y(this),
            c = this.a;
        c = B ? Gg(c) : c.a;
        "show" == a.type ? b.O(c, "scroll", this.m) : b.Ja(c, "scroll", this.m)
    }
    b = this.dispatchEvent(a.type);
    this.h && "hide" == a.type && this.La();
    return b
};
var AG = function(a, b) {
        this.a = a;
        this.b = b
    },
    BG = {
        af: "af-ZA",
        am: "am-ET",
        az: "az-AZ",
        bg: "bg-BG",
        ca: "ca-ES",
        cs: "cs-CZ",
        da: "da-DK",
        de: "de-DE",
        el: "el-GR",
        eu: "eu-ES",
        fa: "fa-IR",
        fi: "fi-FI",
        tl: "fil-PH",
        gl: "gl-ES",
        gu: "gu-IN",
        hi: "hi-IN",
        hr: "hr-HR",
        hu: "hu-HU",
        hy: "hy-AM",
        iw: "he-IL",
        id: "id-ID",
        is: "is-IS",
        it: "it-IT",
        ja: "ja-JP",
        jw: "jv-ID",
        ka: "ka-GE",
        km: "km-KH",
        kn: "kn-IN",
        ko: "ko-KR",
        lo: "lo-LA",
        lt: "lt-LT",
        lv: "lv-LV",
        ml: "ml-IN",
        mr: "mr-IN",
        ms: "ms-MY",
        ne: "ne-NP",
        no: "nb-NO",
        nl: "nl-NL",
        pl: "pl-PL",
        ro: "ro-RO",
        ru: "ru-RU",
        si: "si-LK",
        sk: "sk-SK",
        sl: "sl-SI",
        sr: "sr-RS",
        su: "su-ID",
        sv: "sv-SE",
        te: "te-IN",
        th: "th-TH",
        tr: "tr-TR",
        uk: "uk-UA",
        vi: "vi-VN",
        zu: "zu-ZA",
        "ar::ae": "ar-AE",
        "ar::bh": "ar-BH",
        "ar::dz": "ar-DZ",
        "ar::eg": "ar-EG",
        "ar::il": "ar-IL",
        "ar::jo": "ar-JO",
        "ar::kw": "ar-KW",
        "ar::lb": "ar-LB",
        "ar::ma": "ar-MA",
        "ar::om": "ar-OM",
        "ar::ps": "ar-PS",
        "ar::qa": "ar-QA",
        "ar::sa": "ar-SA",
        "ar::tn": "ar-TN",
        ar: "ar-EG",
        "bn::bd": "bn-BD",
        "bn::in": "bn-IN",
        bn: "bn-BD",
        "en::au": "en-AU",
        "en::ca": "en-CA",
        "en::com": "en-US",
        "en::gh": "en-GH",
        "en::ie": "en-IE",
        "en::in": "en-IN",
        "en::ke": "en-KE",
        "en::ng": "en-NG",
        "en::nz": "en-NZ",
        "en::ph": "en-PH",
        "en::tz": "en-TZ",
        "en::uk": "en-GB",
        "en::za": "en-ZA",
        en: "en-001",
        "es::ar": "es-AR",
        "es::bo": "es-BO",
        "es::cl": "es-CL",
        "es::co": "es-CO",
        "es::cr": "es-CR",
        "es::do": "es-DO",
        "es::ec": "es-EC",
        "es::es": "es-ES",
        "es::gt": "es-GT",
        "es::hn": "es-HN",
        "es::mx": "es-MX",
        "es::ni": "es-NI",
        "es::pa": "es-PA",
        "es::pe": "es-PE",
        "es::pr": "es-PR",
        "es::py": "es-PY",
        "es::sv": "es-SV",
        "es::com": "es-US",
        "es::uy": "es-UY",
        "es::ve": "es-VE",
        es: "es-ES",
        "fr::ca": "fr-CA",
        "fr::fr": "fr-FR",
        fr: "fr-FR",
        "pt::pt": "pt-PT",
        pt: "pt-BR",
        "ta::in": "ta-IN",
        "ta::lk": "ta-LK",
        "ta::sg": "ta-SG",
        "ta::my": "ta-MY",
        ta: "ta-IN",
        "sw::ke": "sw",
        "sw::tz": "sw-TZ",
        sw: "sw",
        "ur::pk": "ur-PK",
        "ur::in": "ur-IN",
        ur: "ur-PK",
        "zh-CN:zh-TW:hk": "yue-Hant-HK",
        "zh-CN:zh-CN:hk": "cmn-Hans-HK",
        "zh-CN:zh-TW": "cmn-Hant-TW",
        "zh-CN": "cmn-Hans-CN"
    };
AG.prototype.get = function(a) {
    return BG[a + ":" + this.b + ":" + this.a] || BG[a + "::" + this.a] || BG[a + ":" + this.b] || BG[a] || null
};
var CG = function(a, b) {
    uG.call(this, b);
    this.C = 0;
    this.c.Df = !0;
    this.setAutoHide(!1);
    this.c.b = a;
    zG(this);
    vG(this, 2);
    wG(this, !1);
    yG(this, Tp(ao, {
        label: MSG_SPEAK_NOW
    }))
};
w(CG, uG);
CG.prototype.ea = function() {
    CG.D.ea.call(this);
    this.w = D("gt-speech-l3", this.j())
};
var DG = function(a) {
    0 == a.C++ && T(a.w, "trigger");
    Bi(a.N, 600, a)
};
CG.prototype.N = function() {
    0 == --this.C && U(this.w, "trigger")
};
var EG = function(a, b, c, d, e, f, g, h, l) {
    K.call(this);
    this.Y = a;
    this.K = b;
    this.a = null;
    oo && "webkitSpeechRecognition" in window && (a = new webkitSpeechRecognition, a.continuous = ht(), a.interimResults = !0, this.a = a);
    this.V = new AG(c, d);
    this.T = !e;
    this.c = "";
    this.Hb = !1;
    this.b = null;
    this.w = "init";
    this.m = f || null;
    this.C = l || null;
    this.L = g || null;
    this.na = !!h;
    this.aa = new Uu;
    this.o = Em.M();
    this.X = ql.M();
    this.F = L.M();
    this.h = null;
    this.G = ""
};
w(EG, K);
var FG = function(a, b) {
        var c = a.X;
        b ? (c.m = c.b, c.b = 3) : c.b = c.m;
        a.g.setVisible(b && a.T)
    },
    GG = "init:buttonOn end:buttonOn buttonOn:start start:speechStart speechStart:result result:result result:buttonOff buttonOff:speechEnd speechEnd:end".split(" "),
    HG = function(a, b) {
        if (!(0 <= GG.indexOf(a.w + ":" + b))) {
            var c = {};
            c.from = a.w;
            c.to = b;
            a.o.log("speech", c)
        }
        a.w = b
    };
k = EG.prototype;
k.Mn = function() {
    if (this.b.Ea(16)) {
        var a = this.F;
        N(a, O(a, 149));
        Jm(this.o, "webapp", "si", "start", {
            sl: this.G
        });
        GA(this.K, !0);
        this.c = "";
        this.a.start();
        HG(this, "buttonOn")
    } else this.a.stop(), FG(this, !1), HG(this, "buttonOff"), GA(this.K, !1)
};
k.Nn = function() {
    if (!this.b.isEnabled()) {
        this.dispatchEvent("userInteractionWhileDisabled");
        var a = this.F;
        N(a, O(a, 305));
        Jm(this.o, "webapp", "dia", "click", {
            dias: "vi"
        })
    }
};
k.Bl = function() {
    this.Hb = !0;
    FG(this, !0);
    HG(this, "start");
    this.dispatchEvent("start")
};
k.On = function() {
    DG(this.g);
    HG(this, "speechStart");
    this.dispatchEvent("speechStart")
};
k.Yk = function() {
    IG(this);
    HG(this, "end");
    this.dispatchEvent("end")
};
k.zl = function() {
    DG(this.g);
    HG(this, "speechEnd")
};
var IG = function(a) {
    a.Hb = !1;
    FG(a, !1);
    a.b.$c(!1)
};
EG.prototype.N = function(a) {
    DG(this.g);
    for (var b = "", c = a.resultIndex; c < a.results.length; ++c) this.a.continuous && (this.c || b) && 0 < a.results[c].length && a.results[c][0].transcript && a.results[c][0].transcript.length && " " != a.results[c][0].transcript[0] || (a.results[c].isFinal ? this.c += a.results[c][0].transcript : b += a.results[c][0].transcript);
    a = this.c + b;
    Mm(this.o, "inputm", 3);
    this.Y.b(a);
    HG(this, "result")
};
EG.prototype.ba = function() {
    IG(this);
    HG(this, "error")
};
EG.prototype.R = function() {
    IG(this);
    HG(this, "noMatch")
};
EG.prototype.kb = function() {
    return this.Hb
};
var JG = function(a, b, c, d, e, f) {
    X.call(this);
    this.T = a;
    this.aa = b;
    this.sa = c;
    this.ba = d || "";
    this.ya = e || "";
    this.Za = f || function() {};
    this.c = this.N = this.g = "";
    this.b = !1;
    this.C = !0;
    this.w = [];
    this.m = "";
    this.V = !1;
    this.K = new Rr(this.Y, 1E3, this);
    this.h = Em.M();
    this.F = L.M()
};
w(JG, X);
JG.prototype.setVisible = function(a) {
    a || (this.V = this.b = !1, this.K.stop());
    W(this.j(), a)
};
JG.prototype.isVisible = function() {
    return uq(this.j())
};
var KG = function(a, b) {
    if ("" == b.me) a.setVisible(!1);
    else {
        if (b.Zg) {
            if (a.V) return
        } else a.V = !0;
        a.m = b.Zg || "";
        a.g = b.Ei;
        a.N = b.Qi;
        a.c = a.m ? a.c : b.me;
        a.X = b.Zj || ee(b.me);
        a.b = b.Hh && a.C;
        var c = b.Zg ? a.aa : b.Hh && a.C ? a.ba : a.sa;
        if (a.b && sb(b.Zf, 6)) {
            a.setVisible(!1);
            var d = Jf("src-translit");
            d && G(d, a.c);
            if (b.result)
                for (d = 0; d < b.result.cc(); d++) b.result.ab(d).Ra[3] = 0 == d ? a.c : ""
        } else a.b ? (d = a.j(), U(d, "gt-spell-correct-message"), T(d, "gt-related-suggest-message")) : (d = a.j(), U(d, "gt-related-suggest-message"), T(d, "gt-spell-correct-message")),
            a.setVisible(!0);
        G(a.j(), c + " ");
        a.w = b.Zf;
        c = F("a", {
            tabindex: 0,
            href: "javascript:void(0)"
        });
        Zp(c, {
            direction: kc(a.N) ? "rtl" : "ltr"
        });
        Zp(c, {
            "text-decoration": "none"
        });
        c.innerHTML = a.X;
        H(c, "click", a.Ca, !1, a);
        a.j().appendChild(c);
        c = F("DIV", "gt-spell-icon");
        a.j().appendChild(c);
        a.b && !sb(b.Zf, 6) && (b = F("div"), G(b, a.ya + " "), c = F("a", {
            tabindex: 1,
            href: "javascript:void(0)"
        }), H(c, "click", a.Pa, !1, a), G(c, a.g), b.appendChild(c), a.j().appendChild(b), T(b, "gt-revert-correct-message"));
        a.K.start()
    }
};
JG.prototype.Y = function() {
    var a = {};
    a.orig = this.g;
    a.sl = this.N;
    this.b && (a.autocorrect = this.b);
    this.m ? (a.corrlang = this.m, this.h.log("langidshow", a), gm(this.F, 5, 1, !1)) : (a.corr = this.c, a.corrtype = this.w, this.h.log("spell", a), gm(this.F, 4, 1, !1))
};
JG.prototype.Ca = function() {
    if (this.m) {
        var a = this.g;
        64 < a.length && (a = a.substr(0, 64));
        Mm(this.h, "orig", a);
        Mm(this.h, "psl", this.N);
        this.Za(this.X, this.m);
        wt(this.T, this.m, "", this.g, "tws_lsugg");
        a = this.F;
        N(a, cm(a, 79, 5, 1, !1, 1))
    } else a = this.g, 64 < a.length && (a = a.substr(0, 64)), Mm(this.h, "orig", a), Mm(this.h, "corrtype", this.w), this.b ? wt(this.T, "", "", this.c, "tws_confirm") : wt(this.T, "", "", this.c, "tws_spell"), a = this.F, N(a, cm(a, 79, 4, 1, !1, 1));
    a = this.K;
    a.kb() && (a.stop(), a.pg());
    this.setVisible(!1)
};
var LG = {},
    MG = (LG[1] = 1, LG[2] = 2, LG[3] = 3, LG[4] = 4, LG[5] = 5, LG[6] = 6, LG[7] = 7, LG[8] = 8, LG[9] = 9, LG[10] = 10, LG);
JG.prototype.Pa = function() {
    var a = this.c;
    64 < a.length && (a = a.substr(0, 64));
    Mm(this.h, "corr", a);
    Mm(this.h, "corrtype", this.w);
    this.C = !1;
    wt(this.T, "", "", this.g, "tws_revert");
    a = this.K;
    a.kb() && (a.stop(), a.pg());
    this.setVisible(!1);
    a = this.F;
    for (var b = this.g, c = [], d = 0; d < this.w.length; d++) {
        var e = MG[this.w[d]];
        c.push(e ? e : 0)
    }
    d = new dl;
    C(d, 1, b);
    C(d, 2, c || []);
    b = O(a, 139);
    mf(b, 55, d);
    N(a, b)
};
var NG = function() {
        this.a = Iw(INPUT_SUGGESTION_SERVER_URL);
        this.bd = 5E3
    },
    OG = 0;
NG.prototype.send = function(a, b, c, d) {
    a = a ? Vb(a) : {};
    d = d || "_" + (OG++).toString(36) + Ua().toString(36);
    var e = "_callbacks___" + d;
    b && (n[e] = PG(d, b), a.callback = e);
    b = {
        timeout: this.bd,
        Uj: !0
    };
    e = rc(this.a);
    e = sc.exec(e);
    var f = e[3] || "";
    e = tc(e[1] + uc("?", e[2] || "", a) + uc("#", f, void 0));
    b = Ty(e, b);
    My(b, null, QG(d, a, c), void 0);
    return {
        ra: d,
        Jh: b
    }
};
NG.prototype.cancel = function(a) {
    a && (a.Jh && a.Jh.cancel(), a.ra && RG(a.ra, !1))
};
var QG = function(a, b, c) {
        return function() {
            RG(a, !1);
            c && c(b)
        }
    },
    PG = function(a, b) {
        return function(c) {
            RG(a, !0);
            b.apply(void 0, arguments)
        }
    },
    RG = function(a, b) {
        a = "_callbacks___" + a;
        if (n[a])
            if (b) try {
                delete n[a]
            } catch (c) {
                n[a] = void 0
            } else n[a] = Fa
    };
var SG = function() {
        var a = INPUT_SUGGESTION_CLIENT_NAME,
            b = INPUT_SUGGESTION_DATASET;
        this.g = new NG;
        this.g.bd = 500;
        this.a = null;
        this.h = 0;
        this.c = !1;
        this.C = Em.M();
        this.F = L.M();
        this.m = b || "translate";
        this.G = a || "translate_separate_corpus"
    },
    nD = function(a, b, c, d, e) {
        CD(a);
        if (0 == b.length || 64 < b.length || "auto" == c) e([]);
        else {
            c = "zh-CN" == c || "zh-TW" == c ? "zh" : c;
            var f = 167 - (Ua() - a.h);
            0 > f && (f = 0);
            a.b = Bi(function() {
                if (this.b) {
                    this.b = void 0;
                    var g = c;
                    this.h = Ua();
                    var h = {};
                    h.q = b;
                    h.client = this.G;
                    h.ds = this.m;
                    h.hl = g;
                    h.requiredfields = "tl:" +
                        d;
                    this.a = this.g.send(h, v(this.w, this, b, g, d, e), v(this.o, this, "4", b, g, d, 144))
                }
            }, f, a)
        }
    },
    CD = function(a) {
        a.a && (a.c = !0, a.g.cancel(a.a), a.a = null);
        a.b && (Ci(a.b), a.b = void 0)
    };
SG.prototype.o = function(a, b, c, d, e, f, g, h) {
    if (!this.c) {
        b = {
            q: b,
            sl: c,
            tl: d
        };
        if (null != g) try {
            b.se = g.substring(0, 64)
        } catch (l) {
            throw Error(l + " opt_context is " + g);
        }
        h && (b.msg = h.substring(0, 64));
        km(this.F, e);
        Jm(this.C, "webapp", "is", a, b)
    }
    this.c = !1
};
SG.prototype.w = function(a, b, c, d, e) {
    try {
        var f = lb(e[1], function(g) {
            return he(g[0])
        }, this);
        d(f)
    } catch (g) {
        this.o("5", a, b, c, 53, null, dj(e), g.message)
    }
    this.a = null
};
var TG = function() {
        this.a = [];
        this.c = this.b = null
    },
    HD = function(a) {
        var b = a.a.length;
        b += a.b ? 1 : 0;
        b += a.c ? 1 : 0;
        return a = b + (a.c ? 1 : 0)
    };
var UG = function(a) {
    this.c = a || "menu"
};
w(UG, Ow);
Ga(UG);
UG.prototype.a = function() {
    return "gt-is"
};
UG.prototype.h = function(a) {
    return kg(a)
};
UG.prototype.b = function(a) {
    return "DIV" == a.tagName && a.firstChild && "DIV" == a.firstChild.tagName ? !0 : !1
};
UG.prototype.m = function() {
    var a = F("DIV", "gt-is"),
        b = F("DIV", "gt-is-ctr");
    bg(a, b);
    return a
};
var VG = function(a, b, c) {
    Vw.call(this, a || Uw(UG.M()), b || UG.M(), c);
    this.b = [];
    this.h = this.g = this.c = null;
    fx(this, !1)
};
w(VG, Vw);
var BD = function(a, b) {
        y(a.b, function(c) {
            this.removeChild(c, !0)
        }, a);
        y(b, function(c, d) {
            this.c ? this.kd(c, $q(this, this.c), !0) : this.hb(c, !0);
            d = "gt-is-si-" + d;
            c.pd("gt-is-sg").id = d
        }, a);
        a.b = b
    },
    FD = function(a, b) {
        a.g && a.removeChild(a.g, !0);
        if (b) {
            var c = $q(a, a.h) + 1;
            a.kd(b, c, !0)
        }
        a.g = b
    },
    GD = function(a, b) {
        (a = a.b[0]) && (a = a.pd(a.Lh ? "gt-is-ld-top" : "gt-is-ld")) && W(a, b)
    };
VG.prototype.bb = function(a) {
    return 27 == a.keyCode ? (this.setVisible(!1), a.stopPropagation(), a.preventDefault(), !0) : VG.D.bb.call(this, a)
};
var WG = function(a, b, c) {
    var d = "ss";
    null != c && c && (d = "m" + d);
    this.w = b;
    Ds.call(this, a, d, MSG_SYNONYMS_OF, MSG_SYNONYMS, 8);
    this.g = []
};
w(WG, Ds);
k = WG.prototype;
k.update = function(a, b, c, d) {
    WG.D.update.call(this, a, b, c, d);
    if (!d || 0 == I(d, 11)) return !1;
    dg(this.b);
    this.zd();
    var e = c = 0;
    for (a = 0; a < I(d, 11); ++a) {
        var f = new dp(El(d, 11, a)),
            g = J(f, 2);
        c += f.b();
        for (b = 0; b < f.b(); ++b) e += I(f.c(b), 0)
    }
    if (b = 2 < c / I(d, 11) && 1 < e - c) a = MSG_N_MORE_SYNONYMS_LABEL.replace("%1$s", (e - c).toLocaleString(this.Sa)), Fs(this, a, MSG_FEWER_SYNONYMS_LABEL);
    c = 1 == c / I(d, 11);
    g && (this.Se = g, Es(this, g));
    for (a = 0; a < I(d, 11); ++a) {
        f = new dp(El(d, 11, a));
        g = F("DIV", {
            "class": "gt-cd-pos"
        });
        this.b.appendChild(g);
        G(g, J(f, 0));
        g = f;
        f = c;
        e = b;
        var h = F("UL", {
            "class": "gt-syn-list"
        });
        var l = kc(this.za) ? "rtl" : "ltr";
        Zp(h, {
            direction: l
        });
        if (e) {
            l = F("SPAN", {
                "class": "gt-syn-span"
            });
            for (var m = F("DIV", {
                    "class": "gt-syn-row"
                }, l), q = [], r = 0; r < g.b(); ++r) {
                var u = g.c(r);
                u = Fh(u, 0, 0);
                if (!sb(q, u)) {
                    q.push(u);
                    this.w || 0 < r && l.appendChild(Zf(", "));
                    var A = F("SPAN", {
                        "class": "gt-cd-cl"
                    });
                    l.appendChild(A);
                    this.w ? G(A, " " + u + " ") : G(A, u);
                    this.g.push(A)
                }
            }
            l = F("DIV", {
                "class": "gt-syn-summary-row"
            }, m);
            h.appendChild(l)
        }
        for (l = 0; l < g.b(); ++l) {
            m = g.c(l);
            r = e;
            u = f ? "DIV" : "LI";
            q = F("SPAN", {
                "class": "gt-syn-span"
            });
            u = F(u, {
                "class": "gt-syn-row"
            }, q);
            r = Gs(u, !r);
            for (u = 0; u < I(m, 0); ++u) A = F("SPAN", {
                "class": "gt-cd-cl"
            }), q.appendChild(A), this.w ? G(A, " " + Fh(m, 0, u) + " ") : G(A, Fh(m, 0, u)), this.c.push(A), this.w || u < I(m, 0) - 1 && q.appendChild(Zf(", "));
            h.appendChild(r)
        }
        this.b.appendChild(h)
    }
    this.setVisible(!0);
    return !0
};
k.ea = function() {
    WG.D.ea.call(this);
    Y(this).O(this.j(), "click", this.Qn)
};
k.Qn = function(a) {
    Mp(a.target, "gt-cd-cl") && this.dispatchEvent(new Kg("a", a.target))
};
k.Xd = function(a) {
    WG.D.Xd.call(this, a);
    for (var b = Mf("gt-syn-summary-row", this.j()), c = 0; c < b.length; c++) {
        var d = b[c],
            e = D("gt-syn-row", d),
            f = Dq(e, "margin");
        e = rq(e).height + f.top + f.bottom;
        Zp(d, "max-height", a ? 0 : e + "px")
    }
};
k.qe = function() {
    return this.m ? WG.D.qe.call(this) : this.g.length
};
k.ng = function(a) {
    return this.m ? WG.D.ng.call(this, a) : this.g.indexOf(a)
};
k.zd = function() {
    WG.D.zd.call(this);
    this.g = []
};
var XG = function(a, b) {
    this.C = Em.M();
    this.F = L.M();
    this.g = a;
    B || xe || ze || H(a, "copy", this.m, !1, this);
    this.a = b;
    for (a = 0; a < b.length; a++) H(b[a], "mousedown", this.w, !1, this);
    this.c = this.b = null;
    this.o = this.h = !1
};
w(XG, Hg);
XG.prototype.W = function() {
    XG.D.W.call(this);
    nh(this.g, "copy", this.m, !1, this);
    this.g = null;
    for (var a = 0; a < this.a.length; a++) nh(this.a[a], "mousedown", this.w, !1, this);
    this.a = null
};
XG.prototype.m = function() {
    var a = Xz();
    a && this.g && (this.c = a, Bi(this.G, 0, this), Jf("gt-res-edit") && (this.h = uq(Jf("gt-res-edit")), this.o = uq(Jf("gt-res-undo")), W(Jf("gt-res-edit"), !1), W(Jf("gt-res-undo"), !1)), a = mz(window).toString(), this.b = $z(a))
};
XG.prototype.w = function(a) {
    var b = a.b.detail;
    1 < b && Vg(a) && sb(this.a, a.target) && (a.preventDefault(), Zz(this.g), a = {}, a.clickCount = b, this.C.log("dblClickSelectall", a), b = this.F, N(b, O(b, 236)))
};
XG.prototype.G = function() {
    this.c && (this.c.select(), this.c = null);
    this.b && (hg(this.b), this.b = null);
    this.h && W(Jf("gt-res-edit"), !0);
    this.o && W(Jf("gt-res-undo"), !0)
};
var YG = function(a) {
    this.a = wq(Hw(""));
    this.b = (Ja(a) ? a.join(",") : a) + "{font-family:%FONT%arial,sans-serif!important}"
};
YG.prototype.set = function(a) {
    vq(this.a, Hw("" == a ? "" : this.b.replace("%FONT%", '"' + a + '",')))
};
var ZG = function() {
    nF.M();
    var a = mF("\u1288") == mF("\u1290"),
        b = oF("\u09a5\u09cd"),
        c = oF("\u1780\u17d1"),
        d = oF("\u0e81\u0ec8"),
        e = oF("\u0d15\u0d4d"),
        f = oF("\u1001\u1039\u1010"),
        g = oF("\u0da5\u0dca");
    var h = oF("\u0ba4\u0bcd") || mF("\u0bb1\u0bc6\u0bbe") + mF("\u0bb1") != mF("\u0bb1\u0bc6") + mF("\u0bb1\u0bbe");
    this.a = {
        am: a,
        bn: b,
        km: c,
        lo: d,
        ml: e,
        my: f,
        ps: !0,
        sd: !0,
        si: g,
        ta: h
    }
};
Ga(ZG);
var $G = {
        "Noto Sans Ethiopic": "notosansethiopic",
        "Noto Naskh Arabic": "notonaskharabic",
        "Noto Sans Malayalam": "notosansmalayalam",
        "Noto Sans Myanmar": "notosansmyanmar",
        "Noto Sans Sinhala": "notosanssinhala"
    },
    aH = {
        Dhyana: $e || we || Ye || Xe || We
    },
    bH = {
        lo: Ee && 0 <= Lc(Vr, "6.0")
    },
    cH = {
        am: "Noto Sans Ethiopic",
        bn: "Lohit Bengali",
        lo: "Dhyana",
        km: "Nokora",
        ml: "Noto Sans Malayalam",
        my: "Noto Sans Myanmar",
        ps: "Noto Naskh Arabic",
        sd: "Noto Naskh Arabic",
        si: "Noto Sans Sinhala",
        ta: "Lohit Tamil"
    },
    dH = function() {
        this.a = {};
        ZG.M()
    };
Ga(dH);
var hH = function() {
        this.h = ZG.M();
        this.g = dH.M();
        this.c = new YG(eH);
        this.a = new YG(fH);
        this.b = new YG(gH)
    },
    eH = ["body", "#gb"],
    fH = "#source .gt-hl-layer .gt-baf-translations .round-trip-content .vk-cap .vk-t .orig".split(" "),
    gH = "#result_box .gt-baf-word .gt-baf-word-clickable .alt-menu .gt-ex-translate #alt-input-text .text-wrap".split(" "),
    iH = function(a, b, c) {
        a: {
            var d = bH[c],
                e = a.h.a[c];
            if ((null == d || !d) && null != e && e && (c = cH[c], null != c && (d = aH[c], null == d || !d))) break a;
            c = ""
        }
        a = a.g;
        "" != c && null == a.a[c] && (a = a.a, d = c,
            e = new Qm, null != $G[d] ? Um(e, "/earlyaccess/" + $G[d] + ".css") : (Um(e, "/css"), e.a.set("family", d)), a[c] = wq(Hw("@import url(//fonts.googleapis.com" + e.toString() + ");")));b.set(c)
    };
var jH = function(a) {
    K.call(this);
    this.v = a;
    this.b = E("tlid-app-download-button", this.v);
    this.F = L.M();
    this.a = Em.M();
    Ah(this.b, this.c.bind(this))
};
ka(jH, K);
jH.prototype.c = function() {
    if (Mp(this.v, "popup-open")) kH(this, !1);
    else {
        if (Mp(this.v, "tlid-android-download")) {
            var a = this.F;
            N(a, O(a, 333));
            this.a.log("cad=and", {})
        } else Mp(this.v, "tlid-ios-download") && (a = this.F, N(a, O(a, 334)), this.a.log("cad=ios", {}));
        kH(this, !0)
    }
};
var kH = function(a, b) {
    V(a.v, "popup-open", b);
    b && a.dispatchEvent("popup_opened")
};
var mH = function(a) {
        this.v = a;
        a = Mf("tlid-app-download-button-container", this.v);
        for (var b = [], c = 0; c < a.length; c++) b.push(new jH(a[c]));
        this.a = b;
        lH(this)
    },
    lH = function(a) {
        a.a.forEach(function(b) {
            H(b, "popup_opened", v(a.b, a, b), !1, a)
        });
        H(a.v, "keydown", function(b) {
            zh(b, Mf("tlid-app-download-button", a.v))
        }, !1)
    };
mH.prototype.b = function(a) {
    this.a.forEach(function(b) {
        b != a && kH(b, !1)
    })
};
var nH = function(a) {
        this.a = a;
        this.b = E("tlid-brain-logo", this.a);
        this.c = E("tlid-no-brain-logo", this.a)
    },
    qH = function(a, b, c) {
        b = oH(b, c) && !pH(b, c) ? !0 : "en" !== b && "en" !== c ? oH(b, "en") && oH("en", c) && !pH(b, c) : !1;
        V(a.b, "hidden", !b);
        V(a.c, "hidden", b)
    },
    oH = function(a, b) {
        var c = !1;
        y(DATA.NeuralEnabledPairs, function(d) {
            d.Source === a && d.Target === b && (c = !0)
        });
        return c
    },
    pH = function(a, b) {
        var c = !1;
        y(DATA.ExcludedPairs, function(d) {
            d.Source === a && d.Target === b && (c = !0)
        });
        return c
    };
var rH = function(a) {
    ps(a, 2)
};
var tH = function(a, b, c) {
    K.call(this);
    this.target = a;
    this.m = b || a;
    this.g = c || new Wp(NaN, NaN, NaN, NaN);
    this.c = Hf(a);
    this.a = new Hq(this);
    Jg(this, this.a);
    this.deltaY = this.deltaX = this.C = this.G = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.o = !0;
    this.b = !1;
    H(this.m, ["touchstart", "mousedown"], this.Si, !1, this);
    this.h = sH
};
w(tH, K);
var sH = n.document && n.document.documentElement && !!n.document.documentElement.setCapture && !!n.document.releaseCapture;
k = tH.prototype;
k.qa = function(a) {
    this.o = a
};
k.W = function() {
    tH.D.W.call(this);
    nh(this.m, ["touchstart", "mousedown"], this.Si, !1, this);
    Mq(this.a);
    this.h && this.c.releaseCapture();
    this.m = this.target = null
};
k.Si = function(a) {
    var b = "mousedown" == a.type;
    if (!this.o || this.b || b && !Vg(a)) this.dispatchEvent("earlycancel");
    else if (this.dispatchEvent(new uH("start", this, a.clientX, a.clientY, a))) {
        this.b = !0;
        b && a.preventDefault();
        b = this.c;
        var c = b.documentElement,
            d = !this.h;
        this.a.O(b, ["touchmove", "mousemove"], this.fl, {
            capture: d,
            passive: !1
        });
        this.a.O(b, ["touchend", "mouseup"], this.Ze, d);
        this.h ? (c.setCapture(!1), this.a.O(c, "losecapture", this.Ze)) : this.a.O(Uf(b), "blur", this.Ze);
        this.K && this.a.O(this.K, "scroll", this.L, d);
        this.clientX = this.G = a.clientX;
        this.clientY = this.C = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        this.deltaX = this.target.offsetLeft;
        this.deltaY = this.target.offsetTop;
        this.w = Tf(If(this.c).a)
    }
};
k.Ze = function(a, b) {
    Mq(this.a);
    this.h && this.c.releaseCapture();
    this.b ? (this.b = !1, this.dispatchEvent(new uH("end", this, a.clientX, a.clientY, a, vH(this, this.deltaX), wH(this, this.deltaY), b || "touchcancel" == a.type))) : this.dispatchEvent("earlycancel")
};
k.fl = function(a) {
    if (this.o) {
        var b = a.clientX - this.clientX,
            c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        if (!this.b) {
            var d = this.G - this.clientX,
                e = this.C - this.clientY;
            if (0 < d * d + e * e)
                if (this.dispatchEvent(new uH("start", this, a.clientX, a.clientY, a))) this.b = !0;
                else {
                    this.lc || this.Ze(a);
                    return
                }
        }
        c = xH(this, b, c);
        b = c.x;
        c = c.a;
        this.b && this.dispatchEvent(new uH("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (yH(this, a, b, c), a.preventDefault())
    }
};
var xH = function(a, b, c) {
    var d = Tf(If(a.c).a);
    b += d.x - a.w.x;
    c += d.a - a.w.a;
    a.w = d;
    a.deltaX += b;
    a.deltaY += c;
    return new Df(vH(a, a.deltaX), wH(a, a.deltaY))
};
tH.prototype.L = function(a) {
    var b = xH(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    yH(this, a, b.x, b.a)
};
var yH = function(a, b, c, d) {
        a.target.style.left = c + "px";
        a.target.style.top = d + "px";
        a.dispatchEvent(new uH("drag", a, b.clientX, b.clientY, b, c, d))
    },
    vH = function(a, b) {
        var c = a.g;
        a = isNaN(c.left) ? null : c.left;
        c = isNaN(c.width) ? 0 : c.width;
        return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
    },
    wH = function(a, b) {
        var c = a.g;
        a = isNaN(c.top) ? null : c.top;
        c = isNaN(c.height) ? 0 : c.height;
        return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
    },
    uH = function(a, b, c, d, e, f, g) {
        Kg.call(this, a);
        this.clientX =
            c;
        this.clientY = d;
        this.left = p(f) ? f : b.deltaX;
        this.top = p(g) ? g : b.deltaY
    };
w(uH, Kg);
(function() {
    for (var a = ["ms", "moz", "webkit", "o"], b = 0, c; c = a[b] && !n.requestAnimationFrame; ++b) n.requestAnimationFrame = n[c + "RequestAnimationFrame"], n.cancelAnimationFrame = n[c + "CancelAnimationFrame"] || n[c + "CancelRequestAnimationFrame"];
    if (!n.requestAnimationFrame) {
        var d = 0;
        n.requestAnimationFrame = function(e) {
            var f = (new Date).getTime(),
                g = Math.max(0, 16 - (f - d));
            d = f + g;
            return n.setTimeout(function() {
                e(f + g)
            }, g)
        };
        n.cancelAnimationFrame || (n.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }
})();
var zH = [
        [],
        []
    ],
    AH = 0,
    BH = !1,
    CH = 0,
    EH = function(a, b) {
        var c = CH++,
            d = {
                jm: {
                    id: c,
                    zc: a.measure,
                    context: b
                },
                vm: {
                    id: c,
                    zc: a.um,
                    context: b
                },
                state: {},
                Ib: void 0,
                Ff: !1
            };
        return function() {
            0 < arguments.length ? (d.Ib || (d.Ib = []), d.Ib.length = 0, d.Ib.push.apply(d.Ib, arguments), d.Ib.push(d.state)) : d.Ib && 0 != d.Ib.length ? (d.Ib[0] = d.state, d.Ib.length = 1) : d.Ib = [d.state];
            d.Ff || (d.Ff = !0, zH[AH].push(d));
            BH || (BH = !0, window.requestAnimationFrame(DH))
        }
    },
    DH = function() {
        BH = !1;
        var a = zH[AH],
            b = a.length;
        AH = (AH + 1) % 2;
        for (var c, d = 0; d < b; ++d) {
            c = a[d];
            var e = c.jm;
            c.Ff = !1;
            e.zc && e.zc.apply(e.context, c.Ib)
        }
        for (d = 0; d < b; ++d) c = a[d], e = c.vm, c.Ff = !1, e.zc && e.zc.apply(e.context, c.Ib), c.state = {};
        a.length = 0
    };
var FH = B ? tc(dc(ec('javascript:""'))) : tc(dc(ec("about:blank")));
rc(FH);
var GH = B ? tc(dc(ec('javascript:""'))) : tc(dc(ec("javascript:undefined")));
rc(GH);
var HH = function(a, b) {
    this.v = a;
    this.b = b
};
var IH = function(a, b) {
    X.call(this, b);
    this.X = !!a;
    this.g = null;
    this.T = EH({
        um: this.Lf
    }, this)
};
w(IH, X);
k = IH.prototype;
k.kg = null;
k.vf = !1;
k.Ab = null;
k.mb = null;
k.dc = null;
k.Vf = !1;
k.Ae = function() {
    return "goog-modalpopup"
};
k.bf = function() {
    return this.Ab
};
k.Ma = function() {
    IH.D.Ma.call(this);
    var a = this.j();
    x(a);
    Np(a, yc(this.Ae()).split(" "));
    vg(a, !0);
    W(a, !1);
    JH(this);
    KH(this)
};
var JH = function(a) {
        if (a.X && !a.mb) {
            var b = a.a.b("IFRAME", {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;"
            });
            Wd(b, FH);
            a.mb = b;
            a.mb.className = a.Ae() + "-bg";
            W(a.mb, !1);
            tq(a.mb, 0)
        }
        a.Ab || (a.Ab = a.a.b("DIV", a.Ae() + "-bg"), W(a.Ab, !1))
    },
    KH = function(a) {
        a.dc || (a.dc = Fg(a.a, "SPAN"), W(a.dc, !1), vg(a.dc, !0), a.dc.style.position = "absolute")
    };
k = IH.prototype;
k.Gi = function() {
    this.Vf = !1
};
k.Rc = function(a) {
    return !!a && "DIV" == a.tagName
};
k.Da = function(a) {
    IH.D.Da.call(this, a);
    a = yc(this.Ae()).split(" ");
    Np(x(this.j()), a);
    JH(this);
    KH(this);
    vg(this.j(), !0);
    W(this.j(), !1)
};
k.ea = function() {
    x(!!this.Ab, "Background element must not be null.");
    this.mb && eg(this.mb, this.j());
    eg(this.Ab, this.j());
    IH.D.ea.call(this);
    fg(this.dc, this.j());
    this.kg = new hE(this.a.a);
    Y(this).O(this.kg, "focusin", this.Dm);
    LH(this, !1)
};
k.nb = function() {
    this.isVisible() && this.setVisible(!1);
    Ig(this.kg);
    IH.D.nb.call(this);
    hg(this.mb);
    hg(this.Ab);
    hg(this.dc)
};
k.setVisible = function(a) {
    x(this.Ba, "ModalPopup must be rendered first.");
    if (a != this.vf)
        if (this.m && this.m.stop(), this.C && this.C.stop(), this.h && this.h.stop(), this.w && this.w.stop(), this.Ba && LH(this, a), a) {
            if (this.dispatchEvent("beforeshow")) {
                try {
                    this.g = this.a.a.activeElement
                } catch (e) {}
                this.Lf();
                var b = Uf(this.a.a) || window;
                if ("fixed" == bq(this.j(), "position")) var c = a = 0;
                else c = Tf(this.a.a), a = c.x, c = c.a;
                var d = rq(this.j());
                b = Rf(b || window);
                a = Math.max(a + b.width / 2 - d.width / 2, 0);
                c = Math.max(c + b.height / 2 - d.height /
                    2, 0);
                dq(this.j(), a, c);
                dq(this.dc, a, c);
                Y(this).O(Gg(this.a), "resize", this.Lf).O(Gg(this.a), "orientationchange", this.T);
                MH(this, !0);
                this.Mh();
                this.vf = !0;
                this.m && this.C ? (gh(this.m, "end", this.uf, !1, this), this.C.play(), this.m.play()) : this.uf()
            }
        } else if (this.dispatchEvent("beforehide")) {
        Y(this).Ja(Gg(this.a), "resize", this.Lf).Ja(Gg(this.a), "orientationchange", this.T);
        this.vf = !1;
        this.h && this.w ? (gh(this.h, "end", this.tf, !1, this), this.w.play(), this.h.play()) : this.tf();
        a: {
            try {
                c = this.a;
                d = c.a.body;
                b = c.a.activeElement ||
                    d;
                if (!this.g || this.g == d) {
                    this.g = null;
                    break a
                }(b == d || c.contains(this.j(), b)) && this.g.focus()
            } catch (e) {}
            this.g = null
        }
    }
};
var LH = function(a, b) {
        a.K || (a.K = new HH(Sq(a), a.a));
        a = a.K;
        if (b) {
            a.a || (a.a = []);
            b = a.b.Ph(a.b.a.body);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d == a.v || Hp(d, "hidden") || (Gp(d, "hidden", !0), a.a.push(d))
            }
        } else if (a.a) {
            for (c = 0; c < a.a.length; c++) a.a[c].removeAttribute(Fp("hidden"));
            a.a = null
        }
    },
    MH = function(a, b) {
        a.mb && W(a.mb, b);
        a.Ab && W(a.Ab, b);
        W(a.j(), b);
        W(a.dc, b)
    };
k = IH.prototype;
k.uf = function() {
    this.dispatchEvent("show")
};
k.tf = function() {
    MH(this, !1);
    this.dispatchEvent("hide")
};
k.isVisible = function() {
    return this.vf
};
k.Lf = function() {
    this.mb && W(this.mb, !1);
    this.Ab && W(this.Ab, !1);
    var a = this.a.a,
        b = Rf(Uf(a) || window || window),
        c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
    a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.mb && (W(this.mb, !0), qq(this.mb, c, a));
    this.Ab && (W(this.Ab, !0), qq(this.Ab, c, a))
};
k.Dm = function(a) {
    this.Vf ? this.Gi() : a.target == this.dc && Bi(this.Mh, 0, this)
};
k.Mh = function() {
    try {
        B && this.a.a.body.focus(), this.j().focus()
    } catch (a) {}
};
k.W = function() {
    Ig(this.m);
    this.m = null;
    Ig(this.h);
    this.h = null;
    Ig(this.C);
    this.C = null;
    Ig(this.w);
    this.w = null;
    IH.D.W.call(this)
};
var RH = function(a, b, c) {
    IH.call(this, b, c);
    this.c = a || "modal-dialog";
    this.b = NH(NH(new OH, PH, !0), QH, !1, !0)
};
w(RH, IH);
k = RH.prototype;
k.Kh = !0;
k.zi = !0;
k.eg = !0;
k.Re = .5;
k.$g = "";
k.ud = null;
k.Lc = null;
k.Gb = null;
k.yb = null;
k.Nf = null;
k.Fb = null;
k.bc = null;
k.ib = null;
k.Ae = function() {
    return this.c
};
var SH = function(a, b) {
        a.$g = b;
        a.yb && G(a.yb, b)
    },
    TH = function(a, b) {
        a.ud = b;
        a.bc && Ud(a.bc, b)
    };
RH.prototype.Ta = function() {
    return null != this.ud ? Bd(this.ud).toString() : ""
};
RH.prototype.$b = function() {
    this.j() || this.Ua();
    return this.bc
};
RH.prototype.bf = function() {
    this.j() || this.Ua();
    return RH.D.bf.call(this)
};
var UH = function(a, b) {
        a.Re = b;
        a.j() && (b = a.bf()) && tq(b, a.Re)
    },
    VH = function(a, b) {
        var c = yc(a.c + "-title-draggable").split(" ");
        a.j() && (b ? Np(x(a.Gb), c) : Op(x(a.Gb), c));
        b && !a.Lc ? (a.Lc = new tH(a.j(), a.Gb), Np(x(a.Gb), c), H(a.Lc, "start", a.dn, !1, a)) : !b && a.Lc && (a.Lc.La(), a.Lc = null)
    };
k = RH.prototype;
k.Ma = function() {
    RH.D.Ma.call(this);
    var a = this.j();
    x(a, "getElement() returns null");
    var b = this.a;
    this.Gb = b.b("DIV", this.c + "-title", this.yb = b.b("SPAN", {
        className: this.c + "-title-text",
        id: Qq(this)
    }, this.$g), this.Fb = b.b("SPAN", this.c + "-title-close"));
    cg(a, this.Gb, this.bc = b.b("DIV", this.c + "-content"), this.ib = b.b("DIV", this.c + "-buttons"));
    Ep(this.yb, "heading");
    Ep(this.Fb, "button");
    vg(this.Fb, !0);
    Kp(this.Fb, "Close");
    this.Nf = this.yb.id;
    Ep(a, "dialog");
    Gp(a, "labelledby", this.Nf || "");
    this.ud && Ud(this.bc, this.ud);
    W(this.Fb, !0);
    this.b && (a = this.b, a.v = this.ib, WH(a));
    W(this.ib, !!this.b);
    UH(this, this.Re)
};
k.Da = function(a) {
    RH.D.Da.call(this, a);
    a = this.j();
    x(a, "The DOM element for dialog cannot be null.");
    var b = this.c + "-content";
    this.bc = Lf(document, null, b, a)[0];
    this.bc || (this.bc = this.a.b("DIV", b), this.ud && Ud(this.bc, this.ud), a.appendChild(this.bc));
    b = this.c + "-title";
    var c = this.c + "-title-text",
        d = this.c + "-title-close";
    (this.Gb = Lf(document, null, b, a)[0]) ? (this.yb = Lf(document, null, c, this.Gb)[0], this.Fb = Lf(document, null, d, this.Gb)[0]) : (this.Gb = this.a.b("DIV", b), a.insertBefore(this.Gb, this.bc));
    this.yb ? (this.$g =
        Ag(this.yb), this.yb.id || (this.yb.id = Qq(this))) : (this.yb = F("SPAN", {
        className: c,
        id: Qq(this)
    }), this.Gb.appendChild(this.yb));
    this.Nf = this.yb.id;
    Gp(a, "labelledby", this.Nf || "");
    this.Fb || (this.Fb = this.a.b("SPAN", d), this.Gb.appendChild(this.Fb));
    W(this.Fb, !0);
    b = this.c + "-buttons";
    if (this.ib = Lf(document, null, b, a)[0]) {
        if (a = this.b = new OH(this.a), (b = this.ib) && 1 == b.nodeType) {
            a.v = b;
            b = Kf("BUTTON", a.v);
            c = 0;
            for (var e, f; d = b[c]; c++)
                if (e = d.name || d.id, f = Ag(d) || d.value, e) {
                    var g = 0 == c;
                    a.set(e, f, g, "cancel" == d.name);
                    g && T(d,
                        "goog-buttonset-default")
                }
        }
    } else this.ib = this.a.b("DIV", b), a.appendChild(this.ib), this.b && (a = this.b, a.v = this.ib, WH(a)), W(this.ib, !!this.b);
    UH(this, this.Re)
};
k.ea = function() {
    RH.D.ea.call(this);
    Y(this).O(this.j(), "keydown", this.N).O(this.j(), "keypress", this.N);
    Y(this).O(this.ib, "click", this.V);
    VH(this, this.eg);
    Y(this).O(this.Fb, "click", this.Jm);
    var a = this.j();
    x(a, "The DOM element for dialog cannot be null");
    Ep(a, "dialog");
    "" !== this.yb.id && Gp(a, "labelledby", this.yb.id);
    if (!this.zi) {
        this.zi = !1;
        if (this.Ba) {
            a = this.a;
            var b = this.bf();
            a.Rh(this.mb);
            a.Rh(b)
        }
        this.isVisible() && LH(this, !1)
    }
};
k.nb = function() {
    this.isVisible() && this.setVisible(!1);
    VH(this, !1);
    RH.D.nb.call(this)
};
k.setVisible = function(a) {
    a != this.isVisible() && (this.Ba || this.Ua(), RH.D.setVisible.call(this, a))
};
k.uf = function() {
    RH.D.uf.call(this);
    this.dispatchEvent("aftershow")
};
k.tf = function() {
    RH.D.tf.call(this);
    this.dispatchEvent("afterhide")
};
k.dn = function() {
    var a = this.a.a,
        b = Rf(Uf(a) || window || window),
        c = Math.max(a.body.scrollWidth, b.width);
    a = Math.max(a.body.scrollHeight, b.height);
    var d = rq(this.j());
    "fixed" == bq(this.j(), "position") ? this.Lc.g = new Wp(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) : this.Lc.g = new Wp(0, 0, c - d.width, a - d.height)
};
k.Jm = function() {
    XH(this)
};
var XH = function(a) {
    var b = a.b,
        c = b && b.sf;
    c ? (b = b.get(c), a.dispatchEvent(new YH(c, b)) && a.setVisible(!1)) : a.setVisible(!1)
};
RH.prototype.W = function() {
    this.ib = this.Fb = null;
    RH.D.W.call(this)
};
var ZH = function(a, b) {
    a.b = b;
    a.ib && (a.b ? (b = a.b, b.v = a.ib, WH(b)) : Ud(a.ib, Kd), W(a.ib, !!a.b))
};
RH.prototype.V = function(a) {
    a: {
        for (a = a.target; null != a && a != this.ib;) {
            if ("BUTTON" == a.tagName) break a;
            a = a.parentNode
        }
        a = null
    }
    if (a && !a.disabled) {
        a = a.name;
        var b = this.b.get(a);
        this.dispatchEvent(new YH(a, b)) && this.setVisible(!1)
    }
};
RH.prototype.N = function(a) {
    var b = !1,
        c = !1,
        d = this.b,
        e = a.target;
    if ("keydown" == a.type)
        if (this.Kh && 27 == a.keyCode) {
            var f = d && d.sf;
            e = "SELECT" == e.tagName && !e.disabled;
            f && !e ? (c = !0, b = d.get(f), b = this.dispatchEvent(new YH(f, b))) : e || (b = !0)
        } else {
            if (9 == a.keyCode && a.shiftKey && e == this.j()) {
                this.Vf = !0;
                try {
                    this.dc.focus()
                } catch (q) {}
                Bi(this.Gi, 0, this)
            }
        } else if (13 == a.keyCode) {
        if ("BUTTON" == e.tagName && !e.disabled) f = e.name;
        else if (e == this.Fb) XH(this);
        else if (d) {
            var g = d.Xe,
                h;
            if (h = g) a: {
                h = Kf("BUTTON", x(d.v));
                for (var l = 0, m; m =
                    h[l]; l++)
                    if (m.name == g || m.id == g) {
                        h = m;
                        break a
                    }
                h = null
            }
            e = ("TEXTAREA" == e.tagName || "SELECT" == e.tagName || "A" == e.tagName) && !e.disabled;
            !h || h.disabled || e || (f = g)
        }
        f && d && (c = !0, b = this.dispatchEvent(new YH(f, String(d.get(f)))))
    } else e != this.Fb || 32 != a.keyCode && " " != a.key || XH(this);
    if (b || c) a.stopPropagation(), a.preventDefault();
    b && this.setVisible(!1)
};
var YH = function(a, b) {
    this.type = "dialogselect";
    this.key = a;
    this.caption = b
};
w(YH, Kg);
var OH = function(a) {
    a || If();
    sj.call(this)
};
w(OH, sj);
k = OH.prototype;
k.Xe = null;
k.v = null;
k.sf = null;
k.Qc = function() {
    sj.prototype.Qc.call(this);
    this.Xe = this.sf = null
};
k.set = function(a, b, c, d) {
    sj.prototype.set.call(this, a, b);
    c && (this.Xe = a);
    d && (this.sf = a);
    return this
};
var NH = function(a, b, c, d) {
        return a.set(b.key, b.caption, c, d)
    },
    WH = function(a) {
        if (a.v) {
            Ud(a.v, Kd);
            var b = If(a.v);
            a.forEach(function(c, d) {
                c = b.b("BUTTON", {
                    name: d
                }, c);
                d == this.Xe && (c.className = "goog-buttonset-default");
                this.v.appendChild(c)
            }, a)
        }
    };
OH.prototype.j = function() {
    return this.v
};
var PH = {
        key: "ok",
        caption: "OK"
    },
    QH = {
        key: "cancel",
        caption: "Cancel"
    },
    $H = {
        key: "yes",
        caption: "Yes"
    },
    aI = {
        key: "no",
        caption: "No"
    },
    bI = {
        key: "save",
        caption: "Save"
    },
    cI = {
        key: "continue",
        caption: "Continue"
    };
"undefined" != typeof document && (NH(new OH, PH, !0, !0), NH(NH(new OH, PH, !0), QH, !1, !0), NH(NH(new OH, $H, !0), aI, !1, !0), NH(NH(NH(new OH, $H), aI, !0), QH, !1, !0), NH(NH(NH(new OH, cI), bI), QH, !0, !0));
var dI = Em.M(),
    eI = null,
    fI = function(a, b, c, d, e) {
        var f = {};
        f.id = b;
        f.sl = c;
        f.tl = d;
        f.query = e.substring(0, 64);
        f.len = e.length;
        f.client = "webapp";
        dI.log(a, f)
    },
    gI = function(a, b) {
        var c = "";
        switch (DATA.CampaignTrackerId) {
            case "0":
                c = "https://goo.gl/ELUFVd";
                break;
            case "1a":
                c = "https://goo.gl/cHnrfS";
                break;
            case "1b":
                c = "https://goo.gl/7apRL6";
                break;
            case "1c":
                c = "https://goo.gl/ozXBPg";
                break;
            case "1f":
                c = "https://goo.gl/R0JqsC";
                break;
            case "1g":
                switch (b) {
                    case 0:
                        c = "http://goo.gl/iosgoogleapp/translate2a";
                        break;
                    case 1:
                        c = "http://goo.gl/iosgoogleapp/translate2b";
                        break;
                    case 2:
                        c = "http://goo.gl/iosgoogleapp/translate2c"
                }
                break;
            case "1h":
                switch (b) {
                    case 0:
                        c = "http://goo.gl/iosgoogleapp/translate2d";
                        break;
                    case 1:
                        c = "http://goo.gl/iosgoogleapp/translate2e";
                        break;
                    case 2:
                        c = "http://goo.gl/iosgoogleapp/translate2f";
                        break;
                    case 3:
                        c = "http://goo.gl/iosgoogleapp/translate2g"
                }
                break;
            default:
                c = "https://goo.gl/F17Wul"
        }
        a ? Yd(window.location, c + "?url=google-deeplink://search%3Fq%3D" + ce(ce(a)) + "&waypoint_id=gt-" + DATA.CampaignTrackerId) : Yd(window.location, c + "?url=google-deeplink://open-url?url=http://www.google.com&waypoint_id=gt-" +
            DATA.CampaignTrackerId);
        Jm(dI, "webapp", "gsa", "open", {
            id: DATA.CampaignTrackerId
        });
        Bh("gsa", "gsa:open", "", 1)
    },
    hI = function(a) {
        a = "https://www.google.com/search?q=" + ce(a) + "&source=gt-" + DATA.CampaignTrackerId;
        Yd(Uf().location, a)
    },
    jI = function(a) {
        var b = Yf("DIV");
        b.id = "bg-msk";
        document.body.appendChild(b);
        Bi(function() {
            b.style.opacity = 1
        }, 0);
        eI = H(document.body, "touchmove", function(c) {
            c.preventDefault()
        });
        H(b, "click", function() {
            iI();
            a()
        })
    },
    iI = function() {
        var a = Jf("bg-msk");
        a && (hg(a), null != eI && (oh(eI), eI = null))
    },
    lI = function(a, b, c, d, e) {
        if (DATA.SignedIn) c();
        else {
            c = new RH("gt-md", !0);
            SH(c, DATA.Messages.SAVED_INTERSTITIAL_TITLE);
            TH(c, Ed(DATA.Messages.SAVED_INTERSTITIAL_CONTENT));
            c.eg = !1;
            VH(c, !1);
            var f = new OH;
            f.set("not_now", DATA.Messages.NOT_NOW);
            f.set("sign_in", DATA.Messages.SIGN_IN);
            ZH(c, f);
            UH(c, .7);
            c.setVisible(!0);
            c.O("dialogselect", v(kI, null, a, b, d, e));
            T(Kf("BODY")[0], "gt-md-on")
        }
    },
    kI = function(a, b, c, d, e) {
        "sign_in" == e.key ? av(d) : (b.log("nosi", a), b = L.M(), N(b, O(b, jm[a])), c(), U(Kf("BODY")[0], "gt-md-on"))
    },
    nI =
    function(a) {
        return mI(a, DATA.SourceLanguageCodeNameList)
    },
    oI = function(a) {
        return mI(a, DATA.TargetLanguageCodeNameList)
    },
    mI = function(a, b) {
        return (b = Object.values(b).find(function(c) {
            return c.Code === a
        })) ? b.Name : ""
    },
    pI = function(a) {
        return !!a && Dh(a, 18) && 1 === (new $l(a.Ra[18])).Mc() && 0 < I(new $l(a.Ra[18]), 0)
    },
    rI = function(a) {
        if (!pI(a)) return [];
        a = Fl(new $l(a.Ra[18]), 0, Yl);
        a.sort(function(b, c) {
            b = qI(Cl(b, 0, 0));
            c = qI(Cl(c, 0, 0));
            return b.localeCompare(c, DATA.DisplayLanguage)
        });
        return a
    },
    qI = function(a) {
        switch (a) {
            case 2:
                return DATA.Messages.GRAMMATICAL_GENDER_FEMININE_WITH_PARENTHESES;
            case 1:
                return DATA.Messages.GRAMMATICAL_GENDER_MASCULINE_WITH_PARENTHESES;
            default:
                throw Error("Unsupported gender " + a);
        }
    };
var sI = function(a) {
    var b = Sn(t(a.je), "buttonText", a.je, "string"),
        c = Sn(t(a.Xf), "classname", a.Xf, "string");
    a = Sn(t(a.identifier), "identifier", a.identifier, "string");
    return P("<div class='tlid-app-download-button-container " + S(a) + " app-download-button-container " + S(c) + "'><div class='tlid-app-download-button app-download-button header-button' role='button' tabindex='-1'><div class='text'>" + R(b) + "</div></div><div class='app-download-popup'><div class='popup-triangle'></div><div class='popup-container'><div class='text'>\u626b\u63cf\u4e8c\u7ef4\u7801\u4e0b\u8f7d</div><div class='download-image'></div></div></div></div>")
};
var uI = function(a) {
    var b = Sn(t(a.za), "sourceLanguage", a.za, "string"),
        c = Sn(t(a.Mb), "sourcePhrase", a.Mb, "string"),
        d = Sn(t(a.Ia), "targetLanguage", a.Ia, "string"),
        e = Sn(t(a.Nb), "targetPhrase", a.Nb, "string"),
        f = Sn("boolean" == typeof a.Hc || 1 === a.Hc || 0 === a.Hc, "showStar", a.Hc, "boolean");
    a = Sn(t(a.Ri), "starLabel", a.Ri, "string");
    return P("<div class='tlid-history-entry history-entry' role=\"option\"><div class='language-pair' role=\"button\" tabindex=\"0\"><div class='language-pair-languages'>" + R(b) + " <span class='language-pair-arrow'></span> " +
        R(d) + "</div></div>" + (f ? "<button class='tlid-star-history-entry star-button button-icon' aria-label='" + S(a) + "' data-tooltip='" + S(a) + "'></button>" : "") + "<div class='tlid-browse-entry browse-entry' role=\"button\" tabindex=\"0\"><div class='starbutton-placeholder'></div>" + tI({
            Mb: c,
            Nb: e
        }) + "</div><div class='tlid-select-entry select-entry' role=\"button\" tabindex=\"0\"><div class='star-placeholder'></div>" + tI({
            Mb: c,
            Nb: e
        }) + "</div></div>")
};
uI.a = "trans.mobile.components.history.entry.template.main";
var tI = function(a) {
    var b = Sn(t(a.Mb), "sourcePhrase", a.Mb, "string");
    a = Sn(t(a.Nb), "targetPhrase", a.Nb, "string");
    return P("<div class='phrase'><div class='tl-input'><bdi>" + R(b) + "</bdi></div><div class='tl-output'><bdi>" + R(a) + "</bdi></div></div>")
};
var vI = function(a, b) {
    K.call(this);
    this.a = a;
    this.v = b;
    this.b = D("tlid-star-history-entry", this.v);
    this.c = E("tlid-browse-entry", this.v);
    this.g = E("tlid-select-entry", this.v);
    this.b && H(this.b, "click", this.Al, !1, this);
    Ah(this.c, this.rm.bind(this));
    Ah(this.g, this.tm.bind(this))
};
ka(vI, K);
k = vI.prototype;
k.Al = function() {
    this.dispatchEvent("f")
};
k.rm = function() {
    this.dispatchEvent("d")
};
k.tm = function() {
    this.dispatchEvent("e")
};
k.j = function() {
    return this.v
};
k.Qg = function(a) {
    V(this.v, "starred", a)
};
var xI = function(a, b) {
    K.call(this);
    this.F = L.M();
    this.g = Em.M();
    this.v = a;
    this.a = [];
    this.o = b;
    this.c = null;
    this.C = wI(this, E("tlid-history-delete-all-button", this.v), this.L, !1);
    this.C.g("Clear history");
    wI(this, E("tlid-history-close-button", this.v), this.G);
    this.m = E("tlid-history-entry-list", this.v);
    this.w = !1;
    this.h = [];
    this.b = null;
    this.R = new PF(DATA.Messages.NUM_TRANSLATIONS);
    this.K = E("tlid-history-num-entries", this.v)
};
ka(xI, K);
var wI = function(a, b, c, d) {
        d = void 0 === d ? !0 : d;
        var e = new Pr(null, new Jt);
        e.ia(b);
        d && (ms(b), rH(b));
        c && H(e, "action", c, !1, a);
        return e
    },
    AI = function(a, b) {
        for (var c = 0; c < b.length; c++) yI(a, b[c]);
        0 < b.length && V(a.v, "empty", !1);
        U(a.v, "loading");
        zI(a, a.a.length)
    },
    yI = function(a, b) {
        b = HF(b);
        for (var c = a.a.length - 1; 0 <= c; c--) {
            var d = a.a[c];
            EF(d.a, b) && (a.a.splice(c, 1), hg(d.j()), ph(d))
        }
        c = Tp(uI, {
            za: nI(BF(b)),
            Mb: b.a,
            Ia: oI(b.oa()),
            Nb: b.$a(),
            Hc: !DATA.InChina,
            Ri: "Star translation"
        });
        gg(a.m, c, 0);
        b = new vI(b, c);
        a.a.unshift(b);
        BI(a,
            b);
        a.w ? CI(a, b) : a.h.push(b)
    },
    BI = function(a, b) {
        H(b, "d", function() {
            var c = b.a;
            a.dispatchEvent({
                type: "history_entry_selected",
                text: c.a,
                fb: c.Qa(),
                gb: c.oa()
            });
            a.c && V(a.c.v, "browsed", !1);
            V(b.v, "browsed", !0);
            a.c = b;
            DI(a, b)
        }, !1);
        H(b, "e", function() {
            var c = b.a;
            a.dispatchEvent({
                type: "history_entry_selected",
                text: c.a,
                fb: c.Qa(),
                gb: c.oa()
            });
            a.G();
            DI(a, b)
        }, !1);
        H(b, "f", function() {
            var c = b.a;
            if (DATA.SignedIn) {
                var d = !Mp(b.v, "starred");
                jG(a.o, c, d ? 0 : 1) && (b.Qg(d), c = a.F, N(c, Bm(c, 64, a.a.indexOf(b), d)), a.g.log("th=sc", {}))
            } else {
                d =
                    Mp(b.v, "starred") ? "unst" : "st";
                var e = new Vs;
                Ws(e, "history");
                Zs(e, BF(c), c.oa(), c.a);
                lI(d, a.g, Fa, Fa, e.toString())
            }
        }, !1)
    },
    EI = function(a) {
        a.c && (V(a.c.v, "browsed", !1), a.c = null)
    };
xI.prototype.G = function() {
    this.dispatchEvent("close_requested");
    EI(this)
};
xI.prototype.L = function() {
    if (0 !== this.a.length) {
        dg(this.m);
        for (var a = 0; a < this.a.length; a++) ph(this.a[a]);
        this.a = [];
        this.dispatchEvent("clear_history_clicked");
        V(this.v, "empty", !0);
        zI(this, this.a.length);
        a = this.F;
        N(a, O(a, 63));
        this.g.log("th=ch", {})
    }
};
var FI = function(a, b, c, d) {
        a.b = new AF(d, {}, b, c)
    },
    GI = function(a) {
        a.w = !0;
        for (var b = 0; b < a.h.length; b++) CI(a, a.h[b])
    },
    CI = function(a, b) {
        a.b && BF(a.b) === BF(b.a) && a.b.oa() === b.a.oa() && a.b.a === b.a.a ? (a.b = null, jG(a.o, b.a, 0)) : mG(a.o, b.a, b.Qg.bind(b))
    },
    zI = function(a, b) {
        b = SF(a.R, {
            NUM_TRANSLATIONS: b
        });
        G(a.K, b)
    },
    DI = function(a, b) {
        var c = a.F,
            d = Mp(b.v, "starred");
        N(c, Bm(c, 61, a.a.indexOf(b), d));
        a.g.log("th=es", {})
    };
var HI = function(a) {
    a = a.Ha;
    return P("<div class='tlid-history-container history-container loading empty'><div class='history-top-header'><div class='history-top-bar'><div class='tlid-history-close-button close-button button-icon' aria-label=\"" + (a.CLOSE_HISTORY ? S(a.CLOSE_HISTORY) : S(a.CLOSE)) + "\"></div><div class='title'>" + R(a.HISTORY_SECTION_TITLE) + "</div><div class='history-features'><div class='tlid-history-delete-all-button delete-all-button'></div></div></div><div class='tlid-history-info-bar info-bar'><div class='tlid-history-num-entries num-entries'></div></div></div><div class='history-body'><div class='tlid-history-entry-list entry-list' role=\"listbox\" tabindex=\"0\"></div></div><div class='empty-placeholder'><div class='placeholder-image'></div><div class='placeholder-text-holder'><div class='placeholder-title'>" +
        R(a.HISTORY_INFO_HEADER) + "</div><div class='placeholder-body'>" + R(a.HISTORY_INFO_TEXT) + "</div></div></div><div class='history-loader'><div class='mspin-googblue-medium'><div><div></div></div></div></div></div>")
};
HI.a = "trans.mobile.components.history.template.main";
var II = function(a) {
    var b = a.Wl,
        c = a.Ha;
    a = P;
    var d = "<div class='tlid-community-instant-container instant-container taskactive'><div class='instant-top-header'><div class='instant-top-bar'><div class='tlid-instant-close-button close-button button-icon' aria-label=\"" + S(c.CLOSE) + '" data-tooltip="' + S(c.CLOSE) + "\"></div><div class='tlid-instant-help-open-button help-open-button button-icon' aria-label=\"" + S(c.COMMUNITY_INSTANT_HELP_OPEN) + '" data-tooltip="' + S(c.COMMUNITY_INSTANT_HELP_OPEN) + "\"></div><div class='title'>" +
        R(c.COMMUNITY_INSTANT_TITLE) + "</div>" + (b ? '<div class="header-help">' + R(c.COMMUNITY_INSTANT_FLOW_HEADER) + "</div>" : "") + "</div></div><div class='instant-body'>";
    if (b) {
        b = P;
        var e = "<div class='tlid-instant-flow'><div class=\"instant-flow-tasks\">" + P("<div class='tlid-instant-flow-task-active instant-taskactive-container'></div>");
        var f = P('<div class=\'tlid-instant-task-done instant-taskdone-container\'><div class="instant-taskdone-image"></div><div class="instant-taskdone-header">' + R(c.COMMUNITY_INSTANT_TASK_DONE_HEADER) +
            '</div><div class="tlid-instant-taskdone-done-button instant-taskdone-done-button jfk-button-flat" aria-label="' + S(c.COMMUNITY_INSTANT_TASK_DONE_DONE_BUTTON) + '" data-tooltip="' + S(c.COMMUNITY_INSTANT_TASK_DONE_DONE_BUTTON) + '">' + R(c.COMMUNITY_INSTANT_TASK_DONE_DONE_BUTTON) + '</div><div class="tlid-instant-taskdone-more-button instant-taskdone-more-button jfk-button-flat" aria-label="' + S(c.COMMUNITY_INSTANT_TASK_DONE_MORE_BUTTON) + '" data-tooltip="' + S(c.COMMUNITY_INSTANT_TASK_DONE_MORE_BUTTON) + '">' + R(c.COMMUNITY_INSTANT_TASK_DONE_MORE_BUTTON) +
            "</div></div>");
        e += f;
        f = P('<div class=\'tlid-instant-task-none instant-tasknone-container\'><div class="instant-tasknone-image"></div><div class="instant-tasknone-header">' + R(c.COMMUNITY_INSTANT_TASK_NONE_HEADER) + '</div><div class="instant-tasknone-body">' + R(c.COMMUNITY_INSTANT_TASK_NONE_BODY) + '</div><div class="tlid-instant-tasknone-language-container instant-tasknone-language-container"><div class="instant-tasknone-language-selected-container language-selected-container"><div class="tlid-instant-tasknone-language-selected">\x3c!-- Dynamically constructed .languageDropDownEntry --\x3e</div><div class="tlid-instant-tasknone-language-button language-selected-button"></div></div><div class="tlid-instant-tasknone-language-dropdown instant-tasknone-language-dropdown"><div class="tlid-instant-tasknone-language-dropdown-container language-dropdown-container">\x3c!-- Per user language pair options --\x3e</div></div></div><div class="tlid-instant-task-start-button instant-task-start-button jfk-button-flat" aria-label="' +
            S(c.COMMUNITY_INSTANT_START) + '" data-tooltip="' + S(c.COMMUNITY_INSTANT_START) + '">' + R(c.COMMUNITY_INSTANT_START) + "</div></div>");
        b = b(e + f + '</div><div class="instant-flow-footer"><div class="instant-footer-container"><a href="/community" target="_blank"><div class="instant-flow-footer-icon"></div><div class="instant-flow-footer-text">' + R(c.COMMUNITY_INSTANT_FLOW_FOOTER) + '</div><div class="instant-flow-footer-button"></div></a></div></div></div>')
    } else b = P('<div class=\'tlid-instant-signed-out instant-signedout-container\'><div class="instant-signedout-image"></div><div class="instant-signedout-header">' +
        R(c.COMMUNITY_INSTANT_SIGNED_OUT_HEADER) + '</div><div class="instant-signedout-body">' + R(c.COMMUNITY_INSTANT_SIGNED_OUT_BODY) + '</div><div class="tlid-instant-signedout-button instant-signedout-button jfk-button-flat" aria-label="' + S(c.COMMUNITY_INSTANT_SIGNED_OUT_BUTTON) + '" data-tooltip="' + S(c.COMMUNITY_INSTANT_SIGNED_OUT_BUTTON) + '">' + R(c.COMMUNITY_INSTANT_SIGNED_OUT_BUTTON) + "</div></div>");
    d = d + b + "</div>\x3c!-- The Help panel is available for signed in and signed out users. --\x3e<div class='instant-help'>";
    c = P('<div class=\'tlid-instant-help instant-help-container\'><div class="instant-help-image"></div><div class="instant-help-header">' + R(c.COMMUNITY_INSTANT_HELP_HEADER) + '</div><div class="instant-help-body">' + R(c.COMMUNITY_INSTANT_HELP_BODY) + '</div><div class="tlid-instant-help-button instant-help-button jfk-button-flat" aria-label="' + S(c.COMMUNITY_INSTANT_OK_BUTTON) + '" data-tooltip="' + S(c.COMMUNITY_INSTANT_OK_BUTTON) + '">' + R(c.COMMUNITY_INSTANT_OK_BUTTON) + "</div></div>");
    return a(d + c + "</div></div>")
};
II.a = "trans.mobile.components.instant.template.main";
var JI = function(a) {
    var b = a.Wi;
    return P('<div class="instant-lang-pair"><div class="instant-lang-dropdown-source">' + R(a.Mi) + '</div><div class="instant-lang-dropdown-connector">-</div><div class="instant-lang-dropdown-target">' + R(b) + "</div></div>")
};
JI.a = "trans.mobile.components.instant.template.languageDropDownEntry";
var KI = function(a) {
    K.call(this);
    this.v = a;
    a = E("tlid-instant-task-skip", this.v);
    H(a, "click", this.c, !1, this);
    a = E("tlid-instant-task-incorrect", this.v);
    H(a, "click", this.b, !1, this);
    a = E("tlid-instant-task-correct", this.v);
    H(a, "click", this.a, !1, this)
};
ka(KI, K);
KI.prototype.c = function() {
    this.dispatchEvent("skip_requested")
};
KI.prototype.b = function() {
    this.dispatchEvent("incorrect_requested")
};
KI.prototype.a = function() {
    this.dispatchEvent("correct_requested")
};
var LI = function(a) {
    var b = a.zn,
        c = a.An;
    a = a.Ha;
    return P('<div>\x3c!-- Includes language pair information and task progress --\x3e<div class="instant-task-metadata"><div class="instant-task-lang-pair"><div class="instant-task-lang-source">' + R(b.za) + '</div><div class="instant-task-lang-connector">-</div><div class="instant-task-lang-target">' + R(b.Ia) + '</div></div><div class="instant-task-progress"><div class="instant-task-current">' + R(c.li) + '</div><div class="instant-task-progress-connector">/</div><div class="instant-task-total">' +
        R(b.In) + '</div></div></div>\x3c!-- Includes the prompt and task content --\x3e<div class="instant-task-item"><div class="instant-task-prompt">' + R(a.COMMUNITY_INSTANT_TASK_PROMPT_VALIDATION) + '</div><div class="instant-task-text-source">' + R(c.Bd) + '</div><div class="instant-task-text-target">' + R(c.$i) + '</div></div>\x3c!-- Includes the actions available --\x3e<div class="instant-task-options"><div class="tlid-instant-task-skip instant-task-skip-button"><div class="instant-task-skip-button-image"></div><div class="instant-task-skip-button-text">' +
        R(a.COMMUNITY_INSTANT_TASK_ACTION_SKIP) + '</div></div><div class="tlid-instant-task-incorrect instant-task-incorrect-button"><div class="instant-task-incorrect-button-image"></div><div class="instant-task-incorrect-button-text">' + R(a.COMMUNITY_INSTANT_TASK_ACTION_INCORRECT) + '</div></div><div class="tlid-instant-task-correct instant-task-correct-button"><div class="instant-task-correct-button-image"></div><div class="instant-task-correct-button-text">' + R(a.COMMUNITY_INSTANT_TASK_ACTION_CORRECT) + "</div></div></div></div>")
};
LI.a = "trans.mobile.components.instant.task.template.main";
var NI = function(a) {
    K.call(this);
    this.v = a;
    MI(this, E("tlid-instant-close-button", this.v), this.w);
    MI(this, E("tlid-instant-help-open-button", this.v), this.g);
    a = E("tlid-instant-help-button", this.v);
    H(a, "click", this.g, !1, this);
    this.R = DATA.SignedIn ? null : E("tlid-instant-signedout-button", this.v);
    DATA.SignedIn || MI(this, this.R, this.L);
    DATA.SignedIn && (a = E("tlid-instant-taskdone-more-button", this.v), H(a, "click", this.C, !1, this), a = E("tlid-instant-taskdone-done-button", this.v), H(a, "click", this.w, !1, this));
    this.h =
        DATA.CommunityInstantHostname;
    this.G = void 0;
    this.b = [];
    this.a = 0;
    this.m = this.o = "und";
    this.c = [{
        source: {
            Mg: "en",
            Ya: "English"
        },
        target: {
            Mg: "es",
            Ya: "Spanish"
        }
    }, {
        source: {
            Mg: "es",
            Ya: "Spanish"
        },
        target: {
            Mg: "en",
            Ya: "English"
        }
    }]
};
ka(NI, K);
var MI = function(a, b, c) {
        var d = void 0 === d ? !0 : d;
        var e = new Pr(null, new Jt);
        e.ia(b);
        d && (ms(b), rH(b));
        c && H(e, "action", c, !1, a)
    },
    QI = function(a, b, c) {
        a.o = b;
        a.m = c;
        null != window.gapi && null != window.gapi.client ? window.gapi.client.request({
            root: a.h,
            path: "/v1/getinstanttask",
            method: "GET",
            body: {
                client: "translate_web",
                force_triggering: "true",
                language_pair: {
                    source_language_code_value: b,
                    target_language_code_value: c
                }
            },
            params: {
                $trace: "true"
            }
        }).then(function() {
            this.a = 0;
            this.G = {
                za: "English",
                Ia: "Spanish",
                In: "2"
            };
            this.b = [{
                Bd: "He heard the footsteps",
                $i: "Esucho los pasos",
                li: "1",
                Pm: 1234
            }, {
                Bd: "What did the fox say?",
                $i: "Qu\u00e9 dijo el zorro?",
                li: "2",
                Pm: 4321
            }];
            OI(this);
            U(this.v, "tasknone");
            U(this.v, "taskdone");
            T(this.v, "taskactive")
        }.bind(a), function() {
            PI(this)
        }.bind(a)) : PI(a)
    },
    OI = function(a) {
        var b = D("tlid-instant-flow-task-active", a.v),
            c = Tp(LI, {
                zn: a.G,
                An: a.b[a.a],
                Ha: DATA.Messages
            }),
            d = new KI(c);
        H(d, "skip_requested", function() {
            RI(a, "skip_requested")
        }, !1);
        H(d, "incorrect_requested", function() {
            RI(a, "incorrect_requested")
        }, !1);
        H(d, "correct_requested",
            function() {
                RI(a, "correct_requested")
            }, !1);
        dg(b);
        bg(b, c)
    },
    RI = function(a, b) {
        null != window.gapi && null != window.gapi.client ? window.gapi.client.request(SI(a, a.b[a.a], b)).then(function() {
            TI(this)
        }.bind(a), function() {
            TI(this)
        }.bind(a)) : TI(a)
    },
    TI = function(a) {
        a.a++;
        a.a >= a.b.length ? (U(a.v, "taskactive"), U(a.v, "tasknone"), T(a.v, "taskdone")) : OI(a)
    };
NI.prototype.C = function() {
    QI(this, this.o, this.m)
};
NI.prototype.w = function() {
    this.dispatchEvent("close_requested")
};
NI.prototype.g = function() {
    var a = this.v,
        b = !Mp(a, "help");
    V(a, "help", b)
};
NI.prototype.L = function() {
    this.dispatchEvent("sign_in_requested")
};
var SI = function(a, b, c) {
        switch (c) {
            case "skip_requested":
                c = 1;
                break;
            case "correct_requested":
                c = 2;
                break;
            case "incorrect_requested":
                c = 3;
                break;
            default:
                c = 0
        }
        return {
            root: a.h,
            path: "/v1/setanswers",
            method: "POST",
            body: {
                task: [{
                    question_id: b.questionId,
                    annotation: c
                }]
            },
            params: {
                $trace: "true"
            }
        }
    },
    PI = function(a) {
        var b = E("tlid-instant-tasknone-language-selected", a.v),
            c = a.c[0];
        c = Tp(JI, {
            Mi: c.source.Ya,
            Wi: c.target.Ya
        });
        H(c, "click", a.K, !1, a);
        dg(b);
        bg(b, c);
        U(a.v, "taskactive");
        U(a.v, "taskdone");
        T(a.v, "tasknone")
    };
NI.prototype.K = function() {
    var a = E("tlid-instant-tasknone-language-dropdown-container", this.v);
    dg(a);
    for (var b = 0; b < this.c.length; ++b) {
        var c = this.c[b];
        c = Tp(JI, {
            Mi: c.source.Ya,
            Wi: c.target.Ya
        });
        bg(a, c)
    }
    a = E("tlid-instant-tasknone-language-container", this.v);
    T(a, "dropdown")
};
var UI = function(a) {
    var b = Sn(t(a.za), "sourceLanguage", a.za, "string");
    a = Sn(t(a.Ia), "targetLanguage", a.Ia, "string");
    return P("<div class='tlid-phrasebook-language-chip language-chip' role=\"button\" tabindex=\"0\"><div class='language-chip-languages'>" + R(b) + " <span class='language-chip-arrow'></span> " + R(a) + "</div><button class='tlid-phrasebook-language-chip-clear-button clear-button button-icon'></button></div>")
};
UI.a = "trans.mobile.components.phrasebook.languagechip.template.main";
var WI = function(a, b, c) {
    b = c || b;
    c = Sn(t(a.za), "sourceLanguage", a.za, "string");
    var d = Sn(t(a.Mb), "sourcePhrase", a.Mb, "string"),
        e = Sn(t(a.Ia), "targetLanguage", a.Ia, "string"),
        f = Sn(t(a.Nb), "targetPhrase", a.Nb, "string");
    a = a.Ha;
    return P("<div class='tlid-phrasebook-entry phrasebook-entry' role=\"option\">" + R(UI({
            za: c,
            Ia: e
        }, b)) + "<button class='tlid-delete-phrasebook-entry trashcan-button button-icon' aria-label='" + S(a.DELETE_THIS_PHRASE) + "'></button><div class='tlid-browse-entry browse-entry' role=\"button\" tabindex=\"0\"><div class='trashcan-placeholder'></div><div class='phrase'>" +
        VI({
            Mb: d,
            Nb: f,
            De: !0,
            Ha: a
        }) + "</div></div><div class='tlid-select-entry select-entry' role=\"button\" tabindex=\"0\"><div class='trashcan-placeholder'></div>" + VI({
            Mb: d,
            Nb: f
        }) + "</div></div>")
};
WI.a = "trans.mobile.components.phrasebook.entry.template.main";
var VI = function(a) {
    var b = Sn(t(a.Mb), "sourcePhrase", a.Mb, "string"),
        c = Sn(t(a.Nb), "targetPhrase", a.Nb, "string"),
        d = Sn(null == a.De || "boolean" == typeof a.De || 1 === a.De || 0 === a.De, "includeTts", a.De, "boolean|null|undefined");
    a = a.Ha;
    return P("<div class='phrase'><div class='tl-input'><bdi>" + R(b) + "</bdi>" + (d && Dn(a) ? "<button class='tlid-phrasebook-entry-source-tts tts-button button-icon' aria-label='" + S(a.LISTEN) + "' data-tooltip='" + S(a.LISTEN) + "'></button>" : "") + "</div><div class='tl-output'><bdi>" + R(c) + "</bdi>" +
        (d && Dn(a) ? "<button class='tlid-phrasebook-entry-target-tts tts-button button-icon' aria-label='" + S(a.LISTEN) + "' data-tooltip='" + S(a.LISTEN) + "'></button>" : "") + "</div></div>")
};
var YI = function(a, b, c) {
    K.call(this);
    var d = this;
    this.v = a;
    kc(DATA.DisplayLanguage) && T(this.v, "rtl-display-language");
    this.a = b;
    this.b = c;
    this.c = E("tlid-phrasebook-language-chip-clear-button", this.v);
    H(this.c, "click", this.Qk, !1, this);
    H(this.v, "click", function() {
        return XI(d)
    }, !1);
    H(this.v, "keypress", this.g, !1, this)
};
ka(YI, K);
k = YI.prototype;
k.j = function() {
    return this.v
};
k.Qa = function() {
    return this.a
};
k.oa = function() {
    return this.b
};
k.ad = function(a) {
    V(this.v, "selected", a)
};
k.Qk = function(a) {
    a.stopPropagation();
    this.dispatchEvent("language_pair_deselected")
};
var XI = function(a) {
    a.dispatchEvent("language_pair_selected")
};
YI.prototype.g = function(a) {
    switch (a.keyCode) {
        case 13:
        case 32:
            XI(this)
    }
};
var aJ = function(a, b) {
    K.call(this);
    this.F = L.M();
    this.c = Em.M();
    this.a = a;
    this.v = b;
    this.g = E("tlid-delete-phrasebook-entry", this.v);
    this.R = new YI(E("tlid-phrasebook-language-chip", this.v), BF(this.a), this.a.oa());
    this.b = E("tlid-browse-entry", this.v);
    this.o = E("tlid-select-entry", this.v);
    this.G = E("tlid-phrasebook-entry-source-tts", this.v);
    this.L = E("tlid-phrasebook-entry-target-tts", this.v);
    this.C = ZI(this, this.G, "&client=webapp&prev=pbsrc", 5);
    this.C.update(this.a.a, BF(this.a), void 0, nI(BF(this.a)));
    this.K =
        ZI(this, this.L, "&client=webapp&prev=pbtgt", 6);
    this.K.update(this.a.b, this.a.oa(), void 0, oI(this.a.oa()));
    $I(this)
};
ka(aJ, K);
var $I = function(a) {
        H(a.v, "focusin", function() {
            T(a.v, "focus-within")
        }, !1);
        H(a.v, "focusout", function(b) {
            ng(a.v, b.relatedTarget) || U(a.v, "focus-within")
        }, !1);
        H(a.g, "click", a.h, !1, a);
        H(a.R, "language_pair_selected", function() {
            a.dispatchEvent("language_pair_selected")
        }, !1);
        H(a.b, "click", a.m, !1, a);
        H(a.b, "keypress", function(b) {
            13 != b.keyCode && 32 != b.keyCode || a.m.bind(a)(b)
        }, !1);
        H(a.o, "click", a.w, !1, a);
        H(a.o, "keypress", function(b) {
            13 != b.keyCode && 32 != b.keyCode || a.w.bind(a)(b)
        }, !1);
        H(a.C, "userInteractionWhileDisabled",
            function() {
                a.dispatchEvent({
                    type: "interaction_with_disabled_voice_output",
                    Ya: nI(BF(a.a))
                })
            }, !1);
        H(a.K, "userInteractionWhileDisabled", function() {
            a.dispatchEvent({
                type: "interaction_with_disabled_voice_output",
                Ya: oI(a.a.oa())
            })
        }, !1)
    },
    ZI = function(a, b, c, d) {
        var e = new Ft(DATA.Messages.LISTEN);
        e.ia(b);
        c = new cv(e, c, d, !1, !0, DATA.Messages.LISTEN, DATA.Messages.VOICE_OUTPUT_UNAVAILABLE);
        rH(b);
        Jg(a, c);
        return c
    };
aJ.prototype.h = function() {
    var a = this.F;
    N(a, O(a, 316));
    this.c.log("api=ed", {});
    this.dispatchEvent("delete_button_clicked");
    nh(this.g, "click", this.h, !1, this)
};
aJ.prototype.m = function(a) {
    a.target != this.G && a.target != this.L && (this.c.log("api=es", {}), a = this.F, N(a, O(a, 315)), this.dispatchEvent("entry_browsed"))
};
aJ.prototype.w = function() {
    this.c.log("api=es", {});
    var a = this.F;
    N(a, O(a, 315));
    this.dispatchEvent("entry_selected")
};
aJ.prototype.j = function() {
    return this.v
};
var bJ = function(a, b) {
    K.call(this);
    this.v = a;
    this.na = b;
    this.a = [];
    this.h = [];
    this.R = {};
    this.N = "0";
    this.m = new Map;
    this.b = null;
    this.w = this.G = this.L = this.Y = !1;
    this.C = "";
    this.g = this.c = null;
    this.V = this.T = this.X = this.o = -1;
    this.K = null
};
ka(bJ, K);
var fJ = function(a, b) {
        y(b, function(c) {
            var d = new AF(c.Bd, c.c, c.za, c.Ia);
            null != c.a && (d.c = c.a);
            null != c.b && (d.g = c.b);
            a.a.unshift(d);
            cJ(a, BF(d), d.oa())
        }, a);
        dJ(a, 0);
        0 === a.a.length ? a.dispatchEvent("list_empty") : a.dispatchEvent("list_no_longer_empty");
        a.Y = !0;
        null != a.K && (eJ(a, a.K), a.K = null)
    },
    gJ = function(a, b) {
        switch (b) {
            case "0":
                a.a.sort(function(c, d) {
                    return d.g - c.g
                });
                a.h.sort(function(c, d) {
                    return d.g - c.g
                });
                break;
            case "2":
                a.a.sort(function(c, d) {
                    return c.a.localeCompare(d.a)
                });
                a.h.sort(function(c, d) {
                    return c.a.localeCompare(d.a)
                });
                break;
            default:
                return
        }
        a.N = b;
        dJ(a, 0)
    },
    hJ = function(a, b) {
        a.G = !0;
        a.C = b;
        a.h = [];
        for (var c = ba(a.a), d = c.next(); !d.done; d = c.next()) d = d.value, FF(d, b) && a.h.push(d);
        dJ(a, 0)
    },
    iJ = function(a, b, c) {
        a.w = !0;
        a.c = b;
        a.g = c;
        a.h = [];
        for (var d = ba(a.a), e = d.next(); !e.done; e = d.next()) e = e.value, b === BF(e) && c === e.m && a.h.push(e);
        dJ(a, 0)
    },
    jJ = function(a) {
        a.G = !1;
        a.C = "";
        dJ(a, 0)
    },
    kJ = function(a) {
        return a.w || a.G ? a.h : a.a
    },
    dJ = function(a, b) {
        if (!(0 > b || b > lJ(a))) {
            var c = 0 === kJ(a).length ? 0 : 10 * b,
                d = mJ(a, b),
                e = kJ(a).length;
            var f = kJ(a),
                g = 0 === kJ(a).length ?
                0 : 10 * b,
                h = mJ(a, b);
            if (0 !== f.length && g > f.length - 1) b = !1;
            else {
                for (dg(a.v); g < h; g++) {
                    var l = nJ(a, f[g]);
                    a.v.appendChild(l.j())
                }
                a.o = b;
                b = !0
            }
            b && (a.X === c && a.T === d && a.V === e || 0 !== e && c > e - 1 || (a.X = c, a.T = d, a.V = e, a.dispatchEvent({
                type: "num_entries_and_indices_updated",
                un: c + 1,
                zk: d,
                Am: e
            })), b = d = !1, 0 !== c && (d = !0), e > c + 10 && (b = !0), a.dispatchEvent({
                type: "page_update",
                Jl: b,
                Kl: d
            }))
        }
    },
    lJ = function(a) {
        var b = 0;
        for (a = kJ(a).length; 0 < a;) b++, a -= 10;
        return b
    },
    mJ = function(a, b) {
        a = kJ(a).length;
        if (0 === a) return 0;
        b = 10 * (b + 1);
        b > a && (b = a);
        return b
    },
    nJ = function(a, b) {
        var c = oJ(b),
            d = a.R[c];
        if (null != d) return d;
        d = Tp(WI, {
            za: nI(BF(b)),
            Mb: b.a,
            Ia: oI(b.oa()),
            Nb: b.b,
            Ha: DATA.Messages
        });
        b = new aJ(b, d);
        pJ(a, b);
        d = b;
        return a.R[c] = d
    },
    qJ = function(a, b) {
        var c = !0;
        a.G && !FF(b, a.C) && (c = !1);
        a.w && a.c && a.g && (a.c !== BF(b) || a.g !== b.m) && (c = !1);
        return c
    },
    pJ = function(a, b) {
        H(b, "entry_browsed", function() {
            if (a.b !== b) {
                var c = b.a;
                a.dispatchEvent({
                    type: "entry_browsed",
                    text: c.a,
                    fb: c.Qa(),
                    gb: c.oa()
                });
                rJ(a);
                V(b.v, "browsed", !0);
                a.b = b
            }
        }, !1);
        H(b, "delete_button_clicked", function() {
            jG(a.na,
                b.a, 1);
            a.dispatchEvent("delete_entry_requested")
        }, !1);
        H(b, "entry_selected", function() {
            var c = b.a;
            a.dispatchEvent({
                type: "entry_selected",
                text: c.a,
                fb: c.Qa(),
                gb: c.oa()
            })
        }, !1);
        H(b, "language_pair_selected", function() {
            a.dispatchEvent({
                type: "language_pair_selected",
                fb: BF(b.a),
                gb: b.a.oa()
            })
        }, !1);
        H(b, "interaction_with_disabled_voice_output", function(c) {
            a.dispatchEvent({
                type: "interaction_with_disabled_voice_output",
                Ya: c.Ya
            })
        }, !1)
    },
    rJ = function(a) {
        a.b && (V(a.b.v, "browsed", !1), a.b = null)
    },
    eJ = function(a, b) {
        if (!a.Y) a.K =
            b;
        else if (null == a.b || !EF(a.b.a, b))
            for (var c = a.b, d = a.a, e = 0; e < d.length; e++) {
                var f = d[e];
                if (EF(f, b)) {
                    b = nJ(a, f);
                    rJ(a);
                    V(b.v, "browsed", !0);
                    a.b = b;
                    null != c && Eg(document) === c.b && b.b.focus();
                    break
                }
            }
    },
    sJ = function(a) {
        a.match(/[",\t\n]/) && (a = '"' + a.replace(/"/g, '""') + '"');
        return a
    },
    cJ = function(a, b, c) {
        var d = b + "|" + c;
        a.m.has(d) ? (b = a.m.get(d), a.m.set(d, b + 1)) : (a.m.set(d, 1), a.dispatchEvent({
            type: "language_pair_added",
            fb: b,
            gb: c
        }))
    };

function oJ(a) {
    return BF(a) + "|" + a.oa() + "|" + a.a + "|" + a.b
};
var tJ = function(a) {
    X.call(this, a)
};
w(tJ, X);
tJ.prototype.Ma = function() {
    this.v = this.a.b("FORM", {
        method: "POST",
        style: "display:none"
    })
};
var uJ = function(a, b, c) {
    var d, e = [];
    for (d in c) {
        var f = c[d];
        Ka(f) ? y(f, v(function(g) {
            e.push(Jd("input", {
                type: "hidden",
                name: d,
                value: String(g)
            }))
        }, a)) : e.push(Jd("input", {
            type: "hidden",
            name: d,
            value: String(f)
        }))
    }
    Ud(b, Md(e))
};
var vJ = function(a, b, c) {
    Hg.call(this);
    this.tc = null != c ? v(a, c) : a;
    this.h = b;
    this.g = v(this.m, this);
    this.b = this.a = null;
    this.c = []
};
w(vJ, Hg);
vJ.prototype.o = function(a) {
    this.c = arguments;
    this.a ? this.b = Ua() + this.h : this.a = Bi(this.g, this.h)
};
vJ.prototype.stop = function() {
    this.a && (Ci(this.a), this.a = null);
    this.b = null;
    this.c = []
};
vJ.prototype.W = function() {
    this.stop();
    vJ.D.W.call(this)
};
vJ.prototype.m = function() {
    this.b ? (this.a = Bi(this.g, this.b - Ua()), this.b = null) : (this.a = null, this.tc.apply(null, this.c))
};
var wJ = function(a, b) {
        X.call(this, b);
        this.b = a || ""
    },
    xJ;
w(wJ, X);
wJ.prototype.g = null;
var yJ = function() {
    null != xJ || (xJ = "placeholder" in Yf("INPUT"));
    return xJ
};
k = wJ.prototype;
k.Ce = !1;
k.Ma = function() {
    this.v = this.a.b("INPUT", {
        type: "text"
    })
};
k.Da = function(a) {
    wJ.D.Da.call(this, a);
    this.b || (this.b = a.getAttribute("label") || "");
    Eg(Hf(a)) == a && (this.Ce = !0, a = this.j(), x(a), U(a, "label-input-label"));
    yJ() && (this.j().placeholder = this.b);
    a = this.j();
    x(a, "The label input element cannot be null.");
    Gp(a, "label", this.b)
};
k.ea = function() {
    wJ.D.ea.call(this);
    var a = new Hq(this);
    a.O(this.j(), "focus", this.$h);
    a.O(this.j(), "blur", this.Ok);
    if (yJ()) this.c = a;
    else {
        ze && a.O(this.j(), ["keypress", "keydown", "keyup"], this.Zk);
        var b = Hf(this.j());
        a.O(Uf(b), "load", this.Il);
        this.c = a;
        zJ(this)
    }
    AJ(this);
    this.j().b = this
};
k.nb = function() {
    wJ.D.nb.call(this);
    this.c && (this.c.La(), this.c = null);
    this.j().b = null
};
var zJ = function(a) {
    !a.m && a.c && a.j().form && (a.c.O(a.j().form, "submit", a.bl), a.m = !0)
};
k = wJ.prototype;
k.W = function() {
    wJ.D.W.call(this);
    this.c && (this.c.La(), this.c = null)
};
k.$h = function() {
    this.Ce = !0;
    var a = this.j();
    x(a);
    U(a, "label-input-label");
    if (!yJ() && !BJ(this) && !this.w) {
        var b = this;
        a = function() {
            b.j() && (b.j().value = "")
        };
        B ? Bi(a, 10) : a()
    }
};
k.Ok = function() {
    yJ() || (this.c.Ja(this.j(), "click", this.$h), this.g = null);
    this.Ce = !1;
    AJ(this)
};
k.Zk = function(a) {
    27 == a.keyCode && ("keydown" == a.type ? this.g = this.j().value : "keypress" == a.type ? this.j().value = this.g : "keyup" == a.type && (this.g = null), a.preventDefault())
};
k.bl = function() {
    BJ(this) || (this.j().value = "", Bi(this.Mk, 10, this))
};
k.Mk = function() {
    BJ(this) || (this.j().value = this.b)
};
k.Il = function() {
    AJ(this)
};
var BJ = function(a) {
        return !!a.j() && "" != a.j().value && a.j().value != a.b
    },
    CJ = function(a) {
        a.j().value = "";
        null != a.g && (a.g = "")
    };
wJ.prototype.reset = function() {
    BJ(this) && (CJ(this), AJ(this))
};
wJ.prototype.Z = function() {
    return null != this.g ? this.g : BJ(this) ? this.j().value : ""
};
var AJ = function(a) {
    var b = a.j();
    x(b, "The label input element cannot be null.");
    yJ() ? a.j().placeholder != a.b && (a.j().placeholder = a.b) : zJ(a);
    Gp(b, "label", a.b);
    BJ(a) ? (b = a.j(), x(b), U(b, "label-input-label")) : (a.w || a.Ce || (b = a.j(), x(b), T(b, "label-input-label")), yJ() || Bi(a.h, 10, a))
};
wJ.prototype.qa = function(a) {
    this.j().disabled = !a;
    var b = this.j();
    x(b);
    V(b, "label-input-label-disabled", !a)
};
wJ.prototype.isEnabled = function() {
    return !this.j().disabled
};
wJ.prototype.h = function() {
    !this.j() || BJ(this) || this.Ce || (this.j().value = this.b)
};
var DJ = function() {};
w(DJ, Bx);
Ga(DJ);
DJ.prototype.xa = function() {
    return "goog-toolbar-menu-button"
};
var NJ = function(a, b) {
    K.call(this);
    var c = this;
    this.F = L.M();
    this.h = Em.M();
    this.v = a;
    V(this.v, "mobile", gt());
    this.a = new bJ(E("tlid-phrasebook-entry-list", this.v), b);
    EJ(this);
    this.ya = E("tlid-phrasebook-header-num-phrases", this.v);
    this.sa = E("tlid-phrasebook-body-num-phrases", this.v);
    this.Ca = new PF(DATA.Messages.NUM_PHRASES_PAGINATED);
    this.L = FJ(this);
    H(this.L, "change", this.N, !1, this);
    GJ(this, E("tlid-phrasebook-export-to-sheets", this.v), this.o);
    this.ba = HJ(this);
    this.T = IJ(this);
    this.K = GJ(this, E("tlid-phrasebook-search-button",
        this.v), this.na);
    JJ(this, !1);
    this.C = new vJ(this.Y, 500, this);
    this.b = new wJ(DATA.Messages.SEARCH_PHRASES);
    this.b.ia(E("tlid-phrasebook-search-box", this.v));
    H(this.b.j(), "keydown", function(d) {
        switch (d.keyCode) {
            case 27:
                c.C.stop();
                CJ(c.b);
                KJ(c);
                jJ(c.a);
                break;
            case 9:
                break;
            default:
                c.C.o()
        }
    }, !1, this);
    GJ(this, E("tlid-phrasebook-search-clear-button", this.v), this.V);
    GJ(this, E("tlid-phrasebook-close-button", this.v), this.Na);
    this.w = D("tlid-phrasebook-header-next-page", this.v) || null;
    null != this.w && H(this.w, "click",
        function() {
            var d = c.F;
            N(d, O(d, 336));
            LJ(c, "np");
            d = c.a;
            var e = d.o + 1;
            e > lJ(d) || dJ(d, e)
        }, !1);
    this.G = D("tlid-phrasebook-header-prev-page", this.v) || null;
    null != this.G && H(this.G, "click", function() {
        var d = c.F;
        N(d, O(d, 337));
        LJ(c, "pp");
        d = c.a;
        var e = d.o - 1;
        0 > e || dJ(d, e)
    }, !1);
    this.aa = E("tlid-phrasebook-header-language-pair-container", this.v);
    this.g = [];
    this.R = E("tlid-phrasebook-body-language-pair-container", this.v);
    this.c = [];
    this.m = !1;
    a = b.c && !b.C || !b.m ? null : b.g.concat(b.a);
    null !== a && MJ(this, a)
};
ka(NJ, K);
var FJ = function(a) {
        var b = E("tlid-phrasebook-sort", a.v),
            c = [DATA.Messages.SORT_BY_DATE, DATA.Messages.SORT_ALPHABETICALLY];
        ms(b);
        rH(b);
        xc(le("sort-button-tooltip")) || b.setAttribute("data-tooltip-class", "sort-button-tooltip");
        b = new by(b, c, 10, ["0", "2"], void 0, DATA.Messages.SORT, DJ.M(), void 0, !0);
        Gx(b, new xx(b.$b(), 13));
        Hx(b, new Vp(-16, -24, 0, 0));
        c = Fx(b);
        c.Ua(E("tlid-phrasebook-sort-menu", a.v));
        H(c, "show", function() {
            var d = a.F;
            N(d, O(d, 319));
            LJ(a, "so")
        }, !1);
        return b
    },
    GJ = function(a, b, c) {
        var d = void 0 === d ? !0 :
            d;
        var e = new Pr(null, new Jt);
        e.ia(b);
        d && (ms(b), rH(b));
        c && H(e, "action", c, !1, a);
        return e
    },
    HJ = function(a) {
        var b = E("tlid-phrasebook-more-button", a.v),
            c = new Cx;
        c.ia(b);
        ms(b);
        rH(b);
        c.ze(OJ(a, DATA.Messages.DELETE_ALL, a.X, "delete-all-menuitem"));
        c.ze(OJ(a, DATA.Messages.EXPORT_TO_SHEETS, a.o, "export-menuitem"));
        Gx(c, new xx(b, 13));
        c.ba = new Vp(-20, 0, 0, 0);
        Fx(c).Ua(E("tlid-phrasebook-more-menu", a.v));
        return c
    },
    OJ = function(a, b, c, d) {
        b = new ox(b);
        Cr(b, d);
        H(b, "action", c, !1, a);
        return b
    },
    IJ = function(a) {
        var b = new RH("phrasebook-delete-all-dialog", !0);
        SH(b, DATA.Messages.DELETE_ALL_DIALOG_TITLE);
        TH(b, Ed(DATA.Messages.DELETE_ALL_DIALOG_CONTENT));
        b.eg = !1;
        VH(b, !1);
        b.Kh = !0;
        var c = new OH;
        c.set("cancel", DATA.Messages.CANCEL, !1, !0);
        c.set("delete", DATA.Messages.DELETE);
        ZH(b, c);
        H(b, "dialogselect", function(d) {
            if ("delete" !== d.key) d = a.F, N(d, O(d, 326)), LJ(a, "dn");
            else {
                d = a.a;
                if (0 === d.a.length) d = !1;
                else {
                    d.L = !0;
                    for (var e = 0; e < d.a.length; e++) jG(d.na, d.a[e], 1);
                    d = !0
                }
                d && T(a.v, "loading");
                d = a.F;
                N(d, O(d, 325));
                LJ(a, "dy")
            }
        }, !1);
        return b
    },
    EJ = function(a) {
        H(a.a, "delete_all_complete",
            function() {
                U(a.v, "loading")
            }, !1);
        H(a.a, "entry_browsed", function(b) {
            a.dispatchEvent({
                type: "phrasebook_entry_selected",
                text: b.text,
                fb: b.fb,
                gb: b.gb
            })
        }, !1);
        H(a.a, "delete_entry_requested", function() {
            a.dispatchEvent("delete_entry_requested")
        }, !1);
        H(a.a, "entry_selected", function(b) {
            a.dispatchEvent({
                type: "phrasebook_entry_selected",
                text: b.text,
                fb: b.fb,
                gb: b.gb
            });
            a.dispatchEvent("close_requested")
        }, !1);
        H(a.a, "page_update", function(b) {
            var c = b.Kl;
            V(a.v, "has-next-page", b.Jl);
            V(a.v, "has-prev-page", c)
        }, !1);
        H(a.a,
            "language_pair_added",
            function(b) {
                if (null != b) {
                    var c = b.fb;
                    b = b.gb;
                    PJ(a, c, b, a.aa, a.g);
                    PJ(a, c, b, a.R, a.c)
                } else a.h.log("jse=lpa", {})
            }, !1);
        H(a.a, "language_pair_removed", function(b) {
            if (null != b) {
                var c = b.fb;
                b = b.gb;
                QJ(c, b, a.g);
                QJ(c, b, a.c)
            } else a.h.log("jse=lpr", {})
        }, !1);
        H(a.a, "language_pair_selected", function(b) {
            null != b ? (RJ(a, b.fb, b.gb), b = a.F, N(b, O(b, 322)), LJ(a, "fs")) : a.h.log("jse=lps", {})
        }, !1);
        H(a.a, "list_empty", function() {
            V(a.v, "empty", !0)
        }, !1);
        H(a.a, "list_no_longer_empty", function() {
            V(a.v, "empty", !1)
        }, !1);
        H(a.a, "num_entries_and_indices_updated", function(b) {
            var c = DATA.DisplayLanguage;
            b = SF(a.Ca, {
                NUM_PHRASES: b.Am,
                START_NUM: b.un.toLocaleString(c),
                END_NUM: b.zk.toLocaleString(c)
            });
            G(a.ya, b);
            G(a.sa, b)
        }, !1);
        H(a.a, "last_displayed_entry_deleted", function() {
            SJ(a)
        }, !1);
        H(a.a, "interaction_with_disabled_voice_output", function(b) {
            a.dispatchEvent({
                type: "interaction_with_disabled_voice_output",
                Ya: b.Ya
            })
        }, !1)
    },
    MJ = function(a, b) {
        a.m || (fJ(a.a, b), a.m = !0, U(a.v, "loading"))
    },
    SJ = function(a) {
        TJ(a);
        CJ(a.b);
        KJ(a);
        jJ(a.a)
    };
NJ.prototype.N = function() {
    var a = this.L.Z();
    switch (a) {
        case "0":
            var b = this.F;
            N(b, O(b, 320));
            LJ(this, "s1");
            break;
        case "2":
            b = this.F;
            N(b, O(b, 321));
            LJ(this, "s2");
            break;
        default:
            return
    }
    gJ(this.a, a)
};
var JJ = function(a, b) {
    V(a.v, "search-open", b)
};
NJ.prototype.na = function() {
    var a = this.F;
    N(a, O(a, 318));
    LJ(this, "os");
    UJ(this)
};
var UJ = function(a) {
        JJ(a, !0);
        CJ(a.b);
        a.b.j().focus();
        TJ(a);
        jJ(a.a);
        T(a.v, "empty-search-query")
    },
    KJ = function(a) {
        JJ(a, !1);
        U(a.v, "empty-search-query")
    };
NJ.prototype.Y = function() {
    this.b.Z() ? (U(this.v, "empty-search-query"), hJ(this.a, this.b.Z())) : UJ(this)
};
NJ.prototype.V = function() {
    this.b.Z() ? UJ(this) : (KJ(this), jJ(this.a))
};
NJ.prototype.Na = function() {
    var a = this.F;
    N(a, O(a, 317));
    LJ(this, "cb");
    this.dispatchEvent("close_requested");
    SJ(this)
};
NJ.prototype.o = function() {
    var a = {
            authuser: Ij() || "0",
            target: "_blank"
        },
        b = this.a;
    var c = [];
    for (var d = b.a, e = d.length - 1; 0 <= e; --e) {
        var f = [],
            g = d[e];
        qJ(b, g) && (f.push(nI(BF(g))), f.push(oI(g.oa())), f.push(sJ(g.a)), f.push(sJ(g.b)), c.push(f.join(",")))
    }
    c = c.join("\n");
    b = this.a;
    d = DATA.Messages.SAVED_TRANSLATIONS_SPREADSHEET_TITLE;
    b.w && null != b.c && null != b.g && (d = d + " - " + nI(b.c) + " - " + oI(b.g));
    a = a || {};
    b = a.target;
    e = a.trixPath || (a.useCorp ? "https://docs.google.com/a/google.com/spreadsheets/" : void 0);
    delete a.target;
    delete a.useCorp;
    delete a.trixPath;
    Xb(a, {
        content: c,
        title: d
    });
    c = a.authuser;
    d = Kj(e || "https://docs.google.com/spreadsheets/", "import");
    d = Kj(d, "inline");
    c && (d = Fj(d, "authuser", c));
    c = d;
    d = new tJ;
    e = d.j();
    e || (d.Ua(), e = d.j());
    e.action = c || "";
    e.target = b || "";
    uJ(d, e, a);
    e.submit()
};
var PJ = function(a, b, c, d, e) {
        var f = VJ(b, c);
        b = new YI(f, b, c);
        bg(d, f);
        e.push(b);
        H(b, "language_pair_selected", function(g) {
            g = g.target;
            RJ(a, g.Qa(), g.oa());
            g = a.F;
            N(g, O(g, 322));
            LJ(a, "fs")
        }, !1);
        H(b, "language_pair_deselected", function() {
            TJ(a);
            var g = a.F;
            N(g, O(g, 323));
            LJ(a, "fr")
        }, !1)
    },
    QJ = function(a, b, c) {
        for (var d = c.length - 1; 0 <= d; d--) {
            var e = c[d];
            a === e.a && b === e.b && (hg(e.j()), c.splice(d, 1), ph(e))
        }
    },
    RJ = function(a, b, c) {
        T(a.v, "language-pair-selected");
        for (var d = 0; d < a.g.length; d++) {
            var e = a.g[d];
            e.ad(b === e.a && c === e.b)
        }
        for (d =
            0; d < a.c.length; d++) e = a.c[d], e.ad(b === e.a && c === e.b);
        iJ(a.a, b, c);
        KJ(a)
    },
    TJ = function(a) {
        U(a.v, "language-pair-selected");
        for (var b = 0; b < a.g.length; b++) a.g[b].ad(!1);
        for (b = 0; b < a.c.length; b++) a.c[b].ad(!1);
        a = a.a;
        a.w = !1;
        a.c = null;
        a.g = null;
        dJ(a, 0)
    };
NJ.prototype.X = function() {
    this.T.setVisible(!0);
    this.ba.Wa(!1);
    var a = this.F;
    N(a, O(a, 324));
    LJ(this, "da")
};
var LJ = function(a, b) {
    a.h.log("api=" + b, {})
};

function VJ(a, b) {
    return Tp(UI, {
        za: nI(a),
        Ia: oI(b)
    })
};
var WJ = function(a) {
    var b = Sn(t(a.Sa), "displayLanguage", a.Sa, "string");
    a = a.Ha;
    var c = P,
        d = "<div class='tlid-phrasebook-container phrasebook-container loading'><div class='phrasebook-top-header'><div class='phrasebook-top-bar'><div class='tlid-phrasebook-close-button close-button button-icon' aria-label=\"" + S(a.CLOSE_SAVED_TRANSLATIONS) + "\"></div><div class='title'>" + R(a.SAVED_SECTION_TITLE) + "</div><div class='tlid-phrasebook-search-button search-button search-image-black button-icon' title=\"" + S(a.SEARCH_PHRASES) +
        "\"></div><div class='tlid-phrasebook-search-bar search-bar'><div class='search-image-black button-icon'></div><input class='tlid-phrasebook-search-box search-box'><div class='tlid-phrasebook-search-clear-button clear-button clear-image-black button-icon' title=\"" + S(a.CLEAR_TEXT) + "\"></div></div><div class='phrasebook-features'><div class='tlid-phrasebook-sort-menu sort-menu'></div><div class='tlid-phrasebook-more-menu more-menu'></div><div class='tlid-phrasebook-sort sort-button button-icon' aria-label='" +
        S(a.SORT) + "' title='" + S(a.SORT) + "'></div><div class='export-button-container'><div class='tlid-phrasebook-export-to-sheets export-button button-icon' title='" + S(a.EXPORT_TO_SHEETS) + "'></div></div><div class='tlid-phrasebook-more-button more-button button-icon' aria-label='" + S(a.MORE) + "' title='" + S(a.MORE) + "'></div></div></div><div class='nav-bar'><div class='tlid-phrasebook-header-num-phrases num-phrases'></div><div class='nav-button-container'><button class='tlid-phrasebook-header-prev-page prev-button page-nav-button'></button><button class='tlid-phrasebook-header-next-page next-button page-nav-button'></button></div></div><div class='selected-chip-bar'><div class='tlid-phrasebook-header-language-pair-container language-pair-container'></div></div></div><div class='phrasebook-body'><div class='tlid-phrasebook-body-language-pair-container language-pair-container'><div class='title'>" +
        R(a.LANGUAGE_PAIRS) + "</div></div><div class='tlid-phrasebook-body-num-phrases num-phrases'></div>";
    var e = P('<div class=\'tlid-phrasebook-entry-list entry-list\' role="listbox" tabindex="0"></div>');
    return c(d + R(e) + "</div><div class='empty-placeholder'><div class='placeholder-image'></div><div class='placeholder-text-holder'><div class='placeholder-title'>" + R(a.PHRASEBOOK_INFO_HEADER) + "</div><div class='placeholder-body'>" + R(a.PHRASEBOOK_INFO_TEXT) + "</div></div><div class='placeholder-link'><a target='_blank' href='https://support.google.com/translate?p=phrasebook_web_help&hl=" +
        Ln(b) + "'>" + R(a.LEARN_MORE) + "</a></div></div><div class='phrasebook-loader'><div class='mspin-googblue-medium'><div><div></div></div></div></div></div>")
};
WJ.a = "trans.mobile.components.phrasebook.template.main";
var XJ = function() {
        var a = Jf("backend-stats-decoder");
        this.b = null != a ? a : null;
        a = Jf("backend-stats-decoder1");
        this.o = null != a ? a : null;
        a = Jf("backend-stats-decoder2");
        this.g = null != a ? a : null;
        a = Jf("backend-stats-rapid-response");
        this.m = null != a ? a : null;
        a = Jf("backend-stats-stt-total");
        this.w = null != a ? a : null;
        a = Jf("backend-stats-community");
        this.a = null != a ? a : null;
        a = Jf("backend-stats-dictionary");
        this.c = null != a ? a : null;
        a = Jf("backend-stats-other");
        this.h = null != a ? a : null;
        a = Jf("backend-models-used");
        this.L = null != a ? a : null;
        a = Jf("backend-models-checksum");
        this.G = null != a ? a : null;
        a = Jf("backend-models-launch-doc");
        this.C = null != a ? a : null
    },
    YJ = function(a) {
        a.w && a.a && a.c && a.b && a.o && a.g && a.m && a.h && a.L && a.G && a.C && (G(a.b, "0"), G(a.o, "0"), G(a.g, "0"), G(a.m, "0"), G(a.w, "0"), G(a.a, "0"), G(a.c, "0"), G(a.h, "0"), G(a.L, ""), G(a.G, ""), G(a.C, ""))
    },
    ZJ = function(a, b, c) {
        var d = Yf("A"),
            e = Zf(" ");
        d.appendChild(Zf(c));
        Vd(d, b);
        a.appendChild(d);
        a.appendChild(e)
    };
var $J = function(a, b) {
    K.call(this);
    this.F = L.M();
    this.a = a;
    this.g = b;
    this.b = E("tlid-file-input", this.a);
    this.o = E("tlid-select-file-button", this.a);
    this.T = E("tlid-sl-input", this.a);
    this.V = E("tlid-tl-input", this.a);
    this.m = E("tlid-selected-file-label", this.a);
    this.w = E("tlid-selected-file-size", this.a);
    this.L = E("tlid-cancel-selected-file-button", this.a);
    this.h = E("tlid-translate-doc-button", this.a);
    this.c = this.h.form;
    this.K = new Uu;
    H(this.o, "click", this.G, !1, this);
    H(this.h, "click", this.N, !1, this);
    H(this.b,
        "change", this.C, !1, this);
    H(this.L, "click", this.R, !1, this);
    U(this.a, "loading")
};
ka($J, K);
$J.prototype.N = function() {
    U(this.a, "has-file");
    T(this.a, "translating-file");
    var a = aK(this),
        b = bK(this.b.value),
        c = this.F,
        d = cK(b),
        e = O(c, 301),
        f = new Kk;
    C(f, 1, d);
    C(f, 2, a);
    mf(e, 76, f);
    N(c, e);
    dK("success", a, b);
    this.c.enctype = this.c.encoding = "multipart/form-data";
    this.T.value = this.g.a;
    this.V.value = this.g.b;
    this.c.submit()
};
$J.prototype.G = function() {
    var a = this.F;
    N(a, O(a, 297));
    eK("bc")
};
$J.prototype.C = function() {
    var a = this.b.value;
    if ("" !== a) {
        var b = a.replace("C:\\fakepath\\", "");
        a = bK(b);
        if (0 === a.length) var c = !1;
        else switch (a.toLowerCase()) {
            case "doc":
            case "docx":
            case "odf":
            case "pdf":
            case "ppt":
            case "pptx":
            case "ps":
            case "rtf":
            case "txt":
            case "xls":
            case "xlsx":
                c = !0;
                break;
            default:
                c = !1
        }
        if (c) {
            if (p(window.FileReader)) {
                c = aK(this);
                if (1048575 < c) {
                    this.dispatchEvent("file_too_big");
                    this.b.value = "";
                    b = this.F;
                    var d = cK(a),
                        e = O(b, 148),
                        f = new Lk;
                    C(f, 1, 161);
                    mf(e, 63, f);
                    f = new Kk;
                    C(f, 1, d);
                    C(f, 2, c);
                    mf(e,
                        76, f);
                    N(b, e);
                    dK("ftbe", c, a);
                    return
                }
                a = this.w;
                c = aK(this);
                d = DATA.Messages.FILE_SIZE_BYTES;
                1 <= c / 1024 && (c /= 1024, d = DATA.Messages.FILE_SIZE_KILOBYTES);
                c = this.K.a(d, c.toFixed(0).toString());
                G(a, c)
            }
            G(this.m, b);
            T(this.a, "has-file");
            U(this.a, "translating-file");
            a = this.F;
            N(a, O(a, 308));
            eK("fs")
        } else this.dispatchEvent("unsupported_filetype"), this.b.value = "", km(this.F, 160), dK("ufte", 0, a)
    }
};
$J.prototype.R = function() {
    var a = this.F;
    N(a, O(a, 298));
    eK("c");
    this.b.value = "";
    U(this.a, "has-file");
    U(this.a, "translating-file")
};
var bK = function(a) {
        a = a.split(".");
        return 1 === a.length ? "" : a[a.length - 1].toLowerCase()
    },
    cK = function(a) {
        switch (a.toLowerCase()) {
            case "doc":
                return 1;
            case "docx":
                return 2;
            case "odf":
                return 3;
            case "pdf":
                return 4;
            case "ppt":
                return 5;
            case "pptx":
                return 6;
            case "ps":
                return 7;
            case "rtf":
                return 8;
            case "txt":
                return 9;
            case "xls":
                return 10;
            case "xlsx":
                return 11;
            default:
                return 0
        }
    },
    aK = function(a) {
        return 0 === a.b.files.length ? 0 : a.b.files[0].size
    },
    dK = function(a, b, c) {
        Jm(dI, "webapp", "dt", a, {
            dtfs: b,
            dtft: c
        })
    },
    eK = function(a) {
        Jm(dI,
            "webapp", "dti", a, {})
    };
var fK = function(a, b) {
    K.call(this);
    this.F = L.M();
    this.v = a;
    this.o = b;
    this.a = null;
    this.g = !1;
    this.b = null;
    this.c = []
};
ka(fK, K);
var gK = function(a, b, c, d) {
    a.a ? FI(a.a, b, c, d) : a.b = new AF(d, {}, b, c)
};
fK.prototype.m = function() {
    this.dispatchEvent("close_requested")
};
fK.prototype.h = function() {
    this.dispatchEvent("history_cleared")
};
var hK = function(a) {
    if (null == a.a) {
        var b = Tp(HI, {
            Ha: DATA.Messages
        });
        E("tlid-translation-history-container", a.v).appendChild(b);
        a.a = new xI(b, a.o);
        H(a.a, "close_requested", a.m, !1, a);
        H(a.a, "clear_history_clicked", a.h, !1, a);
        H(a.a, "history_entry_selected", function(c) {
            a.dispatchEvent({
                type: "history_entry_selected",
                fb: c.fb,
                gb: c.gb,
                text: c.text
            })
        }, !1);
        AI(a.a, a.c);
        a.c = [];
        null != a.b && FI(a.a, a.b.Qa(), a.b.oa(), a.b.a);
        a.g && GI(a.a)
    }
};
var jK = function(a, b) {
        this.F = L.M();
        this.c = a;
        this.a = E("tlid-transliteration-content", this.c);
        this.h = E("tlid-show-more-link", this.c);
        this.g = E("tlid-show-less-link", this.c);
        this.b = b;
        this.o = !1;
        iK(this)
    },
    lK = function(a, b) {
        if (p(b)) {
            var c = [];
            if (b.sentences)
                for (var d = 0, e; e = b.sentences[d]; d++) 1 === a.b ? e["src-translit"] && c.push(e["src-translit"]) : 2 === a.b && e.translit && c.push(e.translit);
            b = c.join("")
        } else b = "";
        kK(a, b)
    },
    kK = function(a, b) {
        mK(a);
        G(a.a, b);
        V(a.c, "rtl", nc(b));
        Bi(function() {
            return nK(a)
        }, 0)
    },
    nK = function(a) {
        mK(a);
        var b = a.a.offsetHeight,
            c = parseInt(aq(a.a, "lineHeight"), 10);
        3 < Math.ceil(b / c) ? a.o ? oK(a) : pK(a) : (V(a.a, "full", !0), V(a.a, "truncated", !1), W(a.h, !1), W(a.g, !1));
        V(a.a, "intermediate", !1)
    },
    oK = function(a) {
        V(a.a, "full", !0);
        V(a.a, "truncated", !1);
        W(a.h, !1);
        W(a.g, !0)
    },
    pK = function(a) {
        V(a.a, "full", !1);
        V(a.a, "truncated", !0);
        W(a.h, !0);
        W(a.g, !1)
    },
    mK = function(a) {
        Op(a.a, ["truncated", "full"]);
        T(a.a, "intermediate")
    };
jK.prototype.m = function() {
    var a = this;
    Bi(function() {
        return nK(a)
    }, 0)
};
var iK = function(a) {
    var b = 0,
        c = "";
    1 === a.b ? (b = 1, c = "src") : 2 === a.b && (b = 2, c = "tgt");
    H(a.h, "click", function() {
        this.o = !0;
        oK(this);
        zm(this.F, 290, b, this.a.textContent.length);
        Jm(dI, "webapp", "showmore", "click", {
            l: c
        })
    }, !1, a);
    H(a.g, "click", function() {
        this.o = !1;
        pK(this);
        zm(this.F, 291, b, this.a.textContent.length);
        Jm(dI, "webapp", "showless", "click", {
            l: c
        })
    }, !1, a);
    H(window, "resize", a.m, !1, a)
};
var qK = function(a) {
    X.call(this);
    this.m = a;
    this.b = new wJ;
    this.g = new xs("");
    this.c = new xs("");
    this.h = null
};
w(qK, X);
var rK = function(a) {
    a.c.ia(D("clear", a.j()));
    a.c.qd(DATA.Messages.CLEAR_TEXT);
    a.c.setVisible(!1);
    a.g.ia(D("url-go-button", a.j()));
    a.g.qd(DATA.Messages.TRANSLATE);
    a.g.qa(!1);
    a.b.ia(D("url-orig", a.j()));
    var b = a.b,
        c = DATA.Messages.URL_INPUT_PLACEHOLDER,
        d = b.j();
    yJ() ? (d && (d.placeholder = c), b.b = c) : BJ(b) || (d && (d.value = ""), b.b = c, b.h());
    d && Gp(d, "label", b.b);
    a.h = D("url-err-msg", a.j());
    G(a.h, DATA.Messages.ENTER_VALID_URL);
    W(a.h, !1);
    H(a.b.j(), "input", a.w, !1, a);
    H(a.c, "action", a.C, !1, a);
    H(a.g, "action", a.K, !1, a)
};
qK.prototype.C = function() {
    CJ(this.b);
    this.b.j().focus();
    this.g.qa(!1);
    this.c.setVisible(!1);
    W(this.h, !1)
};
qK.prototype.w = function() {
    var a = yc(this.b.Z());
    this.g.qa(!!a);
    this.c.setVisible(!!this.b.Z());
    a = a && !Yu(a);
    W(this.h, a)
};
qK.prototype.K = function() {
    var a = yc(this.b.Z());
    if (Yu(a)) {
        var b = this.m.a,
            c = this.m.b;
        var d = n.location.href;
        var e = d.indexOf("#");
        d = 0 > e ? d : d.substr(0, e);
        d = d.replace("/m/translate", "/translate");
        d = Ej(d, "sl", b ? b : "auto", "tl", c, "u", escape(a));
        n.open(d, "webtrans")
    }
};
var xK = function(a) {
    var b = a.Qj,
        c = a.Xj,
        d = a.ak,
        e = a.bk,
        f = a.gk,
        g = a.hk,
        h = a.lk,
        l = a.Sa,
        m = a.nk,
        q = a.qk,
        r = a.rk,
        u = a.wk,
        A = a.xk,
        Q = a.Nl,
        M = a.Ha,
        Oa = a.nm,
        Hb = a.pm,
        Ia = a.Sm,
        Ib = a.Tm,
        wg = a.Um,
        Ce = a.Vm,
        Sm = a.Zm,
        Qj = a.pn,
        lM = a.Gn,
        mM = a.fo,
        nM = P,
        Hk;
    a.jk ? Hk = P("<div class='tlid-survey survey-container hidden'><div class='tlid-before-survey'><div class='tlid-dismiss-survey dismiss-button'></div><div class='title'>" + R(M.HAPPINESS_SURVEY_TITLE) + "</div><div class='tlid-survey-contents survey-contents'></div><div class='goog-logo-container'><div class='goog-logo'></div></div></div><div class='tlid-after-survey' style='display: none'><div class='title'>" +
        R(M.HAPPINESS_SURVEY_THANKS) + "</div><div class='after-message'><div>" + R(M.HAPPINESS_SURVEY_AFTER) + "</div><div class='more-feedback-link'><a href='javascript:void(0);' class='tlid-more-feedback'>" + R(M.HAPPINESS_SURVEY_MORE_FEEDBACK) + "</a></div></div></div></div>") : Hk = "";
    a = Hk + "<div class='frame'>";
    Hk = P;
    var oM = "<div class='page tlid-homepage homepage translate-text'>" + P("<div class='input-button-container'><div class='tlid-input-button-container focus-wrapper' role='tablist' tabindex='0'>" + sK({
            identifier: "tlid-input-button-text",
            ji: "text-icon",
            label: M.INPUT_METHOD_TEXT
        }) + sK({
            identifier: "tlid-input-button-docs",
            ji: "documents-icon",
            label: M.INPUT_METHOD_DOCUMENTS
        }) + "</div></div>") + (r ? P("<span class='tlid-brain-logos-container'><span class='tlid-no-brain-logo no-brain-logo brain-container'></span><span class='tlid-brain-logo brain-logo brain-container'></span></span>") : ""),
        at;
    h ? at = P('<div class="promo-notification-wrapper"><div class=\'' + S("tlid-magnet-promo") + " promo-notification'>" + R("Google Translate is hiring!") + " <span class='tlid-promo-notification-link'><a href='" +
        S(Pn("http://go/joinTranslate")) + "' target='_blank'>" + R("go/joinTranslate") + "</a></span></div></div>") : at = "";
    f = oM + at + (f ? P("<div class='app-download-bar'><div class='tlid-app-download-bar focus-wrapper' tabindex=\"0\"><div class=\"prompt-text\">\u70b9\u51fb\u56fe\u6807\u4e0b\u8f7d App</div>" + R(sI({
        je: "Android",
        Xf: "android",
        identifier: "tlid-android-download"
    })) + R(sI({
        je: "iOS",
        Xf: "ios",
        identifier: "tlid-ios-download"
    })) + "</div></div>") : "") + "<div class='homepage-content-wrap'><div class='tlid-source-target main-header'><div class='source-target-row'>";
    h = P;
    d = '<div class="tlid-input input"><div class="tlid-language-bar ls-wrap"><div class="sl-wrap"><div class="sl-sugg"></div><div class="sugg-fade"></div><div class="sl-more tlid-open-source-language-list" aria-label="' + S(M.MORE) + '" role="button" tabindex="0"></div></div>' + tK({
            className: "sl",
            identifier: "source",
            ni: Qj,
            selected: d
        }) + '<div class="swap-wrap"><div class="swap jfk-button-narrow jfk-button-standard" aria-label="' + S(M.TOOLTIP_SWAP_LANGUAGES) + '" data-tooltip="' + S(M.TOOLTIP_SWAP_LANGUAGES) + '"><div class="jfk-button-img"></div></div></div><div class="tl-wrap"><div class="tl-sugg"></div><div class="sugg-fade"></div><div class="tl-more tlid-open-target-language-list" aria-label="' +
        S(M.MORE) + '" role="button" tabindex="0"></div></div>' + tK({
            className: "tl",
            identifier: "target",
            ni: lM,
            selected: e
        }) + '</div><div class="source-wrap">';
    Ib = P('<div class="input-full-height-wrapper tlid-input-full-height-wrapper"><div class="source-input"><div id="input-wrap" class="tlid-input-area input-area' + (Ib ? "" : " less-padding") + '"><textarea id="source" class="orig tlid-source-text-input" rows="1" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"></textarea><div class="text-dummy"></div><div id=gt-src-is style="display:none" class="gt-is-mobile gt-is"><div id=gt-src-is-list class=gt-is-ctr></div></div></div><div class="source-header"><div class="clear-wrap"><div class="clear jfk-button-flat tlid-clear-source-text" aria-label="' +
        S(M.CLEAR_TEXT) + '" data-tooltip="' + S(M.CLEAR_TEXT) + '"><div class="jfk-button-img"></div></div></div>' + (Ib ? '<div class="go-wrap"><div class="go-button" aria-label="' + S(M.TRANSLATE) + '" data-tooltip="' + S(M.TRANSLATE) + '"><div class="go jfk-button-action"><div class="jfk-button-img"></div></div></div></div>' : "") + "</div>" + uK({
            containerId: "tlid-source-transliteration-container",
            Ha: M,
            Ti: "source-transliteration-container"
        }) + '<div id="spelling-correction" class="tlid-spelling-correction spelling-correction"></div><div class="source-footer-wrap source-or-target-footer"><div class="source-input-tools" id="gt-input-tool"></div><div class="character-count tlid-character-count"><div class="cc-ctr"></div><div class="cc-msg"></div></div><div class="source-footer"><div class="speech-wrap source-or-target-footer-button left-positioned"><span class="speech-border"></span></div>' +
        vK({
            Ve: ["src-tts", "left-positioned"],
            Ha: M
        }) + "</div></div></div></div>");
    Ib = h(d + Ib + "</div>" + (A ? P('<div class="url-input-wrap" style="display:none"><input id="url-input" class="url-orig" rows="1" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"><div class="url-clear-wrap"><div class="clear jfk-button-flat"><div class="jfk-button-img"></div></div></div><div class="url-go-wrap"><div class="url-go-button"><div class="go jfk-button-action"><div class="jfk-button-img"></div></div></div></div><div class="url-err-msg"></div></div>') :
            "") + P('<div id="gt-ovfl" style="display: none;" class="snck ovfl"><div id="gt-ovfl-ctr" class="ovfl-ctr"><span id="gt-ovfl-msg" class="snck-msg" role="alert" aria-live="alert"></span><span id="gt-ovfl-xlt" class="ovfl-xlt" role="button">' + R(M.TRANSLATE_MORE) + "</span></div></div>") + P('<div id="gt-ntfcn" style="display: none;" class="snck ntfcn"><div id="gt-ntfcn-ctr" class="ntfcn-ctr"><span id="gt-ntfcn-msg" class="snck-msg" role="alert" aria-live="alert"></span></div></div>') + P('<div id="gt-cmty" style="display: none;" class="snck cmty"><div id="gt-cmty-ctr" class="cmty-ctr"><span id="gt-cmty-msg" class="snck-msg" role="alert" aria-live="alert"></span><span id="gt-cmty-btn" class="cmty-btn" role="button"></span></div></div>') +
        "</div>");
    Ib = f + Ib;
    l = P('<div class="tlid-results-container results-container">' + (r ? '<div class="tlid-prod-translation prod-translation translation"></div>' : "") + (u ? '<div class="error-placeholder placeholder"><span class="tlid-result-error"></span><span class="tlid-result-container-error-button translation-error-button">' + R(M.TRY_AGAIN) + "</span></div>" : '<span class="tlid-result-error error-placeholder placeholder"></span>') + '<span class="empty-placeholder placeholder">' + R(M.TRANSLATION) + '</span><span class="translating-placeholder placeholder">' +
        R(M.TRANS_IN_PROGRESS) + '</span><div class="gendered-translations-header">' + R(M.GENDER_SPECIFIC_TRANSLATIONS_LABEL) + ' <a class="gendered-translations-learn-more" href="https://support.google.com/translate?p=gendered_translations&hl=' + Ln(l) + '" target="_blank">' + R(M.LEARN_MORE) + "</a></div></div>");
    l = Ib + l + "</div><div class='tlid-select-file-page-container'></div></div>";
    u = P("<div class='tlid-result-view cllist'>" + (u ? "<div class='tlid-translation-error translation-error-box' style='display: none'><span class=\"tlid-translation-error-message translation-error\"></span><span class=\"tlid-result-view-error-button translation-error-button\">" +
        R(M.TRY_AGAIN) + "</span></div>" : "<div class='tlid-translation-error tlid-translation-error-message translation-error' style='display: none'></div>") + "<div class='cp-promo-wrapper'></div><div class='gt-lc gt-lc-mobile' style='display: none'></div></div>");
    u = l + u + "<div class='feedback-link'><a href='javascript:void(0);' class='tlid-send-feedback-link'>" + R(M.SEND_FEEDBACK) + "</a></div></div>";
    l = P;
    c = '<div class="gp-footer">' + P('<div class="ft-icon-row"><div class="ft-icon-ctr"><a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' +
        S(Zn(Q)) + "')\">" + wK({
            Bf: "ft-icon-img-hst",
            caption: M.HISTORY_SECTION_TITLE
        }) + "</a></div>" + (m ? '<div class="ft-icon-ctr"><a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + S(Zn(Sm)) + "')\">" + wK({
            Bf: "ft-icon-img-svd",
            caption: M.SAVED_SECTION_TITLE
        }) + "</a></div>" : "") + (g ? '<div class="ft-icon-ctr">' + (q ? '<a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + S(Zn(c)) + "')\">" : '<a class="ft-link" href="/community?source=mfooter">') + wK({
                Bf: "ft-icon-img-cmn",
                caption: M.FOOTER_COMMUNITY
            }) +
            "</a></div>" : "") + (A ? '<div class="ft-icon-ctr"><a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + S(Zn(mM)) + "')\">" + wK({
            Bf: "ft-icon-img-web",
            caption: M.FOOTER_WEBSITES
        }) + "</a></div>" : "") + "</div>");
    var bt;
    wg ? bt = P('<div class="ad-panel gsa-promo"><div><span class="gsa-icon-animated"></span></div><div class="ad-panel-title">' + R(M.SEARCH_HANDS_FREE) + '</div><div class="ad-panel-subtitle">' + R(M.GSA_PURE_AD_TEXT) + '</div><div class="ad-panel-buttons"><span class="tlid-dismiss-promo dismiss-promo">' +
        R(Oa) + '</span><span class="tlid-accept-promo accept-promo">' + R(Hb) + "</span></div></div>") : bt = "";
    wg = c + bt;
    var ct;
    Ia ? ct = P('<div class="ad-panel at-promo"><div><span class="translate-icon"></span></div><div class="ad-panel-title">' + R(b) + '</div><div class="ad-panel-buttons"><span class="tlid-dismiss-promo dismiss-promo">' + R(Oa) + '</span><span class="tlid-accept-promo accept-promo">' + R(Hb) + "</span></div></div>") : ct = "";
    b = l(wg + ct + "</div>");
    b = Hk(u + b + "</div>");
    b = a + b + P("<div class='page tlid-history-page history-page' tabindex='0' aria-label='" +
        S(M.HISTORY_SECTION_TITLE) + "'><div class='outer-wrap'><div class=\"tlid-translation-history-container\"></div></div></div>");
    q = P(q ? "<div class='page tlid-instant-page instant-page' tabindex='0' aria-label='" + S(M.COMMUNITY_INSTANT_TITLE) + "'><div class='outer-wrap'><div class=\"tlid-community-instant-container\"></div></div></div>" : "");
    Ce = b + q + (Ce ? "<div class='page tlid-phrasebook-page phrasebook-page' tabindex='0' aria-label='" + S(M.SAVED_SECTION_TITLE) + "'><div class='tlid-phrasebook-outer-wrap outer-wrap'></div></div>" :
        "");
    M = P("<div class='page tlid-language-picker-page language-picker-page'><div class='language-picker-wrapper'>" + P('<div class="tlid-language-list-toolbar language-list-toolbar"><div class="tlid-language-list-back-button language-list-back-button" aria-label="' + S(M.CLOSE) + '"><div class="backbutton-image language-picker-toolbar-image"></div><div class="clear-image-black language-picker-toolbar-image"></div></div><div class="tlid-language-list-search-button language-list-search-button"><div class="tlid-language-list-label language-list-label"></div><div class="searchbutton-image language-picker-toolbar-image"></div></div></div>') +
        "<div class='outer-wrap'></div></div></div>");
    M = Ce + M;
    Ce = P("<div class='toast-container'><div class='toast " + S({
        identifier: "tlid-toast"
    }.identifier) + "' style='display: none'><div class='tlid-toast-message message'></div><div class='tlid-toast-action toast-action'><a target='_blank' class='tlid-toast-action-link action-link'><span class='tlid-toast-action-text'></span></a></div></div></div>");
    return nM(M + Ce + "</div>")
};
xK.a = "trans.mobile.widget.main";
var sK = function(a) {
        var b = a.ji,
            c = a.label;
        return P("<div class='tlid-input-button input-button header-button " + S(a.identifier) + " " + S(b) + "' role='tab' tabindex=\"-1\"><div class='text'>" + R(c) + "</div></div>")
    },
    yK = function(a) {
        var b = a.Sa,
            c = a.Ha;
        return P("<div class='select-file-page tlid-file-selector loading'><form method='post' action='" + S(Pn(a.Ck)) + "'><input type='hidden' name='hl' value='" + S(b) + "' class='tlid-hl-input'><input type='hidden' name='ie' value='UTF-8' class='tlid-ie-input'><input type='hidden' name='js' value='y' class='tlid-js-input'><input type='hidden' name='prev' value='_t' class='tlid-prev-input'><input type='hidden' name='sl' class='tlid-sl-input'><input type='hidden' name='tl' class='tlid-tl-input'><div class='tlid-select-file-section select-file-section'><div class='choose-document-prompt'>" +
            R(c.CHOOSE_A_DOCUMENT) + "</div><div class='upload-filetypes-prompt'>" + R(c.UPLOAD_FILETYPES) + "</div><input type='file' name='file' id='tlid-file-input' class='file-input tlid-file-input'><label for='tlid-file-input' class='tlid-select-file-button button'>" + R(c.BROWSE_YOUR_COMPUTER) + "</label></div><div class='tlid-file-selected-section file-selected-section'><div class='file-holder'><div class='file-holder-icon'></div><div class='file-info'><div class='tlid-selected-file-label file-label'></div><div class='tlid-selected-file-size file-size'>&nbsp;</div></div><div class='selected-and-cancel'><div class='tlid-cancel-selected-file-button cancel-file'></div></div></div><div class='button-container'><input type='submit' class='tlid-translate-doc-button button' value='" +
            S(c.TRANSLATE) + "'></div></div><div class='loading-or-translating-file-section'><div class='mspin-googblue-medium'><div><div></div></div></div><div class='translating-file-caption'>" + R(c.TRANS_IN_PROGRESS) + "</div></div></form></div>")
    };
yK.a = "trans.mobile.widget.selectFilePage";
var wK = function(a) {
        var b = a.Bf;
        a = a.caption;
        return P('<div class="footer-icon-container ' + S(b) + '"><div class="ft-icon-img-ctr"><div class="ft-icon-oval" id="' + S(b) + '"></div></div><div class="ft-icon-txt">' + R(a) + "</div></div>")
    },
    uK = function(a) {
        var b = a.Ha,
            c = a.Ti;
        return P("<div class='" + S(a.containerId) + " " + S(c) + " transliteration-container'><div class='tlid-transliteration-content transliteration-content'></div><div class='tlid-show-more-link truncate-link' style='display:none'>" + R(b.SHOW_MORE) + "</div><div class='tlid-show-less-link truncate-link' style='display:none'>" +
            R(b.SHOW_LESS) + "</div></div>")
    },
    vK = function(a) {
        var b = a.Ha,
            c = "<div class='";
        a = a.Ve;
        for (var d = a.length, e = 0; e < d; e++) c += S(a[e]) + " ";
        c += "ttsbutton jfk-button-flat source-or-target-footer-button' aria-label='" + S(b.LISTEN) + "' data-tooltip='" + S(b.LISTEN) + "'><div class='jfk-button-img'></div></div>";
        return P(c)
    },
    tK = function(a) {
        var b = a.className,
            c = a.identifier,
            d = a.ni;
        a = a.selected;
        b = '<div class="' + S(b) + '-selector lang_list"><div class="lang-btn"><a class="ls-select new-ls-select ' + S(b) + "-button tlid-open-small-" +
            S(c) + '-language-list"';
        c = "";
        for (var e = d.length, f = 0; f < e; f++) {
            var g = d[f];
            c += Cn(g.Code, a) ? "" + g.Name : ""
        }
        b += ' aria-label="' + S(c) + '" tabindex="0">' + R(c) + "</a></div></div>";
        return P(b)
    },
    zK = function(a) {
        var b = a.Ha;
        a = a.ln;
        return P('<div class="tlid-gender-promo gender-promo"><div class="gender-promo-graphic"></div><div class="gender-promo-content"><div class="gender-promo-pre-title">' + R(b.NEW_FEATURE) + '</div><div class="gender-promo-title">' + R(b.GENDER_SPECIFIC_TRANSLATIONS_PROMO_TITLE) + '</div><span class="gender-promo-message gender-promo-message-short-phrase">' +
            R(b.GENDER_SPECIFIC_TRANSLATIONS_PROMO_TEXT) + '</span><span class="gender-promo-message gender-promo-message-single-word">' + R(b.GENDER_SPECIFIC_TRANSLATIONS_PROMO_TEXT_SINGLE_WORD) + "</span>" + (a ? '<a class="gender-promo-learn-more" target="_blank" href="https://www.blog.google/products/translate/reducing-gender-bias-google-translate/">' + R(b.LEARN_MORE) + "</a>" : "") + "</div><div class='tlid-gender-promo-dismiss-button gender-promo-dismiss-button'></div></div>")
    };
zK.a = "trans.mobile.widget.genderPromo";
var AK = function(a) {
    var b = a.gg,
        c = a.fg,
        d = a.mm,
        e = a.om,
        f = a.Ha,
        g = P,
        h;
    a.Hc ? h = P('<div class="starbutton jfk-button-flat" aria-label="' + S(e) + '" data-tooltip="' + S(e) + '"><div class="jfk-button-img"></div></div>') : h = "";
    return g('<div class=\'tlid-result result-dict-wrapper\'><div class="result tlid-copy-target"><div class="result-header">' + h + '</div><div class="text-wrap tlid-copy-target"><div class="result-shield-container tlid-copy-target" tabindex="0"><span class="tlid-translation translation"></span><span class="tlid-translation-gender-indicator translation-gender-indicator"></span><span class="tlid-trans-verified-button trans-verified-button" style="display:none" role="button"></span></div></div>' +
        uK({
            containerId: "tlid-result-transliteration-container",
            Ha: f,
            Ti: "result-transliteration-container"
        }) + '<div class="result-footer source-or-target-footer tlid-copy-target"><div class="tlid-share-translation-button share-translation-button jfk-button-flat source-or-target-footer-button right-positioned" aria-label=\'' + S(f.SHARE_TRANSLATION) + "' data-tooltip=\"" + S(f.SHARE_TRANSLATION) + '"><div class="jfk-button-img"></div></div><div class="tlid-suggest-edit-button suggest-edit-button jfk-button-flat source-or-target-footer-button right-positioned" aria-label=\'' +
        S(f.SUGGEST_AN_EDIT) + "' data-tooltip=\"" + S(f.SUGGEST_AN_EDIT) + '"><div class="jfk-button-img"></div></div><div class="more-wrapper"><div class="morebutton jfk-button-flat source-or-target-footer-button tlid-result-footer-more-button right-positioned" data-tooltip="' + S(f.MORE) + '"><div class="jfk-button-img"></div></div><div class="moremenu"></div></div>' + (c ? '<div class="tlid-copy-translation-button copybutton jfk-button-flat source-or-target-footer-button right-positioned" aria-label=\'' + S(d) + "' data-tooltip=\"" +
            S(d) + '"><div class="jfk-button-img"></div></div>' : "") + vK({
            Ve: ["res-tts", "ttsbutton-res", "left-positioned"],
            Ha: f
        }) + (b ? '<div class="result-search"><div class="result-search-icon"></div></div>' : "") + '</div></div><div class="gt-edit" style="display:none"><div class="gt-clear" tabindex="0"><div class="jfk-button-img"></div></div><textarea class="contribute-target"></textarea></div></div>')
};
AK.a = "trans.mobile.widget.result";
var BK = function(a) {
    var b = a.Ym;
    return P("<span class='tlid-translation-page-link translation-page-link'><a href='" + S(Pn(a.Xm)) + "' target='_blank'>" + R(b) + "<span class='open-translated-page-icon'></span></a></span>")
};
BK.a = "trans.mobile.widget.resultHyperlink";
var tB = function(a) {
    var b = a.ke,
        c = a.em;
    a = a.fm;
    return P('<div class="language-list-search-box"><div class="back-image-black language-picker-toolbar-image"></div><div class="clear-image-black language-picker-toolbar-image"></div><div class="language_list_search_box_container"><input id="' + S(c) + '-search-box" type="text" oninput="_e(event, \'' + S(Zn(b)) + "', '" + S(Zn(c)) + '\')" placeholder="' + S(a) + '"></div></div>')
};
tB.a = "trans.mobile.widget.languageListSearchBox";
var kB = function(a) {
    var b = a.id,
        c = a.ke,
        d = a.name;
    a = a.code;
    b = '<div class="language_list_item_wrapper language_list_item_wrapper-' + S(a) + " " + (Cn(a, "auto") ? " detect_language " : "") + '" onclick="_e(event, \'' + S(Zn(c)) + "', '" + S(Zn(b)) + '\')" role="button" tabindex="0"><div class="language_list_item_icon ' + S(b) + '_checkmark"></div>';
    c = Cn(a, "auto") ? "language_list_item" : "language_list_item language_list_item_language_name";
    b += "<div class='" + S(c) + "'>" + R(d) + "</div>" + (Cn(a, "auto") ? '<div class="detect_language_row_icon"></div>' :
        "") + "</div>";
    return P(b)
};
kB.a = "trans.mobile.widget.languageListItem";
var HB = function(a) {
    return P('<div class="language_list_section"><div class="language_list_section_header">' + R(a.text) + "</div></div>")
};
HB.a = "trans.mobile.widget.languageListSection";
var CK = function(a) {
    var b = a.Vn,
        c = a.Ha,
        d = a.vk,
        e = a.yk,
        f = a.ao;
    a = a.Ol;
    return P('<div class="share-module"><div class="tlid-share-panel share-panel" aria-hidden="true" tabindex="0"><div class="share-panel-wrap"><h3>' + R(c.SHARE_MODULE_TITLE) + "</h3>" + (Dn(e) && Dn(f) ? '<div id="not_installed"><span class="warning-icon"></span><span class="warning-msg">' + R(f) + "</span></div>" : "") + "<ul>" + (d ? '<li><a href="sms:' + (a ? "&body=" + S(b) : "?body=" + Ln(b)) + '" class="sms"><span class="share-link-icon"></span><span> ' + R(c.SHARE_MODULE_SMS) +
        " </span></a></li>" : "") + '<li><a href="mailto:?body=' + Ln(b) + '" target="_top" class="email"><span class="share-link-icon"></span><span> ' + R(c.SHARE_MODULE_EMAIL) + " </span></a></li>" + (Dn(e) && Dn(f) ? '<li><a href="whatsapp://send?text=' + Ln(b) + '" class="whatsapp"><span class="share-link-icon"></span><span> WhatsApp </span></a></li>' : "") + '<li><a href="https://twitter.com/intent/tweet?text=' + Ln(b) + '" target="_blank" class="twitter"><span class="share-link-icon"></span><span> Twitter </span></a></li></ul></div></div></div>')
};
CK.a = "trans.mobile.widget.shareModule";
var DK = function(a) {
    var b = a.Dn,
        c = a.Jn,
        d = a.En,
        e = a.je,
        f = a.cn;
    return P('<div class="gsa-interstitial"><div class="clear-wrap"><div class="clear jfk-button-flat" aria-label="' + S(a.Ha.CLEAR_TEXT) + '"><div class="jfk-button-img"></div></div></div><div><span class="gsa-icon"></span></div><div class="gsa-int-text">' + R(b) + (c ? "<b>" + R(c) + "</b>" : "") + R(d) + '</div><div class="gsa-int-button">' + R(e) + '</div><div class="gsa-int-second-choice">' + R(f) + "</div></div>")
};
DK.a = "trans.mobile.widget.iGSAInterstitial";
var EK = function(a) {
    var b = a.message;
    return P("<span class='survey-option survey-option-" + S(a.Km) + "'><span class='survey-option-text'>" + R(b) + "</span></span>")
};
EK.a = "trans.mobile.widget.surveyOption";
var FK = function(a) {
    return P("<span class='ink-container " + S(a.Wj) + "'></span>")
};
FK.a = "trans.mobile.widget.inkContainer";
var GK = function() {
    var a = DATA.Messages.CLOSE_SEARCH,
        b = DATA.Messages.CLEAR_TEXT,
        c = DATA.Messages.RECENT_LANGUAGES,
        d = DATA.Messages.ALL_LANGUAGES,
        e = DATA.Messages.CHECKED_LANGUAGE;
    this.o = DATA.Messages.SEARCH_LANGUAGES;
    this.b = a;
    this.a = b;
    this.h = c;
    this.c = d;
    this.g = e
};
var NK = function(a, b, c, d, e, f) {
    var g = this;
    K.call(this);
    this.c = e;
    this.V = f;
    this.v = a;
    this.cb = b;
    this.T = E("tlid-open-small-source-language-list", this.v);
    this.Za = E("tlid-open-small-target-language-list", this.v);
    a = new GK;
    this.b = new pF("sl_list", a);
    this.g = new pF("tl_list", a);
    this.b.C = this.T;
    this.b.K(Ob(DATA.SourceLanguageCodeNameList));
    this.g.C = this.Za;
    this.g.K(Ob(DATA.TargetLanguageCodeNameList));
    this.a = new Zv("", !0);
    this.a.ia(D("orig", this.v));
    vr(this.a, "orig-ios", Je);
    ht() || (this.a.j().placeholder = DATA.Messages.ENTER_TEXT);
    this.Ic = new xs("");
    a = E("swap", this.v);
    this.Ic.ia(a);
    ht() && this.Ic.qd(De ? DATA.Messages.TOOLTIP_SWAP_LANGUAGES_SHORTCUT_MAC : DATA.Messages.TOOLTIP_SWAP_LANGUAGES_SHORTCUT_NOTMAC);
    EA(this.V, {
        Ic: this.Ic
    });
    ps(a, 1);
    HK(this);
    this.Ca = fb(D("source-header", this.v));
    IK(this, c);
    this.C = null;
    c = D("go-button", this.v);
    null != c && (this.C = new xs(""), this.C.ia(c), rH(c), H(this.C.j(), "mousedown", function() {
        g.dispatchEvent("translateButtonClicked")
    }, !1));
    this.K = new xs("");
    c = E("clear", this.v);
    this.K.ia(c);
    this.K.setVisible(!1);
    rH(c);
    this.L = new xs("", void 0, 4);
    this.L.Oa(16, !0);
    this.L.Oa(1, !0);
    c = E("src-tts", this.v);
    this.L.ia(c);
    rH(c);
    this.o = new cv(this.L, "&client=webapp&prev=input", 1, !0, !0, DATA.Messages.LISTEN, DATA.Messages.VOICE_OUTPUT_UNAVAILABLE);
    this.F = L.M();
    this.Kb = new TG;
    this.X = new VG;
    this.X.ia(D("gt-is-mobile", this.v));
    this.X.setVisible(!1);
    this.G = null;
    ht() && (this.G = new ez(D("source-input-tools", this.v), D("orig", this.v), D("source-input-tools", this.v), DATA.DisplayLanguage, DATA.InChina), H(this.G, "change", function() {
        JK(g)
    }, !1));
    this.R = new kD(this.Kb, this.X, {
        Ql: this.a,
        hn: null,
        Rl: this.G,
        ma: this.c,
        wn: new SG,
        Wn: new op("webapp"),
        client: "webapp",
        Sa: DATA.DisplayLanguage,
        on: !DATA.DisableOtf,
        hm: 4,
        Un: !0,
        Sj: !1,
        Dk: "",
        Ul: !1,
        Sl: !1,
        Mq: DATA.Messages.QUICK_TRANSLATION,
        rn: DATA.Messages.DID_YOU_MEAN,
        Cq: DATA.Messages.LANGUAGE_CORRECTION,
        Yj: new Cw
    });
    this.na = new jK(fb(D("tlid-source-transliteration-container", this.v)), 1);
    this.wb = Em.M();
    this.w = !1;
    this.aa = "";
    this.h = new EG(this.a, this.V, DATA.TopLevelDomain.substr(DATA.TopLevelDomain.lastIndexOf(".") +
        1), DATA.DisplayLanguage, !0, DATA.Messages.VOICE_INPUT_UNAVAILABLE, DATA.Messages.VOICE_INPUT_UNAVAILABLE_GENERIC, !0, DATA.Messages.CHOOSE_LANGUAGE_TO_ENABLE_VOICE_INPUT);
    this.m = fb(D("speech-wrap", this.v));
    KK(this);
    DATA.UrlTranslation && (this.Y = new qK(this.c), c = D("url-input-wrap", this.v), this.Y.ia(c), rK(this.Y));
    LK(this);
    MK(this)
};
w(NK, K);
var HK = function(a) {
        var b = new zA(fb(D("sl-sugg", a.v)), v(nI, a), 3, !0, !0, !0),
            c = new zA(fb(D("tl-sugg", a.v)), v(oI, a), 3, !1, !1, !0);
        EA(a.V, {
            Pi: b,
            Zi: c
        });
        ow(a.c);
        p(DATA.RecentLanguages) && p(DATA.RecentLanguages.recent_sl) && mw(a.c);
        p(DATA.RecentLanguages) && p(DATA.RecentLanguages.recent_tl) && nw(a.c);
        gw(a.c);
        hw(a.c);
        a = b.a;
        c = c.a;
        for (b = 0; b < a.length; b++) H(a[b].j(), "click", function(d) {
            OK(d)
        }, !1);
        for (a = 0; a < c.length; a++) H(c[a].j(), "click", function(d) {
            OK(d)
        }, !1)
    },
    OK = function(a) {
        var b = a.target;
        b.blur();
        var c = D("ink-container",
            b);
        c || (c = Tp(FK, {
            Wj: "language-selector-ripple"
        }), b.insertBefore(c, b.firstChild));
        U(c, "ink-ripple-animation");
        if (!c.offsetHeight && !c.offsetWidth) {
            var d = Math.max(b.offsetHeight, b.offsetWidth);
            c.style.height = d + "px";
            c.style.width = d + "px"
        }
        b = b.getBoundingClientRect();
        d = a.clientX - (b.left + document.body.scrollLeft) - c.offsetWidth / 2;
        c.style.top = a.clientY - (b.top + document.body.scrollTop) - c.offsetHeight / 2 + "px";
        c.style.left = d + "px";
        T(c, "ink-ripple-animation")
    },
    KK = function(a) {
        if (oo && "webkitSpeechRecognition" in window) {
            var b =
                a.h;
            if (null != b.a) {
                var c = Jf("gt-src-tools-l");
                b.h = a.m || fb(c);
                c = b.h;
                b.b = new Ft(MSG_SPEECH_INPUT_TURN_ON, MSG_SPEECH_INPUT_TURN_OFF, new Kt("speech-button", !1));
                b.b.ia(F("DIV", {
                    id: "gt-speech",
                    tabindex: "0"
                }));
                gg(c, b.b.j(), 1);
                b.g = new CG(b.b.j());
                b.g.Ua(b.b.j());
                b.a.onresult = v(b.N, b);
                b.a.onstart = v(b.Bl, b);
                b.a.onspeechstart = v(b.On, b);
                b.a.onend = v(b.Yk, b);
                b.a.onspeechend = v(b.zl, b);
                b.a.onerror = v(b.ba, b);
                b.a.onnomatch = v(b.R, b);
                H(b.b, "action", b.Mn, !1, b);
                H(b.h, "click", b.Nn, !1, b)
            }
            b = F("span", ["speech-border", "speech-background"]);
            gg(a.m, b, 1);
            PK(a)
        } else W(a.m, !1)
    },
    LK = function(a) {
        H(a.a, "change", function(b) {
            MK(a, b.changeType)
        }, !1, a);
        H(a.a.j(), "focus", a.N, !1, a);
        H(a.a.j(), "blur", a.N, !1, a);
        H(a.a.j(), "focus", v(a.Na, a, !1), !1, a);
        H(a.a.j(), "blur", v(a.Na, a, !0), !1, a);
        H(a.a.j(), "focus", a.F.c, !1, a.F);
        H(window, "resize", a.ba, !1, a);
        H(a.c, "srcEmphasizeUpdated", a.ya, !1, a);
        H(a.c, "tgtEmphasizeUpdated", a.ob, !1, a);
        H(a.c, "srcLanguageUpdated", a.Pa, !1, a);
        H(a.c, "detectSrcUpdated", a.sa, !1, a);
        H(a.K, "action", a.xb, !1, a);
        a.h && (H(a.h, "start", a.yl, !1, a), H(a.h,
            "speechStart", a.Sn, !1, a), H(a.h, "end", a.xl, !1, a), H(a.h, "userInteractionWhileDisabled", a.Hl, !1, a), H(a.o, "userInteractionWhileDisabled", a.Tn, !1, a));
        H(E("tlid-input-full-height-wrapper", a.v), "click", function(b) {
            var c = a.na;
            [c.c, c.a, c.h, c.g].includes(b.target) || Eg(document) === a.a.j() || JK(a)
        }, !1)
    },
    QK = {
        "small-font": 2
    };
NK.prototype.j = function() {
    return this.v
};
var RK = function(a) {
    var b = a.c.a;
    a.o.update(a.a.Z(), b, void 0, nI(b))
};
NK.prototype.N = function(a) {
    a = a ? "focus" == a.type : Eg(document) === this.a.j();
    var b = !!this.a.Z();
    this.K.setVisible(a || b);
    null != this.C && this.C.setVisible(a)
};
var JK = function(a) {
        a.a.j().focus()
    },
    SK = function(a) {
        var b = iq(a.Ca).a,
            c = Xp(sq(a.a.j())).bottom,
            d = fq(document).a;
        d > b - 10 && c > d || Bi(v(window.scrollTo, window, 0, b - 8), 100, a)
    },
    PK = function(a) {
        if (a.h) {
            var b = a.c.a;
            a = a.h;
            var c = nI(b);
            if (null != a.a) {
                a.Hb && a.a.stop();
                var d = a.V.get(b);
                a.a.lang = null != d ? d : "";
                null != d ? (a.G = d, a.b.qa(!0), W(a.h, !0)) : (x(null != a.m || null != a.L, "Cannot disable button without providing a tooltip explanation"), "auto" === b && null != a.C ? (b = a.b, b.b = a.C, b.qa(!1)) : null != a.m ? (b = a.b, c = a.aa.a(a.m, c), b.b = c,
                    b.qa(!1)) : (b = a.b, b.b = a.L, b.qa(!1)), a.na || W(a.h, !1))
            }
        }
    };
k = NK.prototype;
k.yl = function() {
    this.w = !0;
    TK(this)
};
k.Sn = function() {
    T(this.m, "speech-data")
};
k.xl = function() {
    this.w = !1;
    U(this.m, "speech-data");
    TK(this);
    MK(this)
};
k.Hl = function() {
    this.dispatchEvent("userInteractionWithDisabledVoiceInput")
};
k.Tn = function() {
    this.dispatchEvent("userInteractionWithDisabledVoiceOutput")
};
var TK = function(a) {
    var b = "";
    a.w ? a.aa = aw(a.a) : b = aw(a.a) || a.aa;
    a.a.b(b);
    a.a.j().disabled = a.w;
    b = a.a;
    b.yd = a.w ? MSG_SPEAK_NOW : DATA.Messages.ENTER_TEXT;
    b.j() && Vv(b);
    a.a.j().blur()
};
NK.prototype.Na = function(a) {
    for (var b = Mf("show-panel"), c = 0; c < b.length; c++) Bi(Ta(W, b[c], a), 100, this)
};
NK.prototype.xb = function() {
    var a = this.F;
    N(a, O(a, 23));
    "" === this.a.Z() ? this.a.j().blur() : (this.a.b(""), JK(this));
    this.h && (this.h.c = "");
    this.o && this.o.stop();
    Mm(this.wb, "clearbtn", 1, "accumulate");
    this.dispatchEvent("inputCleared")
};
var MK = function(a, b) {
        a.ba();
        a.N();
        RK(a);
        "paste" === b && a.dispatchEvent("inputPasted")
    },
    UK = function(a) {
        var b = a.c.a;
        "auto" == b && (b = a.c.c);
        b && (b = kc(b) ? "rtl" : "ltr", Zp(a.a.j(), "direction", b), a = D("gt-hl-layer", a.v), null != a && Zp(a, "direction", b))
    };
NK.prototype.Pa = function() {
    var a = this.c.a;
    "auto" != a && IK(this, a);
    UK(this);
    PK(this);
    this.o.update(this.a.Z(), a, void 0, nI(a));
    null != this.G && hz(this.G, a)
};
NK.prototype.ya = function(a) {
    this.b.L = a.data
};
NK.prototype.ob = function(a) {
    this.g.L = a.data
};
NK.prototype.sa = function() {
    UK(this)
};
var IK = function(a, b) {
    var c = nI(b);
    a.b.V(c, b)
};
NK.prototype.update = function(a, b, c) {
    var d = this.na;
    if (p(b)) {
        var e = [];
        if (b.ab(0))
            for (var f = 0; f < b.cc(); f++) {
                var g = b.ab(f);
                1 === d.b ? J(g, 3) && e.push(J(g, 3)) : 2 === d.b && J(g, 2) && e.push(J(g, 2))
            }
        e = e.join("")
    } else e = "";
    kK(d, e);
    V(this.v, "has-transliteration", 0 !== this.na.a.textContent.length);
    d = J(lp(b), 1);
    e = J(b, 2);
    this.o.update(c ? d : a, e, void 0, nI(e));
    "auto" == this.c.a && ((a = J(b, 2)) && "auto" != a ? (a = nI(a), a = source_language_detected.replace(/%\d\$s/g, a), G(this.T, a)) : G(this.T, nI("auto")))
};
NK.prototype.ba = function() {
    var a = this.a;
    a.Pg = 0;
    Uv(a);
    a = D("text-dummy", this.v);
    var b = D("text-dummy", this.v);
    this.a.Z().endsWith("\n") ? G(b, this.a.Z() + "\n") : G(b, this.a.Z());
    Bg(a) ? (b = Eq(a), a = (a.scrollHeight - b.top - b.bottom) / 32) : a = 1;
    V(this.cb, "small-font", a > QK["small-font"]);
    Uv(this.a)
};
var VK = function(a) {
    K.call(this);
    this.v = a;
    this.a = null
};
ka(VK, K);
VK.prototype.c = function() {
    this.dispatchEvent("close_requested")
};
VK.prototype.b = function() {
    this.dispatchEvent("sign_in_requested")
};
var WK = function(a, b, c, d, e, f) {
    var g = jv();
    dF.call(this, a, c, d, e, g);
    this.R = f;
    this.w = b
};
ka(WK, dF);
WK.prototype.m = function() {
    this.h.style.left = Math.round(this.coords[0]) + "px";
    this.h.style.bottom = Math.round(this.coords[1]) + "px"
};
WK.prototype.g = function() {
    (new gF(this.w, this.R)).play()
};
var XK = function() {
    X.call(this);
    this.h = null
};
ka(XK, X);
XK.prototype.b = function() {
    return ""
};
XK.prototype.setVisible = function(a, b) {
    var c = this,
        d = this.j();
    if (uq(d) != a) {
        var e = D(this.b(), this.j());
        a ? (Zp(d, {
            opacity: 1
        }), Zp(e, {
            opacity: 0
        }), W(d, !0), (new WK(d, e, YK, ZK, 225, 100)).play(), b && (this.h = window.setTimeout(function() {
            return c.setVisible(!1)
        }, b))) : ((new hF(d, 195)).play(), this.h && (window.clearTimeout(this.h), this.h = null))
    }
};
var YK = [0, -48],
    ZK = [0, 0];
var $K = function() {
    XK.call(this)
};
ka($K, XK);
$K.prototype.b = function() {
    return "ntfcn-ctr"
};
$K.prototype.Rc = function(a) {
    if (!a || "DIV" != a.tagName) return !1;
    a = D("ntfcn-ctr", a);
    return a && "DIV" == a.tagName ? (a = D("snck-msg", a)) && "SPAN" == a.tagName ? !0 : !1 : !1
};
$K.prototype.ea = function() {};
var aL = function() {};
ka(aL, tr);
aL.prototype.Uc = function(a) {
    return a && "SPAN" == a.tagName ? !0 : !1
};
var bL = function(a, b, c, d) {
    XK.call(this);
    this.m = a;
    this.c = b;
    this.T = c;
    this.N = d;
    this.X = new vv("######");
    this.V = new PF(DATA.Messages.CHARACTER_LIMIT);
    this.Y = new PF(DATA.Messages.TRANSLATE_NEXT);
    this.g = "";
    this.w = null;
    this.C = new Em;
    this.C.c = "webapp";
    this.F = L.M()
};
ka(bL, XK);
bL.prototype.b = function() {
    return "ovfl-ctr"
};
bL.prototype.Rc = function(a) {
    return a && "DIV" == a.tagName ? (a = D(this.b(), a)) && D("snck-msg", a) && D("ovfl-xlt", a) ? !0 : !1 : !1
};
bL.prototype.ea = function() {
    var a = D("ovfl-xlt", this.j());
    this.w = new Pr(null, new aL);
    this.w.ia(a);
    H(this.w, "action", this.K, !1, this)
};
bL.prototype.K = function() {
    var a = this.c.c;
    "" == a && (a = this.c.a);
    var b = this.g.length,
        c = Math.max(b - this.N, 0);
    om(this.F, b, c);
    Jm(this.C, "webapp", "xm", "1", {
        sl: this.c.a,
        tl: this.c.b,
        dl: a,
        hl: this.T,
        ql: b,
        ol: c
    });
    this.m.a.b(this.g);
    SK(this.m);
    var d = this.m.a,
        e = d.j();
    Bi(function() {
        e.focus();
        var f = d.Z().length;
        if (rw(e)) e.selectionStart = f, e.selectionEnd = f;
        else if (sw()) {
            f = vw(e, f);
            var g = e.createTextRange();
            g.collapse(!0);
            g.move("character", f);
            g.select()
        }
    }, 0)
};
var fL = function(a) {
        var b = DATA.DisplayLanguage;
        this.g = Em.M();
        this.F = L.M();
        this.b = a;
        this.h = cL[1];
        this.a = dL[1];
        this.o = E("tlid-promo-notification-link", this.b);
        this.c = b;
        eL(this)
    },
    gL = function(a, b) {
        b ? (qm(a.F, a.a), a.g.log("bbarshow", {
            hl: a.c,
            type: a.h
        })) : V(a.b, "hidden", !0)
    },
    eL = function(a) {
        H(a.o, "click", function() {
            gL(this, !1);
            rm(this.F, this.a);
            this.g.log("bbarlm", {
                hl: this.c,
                type: this.h
            })
        }, !1, a)
    },
    dL = {
        1: 20
    },
    cL = {
        1: "hiring"
    };
var hL = function(a, b) {
        this.a = a;
        this.F = b;
        a: {
            b = DATA.Messages.LEARN_MORE_ABOUT_THIS;
            var c = "",
                d = "";
            28 > a.length && (c = DATA.Messages.LEARN_MORE_ABOUT.indexOf("%1$s"), -1 != c && (b = DATA.Messages.LEARN_MORE_ABOUT.slice(0, c), d = DATA.Messages.LEARN_MORE_ABOUT.slice(c + 4, DATA.Messages.LEARN_MORE_ABOUT.length)), c = a);
            a = Tp(DK, {
                Dn: b,
                Jn: c,
                En: d,
                je: DATA.Messages.TRY_IT.toUpperCase(),
                cn: DATA.Messages.SEARCH_IN_BROWSER,
                Ha: DATA.Messages
            });
            break a;
            throw Error("Missing render function for GSA interstitial type gsaIntGsaWeb");
        }
        this.v =
            a;
        a: {
            break a;
            throw Error("Missing Promotion for GSA interstitial type gsaIntGsaWeb");
        }
    },
    jL = function(a, b) {
        hg(a.v);
        a.v = null;
        iL(b)
    };
hL.prototype.h = function() {
    jL(this, "dismissbg")
};
hL.prototype.g = function() {
    rm(this.F, 21);
    iI();
    jL(this, "accept");
    Im(dI, "/translate/uc?ua=dismiss&uav=searchgsa");
    gI(this.a, 2)
};
hL.prototype.c = function() {
    rm(this.F, 22);
    iI();
    jL(this, "webapp");
    Im(dI, "/translate/uc?ua=dismiss&uav=gsaint");
    hI(this.a)
};
hL.prototype.b = function() {
    var a = this.F;
    N(a, pm(a, 74, 21));
    iI();
    jL(this, "dismiss")
};
var iL = function(a) {
    Jm(dI, "webapp", "gsaIntGsaWeb", a, void 0);
    Bh("gsa", "gsaIntGsaWeb:" + a, "", 1)
};
var lL = function(a) {
        this.a = a;
        this.b = (new Date).getTime();
        kL(this, 1)
    },
    kL = function(a, b) {
        Bi(function() {
            (new Date).getTime() - this.b > 500 * b + 200 ? this.a(!0) : 8 > b ? kL(this, b + 1) : this.a(!1)
        }, 500, a)
    };
var mL = function(a, b, c, d, e, f, g, h, l) {
    K.call(this);
    this.ra = a;
    this.v = b;
    this.o = c;
    this.a = new AF(d, e, f, g);
    this.ob = h;
    this.b = null;
    a = D("starbutton", this.j());
    null != a && (this.b = new It, this.b.ia(a), rH(a), H(this.b, "action", this.ba, !1, this), a = this.b, a.b = l || !1, Ht(a));
    this.c = L.M()
};
ka(mL, K);
mL.prototype.j = function() {
    return this.v
};
mL.prototype.ue = function() {
    return this.a.oa()
};
var nL = function(a) {
    if (a.v.parentElement && a.v.parentElement.childNodes)
        for (var b = a.v.parentElement.childNodes, c = 0; c < b.length; c++)
            if (b[c] == a.v) return c;
    return -1
};
mL.prototype.$a = function() {
    return this.a.$a()
};
mL.prototype.ba = function() {
    if (!DATA.InChina) {
        var a = null != this.b && this.b.b ? "unst" : "st",
            b = new Ym,
            c = {};
        b.g((c.op = "star", c.sl = this.a.Qa(), c.tl = this.ue(), c.text = this.a.a, c.page = this.o, c));
        lI(a, dI, this.Za.bind(this), Fa, b.toString())
    }
};
mL.prototype.Za = function() {
    if (null != this.b) {
        var a = !(null != this.b && this.b.b);
        if (jG(this.ob, this.a, a ? 0 : 1)) {
            var b = this.b;
            b.b = a;
            Ht(b);
            fI(a ? "star" : "unstar", this.ra, BF(this.a), this.a.oa(), this.a.a);
            if ("home" == this.o) {
                b = this.c;
                a = O(b, a ? 67 : 180);
                var c = b.a.a;
                if (null != c) {
                    var d = new Ok;
                    C(d, 1, c || []);
                    mf(a, 83, d)
                }
                N(b, a)
            } else "history" == this.o ? (b = this.c, N(b, Bm(b, 64, nL(this), a))) : "saved" == this.o && (dI.log("sli=us", {}), b = this.c, N(b, Dm(b, 46)))
        }
    }
};
var sL = function(a, b, c, d, e, f) {
    mL.call(this, "main", oL(f), "home", "", {}, "", "", b);
    var g = this;
    a.appendChild(this.j());
    this.V = pL();
    this.L = new xs("", void 0, 4);
    this.L.Oa(16, !0);
    a = E("res-tts", this.j());
    this.L.ia(a);
    rH(a);
    this.K = new cv(this.L, "&client=webapp", 2, !0, !0, DATA.Messages.LISTEN, DATA.Messages.VOICE_OUTPUT_UNAVAILABLE);
    H(this.K, "userInteractionWhileDisabled", this.Pa, !1, this);
    this.na = c;
    this.sa = d;
    this.R = null;
    DATA.InChina || (this.R = E("tlid-trans-verified-button", this.j()), Ah(this.R, function() {
        g.dispatchEvent("verifiedTranslationButtonClicked")
    }));
    this.G = this.w = null;
    qL(this);
    this.ya = e;
    this.N = new jK(fb(D("tlid-result-transliteration-container", this.j())), 2);
    this.C = new Pv("");
    this.C.ia(D("contribute-target", this.j()));
    this.h = null;
    this.Na = new op("webapp");
    this.g = this.m = null;
    this.T = this.Y = !1;
    this.cb = E("tlid-translation-gender-indicator", this.j());
    this.aa = new aA(rL(this), "trans", 14, "webapp", void 0, void 0, this.X.bind(this));
    new XG(rL(this), Array.from(Mf("tlid-copy-target", this.j())))
};
ka(sL, mL);
sL.prototype.W = function() {
    this.aa.La();
    hg(this.j());
    mL.prototype.W.call(this)
};
sL.prototype.Ca = function() {
    var a = this.a.Qa(),
        b = this.a.oa(),
        c = this.a.a.length,
        d = DATA.DisplayLanguage,
        e = rL(this);
    Zz(e);
    e = mz(window).toString();
    e = $z(e);
    var f = "";
    try {
        document.execCommand("copy") ? (f = "success", po && this.g ? hm(L.M(), Cl(this.g, 0, 0)) : hm(L.M()), this.dispatchEvent("translationCopied")) : (f = "failure", km(L.M(), 157))
    } catch (g) {
        f = "error", km(L.M(), 158)
    } finally {
        hg(e), Jm(dI, "webapp", "copy", f, {
            sl: a,
            tl: b,
            hl: d,
            ql: c
        })
    }
};
sL.prototype.Pa = function() {
    this.dispatchEvent("userInteractionWithDisabledVoiceOutput")
};
var tL = function(a, b, c) {
        Jm(dI, "webapp", a, b, c);
        Bh("gsa", a + ":" + b, "", 1)
    },
    qL = function(a) {
        uL(a);
        vL(a, "copybutton", a.Ca);
        vL(a, "tlid-share-translation-button", a.ai);
        vL(a, "tlid-suggest-edit-button", a.ci);
        if (a.V) {
            var b = D("result-search", a.j());
            H(b, "click", function() {
                var c = a.c,
                    d = O(c, 224);
                C(d, 52, "");
                N(c, d);
                tL("search" + DATA.CampaignTrackerId, "click", {
                    sl: a.a.Qa(),
                    tl: a.a.oa(),
                    hl: DATA.DisplayLanguage,
                    ql: a.a.a.length
                });
                c = a.$a();
                switch (DATA.ActionAfterSearch) {
                    case 0:
                        c = new hL(c, a.c);
                        document.body.appendChild(c.v);
                        iL("show");
                        qm(c.F, 21);
                        jI(v(c.h, c));
                        d = c.g;
                        var e = c.c;
                        H(D("gsa-int-button", c.v), "click", d, !1, c);
                        H(D("gsa-int-second-choice", c.v), "click", e, !1, c);
                        H(D("clear", c.v), "click", c.b, !1, c);
                        break;
                    case 2:
                        hI(c);
                        break;
                    case 3:
                        gI(c, 3);
                        break;
                    default:
                        throw Error("Invalid value for DATA.ActionAfterSearch");
                }
            }, !1, a)
        }
    },
    uL = function(a) {
        var b = E("moremenu", a.j());
        a.G = new ux;
        a.G.ia(b);
        b = E("morebutton", a.j());
        a.w = new Cx(null, a.G);
        a.w.ia(b);
        Er(a.w, DATA.Messages.MORE);
        Hx(a.w, new Vp(-8, 8, 0, 8));
        H(b, "click", function() {
            var c = this.c;
            N(c, O(c, 265));
            tL("more", "click");
            this.w.Wa(!0)
        }, !1, a);
        rH(b);
        b = new ox(DATA.Messages.SUGGEST_AN_EDIT);
        b.Ma();
        H(b, "action", a.ci, !1, a);
        T(b.j(), "tlid-suggest-edit-menu-item");
        a.G.hb(b, !0);
        b = new ox(DATA.Messages.SHARE_TRANSLATION);
        b.Ma();
        H(b, "action", a.ai, !1, a);
        T(b.j(), "tlid-share-translation-menu-item");
        a.G.hb(b, !0)
    },
    vL = function(a, b, c) {
        b = D(b, a.j());
        if (b) {
            var d = new xs("");
            d.ia(b);
            H(d, "action", c, !1, a);
            rH(b)
        }
    },
    wL = function(a) {
        var b = new Pr("Clear text", new Kt("clear-button"));
        b.ia(D("gt-clear", a.j()));
        b.setVisible(!1);
        var c =
            Yf("DIV");
        W(c, !1);
        fg(c, a.C.j());
        var d = new wE(DATA.Messages.SUBMIT_TRANSLATION_SUGGESTION, DATA.Messages.CANCEL_EDITS, DATA.Messages.EDIT_TRANSLATION_DISCLAIMER, a.sa, !0);
        d.ia(c);
        c = rL(a);
        b = new uE(a.C, D("gt-edit", a.j()), D("result", a.j()), a.j(), a.N.a, b);
        var e = void 0,
            f = void 0,
            g = !1,
            h = !0;
        ht() && (e = DATA.LowConfidenceThreshold, f = DATA.MaxRoundTripResults, g = !0, h = !1, jE = DATA.Messages.IMPROVE_TRANSLATION);
        a.h = new yE(void 0, g, void 0, e, f, d, b, void 0, h);
        a.h.ia(c);
        d = a.h;
        d.N.c = "webapp";
        d.ya = "webapp";
        DATA.EnablePhraseHighlighting &&
            (d = a.h, c = a.ya, d.ba = c, d.b.C = c);
        H(a.h, "action", a.Nk, !1, a)
    },
    xL = function(a) {
        var b = a.m ? a.m.zb() : void 0;
        HE(a.h, b, a.a.Qa(), a.a.oa(), DATA.DisplayLanguage) || (b = Ed(a.$a()), Ud(rL(a), b))
    };
sL.prototype.update = function(a, b, c, d, e, f) {
    var g = this;
    this.a.a = a;
    CF(this.a, b);
    this.a.o = c;
    "auto" === c.toLowerCase() && (this.a.h = b.src);
    this.a.m = d;
    this.m = e || null;
    this.g = po && f ? f : null;
    yL(this, d, this.m);
    f = D("result-shield-container", this.j());
    var h = kc(d);
    V(f, "result-rtl", h);
    rL(this).lang = d;
    this.C && Zp(this.C.j(), "direction", h ? "rtl" : "ltr");
    this.h || wL(this);
    Yu(a) ? (f = new Qm(n.location.href.split("#")[0]), Um(f, "translate"), gn(f, "sl", [c ? c : "auto"]), gn(f, "tl", [d]), gn(f, "u", [a]), rL(this).appendChild(Sp(BK, {
            Xm: f,
            Ym: a
        }))) :
        po && this.g ? (zL(this, qI(Cl(this.g, 0, 0))), G(rL(this), this.$a())) : (G(rL(this), this.$a()), this.m && this.h && xL(this));
    lK(this.N, b);
    (a = D("copybutton", this.j())) && W(a, !0);
    (a = D("starbutton", this.j())) && W(a, !0);
    (a = D("result-search", this.j())) && W(a, !0);
    this.V && (vm(this.c), tL("search" + DATA.CampaignTrackerId, "show"), this.Y && !this.T && Bi(function() {
        return AL(g)
    }, 0));
    this.R && null != e && (W(this.R, bv(e)), bv(e) && dI.log("community-promo", "show-webapp-served-community"))
};
var AL = function(a) {
    a.T = !0;
    Im(Em.M(), "/translate/uc?ua=dismiss&uav=stooltip");
    var b = F("DIV");
    G(b, DATA.Messages.SEARCH_THIS_TRANSLATION);
    Zp(b, "white-space", "nowrap");
    var c = D("result-search-icon", a.j()),
        d = new uG;
    d.c.b = c;
    zG(d);
    yG(d, b);
    vG(d, 0, 0, -20);
    d.c.Df = !0;
    wG(d, !0);
    d.h = !0;
    d.Ua();
    T(d.j(), "trans-bubble");
    d.setVisible(!0);
    Jm(dI, "webapp", "searchtooltip", "show");
    Bh("gsa", "searchtooltip:show", "", 1);
    H(D("jfk-bubble-closebtn", d.j()), "click", function() {
        Jm(dI, "webapp", "searchtooltip", "dismiss");
        Bh("gsa", "searchtooltip:dismiss",
            "", 1)
    }, !1, a);
    window.onresize = function() {
        d.lc || zG(d)
    }
};
sL.prototype.$a = function() {
    return po && this.g ? this.g.sb() : mL.prototype.$a.call(this)
};
var rL = function(a) {
    return E("tlid-translation", a.j())
};
sL.prototype.X = function() {
    return this.g ? Cl(this.g, 0, 0) : void 0
};
var zL = function(a, b) {
        G(a.cb, b)
    },
    BL = function(a, b, c) {
        if (!(xd() && re() && se(9))) var d = setTimeout(function() {
                c(!0);
                new lL(function(f) {
                    f && c(!1)
                })
            }, 200),
            e = H(document, b, function() {
                clearTimeout(d);
                oh(e)
            }, !1, a)
    };
k = sL.prototype;
k.ai = function() {
    var a = this;
    D("share-module", this.j()) && hg(D("share-module", this.j()));
    var b = Be && (!Ge || Ge && 0 <= Lc(Vr, 8)),
        c = CL(),
        d;
    DATA.Messages.SHARE_MODULE_TITLE && c && (d = DATA.Messages.SHARE_APP_NOT_INSTALLED.replace("%1$s", "WhatsApp"));
    b = Tp(CK, {
        Vn: this.$a(),
        Ha: DATA.Messages,
        ao: d,
        vk: b,
        yk: Be,
        Ol: Ge || He
    });
    gg(D("result-footer", this.j()), b, 0);
    Bt(this.na, this.a.Qa(), this.a.oa(), this.a.a, !1, "share");
    b = D("tlid-share-panel", this.j());
    T(b, "show-share-panel");
    jI(v(this.ei, this));
    Pf(b, {
        "aria-hidden": !1
    });
    b.focus();
    H(b, "keydown", function(e) {
        27 === e.keyCode && (iI(), a.ei())
    }, !1);
    Jm(dI, "webapp", "share", "share", {
        sl: this.a.Qa(),
        tl: this.a.oa(),
        hl: DATA.DisplayLanguage,
        ql: this.a.a.length
    });
    wm("share");
    b = D("share-panel-wrap", this.j());
    b = Lf(document, "a", "", b);
    y(b, function(e) {
        H(e, "click", v(this.Rk, this, e), !1, this)
    }, this)
};
k.ei = function() {
    var a = D("tlid-share-panel", this.j());
    U(a, "show-share-panel");
    Pf(a, {
        "aria-hidden": !0
    });
    CL() && (a = Jf("not_installed")) && uq(a) && W(a, !1);
    Bt(this.na, this.a.Qa(), this.a.oa(), this.a.a, !1)
};
k.Rk = function(a) {
    a = a.className.split(" ")[0];
    Jm(dI, "webapp", "share", a, {
        sl: this.a.Qa(),
        tl: this.a.oa(),
        hl: DATA.DisplayLanguage,
        ql: this.a.a.length
    });
    wm(a);
    var b = CL();
    if (b) {
        var c = Jf("not_installed");
        c && uq(c) && "whatsapp" !== a ? W(c, !1) : "whatsapp" === a && BL(this, b, function(d) {
            d ? (d = c.style, d.position = "relative", B && !Re("8") ? (d.zoom = "1", d.display = "inline") : d.display = "inline-block") : W(c, !1)
        })
    }
};
k.ci = function() {
    Jm(dI, "webapp", "editclk", "1", {
        sl: this.a.Qa(),
        tl: this.a.oa()
    });
    var a = this.c;
    N(a, O(a, 26));
    LE(this.h)
};
k.Nk = function(a) {
    var b = IE(a.target);
    a = a.target.ue();
    b != this.$a() && W(D("trans-verified-button", this.j()), !1);
    DF(this.a, b);
    sp(this.Na, b, a, function(c) {
        kK(this.N, c)
    }.bind(this));
    this.K.update(b, a);
    this.dispatchEvent("resultTextEdited")
};
var CL = function() {
        var a = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            },
            b;
        for (b in a)
            if (b in document) {
                var c = a[b];
                break
            }
        return c
    },
    yL = function(a, b, c) {
        a.K.update(a.$a(), b, c, DL(b), a.X())
    },
    DL = function(a) {
        for (var b = "", c = Ob(DATA.TargetLanguageCodeNameList), d = 0; d < c.length; d++) c[d].Code === a && (b = c[d].Name);
        return b
    };

function pL() {
    var a = re() && se(9);
    return DATA.EnableSearchIcon && a
}

function oL(a) {
    a = void 0 === a ? {} : a;
    var b = void 0 === a.fg ? ht() || Ze && Bk(43) || re() && se(10) : a.fg,
        c = void 0 === a.gg ? pL() : a.gg;
    return Tp(AK, {
        Ha: DATA.Messages,
        mm: "Copy translation",
        om: "Star translation",
        fg: b,
        gg: c,
        Hc: void 0 === a.Hc ? !DATA.InChina : a.Hc
    })
};
var EL = function(a) {
    var b = this;
    this.v = a;
    this.a = !1;
    this.b = E("tlid-gender-promo-dismiss-button", this.v);
    H(this.b, "click", function() {
        b.a = !0;
        b.setVisible(!1);
        Im(Em.M(), "/translate/uc?ua=dismiss&uav=genderpromo");
        var c = L.M(),
            d = O(c, 341);
        N(c, d)
    })
};
EL.prototype.setVisible = function(a, b) {
    b = void 0 === b ? !1 : b;
    a && !this.a ? (V(this.v, "gender-promo-is-single-word", b), V(this.v, "gender-promo-visible", !0), a = L.M(), b = O(a, 340), N(a, b)) : V(this.v, "gender-promo-visible", !1)
};
var GL = function(a, b, c, d, e, f) {
    K.call(this);
    this.v = a;
    this.b = b;
    this.R = c;
    this.K = d;
    this.N = e;
    this.L = E("tlid-result-error", this.b);
    this.h = E("tlid-translation-error", this.v);
    this.C = E("tlid-translation-error-message", this.v);
    this.G = D("tlid-result-view-error-button", this.v) || null;
    this.w = D("tlid-result-container-error-button", this.b) || null;
    this.g = E("gt-lc", this.v);
    this.m = new Aw(DATA.Messages.COMMUNITY_CARD_LEARN_MORE, "", DATA.Messages.THANKS_FOR_CONTRIBUTING, DATA.Messages.CONTRIBUTION_BENEFIT, DATA.InChina ? "" :
        "/community?source=webapp-user-edit", "webapp-user-edit", 15);
    this.m.ia(E("cp-promo-wrapper", this.v));
    this.o = f ? new EL(f) : null;
    this.c = null;
    this.a = [];
    this.F = L.M();
    FL(this)
};
ka(GL, K);
GL.prototype.W = function() {
    HL(this);
    this.v = null;
    K.prototype.W.call(this)
};
var FL = function(a) {
        null != a.w && Ah(fb(a.w), function() {
            a.dispatchEvent("g")
        });
        null != a.G && Ah(fb(a.G), function() {
            a.dispatchEvent("g")
        })
    },
    IL = function(a) {
        if (!a.a[0]) throw Error("getTranslationData called without calling hasTranslationData first");
        return a.a[0].a
    };
GL.prototype.j = function() {
    return this.v
};
var JL = function(a) {
    return po && pI(a.c) ? rI(a.c).map(function(b) {
        return b.sb()
    }).join("\n") : a.a[0] ? IL(a).$a() : ""
};
GL.prototype.update = function(a, b, c, d, e) {
    var f = this;
    HL(this);
    this.c = e || null;
    iI();
    W(this.h, !1);
    KL(this, 2);
    U(this.b, "result-error");
    po && pI(this.c) && ro(J(this.c, 2), d) ? (LL(this, !0, !("tr" === J(this.c, 2) && "en" === d)), e = rI(this.c), Am(this.F, e), this.a = e.map(function(g, h) {
        h = ML(f, {
            Hc: 0 === h
        });
        h.update(a, b, c, d, f.c, g);
        return h
    })) : (LL(this, !1), e = ML(this), e.update(a, b, c, d, this.c), this.a = [e]);
    NL(this, !1);
    W(this.g, !0)
};
var ML = function(a, b) {
        b = new sL(a.b, a.R, a.K, a.m, a.N, b);
        b.Ad(a);
        return b
    },
    KL = function(a, b) {
        switch (b) {
            case 1:
                U(a.b, "result-error");
                T(a.b, "translating");
                a = ba(a.a);
                for (b = a.next(); !b.done; b = a.next()) {
                    b = b.value;
                    b.L.qa(!1);
                    var c = Bg(rL(b));
                    0 != c.length && G(rL(b), c + "...")
                }
                break;
            case 2:
                U(a.b, "translating")
        }
    },
    HL = function(a) {
        for (var b = ba(a.a), c = b.next(); !c.done; c = b.next()) c = c.value, c.K.stop(), c.La();
        a.a = [];
        a.c = null
    },
    OL = function(a, b, c) {
        if (a.a[0] && EF(IL(a), b)) {
            for (var d = ba(a.a), e = d.next(); !e.done; e = d.next()) e = e.value,
                null != e.b && (e = e.b, e.b = c, Ht(e));
            b = b.c;
            null != b && (IL(a).c = b)
        }
    },
    PL = function(a) {
        a = ba(a.a);
        for (var b = a.next(); !b.done; b = a.next()) b.value.Y = !0
    },
    NL = function(a, b) {
        V(a.b, "empty", b);
        V(a.v, "empty", b)
    },
    LL = function(a, b, c) {
        V(a.b, "gendered-translations", b);
        a.o && a.o.setVisible(b, c)
    };
var RL = function(a, b, c) {
        var d = DATA.DisplayLanguage,
            e = DATA.Messages,
            f = this;
        this.a = a;
        this.C = E("tlid-survey-contents", this.a);
        this.L = E("tlid-dismiss-survey", this.a);
        this.o = E("tlid-before-survey", this.a);
        this.h = E("tlid-after-survey", this.a);
        this.m = E("tlid-more-feedback", this.a);
        this.R = QL(this, e);
        y(this.R, function(g) {
            return f.C.appendChild(g)
        });
        this.K = d;
        this.c = c;
        this.Fa = b;
        this.F = L.M();
        this.g = Em.M();
        H(this.L, "click", v(this.b, this, 0), !1, this);
        H(this.m, "click", this.w, !1, this)
    },
    QL = function(a, b) {
        b = [
            [b.HAPPINESS_SURVEY_OPTION1,
                0
            ],
            [b.HAPPINESS_SURVEY_OPTION2, 1],
            [b.HAPPINESS_SURVEY_OPTION3, 2],
            [b.HAPPINESS_SURVEY_OPTION4, 3],
            [b.HAPPINESS_SURVEY_OPTION5, 4]
        ];
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d],
                f = e[1];
            e = Tp(EK, {
                message: e[0],
                Km: f
            });
            c.push(e);
            H(e, "click", v(a.G, a, f), !1, a)
        }
        return c
    };
RL.prototype.G = function(a) {
    var b = this.F,
        c = O(b, 262),
        d = new fl;
    C(d, 1, a + 1);
    mf(c, 72, d);
    N(b, c);
    SL(this, "select" + a);
    W(this.o, !1);
    W(this.h, !0);
    this.b(1E4)
};
RL.prototype.w = function() {
    this.b(0);
    this.Fa.call()
};
var SL = function(a, b) {
    var c = {},
        d = a.c.a,
        e = a.c.c;
    "auto" === d && "" !== e && (d = e);
    c.sl = d;
    c.tl = a.c.b;
    c.hl = a.K;
    c.e = b;
    a.g.log("survey", c)
};
RL.prototype.b = function(a) {
    var b = this;
    Im(this.g, "/translate/uc?ua=dismiss&uav=survey");
    Bi(function() {
        (new hF(b.a, 300)).play()
    }, null != a ? a : 0, this)
};
var UL = function(a) {
    K.call(this);
    this.F = L.M();
    this.v = a;
    this.h = E("tlid-toast-message", this.v);
    this.c = E("tlid-toast-action", this.v);
    a = Nf("A", "tlid-toast-action-link", this.c);
    this.b = fb(a);
    this.o = E("tlid-toast-action-text", this.c);
    this.g = new Rr(this.m, 5E3, this);
    this.a = null;
    TL(this)
};
ka(UL, K);
var WL = function(a, b) {
        T(a.v, "with-message");
        U(a.v, "with-action");
        G(a.h, b);
        VL(a)
    },
    VL = function(a) {
        a.g.kb() || ((new iF(a.v, 218)).play(), a = a.g, a.kb() || a.start(void 0))
    };
UL.prototype.m = function() {
    (new hF(this.v, 218)).play()
};
var TL = function(a) {
    H(a.b, "click", v(function() {
        null != a.a && a.dispatchEvent(a.a)
    }, a), !1, a)
};
var XL = function() {};
ka(XL, tr);
XL.prototype.Uc = function(a) {
    return a && "SPAN" == a.tagName ? !0 : !1
};
var YL = function(a) {
    XK.call(this);
    this.g = a;
    this.m = new Em;
    this.m.c = "webapp";
    this.c = null
};
ka(YL, XK);
YL.prototype.b = function() {
    return "cmty-ctr"
};
YL.prototype.Rc = function(a) {
    if (!a || "DIV" != a.tagName) return !1;
    a = D("cmty-ctr", a);
    if (!a || "DIV" != a.tagName) return !1;
    var b = D("snck-msg", a);
    return b && "SPAN" == b.tagName ? (a = D("cmty-btn", a)) && "SPAN" == a.tagName ? !0 : !1 : !1
};
YL.prototype.ea = function() {
    D("snck-msg", this.j()).textContent = MSG_VERIFIED_BY_COMMUNITY;
    var a = D("cmty-btn", this.j());
    a.textContent = MSG_JOIN;
    this.c = new Pr(null, new XL);
    this.c.ia(a);
    H(this.c, "action", this.w, !1, this)
};
YL.prototype.w = function() {
    this.m.log("community-promo", "click-" + this.g);
    this.setVisible(!1);
    $d("/community?source=" + this.g)
};
Vi("wireless.events.ListenerCoalescer");
var ZL = function(a) {
    Bl(this, a, 2)
};
w(ZL, Al);
var $L = {
    language: {
        H: 0,
        J: !1
    },
    state: {
        H: 1,
        J: !1
    }
};
ZL.prototype.a = function() {
    return $L
};
ZL.prototype.Ea = function() {
    return Dh(this, 1)
};
var aM = function(a) {
    Bl(this, a, 4)
};
w(aM, Al);
var bM = {
    language: {
        H: 0,
        J: !1
    },
    state: {
        H: 1,
        J: !1
    },
    tool_id: {
        H: 2,
        J: !1
    },
    element_id: {
        H: 3,
        J: !1
    }
};
aM.prototype.a = function() {
    return bM
};
aM.prototype.Ea = function() {
    return Dh(this, 1)
};
var cM = function(a) {
    Bl(this, a, 19)
};
w(cM, Al);
var dM = {
    vkeyboard: {
        H: 0,
        wa: function(a) {
            return Hl(ZL, a)
        },
        va: function(a) {
            return Gl(new ZL(a))
        },
        J: !0
    },
    source_romanization: {
        H: 1,
        wa: function(a) {
            return Hl(ZL, a)
        },
        va: function(a) {
            return Gl(new ZL(a))
        },
        J: !0
    },
    result_romanization: {
        H: 2,
        wa: function(a) {
            return Hl(ZL, a)
        },
        va: function(a) {
            return Gl(new ZL(a))
        },
        J: !0
    },
    input_t13n: {
        H: 3,
        wa: function(a) {
            return Hl(ZL, a)
        },
        va: function(a) {
            return Gl(new ZL(a))
        },
        J: !0
    },
    default_source_romanization: {
        H: 4,
        J: !1
    },
    default_result_romanization: {
        H: 5,
        J: !1
    },
    dismiss_chrome_promotion: {
        H: 6,
        J: !1
    },
    source_example: {
        H: 7,
        J: !1
    },
    result_example: {
        H: 8,
        J: !1
    },
    input_tool: {
        H: 9,
        wa: function(a) {
            return Hl(aM, a)
        },
        va: function(a) {
            return Gl(new aM(a))
        },
        J: !0
    },
    dismiss_phrasebook_promo: {
        H: 10,
        J: !1
    },
    dismiss_survey: {
        H: 11,
        J: !1
    },
    dismiss_gsa_pure_ad: {
        H: 12,
        J: !1
    },
    dismiss_search_tooltip: {
        H: 13,
        J: !1
    },
    dismiss_gsa_interstitial: {
        H: 14,
        J: !1
    },
    dismiss_gsa_prompt: {
        H: 15,
        J: !1
    },
    search_direct_gsa: {
        H: 16,
        J: !1
    },
    dismiss_android_translate: {
        H: 17,
        J: !1
    },
    dismiss_android_translate5: {
        H: 18,
        J: !1
    }
};
cM.prototype.a = function() {
    return dM
};
var eM = function(a) {
    Bl(this, a, 2)
};
w(eM, Al);
var fM = {
    source_language: {
        H: 0,
        J: !1
    },
    target_language: {
        H: 1,
        J: !1
    }
};
eM.prototype.a = function() {
    return fM
};
eM.prototype.ue = function() {
    return J(this, 1)
};
var gM = function(a) {
    Bl(this, a, 6)
};
w(gM, Al);
var hM = {
    recent_sl: {
        H: 0,
        J: !0
    },
    recent_tl: {
        H: 1,
        J: !0
    },
    recent_lp: {
        H: 2,
        wa: function(a) {
            return Hl(eM, a)
        },
        va: function(a) {
            return Gl(new eM(a))
        },
        J: !0
    },
    sel_auto: {
        H: 3,
        J: !1
    },
    default_sl: {
        H: 4,
        J: !1
    },
    default_tl: {
        H: 5,
        J: !1
    }
};
gM.prototype.a = function() {
    return hM
};
var iM = function(a) {
    Bl(this, a, 3)
};
w(iM, Al);
var jM = {
    recent_lang: {
        H: 0,
        wa: function(a) {
            return Hl(gM, a)
        },
        va: function(a) {
            return Gl(new gM(a))
        },
        J: !1
    },
    eotf: {
        H: 1,
        J: !1
    },
    stickiness_data: {
        H: 2,
        wa: function(a) {
            return Hl(cM, a)
        },
        va: function(a) {
            return Gl(new cM(a))
        },
        J: !1
    }
};
iM.prototype.a = function() {
    return jM
};
var kM = function(a, b, c) {
    a.timeOfStartCall = (new Date).getTime();
    var d = c || n,
        e = d.document,
        f = Ca(d);
    f && (a.nonce = f);
    if ("help" == a.flow) {
        var g = Ea("document.location.href", d);
        !a.helpCenterContext && g && (a.helpCenterContext = g.substring(0, 1200));
        g = !0;
        if (b && JSON && JSON.stringify) {
            var h = JSON.stringify(b);
            (g = 1200 >= h.length) && (a.psdJson = h)
        }
        g || (b = {
            invalidPsd: !0
        })
    }
    b = [a, b, c];
    d.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
    c = a.serverUri || "//www.google.com/tools/feedback";
    if (g = d.GOOGLE_FEEDBACK_START) g.apply(d, b);
    else {
        d = c + "/load.js?";
        for (var l in a) b = a[l], null != b && !Ma(b) && (d += encodeURIComponent(l) + "=" + encodeURIComponent(b) + "&");
        a = Fg(If(e), "SCRIPT");
        f && a.setAttribute("nonce", f);
        Xd(a, Iw(d));
        e.body.appendChild(a)
    }
};
za("userfeedback.api.startFeedback", kM);
var pM = QA("showhistory"),
    qM = QA("showinstant"),
    rM = QA("showsaved"),
    sM = QA("showfeedback"),
    tM = QA("showlanguagepicker"),
    uM = QA("urltranslation"),
    IM = function(a, b) {
        var c = vM,
            d = wM,
            e = xM,
            f = yM,
            g = this;
        this.K = sl();
        this.F = L.M();
        bm(this.F);
        this.K.c = c;
        this.K.g = d;
        this.w = Em.M();
        this.ob = new fG(this.mj.bind(this), this.rj.bind(this), this.Yn.bind(this), this.w);
        this.Za = a;
        this.c = b;
        this.c.c = this;
        this.Fj = e;
        this.Hj = f;
        this.Zc = new op("webapp");
        this.ed = new Uu;
        this.ma = new dw(v(this.jo, this), !0);
        this.L = new BA(this.ma);
        a = zM() ? "\u5373\u523b\u4e0b\u8f7dGoogle\u7ffb\u8bd1 app\uff01" :
            .5 > Math.random() ? DATA.Messages.TRANSLATE_PURE_AD_TEXT_SPEAK : DATA.Messages.TRANSLATE_PURE_AD_TEXT_READ;
        this.mo = Yy.M();
        AM(this);
        this.v = Tp(xK, {
            Qj: a,
            Xj: qM,
            ak: c,
            bk: d,
            gk: DATA.InChina && "zh-CN" === DATA.DisplayLanguage,
            hk: !DATA.InChina,
            jk: DATA.DisplayHappinessSurvey,
            lk: DATA.EnableHiringPromo,
            Sa: DATA.DisplayLanguage,
            nk: !DATA.InChina,
            qk: DATA.EnableCommunityInstant && DATA.SignedIn,
            rk: DATA.CompareProdTrans,
            wk: ht(),
            xk: DATA.UrlTranslation,
            Nl: pM,
            Bq: DATA.InChina,
            Ha: DATA.Messages,
            nm: DATA.Messages.NO_THANKS.toUpperCase(),
            pm: DATA.Messages.TRY_THE_APP.toUpperCase(),
            Sm: zM() || BM(),
            Tm: !ht(),
            Um: CM(),
            Vm: DATA.SignedIn,
            Zm: rM,
            pn: Ob(DATA.SourceLanguageCodeNameList),
            Gn: Ob(DATA.TargetLanguageCodeNameList),
            fo: uM
        });
        a = kc(DATA.DisplayLanguage);
        V(document.body, "rtl-display-lang", a);
        this.g = E("tlid-homepage", this.v);
        T(document.body, "displaying-homepage");
        this.R = new fK(E("tlid-history-page", this.v), this.ob);
        this.V = DATA.EnableCommunityInstant && DATA.SignedIn ? new VK(E("tlid-instant-page", this.v)) : null;
        this.Vb = this.b = null;
        this.Zd = E("tlid-language-picker-page",
            this.v);
        this.ce = E("tlid-source-target", this.v);
        this.a = new NK(E("tlid-input", this.g), this.ce, c, d, this.ma, this.L);
        this.nj = new YD(this.a.a.j());
        this.ph = new $K;
        this.ph.ia(D("ntfcn", this.a.j()));
        this.fd = new YL("webapp-served-community");
        this.fd.ia(D("cmty", this.a.j()));
        a = this.wb = null;
        DATA.EnableGenderedTranslationsPromo && (a = Tp(zK, {
            ln: "en" === DATA.DisplayLanguage,
            Ha: DATA.Messages
        }));
        this.h = new GL(E("tlid-result-view", this.v), E("tlid-results-container", this.ce), this.ob, this.c, this.nj, a);
        this.cb = this.Wb = null;
        if (this.sa = D("tlid-input-button-container", this.g)) this.Wb = E("tlid-input-button-text", this.sa), this.cb = E("tlid-input-button-docs", this.sa);
        (b = D("tlid-app-download-bar", this.g)) && new mH(b);
        this.$d = null;
        DATA.CompareProdTrans && (this.$d = E("tlid-prod-translation", this.g));
        this.aa = null;
        DATA.CompareProdTrans && (this.aa = new nH(E("tlid-brain-logos-container", this.g)));
        this.na = null;
        this.G = new lv(DATA.DisplayLanguage, this.Zc, this, !0);
        this.Fd = new Ks(DATA.DisplayLanguage, [DATA.Messages.COMMON_TRANSLATION, DATA.Messages.UNCOMMON_TRANSLATION,
            DATA.Messages.RARE_TRANSLATION, MSG_N_MORE_TRANSLATIONS_LABEL
        ], !0, !1, !0, DATA.Messages.TRANSLATION_FREQUENCY, DATA.Messages.TRANSLATION_FREQUENCY_HELP_TEXT);
        this.Ed = new Ew(DATA.DisplayLanguage, !0, !0, !0);
        this.hd = new Jw(DATA.DisplayLanguage, !0, !0);
        this.Qm = new jF(DATA.DisplayLanguage, !0, !0);
        this.oo = new WG(DATA.DisplayLanguage, !0, !0);
        this.Kb = [];
        b = {
            Ic: this.a.Ic,
            aj: this.a.a,
            $a: function() {
                return JL(g.h)
            }
        };
        e = D("outer-wrap", this.Zd);
        e.appendChild(this.a.b.j());
        e.appendChild(this.a.g.j());
        this.xb = D("tlid-language-list-toolbar",
            this.Zd);
        this.im = D("tlid-language-list-back-button", this.xb);
        this.mh = new xs;
        this.mh.ia(this.im);
        this.oh = D("tlid-language-list-label", this.xb);
        this.ya = new xs;
        this.ya.ia(D("tlid-language-list-search-button", this.xb));
        this.ya.qd(DATA.Messages.SEARCH_LANGUAGES);
        CA(this.a.b, function() {
            g.T({})
        }, this);
        CA(this.a.g, function() {
            g.T({})
        }, this);
        e = this.a.b;
        f = this.a.g;
        Xb(b, {
            Oi: e,
            Yi: f,
            Ki: this.ya,
            Ni: e.G,
            Xi: f.G
        });
        EA(this.L, b);
        this.ma.g(c);
        this.ma.h(d);
        c = D("ovfl", this.a.j());
        this.uh = new bL(this.a, this.ma, DATA.DisplayLanguage,
            DATA.MaxSingleQueryLength);
        this.uh.ia(c);
        this.Pa = null;
        if (c = D("tlid-character-count", this.g)) this.Pa = new Hv(DATA.MaxSingleQueryLength, "normal", "overflow"), this.Pa.ia(c), Kv(this.Pa);
        this.Gj = new ww(this.a.a, this.ma, this.uh, null != this.Pa ? this.Pa : void 0);
        xw(this.Gj);
        c = D("tlid-spelling-correction", this.a.j());
        this.X = new JG(this, DATA.Messages.LANGUAGE_CORRECTION, DATA.Messages.DID_YOU_MEAN, DATA.Messages.SPELLING_AUTO_CORRECTION, DATA.Messages.SPELLING_REVERT_CORRECTION, v(this.a.b.V, this.a.b));
        this.X.ia(c);
        this.G.ia(D("gt-lc", this.h.j()));
        a && this.G.b.j().appendChild(a);
        this.G.b.hb(this.Fd, !0);
        this.G.c.hb(this.Ed, !0);
        this.G.c.hb(this.hd, !0);
        this.G.c.hb(this.oo, !0);
        this.G.c.hb(this.Qm, !0);
        this.Om = new MD(this.a.a, !DATA.DisableOtf, v(this.Y, this, !0), v(this.Zc.m, this.Zc));
        this.$m = new Hq(this);
        this.$m.O(If().a, "scroll", this.oj);
        this.Le = Tf(document).a;
        this.ae = {};
        this.C || (this.C = new eB(this, "Controller"), gB(this.C, pM, this.Rj), gB(this.C, rM, this.Bk), gB(this.C, qM, this.pk), gB(this.C, sM, this.Ca), gB(this.C, tM, this.T),
            gB(this.C, uM, this.bo), fB.a.push(this.C));
        this.Yl = re() && se(9);
        zM() ? DM(this, "http://www.gstatic.cn/translate/dl/android.html", 11) : DATA.InChina || (CM() ? EM(this, "gsa-promo", "gsaAd", "gsaad", 12, Ta(Bh, "gsa", "gsaAd:show", "", 1), Ta(Bh, "gsa", "gsaAd:dismiss", "", 1), v(this.Kj, this)) : BM() ? DM(this, "https://play.google.com/store/apps/details?id=com.google.android.apps.translate&referrer=utm_source%3DMobileWebBanner%26utm_content%3DPureAd%26utm_campaign%3DTranslateAndroid&pcampaignid=Translate_022016", 9) : DATA.EnableHiringPromo &&
            gL(new fL(E("tlid-magnet-promo", this.v)), !0));
        c = D("tlid-survey", this.v);
        this.sh = null;
        c && (this.sh = new RL(c, v(this.Ca, this), this.ma), Bi(function() {
            var h = this.sh;
            U(h.a, "hidden");
            var l = h.F;
            N(l, O(l, 261));
            SL(h, "show")
        }, 6E4, this));
        this.m = null;
        c = E("tlid-send-feedback-link", this.v);
        H(c, "click", this.Ca, !1, this);
        this.dd = this.ee = 0;
        this.jd = this.Me = this.o = "";
        p(DATA.RecentLanguages) && p(DATA.RecentLanguages.recent_sl) && (DB(this.a.b, DATA.RecentLanguages.recent_sl), DB(this.a.g, DATA.RecentLanguages.recent_tl));
        this.Na =
            "";
        this.N = new UL(E("tlid-toast", this.v));
        FM();
        GM(this);
        HM(this)
    },
    GM = function(a) {
        a.Wb && Ah(a.Wb, function() {
            var c = zt(a.c);
            Ys(c, a.ma.a, a.ma.b);
            a.c.a(c.toString(), !0);
            JM(a)
        });
        a.cb && Ah(a.cb, function() {
            var c = zt(a.c),
                d = a.ma.a,
                e = a.ma.b;
            Xs(c);
            c.a.set("op", "docs");
            null != d && c.a.set("sl", d);
            null != e && c.a.set("tl", e);
            a.c.a(c.toString(), !0);
            KM(a)
        });
        a.sa && H(a.sa, "keydown", function(c) {
            zh(c, [a.Wb, a.cb])
        }, !1);
        H(a.xb, "touchmove", LM);
        H(a.mh, "action", function() {
            a.T({})
        }, !1, a);
        H(a.ya, "action", a.wm, !1, a);
        H(a.ya.j(), "keydown",
            a.Oj, !1, a);
        H(a.a, "translateButtonClicked", a.wj, !1, a);
        H(a.R, "history_entry_selected", function(c) {
            wt(a, c.fb, c.gb, c.text)
        }, !1);
        H(a.R, "close_requested", a.Fa, !1, a);
        H(a.R, "history_cleared", a.Hj, !1, a);
        a.V && (H(a.V, "close_requested", a.Fa, !1, a), H(a.V, "sign_in_requested", a.xj, !1, a));
        H(a.a.a, "clear", a.qh, !1, a);
        H(document, "click", a.Mj, !0, a);
        var b = Jf("trans-onebar-feedback");
        b && (H(b, "click", a.Ca, !1, a), H(b, "keypress", function(c) {
            13 == c.keyCode && this.Ca()
        }, !1, a));
        H(a.ma, "srcSuggestionUpdated", a.Bn, !1, a);
        H(a.ma, "languageSelected",
            a.Lj, !1, a);
        H(a.ma, "tgtLanguageUpdated", a.Ll, !1, a);
        H(a.c, "c", function(c) {
            MM(a, c.dh)
        }, !1);
        a.L.h && (H(a.L.h, "clickSelected", a.Hk, !1, a), H(a.L.h, "click", a.ba, !1, a));
        a.L.m && (H(a.L.m, "clickSelected", a.Pl, !1, a), H(a.L.m, "click", a.ba, !1, a), H(a.a.Ic, "action", a.ba, !1, a));
        Ah(E("tlid-open-source-language-list", a.g), a.kh.bind(a));
        Ah(E("tlid-open-target-language-list", a.g), a.lh.bind(a));
        Ah(E("tlid-open-small-source-language-list", a.g), a.kh.bind(a));
        Ah(E("tlid-open-small-target-language-list", a.g), a.lh.bind(a));
        DATA.CompareProdTrans &&
            H(a.a, "inputCleared", function() {
                G(this.$d, "")
            }, !1, a);
        H(a.h, "verifiedTranslationButtonClicked", function() {
            a.fd.setVisible(!0, 8E3);
            a.w.log("community-promo", "open-webapp-served-community")
        });
        H(a.h, "g", function() {
            a.Y(!1)
        }, !1);
        H(a.h, "resultTextEdited", function() {
            NM(a)
        }, !1);
        H(a.h, "translationCopied", function() {
            WL(this.N, "Translation copied")
        }, !1, a);
        H(a.a, "userInteractionWithDisabledVoiceInput", function() {
            if ("auto" === this.ma.a) WL(this.N, DATA.Messages.CHOOSE_LANGUAGE_TO_ENABLE_VOICE_INPUT);
            else {
                var c = nI(this.ma.a);
                WL(this.N, this.ed.a(DATA.Messages.VOICE_INPUT_UNAVAILABLE, c))
            }
        }, !1, a);
        H(a.a, "userInteractionWithDisabledVoiceOutput", function() {
            var c = nI(this.ma.a);
            WL(this.N, this.ed.a(DATA.Messages.VOICE_OUTPUT_UNAVAILABLE, c))
        }, !1, a);
        H(a.h, "userInteractionWithDisabledVoiceOutput", function() {
            var c = oI(this.ma.b);
            WL(this.N, this.ed.a(DATA.Messages.VOICE_OUTPUT_UNAVAILABLE, c))
        }, !1, a);
        H(a.N, "unsupported_filetype_learn_more_clicked", function() {
            var c = a.F,
                d = O(c, 309),
                e = new Yk;
            C(e, 1, 1);
            mf(d, 79, e);
            N(c, d);
            Jm(a.w, "webapp", "lm",
                "dtft", {});
            $d("https://support.google.com/translate/answer/2534559?hl=" + DATA.DisplayLanguage)
        }, !1);
        b = new oG([a.a.a.j()], [E("tlid-results-container", a.ce)]);
        H(b, "select", a.G.kl, !1, a.G);
        H(window, "beforeunload", function(c) {
            OM(a, c.type);
            a.m && PM(a, a.m.a, a.m.w, a.m.Qa(), a.m.oa())
        }, !1);
        H(a.a, "inputPasted", function() {
            QM(a, aw(a.a.a)) ? a.ee++ : a.dd++
        }, !1);
        H(a.G, "translationRefreshed", function() {
            window.scrollTo(0, 0)
        }, !1, a);
        new xA(a.L)
    },
    JM = function(a) {
        var b = a.F;
        N(b, O(b, 295));
        Jm(a.w, "webapp", "ib", "t", {});
        T(a.g, "translate-text");
        U(a.g, "translate-docs")
    },
    KM = function(a) {
        var b = a.F;
        N(b, O(b, 296));
        Jm(a.w, "webapp", "ib", "d", {});
        null != a.wb || RM(a);
        U(a.g, "translate-text");
        T(a.g, "translate-docs")
    };
IM.prototype.Oj = function(a) {
    var b = this.a.b.isVisible() ? this.a.b : this.a.g.isVisible() ? this.a.g : void 0;
    if (b) switch (a.keyCode) {
        case 27:
            b.close();
            a.preventDefault();
            break;
        case 40:
            b.a[0].j().focus();
            a.preventDefault();
            break;
        default:
            b.Y && b.Y(a)
    }
};
IM.prototype.Mj = function(a) {
    var b = fb(a.target);
    b.classList.contains("tlid-trans-verified-button") || ng(this.fd.j(), b) || this.fd.setVisible(!1);
    ng(this.Zd, b) || ng(E("tlid-language-bar"), b) || this.ba(a)
};
var MM = function(a, b) {
        var c = new Vs(b);
        "history" === c.b ? SM() || TM(a) : "instant" === c.b ? UM() || VM(a) : "saved" === c.b ? WM() || XM(a) : (x("home" === c.b, "Invalid view token in the URL fragment"), Mp(document.body, "displaying-homepage") || a.Fa());
        if (dt(c, "star")) "history" === c.b ? (a.Na = "", gK(a.R, c.Qa(), c.oa(), $s(c, "text"))) : (x("home" === c.b, "Invalid view token in the URL fragment for STAR operation"), a.ma.g(c.Qa()), a.ma.h(c.oa()), a.a.a.g($s(c, "text")), a.Y(!1), lD(a.a.R), a.rh = !0);
        else if (dt(c, "docs")) {
            Mp(a.g, "translate-docs") ||
                KM(a);
            c = Ob(DATA.SourceLanguageCodeNameList).map(function(e) {
                return e.Code
            });
            var d = Ob(DATA.TargetLanguageCodeNameList).map(function(e) {
                return e.Code
            });
            yt(a.c, b, c, d)
        } else dt(c, "translate") && (Mp(a.g, "translate-text") || JM(a), c = Ob(DATA.SourceLanguageCodeNameList).map(function(e) {
            return e.Code
        }), d = Ob(DATA.TargetLanguageCodeNameList).map(function(e) {
            return e.Code
        }), xt(a.c, b, c, d), aw(a.a.a) && RK(a.a))
    },
    zM = function() {
        return Fe && DATA.InChina && "zh-CN" === DATA.DisplayLanguage && DATA.EnableChinaAndroidPromo
    };
IM.prototype.kh = function(a) {
    this.T(a, "sl")
};
IM.prototype.lh = function(a) {
    this.T(a, "tl")
};
IM.prototype.Hk = function(a) {
    this.T(a, "sl")
};
IM.prototype.Pl = function(a) {
    this.T(a, "tl")
};
var CM = function() {
        return !DATA.InChina && DATA.EnableGSAPureAd && re() && se(9) && xd()
    },
    BM = function() {
        return !DATA.InChina && Fe && "en" == DATA.DisplayLanguage && !!DATA.Messages.TRANSLATE_PURE_AD_TEXT_SPEAK && !!DATA.Messages.TRANSLATE_PURE_AD_TEXT_READ
    };
IM.prototype.jo = function(a) {
    a: {
        var b = this.a.R.a;
        if ("ltr" == a) var c = "left";
        else if ("rtl" == a) c = "right";
        else break a;
        Zp(b.j(), "direction", a);
        Zp(b.j(), "text-align", c)
    }
};
var LM = function(a) {
    a.preventDefault()
};
IM.prototype.Lj = function() {
    var a = this.ma.a,
        b = this.ma.b;
    this.K.c = a;
    this.K.g = b;
    var c = this.Za;
    iH(c, c.a, a);
    c = this.Za;
    iH(c, c.b, b);
    this.Y(!1, "ls");
    ht() && JK(this.a);
    this.aa && qH(this.aa, a, b)
};
IM.prototype.Ll = function() {
    for (var a = this.ma.b, b = ba(this.h.a), c = b.next(); !c.done; c = b.next()) yL(c.value, a)
};
IM.prototype.j = function() {
    return this.v
};
var WM = function() {
        return Mp(document.body, "displaying-saved-page")
    },
    UM = function() {
        return Mp(document.body, "displaying-instant-page")
    },
    SM = function() {
        return Mp(document.body, "displaying-history-page")
    };
IM.prototype.Fa = function() {
    iI();
    var a = D("tlid-share-panel", this.v);
    a && U(a, "show-share-panel");
    U(document.body, "with-lang-list");
    U(document.body, "with-sl-list");
    U(document.body, "with-tl-list");
    if (!Mp(document.body, "displaying-homepage")) {
        a = WM();
        T(document.body, "displaying-homepage");
        U(document.body, "displaying-history-page");
        U(document.body, "displaying-saved-page");
        U(document.body, "displaying-instant-page");
        var b = zt(this.c);
        Ws(b, "home");
        this.c.a(b.toString(), !0);
        b = this.F;
        N(b, O(b, 216));
        fI("show", "homepage",
            "", "", "");
        a && (a = this.F, N(a, O(a, 41)))
    }
};
IM.prototype.Rj = function() {
    if (SM()) {
        var a = this.R;
        a.a && EI(a.a);
        this.Fa()
    } else a = zt(this.c), this.Na = a.toString(), Ws(a, "history"), this.c.a(a.toString(), !0), TM(this)
};
var TM = function(a) {
    U(document.body, "displaying-homepage");
    T(document.body, "displaying-history-page");
    U(document.body, "displaying-saved-page");
    U(document.body, "displaying-instant-page");
    hK(a.R);
    fI("show", "history", "", "", "");
    a = a.F;
    N(a, O(a, 60))
};
IM.prototype.pk = function() {
    if (this.V)
        if (UM()) this.Fa();
        else {
            var a = zt(this.c);
            this.Na = a.toString();
            Ws(a, "instant");
            this.c.a(a.toString(), !0);
            VM(this)
        }
};
var VM = function(a) {
    if (a.V) {
        U(document.body, "displaying-homepage");
        U(document.body, "displaying-history-page");
        U(document.body, "displaying-saved-page");
        T(document.body, "displaying-instant-page");
        var b = a.V;
        if (null == b.a && null != b.v) {
            var c = D("tlid-community-instant-container", b.v);
            if (null != c) {
                var d = Tp(II, {
                    Wl: DATA.SignedIn,
                    Ha: DATA.Messages
                });
                c.appendChild(d);
                b.a = new NI(d);
                H(b.a, "close_requested", b.c, !1, b);
                H(b.a, "sign_in_requested", b.b, !1, b)
            }
        }
        QI(a.V.a, a.ma.a, a.ma.b);
        fI("show", "instant", "", "", "");
        a = a.F;
        N(a,
            O(a, 361))
    }
};
IM.prototype.T = function(a, b) {
    var c = this;
    if (Mp(document.body, "with-lang-list")) this.ba(a);
    else {
        if (null == b) throw Error("No language picker class to show provided");
        WM() && this.b && (SJ(this.b), this.Fa());
        "sl" === b ? (G(this.oh, DATA.Messages.TRANSLATE_FROM), this.a.b.setVisible(!0), this.a.g.setVisible(!1), BB(this.a.b), T(document.body, "with-sl-list")) : "tl" === b && (G(this.oh, DATA.Messages.TRANSLATE_TO), this.a.b.setVisible(!1), this.a.g.setVisible(!0), BB(this.a.g), T(document.body, "with-tl-list"));
        T(document.body, "with-lang-list");
        Bi(function() {
            ht() && ("sl" === b ? GB(c.a.b) : "tl" === b && GB(c.a.g))
        }, 0);
        n.scrollTo(0, 0);
        a = D("language-list-unfiltered-langs-" + b + "_list");
        null != a && (a.scrollTop = 0)
    }
};
IM.prototype.ba = function(a) {
    "click" == a.type && a.defaultPrevented || !Mp(document.body, "with-lang-list") || (this.a.b.setVisible(!1), this.a.g.setVisible(!1), this.Fa(), ht() && JK(this.a))
};
IM.prototype.wm = function() {
    this.a.b.isVisible() && FB(this.a.b);
    this.a.g.isVisible() && FB(this.a.g)
};
IM.prototype.Bk = function() {
    if (WM() && null != this.b) SJ(this.b), this.Fa();
    else {
        var a = zt(this.c);
        this.Na = a.toString();
        Ws(a, "saved");
        this.c.a(a.toString(), !0);
        XM(this)
    }
};
var XM = function(a) {
    DATA.InChina || lI("lnk", a.w, a.$n.bind(a), a.c.a.bind(a.c, a.Na, !0), zt(a.c).toString())
};
IM.prototype.$n = function() {
    fI("show", "starred", "", "", "");
    var a = this.F;
    N(a, O(a, 40));
    U(document.body, "displaying-homepage");
    U(document.body, "displaying-history-page");
    T(document.body, "displaying-saved-page");
    U(document.body, "displaying-instant-page");
    this.b || YM(this)
};
var YM = function(a) {
    var b = E("tlid-phrasebook-outer-wrap", a.v),
        c = Tp(WJ, {
            Sa: DATA.DisplayLanguage,
            Ha: DATA.Messages
        });
    b.appendChild(c);
    a.b = new NJ(c, a.ob);
    H(a.b, "close_requested", function() {
        SJ(a.b);
        a.Fa()
    }, !1);
    H(a.b, "phrasebook_entry_selected", function(d) {
        Mp(a.g, "translate-text") || JM(a);
        wt(a, d.fb, d.gb, d.text)
    }, !1);
    H(a.b, "interaction_with_disabled_voice_output", function(d) {
        WL(a.N, a.ed.a(DATA.Messages.VOICE_OUTPUT_UNAVAILABLE, d.Ya))
    }, !1, a);
    a.Vb && eJ(a.b.a, a.Vb)
};
IM.prototype.Ca = function() {
    var a = {
            productId: "101820",
            locale: DATA.DisplayLanguage,
            version: DATA.VersionLabel
        },
        b = {};
    0 < EXPERIMENT_IDS.length && (b.EXP = EXPERIMENT_IDS.join(","));
    b.SOURCE_LANGUAGE = this.ma.a;
    b.TARGET_LANGUAGE = this.ma.b;
    window.JS_ERR_COUNT && (b.JS_ERR_COUNT = window.JS_ERR_COUNT, b.JS_ERR_ARR = window.JS_ERR_ARR);
    this.g.scrollIntoView(!0);
    kM(a, b);
    fI("show", "feedback", "", "", "")
};
var RM = function(a) {
    var b = Tp(yK, {
        Sa: DATA.DisplayLanguage,
        Ck: DATA.FileTranslationPath,
        Ha: DATA.Messages
    });
    E("tlid-select-file-page-container", a.g).appendChild(b);
    a.wb = new $J(b, a.ma);
    H(a.wb, "file_too_big", function() {
        WL(a.N, DATA.Messages.FILE_TOO_BIG)
    }, !1);
    H(a.wb, "unsupported_filetype", function() {
        var c = a.N,
            d = DATA.Messages.CANT_READ_FILE,
            e = DATA.Messages.LEARN_MORE;
        T(c.v, "with-action");
        U(c.v, "with-message");
        G(c.h, d);
        G(c.o, e);
        c.b.removeAttribute("href");
        c.a = "unsupported_filetype_learn_more_clicked";
        VL(c)
    }, !1)
};
IM.prototype.bo = function() {
    var a = this.a;
    if (DATA.UrlTranslation) {
        var b = D("source-wrap", a.v);
        W(b, !1);
        W(a.Y.j(), !0)
    }
};
var ZM = function(a) {
    var b = [];
    if (po && pI(a)) b = [{
        trans: rI(a).map(function(g) {
            return g.sb()
        }).join("\n"),
        orig: J(a.ab(0), 1),
        translit: "",
        src_translit: J(a.ab(0), 3)
    }];
    else
        for (var c = 0; c < a.cc(); c++) {
            var d = {
                trans: a.ab(c).Nc(),
                orig: J(a.ab(c), 1),
                translit: J(a.ab(c), 2),
                src_translit: J(a.ab(c), 3)
            };
            b[c] = d
        }
    d = [];
    for (c = 0; c < I(a, 1); c++) {
        for (var e = [], f = 0; f < I(Ch(a, c), 1); f++) e[f] = Po(Ch(a, c), f);
        e = {
            pos: J(Ch(a, c), 0),
            terms: e
        };
        d[c] = e
    }
    return {
        sentences: b,
        src: J(a, 2),
        dict: d
    }
};
IM.prototype.tj = function(a, b, c, d, e) {
    this.X.setVisible(!1);
    this.ae = {};
    var f = ZM(e);
    if (this.m) {
        var g = this.m.w,
            h = this.m.Qa(),
            l = this.m.oa(),
            m = this.m.a;
        h === b && l === c && vc(d, m) || PM(this, m, g, h, l);
        h === b && l === c && vc(m, d) || (this.m = new AF(d, f, b, c))
    } else this.m = new AF(d, f, b, c);
    a || (PM(this, d, f, b, c), this.m = new AF(d, f, b, c));
    if (Dh(e, 7)) {
        a = J(lp(e), 1);
        g = Dl(lp(e), 5);
        h = this.X;
        l = J(lp(e), 0);
        m = aw(this.a.a);
        var q = lp(e);
        q = xl(q.Ra, 2);
        KG(h, {
            Zj: l,
            me: a,
            Hh: g,
            Ei: m,
            Zf: q,
            Qi: this.ma.a,
            result: e
        });
        this.X.C = !0
    }
    "auto" == this.ma.a && iw(this.ma,
        J(e, 2));
    a = this.ma;
    kw(a.a, a.o);
    kw(a.b, a.m);
    new Wo(e.Ra[8]);
    a = [];
    for (g = 0; g < I(new Wo(e.Ra[8]), 0); ++g) h = new Wo(e.Ra[8]), h = Fh(h, 0, g), a.push(h);
    ew(this.ma, a);
    a = this.ma;
    g = "auto" == a.a ? "" : a.a;
    h = qw(a.o, g);
    h.push(a.a);
    a.X = yb(h);
    h = h.concat(qw(a.L.a, g));
    a.ba.update(h);
    a = this.ma;
    g = qw(a.m, a.b);
    g.push(a.b);
    a.Y.update(g);
    T(document.body, "show-result");
    this.a.update(d, e, this.X.b);
    $u(e);
    this.h.update(d, f, b, c, e);
    B && JK(this.a);
    b = IL(this.h);
    this.rh ? (this.rh = !1, jG(this.ob, b, 0)) : NM(this);
    !this.na && D("tlid-debug-information",
        document.body) && (this.na = new XJ);
    if (this.na && (b = this.na, YJ(b), b.w && b.a && b.c && b.b && b.o && b.g && b.m && b.h && b.L && b.G && b.C)) {
        f = [];
        a = Jf("backend-models-used");
        g = Jf("backend-models-checksum");
        h = Jf("backend-models-launch-doc");
        if (e.ab(0))
            for (l = 0; l < e.cc(); l++) {
                m = e.ab(l);
                Dh(m, 0) && m.Nc() && f.push(Cl(m, 4, 0));
                if (0 < I(m, 5)) {
                    for (q = 0; q < I(m, 5); q++) ZJ(a, "https://cnsviewer.corp.google.com" + Fh(m, 5, q), Fh(m, 5, q));
                    a.appendChild(Yf("br"))
                }
                if (0 < I(m, 8)) {
                    for (q = 0; q < I(m, 8); q++) {
                        var r = new Sl((new Ul(El(m, 8, q))).Ra[0]);
                        ZJ(g, "http://go/bleu-eval-dashboard?fb=Checksum:in:" +
                            J(r, 0), J(r, 0));
                        "" != J(r, 1) && "TODO" != J(r, 1) ? ZJ(h, "https://g3doc.corp.google.com/nlp/nmt/models/g3doc/" + J(r, 1), J(r, 1)) : ZJ(h, "http://go/no-launch-doc-doc", "Temp_Doc")
                    }
                    g.appendChild(Yf("br"));
                    h.appendChild(Yf("br"))
                }
            }
        for (r = q = m = l = h = g = a = 0; r < f.length; r++) 0 === f[r] ? a++ : 3 === f[r] ? g++ : 4 === f[r] ? h++ : 1 === f[r] ? l++ : 2 === f[r] ? m++ : 10 === f[r] && q++;
        f = a + g;
        r = l + m;
        G(b.o, a.toString());
        G(b.g, g.toString());
        G(b.m, h.toString());
        G(b.b, f.toString());
        G(b.a, l.toString());
        G(b.c, m.toString());
        G(b.w, r.toString());
        G(b.h, q.toString())
    }
    b =
        this.G;
    f = J(e, 2);
    b.g.reset();
    b.g.push(d, f, c, e);
    this.Le = Tf(document).a;
    d = ba(this.Kb);
    for (b = d.next(); !b.done; b = d.next()) b.value.La();
    this.Kb = [];
    this.Kb.push(new aA(this.a.a.j(), "orig", 13, "webapp"));
    $M(this, this.Fd);
    $M(this, this.Ed);
    $M(this, this.hd);
    (d = D("show-panel", this.v)) && U(d, "show-panel");
    GA(this.L, !1);
    this.aa && qH(this.aa, J(e, 2), c)
};
var NM = function(a) {
        var b = IL(a.h);
        mG(a.ob, b, function(c) {
            OL(a.h, b, c);
            null != a.b ? c ? eJ(a.b.a, b) : rJ(a.b.a) : c && (a.Vb = b)
        })
    },
    PM = function(a, b, c, d, e) {
        var f = a.R;
        if (null == f.a) {
            var g = new AF(b, c, d, e);
            f.c.push(g)
        } else f.a && (g = new AF(b, c, d, e), f = f.a, yI(f, g), V(f.v, "empty", !1), zI(f, f.a.length));
        a.Fj(b, c, d, e)
    };
IM.prototype.Xl = function(a) {
    var b = this.h;
    a = 413 == a ? MSG_REQUEST_TOO_BIG : MSG_TRANSLATION_ERROR;
    T(b.b, "empty");
    T(b.b, "result-error");
    U(b.b, "translating");
    G(b.L, a);
    G(b.C, a);
    W(b.h, !0);
    W(b.g, !1)
};
var wt = function(a, b, c, d, e) {
    null != e && ul(a.K, e);
    a.a.a.b(d);
    if (b) {
        var f = void 0;
        "tws_lsugg" == e && (f = 3);
        a.ma.g(b, f);
        a.K.c = b;
        f = a.Za;
        iH(f, f.a, b)
    }
    c && ("auto" !== c && a.ma.h(c), c = a.ma.b, a.K.g = c, b = a.Za, iH(b, b.b, c));
    c = a.a.R;
    b = a.ma.a;
    f = a.ma.b;
    c.h = uD(d);
    c.b = b;
    c.c = f;
    lD(c);
    e && Mm(a.w, "source", e);
    a.Y(!1, e)
};
IM.prototype.mj = function(a) {
    null != this.b && MJ(this.b, a);
    a = this.R;
    null == a.a ? a.g = !0 : a.a && GI(a.a)
};
IM.prototype.rj = function(a, b) {
    OL(this.h, a, b);
    var c = this.R;
    if (null != c.a && c.a) {
        c = c.a;
        for (var d = 0; d < c.a.length; d++) {
            var e = c.a[d];
            EF(e.a, a) && e.Qg(b)
        }
    }
    if (null != this.b)
        if (b) b = this.b.a, c = HF(a), b.a.push(c), qJ(b, c) && b.h.push(c), gJ(b, b.N), cJ(b, BF(c), c.oa()), 1 === b.a.length && b.dispatchEvent("list_no_longer_empty"), this.h.a[0] && EF(IL(this.h), a) && eJ(this.b.a, a);
        else {
            b = this.b.a;
            d = !1;
            for (c = b.a.length - 1; 0 <= c; c--)
                if (e = b.a[c], EF(e, a)) {
                    d = oJ(e);
                    e = b.R[d];
                    b.b === e && (b.b = null);
                    ph(e);
                    delete b.R[d];
                    b.a.splice(c, 1);
                    d = !0;
                    e = b;
                    var f = BF(a),
                        g = a.oa(),
                        h = f + "|" + g,
                        l = e.m.get(h);
                    l && (1 === l ? (e.m.delete(h), e.dispatchEvent({
                        type: "language_pair_removed",
                        fb: f,
                        gb: g
                    })) : e.m.set(h, l - 1))
                }
            d && (b.L || (b.w && null != b.c && null != b.g ? iJ(b, b.c, b.g) : b.G ? hJ(b, b.C) : (a = b.o, 0 < b.o && b.o + 1 > lJ(b) && (a = b.o - 1), dJ(b, a))), 0 === kJ(b).length && b.dispatchEvent("last_displayed_entry_deleted"), 0 === b.a.length && (b.dispatchEvent("list_empty"), b.L && (b.b = null, dJ(b, 0), b.dispatchEvent("delete_all_complete"), b.L = !1)))
        } else b && (this.Vb = a)
};
IM.prototype.wj = function() {
    var a = this;
    Bi(function() {
        return aN(a)
    }, 0)
};
var aN = function(a) {
        var b = aw(a.a.a),
            c = a.ma.a,
            d = a.ma.b;
        if (Yu(b)) {
            var e = new Qm(n.location.href.split("#")[0]);
            Um(e, "translate");
            gn(e, "sl", [c ? c : "auto"]);
            gn(e, "tl", [d]);
            gn(e, "u", [b]);
            $d(e.toString())
        } else Mm(a.w, "source", "btn"), ul(a.K, "btn"), a.Y(!1), Bi(function() {
            lD(a.a.R)
        }, 0), n.scrollTo(0, 0), DATA.EnableSearchTooltip && a.Yl && PL(a.h)
    },
    HM = function(a) {
        var b = a.ma.a,
            c = a.ma.b;
        U(document.body, "show-result");
        KG(a.X, {
            me: ""
        });
        a.G.update("", b, c, new jp);
        ew(a.ma, null);
        a.a.update("", new jp, !1);
        b = a.h;
        LL(b, !1);
        NL(b, !0);
        HL(b);
        a.na && YJ(a.na)
    };
IM.prototype.qh = function() {
    null != this.b && rJ(this.b.a);
    HM(this)
};
IM.prototype.Y = function(a, b) {
    this.Om.reset(a);
    var c = aw(this.a.a),
        d = xc(le(c));
    this.K.G = c.substring(0, 64);
    this.K.a = null;
    var e = this.ma.a,
        f = this.ma.b;
    !ht() && a || "bh" === b || d && "ls" !== b || Bt(this.c, e, f, c, a);
    if (d) this.qh();
    else if (NA(this.L), b = new Ym(Pm(this.w)), b.g(new Ym(Zu())), b.add("kc", bw(this.a.a)), GA(this.L, !0), KL(this.h, 1), ym(this.F), up(this.Zc, e, f, DATA.DisplayLanguage, c, v(this.tj, this, a, e, f, c), !0, void 0, b, v(this.Xl, this)), a = !1, QM(this, c) ? (OM(this), a = !0) : c.length >= this.o.length && (a = !0), a && (this.o = c,
            this.Me = e, this.jd = f), DATA.CompareProdTrans) {
        a = Wm(b);
        a.add("internal", 1);
        a.add("expflags", "NMT__enable_nmt_level:0");
        b = new op("webapp", "https://translate.google.com");
        var g = this.$d;
        up(b, e, f, DATA.DisplayLanguage, c, function(h) {
            dg(g);
            W(g, !!h);
            if (h) {
                for (var l = [], m = 0; m < h.cc(); m++) l.push(h.ab(m).Nc());
                G(g, l.join(""))
            }
        }, !0, void 0, a)
    }
};
IM.prototype.Bn = function(a) {
    if (a && a.data && 0 < a.data.length) {
        a = a.data[0];
        var b = nI(a);
        if (b) {
            this.K.o = a;
            var c = this.Za;
            iH(c, c.a, a);
            KG(this.X, {
                me: b,
                Zg: a,
                Ei: aw(this.a.a),
                Qi: this.ma.a
            })
        }
    }
};
var EM = function(a, b, c, d, e, f, g, h) {
    var l = E(b, a.v);
    b = E("tlid-dismiss-promo", l);
    var m = E("tlid-accept-promo", l);
    d = "/translate/uc?ua=dismiss&uav=" + d;
    n.setTimeout(function() {
        T(l, "show-panel")
    }, 400);
    Jm(dI, "webapp", c, "show");
    qm(a.F, e);
    f();
    H(b, "click", v(a.Jj, a, l, d, c, e, g), !1, a);
    H(m, "click", v(a.Ij, a, l, d, c, e, h), !1, a)
};
IM.prototype.Ij = function(a, b, c, d, e) {
    rm(this.F, d);
    U(a, "show-panel");
    Im(this.w, b);
    Jm(dI, "webapp", c, "accept");
    e()
};
IM.prototype.Jj = function(a, b, c, d, e) {
    var f = this.F;
    N(f, pm(f, 74, d));
    U(a, "show-panel");
    Im(this.w, b);
    Jm(dI, "webapp", c, "dismiss");
    e()
};
IM.prototype.Bm = function(a) {
    Yd(n.location, a)
};
var DM = function(a, b, c) {
    EM(a, "at-promo", "atPromo", "at", c, Fa, Fa, v(a.Bm, a, b))
};
IM.prototype.Kj = function() {
    Bh("gsa", "gsaAd:accept", "", 1);
    gI(void 0, 0)
};
IM.prototype.oj = function() {
    bN(this, this.Fd);
    bN(this, this.Ed);
    bN(this, this.hd);
    return !1
};
var bN = function(a, b) {
        var c = b.j();
        if (null != c) {
            var d = iq(c).a;
            c = d + rq(c).height;
            c > n.innerHeight + a.Le && (cN(a, d, !0, b), cN(a, c, !1, b))
        }
    },
    cN = function(a, b, c, d) {
        var e = c ? "top" : "bot",
            f = d.Jb(),
            g = f + "_" + e,
            h = Tf(document).a;
        b > h && b < h + n.innerHeight && !a.ae[g] && (a.ae[g] = !0, a.w.log("card_scroll", {
            card: f,
            position: e
        }), a = a.F, b = d.Id(), e = d.jb(), N(a, cm(a, c ? 213 : 214, b, e, d.mc, 0)))
    },
    $M = function(a, b) {
        var c = b.j();
        c && a.Kb.push(new aA(c, b.Jb(), b.Id(), "webapp"))
    };
IM.prototype.Yn = function(a) {
    var b = Jf("gt-ntfcn-msg");
    b && (b.innerHTML = a, this.ph.setVisible(!0, 2E3))
};
IM.prototype.xj = function() {
    av(zt(this.c).toString())
};
var FM = function() {
        var a = window.gapi;
        a && a.load("client", function() {
            var b = a.client,
                c = a.config;
            c.update("googleapis.config/auth/useFirstPartyAuth", !0);
            c.update("googleapis.config/auth/useFirstPartyAuthV2", !0);
            c.update("client/xd4", !0);
            b.setApiKey("AIzaSyA8PX4bTrtr1-DtDsGJSbTXQkfWbWkCjTM")
        })
    },
    OM = function(a, b) {
        if ("" !== a.o) {
            var c = a.F,
                d = a.o,
                e = a.jd,
                f = a.dd,
                g = O(c, 246);
            C(g, 1, e);
            C(g, 74, d.length);
            C(g, 52, d.substring(0, 64));
            d = new Mk;
            C(d, 1, f);
            mf(g, 70, d);
            N(c, g);
            64 < a.o.length && (a.o = a.o.substr(0, 64));
            c = {
                sl: a.Me,
                tl: a.jd,
                ql: a.o.length,
                q: a.o,
                pc: a.dd
            };
            b && (c[b] = 1);
            a.dd = a.ee;
            a.ee = 0;
            a.w.log("fq", c);
            a.o = ""
        }
    },
    QM = function(a, b) {
        return "" !== a.o && b[0] !== a.o[0] && b[b.length - 1] !== a.o[a.o.length - 1]
    },
    AM = function(a) {
        if (DATA.FeatureStickiness) {
            var b = JSON.parse(DATA.FeatureStickiness);
            null != b || (b = []);
            b = new iM(b);
            if (Dh(b, 2)) {
                a = a.mo;
                b = new cM(b.Ra[2]);
                a.a = {};
                a.a["gt-input-tool"] = new Xy;
                for (var c, d = 0; d < I(b, 3); ++d)
                    if (c = new ZL(El(b, 3, d)), 0 == !!Dl(c, 1))
                        for (var e in a.a) a.a[e].update(J(c, 0), !1, "");
                a.c = {};
                for (d = 0; d < I(b, 1); ++d) c = new ZL(El(b, 1,
                    d)), a.c[J(c, 0)] = !!Dl(c, 1);
                a.b = {};
                for (d = 0; d < I(b, 2); ++d) c = new ZL(El(b, 2, d)), a.b[J(c, 0)] = !!Dl(c, 1);
                for (d = 0; d < I(b, 9); ++d) e = new aM(El(b, 9, d)), (Dh(e, 3) ? az(a, J(e, 3), !0) : az(a, "gt-input-tool", !0)).update(J(e, 0), Dl(e, 1), J(e, 2))
            }
        }
    };
var dN = {},
    eN = null,
    fN = function(a, b, c) {
        if (a = dN[c]) "history" == a.o ? (b = a.c, N(b, Bm(b, 61, nL(a), null != a.b && a.b.b))) : "saved" == a.o && (dI.log("sli=sl", {}), b = a.c, N(b, Dm(b, 48))), a.dispatchEvent({
            type: "translate_requested",
            fb: a.a.Qa(),
            gb: a.a.oa(),
            text: a.a.a
        }), fI("populate", c, a.a.Qa(), a.a.oa(), a.a.a)
    },
    gN = QA("translate");
var uy = null,
    hN = null,
    vM = DATA.MaybeDefaultSourceLanguageCode || "auto",
    wM = DATA.MaybeDefaultTargetLanguageCode,
    jN = function() {
        var a = new ii(function(c) {
                yF(function() {
                    c()
                })
            }),
            b = new ii(function(c) {
                Ay(function(d, e) {
                    d ? (uy = e, iN(c)) : c()
                })
            });
        oi([b, a])
    },
    iN = function(a) {
        yy(uy.a, null, null, null, 100, function(b, c) {
            if (b) {
                b = [];
                for (var d = c.length - 1; 0 <= d; d--) {
                    var e = c[d],
                        f = e.sl,
                        g = e.tl,
                        h = e.src;
                    e = e.trg;
                    0 == d && (vM = f, wM = g);
                    b.push({
                        sl: f,
                        tl: g,
                        orig: h,
                        result: e
                    })
                }
                c = hN.R;
                if (c.a) {
                    d = [];
                    for (f = 0; f < b.length; f++) g = b[f], d.push(new AF(g.orig,
                        g.result, g.sl, g.tl));
                    AI(c.a, d)
                }
            }
            a()
        })
    },
    xM = function(a, b, c, d) {
        uy && wy(c, d, a, b)
    },
    yM = function() {
        uy && vy(uy.a, void 0, void 0, void 0, void 0)
    };
za("init", function() {
    var a = new hH;
    iH(a, a.c, DATA.DisplayLanguage);
    iH(a, a.a, vM);
    iH(a, a.b, wM);
    var b = Yf("INPUT");
    b.id = "history-input";
    W(b, !1);
    var c = Yf("IFRAME");
    c.id = "history-frame";
    c.src = "about:blank";
    W(c, !1);
    document.body.appendChild(b);
    document.body.appendChild(c);
    b = new vt(!0, b, c);
    hN = new IM(a, b);
    document.body.appendChild(hN.j());
    eN || (eN = new eB(null, "TranslationItem"), gB(eN, gN, fN), fB.a.push(eN));
    rB || (rB = new eB(null, "LanguageListItem"), gB(rB, lB, qB), gB(rB, sB, yB), fB.a.push(rB));
    window.location.hash.substr(1) &&
        MM(hN, window.location.hash.substr(1));
    b.b.qa(!0);
    jN();
    DATA.UserInputQuery && wt(hN, vM, wM, DATA.UserInputQuery)
});
if (window.jstiming) {
    window.jstiming.ie = {};
    window.jstiming.Vg = 1;
    var kN = function(a, b, c) {
            var d = a.t[b],
                e = a.t.start;
            if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
        },
        lN = function(a, b, c) {
            var d = "";
            window.jstiming.srt && (d += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
            window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
            try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" +
                    window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (r) {}
            var e = window.chrome;
            if (e && (e = e.loadTimes)) {
                e().wasFetchedViaSpdy && (d += "&p=s");
                if (e().wasNpnNegotiated) {
                    d += "&npn=1";
                    var f = e().npnNegotiatedProtocol;
                    f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                }
                e().wasAlternateProtocolAvailable && (d += "&apa=1")
            }
            var g = a.t,
                h = g.start;
            e = [];
            f = [];
            for (var l in g)
                if ("start" != l && 0 != l.indexOf("_")) {
                    var m = g[l][1];
                    m ? g[m] && f.push(l + "." + kN(a, l, g[m][0])) : h && e.push(l + "." +
                        kN(a, l))
                }
            delete g.start;
            if (b)
                for (var q in b) d += "&" + q + "=" + b[q];
            (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            return [b, "?v=3", "&s=" + (window.jstiming.sn || "translate_mobileweb") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
        },
        mN = function(a, b, c) {
            a = lN(a, b, c);
            if (!a) return "";
            b = new Image;
            var d = window.jstiming.Vg++;
            window.jstiming.ie[d] = b;
            b.onload = b.onerror = function() {
                window.jstiming && delete window.jstiming.ie[d]
            };
            b.src = a;
            b = null;
            return a
        };
    window.jstiming.report = function(a, b, c) {
        var d = document.visibilityState,
            e = "visibilitychange";
        d || (d = document.webkitVisibilityState, e = "webkitvisibilitychange");
        if ("prerender" == d) {
            var f = !1,
                g = function() {
                    if (!f) {
                        b ? b.prerender = "1" : b = {
                            prerender: "1"
                        };
                        if ("prerender" == (document.visibilityState || document.webkitVisibilityState)) var h = !1;
                        else mN(a, b, c), h = !0;
                        h && (f = !0, document.removeEventListener(e, g, !1))
                    }
                };
            document.addEventListener(e, g, !1);
            return ""
        }
        return mN(a, b, c)
    }
};