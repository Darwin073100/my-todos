import React from 'react';
import CheckSVG , { ReactComponent} from "./check.svg";
import DeleteSVG, { ReactComponent } from "./delete.svg";

const iconTypes = {
    "check": <CheckSVG />,
    "delete": <DeleteSVG />
}

function TodoIcon({ type }) {
  return (
    <span className={`Icon Icon-svg Icon-${type}`}>
        { iconTypes[type] }
    </span>
  )
}

export { TodoIcon };