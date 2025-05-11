import React from 'react';
import {useLoaderData, useParams} from 'react-router';
import {addToStoreDB} from '../../Utility/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId ===  bookId); 
    
    const {bookName, image,author,totalPages,publisher,yearOfPublishing,rating} = singleBook;
    


    const handleMarkAsRead = id => {
      // Store  with Id
      //  where to store
      // array or collection 
      // if book already exists then show alert



      addToStoreDB(id)
      } 

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}className="max-w-sm rounded-lg shadow-2xl"/>
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <h2>By: {author}</h2>
      <h3>Tag </h3>
        <h1 className="text-xl">Number of Pages: {totalPages}</h1>
        <h2 className="text-xl">Publisher: {publisher}</h2>
        <h3 className="text-xl">Year of Publishing: {yearOfPublishing}</h3>
        <h4 className="text-xl">Rating: {rating}</h4>
        <button onClick={() =>handleMarkAsRead(id)} className="btn btn-accent m-2">MArk as Read</button>
        <button className="btn btn-info m-2">Add to Wish List</button>
          </div>
  </div>
</div>
    );
};

export default BookDetails;