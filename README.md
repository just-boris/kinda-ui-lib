# kinda-ui-lib

This is an example how to organize ui library. Technology stack

* React
* Rollup
* CSS-modules

## Usage

Install directly from Github

```
npm install https://github.com/just-boris/kinda-ui-lib.git
```

Import components into your project

```
// bundled component with styles 
import Button 'kinda-ui-lib/lib/button/index.js';

// just component without styles
import Button 'kinda-ui-lib/lib/button/button.js';
```

## Project structure

* Components folder contains source code for components
* Lib foleder contains resulting bundles that you may import into your app.


