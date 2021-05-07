import React from 'react';
import SubscriptionUser from '../subscriptionUser';
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
         }, index) => (

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
               key={index}
            />


         ))}

      </>
   );
}

export default FollowUser;