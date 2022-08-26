//Types
import { ReactElement } from 'react';

//Next
import NextImage from 'next/image';

//Components
import LearnMoreButton from '@components/Home/CoursesOverview/LearnMoreButton/LearnMoreButton.component';

export default function GeneralDescription(): ReactElement {
  return (
    <section className="flex justify-center w-screen my-4 lg:my-0 py-greetings bg-white">
      <section className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-12 lg:gap-0 w-full max-w-[1680px] px-[3vw]">
        <article className="flex flex-col justify-between items-center lg:items-stretch self-center gap-4 lg:gap-0 lg:h-[296px] [&>:not(:first-child)]:lg:ml-1">
          <div className="bg-danger text-danger section-stripe" />
          <p className="max-w-[440px] section-title">
            Packages that are aprodable
          </p>
          <p className="section-description">
            Problems trying to resolve the conflict between{' '}
            <br className="hidden lg:block" /> the two major realms of Classical
            physics: <br className="hidden lg:block" /> Newtonian mechanics{' '}
          </p>
          <LearnMoreButton />
        </article>
        <article className="w-fit h-fit">
          <NextImage src="/kids.png" width="513px" height="395px" alt="Kids" />
        </article>
      </section>
    </section>
  );
}
