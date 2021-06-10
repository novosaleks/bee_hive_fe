import { useState } from 'react';

import { Form, Label, Output, Error } from './album-upload-form.style';
import { useMutation } from '@apollo/client';
import { GET_PHOTOS_BY_PHOTO_ALBUM_ID, UPLOAD_PHOTO } from '../../graphql/photo';
import useQueriedData from '../../common/hooks/useQueriedData';

const AlbumUploadForm = ({ albumId }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const { refetch } = useQueriedData(GET_PHOTOS_BY_PHOTO_ALBUM_ID,
        {
            variables: {
                photoAlbumId: albumId,
            },
        },
    );

    const [uploadPhoto] = useMutation(UPLOAD_PHOTO, {
        onCompleted: refetch,
    });

    const types = ['image/png', 'image/jpeg'];

    const handleChange = async e => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');

            await uploadPhoto({
                variables: {
                    photoAlbumId: albumId,
                    file: selected,
                    isAvatar: false,
                },
            });

        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    };

    return (
        <Form>
            <Label>
                <input type='file' onChange={handleChange} />
                <span>+</span>
            </Label>
            <Output>
                {error && <Error>{error}</Error>}
                {file && <div>{file.name}</div>}
            </Output>
        </Form>
    );
};

export default AlbumUploadForm;
