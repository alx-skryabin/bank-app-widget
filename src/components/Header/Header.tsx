import React from 'react';
import './Header.scss';


const Header = () => {
  return (
    <div className="header">
      <div className="icon">
        <i className="fa-regular fa-heart"/>
      </div>
      <div className="title">
        <h2>User Name</h2>
      </div>
    </div>
  );
};

export default Header;