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
    let time = `${addZero(d.getHours())}:${addZero(d.getMinutes())}`;
    time += ` ${addZero(d.getDate())}.${addZero(d.getMonth() + 1)}`;
    return `${time}.${d.getFullYear()}`;
};

const addZero = date => {
    return date < 10 ? `0${date}` : `${date}`;
};
