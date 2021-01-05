import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

const Plants = () => {
  return (
    <div>
      <CategorySection
        sectionTitle="Aquarium Plants"
        articles={testArticleData}
        headingColor="green"
      />
    </div>
  )
}

export default Plants;
