//Types
import React, { ReactElement } from 'react';
import { STYLE_TYPES } from 'types/enum';

//Interface for Props
interface ButtonProps extends React.BaseHTMLAttributes<HTMLButtonElement> {
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
  ...props
}: ButtonProps): ReactElement {
  return (
    <button
      {...props}
      className={`flex items-center justify-center px-6 py-3 rounded cursor-pointer active:opacity-80 ${BUTTON_STYLE[type].background} ${buttonStyle}`}
    >
      <p
        className={`font-montserrat font-bold select-none ${BUTTON_STYLE[type].color}`}
      >
        {children}
      </p>
    </button>
  );
}

// Styled Components

//Header

export const HeaderButton = ({
  children,
  ...props
}: Omit<ButtonProps, 'type' | 'buttonStyle'>) => {
  return (
    <Button buttonStyle="hidden md:block" {...props}>
      {children}
    </Button>
  );
};

// Greetings

export const GreetingsButton = (props: Omit<ButtonProps, 'buttonStyle'>) => {
  return <Button buttonStyle="w-[200px] px-10 py-4" {...props} />;
};
