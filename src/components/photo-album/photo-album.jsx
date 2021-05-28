import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper/core';

import 'swiper/swiper-bundle.css';

import { StyledDiv, StyledText } from '../../common/style/index';
import {
    PhotoAlbumDiv,
    PhotoAlbumNameDiv,
    AlbomsBlock,
} from './photo-album.style';

const PhotoAlbum = ({ albumName }) => {
    const albums = [
        {
            describtion:
                'Wise men speak because they have something to say; fools because they have to say something.',
            title: 'University',
        },
        {
            describtion: 'Chop your own wood and it will warm you twice.',
            title: 'Life',
        },
        {
            describtion:
                'I don’t care what you think about me. I don’t think about you at all',
            title: 'Love',
        },
        {
            describtion:
                "Work hard to get what you like, otherwise you'll be forced to just like what you get",
            title: 'Work',
        },
        {
            describtion:
                'In the End, we will remember not the words of our enemies, but the silence of our friends.',
            title: 'Chilhood',
        },
    ];
    return (
        <AlbomsBlock>
            <Swiper slidesPerView={2} spaceBetween={50}>
                {albums.map((album, index) => (
                    <SwiperSlide key={index}>
                        <PhotoAlbumDiv content='flex-end'>
                            <StyledText>{album.describtion}</StyledText>
                            <PhotoAlbumNameDiv>
                                <StyledText>{album.title}</StyledText>
                            </PhotoAlbumNameDiv>
                        </PhotoAlbumDiv>
                    </SwiperSlide>
                ))}
            </Swiper>
        </AlbomsBlock>
    );
};

export default PhotoAlbum;
