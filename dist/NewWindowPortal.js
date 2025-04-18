import { useMemo as l, useEffect as s, createPortal as c } from "@wordpress/element";
function i(t, o) {
  Array.from(t.styleSheets).forEach((r) => {
    try {
      if (r.cssRules) {
        const n = o.createElement("style");
        Array.from(r.cssRules).forEach((e) => {
          n.appendChild(o.createTextNode(e.cssText));
        }), o.head.appendChild(n);
      } else if (r.href) {
        const n = o.createElement("link");
        n.rel = "stylesheet", n.href = r.href, o.head.appendChild(n);
      }
    } catch (n) {
      if (r.href) {
        const e = o.createElement("link");
        e.rel = "stylesheet", e.href = r.href, o.head.appendChild(e);
      } else
        console.warn("Error copying styles:", n);
    }
  });
}
const f = ({
  windowInstance: t,
  onClose: o,
  children: r
}) => {
  const n = l(() => document.createElement("div"), []);
  return s(() => {
    const e = t;
    e.document.body.innerHTML = "", e.document.body.appendChild(n), e.document.body.classList.add("bb_"), i(document, e.document), e.document.title = document.title || "Blockbite Editor";
    const d = () => {
      setTimeout(o, 100);
    };
    return e.addEventListener("beforeunload", d), () => {
      e.removeEventListener("beforeunload", d);
    };
  }, [t]), c(r, n);
};
export {
  f as NewWindowPortal
};
