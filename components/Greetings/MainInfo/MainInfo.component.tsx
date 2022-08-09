//Types
import { ReactElement } from 'react';
import { BUTTON_TYPES } from '@app-types/enum';

//Components
import { GreetingsButton } from '@components/Defaults/Button/Button.component';

export default function MainInfo(): ReactElement {
  return (
    <section className="flex flex-col pt-[12%] pb-[12%] justify-center items-center bg-dark-background">
      <p className="text-white font-bold text-center max-w-[602px] text-7xl leading-[80px] px-2">
        Selling on the internet like a pro
      </p>
      <p className="text-white text-center max-w-[536px] text-xl leading-[32px] px-2 my-[40px]">
        We know how large objects will act, but things on a small scale just do
        not act that way.
      </p>
      <section className="flex flex-col md:flex-row gap-4 md:gap-6">
        <GreetingsButton>Get Quote Now</GreetingsButton>
        <GreetingsButton type={BUTTON_TYPES.OUTLINED}>
          Learn More
        </GreetingsButton>
      </section>
    </section>
  );
}
