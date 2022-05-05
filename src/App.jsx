/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Screen from './app/Screen';
import All_Trending from './components/Trending/All_Trending';
import All_Top_rated from './components/Top_rated/All_Top_rated';
import All_Upcoming from './components/Upcoming/All_Upcoming';
import Details from './components/Details/Details';
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Screen/>} />
        <Route exact path='/all_trending' element={<All_Trending/>} />
        <Route exact path='/all_top_rated' element={<All_Top_rated/>} />
        <Route exact path='/all_upcoming' element={<All_Upcoming/>} />
        <Route exact path='/details/:id' element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
