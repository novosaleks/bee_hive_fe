import { motion } from 'framer-motion';
import { ImgGrid } from './album-image-grid.style';

import { StyledText } from '../../common/style';

const AlbumImageGrid = ({ setSelectedImg, albumId, images }) => {
    const displayImg =
        images &&
        images.map(image => (
            <motion.div
                key={image.id}
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedImg(image.url)}>
                <motion.img
                    src={image.url}
                    alt='uploaded pic'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                />
            </motion.div>
        ));
    return (
        <ImgGrid>
            {images.length !== 0 ? (
                displayImg
            ) : (
                <StyledText>You do not have any photo here...</StyledText>
            )}
        </ImgGrid>
    );
};

export default AlbumImageGrid;
