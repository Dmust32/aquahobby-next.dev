import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import CtaButton from '../../buttons/ctaButton';

import './ProductCard.module.scss';

const renderBullets = (type, bullets) => {
  return (
    <ul>
      {
        bullets.map((bullet) => {
          return (
            <li key={bullet} className={type === 'cons' ? 'cons' : 'pros'}>
              <FontAwesomeIcon icon={faCheck} />
              {bullet}
            </li>
          )
        })
      }
    </ul>
  )
};


const ProductCard = ({ productCardData }) => {
  const {
    link,
    cons,
    pros,
    img,
    title,
    tag
  } = productCardData;

  return (
    <div className="product-card-container">
      <div className="badge">{tag}</div>
      <h1 className="product-title">{title}</h1>
      <img src={img} />
      <div className="bullets-container">
        <div className="pros-cons">
          <div className="pros-container">
            <h1>Pros</h1>
            {renderBullets("pros", pros)}
          </div>
          <div className="cons-container">
            <h1>Cons</h1>
            {renderBullets("cons", cons)}
          </div>
        </div>
        <CtaButton
          buttonColor="warning"
          size="medium"
          affiliateLink={link}
        >
          Buy on Amazon
        </CtaButton>
      </div>
    </div>
  )
}

export default ProductCard
