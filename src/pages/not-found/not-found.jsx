import { Error, ErrorTitle, ErrorCode, UnstyledLink } from './not-found.style';
import { Button } from '../../common/style';


const NotFound = () => {
    return (
        <section>
            <Error>
                <ErrorCode>404</ErrorCode>
                <ErrorTitle>
                    Oops! Seems like we can't find this page. Please, check your URL or go back to the home page
                </ErrorTitle>
                <Button mt={3}>
                    <UnstyledLink to={'/'}>Homepage</UnstyledLink>
                </Button>
            </Error>
        </section>
    );
};

export default NotFound;
