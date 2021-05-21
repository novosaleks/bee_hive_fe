import React from 'react';
import PostAuthorAndData from '../post-author-and-data';
import RateBlock from '../rate-block';
import PostMessage from '../post-message';
import DeleteEditPost from '../delete-edit-post';
import { RightBarDiv } from './user-news-right-bar.style';
const UserNewsRightBar = ({ name, date, massege }) => {
    return (
        <RightBarDiv>
            <DeleteEditPost />
            <PostAuthorAndData
                name={name || 'First and last name'}
                data={date || '23.04.2021'}
            />
            <PostMessage massege={massege} />
            <RateBlock />
        </RightBarDiv>
    );
};

export default UserNewsRightBar;
