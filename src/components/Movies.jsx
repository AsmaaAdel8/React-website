import React, { useContext, useEffect } from 'react'
import { dataContext } from '../Context/Store'
import './App.modules.css'
import { Link } from 'react-router-dom'

export default function Movies() {
  const {trendingMovies,urlimg}=useContext(dataContext) 
  useEffect(()=>{
    document.title='Movies'
  })

  return (
    <div>
      <div className=' stat row'>
        <div className='col-md-4'>
          <div className='bg-success w-25 mb-2' style={{height:"2px"}}></div>
            <p>Trending</p>
            <p>movies</p>
            <p>to watch naw</p>
            <p className='text-muted'>most watched movies by days</p>
          <div className='bg-success w-75' style={{height:"2px"}}></div>
        </div>
        <div className='col-md-8 row'>
          {trendingMovies.map((e)=><div key={e.id} className='dat col-md-4'>
            <Link className="nav-link mx-3 pg-2" to={`/details/${e.media_type}/${e.id}`}>
              <img src={`${urlimg}${e.backdrop_path}`} alt="poster" width={200} height={200}  className='mr-3'/>
              <p className='rate'>{Math.round(e.vote_average)}</p>
              <h3 className='h5'>{e.original_title}</h3>
            </Link>
          </div>)}
        </div>
      </div>
    </div>
  )
}
