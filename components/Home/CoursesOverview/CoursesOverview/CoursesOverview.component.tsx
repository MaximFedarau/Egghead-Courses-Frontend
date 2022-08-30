//Types
import { ReactElement } from 'react';

//Components
import GeneralDescription from 'components/Home/CoursesOverview/GeneralDescription/GeneralDescription.component';
import CoursesCompilation from 'components/Home/CoursesOverview/CoursesCompilation/CoursesCompilation.component';

export default function CoursesOverview(): ReactElement {
  return (
    <>
      <GeneralDescription />
      <CoursesCompilation />
    </>
  );
}
