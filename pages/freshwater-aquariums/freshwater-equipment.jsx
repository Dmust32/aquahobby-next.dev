import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

const FreshwaterEquipment = () => {
  return (
    <div>
      <Head>
        <title>AquaHobby - Freshwater Equipment</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Freshwater Equipment"
        articles={testArticleData}
        headingColor="green"
      />
    </div>
  )
}

export default FreshwaterEquipment;
