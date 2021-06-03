import { useMutation } from '@apollo/client';
import { UPLOAD_PHOTO } from '../../graphql/photo';

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
        <div>
            <label>Avatar:</label>
            <input type='file' required onChange={handleUploadPhoto} />
            {/* <button onClick={handleUploadPhoto}>Change</button> */}
        </div>
    );
};

export default UploadPhoto;
