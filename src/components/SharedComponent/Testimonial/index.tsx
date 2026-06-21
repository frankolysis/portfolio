import React from 'react'

const Testimonial = () => {
  return (
    <section
      className='scroll-mt-24 bg-cream dark:bg-darklight py-24 md:py-32'
      id='testimonials'>
      <div className='container mx-auto max-w-4xl px-6 text-center'>
        <span className='text-xs uppercase tracking-widest text-coral font-medium'>
          Kind words
        </span>
        <blockquote className='font-display text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-tight text-slate_ink dark:text-white mt-8 mb-12'>
          <span className='text-coral'>"</span>
          Working with Frank felt like adding the calmest engineer on the team —
          opinionated when it mattered, quiet when it didn't, and shipping
          quality without the noise.
          <span className='text-coral'>"</span>
        </blockquote>
        <div className='flex items-center justify-center gap-4'>
          <div className='w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center font-display text-coral text-lg'>
            JD
          </div>
          <div className='text-left'>
            <p className='font-medium text-slate_ink dark:text-white'>
              Jonathan Diesel
            </p>
            <p className='text-sm text-grey dark:text-white/50'>
              Product Lead, Apple
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
