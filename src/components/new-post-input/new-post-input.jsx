import { useEffect, useRef } from 'react';
import { StyledDiv, StyledText } from '../../common/style/index';
import { InputPost, PostButton } from './new-post-input.style';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../graphql/post';
import { useUpdateWall } from '../../common/context/updateWallContext';

const NewPostInput = () => {
    const [createPost, { data }] = useMutation(CREATE_POST);
    const inputRef = useRef();
    const updateWall = useUpdateWall();

    useEffect(() => {
        if (data) {
            const success = data.createPost;
            if (success) {
                // TODO add a notification
                console.log('Success! The new post has been created!');
                inputRef.current.value = '';
                updateWall();
            }
        }
    }, [data]);

    const handleClick = async () => {
        console.log('test1');
        const recipientId = 2;
        await createPost({
            variables: {
                recipientId: recipientId,
                text: inputRef.current.value,
            },
        });
        console.log('test2');
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
