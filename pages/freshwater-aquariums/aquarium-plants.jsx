import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import { getArticlesByCategory } from '../../utils/getAtricles';


export async function getStaticProps() {
  const articles = await getArticlesByCategory('plants')

  return {
    props: {
      articles,
    },
  };
}

const Plants = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>AquaHobby - Aquarium Plants</title>
        <meta
          name="description"
          content="Aquatic/ aquarium plants. Learn how to care for them and which ones go best in your tank!"
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Aquarium Plants"
        articles={articles}
        headingColor="green"
      />
    </div>
  )
}

export default Plants;
