import React from 'react'

const cardStyle = {
  backgroundColor: "rgb(206, 206, 223)",
  padding: "20px",
  borderRadius: "20px",
  margin: "10px",
  border: "2px solid #888",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  minWidth: "200px",
  textAlign: "center",
};

const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', // allows wrap on smaller screens
    padding: '10px',
    paddingBottom: '70px',
    paddingTop: '100px',
  };


const Card = ({title}) => {
    return (
      <div style={cardStyle}>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus
          veritatis eligendi tenetur, sint, dicta quaerat obcaecati aliquid
          ipsum tempore dolorem in quam magni ad, minima alias non eum quae.
        </p>
      </div>
    );
}

const CardList = () => {
  return (
    <div style={cardContainerStyle}> 
      <Card title='Card 1'/>
      <Card title='Card 2'/>
      <Card title='Card 3'/>
      <Card title='Card 4'/>
    </div>
  )
}

export default CardList
