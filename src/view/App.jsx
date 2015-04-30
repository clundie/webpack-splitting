const React = require("react");
const View1 = require("./View1Proxy");
const View2 = require("./View2Proxy");
require("./App.less");

function viewWithIndex(index) {
  switch (index) {
    case 1:
      return (<View1 />);
    case 2:
      return (<View2 />);
    default:
      return (<h2>No Selection</h2>);
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    const childView = viewWithIndex(this.state.selectedIndex);
    return (
      <div>
        <h1>
          Hello, World!
        </h1>
        <div>
          <button onClick={this.setSelectedIndex.bind(this, 1)}>View1</button>
          <button onClick={this.setSelectedIndex.bind(this, 2)}>View2</button>
        </div>
        {childView}
      </div>
    );
  }

  setSelectedIndex(index) {
    this.setState({selectedIndex: index});
  }

}

module.exports = App;
