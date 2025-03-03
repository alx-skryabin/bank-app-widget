import {createStylesheetEl} from './helper'
import {base} from '../config/base'

export function createShadowRoot(container: Element, cssUrl: string): Element {
  const shadow = container.attachShadow({mode: 'closed'}) // or open

  // Создаем контейнер для React
  const reactRoot = document.createElement('div')
  shadow.appendChild(reactRoot)

  const link = createStylesheetEl(cssUrl)
  const linkIcon = createStylesheetEl(base.urlAwesome)

  // Подключаем стили в Shadow DOM
  shadow.appendChild(link)
  shadow.appendChild(linkIcon)

  return reactRoot
}
