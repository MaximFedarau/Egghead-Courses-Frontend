//Types
import type { NextPage } from 'next';

//Next JS
import Head from 'next/head';

//Components
import Greetings from 'components/Home/Greetings/Greetings/Greetings.component';
import CoursesOverview from 'components/Home/CoursesOverview/CoursesOverview/CoursesOverview.component';
import ServiceOverview from 'components/Home/ServiceOverview/ServiceOverview/ServiceOverview.component';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>EggHead Courses</title>
      </Head>
      <main className="min-h-screen">
        <Greetings />
        <section>
          <CoursesOverview />
          <ServiceOverview />
        </section>
      </main>
    </>
  );
};

export default HomePage;
