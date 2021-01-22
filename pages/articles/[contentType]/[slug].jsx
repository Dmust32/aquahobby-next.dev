import Head from 'next/head'
import Disclosure from '../../../components/fixtures/disclosure';
import templateMap from '../../../components/articleTemplates';
import { getAllArticles, getArticleBySlug } from '../../../utils/getAtricles';

import '../../../styles/Article.module.scss';

export async function getStaticPaths() {
  const entries = await getAllArticles();
  return {
    paths: entries.map((article) => {
      return {
        params: {
          slug: article.fields.slug,
          contentType: article.sys.contentType.sys.id,
        },
      }
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug, contentType } = params;
  const article = await getArticleBySlug(slug, contentType);

  return {
    props: {
      article,
      contentType,
    },
  };
}

const Article = ({ article, contentType }) => {
  const {
    title,
    description,
  } = article.fields;
  const Template = templateMap[contentType];

  return (
    <div className="article-container">
      <Head>
        <title>AquaHobby - {title}</title>
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
        <meta name="description" content={description} />
      </Head>
      <Disclosure />
      <Template
        article={article}
      />
    </div>
  )
};

export default Article;
