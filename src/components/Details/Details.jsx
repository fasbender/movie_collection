import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../../hooks/useFetch'
import './details.css'

const Details = () => {

    const { id } = useParams()

    const { loading, error, data } = useFetch(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)

    if(loading) return <div className="container"><p>Loading...</p></div>
    if(error) return <div className="container"><p>Error fetching data</p></div>

  return (
    <div className='details_container'>
        <div className='details'>
            <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" />
            <div className='details_body'>
                <h2>{data.original_title}</h2>
                <h4>Release Date: {data.release_date}</h4>
                <h4>Rating: {data.vote_average}/10</h4>
                <h4>{data.status}</h4>
            </div>
            <div>
                <p>{data.overview}</p>
            </div>
        </div>
    </div>
  )
}

export default Details