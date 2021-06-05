import useQueriedData from '../../common/hooks/useQueriedData';
import { GET_CURRENT_USER } from '../../graphql/user';

import SubscriptionUser from '../subscription-user';
const UsersPreview = ({ users, smallBlock }) => {
    const [userData, fallback] = useQueriedData(GET_CURRENT_USER);
    return (
        fallback || (
            <>
                {users
                    ?.filter((user, index) =>
                        index < 5 && user.id !== userData.currentUser.id
                            ? user
                            : null
                    )
                    .map(user => (
                        <SubscriptionUser
                            {...{
                                user,
                                smallBlock,
                            }}
                            key={user.id}
                        />
                    ))}
            </>
        )
    );
};

export default UsersPreview;
