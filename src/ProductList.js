import React from 'react';
import ProductCard from './ProductCard';
import "./ProductList.css"
const ProductList = ({ products }) => {
  return (
    <div className="product-list-container">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;