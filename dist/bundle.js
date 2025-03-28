"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var React = _interopRequireWildcard(require("react"));
var _client = require("react-dom/client");
var _components = require("@github/spark/components");
var _react2 = require("@phosphor-icons/react");
var _hooks = require("@github/spark/hooks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Event start date
var EVENT_START = new Date('2025-05-20T09:00:00');

// Countdown Timer Component
var CountdownTimer = function CountdownTimer() {
  var _React$useState = React.useState(getTimeUntilEvent()),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    timeLeft = _React$useState2[0],
    setTimeLeft = _React$useState2[1];
  function getTimeUntilEvent() {
    var now = new Date();
    var difference = EVENT_START - now;
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(difference % (1000 * 60) / 1000);
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  React.useEffect(function () {
    var timer = setInterval(function () {
      setTimeLeft(getTimeUntilEvent());
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center gap-8 my-8"
  }, Object.entries(timeLeft).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      unit = _ref2[0],
      value = _ref2[1];
    return /*#__PURE__*/React.createElement("div", {
      key: unit,
      className: "text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-neutral-3 p-6 rounded-lg min-w-[100px]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-4xl font-bold text-accent-11"
    }, value)), /*#__PURE__*/React.createElement("div", {
      className: "mt-2 text-neutral-11 capitalize"
    }, unit));
  }));
};

// Registration Form Component
var RegistrationForm = function RegistrationForm() {
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    registered = _React$useState4[0],
    setRegistered = _React$useState4[1];
  var _React$useState5 = React.useState(""),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    email = _React$useState6[0],
    setEmail = _React$useState6[1];
  React.useEffect(function () {
    // Load registration status on mount
    var checkRegistration = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var status;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return spark.kv.get("registered");
            case 2:
              status = _context.sent;
              if (status === "true") {
                setRegistered(true);
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function checkRegistration() {
        return _ref3.apply(this, arguments);
      };
    }();
    checkRegistration();
  }, []);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            _context2.next = 3;
            return spark.kv.set("registered", "true");
          case 3:
            _context2.next = 5;
            return spark.kv.set("email", email);
          case 5:
            setRegistered(true);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleSubmit(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  if (registered) {
    return /*#__PURE__*/React.createElement(_components.Card, {
      className: "text-center p-6"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xl text-accent-11 mb-4"
    }, "Thank you for registering!"), /*#__PURE__*/React.createElement("p", {
      className: "text-neutral-11"
    }, "We'll keep you updated about the event."));
  }
  return /*#__PURE__*/React.createElement(_components.Dialog, null, /*#__PURE__*/React.createElement(_components.DialogTrigger, {
    asChild: true
  }, /*#__PURE__*/React.createElement(_components.Button, {
    variant: "primary",
    className: "text-xl py-4 px-8"
  }, "Register Now")), /*#__PURE__*/React.createElement(_components.DialogContent, null, /*#__PURE__*/React.createElement(_components.DialogHeader, null, /*#__PURE__*/React.createElement(_components.DialogTitle, null, "Register for Nanosummit"), /*#__PURE__*/React.createElement(_components.DialogDescription, null, "Sign up to receive updates about the event")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement(_components.Input, {
    type: "email",
    placeholder: "Enter your email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    required: true
  }), /*#__PURE__*/React.createElement(_components.Button, {
    type: "submit",
    variant: "primary",
    className: "w-full"
  }, "Submit"))));
};

