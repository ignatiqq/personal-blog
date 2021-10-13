import React from 'react';
import classNames from 'classnames';

import './Button.scss';

function Button(props) {
  return (
    <button className={classNames('button-standart', props.className)} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
