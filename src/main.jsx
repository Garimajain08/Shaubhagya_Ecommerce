import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvider } from './context/Filter_context.jsx'
import DataProvider from './context/DataProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

    <DataProvider>
       <FilterProvider>
      <App />
      </FilterProvider>
    </DataProvider>
  
)

