//Types
import { ReactElement } from 'react';
import { STYLE_TYPES, FRAME_ICON_TYPES } from '@app-types/enum';
import { FrameProps } from '@app-types/interface';

// Styles depending on type
const ICON_STYLE: {
  [key in FRAME_ICON_TYPES]: {
    backgroundColor: string;
    color: string;
  };
} = {
  [FRAME_ICON_TYPES.INFO]: {
    backgroundColor: 'bg-[#fff]',
    color: 'text-[#23A6F0]',
  },
  [FRAME_ICON_TYPES.SUCCESS]: {
    backgroundColor: 'bg-[#b9eaa7]',
    color: 'text-[#31c173]',
  },
  [FRAME_ICON_TYPES.ERROR]: {
    backgroundColor: 'bg-[#f5c6cb]',
    color: 'text-danger',
  },
};

const CONTENT_STYLE: {
  [key in STYLE_TYPES]: {
    backgroundColor: string;
    titleColor: string;
    lineColor: string;
    secondaryTextColor: string;
  };
} = {
  [STYLE_TYPES.CONTAINED]: {
    backgroundColor: 'bg-light-background',
    titleColor: 'text-white',
    lineColor: 'text-white',
    secondaryTextColor: 'text-white',
  },
  [STYLE_TYPES.OUTLINED]: {
    backgroundColor: 'bg-white',
    titleColor: 'text-black',
    lineColor: 'text-danger',
    secondaryTextColor: 'text-secondary',
  },
};

export default function Frame({
  children,
  title,
  type = STYLE_TYPES.OUTLINED,
  iconType = FRAME_ICON_TYPES.INFO,
  Icon,
}: FrameProps): ReactElement {
  return (
    <article
      className={`px-10 max-w-[328px] max-h-[328px] aspect-square justify-center ${CONTENT_STYLE[type].backgroundColor} border rounded-md flex flex-col`}
    >
      <section
        className={`w-[70px] h-[76px] rounded-md flex justify-center items-center ${ICON_STYLE[iconType].backgroundColor}`}
      >
        <Icon className={`w-8 h-8 ${ICON_STYLE[iconType].color}`} />
      </section>
      <p
        className={`my-5 font-bold text-base ${CONTENT_STYLE[type].titleColor}`}
      >
        {title}
      </p>
      <div className={`border w-14 mb-5 ${CONTENT_STYLE[type].lineColor}`} />
      <p className={`text-sm ${CONTENT_STYLE[type].secondaryTextColor}`}>
        {children}
      </p>
    </article>
  );
}
