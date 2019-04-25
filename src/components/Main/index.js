import React, { Component } from 'react';
import cx from 'classnames';

export default class Main extends Component {

  state = {
    isHiddenBlocks: true,
    isSorted: false,
    isSorting: false,
  }

  show = () => {
    const { isHiddenBlocks } = this.state;
    this.setState({
      isHiddenBlocks: !isHiddenBlocks
    })
  }

  sort = () => {
    const { isSorted, isSorting } = this.state;
    if (isSorting) return;
    this.setState(
      () => ({
        isSorting: true
      }),
      () => (
        setTimeout(() => {
          this.setState({
            isSorting: false,
            isSorted: !isSorted,
          })
        }, 500)
      )
    )
  }

  render () {
    const { isHiddenBlocks, isSorted, isSorting } = this.state;
    const { products } = this.props;
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    const currentProducts = isSorted ? sortedProducts : products;

    const hiddenBlockClassName = cx({
      'block-container--hidden': isHiddenBlocks,
    })
    const defaultClassName = cx({
      'block-container': true,
      'block-container--sorting': isSorting
    })
    
    return (
      <main className="container container--blocks">
      <ul>
        Категории:
        <li>Со скидкой</li>
      </ul>
        <p className="catalog-header text-center" id="scroll-target">Каталог круизов</p>
        <p className="sort" onClick={this.sort}>
            Сортировать круизы по цене
            <img className="chevron" src="../assets/images/Многоугольник 1 копия 2@1X.png" alt="chevron" />
        </p>
        <div id="dialog">
            <div id="chevron-left" data-role="left">
                <span className="chevron-image-left"></span>
            </div>
            <div id="chevron-right" data-role="right">
                <span className="chevron-image-right"></span>
            </div>
        </div>  
        <div className="containers">
          {currentProducts.map((product, index) => (
            <div className={`${defaultClassName} ${index > 3 ? hiddenBlockClassName : ''}`} data-price={product.price} key={product.id}>
              <div className="block">
                  <div className="block__image-container">
                    <img className="popUp" src={`../assets/images/${product.img}`} />
                  </div>
                  <div className="block__info">
                    <p className="block__name">
                      {product.name}
                      <img 
                        className="chevron" 
                        src="../assets/images/Многоугольник 1 копия 3@1X.png" 
                        alt="chevron" 
                      />
                    </p>
                    <p className="block__road">
                      <b>Маршрут: </b>
                      {product.road}
                    </p>
                    <p className="block__time">
                      <b>Продолжительность: </b>
                      {product.duration} ч.
                    </p>
                    <p className="block__price">
                      {product.price} руб.
                      {product.old_price && (
                        <span className="block__old-price">
                          {product.price} руб.
                        </span>
                      )}
                    </p>
                </div>
              </div>
            </div>
          ))}
          <button className="button-blue" onClick={this.show}>
            {isHiddenBlocks ? 'Больше круизов' : 'Скрыть'}
            <img className="chevron" src="../assets/images/Многоугольник 1 копия 5@1X.png" alt="chevron" />
          </button>
        </div>
      </main>
    )
  }
}