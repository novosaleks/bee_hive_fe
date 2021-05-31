import RateBlock from '../rate-block';
import { motion } from 'framer-motion';

import { ImgModal } from './album-photo-modal.style';

const AlbumPhotoModal = ({ setSelectedImg, selectedImg }) => {
    const handleClick = e => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    };

    return (
        <motion.div
            className='backdrop'
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <ImgModal>
                <motion.img
                    src={selectedImg}
                    alt='enlarged pic'
                    initial={{ y: '-100vh' }}
                    animate={{ y: 0 }}
                    className='backdrop-img'
                />
                <RateBlock photoModal={true} />
            </ImgModal>
        </motion.div>
    );
};

export default AlbumPhotoModal;
