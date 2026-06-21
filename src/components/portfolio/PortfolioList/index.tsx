import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '@/app/api/data'

const PortfolioList = () => {
  return (
    <section className='bg-ivory dark:bg-darkmode py-20 md:py-28'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-24'>
          {portfolioinfo.map((item, index) => (
            <Link
              key={index}
              href={`/portfolio/${item.slug}`}
              className={`group block ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <div className='relative overflow-hidden rounded-2xl aspect-[4/5] bg-cream dark:bg-darklight border border-border dark:border-dark_border mb-6'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={1000}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className='transition-transform duration-700 group-hover:scale-105'
                />
              </div>
              <h3 className='font-display text-2xl md:text-3xl text-slate_ink dark:text-white tracking-tight group-hover:text-coral transition-colors'>
                {item.title}
              </h3>
              <p className='text-grey dark:text-white/50 mt-2'>{item.info}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioList
