import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import api from '../services/fetch';

function MeuProvider({ children }) {

    const getCategorieBP = async (event) => {
        await api('GET', 'api.mercadolibre.com/sites/MLA/categories')
          .then((info) => {
            console.log(info)
          })
      };

      
  const contextValue = useMemo(() => ({
   
  }), [
    
]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

MeuProvider.propTypes = {
  children: PropTypes.arrayOf(),

}.isRequired;
export default MeuProvider;