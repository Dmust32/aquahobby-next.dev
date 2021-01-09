import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

const FreshwaterFish = () => {
  return (
    <div>
      <Head>
        <title>AquaHobby - Freshwater Fish</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Freshwater Fish"
        articles={testArticleData}
        headingColor="green"
      />
    </div>
  )
}

export default FreshwaterFish;
