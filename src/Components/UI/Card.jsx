import React from 'react';

import '../../Styles/Card.scss';

const Card = ({ className, children }) => {
  const cards = `card ${className}`;
  return <section className={cards}>{children}</section>;
};

export default Card;
