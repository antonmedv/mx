# mx

> MX – Markup without jsX

## Install

```bash
npm install mx
```

### Webpack

First, let’s install the webpack loader for _mx_: 

```bash
npm install mx-loader
```

Then in `webpack.config.json` add new rule for `*.mx` filex:

```js
  module: {
    rules: [
      { test: /\.mx$/, use: 'mx-loader' }
    ]
  }
```

Full example [here](examples/webpack).

### Usage with create-react-app

First, let’s install the command-line interface for _mx_:

```bash
npm install mx-cli
```

Then in `package.json`, add the following lines to scripts:

```diff
   "scripts": {
+    "build-mx": "mx src/ -o src/",
+    "watch-mx": "npm run build-mx && mx src/ -o src/ --watch",
     "start": "react-scripts start",
```

As a final step, you may find it convenient to run `watch-mx` automatically with npm start, 
and run `build-mx` as a part of `npm run build`. You can use the && operator to execute two scripts sequentially. 
However, there is no cross-platform way to run two scripts in parallel, so we will install a package for this:

```bash
npm install npm-run-all
```

Then we can change start and build scripts to include the CSS preprocessor commands:

```diff
   "scripts": {
     "build-mx": "mx src/ -o src/",
     "watch-mx": "npm run build-mx && mx src/ -o src/ --watch",
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-mx start-js",
+    "build": "npm run build-mx && react-scripts build",
     "test": "react-scripts test --env=jsdom",
     "eject": "react-scripts eject"
   }
```

Now running `npm start` and `npm run build` also builds _mx_ files.
