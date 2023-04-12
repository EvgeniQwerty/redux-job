import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import {
    selectAllPositions,
    selectVisiblePositions,
} from '../store/positions/position-selectors';
import { addFilter } from 'store/filters/filter-actions';
import { selectFilters } from 'store/filters/filter-selectors';

const JobList = () => {
    const filters = useSelector(selectFilters);
    const positions = useSelector((state) =>
        selectVisiblePositions(state, filters)
    );

    const dispatch = useDispatch();

    const handleAddFiler = (filter) => {
        dispatch(addFilter(filter));
    };

    return (
        <div className='job-list'>
            {positions.map((item) => (
                <JobPosition
                    key={item.id}
                    handleAddFiler={handleAddFiler}
                    {...item}
                />
            ))}
        </div>
    );
};

export { JobList };
