import {
    FormContainer,
    SettingsWrapper,
    SettingTitle,
} from './settings-container.style';
import Title from '../../components/title';

const SettingsContainer = ({ children, title }) => {
    return (
        <SettingsWrapper>
            <Title>
                <SettingTitle>{title}</SettingTitle>
            </Title>
            <FormContainer>{children}</FormContainer>
        </SettingsWrapper>
    );
};

export default SettingsContainer;
