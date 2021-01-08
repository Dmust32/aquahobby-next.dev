import { useEffect, useState } from 'react';
import Head from 'next/head'
import CategorySection from '../components/articleSections/categorySection';
import testArticleData from '../testArticles';

export default function LandingPage({ contentClient }) {
  async function fetchEntries() {
    const entries = await contentClient.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])
  return (
    <div>
      <Head>
        <title>AquaHobby</title>
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <CategorySection
        sectionTitle="Featured Articles"
        articles={posts}
      />
    </div>
  )
}
