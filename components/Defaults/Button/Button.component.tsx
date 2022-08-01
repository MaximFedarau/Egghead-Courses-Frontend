//Types
import React, { ReactElement } from 'react';
import { BUTTON_TYPES } from '@app-types/enum';

//Interface for Props
interface ButtonProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  children: string;
  type?: BUTTON_TYPES;
  buttonStyle?: string;
}

// Default Component

export default function Button({
  children,
  type = BUTTON_TYPES.CONTAINED,
  buttonStyle,
}: ButtonProps): ReactElement {
  return (
    <div
      className={`flex items-center justify-center rounded px-6 py-3 ${
        type === BUTTON_TYPES.CONTAINED
          ? 'bg-light-background'
          : 'bg-transparent border border-light-background'
      } cursor-pointer active:opacity-80 ${buttonStyle}`}
    >
      <p
        className={`font-montserrat font-bold ${
          type === BUTTON_TYPES.CONTAINED
            ? 'text-white'
            : 'text-light-background'
        } select-none`}
      >
        {children}
      </p>
    </div>
  );
}

// Styled Components

//Header

export const HeaderButton = ({ children }: { children: string }) => {
  return <Button buttonStyle="hidden md:block">{children}</Button>;
};
