//Types
import { ReactElement } from 'react';

//Constants
import { INFO_BLOCKS_INFO, FOOTER_ICONS } from 'constants/data';

// Next JS
import NextLink from 'next/link';

//Components
import InfoBlock from 'components/MainLayout/Footer/InfoBlock/InfoBlock.component';

export default function Footer(): ReactElement {
  return (
    <>
      <footer className="flex justify-center items-center w-full h-full bg-dark-background py-10 lg:py-20">
        {/* LITM - Overwriting default elements-grid (global class) behaviour. */}
        <section className="elements-grid grid-cols-1 lg:grid-cols-4 gap-y-10 max-w-[1180px] pt-0">
          <article className="flex flex-col items-center lg:items-stretch gap-4 lg:gap-6">
            <header className="footer-title">Get in touch</header>
            <p className="font-montserrat text-white text-center lg:text-left text-sm tracking-wider">
              the quick fox jumps over the <br /> lazy dog
            </p>
            <section className="flex flex-row gap-5">
              {FOOTER_ICONS.map(({ Icon, path }) => (
                <NextLink key={Icon.name} href={path}>
                  <a target="_blank">
                    <Icon
                      size={24}
                      className="text-light-background cursor-pointer select-none active:opacity-80"
                    />
                  </a>
                </NextLink>
              ))}
            </section>
          </article>
          {INFO_BLOCKS_INFO.map((props) => (
            <InfoBlock key={props.title} {...props} />
          ))}
        </section>
      </footer>
      <a className="flex justify-center items-center h-16 p-2 font-montserrat font-bold text-sm text-center text-secondary capitalize tracking-widest select-none">
        Design Made With Love By Figmaland All Right Reserved{' '}
      </a>
    </>
  );
}
