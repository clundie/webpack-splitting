const CodeMirror = require("codemirror");
const React = require("react");
require("./View2.less");
require("codemirror/mode/htmlmixed/htmlmixed.js");

class View2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="view2">
        <h2>
          View2
        </h2>
        <div key="editor" ref="editor"></div>
      </div>
    );
  }

  componentDidMount() {
    this._createEditor();
  }

  componentWillUnmount() {
    this._destroyEditor();
  }

  _createEditor() {
    const container = this.refs.editor.getDOMNode();
    Array.from(container.childNodes).forEach((node) => {
      node.remove()
    });
    this._editor = new CodeMirror(container, {
      mode: "htmlmixed",
      lineNumbers: true,
      viewportMargin: 0,
      lineWrapping: true,
    });
  }

  _destroyEditor() {
    const {_editor} = this;
    if (_editor) {
      delete this._editor;
    }
  }

}

module.exports = View2;
