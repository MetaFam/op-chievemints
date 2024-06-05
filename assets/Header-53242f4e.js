import { j as jsxs, e as jsx } from "./index-5f9930e2.js";
import { T as Tippy } from "./tippy-react.esm-11d9cd95.js";
import { t as tyl, L as LinkedSVG } from "./TokenFilterForm.module-e01cf35b.js";
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
//# sourceMappingURL=Header-53242f4e.js.map
