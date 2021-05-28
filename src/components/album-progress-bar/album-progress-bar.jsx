import { useEffect } from 'react';
import useStorage from '../../common/firebase/hooks/useStorage';
import { motion } from 'framer-motion';

const AlbumProgressBar = ({ file, setFile }) => {
    const { progress, url } = useStorage(file);

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
