import React from 'react'
import Link from 'next/link'

const ContactInfo = () => {
  return (
    <section className='bg-ivory dark:bg-darkmode py-20 md:py-24'>
      <div className='container mx-auto max-w-6xl px-6'>
        <div className='grid md:grid-cols-2 gap-px bg-border dark:bg-dark_border rounded-3xl overflow-hidden border border-border dark:border-dark_border'>
          <div className='bg-cream dark:bg-darklight p-10 md:p-12 group'>
            <div className='w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center mb-6'>
              <span className='text-coral text-xl'>✉</span>
            </div>
            <h3 className='font-display text-2xl md:text-3xl text-slate_ink dark:text-white tracking-tight mb-3'>
              Email me
            </h3>
            <p className='text-grey dark:text-white/60 leading-relaxed mb-6'>
              Drop a note about your project — I read everything and reply
              within a day or two.
            </p>
            <Link
              href='mailto:hello@knarfconsults.com'
              className='inline-flex items-center gap-2 text-coral font-medium group-hover:gap-3 transition-all'>
              Leave a message
              <span>→</span>
            </Link>
          </div>
          <div className='bg-cream dark:bg-darklight p-10 md:p-12 group'>
            <div className='w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center mb-6'>
              <span className='text-coral text-xl'>◎</span>
            </div>
            <h3 className='font-display text-2xl md:text-3xl text-slate_ink dark:text-white tracking-tight mb-3'>
              Work together
            </h3>
            <p className='text-grey dark:text-white/60 leading-relaxed mb-6'>
              Looking for an engineering partner, a fractional CTO, or a careful
              build for a specific brief? Let's talk.
            </p>
            <Link
              href='#'
              className='inline-flex items-center gap-2 text-coral font-medium group-hover:gap-3 transition-all'>
              Start a project
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className='mt-12 rounded-3xl overflow-hidden border border-border dark:border-dark_border'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938779.7831767448!2d71.05098621661072!3d23.20271516446136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82dd003ff749%3A0x359e803f537cea25!2sGANESH%20GLORY%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1715676641521!5m2!1sen!2sin'
            height='400'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full grayscale-[0.4]'
          />
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
