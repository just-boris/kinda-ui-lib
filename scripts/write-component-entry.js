const fs = require('fs');
const path = require("path");
const fileTemplate = (name) => `require('./${name}.css');module.exports = require('./${name}.js');`;


require('./get-components-list')().forEach(component => {
    fs.writeFileSync(path.resolve(__dirname, `../lib/${component}/index.js`), fileTemplate(component), 'utf-8');
});