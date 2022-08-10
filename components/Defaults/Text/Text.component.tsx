//Types
import React, { ReactElement } from 'react';

//Navigation
export const NavigationLink = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>,
): ReactElement => {
  return (
    <a
      {...props}
      className={`font-montserrat font-bold text-white cursor-pointer select-none hover:opacity-80 ${props.className}`}
    />
  );
};

export const HeaderLink = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  return <NavigationLink className="hidden md:block" {...props} />;
};
