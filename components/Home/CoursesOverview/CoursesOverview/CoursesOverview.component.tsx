//Types
import { ReactElement } from 'react';

//Components
import GeneralDescription from '../GeneralDescription/GeneralDescription.component';
import CoursesCompilation from '../CoursesCompilation/CoursesCompilation.component';

export default function CoursesOverview(): ReactElement {
  return (
    <>
      <GeneralDescription />
      <CoursesCompilation />
    </>
  );
}
