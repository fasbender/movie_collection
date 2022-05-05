import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import '../Trending/trending.css'

const Top_rated = () => {

  const { loading, error, data } = useFetch(`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)

  if(loading) return <div className="container"><p>Loading...</p></div>
  if(error) return <div className="container"><p>Error fetching data</p></div>

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        }
      }
    ]
  };

  return (
    <div className='main_card'>
      <h2>Top Rated</h2>
      <Slider {...settings}>
        {data.results.slice(0,10).map(top_rated => {
          return(
            <div className='card_body' key={top_rated.id}>
              <div className='card_image'>
                <Link to={`/details/${top_rated.id}`}>
                  <img src={`https://image.tmdb.org/t/p/original${top_rated.poster_path}`} alt="" width='100%'/>
                </Link>   
              </div>
              <div>
                {top_rated.original_title}
              </div>
            </div>
          )
        })}
      </Slider>
      <div>
        <Link to='/all_top_rated'>View all</Link>
      </div>
    </div>
  )
}

export default Top_rated