import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const All_Upcoming = () => {

    const { loading, error, data } = useFetch(`/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)

  if(loading) return <div className="container"><p>Loading...</p></div>
  if(error) return <div className="container"><p>Error fetching data</p></div>

  return (
    <div className='main_container'>
        {data.results.map(upcoming => {
          return(
            <div className='main' key={upcoming.id}>
                <img src={`https://image.tmdb.org/t/p/original${upcoming.poster_path}`} alt=""/>
                <div className='main_body'>
                    <h5>{upcoming.original_title}</h5>
                </div>
                <div className='main_footer'>
                    <Link to={`/details/${upcoming.id}`}>Details</Link>
                </div>
            </div>
          )
        })}
    </div>
  )
}

export default All_Upcoming