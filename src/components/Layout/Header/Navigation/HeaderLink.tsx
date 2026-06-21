"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname()
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={item.href} className={`text-sm flex items-center gap-1 py-2 font-medium transition-colors text-slate_ink/80 dark:text-white/80 hover:text-coral dark:hover:text-coral ${path === item.href ? 'text-coral! dark:text-coral!' : ''} ${path.startsWith("/blog") && item.href==="/blog"?"text-coral! dark:text-coral!":""} ${path.startsWith("/portfolio") && item.href==="/portfolio"?"text-coral! dark:text-coral!":""}`}>
        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div
          className={`absolute py-2 left-0 mt-0.5 top-8 w-60 bg-ivory dark:bg-darklight border border-border dark:border-dark_border rounded-2xl shadow-sm`}
          data-aos="fade-up"
          data-aos-duration="400"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block mx-2 px-3 py-2 rounded-lg text-sm ${
                path === subItem.href
                  ? "bg-coral text-white"
                  : "text-slate_ink/80 hover:bg-cream dark:hover:bg-darkmode dark:text-white/80"
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
