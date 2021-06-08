import { useParams } from 'react-router-dom';
import Subscribers from '../subscribers';
import Subscription from '../subscriptions';

const FollowUsersBlock = ({ activeTab, currentUserId }) => {
    const { userId } = useParams();

    const tabsContent = {
        'page followers': (
            <Subscribers userId={userId} currentUserId={currentUserId} />
        ),
        'page following': (
            <Subscription userId={userId} currentUserId={currentUserId} />
        ),
    };

    return tabsContent[activeTab];
};

export default FollowUsersBlock;
