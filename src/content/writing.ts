export type Post = {
  title: string
  url: string
  date: string
  published: string
  excerpt: string
  tags: string[]
}

export const posts: Post[] = [
  {
    title: 'How to Choose the Right Primary ID for Your Database',
    url: 'https://medium.com/@dhanasekaran23298/how-to-choose-the-right-primary-id-for-your-database-b0f0bf4781f1',
    date: 'Sep 2026',
    published: '2026-09-27',
    excerpt:
      'Sequential IDs, UUIDs, ULIDs and Snowflake IDs all solve the same problem differently. A practical comparison of index performance, storage cost and distributed generation.',
    tags: ['Databases', 'UUID', 'System design'],
  },
  {
    title: 'JWT (JSON Web Token)',
    url: 'https://medium.com/@dhanasekaran23298/jwt-json-web-token-5b0b3103cc1b',
    date: 'May 2024',
    published: '2024-05-28',
    excerpt:
      'How JWTs are structured, how signatures and claims work, and how refresh tokens and client assertions keep partner integrations secure.',
    tags: ['Security', 'JWT', 'OAuth2'],
  },
  {
    title: 'Docker: Things you need to know',
    url: 'https://medium.com/@dhanasekaran23298/docker-things-you-need-to-know-13dbe49b5dcf',
    date: 'May 2023',
    published: '2023-05-15',
    excerpt:
      'A hands-on Docker primer: pulling and running images, managing containers, pruning, and writing a Dockerfile for a Node.js service.',
    tags: ['Docker', 'DevOps', 'Containers'],
  },
]

export const mediumProfile = {
  label: 'Medium',
  handle: '@dhanasekaran23298',
  href: 'https://medium.com/@dhanasekaran23298',
} as const
