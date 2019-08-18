// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var PromiseMonad = require("bs-promise-monad/src/PromiseMonad.bs.js");
var JMySon$ReactHooksTemplate = require("../../JMySon.bs.js");
var Helpers$ReactHooksTemplate = require("../../Helpers.bs.js");

function Pages__Collection__Schema$Field(Props) {
  Props.className;
  var onChange = Props.onChange;
  var onDelete = Props.onDelete;
  var fieldKey = Props.fieldKey;
  var fieldType = Props.fieldType;
  var match = Helpers$ReactHooksTemplate.useState(fieldKey);
  var set_val = match[1];
  var value = match[0];
  return React.createElement("tr", {
              className: "content__schema__fields__item"
            }, React.createElement("td", undefined, React.createElement("input", {
                      className: "content__schema__fields__item__key",
                      id: fieldKey,
                      name: fieldKey,
                      type: "text",
                      value: value,
                      onChange: (function (e) {
                          return Curry._1(set_val, e.currentTarget.value);
                        })
                    })), React.createElement("td", {
                  className: "content__schema__fields__item__value"
                }, Helpers$ReactHooksTemplate.str(fieldType)), React.createElement("td", {
                  className: "content__schema__fields__item__actions"
                }, React.createElement("button", {
                      className: "content__schema__fields__item__actions__btn",
                      onClick: (function (e) {
                          e.preventDefault();
                          return Curry._1(onChange, /* tuple */[
                                      fieldKey,
                                      value
                                    ]);
                        })
                    }, Helpers$ReactHooksTemplate.str("update")), React.createElement("button", {
                      className: "content__schema__fields__item__actions__btn",
                      onClick: (function (e) {
                          e.preventDefault();
                          return Curry._1(onDelete, fieldKey);
                        })
                    }, Helpers$ReactHooksTemplate.str("delete"))));
}

var Field = /* module */[/* make */Pages__Collection__Schema$Field];

function fetchSchema(collection, dispatch, changeQueue) {
  return PromiseMonad.$great$great$pipe(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(fetch("/collection/" + (String(collection) + "/schema")), (function (prim) {
                            return prim.json();
                          })), (function (x) {
                        return PromiseMonad.$$return(JMySon$ReactHooksTemplate.Decode[/* schema_response */4](x));
                      })), (function (res) {
                    Curry._1(dispatch, /* Load */Block.__(2, [res[/* data */0]]));
                    return PromiseMonad.$$return(/* () */0);
                  })), (function (err) {
                Curry._1(changeQueue, /* Error */[err]);
                return PromiseMonad.$$return((console.error(err), /* () */0));
              }));
}

function deleteField(model, dispatch, changeQueue, key) {
  Curry._1(changeQueue, /* Sending */0);
  return PromiseMonad.$great$great$pipe(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(fetch("/db_api/" + (String(model) + ("/field/delete/?key=" + (String(key) + ""))), Fetch.RequestInit[/* make */0](/* Post */2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)), (function (prim) {
                            return prim.json();
                          })), (function (param) {
                        Curry._1(changeQueue, /* Free */1);
                        Curry._1(dispatch, /* Delete */Block.__(1, [key]));
                        return PromiseMonad.$$return(/* () */0);
                      })), (function (param) {
                    fetchSchema(model, dispatch, changeQueue);
                    return PromiseMonad.$$return(/* () */0);
                  })), (function (err) {
                Curry._1(changeQueue, /* Error */[err]);
                return PromiseMonad.$$return((console.error(err), /* () */0));
              }));
}

function renameField(model, dispatch, changeQueue, oldk, newk) {
  Curry._1(changeQueue, /* Sending */0);
  return PromiseMonad.$great$great$pipe(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(fetch("/db_api/" + (String(model) + ("/field/rename/?oldk=" + (String(oldk) + ("&newk=" + (String(newk) + ""))))), Fetch.RequestInit[/* make */0](/* Post */2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)), (function (prim) {
                            return prim.json();
                          })), (function (param) {
                        Curry._1(changeQueue, /* Free */1);
                        Curry._1(dispatch, /* Rename */Block.__(0, [
                                oldk,
                                newk
                              ]));
                        return PromiseMonad.$$return(/* () */0);
                      })), (function (param) {
                    fetchSchema(model, dispatch, changeQueue);
                    return PromiseMonad.$$return(/* () */0);
                  })), (function (err) {
                Curry._1(changeQueue, /* Error */[err]);
                return PromiseMonad.$$return((console.error(err), /* () */0));
              }));
}

function addField(model, dispatch, changeQueue, key, type_) {
  Curry._1(changeQueue, /* Sending */0);
  return PromiseMonad.$great$great$pipe(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(PromiseMonad.$great$great$eq(fetch("/db_api/" + (String(model) + ("/field/add/?key=" + (String(key) + ("&type=" + (String(type_) + ""))))), Fetch.RequestInit[/* make */0](/* Post */2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)), (function (prim) {
                            return prim.json();
                          })), (function (param) {
                        Curry._1(changeQueue, /* Free */1);
                        fetchSchema(model, dispatch, changeQueue);
                        return PromiseMonad.$$return(/* () */0);
                      })), (function (param) {
                    fetchSchema(model, dispatch, changeQueue);
                    return PromiseMonad.$$return(/* () */0);
                  })), (function (err) {
                Curry._1(changeQueue, /* Error */[err]);
                return PromiseMonad.$$return((console.error(err), /* () */0));
              }));
}

