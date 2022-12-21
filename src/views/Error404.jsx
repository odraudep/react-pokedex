import React from 'react';
import { useLocation } from 'react-router-dom';
import PageDecorator from '@components/PageDecorator';
import Button from '@components/Button';

function Error404() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col text-center">
      <header>
        <h1 className="mb-4">Error 404</h1>
        <p className="text-xl">
          The page
          {' '}
          <span className="font-light underline">
            (
            {pathname}
            )
          </span>
          {' '}
          that you are looking for was not found.
        </p>
        <p className="text-lg">Try again checking the url.</p>
      </header>

      <PageDecorator className="order-first mb-8" />
      <Button to="/" className="w-max self-center mt-10">Go back to home</Button>
    </div>
  );
}

export default Error404;
