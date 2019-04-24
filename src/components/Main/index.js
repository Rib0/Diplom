import React, { Component } from 'react';
import { items } from './data.json';

export default class Main extends Component {
  render () {
    return (
      <main className="container container--blocks">
        <p className="catalog-header text-center" id="scroll-target">Каталог круизов</p>
        <p className="sort">
            Сортировать круизы по цене
            <img className="chevron" src="../assets/images/Многоугольник 1 копия 2@1X.png" alt="chevron" />
        </p>
        <div id="shadowField"></div>
        <div id="dialog">
            <div id="chevron-left" data-role="left">
                <span className="chevron-image-left"></span>
            </div>
            <div id="chevron-right" data-role="right">
                <span className="chevron-image-right"></span>
            </div>
        </div>  
        <div className="containers">
          {items.map(item => (
            <div className="block-container" data-price={item.price} key={item.id}>
              <div className="block">
                  <div className="block__image-container">
                      <img className="popUp" src={`../assets/images/${item.img}`} />
                  </div>
                  <div className="block__info">
                      <p className="block__name">
                        {item.name}
                        <img className="chevron-right" src="../assets/images/Многоугольник 1 копия 3@1X.png" alt="chevron" />
                      </p>
                      <p className="block__road">
                        <b>Маршрут: </b>
                        {item.road}
                      </p>
                      <p className="block__time">
                        <b>Продолжительность: </b>
                        {item.duration} ч.
                      </p>
                      <p className="block__price">
                        {item.price} руб.
                        {item.old_price && (
                          <span className="block__old-price">
                            {item.price} руб.
                          </span>
                        )}
                      </p>
                  </div>
              </div>
            </div>
          ))}
          <button className="button-blue">
              Больше круизов
              <img className="chevron" src="../assets/images/Многоугольник 1 копия 5@1X.png" alt="chevron" />
          </button>
        </div>
      </main>
    )
  }
}