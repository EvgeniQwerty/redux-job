import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPositions } from './position-slice';
import data from '../../mock/data.json';
import { selectFilters } from 'features/filters/filter-slice';
import { selectVisiblePositions } from './position-slice';

export const usePositions = () => {
    const dispatch = useDispatch();

    const filters = useSelector(selectFilters);
    const positions = useSelector((state) =>
        selectVisiblePositions(state, filters)
    );

    useEffect(() => {
        dispatch(addPositions(data));
    }, [dispatch]);

    return positions;
};
