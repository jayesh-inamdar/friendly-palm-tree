import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import './BookSearchPage.css'; // Reuse the CSS from BookSearchPage

const BookSearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const searchBooks = async (e) => {
        setQuery(e.target.value);
        if (e.target.value.length > 2) {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
            setResults(response.data.docs);
        } else {
            setResults([]);
        }
    };

    const addToBookshelf = (book) => {
        let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        bookshelf.push(book);
        localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    };

    return (<div>

        <div className="search-page-container">
             <div className="title-box">
        <h1>Search for Books</h1>
        <p>Find your favorite books using our search feature below.</p>
         </div>

         <div className="search-bar">
                <input type="text" value={query} onChange={searchBooks} placeholder="Search for books..." />
            </div>

         {results.length === 0 ? (
                             <div className="quote-box">
                             <p className="quote">"The more that you read, the more things you will know. The more that you learn, the more places you'll go." - Dr. Seuss</p>
                         </div>
            ) : (
                <React.Fragment>
      
            <div className="results-grid">
                {results.map(book => (
                    <BookCard
                        key={book.key}
                        book={book}
                        inBookshelf={false}
                        addToBookshelf={() => addToBookshelf(book)}
                    />
                ))}
            </div>
            </React.Fragment>
            )}
        </div>
        </div>
    );
};

export default BookSearchPage;
