import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom'

const All_Trending = () => {

    const { loading, error, data } = useFetch(`/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)

    if(loading) return <div className="container"><p>Loading...</p></div>
    if(error) return <div className="container"><p>Error fetching data</p></div>

  return (
    <div className='main_container'>
        {data.results.map(trending => {
          return(
            <div className='main' key={trending.id}>
                <img src={`https://image.tmdb.org/t/p/original${trending.poster_path}`} alt=""/>
                <div className='main_body'>
                    <h5>{trending.original_title}</h5>
                </div>
                <div className='main_footer'>
                    <Link to={`/details/${trending.id}`}>Details</Link>
                </div>
            </div>
          )
        })}
    </div>
  )
}

export default All_Trending