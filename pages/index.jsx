import Head from 'next/head'
import CategorySection from '../components/articleSections/categorySection';
import toolCardsConfig from '../data/toolCardsConfig';
import { getAllArticles } from '../utils/getAtricles';
import ToolCard from '../components/cards/toolCards';

export async function getStaticProps() {
  const articles = await getAllArticles();

  return {
    props: {
      articles,
    },
    revalidate: 3600,
  }
}

const getToolCards = () => {
  return Object.keys(toolCardsConfig).map(tool => {
    const { img, title, content, toolSlug } = toolCardsConfig[tool];
    return (
      <ToolCard
        img={img}
        title={title}
        content={content}
        toolSlug={toolSlug}
        key={title}
      />
    );
  })
}

export default function LandingPage({ articles }) {

  return (
    <div>
      <Head>
        <title>H2Know</title>
        <meta
          name="description"
          content="Your #1 resource for all things aquarium hobby. Freshwater and saltwater aquarium articles to help you navigate this amazing hobby."
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
        <script src="https://kit.fontawesome.com/a565136c07.js" crossOrigin="anonymous"></script>
      </Head>
      <div className="tool-cards">
        {getToolCards()}
      </div>
      <CategorySection
        sectionTitle="Featured Articles"
        articles={articles}
      />
    </div>
  )
}
