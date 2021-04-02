import React from 'react'
//creates the Context
const BookmarksContext = React.createContext({
  bookmarks: [],
  addBookmark: () => {},
  deleteBookmark: () => {},
})

export default BookmarksContext