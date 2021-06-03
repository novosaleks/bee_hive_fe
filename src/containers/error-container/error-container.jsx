import FalloutScreen from '../../pages/fallout-screen';

const ErrorContainer = ({ type }) => {
    const pageTypes = {
        'not found': {
            title: '404',
            description: 'Oops! Seems like we can\'t find this page. Please, check your URL or go back to the homepage',
        },
        'error': {
            title: 'Oops',
            description: 'Something went wrong. Reload this page or go back to the homepage',
        },
    };

    return <FalloutScreen {...pageTypes[type]} />;
};

export default ErrorContainer;
