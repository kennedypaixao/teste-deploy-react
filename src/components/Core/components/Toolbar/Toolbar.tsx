import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faBars, faDoorClosed } from '@fortawesome/free-solid-svg-icons';

import { ToolbarProps } from './Toolbar.types';

import './Toolbar.scss';

const Toolbar: React.FC<ToolbarProps> = ({ onMenuToggle, pageName }) => {
  const _navigate = useNavigate()

  const _onClose = (): void => {
    _navigate('/Login', { replace: true });
  }

  return (
    <nav className='Toolbar'>
      <button className='btn-menu' onClick={onMenuToggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <h2 className='page-title'>
        {pageName}
      </h2>
      <button type="button" className="btn btn-light btnClose" onClick={_onClose}>
        <FontAwesomeIcon icon={faDoorClosed} />
        Sair
      </button>
    </nav>
  );
};

Toolbar.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
  pageName: PropTypes.string.isRequired
}

export default Toolbar;