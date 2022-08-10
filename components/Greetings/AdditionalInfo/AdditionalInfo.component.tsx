//Types
import { ReactElement } from 'react';

//Constants
import { GREETINGS_FRAMES } from '@constants/data';

//Components
import Frame from '@components/Greetings/Frame/Frame.component';

export default function AdditionalInfo(): ReactElement {
  return (
    <section className="flex w-full justify-center py-16 lg:pt-0 ">
      <section className="flex flex-col items-center gap-8 lg:gap-2 lg:flex-row justify-between w-full max-w-[1180px]">
        {GREETINGS_FRAMES.map((frameInfo) => (
          <Frame {...frameInfo} key={frameInfo.title} />
        ))}
      </section>
    </section>
  );
}
