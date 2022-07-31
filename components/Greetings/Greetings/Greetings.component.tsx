//Types
import { ReactElement } from 'react';

//Next Components
import Head from 'next/head';

//Components
import Header from '@components/Greetings/Header/Header.component';

export default function Greetings(): ReactElement {
  return (
    <>
      <Head>
        <title>EggHead Courses</title>
      </Head>
      <div className="bg-light-background">
        <Header />
        <h1 className="text-white text-center text-xl">Hello</h1>
        <h1 className="text-white text-center text-xl">Hello</h1>
        <h1 className="text-white text-center text-xl">Hello</h1>
        <h1 className="text-white text-center text-xl">Hello</h1>
        <h1 className="text-white text-center text-xl">Hello</h1>
        <h1 className="text-white text-center text-xl">Hello</h1>
        <h1 className="text-white text-center text-xl">Hello</h1>
        <h1 className="text-white text-center text-xl">Hello</h1>
        <h1 className="text-white text-center text-xl">Hello</h1>
      </div>
    </>
  );
}
