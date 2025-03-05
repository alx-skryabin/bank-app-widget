import React from 'react'
import {createRoot} from 'react-dom/client'
import {createShadowRoot} from './tools/createShadowRoot'
import {createContainerEl, parseWidgetUrl} from './tools/helper'
import App from './App'
import './styles/index.scss'

const initWidget = () => {
  try {
    const scriptSrc =
      Array.from(document.getElementsByTagName('script')).find(script =>
        script.src.includes('bank-app-widget.js')
      )?.src || ''
    const dataUrl = parseWidgetUrl(scriptSrc)

    if (!dataUrl.clientId) {
      return console.warn("WIDGET:::The Client's ID has not been transferred")
    }

    let container: Element = createContainerEl()
    document.body.appendChild(container)

    if (process.env.NODE_ENV === 'production') {
      container = createShadowRoot(container, dataUrl.urlCSS)
    }

    const root = createRoot(container)
    root.render(<App clientId={dataUrl.clientId} />)
  } catch (error) {
    console.warn('WIDGET_INIT:::', error)
  }
}

// Ждём, пока document.body будет готов
const waitForBody = () => {
  if (document.body) {
    initWidget()
  } else {
    setTimeout(waitForBody, 10) // Проверяем каждые 10мс
  }
}

waitForBody()

/*При необходимости можно добавить управление
 * инициализацией и т.д. через Window*/
// declare global {
//   interface Window {
//     BankJustWidget?: () => void
//   }
// }
