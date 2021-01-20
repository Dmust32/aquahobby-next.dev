import Head from 'next/head'
import CategorySection from '../components/articleSections/categorySection';
import Hero from 'react-bulma-components/src/components/hero';

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
        <meta
          name="description"
          content="Your #1 resource for all things aquarium hobby. Freshwater and saltwater aquarium articles to help you navigate this amazing hobby."
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
        <script src="https://kit.fontawesome.com/a565136c07.js" crossorigin="anonymous"></script>
      </Head>
      <CategorySection
        sectionTitle="Featured Articles"
        articles={articles}
      />
    </div>
  )
}
