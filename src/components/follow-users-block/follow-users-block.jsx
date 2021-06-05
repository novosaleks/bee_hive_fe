import { useParams } from 'react-router-dom';
import Subscribers from '../subscribers';
import Subscription from '../subscriptions';

const FollowUsersBlock = ({ activeTab }) => {
    const { userId } = useParams();
    console.log(userId, 'userId');

    const tabsContent = {
        'page followers': <Subscribers userId={userId} />,
        'page following': <Subscription userId={userId} />,
    };

    return tabsContent[activeTab];
};

export default FollowUsersBlock;
