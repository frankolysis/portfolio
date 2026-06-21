'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'

const PortfolioCard = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3500,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1320, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <div className='dark:bg-darkmode'>
      <div className='lg:px-6 m-auto px-2 max-w-[1600px]'>
        <Slider {...settings}>
          {portfolioinfo.map((item, index) => (
            <Link key={index} href={`/portfolio/${item.slug}`} passHref>
              <div
                className={`px-3 group ${index % 2 !== 0 ? 'lg:mt-16 ' : ''}`}>
                <div className='relative overflow-hidden rounded-2xl bg-cream dark:bg-darklight border border-border dark:border-dark_border aspect-[4/5]'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={1000}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className='transition-transform duration-700 group-hover:scale-105'
                  />
                </div>
                <div className='pt-6 pb-2'>
                  <h4 className='font-display text-xl text-slate_ink dark:text-white tracking-tight group-hover:text-coral transition-colors'>
                    {item.title}
                  </h4>
                  <p className='text-sm text-grey dark:text-white/50 mt-1'>
                    {item.info}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PortfolioCard
