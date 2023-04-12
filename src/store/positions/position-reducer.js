import { LOAD_POSITIONS } from './position-actions';

export const positionsReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_POSITIONS: {
            return action.positions;
        }

        default: {
            return state;
        }
    }
};
