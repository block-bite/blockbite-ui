import { j as e } from "./node_modules/react/jsx-runtime.js";
import S from "./ButtonToggle.js";
import { DropdownPicker as C } from "./DropdownPicker.js";
import { Popover as P } from "./Popover.js";
import w from "./RangeSlider.js";
import { TextControl as I } from "./TextControl.js";
import { Wrap as N } from "./Wrap.js";
import { useState as a, useEffect as d } from "@wordpress/element";
import k from "./node_modules/@blockbite/icons/dist/ColumnSpacing.js";
import O from "./node_modules/@blockbite/icons/dist/Desktop.js";
import T from "./node_modules/@blockbite/icons/dist/Grid.js";
import R from "./node_modules/@blockbite/icons/dist/Percentage.js";
import G from "./node_modules/@blockbite/icons/dist/Slider.js";
import A from "./node_modules/@blockbite/icons/dist/Tailwind.js";
import D from "./node_modules/lodash/has.js";
const X = ({
  defaultUnit: l,
  defaultValue: n,
  onValueChange: o,
  onUnitChange: g,
  inputClassName: j = "w-[75px]"
}) => {
  const [c, m] = a(!1), [v, b] = a([]), [s, f] = a(l), [t, i] = a(""), [x, h] = a(n);
  d(() => {
    l && f(l), n && i(n.toString());
  }, [l, n]), d(() => {
    !c && s === "arbitrary" && h(t);
  }, [c]);
  const u = (r) => {
    if (r !== "arbitrary" && D(bb.codex.units.spacing, r)) {
      const p = bb.codex.units.spacing[r];
      b(
        Array.isArray(p) ? p : Object.keys(p)
      );
    } else
      b([]);
    m(!0);
  }, y = [
    {
      icon: /* @__PURE__ */ e.jsx(A, {}),
      label: "Tailwind CSS Units",
      value: "native"
    },
    { icon: /* @__PURE__ */ e.jsx(R, {}), label: "Percentage Units", value: "percent" },
    { icon: /* @__PURE__ */ e.jsx(T, {}), label: "Grid Units", value: "grid" },
    { icon: /* @__PURE__ */ e.jsx(O, {}), label: "Screen Units", value: "screen" },
    { icon: /* @__PURE__ */ e.jsx(G, {}), label: "Pixel Units", value: "arbitrary" },
    { icon: /* @__PURE__ */ e.jsx(k, {}), label: "Fluid Units", value: "fluid" }
  ];
  return /* @__PURE__ */ e.jsx(N, { className: "relative flex flex-col items-baseline", children: /* @__PURE__ */ e.jsxs(
    I,
    {
      inputClassName: j,
      defaultValue: (
        // Remove the "b_" prefix for grid units
        s === "grid" ? t.replace("b_", "") : t
      ),
      onClick: () => s !== "arbitrary" && u(s),
      onChange: (r) => {
        i(r), o(r);
      },
      readOnly: s !== "arbitrary",
      children: [
        /* @__PURE__ */ e.jsx(
          P,
          {
            visible: c,
            position: "bottom left",
            className: "w-[300px] bg-white shadow-sm",
            onVisibleChange: m,
            children: s === "arbitrary" ? /* @__PURE__ */ e.jsx(
              w,
              {
                defaultValue: t,
                label: "Pixel Value",
                min: 0,
                max: 100,
                gridMode: !0,
                showTooltip: !1,
                allowReset: !0,
                resetFallbackValue: isNaN(x.toString()) ? 0 : Number(x) / 16,
                onValueChange: (r) => {
                  i(r), o(r);
                }
              }
            ) : /* @__PURE__ */ e.jsx(
              S,
              {
                className: "mt-4",
                options: v.map((r) => ({
                  value: r,
                  label: s === "grid" ? r.toString().replace("b_", "") : r,
                  onClick: () => {
                    i(r), o(r);
                  }
                })),
                size: "small",
                defaultPressed: t?.toString() || "",
                onPressedChange: (r) => {
                  i(r), o(r);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ e.jsx(
          C,
          {
            className: "h-[32px]",
            defaultValue: s,
            options: y,
            onPressedChange: (r) => {
              r === "reset" ? (i(""), o(""), m(!1)) : (f(r), g(r), u(r));
            }
          }
        )
      ]
    }
  ) });
};
export {
  X as default
};
