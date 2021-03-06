const fs = require('fs')
const globby = require('globby')
const contentClient = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

async function generateSiteMap() {
  const articles = [];

  const howTo = await contentClient.getEntries({
    content_type: 'howToArticle'
  });

  const informative = await contentClient.getEntries({
    content_type: 'article'
  });

  const productCompare = await contentClient.getEntries({
    content_type: 'productCompareArticle'
  });

  if (howTo) {
    articles.push(...howTo.items)
  }
  if (informative) {
    articles.push(...informative.items)
  }
  if (productCompare) {
    articles.push(...productCompare.items)
  }

  const pages = await globby([
    'pages/**/*.js',
    'pages/**/*.jsx',
    'posts/*.md',
    '!pages/saltwater-aquariums/**',
    '!pages/_*.js',
    '!pages/_*.jsx',
    '!pages/**/[slug].jsx',
    '!pages/api',
  ])

  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => {
      const path = page
        .replace('pages', '')
        .replace('.jsx', '')
        .replace('.js', '')
        .replace('.md', '')
      const route = path === '/index' ? '' : path
      return (
        `<url>
          <loc>${`https://h2know.dev${route}`}</loc>
        </url>`
      )
    }).join('')
    }
    ${articles.map((article) => {
      return (
        `<url>
        <loc>${`https://h2know.dev/articles/${article.sys.contentType.sys.id}/${article.fields.slug}`}</loc>
      </url>`
      );
    }).join('')}      
    </urlset>
  `
  console.log("********** SITEMAP GENERATED *************")
  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()
