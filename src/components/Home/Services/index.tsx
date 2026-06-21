import React from 'react'
import Link from 'next/link'
import { Servicebox } from '@/app/api/data'
import Image from 'next/image'

const Services = () => {
  return (
    <section className='bg-cream dark:bg-darklight py-24 md:py-32' id='services'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='max-w-3xl mb-16 md:mb-24'>
          <span className='text-xs uppercase tracking-widest text-coral font-medium'>
            What I do
          </span>
          <h2 className='font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-slate_ink dark:text-white mt-4'>
            Services shaped around
            <br />
            <span className='italic text-coral'>your real problem.</span>
          </h2>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-px bg-border dark:bg-dark_border rounded-3xl overflow-hidden border border-border dark:border-dark_border'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              className='group bg-ivory dark:bg-darkmode p-10 md:p-12 flex flex-col gap-6 transition-colors hover:bg-cream dark:hover:bg-darklight'>
              <div className='w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center'>
                <Image
                  src={item.icon}
                  alt=''
                  width={24}
                  height={24}
                  className='w-6 h-6'
                />
              </div>
              <h3 className='font-display text-2xl md:text-3xl text-slate_ink dark:text-white leading-tight tracking-tight'>
                {item.title}
              </h3>
              <p className='text-grey dark:text-white/60 leading-relaxed flex-1'>
                {item.description}
              </p>
              <Link
                href='#'
                className='inline-flex items-center gap-2 text-coral font-medium text-sm group-hover:gap-3 transition-all'>
                Learn more
                <span className='transition-transform group-hover:translate-x-1'>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
