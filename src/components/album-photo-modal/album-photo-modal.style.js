import styled, { css } from 'styled-components';
import { getValueFromTheme } from '../../common/utils';

export const ImgModal = styled.div`
    background-color: ${getValueFromTheme('primaryBgColor')};
    padding: 5%;
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
    width: 75%;
    margin: 3% auto;
    overflow: auto;
    max-height: 80%;
    &::-webkit-scrollbar {
        width: 3px;
        background-color: #f9f9fd;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #4a8367;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f9f9fd;
    }
`;

export const AlbumPhotomodal__CSS = styled.div`
    .comment-block {
        @media (max-width: 575px) {
            width: 100%;
            margin-right: 0;
            .user-avatar {
                height: 55px;
                min-width: 30px;
                width: 60px;
                border-width: 2px;
                div {
                    height: 15px;
                    width: 20px;
                    left: 15%;
                    @media (max-width: 330px) {
                        font-size: 8px;
                    }
                }
            }
            .post-author,
            .reply {
                font-size: 0.75rem;
            }
            .post-data {
                font-size: 0.5rem;
            }
            .content {
                font-size: 0.8rem;
            }
            .delete-edit-icons {
                img {
                    width: 13px;
                }
            }
        }
    }
    .reply-ul {
        @media (min-width: 1244px) {
            margin-left: 0;
        }
        @media (min-width: 651px) {
            margin-left: -5%;
        }
        @media (min-width: 330px) and (max-width: 650px) {
            margin-left: -35%;
            width: 120%;
        }
        @media (max-width: 330px) {
            width: 90vw;
            margin-left: -90%;
            .user-avatar {
                div {
                    font-size: 8px;
                }
            }
            .replied-to {
                font-size: 0.6rem;
            }
        }
    }
`;
