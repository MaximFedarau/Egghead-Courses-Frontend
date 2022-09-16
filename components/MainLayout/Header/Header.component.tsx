//Types
import { ReactElement } from 'react';
import { CONTENT_SIZES } from 'types/enum';

//Constants
import { HEADER_NAVIGATION_LABELS, HEADER_MOBILE_ICONS } from 'constants/data';

//Next JS
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

//Components
import { HeaderButton } from 'components/Defaults/Button/Button.component';

//Styles depending on the size
const ICON_STYLE = {
  [CONTENT_SIZES.MEDIUM]: {
    size: 'w-8 h-8',
  },
  [CONTENT_SIZES.LARGE]: {
    size: 'w-11 h-11',
  },
};

export default function Header(): ReactElement {
  const router = useRouter();

  const onNavigateHome = () => {
    router.push('/');
  };

  return (
    <header className="fixed top-0 z-20 flex items-center md:justify-center w-full h-24 px-1 bg-dark-background/[.85] backdrop-blur-2xl select-none">
      {/* * LITM - If we remove min-w-[240px], then content will start to stick together on devices with VERY small width (about 60px-70px). 
      Now, only part of header content will be available. */}
      <nav className="flex items-center justify-between w-full min-w-[240px] max-w-[1180px] pr-1 md:pr-2">
        <section className="flex items-center justify-between w-[50vw] max-w-[500px]">
          {/* * LITM - Wrap it in a div to make it look the same on very small width devices */}
          <div>
            <NextImage
              src="/icons/egg.png"
              alt="Smiling Egg Image"
              width="56px"
              height="56px"
              className="invert cursor-pointer active:opacity-80"
              onClick={onNavigateHome}
              layout="fixed"
              priority // * LITM - This will make sure that image will be loaded before the rest of the page
            />
          </div>
          <nav className="hidden md:flex md:justify-between gap-7">
            {HEADER_NAVIGATION_LABELS.map(({ name, path }) => (
              <NextLink href={path} key={name}>
                <a className="header-link">{name}</a>
              </NextLink>
            ))}
          </nav>
        </section>
        <section className="flex items-center gap-10">
          {HEADER_MOBILE_ICONS.map(({ Icon, size }) => (
            <Icon
              className={`md:hidden block cursor-pointer active:opacity-80 ${ICON_STYLE[size].size}`}
              color="white"
              key={Icon.name}
            />
          ))}
          <NextLink href="/">
            <a className="header-link">Login</a>
          </NextLink>
          <HeaderButton onClick={onNavigateHome}>JOIN US &#8594;</HeaderButton>
        </section>
      </nav>
    </header>
  );
}
