import SearchUser from '../search-users';

import {
    ModalDialog,
    ModalContent,
    ModalHeader,
    ModalBody,
} from './search-modal.style';
import { DivLine } from '../../common/style';

const SearchModal = ({
    placeholder,
    handleClick,
    contactSearch,
    title,
    closeModal,
}) => {
    const handleClickModal = e => {
        if (e.target.classList.contains('modal-bg')) {
            closeModal();
        }
    };
    return (
        <ModalDialog className='modal-bg' onClick={e => handleClickModal(e)}>
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <DivLine backgroundColor='#E8E6E6' />
                <ModalBody overflow='auto'>
                    <SearchUser
                        {...{ placeholder, handleClick, contactSearch }}
                    />
                </ModalBody>
            </ModalContent>
        </ModalDialog>
    );
};

export default SearchModal;
