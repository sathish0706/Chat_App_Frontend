import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home'>
    <h1>
      Wellcome to my Chat App
    </h1>
    <Link to={'/register'}>click here</Link>
    </div>
  )
}

export default Home
