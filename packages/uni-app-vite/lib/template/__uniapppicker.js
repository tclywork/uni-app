!(function (e) {
  var t = {}
  function n(a) {
    if (t[a]) return t[a].exports
    var r = (t[a] = { i: a, l: !1, exports: {} })
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a })
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var a = Object.create(null)
      if (
        (n.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          n.d(
            a,
            r,
            function (t) {
              return e[t]
            }.bind(null, r)
          )
      return a
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 44))
})([
  function (e, t) {
    e.exports = {}
  },
  function (e, t, n) {
    'use strict'
    function a(e, t, n, a, r, i, o, s, u, c) {
      var l,
        f = 'function' == typeof e ? e.options : e
      if (u) {
        f.components || (f.components = {})
        var d = Object.prototype.hasOwnProperty
        for (var p in u)
          d.call(u, p) && !d.call(f.components, p) && (f.components[p] = u[p])
      }
      if (
        (c &&
          ((c.beforeCreate || (c.beforeCreate = [])).unshift(function () {
            this[c.__module] = this
          }),
          (f.mixins || (f.mixins = [])).push(c)),
        t && ((f.render = t), (f.staticRenderFns = n), (f._compiled = !0)),
        a && (f.functional = !0),
        i && (f._scopeId = 'data-v-' + i),
        o
          ? ((l = function (e) {
              ;(e =
                e ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)) ||
                'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                (e = __VUE_SSR_CONTEXT__),
                r && r.call(this, e),
                e && e._registeredComponents && e._registeredComponents.add(o)
            }),
            (f._ssrRegister = l))
          : r &&
            (l = s
              ? function () {
                  r.call(this, this.$root.$options.shadowRoot)
                }
              : r),
        l)
      )
        if (f.functional) {
          f._injectStyles = l
          var h = f.render
          f.render = function (e, t) {
            return l.call(t), h(e, t)
          }
        } else {
          var v = f.beforeCreate
          f.beforeCreate = v ? [].concat(v, l) : [l]
        }
      return { exports: e, options: f }
    }
    n.d(t, 'a', function () {
      return a
    })
  },
  function (e, t, n) {
    'use strict'
    var a
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.weexPlus = t.default = void 0),
      (a =
        'function' == typeof getUni
          ? getUni
          : function () {
              var e = function (e) {
                  return 'function' == typeof e
                },
                t = function (e) {
                  return e
                    .then(function (e) {
                      return [null, e]
                    })
                    .catch(function (e) {
                      return [e]
                    })
                },
                n = /^\$|^on|^create|Sync$|Manager$|^pause/,
                a = [
                  'os',
                  'getCurrentSubNVue',
                  'getSubNVueById',
                  'stopRecord',
                  'stopVoice',
                  'stopBackgroundAudio',
                  'stopPullDownRefresh',
                  'hideKeyboard',
                  'hideToast',
                  'hideLoading',
                  'showNavigationBarLoading',
                  'hideNavigationBarLoading',
                  'canIUse',
                  'navigateBack',
                  'closeSocket',
                  'pageScrollTo',
                  'drawCanvas',
                ],
                i = function (e) {
                  return (
                    (!n.test(e) || 'createBLEConnection' === e) &&
                    !~a.indexOf(e)
                  )
                },
                o = function (n) {
                  return function () {
                    for (
                      var a = arguments.length,
                        r = Array(a > 1 ? a - 1 : 0),
                        i = 1;
                      i < a;
                      i++
                    )
                      r[i - 1] = arguments[i]
                    var o =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                    return e(o.success) || e(o.fail) || e(o.complete)
                      ? n.apply(void 0, [o].concat(r))
                      : t(
                          new Promise(function (e, t) {
                            n.apply(
                              void 0,
                              [
                                Object.assign({}, o, { success: e, fail: t }),
                              ].concat(r)
                            ),
                              (Promise.prototype.finally = function (e) {
                                var t = this.constructor
                                return this.then(
                                  function (n) {
                                    return t.resolve(e()).then(function () {
                                      return n
                                    })
                                  },
                                  function (n) {
                                    return t.resolve(e()).then(function () {
                                      throw n
                                    })
                                  }
                                )
                              })
                          })
                        )
                  }
                },
                s = [],
                u = void 0
              function c(e) {
                s.forEach(function (t) {
                  return t({ origin: u, data: e })
                })
              }
              var l = r.webview.currentWebview().id,
                f = new BroadcastChannel('UNI-APP-SUBNVUE')
              function d(e) {
                var t = r.webview.getWebviewById(e)
                return (
                  t &&
                    !t.$processed &&
                    (function (e) {
                      e.$processed = !0
                      var t = r.webview.currentWebview().id === e.id,
                        n =
                          'uniNView' === e.__uniapp_origin_type &&
                          e.__uniapp_origin_id,
                        a = e.id
                      if (
                        ((e.postMessage = function (e) {
                          n
                            ? f.postMessage({ data: e, to: t ? n : a })
                            : _({ type: 'UniAppSubNVue', data: e })
                        }),
                        (e.onMessage = function (e) {
                          s.push(e)
                        }),
                        e.__uniapp_mask_id)
                      ) {
                        u = e.__uniapp_host
                        var i = e.__uniapp_mask,
                          o = r.webview.getWebviewById(e.__uniapp_mask_id)
                        o = o.parent() || o
                        var c = e.show,
                          l = e.hide,
                          d = e.close,
                          p = function () {
                            o.setStyle({ mask: i })
                          },
                          h = function () {
                            o.setStyle({ mask: 'none' })
                          }
                        ;(e.show = function () {
                          p()
                          for (
                            var t = arguments.length, n = Array(t), a = 0;
                            a < t;
                            a++
                          )
                            n[a] = arguments[a]
                          return c.apply(e, n)
                        }),
                          (e.hide = function () {
                            h()
                            for (
                              var t = arguments.length, n = Array(t), a = 0;
                              a < t;
                              a++
                            )
                              n[a] = arguments[a]
                            return l.apply(e, n)
                          }),
                          (e.close = function () {
                            h()
                            for (
                              var t = arguments.length, n = Array(t), a = 0;
                              a < t;
                              a++
                            )
                              n[a] = arguments[a]
                            return d.apply(e, n)
                          })
                      }
                    })(t),
                  t
                )
              }
              f.onmessage = function (e) {
                e.data.to === l && c(e.data.data)
              }
              var p = weex.requireModule('plus'),
                h = weex.requireModule('globalEvent'),
                v = 0,
                g = {}
              h.addEventListener('plusMessage', function (e) {
                'UniAppJsApi' === e.data.type
                  ? y(e.data.id, e.data.data)
                  : 'UniAppSubNVue' === e.data.type
                  ? c(e.data.data, e.data.options)
                  : 'onNavigationBarButtonTap' === e.data.type
                  ? 'function' == typeof S && S(e.data.data)
                  : 'onNavigationBarSearchInputChanged' === e.data.type
                  ? 'function' == typeof w && w(e.data.data)
                  : 'onNavigationBarSearchInputConfirmed' === e.data.type
                  ? 'function' == typeof A && A(e.data.data)
                  : 'onNavigationBarSearchInputClicked' === e.data.type &&
                    'function' == typeof T &&
                    T(e.data.data)
              })
              var y = function (e, t) {
                  var n = g[e]
                  n
                    ? (n(t), n.keepAlive || delete g[e])
                    : console.error('callback[' + e + '] is undefined')
                },
                m = function (t) {
                  var n,
                    a,
                    r = t.id,
                    i = t.type,
                    o = t.params
                  ;(g[r] =
                    ((a = function (t) {
                      e(n)
                        ? n(t)
                        : n &&
                          (~t.errMsg.indexOf(':ok')
                            ? e(n.success) && n.success(t)
                            : ~t.errMsg.indexOf(':fail') &&
                              e(n.fail) &&
                              n.fail(t),
                          e(n.complete) && n.complete(t))
                    }),
                    (e((n = o)) || (n && e(n.callback))) && (a.keepAlive = !0),
                    a)),
                    p.postMessage(
                      { id: r, type: i, params: o },
                      '__uniapp__service'
                    )
                }
              function _(e) {
                p.postMessage(e, '__uniapp__service')
              }
              var b = function (e) {
                  return function (t) {
                    m({ id: v++, type: e, params: t })
                  }
                },
                S = void 0,
                w = void 0,
                A = void 0,
                T = void 0
              function k(e) {
                S = e
              }
              function M(e) {
                w = e
              }
              function E(e) {
                A = e
              }
              function C(e) {
                T = e
              }
              function x(e) {
                return weex.requireModule(e)
              }
              var I = weex.requireModule('dom'),
                O = weex.requireModule('globalEvent'),
                N = []
              function V(e) {
                'function' == typeof e && (this.isUniAppReady ? e() : N.push(e))
              }
              O.addEventListener('plusMessage', function (e) {
                'UniAppReady' === e.data.type &&
                  ((V.isUniAppReady = !0),
                  N.length &&
                    (N.forEach(function (e) {
                      return e()
                    }),
                    (N = [])))
              })
              var L =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e
                      }
                    : function (e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e
                      },
                j = weex.requireModule('stream'),
                P = function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 'GET',
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 'application/x-www-form-urlencoded'
                  return 'object' === (void 0 === e ? 'undefined' : L(e))
                    ? 'POST' === t.toUpperCase() &&
                      'application/json' === n.toLowerCase()
                      ? JSON.stringify(e)
                      : Object.keys(e)
                          .map(function (t) {
                            return (
                              encodeURIComponent(t) +
                              '=' +
                              encodeURIComponent(e[t])
                            )
                          })
                          .join('&')
                    : e
                },
                D = weex.requireModule('plusstorage'),
                $ = weex.requireModule('clipboard'),
                B = (function () {
                  if ('function' == typeof getUniEmitter) return getUniEmitter
                  var e = {
                    $on: function () {
                      console.warn('uni.$on failed')
                    },
                    $off: function () {
                      console.warn('uni.$off failed')
                    },
                    $once: function () {
                      console.warn('uni.$once failed')
                    },
                    $emit: function () {
                      console.warn('uni.$emit failed')
                    },
                  }
                  return function () {
                    return e
                  }
                })()
              function R(e, t, n) {
                return e[t].apply(e, n)
              }
              var U = Object.freeze({
                  loadFontFace: function (t) {
                    var n = t.family,
                      a = t.source,
                      r = (t.desc, t.success),
                      i = (t.fail, t.complete)
                    I.addRule('fontFace', {
                      fontFamily: n,
                      src: a.replace(/"/g, "'"),
                    })
                    var o = { errMsg: 'loadFontFace:ok', status: 'loaded' }
                    e(r) && r(o), e(i) && i(o)
                  },
                  ready: V,
                  request: function (t) {
                    var n = t.url,
                      a = t.data,
                      r = t.header,
                      i = t.method,
                      o = void 0 === i ? 'GET' : i,
                      s = t.dataType,
                      u = void 0 === s ? 'json' : s,
                      c = (t.responseType, t.success),
                      l = t.fail,
                      f = t.complete,
                      d = !1,
                      p = !1,
                      h = {}
                    if (r)
                      for (var v in r)
                        p || 'content-type' !== v.toLowerCase()
                          ? (h[v] = r[v])
                          : ((p = !0), (h['Content-Type'] = r[v]))
                    return (
                      'GET' === o &&
                        a &&
                        (n =
                          n +
                          (~n.indexOf('?')
                            ? '&' === n.substr(-1) || '?' === n.substr(-1)
                              ? ''
                              : '&'
                            : '?') +
                          P(a)),
                      j.fetch(
                        {
                          url: n,
                          method: o,
                          headers: h,
                          type: 'json' === u ? 'json' : 'text',
                          body: 'GET' !== o ? P(a, o, h['Content-Type']) : '',
                        },
                        function (t) {
                          var n = t.status,
                            a = (t.ok, t.statusText, t.data),
                            r = t.headers,
                            i = {}
                          !n || -1 === n || d
                            ? ((i.errMsg = 'request:fail'), e(l) && l(i))
                            : ((i.data = a),
                              (i.statusCode = n),
                              (i.header = r),
                              e(c) && c(i)),
                            e(f) && f(i)
                        }
                      ),
                      {
                        abort: function () {
                          d = !0
                        },
                      }
                    )
                  },
                  getStorage: function (t) {
                    var n = t.key,
                      a = (t.data, t.success),
                      r = t.fail,
                      i = t.complete
                    D.getItem(n + '__TYPE', function (t) {
                      if ('success' === t.result) {
                        var o = t.data
                        D.getItem(n, function (t) {
                          if ('success' === t.result) {
                            var n = t.data
                            o && n
                              ? ('String' !== o && (n = JSON.parse(n)),
                                e(a) && a({ errMsg: 'getStorage:ok', data: n }))
                              : ((t.errMsg = 'setStorage:fail'), e(r) && r(t))
                          } else (t.errMsg = 'setStorage:fail'), e(r) && r(t)
                          e(i) && i(t)
                        })
                      } else
                        (t.errMsg = 'setStorage:fail'),
                          e(r) && r(t),
                          e(i) && i(t)
                    })
                  },
                  setStorage: function (t) {
                    var n = t.key,
                      a = t.data,
                      r = t.success,
                      i = t.fail,
                      o = t.complete,
                      s = 'String'
                    'object' === (void 0 === a ? 'undefined' : L(a)) &&
                      ((s = 'Object'), (a = JSON.stringify(a))),
                      D.setItem(n, a, function (t) {
                        'success' === t.result
                          ? D.setItem(n + '__TYPE', s, function (t) {
                              'success' === t.result
                                ? e(r) && r({ errMsg: 'setStorage:ok' })
                                : ((t.errMsg = 'setStorage:fail'), e(i) && i(t))
                            })
                          : ((t.errMsg = 'setStorage:fail'), e(i) && i(t)),
                          e(o) && o(t)
                      })
                  },
                  removeStorage: function (t) {
                    var n = t.key,
                      a = (t.data, t.success),
                      r = t.fail,
                      i = t.complete
                    D.removeItem(n, function (t) {
                      'success' === t.result
                        ? e(a) && a({ errMsg: 'removeStorage:ok' })
                        : ((t.errMsg = 'removeStorage:fail'), e(r) && r(t)),
                        e(i) && i(t)
                    }),
                      D.removeItem(n + '__TYPE')
                  },
                  clearStorage: function (e) {
                    e.key, e.data, e.success, e.fail, e.complete
                  },
                  getClipboardData: function (t) {
                    var n = t.success,
                      a = (t.fail, t.complete)
                    $.getString(function (t) {
                      var r = { errMsg: 'getClipboardData:ok', data: t.data }
                      e(n) && n(r), e(a) && a(r)
                    })
                  },
                  setClipboardData: function (t) {
                    var n = t.data,
                      a = t.success,
                      r = (t.fail, t.complete),
                      i = { errMsg: 'setClipboardData:ok' }
                    $.setString(n), e(a) && a(i), e(r) && r(i)
                  },
                  onSubNVueMessage: c,
                  getSubNVueById: d,
                  getCurrentSubNVue: function () {
                    return d(r.webview.currentWebview().id)
                  },
                  $on: function () {
                    return R(
                      B(),
                      '$on',
                      [].concat(Array.prototype.slice.call(arguments))
                    )
                  },
                  $off: function () {
                    return R(
                      B(),
                      '$off',
                      [].concat(Array.prototype.slice.call(arguments))
                    )
                  },
                  $once: function () {
                    return R(
                      B(),
                      '$once',
                      [].concat(Array.prototype.slice.call(arguments))
                    )
                  },
                  $emit: function () {
                    return R(
                      B(),
                      '$emit',
                      [].concat(Array.prototype.slice.call(arguments))
                    )
                  },
                }),
                z = { os: { nvue: !0 } },
                F = {}
              return (
                'undefined' != typeof Proxy
                  ? (F = new Proxy(
                      {},
                      {
                        get: function (e, t) {
                          if ('os' === t) return { nvue: !0 }
                          if ('postMessage' === t) return _
                          if ('requireNativePlugin' === t) return x
                          if ('onNavigationBarButtonTap' === t) return k
                          if ('onNavigationBarSearchInputChanged' === t)
                            return M
                          if ('onNavigationBarSearchInputConfirmed' === t)
                            return E
                          if ('onNavigationBarSearchInputClicked' === t)
                            return C
                          var n = U[t]
                          return n || (n = b(t)), i(t) ? o(n) : n
                        },
                      }
                    ))
                  : (Object.keys(z).forEach(function (e) {
                      F[e] = z[e]
                    }),
                    (F.postMessage = _),
                    (F.requireNativePlugin = x),
                    (F.onNavigationBarButtonTap = k),
                    (F.onNavigationBarSearchInputChanged = M),
                    (F.onNavigationBarSearchInputConfirmed = E),
                    (F.onNavigationBarSearchInputClicked = C),
                    Object.keys({
                      uploadFile: !0,
                      downloadFile: !0,
                      chooseImage: !0,
                      previewImage: !0,
                      getImageInfo: !0,
                      saveImageToPhotosAlbum: !0,
                      chooseVideo: !0,
                      saveVideoToPhotosAlbum: !0,
                      saveFile: !0,
                      getSavedFileList: !0,
                      getSavedFileInfo: !0,
                      removeSavedFile: !0,
                      openDocument: !0,
                      setStorage: !0,
                      getStorage: !0,
                      getStorageInfo: !0,
                      removeStorage: !0,
                      clearStorage: !0,
                      getLocation: !0,
                      chooseLocation: !0,
                      openLocation: !0,
                      getSystemInfo: !0,
                      getNetworkType: !0,
                      makePhoneCall: !0,
                      scanCode: !0,
                      setScreenBrightness: !0,
                      getScreenBrightness: !0,
                      setKeepScreenOn: !0,
                      vibrateLong: !0,
                      vibrateShort: !0,
                      addPhoneContact: !0,
                      showToast: !0,
                      showLoading: !0,
                      hideToast: !0,
                      hideLoading: !0,
                      showModal: !0,
                      showActionSheet: !0,
                      setNavigationBarTitle: !0,
                      setNavigationBarColor: !0,
                      navigateTo: !0,
                      redirectTo: !0,
                      reLaunch: !0,
                      switchTab: !0,
                      navigateBack: !0,
                      getProvider: !0,
                      login: !0,
                      getUserInfo: !0,
                      share: !0,
                      requestPayment: !0,
                      subscribePush: !0,
                      unsubscribePush: !0,
                      onPush: !0,
                      offPush: !0,
                    }).forEach(function (e) {
                      var t = U[e]
                      t || (t = b(e)), i(e) ? (F[e] = o(t)) : (F[e] = t)
                    })),
                F
              )
            })
    var r = new WeexPlus(weex)
    t.weexPlus = r
    var i = a(weex, r, BroadcastChannel)
    t.default = i
  },
  function (e, t, n) {
    ;(Vue.prototype.__$appStyle__ = {}),
      Vue.prototype.__merge_style &&
        Vue.prototype.__merge_style(n(4).default, Vue.prototype.__$appStyle__)
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    var a = n(0),
      r = n.n(a)
    for (var i in a)
      'default' !== i &&
        (function (e) {
          n.d(t, e, function () {
            return a[e]
          })
        })(i)
    t.default = r.a
  },
  function (e, t, n) {
    'use strict'
    ;(function (e) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var n = {
        onLoad: function () {
          this.initMessage()
        },
        methods: {
          initMessage: function () {
            var t = this,
              n = e.webview.currentWebview().extras || {},
              a = n.from,
              r = (n.callback, n.runtime),
              i = n.data,
              o = void 0 === i ? {} : i,
              s = n.useGlobalEvent
            ;(this.__from = a),
              (this.__runtime = r),
              (this.__page = e.webview.currentWebview().id),
              (this.__useGlobalEvent = s),
              (this.data = JSON.parse(JSON.stringify(o))),
              e.key.addEventListener('backbutton', function () {
                'function' == typeof t.onClose
                  ? t.onClose()
                  : e.webview.currentWebview().close('auto')
              })
            var u = this,
              c = function (e) {
                var t = e.data && e.data.__message
                t && u.__onMessageCallback && u.__onMessageCallback(t.data)
              }
            this.__useGlobalEvent
              ? weex
                  .requireModule('globalEvent')
                  .addEventListener('plusMessage', c)
              : (new BroadcastChannel(this.__page).onmessage = c)
          },
          postMessage: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = JSON.parse(
                JSON.stringify({
                  __message: { __page: this.__page, data: t, keep: n },
                })
              ),
              r = this.__from
            if ('v8' === this.__runtime)
              if (this.__useGlobalEvent) e.webview.postMessageToUniNView(a, r)
              else {
                var i = new BroadcastChannel(r)
                i.postMessage(a)
              }
            else {
              var o = e.webview.getWebviewById(r)
              o &&
                o.evalJS(
                  '__plusMessage&&__plusMessage('.concat(
                    JSON.stringify({ data: a }),
                    ')'
                  )
                )
            }
          },
          onMessage: function (e) {
            this.__onMessageCallback = e
          },
        },
      }
      t.default = n
    }.call(this, n(2).weexPlus))
  },
  function (e, t, n) {
    'use strict'
    ;(function (e) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var n = {
        data: function () {
          return {
            locale: 'en',
            fallbackLocale: 'en',
            localization: {
              en: { done: 'OK', cancel: 'Cancel' },
              zh: { done: '完成', cancel: '取消' },
              'zh-hans': {},
              'zh-hant': {},
              messages: {},
            },
          }
        },
        onLoad: function () {
          this.initLocale()
        },
        created: function () {
          this.initLocale()
        },
        methods: {
          initLocale: function () {
            if (!this.__initLocale) {
              this.__initLocale = !0
              var t = (e.webview.currentWebview().extras || {}).data || {}
              if (
                (t.messages && (this.localization.messages = t.messages),
                t.locale)
              )
                this.locale = t.locale.toLowerCase()
              else {
                var n = e.os.language
                    .toLowerCase()
                    .split('/')[0]
                    .replace('_', '-')
                    .split('-'),
                  a = n[1]
                a &&
                  (n[1] =
                    {
                      chs: 'hans',
                      cn: 'hans',
                      sg: 'hans',
                      cht: 'hant',
                      tw: 'hant',
                      hk: 'hant',
                      mo: 'hant',
                    }[a] || a),
                  (n.length = n.length > 2 ? 2 : n.length),
                  (this.locale = n.join('-'))
              }
            }
          },
          localize: function (e) {
            var t = this.locale,
              n = t.split('-')[0],
              a = this.fallbackLocale,
              r = this.localization
            function i(e) {
              return r[e] || {}
            }
            return i('messages')[e] || i(t)[e] || i(n)[e] || i(a)[e] || e
          },
        },
      }
      t.default = n
    }.call(this, n(2).weexPlus))
  },
  ,
  ,
  ,
  function (e, t, n) {
    'use strict'
    var a = n(31),
      r = n(21),
      i = n(1)
    var o = Object(i.a)(
      r.default,
      a.b,
      a.c,
      !1,
      null,
      null,
      'ff831df6',
      !1,
      a.a,
      void 0
    )
    ;(function (e) {
      this.options.style || (this.options.style = {}),
        Vue.prototype.__merge_style &&
          Vue.prototype.__$appStyle__ &&
          Vue.prototype.__merge_style(
            Vue.prototype.__$appStyle__,
            this.options.style
          ),
        Vue.prototype.__merge_style
          ? Vue.prototype.__merge_style(n(40).default, this.options.style)
          : Object.assign(this.options.style, n(40).default)
    }.call(o),
      (t.default = o.exports))
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    'use strict'
    var a = n(22),
      r = n.n(a)
    t.default = r.a
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
    var a = r(n(45))
    function r(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var i = {
      mixins: [r(n(5)).default],
      components: { picker: a.default },
      data: function () {
        return {
          range: [],
          rangeKey: '',
          value: 0,
          mode: 'selector',
          fields: 'day',
          start: '',
          end: '',
          disabled: !1,
          visible: !1,
        }
      },
      onLoad: function () {
        var e = this
        null === this.data
          ? this.postMessage({ event: 'created' }, !0)
          : this.showPicker(this.data),
          this.onMessage(function (t) {
            e.showPicker(t)
          })
      },
      onReady: function () {
        var e = this
        this.$nextTick(function () {
          e.visible = !0
        })
      },
      methods: {
        showPicker: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.column
          for (var n in e)
            'column' !== n &&
              ('number' == typeof t
                ? this.$set(this.$data[n], t, e[n])
                : (this.$data[n] = e[n]))
        },
        close: function (e) {
          var t = this,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a = n.value,
            r = void 0 === a ? -1 : a
          ;(this.visible = !1),
            setTimeout(function () {
              t.postMessage({ event: e, value: r })
            }, 210)
        },
        onClose: function () {
          this.close('cancel')
        },
        columnchange: function (e) {
          var t = e.column,
            n = e.value
          Array.isArray(this.value) && this.$set(this.value, t, n),
            this.postMessage({ event: 'columnchange', column: t, value: n }, !0)
        },
      },
    }
    t.default = i
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    var a = n(24),
      r = n.n(a)
    for (var i in a)
      'default' !== i &&
        (function (e) {
          n.d(t, e, function () {
            return a[e]
          })
        })(i)
    t.default = r.a
  },
  function (e, t, n) {
    'use strict'
    ;(function (e) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var a = n(46),
        r = o(n(6)),
        i = o(n(47))
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return u(e)
          })(e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e)
          })(e) ||
          (function (e, t) {
            if (!e) return
            if ('string' == typeof e) return u(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return u(e, t)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function u(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n]
        return a
      }
      function c() {
        if (this.mode === d.TIME) return '00:00'
        if (this.mode === d.DATE) {
          var e = new Date().getFullYear() - 61
          switch (this.fields) {
            case p.YEAR:
              return e
            case p.MONTH:
              return e + '-01'
            default:
              return e + '-01-01'
          }
        }
        return ''
      }
      function l() {
        if (this.mode === d.TIME) return '23:59'
        if (this.mode === d.DATE) {
          var e = new Date().getFullYear() + 61
          switch (this.fields) {
            case p.YEAR:
              return e
            case p.MONTH:
              return e + '-12'
            default:
              return e + '-12-31'
          }
        }
        return ''
      }
      var f = weex.requireModule('animation'),
        d = {
          SELECTOR: 'selector',
          MULTISELECTOR: 'multiSelector',
          TIME: 'time',
          DATE: 'date',
          REGION: 'region',
        },
        p = { YEAR: 'year', MONTH: 'month', DAY: 'day' },
        h = {
          name: 'Picker',
          mixins: [r.default, i.default],
          props: {
            pageId: { type: Number, default: 0 },
            range: {
              type: Array,
              default: function () {
                return []
              },
            },
            rangeKey: { type: String, default: '' },
            value: { type: [Number, String, Array], default: 0 },
            mode: { type: String, default: d.SELECTOR },
            fields: { type: String, default: p.DAY },
            start: { type: [String, Number], default: c },
            end: { type: [String, Number], default: l },
            disabled: { type: [Boolean, String], default: !1 },
            visible: { type: Boolean, default: !1 },
          },
          data: function () {
            return {
              valueSync: null,
              timeArray: [],
              dateArray: [],
              valueArray: [],
              oldValueArray: [],
              fontSize: 16,
              height: 261,
              android: 'android' === weex.config.env.platform.toLowerCase(),
            }
          },
          computed: {
            rangeArray: function () {
              var e = this.range
              switch (this.mode) {
                case d.SELECTOR:
                  return [e]
                case d.MULTISELECTOR:
                  return e
                case d.TIME:
                  return this.timeArray
                case d.DATE:
                  var t = this.dateArray
                  switch (this.fields) {
                    case p.YEAR:
                      return [t[0]]
                    case p.MONTH:
                      return [t[0], t[1]]
                    default:
                      return [t[0], t[1], t[2]]
                  }
              }
              return []
            },
            startArray: function () {
              return this._getDateValueArray(this.start, c.bind(this)())
            },
            endArray: function () {
              return this._getDateValueArray(this.end, l.bind(this)())
            },
            textMaxLength: function () {
              return Math.floor(
                Math.min(
                  weex.config.env.deviceWidth,
                  weex.config.env.deviceHeight
                ) /
                  (this.fontSize * weex.config.env.scale + 1) /
                  this.rangeArray.length
              )
            },
          },
          watch: {
            value: function () {
              this._setValueSync()
            },
            mode: function () {
              this._setValueSync()
            },
            range: function () {
              this._setValueSync()
            },
            valueSync: function () {
              this._setValueArray()
            },
            valueArray: function (e) {
              var t = this
              if (this.mode === d.TIME || this.mode === d.DATE) {
                var n =
                    this.mode === d.TIME
                      ? this._getTimeValue
                      : this._getDateValue,
                  a = this.valueArray,
                  r = this.startArray,
                  i = this.endArray
                if (this.mode === d.DATE) {
                  var o = this.dateArray,
                    s = o[2].length,
                    u = Number(o[2][a[2]]) || 1,
                    c = new Date(
                      ''
                        .concat(o[0][a[0]], '/')
                        .concat(o[1][a[1]], '/')
                        .concat(u)
                    ).getDate()
                  c < u && (a[2] -= c + s - u)
                }
                n(a) < n(r)
                  ? this._cloneArray(a, r)
                  : n(a) > n(i) && this._cloneArray(a, i)
              }
              e.forEach(function (e, n) {
                e !== t.oldValueArray[n] &&
                  ((t.oldValueArray[n] = e),
                  t.mode === d.MULTISELECTOR &&
                    t.$emit('columnchange', { column: n, value: e }))
              })
            },
            visible: function (e) {
              var t = this
              e
                ? setTimeout(function () {
                    f.transition(t.$refs.picker, {
                      styles: { transform: 'translateY(0)' },
                      duration: 200,
                    })
                  }, 20)
                : f.transition(this.$refs.picker, {
                    styles: {
                      transform: 'translateY('.concat(
                        283 + this.safeAreaInsets.bottom,
                        'px)'
                      ),
                    },
                    duration: 200,
                  })
            },
          },
          created: function () {
            this._createTime(),
              this._createDate(),
              this._setValueSync(),
              (e.webview.currentWebview().picker = this)
          },
          methods: {
            getTexts: function (e, t) {
              var n = this,
                a = this.textMaxLength
              return e
                .map(function (e) {
                  var r = String(
                    'object' == typeof e
                      ? e[n.rangeKey] || ''
                      : n._l10nItem(e, t)
                  )
                  if (a > 0 && r.length > a)
                    for (var i = 0, o = 0, s = 0; s < r.length; s++) {
                      var u = r.charCodeAt(s)
                      if (
                        ((i += u > 127 || 94 === u ? 1 : 0.65) <= a - 1 &&
                          (o = s),
                        i >= a)
                      )
                        return s === r.length - 1 ? r : r.substr(0, o + 1) + '…'
                    }
                  return r || ' '
                })
                .join('\n')
            },
            _createTime: function () {
              var e = [],
                t = []
              e.splice(0, e.length)
              for (var n = 0; n < 24; n++) e.push((n < 10 ? '0' : '') + n)
              t.splice(0, t.length)
              for (var a = 0; a < 60; a++) t.push((a < 10 ? '0' : '') + a)
              this.timeArray.push(e, t)
            },
            _createDate: function () {
              for (
                var e = [],
                  t = new Date().getFullYear(),
                  n = t - 61,
                  a = t + 61;
                n <= a;
                n++
              )
                e.push(String(n))
              for (var r = [], i = 1; i <= 12; i++)
                r.push((i < 10 ? '0' : '') + i)
              for (var o = [], s = 1; s <= 31; s++)
                o.push((s < 10 ? '0' : '') + s)
              this.dateArray.push(e, r, o)
            },
            _getTimeValue: function (e) {
              return 60 * e[0] + e[1]
            },
            _getDateValue: function (e) {
              return 31 * e[0] * 12 + 31 * (e[1] || 0) + (e[2] || 0)
            },
            _cloneArray: function (e, t) {
              for (var n = 0; n < e.length && n < t.length; n++) e[n] = t[n]
            },
            _setValueSync: function () {
              var e = this.value
              switch (this.mode) {
                case d.MULTISELECTOR:
                  Array.isArray(e) || (e = []),
                    Array.isArray(this.valueSync) || (this.valueSync = [])
                  for (
                    var t = (this.valueSync.length = Math.max(
                        e.length,
                        this.range.length
                      )),
                      n = 0;
                    n < t;
                    n++
                  ) {
                    var a = Number(e[n]),
                      r = Number(this.valueSync[n]),
                      i = isNaN(a) ? (isNaN(r) ? 0 : r) : a,
                      o = this.range[n] ? this.range[n].length - 1 : 0
                    this.valueSync.splice(n, 1, i < 0 || i > o ? 0 : i)
                  }
                  break
                case d.TIME:
                case d.DATE:
                  this.valueSync = String(e)
                  break
                default:
                  var s = Number(e)
                  this.valueSync = s < 0 ? 0 : s
              }
            },
            _setValueArray: function () {
              var e,
                t = this.valueSync
              switch (this.mode) {
                case d.MULTISELECTOR:
                  e = s(t)
                  break
                case d.TIME:
                  e = this._getDateValueArray(
                    t,
                    (0, a.formatDateTime)({ mode: d.TIME })
                  )
                  break
                case d.DATE:
                  e = this._getDateValueArray(
                    t,
                    (0, a.formatDateTime)({ mode: d.DATE })
                  )
                  break
                default:
                  e = [t]
              }
              ;(this.oldValueArray = s(e)), (this.valueArray = s(e))
            },
            _getValue: function () {
              var e = this,
                t = this.valueArray
              switch (this.mode) {
                case d.SELECTOR:
                  return t[0]
                case d.MULTISELECTOR:
                  return t.map(function (e) {
                    return e
                  })
                case d.TIME:
                  return this.valueArray
                    .map(function (t, n) {
                      return e.timeArray[n][t]
                    })
                    .join(':')
                case d.DATE:
                  return this.valueArray
                    .map(function (t, n) {
                      return e.dateArray[n][t]
                    })
                    .join('-')
              }
            },
            _getDateValueArray: function (e, t) {
              var n = this.mode === d.DATE ? '-' : ':',
                a = this.mode === d.DATE ? this.dateArray : this.timeArray,
                r = 3
              switch (this.fields) {
                case p.YEAR:
                  r = 1
                  break
                case p.MONTH:
                  r = 2
              }
              for (var i = String(e).split(n), o = [], s = 0; s < r; s++) {
                var u = i[s]
                o.push(a[s].indexOf(u))
              }
              return (
                o.indexOf(-1) >= 0 &&
                  (o = t
                    ? this._getDateValueArray(t)
                    : o.map(function () {
                        return 0
                      })),
                o
              )
            },
            _change: function () {
              this.$emit('change', { value: this._getValue() })
            },
            _cancel: function () {
              this.$emit('cancel')
            },
            _pickerViewChange: function (e) {
              this.valueArray = this._l10nColumn(e.detail.value, !0)
            },
            _l10nColumn: function (e, t) {
              if (this.mode === d.DATE) {
                var n = this.locale
                if (!n.startsWith('zh'))
                  switch (this.fields) {
                    case p.YEAR:
                      return e
                    case p.MONTH:
                      return [e[1], e[0]]
                    default:
                      switch (n) {
                        case 'es':
                        case 'fr':
                          return [e[2], e[1], e[0]]
                        default:
                          return t ? [e[2], e[0], e[1]] : [e[1], e[2], e[0]]
                      }
                  }
              }
              return e
            },
            _l10nItem: function (e, t) {
              if (this.mode === d.DATE) {
                var n = this.locale
                if (n.startsWith('zh')) {
                  return e + ['年', '月', '日'][t]
                }
                if (
                  this.fields !== p.YEAR &&
                  t ===
                    (this.fields === p.MONTH || ('es' !== n && 'fr' !== n)
                      ? 0
                      : 1)
                ) {
                  var a
                  switch (n) {
                    case 'es':
                      a = [
                        'enero',
                        'febrero',
                        'marzo',
                        'abril',
                        'mayo',
                        'junio',
                        '​​julio',
                        'agosto',
                        'septiembre',
                        'octubre',
                        'noviembre',
                        'diciembre',
                      ]
                      break
                    case 'fr':
                      a = [
                        'janvier',
                        'février',
                        'mars',
                        'avril',
                        'mai',
                        'juin',
                        'juillet',
                        'août',
                        'septembre',
                        'octobre',
                        'novembre',
                        'décembre',
                      ]
                      break
                    default:
                      a = [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                      ]
                  }
                  return a[Number(e) - 1]
                }
              }
              return e
            },
          },
        }
      t.default = h
    }.call(this, n(2).weexPlus))
  },
  function (e, t) {
    e.exports = {
      content: { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 },
      'uni-mask': {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        opacity: 0,
        transitionProperty: 'opacity',
        transitionDuration: 200,
        transitionTimingFunction: 'linear',
      },
      '@TRANSITION': {
        'uni-mask': {
          property: 'opacity',
          duration: 200,
          timingFunction: 'linear',
        },
      },
      'uni-mask-android': { backgroundColor: 'rgba(0,0,0,0.6)' },
      'uni-mask-visible': { opacity: 1 },
      'uni-picker': {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#ffffff',
        color: '#000000',
        flexDirection: 'column',
        transform: 'translateY(295px)',
      },
      'uni-picker-header': {
        height: '45',
        borderBottomWidth: 0,
        backgroundColor: '#E6E6E6',
        fontSize: '20',
      },
      'uni-picker-action': {
        position: 'absolute',
        textAlign: 'center',
        top: 0,
        height: '45',
        paddingTop: 0,
        paddingRight: '14',
        paddingBottom: 0,
        paddingLeft: '14',
        fontSize: '17',
        lineHeight: '45',
      },
      'uni-picker-action-cancel': { left: 0, color: '#888888' },
      'uni-picker-action-confirm': { right: 0, color: '#007aff' },
      'uni-picker-content': { flex: 1 },
      'uni-picker-item': {
        lineHeight: '34',
        textAlign: 'center',
        color: '#000000',
      },
    }
  },
  function (e, t) {
    e.exports = { page: { flex: 1 } }
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    'use strict'
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n(
          'scroll-view',
          {
            staticStyle: { flexDirection: 'column' },
            attrs: { scrollY: !0, enableBackToTop: !0, bubble: 'true' },
          },
          [
            n(
              'view',
              { staticClass: ['page'] },
              [
                n('picker', {
                  attrs: {
                    range: e.range,
                    rangeKey: e.rangeKey,
                    value: e.value,
                    mode: e.mode,
                    fields: e.fields,
                    start: e.start,
                    end: e.end,
                    disabled: e.disabled,
                    visible: e.visible,
                  },
                  on: {
                    change: function (t) {
                      e.close('change', t)
                    },
                    cancel: function (t) {
                      e.close('cancel', t)
                    },
                    columnchange: e.columnchange,
                  },
                }),
              ],
              1
            ),
          ]
        )
      },
      r = []
    n.d(t, 'b', function () {
      return a
    }),
      n.d(t, 'c', function () {
        return r
      }),
      n.d(t, 'a', function () {})
  },
  ,
  ,
  function (e, t, n) {
    'use strict'
    var a = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t
        return n('div', { staticClass: ['content'] }, [
          n('div', {
            ref: 'mask',
            staticClass: ['uni-mask'],
            class: {
              'uni-mask-visible': e.visible,
              'uni-mask-android': e.android,
            },
            on: { click: e._cancel },
          }),
          n(
            'div',
            {
              ref: 'picker',
              staticClass: ['uni-picker'],
              class: { 'uni-picker-visible': e.visible },
              style:
                'padding-bottom:' +
                e.safeAreaInsets.bottom +
                'px;height:' +
                (e.height + e.safeAreaInsets.bottom) +
                'px;',
            },
            [
              n('div', { staticClass: ['uni-picker-header'] }, [
                n(
                  'u-text',
                  {
                    staticClass: [
                      'uni-picker-action',
                      'uni-picker-action-cancel',
                    ],
                    style: 'left:' + e.safeAreaInsets.left + 'px',
                    on: { click: e._cancel },
                  },
                  [e._v(e._s(e.localize('cancel')))]
                ),
                n(
                  'u-text',
                  {
                    staticClass: [
                      'uni-picker-action',
                      'uni-picker-action-confirm',
                    ],
                    style: 'right:' + e.safeAreaInsets.right + 'px',
                    on: { click: e._change },
                  },
                  [e._v(e._s(e.localize('done')))]
                ),
              ]),
              e.visible
                ? n(
                    'picker-view',
                    {
                      staticClass: ['uni-picker-content'],
                      style: 'margin-left:' + e.safeAreaInsets.left + 'px',
                      attrs: {
                        height: '216',
                        indicatorStyle:
                          'height: 34px;border-color:#C8C9C9;border-top-width:0.5px;border-bottom-width:0.5px;',
                        value: e._l10nColumn(e.valueArray),
                      },
                      on: { change: e._pickerViewChange },
                    },
                    e._l(e._l10nColumn(e.rangeArray), function (t, a) {
                      return n(
                        'picker-view-column',
                        { key: a, attrs: { length: t.length } },
                        [
                          n(
                            'u-text',
                            {
                              staticClass: ['uni-picker-item'],
                              style: { fontSize: e.fontSize + 'px' },
                            },
                            [e._v(e._s(e.getTexts(t, a)))]
                          ),
                        ]
                      )
                    }),
                    1
                  )
                : e._e(),
            ],
            1
          ),
        ])
      },
      r = []
    n.d(t, 'b', function () {
      return a
    }),
      n.d(t, 'c', function () {
        return r
      }),
      n.d(t, 'a', function () {})
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    'use strict'
    n.r(t)
    var a = n(25),
      r = n.n(a)
    for (var i in a)
      'default' !== i &&
        (function (e) {
          n.d(t, e, function () {
            return a[e]
          })
        })(i)
    t.default = r.a
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    var a = n(26),
      r = n.n(a)
    for (var i in a)
      'default' !== i &&
        (function (e) {
          n.d(t, e, function () {
            return a[e]
          })
        })(i)
    t.default = r.a
  },
  ,
  ,
  ,
  function (e, t, n) {
    'use strict'
    n.r(t)
    n(3)
    var a = n(10)
    ;(a.default.mpType = 'page'),
      (a.default.route = 'template/__uniapppicker'),
      (a.default.el = '#root'),
      new Vue(a.default)
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    var a = n(34),
      r = n(23)
    for (var i in r)
      'default' !== i &&
        (function (e) {
          n.d(t, e, function () {
            return r[e]
          })
        })(i)
    var o = n(1)
    var s = Object(o.a)(
      r.default,
      a.b,
      a.c,
      !1,
      null,
      null,
      '980cd0c2',
      !1,
      a.a,
      void 0
    )
    ;(function (e) {
      this.options.style || (this.options.style = {}),
        Vue.prototype.__merge_style &&
          Vue.prototype.__$appStyle__ &&
          Vue.prototype.__merge_style(
            Vue.prototype.__$appStyle__,
            this.options.style
          ),
        Vue.prototype.__merge_style
          ? Vue.prototype.__merge_style(n(39).default, this.options.style)
          : Object.assign(this.options.style, n(39).default)
    }.call(s),
      (t.default = s.exports))
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.formatDateTime = function (e) {
        var t = e.date,
          n = void 0 === t ? new Date() : t,
          r = e.mode
        return 'time' === (void 0 === r ? 'date' : r)
          ? a(n.getHours()) + ':' + a(n.getMinutes())
          : n.getFullYear() + '-' + a(n.getMonth() + 1) + '-' + a(n.getDate())
      })
    var a = function (e) {
      return e > 9 ? e : '0' + e
    }
  },
  function (e, t, n) {
    'use strict'
    ;(function (e) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var n = {
        data: function () {
          return { safeAreaInsets: { left: 0, right: 0, top: 0, bottom: 0 } }
        },
        onLoad: function () {
          this.initSafeAreaInsets()
        },
        created: function () {
          this.initSafeAreaInsets()
        },
        methods: {
          initSafeAreaInsets: function () {
            var t = this
            if (!this.__initSafeAreaInsets) {
              this.__initSafeAreaInsets = !0
              var n = e.webview.currentWebview()
              n.addEventListener('resize', function () {
                setTimeout(function () {
                  t.updateSafeAreaInsets(n)
                }, 20)
              }),
                this.updateSafeAreaInsets(n)
            }
          },
          updateSafeAreaInsets: function (e) {
            var t = e.getSafeAreaInsets(),
              n = this.safeAreaInsets
            Object.keys(n).forEach(function (e) {
              n[e] = t[e]
            })
          },
        },
      }
      t.default = n
    }.call(this, n(2).weexPlus))
  },
])