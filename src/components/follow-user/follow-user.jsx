import SubscriptionUser from '../subscription-user';
const FollowUser = ({ follow, smallBlock }) => {
    return (
        <>
            {follow.map(
                ({
                    name,
                    photo,
                    status,
                    ratingColor,
                    statusColor,
                    rateScore,
                    isFollow,
                    login,
                }) => (
                    <SubscriptionUser
                        {...{
                            name,
                            photo,
                            status,
                            ratingColor,
                            statusColor,
                            rateScore,
                            isFollow,
                            login,
                            smallBlock,
                        }}
                        key={login}
                    />
                )
            )}
        </>
    );
};

export default FollowUser;
