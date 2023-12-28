import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

function useSerchQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
}

export default useSerchQuery;