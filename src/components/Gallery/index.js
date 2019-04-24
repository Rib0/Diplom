import React, { Component } from 'react';
import { items } from 'data/goods';

export default class Gallery extends Component {

  render () {
    return (
      <main className='container--content'>
        <h1 className='catalog-header'>Галерея</h1>
        <div className='containers'>
          {items.map(item => (
            <div className='gallery-container' key={item.id}>
              <div className='gallery-block'>
                <img src={`../assets/images/${item.img}`} />
              </div>
            </div>
          ))}
        </div>
      </main>
    )
  }
}