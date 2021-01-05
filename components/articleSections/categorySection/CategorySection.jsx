import React from 'react';
import MainArticleCard from '../../cards/mainArticleCard';

import './CategorySection.module.scss';

const renderFeaturedArticles = (articles) => {

  return articles.map(({
    id,
    title,
    description,
    img,
    date
  }) => {
    return (
      <MainArticleCard
        key={id}
        id={id}
        title={title}
        description={description}
        img={img}
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
