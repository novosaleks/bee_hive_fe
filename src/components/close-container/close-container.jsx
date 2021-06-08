import { CloseContainerDiv } from './close-container.style';

const CloseContainer = ({ event }) => {
    return (
        <CloseContainerDiv onClick={event} className='close-container'>
            <div className='leftright'/>
            <div className='rightleft'/>
            <label className='close'>close</label>
        </CloseContainerDiv>
    );
};

export default CloseContainer;
