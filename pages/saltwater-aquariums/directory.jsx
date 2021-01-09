import Head from 'next/head';
import CategorySection from '../../components/articleSections/categorySection';
import testArticleData from '../../testArticles';

import "../../styles/SaltwaterDirectory.module.scss";

const sections = [
  "Equipment",
  "Saltwater Fish",
  "Coral"
];

const renderSections = () => {
  const only4 = testArticleData.slice(0, 4)

  return sections.map((sectionHeader) => {
    return (
      <CategorySection
        key={sectionHeader}
        sectionTitle={sectionHeader}
        articles={only4}
        headingColor="coral"
      />
    );
  })
};

const SaltwaterDirectory = () => {
  return (
    <div className="saltwater-container">
      <Head>
        <title>AquaHobby - Saltwater Aquariums</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <h1 className="saltwater-header is-coral">Saltwater Aquariums</h1>
      {renderSections()}
    </div>
  );
};

export default SaltwaterDirectory;
