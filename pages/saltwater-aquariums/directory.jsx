import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

import "../../styles/SaltwaterDirectory.module.scss";

const sections = [
  "Equipment",
  "Saltwater Fish",
  "Coral"
];

const renderSections = () => {
  const only4 = testArticleData.slice(0, 4)

  return sections.map((sectionHeader) => {
    return (
      <CategorySection
        key={sectionHeader}
        sectionTitle={sectionHeader}
        articles={only4}
        headingColor="coral"
      />
    );
  })
};

const SaltwaterDirectory = () => {
  return (
    <div className="saltwater-container">
      <h1 className="saltwater-header is-coral">Saltwater Aquariums</h1>
      {renderSections()}
    </div>
  );
};

export default SaltwaterDirectory;
