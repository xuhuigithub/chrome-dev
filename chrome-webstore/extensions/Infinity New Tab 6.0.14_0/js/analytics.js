! function() {
    function t(t, e) {
        return t.href = e
    }

    function e(t, e) {
        return t.name = e
    }

    function n(t) {
        Tt.set(t)
    }

    function i(t) {
        return "function" == typeof t
    }

    function r(t) {
        return "[object Array]" == Object[pt].toString[bt](Object(t))
    }

    function a(t) {
        return void 0 != t && -1 < (t.constructor + "")[ht]("String")
    }

    function o(t, e) {
        return 0 == t[ht](e)
    }

    function s(t) {
        return t ? t[q](/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
    }

    function c() {
        return [Kt() ^ 2147483647 & Gt(), z.round((new Date)[K]() / 1e3)][xt](".")
    }

    function u(t) {
        var e = Pt[W]("img");
        return e.width = 1, e.height = 1, e.src = t, e
    }

    function f() {}

    function v(t) {
        return G instanceof Function ? G(t) : (n(28), t)
    }

    function h(t) {
        return v(t)[q](/\(/g, "%28")[q](/\)/g, "%29")
    }

    function d(t, e) {
        if (t) {
            var n = Pt[W]("script");
            n.type = "text/javascript", n.async = !0, n.src = t, n.id = e;
            var i = Pt.getElementsByTagName("script")[0];
            i[St].insertBefore(n, i)
        }
    }

    function l() {
        return ve || "https:" == Pt[Z][it] ? "https:" : "http:"
    }

    function g() {
        var t = "" + Pt[Z][et];
        return 0 == t[ht]("www.") ? t[_t](4) : t
    }

    function p(t) {
        var e = Pt.referrer;
        if (/^https?:\/\//i [ut](e)) {
            if (t) return e;
            t = "//" + Pt[Z][et];
            var n = e[ht](t);
            if ((5 == n || 6 == n) && (t = e[M](n + t[gt]), "/" == t || "?" == t || "" == t || ":" == t)) return;
            return e
        }
    }

    function m(t, e) {
        if (1 == e[gt] && null != e[0] && "object" == typeof e[0]) return e[0];
        for (var n = {}, i = z.min(t[gt] + 1, e[gt]), r = 0; r < i; r++) {
            if ("object" == typeof e[r]) {
                for (var a in e[r]) e[r][tt](a) && (n[a] = e[r][a]);
                break
            }
            r < t[gt] && (n[t[r]] = e[r])
        }
        return n
    }

    function w(t) {
        if (100 != t.get(Nn) && O(te(t, kn)) % 1e4 >= 100 * ee(t, Nn)) throw "abort"
    }

    function b(t) {
        if (Rt(te(t, xn))) throw "abort"
    }

    function y() {
        var t = Pt[Z][it];
        if ("chrome-extension:" != t && "http:" != t && "https:" != t) throw "abort"
    }

    function _(t) {
        try {
            It.XMLHttpRequest && "withCredentials" in new It.XMLHttpRequest ? n(40) : It.XDomainRequest && n(41), It[kt].sendBeacon && n(42)
        } catch (e) {}
        t.set(be, ee(t, be) + 1);
        var i = [];
        if (Qt.map(function(e, n) {
                if (n.p) {
                    var r = t.get(e);
                    void 0 != r && r != n[dt] && ("boolean" == typeof r && (r *= 1), i[st](n.p + "=" + v("" + r)))
                }
            }), zn(new Un(1e4))) {
            var r = [];
            r[st](Wt()), r[st][ot](r, c()[Q](".")), r[st](Yt()), r[st](r[0] | r[1] | r[2] | r[3]), i[st]("z=" + r[xt]("."))
        } else i[st]("z=" + Yt());
        t.set(me, i[xt]("&"), !0)
    }

    function k(t) {
        var e = te(t, On) || $t() + "/collect";
        qt(e, te(t, me), t.get(pe), t.get(we)), t.set(pe, f, !0)
    }

    function S(t) {
        var e = It.gaData;
        e && (e.expId && t.set(Ye, e.expId), e.expVar && t.set(Ke, e.expVar))
    }

    function x() {
        if (It[kt] && "preview" == It[kt].loadPurpose) throw "abort"
    }

    function j(t) {
        var e = It.gaDevIds;
        r(e) && 0 != e[gt] && t.set("&did", e[xt](","), !0)
    }

    function T(t) {
        if (!t.get(xn)) throw "abort"
    }

    function E(t) {
        var e = ee(t, tn);
        500 <= e && n(15);
        var i = te(t, ge);
        if ("transaction" != i && "item" != i) {
            var i = ee(t, nn),
                r = (new Date)[K](),
                a = ee(t, en);
            if (0 == a && t.set(en, r), a = z.round(2 * (r - a) / 1e3), 0 < a && (i = z.min(i + a, 20), t.set(en, r)), 0 >= i) throw "abort";
            t.set(nn, --i)
        }
        t.set(tn, ++e)
    }

    function A(t, e, i, r) {
        e[t] = function() {
            try {
                return r && n(r), i[ot](this, arguments)
            } catch (e) {
                var a = e && e[lt];
                if (!(1 <= 100 * z.random() || Rt("?"))) {
                    var o = ["t=error", "_e=exc", "_v=j26", "sr=1"];
                    t && o[st]("_f=" + t), a && o[st]("_m=" + v(a[_t](0, 100))), o[st]("aip=1"), o[st]("z=" + Kt()), qt($t() + "/collect", o[xt]("&"))
                }
                throw e
            }
        }
    }

    function L() {
        var t, e, n;
        if ((n = (n = It[kt]) ? n.plugins : null) && n[gt])
            for (var i = 0; i < n[gt] && !e; i++) {
                var r = n[i]; - 1 < r[lt][ht]("Shockwave Flash") && (e = r.description)
            }
        if (!e) try {
            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), e = t.GetVariable("$version")
        } catch (a) {}
        if (!e) try {
            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", t.AllowScriptAccess = "always", e = t.GetVariable("$version")
        } catch (o) {}
        if (!e) try {
            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), e = t.GetVariable("$version")
        } catch (s) {}
        return e && (t = e[X](/[\d]+/g)) && 3 <= t[gt] && (e = t[0] + "." + t[1] + " r" + t[2]), e || void 0
    }

    function I(t, e, n) {
        "none" == e && (e = "");
        var i = [],
            r = Nt(t);
        t = "__utma" == t ? 6 : 2;
        for (var a = 0; a < r[gt]; a++) {
            var o = ("" + r[a])[Q](".");
            o[gt] >= t && i[st]({
                hash: o[0],
                R: r[a],
                O: o
            })
        }
        return 0 == i[gt] ? void 0 : 1 == i[gt] ? i[0] : P(e, i) || P(n, i) || P(null, i) || i[0]
    }

    function P(t, e) {
        var n, i;
        null == t ? n = i = 1 : (n = O(t), i = O(o(t, ".") ? t[_t](1) : "." + t));
        for (var r = 0; r < e[gt]; r++)
            if (e[r][ct] == n || e[r][ct] == i) return e[r]
    }

    function R(t) {
        t = t.get(kn);
        var e = C(t, 0);
        return "_ga=1." + v(e + "." + t)
    }

    function C(t, e) {
        for (var n = new Date, i = It[kt], r = i.plugins || [], n = [t, i.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + e], i = 0; i < r[gt]; ++i) n[st](r[i].description);
        return O(n[xt]("."))
    }

    function N(t, e) {
        if (e == Pt[Z][et]) return !1;
        for (var n = 0; n < t[gt]; n++)
            if (t[n] instanceof RegExp) {
                if (t[n][ut](e)) return !0
            } else if (0 <= e[ht](t[n])) return !0;
        return !1
    }

    function V() {
        var t = It.gaGlobal = It.gaGlobal || {};
        return t.hid = t.hid || Kt()
    }

    function D(t) {
        return 0 <= t[ht](".") || 0 <= t[ht](":")
    }

    function O(t) {
        var e, n = 1,
            i = 0;
        if (t)
            for (n = 0, e = t[gt] - 1; 0 <= e; e--) i = t.charCodeAt(e), n = (n << 6 & 268435455) + i + (i << 14), i = 266338304 & n, n = 0 != i ? n ^ i >> 21 : n;
        return n
    }
    var G = encodeURIComponent,
        $ = window,
        U = setTimeout,
        z = Math,
        q = "replace",
        F = "data",
        M = "charAt",
        X = "match",
        H = "send",
        B = "port",
        W = "createElement",
        Y = "setAttribute",
        K = "getTime",
        J = "host",
        Q = "split",
        Z = "location",
        tt = "hasOwnProperty",
        et = "hostname",
        nt = "search",
        it = "protocol",
        rt = "href",
        at = "action",
        ot = "apply",
        st = "push",
        ct = "hash",
        ut = "test",
        ft = "slice",
        vt = "cookie",
        ht = "indexOf",
        dt = "defaultValue",
        lt = "name",
        gt = "length",
        pt = "prototype",
        mt = "clientWidth",
        wt = "target",
        bt = "call",
        yt = "clientHeight",
        _t = "substring",
        kt = "navigator",
        St = "parentNode",
        xt = "join",
        jt = "toLowerCase",
        Tt = new function() {
            var t = [];
            this.set = function(e) {
                t[e] = !0
            }, this.M = function() {
                for (var e = [], n = 0; n < t[gt]; n++) t[n] && (e[z.floor(n / 6)] = e[z.floor(n / 6)] ^ 1 << n % 6);
                for (n = 0; n < e[gt]; n++) e[n] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_" [M](e[n] || 0);
                return e[xt]("") + "~"
            }
        },
        Et = function(t, e, i, r) {
            try {
                t.addEventListener ? t.addEventListener(e, i, !!r) : t.attachEvent && t.attachEvent("on" + e, i)
            } catch (a) {
                n(27)
            }
        },
        At = function(t, e, n) {
            t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && t.detachEvent("on" + e, n)
        },
        Lt = function() {
            this.keys = [], this.w = {}, this.m = {}
        };
    Lt[pt].set = function(t, e, n) {
        this.keys[st](t), n ? this.m[":" + t] = e : this.w[":" + t] = e
    }, Lt[pt].get = function(t) {
        return this.m[tt](":" + t) ? this.m[":" + t] : this.w[":" + t]
    }, Lt[pt].map = function(t) {
        for (var e = 0; e < this.keys[gt]; e++) {
            var n = this.keys[e],
                i = this.get(n);
            i && t(n, i)
        }
    };
    var It = $,
        Pt = document,
        Rt = function(t) {
            var e = It._gaUserPrefs;
            if (e && e.ioo && e.ioo() || t && !0 === It["ga-disable-" + t]) return !0;
            try {
                var n = It.external;
                if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return !0
            } catch (i) {}
            return !1
        },
        Ct = function(t) {
            U(t, 100)
        },
        Nt = function(t) {
            var e = [],
                n = Pt[vt][Q](";");
            t = new RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$");
            for (var i = 0; i < n[gt]; i++) {
                var r = n[i][X](t);
                r && e[st](r[1])
            }
            return e
        },
        Vt = function(t, e, i, r, a, o) {
            if (a = !Rt(a) && !(Ot[ut](Pt[Z][et]) || "/" == i && Dt[ut](r)), !a) return !1;
            if (e && 1200 < e[gt] && (e = e[_t](0, 1200), n(24)), i = t + "=" + e + "; path=" + i + "; ", o && (i += "expires=" + new Date((new Date)[K]() + o).toGMTString() + "; "), r && "none" != r && (i += "domain=" + r + ";"), r = Pt[vt], Pt.cookie = i, !(r = r != Pt[vt])) t: {
                for (t = Nt(t), r = 0; r < t[gt]; r++)
                    if (e == t[r]) {
                        r = !0;
                        break t
                    }
                r = !1
            }
            return r
        },
        Dt = new RegExp(/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/),
        Ot = new RegExp(/(^|\.)doubleclick\.net$/i),
        Gt = function() {
            for (var t = It[kt], t = t.appName + t.version + t.platform + t.userAgent + (Pt[vt] ? Pt[vt] : "") + (Pt.referrer ? Pt.referrer : ""), e = t[gt], n = It.history[gt]; 0 < n;) t += n-- ^ e++;
            return O(t)
        },
        $t = function() {
            return l() + "//www.google-analytics.com"
        },
        Ut = function(t) {
            e(this, "len"), this.message = t + "-8192"
        },
        zt = function(t) {
            e(this, "ff2post"), this.message = t + "-2036"
        },
        qt = function(t, e, n, i) {
            if (n = n || f, i && (i = n, It[kt].sendBeacon && It[kt].sendBeacon(t, e) ? (i(), i = !0) : i = !1), !i)
                if (2036 >= e[gt]) Ft(t, e, n);
                else {
                    if (!(8192 >= e[gt])) throw new Ut(e[gt]);
                    if (0 <= It[kt].userAgent[ht]("Firefox") && ![].reduce) throw new zt(e[gt]);
                    Xt(t, e, n) || Mt(t, e, n) || Ht(e, n) || n()
                }
        },
        Ft = function(t, e, n) {
            var i = u(t + "?" + e);
            i.onload = i.onerror = function() {
                i.onload = null, i.onerror = null, n()
            }
        },
        Mt = function(t, e, n) {
            var i;
            return !!(i = It.XDomainRequest) && (i = new i, i.open("POST", t), i.onerror = function() {
                n()
            }, i.onload = n, i[H](e), !0)
        },
        Xt = function(t, e, n) {
            var i = It.XMLHttpRequest;
            if (!i) return !1;
            var r = new i;
            return "withCredentials" in r && (r.open("POST", t, !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "text/plain"), r.onreadystatechange = function() {
                4 == r.readyState && (n(), r = null)
            }, r[H](e), !0)
        },
        Ht = function(t, n) {
            if (!Pt.body) return Ct(function() {
                Ht(t, n)
            }), !0;
            t = G(t);
            try {
                var i = Pt[W]('<iframe name="' + t + '"></iframe>')
            } catch (r) {
                i = Pt[W]("iframe"), e(i, t)
            }
            i.height = "0", i.width = "0", i.style.display = "none", i.style.visibility = "hidden";
            var a = Pt[Z],
                a = $t() + "/analytics_iframe.html#" + G(a[it] + "//" + a[J] + "/favicon.ico"),
                o = function() {
                    i.src = "", i[St] && i[St].removeChild(i)
                };
            Et(It, "beforeunload", o);
            var s = !1,
                c = 0,
                u = function() {
                    if (!s) {
                        try {
                            if (9 < c || i.contentWindow[Z][J] == Pt[Z][J]) return s = !0, o(), At(It, "beforeunload", o), void n()
                        } catch (t) {}
                        c++, U(u, 200)
                    }
                };
            return Et(i, "load", u), Pt.body.appendChild(i), i.src = a, !0
        },
        Bt = function() {
            this.t = []
        };
    Bt[pt].add = function(t) {
        this.t[st](t)
    }, Bt[pt].D = function(t) {
        try {
            for (var e = 0; e < this.t[gt]; e++) {
                var n = t.get(this.t[e]);
                n && i(n) && n[bt](It, t)
            }
        } catch (r) {}
        e = t.get(pe), e != f && i(e) && (t.set(pe, f, !0), U(e, 10))
    };
    var Wt = function() {
            return z.round(2147483647 * z.random())
        },
        Yt = function() {
            try {
                var t = new Uint32Array(1);
                return It.crypto.getRandomValues(t), 2147483647 & t[0]
            } catch (e) {
                return Wt()
            }
        },
        Kt = Wt,
        Jt = function() {
            this.data = new Lt
        },
        Qt = new Lt,
        Zt = [];
    Jt[pt].get = function(t) {
        var e = re(t),
            n = this[F].get(t);
        return e && void 0 == n && (n = i(e[dt]) ? e[dt]() : e[dt]), e && e.n ? e.n(this, t, n) : n
    };
    var te = function(t, e) {
            var n = t.get(e);
            return void 0 == n ? "" : "" + n
        },
        ee = function(t, e) {
            var n = t.get(e);
            return void 0 == n || "" === n ? 0 : 1 * n
        };
    Jt[pt].set = function(t, e, n) {
        if (t)
            if ("object" == typeof t)
                for (var i in t) t[tt](i) && ne(this, i, t[i], n);
            else ne(this, t, e, n)
    };
    var ne = function(t, e, n, i) {
            if (void 0 != n) switch (e) {
                case xn:
                    _i[ut](n)
            }
            var r = re(e);
            r && r.o ? r.o(t, e, n, i) : t[F].set(e, n, i)
        },
        ie = function(t, n, i, r, a) {
            e(this, t), this.p = n, this.n = r, this.o = a, this.defaultValue = i
        },
        re = function(t) {
            var e = Qt.get(t);
            if (!e)
                for (var n = 0; n < Zt[gt]; n++) {
                    var i = Zt[n],
                        r = i[0].exec(t);
                    if (r) {
                        e = i[1](r), Qt.set(e[lt], e);
                        break
                    }
                }
            return e
        },
        ae = function(t) {
            var e;
            return Qt.map(function(n, i) {
                i.p == t && (e = i)
            }), e && e[lt]
        },
        oe = function(t, e, n, i, r) {
            return t = new ie(t, e, n, i, r), Qt.set(t[lt], t), t[lt]
        },
        se = function(t, e) {
            Zt[st]([new RegExp("^" + t + "$"), e])
        },
        ce = function(t, e, n) {
            return oe(t, e, n, void 0, ue)
        },
        ue = function() {},
        fe = a($.GoogleAnalyticsObject) && s($.GoogleAnalyticsObject) || "ga",
        ve = !1,
        he = ce("apiVersion", "v"),
        de = ce("clientVersion", "_v");
    oe("anonymizeIp", "aip");
    var le = oe("adSenseId", "a"),
        ge = oe("hitType", "t"),
        pe = oe("hitCallback"),
        me = oe("hitPayload");
    oe("nonInteraction", "ni"), oe("currencyCode", "cu");
    var we = oe("useBeacon", void 0, !1);
    oe("sessionControl", "sc", ""), oe("sessionGroup", "sg"), oe("queueTime", "qt");
    var be = oe("_s", "_s");
    oe("screenName", "cd");
    var ye = oe("location", "dl", ""),
        _e = oe("referrer", "dr"),
        ke = oe("page", "dp", "");
    oe("hostname", "dh");
    var Se = oe("language", "ul"),
        xe = oe("encoding", "de");
    oe("title", "dt", function() {
        return Pt.title || void 0
    }), se("contentGroup([0-9]+)", function(t) {
        return new ie(t[0], "cg" + t[1])
    });
    var je = oe("screenColors", "sd"),
        Te = oe("screenResolution", "sr"),
        Ee = oe("viewportSize", "vp"),
        Ae = oe("javaEnabled", "je"),
        Le = oe("flashVersion", "fl");
    oe("campaignId", "ci"), oe("campaignName", "cn"), oe("campaignSource", "cs"), oe("campaignMedium", "cm"), oe("campaignKeyword", "ck"), oe("campaignContent", "cc");
    var Ie = oe("eventCategory", "ec"),
        Pe = oe("eventAction", "ea"),
        Re = oe("eventLabel", "el"),
        Ce = oe("eventValue", "ev"),
        Ne = oe("socialNetwork", "sn"),
        Ve = oe("socialAction", "sa"),
        De = oe("socialTarget", "st"),
        Oe = oe("l1", "plt"),
        Ge = oe("l2", "pdt"),
        $e = oe("l3", "dns"),
        Ue = oe("l4", "rrt"),
        ze = oe("l5", "srt"),
        qe = oe("l6", "tcp"),
        Fe = oe("l7", "dit"),
        Me = oe("l8", "clt"),
        Xe = oe("timingCategory", "utc"),
        He = oe("timingVar", "utv"),
        Be = oe("timingLabel", "utl"),
        We = oe("timingValue", "utt");
    oe("appName", "an"), oe("appVersion", "av", ""), oe("appId", "aid", ""), oe("appInstallerId", "aiid", ""), oe("exDescription", "exd"), oe("exFatal", "exf");
    var Ye = oe("expId", "xid"),
        Ke = oe("expVar", "xvar"),
        Je = oe("_utma", "_utma"),
        Qe = oe("_utmz", "_utmz"),
        Ze = oe("_utmht", "_utmht"),
        tn = oe("_hc", void 0, 0),
        en = oe("_ti", void 0, 0),
        nn = oe("_to", void 0, 20);
    se("dimension([0-9]+)", function(t) {
        return new ie(t[0], "cd" + t[1])
    }), se("metric([0-9]+)", function(t) {
        return new ie(t[0], "cm" + t[1])
    }), oe("linkerParam", void 0, void 0, R, ue);
    var rn = oe("usage", "_u", void 0, function() {
        return Tt.M()
    }, ue);
    oe("forceSSL", void 0, void 0, function() {
        return ve
    }, function(t, e, i) {
        n(34), ve = !!i
    });
    var an = oe("_j1", "jid"),
        on = oe("_j2", "gjid");
    se("\\&(.*)", function(t) {
        var e = new ie(t[0], t[1]),
            n = ae(t[0][_t](1));
        return n && (e.n = function(t) {
            return t.get(n)
        }, e.o = function(t, e, i, r) {
            t.set(n, i, r)
        }, e.p = void 0), e
    });
    var sn = ce("_oot"),
        cn = oe("previewTask"),
        un = oe("checkProtocolTask"),
        fn = oe("validationTask"),
        vn = oe("checkStorageTask"),
        hn = oe("historyImportTask"),
        dn = oe("samplerTask"),
        ln = ce("_rlt"),
        gn = oe("buildHitTask"),
        pn = oe("sendHitTask"),
        mn = oe("ceTask"),
        wn = oe("devIdTask"),
        bn = oe("timingTask"),
        yn = oe("displayFeaturesTask"),
        _n = ce("name"),
        kn = ce("clientId", "cid"),
        Sn = oe("userId", "uid"),
        xn = ce("trackingId", "tid"),
        jn = ce("cookieName", void 0, "_ga"),
        Tn = ce("cookieDomain"),
        En = ce("cookiePath", void 0, "/"),
        An = ce("cookieExpires", void 0, 63072e3),
        Ln = ce("legacyCookieDomain"),
        In = ce("legacyHistoryImport", void 0, !0),
        Pn = ce("storage", void 0, "cookie"),
        Rn = ce("allowLinker", void 0, !1),
        Cn = ce("allowAnchor", void 0, !0),
        Nn = ce("sampleRate", "sf", 100),
        Vn = ce("siteSpeedSampleRate", void 0, 1),
        Dn = ce("alwaysSendReferrer", void 0, !1),
        On = oe("transportUrl"),
        Gn = oe("_r", "_r"),
        $n = oe("_dfr", void 0, 100),
        Un = function(t) {
            this.V = t, this.fa = void 0, this.$ = !1, this.ha = void 0, this.ea = 1
        },
        zn = function(t, e, n) {
            if (t.fa && t.$) return 0;
            if (t.$ = !0, e) {
                if (t.ha && ee(e, t.ha)) return ee(e, t.ha);
                if (0 == e.get(Vn)) return 0
            }
            return 0 == t.V ? 0 : (void 0 === n && (n = Yt()), 0 == n % t.V ? z.floor(n / t.V) % t.ea + 1 : 0)
        },
        qn = function(t, e) {
            var n = z.min(ee(t, Vn), 100);
            if (!(O(te(t, kn)) % 100 >= n) && (n = {}, Fn(n) || Mn(n))) {
                var i = n[Oe];
                void 0 == i || 1 / 0 == i || isNaN(i) || (0 < i ? (Xn(n, $e), Xn(n, qe), Xn(n, ze), Xn(n, Ge), Xn(n, Ue), Xn(n, Fe), Xn(n, Me), e(n)) : Et(It, "load", function() {
                    qn(t, e)
                }, !1))
            }
        },
        Fn = function(t) {
            var e = It.performance || It.webkitPerformance,
                e = e && e.timing;
            if (!e) return !1;
            var n = e.navigationStart;
            return 0 != n && (t[Oe] = e.loadEventStart - n, t[$e] = e.domainLookupEnd - e.domainLookupStart, t[qe] = e.connectEnd - e.connectStart, t[ze] = e.responseStart - e.requestStart, t[Ge] = e.responseEnd - e.responseStart, t[Ue] = e.fetchStart - n, t[Fe] = e.domInteractive - n, t[Me] = e.domContentLoadedEventStart - n, !0)
        },
        Mn = function(t) {
            if (It.top != It) return !1;
            var e = It.external,
                n = e && e.onloadT;
            return e && !e.isValidLoadTime && (n = void 0), 2147483648 < n && (n = void 0), 0 < n && e.setPageReadyTime(), void 0 != n && (t[Oe] = n, !0)
        },
        Xn = function(t, e) {
            var n = t[e];
            (isNaN(n) || 1 / 0 == n || 0 > n) && (t[e] = void 0)
        },
        Hn = function(t) {
            return function(e) {
                "pageview" != e.get(ge) || t.I || (t.I = !0, qn(e, function(e) {
                    t[H]("timing", e)
                }))
            }
        },
        Bn = !1,
        Wn = function(t) {
            if ("cookie" == te(t, Pn)) {
                var e = te(t, jn),
                    i = Jn(t),
                    r = ei(te(t, En)),
                    a = Zn(te(t, Tn)),
                    o = 1e3 * ee(t, An),
                    s = te(t, xn);
                if ("auto" != a) Vt(e, i, r, a, s, o) && (Bn = !0);
                else {
                    n(32);
                    var c;
                    if (i = [], a = g()[Q]("."), 4 != a[gt] || (c = a[a[gt] - 1], parseInt(c, 10) != c)) {
                        for (c = a[gt] - 2; 0 <= c; c--) i[st](a[ft](c)[xt]("."));
                        i[st]("none"), c = i
                    } else c = ["none"];
                    for (var u = 0; u < c[gt]; u++)
                        if (a = c[u], t[F].set(Tn, a), i = Jn(t), Vt(e, i, r, a, s, o)) return 1 == ti(a) && n(36), "none" == a && n(37), void(Bn = !0);
                    t[F].set(Tn, "auto")
                }
            }
        },
        Yn = function(t) {
            if ("cookie" == te(t, Pn) && !Bn && (Wn(t), !Bn)) throw "abort"
        },
        Kn = function(t) {
            if (t.get(In)) {
                var e = te(t, Tn),
                    i = te(t, Ln) || g(),
                    r = I("__utma", i, e);
                r && (n(19), t.set(Ze, (new Date)[K](), !0), t.set(Je, r.R), (e = I("__utmz", i, e)) && r[ct] == e[ct] && t.set(Qe, e.R))
            }
        },
        Jn = function(t) {
            var e = h(te(t, kn)),
                n = ti(te(t, Tn));
            return t = ni(te(t, En)), 1 < t && (n += "-" + t), ["GA1", n, e][xt](".")
        },
        Qn = function(t, e, n) {
            for (var i, r = [], a = [], o = 0; o < t[gt]; o++) {
                var s = t[o];
                s.r[n] == e ? r[st](s) : void 0 == i || s.r[n] < i ? (a = [s], i = s.r[n]) : s.r[n] == i && a[st](s)
            }
            return 0 < r[gt] ? r : a
        },
        Zn = function(t) {
            return 0 == t[ht](".") ? t.substr(1) : t
        },
        ti = function(t) {
            return Zn(t)[Q](".")[gt]
        },
        ei = function(t) {
            return t ? (1 < t[gt] && t.lastIndexOf("/") == t[gt] - 1 && (t = t.substr(0, t[gt] - 1)), 0 != t[ht]("/") && (t = "/" + t), t) : "/"
        },
        ni = function(t) {
            return t = ei(t), "/" == t ? 1 : t[Q]("/")[gt]
        },
        ii = new RegExp(/^https?:\/\/([^\/:]+)/),
        ri = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,
        ai = function(t) {
            n(48), this.target = t, this.T = !1
        };
    ai[pt].Q = function(e, n) {
        if (e.tagName) {
            if ("a" == e.tagName[jt]()) return void(e[rt] && t(e, oi(this, e[rt], n)));
            if ("form" == e.tagName[jt]()) return si(this, e)
        }
        if ("string" == typeof e) return oi(this, e, n)
    };
    var oi = function(t, e, n) {
            var i = ri.exec(e);
            i && 3 <= i[gt] && (e = i[1] + (i[3] ? i[2] + i[3] : "")), t = t[wt].get("linkerParam");
            var r = e[ht]("?"),
                i = e[ht]("#");
            return n ? e += (-1 == i ? "#" : "&") + t : (n = -1 == r ? "?" : "&", e = -1 == i ? e + (n + t) : e[_t](0, i) + n + t + e[_t](i)), e
        },
        si = function(t, e) {
            if (e && e[at]) {
                var n = t[wt].get("linkerParam")[Q]("=")[1];
                if ("get" == e.method[jt]()) {
                    for (var i = e.childNodes || [], r = 0; r < i[gt]; r++)
                        if ("_ga" == i[r][lt]) return void i[r][Y]("value", n);
                    i = Pt[W]("input"), i[Y]("type", "hidden"), i[Y]("name", "_ga"), i[Y]("value", n), e.appendChild(i)
                } else "post" == e.method[jt]() && (e.action = oi(t, e[at]))
            }
        };
    ai[pt].S = function(e, i, r) {
        function a(r) {
            try {
                r = r || It.event;
                var a;
                t: {
                    var s = r[wt] || r.srcElement;
                    for (r = 100; s && 0 < r;) {
                        if (s[rt] && s.nodeName[X](/^a(?:rea)?$/i)) {
                            a = s;
                            break t
                        }
                        s = s[St], r--
                    }
                    a = {}
                }("http:" == a[it] || "https:" == a[it]) && N(e, a[et] || "") && a[rt] && t(a, oi(o, a[rt], i))
            } catch (c) {
                n(26)
            }
        }
        var o = this;
        if (this.T || (this.T = !0, Et(Pt, "mousedown", a, !1), Et(Pt, "touchstart", a, !1), Et(Pt, "keyup", a, !1)), r) {
            r = function(t) {
                if (t = t || It.event, (t = t[wt] || t.srcElement) && t[at]) {
                    var n = t[at][X](ii);
                    n && N(e, n[1]) && si(o, t)
                }
            };
            for (var s = 0; s < Pt.forms[gt]; s++) Et(Pt.forms[s], "submit", r)
        }
    };
    var ci, ui, fi = function(t, e, n, i) {
            this.U = e, this.aa = n, (e = i) || (e = (e = te(t, _n)) && "t0" != e ? gi[ut](e) ? "_gat_" + h(te(t, xn)) : "_gat_" + h(e) : "_gat"), this.Y = e
        },
        vi = function(t, e) {
            var n = e.get(gn);
            e.set(gn, function(e) {
                hi(t, e);
                var i = n(e);
                return di(t, e), i
            });
            var i = e.get(pn);
            e.set(pn, function(e) {
                var n = i(e);
                return li(t, e), n
            })
        },
        hi = function(t, e) {
            e.get(t.U) || ("1" == Nt(t.Y)[0] ? e.set(t.U, "", !0) : e.set(t.U, "" + Kt(), !0))
        },
        di = function(t, e) {
            e.get(t.U) && Vt(t.Y, "1", e.get(En), e.get(Tn), e.get(xn), 6e5)
        },
        li = function(t, e) {
            if (e.get(t.U)) {
                var n = new Lt,
                    i = function(t) {
                        n.set(re(t).p, e.get(t))
                    };
                i(he), i(de), i(xn), i(kn), i(t.U), i(rn);
                var r = t.aa;
                "/" === r[M](0) && (r = l() + r), n.map(function(t, e) {
                    r += v(t) + "=" + v("" + e) + "&"
                }), r += "z=" + Kt(), u(r), e.set(t.U, "", !0)
            }
        },
        gi = /^gtm\d+$/;
    ci = new Un(10), ui = !1;
    var pi, mi = function(t, e) {
            var i = t.b;
            if (!i.get("dcLoaded")) {
                n(29), e = e || {};
                var r;
                e[jn] && (r = h(e[jn]));
                var a = "//stats.g.doubleclick.net/collect?t=dc&aip=1&";
                if ("https:" != Pt[Z][it] && !ve) {
                    var o = O(i.get(kn));
                    (ui || zn(ci, void 0, o)) && (a = "https:" + a, n(33), ui = !0)
                }
                r = new fi(i, an, a, r), vi(r, i), i.set("dcLoaded", !0)
            }
        },
        wi = function(t) {
            var e;
            t.get("dcLoaded") ? e = !1 : (e = new Un(ee(t, $n)), e = zn(e, null, O(t.get(kn)))), e && (n(51), e = new fi(t, an), hi(e, t), di(e, t), t.get(e.U) && (t.set(Gn, 1, !0), t.set(On, $t() + "/r/collect", !0)))
        },
        bi = function(t, e) {
            var i = t.b;
            if (!i.get("_rlsaLoaded")) {
                if (n(38), e = e || {}, e[jn]) var r = h(e[jn]);
                r = new fi(i, on, "https://www.google.com/ads/ga-audiences?t=sr&aip=1&", r), vi(r, i), i.set("_rlsaLoaded", !0), Ri("displayfeatures", t, e)
            }
        },
        yi = function(t, e, n) {
            if (!pi) {
                var i;
                i = Pt[Z][ct];
                var r = It[lt],
                    a = /^#?gaso=([^&]*)/;
                (r = (i = (i = i && i[X](a) || r && r[X](a)) ? i[1] : Nt("GASO")[0] || "") && i[X](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (Vt("GASO", "" + i, n, e, t, 0), $._udo || ($._udo = e), $._utcp || ($._utcp = n), t = r[1], d("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (t ? "prefix=" + t + "&" : "") + Kt(), "_gasojs")), pi = !0
            }
        },
        _i = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
        ki = function(t) {
            function e(t, e) {
                i.b[F].set(t, e)
            }

            function n(t, n) {
                e(t, n), i.filters.add(t)
            }
            var i = this;
            this.b = new Jt, this.filters = new Bt, e(_n, t[_n]), e(xn, s(t[xn])), e(jn, t[jn]), e(Tn, t[Tn] || g()), e(En, t[En]), e(An, t[An]), e(Ln, t[Ln]), e(In, t[In]), e(Rn, t[Rn]), e(Cn, t[Cn]), e(Nn, t[Nn]), e(Vn, t[Vn]), e(Dn, t[Dn]), e(Pn, t[Pn]), e(Sn, t[Sn]), e(he, 1), e(de, "j26"), n(sn, b), n(cn, x), n(un, y), n(fn, T), n(vn, Yn), n(hn, Kn), n(dn, w), n(ln, E), n(mn, S), n(wn, j), n(yn, wi), n(gn, _), n(pn, k), n(bn, Hn(this)), Si(this.b, t[kn]), xi(this.b), this.b.set(le, V()), yi(this.b.get(xn), this.b.get(Tn), this.b.get(En))
        },
        Si = function(t, e) {
            if ("cookie" == te(t, Pn)) {
                Bn = !1;
                var i;
                t: {
                    var r = Nt(te(t, jn));
                    if (r && !(1 > r[gt])) {
                        i = [];
                        for (var a = 0; a < r[gt]; a++) {
                            var o;
                            o = r[a][Q](".");
                            var s = o.shift();
                            ("GA1" == s || "1" == s) && 1 < o[gt] ? (s = o.shift()[Q]("-"), 1 == s[gt] && (s[1] = "1"), s[0] *= 1, s[1] *= 1, o = {
                                r: s,
                                s: o[xt](".")
                            }) : o = void 0, o && i[st](o)
                        }
                        if (1 == i[gt]) {
                            n(13), i = i[0].s;
                            break t
                        }
                        if (0 != i[gt]) {
                            if (n(14), r = ti(te(t, Tn)), i = Qn(i, r, 0), 1 == i[gt]) {
                                i = i[0].s;
                                break t
                            }
                            r = ni(te(t, En)), i = Qn(i, r, 1), i = i[0] && i[0].s;
                            break t
                        }
                        n(12)
                    }
                    i = void 0
                }
                i || (i = te(t, Tn), r = te(t, Ln) || g(), i = I("__utma", r, i), (i = void 0 == i ? void 0 : i.O[1] + "." + i.O[2]) && n(10)), i && (t[F].set(kn, i), Bn = !0)
            }
            i = t.get(Cn), (a = (i = Pt[Z][i ? "href" : "search"][X]("(?:&|#|\\?)" + v("_ga")[q](/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == i[gt] ? i[1] : "") && (t.get(Rn) ? (i = a[ht]("."), -1 == i ? n(22) : (r = a[_t](i + 1), "1" != a[_t](0, i) ? n(22) : (i = r[ht]("."), -1 == i ? n(22) : (a = r[_t](0, i), i = r[_t](i + 1), a != C(i, 0) && a != C(i, -1) && a != C(i, -2) ? n(23) : (n(11), t[F].set(kn, i)))))) : n(21)), e && (n(9), t[F].set(kn, v(e))), t.get(kn) || ((i = (i = It.gaGlobal && It.gaGlobal.vid) && -1 != i[nt](/^(?:utma\.)?\d+\.\d+$/) ? i : void 0) ? (n(17), t[F].set(kn, i)) : (n(8), t[F].set(kn, c()))), Wn(t)
        },
        xi = function(t) {
            var e = It[kt],
                i = It.screen,
                r = Pt[Z];
            if (t.set(_e, p(t.get(Dn))), r) {
                var a = r.pathname || "";
                "/" != a[M](0) && (n(31), a = "/" + a), t.set(ye, r[it] + "//" + r[et] + a + r[nt])
            }
            i && t.set(Te, i.width + "x" + i.height), i && t.set(je, i.colorDepth + "-bit");
            var i = Pt.documentElement,
                s = (a = Pt.body) && a[mt] && a[yt],
                c = [];
            if (i && i[mt] && i[yt] && ("CSS1Compat" === Pt.compatMode || !s) ? c = [i[mt], i[yt]] : s && (c = [a[mt], a[yt]]), i = 0 >= c[0] || 0 >= c[1] ? "" : c[xt]("x"), t.set(Ee, i), t.set(Le, L()), t.set(xe, Pt.characterSet || Pt.charset), t.set(Ae, e && "function" == typeof e.javaEnabled && e.javaEnabled() || !1), t.set(Se, (e && (e.language || e.browserLanguage) || "")[jt]()), r && t.get(Cn) && (e = Pt[Z][ct])) {
                for (e = e[Q](/[?&#]+/), r = [], i = 0; i < e[gt]; ++i)(o(e[i], "utm_id") || o(e[i], "utm_campaign") || o(e[i], "utm_source") || o(e[i], "utm_medium") || o(e[i], "utm_term") || o(e[i], "utm_content") || o(e[i], "gclid") || o(e[i], "dclid") || o(e[i], "gclsrc")) && r[st](e[i]);
                0 < r[gt] && (e = "#" + r[xt]("&"), t.set(ye, t.get(ye) + e))
            }
        };
    ki[pt].get = function(t) {
        return this.b.get(t)
    }, ki[pt].set = function(t, e) {
        this.b.set(t, e)
    };
    var ji = {
        pageview: [ke],
        event: [Ie, Pe, Re, Ce],
        social: [Ne, Ve, De],
        timing: [Xe, He, We, Be]
    };
    ki[pt].send = function(t) {
        if (!(1 > arguments[gt])) {
            var e, i;
            "string" == typeof arguments[0] ? (e = arguments[0], i = [][ft][bt](arguments, 1)) : (e = arguments[0] && arguments[0][ge], i = arguments), e && (i = m(ji[e] || [], i), i[ge] = e, this.b.set(i, void 0, !0), this.filters.D(this.b), this.b[F].m = {}, n(44))
        }
    };
    var Ti, Ei, Ai, Li = function(t) {
            return "prerender" != Pt.visibilityState && (t(), !0)
        },
        Ii = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
        Pi = function(t) {
            if (i(t[0])) this.u = t[0];
            else {
                var e = Ii.exec(t[0]);
                if (null != e && 4 == e[gt] && (this.c = e[1] || "t0", this.e = e[2] || "", this.d = e[3], this.a = [][ft][bt](t, 1), this.e || (this.A = "create" == this.d, this.i = "require" == this.d, this.g = "provide" == this.d, this.ba = "remove" == this.d), this.i && (3 <= this.a[gt] ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (a(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), e = t[1], t = t[2], !this.d) throw "abort";
                if (this.i && (!a(e) || "" == e)) throw "abort";
                if (this.g && (!a(e) || "" == e || !i(t))) throw "abort";
                if (D(this.c) || D(this.e)) throw "abort";
                if (this.g && "t0" != this.c) throw "abort"
            }
        };
    Ti = new Lt, Ai = new Lt, Ei = {
        ec: 45,
        ecommerce: 46,
        linkid: 47
    };
    var Ri = function(t, e, r) {
            e == Vi ? n(35) : e.get(_n);
            var a = Ti.get(t);
            return !!i(a) && (e.plugins_ = e.plugins_ || new Lt, !!e.plugins_.get(t) || (e.plugins_.set(t, new a(e, r || {})), !0))
        },
        Ci = function(e) {
            function n(t) {
                var e = (t[et] || "")[Q](":")[0][jt](),
                    n = (t[it] || "")[jt](),
                    n = 1 * t[B] || ("http:" == n ? 80 : "https:" == n ? 443 : "");
                return t = t.pathname || "", o(t, "/") || (t = "/" + t), [e, "" + n, t]
            }
            var i = Pt[W]("a");
            t(i, Pt[Z][rt]);
            var r = (i[it] || "")[jt](),
                a = n(i),
                s = i[nt] || "",
                c = r + "//" + a[0] + (a[1] ? ":" + a[1] : "");
            return o(e, "//") ? e = r + e : o(e, "/") ? e = c + e : !e || o(e, "?") ? e = c + a[2] + (e || s) : 0 > e[Q]("/")[0][ht](":") && (e = c + a[2][_t](0, a[2].lastIndexOf("/")) + "/" + e), t(i, e), r = n(i), {
                protocol: (i[it] || "")[jt](),
                host: r[0],
                port: r[1],
                path: r[2],
                G: i[nt] || "",
                url: e || ""
            }
        },
        Ni = {
            ga: function() {
                Ni.f = []
            }
        };
    Ni.ga(), Ni.D = function(t) {
        var e = Ni.J[ot](Ni, arguments),
            e = Ni.f.concat(e);
        for (Ni.f = []; 0 < e[gt] && !Ni.v(e[0]) && (e.shift(), !(0 < Ni.f[gt])););
        Ni.f = Ni.f.concat(e)
    }, Ni.J = function(t) {
        for (var e = [], r = 0; r < arguments[gt]; r++) try {
            var a = new Pi(arguments[r]);
            if (a.g) Ti.set(a.a[0], a.a[1]);
            else {
                if (a.i) {
                    var s = a,
                        c = s.a[0];
                    if (!i(Ti.get(c)) && !Ai.get(c)) {
                        Ei[tt](c) && n(Ei[c]);
                        var u = s.X;
                        if (!u && Ei[tt](c) ? (n(39), u = c + ".js") : n(43), u) {
                            u && 0 <= u[ht]("/") || (u = l() + "//www.google-analytics.com/plugins/ua/" + u);
                            var f, v = Ci(u),
                                s = void 0,
                                h = v[it],
                                g = Pt[Z][it],
                                s = "https:" == h || h == g || "http:" == h && "http:" == g;
                            if (f = s) {
                                var s = v,
                                    p = Ci(Pt[Z][rt]);
                                if (s.G || 0 <= s.url[ht]("?") || 0 <= s.path[ht]("://")) f = !1;
                                else if (s[J] == p[J] && s[B] == p[B]) f = !0;
                                else {
                                    var m = "http:" == s[it] ? 80 : 443;
                                    f = !("www.google-analytics.com" != s[J] || (s[B] || m) != m || !o(s.path, "/plugins/"))
                                }
                            }
                            f && (d(v.url), Ai.set(c, !0))
                        }
                    }
                }
                e[st](a)
            }
        } catch (w) {}
        return e
    }, Ni.v = function(t) {
        try {
            if (t.u) t.u[bt](It, Vi.j("t0"));
            else {
                var e = t.c == fe ? Vi : Vi.j(t.c);
                if (t.A) "t0" == t.c && Vi.create[ot](Vi, t.a);
                else if (t.ba) Vi.remove(t.c);
                else if (e)
                    if (t.i) {
                        if (!Ri(t.a[0], e, t.W)) return !0
                    } else if (t.e) {
                    var n = t.d,
                        i = t.a,
                        r = e.plugins_.get(t.e);
                    r[n][ot](r, i)
                } else e[t.d][ot](e, t.a)
            }
        } catch (a) {}
    };
    var Vi = function(t) {
        n(1), Ni.D[ot](Ni, [arguments])
    };
    Vi.h = {}, Vi.P = [], Vi.L = 0, Vi.answer = 42;
    var Di = [xn, Tn, _n];
    Vi.create = function(t) {
            var e = m(Di, [][ft][bt](arguments));
            e[_n] || (e[_n] = "t0");
            var n = "" + e[_n];
            return Vi.h[n] ? Vi.h[n] : (e = new ki(e), Vi.h[n] = e, Vi.P[st](e), e)
        }, Vi.remove = function(t) {
            for (var e = 0; e < Vi.P[gt]; e++)
                if (Vi.P[e].get(_n) == t) {
                    Vi.P.splice(e, 1), Vi.h[t] = null;
                    break
                }
        }, Vi.j = function(t) {
            return Vi.h[t]
        }, Vi.K = function() {
            return Vi.P[ft](0)
        }, Vi.N = function() {
            "ga" != fe && n(49);
            var t = It[fe];
            if (!t || 42 != t.answer) {
                Vi.L = t && t.l, Vi.loaded = !0;
                var e = It[fe] = Vi;
                A("create", e, e.create, 3), A("remove", e, e.remove), A("getByName", e, e.j, 5), A("getAll", e, e.K, 6), e = ki[pt], A("get", e, e.get, 7), A("set", e, e.set, 4), A("send", e, e[H], 2), e = Jt[pt], A("get", e, e.get), A("set", e, e.set), (It.gaplugins = It.gaplugins || {}).Linker = ai, e = ai[pt], Ti.set("linker", ai), A("decorate", e, e.Q, 20), A("autoLink", e, e.S, 25), Ti.set("displayfeatures", mi), Ti.set("adfeatures", bi), t = t && t.q, r(t) ? Ni.D[ot](Vi, t) : n(50)
            }
        },
        function() {
            var t = Vi.N;
            if (!Li(t)) {
                n(16);
                var e = !1,
                    i = function() {
                        !e && Li(t) && (e = !0, At(Pt, "visibilitychange", i))
                    };
                Et(Pt, "visibilitychange", i)
            }
        }()
}(window);