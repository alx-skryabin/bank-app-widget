import React, {useState} from 'react'
import {Messenger} from 'bank-app-messenger'
import {ChatIcon, PulseAnim} from './svg/ImgSVG'
import './styles/index.scss'

const App = ({clientId}: {clientId: string}) => {
  const [size, setSize] = useState<'mini' | 'full'>('mini')
  const classSize = size === 'mini' ? 'wdg__app-mini' : 'wdg__app-full'

  const openWidget = () => {
    if (size === 'mini') {
      setSize('full')
    }
  }

  const closeWidget = () => {
    setSize('mini')
  }

  return (
    <div className={`wdg__app ${classSize}`} data-clientid={clientId} onClick={openWidget}>
      {size === 'mini' ? (
        <div className="wdg__welcome">
          <PulseAnim />

          <div className="wdg__welcome-icon">
            <ChatIcon />
          </div>
        </div>
      ) : (
        <div className="wdg__opened">
          <div className="wdg__close" onClick={closeWidget}>
            ✖
          </div>
          <Messenger sidebar="mini" theme="dark" lang="ru" />
        </div>
      )}
    </div>
  )
}

export default App
