import React from 'react'
import { count } from '@/app/api/data'
import Image from 'next/image'

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={`${
        isColorMode ? 'dark:bg-darklight bg-cream' : 'dark:bg-darkmode bg-ivory'
      }`}>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 py-4'>
          {count.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-start gap-3 p-6 md:p-8 border-l border-border dark:border-dark_border'>
              <Image
                src={item.icon}
                alt=''
                width={28}
                height={28}
                unoptimized
                className='opacity-70'
              />
              <span className='font-display text-5xl md:text-6xl font-normal text-slate_ink dark:text-white tracking-tight'>
                {item.value}
              </span>
              <p className='text-sm text-grey dark:text-white/60 leading-relaxed max-w-[14rem]'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
