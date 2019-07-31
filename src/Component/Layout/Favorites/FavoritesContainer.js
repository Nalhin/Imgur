import { connect } from 'react-redux';

import Favorites from './Favorites';
import { getFavorites, deleteFavorites } from '../../../Module/actions/favorites';

const mapStateToProps = state => {
    return { favorites: state.favorites };
};

const mapDispatchToProps = dispatch => {
    return {
        getFavorites: () => {
            dispatch(getFavorites());
        },
        deleteFavorites: image => {
            dispatch(deleteFavorites(image));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);
