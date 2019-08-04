import React from 'react';

import FavoriteImage from './FavoriteImage/FavoriteImage';
import './Favorites.scss';
import FavoritesPagination from './FavoritesPagination/FavoritesPagination';

const ITEMS_ON_PAGE = 5;

const Favorites = ({ favorites, getFavorites, deleteFavorites }) => {
    const [splitFav, setSplitFav] = React.useState([]);
    const [pages, setPages] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);

    React.useEffect(() => {
        const pageNumber = Math.ceil(favorites.length / ITEMS_ON_PAGE);
        const elements = [];
        for (let i = 0; i < pageNumber; i++) {
            elements.push(i);
        }
        setPages([...elements]);
    }, [favorites]);

    React.useEffect(() => {
        const firstItem = ITEMS_ON_PAGE * currentPage;
        setSplitFav([...favorites.slice(firstItem, firstItem + ITEMS_ON_PAGE)]);
    }, [favorites, currentPage]);

    React.useEffect(() => {
        getFavorites();
    }, [getFavorites]);

    const setPage = page => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    return (
        <div className="favorites">
            <FavoritesPagination pages={pages} currentPage={currentPage} setPage={setPage} />

            {splitFav &&
                splitFav.map(image => (
                    <FavoriteImage image={image} deleteFavorites={deleteFavorites} key={image.id} />
                ))}
            <FavoritesPagination pages={pages} currentPage={currentPage} setPage={setPage} />
        </div>
    );
};

export default Favorites;
