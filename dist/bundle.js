(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom'), require('react-share')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom', 'react-share'], factory) :
  (global = global || self, factory(global.React, global.ReactDOM, global.reactShare));
}(this, function (React, ReactDOM, reactShare) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var Header =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Header, _Component);

    function Header() {
      _classCallCheck(this, Header);

      return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
    }

    _createClass(Header, [{
      key: "render",
      value: function render() {
        return React__default.createElement("div", null, "Hello");
      }
    }]);

    return Header;
  }(React.Component);

  function App() {
    console.log(window);
    return React__default.createElement("div", {
      className: "App"
    }, React__default.createElement(Header, null));
  }

  // This optional code is used to register a service worker.
  // register() is not called by default.
  // This lets the app load faster on subsequent visits in production, and gives
  // it offline capabilities. However, it also means that developers (and users)
  // will only see deployed updates on subsequent visits to a page, after all the
  // existing tabs open on the page have been closed, since previously cached
  // resources are updated in the background.
  // To learn more about the benefits of this model and instructions on how to
  // opt-in, read https://bit.ly/CRA-PWA
  var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

  function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister();
      });
    }
  }

  ReactDOM.render(React__default.createElement(App, null), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA

  unregister();

}));
