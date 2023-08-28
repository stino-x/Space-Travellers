import React, { useEffect } from 'react';
import './books.css';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Form/Form';
import { deleteBook, fetchBook } from '../../redux/books/booksSlice';

export default function Books() {
  const booksstore = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);
  const deleteBookfunc = (ID) => {
    dispatch(deleteBook(ID));
  };
  // console.log(booksstore);

  return (
    <div id="body">
      <ul className="book-list">
        {Array.isArray(booksstore) && booksstore.length > 0 ? (
          booksstore.map((book) => (
            <li className="book-listitems" key={book.item_id}>
              <span className="first-half">
                <div className="book-details">
                  <h3>{book.title}</h3>
                  <h6>{book.author}</h6>
                  <ul>
                    <li>Comments</li>
                    <li>
                      <input className="remove" onClick={() => deleteBookfunc(book.item_id)} type="button" value="remove" />
                    </li>
                    <li>Edit</li>
                  </ul>
                </div>
                <div className="completion">
                  <div className="oval" />
                  <span className="number">6%</span>
                  <h6>Completion</h6>
                </div>
              </span>
              <span className="second-half">
                <div className="current-chapter">CURRENT CHAPTER</div>
                <div className="chapter-name">CHAPTER 10</div>
                <input type="button" value="UPDATE PROGRESS" />
              </span>
            </li>
          ))
        ) : (
          <p>No books to display</p>
        )}
      </ul>
      <div className="seperator" />
      <div className="form-header">ADD NEW BOOK</div>
      <Form />
    </div>
  );
}
