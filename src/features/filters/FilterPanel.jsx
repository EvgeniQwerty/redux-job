import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { useSelector, useDispatch } from 'react-redux';
import { clearFilter, removeFilter, selectFilters } from './filter-slice';

const FilterPanel = () => {
    const dispatch = useDispatch();

    const filters = useSelector(selectFilters);

    if (filters.length === 0) return null;

    const handleClearFilters = () => {
        dispatch(clearFilter());
    };

    const handleRemoveFilter = (filter) => {
        dispatch(removeFilter(filter));
    };

    return (
        <Card className='filter-panel'>
            <div className='filter-panel-wrapper'>
                <Stack>
                    {filters.map((filter) => (
                        <Badge
                            key={filter}
                            variant='clearable'
                            onClear={() => handleRemoveFilter(filter)}
                        >
                            {filter}
                        </Badge>
                    ))}
                </Stack>

                <button className='link' onClick={handleClearFilters}>
                    Clear
                </button>
            </div>
        </Card>
    );
};

export { FilterPanel };
