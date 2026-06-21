'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Progress as ProgressData } from '@/app/api/data'
import { getImgPath } from '@/utils/image'

interface ProgressItem {
  title: string
  Progress: number
}

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([])
  useEffect(() => {
    setProgressValues(ProgressData)
  }, [])

  return (
    <section
      className={`scroll-mt-25 py-24 md:py-32 ${
        isColorMode ? 'dark:bg-darklight bg-cream' : 'dark:bg-darkmode bg-ivory'
      }`}
      id='about'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='grid md:grid-cols-12 items-center gap-12 md:gap-16'>
          <div className='md:col-span-6'>
            <div className='relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-coral/15 via-cream to-ivory dark:from-coral/20 dark:via-darklight dark:to-darkmode border border-border dark:border-dark_border'>
              <Image
                src={getImgPath('/images/work-progress/progress-work.png')}
                alt='Work in progress'
                width={500}
                height={625}
                quality={100}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className='mix-blend-multiply dark:mix-blend-normal'
              />
            </div>
          </div>
          <div className='md:col-span-6 space-y-8'>
            <span className='text-xs uppercase tracking-widest text-coral font-medium'>
              About the practice
            </span>
            <h2 className='font-display text-4xl md:text-5xl leading-[1.1] tracking-tight text-slate_ink dark:text-white'>
              A small practice<br />
              <span className='italic text-coral'>for considered work.</span>
            </h2>
            <p className='text-lg text-grey dark:text-white/70 leading-relaxed'>
              I work closely with founders and product teams to ship software
              that's clear, calm, and well-built. No bloat, no buzzwords —
              just the right thing, made carefully.
            </p>

            <div className='space-y-6 pt-4'>
              {progressValues.map((item, index) => (
                <div key={index} className='space-y-2'>
                  <div className='flex justify-between items-baseline'>
                    <span className='text-sm font-medium text-slate_ink dark:text-white/90'>
                      {item.title}
                    </span>
                    <span className='font-display text-sm text-coral'>
                      {item.Progress}%
                    </span>
                  </div>
                  <div className='relative h-[3px] w-full bg-border dark:bg-dark_border rounded-full overflow-hidden'>
                    <div
                      className='absolute left-0 top-0 h-full bg-coral rounded-full transition-all duration-700'
                      style={{ width: `${item.Progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
