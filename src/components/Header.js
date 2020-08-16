import React from 'react';
import logo from '../../src/images/logo__mesto.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="места России" className="header__logo" />
    </header>
  );
}

export default Header;
