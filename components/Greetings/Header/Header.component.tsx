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
    <header className="fixed top-0 flex items-center md:justify-center bg-dark-background w-full h-24 px-1">
      <nav className="flex w-full max-w-[1180px] items-center justify-between pr-2">
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
        <section className="flex gap-10 items-center">
          {HEADER_MOBILE_ICONS.map((item) => (
            <HeaderImageButton size="28px" {...item} key={item.alt} />
          ))}
          <HeaderLink>Login</HeaderLink>
          <HeaderButton>JOIN US &#8594;</HeaderButton>
        </section>
      </nav>
    </header>
  );
}
