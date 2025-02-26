import {createStylesheetEl} from './helper'

export function createShadowRoot(container: Element,cssUrl: string): Element {
  const shadow = container.attachShadow({mode: 'closed'}) // or open

  // Создаем контейнер для React
  const reactRoot = document.createElement('div')
  shadow.appendChild(reactRoot)

  // Подключаем стили в Shadow DOM
  const link = createStylesheetEl(cssUrl)
  shadow.appendChild(link)

  return reactRoot
}