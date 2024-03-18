import { j as jsxs, e as jsx } from "./index-763d6cbb.js";
import { T as Tippy } from "./tippy-react.esm-5365a1e2.js";
import { t as tyl, L as LinkedSVG } from "./TokenFilterForm.module-38dece39.js";
const Header = ({ links = { cup: "/new", sign: "/" }, ...props }) => /* @__PURE__ */ jsxs("header", { id: tyl.header, ...props, children: [
  /* @__PURE__ */ jsx(Tippy, { content: "Create A New Token Type", children: /* @__PURE__ */ jsx(
    LinkedSVG,
    {
      id: tyl.cup,
      className: "link",
      svg: "logo.svg",
      href: links.cup
    }
  ) }),
  /* @__PURE__ */ jsx(Tippy, { content: "List Existing Tokens", children: /* @__PURE__ */ jsx(
    LinkedSVG,
    {
      id: tyl.sign,
      className: "link",
      svg: "header.svg",
      href: links.sign
    }
  ) })
] });
export {
  Header as H
};
//# sourceMappingURL=Header-b4f0279e.js.map
