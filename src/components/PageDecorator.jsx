import React from 'react';
import { classNames } from '@utils/propsFormatter';
import { randomInt } from '@utils/numbers';

function PageDecorator({ className, variations }) {
  const pokemonsImages = Array.from({ length: variations })
    .map((_, index) => `dec-poke-${index + 1}`)
    .map((item, index) => (
      <li key={item}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${randomInt(
            1,
            649,
          )}.gif`}
          alt={`Pokemon ${++index}`}
          className="max-h-16"
        />
      </li>
    ));

  return (
    <ul className={classNames('flex justify-center items-end gap-2', className)}>
      {pokemonsImages}
    </ul>
  );
}

PageDecorator.defaultProps = {
  variations: 4,
};

export default PageDecorator;
