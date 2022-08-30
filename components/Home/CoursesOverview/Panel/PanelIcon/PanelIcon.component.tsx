//Types
import React, { ReactElement } from 'react';
import { PanelIconProps } from 'types/interface';
import { PANEL_ICON_TYPES } from 'types/types';
import { CONTENT_TYPES } from 'types/enum';

// Styles depending on the type
const ICON_STYLE: {
  [key in PANEL_ICON_TYPES]: {
    color: string;
  };
} = {
  [CONTENT_TYPES.INFO]: {
    color: 'text-light-background',
  },
  [CONTENT_TYPES.ERROR]: {
    color: 'text-danger',
  },
  [CONTENT_TYPES.DEFAULT]: {
    color: 'text-black',
  },
};

export default function PanelIcon({
  IconOutlined,
  IconFilled,
  type,
}: PanelIconProps): ReactElement {
  const [isFilled, setIsFilled] = React.useState(false);
  const onClickHandler = () => {
    setIsFilled(!isFilled);
  };
  return (
    <section
      className="flex justify-center items-center h-10 w-10 opacity-80 animate-panel-icons-smooth panel-icon [&>*]:h-full [&>*]:w-full"
      onClick={onClickHandler}
    >
      {isFilled ? (
        <IconFilled className={ICON_STYLE[type].color} />
      ) : (
        <IconOutlined />
      )}
    </section>
  );
}
