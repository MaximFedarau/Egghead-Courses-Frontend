//Types
import { ReactElement } from 'react';

//Components
import Greetings from '@components/Greetings/Greetings/Greetings.component';
import CoursesOverview from '@components/CoursesOverview/CoursesOverview/CoursesOverview.component';

export default function Home(): ReactElement {
  return (
    <div className="min-h-screen">
      <Greetings />
      <CoursesOverview />
    </div>
  );
}
