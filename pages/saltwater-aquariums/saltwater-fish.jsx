import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import { getArticlesByCategory } from '../../utils/getAtricles';

export async function getStaticProps() {
  const articles = await getArticlesByCategory('saltwater-fish', 8)

  return {
    props: {
      articles,
    },
  };
}

const SaltwaterFish = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>H2Know - Saltwater Fish</title>
        <meta
          name="description"
          content="Want to keep saltwater fish? Discover the beautiful fish that make up the saltwater aquarium hobby."
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Saltwater Fish"
        articles={articles}
        headingColor="coral"
      />
    </div>
  )
}

export default SaltwaterFish;