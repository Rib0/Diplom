import React from 'react';
import { connect } from 'react-redux';

const Gallery = ({ products }) => {
  return (
    <main className="container container--content">
      <h1 className="catalog-header">Галерея</h1>
      <div className="containers">
        {products.map(product => (
          <div className="gallery-container" key={product.id}>
            <div className="gallery-block">
              <img src={`../assets/images/${product.img}`} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

export default connect(mapStateToProps)(Gallery);
