//Types
import { ReactElement } from 'react';
import { CONTENT_TYPES } from 'types/enum';
import { CurriculumItemProps } from 'types/interface';

//Styles depending on the type
const ICON_STYLE: {
  [key in CONTENT_TYPES]: {
    color: string;
  };
} = {
  [CONTENT_TYPES.INFO]: {
    color: 'text-light-background',
  },
  [CONTENT_TYPES.SUCCESS]: {
    color: 'text-success',
  },
  [CONTENT_TYPES.ALERT]: {
    color: 'text-alert',
  },
  [CONTENT_TYPES.ERROR]: {
    color: 'text-danger',
  },
  [CONTENT_TYPES.DEFAULT]: {
    color: 'text-black',
  },
};

export default function CurriculumItem({
  children,
  icon: Icon,
  type = CONTENT_TYPES.DEFAULT,
}: CurriculumItemProps): ReactElement {
  return (
    <div className="flex flex-row items-center gap-1 overflow-hidden">
      <Icon className={ICON_STYLE[type].color} />
      <p className="font-montserrat text-xs text-secondary text-ellipsis overflow-hidden whitespace-nowrap">
        {children}
      </p>
    </div>
  );
}
