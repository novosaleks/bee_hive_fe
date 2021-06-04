import UserAvatar from '../../components/user-avatar';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';

const SelfAvatar = (props) => {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);

    if (loading) return <UserAvatar {...props} />;
    if (error) return <h1>Error</h1>;

    return <UserAvatar photo={data.currentUser.avatar?.location} {...props} />;
};

export default SelfAvatar;
