import generateAmazonImage from '../../../utils/generateAmazonImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons';

import CtaButton from '../../buttons/ctaButton';

import './TldrMobile.module.scss';

const TldrMobile = ({ products, tldr }) => {
  const taggedProducts = products.filter(({ fields: { tag } }) => tag).reverse();
  return (
    <div className="tldr-mobile">
      <div className="tldr">
        <h1 className="tldr-title">TLDR</h1>
        {
          taggedProducts.map(product => {
            const {
              fields: {
                img: {
                  content: {
                    0: {
                      content: {
                        0: {
                          value: imgUrl
                        }
                      }
                    }
                  }
                },
                tag,
                title,
                imgIsAmazon,
                link
              }
            } = product;

            return (
              <div key={title} className="mobile-tldr-card">
                <div className="product-head">
                  <h3 className="tag">{tag}</h3>
                  <div className="product-image-container">
                    {imgIsAmazon ?
                      generateAmazonImage(imgUrl) :
                      <a href={link} target="_blank">
                        <img src={imgUrl} />
                      </a>
                    }
                  </div>
                  <h3>{title}</h3>
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
          })
        }
      </div>
    </div>
  )
}

export default TldrMobile;
