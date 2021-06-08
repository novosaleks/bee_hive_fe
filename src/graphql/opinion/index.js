export const SET_OPINION_BY_POST_ID = gql`
    mutation SetOpinionByPostId($postId: ID!, $opinion: String!) {
        setOpinionByPostId(postId: $postId, opinion: $opinion) {
            success
            message
        }
    }
`;
