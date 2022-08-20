//Types
import { ReactElement } from 'react';

//Constants
import { COURSES_OVERVIEW_PANELS } from '@constants/data';

//Components
import Panel from '@components/Home/CoursesOverview/Panel/Panel.component';

export default function CoursesCompilation(): ReactElement {
  return (
    <section className="flex justify-center w-screen py-greetings bg-white">
      <section className="flex flex-col w-full max-w-[1680px] px-[3vw]">
        <article className="flex flex-col justify-between items-center lg:items-stretch gap-4">
          <div className="hidden lg:block w-full lg:w-24 mb-3 border-4 bg-light-background text-light-background" />
          <p className="lg:ml-1 font-montserrat font-bold text-center lg:text-left text-4xl text-dark-background uppercase select-none ">
            Make online <br className="block lg:hidden" /> education accessible
          </p>
          <p className="max-w-[352px] lg:max-w-none lg:ml-1 text-center lg:text-left text-sm text-secondary">
            Problems trying to resolve the conflict between{' '}
            <br className="hidden lg:block" /> the two major realms of Classical
            physics: Newtonian mechanics
          </p>
        </article>
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-8 lg:gap-2 w-full max-w-[1680px] py-16 xl:py-32">
          {COURSES_OVERVIEW_PANELS.map((props) => (
            <Panel key={props.image} {...props} />
          ))}
        </section>
      </section>
    </section>
  );
}
