import React from 'react'
import Header from './components/Header/Header'
import {Messenger} from 'bank-app-messenger'
import './styles/index.scss'

const App = ({clientId}: {clientId: string}) => {
  return (
    <div className="wdg__app" data-clientid={clientId}>
      <Header clientId={clientId} />
      <Messenger sidebar="mini" theme="dark" />
    </div>
  )
}

export default App
