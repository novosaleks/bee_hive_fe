import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/user';

const useContact = () => {
    const { loading, error, data } = useQuery(GET_ALL_USERS);

    if (loading || error) {
        return null;
    }

    return data.getAllUsers;
};

export default useContact;
