import React from 'react';

import bookimage from '../../assets/the.jpg' 

const Banner = () => {
    return (
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookimage}className="max-w-sm rounded-lg shadow-2xl"/>
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up 
         <br /> your bookshelf</h1>
      <button className="btn bg-green-600">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;