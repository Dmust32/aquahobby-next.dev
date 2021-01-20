import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Head from 'next/head'
import Disclosure from '../../components/fixtures/disclosure';
import ProductCard from '../../components/cards/productCard';

import '../../styles/Article.module.scss';

const contentClient = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticPaths() {
  const entries = await contentClient.getEntries({
    content_type: 'article',
  });

  return {
    paths: entries.items.map((article) => {
      return {
        params: { slug: article.fields.slug }
      }
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const entries = await contentClient.getEntries({
    content_type: 'article',
    'fields.slug': params.slug
  });

  return {
    props: {
      article: entries.items[0],
    },
  };
}

const Article = ({ article }) => {
  const {
    title,
    content,
    description,
    productCardLink,
  } = article.fields;

  return (
    <div className="article-container">
      <Head>
        <title>AquaHobby - {title}</title>
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
        <meta name="description" content={description} />
      </Head>
      <Disclosure />
      <h1>{title}</h1>
      <ProductCard
        badgeText="Top Pick"
        productCardData={productCardLink}
      />
      {documentToReactComponents(content,
        {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node =>
              <img src={`https:${node.data.target.fields.file.url}`} />
          }
        }
      )}
    </div>
  )
};

export default Article;
