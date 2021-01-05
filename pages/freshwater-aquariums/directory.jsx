import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

import '../../styles/FreshwaterDirectory.module.scss';

const sections = [
  "Equipment",
  "Freshwater Fish",
  "Aquatic Plants"
];

const renderSections = () => {
  const only4 = testArticleData.slice(0, 4)

  return sections.map((sectionHeader) => {
    return (
      <CategorySection
        key={sectionHeader}
        sectionTitle={sectionHeader}
        articles={only4}
        headingColor="green"
      />
    );
  })
};

const FreshwaterDirectory = () => {
  return (
    <div className="freshwater-container">
      <h1 className="freshwater-header is-green">Freshwater Aquariums</h1>
      {renderSections()}
    </div>
  );
};

export default FreshwaterDirectory;
