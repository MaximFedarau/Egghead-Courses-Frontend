//Types
import { ReactElement } from 'react';
import { STYLE_TYPES } from '@app-types/enum';

//Components
import { GreetingsButton } from '@components/Defaults/Button/Button.component';

export default function MainInfo(): ReactElement {
  return (
    <section className="flex flex-col justify-center items-center pt-greetings lg:py-greetings">
      <p className="max-w-[602px] px-2 font-bold text-white text-center text-7xl leading-[80px] select-none">
        Selling on the internet like a pro
      </p>
      <p className="max-w-[536px] my-9 px-2 text-white text-center text-xl leading-8">
        We know how large objects will act, but things on a small scale just do
        not act that way.
      </p>
      <section className="flex flex-col md:flex-row gap-4 md:gap-6">
        <GreetingsButton>Get Quote Now</GreetingsButton>
        <GreetingsButton type={STYLE_TYPES.OUTLINED}>
          Learn More
        </GreetingsButton>
      </section>
    </section>
  );
}
