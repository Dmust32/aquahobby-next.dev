import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import { getArticlesByCategory } from '../../utils/getAtricles';

import '../../styles/FreshwaterDirectory.module.scss';

const sections = {
  'Freshwater Equipment': 'freshwater-equipment',
  'Freshwater Fish': 'freshwater-fish',
  'Aquatic Plants': 'plants',
};

export async function getStaticProps() {
  const equipment = await getArticlesByCategory(sections['Freshwater Equipment'], 8);
  const fish = await getArticlesByCategory(sections['Freshwater Fish'], 8);
  const Plants = await getArticlesByCategory(sections['Aquatic Plants'], 8);

  const articles = {
    'Freshwater Equipment': equipment,
    'Freshwater Fish': fish,
    'Aquatic Plants': Plants,
  };

  return {
    props: {
      articles,
    },
  };
}

const renderSections = (articles) => {
  return Object.keys(articles).map((sectionHeader) => {

    return (
      <CategorySection
        key={sectionHeader}
        sectionTitle={sectionHeader}
        articles={articles[sectionHeader]}
        headingColor="green"
      />
    );
  })
};

const FreshwaterDirectory = ({ articles }) => {
  return (
    <div className="freshwater-container">
      <Head>
        <title>AquaHobby - Freshwater Aquariums</title>
        <meta
          name="description"
          content="Learn about freshwater aquarium keeping. Fish, plants or equipment? We have you covered."
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <h1 className="freshwater-header is-green">Freshwater Aquariums</h1>
      {renderSections(articles)}
    </div>
  );
};

export default FreshwaterDirectory;