// Schedule Component
var Schedule = function Schedule() {
  var _React$useState7 = React.useState(0),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    activeTab = _React$useState8[0],
    setActiveTab = _React$useState8[1];
  var scheduleData = [{
    day: "Day 1",
    events: [{
      time: "9:00 AM - 11:00 AM",
      description: "Arrival and Check-in"
    }, {
      time: "2:00 PM - 4:00 PM",
      description: "Welcome Reception & Networking"
    }, {
      time: "7:00 PM - 9:30 PM",
      description: "Opening Dinner at Parc Restaurant"
    }]
  }, {
    day: "Day 2",
    events: [{
      time: "9:00 AM - 12:00 PM",
      description: "Keynote Presentations"
    }, {
      time: "1:30 PM - 5:00 PM",
      description: "Workshop Sessions & Studio Tours"
    }, {
      time: "6:30 PM - 10:00 PM",
      description: "Networking Dinner at Talula's Garden"
    }]
  }, {
    day: "Day 3",
    events: [{
      time: "8:30 AM - 10:30 AM",
      description: "Farewell Breakfast at The Love"
    }, {
      time: "11:00 AM - 2:00 PM",
      description: "Final Networking & Departure"
    }]
  }];
  return /*#__PURE__*/React.createElement(_components.Card, {
    className: "mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold mb-6 text-center"
  }, "Schedule"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-0 mb-6"
  }, scheduleData.map(function (day, index) {
    return /*#__PURE__*/React.createElement("button", {
      key: day.day,
      className: "py-2 px-4 text-center border-b-2 ".concat(activeTab === index ? "border-accent-9 text-accent-11" : "border-neutral-6 text-neutral-11 hover:text-neutral-12"),
      onClick: function onClick() {
        return setActiveTab(index);
      }
    }, day.day);
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-4"
  }, scheduleData[activeTab].events.map(function (event, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "mb-4 last:mb-0"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-semibold text-accent-11"
    }, event.time), /*#__PURE__*/React.createElement("p", {
      className: "text-neutral-11"
    }, event.description));
  })));
};

// FAQ Component
var FAQ = function FAQ() {
  var faqs = [{
    question: "What is included in the registration?",
    answer: "Registration includes access to all sessions, workshops, meals, and networking events over the three days."
  }, {
    question: "Where will the event be held?",
    answer: "The event will take place at various venues across Philadelphia, with the main sessions at the Philadelphia Convention Center."
  }, {
    question: "Is there a dress code?",
    answer: "Business casual is recommended for daytime sessions. Some evening events may be more formal."
  }, {
    question: "Are accommodations included?",
    answer: "No, but we have secured special rates at partner hotels. Details will be sent after registration."
  }];
  return /*#__PURE__*/React.createElement(_components.Card, {
    className: "mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold mb-6 text-center"
  }, "Frequently Asked Questions"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, faqs.map(function (faq, index) {
    return /*#__PURE__*/React.createElement("details", {
      key: index,
      className: "group"
    }, /*#__PURE__*/React.createElement("summary", {
      className: "flex justify-between items-center cursor-pointer p-4 bg-neutral-3 rounded-lg"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-neutral-12"
    }, faq.question)), /*#__PURE__*/React.createElement("div", {
      className: "p-4 text-neutral-11"
    }, faq.answer));
  })));
};

