import axios from 'axios'
import React, { createContext, useLayoutEffect, useState } from 'react'

export let dataContext=createContext(null)
export default function DataContextProvider({children}) {

    let urlimg="https://image.tmdb.org/t/p/w500/";
    const [trendingMovies,setTrindingMovies]=useState([])
    const [trendingTvs,setTrindingTvs]=useState([])
    const [trendingPerson,setTrindingPerson]=useState([])
    let getTrindingItem=async(mediaType)=>{
      try{
      const response= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=2fc281ac0207cc19de7f94d9204f9ec0`)
      return response.data.results;
      }catch(error){
      console.log(error)
      return [];
    } }
    useLayoutEffect(()=>{
        getTrindingItem('movie').then((data)=>setTrindingMovies(data))
        getTrindingItem('tv').then((data)=>setTrindingTvs(data))
        getTrindingItem('person').then((data)=>setTrindingPerson(data))
    },[])
  return (
    <dataContext.Provider value={{trendingMovies,trendingPerson,trendingTvs,urlimg}} >
      {children} 
      
    </dataContext.Provider>
  )
}
