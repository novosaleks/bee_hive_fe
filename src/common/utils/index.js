export const getValueFromTheme = key => props => {
    return props.theme[key];
};

export const getValidateMessage = validationType => {
    const validateOptions = {
        required: 'Please, fill this input',
    };

    return validateOptions[validationType];
};

export const formatDate = date => {
    const d = new Date(date);
    return `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`;
};
