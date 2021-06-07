import { CloseContainerDiv } from './close-container.style';

const CloseContainer = ({ event }) => {
    return (
        <CloseContainerDiv onClick={event} className='close-container'>
            <div className='leftright'></div>
            <div className='rightleft'></div>
            <label className='close'>close</label>
        </CloseContainerDiv>
    );
};

export default CloseContainer;
