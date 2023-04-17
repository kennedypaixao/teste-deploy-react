import React, { useEffect, useState } from 'react';
import { Col,  Row } from 'react-bootstrap';


import './Dashboard.scss';
import { IReportFilter } from './IDashboard.types';

const Dashboard: React.FC = () => {
  
  const [Filter, setFilter] = useState([{} as IReportFilter]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = window.sessionStorage.getItem('token');
    
    if (getToken !== null)
      setToken(getToken);

  }, []);

  const onClickEvent = (): void => {
    // teste
  }
  
  return (
    <div className='Dashboard'>
      <Row>
        <Col>
          <h1 className='title-name'>
            Bem vindo, <span>Usuario.</span>
          </h1>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;