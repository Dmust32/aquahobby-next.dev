const contentClient = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getAllArticles = async () => {
  const results = [];

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
    results.push(...howTo.items)
  }
  if (informative) {
    results.push(...informative.items)
  }
  if (productCompare) {
    results.push(...productCompare.items)
  }

  return results;
};

export const getArticlesByCategory = async (category, limit) => {
  const results = [];

  const howTo = await contentClient.getEntries({
    content_type: 'howToArticle',
    "fields.category": category,
    limit: limit ? limit : 100,
  });

  const informative = await contentClient.getEntries({
    content_type: 'article',
    "fields.category": category,
    limit: limit ? limit : 100,
  });

  const productCompare = await contentClient.getEntries({
    content_type: 'productCompareArticle',
    "fields.category": category,
    limit: limit ? limit : 100,
  });

  if (howTo) {
    results.push(...howTo.items)
  }
  if (informative) {
    results.push(...informative.items)
  }
  if (productCompare) {
    results.push(...productCompare.items)
  }

  return results;
};

export const getArticleBySlug = async (slug, contentType) => {
  const entries = await contentClient.getEntries({
    content_type: contentType,
    'fields.slug': slug
  });

  return entries.items[0];
};
