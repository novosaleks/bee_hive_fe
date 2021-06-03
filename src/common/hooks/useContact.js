import { GET_ALL_USERS } from '../../graphql/user';
import useQueriedData from './useQueriedData';

const useContact = () => {
    const [data, fallback] = useQueriedData(GET_ALL_USERS);

    if (fallback) {
        return null;
    }

    return data.getAllUsers;
};

export default useContact;
