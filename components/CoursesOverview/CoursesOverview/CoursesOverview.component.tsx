//Types
import { ReactElement } from 'react';

//Next
import NextImage from 'next/image';
import { IoChevronForwardOutline } from 'react-icons/io5';

export default function CoursesOverview(): ReactElement {
  return (
    <section className="flex my-4 lg:my-0 py-greetings w-screen justify-center bg-white">
      <section className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between items-center lg:items-stretch w-full max-w-[1680px] px-[2vw]">
        <article className="h-[270px] lg:h-[296px] mt-greetings lg:mt-0 justify-between flex flex-col items-center lg:items-stretch lg:self-center order-2 lg:order-1 ">
          <div className="border-4 w-full lg:w-24 text-danger bg-danger" />
          <p className="lg:ml-1 uppercase text-center lg:text-left max-w-[440px] font-montserrat font-bold text-4xl text-dark-background select-none ">
            Packages that are aprodable
          </p>
          <p className="lg:ml-1 max-w-[352px] text-center lg:text-left text-secondary text-sm">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{' '}
          </p>
          <button className="lg:ml-1 flex flex-row items-center h-fit w-fit cursor-pointer select-none active:opacity-80">
            <p className="text-sm text-light-background font-bold">
              Learn more
            </p>
            <IoChevronForwardOutline className="text-light-background h-7 w-7" />
          </button>
        </article>
        <div className="max-w-[513px] max-h-[395px] order-1 lg:order-2">
          <NextImage src="/kids.png" width="513px" height="395px" alt="kids" />
        </div>
      </section>
    </section>
  );
}
