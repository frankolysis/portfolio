import React from 'react'
import Link from 'next/link'

const ContactForm = () => {
  return (
    <section className='bg-cream dark:bg-darklight py-20 md:py-28'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='grid md:grid-cols-12 gap-12 md:gap-16 items-start'>
          <div className='md:col-span-5 sticky top-32'>
            <span className='text-xs uppercase tracking-widest text-coral font-medium'>
              Inquiry form
            </span>
            <h2 className='font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-slate_ink dark:text-white mt-4'>
              Tell me what you're
              <br />
              <span className='italic text-coral'>thinking about.</span>
            </h2>
            <p className='text-grey dark:text-white/60 leading-relaxed mt-6 max-w-md'>
              The more detail you can share, the better. Half-formed ideas are
              fine too.
            </p>
          </div>
          <div className='md:col-span-7'>
            <form className='space-y-5'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='block text-xs uppercase tracking-widest text-grey dark:text-white/40 mb-2'>
                    First name
                  </label>
                  <input
                    type='text'
                    className='w-full text-slate_ink dark:text-white text-base bg-ivory dark:bg-darkmode border border-border dark:border-dark_border rounded-xl px-4 py-3.5 focus:border-coral focus:outline-none transition-colors'
                  />
                </div>
                <div>
                  <label className='block text-xs uppercase tracking-widest text-grey dark:text-white/40 mb-2'>
                    Last name
                  </label>
                  <input
                    type='text'
                    className='w-full text-slate_ink dark:text-white text-base bg-ivory dark:bg-darkmode border border-border dark:border-dark_border rounded-xl px-4 py-3.5 focus:border-coral focus:outline-none transition-colors'
                  />
                </div>
              </div>
              <div>
                <label className='block text-xs uppercase tracking-widest text-grey dark:text-white/40 mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  className='w-full text-slate_ink dark:text-white text-base bg-ivory dark:bg-darkmode border border-border dark:border-dark_border rounded-xl px-4 py-3.5 focus:border-coral focus:outline-none transition-colors'
                />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='block text-xs uppercase tracking-widest text-grey dark:text-white/40 mb-2'>
                    Type of work
                  </label>
                  <select className='w-full text-slate_ink dark:text-white text-base bg-ivory dark:bg-darkmode border border-border dark:border-dark_border rounded-xl px-4 py-3.5 focus:border-coral focus:outline-none transition-colors'>
                    <option>Product engineering</option>
                    <option>Brand & site</option>
                    <option>Fractional CTO</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className='block text-xs uppercase tracking-widest text-grey dark:text-white/40 mb-2'>
                    Budget
                  </label>
                  <select className='w-full text-slate_ink dark:text-white text-base bg-ivory dark:bg-darkmode border border-border dark:border-dark_border rounded-xl px-4 py-3.5 focus:border-coral focus:outline-none transition-colors'>
                    <option>Under $10k</option>
                    <option>$10k — $25k</option>
                    <option>$25k — $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className='block text-xs uppercase tracking-widest text-grey dark:text-white/40 mb-2'>
                  About the project
                </label>
                <textarea
                  rows={6}
                  placeholder="What are you building, and what's tripping you up?"
                  className='w-full text-slate_ink dark:text-white text-base bg-ivory dark:bg-darkmode border border-border dark:border-dark_border rounded-xl px-4 py-3.5 focus:border-coral focus:outline-none transition-colors resize-none placeholder:text-grey/60'
                />
              </div>
              <Link
                href='#'
                className='inline-flex items-center gap-2 bg-slate_ink text-ivory dark:bg-ivory dark:text-slate_ink font-medium px-8 py-4 rounded-full hover:bg-coral hover:text-white dark:hover:bg-coral dark:hover:text-white transition-colors mt-2'>
                Send inquiry →
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
