import React from 'react';
import MainArticleCard from '../../cards/mainArticleCard';

import './CategorySection.module.scss';

const renderFeaturedArticles = (articles) => {

  return articles.map(({
    fields: {
      cardImage: {
        fields: {
          file: {
            url
          }
        }
      },
      title,
      description,
      date,
      slug,
    },
  }) => {
    return (
      <MainArticleCard
        key={slug}
        slug={slug}
        title={title}
        description={description}
        img={url}
        date={date}
      />
    );
  })
};

const getHeadingColor = (color) => {
  if (color) {
    return `is-${color}`;
  }

  return '';
};

const CategorySection = ({ sectionTitle, articles, headingColor }) => {
  return (
    <div className="category-container">
      <h1 className={`featured-articles-heading ${getHeadingColor(headingColor)}`}>{sectionTitle}</h1>
      <div className="featured-articles-container">
        {renderFeaturedArticles(articles)}
      </div>
    </div>
  );
};

export default CategorySection;
