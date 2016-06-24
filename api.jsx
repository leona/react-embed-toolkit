import ReactDOM from 'react-dom';
import React from 'react';
import css from './assets/css'

var req = require.context("./components", true, /^(.*\.(js$))[^.]*$/igm);

req.keys().forEach(function(key){
    var Component = req(key).App;
    var class_name = key.substr(2, key.length).substr(0, key.length - 5);

    let els = document.getElementsByClassName(class_name);
    
    Array.prototype.forEach.call(els, el => {
        ReactDOM.render(<Component/>, el);
    })
});

/* load styles */
let head = document.head || document.getElementsByTagName('head')[0]

let style = document.createElement('style')
    style.type = 'text/css'
    
if (style.styleSheet) {
  style.styleSheet.cssText = css
} else {
  style.appendChild(document.createTextNode(css))
}

head.appendChild(style)
