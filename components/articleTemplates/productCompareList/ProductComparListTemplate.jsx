import React from 'react';
import contentToReact from '../../../utils/contentToReact';
import ProductCard from '../../cards/productCard';

import './ProductCompareListTemplate.module.scss';

const getProductCards = (products) => {
  console.log("HERE", products)
  return Object.keys(products).map(product => {
    return (
      <ProductCard
        productCardData={products[product]}
      />
    )
  })
}

const ProductCompareListTemplate = ({ article: { fields: { title, content, products } } }) => {
  return (
    <>
      <h1 id="title">{title}</h1>
      <div className="tldr">
        tldr section
      </div>
      <div >
        {contentToReact(content)}
      </div>
      <div>
        {getProductCards(products)}
      </div>
    </>
  )
}

export default ProductCompareListTemplate