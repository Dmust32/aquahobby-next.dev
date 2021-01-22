import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import { getArticlesByCategory } from '../../utils/getAtricles';

export async function getStaticProps() {
  const articles = await getArticlesByCategory('coral', 12)

  return {
    props: {
      articles,
    },
  };
}

const Coral = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>H2Know - Saltwater Coral</title>
        <meta
          name="description"
          content="Ever wanted a coral reef in your home? Here you can learn about how to keep a coral reef aquarium!"
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Coral"
        articles={articles}
        headingColor="coral"
      />
    </div>
  )
}

export default Coral;
