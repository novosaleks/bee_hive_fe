import { useQuery } from '@apollo/client';

const useQueriedData = (action, options = {}) => {
    const { loading, error, data } = useQuery(action, options);

    let fallback = null;

    if (loading) {
        fallback = <div>Loading...</div>;
    }
    if (error) {
        fallback = <div>{`Error: ${error.message}`}</div>;
    }

    return [data, fallback];
};

export default useQueriedData;
