import React from 'react';
import Link from 'next/link';
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
  date,
  slug,
  contentType,
}) => {
  return (
    <div className='card-container'>
      <Link href={`/articles/${encodeURIComponent(contentType)}/${encodeURIComponent(slug)}`}>
        <a>
          <Card>
            <Card.Image size="4by3" src={img} />
            <Card.Content>
              <Media>
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
        </a>
      </Link>
    </div>
  )
};

export default MainArticleCard;
