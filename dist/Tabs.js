import { j as r } from "./node_modules/react/jsx-runtime.js";
import { Wrap as b } from "./Wrap.js";
import { TabPanel as p } from "@wordpress/components";
import { createContext as v, useState as u, useContext as m } from "@wordpress/element";
import d from "classnames";
const i = v(null), S = ({
  children: s,
  defaultValue: a,
  value: t,
  onValueChange: e,
  ...o
}) => {
  const n = t !== void 0, [c, T] = u(a || ""), x = {
    activeTab: n ? t : c,
    setActiveTab: (l) => {
      n || T(l), e && e(l);
    }
  };
  return /* @__PURE__ */ r.jsx(i.Provider, { value: x, children: /* @__PURE__ */ r.jsx(b, { important: !0, className: o.className, children: s }) });
}, W = ({
  options: s,
  children: a,
  className: t,
  onValueChange: e
}) => {
  const o = m(i), n = e || o?.setActiveTab;
  return /* @__PURE__ */ r.jsx(
    p,
    {
      className: d("tabs-list", t),
      tabs: s,
      onSelect: (c) => {
        n(c);
      },
      children: () => a
    }
  );
}, E = ({
  value: s,
  children: a,
  className: t
}) => m(i)?.activeTab === s ? /* @__PURE__ */ r.jsx(b, { className: t, children: a }) : null;
export {
  E as TabsContent,
  W as TabsList,
  S as TabsWrapper
};
