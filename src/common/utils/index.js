export const getValueFromTheme = key => props => {
    return props.theme[key];
};

export const getValidateMessage = validationType => {
    const validateOptions = {
        required: 'Please, fill this input',
    };

    return validateOptions[validationType];
};

export const formatDate = (date, withoutMin) => {
    const d = new Date(date);

    //get needed format of the date
    const minAndSeconds = `${addZero(d.getHours())}:${addZero(d.getMinutes())}`;
    const dayAndMonth = ` ${addZero(d.getDate())}.${addZero(d.getMonth() + 1)}`;

    let time;

    //add minutes and seconds when we need that
    if (!withoutMin) {
        time = minAndSeconds;
    }

    time ? (time += dayAndMonth) : (time = dayAndMonth);
    return `${time}.${d.getFullYear()}`;
};

const addZero = date => {
    return date < 10 ? `0${date}` : `${date}`;
};
