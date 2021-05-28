import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

import AlbumOpenModal from '../album-open-modal';

import { StyledText } from '../../common/style/index';
import {
    PhotoAlbumDiv,
    PhotoAlbumNameDiv,
    AlbomsBlock,
} from './photo-album.style';

const PhotoAlbum = ({ albumsName }) => {
    const albums = [
        {
            description:
                'Wise men speak because they have something to say; fools because they have to say something.',
            title: 'University',
        },
        {
            description: 'Chop your own wood and it will warm you twice.',
            title: 'Life',
        },
        {
            description:
                'I don’t care what you think about me. I don’t think about you at all',
            title: 'Love',
        },
        {
            description:
                "Work hard to get what you like, otherwise you'll be forced to just like what you get",
            title: 'Work',
        },
        {
            description:
                'In the End, we will remember not the words of our enemies, but the silence of our friends.',
            title: 'Chilhood',
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(null);
    const [title, setTitle] = useState(null);

    const handelClick = (description, title) => {
        setIsOpen(prevState => !prevState);
        setDescription(description);
        setTitle(title);
    };

    return (
        <>
            <AlbomsBlock>
                <Swiper slidesPerView={2} spaceBetween={50}>
                    {albums.map((album, index) => (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <PhotoAlbumDiv
                                content='flex-end'
                                onClick={() =>
                                    handelClick(album.description, album.title)
                                }>
                                <StyledText>{album.description}</StyledText>
                                <PhotoAlbumNameDiv>
                                    <StyledText>{album.title}</StyledText>
                                </PhotoAlbumNameDiv>
                            </PhotoAlbumDiv>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </AlbomsBlock>
            {isOpen && (
                <AlbumOpenModal {...{ description, title, setIsOpen }} />
            )}
        </>
    );
};

export default PhotoAlbum;
