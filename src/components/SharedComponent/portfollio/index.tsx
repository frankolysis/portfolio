import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
  return (
    <section id='portfolio' className='bg-ivory dark:bg-darkmode py-24 md:py-32 overflow-hidden'>
      <div className='container mx-auto max-w-6xl px-6 mb-16'>
        <div className='flex items-end justify-between flex-wrap gap-6'>
          <div className='max-w-2xl'>
            <span className='text-xs uppercase tracking-widest text-coral font-medium'>
              Selected work
            </span>
            <h2 className='font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-slate_ink dark:text-white mt-4'>
              A few things
              <br />
              <span className='italic text-coral'>I've made lately.</span>
            </h2>
          </div>
          <p className='text-grey dark:text-white/60 max-w-sm leading-relaxed'>
            A small selection of recent projects across product, brand, and
            engineering — each made for a different kind of team.
          </p>
        </div>
      </div>
      <PortfolioCard />
    </section>
  )
}

export default Portfolio
