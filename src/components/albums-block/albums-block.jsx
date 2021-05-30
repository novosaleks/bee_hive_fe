import { useState, useEffect, useRef } from 'react';
import PhotoAlbum from '../photo-album';

import add from '../../assets/add.svg';
import { TitleDiv } from './albums-block.style';
import { StyledDiv, StyledText, DivLine } from '../../common/style/index';
import AlbumSettingsModal from '../album-setting-modal';

const AlbumsBlock = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [headerBottom, setHeaderBottom] = useState(null);

    const HeaderRef = useRef();
    const resizeHandler = () => {
        setHeaderBottom(
            HeaderRef.current?.getBoundingClientRect().bottom +
                window.pageYOffset
        );
    };
    useEffect(() => {
        window.addEventListener('resize', resizeHandler, true);
        resizeHandler();
        return () => {
            window.removeEventListener('resize', resizeHandler, true);
        };
    }, [isOpenModal]);
    const handelClick = () => {
        setIsOpenModal(prevState => !prevState);
    };
    return (
        <StyledDiv>
            <TitleDiv>
                <StyledText> Photo albums</StyledText>
                <img
                    src={add}
                    alt='add new photo album icon'
                    onClick={handelClick}
                    ref={HeaderRef}
                />
            </TitleDiv>
            <DivLine />
            {isOpenModal && (
                <AlbumSettingsModal
                    bottom={headerBottom + 10}
                    isOpen={isOpenModal}
                    albomBlock={true}
                />
            )}
            <PhotoAlbum />
        </StyledDiv>
    );
};

export default AlbumsBlock;
