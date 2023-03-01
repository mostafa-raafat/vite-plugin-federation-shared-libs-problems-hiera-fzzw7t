import { j as jsx } from './jsx-runtime.c1a57ba9.js';

const style = {
  background: "#a3e077",
  color: "#FFFFFF",
  padding: 12
};
const Button = () => {
  const buttonHandler = () => {
    console.log(import.meta);
    alert("button event");
  };
  return /* @__PURE__ */ jsx("button", {
    className: "remote-btn",
    style,
    onClick: () => buttonHandler(),
    children: "Rollup Remote React Button"
  });
};

export { Button as default };
//# sourceMappingURL=__federation_expose_Button.e89b46ce.js.map
