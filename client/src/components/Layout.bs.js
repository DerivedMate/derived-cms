// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Nav$ReactHooksTemplate = require("./Nav.bs.js");
var Icon$ReactHooksTemplate = require("./Icon.bs.js");
var Footer$ReactHooksTemplate = require("./Footer.bs.js");
var JMySon$ReactHooksTemplate = require("../JMySon.bs.js");
var Helpers$ReactHooksTemplate = require("../Helpers.bs.js");

function Layout$NavInstance(Props) {
  var state = Props.state;
  var match = Helpers$ReactHooksTemplate.useState(/* array */[]);
  var setcols = match[1];
  React.useEffect((function () {
          fetch("/db_api/labels").then((function (prim) {
                      return prim.json();
                    })).then((function (x) {
                    return Promise.resolve(JMySon$ReactHooksTemplate.Decode[/* labels_response */6](x));
                  })).then((function (x) {
                  return Promise.resolve(Curry._1(setcols, x[/* data */0]));
                }));
          return undefined;
        }), ([]));
  return React.createElement(Nav$ReactHooksTemplate.make, {
              state: state,
              children: null
            }, React.createElement(Nav$ReactHooksTemplate.Item[/* make */0], {
                  href: "/",
                  icon: React.createElement(Icon$ReactHooksTemplate.make, {
                        name: /* id */23515
                      }),
                  children: Helpers$ReactHooksTemplate.str("Welcome"),
                  key: "0"
                }), React.createElement(Nav$ReactHooksTemplate.Submenu[/* make */0], {
                  children: React.createElement(Nav$ReactHooksTemplate.Item[/* make */0], {
                        href: "#",
                        icon: React.createElement(Icon$ReactHooksTemplate.make, {
                              name: /* id */23515
                            }),
                        children: Helpers$ReactHooksTemplate.str("there"),
                        key: "0"
                      }),
                  href: "#",
                  icon: React.createElement(Icon$ReactHooksTemplate.make, {
                        name: /* burger */-662434123
                      }),
                  rootContent: Helpers$ReactHooksTemplate.str("Hello"),
                  nItems: 1,
                  key: "1"
                }), Belt_Array.mapWithIndex(match[0], (function (i, collection) {
                    return React.createElement(Nav$ReactHooksTemplate.Submenu[/* make */0], {
                                children: null,
                                href: "#",
                                icon: React.createElement(Icon$ReactHooksTemplate.make, {
                                      name: /* folder */-107972946
                                    }),
                                rootContent: Helpers$ReactHooksTemplate.str(collection),
                                nItems: 3,
                                key: String(i + 1 | 0)
                              }, React.createElement(Nav$ReactHooksTemplate.Item[/* make */0], {
                                    href: "/collection/" + (String(collection) + "/overview"),
                                    icon: React.createElement(Icon$ReactHooksTemplate.make, {
                                          name: /* id */23515
                                        }),
                                    children: Helpers$ReactHooksTemplate.str("overview")
                                  }), React.createElement(Nav$ReactHooksTemplate.Item[/* make */0], {
                                    href: "/collection/" + (String(collection) + "/schema/edit"),
                                    icon: React.createElement(Icon$ReactHooksTemplate.make, {
                                          name: /* resume */142895533
                                        }),
                                    children: Helpers$ReactHooksTemplate.str("edit schema")
                                  }), React.createElement(Nav$ReactHooksTemplate.Item[/* make */0], {
                                    href: "/collection/" + (String(collection) + "/items"),
                                    icon: React.createElement(Icon$ReactHooksTemplate.make, {
                                          name: /* resume */142895533
                                        }),
                                    children: Helpers$ReactHooksTemplate.str("items")
                                  }));
                  })));
}

var NavInstance = /* module */[/* make */Layout$NavInstance];

function Layout(Props) {
  var children = Props.children;
  var renderNav = Props.renderNav;
  var match = Helpers$ReactHooksTemplate.useState(false);
  var collapsed = match[0];
  return React.createElement("section", {
              className: /* array */[
                  "layout",
                  collapsed ? "collapsed" : ""
                ].join(" ")
            }, renderNav ? React.createElement(Layout$NavInstance, {
                    state: /* tuple */[
                      collapsed,
                      match[1]
                    ]
                  }) : React.createElement(React.Fragment, undefined), React.createElement("section", {
                  className: "content"
                }, children, React.createElement(Footer$ReactHooksTemplate.make, { })));
}

var make = Layout;

exports.NavInstance = NavInstance;
exports.make = make;
/* react Not a pure module */
