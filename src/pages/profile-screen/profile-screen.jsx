import { useEffect, useState } from 'react';

import AlbumsBlock from '../../components/albums-block';
import SideBarUserInfo from '../../containers/sidebar-user-info-container';
import Wall from '../../components/wall';
import {
    StyledPageWrapper,
    StyledDivPage,
    StyledPageContent,
} from '../../common/style/index';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../graphql/user';
import { useParams } from 'react-router-dom';

const ProfileScreen = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const { loading, error, data } = useQuery(GET_USER_BY_ID, {
        variables: { userId: userId },
    });

    useEffect(() => {
        if (data) {
            setUser(data.getUserById);
        }
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error! ${error.message}`}</div>;

    return (
        <>
            {user && (
                <StyledPageWrapper>
                    <StyledDivPage>
                        <SideBarUserInfo user={user} />
                        <StyledPageContent>
                            <AlbumsBlock />
                            <Wall user={user} />
                        </StyledPageContent>
                    </StyledDivPage>
                </StyledPageWrapper>
            )}
        </>
    );
};

export default ProfileScreen;
