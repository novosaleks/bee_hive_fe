import { useEffect, useState } from 'react';

import NewPostInput from '../new-post-input';
import UserNews from '../../containers/user-news-container';
import Title from '../title';

import { DivLine, StyledDiv } from '../../common/style/index';
import { WallBodyDiv, UserPostBlock } from './wall.style';

import { useQuery } from '@apollo/client';
import { GET_WALL_POSTS_BY_USER_ID } from '../../graphql/post';

import { formatDate } from '../../common/utils';

import { UpdateWallProvider } from '../../common/context/updateWallContext';

const Wall = ({ user }) => {
    const [posts, setPosts] = useState([]);
    const { loading, error, data, refetch } = useQuery(
        GET_WALL_POSTS_BY_USER_ID,
        {
            variables: { userId: user.id },
        }
    );

    useEffect(() => {
        if (data) {
            setPosts(data.getWallPostsByUserId);
        }
    }, [data]);

    const updateWall = () => {
        refetch();
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error ${error.message}`}</div>;

    return (
        <UpdateWallProvider updateWall={updateWall}>
            <StyledDiv marginTop='5%'>
                <Title>Wall</Title>
                <WallBodyDiv>
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
                </WallBodyDiv>
            </StyledDiv>
        </UpdateWallProvider>
    );
};

export default Wall;
