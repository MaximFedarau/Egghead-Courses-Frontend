//Types
import type { NextPage } from 'next';

//Next JS
import Head from 'next/head';
import NextImage from 'next/future/image';

const Page404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div className="flex flex-col justify-center items-center gap-10 min-h-screen pt-20 bg-dark-background">
        {/* LITM - we use next/future/image, because I want some custom and easy-maintained sizes using className prop */}
        <NextImage
          src="/icons/fried-egg-404.png"
          alt="Fried Egg"
          width={320}
          height={320}
          className="w-[50vw] h-[50vw] min-w-[240px] max-w-[320px] min-h-[240px] max-h-[320px] invert select-none"
          priority
        />
      </div>
    </>
  );
};

export default Page404;
