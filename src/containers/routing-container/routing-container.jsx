import Unauthorized from './routes/unauthorized';
import User from './routes/user';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';

const RoutingContainer = () => {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error: ${error.message}`}</div>;

    const user = data.currentUser;

    return (
        <>
            <Unauthorized user={user} />
            <User user={user} />
        </>
    );
};

export default RoutingContainer;
