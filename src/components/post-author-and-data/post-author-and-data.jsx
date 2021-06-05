import { Link } from 'react-router-dom';

import { PostInfo } from './post-author-and-data.style';
import { DivLine, StyledDiv, StyledText } from '../../common/style/index';

const PostAuthorAndData = ({ name, authorId, smallBlock, color, date }) => {
    return (
        <StyledDiv>
            <StyledDiv align='center' direction='row' content='space-between'>
                <PostInfo
                    fontSize={smallBlock ? '0.9em' : ['1.2em', '1.6em']}
                    align='left'
                    className='post-author'>
                    <Link to={`/user/${authorId}`}>{name}</Link>
                </PostInfo>
                <PostInfo
                    fontSize={smallBlock ? '0.7em' : ['0.6em', '1em']}
                    align='right'
                    color={color}
                    className='post-data'>
                    {date}
                </PostInfo>
            </StyledDiv>
            <DivLine />
        </StyledDiv>
    );
};

export default PostAuthorAndData;
