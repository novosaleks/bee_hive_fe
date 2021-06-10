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
    const userLastVisit = new Date(lastVisit);
    const now = new Date();
    if (userLastVisit.getFullYear() !== now.getFullYear()) {
        return false;
    }
    if (now.getMonth() !== userLastVisit.getMonth()) {
        return false;
    }
    if (now.getDate() !== userLastVisit.getDate()) {
        return false;
    }
    if (now.getHours() !== userLastVisit.getHours()) {
        return false;
    }
    if (now.getMinutes() > userLastVisit.getMinutes() + 1) {
        return false;
    }
    return true;
};
