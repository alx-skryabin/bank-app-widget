import {createStylesheetEl} from './helper'

export function createShadowRoot(container: Element, cssUrl: string): Element {
  const shadow = container.attachShadow({mode: 'closed'}) // or open

  // Создаем контейнер для React
  const reactRoot = document.createElement('div')
  shadow.appendChild(reactRoot)

  const link = createStylesheetEl(cssUrl)

  // Подключаем стили в Shadow DOM
  shadow.appendChild(link)

  return reactRoot
}
