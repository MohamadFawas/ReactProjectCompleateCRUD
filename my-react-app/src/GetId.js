// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const GetId = () => {
//     const [books, setBooks] = useState([]);

//   const [selectedBookId, setSelectedBookId] = useState(null);
//   const [selectedBookDetails, setSelectedBookDetails] = useState(null);

//   //getById
//   const handleViewBook = async (bookId) => {
//     try {
//       const response = await axios.get(`http://localhost:9090/library/getId/${bookId}`);
//       setSelectedBookId(bookId);
//       setSelectedBookDetails(response.data.result.book);
//     } catch (error) {
//       console.error('Error fetching book details:', error);
//     }
//   };


//   return (
//     <div>
//       <button className="btn btn-info" onClick={() => handleViewBook(book.id)}>
//                   View
//                 </button>
//     </div>
//   )
// }

// export default GetId
