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
    <section className="">
      {isFilled ? (
        <IconFilled
          className={`panel-icon ${color}`}
          onClick={onClickHandler}
        />
      ) : (
        <IconOutlined className="panel-icon" onClick={onClickHandler} />
      )}
    </section>
  );
}
