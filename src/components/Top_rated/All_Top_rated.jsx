import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const All_Top_rated = () => {

    const { loading, error, data } = useFetch(`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)

  if(loading) return <div className="container"><p>Loading...</p></div>
  if(error) return <div className="container"><p>Error fetching data</p></div>

  return (
    <div className='main_container'>
        {data.results.map(top_rated => {
          return(
            <div className='main' key={top_rated.id}>
                <img src={`https://image.tmdb.org/t/p/original${top_rated.poster_path}`} alt=""/>
                <div className='main_body'>
                    <h5>{top_rated.original_title}</h5>
                </div>
                <div className='main_footer'>
                    <Link to={`/details/${top_rated.id}`}>Details</Link>
                </div>
            </div>
          )
        })}
    </div>
  )
}

export default All_Top_rated