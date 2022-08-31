//Types
import { ReactElement } from 'react';

//Constants
import { TEACHERS_INFO } from 'constants/data';

//Components
import TeacherCard from 'components/Home/ServiceOverview/TeacherCard/TeacherCard.component';

export default function TeachersShowcase(): ReactElement {
  return (
    <section className="section-container">
      <section className="section-content">
        <header className="section-header">
          <div className="bg-light-background text-light-background section-stripe" />
          <p className="section-title">
            Our experts <br className="block lg:hidden" /> teacher
          </p>
          <p className="section-description">
            Problems trying to resolve the conflict between{' '}
            <br className="hidden lg:block" /> the two major realms of Classical
            physics: Newtonian mechanics
          </p>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-y-12 w-full max-w-[1680px] pt-12 lg:pt-16">
          {TEACHERS_INFO.map((props) => (
            <TeacherCard key={props.image} {...props} />
          ))}
        </section>
      </section>
    </section>
  );
}
