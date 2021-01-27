import Head from 'next/head'
import CategorySection from '../components/articleSections/categorySection';
import { getAllArticles } from '../utils/getAtricles';

export async function getStaticProps() {
  const articles = await getAllArticles();

  return {
    props: {
      articles,
    },
    revalidate: 3600,
  }
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
      <CategorySection
        sectionTitle="Featured Articles"
        articles={articles}
      />
    </div>
  )
}
