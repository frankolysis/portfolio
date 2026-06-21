import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
    <footer className='bg-slate_ink relative z-1 text-ivory'>
      <div className='container mx-auto max-w-6xl px-6 py-20 md:py-28'>
        <div className='grid md:grid-cols-12 grid-cols-1 gap-12 md:gap-16 pb-16 border-b border-dark_border'>
          <div className='md:col-span-6 space-y-8'>
            <h2 className='font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-ivory'>
              Let's build
              <br />
              <span className='italic text-coral'>something good.</span>
            </h2>
            <p className='text-ivory/60 text-lg max-w-md leading-relaxed'>
              Whether you have a clear brief or just a half-formed idea, I'd
              love to hear from you.
            </p>
            <div className='flex flex-wrap gap-3'>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-coral text-white font-medium hover:bg-primary_hover transition-colors'>
                Start a project →
              </Link>
              <Link
                href='mailto:hello@knarfconsults.com'
                className='inline-flex items-center px-7 py-3.5 rounded-full border border-ivory/20 text-ivory font-medium hover:border-coral hover:text-coral transition-colors'>
                hello@knarfconsults.com
              </Link>
            </div>
          </div>

          <div className='md:col-span-3 md:col-start-8'>
            <h3 className='text-xs uppercase tracking-widest text-ivory/40 mb-5'>
              Sitemap
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link href='/#about' className='text-ivory/80 hover:text-coral transition-colors'>About</Link>
              </li>
              <li>
                <Link href='/#services' className='text-ivory/80 hover:text-coral transition-colors'>Services</Link>
              </li>
              <li>
                <Link href='/portfolio' className='text-ivory/80 hover:text-coral transition-colors'>Portfolio</Link>
              </li>
              <li>
                <Link href='/blog' className='text-ivory/80 hover:text-coral transition-colors'>Writing</Link>
              </li>
              <li>
                <Link href='/contact' className='text-ivory/80 hover:text-coral transition-colors'>Contact</Link>
              </li>
            </ul>
          </div>

          <div className='md:col-span-3'>
            <h3 className='text-xs uppercase tracking-widest text-ivory/40 mb-5'>
              Elsewhere
            </h3>
            <ul className='space-y-3'>
              <li>
                <Link href='#' className='text-ivory/80 hover:text-coral transition-colors'>Twitter / X</Link>
              </li>
              <li>
                <Link href='#' className='text-ivory/80 hover:text-coral transition-colors'>LinkedIn</Link>
              </li>
              <li>
                <Link href='#' className='text-ivory/80 hover:text-coral transition-colors'>GitHub</Link>
              </li>
              <li>
                <Link href='#' className='text-ivory/80 hover:text-coral transition-colors'>Read.cv</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10'>
          <Link href='/' className='flex items-center'>
            <Image
              src={getImgPath('/images/logo/logo-white.svg')}
              alt='Knarf Consults'
              width={140}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
              quality={100}
              unoptimized
            />
          </Link>
          <p className='text-sm text-ivory/40'>
            © {new Date().getFullYear()} Knarf Consults. Made with care.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
