import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

import AuthManager from "../service/Auth/AuthService";
import RequireAuth from './RequireAuth';
import Dashboard from '../pages/AuthPages/Dashboard';
import Filtros from '../pages/AuthPages/Filtros';
import Login from '../pages/Login';

const PageRoutes: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  const handleLoading = (status: boolean) => {
    setLoading(status);
  }

  return (
    <AuthManager>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Dashboard' element={
            <RequireAuth withSideMenu={true} title="Dashboard">
              <Dashboard />
            </RequireAuth>
          } />
          <Route path='/Filtros' element={
            <>
              { loading && <Loading><CircularProgress sx={{ color: '#0087fe' }} /></Loading> }
              <RequireAuth withSideMenu={true} title="Filtros">
                <Filtros onLoading={handleLoading}/>
              </RequireAuth>
            </>
          } />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </AuthManager>
  );
};

export default PageRoutes;

const Loading = styled.div`
  position: fixed;
  user-select: none;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.2);

  span {
    width: 200px !important;
    height: 200px !important;
  }
`;
