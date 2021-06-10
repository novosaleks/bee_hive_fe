export const getValueFromTheme = key => props => {
    return props.theme[key];
};

export const formatDate = (date, withoutMin) => {
    const d = new Date(date);

    //get needed format of the date
    const minAndSeconds = `${addZero(d.getHours())}:${addZero(d.getMinutes())}`;
    const dayAndMonth = ` ${addZero(d.getDate())}.${addZero(d.getMonth() + 1)}`;

    //add minutes and seconds when we need that
    let time = !withoutMin ? `${minAndSeconds}${dayAndMonth}` : dayAndMonth;

    return `${time}.${d.getFullYear()}`;
};

const addZero = date => {
    return date < 10 ? `0${date}` : `${date}`;
};

export const isOnline = lastVisit => {
    if (!lastVisit) {
        return false;
    }
    const now = new Date();
    if (lastVisit.getFullYear() !== now.getFullYear()) {
        return false;
    }
    if (now.getMonth() !== lastVisit.getMonth()) {
        return false;
    }
    if (now.getDate() !== lastVisit.getDate()) {
        return false;
    }
    if (now.getHours() !== lastVisit.getHours()) {
        return false;
    }
    if (now.getMinutes() > lastVisit.getMinutes() + 1) {
        return false;
    }
    return true;
};
