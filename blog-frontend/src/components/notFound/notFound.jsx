import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '..';

import './notFound.scss';

function NotFound() {
  return (
    <div className="page-notfound">
      <div className="page-notfound__content">
        <div className="page-notfound__content-title">
          <h1>Страница не найдена</h1>
        </div>
        <Link to="/">
          <Button className="page-notfound__btn">На главную</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
