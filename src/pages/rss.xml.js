import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('how-to-thrive');
  const sortedPosts = posts
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Tenured Advantage',
    description: 'AI insights for experienced professionals who want to amplify their competitive edge. Practical strategies from Andreas Duess.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/how-to-thrive/${post.slug}/`,
      author: post.data.author || 'Andreas Duess',
    })),
    customData: `<language>en-us</language>`,
  });
}
