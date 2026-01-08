import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'https://pulsestrategygroup.com'
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/brand-strategy',
    '/services/partnership-procurement',
    '/services/event-design',
    '/contact',
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'monthly' : 'weekly',
    priority: route === '/' ? 1 : route === '/contact' ? 0.9 : 0.8,
  }))
}