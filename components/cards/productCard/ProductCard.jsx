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


const ProductCard = ({ badgeText, productCardData }) => {
  const {
    affiliateLink,
    cons,
    pros,
    productImage: {
      fields: {
        file: {
          url
        }
      }
    },
    productName
  } = productCardData.fields;

  return (
    <div className="product-card-container">
      <div className="badge">{badgeText}</div>
      <h1 className="product-title">{productName}</h1>
      <img src={url} />
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
          affiliateLink={affiliateLink}
        >
          Buy on Amazon
        </CtaButton>
      </div>
    </div>
  )
}

export default ProductCard
