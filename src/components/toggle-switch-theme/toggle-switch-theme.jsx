import { GET_ACTIVE_THEME, setActiveTheme } from '../../graphql/theme';
import { THEMES } from '../../common/utils/constants';

import { Wrapper } from './toggle-switch-theme.style';
import useQueriedData from '../../common/hooks/useQueriedData';

const ToggleSwitchTheme = () => {
    const [data, fallback] = useQueriedData(GET_ACTIVE_THEME);

    if (fallback) {
        return fallback;
    }

    let activeTheme = data.activeTheme;

    return (
        <Wrapper className='wrapper'>
            <div className='toggle'>
                <input
                    className='toggle-input'
                    type='checkbox'
                    checked={THEMES[activeTheme] === THEMES.dark}
                    onChange={e =>
                        e.target.checked === true
                            ? setActiveTheme(THEMES.dark)
                            : setActiveTheme(THEMES.light)
                    }
                />
                <div className='toggle-bg' />
                <div className='toggle-switch'>
                    <div className='toggle-switch-figure' />
                    <div className='toggle-switch-figureAlt' />
                </div>
            </div>
        </Wrapper>
    );
};

export default ToggleSwitchTheme;
