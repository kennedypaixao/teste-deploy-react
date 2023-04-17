import React from 'react';
import { Theme } from '../themes';
import PageRoutes from '../routes';

import './Main.scss';

const Main: React.FC = () => {
  return (
    <Theme>
      <PageRoutes></PageRoutes>
    </Theme>
  );
}

export default Main;