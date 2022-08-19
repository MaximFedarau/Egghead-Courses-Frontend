//Types
import { ReactElement } from 'react';

//Next
import NextImage from 'next/image';
import { IoChevronForwardOutline } from 'react-icons/io5';

export default function GeneralDescription(): ReactElement {
  return (
    <section className="flex justify-center w-screen my-4 lg:my-0 py-greetings bg-white">
      <section className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-12 lg:gap-0 w-full max-w-[1680px] px-[3vw]">
        <article className="flex flex-col justify-between items-center lg:items-stretch gap-4 lg:gap-0 lg:h-[296px] lg:mt-0 ">
          <div className="hidden lg:block w-full lg:w-24 mb-3 border-4 bg-danger text-danger" />
          <p className="max-w-[440px] lg:ml-1 font-montserrat font-bold text-center lg:text-left text-4xl text-dark-background uppercase select-none ">
            Packages that are aprodable
          </p>
          <p className="max-w-[352px] lg:ml-1 text-center lg:text-left text-sm text-secondary">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{' '}
          </p>
          <button className="flex flex-row items-center h-fit w-fit lg:ml-1 cursor-pointer select-none active:opacity-80">
            <p className="font-bold text-sm text-light-background">
              Learn more
            </p>
            <IoChevronForwardOutline className=" h-7 w-7 text-light-background" />
          </button>
        </article>
        <div className="max-w-[513px] max-h-[395px]">
          <NextImage src="/kids.png" width="513px" height="395px" alt="kids" />
        </div>
      </section>
    </section>
  );
}
