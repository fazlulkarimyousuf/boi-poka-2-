// import React, {use} from 'react';
// import {builtinRules} from "eslint/use-at-your-own-risk";
import { FaStarHalf } from "react-icons/fa";
import {Link} from "react-router";

const Book = ({singleBook}) => { 
    // const data = use(bookPromise)
    // console.log(data);


    const {bookName, author, image,yearOfPublishing,totalPages,rating,category,publisher,bookId,tags} = singleBook
    
    return (
        <Link to={`/BookDetails/${bookId}`}>
        <div>
            <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow">
  <figure className='bg-gray-500 p-4 w-2/3 mx-auto'>
    <img
    className="h-[166px]"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">

      <div className="flex justify-center gap-10">
        {
          tags.map(tags => <button className="btn">{tags}</button>)
        }
      </div>

    <h2 className="card-title">
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
     <p>By: {author}</p>
     <div className="border-t-1 border-dashed">

     </div>
    <h1 className='text-3xl'>{bookName}</h1>
    {/* <h2 className='text-xl'>Year Of Publishing:{yearOfPublishing}</h2> */}
    <h3>Publisher: <span className="text-green-300">{publisher}</span></h3>
    <p>Total Pages: {totalPages}</p>
   
          
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <FaStarHalf /> </div>
    </div>
  </div>
</div>
        </div>
        </Link>
    );
};

export default Book;
// npm i react-icons