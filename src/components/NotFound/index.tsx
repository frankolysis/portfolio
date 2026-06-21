import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <section className='bg-ivory dark:bg-darkmode min-h-[80vh] flex items-center'>
      <div className='container mx-auto max-w-3xl px-6 text-center py-32'>
        <p className='font-display text-[12rem] md:text-[16rem] leading-none text-coral/30 tracking-tighter'>
          404
        </p>
        <h1 className='font-display text-4xl md:text-5xl leading-tight tracking-tight text-slate_ink dark:text-white mt-4'>
          This page wandered off.
        </h1>
        <p className='text-lg text-grey dark:text-white/60 mt-6 max-w-md mx-auto leading-relaxed'>
          The link may be old, or the page has moved. Let's get you back to
          something useful.
        </p>
        <div className='flex flex-wrap items-center justify-center gap-3 mt-10'>
          <Link
            href='/'
            className='px-7 py-3.5 rounded-full bg-slate_ink text-ivory dark:bg-ivory dark:text-slate_ink font-medium hover:bg-coral hover:text-white dark:hover:bg-coral dark:hover:text-white transition-colors'>
            Go home
          </Link>
          <Link
            href='/contact'
            className='px-7 py-3.5 rounded-full border border-slate_ink/20 dark:border-white/20 text-slate_ink dark:text-white font-medium hover:border-coral hover:text-coral dark:hover:text-coral transition-colors'>
            Get in touch →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
