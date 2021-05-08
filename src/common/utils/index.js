export const getValueFromTheme = key => props => {
    return props.theme[key];
};

export const getValidateMessage = validationType => {
    const validateOptions = {
        required: 'Please, fill this input',
    };

    return validateOptions[validationType];
};
