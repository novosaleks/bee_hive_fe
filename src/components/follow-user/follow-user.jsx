import SubscriptionUser from '../subscription-user';
const FollowUser = ({ follow, smallBlock }) => {
    return (
        <>
            {follow.map(({ id, isFollow }) => (
                <SubscriptionUser
                    {...{
                        id,
                        isFollow,
                        smallBlock,
                    }}
                    key={id}
                />
            ))}
        </>
    );
};

export default FollowUser;
