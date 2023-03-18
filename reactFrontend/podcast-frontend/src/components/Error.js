import React from 'react';
import { Link } from 'react-router-dom';
import "../css/error.scss";

const Error = () => {
  return (
    <div className='error-container'>
      <h1>Ooops!</h1>
      <h3>Something went wrong!</h3>
      <p>Error 404 page not found</p>
      <div className='flat-button'>
        <Link to="/">
          Go to Home Page
        </Link>
      </div>
    </div>
  )
}

export default Error