import React, { useEffect, useState } from 'react';
import axios from 'axios';



const BookViews = () => {
  //getAll
  const [books, setBooks] = useState([]);
  //getById
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [selectedBookDetails, setSelectedBookDetails] = useState(null);

  // Update - Track the book currently being updated
  const [updateBook, setUpdateBook] = useState(null);
  //post
  const [newBook, setNewBook] = useState({
    indexNumber: '',
    name: '',
    title: ''
  });

  //getAll
  useEffect(() => {
    loadBooks();
  }, [books],[selectedBookId]);

  const loadBooks = async () => {
    try {
      const response = await axios.get("http://localhost:9090/library/getAll");
      setBooks(response.data.result.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    
  };
//post
  const handleAddBook = async () => {
    
    try {
      const response = await axios.post("http://localhost:9090/library/post", newBook);
      setBooks([...books, response.data.result.book]);
      // setNewBook({
      //   indexNumber: '',
      //   name: '',
      //   title: ''
      // });
    } catch (error) {
      console.error('Error adding book:', error);
    }
    setNewBook({
        indexNumber: '',
        name: '',
        title: ''
      });
    
  };



//delete
  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`http://localhost:9090/library/delete/${bookId}`);
      setBooks(books.filter((book) => book.id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
//getById
  const handleViewBook = async (bookId) => {
    try {
      const response = await axios.get(`http://localhost:9090/library/getId/${bookId}`);
      setSelectedBookId(bookId);
      setSelectedBookDetails(response.data.result.book);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };
//post
  const handleChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value
    });
    event.preventDefault();
   
    // setTimeout(() => {
    //   window.location.reload();
    // }, 5000);
  };



  // Update
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:9090/library/update/${updateBook.id}`, updateBook);
      // Update the books array with the updated book details
      setBooks(books.map(book => (book.id === updateBook.id ? updateBook : book)));
      // Reset the updateBook state
      setUpdateBook(null);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  // Update
  const handleUpdateInputChange = (event) => {
    setUpdateBook({
      ...updateBook,
      [event.target.name]: event.target.value
    });
  };

  // Update
  const handleUpdateClick = (book) => {
    // Set the updateBook state with the book's current details
    setUpdateBook({
      ...book
    });
  };




  return (
    <section>
      <table className="table table-bordered table-hover">
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Index_Number</th>
            <th>Name</th>
            <th>Title</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {books.map((book, index) => (
            <tr key={book.id}>
              <th scope="row">{index + 1}</th>
              <td>{book.indexNumber}</td>
              <td>{book.name}</td>
              <td>{book.title}</td>

              <td className="mx-2">
                <button className="btn btn-info" onClick={() => handleViewBook(book.id)}>
                  View
                </button>
              </td>
              <td className="mx-2">
              <button className="btn btn-warning" onClick={() => handleUpdateClick(book)}>
                Update
              </button>
                {/* <button className="btn btn-warning" >
                  Update
                </button> */}
           
              </td>
              <td className="mx-2">
                <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    //Add Box
      <div className="mt-4">
        <h3>Add New Book</h3>
        <input
          type="text"
          name="indexNumber"
          value={newBook.indexNumber}
          onChange={handleChange}
          placeholder="Index Number"
        />
        <input
          type="text"
          name="name"
          value={newBook.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <button className="btn btn-primary" onClick={handleAddBook}>
          Add
        </button>
      </div>


      //select Veiwed By Id
      {selectedBookDetails && (
        <div className="mt-4">
          <h3>Selected Book Details</h3>
          <p>ID: {selectedBookDetails.id}</p>
          <p>Index Number: {selectedBookDetails.indexNumber}</p>
          <p>Name: {selectedBookDetails.name}</p>
          <p>Title: {selectedBookDetails.title}</p>
        </div>
      )}


       {/* Update Box */}
      {updateBook && (
        <div className="mt-4">
          <h3>Update Book</h3>
          <input
            type="text"
            name="indexNumber"
            value={updateBook.indexNumber}
            onChange={handleUpdateInputChange}
            placeholder="Index Number"
          />
          <input
            type="text"
            name="name"
            value={updateBook.name}
            onChange={handleUpdateInputChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="title"
            value={updateBook.title}
            onChange={handleUpdateInputChange}
            placeholder="Title"
          />
          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </div>
      )}

    </section>
  );
};

export default BookViews;
