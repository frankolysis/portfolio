import React from 'react'
import Link from 'next/link'
import BlogCard from './blogCard'
import { getAllPosts } from '@/utils/markdown'

const Blog: React.FC = () => {
  const posts = getAllPosts([
    'title',
    'date',
    'excerpt',
    'coverImage',
    'slug',
  ]).slice(0, 3)

  return (
    <section className='bg-ivory dark:bg-darkmode py-24 md:py-32' id='blog'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='flex items-end justify-between flex-wrap gap-6 mb-16'>
          <div>
            <span className='text-xs uppercase tracking-widest text-coral font-medium'>
              Writing
            </span>
            <h2 className='font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-slate_ink dark:text-white mt-4'>
              Notes & essays
            </h2>
          </div>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-sm font-medium text-slate_ink dark:text-white hover:text-coral dark:hover:text-coral transition-colors'>
            All writing
            <span>→</span>
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10'>
          {posts.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
