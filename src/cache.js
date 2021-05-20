import { InMemoryCache, makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                theme: {
                    read() {
                        return themeVar();
                    },
                },
            },
        },
    },
});

export const themeVar = makeVar({});
