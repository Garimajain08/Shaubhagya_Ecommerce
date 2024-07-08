import React, { createContext, useReducer, useEffect, useState } from 'react';

// Initial state
const initialState = {
  products: [],
  loading: false,
  error: false,
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, error: false };
    case 'ERROR':
      return { ...state, error: true, loading: false };
    case 'SET_DATA':
      return { 
        ...state, 
        products: action.payload, 
        loading: false,
        error: false,
      };
    default:
      return state;
  }
}

// CreateContext
export const FilterContext = createContext();

// Create Provider
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sortOption, setSortOption] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let sortedProducts = [...state.products];
    switch (sortOption) {
      case "highest":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "lowest":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "a-z":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sortedProducts = [...state.products];
        break;
    }
    
    setFilteredProducts(sortedProducts);
    console.log(filteredProducts)
  }, [sortOption, state.products]);

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
    <FilterContext.Provider value={{ state, dispatch, sortOption, setSortOption, filteredProducts }}>
      {children}
    </FilterContext.Provider>
  );
};
