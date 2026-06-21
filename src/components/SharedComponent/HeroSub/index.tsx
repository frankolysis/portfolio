import React, { FC } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import { BreadcrumbLink } from '@/types/breadcrumb'

interface HeroSubProps {
  title: string
  description: string
  breadcrumbLinks: BreadcrumbLink[]
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks }) => {
  return (
    <section className='relative bg-ivory dark:bg-darkmode pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden'>
      <div className='absolute inset-0 -z-10 opacity-50 dark:opacity-20'>
        <div className='absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-coral/10 blur-3xl' />
      </div>
      <div className='container mx-auto max-w-4xl px-6 text-center'>
        <Breadcrumb links={breadcrumbLinks} />
        <h1 className='font-display text-slate_ink dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mt-6'>
          {title}
        </h1>
        <p className='text-lg md:text-xl text-grey dark:text-white/60 max-w-2xl mx-auto mt-6 leading-relaxed'>
          {description}
        </p>
      </div>
    </section>
  )
}

export default HeroSub
