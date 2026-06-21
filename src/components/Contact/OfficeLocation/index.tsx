import React from 'react'
import Link from 'next/link'

const Location = () => {
  const offices = [
    {
      city: 'New York',
      address: '4292 Mapleview Drive, Greenfield 38230',
      email: 'newyork@knarfconsults.com',
      phone: '731-621-5503',
    },
    {
      city: 'Lagos',
      address: '3502 Marcus Street, Geraldine 35974',
      email: 'lagos@knarfconsults.com',
      phone: '731-235-7993',
    },
  ]

  return (
    <section className='bg-slate_ink py-24 md:py-32'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='max-w-3xl mb-16'>
          <span className='text-xs uppercase tracking-widest text-coral font-medium'>
            Where I work
          </span>
          <h2 className='font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ivory mt-4'>
            Two cities, one practice.
          </h2>
        </div>
        <div className='grid md:grid-cols-2 gap-px bg-dark_border rounded-3xl overflow-hidden border border-dark_border'>
          {offices.map((o) => (
            <div key={o.city} className='bg-slate_ink p-10 md:p-12'>
              <h3 className='font-display text-3xl md:text-4xl text-ivory tracking-tight mb-6'>
                {o.city}
              </h3>
              <p className='text-ivory/60 leading-relaxed mb-8 max-w-xs'>
                {o.address}
              </p>
              <div className='space-y-3 pt-6 border-t border-dark_border'>
                <Link
                  href={`mailto:${o.email}`}
                  className='flex items-baseline gap-3 text-ivory/80 hover:text-coral transition-colors'>
                  <span className='text-xs uppercase tracking-widest text-ivory/40 w-16 shrink-0'>
                    Email
                  </span>
                  <span>{o.email}</span>
                </Link>
                <Link
                  href={`tel:${o.phone}`}
                  className='flex items-baseline gap-3 text-ivory/80 hover:text-coral transition-colors'>
                  <span className='text-xs uppercase tracking-widest text-ivory/40 w-16 shrink-0'>
                    Phone
                  </span>
                  <span>{o.phone}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Location
