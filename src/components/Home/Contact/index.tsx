import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Contactform = () => {
  return (
    <section className='bg-ivory dark:bg-darkmode py-24 md:py-32' id='contact'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='grid md:grid-cols-12 grid-cols-1 gap-12 md:gap-16'>
          <div className='md:col-span-5 space-y-10'>
            <div>
              <span className='text-xs uppercase tracking-widest text-coral font-medium'>
                Get in touch
              </span>
              <h2 className='font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-slate_ink dark:text-white mt-4'>
                Tell me about
                <br />
                <span className='italic text-coral'>your project.</span>
              </h2>
            </div>

            <div className='space-y-6'>
              <div>
                <p className='text-xs uppercase tracking-widest text-grey dark:text-white/40 mb-2'>
                  Email
                </p>
                <a
                  href='mailto:hello@knarfconsults.com'
                  className='text-lg text-slate_ink dark:text-white hover:text-coral transition-colors'>
                  hello@knarfconsults.com
                </a>
              </div>
              <div>
                <p className='text-xs uppercase tracking-widest text-grey dark:text-white/40 mb-2'>
                  Phone
                </p>
                <a
                  href='tel:+3232558964'
                  className='text-lg text-slate_ink dark:text-white hover:text-coral transition-colors'>
                  +323-25-8964
                </a>
              </div>
              <div>
                <p className='text-xs uppercase tracking-widest text-grey dark:text-white/40 mb-2'>
                  Based in
                </p>
                <p className='text-lg text-slate_ink dark:text-white'>
                  New York · working worldwide
                </p>
              </div>
            </div>

            <div className='pt-8 border-t border-border dark:border-dark_border'>
              <p className='text-xs uppercase tracking-widest text-grey dark:text-white/40 mb-5'>
                Trusted by
              </p>
              <div className='flex items-center flex-wrap gap-8 opacity-60 dark:invert'>
                <Image
                  src={getImgPath('/images/contact/google-pay.png')}
                  alt='Google Pay'
                  width={100}
                  height={20}
                  style={{ width: 'auto', height: 'auto' }}
                  quality={100}
                  className='max-w-28 h-5'
                />
                <Image
                  src={getImgPath('/images/contact/play-juction.png')}
                  alt='Play Junction'
                  width={100}
                  height={20}
                  style={{ width: 'auto', height: 'auto' }}
                  quality={100}
                  className='max-w-24 h-6'
                />
                <Image
                  src={getImgPath('/images/contact/stripe.png')}
                  alt='Stripe'
                  width={100}
                  height={20}
                  style={{ width: 'auto', height: 'auto' }}
                  quality={100}
                  className='max-w-14 h-6'
                />
                <Image
                  src={getImgPath('/images/contact/wise.png')}
                  alt='Wise'
                  width={100}
                  height={20}
                  style={{ width: 'auto', height: 'auto' }}
                  quality={100}
                  className='max-w-16 h-4'
                />
              </div>
            </div>
          </div>

          <div className='md:col-span-7 md:col-start-7'>
            <div className='bg-cream dark:bg-darklight border border-border dark:border-dark_border rounded-3xl p-8 md:p-12'>
              <form className='space-y-5'>
                <div className='grid grid-cols-2 gap-4'>
                  <input
                    type='text'
                    placeholder='First name'
                    className='w-full text-slate_ink dark:text-white text-base bg-ivory dark:bg-darkmode border border-border dark:border-dark_border rounded-xl px-4 py-3.5 focus:border-coral focus:outline-none placeholder:text-grey/70 transition-colors'
                  />
                  <input
                    type='text'
                    placeholder='Last name'
                    className='w-full text-slate_ink dark:text-white text-base bg-ivory dark:bg-darkmode border border-border dark:border-dark_border rounded-xl px-4 py-3.5 focus:border-coral focus:outline-none placeholder:text-grey/70 transition-colors'
                  />
                </div>
                <input
                  type='email'
                  placeholder='you@company.com'
                  className='w-full text-slate_ink dark:text-white text-base bg-ivory dark:bg-darkmode border border-border dark:border-dark_border rounded-xl px-4 py-3.5 focus:border-coral focus:outline-none placeholder:text-grey/70 transition-colors'
                />
                <input
                  type='text'
                  placeholder='Country'
                  className='w-full text-slate_ink dark:text-white text-base bg-ivory dark:bg-darkmode border border-border dark:border-dark_border rounded-xl px-4 py-3.5 focus:border-coral focus:outline-none placeholder:text-grey/70 transition-colors'
                />
                <textarea
                  placeholder='Tell me a bit about what you have in mind…'
                  className='w-full h-40 text-slate_ink dark:text-white text-base bg-ivory dark:bg-darkmode border border-border dark:border-dark_border rounded-xl px-4 py-3.5 focus:border-coral focus:outline-none placeholder:text-grey/70 transition-colors resize-none'
                />
                <label className='flex items-start gap-3 text-sm text-grey dark:text-white/60'>
                  <input
                    type='checkbox'
                    className='mt-1 w-4 h-4 accent-coral cursor-pointer'
                  />
                  <span>
                    I've read and agree to the{' '}
                    <a href='#' className='text-coral hover:underline'>
                      terms
                    </a>
                    .
                  </span>
                </label>
                <button
                  type='submit'
                  className='w-full bg-slate_ink text-ivory dark:bg-ivory dark:text-slate_ink font-medium py-4 rounded-full hover:bg-coral hover:text-white dark:hover:bg-coral dark:hover:text-white transition-colors'>
                  Send inquiry →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactform
