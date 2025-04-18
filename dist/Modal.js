import { j as r } from "./node_modules/react/jsx-runtime.js";
import { createContext as j, useContext as b, useState as v, useEffect as u, Children as a, isValidElement as l } from "@wordpress/element";
import { Modal as C } from "@wordpress/components";
import n from "classnames";
const i = j(null), d = () => {
  const e = b(i);
  if (!e)
    throw new Error("useModalContext must be used within a ModalProvider");
  return e;
}, R = ({
  children: e,
  defaultOpen: o,
  onOpenChange: s,
  title: p,
  className: f
}) => {
  const [m, c] = v(!1);
  u(() => {
    c(o);
  }, [o]);
  const M = () => c(!0), x = () => c(!1);
  return u(() => {
    s(m);
  }, [m, s]), /* @__PURE__ */ r.jsxs(i.Provider, { value: { closeModal: x, openModal: M }, children: [
    a.map(e, (t) => l(t) && t.type === w ? t : null),
    m && /* @__PURE__ */ r.jsx(
      C,
      {
        className: n("blockbite-ui__modal bb_", f),
        onRequestClose: x,
        title: p,
        children: /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
          a.map(e, (t) => l(t) && t.type === y ? t : null),
          a.map(e, (t) => l(t) && t.type === g ? t : null),
          a.map(e, (t) => l(t) && t.type === N ? t : null)
        ] })
      }
    )
  ] });
}, y = ({ children: e, className: o = "", ...s }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: n(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      o
    ),
    ...s,
    children: e
  }
), N = ({ children: e, className: o = "", ...s }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: n(
      "border-gray-light fixed bottom-0 left-0 right-0 flex h-[4rem] flex-row items-center justify-end space-x-2 border-t bg-white px-4",
      o
    ),
    ...s,
    children: e
  }
), g = ({ children: e, className: o = "", ...s }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: n("text-gray-medium px-4 pb-4 text-sm", o),
    ...s,
    children: e
  }
), q = ({ children: e }) => {
  const { closeModal: o } = d();
  return /* @__PURE__ */ r.jsx("div", { onClick: o, className: "cursor-pointer", children: e });
}, w = ({ children: e }) => {
  const { openModal: o } = d();
  return /* @__PURE__ */ r.jsx("div", { onClick: o, className: "cursor-pointer", children: e });
};
export {
  R as Modal,
  q as ModalClose,
  g as ModalContent,
  N as ModalFooter,
  y as ModalHeader,
  w as ModalTrigger,
  d as useModalContext
};
