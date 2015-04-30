const React = require("react");
const View2 = require("react-proxy?name=View2!./View2");
const View2Proxy = React.createClass({
  mixins: [View2.Mixin],
  renderUnavailable: () => {
    return (
      <h2>
        Loading View2…
      </h2>
    );
  },
});
module.exports = View2Proxy;