// Image Carousel Component
var ImageCarousel = function ImageCarousel() {
  var _React$useState9 = React.useState(0),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    currentIndex = _React$useState10[0],
    setCurrentIndex = _React$useState10[1];
  var images = [{
    url: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088",
    caption: "Philadelphia Skyline"
  }, {
    url: "https://images.unsplash.com/photo-1569761316261-9c66390e6b03",
    caption: "Liberty Bell"
  }, {
    url: "https://images.unsplash.com/photo-1629819149884-373df37d4dac",
    caption: "Reading Terminal Market"
  }];
  var next = function next() {
    setCurrentIndex(function (prevIndex) {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };
  var previous = function previous() {
    setCurrentIndex(function (prevIndex) {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aspect-video relative overflow-hidden rounded-lg"
  }, /*#__PURE__*/React.createElement("img", {
    src: images[currentIndex].url,
    alt: images[currentIndex].caption,
    className: "w-full h-full object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 right-0 p-4 text-center bg-neutral-12/75 text-white"
  }, images[currentIndex].caption)), /*#__PURE__*/React.createElement("button", {
    onClick: previous,
    className: "absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-neutral-12/75 rounded-full text-white"
  }, /*#__PURE__*/React.createElement(_react2.CaretLeft, {
    size: 24
  })), /*#__PURE__*/React.createElement("button", {
    onClick: next,
    className: "absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-neutral-12/75 rounded-full text-white"
  }, /*#__PURE__*/React.createElement(_react2.CaretRight, {
    size: 24
  })));
};

// Who's Involved Section Component
var WhosInvolved = function WhosInvolved() {
  var people = [{
    name: "Sarah Johnson",
    title: "Co-founder & Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  }, {
    name: "Emily Chen",
    title: "Co-founder & Event Curator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  }, {
    name: "Michael Torres",
    title: "Architecture Studio Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  }, {
    name: "Rachel Williams",
    title: "Gallery Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }, {
    name: "David Park",
    title: "Design Principal",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  }, {
    name: "Lisa Martinez",
    title: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
  }];

  // For mobile view
  var _React$useState11 = React.useState(0),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    currentIndex = _React$useState12[0],
    setCurrentIndex = _React$useState12[1];
  var _React$useState13 = React.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    isMobile = _React$useState14[0],
    setIsMobile = _React$useState14[1];
  React.useEffect(function () {
    var checkMobile = function checkMobile() {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return function () {
      return window.removeEventListener('resize', checkMobile);
    };
  }, []);
  if (isMobile) {
    return /*#__PURE__*/React.createElement(_components.Card, {
      className: "mb-12"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold mb-6 text-center"
    }, "Who's Involved"), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("div", {
      className: "aspect-[3/4] relative overflow-hidden rounded-lg mb-4"
    }, /*#__PURE__*/React.createElement("img", {
      src: people[currentIndex].image,
      alt: people[currentIndex].name,
      className: "w-full h-full object-cover"
    })), /*#__PURE__*/React.createElement("div", {
      className: "text-center mb-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-semibold text-lg"
    }, people[currentIndex].name), /*#__PURE__*/React.createElement("p", {
      className: "text-neutral-11"
    }, people[currentIndex].title)), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-center gap-4"
    }, /*#__PURE__*/React.createElement(_components.Button, {
      variant: "secondary",
      onClick: function onClick() {
        return setCurrentIndex(function (prev) {
          return prev === 0 ? people.length - 1 : prev - 1;
        });
      },
      icon: /*#__PURE__*/React.createElement(_react2.CaretLeft, null)
    }), /*#__PURE__*/React.createElement(_components.Button, {
      variant: "secondary",
      onClick: function onClick() {
        return setCurrentIndex(function (prev) {
          return prev === people.length - 1 ? 0 : prev + 1;
        });
      },
      icon: /*#__PURE__*/React.createElement(_react2.CaretRight, null)
    }))));
  }
  return /*#__PURE__*/React.createElement(_components.Card, {
    className: "mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold mb-6 text-center"
  }, "Who's Involved"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-6"
  }, people.map(function (person, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "aspect-[3/4] relative overflow-hidden rounded-lg mb-4"
    }, /*#__PURE__*/React.createElement("img", {
      src: person.image,
      alt: person.name,
      className: "w-full h-full object-cover"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "font-semibold text-lg"
    }, person.name), /*#__PURE__*/React.createElement("p", {
      className: "text-neutral-11"
    }, person.title));
  })));
};

// Main App Component
function App() {
  return /*#__PURE__*/React.createElement(_components.SparkApp, null, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-neutral-1 text-neutral-12 p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-6xl font-bold text-center mb-4"
  }, "Nanosummit"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl text-center text-neutral-11 mb-8"
  }, "May 20-21, 2025"), /*#__PURE__*/React.createElement("p", {
    className: "text-xl text-center mb-8"
  }, "Join us in Philadelphia for a curated weekend of art, architecture, food, and friendship."), /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-8"
  }, /*#__PURE__*/React.createElement(RegistrationForm, null)), /*#__PURE__*/React.createElement(CountdownTimer, null), /*#__PURE__*/React.createElement(ImageCarousel, null), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-center mb-12"
  }, "Nanosummit is a three-day gathering of creative professionals, designers, and entrepreneurs coming together to share ideas, build connections, and explore the vibrant culture of Philadelphia."), /*#__PURE__*/React.createElement(Schedule, null), /*#__PURE__*/React.createElement(WhosInvolved, null), /*#__PURE__*/React.createElement(FAQ, null))));
}
var root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
