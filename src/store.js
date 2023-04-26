import { filterReducer } from 'features/filters/filter-slice';
import { positionReducer } from 'features/positions/position-slice';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
    reducer: {
        filters: filterReducer,
        positions: positionReducer,
    },
    devTools: true,
});
