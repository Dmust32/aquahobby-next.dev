import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

const SaltwaterFish = () => {
  return (
    <div>
      <CategorySection
        sectionTitle="Saltwater Fish"
        articles={testArticleData}
        headingColor="coral"
      />
    </div>
  )
}

export default SaltwaterFish;