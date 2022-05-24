import React from 'react';

const Button = ({ label, className, style, block}) => {

  return (
      <div className ={block}>
			<button type="button" className={`btn rounded-pill ${className}`} style={style}>
			{label}
			</button>
      </div>
  );

};

export default Button;


//  default apperarance
// rounded-pill - button looks like a pill

// btn-block - make btn like a block

// btn-primary - blue 
// btn-success - green
// btn-danger - red

// btn-lg - large button
// btn-sm - small button
// 
// 
// 
// 
// 
// 
// 