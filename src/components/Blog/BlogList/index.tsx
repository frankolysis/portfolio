import React from 'react'
import BlogCard from '@/components/SharedComponent/Blog/blogCard'
import { getAllPosts } from '@/utils/markdown'

const BlogList: React.FC = () => {
  const posts = getAllPosts(['title', 'date', 'excerpt', 'coverImage', 'slug'])

  return (
    <section className='bg-ivory dark:bg-darkmode py-20 md:py-28' id='blog'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
          {posts.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
