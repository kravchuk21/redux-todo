import isThisWeek from 'date-fns/isThisWeek'
import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

export const formatDate = (itemDate) => {
    const date = new Date(itemDate);
    if (isThisWeek(date)) {
        return formatDistanceToNow(date, {addSuffix: true, locale: ruLocale});
    } else {
        return format(date, "dd-MM-yyyy");
    }
}