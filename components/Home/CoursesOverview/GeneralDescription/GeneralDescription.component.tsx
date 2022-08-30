//Types
import { ReactElement } from 'react';

//Next
import NextImage from 'next/image';

//Components
import LearnMoreButton from '@components/Home/CoursesOverview/LearnMoreButton/LearnMoreButton.component';

export default function GeneralDescription(): ReactElement {
  return (
    <section className="my-4 lg:my-0 section-container">
      <section className="lg:flex-row justify-between items-center lg:items-stretch gap-12 lg:gap-0 section-content">
        <header className="self-center lg:gap-0 lg:h-[296px] section-header">
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
        </header>
        <article className="w-fit h-fit">
          <NextImage
            src="/images/courses-overview/description/kids.png"
            width="513px"
            height="395px"
            alt="Kids"
            placeholder="blur"
            blurDataURL="/images/reusables/placeholder-large.png"
          />
        </article>
      </section>
    </section>
  );
}
