import { j as e } from "./node_modules/react/jsx-runtime.js";
import v from "./node_modules/@blockbite/icons/dist/ChevronDown.js";
import { ButtonToggle as f } from "./ButtonToggle.js";
import { Wrap as p } from "./Wrap.js";
import { Dropdown as j, TextControl as h, Button as w } from "@wordpress/components";
import { useState as c, useEffect as x } from "@wordpress/element";
import a from "classnames";
function T({
  defaultValue: t,
  options: s,
  swatch: l,
  onPressedChange: u
}) {
  const [o, i] = c(""), [d, m] = c([]);
  return x(() => {
    m(
      s.filter(
        (r) => r.label.toLowerCase().includes(o.toLowerCase())
      )
    );
  }, [o, s]), x(() => {
    i(""), m(s);
  }, [t, s]), /* @__PURE__ */ e.jsx(
    j,
    {
      className: "option-panel-dropdown",
      contentClassName: "option-panel-dropdown-content",
      popoverProps: { placement: "bottom-start" },
      renderToggle: ({ isOpen: r, onToggle: n }) => /* @__PURE__ */ e.jsx(p, { important: !0, children: /* @__PURE__ */ e.jsx(
        w,
        {
          variant: "secondary",
          size: "small",
          onClick: n,
          "aria-expanded": r,
          children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 !bg-transparent !p-0 !text-[11px] !text-current", children: [
            l && /* @__PURE__ */ e.jsx(
              "div",
              {
                className: a(
                  `h-3 w-3 rounded-full bg-${t}`
                )
              }
            ),
            /* @__PURE__ */ e.jsx("span", { children: t || "Select option…" }),
            /* @__PURE__ */ e.jsx(v, {})
          ] })
        }
      ) }),
      renderContent: () => /* @__PURE__ */ e.jsx(p, { important: !0, children: /* @__PURE__ */ e.jsxs("div", { className: "w-52", children: [
        /* @__PURE__ */ e.jsx(
          h,
          {
            label: "Search options",
            value: o,
            onChange: (r) => i(r),
            autoComplete: "off"
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-1 !bg-transparent !p-0 !pt-2", children: [
          d.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "!text-gray-medium col-span-2 pb-2 text-center !text-[11px]", children: "No options found." }),
          d.map((r, n) => /* @__PURE__ */ e.jsxs(
            f,
            {
              className: a({
                "bg-primary": r.value
              }),
              size: "small",
              value: r.value.toString(),
              defaultPressed: t,
              onPressedChange: (g) => {
                u(g ? r.value : "");
              },
              children: [
                l && /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: a(
                      `mr-3 h-3 w-3 rounded-full bg-${r.value}`
                    )
                  }
                ),
                r.label
              ]
            },
            `ButtonToggle__${r.value}___${n}`
          ))
        ] })
      ] }) })
    }
  );
}
export {
  T as default
};
