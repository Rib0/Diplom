import React, { PureComponent } from 'react';

export default class Button extends PureComponent {

  onClick = e => {
    const { target } = e.target.dataset;
    const elem = document.getElementById(target);
    this.scroll(elem);
  }

  scroll (elem) {
    const { top } = elem.getBoundingClientRect();
    if (top <= 0) return;
    scrollBy(0, Math.ceil(top / 9));
    requestAnimationFrame(() => this.scroll(elem));
  }

  render () {
    return (
      <button 
        className='button-blue' 
        data-target='scroll-target'
        onClick={this.onClick}
      >
        Выбрать круиз
      </button>
    )
  }
}