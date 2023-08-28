import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import SharedStateContext from '../../ContextProvider';
import { AddBook, fetchBook } from '../../redux/books/booksSlice';

export default function Form() {
  // const BookArray = useSelector((state) => state.books.books);
  const { createBook } = useContext(SharedStateContext);
  const [Bookname, setBookName] = useState('');
  const [Author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleBookname = (event) => {
    setBookName(event.target.value);
  };

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onSubmitBook = async (e) => {
    e.preventDefault();
    if (Bookname && Author !== '') {
      const uniqueID = nanoid(8);
      const book = createBook(Bookname, Author, uniqueID, 'uncategorized');
      await dispatch(AddBook(book));
      dispatch(fetchBook());
      // BookArray.push(book);
      setBookName('');
      setAuthor('');
      // console.log(BookArray);
    }
  };
  return (
    <form action="" method="post">
      <input type="text" onChange={handleBookname} value={Bookname} className="form-title" placeholder="Title" />
      <input type="text" onChange={handleAuthor} value={Author} className="form-author" placeholder="Author" />
      <input type="button" value="ADD BOOK" onClick={onSubmitBook} />
    </form>

  );
}
