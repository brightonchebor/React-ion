import React from 'react'
import SearchBar from './SearchBar'
import './styles/HeroSection.css'

const HeroSection = ({onSearch}) => {
  return (
    <div className='hero-section'>
      <h1>Tubidy</h1>
      <p>Free High Quality MP3 & MP4 Downloader</p>
      <SearchBar onSearch={onSearch}/>
    </div>
  )
}

export default HeroSection
