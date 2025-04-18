import { j as s } from "./node_modules/react/jsx-runtime.js";
function n({
  icon: t,
  title: a,
  description: m,
  children: e = null,
  ...l
}) {
  return /* @__PURE__ */ s.jsx("div", { ...l, children: /* @__PURE__ */ s.jsx("div", { className: "flex h-full w-full flex-col items-center justify-center text-center !font-sans", children: /* @__PURE__ */ s.jsxs("div", { className: "max-w-sm", children: [
    t && /* @__PURE__ */ s.jsx("div", { className: "mx-auto !text-gray-400", children: t }),
    /* @__PURE__ */ s.jsx("h3", { className: "text-gray-medium mt-2 !font-sans text-sm font-medium", children: a }),
    /* @__PURE__ */ s.jsx("p", { className: "mt-1 !font-sans text-sm !text-gray-500", children: m }),
    e && /* @__PURE__ */ s.jsx("div", { className: "mt-4", children: e })
  ] }) }) });
}
export {
  n as default
};
