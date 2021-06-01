import { Link } from 'react-router-dom';
import { DivLine, StyledDiv, StyledText } from '../../common/style/index';

const PostAuthorAndData = ({ name, authorId, smallBlock, color, date }) => {
    return (
        <StyledDiv>
            <StyledDiv align='center' direction='row' content='space-between'>
                <StyledText
                    fontSize={smallBlock ? '0.9em' : ['1.2em', '1.6em']}
                    align='left'>
                    <Link to={`/user/${authorId}`}>{name}</Link>
                </StyledText>
                <StyledText
                    fontSize={smallBlock ? '0.7em' : ['0.6em', '1em']}
                    align='right'
                    color={color}>
                    {date}
                </StyledText>
            </StyledDiv>
            <DivLine />
        </StyledDiv>
    );
};

export default PostAuthorAndData;
