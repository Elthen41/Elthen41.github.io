import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Elthen · 博客',
    description: '以中文分享产品设计与前端实践的个人博客',
    site: context.site ?? 'https://example.com',
    items: posts.map((post) => ({
      link: `/blog/${post.slug}/`,
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.pubDate,
    })),
  });
}
