//Types
import React, { ReactElement } from 'react';

//Components
import EmailField from 'components/Defaults/EmailField/EmailField.component';
import { NewsSubscriptionButton } from 'components/Defaults/Button/Button.component';

export default function NewsSubscription(): ReactElement {
  const [email, setEmail] = React.useState<string>('');

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setEmail('');
  };

  return (
    <section className="section-container">
      <section className="section-content items-center">
        <header className="section-header items-center m-0">
          <div className="bg-light-background text-light-background section-stripe" />
          <p className="section-title">Featured Products</p>
          <p className="section-description text-center">
            Problems trying to resolve the conflict between{' '}
            <br className="hidden lg:block" /> the two major realms of Classical
            physics: Newtonian mechanics
          </p>
        </header>
        <section className="w-full pt-12 lg:pt-16">
          <form
            className="flex flex-row justify-center px-2"
            onSubmit={onSubmitHandler}
          >
            <EmailField
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <NewsSubscriptionButton>Subscribe</NewsSubscriptionButton>
          </form>
        </section>
      </section>
    </section>
  );
}
