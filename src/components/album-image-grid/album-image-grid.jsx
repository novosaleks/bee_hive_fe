import useFirestore from '../../common/firebase/hooks/useFirestore';

import { motion } from 'framer-motion';
import { ImgGrid } from './album-image-grid.style';

const AlbumImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <ImgGrid>
            {docs &&
                docs.map(doc => (
                    <motion.div
                        key={doc.id}
                        layout
                        whileHover={{ opacity: 1 }}
                        onClick={() => setSelectedImg(doc.url)}>
                        <motion.img
                            src={doc.url}
                            alt='uploaded pic'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        />
                    </motion.div>
                ))}
        </ImgGrid>
    );
};

export default AlbumImageGrid;
