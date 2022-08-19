//Types
import React, { ReactElement } from 'react';

//Next Components
import Image, { ImageProps } from 'next/image';

//Interface for Props
interface ImageButtonProps extends ImageProps {
  width?: string;
  height?: string;
  buttonStyle?: string;
}

// Default Component

export default function ImageButton({
  width = 'w-full',
  height = 'h-full',
  buttonStyle,
  ...props
}: ImageButtonProps): ReactElement {
  return (
    <button className={`${width} ${height} active:opacity-80 ${buttonStyle}`}>
      <Image width="100%" height="100%" {...props} />
    </button>
  );
}

// Styled Components

export const HeaderImageButton = ({ ...props }: ImageButtonProps) => {
  return (
    <ImageButton
      {...props}
      className="brightness-0 invert"
      buttonStyle="block md:hidden"
    />
  );
};
