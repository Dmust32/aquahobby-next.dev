import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons'
import CtaButton from '../../buttons/ctaButton';
import generateAmazonImage from '../../../utils/generateAmazonImage';

import './ProductCard.module.scss';

const renderBullets = (type, bullets) => {
  return (
    <ul>
      {
        bullets.map((bullet) => {
          return (
            <li key={bullet} className={type === 'cons' ? 'cons' : 'pros'}>
              <FontAwesomeIcon icon={type === 'cons' ? faMinus : faCheck} />
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
    img: {
      content: {
        0: {
          content: {
            0: {
              value
            }
          }
        }
      }
    },
    title,
    tag,
    imgIsAmazon
  } = productCardData.fields;

  return (
    <div className="product-card-container">
      {tag && <div className="badge">{tag}</div>}
      <h1 className="product-title">{title}</h1>
      <div className="product-image-container">
        {imgIsAmazon ?
          generateAmazonImage(value) :
          <a href={link} target="_blank">
            <img src={value} />
          </a>
        }
      </div>
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
          Check price
        </CtaButton>
      </div>
    </div>
  )
}

export default ProductCard
