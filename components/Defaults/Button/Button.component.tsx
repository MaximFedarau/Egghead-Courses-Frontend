//Types
import React, { ReactElement } from 'react';
import { STYLE_TYPES } from '@app-types/enum';

//Interface for Props
interface ButtonProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  children: string;
  type?: STYLE_TYPES;
  buttonStyle?: string;
}

// Style depending on type
const BUTTON_STYLE: {
  [key in STYLE_TYPES]: {
    background: string;
    color: string;
  };
} = {
  [STYLE_TYPES.CONTAINED]: {
    background: 'bg-light-background',
    color: 'text-white',
  },
  [STYLE_TYPES.OUTLINED]: {
    background: 'bg-transparent border border-light-background',
    color: 'text-light-background',
  },
};

// Default Component

export default function Button({
  children,
  type = STYLE_TYPES.CONTAINED,
  buttonStyle,
}: ButtonProps): ReactElement {
  return (
    <div
      className={`flex items-center justify-center rounded px-6 py-3 ${BUTTON_STYLE[type].background} cursor-pointer active:opacity-80 ${buttonStyle}`}
    >
      <p
        className={`font-montserrat font-bold ${BUTTON_STYLE[type].color} select-none`}
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

// Greetings

export const GreetingsButton = (props: {
  children: string;
  type?: STYLE_TYPES;
}) => {
  return <Button buttonStyle="px-10 py-4 w-[200px]" {...props} />;
};
