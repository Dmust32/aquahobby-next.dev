import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import { getArticlesByCategory } from '../../utils/getAtricles';

import "../../styles/SaltwaterDirectory.module.scss";

const sections = {
  'Saltwater Equipment': 'saltwater-equipment',
  'Saltwater Fish': 'saltwater-fish',
  'Coral': 'coral'
};

export async function getStaticProps() {
  const equipment = await getArticlesByCategory(sections['Saltwater Equipment'], 8);
  const fish = await getArticlesByCategory(sections['Saltwater Fish'], 8);
  const coral = await getArticlesByCategory(sections['Coral'], 8);

  const articles = {
    'Saltwater Equipment': equipment,
    'Saltwater Fish': fish,
    'Coral': coral,
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
        headingColor="coral"
      />
    );
  })
};

const SaltwaterDirectory = ({ articles }) => {
  return (
    <div className="saltwater-container">
      <Head>
        <title>H2Know - Saltwater Aquariums</title>
        <meta
          name="description"
          content="Learn about saltwater aquariums from fish and coral to equipment!"
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <h1 className="saltwater-header is-coral">Saltwater Aquariums</h1>
      {renderSections(articles)}
    </div>
  );
};

export default SaltwaterDirectory;
