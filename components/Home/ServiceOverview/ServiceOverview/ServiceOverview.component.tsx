//Types
import { ReactElement } from 'react';

//Components
import TeachersShowcase from 'components/Home/ServiceOverview/TeachersShowcase/TeachersShowcase.component';
import NewsSubscription from 'components/Home/ServiceOverview/NewsSubscription/NewsSubscription.component';

export default function ServiceOverview(): ReactElement {
  return (
    <article className="mb-4 lg:mb-0">
      <TeachersShowcase />
      <NewsSubscription />
    </article>
  );
}
