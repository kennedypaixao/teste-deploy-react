import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import { saveAs } from 'file-saver';
import { useLocation } from 'react-router-dom';

import './Filtros.scss';
import { IFiltrosProps } from '../../../@types/filtros/IFiltrosProps.modal';
import { IReportFilter, IFields } from './IFiltros.types';

const Filtros: React.FC<IFiltrosProps> = ({onLoading}) => {

  const [Filter, setFilter] = useState([{} as IReportFilter]);
  const [Fields, setFields] = useState({} as IFields);
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState('');

  const uid = useLocation();

  useEffect(() => {
    let getToken: string | null;

    if(token === '') {
      getToken = window.sessionStorage.getItem('token');

      if (getToken !== null)
        setToken(getToken);
    }

    async function listarFilter() {
      try {
        const param = {
          UID: uid.search.slice(1)
        }
  
        const { data } = await axios.post('https://web.consorciomagalu.com.br/api/portal-relatorios/Report/ReportByUID', param, { headers: {
          "Authorization": "Bearer " + getToken
        }});

        setFilter(data.data.reportParams);
        setFields({ UID: uid.search.slice(1) });

      } catch (error) {

      }
    }
    setFields({});
    listarFilter();
    
  }, [uid.search]);

  const getReport = async (params: IFields) => {

    try {
      const data = await axios.post('https://web.consorciomagalu.com.br/api/portal-relatorios/Report/IssueReport', { params } , { headers: {
        "Content-Type": "application/json", "Authorization": "Bearer " + token
      } });
      
      return data ? data : undefined;

    } catch {
      onLoading(false);
      setErrorMessage('Relatório não contém dados para serem exibidos.');
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onLoading(true);
    
    const response = await getReport(Fields);

    if(response !== undefined) {
      
      const PDF = {
        pdfBase64: response
      }
  
      await handleDownloadClick(PDF).then(() => {
        onLoading(false);
        
      }).catch(() => {
        onLoading(false);
        setErrorMessage('Relatório não contém dados para serem exibidos.');
      });
    }
  }

  const handleDownloadClick = async ({pdfBase64}: any) => {
    saveAs("data:application/octet-stream;base64," + pdfBase64.data, 'Relatorio.pdf');
  };

  return (
    <div className='Filtros'>
      <h4>{Filter[0].name}</h4>
      <br></br>
      <form onSubmit={(e) => handleSubmit(e)}>
        {
          Filter.map((filter: IReportFilter) => {
            if (filter.nameFilter) {
              return (
                <>
                  <Row>
                    <label>
                      {filter.nameFilter}: <br />
                      <input type={filter.type} name={filter.nameFilter} value={Fields[filter.nameFilter]}
                        onChange={(e) => {
                          setFields(
                            {
                              ...Fields,
                              [filter.nameFilter]: e.target.value
                            }
                          )
                          }
                        } 
                      />
                    </label>
                  </Row>
                  <br />
                </>
              )
            }
          })
        }
        <input  type="submit" value="Gerar Relatório" />
      </form>

      <div style={{ marginTop: '10px', color: 'red', fontSize: '1.2em'}}>
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default Filtros;
