import React from 'react';

import '../../Styles/Card.scss';

const Card = (props) => {
  const cards = `card ${props.className}`;
  return <div className={cards}>{props.children}</div>;
};

export default Card;
