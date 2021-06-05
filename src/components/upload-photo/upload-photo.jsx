import { useMutation } from '@apollo/client';
import { UPLOAD_PHOTO } from '../../graphql/photo';
import { Label, Title, Wrapper } from './upload-photo.style';

const UploadPhoto = () => {
    const [uploadPhoto] = useMutation(UPLOAD_PHOTO, {
        // TODO add a notification
        onCompleted: data => console.log(data),
    });

    const handleUploadPhoto = ({
        target: {
            validity,
            files: [file],
        },
    }) => validity.valid && uploadPhoto({ variables: { file, avatar: true } });

    return (
        <Wrapper>
            <Title fontSize={['0.6rem', '1rem']}>Avatar:</Title>
            <Label>
                <input type='file' required onChange={handleUploadPhoto} />
                <span>+</span>
            </Label>
            {/* <button onClick={handleUploadPhoto}>Change</button> */}
        </Wrapper>
    );
};

export default UploadPhoto;
