import React, { useState } from 'react';
import PostAuthorAndData from '../post-author-and-data';
import RateBlock from '../rate-block';
import PostText from '../post-text';
import PostEdit from '../post-edit';
import DeleteEditPost from '../delete-edit-post';
import { RightBarDiv } from './user-news-right-bar.style';
const UserNewsRightBar = ({ name, date, postId, text }) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = (edit) => {
        return setEdit(edit);
    };

    return (
        <RightBarDiv>
            <DeleteEditPost postId={postId} handleEdit={handleEdit} />
            <PostAuthorAndData
                name={name}
                date={date}
            />
            {edit ? <PostEdit postId={postId} text={text} handleEdit={handleEdit} /> : <PostText text={text} />}
            <RateBlock />
        </RightBarDiv>
    );
};

export default UserNewsRightBar;
