import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import TrendingVedios from './components/TrendingVedios';
import './App.css';
import React, { useState } from 'react';
import { videos } from './data/VedioData'


function App() {

  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('searching for:', query)
  }

  return (
    <div className='app'>
      <Navbar />
      <HeroSection onSearch={handleSearch} />
      <TrendingVedios videos={videos} />
    </div>
  )
}

export default App
