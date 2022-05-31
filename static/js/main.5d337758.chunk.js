(this["webpackJsonppoke-air-conditioner"] =
  this["webpackJsonppoke-air-conditioner"] || []).push([
  [0],
  {
    20: function (n, e, t) {
      "use strict";
      t.r(e);
      var o,
        i,
        r,
        a,
        c,
        s,
        d,
        l,
        u,
        p,
        b,
        f,
        x,
        j = t(0),
        g = t.n(j),
        m = t(9),
        h = t.n(m),
        v = t(2),
        O = t(7),
        w = t(3),
        y = w.b.button(
          o ||
            (o = Object(v.a)([
              "\n  font-size: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f2f2f2;\n  border: none;\n  border-radius: 99em;\n  outline: none;\n  box-shadow: 2px 2px 6px lightgray;\n  user-select: none;\n\n  &:active {\n    box-shadow: inset 2px 2px 6px lightgray;\n  }\n",
            ]))
        ),
        k = new Audio("/assets/sound_effect/button.mp3"),
        I = new Audio("/assets/sound_effect/on.mp3"),
        A = new Audio("/assets/sound_effect/off.mp3"),
        D = new Audio("/assets/sound_effect/air_conditioner.ogg"),
        _ = t(1);
      var C,
        z = w.b.div(
          r ||
            (r = Object(v.a)([
              "\n  max-width: 600px;\n  height: 100vh;\n  background: #fff;\n  margin: 0 auto;\n",
            ]))
        ),
        S = w.b.div(
          a ||
            (a = Object(v.a)([
              "\n  width: calc(100% - 48px);\n  min-width: 320px;\n  max-width: 460px;\n  height: 120px;\n  border: 3px lightgray solid;\n  margin: 24px auto;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  box-shadow: 4px 6px 12px #808080cc;\n",
            ]))
        ),
        E = w.b.div(
          c ||
            (c = Object(v.a)([
              "\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  height: 200px;\n  gap: 24px;\n  padding: 42px 24px 0;\n  margin: 0 auto;\n",
            ]))
        ),
        F = w.b.div(
          s ||
            (s = Object(v.a)([
              '\n  padding: 0 24px;\n  font-family: "DigitalDisplay";\n  font-size: 24px;\n  color: var(--color-blue);\n  display: flex;\n  justify-content: flex-end;\n  text-shadow: 0 0 2px;\n  transition: color 0.5s ease-out;\n\n  ',
              "\n",
            ])),
          function (n) {
            return (
              n.disabled &&
              "\n    color: lightgray;\n    text-shadow: none;\n  "
            );
          }
        ),
        J = w.b.div(
          d ||
            (d = Object(v.a)([
              "\n  font-size: 12px;\n  position: relative;\n  top: -2px;\n  margin-left: 2px;\n",
            ]))
        ),
        M = w.b.div(
          l ||
            (l = Object(v.a)([
              "\n  position: absolute;\n  right: 12px;\n  bottom: 6px;\n  color: lightgray;\n  font-size: 14px;\n  font-weight: 600;\n  transition: color 0.5s ease-out;\n\n  ",
              ";\n",
            ])),
          function (n) {
            return (
              n.open &&
              "\n     color: var(--color-blue);\n     text-shadow: 0 0 4px;\n  "
            );
          }
        ),
        N = Object(w.b)(y)(
          u ||
            (u = Object(v.a)([
              "\n  grid-column-start: 1;\n  grid-column-end: 3;\n",
            ]))
        ),
        P = Object(w.b)(y)(p || (p = Object(v.a)([""]))),
        T = Object(w.b)(y)(
          b || (b = Object(v.a)(["\n  grid-column-start: 3;\n"]))
        ),
        X = w.b.div(
          f ||
            (f = Object(v.a)([
              "\n  height: 20px;\n  background: #333;\n  position: absolute;\n  bottom: 0;\n  width: 80%;\n  margin-left: 16px;\n  border-radius: 2px 2px 0 0;\n  perspective: 900px;\n",
            ]))
        ),
        B = w.b.div(
          x ||
            (x = Object(v.a)([
              "\n  height: 18px;\n  background: #f8f8f8;\n  border-radius: 2px 2px 0 0;\n  margin: 2px 2px 0;\n  transform: rotateX(0deg);\n  transform-style: preserve-3d;\n  transform-origin: 0 16px;\n  border: 1px solid lightgray;\n  transition: transform ",
              "s linear;\n\n  ",
              "\n",
            ])),
          5,
          function (n) {
            return n.open && "\n    transform: rotateX(-160deg);\n  ";
          }
        ),
        R = function () {
          var n = Object(j.useState)(!1),
            e = Object(O.a)(n, 2),
            t = e[0],
            o = e[1],
            r = Object(j.useState)(23),
            a = Object(O.a)(r, 2),
            c = a[0],
            s = a[1],
            d = Object(j.useRef)();
          return (
            Object(j.useEffect)(function () {
              var n = new (window.AudioContext || window.webkitAudioContext)(),
                e = n.createMediaElementSource(D);
              return (
                e.connect(n.destination),
                (d.current = n),
                function () {
                  e.disconnect(n.destination), n.close();
                }
              );
            }, []),
            Object(_.jsxs)(z, {
              children: [
                Object(_.jsxs)(S, {
                  children: [
                    Object(_.jsxs)(F, {
                      disabled: !t,
                      children: [
                        t ? c : "00",
                        Object(_.jsx)(J, { children: "\u2103" }),
                      ],
                    }),
                    Object(_.jsx)(M, { open: t, children: "\u3007" }),
                    Object(_.jsx)(X, {
                      children: Object(_.jsx)(B, { open: t }),
                    }),
                  ],
                }),
                Object(_.jsxs)(E, {
                  children: [
                    Object(_.jsx)(N, {
                      onClick: function () {
                        var n, e;
                        if (t)
                          return (
                            A.play(),
                            o(!1),
                            void ((e = D),
                            clearInterval(i),
                            new Promise(function (n, t) {
                              var o = window.setInterval(function () {
                                if (e.volume <= 0)
                                  return clearInterval(o), void n();
                                e.volume = Number(e.volume.toFixed(2)) - 0.01;
                              }, 40);
                              i = o;
                            })).then(function () {
                              var n;
                              null === (n = d.current) ||
                                void 0 === n ||
                                n.suspend();
                            })
                          );
                        I.play(),
                          null === (n = d.current) ||
                            void 0 === n ||
                            n.resume(),
                          !0 === D.paused &&
                            ((D.volume = 0), (D.loop = !0), D.play()),
                          o(!0),
                          (function (n) {
                            new Promise(function (e, t) {
                              clearInterval(i);
                              var o = window.setInterval(function () {
                                if (n.volume >= 1)
                                  return clearInterval(o), void e();
                                n.volume = Number(n.volume.toFixed(2)) + 0.01;
                              }, 50);
                              i = o;
                            });
                          })(D);
                      },
                      children: "\ud83d\udd34",
                    }),
                    Object(_.jsx)(P, {
                      onClick: function () {
                        t && ((k.currentTime = 0), k.play(), s(c + 1));
                      },
                      children: "\u2795",
                    }),
                    Object(_.jsx)(T, {
                      onClick: function () {
                        t && ((k.currentTime = 0), k.play(), s(c - 1));
                      },
                      children: "\u2796",
                    }),
                  ],
                }),
              ],
            })
          );
        },
        q = Object(w.a)(
          C ||
            (C = Object(v.a)([
              "\n   :root{\n       --color-blue: #87d7f6;\n   }\n\n   @font-face {\n       font-family: 'DigitalDisplay';\n       src: url('/assets/Digital_Display.woff2') format('woff2');\n   }\n",
            ]))
        );
      h.a.render(
        Object(_.jsxs)(g.a.StrictMode, {
          children: [Object(_.jsx)(q, {}), Object(_.jsx)(R, {})],
        }),
        document.getElementById("root")
      );
    },
  },
  [[20, 1, 2]],
]);
//# sourceMappingURL=main.5d337758.chunk.js.map
