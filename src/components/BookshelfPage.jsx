import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';


const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBookshelf);
    }, []);

    const removeFromBookshelf = (index) => {
        const updatedBookshelf = [...bookshelf];
        updatedBookshelf.splice(index, 1);
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <div>
             <div className="title-box">
        <h1>Your Collection</h1>
        <p>Find your favorite books that you have collected on this website.</p>
         </div>
            <div className="results-grid">
                {bookshelf.length > 0 ? (
                    bookshelf.map((book, index) => (
                        <BookCard
                            key={index}
                            book={book}
                            inBookshelf={true}
                            removeFromBookshelf={() => removeFromBookshelf(index)} />
                    ))
                ) : (
                    <p>No books in your bookshelf.</p>
                )}
            </div>
         </div>
    );
};

export default BookshelfPage;
