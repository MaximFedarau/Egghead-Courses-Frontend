//Types
import { ReactElement } from 'react';

//Constants
import { HEADER_NAVIGATION_LABELS, HEADER_MOBILE_ICONS } from '@constants/data';

//Next Components
import Image from 'next/image';

//Components
import { HeaderButton } from '@components/Defaults/Button/Button.component';
import { HeaderLink } from '@components/Defaults/Text/Text.component';
import { HeaderImageButton } from '@components/Defaults/ImageButton/ImageButton.component';

export default function Header(): ReactElement {
  return (
    <header className="fixed top-0 z-20 flex items-center md:justify-center w-full h-24 px-1 bg-dark-background/[.85] backdrop-blur-2xl">
      <nav className="flex items-center justify-between w-full max-w-[1180px] pr-2">
        <section className="flex items-center justify-between w-[50vw] max-w-[500px]">
          <Image
            width="56px"
            height="56px"
            className="brightness-0 invert"
            alt="Smiling Egg Image"
            src="/egg.png"
          />
          <nav className="hidden md:flex md:justify-between gap-7">
            {HEADER_NAVIGATION_LABELS.map((item) => (
              <HeaderLink key={item}>{item}</HeaderLink>
            ))}
          </nav>
        </section>
        <section className="flex items-center gap-10">
          {HEADER_MOBILE_ICONS.map((item) => (
            <HeaderImageButton
              width="w-7"
              height="h-7"
              {...item}
              key={item.alt}
            />
          ))}
          <HeaderLink>Login</HeaderLink>
          <HeaderButton>JOIN US &#8594;</HeaderButton>
        </section>
      </nav>
    </header>
  );
}
