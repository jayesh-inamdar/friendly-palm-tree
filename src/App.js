import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookSearchPage from './components/BookSearchPage';
import BookshelfPage from './components/BookshelfPage';
import Navbar from './components/Navbar1';

function App() {
    console.log('App component rendered'); // Debugging log
    return (
        <Router> 
            <Navbar/>
            <Routes>
                <Route path="/" element={<BookSearchPage />} />
                <Route path="/bookshelf" element={<BookshelfPage />} />
            </Routes>
        </Router>
    );
}

export default App;
