import ReactDOM from 'react-dom';
import css from './assets/css'

const components  = require.context("./components", true, /^\.\/.*\.js/);

components.keys().map(item => {
    let name = item.split('.')[1];
        name = name.substring(1, name.length);
    
    let els = document.getElementsByClassName(name);

    Array.prototype.forEach.call(els, el => {
        ReactDOM.render(components(item)(), el);
    })
})

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
