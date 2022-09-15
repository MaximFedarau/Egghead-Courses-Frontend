//Types
import React, { ReactElement } from 'react';
import { PanelProps } from 'types/interface';
import { STYLE_TYPES } from 'types/enum';

//Constants
import { PANEL_ICONS, PANEL_CURRICULUM_INFO } from 'constants/data';

//Next JS
import NextImage from 'next/image';
import { useRouter } from 'next/router';

//Components
import PanelIcon from 'components/Home/CoursesOverview/Panel/PanelIcon/PanelIcon.component';
import CurriculumItem from 'components/Home/CoursesOverview/Panel/CurriculumItem/CurriculumItem.component';
import LearnMoreButton from 'components/Home/CoursesOverview/LearnMoreButton/LearnMoreButton.component';

//Icons
import { IoStar, IoDownload } from 'react-icons/io5';

export default function Panel({ image, path }: PanelProps): ReactElement {
  const [showActions, setShowActions] = React.useState(false);

  const router = useRouter();

  const onClickHandler = () => {
    router.push(path);
  };

  return (
    <article className="flex flex-col max-w-[296px]">
      <section
        className="relative w-[296px] h-[364px] rounded-md cursor-pointer select-none"
        onMouseOver={() => {
          setShowActions(true);
        }}
        onMouseLeave={() => {
          setShowActions(false);
        }}
      >
        <section className="absolute top-5 left-5 z-10 flex justify-center items-center w-[3.2rem] h-6 rounded-md bg-danger font-montserrat font-bold text-sm text-white select-none">
          Sale
        </section>
        <NextImage
          src={image}
          width="296px"
          height="364px"
          className="rounded-md"
          alt="Course Image"
          placeholder="blur"
          blurDataURL="/images/reusables/placeholder-medium.png"
        />
        {showActions && (
          <section className="absolute bottom-[10%] z-10 flex justify-center items-center gap-3 w-full">
            {PANEL_ICONS.map((props) => (
              <PanelIcon key={props.type} {...props} />
            ))}
          </section>
        )}
      </section>
      <section className="flex flex-col justify-between gap-4 p-[10%]">
        <header className="flex flex-row justify-between items-center">
          <p className="font-montserrat font-bold text-sm text-light-background">
            English
          </p>
          <section className="flex flex-row justify-center items-center gap-1 w-12 h-7 rounded-3xl bg-dark-background">
            <IoStar className="text-panel-star" />
            <p className="text-xs text-white select-none">4.9</p>
          </section>
        </header>
        <p className="font-montserrat font-bold text-dark-background text-base">
          Graphic Design
        </p>
        <p className="font-montserrat font-normal text-sm text-secondary">
          We focus on ergonomics <br /> and meeting you....
        </p>
        <section className="flex flex-row items-center gap-1 h-6">
          <IoDownload className="text-secondary" />
          <p className="font-bold text-sm text-secondary">15 sales</p>
        </section>
        <section className="flex flex-row gap-2">
          <p className="font-montserrat font-bold text-panel-price">$16.48</p>
          <p className="font-montserrat font-bold text-success">$6.48</p>
        </section>
        <section className="flex flex-col gap-8 mt-4">
          <section className="self-center flex flex-row gap-2 w-full">
            {PANEL_CURRICULUM_INFO.map((props) => (
              <CurriculumItem key={props.children} {...props} />
            ))}
          </section>
          <LearnMoreButton onClick={onClickHandler}>
            {STYLE_TYPES.OUTLINED}
          </LearnMoreButton>
        </section>
      </section>
    </article>
  );
}
