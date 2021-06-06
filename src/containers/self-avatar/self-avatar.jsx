import UserAvatar from '../../components/user-avatar';
import { GET_CURRENT_USER } from '../../graphql/user';
import useQueriedData from '../../common/hooks/useQueriedData';

const SelfAvatar = props => {
    const [data, fallback] = useQueriedData(GET_CURRENT_USER);

    if (fallback) {
        return fallback;
    }

    return <UserAvatar photo={data.currentUser.avatar?.url} {...props} />;
};

export default SelfAvatar;
