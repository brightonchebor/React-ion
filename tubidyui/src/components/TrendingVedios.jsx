import React from 'react'
import VedioCard from './VedioCard'
import './styles/TrendingVedios.css'

const TrendingVedios = ({ videos }) => {

  return (
    <div className='trending-section'>
      <h2>Trending Videos</h2>
      <div className='video-grid'>
        {videos.map(video =>(
            <VedioCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

export default TrendingVedios
