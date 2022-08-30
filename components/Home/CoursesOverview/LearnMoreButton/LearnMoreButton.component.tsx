//Types
import { ReactElement } from 'react';
import { STYLE_TYPES } from 'types/enum';

//Icons
import { IoChevronForwardOutline } from 'react-icons/io5';

// Style depending on type
const LEARN_MORE_BUTTON_STYLES: {
  [key in STYLE_TYPES]: {
    style: string;
  };
} = {
  [STYLE_TYPES.OUTLINED]: {
    style:
      'self-center xl:self-start px-5 py-2 border border-light-background rounded-3xl active:bg-light-background/5',
  },
  [STYLE_TYPES.CONTAINED]: {
    style: 'border-0 active:opacity-80',
  },
};

export default function LearnMoreButton({
  children: type = STYLE_TYPES.CONTAINED,
}: {
  children?: STYLE_TYPES;
}): ReactElement {
  return (
    <button
      className={`flex flex-row items-center h-fit w-fit cursor-pointer select-none ${LEARN_MORE_BUTTON_STYLES[type].style} `}
    >
      <p className="font-bold text-sm text-light-background">Learn more</p>
      <IoChevronForwardOutline className=" h-7 w-7 text-light-background" />
    </button>
  );
}
