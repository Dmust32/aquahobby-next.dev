import React from 'react';
import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

const FreshwaterEquipment = () => {
  return (
    <div>
      <CategorySection
        sectionTitle="Freshwater Equipment"
        articles={testArticleData}
        headingColor="green"
      />
    </div>
  )
}

export default FreshwaterEquipment;
