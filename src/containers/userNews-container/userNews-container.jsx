import React from 'react';
import UserAvatar from '../../components/userAvatar';
import PostAuthorAndDate from '../../components/postAuthorAndDate';
import RateBlock from '../../components/rateBlock';
import PostMessage from '../../components/postMessage';
import { StyledDiv, StyledText } from '../../common/style/index';

const UserNews = ({ name, status, ratingColor, statusColor, rateScore, date, massege }) => {
   return (
      <StyledDiv align="flex-start" mt="10%" mb="10%" direction="row" content="space-between">
         <StyledDiv width="18%">
            <UserAvatar rating={ratingColor || "#C53B0E"} rateScore={rateScore || "1,5"} width={[70, 135]} height={[70, 135]} />
            <StyledText color={statusColor || "#5DAC38"}>{status || "Drink coffeee"}</StyledText>
         </StyledDiv>

         <StyledDiv width="80%">
            <PostAuthorAndDate name={name || "First and last name"} date={date || "Someone  knows the date..."} />
            <PostMessage massege={massege} />
            <RateBlock />
         </StyledDiv>
      </StyledDiv>

   );
}

export default UserNews;