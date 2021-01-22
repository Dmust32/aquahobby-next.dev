import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import { getArticlesByCategory } from '../../utils/getAtricles';


export async function getStaticProps() {
  const articles = await getArticlesByCategory('freshwater-fish', 12)

  return {
    props: {
      articles,
    },
  };
}

const FreshwaterFish = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>H2Know - Freshwater Fish</title>
        <meta
          name="description"
          content="Freshwater aquarium fish spotlights! Check out some of our favorite fish in the aquarium hobby."
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Freshwater Fish"
        articles={articles}
        headingColor="green"
      />
    </div>
  )
}

export default FreshwaterFish;
