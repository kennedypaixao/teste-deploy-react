import React from "react"
import { ICardProps } from './Card.types';

import './Card.scss';

const Card: React.FC<ICardProps> = ({title, children}) => { 
  return (
    <div className="Card">
      <div className="card-header">
        <h1 className="card-title">{title}</h1>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;