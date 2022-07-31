//Types
import { ReactElement } from 'react';

//Components
import Greetings from '@components/Greetings/Greetings/Greetings.component';

export default function Home(): ReactElement {
  return (
    <div className="min-h-screen">
      <Greetings />
    </div>
  );
}
