// SharedStateContext.js
import { createContext, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const SharedStateContext = createContext();

export function ContextProvider({ children }) {
  const [BookArray, setBookArray] = useState([]);
  // console.log(BookArray);
  function createBook(property1, property2, generatedID, property3) {
    return {
      title: property1, author: property2, item_id: generatedID, category: property3,
    };
  }

  return (
    <SharedStateContext.Provider value={{
      BookArray, setBookArray, createBook,
    }}
    >
      {children}
    </SharedStateContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children as a node (React node)
};

export default SharedStateContext;
