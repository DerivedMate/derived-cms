// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var PromiseMonad = require("bs-promise-monad/src/PromiseMonad.bs.js");
var JMySon$ReactHooksTemplate = require("../../JMySon.bs.js");
var Helpers$ReactHooksTemplate = require("../../Helpers.bs.js");

function deleteField(model, dispatch, changeQueue, key) {
  Curry._1(changeQueue, /* Sending */0);
  return PromiseMonad.$great$great$pipe(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(fetch("/db_api/" + (String(model) + ("/field/delete/?key=" + (String(key) + ""))), Fetch.RequestInit[/* make */0](/* Post */2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)), (function (prim) {
                        return prim.json();
                      })), (function (param) {
                    Curry._1(changeQueue, /* Free */2);
                    Curry._1(dispatch, /* Delete */Block.__(1, [key]));
                    return PromiseMonad.$$return(/* () */0);
                  })), (function (err) {
                return PromiseMonad.$$return((console.error(err), /* () */0));
              }));
}

function renameField(model, dispatch, changeQueue, oldk, newk) {
  Curry._1(changeQueue, /* Sending */0);
  return PromiseMonad.$great$great$pipe(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(fetch("/db_api/" + (String(model) + ("/field/rename/?oldk=" + (String(oldk) + ("&newk=" + (String(newk) + ""))))), Fetch.RequestInit[/* make */0](/* Post */2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)), (function (prim) {
                        return prim.json();
                      })), (function (param) {
                    Curry._1(changeQueue, /* Free */2);
                    Curry._1(dispatch, /* Rename */Block.__(0, [
                            oldk,
                            newk
                          ]));
                    return PromiseMonad.$$return(/* () */0);
                  })), (function (err) {
                return PromiseMonad.$$return((console.error(err), /* () */0));
              }));
}

function Pages__Collection__Schema(Props) {
  var collection = Props.collection;
  Helpers$ReactHooksTemplate.useState(/* Free */2);
  var match = React.useReducer((function (state, action) {
          switch (action.tag | 0) {
            case 0 : 
            case 1 : 
                return state;
            case 2 : 
                return action[0];
            
          }
        }), /* array */[]);
  var dispatch = match[1];
  React.useEffect((function () {
          PromiseMonad.$great$great$pipe(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(fetch("/db_api/collection/" + (String(collection) + "/schema")), (function (prim) {
                                  return prim.json();
                                })), (function (x) {
                              console.log(x);
                              return PromiseMonad.$$return(x);
                            })), (function (x) {
                          return PromiseMonad.$$return(JMySon$ReactHooksTemplate.Decode[/* schema_response */4](x));
                        })), (function (res) {
                      Curry._1(dispatch, /* Load */Block.__(2, [res[/* data */0]]));
                      return PromiseMonad.$$return(/* () */0);
                    })), (function (err) {
                  return PromiseMonad.$$return((console.error(err), /* () */0));
                }));
          return undefined;
        }), ([]));
  return React.createElement("section", {
              className: "content__schema"
            }, React.createElement("ul", {
                  className: "content__schema__fields"
                }, Belt_Array.mapWithIndex(match[0], (function (i, f) {
                        return React.createElement("li", {
                                    key: String(i),
                                    className: "content__schema__fields__item"
                                  }, Helpers$ReactHooksTemplate.str("" + (String(f[0]) + (" : " + (String(f[1]) + "")))));
                      }))));
}

var make = Pages__Collection__Schema;

exports.deleteField = deleteField;
exports.renameField = renameField;
exports.make = make;
/* react Not a pure module */
