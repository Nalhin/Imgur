import { connect } from 'react-redux';

import Favorites from './Favorites'
import {getFavorites} from '../../../Module/actions/favorites'

const mapStateToProps = state => {
    return { favorites: state.favorites};
};

const mapDispatchToProps=dispatch=>{
    return{
        getFavorites: () => {
            dispatch(getFavorites());
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);