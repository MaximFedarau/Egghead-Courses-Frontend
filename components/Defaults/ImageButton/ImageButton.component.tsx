//Types
import React, { ReactElement } from 'react';

//Next Components
import Image, { ImageProps } from 'next/image';

//Interface for Props
interface ImageButtonProps extends ImageProps {
  size?: string;
  buttonStyle?: string;
}

export default function ImageButton({
  size,
  buttonStyle,
  ...props
}: ImageButtonProps): ReactElement {
  return (
    <div className={`w-[${size}] h-[${size}] active:opacity-80 ${buttonStyle}`}>
      <Image width={size} height={size} {...props} />
    </div>
  );
}
