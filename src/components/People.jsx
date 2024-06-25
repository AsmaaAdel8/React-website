import React, { useContext, useEffect } from 'react'
import { dataContext } from '../Context/Store'
import './App.modules.css'
import { Link } from 'react-router-dom'

export default function People() {
  const {trendingPerson,urlimg}=useContext(dataContext)
 useEffect(()=>{
  document.title='People'
 })

  return ( 
    <div className='d-flex'>
      <div className='col-md-3 stat'>
        <div className='bg-success w-25 mb-2' style={{height:"2px"}}></div>
        <p>Trending</p>
        <p>Person</p>
        <p>to watch naw</p>
        <p className='text-muted'>most watched Person by days</p>
        <div className='bg-success w-75' style={{height:"2px"}}></div>
      </div>
      <div className='col-md-8 row'>
        {trendingPerson.map((e)=><div key={e.id} className='col-md-3 dat '>
          <Link className="nav-link" to={`/details/${e.media_type}/${e.id}`}>
            <img src={`${urlimg}${e.profile_path}`} alt="poster" width={250}/>
            <h3 className='h5'>{e.original_name}</h3>
          </Link>
        </div>)}
      </div>
    </div>
  )
}
