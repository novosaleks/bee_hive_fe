import React, { useEffect, useState } from 'react';

import NewPostInput from '../new-post-input';
import UserNews from '../../containers/user-news-container';
import Title from '../title';

import { DivLine, StyledDiv } from '../../common/style/index';
import { PublicationBodyDiv, UserPostBlock } from './publications.style';

import { useQuery } from '@apollo/client';
import { GET_POSTS_BY_AUTHOR_ID } from '../../graphql/post';

import { formatDate } from '../../common/utils';

const Publications = ({ user }) => {
    const [posts, setPosts] = useState([]);
    const { loading, error, data } = useQuery(GET_POSTS_BY_AUTHOR_ID, {
        variables: { authorId: user.id },
    });

    useEffect(() => {
        if (data) {
            setPosts(data.getPostsByAuthorId);
        }
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error ${error.message}`}</div>;

    return (
        <StyledDiv marginTop='5%'>
            <Title>Publications</Title>
            <PublicationBodyDiv>
                <NewPostInput />
                {posts &&
                    posts.map((post, index, arr) => (
                        <UserPostBlock key={post.id}>
                            <UserNews
                                name={user.firstName + ' ' + user.lastName}
                                postId={post.id}
                                text={post.text}
                                date={formatDate(post.createdAt)}
                            />
                            {/* Don't render DivLine after the last post */}
                            {index !== arr.length - 1 && <DivLine />}
                        </UserPostBlock>
                    ))}
            </PublicationBodyDiv>
        </StyledDiv>
    );
};

export default Publications;
