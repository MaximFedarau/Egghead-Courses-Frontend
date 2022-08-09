//Types
import { ReactElement } from 'react';

//Next Components
import Head from 'next/head';

//Components
import MainInfo from '../MainInfo/MainInfo.component';

export default function Greetings(): ReactElement {
  return (
    <>
      <Head>
        <title>EggHead Courses</title>
      </Head>
      <section className="mt-20">
        <MainInfo />
      </section>
    </>
  );
}
