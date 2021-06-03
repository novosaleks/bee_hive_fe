import PostFooter from '../../containers/post-footer-container';
import { motion } from 'framer-motion';

import { ImgModal, AlbumPhotomodal__CSS } from './album-photo-modal.style';

const AlbumPhotoModal = ({ setSelectedImg, selectedImg, photoId }) => {
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
                <AlbumPhotomodal__CSS>
                    <PostFooter componentId={photoId} photoModal={true} />
                </AlbumPhotomodal__CSS>
            </ImgModal>
        </motion.div>
    );
};

export default AlbumPhotoModal;