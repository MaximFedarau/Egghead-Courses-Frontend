//Types
import { ReactElement } from 'react';

//Constants
import { COURSES_OVERVIEW_PANELS } from '@constants/data';

//Components
import Panel from '@components/Home/CoursesOverview/Panel/Panel/Panel.component';

export default function CoursesCompilation(): ReactElement {
  return (
    <section className="flex justify-center w-screen py-greetings bg-white">
      <section className="flex flex-col w-full max-w-[1680px] px-[3vw] ">
        <article className="flex flex-col justify-between items-center lg:items-stretch gap-4 [&>:not(:first-child)]:lg:ml-1">
          <div className="bg-light-background text-light-background section-stripe" />
          <p className="section-title">
            Make online <br className="block lg:hidden" /> education accessible
          </p>
          <p className="section-description">
            Problems trying to resolve the conflict between{' '}
            <br className="hidden lg:block" /> the two major realms of Classical
            physics: Newtonian mechanics
          </p>
        </article>
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-8 w-full max-w-[1680px] pt-12 lg:pt-16">
          {COURSES_OVERVIEW_PANELS.map((props) => (
            <Panel key={props.image} {...props} />
          ))}
        </section>
      </section>
    </section>
  );
}
