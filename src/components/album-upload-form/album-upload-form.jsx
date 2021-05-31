import { useState } from 'react';
import AlbumProgressBar from '../album-progress-bar';

import { Form, Label, Output, Error } from './album-upload-form.style';

const AlbumUploadForm = ({ albumId }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = e => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
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
                {file && (
                    <AlbumProgressBar
                        file={file}
                        setFile={setFile}
                        albumId={albumId}
                    />
                )}
            </Output>
        </Form>
    );
};

export default AlbumUploadForm;
