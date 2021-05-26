import React from 'react';
import PostAuthorAndData from '../post-author-and-data';
import RateBlock from '../rate-block';
import PostText from '../post-text';
import DeleteEditPost from '../delete-edit-post';
import { RightBarDiv } from './user-news-right-bar.style';
const UserNewsRightBar = ({ name, date, postId, text }) => {
    return (
        <RightBarDiv>
            <DeleteEditPost postId={postId} />
            <PostAuthorAndData
                name={name}
                date={date}
            />
            <PostText text={text} />
            <RateBlock />
        </RightBarDiv>
    );
};

export default UserNewsRightBar;
