import { InMemoryCache, makeVar } from '@apollo/client';
import { THEMES } from './common/utils/constants';

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                activeTheme: {
                    read() {
                        return activeThemeVar();
                    },
                },
            },
        },
    },
});

const activeThemeFromLocalStorage = window.localStorage.getItem('activeTheme');
const activeThemeInitialValue = activeThemeFromLocalStorage || THEMES.light;

export const activeThemeVar = makeVar(activeThemeInitialValue);
