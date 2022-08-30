//Types
import { ReactElement } from 'react';
import { STYLE_TYPES, CONTENT_TYPES } from 'types/enum';
import { BASE_CONTENT_TYPES } from 'types/types';
import { FrameProps } from 'types/interface';

// Styles depending on the type
const ICON_STYLE: {
  [key in BASE_CONTENT_TYPES]: {
    backgroundColor: string;
    color: string;
  };
} = {
  [CONTENT_TYPES.INFO]: {
    backgroundColor: 'bg-[#fff]',
    color: 'text-light-background',
  },
  [CONTENT_TYPES.SUCCESS]: {
    backgroundColor: 'bg-[#b9eaa7]',
    color: 'text-success',
  },
  [CONTENT_TYPES.ERROR]: {
    backgroundColor: 'bg-[#f5c6cb]',
    color: 'text-danger',
  },
};

const CONTENT_STYLE: {
  [key in STYLE_TYPES]: {
    backgroundColor: string;
    titleColor: string;
    lineColor: string;
    lineBackground: string;
    secondaryTextColor: string;
  };
} = {
  [STYLE_TYPES.CONTAINED]: {
    backgroundColor: 'bg-light-background',
    titleColor: 'text-white',
    lineColor: 'text-white',
    lineBackground: 'bg-white',
    secondaryTextColor: 'text-white',
  },
  [STYLE_TYPES.OUTLINED]: {
    backgroundColor: 'bg-white',
    titleColor: 'text-black',
    lineColor: 'text-danger',
    lineBackground: 'bg-danger',
    secondaryTextColor: 'text-secondary',
  },
};

export default function Frame({
  children,
  title,
  type = STYLE_TYPES.OUTLINED,
  iconType = CONTENT_TYPES.INFO,
  Icon,
}: FrameProps): ReactElement {
  return (
    <article
      className={`flex flex-col justify-center w-screen h-[100vw] min-w-[280px] min-h-[280px] max-w-[328px] max-h-[328px] p-10 border rounded-md ${CONTENT_STYLE[type].backgroundColor}`}
    >
      <section
        className={`flex justify-center items-center w-[70px] h-[76px] rounded-md ${ICON_STYLE[iconType].backgroundColor}`}
      >
        <Icon className={`w-8 h-8 ${ICON_STYLE[iconType].color}`} />
      </section>
      <p
        className={`my-5 font-bold text-base select-none ${CONTENT_STYLE[type].titleColor}`}
      >
        {title}
      </p>
      <div
        className={`w-14 mb-5 border ${CONTENT_STYLE[type].lineBackground} ${CONTENT_STYLE[type].lineColor}`}
      />
      <p className={`text-sm ${CONTENT_STYLE[type].secondaryTextColor}`}>
        {children}
      </p>
    </article>
  );
}
