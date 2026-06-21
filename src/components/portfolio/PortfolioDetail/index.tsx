import React from 'react'

const PortfolioDetail = () => {
  return (
    <section className='bg-ivory dark:bg-darkmode py-20 md:py-28'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='grid md:grid-cols-12 gap-12 md:gap-16'>
          <div className='md:col-span-8 space-y-12'>
            <p className='font-display text-2xl md:text-3xl leading-snug text-slate_ink dark:text-white'>
              A dedicated team of product managers, engineers, and designers
              helping founders ship considered software — from early concept
              to launch and beyond.
            </p>
            <div className='grid sm:grid-cols-2 gap-10'>
              <div>
                <h3 className='text-xs uppercase tracking-widest text-coral font-medium mb-3'>
                  The brief
                </h3>
                <p className='text-grey dark:text-white/60 leading-relaxed'>
                  Popularised in the 1960s with the release of Letraset sheets,
                  more recently with desktop publishing software like Aldus
                  PageMaker.
                </p>
              </div>
              <div>
                <h3 className='text-xs uppercase tracking-widest text-coral font-medium mb-3'>
                  The approach
                </h3>
                <p className='text-grey dark:text-white/60 leading-relaxed'>
                  Lorem ipsum as their default model text — search uncovers
                  many sites still in their infancy as versions evolve.
                </p>
              </div>
            </div>
          </div>
          <aside className='md:col-span-4 bg-cream dark:bg-darklight border border-border dark:border-dark_border rounded-3xl p-8 md:p-10 h-fit md:sticky md:top-28'>
            <h3 className='font-display text-2xl text-slate_ink dark:text-white tracking-tight mb-6'>
              Services
            </h3>
            <ul className='space-y-4'>
              {['Brand strategy', 'Communications', 'Visual identity', 'Brand support', 'Web design'].map((s) => (
                <li
                  key={s}
                  className='flex items-center justify-between text-slate_ink dark:text-white/80 pb-4 border-b border-border dark:border-dark_border last:border-0 last:pb-0'>
                  <span>{s}</span>
                  <span className='text-coral'>→</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default PortfolioDetail
