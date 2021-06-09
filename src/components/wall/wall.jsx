import { useEffect, useState } from 'react';

import NewPostInput from '../new-post-input';
import UserNews from '../../containers/user-news-container';
import Title from '../title';

import { formatDate } from '../../common/utils';

import { DivLine, StyledDiv } from '../../common/style/index';
import { WallBodyDiv, UserPostBlock } from './wall.style';

import { GET_WALL_POSTS_BY_USER_ID } from '../../graphql/post';

import { UpdateWallProvider } from '../../common/context/updateWallContext';
import useQueriedData from '../../common/hooks/useQueriedData';

const Wall = ({ user }) => {
    const [posts, setPosts] = useState([]);
    const { fallback, data, refetch } = useQueriedData(
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

    if (fallback) {
        return fallback;
    }
    return (
        <UpdateWallProvider updateWall={updateWall}>
            <StyledDiv marginTop='5%'>
                <Title>Wall</Title>
                <WallBodyDiv>
                    <NewPostInput userId={user.id} />
                    {posts.map((post, index, arr) => {
                        const time =
                            post.createdAt === post.updatedAt ? (
                                formatDate(post.createdAt)
                            ) : (
                                <span>
                                    edited at {formatDate(post.updatedAt)}
                                </span>
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
                                    post={post}
                                    photo={post.author.avatar?.url}
                                    authorId={post.author.id}
                                    text={post.text}
                                    date={time}
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
