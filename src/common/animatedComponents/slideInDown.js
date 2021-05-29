import { Transition } from 'react-transition-group';

const transitionStyles = {
    entering: { top: 0 },
    entered: { top: 0 },
    exiting: { top: '-50%' },
    exited: { top: '-100%' },
};

const SlideInDown = ({ in: inProp, children, animationDuration }) => {
    const defaultStyle = {
        position: 'fixed',
        zIndex: 9,
        left: 0,
        right: 0,
        top: 0,
        transition: `all ${animationDuration}ms`,
    };

    return (
        <Transition in={inProp} timeout={100}>
            {state => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                }}>
                    {children}
                </div>
            )}
        </Transition>
    );
};

export default SlideInDown;
