import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import albumContext from '../../common/context/albumContext';
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

const AlbumsSlider = ({ handelClick }) => {
    //  const { albums } = albumContext();

    //DATA EXAMPLE
    const albums = [
        {
            id: '1',
            description:
                'Wise men speak because they have something to say; fools because they have to say something.',
            title: 'University',
            images: [
                {
                    id: '11',
                    url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                },
                {
                    id: '12',
                    url: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
                },
                {
                    id: '13',
                    url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                },
                {
                    id: '14',
                    url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                },
                {
                    id: '15',
                    url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                },
                {
                    id: '16',
                    url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                },
                {
                    id: '17',
                    url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                },
                {
                    id: '18',
                    url: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                },
            ],
        },
        {
            id: '2',
            description: 'Chop your own wood and it will warm you twice.',
            title: 'Life',
            images: [
                {
                    id: '21',
                    url: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
                },
                {
                    id: '22',
                    url: 'https://store-images.s-microsoft.com/image/apps.16633.9007199266243744.2408d723-3c5d-4509-940c-e79e261f5271.01218e52-08a4-4e52-8512-dc93232d59c5?mode=scale&q=90&h=720&w=1280',
                },
                {
                    id: '23',
                    url: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
                },
                {
                    id: '24',
                    url: 'https://store-images.s-microsoft.com/image/apps.16633.9007199266243744.2408d723-3c5d-4509-940c-e79e261f5271.01218e52-08a4-4e52-8512-dc93232d59c5?mode=scale&q=90&h=720&w=1280',
                },
            ],
        },
        {
            id: '3',
            description:
                'I don’t care what you think about me. I don’t think about you at all',
            title: 'Love',
            images: [],
        },
        {
            id: '4',
            description:
                "Work hard to get what you like, otherwise you'll be forced to just like what you get",
            title: 'Work',
            images: [
                {
                    id: '41',
                    url: 'https://store-images.s-microsoft.com/image/apps.16633.9007199266243744.2408d723-3c5d-4509-940c-e79e261f5271.01218e52-08a4-4e52-8512-dc93232d59c5?mode=scale&q=90&h=720&w=1280',
                },
            ],
        },
        {
            id: '5',
            description:
                'In the End, we will remember not the words of our enemies, but the silence of our friends.',
            title: 'Chilhood',
            images: [
                {
                    id: '51',
                    url: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
                },
                {
                    id: '52',
                    url: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
                },
            ],
        },
    ];
    return (
        <AlbomsBlock>
            {albums?.length !== 0 ? (
                <Swiper slidesPerView={2} spaceBetween={50}>
                    {albums?.map(album => (
                        <SwiperSlide key={album.id} virtualIndex={album.id}>
                            <PhotoAlbumDiv
                                content='flex-end'
                                onClick={() =>
                                    handelClick(
                                        album.description,
                                        album.title,
                                        album.id,
                                        album.images
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
