import { GET_ACTIVE_THEME, setActiveTheme } from '../../graphql/theme';
import { useQuery } from '@apollo/client';
import { THEMES } from '../../common/utils/constants';

import { Wrapper } from './toggle-switch-theme.style';
const ToggleSwitchTheme = () => {
    const { loading, error, data } = useQuery(GET_ACTIVE_THEME);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error: ${error.message}`}</div>;

    const activeTheme = data.activeTheme;
    return (
        <Wrapper className='wrapper'>
            <div className='toggle'>
                <input
                    className='toggle-input'
                    type='checkbox'
                    defaultValue={THEMES[activeTheme]}
                    onChange={e =>
                        e.target.checked === true
                            ? setActiveTheme(THEMES.dark)
                            : setActiveTheme(THEMES.light)
                    }
                />
                <div className='toggle-bg'></div>
                <div className='toggle-switch'>
                    <div className='toggle-switch-figure'></div>
                    <div className='toggle-switch-figureAlt'></div>
                </div>
            </div>
        </Wrapper>
    );
};

export default ToggleSwitchTheme;
