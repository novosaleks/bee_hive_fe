import { useMutation } from '@apollo/client';
import { UPLOAD_PHOTO } from '../../graphql/photo';
import { Label, Title, Wrapper } from './upload-photo.style';

import { useNotificationService } from '../../common/context/notificationContext';

const UploadPhoto = () => {
    const notify = useNotificationService();

    const [uploadPhoto] = useMutation(UPLOAD_PHOTO, {
        onCompleted: () => {
            notify({ text: 'Avatar was loaded successfully', type: 'success' });
        },
    });

    const handleUploadPhoto = ({
                                   target: {
                                       validity,
                                       files: [file],
                                   },
                               }) =>
        validity.valid && uploadPhoto({ variables: { file, isAvatar: true } });

    return (
        <Wrapper>
            <Title fontSize={['0.6rem', '1rem']}>Avatar:</Title>
            <Label>
                <input type='file' required onChange={handleUploadPhoto} />
                <span>+</span>
            </Label>
        </Wrapper>
    );
};

export default UploadPhoto;
