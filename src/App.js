// import './App.css';
import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import BookLayout from './components/BookLayout';
import { ContextProvider } from './ContextProvider';
import Books from './components/Book-List/Books';
import Category from './components/Category/Category';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BookLayout />}>
        <Route index element={<Books />} />
        <Route path="category" element={<Category />} />
      </Route>,
    ),
  );

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
