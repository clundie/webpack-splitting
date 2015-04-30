# webpack-splitting

Demo project that shows Webpack code splitting with React.

- The code for `View1` and `View2` is split into separate `.js` resources, so
  their code is not downloaded by the browser until the user navigates to them.
  Those modules will be very tiny, since Webpack can deduplicate and remove
  modules that are shared with the main module (mainly, React, and also the
  Babel runtime).

- The React components hot-reload when you edit their `.jsx` source code.

- The CSS stylesheet for the main view is placed into a `.css` resource. The
  styles for `View1` and `View2`, however, are bundled into the respective
  `.js` resources, so the user gets the benefit of not downloading styles until
  needed.

See:

react-proxy-loader:
https://github.com/webpack/react-proxy-loader

react-hot-loader:
https://github.com/gaearon/react-hot-loader

Webpack code splitting:
http://webpack.github.io/docs/code-splitting.html

Babel (ES6 compiler):
https://babeljs.io


## Set up

Requires node.js >=0.12.0. Then:

```bash
npm install
```


## Running

```bash
npm start
```


## Viewing

Open <http://localhost:3000/>.
