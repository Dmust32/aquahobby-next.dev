import CtaButton from '../../buttons/ctaButton';

import './ProductCard.module.scss';

const renderBullets = () => {
  return (
    <h1>Im a bullet</h1>
  );
}

const ProductCard = ({ badgeText }) => {
  return (
    <div className="product-card-container">
      <div className="badge">{badgeText}</div>
      <img src="/icon-cut-down.png" />
      <div className="bullets-container">
        {renderBullets()}
      </div>
      <CtaButton
        buttonColor="warning"
        size="medium"
      >
        Buy on Amazon
      </CtaButton>
    </div>
  )
}

export default ProductCard
