import { useEffect, useState } from 'react';
import { GET_NEWS_BY_USER_ID } from '../../graphql/user';
import useQueriedData from '../../common/hooks/useQueriedData';
import { formatDate } from '../../common/utils';

import UsersNews from '../../containers/user-news-container';
import Title from '../title';

import { DivLine, StyledDiv } from '../../common/style/index';

const WallBlock = ({ currentUserId }) => {
    const { data, fallback } = useQueriedData(GET_NEWS_BY_USER_ID, {
        variables: { userId: currentUserId },
    });
    const [news, setNews] = useState(null);
    useEffect(() => {
        if (data) {
            setNews(data.getNewsByUserId);
        }
    }, [data]);

    console.log(news);
    return (
        fallback || (
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
                                ratingColor={newsItem.author.karma || '0'}
                                rateScore={newsItem.author.karma || '0'}
                                photo={newsItem.author.avatar?.url}
                                authorId={newsItem.author.id}
                                text={newsItem.text}
                                date={time}
                            />
                            {index !== arr.length - 1 && <DivLine />}
                        </StyledDiv>
                    );
                })}
            </StyledDiv>
        )
    );
};

export default WallBlock;
