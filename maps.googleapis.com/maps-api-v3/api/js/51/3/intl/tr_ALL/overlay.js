google.maps.__gjsload__('overlay', function(_) {
    var Su = function(a) {
            this.h = a
        },
        Hla = function() {},
        Tu = function(a) {
            a.Bo = a.Bo || new Hla;
            return a.Bo
        },
        Ila = function(a) {
            this.Ea = new _.ri(function() {
                var b = a.Bo;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.wn && a.onAdd) a.onAdd();
                        b.wn = !0;
                        a.draw()
                    }
                } else {
                    if (b.wn)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.wn = !1
                }
            }, 0)
        },
        Jla = function(a, b) {
            function c() {
                return _.si(e.Ea)
            }
            var d = Tu(a),
                e = d.dm;
            e || (e = d.dm = new Ila(a));
            _.kb(d.Pa || [], _.sf);
            var f = d.Oa = d.Oa || new _.bt,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.ys = d.ys || new Su(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Pa = [_.N(a, "panes_changed", c), _.N(g, "zoom_changed", c), _.N(g, "offset_changed", c), _.N(b, "projection_changed", c), _.N(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.Kf && (_.xg(b, "Ox"), _.vg(b, 148440))
        },
        Nla = function(a) {
            if (a) {
                var b = a.getMap();
                if (Kla(a) !== b && b && b instanceof _.Kf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Lla(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.Ga;
                        var e = new Uu(b, d);
                        d.Xa(e);
                        c.overlayLayer = e;
                        Mla(a);
                        Nla(a)
                    })
                }
            }
        },
        Mla = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.h.unbindAll(), b.h.set("panes", null), b.h.set("projection", null), b.m.Af(b), b.j && (b.j = !1, b.h.onRemove ? b.h.onRemove() : b.h.remove()))
            }
        },
        Kla = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Lla = function(a, b, c) {
            this.map = a;
            this.h = b;
            this.m = c;
            this.j = !1;
            _.xg(this.map, "Ox");
            _.vg(this.map, 148440);
            c.Pe(this)
        },
        Ola = function(a, b) {
            a.h.get("projection") != b && (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b))
        },
        Uu = function(a, b) {
            this.X = a;
            this.Ca = b;
            this.h = null;
            this.j = []
        };
    _.Pa(Su, _.P);
    Su.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.te(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.h : null))
    };
    var Vu = {};
    _.Pa(Ila, _.P);
    Vu.Pe = function(a) {
        if (a) {
            var b = a.getMap();
            (Tu(a).cs || null) !== b && (b && Jla(a, b), Tu(a).cs = b)
        }
    };
    Vu.Af = function(a) {
        var b = Tu(a),
            c = b.Oa;
        c && c.unbindAll();
        (c = b.ys) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Pa && _.kb(b.Pa, _.sf);
        b.Pa = null;
        b.dm && (b.dm.Ea.Wc(), b.dm = null);
        delete Tu(a).cs
    };
    var Wu = {};
    Lla.prototype.draw = function() {
        this.j || (this.j = !0, this.h.onAdd && this.h.onAdd());
        this.h.draw && this.h.draw()
    };
    Uu.prototype.dispose = function() {};
    Uu.prototype.cc = function(a, b, c, d, e, f, g, h) {
        var k = this.h = this.h || new _.yq(this.X, this.Ca, function() {});
        k.cc(a, b, c, d, e, f, g, h);
        a = _.A(this.j);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Ola(b, k), b.draw()
    };
    Uu.prototype.Pe = function(a) {
        this.j.push(a);
        this.h && Ola(a, this.h);
        this.Ca.refresh()
    };
    Uu.prototype.Af = function(a) {
        _.qb(this.j, a)
    };
    Wu.Pe = Nla;
    Wu.Af = Mla;
    _.jf("overlay", {
        Qp: function(a) {
            if (a) {
                (0, Vu.Af)(a);
                (0, Wu.Af)(a);
                var b = a.getMap();
                b && (b instanceof _.Kf ? (0, Wu.Pe)(a) : (0, Vu.Pe)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.ar(a, {
                onClick: function(b) {
                    _.Vl(b.event.Ja)
                },
                Ic: function(b) {
                    return _.Fq(b)
                },
                ph: function(b) {
                    return _.Gq(b)
                },
                nd: function(b) {
                    return _.Gq(b)
                },
                Qc: function(b) {
                    return _.Hq(b)
                }
            }).yi(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.nf);
            a.addEventListener("contextmenu", _.nf);
            a.addEventListener("dblclick", _.nf);
            a.addEventListener("mousedown",
                _.nf);
            a.addEventListener("mousemove", _.nf);
            a.addEventListener("MSPointerDown", _.nf);
            a.addEventListener("pointerdown", _.nf);
            a.addEventListener("touchstart", _.nf);
            a.addEventListener("wheel", _.nf)
        }
    });
});