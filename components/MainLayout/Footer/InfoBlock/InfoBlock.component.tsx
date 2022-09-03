//Types
import { ReactElement } from 'react';
import { InfoBlockProps } from 'types/interface';

// Next JS
import NextLink from 'next/link';

export default function InfoBlock({
  title,
  linksArray,
}: InfoBlockProps): ReactElement {
  return (
    <article className="flex flex-col items-center lg:items-stretch gap-2">
      <header className="footer-title mb-2">{title}</header>
      {linksArray.map(({ text, path }) => (
        <NextLink href={path} key={text}>
          <a className="footer-link">{text}</a>
        </NextLink>
      ))}
    </article>
  );
}
