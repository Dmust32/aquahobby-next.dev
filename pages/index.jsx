import Head from 'next/head'
import CategorySection from '../components/articleSections/categorySection';

const contentClient = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  const entries = await contentClient.getEntries({
    content_type: 'article',
  })

  return {
    props: {
      articles: entries.items,
    },
    revalidate: 3600,
  }
}

export default function LandingPage({ articles }) {

  return (
    <div>
      <Head>
        <title>AquaHobby</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Featured Articles"
        articles={articles}
      />
    </div>
  )
}
