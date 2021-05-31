import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PHOTO } from '../../graphql/album';

import { motion } from 'framer-motion';

const AlbumProgressBar = ({ file, setFile }) => {
    const [addPhoto, { progress, url }] = useMutation(ADD_PHOTO);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <motion.div
            className='progress-bar'
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}></motion.div>
    );
};

export default AlbumProgressBar;
