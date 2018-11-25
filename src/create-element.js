export function createElement (vdom) {
  const { type, props, children } = vdom

  // 创建文本节点
  if (type === '#text') {
    const { nodeValue } = vdom
    return document.createTextNode(nodeValue)
  }

  // 创建指定节点
  const node = document.createElement(type)

  // 创建节点属性
  if (props) {
    for (let key in props) {
      node.setAttribute(key, props[key])
    }
  }

  // 创建子节点
  if (children) {
    children.forEach(child => {
      child = createElement(child)
      node.appendChild(child)
    })
  }

  return node
}