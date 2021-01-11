import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import { getArticlesByCategory } from '../../utils/getAtricles';

export async function getStaticProps() {
  const articles = await getArticlesByCategory('saltwater-equipment', 8)

  return {
    props: {
      articles,
    },
  };
}

const SaltwaterEquipment = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>AquaHobby - Saltwater Equipment</title>
        <meta
          name="description"
          content="The best saltwater aquarium gear. Which equipment do you need for your saltwater aquarium."
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Saltwater Equipment"
        articles={articles}
        headingColor="coral"
      />
    </div>
  )
}

export default SaltwaterEquipment;