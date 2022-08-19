//Types
import { ReactElement } from 'react';

//Components
import MainInfo from '@components/Home/Greetings/MainInfo/MainInfo.component';
import AdditionalInfo from '@components/Home/Greetings/AdditionalInfo/AdditionalInfo.component';

export default function Greetings(): ReactElement {
  return (
    <section className="pt-20 bg-dark-background">
      <MainInfo />
      <AdditionalInfo />
    </section>
  );
}
