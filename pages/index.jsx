import Head from 'next/head'
import CategorySection from '../components/articleSections/categorySection';
import testArticleData from '../testArticles';

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CategorySection
        sectionTitle="Featured Articles"
        articles={testArticleData}
      />
    </div>
  )
}
