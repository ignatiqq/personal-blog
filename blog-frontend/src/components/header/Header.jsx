import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../';

import './Header.scss';

export default React.memo(function Header({ isAuth }) {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/">
          <div className="header__inner-logo">ignatiqq blog</div>
        </Link>
        {isAuth === true && (
          <div className="header__inner-createarticle">
            <Link to="/create">
              <Button className="header__inner-btn">Новая статья</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
});
