const React = require("react");
const View1 = require("react-proxy!./View1");
const View1Proxy = React.createClass({
  mixins: [View1.Mixin],
  renderUnavailable: () => {
    return (
      <h2>
        Loading View1…
      </h2>
    );
  },
});
module.exports = View1Proxy;
