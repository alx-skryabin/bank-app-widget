import React from 'react'
import {createRoot} from 'react-dom/client'
import {createShadowRoot} from './tools/createShadowRoot'
import {createContainerEl, parseWidgetUrl} from "./tools/helper"
import Widget from "./components/Widget/Widget"
import './index.scss'

const initWidget = () => {
  const scriptSrc = document.currentScript?.getAttribute('src') || ''
  const dataUrl = parseWidgetUrl(scriptSrc)
  console.log('dataUrl', dataUrl)

  if (!dataUrl.clientId) {
    return console.warn('WIDGET:::The Client\'s ID has not been transferred')
  }

  let container: Element = createContainerEl()
  document.body.appendChild(container)

  if (process.env.NODE_ENV === 'production') {
    container = createShadowRoot(container, dataUrl.urlCSS)
  }

  const root = createRoot(container)
  root.render(<Widget clientId={dataUrl.clientId}/>)
}

initWidget()



// declare global {
//   interface Window {
//     BankJustWidget?: () => void
//   }
// }

/*Не читает ClientID - разобраться*/
// window.BankJustWidget = initWidget
//
// if (document.readyState === 'complete') {
//   window.BankJustWidget()
// } else {
//   window.addEventListener('load', window.BankJustWidget)
// }
