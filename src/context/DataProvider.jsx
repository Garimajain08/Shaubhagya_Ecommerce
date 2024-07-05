import { useEffect, useReducer, useState } from "react"
import DataContext from "./DataContext"
const DataProvider = ({children})=>{

  
const initialstate = {
  "products":[],
  "featured_products":[],
  "errror":false,
  'loading':false,
 
}
function reducer(state,action){
  switch (action.type){
    case 'loading':
      return {...state,loading:true};
    case 'error':
      return {...state,error:true,loading:false};
    case 'setproduct':
       return {...state,error:false,products:action.payload,featured_products:action.payload.filter((e)=>e.featured)}
   
   default:
     return {state};
  }    
}
const [state,dispatch]=useReducer(reducer,initialstate);
const url = "https://api.pujakaitem.com/api/products"
useEffect(() => {
    const fetchData = async () => {
      dispatch({type:'loading'})
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({type:"setproduct",payload:data});
      } 
      catch(e){
        dispatch({ type: 'error' })
      }
    }

    fetchData();
  }, []);

return(
    <DataContext.Provider value ={{...state}}>
      
      {children}

    </DataContext.Provider>
)
   
}
export default DataProvider;