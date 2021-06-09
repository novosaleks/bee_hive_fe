import { useState } from 'react';
import PostAuthorAndData from '../post-author-and-data';
import PostText from '../post-text';
import PostEdit from '../post-edit';
import DeleteEditPost from '../delete-edit-post';
import { RightBarDiv } from './user-news-right-bar.style';
import PostFooter from '../../containers/post-footer-container';

const UserNewsRightBar = ({ name, date, postId, authorId, text, post }) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = edit => {
        return setEdit(edit);
    };

    return (
        <RightBarDiv>
            <DeleteEditPost
                postId={postId}
                authorId={authorId}
                handleEdit={handleEdit}
            />
            <PostAuthorAndData name={name} authorId={authorId} date={date} />
            {edit ? (
                <PostEdit postId={postId} text={text} handleEdit={handleEdit} />
            ) : (
                <PostText text={text} />
            )}
            <PostFooter componentId={postId} post={post} />
        </RightBarDiv>
    );
};

export default UserNewsRightBar;
