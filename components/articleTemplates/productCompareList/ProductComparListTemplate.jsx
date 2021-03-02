import React from 'react';
import ProductCard from '../../cards/productCard';
import FadeInSection from '../../wrappers/fadeInSection';
import getTldr from '../../charts/tldr';

import contentToReact from '../../../utils/contentToReact';
import useWindowResize from '../../../utils/hooks/useWindowResize';

import './ProductCompareListTemplate.module.scss';

const getProductCards = (products) => {
  return products.map(product => {
    return (
      <FadeInSection>
        <ProductCard
          key={product.title}
          productCardData={product}
        />
      </FadeInSection>
    )
  })
}

const ProductCompareListTemplate = ({ article: { fields: { title, content, products, tldr } } }) => {
  const size = useWindowResize();
  const isMobile = size.width <= 807;

  return (
    <div className="compare-template">
      <h1 id="title">{title}</h1>
      {tldr &&
        <div className="tldr">
          {getTldr(isMobile, { products, tldr })}
        </div>
      }
      <div className="content">
        {contentToReact(content)}
      </div>
      <div className="product-cards-container">
        {getProductCards(products)}
      </div>
    </div>
  )
}

export default ProductCompareListTemplate