import generateAmazonImage from '../../../utils/generateAmazonImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons';

import CtaButton from '../../buttons/ctaButton';

import './TldrDesktop.module.scss';

const TldrDesktop = ({ products, tldr }) => {
  const taggedProducts = products.filter(({ fields: { tag } }) => tag).reverse();
  return (
    <div className="tldr">
      <h1 className="tldr-title">TLDR</h1>
      <table>
        <tbody>
          <tr>
            <th className="blank-head" />
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
                  <th key={title}>
                    <div className="product-head">
                      <h3 className="tag">{tag}</h3>
                      {imgIsAmazon ?
                        generateAmazonImage(imgUrl) :
                        <a href={link} target="_blank">
                          <img src={imgUrl} />
                        </a>
                      }
                      <h3>{title}</h3>
                    </div>
                  </th>
                )
              })
            }
          </tr>
          {
            Object.keys(tldr).map(feature => {
              return (
                <tr className="feature" key={feature}>
                  <td className="blank-head">{feature}</td>
                  {
                    Object.keys(tldr[feature]).reverse().map(product => {
                      return (
                        <td key={product} className="align-center">
                          {
                            tldr[feature][product] ?
                              <FontAwesomeIcon className="check" icon={faCheck} /> :
                              <FontAwesomeIcon className="times" icon={faMinus} />
                          }
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
          <tr>
            <td className="blank-head" />
            {
              taggedProducts.map(({ fields: { link, title } }) => {
                return (
                  <td key={title} className="align-center">
                    <CtaButton
                      buttonColor="warning"
                      size="medium"
                      affiliateLink={link}
                    >
                      Check price
                    </CtaButton>
                  </td>
                )
              })
            }
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default TldrDesktop;
