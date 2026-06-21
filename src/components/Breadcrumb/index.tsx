import React, { FC } from 'react'
import Link from 'next/link'

interface BreadcrumbProps {
  links: { href: string; text: string }[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
  const lastIndex = links.length - 1
  return (
    <nav className='flex items-center justify-center flex-wrap gap-2 text-xs uppercase tracking-widest text-grey dark:text-white/40'>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {index !== lastIndex ? (
            <>
              <Link
                href={link.href}
                className='font-medium hover:text-coral transition-colors'>
                {link.text}
              </Link>
              <span className='text-grey/40 dark:text-white/20'>/</span>
            </>
          ) : (
            <span className='font-medium text-coral'>{link.text}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumb
