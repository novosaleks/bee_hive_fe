import React, { useEffect, useState } from 'react';

import AlbumsBlock from '../../components/albums-block';
import SideBarUserInfo from '../../containers/sidebar-user-info-container';
import Publications from '../../components/publications';
import {
    StyledPageWrapper,
    StyledDivPage,
    StyledPageContent,
} from '../../common/style/index';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';

const ProfileScreen = () => {
    const [user, setUser] = useState(null);
    const { loading, error, data } = useQuery(GET_CURRENT_USER);

    useEffect(() => {
        if (data) {
            setUser(data.currentUser);
        }
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error! ${error.message}`}</div>;

    return (
        <>
            {user && (
                <StyledPageWrapper>
                    <StyledDivPage>
                        <SideBarUserInfo />
                        <StyledPageContent>
                            <AlbumsBlock />
                            <Publications user={user} />
                        </StyledPageContent>
                    </StyledDivPage>
                </StyledPageWrapper>
            )}
        </>
    );
};

export default ProfileScreen;
