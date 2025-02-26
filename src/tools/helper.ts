import {environment} from '../environment'

interface ParsedUrl {
  urlFull: string
  urlCSS: string
  clientId: string | null
}

export const parseWidgetUrl = (fullUrl: string): ParsedUrl => {
  // Находим индекс начала параметров (?)
  const paramIndex = fullUrl.indexOf('?')

  // Если параметров нет, возвращаем базовый URL и пустой client
  if (paramIndex === -1) {
    return {
      urlFull: fullUrl,
      urlCSS: fullUrl.replace('.js', '.css'),
      clientId: null
    }
  }

  // Разделяем строку на URL и параметры
  const urlFull = fullUrl.substring(0, paramIndex)
  const params = fullUrl.substring(paramIndex + 1)

  // Парсим параметры
  const paramPairs = params.split('&')
  let clientId = null

  for (const pair of paramPairs) {
    const [key, value] = pair.split('=')
    if (key === 'client') {
      clientId = value || null
      break
    }
  }

  return {
    urlFull,
    urlCSS: urlFull.replace('.js', '.css'),
    clientId
  }
}

export const createContainerEl = (): HTMLElement => {
  const root = document.createElement('div')
  root.id = environment.rootSelectorId
  return root
}

export const createStylesheetEl = (cssUrl: string): HTMLElement => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = cssUrl
  return link
}
