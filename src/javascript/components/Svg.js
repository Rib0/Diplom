import React from 'react';

const Svg = ({ className, iconName, style }) => (
  <svg className={`feather`}>
    <use xlinkHref={`#icon-${iconName}`}></use>
  </svg>
);

export default Svg;
