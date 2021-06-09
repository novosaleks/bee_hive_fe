import { useState } from 'react';

import { Form, Label, Output, Error } from './album-upload-form.style';
import { useMutation } from '@apollo/client';
import { UPLOAD_PHOTO } from '../../graphql/photo';

const AlbumUploadForm = ({ albumId }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const [uploadPhoto] = useMutation(UPLOAD_PHOTO, {
        onCompleted: () => console.log('on load photo'),
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
