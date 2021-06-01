import { StyledLabel } from '../../common/style';

const RegisterInputBlock = ({ value, children }) => {
    return (
        <fieldset>
            <StyledLabel mb={46}>Enter your {value}</StyledLabel>
            {children}
        </fieldset>
    );
};

export default RegisterInputBlock;
