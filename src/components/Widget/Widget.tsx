import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IWidgetProps } from './Widget.types';

import './Widget.scss';

const Widget: React.FC<IWidgetProps> = ({iconProp, title, value, onClick}) => { 

  return (
    <div className="Widget" onClick={onClick}>
      <div className="widget-icon-bg">
        <FontAwesomeIcon icon={iconProp} />
      </div>
      <h5 className="widget-title">{title}</h5>
      <span className="widget-value">{value}</span>
    </div>
  );

};

export default Widget;