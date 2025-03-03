import React from 'react';
import Button from "../Button/Button";
import Header from "../Header/Header";
import {Messenger} from "bank-app-messenger";
import './Widget.scss';

const Widget = ({clientId}: { clientId: string }) => {
  return (
    <div className="widget" data-clientid={clientId}>
      <div className="widget-box">
        {/*<Header/>*/}
        {/*<h3>Client Id: {clientId}</h3>*/}
        {/*<Button title="First"/>*/}
        {/*<Button title="Second" isPink={true}/>*/}
        <Messenger sidebar="mini" theme="dark"/>
      </div>
    </div>
  );
};

export default Widget;