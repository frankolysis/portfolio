import { getAllPosts, getPostBySlug } from '@/utils/markdown'
import markdownToHtml from '@/utils/markdownToHtml'
import { format } from 'date-fns'
import Image from 'next/image'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug, ['title', 'author', 'content', 'metadata'])
  const siteName = process.env.SITE_NAME || 'Knarf Consults'
  const authorName = process.env.AUTHOR_NAME || 'Frank Chike'

  if (post) {
    return {
      title: `${post.title || 'Post'} | ${siteName}`,
      author: authorName,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    }
  }
  return {
    title: 'Not Found',
    description: 'No article has been found',
    author: authorName,
  }
}

export default async function BlogHead({ params }: Props) {
  const post = getPostBySlug(params.slug, [
    'title',
    'author',
    'authorImage',
    'content',
    'coverImage',
    'date',
  ])

  await markdownToHtml(post.content || '')

  return (
    <section className='bg-ivory dark:bg-darkmode pt-36 md:pt-44 pb-16'>
      <div className='container mx-auto max-w-4xl px-6 text-center space-y-8'>
        <div className='flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-coral font-medium'>
          <span>{format(new Date(post.date), 'dd MMM yyyy')}</span>
          <span className='text-grey/40'>·</span>
          <span className='text-grey dark:text-white/40'>13 comments</span>
        </div>
        <h1 className='font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-slate_ink dark:text-white'>
          {post.title}
        </h1>
        <div className='flex items-center justify-center gap-4 pt-4'>
          <Image
            src={post.authorImage}
            alt='Author'
            className='rounded-full'
            width={48}
            height={48}
            quality={100}
            style={{ width: 48, height: 48 }}
          />
          <div className='text-left'>
            <p className='font-medium text-slate_ink dark:text-white'>
              Silicaman
            </p>
            <p className='text-sm text-grey dark:text-white/50'>Author</p>
          </div>
        </div>
      </div>
    </section>
  )
}
