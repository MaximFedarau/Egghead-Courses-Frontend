//Types
import { ReactElement } from 'react';

//Next Components
import Head from 'next/head';

//Components
import MainInfo from '@components/Greetings/MainInfo/MainInfo.component';
import AdditionalInfo from '@components/Greetings/AdditionalInfo/AdditionalInfo.component';

export default function Greetings(): ReactElement {
  return (
    <>
      <Head>
        <title>EggHead Courses</title>
      </Head>
      <section className="mt-20 bg-dark-background">
        <MainInfo />
        <AdditionalInfo />
      </section>
    </>
  );
}
