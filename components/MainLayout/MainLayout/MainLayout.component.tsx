//Types
import { ReactElement } from 'react';

//Components
import Header from '@components/MainLayout/Header/Header.component';

export default function MainLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
