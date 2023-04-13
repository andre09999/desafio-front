import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import api from '../services/fetch';

function ProviderML({ children }) {
  const [categoriasML, setCategoriasML] = useState([])
  const [web, setWeb] = useState('Mercado Livre / BuscaPé')
  const getCategorieMl = async () => {
    await api('GET')
      .then((info) => {
        setCategoriasML([...info])
      })
  };

  const contextValue = useMemo(() => ({
    categoriasML,
    setCategoriasML,
    getCategorieMl,
    web, 
    setWeb,
  }), [categoriasML, web]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

ProviderML.propTypes = {
  children: PropTypes.arrayOf(),

}.isRequired;
export default ProviderML;