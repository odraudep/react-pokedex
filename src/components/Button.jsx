import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@utils/propsFormatter';

function Button({ className, to, children }) {
  return to ? (
    <Link className={classNames('btn btn--primary', className)} to={to}>
      {children}
    </Link>
  ) : (
    <button type="button" className={classNames('btn btn--primary', className)}>
      {children}
    </button>
  );
}

export default Button;
