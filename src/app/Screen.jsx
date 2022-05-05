/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Trending from '../components/Trending/Trending'
import Top_rated from '../components/Top_rated/Top_rated'
import Upcoming from '../components/Upcoming/Upcoming'

const Screen = () => {
  return (
    <>
        <Trending/>
        <Top_rated/>
        <Upcoming/>
    </>
  )
}

export default Screen