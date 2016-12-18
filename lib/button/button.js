'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var s = {
    "button": "mcc8cc06d4_button"
};

function Button(_ref) {
    var type = _ref.type,
        children = _ref.children;

    return React.createElement(
        'button',
        { className: s.button, type: type },
        children
    );
}

module.exports = Button;
