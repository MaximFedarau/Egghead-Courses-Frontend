//Types
import { ReactElement } from 'react';

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
      </section>
    </section>
  );
}
