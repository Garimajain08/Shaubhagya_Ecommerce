import React, { createContext, useReducer, useEffect,useState } from 'react';

// Initial state
const initialState = {
  products: [],
  loading: false,
  error: false,
  filtered_products:[],
  criteria:"",
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, error: false };
    case 'ERROR':
      return { ...state, error: true, loading: false };
    case 'SET_DATA':
      return { ...state, products: action.payload, 
        loading: false,
        error: false,
        filtered_products:action.payload };
    default:
      return state;
  }
}

// CreateContext
export const FilterContext = createContext();

// Create Provider
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'LOADING' });
      try {
        const response = await fetch("https://api.pujakaitem.com/api/products");
        const data = await response.json();
    
        dispatch({ type: 'SET_DATA', payload: data });
      } catch (error) {
        dispatch({ type: 'ERROR' });
      }
    };

    fetchData();
  }, []);

  return (
    <FilterContext.Provider value={{state,dispatch}}>
      {children}
    </FilterContext.Provider>
  );
};
