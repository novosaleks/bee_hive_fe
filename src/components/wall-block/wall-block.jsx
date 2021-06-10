import { useEffect, useState } from 'react';
import { GET_NEWS_BY_USER_ID } from '../../graphql/user';
import useQueriedData from '../../common/hooks/useQueriedData';
import { formatDate, isOnline } from '../../common/utils';

import UsersNews from '../../containers/user-news-container';
import Title from '../title';

import { UpdateWallProvider } from '../../common/context/updateWallContext';
import { DivLine, StyledDiv } from '../../common/style/index';

const WallBlock = ({ currentUserId }) => {
    const { data, fallback, refetch } = useQueriedData(GET_NEWS_BY_USER_ID, {
        variables: { userId: currentUserId },
        pollInterval: 500,
    });
    const [news, setNews] = useState(null);
    useEffect(() => {
        if (data) {
            setNews(data.getNewsByUserId);
        }
    }, [data]);

    const updateWall = () => {
        refetch();
    };

    return (
        fallback || (
            <UpdateWallProvider updateWall={updateWall}>
                <StyledDiv marginTop='5%'>
                    <Title>Wall</Title>
                    {news?.map((newsItem, index, arr) => {
                        const time =
                            newsItem.createdAt === newsItem.updatedAt ? (
                                formatDate(newsItem.createdAt)
                            ) : (
                                <span>
                                    edited at {formatDate(newsItem.updatedAt)}
                                </span>
                            );
                        return (
                            <StyledDiv key={newsItem.id}>
                                <UsersNews
                                    name={
                                        newsItem.author.firstName +
                                        ' ' +
                                        newsItem.author.lastName
                                    }
                                    postId={newsItem.id}
                                    post={newsItem}
                                    rateScore={newsItem.author.karma || '0'}
                                    photo={newsItem.author.avatar?.url}
                                    authorId={newsItem.author.id}
                                    text={newsItem.text}
                                    date={time}
                                    status={
                                        isOnline(newsItem.author?.lastVisit)
                                            ? 'Online'
                                            : 'Offline'
                                    }
                                    statusColor={
                                        isOnline(newsItem.author?.lastVisit)
                                            ? '#5DAC38'
                                            : '#C53B0E'
                                    }
                                />
                                {index !== arr.length - 1 && <DivLine />}
                            </StyledDiv>
                        );
                    })}
                </StyledDiv>
            </UpdateWallProvider>
        )
    );
};

export default WallBlock;
