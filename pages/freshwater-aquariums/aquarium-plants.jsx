import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

const Plants = () => {
  return (
    <div>
      <Head>
        <title>AquaHobby - Aquarium Plants</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Aquarium Plants"
        articles={testArticleData}
        headingColor="green"
      />
    </div>
  )
}

export default Plants;
