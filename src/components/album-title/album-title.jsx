import { useState, useEffect, useRef } from 'react';
import CloseContainer from '../close-container';
import settings from '../../assets/settings.svg';

import { Header } from './album-title.style';
import { StyledDiv, StyledText } from '../../common/style/index';
import AlbumSettingsModal from '../album-setting-modal';

const AlbumTitle = ({ description, title, setIsOpen }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [headerLeft, setHeaderLeft] = useState(null);

    const HeaderRef = useRef();
    const resizeHandler = () => {
        setHeaderLeft(HeaderRef.current?.getBoundingClientRect().left);
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
            <Header ref={HeaderRef}>
                <img src={settings} alt='settings icon' onClick={handelClick} />
                <CloseContainer
                    event={() => {
                        setIsOpen(false);
                    }}
                />
            </Header>
            {isOpenModal && (
                <AlbumSettingsModal
                    bottom={60}
                    right={headerLeft}
                    isOpen={isOpenModal}
                    placeholderTitle='New title'
                    placeholderDescription='New description'
                />
            )}
            <StyledText fontSize='1.2rem' mt='5px'>
                {title || 'Photo album'}
            </StyledText>
            <StyledText fontSize='1.6rem'>Your Pictures</StyledText>
            <StyledText>
                {description ||
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
            </StyledText>
        </StyledDiv>
    );
};

export default AlbumTitle;
