import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { UPLOAD_PHOTO } from '../../graphql/photo';

const UploadPhoto = () => {
    const [uploadPhoto, { data }] = useMutation(UPLOAD_PHOTO);

    useState(() => {
        if (data) {
            if (data.uploadPhoto.success) {
                // TODO add a notification
                console.log(data.uploadPhoto.message);
            }
        }
    }, [data]);

    // const handleUploadPhoto = ({
    //     target: {
    //         validity,
    //         files: [file],
    //     },
    // }) => validity.valid && uploadPhoto({ variables: { file, avatar: true } });

    const handleUploadPhoto = e => {
        console.log('LOOOOOOOOOOOOOOOOOOOOOOOOOOOOL');
        const file = e.target.files[0];
        console.log('FILE:', file);
        // if (validity.valid) {
        uploadPhoto({ variables: { file } });
        // }
    };

    return (
        <div>
            <label>Avatar:</label>
            <input type='file' required onChange={handleUploadPhoto} />
            {/* <button onClick={handleUploadPhoto}>Change</button> */}
        </div>
    );
};

export default UploadPhoto;
