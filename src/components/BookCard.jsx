import React from 'react';

const BookCard = ({ book, inBookshelf, addToBookshelf, removeFromBookshelf }) => {
    const coverUrl = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/128x193.png?text=No+Cover';

    return (
        <div className="book-card">
            <img src={coverUrl} alt={`${book.title} cover`} className="book-cover" />
            <div className="book-info">
                <h3>{book.title}</h3>
                <p>Authors: {book.author_name?.join(', ')}</p>
                <p>Published Year: {book.first_publish_year}</p>
                <p>No. of Editions: {book.edition_count}</p>
                {inBookshelf ? (
                    <button className="remove-from-bookshelf-button" onClick={removeFromBookshelf}>Remove from Bookshelf</button>
                ) : (
                    <button className="add-to-bookshelf-button" onClick={addToBookshelf}>Add to Bookshelf</button>
                )}
            </div>
        </div>
    );
};

export default BookCard;
