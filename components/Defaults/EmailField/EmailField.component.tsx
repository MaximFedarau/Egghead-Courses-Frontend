//Types
import React, { ReactElement } from 'react';

export default function EmailField(
  props: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'placeholder' | 'required' | 'className'
  >,
): ReactElement {
  return (
    <input
      {...props}
      type="email"
      placeholder="Your Email"
      required
      className="w-full max-w-[568px] py-2 px-4 border-2 border-r-0 rounded-l-md border-light-gray bg-lightest-gray font-montserrat text-secondary placeholder-secondary placeholder:capitalize focus:outline-none"
    />
  );
}
