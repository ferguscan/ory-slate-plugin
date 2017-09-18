var _jsxFileName = 'src/plugins/link/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-alert, prefer-reflect, default-case, react/display-name */
import LinkIcon from 'material-ui-icons/Link';
import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { ToolbarButton } from '../../helpers';
import Plugin from '../Plugin';
import Link from './node';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import { Data } from 'slate';


export var A = 'LINK/LINK';

var LinkButton = function (_Component) {
  _inherits(LinkButton, _Component);

  function LinkButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkButton.__proto__ || Object.getPrototypeOf(LinkButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false,
      href: '',
      title: '',
      hadLinks: false
    }, _this.onRef = function (component) {
      if (!component && true) {
        return null;
      }

      var e = component.querySelector('input');
      if (e) {
        e.focus();
      }
    }, _this.onClick = function (e) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;

      e.preventDefault();

      var hasLinks = editorState.inlines.some(function (inline) {
        return inline.type === A;
      });

      if (hasLinks) {
        var newState = editorState.transform().unwrapInline(A).apply();
        onChange(newState);
      } else if (editorState.isExpanded) {
        _this.setState({
          open: true,
          wasExpanded: editorState.isExpanded,
          href: '',
          title: '',
          hadLinks: hasLinks
        });
      } else {
        _this.setState({
          open: true,
          wasExpanded: editorState.isExpanded,
          href: '',
          title: '',
          hadLinks: hasLinks
        });
      }
    }, _this.handleClose = function () {
      _this.setState({ open: false });

      var newState = _this.props.editorState.transform().focus().apply();
      window.setTimeout(function () {
        return _this.props.onChange(newState);
      }, 1);
    }, _this.handleSubmit = function () {
      _this.setState({ open: false });

      if (!_this.state.href) {
        _this.handleClose();
        return;
      }

      if (_this.state.wasExpanded) {
        var _newState = _this.props.editorState.transform().focus().apply().transform().wrapInline({
          type: A,
          data: { href: _this.state.href }
        }).collapseToEnd().apply();

        window.setTimeout(function () {
          return _this.props.onChange(_newState);
        }, 1);
        window.setTimeout(function () {
          return _this.props.focus();
        }, 100);
        return;
      }

      if (!_this.state.title) {
        _this.handleClose();
        return;
      }

      var newState = _this.props.editorState.transform().insertText(_this.state.title).extend(-_this.state.title.length).wrapInline({
        type: A,
        data: { href: _this.state.href }
      }).collapseToEnd().focus().apply();

      _this.props.onChange(newState);
      window.setTimeout(function () {
        return _this.props.focus();
      }, 100);
    }, _this.onHrefChange = function (e) {
      _this.setState({ href: e.target.value });
    }, _this.onTitleChange = function (e) {
      _this.setState({ title: e.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LinkButton, [{
    key: 'render',
    value: function render() {
      var actions = [React.createElement(
        Button,
        {
          key: '0',
          color: 'accent',
          onTouchTap: this.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        },
        'Cancel'
      ), React.createElement(
        Button,
        {
          key: '1',
          color: 'primary',
          onTouchTap: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        },
        'Submit'
      )];
      var editorState = this.props.editorState;


      var hasLinks = editorState.inlines.some(function (inline) {
        return inline.type === A;
      });
      return React.createElement(
        MuiThemeProvider,
        { theme: createMuiTheme(), __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        },
        React.createElement(
          'span',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          },
          React.createElement(ToolbarButton, {
            onClick: this.onClick,
            isActive: hasLinks,
            icon: React.createElement(LinkIcon, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              },
              __self: this
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }),
          React.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              },
              __self: this
            },
            React.createElement(
              Dialog,
              {
                className: 'ory-prevent-blur',
                open: this.state.open,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 164
                },
                __self: this
              },
              React.createElement(
                DialogTitle,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                  },
                  __self: this
                },
                'Create a link'
              ),
              this.state.wasExpanded ? null : React.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                  },
                  __self: this
                },
                React.createElement(TextField, {
                  helperText: 'Link title',
                  onChange: this.onTitleChange,
                  value: this.state.title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171
                  },
                  __self: this
                })
              ),
              React.createElement(
                'div',
                { ref: this.onRef, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                  },
                  __self: this
                },
                React.createElement(TextField, {
                  helperText: 'http://example.com/my/link.html',
                  onChange: this.onHrefChange,
                  value: this.state.href,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                  },
                  __self: this
                })
              ),
              actions
            )
          )
        )
      );
    }
  }]);

  return LinkButton;
}(Component);

var LinkPlugin = function (_Plugin) {
  _inherits(LinkPlugin, _Plugin);

  function LinkPlugin() {
    var _ref2,
        _this3 = this;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, LinkPlugin);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = LinkPlugin.__proto__ || Object.getPrototypeOf(LinkPlugin)).call.apply(_ref2, [this].concat(args))), _this2), _this2.name = 'link', _this2.nodes = _defineProperty({}, A, Link), _this2.hoverButtons = [LinkButton], _this2.toolbarButtons = [LinkButton], _this2.deserialize = function (el, next) {
      switch (el.tagName.toLowerCase()) {
        case 'a':
          return {
            kind: 'inline',
            type: A,
            nodes: next(el.childNodes),
            data: Data.create({ href: (el.attrs.find(function (_ref3) {
                var name = _ref3.name;
                return name === 'href';
              }) || { value: '' }).value })
          };
      }
    }, _this2.serialize = function (object, children) {
      if (object.kind !== 'inline') {
        return;
      }
      switch (object.type) {
        case A:
          return React.createElement(
            'a',
            { href: object.data.get('href'), __source: {
                fileName: _jsxFileName,
                lineNumber: 223
              },
              __self: _this3
            },
            children
          );
      }
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  return LinkPlugin;
}(Plugin);

export default LinkPlugin;
//# sourceMappingURL=index.js.map