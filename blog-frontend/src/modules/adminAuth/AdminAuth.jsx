import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../components';

import { authorization } from '../../redux/actions/userActions.js';

import './AdminAuth.scss';

function AdminAuth() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();

  const auth = (e, email, password) => {
    e.preventDefault();
    dispatch(authorization(email, password));
  };

  return (
    <div className="authorization">
      <form className="authorization__wrapper">
        <div className="authorization__wrapper-text">
          <h1>Войти как админ</h1>
        </div>
        <div className="authorization__wrapper-inputs">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Электронная почта"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Пароль"
          />
        </div>
        <div className="authorization__wrapper-btnwrapper">
          <Button
            onClick={(e) => auth(e, email, password)}
            className="authorization__wrapper-btnwrapper-btn">
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AdminAuth;
