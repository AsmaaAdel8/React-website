import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Dtailes() {

    const [itemDetails,setItemDetails]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error, setError] = useState(null);
    let params = useParams();
    const getItemDetails = async () => {
        try {
          const { data } = await axios.get(`https://api.themoviedb.org/3/${params.media}/${params.id}?api_key=2fc281ac0207cc19de7f94d9204f9ec0`);
          setItemDetails(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      if (loading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Error: {error}</div>;
      }
    useEffect(()=>{
        document.title='Detailes'
        getItemDetails()
        console.log(itemDetails)
    },[params.media,params.id])
  return (
    <div>
      <div className="row">
        <div className="col-xl-4">
          {itemDetails.profile_path && (
            <img src={`https://image.tmdb.org/t/p/w500/${itemDetails.profile_path}`} alt="poster" width={250} />
          )}
          {itemDetails.backdrop_path && (
            <img src={`https://image.tmdb.org/t/p/w500/${itemDetails.backdrop_path}`} alt="poster" width={250} />
          )}
        </div>
        <div className="col-xl-7">
          {itemDetails.name && <p>{itemDetails.name}</p>}
          {itemDetails.title && <p>{itemDetails.title}</p>}
        </div>
      </div>
    </div>
  )
}
