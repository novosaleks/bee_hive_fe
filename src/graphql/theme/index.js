import { gql } from '@apollo/client';
import { activeThemeVar } from '../../cache';
import { THEMES } from '../../common/utils/constants';

export const GET_ACTIVE_THEME = gql`
    query GetActiveTheme {
        activeTheme @client
    }
`;

export const setActiveTheme = theme => {
    window.localStorage.setItem('activeTheme', theme);
    activeThemeVar(THEMES[theme]);
};
