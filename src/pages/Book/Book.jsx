// import React, {use} from 'react';

const Book = ({singleBook}) => { 
    // const data = use(bookPromise)
    // console.log(data);


    const {bookName, author, image,yearOfPublishing,totalPages} = singleBook
    
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='p-3'>
    <img
    className="bg-gray-500 "
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      <div className="badge badge-secondary">Identity</div>
      <div className="badge badge-secondary">Young Adult</div>
    </h2>
    <h1 className='text-3xl'>{bookName}</h1>
    <h2 className='text-2xl'>Year Of Publishing:{yearOfPublishing}</h2>
    <p>Total Pages: {totalPages} Page</p>
    <p>Author: {author}</p>

    <div className="card-actions justify-end">
      <div className="">Fiction</div>
      <div className="">Fiction</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;   