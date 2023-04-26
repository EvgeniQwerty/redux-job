import { usePositions } from './use-positions';
import { useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { addFilter } from '../filters/filter-slice';

const JobList = () => {
    const positions = usePositions();

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
