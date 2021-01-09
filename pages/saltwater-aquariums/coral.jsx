import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

const Coral = () => {
  return (
    <div>
      <Head>
        <title>AquaHobby - Saltwater Coral</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Coral"
        articles={testArticleData}
        headingColor="coral"
      />
    </div>
  )
}

export default Coral;
