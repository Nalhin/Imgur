import React from 'react';
import './FavoritesPagination.scss';

const FavoritesPagination = ({ pages, currentPage, setPage }) => {
    return (
        pages && (
            <div className="favorites__button-container">
                {pages.map(page => (
                    <button
                        className={
                            page === currentPage
                                ? 'favorites__page-button favorites__page-button--active'
                                : 'favorites__page-button'
                        }
                        key={page}
                        onClick={() => setPage(page)}
                    >
                        {page + 1}
                    </button>
                ))}
            </div>
        )
    );
};
export default FavoritesPagination;
