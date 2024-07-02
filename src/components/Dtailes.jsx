import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Dtailes() {

    const [itemDetails,setItemDetails]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error, setError] = useState(null);
    let parms = useParams();
    let {media, id} = parms;

      useLayoutEffect(() => {
        document.title = 'Details';
      }, []);
     useEffect(()=>{
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/${media}/${id}`,
        params: { language: 'en-US' },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmMyODFhYzAyMDdjYzE5ZGU3Zjk0ZDkyMDRmOWVjMCIsInN1YiI6IjY2NGZjMDUwOTA4ODMxMzc5MDk1NDkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v6QxOkvyvFkTZ1Q8oX2nosnLi5mIEo_oNbcX5XQWyjk'
        }
      };
      const getItemDetails = async () => {
        try {
          const response = await axios.request(options);
          setItemDetails(response.data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      getItemDetails();
  
    }, [media, id]);
  

    if (loading) {
      return <div className='m-auto mt-5'><h1 className='text-center mt-5'>Loading...</h1></div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!itemDetails) {
      return <div>No data found</div>;
    }
  
    let gender = itemDetails?.gender;
 let setgender=function(){ switch(gender){
    case 1: 
       return <span className='h4'>Female</span >;
    break;
    case 2:
      return <span className='h4'> Male</span >;
    break;
    case 3 : 
      return <span className='h4'>Non-binary</span >; 
    break;
    default: 
    return <span className='h4'>Not set / not specified</span >;
  }}
  return (
    <div>
      <div className="row">
        <div className="col-xl-4 mt-2">
          {itemDetails.profile_path && (
            <img src={`https://image.tmdb.org/t/p/w500/${itemDetails.profile_path}`} alt="poster" width={250} />
          )}
          {itemDetails.backdrop_path && (
            <img src={`https://image.tmdb.org/t/p/w500/${itemDetails.backdrop_path}`} alt="poster" width={250} height={400} />
          )}
        </div>
        <div className="col-xl-7">
          {itemDetails.name && <h2 className='m-3'>{itemDetails.name}</h2>}
          {itemDetails.title && <h2 className='m-3'>{itemDetails.title}</h2>}
          {media ==="person"? <div><span className='h4 m-3'>Gender : {setgender()}</span>
          <h4 className='m-3'>Birthday: {itemDetails.birthday}</h4>
          <h4 className='m-3'>place_of_birth : {itemDetails.place_of_birth}</h4>
          <h4 className='m-3'>popularity : {itemDetails.popularity}</h4>
          </div> :<div>
          <h4>vote_average : {Math.ceil(itemDetails.vote_average)}</h4>
          <h4>vote_count : {itemDetails.vote_count}</h4>
            <h4 ><p className='mt-2'>{itemDetails.overview}</p></h4>
            </div>}
        </div>
      </div>
    </div>
  )
}
