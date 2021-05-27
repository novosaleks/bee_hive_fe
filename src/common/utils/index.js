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
    return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
};

export const arrayEquality = (firstArray, secondArray) => {
    if (firstArray.length !== secondArray.length) return false;

    firstArray.sort();
    secondArray.sort();

    return firstArray.every((element, index) => {
        return element === secondArray[index].id;
    });
};
