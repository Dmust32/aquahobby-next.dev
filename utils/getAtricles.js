import CategorySection from '../components/articleSections/categorySection';

const contentClient = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getArticlesByCategory = async (category, limit) => {
  const entries = await contentClient.getEntries({
    content_type: 'article',
    'fields.category': category,
    limit: limit ? limit : 20,
  });

  return entries.items;
};

export const getArticlesBySubject = async (subject) => {
  const entries = await contentClient.getEntries({
    content_type: 'article',
    'fields.subject': subject,
  });

  return entries.items;
};

export const getArticleBySlug = async (slug) => {
  const entries = await contentClient.getEntries({
    content_type: 'article',
    'fields.slug': slug
  });

  return entries.items[0];
};
