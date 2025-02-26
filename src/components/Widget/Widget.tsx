import React from 'react';
import Button from "../Button/Button";
import Header from "../Header/Header";
import './Widget.scss';

const Widget = ({clientId}: { clientId: string }) => {
  return (
    <div className="widget">
      <div className="widget-box">
        <Header/>
        <h3>Client Id: {clientId}</h3>
        <Button title="First"/>
        <Button title="Second" isPink={true}/>
      </div>
    </div>
  );
};

export default Widget;