//Types
import { ReactElement } from 'react';

//Constants
import { COURSES_OVERVIEW_PANELS } from 'constants/data';

//Components
import Panel from 'components/Home/CoursesOverview/Panel/Panel/Panel.component';

export default function CoursesCompilation(): ReactElement {
  return (
    <section className="section-container">
      <section className="section-content">
        <header className="section-header">
          <div className="bg-light-background text-light-background section-stripe" />
          <p className="section-title">
            Make online <br className="block lg:hidden" /> education accessible
          </p>
          <p className="section-description">
            Problems trying to resolve the conflict between{' '}
            <br className="hidden lg:block" /> the two major realms of Classical
            physics: Newtonian mechanics
          </p>
        </header>
        <section className="xl:grid-cols-4 gap-y-8 elements-grid">
          {COURSES_OVERVIEW_PANELS.map((props) => (
            <Panel key={props.image} {...props} />
          ))}
        </section>
      </section>
    </section>
  );
}
