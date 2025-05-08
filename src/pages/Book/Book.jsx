// import React, {use} from 'react';

const Book = ({singleBook}) => { 
    // const data = use(bookPromise)
    // console.log(data);


    const {bookName, author, image,yearOfPublishing,totalPages,rating,category,publisher} = singleBook
    
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='bg-gray-500 p-4 w-2/3 mx-auto'>
    <img
    className="h-[166px]"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      <div className="badge badge-secondary">Identity</div>
      <div className="badge badge-secondary">Young Adult</div>
    </h2>
    <h1 className='text-4xl'>{bookName}</h1>
    <h2 className='text-3xl'>Year Of Publishing:{yearOfPublishing}</h2>
    <h3>Publisher: <span className="text-green-300">{publisher}</span></h3>
    <p>Total Pages: {totalPages}</p>
    <p>By: {author}</p>
          
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;
// npm i react-icons