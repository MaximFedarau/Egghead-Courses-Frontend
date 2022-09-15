//Types
import type { NextPage } from 'next';

//Next JS
import Head from 'next/head';

const Page404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div className="flex flex-col justify-center items-center gap-10 min-h-screen pt-20 bg-dark-background">
        {/* LITM - we use default <img/>, because 1) I want some custom and easy-maintained sizes 2) I don't need any optimizations, like lazy loading and etc. */}
        <img
          src="/icons/fried-egg.png"
          className="w-[20vw] h-[20vw] min-w-[200px] max-w-[320px] min-h-[200px] max-h-[320px] invert select-none"
        />
      </div>
    </>
  );
};

export default Page404;
