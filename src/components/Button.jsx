import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@utils/propsFormatter';

const variantsColors = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
};

function Button({
  className, variant, to, children,
}) {
  return to ? (
    <Link className={classNames(`btn ${variantsColors[variant]}`, className)} to={to}>
      {children}
    </Link>
  ) : (
    <button type="button" className={classNames(`btn ${variantsColors[variant]}`, className)}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
