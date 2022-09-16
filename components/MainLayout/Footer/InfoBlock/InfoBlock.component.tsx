//Types
import React, { ReactElement } from 'react';
import { InfoBlockProps } from 'types/interface';

// Next JS
import NextLink from 'next/link';

// Icons
import { IoChevronDown } from 'react-icons/io5';

export default function InfoBlock({
  title,
  linksArray,
}: InfoBlockProps): ReactElement {
  const [areLinksVisible, setAreLinksVisible] = React.useState(false);

  function toggleLinksVisibility() {
    setAreLinksVisible(!areLinksVisible);
  }

  return (
    <article className="flex flex-col items-center lg:items-stretch gap-2">
      <header
        className={`footer-title flex flex-row items-center lg:items-stretch gap-2 ${
          areLinksVisible ? 'mb-2' : null
        } lg:mb-2`}
      >
        <a>{title}</a>
        <IoChevronDown
          onClick={toggleLinksVisibility}
          className={`block lg:hidden text-white transition-transform duration-300 cursor-pointer ${
            areLinksVisible ? 'rotate-180 ' : null
          }`}
        />
      </header>
      {linksArray.map(({ text, path }) => (
        <NextLink href={path} key={text}>
          <a
            className={`footer-link ${
              areLinksVisible ? 'block' : 'hidden'
            } lg:block animate-smooth-scaling lg:animate-none`}
          >
            {text}
          </a>
        </NextLink>
      ))}
    </article>
  );
}
