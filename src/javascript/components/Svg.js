import React from 'react';

const Svg = ({ className, iconName }) => (
  <svg className={`svg-icon`}>
    <use xlinkHref={`#fave`} />
  </svg>
);

export default Svg;
