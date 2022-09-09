//Types
import { ReactElement } from 'react';
import { TeacherCardProps } from 'types/interface';

// Next JS
import NextImage from 'next/future/image';
import { useRouter } from 'next/router';

//Icons
import { IoStar, IoStarOutline } from 'react-icons/io5';

// ! Warning.
/* ! 1) We are using NextImage from 'next/future/image', because this component solves issue with border-radius: :hover and cursor: pointer are active
even outside of cropped image */
/* ! 2) This solution works only for Chrome and Firefox. Solution for Safari: https://stackoverflow.com/questions/57307248/image-with-border-radius-and-hover-bug-in-safari */

export default function TeacherCard({
  image,
  path,
}: TeacherCardProps): ReactElement {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(path);
  };

  return (
    <article className="flex flex-col gap-4 items-center">
      <NextImage
        width={240}
        height={240}
        className="rounded-full cursor-pointer overflow-hidden select-none shadow-2xl hover:animate-smooth-translate hover:-translate-y-1 active:opacity-80"
        src={image}
        alt="Teacher"
        placeholder="blur"
        blurDataURL="/images/reusables/placeholder-small.png"
        onClick={onClickHandler}
      />
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
