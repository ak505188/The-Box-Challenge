import React from 'react';

const Box = (props) => {
  return (
    <div style={{ backgroundColor: props.color }} className="box" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Box;
