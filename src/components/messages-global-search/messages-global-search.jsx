// import React from 'react';
// import MessagesContact from '../messages-contact/messages-contact';

// import { StyledDiv, StyledText } from '../../common/style/index';
// import {
//     GlobalSearchDiv,
//     GlobalSearchTitle,
//     MessagesContactsWrapper,
// } from './messages-global-search.style';

// import { useQuery } from '@apollo/client';
// import { GET_ALL_USERS } from '../../graphql/user';

// const MessagesGlobalSearch = ({
//     currentUser,
//     searchTerm,
//     handleClickSearch,
// }) => {
//     const { loading, error, data } = useQuery(GET_ALL_USERS);

//     if (loading) {
//         return <div>LOADING...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }
//     const allUsers = data.getAllUsers;

//     const filteredUsers =
//         allUsers &&
//         allUsers.filter((user) =>
//             user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) &&
//             user.id !== currentUser.id
//                 ? user
//                 : null
//         );

//     return (
//         <StyledDiv mt="10px">
//             <GlobalSearchDiv>
//                 <GlobalSearchTitle>Global Search</GlobalSearchTitle>
//             </GlobalSearchDiv>

//             <MessagesContactsWrapper>
//                 {filteredUsers.length !== 0 ? (
//                     filteredUsers.map((user) => (
//                         <MessagesContact
//                             {...user}
//                             smallBlock={true}
//                             event={() => handleClickSearch(user)}
//                             key={user.id}
//                         />
//                     ))
//                 ) : (
//                     <StyledText>We do not know this user...</StyledText>
//                 )}
//             </MessagesContactsWrapper>
//         </StyledDiv>
//     );
// };

// export default MessagesGlobalSearch;

import React from 'react';
import MessagesContact from '../messages-contact';

import { StyledDiv } from '../../common/style/index';
import {
    GlobalSearchDiv,
    GlobalSearchTitle,
    MessagesContactsWrapper,
} from './messages-global-search.style';

const AllUsersInfo__EXAMPLE = [
    {
        name: 'Stan Pupcin',
        photo: null,
        status: 'in the gym',
        ratingColor: '#5DAC38',
        statusColor: '#5DAC38',
        rateScore: '4,6',
        isFollow: false,
        login: 'user11111',
    },
    {
        name: 'Ann Pupcin',
        photo: null,
        status: 'at home',
        ratingColor: '#5DAC38',
        statusColor: '#5DAC38',
        rateScore: '5',
        isFollow: true,
        login: 'user2222',
    },
    {
        name: 'Mark Pupcin',
        photo: null,
        status: 'at home',
        ratingColor: '#5DAC38',
        statusColor: '#5DAC38',
        rateScore: '4',
        isFollow: false,
        login: 'user33333',
    },
    {
        name: 'Ivan Pupcin',
        photo: null,
        status: 'in the gym',
        ratingColor: '#C53B0E',
        statusColor: '#5DAC38',
        rateScore: '1,6',
        isFollow: true,
        login: 'user4444',
    },
    {
        name: 'Ann Pupcin',
        photo: null,
        status: 'at home',
        ratingColor: '#5DAC38',
        statusColor: '#5DAC38',
        rateScore: '5',
        isFollow: true,
        login: 'user55555',
    },
    {
        name: 'Tom Pupcin',
        photo: null,
        status: 'at the middle of nowhere',
        ratingColor: '#5DAC38',
        statusColor: '#C53B0E',
        rateScore: '4',
        isFollow: true,
        login: 'user35668',
    },
];

const MessagesGlobalSearch = ({
    identifyUser,
    searchTerm,
    handleClickSearch,
}) => {
    return (
        <StyledDiv mt="10px">
            <GlobalSearchDiv>
                <GlobalSearchTitle>Global Search</GlobalSearchTitle>
            </GlobalSearchDiv>

            <MessagesContactsWrapper>
                {AllUsersInfo__EXAMPLE.filter((user) =>
                    user.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) &&
                    user.login !== identifyUser
                        ? user
                        : null
                ).map((user) => (
                    <MessagesContact
                        {...user}
                        smallBlock={true}
                        event={() => handleClickSearch(user)}
                        key={user.login}
                    />
                ))}
            </MessagesContactsWrapper>
        </StyledDiv>
    );
};

export default MessagesGlobalSearch;