function Pages__Collection__Schema(Props) {
  var collection = Props.collection;
  var match = Helpers$ReactHooksTemplate.useState(/* Free */1);
  var changeQueue = match[1];
  var match$1 = React.useReducer((function (state, action) {
          switch (action.tag | 0) {
            case 0 : 
            case 1 : 
                return state;
            case 2 : 
                return action[0];
            
          }
        }), /* array */[]);
  var dispatch = match$1[1];
  var match$2 = React.useReducer((function (state, action) {
          if (typeof action === "number") {
            return /* array */[
                    "",
                    ""
                  ];
          } else if (action.tag) {
            return /* array */[
                    Caml_array.caml_array_get(state, 0),
                    action[0]
                  ];
          } else {
            return /* array */[
                    action[0],
                    Caml_array.caml_array_get(state, 1)
                  ];
          }
        }), /* array */[
        "",
        ""
      ]);
  var dispatchAdd = match$2[1];
  var addForm = match$2[0];
  React.useEffect((function () {
          fetchSchema(collection, dispatch, changeQueue);
          return undefined;
        }), ([]));
  var deleteField$1 = function (param) {
    return deleteField(collection, dispatch, changeQueue, param);
  };
  var renameField$1 = function (param, param$1) {
    return renameField(collection, dispatch, changeQueue, param, param$1);
  };
  var addField$1 = function (param, param$1) {
    return addField(collection, dispatch, changeQueue, param, param$1);
  };
  return React.createElement("section", {
              className: "content__schema"
            }, React.createElement("table", {
                  className: "content__schema__fields"
                }, React.createElement("tbody", undefined, Belt_Array.mapWithIndex(match$1[0], (function (i, f) {
                            return React.createElement(Pages__Collection__Schema$Field, {
                                        onChange: (function (param) {
                                            var newk = param[1];
                                            var oldk = param[0];
                                            if (oldk !== newk) {
                                              PromiseMonad.$great$great$pipe(PromiseMonad.$great$great$eq(renameField$1(oldk, newk), (function (x) {
                                                          return PromiseMonad.$$return((console.log(x), /* () */0));
                                                        })), (function (err) {
                                                      return PromiseMonad.$$return((console.error(err), /* () */0));
                                                    }));
                                              return /* () */0;
                                            } else {
                                              return 0;
                                            }
                                          }),
                                        onDelete: (function (key) {
                                            PromiseMonad.$great$great$pipe(PromiseMonad.$great$great$eq(deleteField$1(key), (function (x) {
                                                        return PromiseMonad.$$return((console.log(x), /* () */0));
                                                      })), (function (err) {
                                                    return PromiseMonad.$$return((console.error(err), /* () */0));
                                                  }));
                                            return /* () */0;
                                          }),
                                        fieldKey: f[0],
                                        fieldType: f[1],
                                        key: String(i)
                                      });
                          })), React.createElement("tr", {
                          className: "content__schema__fields__item"
                        }, React.createElement("td", undefined, React.createElement("input", {
                                  className: "content__schema__fields__item__key",
                                  id: "__add",
                                  name: "__add",
                                  type: "text",
                                  value: Caml_array.caml_array_get(addForm, 0),
                                  onChange: (function (e) {
                                      return Curry._1(dispatchAdd, /* Name */Block.__(0, [e.currentTarget.value]));
                                    })
                                })), React.createElement("td", {
                              className: "content__schema__fields__item__value"
                            }, React.createElement("select", {
                                  className: "content__schema__fields__item__value__select",
                                  id: "type_",
                                  name: "type_",
                                  value: Caml_array.caml_array_get(addForm, 1),
                                  onChange: (function (e) {
                                      e.preventDefault();
                                      return Curry._1(dispatchAdd, /* Type */Block.__(1, [e.currentTarget.value]));
                                    })
                                }, Belt_Array.mapWithIndex(/* array */[
                                      "String",
                                      "Text",
                                      "ID",
                                      "Date",
                                      "Boolean",
                                      "Number"
                                    ], (function (i, t) {
                                        return React.createElement("option", {
                                                    key: String(i),
                                                    value: t
                                                  }, Helpers$ReactHooksTemplate.str(t));
                                      })))), React.createElement("td", {
                              className: "content__schema__fields__item__actions"
                            }, React.createElement("button", {
                                  className: "content__schema__fields__item__actions__btn",
                                  onClick: (function (e) {
                                      e.preventDefault();
                                      addField$1(Caml_array.caml_array_get(addForm, 0), Caml_array.caml_array_get(addForm, 1));
                                      return /* () */0;
                                    })
                                }, Helpers$ReactHooksTemplate.str("add")))))));
}

var make = Pages__Collection__Schema;

exports.Field = Field;
exports.fetchSchema = fetchSchema;
exports.deleteField = deleteField;
exports.renameField = renameField;
exports.addField = addField;
exports.make = make;
/* react Not a pure module */
