//Types
import React, { ReactElement } from 'react';
import { PanelIconProps } from '@app-types/interface';

export default function PanelIcon({
  IconOutlined,
  IconFilled,
  color,
}: PanelIconProps): ReactElement {
  const [isFilled, setIsFilled] = React.useState(false);
  const onClickHandler = () => {
    setIsFilled(!isFilled);
  };
  return (
    <section
      className="flex justify-center items-center h-10 w-10 opacity-80 animate-panel-icons-smooth panel-icon"
      onClick={onClickHandler}
    >
      {isFilled ? (
        <IconFilled className={`h-full w-full ${color}`} />
      ) : (
        <IconOutlined className="h-full w-full" />
      )}
    </section>
  );
}
