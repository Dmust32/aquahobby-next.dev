import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

const FreshwaterFish = () => {
  return (
    <div>
      <CategorySection
        sectionTitle="Freshwater Fish"
        articles={testArticleData}
        headingColor="green"
      />
    </div>
  )
}

export default FreshwaterFish;
