'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='relative bg-ivory dark:bg-darkmode pt-36 md:pt-44 pb-20 md:pb-32 overflow-hidden'>
      <div className='absolute inset-0 -z-10 opacity-60 dark:opacity-20'>
        <div className='absolute top-20 -left-20 w-96 h-96 rounded-full bg-coral/10 blur-3xl' />
        <div className='absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-coral/5 blur-3xl' />
      </div>

      <div className='container mx-auto max-w-6xl px-6 grid grid-cols-12 gap-8 items-center relative z-10'>
        <div className='md:col-span-7 col-span-12 space-y-8'>
          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border dark:border-dark_border bg-white/60 dark:bg-darklight/60 backdrop-blur'>
            <span className='w-2 h-2 rounded-full bg-coral animate-pulse' />
            <span className='text-sm text-grey dark:text-white/60 font-medium tracking-wide'>
              Available for new work
            </span>
          </div>

          <h1 className='font-display text-slate_ink dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-normal'>
            Thoughtful work,
            <br />
            <span className='italic text-coral'>built with care.</span>
          </h1>

          <p className='text-lg md:text-xl text-grey dark:text-white/70 max-w-xl leading-relaxed'>
            I design and build digital products with a focus on clarity, craft,
            and the small details that make experiences feel considered.
          </p>

          <div className='flex flex-wrap items-center gap-4 pt-2'>
            <Link
              href='/portfolio'
              className='px-7 py-3.5 rounded-full bg-slate_ink text-ivory dark:bg-ivory dark:text-slate_ink font-medium hover:bg-coral hover:text-white dark:hover:bg-coral dark:hover:text-white transition-all duration-300'>
              See the work
            </Link>
            <Link
              href='/contact'
              className='px-7 py-3.5 rounded-full border border-slate_ink/20 dark:border-white/20 text-slate_ink dark:text-white font-medium hover:border-coral hover:text-coral dark:hover:text-coral transition-all duration-300'>
              Get in touch →
            </Link>
          </div>

          <div className='flex items-center gap-4 pt-8 border-t border-border dark:border-dark_border'>
            <div className='flex -space-x-2'>
              <Image
                src={getImgPath('/images/hero/hero-profile-1.jpg')}
                alt=''
                width={36}
                height={36}
                quality={100}
                className='w-9! h-9! rounded-full border-2 border-ivory dark:border-darkmode'
              />
              <Image
                src={getImgPath('/images/hero/hero-profile-2.jpg')}
                alt=''
                width={36}
                height={36}
                quality={100}
                className='w-9! h-9! rounded-full border-2 border-ivory dark:border-darkmode'
              />
              <Image
                src={getImgPath('/images/hero/hero-profile-3.jpg')}
                alt=''
                width={36}
                height={36}
                quality={100}
                className='w-9! h-9! rounded-full border-2 border-ivory dark:border-darkmode'
              />
            </div>
            <p className='text-sm text-grey dark:text-white/60'>
              Trusted by teams shipping considered software.
            </p>
          </div>
        </div>

        <div className='md:col-span-5 col-span-12 relative'>
          <div className='relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-coral/20 via-cream to-ivory dark:from-coral/30 dark:via-darklight dark:to-darkmode border border-border dark:border-dark_border'>
            <Image
              src={getImgPath('/images/hero/hero-image.png')}
              alt='Portrait'
              width={600}
              height={600}
              quality={100}
              className='w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal'
            />
          </div>
          <div className='absolute -bottom-6 -left-6 hidden md:block bg-white dark:bg-darklight border border-border dark:border-dark_border rounded-2xl px-5 py-4 shadow-sm'>
            <p className='text-xs text-grey dark:text-white/60 uppercase tracking-widest mb-1'>
              Currently
            </p>
            <p className='font-display text-lg text-slate_ink dark:text-white'>
              Building Knarf Consults
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
