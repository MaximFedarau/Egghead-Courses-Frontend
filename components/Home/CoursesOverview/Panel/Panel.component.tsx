//Types
import { ReactElement } from 'react';
import { PanelProps } from '@app-types/interface';

//Constants
import { PANEL_ICONS } from '@constants/data';

//Next Components
import NextImage from 'next/image';

//Components
import PanelIcon from '@components/Home/CoursesOverview/PanelIcon/PanelIcon.component';

export default function Panel({ image }: PanelProps): ReactElement {
  return (
    <article className="relative flex flex-col">
      <section className="absolute top-5 left-5 z-10 flex justify-center items-center w-12 h-6 rounded-md bg-danger font-montserrat font-bold text-sm text-white select-none">
        Sale
      </section>
      <section className="w-fit h-fit select-none">
        <NextImage
          src={image}
          width="296px"
          height="364px"
          className="rounded-md"
          alt="Course Image"
        />
      </section>
      <section className="absolute bottom-[10%] z-10 flex justify-center items-center gap-3 w-full ">
        {PANEL_ICONS.map((props) => (
          <PanelIcon {...props} />
        ))}
      </section>
    </article>
  );
}
