//Types
import { ReactElement } from 'react';
import { CONTENT_SIZES } from 'types/enum';

//Constants
import { HEADER_NAVIGATION_LABELS, HEADER_MOBILE_ICONS } from 'constants/data';

//Next Components
import NextImage from 'next/image';

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
  return (
    <header className="fixed top-0 z-20 flex items-center md:justify-center w-full h-24 px-1 bg-dark-background/[.85] backdrop-blur-2xl select-none">
      <nav className="flex items-center justify-between w-full min-w-[240px] max-w-[1180px] pr-1 md:pr-2">
        <section className="flex items-center justify-between w-[50vw] max-w-[500px]">
          {/* ? Wrap it in a div to make it look the same on very small width devices */}
          <div>
            <NextImage
              width="56px"
              height="56px"
              layout="fixed"
              className="brightness-0 invert"
              alt="Smiling Egg Image"
              src="/icons/egg.png"
            />
          </div>
          <nav className="hidden md:flex md:justify-between gap-7">
            {HEADER_NAVIGATION_LABELS.map((item) => (
              <a className="header-link" key={item}>
                {item}
              </a>
            ))}
          </nav>
        </section>
        <section className="flex items-center gap-10">
          {HEADER_MOBILE_ICONS.map(({ Icon, size }) => (
            <Icon
              className={`md:hidden block active:opacity-80 cursor-pointer ${ICON_STYLE[size].size}`}
              color="white"
              key={Icon.name}
            />
          ))}
          <a className="header-link">Login</a>
          <HeaderButton>JOIN US &#8594;</HeaderButton>
        </section>
      </nav>
    </header>
  );
}
