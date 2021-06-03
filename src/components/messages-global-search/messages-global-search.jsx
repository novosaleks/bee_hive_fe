import MessagesContact from '../messages-contact';

import { MessagesGlobalSearchDiv } from './messages-global-search.style';
import {
    SearchContactsDiv,
    SearchContactsTitle,
} from '../../common/style/index';

const MessagesGlobalSearch = ({ identifyUser, handleClick, users }) => {
    return (
        <MessagesGlobalSearchDiv>
            <SearchContactsDiv>
                <SearchContactsTitle>Global Search</SearchContactsTitle>
            </SearchContactsDiv>

            {users
                ?.filter((user, index) =>
                    index < 5 && user.id !== identifyUser ? user : null
                )
                .map(contact => (
                    <MessagesContact
                        smallBlock
                        contactSearch
                        contactID={contact.id}
                        key={contact.id}
                        event={() => handleClick(contact.id)}
                        users={users}
                    />
                ))}
        </MessagesGlobalSearchDiv>
    );
};

export default MessagesGlobalSearch;
