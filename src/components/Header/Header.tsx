import React from 'react'
import Button from '../Button/Button'
import './Header.scss'

const Header = ({clientId}: { clientId: string }) => {
  return (
    <div className="wdg__header">
      <div className="wdg__icon">
        <i className="fa-regular fa-heart"/>
      </div>
      <div className="wdg__title">
        Client Id: {clientId}
      </div>
      <Button title="Count"/>
    </div>
  )
}

export default Header