import { Error, ErrorTitle, ErrorCode, UnstyledLink } from './not-found.style';
import { Button } from '../../common/style';


const FalloutScreen = ({ title, description }) => {
    return (
        <section>
            <Error>
                <ErrorCode>{title}</ErrorCode>
                <ErrorTitle>
                    {description}
                </ErrorTitle>
                <Button mt={3}>
                    <UnstyledLink to={'/'}>Homepage</UnstyledLink>
                </Button>
            </Error>
        </section>
    );
};

export default FalloutScreen;
