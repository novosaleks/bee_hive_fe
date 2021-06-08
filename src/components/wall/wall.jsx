import { useEffect, useState } from 'react';

import NewPostInput from '../new-post-input';
import UserNews from '../../containers/user-news-container';
import Title from '../title';

import { formatDate } from '../../common/utils';

import { DivLine, StyledDiv, StyledText } from '../../common/style/index';
import { WallBodyDiv, UserPostBlock } from './wall.style';

import { useQuery } from '@apollo/client';
import { GET_WALL_POSTS_BY_USER_ID } from '../../graphql/post';

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
                    <NewPostInput userId={user.id} />
                    {posts &&
                        posts.map((post, index, arr) => {
                            const time =
                                post.createdAt === post.updatedAt ? (
                                    formatDate(post.createdAt)
                                ) : (
                                    <StyledText>
                                        edited at {formatDate(post.updatedAt)}
                                    </StyledText>
                                );
                            return (
                                <UserPostBlock key={post.id}>
                                    <UserNews
                                        name={
                                            post.author.firstName +
                                            ' ' +
                                            post.author.lastName
                                        }
                                        postId={post.id}
                                        photo={post.author.avatar?.url}
                                        authorId={post.author.id}
                                        text={post.text}
                                        date={time}
                                        ratingColor={user.karma}
                                        rateScore={user.karma}
                                    />
                                    {/* Don't render DivLine after the last post */}
                                    {index !== arr.length - 1 && <DivLine />}
                                </UserPostBlock>
                            );
                        })}
                </WallBodyDiv>
            </StyledDiv>
        </UpdateWallProvider>
    );
};

export default Wall;
