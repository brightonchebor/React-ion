import React from 'react'

const ProfileCard = () => {

  const profileStyle = {
    backgroundColor: 'gb(206, 206, 223)',
    padding: '10px',
    paddingTop: '50px',
    borderRadius: '8px',
    color: 'black',
  }  

  return (
    <div style={profileStyle}>
        <h1> My Title</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatibus, quis eveniet aperiam, saepe blanditiis dolores ut id assumenda quibusdam nulla numquam facilis unde enim sed nihil. Totam, dolorem inventore.
        </p>

    </div>
  )
}

export default ProfileCard
