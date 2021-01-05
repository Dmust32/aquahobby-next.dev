import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

const Coral = () => {
  return (
    <div>
      <CategorySection
        sectionTitle="Coral"
        articles={testArticleData}
        headingColor="coral"
      />
    </div>
  )
}

export default Coral;
