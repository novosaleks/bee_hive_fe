import React from 'react';
import SubscriptionUser from '../subscription-user';
const FollowUser = ({ follow, onlineBlock }) => {

   return (

      <>
         {follow.map(({
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
                  onlineBlock
               }}
               key={login}
            />


         ))}

      </>
   );
}

export default FollowUser;