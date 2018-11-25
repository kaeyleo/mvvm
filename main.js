import { render } from './src/render'

const jsx = `
  <div id="app">
    <h1>Hello, VDOM</h1>
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
`

render(jsx, document.body)