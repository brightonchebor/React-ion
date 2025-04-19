import React from 'react'
import './styles/VedioCard.css'
import music from '../assets/music.jpg'
const VedioCard = ({video}) => {
  return (
    <div className='video-card'>
        <div className='thumbnail-container'>
            <img src={music} alt={video.title} className='thumbnail' />
            <div className='duration'> {video.duration} </div>
            {video.platform && <div className='platform'>{video.platfrom}</div> }
        </div>
        <h3 className='video-title'>{video.title}</h3>
    </div>
  )
}

export default VedioCard
