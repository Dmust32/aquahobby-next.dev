import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

const SaltwaterEquipment = () => {
  return (
    <div>
      <Head>
        <title>AquaHobby - Saltwater Equipment</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Saltwater Equipment"
        articles={testArticleData}
        headingColor="coral"
      />
    </div>
  )
}

export default SaltwaterEquipment;