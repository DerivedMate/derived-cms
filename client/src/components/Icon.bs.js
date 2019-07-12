// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");

var burger = (require("@public/svg/burger.svg"));

var id = (require("@public/svg/id-card.svg"));

var folder = (require("@public/svg/folder.svg"));

var resume = (require("@public/svg/resume.svg"));

function Icon(Props) {
  var name = Props.name;
  var logo = name >= 23515 ? (
      name >= 142895533 ? resume : id
    ) : (
      name >= -107972946 ? folder : burger
    );
  return React.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: logo
              }
            });
}

var make = Icon;

exports.burger = burger;
exports.id = id;
exports.folder = folder;
exports.resume = resume;
exports.make = make;
/* burger Not a pure module */