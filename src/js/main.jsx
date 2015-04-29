function render() {
  const React = require("react");
  const App = require("./view/App");
  React.render(
    <App />,
    document.body
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", render);
} else {
  render();
}
