import { useEffect, useRef } from 'react';
import { StyledDiv, StyledText } from '../../common/style/index';
import { InputPost, PostButton } from './new-post-input.style';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../graphql/post';
import { useUpdateWall } from '../../common/context/updateWallContext';
import { useNotificationService } from '../../common/context/notificationContext';

const NewPostInput = ({ userId }) => {
    const [createPost, { data }] = useMutation(CREATE_POST);
    const inputRef = useRef();
    const updateWall = useUpdateWall();

    const notify = useNotificationService();

    useEffect(() => {
        if (data) {
            const response = data.createPost;
            if (response.success) {
                notify({text: response.message, type: 'success'})
                inputRef.current.value = '';
                updateWall();
            } else {
                notify({text: response.message, type: 'fail'})
            }
        }
    }, [data]);

    const handleClick = async () => {
        await createPost({
            variables: {
                recipientId: userId,
                text: inputRef.current.value,
            },
        });
    };

    return (
        <StyledDiv width='100%'>
            <InputPost
                ref={inputRef}
                placeholder='Share your thoughts with the world!!'
            />
            <PostButton
                onClick={handleClick}
                width={[135, 170]}
                height={[45, 55]}
                mt='3%'>
                <StyledText fontSize={['0.7em', '0.9em']}>Post</StyledText>
            </PostButton>
        </StyledDiv>
    );
};

export default NewPostInput;
