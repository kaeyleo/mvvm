import jsxParser from './jsx-parser'
import { createElement } from './create-element'

export function render (jsx, parent) {
  const vdom = jsxParser(jsx)
  const el = createElement(vdom)
  parent.appendChild(el)
}