//Types
import { ReactElement } from 'react';

//Next JS
import NextImage from 'next/image';
import { useRouter } from 'next/router';

//Components
import LearnMoreButton from 'components/Home/CoursesOverview/LearnMoreButton/LearnMoreButton.component';

export default function GeneralDescription(): ReactElement {
  const router = useRouter();

  const onNavigateHome = () => {
    router.push('/');
  };

  return (
    <section className="section-container">
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
          <LearnMoreButton onClick={onNavigateHome} />
        </header>
        <article className="w-fit h-fit">
          <NextImage
            src="/images/courses-overview/description/kids.png"
            alt="Kids"
            width="513px"
            height="395px"
            blurDataURL="/images/reusables/placeholder-large.png"
            placeholder="blur"
          />
        </article>
      </section>
    </section>
  );
}
