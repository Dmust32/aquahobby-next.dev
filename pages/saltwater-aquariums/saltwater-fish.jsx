import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

const SaltwaterFish = () => {
  return (
    <div>
      <Head>
        <title>AquaHobby - Saltwater Fish</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Saltwater Fish"
        articles={testArticleData}
        headingColor="coral"
      />
    </div>
  )
}

export default SaltwaterFish;