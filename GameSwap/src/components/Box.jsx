import React from 'react';

function Box(props) {
  // You can customize the box styles using CSS-in-JS or inline styles
  const boxStyle = {
    width: props.width || '100px',
    height: props.height || '100px',
    backgroundColor: props.backgroundColor || 'lightpurple',
    border: props.border || '1px solid #000',
  };

  return (
    <div style={boxStyle}>
      {props.children}
    </div>
  );
}

export default Box;
