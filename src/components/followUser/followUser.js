import React from 'react';
import SubscriptionUser from '../subscriptionUser';
const FollowUser = (props) => {

   return (

      <>
         {props.follow.map(({
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
                  login
               }}
               key={index}
            />


         ))}

      </>
   );
}

export default FollowUser;