import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

const SaltwaterEquipment = () => {
  return (
    <div>
      <CategorySection
        sectionTitle="Saltwater Equipment"
        articles={testArticleData}
        headingColor="coral"
      />
    </div>
  )
}

export default SaltwaterEquipment;