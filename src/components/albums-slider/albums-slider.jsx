import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { useAlbumContext } from '../../common/context/albumContext';
import {
    PhotoAlbumDiv,
    PhotoAlbumNameDiv,
    AlbomsBlock,
} from './albums-slider.style';

import {
    StyledText,
    SearchContactsTitle,
    SearchContactsDiv,
} from '../../common/style';

const AlbumsSlider = ({ handleClick }) => {
    const { albums } = useAlbumContext();

    return (
        <AlbomsBlock smallAlbum={albums?.length <= 2}>
            {albums?.length !== 0 ? (
                <Swiper slidesPerView={2} spaceBetween={50}>
                    {albums?.map(album => (
                        <SwiperSlide key={album.id} virtualIndex={album.id}>
                            <PhotoAlbumDiv
                                content='flex-end'
                                onClick={() =>
                                    handleClick(
                                        album.description,
                                        album.title,
                                        album.id,
                                    )
                                }>
                                <StyledText className='description'>
                                    {album.description}
                                </StyledText>
                                <PhotoAlbumNameDiv>
                                    <StyledText>{album.title}</StyledText>
                                </PhotoAlbumNameDiv>
                            </PhotoAlbumDiv>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <SearchContactsDiv>
                    <SearchContactsTitle>
                        You do not have any albums yet
                    </SearchContactsTitle>
                </SearchContactsDiv>
            )}
        </AlbomsBlock>
    );
};

export default AlbumsSlider;
