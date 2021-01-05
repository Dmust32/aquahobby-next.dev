import React from 'react';
import Card from 'react-bulma-components/src/components/card';
import Media from 'react-bulma-components/src/components/media';
import Image from 'react-bulma-components/src/components/image';
import Content from 'react-bulma-components/src/components/content';
import Heading from 'react-bulma-components/src/components/heading';

import './MainArticleCard.module.scss';

const MainArticleCard = ({
  id,
  title,
  description,
  img,
  date
}) => {
  return (
    <div className='card-container'>
      <Card>
        <Card.Image size="4by3" src={img} />
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" position="left">
              <Image size={64} alt="64x64" src={img} />
            </Media.Item>
            <Media.Item>
              <Heading size={4}>{title}</Heading>
            </Media.Item>
          </Media>
          <Content>
            {description}
            <br />
            <div>{date}</div>
          </Content>
        </Card.Content>
      </Card>
    </div>
  )
};

export default MainArticleCard;
