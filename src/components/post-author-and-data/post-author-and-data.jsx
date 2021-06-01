import { DivLine, StyledDiv, StyledText } from '../../common/style/index';

const PostAuthorAndData = props => {
    return (
        <StyledDiv>
            <StyledDiv align='center' direction='row' content='space-between'>
                <StyledText
                    fontSize={props.smallBlock ? '0.9em' : ['1.2em', '1.6em']}
                    align='left'>
                    {props.name}
                </StyledText>
                <StyledText
                    fontSize={props.smallBlock ? '0.7em' : ['0.6em', '1em']}
                    align='right'
                    color={props.color}>
                    {props.date}
                </StyledText>
            </StyledDiv>
            <DivLine />
        </StyledDiv>
    );
};

export default PostAuthorAndData;
