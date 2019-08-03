import { connect } from 'react-redux';

import RandomImage from './RandomImage';
import { getRandom } from '../../../Module/actions/random';
import { incrementPosition, decrementPosition } from '../../../Module/actions/position';

const mapStateToProps = state => {
    return { random: state.random, position: state.position };
};

const mapDispatchToProps = dispatch => {
    return {
        getRandom: () => {
            dispatch(getRandom());
        },
        incrementPosition: () => {
            dispatch(incrementPosition());
        },
        decrementPosition: () => {
            dispatch(decrementPosition());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RandomImage);
