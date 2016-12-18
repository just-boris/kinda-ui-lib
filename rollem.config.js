const babel = require('rollup-plugin-babel');
const css = require('modular-css/rollup');
const getComponentsList = require(process.cwd() + '/scripts/get-components-list');

module.exports = getComponentsList().map(component => ({
    entry: `./components/${component}/index.js`,
    dest: `./lib/${component}/${component}.js`,
    format: 'cjs',
    plugins: [
        css({
            css: `./lib/${component}/${component}.css`
        }),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}));