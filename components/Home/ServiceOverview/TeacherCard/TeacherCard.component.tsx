//Types
import { ReactElement } from 'react';
import { TeacherCardProps } from 'types/interface';

// Next Components
import NextImage from 'next/image';

//Icons
import { IoStar, IoStarOutline } from 'react-icons/io5';

export default function TeacherCard({ image }: TeacherCardProps): ReactElement {
  return (
    <article className="flex flex-col gap-4 items-center">
      <div className="w-[256px] h-[256px] rounded-full shadow-2xl">
        <NextImage
          width="256px"
          height="256px"
          className="rounded-full cursor-pointer select-none active:opacity-90"
          src={image}
        />
      </div>
      <p className="text-center tracking-wide section-description">
        Slate helps you see how many more days <br /> you need to work to reach
        your financial <br /> goal for the month and year.
      </p>
      <section className="flex flex-row gap-2 select-none">
        {Array(4)
          .fill(IoStar)
          .map((Icon, index) => (
            <Icon key={index} className="text-panel-star" /> // using index as key, because 1) all items are the same 2) we do not change anything
          ))}
        <IoStarOutline className="text-panel-star" />
      </section>
      <section className="flex flex-col items-center gap-1 select-none">
        <p className="font-montserrat font-bold text-base text-dark-background">
          Regina Miles
        </p>
        <p className="font-montserrat text-sm text-secondary">Designer</p>
      </section>
    </article>
  );
}
