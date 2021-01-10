import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import { getArticlesByCategory } from '../../utils/getAtricles';


export async function getStaticProps() {
  const articles = await getArticlesByCategory('freshwater-equipment')

  return {
    props: {
      articles,
    },
  };
}


const FreshwaterEquipment = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>AquaHobby - Freshwater Equipment</title>
        <meta
          name="description"
          content="What equipment do you need for your freshwater aquarium? Come find out!"
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Freshwater Equipment"
        articles={articles}
        headingColor="green"
      />
    </div>
  )
}

export default FreshwaterEquipment;
