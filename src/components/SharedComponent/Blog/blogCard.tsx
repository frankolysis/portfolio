import React from 'react'
import Image from 'next/image'
import { Blog } from '@/types/blog'
import { format } from 'date-fns'
import Link from 'next/link'

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, date, slug } = blog
  return (
    <Link href={`/blog/${slug}`} className='group block'>
      <div className='overflow-hidden rounded-2xl aspect-[4/3] bg-cream dark:bg-darklight border border-border dark:border-dark_border mb-6'>
        <Image
          src={`/venus-nextjs/${coverImage!}`}
          alt={title || ''}
          width={600}
          height={450}
          quality={100}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className='transition-transform duration-700 group-hover:scale-105'
        />
      </div>
      <div className='space-y-3'>
        <span className='text-xs uppercase tracking-widest text-coral font-medium'>
          {date ? format(new Date(date), 'dd MMM yyyy') : ''}
        </span>
        <h3 className='font-display text-2xl text-slate_ink dark:text-white leading-tight tracking-tight group-hover:text-coral transition-colors'>
          {title}
        </h3>
      </div>
    </Link>
  )
}

export default BlogCard
