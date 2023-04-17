import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faSpaceShuttle, faCircle } from '@fortawesome/free-solid-svg-icons';
import BgImage from '../../../../assets/image/bg.png';
import { Link } from 'react-router-dom';
import { ISidebarProps, ICategory, IReport } from './Sidebar.types';
import LogoImage from '../../../../assets/image/logo.png';
import axios from 'axios';
import './Sidebar.scss';
import { alignItems } from 'styled-system';
import Filtros from '../../../../pages/AuthPages/Filtros';


const Sidebar: React.FC<ISidebarProps> = ({ collapse }) => {

  const [Category, setCategory] = useState([{} as ICategory]);
  const [Report, setReport] = useState([{} as IReport]);

  useEffect(() => {
    async function geraToken() {
      try {
        const token = window.sessionStorage.getItem('token');
    
        if (token !== null){
          await listarCategory(token);
          await listarReport(token);
        }
        
      } catch (error) {
        
      }
    }

    async function listarCategory(token: string) {
      try {
        const { data } = await axios.get('https://web.consorciomagalu.com.br/api/portal-relatorios/Report/ReportCategory', { headers: {
          'Authorization': "Bearer " + token
        }});

        console.log('category', data.data)

        setCategory(data.data);
      } catch (error) {
        console.log('error listarCategory', error);
      }
    }

    async function listarReport(token: string) {
      try {
        const { data } = await axios.get('https://web.consorciomagalu.com.br/api/portal-relatorios/Report', { headers: {
          'Authorization': "Bearer " + token
        }});
        console.log('report', data.data)

        setReport(data.data);
      } catch (error) {
        console.log('error listarReport', error);
      }
    }
    geraToken();
  }, []);


  return (
    <div className="Sidebar-Menu">
      <ProSidebar image={BgImage} collapsed={collapse} >
        <SidebarHeader>
          <div className="menu-header"><img src={LogoImage} height={64} width={220} /></div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem>
              Home
              <Link to='/Dashborad' />
            </MenuItem>
            {
              Category.map((category: ICategory) => {
                return (
                  <MenuItem>
                    {category.name}
                    <SubMenu>
                    {
                      Report.map((report: IReport) => {
                        if(category.uid == report.uidReportCategory){
                          return (<>
                              <MenuItem>
                              {report.name}
                              <Link to={{pathname:'/Filtros', search:report.uid}} />
                              </MenuItem>
                            </>
                          )
                        }
                      })
                    }
                    </SubMenu>
                  </MenuItem>
                )
              })
            }
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

Sidebar.propTypes = {
  collapse: PropTypes.bool.isRequired,
};

export default Sidebar;
