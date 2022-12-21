import React from 'react';
import { Link } from 'react-router-dom';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

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
