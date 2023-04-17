import React, { useState } from 'react';

import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';

import { ICoreProps } from './Core.types';
import './Core.scss';

const Core: React.FC<ICoreProps> = ({ title, children }) => {

  // Armazena o estado do side menu.
  const [_collapse, _setCollapse] = useState<boolean>(false);

  // Evento responsável por fazer o toggle do side menu.
  const _onMenuToggle = (): void => {
    _setCollapse(!_collapse);
  }

  return (
    <div className='CorePage'>

      <div className='CorePage-side'>
        <Sidebar collapse={_collapse}></Sidebar>
      </div>

      <div className='CorePage-body'>
        <Toolbar onMenuToggle={_onMenuToggle} pageName={title} />

        <div className='content-pages'>
    	    {children}
        </div>
      </div>

    </div>
  );
};

export default Core;