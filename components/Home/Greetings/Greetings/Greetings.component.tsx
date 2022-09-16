//Types
import { ReactElement } from 'react';

//Components
import MainInfo from 'components/Home/Greetings/MainInfo/MainInfo.component';
import AdditionalInfo from 'components/Home/Greetings/AdditionalInfo/AdditionalInfo.component';

export default function Greetings(): ReactElement {
  return (
    <article className="flex flex-col gap-12 lg:gap-0 pt-20 bg-dark-background">
      <MainInfo />
      <AdditionalInfo />
    </article>
  );
}
