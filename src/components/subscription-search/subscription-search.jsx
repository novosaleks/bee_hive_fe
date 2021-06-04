import { useState } from 'react';
import SearchModal from '../search-modal';

import search from '../../assets/search.svg';
import { Img } from './subscription-search.style';

const SubscriptionSearch = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Img
                src={search}
                alt='icon for opening search modal'
                onClick={() => setModalOpen(true)}
            />
            {modalOpen && (
                <SearchModal
                    closeModal={closeModal}
                    placeholder='You want to find ...'
                    contactSearch='subscriptions'
                    title='Find New Friends!'
                />
            )}
        </>
    );
};

export default SubscriptionSearch;
