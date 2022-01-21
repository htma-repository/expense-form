import React from 'react';

import '../../Styles/Card.scss';

const Card = (props) => {
  const cards = `card ${props.className}`;
  return <section className={cards}>{props.children}</section>;
};

export default Card;
