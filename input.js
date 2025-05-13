define("protobuf/protobuf.js", function(require, module, exports) {
    "use strict";
    var t = require("../@babel/runtime/helpers/typeof");
    ! function(e) {
        var r = {};

        function i(t) {
            if (r[t]) return r[t].exports;
            var n = r[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
        }
        i.m = e, i.c = r, i.d = function(t, e, r) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function(e, r) {
            if (1 & r && (e = i(e)), 8 & r) return e;
            if (4 & r && "object" == t(e) && e && e.__esModule) return e;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & r && "string" != typeof e)
                for (var o in e) i.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 28)
    }([function(e, r, i) {
        var n = e.exports,
            o = i(16);
        n.LongBits = i(11), n.Long = i(29), n.pool = i(30), n.float = i(31), n.asPromise = i(32), n.EventEmitter = i(33), n.path = i(34), n.base64 = i(17), n.utf8 = i(8), n.compareFieldsById = function(t, e) {
            return t.id - e.id
        }, n.toArray = function(t) {
            if (t) {
                for (var e = Object.keys(t), r = new Array(e.length), i = 0; i < e.length;) r[i] = t[e[i++]];
                return r
            }
            return []
        }, n.toObject = function(t) {
            for (var e = {}, r = 0; r < t.length;) {
                var i = t[r++],
                    n = t[r++];
                void 0 !== n && (e[i] = n)
            }
            return e
        }, n.isString = function(t) {
            return "string" == typeof t || t instanceof String
        }, n.isReserved = function(t) {
            return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
        }, n.isObject = function(e) {
            return e && "object" == t(e)
        }, n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, n.oneOfGetter = function(t) {
            for (var e = {}, r = 0; r < t.length; ++r) e[t[r]] = 1;
            return function() {
                for (var t = Object.keys(this), r = t.length - 1; - 1 < r; --r)
                    if (1 === e[t[r]] && void 0 !== this[t[r]] && null !== this[t[r]]) return t[r]
            }
        }, n.oneOfSetter = function(t) {
            return function(e) {
                for (var r = 0; r < t.length; ++r) t[r] !== e && delete this[t[r]]
            }
        }, n.merge = function(t, e, r) {
            for (var i = Object.keys(e), n = 0; n < i.length; ++n) void 0 !== t[i[n]] && r || (t[i[n]] = e[i[n]]);
            return t
        }, n.decorateType = function(t, e) {
            return t.$type ? (e && t.$type.name !== e && (n.decorateRoot.remove(t.$type), t.$type.name = e, n.decorateRoot.add(t.$type)), t.$type) : (e = new(Type = Type || i(3))(e || t.name), n.decorateRoot.add(e), e.ctor = t, Object.defineProperty(t, "$type", {
                value: e,
                enumerable: !1
            }), Object.defineProperty(t.prototype, "$type", {
                value: e,
                enumerable: !1
            }), e)
        }, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.longToHash = function(t) {
            return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash
        }, n.copy = function(e) {
            if ("object" != t(e)) return e;
            var r = {};
            for (var i in e) r[i] = e[i];
            return r
        }, n.deepCopy = function e(r) {
            if ("object" != t(r)) return r;
            var i = {};
            for (var n in r) i[n] = e(r[n]);
            return i
        }, n.ProtocolError = function(t) {
            function e(t, r) {
                if (!(this instanceof e)) return new e(t, r);
                Object.defineProperty(this, "message", {get: function() {
                        return t
                    }
                }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                    value: (new Error).stack || ""
                }), r && merge(this, r)
            }
            return (e.prototype = Object.create(Error.prototype)).constructor = e, Object.defineProperty(e.prototype, "name", {get: function() {
                    return t
                }
            }), e.prototype.toString = function() {
                return this.name + ": " + this.message
            }, e
        }, n.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0
        }, n.Buffer = null, n.newBuffer = function(t) {
            return "number" == typeof t ? new n.Array(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
        }, n.stringToBytes = function(t) {
            var e, r, i = [];
            e = t.length;
            for (var n = 0; n < e; n++) 65536 <= (r = t.charCodeAt(n)) && r <= 1114111 ? (i.push(r >> 18 & 7 | 240), i.push(r >> 12 & 63 | 128), i.push(r >> 6 & 63 | 128), i.push(63 & r | 128)) : 2048 <= r && r <= 65535 ? (i.push(r >> 12 & 15 | 224), i.push(r >> 6 & 63 | 128), i.push(63 & r | 128)) : 128 <= r && r <= 2047 ? (i.push(r >> 6 & 31 | 192), i.push(63 & r | 128)) : i.push(255 & r);
            return i
        }, n.byteToString = function(t) {
            if ("string" == typeof t) return t;
            for (var e = "", r = t, i = 0; i < r.length; i++) {
                var n = r[i].toString(2),
                    o = n.match(/^1+?(?=0)/);
                if (o && 8 == n.length) {
                    for (var s = o[0].length, u = r[i].toString(2).slice(7 - s), a = 1; a < s; a++) u += r[a + i].toString(2).slice(2);
                    e += String.fromCharCode(parseInt(u, 2)), i += s - 1
                } else e += String.fromCharCode(r[i])
            }
            return e
        }, n.isInteger = Number.isInteger || function(t) {
            return "number" == typeof t && isFinite(t) && Math.floor(t) === t
        }, Object.defineProperty(n, "decorateRoot", {get: function() {
                return o.decorated || (o.decorated = new(i(9)))
            }
        })
    }, function(e, r, i) {
        e.exports = s;
        var n = i(4);
        ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Enum";
        var o = i(6);

        function s(e, r, i, o, s) {
            if (n.call(this, e, i), r && "object" != t(r)) throw TypeError("values must be an object");
            if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = o, this.comments = s || {}, this.reserved = void 0, r)
                for (var u = Object.keys(r), a = 0; a < u.length; ++a) "number" == typeof r[u[a]] && (this.valuesById[this.values[u[a]] = r[u[a]]] = u[a])
        }
        s.fromJSON = function(t, e) {
            return (t = new s(t, e.values, e.options, e.comment, e.comments)).reserved = e.reserved, t
        }, s.prototype.toJSON = function(t) {
            return t = !!t && Boolean(t.keepComments), util.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", t ? this.comment : void 0, "comments", t ? this.comments : void 0])
        }, s.prototype.add = function(t, e, r) {
            if (!util.isString(t)) throw TypeError("name must be a string");
            if (!util.isInteger(e)) throw TypeError("id must be an integer");
            if (void 0 !== this.values[t]) throw Error("duplicate name '" + t + "' in " + this);
            if (this.isReservedId(e)) throw Error("id " + e + " is reserved in " + this);
            if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
            if (void 0 !== this.valuesById[e]) {
                if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + e + " in " + this);
                this.values[t] = e
            } else this.valuesById[this.values[t] = e] = t;
            return this.comments[t] = r || null, this
        }, s.prototype.remove = function(t) {
            if (!util.isString(t)) throw TypeError("name must be a string");
            var e = this.values[t];
            if (null == e) throw Error("name '" + t + "' does not exist in " + this);
            return delete this.valuesById[e], delete this.values[t], delete this.comments[t], this
        }, s.prototype.isReservedId = function(t) {
            return o.isReservedId(this.reserved, t)
        }, s.prototype.isReservedName = function(t) {
            return o.isReservedName(this.reserved, t)
        }
    }, function(e, r, i) {
        e.exports = f;
        var n, o, s, u, a = i(4);
        ((f.prototype = Object.create(a.prototype)).constructor = f).className = "Field";
        var h = /^required|optional|repeated$/;

        function f(t, e, r, i, n, u, f) {
            if (s.isObject(i) ? (f = n, u = i, i = n = void 0) : s.isObject(n) && (f = u, u = n, n = void 0), a.call(this, t, u), !s.isInteger(e) || e < 0) throw TypeError("id must be a non-negative integer");
            if (!s.isString(r)) throw TypeError("type must be a string");
            if (void 0 !== i && !h.test(i = i.toString().toLowerCase())) throw TypeError("rule must be a string rule");
            if (void 0 !== n && !s.isString(n)) throw TypeError("extend must be a string");
            this.rule = i && "optional" !== i ? i : void 0, this.type = r, this.id = e, this.extend = n || void 0, this.required = "required" === i, this.optional = !this.required, this.repeated = "repeated" === i, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!s.Long && void 0 !== o.long[r], this.bytes = "bytes" === r, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = f
        }
        f.fromJSON = function(t, e) {
            return new f(t, e.id, e.type, e.rule, e.extend, e.options, e.comment)
        }, Object.defineProperty(f.prototype, "packed", {get: function() {
                return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed
            }
        }), f.prototype.setOption = function(t, e, r) {
            return "packed" === t && (this._packed = null), a.prototype.setOption.call(this, t, e, r)
        }, f.prototype.toJSON = function(t) {
            return t = !!t && Boolean(t.keepComments), s.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : void 0])
        }, f.prototype.resolve = function() {
            return this.resolved ? this : (void 0 === (this.typeDefault = o.defaults[this.type]) && (this.resolvedType = (this.declaringField || this).parent.lookupTypeOrEnum(this.type), this.resolvedType instanceof u ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof n && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof n) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long ? (this.typeDefault = s.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault)) : this.bytes && "string" == typeof this.typeDefault && (s.utf8.write(this.typeDefault, t = s.newBuffer(s.utf8.length(this.typeDefault)), 0), this.typeDefault = t), this.map ? this.defaultValue = s.emptyObject : this.repeated ? this.defaultValue = s.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof u && (this.parent.ctor.prototype[this.name] = this.defaultValue), a.prototype.resolve.call(this));
            var t
        }, f.d = function(e, r, i, n) {
            return "function" == typeof r ? r = s.decorateType(r).name : r && "object" == t(r) && (r = s.decorateEnum(r).name),
                function(t, o) {
                    s.decorateType(t.constructor).add(new f(o, e, r, i, {
                        default: n
                    }))
                }
        }, f._configure = function() {
            u = i(3), n = i(1), o = i(5), s = i(0)
        }
    }, function(t, e, r) {
        t.exports = m;
        var i, n, o, s, u, a, h, f, l, c, p, d, y, g, v = r(6);

        function m(t, e) {
            v.call(this, t, e), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null
        }

        function b(t) {
            return t._fieldsById = t._fieldsArray = t._oneofsArray = null, delete t.encode, delete t.decode, delete t.verify, t
        }((m.prototype = Object.create(v.prototype)).constructor = m).className = "Type", Object.defineProperties(m.prototype, {
            fieldsById: {get: function() {
                    if (this._fieldsById) return this._fieldsById;
                    this._fieldsById = {};
                    for (var t = Object.keys(this.fields), e = 0; e < t.length; ++e) {
                        var r = this.fields[t[e]],
                            i = r.id;
                        if (this._fieldsById[i]) throw Error("duplicate id " + i + " in " + this);
                        this._fieldsById[i] = r
                    }
                    return this._fieldsById
                }
            },
            fieldsArray: {get: function() {
                    return this._fieldsArray || (this._fieldsArray = h.toArray(this.fields))
                }
            },
            oneofsArray: {get: function() {
                    return this._oneofsArray || (this._oneofsArray = h.toArray(this.oneofs))
                }
            },
            ctor: {get: function() {
                    return this._ctor || (this.ctor = m.generateConstructor(this))
                },
                set: function(t) {
                    var e = t.prototype;
                    e instanceof o || ((t.prototype = new o).constructor = t, h.merge(t.prototype, e)), t.$type = t.prototype.$type = this, h.merge(t, o, !0), h.merge(t.prototype, o, !0), this._ctor = t;
                    for (var r = 0; r < this.fieldsArray.length; ++r) this._fieldsArray[r].resolve();
                    var i = {};
                    for (r = 0; r < this.oneofsArray.length; ++r) {
                        var n = this._oneofsArray[r].resolve().name,
                            s = function(t) {
                                for (var e = {}, r = 0; r < t.length; ++r) e[t[r]] = 0;
                                return {
                                    setter: function(r) {
                                        if (!(t.indexOf(r) < 0)) {
                                            e[r] = 1;
                                            for (var i = 0; i < t.length; ++i) t[i] !== r && delete this[t[i]]
                                        }
                                    },
                                    getter: function() {
                                        for (var t = Object.keys(this), r = t.length - 1; - 1 < r; --r)
                                            if (1 === e[t[r]] && void 0 !== this[t[r]] && null !== this[t[r]]) return t[r]
                                    }
                                }
                            }(this._oneofsArray[r].oneof);
                        i[n] = {get: s.getter,
                            set: s.setter
                        }
                    }
                    r && Object.defineProperties(t.prototype, i)
                }
            }
        }), m.generateConstructor = function(t) {
            return function(e) {
                for (var r, i = 0; i < t.fieldsArray.length; i++)(r = t._fieldsArray[i]).map ? this[r.name] = {} : r.repeated && (this[r.name] = []);
                if (e)
                    for (var n = Object.keys(e), o = 0; o < n.length; ++o) null != e[n[o]] && (this[n[o]] = e[n[o]])
            }
        }, m.fromJSON = function(t, e) {
            var r = new m(t, e.options);
            r.extensions = e.extensions, r.reserved = e.reserved;
            for (var o = Object.keys(e.fields), u = 0; u < o.length; ++u) r.add((void 0 !== e.fields[o[u]].keyType ? g : n).fromJSON(o[u], e.fields[o[u]]));
            if (e.oneofs)
                for (o = Object.keys(e.oneofs), u = 0; u < o.length; ++u) r.add(s.fromJSON(o[u], e.oneofs[o[u]]));
            if (e.nested)
                for (o = Object.keys(e.nested), u = 0; u < o.length; ++u) {
                    var a = e.nested[o[u]];
                    r.add((void 0 !== a.id ? n : void 0 !== a.fields ? m : void 0 !== a.values ? i : void 0 !== a.methods ? p : v).fromJSON(o[u], a))
                }
            return e.extensions && e.extensions.length && (r.extensions = e.extensions), e.reserved && e.reserved.length && (r.reserved = e.reserved), e.group && (r.group = !0), e.comment && (r.comment = e.comment), r
        }, m.prototype.toJSON = function(t) {
            var e = v.prototype.toJSON.call(this, t),
                r = !!t && Boolean(t.keepComments);
            return {
                options: e && e.options || void 0,
                oneofs: v.arrayToJSON(this.oneofsArray, t),
                fields: v.arrayToJSON(this.fieldsArray.filter((function(t) {
                    return !t.declaringField
                })), t) || {},
                extensions: this.extensions && this.extensions.length ? this.extensions : void 0,
                reserved: this.reserved && this.reserved.length ? this.reserved : void 0,
                group: this.group || void 0,
                nested: e && e.nested || void 0,
                comment: r ? this.comment : void 0
            }
        }, m.prototype.resolveAll = function() {
            for (var t = this.fieldsArray, e = 0; e < t.length;) t[e++].resolve();
            var r = this.oneofsArray;
            for (e = 0; e < r.length;) r[e++].resolve();
            return v.prototype.resolveAll.call(this)
        }, m.prototype.get = function(t) {
            return this.fields[t] || this.oneofs && this.oneofs[t] || this.nested && this.nested[t] || null
        }, m.prototype.add = function(t) {
            if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
            if (t instanceof n && void 0 === t.extend) {
                if (this._fieldsById && this._fieldsById[t.id]) throw Error("duplicate id " + t.id + " in " + this);
                if (this.isReservedId(t.id)) throw Error("id " + t.id + " is reserved in " + this);
                if (this.isReservedName(t.name)) throw Error("name '" + t.name + "' is reserved in " + this);
                return t.parent && t.parent.remove(t), (this.fields[t.name] = t).message = this, t.onAdd(this), b(this)
            }
            return t instanceof s ? (this.oneofs || (this.oneofs = {}), (this.oneofs[t.name] = t).onAdd(this), b(this)) : v.prototype.add.call(this, t)
        }, m.prototype.remove = function(t) {
            if (t instanceof n && void 0 === t.extend) {
                if (!this.fields || this.fields[t.name] !== t) throw Error(t + " is not a member of " + this);
                return delete this.fields[t.name], t.parent = null, t.onRemove(this), b(this)
            }
            if (t instanceof s) {
                if (!this.oneofs || this.oneofs[t.name] !== t) throw Error(t + " is not a member of " + this);
                return delete this.oneofs[t.name], t.parent = null, t.onRemove(this), b(this)
            }
            return v.prototype.remove.call(this, t)
        }, m.prototype.isReservedId = function(t) {
            return v.isReservedId(this.reserved, t)
        }, m.prototype.isReservedName = function(t) {
            return v.isReservedName(this.reserved, t)
        }, m.prototype.create = function(t) {
            return new this.ctor(t)
        }, m.prototype.setup = function() {
            for (var t, e = this.fullName, r = [], i = 0; i < this.fieldsArray.length; ++i) r.push(this._fieldsArray[i].resolve().resolvedType);
            return this.encode = l(this)({
                Writer: u,
                types: r,
                util: h
            }), this.decode = c(this)({
                Reader: a,
                types: r,
                util: h
            }), this.verify = f(this)({
                types: r,
                util: h
            }), this.fromObject = y.fromObject(this)({
                types: r,
                util: h
            }), this.toObject = y.toObject(this)({
                types: r,
                util: h
            }), (e = d[e]) && ((t = Object.create(this)).fromObject = this.fromObject, this.fromObject = e.fromObject.bind(t), t.toObject = this.toObject, this.toObject = e.toObject.bind(t)), this
        }, m.prototype.encode = function(t, e) {
            return this.setup().encode(t, e)
        }, m.prototype.encodeDelimited = function(t, e) {
            return this.encode(t, e && e.len ? e.fork() : e).ldelim()
        }, m.prototype.decode = function(t, e) {
            return this.setup().decode(t, e)
        }, m.prototype.decodeDelimited = function(t) {
            return t instanceof a || (t = a.create(t)), this.decode(t, t.uint32())
        }, m.prototype.verify = function(t) {
            return this.setup().verify(t)
        }, m.prototype.fromObject = function(t) {
            return this.setup().fromObject(t)
        }, m.prototype.toObject = function(t, e) {
            return this.setup().toObject(t, e)
        }, m.d = function(t) {
            return function(e) {
                h.decorateType(e, t)
            }
        }, m._configure = function() {
            i = r(1), n = r(2), o = r(14), s = r(7), u = r(15), a = r(22), h = r(0), f = r(23), l = r(24), c = r(25), p = r(10), d = r(26), y = r(27), g = r(12)
        }
    }, function(t, e, r) {
        var i, n;

        function o(t, e) {
            if (!i.isString(t)) throw TypeError("name must be a string");
            if (e && !i.isObject(e)) throw TypeError("options must be an object");
            this.options = e, this.name = t, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
        }(t.exports = o).className = "ReflectionObject", Object.defineProperties(o.prototype, {
            root: {get: function() {
                    for (var t = this; null !== t.parent;) t = t.parent;
                    return t
                }
            },
            fullName: {get: function() {
                    for (var t = [this.name], e = this.parent; e;) t.unshift(e.name), e = e.parent;
                    return t.join(".")
                }
            }
        }), o.prototype.toJSON = function() {
            throw Error()
        }, o.prototype.onAdd = function(t) {
            this.parent && this.parent !== t && this.parent.remove(this), this.parent = t, this.resolved = !1, (t = t.root) instanceof n && t._handleAdd(this)
        }, o.prototype.onRemove = function(t) {
            (t = t.root) instanceof n && t._handleRemove(this), this.parent = null, this.resolved = !1
        }, o.prototype.resolve = function() {
            return this.resolved || this.root instanceof n && (this.resolved = !0), this
        }, o.prototype.getOption = function(t) {
            if (this.options) return this.options[t]
        }, o.prototype.setOption = function(t, e, r) {
            return r && this.options && void 0 !== this.options[t] || ((this.options || (this.options = {}))[t] = e), this
        }, o.prototype.setOptions = function(t, e) {
            if (t)
                for (var r = Object.keys(t), i = 0; i < r.length; ++i) this.setOption(r[i], t[r[i]], e);
            return this
        }, o.prototype.toString = function() {
            var t = this.constructor.className,
                e = this.fullName;
            return e.length ? t + " " + e : t
        }, o._configure = function(t) {
            n = r(9), i = r(0)
        }
    }, function(t, e, r) {
        t = t.exports;
        var i = r(0),
            n = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

        function o(t, e) {
            var r = 0,
                i = {};
            for (e |= 0; r < t.length;) i[n[r + e]] = t[r++];
            return i
        }
        t.basic = o([1, 5, 0, 0, 0, 5, 5, 0, 4, 0, 1, 1, 0, 2, 2]), t.defaults = o([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", i.emptyArray, null]), t.long = o([0, 0, 0, 1, 1], 7), t.mapKey = o([0, 0, 0, 5, 5, 0, 4, 0, 1, 1, 0, 2], 2), t.packed = o([1, 5, 0, 0, 0, 5, 5, 0, 4, 0, 1, 1, 0]), t._configure = function() {
            r(0)
        }
    }, function(t, e, r) {
        t.exports = f;
        var i, n, o, s, u, a = r(4);

        function h(t, e) {
            if (t && t.length) {
                for (var r = {}, i = 0; i < t.length; ++i) r[t[i].name] = t[i].toJSON(e);
                return r
            }
        }

        function f(t, e) {
            a.call(this, t, e), this.nested = void 0, this._nestedArray = null
        }

        function l(t) {
            return t._nestedArray = null, t
        }((f.prototype = Object.create(a.prototype)).constructor = f).className = "Namespace", f.fromJSON = function(t, e) {
            return new f(t, e.options).addJSON(e.nested)
        }, f.arrayToJSON = h, f.isReservedId = function(t, e) {
            if (t)
                for (var r = 0; r < t.length; ++r)
                    if ("string" != typeof t[r] && t[r][0] <= e && t[r][1] >= e) return !0;
            return !1
        }, f.isReservedName = function(t, e) {
            if (t)
                for (var r = 0; r < t.length; ++r)
                    if (t[r] === e) return !0;
            return !1
        }, Object.defineProperty(f.prototype, "nestedArray", {get: function() {
                return this._nestedArray || (this._nestedArray = o.toArray(this.nested))
            }
        }), f.prototype.toJSON = function(t) {
            return o.toObject(["options", this.options, "nested", h(this.nestedArray, t)])
        }, f.prototype.addJSON = function(t) {
            if (t)
                for (var e, r = Object.keys(t), o = 0; o < r.length; ++o) e = t[r[o]], this.add((void 0 !== e.fields ? s : void 0 !== e.values ? i : void 0 !== e.methods ? u : void 0 !== e.id ? n : f).fromJSON(r[o], e));
            return this
        }, f.prototype.get = function(t) {
            return this.nested && this.nested[t] || null
        }, f.prototype.getEnum = function(t) {
            if (this.nested && this.nested[t] instanceof i) return this.nested[t].values;
            throw Error("no such enum: " + t)
        }, f.prototype.add = function(t) {
            if (!(t instanceof n && void 0 !== t.extend || t instanceof s || t instanceof i || t instanceof u || t instanceof f)) throw TypeError("object must be a valid nested object");
            if (this.nested) {
                var e = this.get(t.name);
                if (e) {
                    if (!(e instanceof f && t instanceof f) || e instanceof s || e instanceof u) throw Error("duplicate name '" + t.name + "' in " + this);
                    for (var r = e.nestedArray, o = 0; o < r.length; ++o) t.add(r[o]);
                    this.remove(e), this.nested || (this.nested = {}), t.setOptions(e.options, !0)
                }
            } else this.nested = {};
            return (this.nested[t.name] = t).onAdd(this), l(this)
        }, f.prototype.remove = function(t) {
            if (!(t instanceof a)) throw TypeError("object must be a ReflectionObject");
            if (t.parent !== this) throw Error(t + " is not a member of " + this);
            return delete this.nested[t.name], Object.keys(this.nested).length || (this.nested = void 0), t.onRemove(this), l(this)
        }, f.prototype.define = function(t, e) {
            if (o.isString(t)) t = t.split(".");
            else if (!Array.isArray(t)) throw TypeError("illegal path");
            if (t && t.length && "" === t[0]) throw Error("path must be relative");
            for (var r = this; 0 < t.length;) {
                var i = t.shift();
                if (r.nested && r.nested[i]) {
                    if (!((r = r.nested[i]) instanceof f)) throw Error("path conflicts with non-namespace objects")
                } else r.add(r = new f(i))
            }
            return e && r.addJSON(e), r
        }, f.prototype.resolveAll = function() {
            for (var t = this.nestedArray, e = 0; e < t.length;) t[e] instanceof f ? t[e++].resolveAll() : t[e++].resolve();
            return this.resolve()
        }, f.prototype.lookup = function(t, e, r) {
            if ("boolean" == typeof e ? (r = e, e = void 0) : e && !Array.isArray(e) && (e = [e]), o.isString(t) && t.length) {
                if ("." === t) return this.root;
                t = t.split(".")
            } else if (!t.length) return this;
            if ("" === t[0]) return this.root.lookup(t.slice(1), e);
            var i = this.get(t[0]);
            if (i) {
                if (1 === t.length) {
                    if (!e || -1 < e.indexOf(i.constructor)) return i
                } else if (i instanceof f && (i = i.lookup(t.slice(1), e, !0))) return i
            } else
                for (var n = 0; n < this.nestedArray.length; ++n)
                    if (this._nestedArray[n] instanceof f && (i = this._nestedArray[n].lookup(t, e, !0))) return i; return null === this.parent || r ? null : this.parent.lookup(t, e)
        }, f.prototype.lookupType = function(t) {
            var e = this.lookup(t, [s]);
            if (!e) throw Error("no such type: " + t);
            return e
        }, f.prototype.lookupEnum = function(t) {
            var e = this.lookup(t, [i]);
            if (!e) throw Error("no such Enum '" + t + "' in " + this);
            return e
        }, f.prototype.lookupTypeOrEnum = function(t) {
            var e = this.lookup(t, [s, i]);
            if (!e) throw Error("no such Type or Enum '" + t + "' in " + this);
            return e
        }, f.prototype.lookupService = function(t) {
            var e = this.lookup(t, [u]);
            if (!e) throw Error("no such Service '" + t + "' in " + this);
            return e
        }, f._configure = function() {
            i = r(1), n = r(2), o = r(0), s = r(3), u = r(10)
        }
    }, function(t, e, r) {
        t.exports = s;
        var i, n, o = r(4);

        function s(t, e, r, i) {
            if (Array.isArray(e) || (r = e, e = void 0), o.call(this, t, r), void 0 !== e && !Array.isArray(e)) throw TypeError("fieldNames must be an Array");
            this.oneof = e || [], this.fieldsArray = [], this.comment = i
        }

        function u(t) {
            if (t.parent)
                for (var e = 0; e < t.fieldsArray.length; ++e) t.fieldsArray[e].parent || t.parent.add(t.fieldsArray[e])
        }((s.prototype = Object.create(o.prototype)).constructor = s).className = "OneOf", s.fromJSON = function(t, e) {
            return new s(t, e.oneof, e.options, e.comment)
        }, s.prototype.toJSON = function(t) {
            return t = !!t && Boolean(t.keepComments), n.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : void 0])
        }, s.prototype.add = function(t) {
            if (!(t instanceof i)) throw TypeError("field must be a Field");
            return t.parent && t.parent !== this.parent && t.parent.remove(t), this.oneof.push(t.name), this.fieldsArray.push(t), u(t.partOf = this), this
        }, s.prototype.remove = function(t) {
            if (!(t instanceof i)) throw TypeError("field must be a Field");
            var e = this.fieldsArray.indexOf(t);
            if (e < 0) throw Error(t + " is not a member of " + this);
            return this.fieldsArray.splice(e, 1), -1 < (e = this.oneof.indexOf(t.name)) && this.oneof.splice(e, 1), t.partOf = null, this
        }, s.prototype.onAdd = function(t) {
            o.prototype.onAdd.call(this, t);
            for (var e = 0; e < this.oneof.length; ++e) {
                var r = t.get(this.oneof[e]);
                r && !r.partOf && (r.partOf = this).fieldsArray.push(r)
            }
            u(this)
        }, s.prototype.onRemove = function(t) {
            for (var e, r = 0; r < this.fieldsArray.length; ++r)(e = this.fieldsArray[r]).parent && e.parent.remove(e);
            o.prototype.onRemove.call(this, t)
        }, s.d = function() {
            for (var t = new Array(arguments.length), e = 0; e < arguments.length;) t[e] = arguments[e++];
            return function(e, r) {
                n.decorateType(e.constructor).add(new s(r, t)), Object.defineProperty(e, r, {get: n.oneOfGetter(t),
                    set: n.oneOfSetter(t)
                })
            }
        }, s._configure = function() {
            i = r(2), n = r(0)
        }
    }, function(t, e, r) {
        (t = t.exports).length = function(t) {
            for (var e, r = 0, i = 0; i < t.length; ++i)(e = t.charCodeAt(i)) < 128 ? r += 1 : e < 2048 ? r += 2 : 55296 == (64512 & e) && 56320 == (64512 & t.charCodeAt(i + 1)) ? (++i, r += 4) : r += 3;
            return r
        }, t.read = function(t, e, r) {
            if (r - e < 1) return "";
            for (var i, n = null, o = [], s = 0; e < r;)(i = t[e++]) < 128 ? o[s++] = i : 191 < i && i < 224 ? o[s++] = (31 & i) << 6 | 63 & t[e++] : 239 < i && i < 365 ? (i = ((7 & i) << 18 | (63 & t[e++]) << 12 | (63 & t[e++]) << 6 | 63 & t[e++]) - 65536, o[s++] = 55296 + (i >> 10), o[s++] = 56320 + (1023 & i)) : o[s++] = (15 & i) << 12 | (63 & t[e++]) << 6 | 63 & t[e++], 8191 < s && ((n = n || []).push(String.fromCharCode.apply(String, o)), s = 0);
            return n ? (s && n.push(String.fromCharCode.apply(String, o.slice(0, s))), n.join("")) : String.fromCharCode.apply(String, o.slice(0, s))
        }, t.write = function(t, e, r) {
            for (var i, n, o = r, s = 0; s < t.length; ++s)(i = t.charCodeAt(s)) < 128 ? e[r++] = i : (i < 2048 ? e[r++] = i >> 6 | 192 : (55296 == (64512 & i) && 56320 == (64512 & (n = t.charCodeAt(s + 1))) ? (++s, e[r++] = (i = 65536 + ((1023 & i) << 10) + (1023 & n)) >> 18 | 240, e[r++] = i >> 12 & 63 | 128) : e[r++] = i >> 12 | 224, e[r++] = i >> 6 & 63 | 128), e[r++] = 63 & i | 128);
            return r - o
        }
    }, function(e, r, i) {
        e.exports = c;
        var n = i(6);
        ((c.prototype = Object.create(n.prototype)).constructor = c).className = "Root";
        var o, s, u, a = i(2),
            h = i(1),
            f = i(7),
            l = i(0);

        function c(t) {
            n.call(this, "", t), this.deferred = [], this.files = [], this.names = []
        }

        function p() {}
        c.fromJSON = function(t, e) {
            return t = "string" == typeof t ? JSON.parse(t) : t, e = e || new c, t.options && e.setOptions(t.options), e.addJSON(t.nested)
        }, c.prototype.resolvePath = l.path.resolve, c.prototype.parseFromPbString = function e(r, i, n) {
            "function" == typeof i && (n = i, i = void 0);
            var o = this;
            if (!n) return l.asPromise(e, o, r, i);
            var a = null;
            if ("string" == typeof r) a = JSON.parse(r);
            else {
                if ("object" != t(r)) return void console.log("pb格式转化失败");
                a = r
            }

            function h(t, e) {
                var r;
                n && (r = n, n = null, r(t, e))
            }

            function f(t, e) {
                try {
                    if (l.isString(e) && "{" === e.charAt(0) && (e = JSON.parse(e)), l.isString(e)) {
                        s.filename = t;
                        var r, n = s(e, o, i),
                            u = 0;
                        if (n.imports)
                            for (; u < n.imports.length; ++u) c(r = n.imports[u]);
                        if (n.weakImports) {
                            for (u = 0; u < n.weakImports.length; ++u) r = n.weakImports[u];
                            c(r)
                        }
                    } else o.setOptions(e.options).addJSON(e.nested)
                } catch (t) {
                    h(t)
                }
                h(null, o)
            }

            function c(t) {
                -1 < o.names.indexOf(t) || (o.names.push(t), t in u && f(t, u[t]))
            }
            f(a.name, a.pbJsonStr)
        }, c.prototype.load = function t(e, r, i) {
            "function" == typeof r && (i = r, r = void 0);
            var n = this;
            if (!i) return l.asPromise(t, n, e, r);
            var o = i === p;

            function a(t, e) {
                if (i) {
                    var r = i;
                    if (i = null, o) throw t;
                    r(t, e)
                }
            }

            function h(t, e) {
                try {
                    if (l.isString(e) && "{" === e.charAt(0) && (e = JSON.parse(e)), l.isString(e)) {
                        s.filename = t;
                        var i, u = s(e, n, r),
                            h = 0;
                        if (u.imports)
                            for (; h < u.imports.length; ++h)(i = n.resolvePath(t, u.imports[h])) && f(i);
                        if (u.weakImports)
                            for (h = 0; h < u.weakImports.length; ++h)(i = n.resolvePath(t, u.weakImports[h])) && f(i, !0)
                    } else n.setOptions(e.options).addJSON(e.nested)
                } catch (t) {
                    a(t)
                }
                o || c || a(null, n)
            }

            function f(t, e) {
                var r = t.lastIndexOf("google/protobuf/");
                if (-1 < r && (r = t.substring(r)) in u && (t = r), !(-1 < n.files.indexOf(t)))
                    if (n.files.push(t), t in u) o ? h(t, u[t]) : (++c, setTimeout((function() {
                        --c, h(t, u[t])
                    })));
                    else if (o) {
                    var s;
                    try {
                        s = l.fs.readFileSync(t).toString("utf8")
                    } catch (r) {
                        return void(e || a(r))
                    }
                    h(t, s)
                } else ++c, l.fetch(t, (function(r, o) {
                    --c, i && (r ? e ? c || a(null, n) : a(r) : h(t, o))
                }))
            }
            var c = 0;
            l.isString(e) && (e = [e]);
            for (var d, y = 0; y < e.length; ++y)(d = n.resolvePath("", e[y])) && f(d);
            if (o) return n;
            c || a(null, n)
        }, c.prototype.loadSync = function(t, e) {
            if (!l.isNode) throw Error("not supported");
            return this.load(t, e, p)
        }, c.prototype.resolveAll = function() {
            if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map((function(t) {
                return "'extend " + t.extend + "' in " + t.parent.fullName
            })).join(", "));
            return n.prototype.resolveAll.call(this)
        };
        var d = /^[A-Z]/;

        function y(t, e) {
            var r, i = e.parent.lookup(e.extend);
            if (i) return ((r = new a(e.fullName, e.id, e.type, e.rule, void 0, e.options)).declaringField = e).extensionField = r, i.add(r), 1
        }
        c.prototype._handleAdd = function(t) {
            if (t instanceof a) void 0 === t.extend || t.extensionField || y(0, t) || this.deferred.push(t);
            else if (t instanceof h) d.test(t.name) && (t.parent[t.name] = t.values);
            else if (!(t instanceof f)) {
                if (t instanceof o)
                    for (var e = 0; e < this.deferred.length;) y(0, this.deferred[e]) ? this.deferred.splice(e, 1) : ++e;
                for (var r = 0; r < t.nestedArray.length; ++r) this._handleAdd(t._nestedArray[r]);
                d.test(t.name) && (t.parent[t.name] = t)
            }
        }, c.prototype._handleRemove = function(t) {
            var e;
            if (t instanceof a) void 0 !== t.extend && (t.extensionField ? (t.extensionField.parent.remove(t.extensionField), t.extensionField = null) : -1 < (e = this.deferred.indexOf(t)) && this.deferred.splice(e, 1));
            else if (t instanceof h) d.test(t.name) && delete t.parent[t.name];
            else if (t instanceof n) {
                for (var r = 0; r < t.nestedArray.length; ++r) this._handleRemove(t._nestedArray[r]);
                d.test(t.name) && delete t.parent[t.name]
            }
        }, c._configure = function() {
            o = i(3), s = i(18), u = i(21), a = i(2), h = i(1), f = i(7), l = i(0)
        }
    }, function(t, e, r) {
        t.exports = u;
        var i, n, o, s = r(6);

        function u(t, e) {
            s.call(this, t, e), this.methods = {}, this._methodsArray = null
        }

        function a(t) {
            return t._methodsArray = null, t
        }((u.prototype = Object.create(s.prototype)).constructor = u).className = "Service", u.fromJSON = function(t, e) {
            var r = new u(t, e.options);
            if (e.methods)
                for (var n = Object.keys(e.methods), o = 0; o < n.length; ++o) r.add(i.fromJSON(n[o], e.methods[n[o]]));
            return e.nested && r.addJSON(e.nested), r.comment = e.comment, r
        }, u.prototype.toJSON = function(t) {
            var e = s.prototype.toJSON.call(this, t),
                r = !!t && Boolean(t.keepComments);
            return n.toObject(["options", e && e.options || void 0, "methods", s.arrayToJSON(this.methodsArray, t) || {}, "nested", e && e.nested || void 0, "comment", r ? this.comment : void 0])
        }, Object.defineProperty(u.prototype, "methodsArray", {get: function() {
                return this._methodsArray || (this._methodsArray = n.toArray(this.methods))
            }
        }), u.prototype.get = function(t) {
            return this.methods[t] || s.prototype.get.call(this, t)
        }, u.prototype.resolveAll = function() {
            for (var t = this.methodsArray, e = 0; e < t.length; ++e) t[e].resolve();
            return s.prototype.resolve.call(this)
        }, u.prototype.add = function(t) {
            if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
            return t instanceof i ? a((this.methods[t.name] = t).parent = this) : s.prototype.add.call(this, t)
        }, u.prototype.remove = function(t) {
            if (t instanceof i) {
                if (this.methods[t.name] !== t) throw Error(t + " is not a member of " + this);
                return delete this.methods[t.name], t.parent = null, a(this)
            }
            return s.prototype.remove.call(this, t)
        }, u.prototype.create = function(t, e, r) {
            for (var i, s = new o.Service(t, e, r), u = 0; u < this.methodsArray.length; ++u) {
                var a = n.lcFirst((i = this._methodsArray[u]).resolve().name).replace(/[^$\w_]/g, "");
                s[a] = n.codegen(["r", "c"], n.isReserved(a) ? a + "_" : a)("return this.rpcCall(m,q,s,r,c)")({
                    m: i,
                    q: i.resolvedRequestType.ctor,
                    s: i.resolvedResponseType.ctor
                })
            }
            return s
        }, u._configure = function() {
            i = r(13), n = r(0), o = r(20)
        }
    }, function(t, e) {
        function r(t, e) {
            this.lo = t >>> 0, this.hi = e >>> 0
        }
        var i = (t.exports = r).zero = new r(0, 0);
        i.toNumber = function() {
            return 0
        }, i.zzEncode = i.zzDecode = function() {
            return this
        }, i.length = function() {
            return 1
        }, r.zeroHash = "\0\0\0\0\0\0\0\0", r.fromNumber = function(t) {
            if (0 === t) return i;
            var e = t < 0,
                n = (t = e ? -t : t) >>> 0;
            t = (t - n) / 4294967296 >>> 0;
            return e && (t = ~t >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++t && (t = 0))), new r(n, t)
        }, r.from = function(t) {
            return "number" == typeof t ? r.fromNumber(t) : "string" == typeof t || t instanceof String ? r.fromNumber(parseInt(t, 10)) : t.low || t.high ? new r(t.low >>> 0, t.high >>> 0) : i
        }, r.prototype.toNumber = function(t) {
            var e;
            return !t && this.hi >>> 31 ? (t = 1 + ~this.lo >>> 0, e = ~this.hi >>> 0, -(t + 4294967296 * (e = t ? e : e + 1 >>> 0))) : this.lo + 4294967296 * this.hi
        }, r.prototype.toLong = function(t) {
            return {
                low: 0 | this.lo,
                high: 0 | this.hi,
                unsigned: Boolean(t)
            }
        };
        var n = String.prototype.charCodeAt;
        r.fromHash = function(t) {
            return "\0\0\0\0\0\0\0\0" === t ? i : new r((n.call(t, 0) | n.call(t, 1) << 8 | n.call(t, 2) << 16 | n.call(t, 3) << 24) >>> 0, (n.call(t, 4) | n.call(t, 5) << 8 | n.call(t, 6) << 16 | n.call(t, 7) << 24) >>> 0)
        }, r.prototype.toHash = function() {
            return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
        }, r.prototype.zzEncode = function() {
            var t = this.hi >> 31;
            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this
        }, r.prototype.zzDecode = function() {
            var t = -(1 & this.lo);
            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this
        }, r.prototype.length = function() {
            var t = this.lo,
                e = (this.lo >>> 28 | this.hi << 4) >>> 0,
                r = this.hi >>> 24;
            return 0 == r ? 0 == e ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : e < 16384 ? e < 128 ? 5 : 6 : e < 2097152 ? 7 : 8 : r < 128 ? 9 : 10
        }
    }, function(e, r, i) {
        e.exports = u;
        var n, o, s = i(2);

        function u(t, e, r, i, n, u) {
            if (s.call(this, t, e, i, void 0, void 0, n, u), !o.isString(r)) throw TypeError("keyType must be a string");
            this.keyType = r, this.resolvedKeyType = null, this.map = !0
        }((u.prototype = Object.create(s.prototype)).constructor = u).className = "MapField", u.fromJSON = function(t, e) {
            return new u(t, e.id, e.keyType, e.type, e.options, e.comment)
        }, u.prototype.toJSON = function(t) {
            return t = !!t && Boolean(t.keepComments), o.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : void 0])
        }, u.prototype.resolve = function() {
            if (this.resolved) return this;
            if (void 0 === n.mapKey[this.keyType]) throw Error("invalid key type: " + this.keyType);
            return s.prototype.resolve.call(this)
        }, u.d = function(e, r, i) {
            return "function" == typeof i ? i = o.decorateType(i).name : i && "object" == t(i) && (i = o.decorateEnum(i).name),
                function(t, n) {
                    o.decorateType(t.constructor).add(new u(n, e, r, i))
                }
        }, u._configure = function() {
            n = i(5), o = i(0)
        }
    }, function(t, e, r) {
        t.exports = o;
        var i, n = r(4);

        function o(t, e, r, o, s, u, a, h) {
            if (i.isObject(s) ? (a = s, s = u = void 0) : i.isObject(u) && (a = u, u = void 0), void 0 !== e && !i.isString(e)) throw TypeError("type must be a string");
            if (!i.isString(r)) throw TypeError("requestType must be a string");
            if (!i.isString(o)) throw TypeError("responseType must be a string");
            n.call(this, t, a), this.type = e || "rpc", this.requestType = r, this.requestStream = !!s || void 0, this.responseType = o, this.responseStream = !!u || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = h
        }((o.prototype = Object.create(n.prototype)).constructor = o).className = "Method", o.fromJSON = function(t, e) {
            return new o(t, e.type, e.requestType, e.responseType, e.requestStream, e.responseStream, e.options, e.comment)
        }, o.prototype.toJSON = function(t) {
            return t = !!t && Boolean(t.keepComments), i.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : void 0])
        }, o.prototype.resolve = function() {
            return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), n.prototype.resolve.call(this))
        }, o._configure = function() {
            i = r(0)
        }
    }, function(t, e, r) {
        var i;

        function n(t) {
            if (t)
                for (var e = Object.keys(t), r = 0; r < e.length; ++r) this[e[r]] = t[e[r]]
        }(t.exports = n).create = function(t) {
            return this.$type.create(t)
        }, n.encode = function(t, e) {
            return arguments.length ? 1 == arguments.length ? this.$type.encode(t) : this.$type.encode(t, e) : this.$type.encode(this)
        }, n.encodeDelimited = function(t, e) {
            return this.$type.encodeDelimited(t, e)
        }, n.decode = function(t) {
            return this.$type.decode(t)
        }, n.decodeDelimited = function(t) {
            return this.$type.decodeDelimited(t)
        }, n.verify = function(t) {
            return this.$type.verify(t)
        }, n.fromObject = function(t) {
            return this.$type.fromObject(t)
        }, n.toObject = function(t, e) {
            return this.$type.toObject(t = t || this, e)
        }, n.prototype.toJSON = function() {
            return this.$type.toObject(this, i.toJSONOptions)
        }, n.set = function(t, e) {
            n[t] = e
        }, n.get = function(t) {
            return n[t]
        }, n._configure = function() {
            i = r(0)
        }
    }, function(t, e, r) {
        t.exports = h;
        var i, n = r(0),
            o = r(8);

        function s(t, e, r) {
            this.fn = t, this.len = e, this.next = void 0, this.val = r
        }

        function u() {}

        function a(t) {
            this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
        }

        function h() {
            this.len = 0, this.head = new s(u, 0, 0), this.tail = this.head, this.states = null
        }

        function f(t, e, r) {
            e[r] = 255 & t
        }

        function l(t, e) {
            this.len = t, this.next = void 0, this.val = e
        }

        function c(t, e, r) {
            for (; t.hi;) e[r++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
            for (; 127 < t.lo;) e[r++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
            e[r++] = t.lo
        }

        function p(t, e, r) {
            e[r++] = 0, n.float.writeFloatLE(t, e, r)
        }

        function d(t, e, r) {
            e[r++] = 16, n.float.writeDoubleLE(t, e, r)
        }

        function y(t, e, r) {
            e[r++] = 0 <= t ? 32 | t : 112 | -t
        }

        function g(t, e, r) {
            0 <= t ? (e[r++] = 48, e[r++] = t) : (e[r++] = 128, e[r++] = -t)
        }

        function v(t, e, r) {
            0 <= t ? e[r++] = 64 : (e[r++] = 144, t = -t), e[r++] = 255 & t, e[r++] = t >>> 8
        }

        function m(t, e, r) {
            e[r++] = 255 & t, e[r++] = t >> 8 & 255, e[r++] = t >> 16 & 255, e[r++] = t / 16777216 & 255
        }

        function b(t, e, r) {
            0 <= t ? e[r++] = 80 : (e[r++] = 160, t = -t), m(t, e, r)
        }

        function w(t, e, r) {
            0 <= t ? e[r++] = 96 : (e[r++] = 176, t = -t);
            var i = Math.floor(t / 4294967296);
            m(t - 4294967296 * i, e, r), m(i, e, r + 4)
        }

        function O(t, e, r) {
            e[r] = 255 & t, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24
        }
        h.create = n.Buffer ? function() {
            return (h.create = function() {
                return new(void 0)
            })()
        } : function() {
            return new h
        }, h.alloc = function(t) {
            return new n.Array(t)
        }, n.Array !== Array && (h.alloc = n.pool(h.alloc, n.Array.prototype.subarray)), h.prototype._push = function(t, e, r) {
            return this.tail = this.tail.next = new s(t, e, r), this.len += e, this
        }, (l.prototype = Object.create(s.prototype)).fn = function(t, e, r) {
            for (; 127 < t;) e[r++] = 127 & t | 128, t >>>= 7;
            e[r] = t
        }, h.prototype.uint32 = function(t) {
            return this.len += (this.tail = this.tail.next = new l((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this
        }, h.prototype.int32 = function(t) {
            return t < 0 ? this._push(c, 10, i.fromNumber(t)) : this.uint32(t)
        }, h.prototype.sint32 = function(t) {
            return this.uint32((t << 1 ^ t >> 31) >>> 0)
        }, h.prototype.int64 = h.prototype.uint64 = function(t) {
            var e;
            return Number.isSafeInteger(t) ? (e = 0 <= t ? t : -t) < 16 ? this._push(y, 1, t) : e < 256 ? this._push(g, 2, t) : e < 65536 ? this._push(v, 3, t) : e < 4294967296 ? this._push(b, 5, t) : this._push(w, 9, t) : -99999 < t && t < 99999 ? this._push(p, 5, t) : this._push(d, 9, t)
        }, h.prototype.sint64 = function(t) {
            return t = i.from(t).zzEncode(), this._push(c, t.length(), t)
        }, h.prototype.bool = function(t) {
            return this._push(f, 1, t ? 1 : 0)
        }, h.prototype.sfixed32 = h.prototype.fixed32 = function(t) {
            return this._push(O, 4, t >>> 0)
        }, h.prototype.sfixed64 = h.prototype.fixed64 = function(t) {
            return t = i.from(t), this._push(O, 4, t.lo)._push(O, 4, t.hi)
        }, h.prototype.float = function(t) {
            return this._push(n.float.writeFloatLE, 4, t)
        }, h.prototype.double = function(t) {
            return this._push(n.float.writeDoubleLE, 8, t)
        };
        var k = n.Array.prototype.set ? function(t, e, r) {
            e.set(t, r)
        } : function(t, e, r) {
            for (var i = 0; i < t.length; ++i) e[r + i] = t[i]
        };
        h.prototype.bytes = function(t) {
            var e, r = t.length >>> 0;
            return r ? (n.isString(t) && (e = h.alloc(r = o.length(t)), o.write(t, e, 0), t = e), this.uint32(r)._push(k, r, t)) : this._push(f, 1, 0)
        }, h.prototype.string = function(t) {
            var e = o.length(t);
            return e ? this.uint32(e)._push(o.write, e, t) : this._push(f, 1, 0)
        }, h.prototype.fork = function() {
            return this.states = new a(this), this.head = this.tail = new s(u, 0, 0), this.len = 0, this
        }, h.prototype.reset = function() {
            return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new s(u, 0, 0), this.len = 0), this
        }, h.prototype.ldelim = function() {
            var t = this.head,
                e = this.tail,
                r = this.len;
            return this.reset().uint32(r), r && (this.tail.next = t.next, this.tail = e, this.len += r), this
        }, h.prototype.finish = function() {
            for (var t = this.head.next, e = this.constructor.alloc(this.len), r = 0; t;) t.fn(t.val, e, r), r += t.len, t = t.next;
            return e
        }, h._configure = function() {
            i = r(11), r(17), o = r(8)
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, r) {
        (t = t.exports).length = function(t) {
            var e = t.length;
            if (!e) return 0;
            for (var r = 0; 1 < --e % 4 && "=" === t.charAt(e);) ++r;
            return Math.ceil(3 * t.length) / 4 - r
        };
        for (var i = new Array(64), n = new Array(123), o = 0; o < 64;) n[i[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : o - 59 | 43] = o++;
        t.encode = function(t, e, r) {
            for (var n, o = null, s = [], u = 0, a = 0; e < r;) {
                var h = t[e++];
                switch (a) {
                    case 0:
                        s[u++] = i[h >> 2], n = (3 & h) << 4, a = 1;
                        break;
                    case 1:
                        s[u++] = i[n | h >> 4], n = (15 & h) << 2, a = 2;
                        break;
                    case 2:
                        s[u++] = i[n | h >> 6], s[u++] = i[63 & h], a = 0
                }
                8191 < u && ((o = o || []).push(String.fromCharCode.apply(String, s)), u = 0)
            }
            return a && (s[u++] = i[n], s[u++] = 61, 1 === a && (s[u++] = 61)), o ? (u && o.push(String.fromCharCode.apply(String, s.slice(0, u))), o.join("")) : String.fromCharCode.apply(String, s.slice(0, u))
        };
        var s = "invalid encoding";
        t.decode = function(t, e, r) {
            for (var i, o = r, u = 0, a = 0; a < t.length;) {
                var h = t.charCodeAt(a++);
                if (61 === h && 1 < u) break;
                if (void 0 === (h = n[h])) throw Error(s);
                switch (u) {
                    case 0:
                        i = h, u = 1;
                        break;
                    case 1:
                        e[r++] = i << 2 | (48 & h) >> 4, i = h, u = 2;
                        break;
                    case 2:
                        e[r++] = (15 & i) << 4 | (60 & h) >> 2, i = h, u = 3;
                        break;
                    case 3:
                        e[r++] = (3 & i) << 6 | h, u = 0
                }
            }
            if (1 === u) throw Error(s);
            return r - o
        }, t.test = function(t) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
        }
    }, function(t, e, r) {
        var i, n, o, s, u, a, h, f, l, c, p;
        (t.exports = _).filename = null, _.defaults = {
            keepCase: !1
        };
        var d = /^[1-9][0-9]*$/,
            y = /^-?[1-9][0-9]*$/,
            g = /^0[x][0-9a-fA-F]+$/,
            v = /^-?0[x][0-9a-fA-F]+$/,
            m = /^0[0-7]+$/,
            b = /^-?0[0-7]+$/,
            w = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
            O = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
            k = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,
            A = /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/;

        function _(t, e, r) {
            e instanceof n || (r = e, e = new n), r = r || _.defaults;
            var S, x, j, N, E, T = i(t, r.alternateCommentMode || !1),
                I = T.next,
                B = T.push,
                R = T.peek,
                L = T.skip,
                D = T.cmnt,
                q = !0,
                F = !1,
                M = e,
                J = r.keepCase ? function(t) {
                    return t
                } : p.camelCase;

            function C(t, e, r) {
                var i = _.filename;
                return r || (_.filename = null), Error("illegal " + (e || "token") + " '" + t + "' (" + (i ? i + ", " : "") + "line " + T.line + ")")
            }

            function P() {
                var t, e = [];
                do {
                    if ('"' !== (t = I()) && "'" !== t) throw C(t)
                } while (e.push(I()), L(t), '"' === (t = R()) || "'" === t);
                return e.join("")
            }

            function V(t) {
                var e = I();
                switch (e) {
                    case "'":
                    case '"':
                        return B(e), P();
                    case "true":
                    case "TRUE":
                        return !0;
                    case "false":
                    case "FALSE":
                        return !1
                }
                try {
                    var r = e,
                        i = 1;
                    switch ("-" === r.charAt(0) && (i = -1, r = r.substring(1)), r) {
                        case "inf":
                        case "INF":
                        case "Inf":
                            return i * (1 / 0);
                        case "nan":
                        case "NAN":
                        case "Nan":
                        case "NaN":
                            return NaN;
                        case "0":
                            return 0
                    }
                    if (d.test(r)) return i * parseInt(r, 10);
                    if (g.test(r)) return i * parseInt(r, 16);
                    if (m.test(r)) return i * parseInt(r, 8);
                    if (w.test(r)) return i * parseFloat(r);
                    throw C(r, "number", !0)
                } catch (r) {
                    if (t && k.test(e)) return e;
                    throw C(e, "value")
                }
            }

            function $(t, e) {
                for (var r; !e || '"' !== (r = R()) && "'" !== r ? t.push([r = z(I()), L("to", !0) ? z(I()) : r]) : t.push(P()), L(",", !0););
                L(";")
            }

            function z(t, e) {
                switch (t) {
                    case "max":
                    case "MAX":
                    case "Max":
                        return 536870911;
                    case "0":
                        return 0
                }
                if (!e && "-" === t.charAt(0)) throw C(t, "id");
                if (y.test(t)) return parseInt(t, 10);
                if (v.test(t)) return parseInt(t, 16);
                if (b.test(t)) return parseInt(t, 8);
                throw C(t, "id")
            }

            function U(t, e) {
                switch (e) {
                    case "option":
                        return W(t, e), L(";"), 1;
                    case "message":
                        var r = t,
                            i = e;
                        if (!O.test(i = I())) throw C(i, "type name");
                        var n = new o(i);
                        return Z(n, (function(t) {
                            if (!U(n, t)) switch (t) {
                                case "map":
                                    var e = n;
                                    L("<");
                                    var r = I();
                                    if (void 0 === c.mapKey[r]) throw C(r, "type");
                                    L(",");
                                    var i = I();
                                    if (!k.test(i)) throw C(i, "type");
                                    L(">");
                                    var o = I();
                                    if (!O.test(o)) throw C(o, "name");
                                    L("=");
                                    var s = new u(J(o), z(I()), r, i);
                                    Z(s, (function(t) {
                                        if ("option" !== t) throw C(t);
                                        W(s, t), L(";")
                                    }), (function() {
                                        G(s)
                                    })), e.add(s);
                                    break;
                                case "required":
                                case "optional":
                                case "repeated":
                                    H(n, t);
                                    break;
                                case "oneof":
                                    if (o = n, r = t, !O.test(r = I())) throw C(r, "name");
                                    var h = new a(J(r));
                                    Z(h, (function(t) {
                                        "option" === t ? (W(h, t), L(";")) : (B(t), H(h, "optional"))
                                    })), o.add(h);
                                    break;
                                case "extensions":
                                    $(n.extensions || (n.extensions = []));
                                    break;
                                case "reserved":
                                    $(n.reserved || (n.reserved = []), !0);
                                    break;
                                default:
                                    if (!F || !k.test(t)) throw C(t);
                                    B(t), H(n, "optional")
                            }
                        })), r.add(n), 1;
                    case "enum":
                        if (i = t, r = e, !O.test(r = I())) throw C(r, "name");
                        var s = new h(r);
                        return Z(s, (function(t) {
                            switch (t) {
                                case "option":
                                    W(s, t), L(";");
                                    break;
                                case "reserved":
                                    $(s.reserved || (s.reserved = []), !0);
                                    break;
                                default:
                                    var e = s,
                                        r = t;
                                    if (!O.test(r)) throw C(r, "name");
                                    L("=");
                                    var i = z(I(), !0),
                                        n = {};
                                    Z(n, (function(t) {
                                        if ("option" !== t) throw C(t);
                                        W(n, t), L(";")
                                    }), (function() {
                                        G(n)
                                    })), e.add(r, i, n.comment)
                            }
                        })), i.add(s), 1;
                    case "service":
                        var p = t,
                            d = e;
                        if (!O.test(d = I())) throw C(d, "service name");
                        var y = new f(d);
                        return Z(y, (function(t) {
                            if (!U(y, t)) {
                                if ("rpc" !== t) throw C(t);
                                var e = y,
                                    r = t;
                                if (!O.test(t = I())) throw C(t, "name");
                                var i, n, o, s = t;
                                if (L("("), L("stream", !0) && (n = !0), !k.test(t = I())) throw C(t);
                                if (i = t, L(")"), L("returns"), L("("), L("stream", !0) && (o = !0), !k.test(t = I())) throw C(t);
                                t = t, L(")");
                                var u = new l(s, r, i, t, n, o);
                                Z(u, (function(t) {
                                    if ("option" !== t) throw C(t);
                                    W(u, t), L(";")
                                })), e.add(u)
                            }
                        })), p.add(y), 1;
                    case "extend":
                        var g = t;
                        if (d = e, !k.test(d = I())) throw C(d, "reference");
                        var v = d;
                        return Z(null, (function(t) {
                            switch (t) {
                                case "required":
                                case "repeated":
                                case "optional":
                                    H(g, t, v);
                                    break;
                                default:
                                    if (!F || !k.test(t)) throw C(t);
                                    B(t), H(g, "optional", v)
                            }
                        })), 1
                }
            }

            function Z(t, e, r) {
                var i = T.line;
                if (t && (t.comment = D(), t.filename = _.filename), L("{", !0)) {
                    for (var n;
                        "}" !== (n = I());) e(n);
                    L(";", !0)
                } else r && r(), L(";"), t && "string" != typeof t.comment && (t.comment = D(i))
            }

            function H(t, e, r) {
                var i = I();
                if ("group" === i) {
                    var n = t,
                        u = e,
                        a = I();
                    if (!O.test(a)) throw C(a, "name");
                    var h = p.lcFirst(a);
                    a === h && (a = p.ucFirst(a)), L("=");
                    var f = z(I()),
                        l = new o(a);
                    return l.group = !0, (h = new s(h, f, a, u)).filename = _.filename, Z(l, (function(t) {
                        switch (t) {
                            case "option":
                                W(l, t), L(";");
                                break;
                            case "required":
                            case "optional":
                            case "repeated":
                                H(l, t);
                                break;
                            default:
                                throw C(t)
                        }
                    })), void n.add(l).add(h)
                }
                if (!k.test(i)) throw C(i, "type");
                if (f = I(), !O.test(f)) throw C(f, "name");
                f = J(f), L("=");
                var d = new s(f, z(I()), i, e, r);
                Z(d, (function(t) {
                    if ("option" !== t) throw C(t);
                    W(d, t), L(";")
                }), (function() {
                    G(d)
                })), t.add(d), F || !d.repeated || void 0 === c.packed[i] && void 0 !== c.basic[i] || d.setOption("packed", !1, !0)
            }

            function W(t, e) {
                var r = L("(", !0);
                if (!k.test(e = I())) throw C(e, "name");
                var i = e;
                r && (L(")"), i = "(" + i + ")", e = R(), A.test(e) && (i += e, I())), L("="),
                    function t(e, r) {
                        if (L("{", !0))
                            do {
                                if (!O.test(E = I())) throw C(E, "name");
                                "{" === R() ? t(e, r + "." + E) : (L(":"), "{" === R() ? t(e, r + "." + E) : K(e, r + "." + E, V(!0)))
                            } while (!L("}", !0));
                        else K(e, r, V(!0))
                    }(t, i)
            }

            function K(t, e, r) {
                t.setOption && t.setOption(e, r)
            }

            function G(t) {
                if (L("[", !0)) {
                    for (; W(t, "option"), L(",", !0););
                    L("]")
                }
                return t
            }
            for (; null !== (E = I());) switch (E) {
                case "package":
                    if (!q) throw C(E);
                    if (void 0 !== S) throw C("package");
                    if (S = I(), !k.test(S)) throw C(S, "name");
                    M = M.define(S), L(";");
                    break;
                case "import":
                    if (!q) throw C(E);
                    var X, Q;
                    switch (Q = void 0, R()) {
                        case "weak":
                            Q = j = j || [], I();
                            break;
                        case "public":
                            I();
                        default:
                            Q = x = x || []
                    }
                    X = P(), L(";"), Q.push(X);
                    break;
                case "syntax":
                    if (!q) throw C(E);
                    if (L("="), N = P(), !(F = "proto3" === N) && "proto2" !== N) throw C(N, "syntax");
                    L(";");
                    break;
                case "option":
                    if (!q) throw C(E);
                    W(M, E), L(";");
                    break;
                default:
                    if (U(M, E)) {
                        q = !1;
                        continue
                    }
                    throw C(E)
            }
            return _.filename = null, {
                package: S,
                imports: x,
                weakImports: j,
                syntax: N,
                root: e
            }
        }
        _._configure = function() {
            i = r(19), n = r(9), o = r(3), s = r(2), u = r(12), a = r(7), h = r(1), f = r(10), l = r(13), c = r(5), p = r(0)
        }
    }, function(t, e) {
        t.exports = c;
        var r = /[\s{}=;:[\],'"()<>]/g,
            i = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
            n = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
            o = /^ *[*/]+ */,
            s = /^\s*\*?\/*/,
            u = /\n/g,
            a = /\s/,
            h = /\\(.?)/g,
            f = {
                0: "\0",
                r: "\r",
                n: "\n",
                t: "\t"
            };

        function l(t) {
            return t.replace(h, (function(t, e) {
                switch (e) {
                    case "\\":
                    case "":
                        return e;
                    default:
                        return f[e] || ""
                }
            }))
        }

        function c(t, e) {
            t = t.toString();
            var h = 0,
                f = t.length,
                c = 1,
                p = null,
                d = null,
                y = 0,
                g = !1,
                v = [],
                m = null;

            function b(t) {
                return Error("illegal " + t + " (line " + c + ")")
            }

            function w(e) {
                return t.charAt(e)
            }

            function O(r, i) {
                p = t.charAt(r++), y = c, g = !1;
                var n, a = r - (e ? 2 : 3);
                do {
                    if (--a < 0 || "\n" === (n = t.charAt(a))) {
                        g = !0;
                        break
                    }
                } while (" " === n || "\t" === n);
                for (var h = t.substring(r, i).split(u), f = 0; f < h.length; ++f) h[f] = h[f].replace(e ? s : o, "").trim();
                d = h.join("\n").trim()
            }

            function k(e) {
                var r = A(e);
                return e = t.substring(e, r), /^\s*\/{1,2}/.test(e)
            }

            function A(t) {
                for (var e = t; e < f && "\n" !== w(e);) e++;
                return e
            }

            function _() {
                if (0 < v.length) return v.shift();
                if (m) {
                    var o = "'" === m ? n : i;
                    o.lastIndex = h - 1;
                    var s = o.exec(t);
                    if (!s) throw b("string");
                    return h = o.lastIndex, S(m), m = null, l(s[1])
                }
                var u, p, d, y, g;
                do {
                    if (h === f) return null;
                    for (u = !1; a.test(d = w(h));)
                        if ("\n" === d && ++c, ++h === f) return null;
                    if ("/" === w(h)) {
                        if (++h === f) throw b("comment");
                        if ("/" === w(h))
                            if (e) {
                                if (g = !1, k(y = h))
                                    for (g = !0;
                                        (h = A(h)) !== f && k(++h););
                                else h = Math.min(f, A(h) + 1);
                                g && O(y, h), c++, u = !0
                            } else {
                                for (g = "/" === w(y = h + 1);
                                    "\n" !== w(++h);)
                                    if (h === f) return null;++h, g && O(y, h - 1), ++c, u = !0
                            } else {
                            if ("*" !== (d = w(h))) return "/";
                            y = h + 1, g = e || "*" === w(y);
                            do {
                                if ("\n" === d && ++c, ++h === f) throw b("comment")
                            } while (p = d, d = w(h), "*" !== p || "/" !== d);
                            ++h, g && O(y, h - 2), u = !0
                        }
                    }
                } while (u);
                var _ = h;
                if (r.lastIndex = 0, !r.test(w(_++))) for (; _ < f && !r.test(w(_));) ++_;
                return '"' !== (o = t.substring(h, h = _)) && "'" !== o || (m = o), o
            }

            function S(t) {
                v.push(t)
            }

            function x() {
                if (!v.length) {
                    var t = _();
                    if (null === t) return null;
                    S(t)
                }
                return v[0]
            }
            return Object.defineProperty({
                next: _,
                peek: x,
                push: S,
                skip: function(t, e) {
                    var r = x();
                    if (r === t) return _(), !0;
                    if (!e) throw b("token '" + r + "', '" + t + "' expected");
                    return !1
                },
                cmnt: function(t) {
                    var r = null;
                    return void 0 === t ? y === c - 1 && (e || "*" === p || g) && (r = d) : (y < t && x(), y !== t || g || !e && "/" !== p || (r = d)), r
                }
            }, "line", {get: function() {
                    return c
                }
            })
        }
        c.unescape = l
    }, function(t, e, r) {
        t.exports = n;
        var i = r(0);

        function n(t, e, r) {
            if ("function" != typeof t) throw TypeError("rpcImpl must be a function");
            i.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = Boolean(e), this.responseDelimited = Boolean(r)
        }((n.prototype = Object.create(i.EventEmitter.prototype)).constructor = n).prototype.rpcCall = function t(e, r, n, o, s) {
            if (!o) throw TypeError("request must be specified");
            var u = this;
            if (!s) return i.asPromise(t, u, e, r, n, o);
            if (u.rpcImpl) try {
                return u.rpcImpl(e, r[u.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), (function(t, r) {
                    if (t) return u.emit("error", t, e), s(t);
                    if (null !== r) {
                        if (!(r instanceof n)) try {
                            r = n[u.responseDelimited ? "decodeDelimited" : "decode"](r)
                        } catch (t) {
                            return u.emit("error", t, e), s(t)
                        }
                        return u.emit("data", r, e), s(null, r)
                    }
                    u.end(!0)
                }))
            } catch (r) {
                return u.emit("error", r, e), void setTimeout((function() {
                    s(r)
                }), 0)
            } else setTimeout((function() {
                s(Error("already ended"))
            }), 0)
        }, n.prototype.end = function(t) {
            return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
        }
    }, function(t, e) {
        t.exports = i;
        var r = /\/|\./;

        function i(t, e) {
            r.test(t) || (t = "google/protobuf/" + t + ".proto", e = {
                nested: {
                    google: {
                        nested: {
                            protobuf: {
                                nested: e
                            }
                        }
                    }
                }
            }), i[t] = e
        }
        i("any", {
            Any: {
                fields: {
                    type_url: {
                        type: "string",
                        id: 1
                    },
                    value: {
                        type: "bytes",
                        id: 2
                    }
                }
            }
        }), i("duration", {
            Duration: t = {
                fields: {
                    seconds: {
                        type: "int64",
                        id: 1
                    },
                    nanos: {
                        type: "int32",
                        id: 2
                    }
                }
            }
        }), i("timestamp", {
            Timestamp: t
        }), i("empty", {
            Empty: {
                fields: {}
            }
        }), i("struct", {
            Struct: {
                fields: {
                    fields: {
                        keyType: "string",
                        type: "Value",
                        id: 1
                    }
                }
            },
            Value: {
                oneofs: {
                    kind: {
                        oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
                    }
                },
                fields: {
                    nullValue: {
                        type: "NullValue",
                        id: 1
                    },
                    numberValue: {
                        type: "double",
                        id: 2
                    },
                    stringValue: {
                        type: "string",
                        id: 3
                    },
                    boolValue: {
                        type: "bool",
                        id: 4
                    },
                    structValue: {
                        type: "Struct",
                        id: 5
                    },
                    listValue: {
                        type: "ListValue",
                        id: 6
                    }
                }
            },
            NullValue: {
                values: {
                    NULL_VALUE: 0
                }
            },
            ListValue: {
                fields: {
                    values: {
                        rule: "repeated",
                        type: "Value",
                        id: 1
                    }
                }
            }
        }), i("wrappers", {
            DoubleValue: {
                fields: {
                    value: {
                        type: "double",
                        id: 1
                    }
                }
            },
            FloatValue: {
                fields: {
                    value: {
                        type: "float",
                        id: 1
                    }
                }
            },
            Int64Value: {
                fields: {
                    value: {
                        type: "int64",
                        id: 1
                    }
                }
            },
            UInt64Value: {
                fields: {
                    value: {
                        type: "uint64",
                        id: 1
                    }
                }
            },
            Int32Value: {
                fields: {
                    value: {
                        type: "int32",
                        id: 1
                    }
                }
            },
            UInt32Value: {
                fields: {
                    value: {
                        type: "uint32",
                        id: 1
                    }
                }
            },
            BoolValue: {
                fields: {
                    value: {
                        type: "bool",
                        id: 1
                    }
                }
            },
            StringValue: {
                fields: {
                    value: {
                        type: "string",
                        id: 1
                    }
                }
            },
            BytesValue: {
                fields: {
                    value: {
                        type: "bytes",
                        id: 1
                    }
                }
            }
        }), i("field_mask", {
            FieldMask: {
                fields: {
                    paths: {
                        rule: "repeated",
                        type: "string",
                        id: 1
                    }
                }
            }
        }), i.get = function(t) {
            return i[t] || null
        }
    }, function(t, e, r) {
        t.exports = u;
        var i, n, o = r(0);

        function s(t, e) {
            return RangeError("index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len)
        }

        function u(t) {
            this.buf = t, this.pos = 0, this.len = t.length
        }
        var a, h = "undefined" != typeof Uint8Array ? function(t) {
            if (t instanceof Uint8Array || Array.isArray(t)) return new u(t);
            if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return new u(new Uint8Array(t));
            throw Error("illegal buffer")
        } : function(t) {
            if (Array.isArray(t)) return new u(t);
            throw Error("illegal buffer")
        };

        function f() {
            var t = new i(0, 0),
                e = 0;
            if (!(4 < this.len - this.pos)) {
                for (; e < 3; ++e) {
                    if (this.pos >= this.len) throw s(this);
                    if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t
                }
                return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0, t
            }
            for (; e < 4; ++e)
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t;
            if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
            if (e = 0, 4 < this.len - this.pos) {
                for (; e < 5; ++e)
                    if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
            } else
                for (; e < 5; ++e) {
                    if (this.pos >= this.len) throw s(this);
                    if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
                }
            throw Error("invalid varint encoding")
        }

        function l(t, e) {
            return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0
        }

        function c() {
            if (this.pos + 8 > this.len) throw s(this, 8);
            return new i(l(this.buf, this.pos += 4), l(this.buf, this.pos += 4))
        }
        u.create = o.Buffer ? function(t) {
            return (u.create = function(t) {
                return o.Buffer.isBuffer(t) ? new(void 0)(t) : h(t)
            })(t)
        } : h, u.prototype._slice = o.Array.prototype.subarray || o.Array.prototype.slice, u.prototype.uint32 = (a = 4294967295, function() {
            if (a = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return a;
            if (a = (a | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return a;
            if (a = (a | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return a;
            if (a = (a | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return a;
            if (a = (a | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return a;
            if ((this.pos += 5) > this.len) throw this.pos = this.len, s(this, 10);
            return a
        }), u.prototype.int32 = function() {
            return 0 | this.uint32()
        }, u.prototype.sint32 = function() {
            var t = this.uint32();
            return t >>> 1 ^ -(1 & t) | 0
        }, u.prototype.bool = function() {
            return 0 !== this.uint32()
        }, u.prototype.fixed32 = function() {
            if (this.pos + 4 > this.len) throw s(this, 4);
            return l(this.buf, this.pos += 4)
        }, u.prototype.sfixed32 = function() {
            if (this.pos + 4 > this.len) throw s(this, 4);
            return 0 | l(this.buf, this.pos += 4)
        }, u.prototype.uint64 = function() {
            if (this.pos + 1 > this.len) throw s(this, 1);
            var t = 0,
                e = this.buf[this.pos];
            switch (e >> 4) {
                case 0:
                    if (this.pos + 5 > this.len) throw s(this, 5);
                    t = o.float.readFloatLE(this.buf, this.pos + 1), this.pos += 5;
                    break;
                case 1:
                    if (this.pos + 9 > this.len) throw s(this, 9);
                    t = o.float.readDoubleLE(this.buf, this.pos + 1), this.pos += 9;
                    break;
                case 2:
                case 7:
                    t = 15 & e, this.pos += 1;
                    break;
                case 3:
                case 8:
                    if (this.pos + 2 > this.len) throw s(this, 2);
                    t = this.buf[this.pos + 1], this.pos += 2;
                    break;
                case 4:
                case 9:
                    if (this.pos + 3 > this.len) throw s(this, 3);
                    t = (this.buf[this.pos + 2] << 8 | this.buf[this.pos + 1]) >>> 0, this.pos += 3;
                    break;
                case 5:
                case 10:
                    if (this.pos + 5 > this.len) throw s(this, 5);
                    t = Math.floor(16777216 * this.buf[this.pos + 4] + 65536 * this.buf[this.pos + 3] + 256 * this.buf[this.pos + 2] + this.buf[this.pos + 1]), this.pos += 5;
                    break;
                case 6:
                case 11:
                    if (this.pos + 9 > this.len) throw s(this, 9);
                    var r = Math.floor(16777216 * this.buf[this.pos + 4] + 65536 * this.buf[this.pos + 3] + 256 * this.buf[this.pos + 2] + this.buf[this.pos + 1]),
                        i = Math.floor(16777216 * this.buf[this.pos + 8] + 65536 * this.buf[this.pos + 7] + 256 * this.buf[this.pos + 6] + this.buf[this.pos + 5]);
                    t = Math.floor(4294967296 * i + r), this.pos += 9
            }
            return 7 <= e >> 4 ? -t : t
        }, u.prototype.float = function() {
            if (this.pos + 4 > this.len) throw s(this, 4);
            var t = o.float.readFloatLE(this.buf, this.pos);
            return this.pos += 4, t
        }, u.prototype.double = function() {
            if (this.pos + 8 > this.len) throw s(this, 4);
            var t = o.float.readDoubleLE(this.buf, this.pos);
            return this.pos += 8, t
        }, u.prototype.bytes = function() {
            var t = this.uint32(),
                e = this.pos,
                r = this.pos + t;
            if (r > this.len) throw s(this, t);
            return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(e, r) : e === r ? new this.buf.constructor(0) : this._slice.call(this.buf, e, r)
        }, u.prototype.string = function() {
            var t = this.bytes();
            return n.read(t, 0, t.length)
        }, u.prototype.skip = function(t) {
            if ("number" == typeof t) {
                if (this.pos + t > this.len) throw s(this, t);
                this.pos += t
            } else
                do {
                    if (this.pos >= this.len) throw s(this)
                } while (128 & this.buf[this.pos++]);
            return this
        }, u.prototype.skipType = function(t) {
            switch (t) {
                case 0:
                    this.skip();
                    break;
                case 4:
                    var e = this.buf[this.pos] >> 4,
                        r = 0;
                    0 == e ? r = 5 : 1 == e ? r = 9 : 2 == e || 7 == e ? r = 1 : 3 == e || 8 == e ? r = 2 : 4 == e || 9 == e ? r = 3 : 5 == e || 10 == e ? r = 5 : 6 != e && 11 != e || (r = 9), this.skip(r);
                    break;
                case 1:
                    this.skip(8);
                    break;
                case 2:
                    this.skip(this.uint32());
                    break;
                case 3:
                    for (; 4 != (t = 7 & this.uint32());) this.skipType(t);
                    break;
                case 5:
                    this.skip(4);
                    break;
                default:
                    throw Error("invalid wire type " + t + " at offset " + this.pos)
            }
            return this
        }, u._configure = function() {
            i = r(11), n = r(8);
            var t = o.Long ? "toLong" : "toNumber";
            o.merge(u.prototype, {
                int64: function() {
                    return f.call(this)[t](!1)
                },
                sint64: function() {
                    return f.call(this).zzDecode()[t](!1)
                },
                fixed64: function() {
                    return c.call(this)[t](!0)
                },
                sfixed64: function() {
                    return c.call(this)[t](!1)
                }
            })
        }
    }, function(e, r, i) {
        var n, o;

        function s(t, e) {
            return t.name + ": " + e + (t.repeated && "array" !== e ? "[]" : t.map && "object" !== e ? "{k:" + t.keyType + "}" : "") + " expected"
        }

        function u(t, e, r, i) {
            if (i = i.types, t.resolvedType) {
                if (t.resolvedType instanceof n) {
                    if (Object.keys(t.resolvedType.values).indexOf(r) < 0) return s(t, "enum value")
                } else if (i = i[e].verify(r)) return t.name + "." + i
            } else switch (t.type) {
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                    if (!o.isInteger(r)) return s(t, "integer");
                    break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    if (!(o.isInteger(r) || r && o.isInteger(r.low) && o.isInteger(r.high))) return s(t, "integer|Long");
                    break;
                case "float":
                case "double":
                    if ("number" != typeof r) return s(t, "number");
                    break;
                case "bool":
                    if ("boolean" != typeof r) return s(t, "boolean");
                    break;
                case "string":
                    if (!o.isString(r)) return s(t, "string");
                    break;
                case "bytes":
                    if (!(r && "number" == typeof r.length || o.isString(r))) return s(t, "buffer")
            }
        }(e.exports = function(e) {
            return function(r) {
                return function(i) {
                    var n;
                    if ("object" != t(i) || null === i) return "object expected";
                    var a, h = {};
                    e.oneofsArray.length && (a = {});
                    for (var f = 0; f < e.fieldsArray.length; ++f) {
                        var l, c = e._fieldsArray[f].resolve(),
                            p = i[c.name];
                        if (!c.optional || null != p && i.hasOwnProperty(c.name))
                            if (c.map) {
                                if (!o.isObject(p)) return s(c, "object");
                                var d = Object.keys(p);
                                for (l = 0; l < d.length; ++l) {
                                    if (n = function(t, e) {
                                            switch (t.keyType) {
                                                case "int32":
                                                case "uint32":
                                                case "sint32":
                                                case "fixed32":
                                                case "sfixed32":
                                                    if (!o.key32Re.test(e)) return s(t, "integer key");
                                                    break;
                                                case "int64":
                                                case "uint64":
                                                case "sint64":
                                                case "fixed64":
                                                case "sfixed64":
                                                    if (!o.key64Re.test(e)) return s(t, "integer|Long key");
                                                    break;
                                                case "bool":
                                                    if (!o.key2Re.test(e)) return s(t, "boolean key")
                                            }
                                        }(c, d[l])) return n;
                                    if (n = u(c, f, p[d[l]], r)) return n
                                }
                            } else if (c.repeated) {
                            if (!Array.isArray(p)) return s(c, "array");
                            for (l = 0; l < p.length; ++l)
                                if (n = u(c, f, p[l], r)) return n
                        } else {
                            if (c.partOf) {
                                var y = c.partOf.name;
                                if (1 === h[c.partOf.name] && 1 === a[y]) return c.partOf.name + ": multiple values";
                                a[y] = 1
                            }
                            if (n = u(c, f, p, r)) return n
                        }
                    }
                }
            }
        })._configure = function() {
            n = i(1), o = i(0)
        }
    }, function(t, e, r) {
        var i, n;
        (t.exports = function(t) {
            return function(e) {
                var r = e.Writer,
                    o = e.types,
                    s = e.util;
                return function(e, u) {
                    u = u || r.create();
                    for (var a = t.fieldsArray.slice().sort(s.compareFieldsById), h = 0; h < a.length; h++) {
                        var f = a[h],
                            l = t._fieldsArray.indexOf(f),
                            c = f.resolvedType instanceof i ? "uint32" : f.type,
                            p = n.basic[c],
                            d = e[f.name];
                        if (f.resolvedType instanceof i && "string" == typeof d && (d = o[l].values[d]), f.map) {
                            if (null != d && e.hasOwnProperty(f.name))
                                for (var y = Object.keys(d), g = 0; g < y.length; ++g) u.uint32((f.id << 3 | 2) >>> 0).fork().uint32(8 | n.mapKey[f.keyType])[f.keyType](y[g]), (void 0 === p ? o[l].encode(d[y[g]], u.uint32(18).fork()).ldelim() : u.uint32(16 | p)[c](d[y[g]])).ldelim()
                        } else if (f.repeated) {
                            if (d && d.length)
                                if (f.packed && void 0 !== n.packed[c]) {
                                    u.uint32((f.id << 3 | 2) >>> 0).fork();
                                    for (var v = 0; v < d.length; v++) u[c](d[v]);
                                    u.ldelim()
                                } else
                                    for (var m = 0; m < d.length; m++) void 0 === p ? f.resolvedType.group ? o[l].encode(d[m], u.uint32((f.id << 3 | 3) >>> 0)).uint32((f.id << 3 | 4) >>> 0) : o[l].encode(d[m], u.uint32((f.id << 3 | 2) >>> 0).fork()).ldelim() : u.uint32((f.id << 3 | p) >>> 0)[c](d[m])
                        } else(!f.optional || null != d && e.hasOwnProperty(f.name)) && (f.optional || null != d && e.hasOwnProperty(f.name) || console.warn("注意啦!!!很大概率会报错 类型:", e.$type ? e.$type.name : "不晓得", "没有设置对应的属性:", f.name, "检查是不是proto文件属性设置为了required"), void 0 === p ? f.resolvedType.group ? o[l].encode(d, u.uint32((f.id << 3 | 3) >>> 0)).uint32((f.id << 3 | 4) >>> 0) : o[l].encode(d, u.uint32((f.id << 3 | 2) >>> 0).fork()).ldelim() : u.uint32((f.id << 3 | p) >>> 0)[c](d))
                    }
                    return u
                }
            }
        })._configure = function() {
            i = r(1), n = r(5)
        }
    }, function(e, r, i) {
        var n, o, s;
        (e.exports = function(e) {
            return function(r) {
                var i = r.Reader,
                    u = r.types,
                    a = r.util;
                return function(r, h) {
                    r instanceof i || (r = i.create(r));
                    for (var f, l = void 0 === h ? r.len : r.pos + h, c = new this.ctor; r.pos < l;) {
                        var p = r.uint32();
                        if (e.group && 4 == (7 & p)) break;
                        for (var d = p >>> 3, y = 0, g = !1; y < e.fieldsArray.length; ++y) {
                            var v = e._fieldsArray[y].resolve(),
                                m = v.name,
                                b = v.resolvedType instanceof n ? "int32" : v.type;
                            if (d == v.id) {
                                if (g = !0, v.map) r.skip().pos++, c[m] === a.emptyObject && (c[m] = {}), f = r[v.keyType](), r.pos++, null != o.long[v.keyType] ? null == o.basic[b] ? c[m]["object" == t(f) ? a.longToHash(f) : f] = u[y].decode(r, r.uint32()) : c[m]["object" == t(f) ? a.longToHash(f) : f] = r[b]() : null == o.basic[b] ? c[m] = u[y].decode(r, r.uint32()) : c[m] = r[b]();
                                else if (v.repeated)
                                    if (c[m] && c[m].length || (c[m] = []), null != o.packed[b] && 2 == (7 & p))
                                        for (var w = r.uint32() + r.pos; r.pos < w;) c[m].push(r[b]());
                                    else null == o.basic[b] ? v.resolvedType.group ? c[m].push(u[y].decode(r)) : c[m].push(u[y].decode(r, r.uint32())) : c[m].push(r[b]());
                                else null == o.basic[b] ? v.resolvedType.group ? c[m] = u[y].decode(r) : c[m] = u[y].decode(r, r.uint32()) : c[m] = r[b]();
                                break
                            }
                        }
                        g || (console.log("t", p), r.skipType(7 & p))
                    }
                    for (y = 0; y < e._fieldsArray.length; ++y) {
                        var O = e._fieldsArray[y];
                        if (O.required && !c.hasOwnProperty(O.name)) throw s.ProtocolError("missing required '" + O.name + "'", {
                            instance: c
                        })
                    }
                    return c
                }
            }
        })._configure = function() {
            n = i(1), o = i(5), s = i(0)
        }
    }, function(t, e, r) {
        var i;
        e[".google.protobuf.Any"] = {
            fromObject: function(t) {
                if (t && t["@type"]) {
                    var e, r = this.lookup(t["@type"]);
                    if (r) return e = "." === t["@type"].charAt(0) ? t["@type"].substr(1) : t["@type"], this.create({
                        type_url: "/" + e,
                        value: r.encode(r.fromObject(t)).finish()
                    })
                }
                return this.fromObject(t)
            },
            toObject: function(t, e) {
                var r;
                return e && e.json && t.type_url && t.value && (r = t.type_url.substring(t.type_url.lastIndexOf("/") + 1), (r = this.lookup(r)) && (t = r.decode(t.value))), !(t instanceof this.ctor) && t instanceof i ? ((r = t.$type.toObject(t, e))["@type"] = t.$type.fullName, r) : this.toObject(t, e)
            }
        }, e._configure = function() {
            i = r(14)
        }
    }, function(e, r, i) {
        var n, o;

        function s(e, r, i, s) {
            var u = s.m,
                a = s.d,
                h = s.types,
                f = s.ksi,
                l = void 0 !== f;
            if (e.resolvedType)
                if (e.resolvedType instanceof n) {
                    for (var c = l ? a[i][f] : a[i], p = e.resolvedType.values, d = Object.keys(p), y = 0; y < d.length; y++)
                        if (!(e.repeated && p[d[y]] === e.typeDefault || d[y] != c && p[d[y]] != c)) {
                            l ? u[i][f] = p[d[y]] : u[i] = p[d[y]];
                            break
                        }
                } else {
                    if ("object" != t(l ? a[i][f] : a[i])) throw TypeError(e.fullName + ": object expected");
                    l ? u[i][f] = h[r].fromObject(a[i][f]) : u[i] = h[r].fromObject(a[i])
                } else {
                var g = !1;
                switch (e.type) {
                    case "double":
                    case "float":
                        l ? u[i][f] = Number(a[i][f]) : u[i] = Number(a[i]);
                        break;
                    case "uint32":
                    case "fixed32":
                        l ? u[i][f] = a[i][f] >>> 0 : u[i] = a[i] >>> 0;
                        break;
                    case "int32":
                    case "sint32":
                    case "sfixed32":
                        l ? u[i][f] = 0 | a[i][f] : u[i] = 0 | a[i];
                        break;
                    case "uint64":
                        g = !0;
                    case "int64":
                    case "sint64":
                    case "fixed64":
                    case "sfixed64":
                        o.Long ? l ? u[i][f] = o.Long.fromValue(a[i][f]).unsigned = g : u[i] = o.Long.fromValue(a[i]).unsigned = g : "string" == typeof(l ? a[i][f] : a[i]) ? l ? u[i][f] = parseInt(a[i][f], 10) : u[i] = parseInt(a[i], 10) : "number" == typeof(l ? a[i][f] : a[i]) ? l ? u[i][f] = a[i][f] : u[i] = a[i] : "object" == t(l ? a[i][f] : a[i]) && (l ? u[i][f] = new o.LongBits(a[i][f].low >>> 0, a[i][f].high >>> 0).toNumber(g) : u[i] = new o.LongBits(a[i].low >>> 0, a[i].high >>> 0).toNumber(g));
                        break;
                    case "bytes":
                        "string" == typeof(l ? a[i][f] : a[i]) ? l ? o.base64.decode(a[i][f], u[i][f] = o.newBuffer(o.base64.length(a[i][f])), 0) : o.base64.decode(a[i], u[i] = o.newBuffer(o.base64.length(a[i])), 0): (l ? a[i][f] : a[i]).length && (l ? u[i][f] = a[i][f] : u[i] = a[i]);
                        break;
                    case "string":
                        l ? u[i][f] = String(a[i][f]) : u[i] = String(a[i]);
                        break;
                    case "bool":
                        l ? u[i][f] = Boolean(a[i][f]) : u[i] = Boolean(a[i])
                }
            }
        }

        function u(t, e, r, i) {
            var s = i.m,
                u = i.d,
                a = i.types,
                h = i.ksi,
                f = i.o,
                l = void 0 !== h;
            if (t.resolvedType) t.resolvedType instanceof n ? l ? u[r][h] = f.enums === String ? a[e].values[s[r][h]] : s[r][h] : u[r] = f.enums === String ? a[e].values[s[r]] : s[r] : l ? u[r][h] = a[e].toObject(s[r][h], f) : u[r] = a[e].toObject(s[r], f);
            else {
                var c = !1;
                switch (t.type) {
                    case "double":
                    case "float":
                        l ? u[r][h] = f.json && !isFinite(s[r][h]) ? String(s[r][h]) : s[r][h] : u[r] = f.json && !isFinite(s[r]) ? String(s[r]) : s[r];
                        break;
                    case "uint64":
                        c = !0;
                    case "int64":
                    case "sint64":
                    case "fixed64":
                    case "sfixed64":
                        "number" == typeof s[r][h] ? l ? u[r][h] = f.longs === String ? String(s[r][h]) : s[r][h] : u[r] = f.longs === String ? String(s[r]) : s[r] : l ? u[r][h] = f.longs === String ? o.Long.prototype.toString.call(s[r][h]) : f.longs === Number ? new o.LongBits(s[r][h].low >>> 0, s[r][h].high >>> 0).toNumber(c) : s[r][h] : u[r] = f.longs === String ? o.Long.prototype.toString.call(s[r]) : f.longs === Number ? new o.LongBits(s[r].low >>> 0, s[r].high >>> 0).toNumber(c) : s[r];
                        break;
                    case "bytes":
                        l ? u[r][h] = f.bytes === String ? o.base64.encode(s[r][h], 0, s[r][h].length) : f.bytes === Array ? Array.prototype.slice.call(s[r][h]) : s[r][h] : u[r] = f.bytes === String ? o.base64.encode(s[r], 0, s[r].length) : f.bytes === Array ? Array.prototype.slice.call(s[r]) : s[r];
                        break;
                    default:
                        l ? u[r][h] = s[r][h] : u[r] = s[r]
                }
            }
        }(e = e.exports)._configure = function() {
            n = i(1), o = i(0)
        }, e.fromObject = function(e) {
            var r = e.fieldsArray;
            return function(e) {
                return function(i) {
                    if (i instanceof this.ctor) return i;
                    if (!r.length) return new this.ctor;
                    for (var u = new this.ctor, a = 0; a < r.length; ++a) {
                        var h, f = r[a].resolve(),
                            l = f.name;
                        if (f.map) {
                            if (i[l]) {
                                if ("object" != t(i[l])) throw TypeError(f.fullName + ": object expected");
                                u[l] = {}
                            }
                            var c = Object.keys(i[l]);
                            for (h = 0; h < c.length; ++h) s(f, a, l, o.merge(o.copy(e), {
                                m: u,
                                d: i,
                                ksi: c[h]
                            }))
                        } else if (f.repeated) {
                            if (i[l]) {
                                if (!Array.isArray(i[l])) throw TypeError(f.fullName + ": array expected");
                                for (u[l] = [], h = 0; h < i[l].length; ++h) s(f, a, l, o.merge(o.copy(e), {
                                    m: u,
                                    d: i,
                                    ksi: h
                                }))
                            }
                        } else(f.resolvedType instanceof n || null != i[l]) && s(f, a, l, o.merge(o.copy(e), {
                            m: u,
                            d: i
                        }))
                    }
                    return u
                }
            }
        }, e.toObject = function(t) {
            var e = t.fieldsArray.slice().sort(o.compareFieldsById);
            return function(r) {
                return e.length ? function(i, s) {
                    s = s || {};
                    for (var a, h, f = {}, l = [], c = [], p = [], d = 0; d < e.length; ++d) e[d].partOf || (e[d].resolve().repeated ? l : e[d].map ? c : p).push(e[d]);
                    if (l.length && (s.arrays || s.defaults))
                        for (d = 0; d < l.length; ++d) f[l[d].name] = [];
                    if (c.length && (s.objects || s.defaults))
                        for (d = 0; d < c.length; ++d) f[c[d].name] = {};
                    if (p.length && s.defaults)
                        for (d = 0; d < p.length; ++d) {
                            var y;
                            h = (a = p[d]).name, a.resolvedType instanceof n ? f[h] = s.enums = String ? a.resolvedType.valuesById[a.typeDefault] : a.typeDefault : a.long ? o.Long ? (y = new o.Long(a.typeDefault.low, a.typeDefault.high, a.typeDefault.unsigned), f[h] = s.longs === String ? y.toString() : s.longs === Number ? y.toNumber() : y) : f[h] = s.longs === String ? a.typeDefault.toString() : a.typeDefault.toNumber() : a.bytes ? f[h] = s.bytes === String ? String.fromCharCode.apply(String, a.typeDefault) : Array.prototype.slice.call(a.typeDefault).join("*..*").split("*..*") : f[h] = a.typeDefault
                        }
                    for (d = 0; d < e.length; ++d) {
                        h = (a = e[d]).name;
                        var g, v, m = t._fieldsArray.indexOf(a);
                        if (a.map) {
                            if (i[h] && (g = Object.keys(i[h]).length))
                                for (f[h] = {}, v = 0; v < g.length; ++v) u(a, m, h, o.merge(o.copy(r), {
                                    m: i,
                                    d: f,
                                    ksi: g[v],
                                    o: s
                                }))
                        } else if (a.repeated) {
                            if (i[h] && i[h].length)
                                for (f[h] = [], v = 0; v < i[h].length; ++v) u(a, m, h, o.merge(o.copy(r), {
                                    m: i,
                                    d: f,
                                    ksi: v,
                                    o: s
                                }))
                        } else null != i[h] && i.hasOwnProperty(h) && u(a, m, h, o.merge(o.copy(r), {
                            m: i,
                            d: f,
                            o: s
                        })), a.partOf && s.oneofs && (f[a.partOf.name] = h)
                    }
                    return f
                } : function() {
                    return {}
                }
            }
        }
    }, function(t, e, r) {
        t.exports = function() {
            var t = {};

            function e(e, r, i) {
                return "function" == typeof r ? (i = r, r = new t.Root) : r || (r = new t.Root), r.load(e, i)
            }

            function i(e, r) {
                return r || (r = new t.Root), r.loadSync(e)
            }

            function n(e, r, i) {
                return "function" == typeof r ? (i = r, r = new t.Root) : r || (r = new t.Root), r.parseFromPbString(e, i)
            }

            function o() {
                t.converter._configure(), t.decoder._configure(), t.encoder._configure(), t.Field._configure(), t.MapField._configure(), t.Message._configure(), t.Namespace._configure(), t.Method._configure(), t.ReflectionObject._configure(), t.OneOf._configure(), t.parse._configure(), t.Reader._configure(), t.Root._configure(), t.Service._configure(), t.verifier._configure(), t.Type._configure(), t.types._configure(), t.wrappers._configure(), t.Writer._configure()
            }
            if ((window.protobuf = t).build = "minimal", t.Writer = r(15), t.encoder = r(24), t.Reader = r(22), t.util = r(0), t.rpc = r(20), t.roots = r(16), t.verifier = r(23), t.tokenize = r(19), t.parse = r(18), t.common = r(21), t.ReflectionObject = r(4), t.Namespace = r(6), t.Root = r(9), t.Enum = r(1), t.Type = r(3), t.Field = r(2), t.OneOf = r(7), t.MapField = r(12), t.Service = r(10), t.Method = r(13), t.converter = r(27), t.decoder = r(25), t.Message = r(14), t.wrappers = r(26), t.types = r(5), t.util = r(0), t.configure = o, t.load = e, t.loadSync = i, t.parseFromPbString = n, o(), arguments && arguments.length)
                for (var s = 0; s < arguments.length; s++) {
                    var u = arguments[s];
                    if (u.hasOwnProperty("exports")) return void(u.exports = t)
                }
            return t
        }()
    }, function(t, e) {
        t.exports = i;
        var r = null;
        try {
            r = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
        } catch (t) {}

        function i(t, e, r) {
            this.low = 0 | t, this.high = 0 | e, this.unsigned = !!r
        }

        function n(t) {
            return !0 === (t && t.__isLong__)
        }
        Object.defineProperty(i.prototype, "__isLong__", {
            value: !0
        }), i.isLong = n;
        var o = {},
            s = {};

        function u(t, e) {
            var r, i, n;
            return e ? (n = 0 <= (t >>>= 0) && t < 256) && (i = s[t]) ? i : (r = h(t, (0 | t) < 0 ? -1 : 0, !0), n && (s[t] = r), r) : (n = -128 <= (t |= 0) && t < 128) && (i = o[t]) ? i : (r = h(t, t < 0 ? -1 : 0, !1), n && (o[t] = r), r)
        }

        function a(t, e) {
            if (isNaN(t)) return e ? m : v;
            if (e) {
                if (t < 0) return m;
                if (d <= t) return A
            } else {
                if (t <= -y) return _;
                if (y <= t + 1) return k
            }
            return t < 0 ? a(-t, e).neg() : h(t % p | 0, t / p | 0, e)
        }

        function h(t, e, r) {
            return new i(t, e, r)
        }
        i.fromInt = u, i.fromNumber = a, i.fromBits = h;
        var f = Math.pow;

        function l(t, e, r) {
            if (0 === t.length) throw Error("empty string");
            if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t) return v;
            if (e = "number" == typeof e ? (r = e, !1) : !!e, (r = r || 10) < 2 || 36 < r) throw RangeError("radix");
            var i;
            if (0 < (i = t.indexOf("-"))) throw Error("interior hyphen");
            if (0 === i) return l(t.substring(1), e, r).neg();
            for (var n = a(f(r, 8)), o = v, s = 0; s < t.length; s += 8) {
                var u = Math.min(8, t.length - s),
                    h = parseInt(t.substring(s, s + u), r);
                o = u < 8 ? (u = a(f(r, u)), o.mul(u).add(a(h))) : (o = o.mul(n)).add(a(h))
            }
            return o.unsigned = e, o
        }

        function c(t, e) {
            return "number" == typeof t ? a(t, e) : "string" == typeof t ? l(t, e) : h(t.low, t.high, "boolean" == typeof e ? e : t.unsigned)
        }
        i.fromString = l, i.fromValue = c;
        var p = 4294967296,
            d = p * p,
            y = d / 2,
            g = u(1 << 24),
            v = u(0);
        i.ZERO = v;
        var m = u(0, !0);
        i.UZERO = m;
        var b = u(1);
        i.ONE = b;
        var w = u(1, !0);
        i.UONE = w;
        var O = u(-1);
        i.NEG_ONE = O;
        var k = new i(-1, 2147483647, !1);
        i.MAX_VALUE = k;
        var A = new i(-1, -1, !0);
        i.MAX_UNSIGNED_VALUE = A;
        var _ = new i(0, -2147483648, !1);
        i.MIN_VALUE = _, (t = i.prototype).toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low
        }, t.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * p + (this.low >>> 0) : this.high * p + (this.low >>> 0)
        }, t.toString = function(t) {
            if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
            if (this.isZero()) return "0";
            var e, r;
            if (this.isNegative()) return this.eq(_) ? (r = a(t), r = (e = this.div(r)).mul(r).sub(this), e.toString(t) + r.toInt().toString(t)) : "-" + this.neg().toString(t);
            for (var i = a(f(t, 6), this.unsigned), n = this, o = "";;) {
                var s = n.div(i),
                    u = (n.sub(s.mul(i)).toInt() >>> 0).toString(t);
                if ((n = s).isZero()) return u + o;
                for (; u.length < 6;) u = "0" + u;
                o = "" + u + o
            }
        }, t.getHighBits = function() {
            return this.high
        }, t.getHighBitsUnsigned = function() {
            return this.high >>> 0
        }, t.getLowBits = function() {
            return this.low
        }, t.getLowBitsUnsigned = function() {
            return this.low >>> 0
        }, t.getNumBitsAbs = function() {
            if (this.isNegative()) return this.eq(_) ? 64 : this.neg().getNumBitsAbs();
            for (var t = 0 != this.high ? this.high : this.low, e = 31; 0 < e && 0 == (t & 1 << e); e--);
            return 0 != this.high ? e + 33 : e + 1
        }, t.isZero = function() {
            return 0 === this.high && 0 === this.low
        }, t.eqz = t.isZero, t.isNegative = function() {
            return !this.unsigned && this.high < 0
        }, t.isPositive = function() {
            return this.unsigned || 0 <= this.high
        }, t.isOdd = function() {
            return 1 == (1 & this.low)
        }, t.isEven = function() {
            return 0 == (1 & this.low)
        }, t.equals = function(t) {
            return n(t) || (t = c(t)), (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && this.high === t.high && this.low === t.low
        }, t.eq = t.equals, t.notEquals = function(t) {
            return !this.eq(t)
        }, t.neq = t.notEquals, t.ne = t.notEquals, t.lessThan = function(t) {
            return this.comp(t) < 0
        }, t.lt = t.lessThan, t.lessThanOrEqual = function(t) {
            return this.comp(t) <= 0
        }, t.lte = t.lessThanOrEqual, t.le = t.lessThanOrEqual, t.greaterThan = function(t) {
            return 0 < this.comp(t)
        }, t.gt = t.greaterThan, t.greaterThanOrEqual = function(t) {
            return 0 <= this.comp(t)
        }, t.gte = t.greaterThanOrEqual, t.ge = t.greaterThanOrEqual, t.compare = function(t) {
            if (n(t) || (t = c(t)), this.eq(t)) return 0;
            var e = this.isNegative(),
                r = t.isNegative();
            return e && !r ? -1 : !e && r ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1
        }, t.comp = t.compare, t.negate = function() {
            return !this.unsigned && this.eq(_) ? _ : this.not().add(b)
        }, t.neg = t.negate, t.add = function(t) {
            n(t) || (t = c(t));
            var e = this.high >>> 16,
                r = 65535 & this.high,
                i = this.low >>> 16,
                o = 65535 & this.low,
                s = t.high >>> 16,
                u = 65535 & t.high,
                a = t.low >>> 16,
                f = 0,
                l = 0,
                p = 0,
                d = 0;
            return l += (p = p + ((d += o + (65535 & t.low)) >>> 16) + (i + a)) >>> 16, h((p &= 65535) << 16 | (d &= 65535), ((f += (l += r + u) >>> 16) + (e + s) & 65535) << 16 | (l &= 65535), this.unsigned)
        }, t.subtract = function(t) {
            return n(t) || (t = c(t)), this.add(t.neg())
        }, t.sub = t.subtract, t.multiply = function(t) {
            if (this.isZero()) return v;
            if (n(t) || (t = c(t)), r) return h(r.mul(this.low, this.high, t.low, t.high), r.get_high(), this.unsigned);
            if (t.isZero()) return v;
            if (this.eq(_)) return t.isOdd() ? _ : v;
            if (t.eq(_)) return this.isOdd() ? _ : v;
            if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
            if (t.isNegative()) return this.mul(t.neg()).neg();
            if (this.lt(g) && t.lt(g)) return a(this.toNumber() * t.toNumber(), this.unsigned);
            var e = this.high >>> 16,
                i = 65535 & this.high,
                o = this.low >>> 16,
                s = 65535 & this.low,
                u = t.high >>> 16,
                f = 65535 & t.high,
                l = t.low >>> 16,
                p = 0,
                d = 0,
                y = 0,
                m = 0;
            return d = d + ((y = y + ((m += s * (t = 65535 & t.low)) >>> 16) + o * t) >>> 16) + ((y = (65535 & y) + s * l) >>> 16), h((y &= 65535) << 16 | (m &= 65535), ((p += (d += i * t) >>> 16) + ((d = (65535 & d) + o * l) >>> 16) + ((d = (65535 & d) + s * f) >>> 16) + (e * t + i * l + o * f + s * u) & 65535) << 16 | (d &= 65535), this.unsigned)
        }, t.mul = t.multiply, t.divide = function(t) {
            if ((t = n(t) ? t : c(t)).isZero()) throw Error("division by zero");
            if (r) return this.unsigned || -2147483648 !== this.high || -1 !== t.low || -1 !== t.high ? h((this.unsigned ? r.div_u : r.div_s)(this.low, this.high, t.low, t.high), r.get_high(), this.unsigned) : this;
            if (this.isZero()) return this.unsigned ? m : v;
            var e, i, o;
            if (this.unsigned) {
                if ((t = t.unsigned ? t : t.toUnsigned()).gt(this)) return m;
                if (t.gt(this.shru(1))) return w;
                o = m
            } else {
                if (this.eq(_)) return t.eq(b) || t.eq(O) ? _ : t.eq(_) ? b : (e = this.shr(1).div(t).shl(1)).eq(v) ? t.isNegative() ? b : O : (i = this.sub(t.mul(e)), e.add(i.div(t)));
                if (t.eq(_)) return this.unsigned ? m : v;
                if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
                if (t.isNegative()) return this.div(t.neg()).neg();
                o = v
            }
            for (i = this; i.gte(t);) {
                e = Math.max(1, Math.floor(i.toNumber() / t.toNumber()));
                for (var s = Math.ceil(Math.log(e) / Math.LN2), u = s <= 48 ? 1 : f(2, s - 48), l = a(e), p = l.mul(t); p.isNegative() || p.gt(i);) p = (l = a(e -= u, this.unsigned)).mul(t);
                l.isZero() && (l = b), o = o.add(l), i = i.sub(p)
            }
            return o
        }, t.div = t.divide, t.modulo = function(t) {
            return n(t) || (t = c(t)), r ? h((this.unsigned ? r.rem_u : r.rem_s)(this.low, this.high, t.low, t.high), r.get_high(), this.unsigned) : this.sub(this.div(t).mul(t))
        }, t.mod = t.modulo, t.rem = t.modulo, t.not = function() {
            return h(~this.low, ~this.high, this.unsigned)
        }, t.and = function(t) {
            return n(t) || (t = c(t)), h(this.low & t.low, this.high & t.high, this.unsigned)
        }, t.or = function(t) {
            return n(t) || (t = c(t)), h(this.low | t.low, this.high | t.high, this.unsigned)
        }, t.xor = function(t) {
            return n(t) || (t = c(t)), h(this.low ^ t.low, this.high ^ t.high, this.unsigned)
        }, t.shiftLeft = function(t) {
            return n(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? h(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : h(0, this.low << t - 32, this.unsigned)
        }, t.shl = t.shiftLeft, t.shiftRight = function(t) {
            return n(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? h(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : h(this.high >> t - 32, 0 <= this.high ? 0 : -1, this.unsigned)
        }, t.shr = t.shiftRight, t.shiftRightUnsigned = function(t) {
            var e;
            return n(t) && (t = t.toInt()), 0 == (t &= 63) ? this : (e = this.high, t < 32 ? h(this.low >>> t | e << 32 - t, e >>> t, this.unsigned) : h(32 === t ? e : e >>> t - 32, 0, this.unsigned))
        }, t.shru = t.shiftRightUnsigned, t.shr_u = t.shiftRightUnsigned, t.toSigned = function() {
            return this.unsigned ? h(this.low, this.high, !1) : this
        }, t.toUnsigned = function() {
            return this.unsigned ? this : h(this.low, this.high, !0)
        }, t.toBytes = function(t) {
            return t ? this.toBytesLE() : this.toBytesBE()
        }, t.toBytesLE = function() {
            var t = this.high,
                e = this.low;
            return [255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24]
        }, t.toBytesBE = function() {
            var t = this.high,
                e = this.low;
            return [t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
        }, i.fromBytes = function(t, e, r) {
            return r ? i.fromBytesLE(t, e) : i.fromBytesBE(t, e)
        }, i.fromBytesLE = function(t, e) {
            return new i(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24, t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24, e)
        }, i.fromBytesBE = function(t, e) {
            return new i(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], e)
        }
    }, function(t, e) {
        t.exports = function(t, e, r) {
            var i = r || 8192,
                n = i >>> 1,
                o = null,
                s = i;
            return function(r) {
                return r < 1 || n < r ? t(r) : (i < s + r && (o = t(i), s = 0), r = e.call(o, s, s += r), 7 & s && (s = 1 + (7 | s)), r)
            }
        }
    }, function(t, e) {
        function r(t) {
            function e(t, e, r, i) {
                var n = e < 0 ? 1 : 0;
                0 === (e = n ? -e : e) ? t(0 < 1 / e ? 0 : 2147483648, r, i) : isNaN(e) ? t(2143289344, r, i) : t(34028234663852886e22 < e ? (n << 31 | 2139095040) >>> 0 : e < 11754943508222875e-54 ? (n << 31 | Math.round(e / 1401298464324817e-60)) >>> 0 : (n << 31 | (t = Math.floor(Math.log(e) / Math.LN2)) + 127 << 23 | 8388607 & Math.round(e * Math.pow(2, -t) * 8388608)) >>> 0, r, i)
            }

            function r(t, e, r) {
                return e = 2 * ((t = t(e, r)) >> 31) + 1, r = t >>> 23 & 255, t &= 8388607, 255 == r ? t ? NaN : 1 / 0 * e : 0 == r ? 1401298464324817e-60 * e * t : e * Math.pow(2, r - 150) * (8388608 + t)
            }

            function u(t, e, r) {
                l[0] = t, e[r] = c[0], e[r + 1] = c[1], e[r + 2] = c[2], e[r + 3] = c[3]
            }

            function a(t, e, r) {
                l[0] = t, e[r] = c[3], e[r + 1] = c[2], e[r + 2] = c[1], e[r + 3] = c[0]
            }

            function h(t, e) {
                return c[0] = t[e], c[1] = t[e + 1], c[2] = t[e + 2], c[3] = t[e + 3], l[0]
            }

            function f(t, e) {
                return c[3] = t[e], c[2] = t[e + 1], c[1] = t[e + 2], c[0] = t[e + 3], l[0]
            }
            var l, c, p, d, y;

            function g(t, e, r, i, n, o) {
                var s, u, a = i < 0 ? 1 : 0;
                0 === (i = a ? -i : i) ? (t(0, n, o + e), t(0 < 1 / i ? 0 : 2147483648, n, o + r)) : isNaN(i) ? (t(0, n, o + e), t(2146959360, n, o + r)) : 17976931348623157e292 < i ? (t(0, n, o + e), t((a << 31 | 2146435072) >>> 0, n, o + r)) : i < 22250738585072014e-324 ? (t((s = i / 5e-324) >>> 0, n, o + e), t((a << 31 | s / 4294967296) >>> 0, n, o + r)) : (1024 === (u = Math.floor(Math.log(i) / Math.LN2)) && (u = 1023), t(4503599627370496 * (s = i * Math.pow(2, -u)) >>> 0, n, o + e), t((a << 31 | u + 1023 << 20 | 1048576 * s & 1048575) >>> 0, n, o + r))
            }

            function v(t, e, r, i, n) {
                return e = t(i, n + e), i = 2 * ((t = t(i, n + r)) >> 31) + 1, r = 4294967296 * (1048575 & t) + e, 2047 == (n = t >>> 20 & 2047) ? r ? NaN : 1 / 0 * i : 0 == n ? 5e-324 * i * r : i * Math.pow(2, n - 1075) * (r + 4503599627370496)
            }

            function m(t, e, r) {
                p[0] = t, e[r] = d[0], e[r + 1] = d[1], e[r + 2] = d[2], e[r + 3] = d[3], e[r + 4] = d[4], e[r + 5] = d[5], e[r + 6] = d[6], e[r + 7] = d[7]
            }

            function b(t, e, r) {
                p[0] = t, e[r] = d[7], e[r + 1] = d[6], e[r + 2] = d[5], e[r + 3] = d[4], e[r + 4] = d[3], e[r + 5] = d[2], e[r + 6] = d[1], e[r + 7] = d[0]
            }

            function w(t, e) {
                return d[0] = t[e], d[1] = t[e + 1], d[2] = t[e + 2], d[3] = t[e + 3], d[4] = t[e + 4], d[5] = t[e + 5], d[6] = t[e + 6], d[7] = t[e + 7], p[0]
            }

            function O(t, e) {
                return d[7] = t[e], d[6] = t[e + 1], d[5] = t[e + 2], d[4] = t[e + 3], d[3] = t[e + 4], d[2] = t[e + 5], d[1] = t[e + 6], d[0] = t[e + 7], p[0]
            }
            return "undefined" != typeof Float32Array ? (l = new Float32Array([-0]), y = 128 === (c = new Uint8Array(l.buffer))[3], t.writeFloatLE = y ? u : a, t.writeFloatBE = y ? a : u, t.readFloatLE = y ? h : f, t.readFloatBE = y ? f : h) : (t.writeFloatLE = e.bind(null, i), t.writeFloatBE = e.bind(null, n), t.readFloatLE = r.bind(null, o), t.readFloatBE = r.bind(null, s)), "undefined" != typeof Float64Array ? (p = new Float64Array([-0]), y = 128 === (d = new Uint8Array(p.buffer))[7], t.writeDoubleLE = y ? m : b, t.writeDoubleBE = y ? b : m, t.readDoubleLE = y ? w : O, t.readDoubleBE = y ? O : w) : (t.writeDoubleLE = g.bind(null, i, 0, 4), t.writeDoubleBE = g.bind(null, n, 4, 0), t.readDoubleLE = v.bind(null, o, 0, 4), t.readDoubleBE = v.bind(null, s, 4, 0)), t
        }

        function i(t, e, r) {
            e[r] = 255 & t, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24
        }

        function n(t, e, r) {
            e[r] = t >>> 24, e[r + 1] = t >>> 16 & 255, e[r + 2] = t >>> 8 & 255, e[r + 3] = 255 & t
        }

        function o(t, e) {
            return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
        }

        function s(t, e) {
            return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
        }
        t.exports = r(r)
    }, function(t, e, r) {
        t.exports = function(t, e) {
            for (var r = new Array(arguments.length - 1), i = 0, n = 2, o = !0; n < arguments.length;) r[i++] = arguments[n++];
            return new Promise((function(n, s) {
                r[i] = function(t) {
                    if (o)
                        if (o = !1, t) s(t);
                        else {
                            for (var e = new Array(arguments.length - 1), r = 0; r < e.length;) e[r++] = arguments[r];
                            n.apply(null, e)
                        }
                };
                try {
                    t.apply(e || null, r)
                } catch (t) {
                    o && (o = !1, s(t))
                }
            }))
        }
    }, function(t, e, r) {
        function i() {
            this._listeners = {}
        }(t.exports = i).prototype.on = function(t, e, r) {
            return (this._listeners[t] || (this._listeners[t] = [])).push({
                fn: e,
                ctx: r || this
            }), this
        }, i.prototype.off = function(t, e) {
            if (void 0 === t) this._listeners = {};
            else if (void 0 === e) this._listeners[t] = [];
            else
                for (var r = this._listeners[t], i = 0; i < r.length;) r[i].fn === e ? r.splice(i, 1) : ++i;
            return this
        }, i.prototype.emit = function(t) {
            var e = this._listeners[t];
            if (e) {
                for (var r = [], i = 1; i < arguments.length;) r.push(arguments[i++]);
                for (i = 0; i < e.length;) e[i].fn.apply(e[i++].ctx, r)
            }
            return this
        }
    }, function(t, e) {
        var r = (t = t.exports).isAbsolute = function(t) {
                return /^(?:\/|\w+:)/.test(t)
            },
            i = t.normalize = function(t) {
                var e = (t = t.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"),
                    i = r(t);
                t = "";
                i && (t = e.shift() + "/");
                for (var n = 0; n < e.length;) ".." === e[n] ? 0 < n && ".." !== e[n - 1] ? e.splice(--n, 2) : i ? e.splice(n, 1) : ++n : "." === e[n] ? e.splice(n, 1) : ++n;
                return t + e.join("/")
            };
        t.resolve = function(t, e, n) {
            return n || (e = i(e)), !r(e) && (t = (t = n ? t : i(t)).replace(/(?:\/|^)[^/]+$/, "")).length ? i(t + "/" + e) : e
        }
    }]);
});
var global = (function() {
    return this
})();
if (!global && typeof GameGlobal !== 'undefined') global = GameGlobal;
var pluginInfoMap = {};;
global.requirePlugin = global.requirePlugin || function(path) {
    var position = path.indexOf('/');
    var alias = '';
    var pagePath = '';
    if (position !== -1) {
        alias = path.substr(0, position);
        pagePath = path.substr(position + 1, path.length);
    } else {
        alias = path;
    }
    if (pluginInfoMap.hasOwnProperty(alias)) {
        var realPath = '';
        if (pagePath.length === 0) {
            realPath = '__plugin__/' + pluginInfoMap[alias].appid;
            return require(realPath);
        } else {
            realPath = '__plugin__/' + pluginInfoMap[alias].appid + '/' + pagePath;
            return require(realPath);
        }
    } else {
        console.error('not found alias: ', alias);
        throw new Error('Plugin ' + alias + ' is not defined.')
    }
};
define("protobuf/game.js", function(require, module, exports) {
    "use strict";
    require("protobuf.js");
});
require("protobuf/game.js");
