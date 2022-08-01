//Types
import React, { ReactElement } from 'react';

//Next Components
import Image, { ImageProps } from 'next/image';

//Interface for Props
interface ImageButtonProps extends ImageProps {
  size?: string;
  buttonStyle?: string;
}

// Default Component

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
