import React, { Component } from 'react';

export default class Gallery extends Component {

  render () {
    const { products } = this.props; // тут сделать popUp

    return (
      <main className='container container--content'>
        <h1 className='catalog-header'>Галерея</h1>
        <div className='containers'>
          {products.map(product => (
            <div className='gallery-container' key={product.id}>
              <div className='gallery-block'>
                <img src={`../assets/images/${product.img}`} />
              </div>
            </div>
          ))}
        </div>
      </main>
    )
  }
}