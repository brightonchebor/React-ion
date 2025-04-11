import React from 'react';
// import User from './components/User';
// import Password from './components/Password';
import StyleCard from './components/StyleCard';
import Header from './components/Header';
import Footer from './components/Footer';
import CardList from './components/CardList';
import ProfileCard from './components/ProfileCard';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      {/* <StyleCard />
      <StyleCard />
      <StyleCard /> */}

      <ProfileCard />
      <Footer />
    </div>
  )
}

export default App
